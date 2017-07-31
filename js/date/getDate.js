/**
 * Created by xuhuanhuan on 2017/7/31.
 */


function formatDate(dt) {
    if(!dt){
        dt= new Date();
    }

    var year = dt.getFullYear();
    var month = dt.getMonth()+1;
    var date = dt.getDate();

    if(month<10){
       month = '0'+month;   //不满10+'0'
    }

    if(date<10){
        date = '0' + date;  //强制类型转换
    }

    return year+'-'+month+'-'+date;
}

var dt =new Date();
var formatDate1 = formatDate(dt);
console.log(formatDate1);

