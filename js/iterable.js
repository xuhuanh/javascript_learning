/**
 * Created by xuhuanhuan on 2017/4/9.
 */

// 遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。为了统一集合类型，
// ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。
// 具有iterable类型的集合可以通过新的for ... of循环来遍历。

// var a = ['A', 'B', 'C'];
// var s = new Set(['A', 'B', 'C']);
// var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// for (var x of a) { // 遍历Array
//     alert(x);
// }
// for (var x of s) { // 遍历Set
//     alert(x);
// }
// for (var x of m) { // 遍历Map
//     alert(x[0] + '=' + x[1]);
// }


