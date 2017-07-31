/**
 * Created by xuhuanhuan on 2017/3/16.
 */
console.log(100);
setTimeout(function () {
    console.log(200);
},1000);
console.log(300);

console.log('start');
$.get('/test-test.json',function (data) {
    console.log(data);
});
var img=document.createElement('img');
img.onerror = function () {
    console.log('error');
};
img.onload = function () {
    console.log('load');
};
img.src='imag.jpg';
console.log('end');
var btn1 = document.getElementById("btn1");
btn1.addEventListener('click',function () {
    console.log('clicked')
});




console.log(1);
setTimeout(function () {
    console.log(2)
},0);
console.log(3);
setTimeout(function () {
    console.log(4);
},1000);
console.log(5);