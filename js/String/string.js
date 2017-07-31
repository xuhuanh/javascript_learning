/**
 * Created by xuhuanhuan on 2017/4/9.
 */

var s = "hello,world";

s.length;

s[0];

s[0]= "x";      //不会做任何改变

s.toUpperCase();
s.toLowerCase();

s.indexOf('world');     //7
s.substring(0,5);       // hello
s.substring(7);       //从索引7开始到结束，返回'world'

var random = Math.random();
var random = random + '00000000';
var random = random.slice(0,10);
console.log(random);