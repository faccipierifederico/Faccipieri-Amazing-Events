const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("_id");

console.log("hola mundo")

console.log(id);

const happening = data.events.find(happen => happen._id == id);

const div = document.getElementById("details-card")
div.innerHTML = `<div class="img-details">
                <img class="card-img-top h-50" src="${happening.image}">
                <div class="card-body d-flex flex-column details-div">
                <h5 class="h2-details">${happening.name}</h5>
                <p class="p-details"> Description: ${happening.description} </p>
                <ul class="ul-details">
                    <li class="ul-details">Date: ${happening.date}</li>
                    <li class="ul-details">Category: ${happening.category}</li>
                    <li class="ul-details">Place: ${happening.place}</li>
                    <li class="ul-details">Capacity: ${happening.capacity} people</li>
                    <li class="ul-details">Assistance: ${happening.estimate}</li>
                    <li class="ul-details">Price: ${happening.price} USD</li>
                </ul>
                </div>
                </div>`