let b = document.body;
let div = document.createElement('div');
b.appendChild(div);
div.classList.add('container'); 

div1 = document.createElement('div');
div1.classList.add("head");
div1.style.backgroundColor = '#f6c56e';
div1.style.backgroundSize= "cover";
div.style.marginInline = "auto";
div1.style.width = "400px";
div1.style.height = "230px";
div1.style.borderRadius = "10px 10px 0px 0px";
div1.style.marginTop = "-30px";
b.appendChild(div1);

let h1 = document.createElement('h1');  
h1.innerText = 'Happy Meals';
div1.appendChild(h1);
h1.style.padding = '20px';
h1.style.color = 'black';
h1.style.fontFamily = "bree Serif";

let p = document.createElement('p');
p.innerText = 'Discover the best foods over the 1,000 restaurants';
p.style.padding = '20px'
div1.appendChild(p);
p.style.color = 'black';
p.style.marginTop = "-40px"
p.style.fontSize = "20px"

let div2 = document.createElement('div');
div.appendChild(div2);

let bt = document.createElement('button');
bt.innerText = 'Book Now';
bt.style.fontSize = "15px";
bt.style.paddingBlock = '15px';
bt.style.backgroundColor = 'white'; 
bt.style.borderRadius = '15px';
bt.style.paddingInline = '20px';
bt.style.marginLeft = "20px";
bt.style.marginTop = "-10px";
bt.style.borderWidth = "0px";
div1.appendChild(bt);
