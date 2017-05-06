/**
 * Created by xuhuanhuan on 2017/4/9.
 */

function abs(x) {

    arguments.length;

    if (typeof x !== 'number') {
        throw 'Not a number';
    }

    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

var abs2 = function (x) {

    if (typeof x !== 'number') {
        throw 'Not a number';
    }

    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

// // ES6标准引入了rest参数，
//
// function foo(a, b, ...rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }
//
// foo(1, 2, 3, 4, 5);
// // 结果:
// // a = 1
// // b = 2
// // Array [ 3, 4, 5 ]
//
// foo(1);
// // 结果:
// // a = 1
// // b = undefined
// // Array []


var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {        //绑定到对象上的函数称为方法
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age; // function xiaoming.age()
xiaoming.age(); // 今年调用是25,明年调用就变成26了
