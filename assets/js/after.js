const indexDate = Date.parse(data.currentDate);

let after = [];

for (let event of data.events) {
    if(Date.parse(event.date) > indexDate) {
        after.push(event);
    }
}

let container = document.getElementById('div-index');
let fragment = document.createDocumentFragment();

for (let event of after) {
    let div = document.createElement('div')
    div.classList.add('new-div', 'new-div2', 'd-flex', 'flex-column', 'col-10', 'col-sm-10', 'col-md-4', 'col-lg-3')
    div.innerHTML = `<h2 class="text-center h2-radius">${event.name}</h2>
                    <img class="h-75 img-cards" src="${event.image}" width="100%"></img>
                    <p class="new-div">Summary of the event: ${event.description}</p>
                    <div class="d-flex flex-column align-items-center"> 
                    <p class="new-div">Event price: ${event.price} dollars</p>
                    <a href="./details.html" class="btn btn-outline-warning w-75 btn-details">Go to details ➔</a>
                    </div>`
    fragment.appendChild(div)
}

container.appendChild(fragment);


const container2 = document.getElementById('filter-category')

function checkboxCreate (array) {
    let fragment = document.createDocumentFragment();
    let mapping = array.map(element => element.category);
    let categories = [...new Set (mapping)];                            // TE PASA EL SET A UN ARRAY
    categories.forEach(category => {
        let div = document.createElement('div')
        div.className = "form-check"
        div.innerHTML = `<input class="form-check-input" type="checkbox" value=${category} id=${category}/>
                         <label class="form-check-label" for=${category}> ${category} </label>`
         fragment.appendChild(div)
    })
    return fragment
}

container2.appendChild(checkboxCreate(data.events));