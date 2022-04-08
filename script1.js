let div = document.createElement('div');
document.body.append(div);
div.style = `
    width: 500px;
    height: 150px;
    border: 2px black solid;
    background-color: yellow;
    display: flex;
    justify-content: space-between;
`;

let button = document.createElement('button');
    document.body.append(button);
    button.className = 'btn_red';
    button.innerHTML = 'PRESS ME';

for (let i = 1; i <= 3; i++) {
    let newDiv = document.createElement('div');
    div.appendChild(newDiv);
    newDiv.className = 'child';
    newDiv.style = `
        width: 50px;
        height: 50px;
        border: 2px black solid;
        background-color: yellow;
    `
}

let item2 = document.createElement('div');
div.appendChild(item2);
item2.style = `
        width: 50px;
        height: 50px;
        border: 2px black solid;
        background-color: green;
    `
item2.setAttribute('id', 'forDel');
button.addEventListener('click', deleteItem);

function deleteItem() {
    let itemForDelete = document.getElementById('forDel');
    itemForDelete.remove();
}


function changeColor() {
    div.style.backgroundColor = `pink`;
}
changeColor();


function changeButtonColor() {
    setTimeout(()=> {
        button.style.backgroundColor = 'red'
    }, 2000)

}
changeButtonColor();





