/**
 * Created by xuhuanhuan on 2017/4/9.
 */

var quickSort = function (arr) {      //定义一个quickSort函数，它的参数是一个数组。

    if (arr.length<=1){return arr;}     //然后，检查数组的元素个数，如果小于等于1，就返回。

    var pivotIndex = Math.floor(arr.length/2);  //选择"基准"（pivot），

    var pivot = arr.splice(pivotIndex,1)[0];    //并将其与原数组分离，

    var left = [];
                                   //再定义两个空数组，用来存放一左一右的两个子集。
    var right = [];

    for (var i=0;i<arr.length;i++){      //开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集。
        if (arr[i]<pivot){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivot],quickSort(right));  //使用递归不断重复这个过程，就可以得到排序后的数组。
}