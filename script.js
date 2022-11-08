// JavaScript source code
//"use strict"
//alert('hi')

//window.open('./index.html')
let arrayinputs = [];
localStorage.setItem('contentArray',[]);
if (window.location.href.includes('myinputs')) {
    let submitBtn = document.getElementById('submit-btn')
    let textBox = document.getElementById('text-box')
    let arrLocal = []
    if (localStorage.getItem('keys')) {
        arrayinputs = localStorage.keys.split(',')

    }
    console.log('index');
   
    submitBtn.addEventListener('click', () => {
        console.log('clicked submit');
        //   arrLocal.push(textBox.value)
        arrayinputs.push(textBox.value)
        console.log(textBox.value);
        localStorage.setItem('keys', arrayinputs)
        location.replace('./index.html')
    })
}



if (window.location.href.includes('index')) {
   // let btn = document.querySelector('#btn') in case you want to add data from index file
    let Box = document.querySelector('.textBox')
    let localStorageData = localStorage.getItem('keys')
    let description = document.querySelector('.description')
    let array1=[]
    if (localStorageData) {
         array1 = localStorageData.split(',');
        for (let i = 0; i < array1.length; i++) {
            copyFromLocal(array1[i])
        }
    }

    function copyFromLocal(value) {
        let ele = document.createElement('p')
        let elementContent = document.createTextNode(value);
        ele.appendChild(elementContent);
        description.appendChild(ele);
    }
    function addText() {
        console.log('hi');
        let text = 'hi there';
        let ele = document.createElement('p')
        let elementContent = document.createTextNode(Box.value)
        ele.appendChild(elementContent);
        description.appendChild(ele);
        array1.push(Box.value)
        localStorage.setItem('keys', array1)
        Box.value=''
    }

  //  btn.addEventListener('click', addText)
}
