/**
 * Created by xuhuanhuan on 2017/7/19.
 */

function getUrlParam(sUrl,sKey) {
    var str = sUrl.split("#")[0].split("?")[1];
    if(sKey){
        var returnStr = new Array();

        var str2 = str.split("&");

        for(var i=0;i<str2.length;i++){
            var str3 = str2[i].split("=");
            if(str3[0]==sKey){
                returnStr.push(str3[1]);
            }
        }
        if(returnStr.length==1){
            return returnStr[0];
        }else {
            if(returnStr.length==0){
                return "";
            }else {
                return returnStr;
            }
        }
    }else{
        if (str==undefined || str ==""){
            return {};
        }else {
        var returnStr = new Array();
        var str2 = str.split("&");
        for(var i=0;i<str2.length;i++){

            var str3 = str2[i].split("=");
            if(!(str3[0] in  returnStr)){
                returnStr[str3[0]] =[];
            }
            returnStr[str3[0]].push(str3[1]);
        }
          return returnStr;
        }

    }



}