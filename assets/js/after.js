const indexDate = Date.parse(data.currentDate);

let after = [];

for (let event of data.events) {
    if(Date.parse(event.date) < indexDate) {
        after.push(event);
    }
}

let container = document.getElementById('div-index');
let fragment = document.createDocumentFragment();

for (let event of after) {
    let div = document.createElement('div')
    div.classList.add('border', 'w-50', 'new-div', 'd-flex', 'flex-column')
    div.innerHTML = `<h2 class="text-center">${event.name}</h2>`
    div.innerHTML += `<img src="${event.image}" width="100%"></img>`
    div.innerHTML += `<p class="new-div">Description of the event: ${event.description}</p>`
    div.innerHTML += `<p class="new-div">Event price: ${event.price} dollars</p>`
    fragment.appendChild(div)
}

container.appendChild(fragment);



// const indexDate = Date.parse(data.currentDate);

// let after = [];

// for (let event of data.events) {
//     if(Date.parse(event.date) > indexDate) {
//         after.push(event);
//     }
// }

// console.log(after);

// let container3 = document.getElementById('div-index');
// let fragment3 = document.createDocumentFragment();

// for (let event of after) {
//     let div3 = document.createElement('div')
//     div3.classList.add('border', 'border-danger', 'w-50', 'new-div')
//     div3.innerHTML = `<h2 class="text-center">${event.name}</h2>`
//     div3.innerHTML += `<img src="${event.image}" width="100%"></img>`
//     div3.innerHTML += `<p class="new-div">Description of the event: ${event.description}</p>`
//     div3.innerHTML += `<p class="new-div">Event price: ${event.price}</p>`
//     fragment3.appendChild(div3)
// }

// container3.appendChild(fragment3);