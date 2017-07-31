/**
 * Created by xuhuanhuan on 2017/7/31.
 */

function forEach(obj,fn) {
    var key;
    if(obj instanceof Array){
        obj.forEach(function (item,index) {
            fn(index,item);
        })
    }else {
        for (key in obj){

            if(obj.hasOwnProperty(key)){
                fn(key,obj[key]);
            }
        }
    }
}

var arr = [11,2,3];
forEach(arr,function (index,item) {
    console.log(index,item);
});

var obj = {x:100,y:200};
forEach(obj,function (key,value) {
    console.log(key,value);
});