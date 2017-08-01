/**
 * Created by xuhuanhuan on 2017/8/1.
 */


var p1 = document.getElementById('p1');
var body = document.body;
bindEvent(p1,'click',function(e){
    e.stopPropagation();     //阻止冒泡
    alert('激活');
});

bindEvent(body,'click',function (e) {
    alert('取消');
});