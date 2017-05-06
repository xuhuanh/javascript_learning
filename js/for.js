/**
 * Created by xuhuanhuan on 2017/4/9.
 */

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}