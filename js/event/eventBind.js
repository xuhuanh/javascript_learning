/**
 * Created by xuhuanhuan on 2017/8/1.
 */


//事件绑定普通方法
var btn = document.getElementById('btn1');
btn.addEventListener('click',function (event) {
    console.log('clicked');
});


//通用事件绑定方法
function bindEvent(elem,type,fn) {
    elem.addEventListener(type,fn);
}

var a = document.getElementById('link1');
bindEvent(a,'click',function (e) {
    e.preventDefault();  //阻止默认行为
    alert('clicked');
});


//完善通用事件绑定方法

function bindEventPrefect(elem,type,selector,fn) {
    if(fn == null){
        fn = selector;
        selector = null;
    }

    elem.addEventListener(type,function (e) {
        var target;
        if(selector){
            target = e.target;
            if(target.matches(selector)){    //是否符合目标函数
                fn.call(target,e);
            }
        }else {
            fn(e);
        }
    });
}

//使用代理
var div3 = document.getElementById('div3');
bindEventPrefect(div3,'click','a',function (e) {
    console.log(this.innerHTML);
});

//不使用代理
var a1 = document.getElementById('a1');
bindEventPrefect(a1,'click',function (e) {
    console.log(a1.innerHTML);
});