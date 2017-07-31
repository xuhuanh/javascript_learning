/**
 * Created by xuhuanhuan on 2017/7/31.
 */

function Foo(name) {
    this.name=name;         //构造函数内执行
    console.log(this);
}

var f =new Foo('zhangsan');

var obj = {
    name:'A',
    printName:function () {
        console.log(this.name);
        console.log(this);
    }
}

obj.printName();

function fn() {
    console.log(this);     //this === window
}
fn();

//call apply bind

function fn1(name,age) {
    console.log(this);
}

fn1.call({x:100},'zhangsan',20);       //this === {x:100}
fn1.apply({x:100},['zhangsan',20]);    //this === {x:100}

var fn2 = function(name,age) {
    console.log(this);
}.bind({y:200});

fn2('zhangsan',20);
