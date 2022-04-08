let div1 = document.createElement('div');
document.body.append(div1);
div1.setAttribute('class', 'container1');
div1.style = `
    width: 500px;
    height: 150px;
    border: 2px black solid;
    background-color: yellowgreen;
   /* display: flex;
    justify-content: space-between;*/
`
let box = [];
let animal = 'dog';
let product = document.createElement('p');
div1.appendChild(product);
product.innerHTML = animal;
box.push(animal);
console.log(box);

let inp = document.createElement('input');
document.body.append(inp);
inp.setAttribute('value', 'pig');


let button1 = document.createElement('button');
document.body.append(button1);
button1.className = 'btn_red';
button1.innerHTML = 'Add animal';
button1.addEventListener('click', addItem);

function addItem() {
    let newItem = document.createElement('p');
    div1.appendChild(newItem);
    newItem.innerHTML = inp.value;

    box.push(newItem);
    newItem.innerHTML;
    console.log(box);
}
