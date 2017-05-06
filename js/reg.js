/**
 * Created by xuhuanhuan on 2017/5/4.
 */


//判断字符串是否是这样组成的，第一个必须是字母，后面可以是字母、数字、下划线，总长度为5-20

var  reg =/^[a-zA-Z][a-zA-Z_0-9]{4,19}$/;

reg.test("a1a__a1a__a1a__a1a__");

//利用正则匹配截取字符串

var str = "abcdefg";
if(/efg/.test(str)){
    var efg = str.substr(str.indexOf("efg"),3);
    alert(efg);
}