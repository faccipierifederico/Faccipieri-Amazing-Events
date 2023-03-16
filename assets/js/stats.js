let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlApi)

  .then(res => res.json())
  .then(data => {

    const table = document.getElementById("table1")
    const events = data.events
    console.log(events)
    loadTable1(events, table)

    const table2 = document.getElementById("table2")
    const table3 = document.getElementById("table3")

    revenueCalculation(events.filter(element => element.assistance), "Food", table2)
    revenueCalculation(events.filter(element => element.estimate), "Food", table2)

    introducirTabla2(events.filter(element => element.estimate), table2)
    introducirTabla2(events.filter(element => element.assistance), table3)

  })
  .catch(error => console.log(error))

function loadTable1(array, container) {

  let mayorCapacidad = array.reduce((evento1, evento2) => {
    if (evento1.capacity > evento2.capacity) return evento1
    return evento2
  })
  console.log(mayorCapacidad)

  let mayorAttendance = array.filter(elemento => elemento.assistance).reduce((evento1, evento2) => {
    if ((evento1.assistance / evento1.capacity) > (evento2.assistance / evento2.capacity)) return evento1
    return evento2
  })
  console.log(mayorAttendance)

  let menorAttendance = array.filter(elemento => elemento.assistance).reduce((evento1, evento2) => {
    if ((evento1.assistance / evento1.capacity) < (evento2.assistance / evento2.capacity)) return evento1
    return evento2
  })
  console.log(menorAttendance)

  let trContenedor = document.createElement('tr')
  trContenedor.innerHTML = `
        <td>${mayorAttendance.name}: (${mayorAttendance.assistance / mayorAttendance.capacity * 100}%)</td>
        <td>${menorAttendance.name}: (${menorAttendance.assistance / menorAttendance.capacity * 100}%)</td>
        <td>${mayorCapacidad.name}: (${mayorCapacidad.capacity})</td>`
        container.appendChild(trContenedor)
}

function revenueCalculation(array, nombrecategoria) {

  let arrayFiltrado = array.filter(elemento => elemento.category == nombrecategoria).reduce((total, evento) => {
    if (evento.assistance != undefined) return total += evento.price * evento.assistance
    return total += evento.price * evento.estimate
  }, 0)
  return arrayFiltrado
}

function introducirTabla2(array, contenedor) {
  //  arreglo de categorias unicas
  let categorias = [... new Set(array.map(elemento => elemento.category))]

  let fragmento = document.createDocumentFragment()

  for (categoria of categorias) {
    let trContenedor = document.createElement('tr')
    trContenedor.innerHTML = `<td>${categoria}</td>
        <td>${revenueCalculation(array, categoria)}</td>
        <td>${calcularAsistencia(array, categoria)}%</td>`
    fragmento.appendChild(trContenedor)
  }
  contenedor.appendChild(fragmento)

}

function calcularAsistencia(array, nombrecategoria) {

  let arrayFiltrado = array.filter(elemento => elemento.category == nombrecategoria).reduce((total, evento) => {
    if (evento.assistance != undefined) return total += evento.assistance / evento.capacity
    return total += evento.estimate / evento.capacity
  }, 0)
  return (arrayFiltrado * 100 / array.filter(elemento => elemento.category == nombrecategoria).length).toFixed(2)
}