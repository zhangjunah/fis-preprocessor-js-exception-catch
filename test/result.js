
var a = {
    'click': function(){try{
        console.log('aa');
    }catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:5});}}}
};

var mm = {
    click: function(){try{console.log('56');}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:9});}}}
}

var exports = window;
exports.init = function(){try{//注释
    click();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:15});}}}

function b(){
    this.a = "";
    this.init = function(){try{
        this.a = a;
    }catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:21});}}}
}

$('.search').on('click', function(){try{
    console.log('search click');
    var c = new b();
    c.init();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:28});}}});

$('body').delegate('a', 'click', function(e){try{
    e.preventDefault();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:32});}}});

this.init = function(){try{//不对齐的写法，并且有注释
    if(true){
        if(true){
            console.log('df');
}}}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:38});}}}

var jjj = {
    click: function(){try{if(true){console.log('56');}}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:41});}}},//整个function都在一行内
    ok: 'df'
}

jjj.init = function()//左括号换行了
{try{
    this.init();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:48});}}}

var hello = {
    click: function()
        {try{

        }catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:54});}}},
    notHit: function()
        {

        }
}

/****************直接声明的function，可通过funcDeclaration来配置是否加try/catch**********************/
function click(){try{
    alert('click');
    console.log('click');
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:65});}}}

function initliaze(){try{
    click();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:69});}}}


function clickheool()
{try{

}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:75});}}}


/*****************bad case*************************/
var iii = function(){try{initliaze();}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:79});}}}