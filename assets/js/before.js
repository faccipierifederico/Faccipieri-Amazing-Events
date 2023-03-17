const indexDate = Date.parse(data.currentDate);

let before = [];

for (let event of data.events) {
    if(Date.parse(event.date) < indexDate) {
        before.push(event);
    }
}

let container = document.getElementById('div-index');
let fragment = document.createDocumentFragment();

for (let event of before) {
    let div = document.createElement('div')
    div.classList.add('border', 'new-div', 'd-flex', 'flex-column', 'col-10', 'col-sm-10', 'col-md-4', 'col-lg-3')
    div.innerHTML = `<h2 class="text-center">${event.name}</h2>`
    div.innerHTML += `<img class="h-75" src="${event.image}" width="100%"></img>`
    div.innerHTML += `<p class="new-div">Description of the event: ${event.description}</p>`
    div.innerHTML += `<p class="new-div">Event price: ${event.price} dollars</p>`
    fragment.appendChild(div)
}

container.appendChild(fragment);