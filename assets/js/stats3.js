let url = 'https://mindhub-xj03.onrender.com/api/amazing'

async function bringData() {
  try{
    // traigo todo de la API
    const response = await fetch(url)
    const data = await response.json()
    const dataEvents = await data.events
    console.log(dataEvents);

    // for (let assist of dataEvents){
    //         let calc = (assist.assistance * 100 / assist.capacity);
    //         // console.log(calc);
    //         let newObj = new Object({
    //             name: assist.name,
    //             attendance: calc
    //         })
    //         console.log(newObj);
    // }

    const dataEventsAssistance = dataEvents.filter(assistance => assistance.assistance > 0)
    console.log(dataEventsAssistance);

    const dataSort = dataEventsAssistance.sort(a, b) => {
      (a.assistance / a.capacity * 100) - (b.assistance / b.capacity * 100)};
    console.log(dataSort);

    // ahora debería hacer un sort del dataEventsAssistance

  }
  catch(error){
    console.log(error);
  }
}



bringData();