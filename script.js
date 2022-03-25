let  allItems = [];


function addItem() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('value').value;
    let newItem  = {key: a,
        value: b};
    let item = document.getElementById('str');
    item.style = `
        display: flex;
        flex-direction: row;
        max-width: 200px;
    `;
    allItems.push(newItem);


    document.getElementById('str').innerHTML = allItems.map( el => `${el.key} = ${el.value} `).join('')

    console.log(allItems);
}


function sortName() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('value').value;

    allItems.sort(function(a, b) {
        if (a.key < b.key) {
            return -1;
        }
        if (a.key > b.key) {
            return 1;
        }
        return 0;
    })
    document.getElementById('str').innerHTML = allItems.map( el => `${el.key} = ${el.value} `).join('')
    console.log(allItems);

}


function sortValue() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('value').value;
    allItems.sort((prev, next) => prev.value - next.value);
    document.getElementById('str').innerHTML = allItems.map( el => `${el.key} = ${el.value} `).join('')
    console.log(allItems);

}

function deleteItem() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('value').value;
    allItems.pop();
    document.getElementById('str').innerHTML = allItems.map( el => `${el.key} = ${el.value} `).join('')
console.log(allItems);
}

function expEml() {
    let result = '<items>'
        result+= allItems.map((i) => `<item key= ${i.key}=${i.value}></item>`)
result+='<items/>'


    alert(result);
}