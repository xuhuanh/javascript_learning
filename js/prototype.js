/**
 * Created by xuhuanhuan on 2017/3/18.
 */
var F=function () {}
    Object.prototype.a = function () {};
    Function.prototype.b = function () {};
    var f=new F();
f.a();
f.b();

var a = new Function("x","y","return x+y");
