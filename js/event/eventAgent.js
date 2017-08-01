/**
 * Created by xuhuanhuan on 2017/8/1.
 */

var div3 = document.getElementById('div3');
div3.addEventListener('click',function (e) {
    var target = e.target;
    if(target.nodeName === 'A'){      //节点名称
        alert(target.innerHTML);
    }
});
