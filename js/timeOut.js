/**
 * Created by xuhuanhuan on 2017/3/16.
 */

function fool() {
    console.log("first");
    setTimeout(function () {
        console.log('secend');
    },5);
}
for (var i=0;i<43;i++){
    fool();
}