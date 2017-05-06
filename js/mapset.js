/**
 * Created by xuhuanhuan on 2017/4/9.
 */

// Map和Set是ES6标准新增的数据类型

// Map是一组键值对的结构，具有极快的查找速度。

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);     //修改分数
m.get('Michael'); // 95

m.has('Bob');      //true

m.delete('Bob');

// Set和Map类似，也是一组key的集合，
// 但不存储value。由于key不能重复，所以，在Set中
// ，没有重复的key。

var s1 = new Set();
var s2 = new Set([1,2,3]);

var s = new Set([1, 2, 3, 3, '3']); //自动过滤重复元素
s; // Set {1, 2, 3, "3"}

s.add(4);

s.delete(3);