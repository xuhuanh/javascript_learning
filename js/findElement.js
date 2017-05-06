/**
 * Created by xuhuanhuan on 2017/4/7.
 */
function getId(x) {
    if(typeof x=="string"){
        return document.getElementById(x);
    }
    return x;
}

function getName(x) {
    var myParagragh = document.getElementsByName(x)[0].value;
    return myParagragh;
}

function getTagName(x) {
    var myParagragh = document.getElementsByTagName(x)[1].value;
    return  myParagragh;

}
