## 简介

该npm包是一个[F.I.S](https://fis.baidu.com)的插件，作用是在js文件编译时自动的在function内部加上try/catch，并且catch部分代码如下：
    
    catch(e){
        if(typeof alog != 'undefined'){
            alog('exception.fire', 'catch', {
                msg: 'e.message',
                path: 'common:common/widget/slide/slide.js' //编译前的js文件路径
                ln: 25 //编译前该function的结束行号
            });
        }
    }
    