/**
 * Created by xuhuanhuan on 2017/7/31.
 */

//无块级作用域

var a;
if (true){
    a=100;
}

// console.log(a);

function F1() {
    var b=200;

    function F2() {
        // var c= 300;
        // console.log(a);  //自由变量
        // console.log(b);   //自由变量
        // console.log(c);
    }
    F2();

    return function () {    //闭包函数
        console.log(b);     //自由变量，去其父作用域找(其定义时)
    }
}
var f1 = F1();
var b=300;
// f1();        //200

function F3(fn) {
    var b=400;
    fn();
}
F3(f1);        //200


// 10个a 标签代码演示
var i;
for(i=0;i<10;i++){
    (function (i) {
        var a=document.createElement('a');
        a.innerHTML = i+'<br>';
        a.addEventListener('click',function (e) {
            e.preventDefault();
            alert(i);
        });
        document.body.appendChild(a);
    })(i);

}

//闭包的实际用途
function isFirstLoad() {
    var _list = [];
     return function (id) {
         if (_list.indexOf(id) >= 0) {
             return false;
         } else {
             _list.push(id);
             return true;
         }
     }
}
var firstLoad = isFirstLoad();
firstLoad(10);       //true
firstLoad(10);       //fause
firstLoad(20);       //true
