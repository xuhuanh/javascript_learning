/**
 * Created by xuhuanhuan on 2017/4/9.
 */

var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    'middle-school': 'No.1 Middle School',
    score: null
};


xiaoming.name;
xiaoming['middle-school'];

xiaoming.age = 18;      //新增

delete xiaoming.age;      //删除某一属性

'name' in xiaoming;       //true

'grade' in xiaoming;       //false

'toString' in xiaoming;   //ture   继承到的

xiaoming.hasOwnProperty('toString');  //fasle

var key ;
for(key in xiaoming){
    //筛选出此对象自身的属性，而不是从原型链中继承而来
    if(xiaoming.hasOwnProperty(key)){
        console.log(key,xiaoming[key]);
    }
}