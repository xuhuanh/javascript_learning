/**
 * Created by xuhuanhuan on 2017/8/1.
 */

var xhr = new XMLHttpRequest();
xhr.open("GET","/api",false);    //false表示要使用到异步
xhr.onreadystatechange = function () {
    // 此函数异步执行
    if(xhr.readyState == 4){   // 4 表示请求完成
        if(xhr.status == 200){  //200 表示返回成功
            alert(xhr.responseText);
        }
    }
}

xhr.send(null);