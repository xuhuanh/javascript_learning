/**
 * Created by xuhuanhuan on 2017/4/7.
 */

// var objArray = new Array(3);
// objArray.length;     //3
// objArray.length = 6;      //6
// objArray[0] = "q";
// objArray[7] = "7"          //长度为8
//
// objArray.indexOf("q");       //返回元素的索引
//
// objArray.concat(item1,item2); //将参数列表连接到objArray的后面形成一个新的数组并返回，原有数组不受影响
// objArray.join(separator);  //以separator指定的字符作为分割符，将数组转换为字符串，当seperator 为逗号时，其作用和toString()相同。
// objArray.pop();     //就是弹出数组的最后一个元素
// objArray.push();     //将参数添加到数组的结尾
// objArray.reverse();  //将数组中的元素反转排列。这个操作是在原有数组上经行操作，同时也返回数组本身
// objArray.shift();    //移去数组的第一个元素，并返回这个元素的值
// objArray.unshift();   //
// objArray.slice(start,end);  //返回数组对象的一个子集，索引从start开始（包括 start），到end结束（不包括end),原有数组不受影响。
// // 如：[1,2,3,4,5,6].slice(1,4)将得到[2,3,4]。当 start或者end为负数时，则使用他们加上length后地值。如：[1,2,3,4,5,6].slice(-4,-1)将得到[3,4,5]。如果end小于等于start，将返回空数组。
// objArray.slice(6);        //从索引6开始到结束
//
// objArray.sort(comparefn);   //根据comparefn定义的大小比较函数，对一个数组进行排序。
//                             // 函数comparefn必须接受两个参数element1,element2,
//                             // 如果需要需要element1排在element2之前，应该返回一个负数；
//                             //如果需要element1排在element2之后，应该返回一个正数，
//                             // 如果两个数平等对待（即保持原有顺序）则返回０。当省略comparefn时，则元素按照字典顺序排列。
//                             // 如：对定义的比较函数cmp: function cmp(e1,e2){return e1-e2;}则[3,4,2,7].sort(cmp)将得到[2,3,4,7].
//
// objArray.splice(2,0,"1","2"); //从索引2处往后删除0个元素，并插入"1"和"2"






var arr = [1,3,2];
arr.forEach(function (item,index) {
    console.log(index,item);
});

var result = arr.every(function (item,index) {
    //用来判断所有的数组元素，都满足一个条件
    if(item<4){
        return true;
    }
});
console.log(result);

var result2 = arr.some(function (item,index) {
    //用来判断所有的数组元素，只要有一个满足条件即可
    if(item<2){
        return true;
    }
});
console.log(result2);

var arr2 = arr.sort(function (a,b) {
    //从小到大排序
    return a-b;

    //从大到小排序
    return b-a;
});
console.log(arr2);

var arr3 = arr.map(function (item,index) {
    //将元素重新组装并返回
    return '<b>'+item + '</b>';
});
console.log(arr3);

var arr4 = arr.filter(function (item,index) {
    //过滤
    if(item>1){
        return true;
    }
});
console.log(arr4);







