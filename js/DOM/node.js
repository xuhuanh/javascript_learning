/**
 * Created by xuhuanhuan on 2017/7/17.
 */

/*
节点类型有12种
 */
if(p1.nodeType == Node.ELEMENT_NODE){     //这种写法不适用IE浏览器，IE没有公开Node类型的构造函数
                                            // Node.ELEMENT_NODE ==1
    // alert("this node is an element.")
}

if(p1.nodeType == 1){     //适用于所有的浏览器，

    var name = p1.nodeName;
    // var value = p1.nodeValue;
    // alert("this node is an element.nodeName:"+name+"nodeValue:");
}

if(p1.nodeType==Node.ATTRIBUTE_NODE){      //2
    alert("this node is an attribute.")

}

if(p1.nodeType==Node.TEXT_NODE){           //3
    alert("this node is an text.")

}

if(p1.nodeType==Node.CDATA_SECTION_NODE){      //4
    alert("this node is an ?.")
}


if(p1.nodeType==Node.ENTITY_SECTION_NODE){      //5
    alert("this node is an ?.")
}

if(p1.nodeType==Node.ENTITY_NODE){      //6
    alert("this node is an ?.")
}

if(p1.nodeType==Node.PROCESSING_INSTRUCTION_NODE){      //7
    alert("this node is an ?.")
}

if(p1.nodeType==Node.COMMENT_NODE){      //8
    alert("this node is an ?.")
}

if(p1.nodeType==Node.DOCUMENT_NODE){      //9
    alert("this node is an ?.")
}

if(p1.nodeType==Node.DOCUMENT_TYPE_NODE){      //10
    alert("this node is an ?.")
}

if(p1.nodeType==Node.DOCUMENT_FRAGMENT_NODE){      //11
    alert("this node is an ?.")
}

if(p1.nodeType==Node.NOTATION_NODE){      //12
    alert("this node is an ?.")
}


var firstChild = html1.childNodes[0];
var secondChild = html1.childNodes[1];
var thirdChild = html1.childNodes[2];

var count = html1.childNodes.length;
console.log("html1的firstChild："+firstChild);
console.log("html1的secondChild："+secondChild);
console.log("html1的thirdChild："+thirdChild);
console.log("html1的Child个数："+count);
var arrNodes = Array.prototype.slice.call(html1.childNodes,0);  //ie8之前的浏览器不兼容
console.log("转化为真正数组后的html1.childNodes"+arrNodes);

//所有浏览器都兼容的将伪数组转化为数组的方法
function convertToArray(nodes) {
    var array=null;
    try {
        array = Array.prototype.slice.call(nodes,0);
    }catch (ex){
        array = new Array();
        for(var i=0,len = nodes.length;i<len;i++){
            array.push(nodes[i]);
        }
    }

    return array;
}

//判断是否是第一个、最后一个节点
function isFirstAndLastNode(nodes) {
    if(nodes.nextSibling ===null){
        alert("the last node in the parent's childNodes list."+nodes);
    }else if (nodes.previousSibling ===null){
        alert("the first node in the parent's childNodes list."+nodes);
    }
}

//判断是否含有子节点
function isHasChildNodes(someNode) {
    return someNode.hasChildNodes();
}

//向节点的子节点末尾添加一个子节点
function appendChildNodes(someNode,node) {
    var returnNode = someNode.appendChild(node);
    alert(returnNode==node);
    return someNode;
}

//向节点的某个子节点之前添加一个新节点
function insertChildNode(someNode,newNode,insertBeforeNode) {
    var returnNode=someNode.insertBefore(newNode,insertBeforeNode);  //当insertBeforeNode==null 相当于上一个方法
    return someNode;
}


//替换一个子节点
function replaceOneChildNode(someNode,newNode,replaceNode) {
    var returnNode = someNode.replaceChild(newNode,replaceNode);
    return someNode;
}

//移除某个子节点
function removeOneChildNode(someNode,removeNode) {
    var  returnNode = someNode.removeChild(removeNode);
    return someNode;
}

//对节点实行深复制(复制节点和整个节点树)
function deepCopy(someNode) {
    var deepList = someNode.cloneNode(true);  //>0
    alert(deepList.length);

}
//对节点实行浅复制（只复制节点本身）
function shallCopy(someNode) {
    var shallList = someNode.cloneNode(false);
    alert(shallList.length);      //0

}







