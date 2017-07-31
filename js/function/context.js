/**
 * Created by xuhuanhuan on 2017/7/31.
 */

console.log(a);
var a=100;


function1('zhangsan');
function function1(name) {
    console.log(this);
    console.log(arguments);
    age = 20;
    console.log(name,age);
    var age;   //声明提升

    function2(100);
    function function2(num){         //
       console.log(num);
    }
}