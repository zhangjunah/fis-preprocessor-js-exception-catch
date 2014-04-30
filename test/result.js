
var a = {
    'click': function(){try{
        console.log('aa');
    }catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:5});}}}
};

var mm = {
    click: function(){try{console.log('56');}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:9});}}}
}

exports.init = function(){try{//注释
    click();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:14});}}}

function b(){
    this.a = "";
    this.init = function(){try{
        this.a = a;
    }catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:20});}}}
}

$('.search').on('click', function(){try{
    console.log('search click');
    var c = new b();
    c.init();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:27});}}});

$('body').delegate('a', 'click', function(e){try{
    e.preventDefault();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:31});}}});

this.init = function(){try{//不对齐的写法，并且有注释
    if(true){
        if(true){
            console.log('df');
}}}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:37});}}}

var jjj = {
    click: function(){try{if(true){console.log('56');}}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:40});}}},//整个function都在一行内
    ok: 'df'
}



/****************直接声明的function，可通过funcDeclaration来配置是否加try/catch**********************/
function click(){try{
    alert('click');
    console.log('click');
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:50});}}}

function initliaze(){try{
    click();
}catch(e){if(typeof alog != 'undefined'){alog('exception.fire','catch',{msg:e.message,path:'./origin.js',ln:54});}}}