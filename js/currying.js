/**
 * Created by xuhuanhuan on 2017/4/7.
 */

function currying(fn) {

    var slice = Array.prototype.slice,
        _args = slice.call(arguments,1);
    return function () {
        var _inargs = slice.call(arguments);
        return fn.apply(null,_args.concat(_inargs));
    };
}


//实现简单的sum(2)(3)  = 5;
function sum() {
    if (arguments.length>1){return arguments[0]*arguments[1];}
    else{
        var a=arguments[0];
        return function (x) {
            return a*x;
        }
    }
}


//如果有n个参数，则需要使用以下的curry函数
function curry(fn,argLen,currArgs) {
    return function () {
        var args = [].slice.call(arguments);  //首次调用未提供最好一个参数

        if (currArgs!==undefined){args = args.concat(currArgs) ;}

        //递归出口
        if(args.length ==argLen){
            return fn.apply(this,args);
        }
        else {
            return curry(fn,argLen,args);
        }

    }
}

function sum2(a,b) {
    return a+b;
}

var sum2 = curry(sum2,2);
console.log(sum2(2,3));
console.log(sum2(2)(3));