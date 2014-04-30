
var a = {
    'click': function(){
        console.log('aa');
    }
};

var mm = {
    click: function(){console.log('56');}
}

exports.init = function(){//注释
    click();
}

function b(){
    this.a = "";
    this.init = function(){
        this.a = a;
    }
}

$('.search').on('click', function(){
    console.log('search click');
    var c = new b();
    c.init();
});

$('body').delegate('a', 'click', function(e){
    e.preventDefault();
});

this.init = function(){//不对齐的写法，并且有注释
    if(true){
        if(true){
            console.log('df');
}}}

var jjj = {
    click: function(){if(true){console.log('56');}},//整个function都在一行内
    ok: 'df'
}



/****************直接声明的function，可通过funcDeclaration来配置是否加try/catch**********************/
function click(){
    alert('click');
    console.log('click');
}

function initliaze(){
    click();
}