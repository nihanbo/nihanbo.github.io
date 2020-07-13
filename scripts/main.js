/*let myHeading=document.querySelector('h1');
// querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中
myHeading.textContent = 'hello world!';
// 把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!” 
 myVariable='李雷'
let myVariable ='李雷'
myVariable='倪涵博'

// String字符窜let myVariable ='李雷'
// Number数字let myVariable ='10'
// Boolean布尔值true/false,let myVariable ='true'
// Array数组   let myVariable = [1,'李雷','韩梅梅',10];
// Object 对象 Javascript一切皆对象,一切皆可储存在变量里。let myVariable= document.querySelector('H1');
myVariable=6+9;
myVariable="hello"+"world!";
let myVariable=3
myVariable===4//false，测试两个值是否相等，并返回一个 true/false （布尔）值。
myVariable!==3//false,测试两值是否不相等
// 原式为真，但经取非后值为 false：
let myVariable=2
!(myVariable===3)//false

let iceCream='chocolate'
if (iceCream==='chocolate') {
    alert('我最喜欢巧克力冰激淋了。')    
} else {
    alert('但是巧克力才是我的最爱呀……')
    }

let myVariable = document.querySelector('h1');
alert('hello!');

function multiply(num1,num2)
    let result=(num1,num2);
    return result;

multiply(4,7);
multiply(20,20);
multiply(0.5,3);
*/
/* document.querySelector('html').onclick=function() {
    alert('别戳我，我怕疼。')
}*/

let myImage = document.querySelector('img'); 
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src')
    if (mySrc==='images/ifenglogo.png') {
        myImage.setAttribute('src','images/baidulogo.png')
        
    } else {
        myImage.setAttribute('src','images/ifenglogo.png')
    }
}
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
let myButton=document.querySelector('button');
let myHeading = document.querySelector('h1');
// function setUserName() {
//     let myName = prompt('请输入你的名字。');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }
function setUserName(){
    let myName=prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla 酷幽毙了,'+myName;
}
// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
// }
if (!localStorage.getItem('name')
) {
    setUserName();
} else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla 酷毙了，'+storedName;
}

// myButton.onclick = function(){
//     setUserName();
// }
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
    setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}
myButton.onclick = function() {
    setUserName();
}
// function setUserName(){
//     let myName=prompt('请输入你的名字。');
//     if (!myName || myName===null) {
//         setUserName();
//     } else {
//         localStorage.setItem('name',myName);
//         myHeading.innerHTML='Mozilla 酷毙了，'+myName;
//     }
// } 