/**
 * Created by xuhuanhuan on 2017/4/9.
 */

//判断一个字符串中出现次数最多的字符，统计这个次数
var str = "aaaaaaabbbcdde";

var obj = {};   //将字符串的字符保存在一个hash table中，key是字符，value是这个字符出现的次数

for(var i=0;i<str.length;i++){
    var key= str[i];

    if(obj[key]){
        obj[v].count = obj[v].count+1;
    }else
    {
        obj[v] = {};
        obj[v].count = 1;
        obj[v].value = v;

    }

    var max = -1;
    var max_key= "";
    var key;
    for(key in obj){
        //打印出现最多的值和它出现的次数
        if(max<obj[key]){
            max = obj[key];
            max_key = key;
        }

        alert("max:"+max+"max_key:"+max_key);

        //打印每个值和它出现的个数
        document.write(obj[key].value + '=' + obj[key].count+' ');
    }
}


function trim(str) {
    if(str && typeof str ==="string"){
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
    }
}