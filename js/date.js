/**
 * Created by xuhuanhuan on 2017/4/3.
 */


document.write("以下是demo显示时间");

function displayDate(){
    var length,date;
    length = 3;
    date = Date();
    document.getElementById("demo").innerHTML=date;
    window.alert("时间不能自动刷新");
    window.alert(length);
    console.log(666+"xhh");
    document.getElementById("ap").innerHTML="你好 Dolly";
    document.getElementById("aDiv").innerHTML="你最近\怎" +
        "么样?";
}
