'use strict';

var esprima = require('./lib/esprima.js');

//遍历整个语法解析树
function traversal(node, func) {
    func(node);
    for (var key in node) {
        if (node.hasOwnProperty(key)) {
            var child = node[key];
            if (typeof child === 'object' && child !== null) {
                if (Array.isArray(child)) {
                    child.forEach(function(node) {
                        traversal(node, func);
                    });
                } else {
                    traversal(child, func);
                }
            }
        }
    }
}

//添加try部分
function addTry(str, col) {
    return str.slice(0, col + 1) + "try{" + str.slice(col + 1);
}

//添加catch部分
function addCatch(str, filepath, line, col, inOneLine) {
    var _strCatch = "}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message || e.description,path:'" + filepath + "',ln:" + line + "});}}";
    //funtion整个在一行内，需要加上 "try{" 所占的4个位置
    if(inOneLine){
        col = col + 4;
    }
    return str.slice(0, col) + _strCatch + str.slice(col);
}

//判断是否命中
function isHit(strFunHead, conf){
    conf = conf || {};
    var include = conf.include || null, 
        exclude = conf.exclude || null,
        toString = Object.prototype.toString;

    return !(exclude && toString.apply(exclude) == '[object RegExp]' && exclude.test(strFunHead)) && 
        (include && toString.apply(include) == '[object RegExp]' && include.test(strFunHead));
}

function modifyFunction(arrFile, node, loc, filepath, conf) {
    var _startLine = loc.start.line - 1,
        _startCol = loc.start.column,
        _endLine = loc.end.line - 1,
        _endCol = loc.end.column - 1,
        _strHead = arrFile[_startLine],
        _strEnd = arrFile[_endLine];

    //排除已含有try/catch
    if (/try\s*\{/.test(_strHead) || /catch\s*\(.*\)\s*\{/.test(_strEnd)) {
        return false;
    }

    //判断是否命中function名
    var hit = false;
    if(node.type == "FunctionDeclaration" && node.id && isHit(node.id.name, conf.func)){//直接函数声明，使用函数名来判断
        hit = true;
    }
    if(node.type == "FunctionExpression"){//匿名函数
        if(isHit(_strHead, conf.func)){//this.init = function(){},使用函数的第一行来判断关键字
            hit = true;
        }
        /* 支持这种写法：
         *  this.init = function()
         *  {
         *  }
         */
        else if(_strHead.replace(/[\s\t]/g, '') == "{" && _startLine >= 1 && isHit(arrFile[_startLine - 1], conf.func)){
            hit = true;
        }
        
    }
    if(!hit) return false;

    arrFile[_startLine] = addTry(arrFile[_startLine], _startCol);
    arrFile[_endLine] = addCatch(arrFile[_endLine], filepath, loc.end.line,  _endCol, _startLine == _endLine);
}

module.exports = function(content, file, conf) {
    conf = conf || {};
    //fisp中  file.rExt:文件的后缀名  file.id:文件名
    if (!isHit(file.id, conf.file) || file.rExt !== '.js') {//判断是否命中文件
        return content;
    }

    var arrContent = content.split('\n');
    try {
        var _parse = esprima.parse(content, {
            loc: true //注明需要语法解析后的line、column
        });

        //是否对直接的函数声明也需要加try/catch： 如 function init(){ ...... }
        var funcDeclaration = conf.funcDeclaration;

        traversal(_parse, function(node) {
            if (node.type == "FunctionExpression" || (node.type == "FunctionDeclaration" && funcDeclaration)) {
                modifyFunction(arrContent, node, node.body.loc, file.id, conf);
            }
        });
    } catch (e) {}
    return arrContent.join('\n');
};