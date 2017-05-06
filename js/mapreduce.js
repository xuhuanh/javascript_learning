/**
 * Created by xuhuanhuan on 2017/4/9.
 */

function pow() {
    return x*x;
}

var arr =[1,2,3,4,5,6];

arr.map(pow);   //[1, 4, 9, 16, 25, 36, 49, 64, 81]

arr.map(String);  // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

arr.reduce(function (x,y) {
    return x+y;                 //数组求和
});


arr.reduce(function (x,y) {
    return x*10+y;             //字符串转化为整数
})

arr.filter(function (x) {
    return x%2 !==0;          //过滤掉偶数
});

arr.filter(function (s) {
    return s && s.trim();      //IE9以下版本没有 trim（）方法
});


//回调函数
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

//filter 元素去重

var r,arr =['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

r = arr.filter(function (element,index,self) {
    return self.indexOf(element) ===index ;
});   //去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。

alert(r.toString());
