/**
 * Created by xuhuanhuan on 2017/7/27.
 */

typeof undefined;   //undefined
typeof 'abc';       //string
typeof 123;         //number
typeof true;        //boolean
typeof {};          //object
typeof [];          //object
typeof null;        //object
typeof console.log; //function



console.log(typeof undefined);
console.log(typeof 'abc');
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof console.log);
console.log(100+'10');

console.log(10 && 0);
console.log('' || 'abc');
console.log(!window.abc);

//判断一个变量是会被当做 true 或者 false
var a= 100;
console.log(!!a);


