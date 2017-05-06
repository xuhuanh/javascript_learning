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

