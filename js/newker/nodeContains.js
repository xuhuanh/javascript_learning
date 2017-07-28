/**
 * Created by xuhuanhuan on 2017/7/20.
 */



// dom 节点查找
// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// 输入描述:
//
//     oNode1 和 oNode2 在同一文档中，且不会为相同的节点


function commonParentNode(oNode1,oNode2) {
    if(oNode1.contains(oNode2)){
       return oNode1;
    }else {
        return commonParentNode(oNode1.parentNode,oNode2);
    }
}