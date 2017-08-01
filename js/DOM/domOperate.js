/**
 * Created by xuhuanhuan on 2017/8/1.
 */

var div1 = document.getElementById('div1');     //元素
var p5 = document.createElement('p');  //添加新的节点
p5.innerHTML = 'this is a added p';
div1.appendChild(p5);   //添加新创建的额元素
var p3 = document.getElementById('p3');
div1.appendChild(p3);  //移动已有的节点
var parent = div1.parentElement;

var child = div1.childNodes;
div1.removeChild(child[0]);

console.log(parent);
console.log(child);

var divList = document.getElementsByTagName('div');  //集合

console.log(divList.length);
console.log(divList[0]);

var containerList = document.getElementsByClassName('.container');  //集合
var pList = document.querySelectorAll('p');      //集合
var p = pList[0];
console.log(containerList);
console.log(pList);
console.log(p.style.width);       //获取样式
p.style.width = '100px';          //修改样式
console.log(p.className);         //获取class
p.className = 'p1';               //修改class

p.getAttribute('data-name');
p.setAttribute('data-name','firstName');
p.getAttribute('style');
p.setAttribute('style','font-size:30px;');

console.log(p.nodeName);
console.log(p.nodeType);
