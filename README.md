## 简介

该npm包是一个[F.I.S](http://fis.baidu.com)的插件，作用是在js文件编译时自动的在function内部加上try/catch，并且catch部分代码如下：其中alog为[百度前端统计框架](https://github.com/fex-team/alog).
    
    catch(e){
        if(typeof alog != 'undefined'){  //
            alog('exception.fire', 'catch', {
                msg: e.message,
                path: 'common:common/widget/slide/slide.js', //编译前的js文件路径
                ln: 25 //编译前该function的结束行号
            });
        }
    }

## 使用效果

示例1：
    
    //编译前
    var slide = {
        init: function(name){
            this.name = name;
        }
    }

    //编译后
    var slide = {
        init: function(name){try{
            this.name = name;
        }catch(e){.........}}
    }
