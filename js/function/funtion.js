/**
 * Created by xuhuanhuan on 2017/7/28.
 */

function Foo(name,age) {
    this.name = name;
    this.age = age;
    this.class='class-1';
}
Foo.prototype.alertName =function () {
    alert(this.name);
}
var f=new Foo('zhangsan',20);
f.printName = function () {
    console.log(this.name);
}
f.printName();
f.alertName();
f.toString();   //f.__proto__.__proto__ 中查找

var item;
for(item in f){
    if(f.hasOwnProperty(item)){    //屏蔽来自原型的属性
        console.log(item);
    }
}

var obj ={};
obj.a=100;
var arr = [];
arr.a=100;
function fn () {
}
fn.a=100;

console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
console.log(fn.prototype);

console.log(obj.__proto__ === Object.prototype);


//原型链继承的一个例子
function Animal(){
    this.eat =function () {
        console.log('animal eat');
    }
}

function Dog() {
    this.bark =function () {
        console.log('dog bark');
    }
}

Dog.prototype =new Animal();
var hashiqi = new Dog();

//原型继承实例 ，封装DOM查询

function Elem(id){
    this.elem = document.getElementById(id);
}
Elem.prototype.html = function (val) {
    var elem = this.elem;
    if(val){
        elem.innerHTML = val;
        return this;             //链式操作
    }else {
        return elem.innerHTML;
    }
}
Elem.prototype.on = function (type,fn) {
    var elem = this.elem;
    elem.addEventListener(type,fn);
    return this;
}

var div1 = new Elem('div1');
// div1.html('<p>hello world!</p>');
// div1.on('click',function () {
//     alert('clicked');
// });
//由于return this，可以进行如下链式操作
div1.html('<p>hello world!</p>').on('click',function () {
    alert('clicked');
}).html('<p>hello javascript</p>');