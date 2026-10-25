const autosPremium = [
{nombre: "Aston Martin DB11", imagen: "assets/premiums-y-superdeportivos/aston-martin-db11.png"},
{nombre: "Audi R8", imagen: "assets/premiums-y-superdeportivos/audi-r8.png"},
{nombre: "Chevrolet Corvette", imagen: "assets/premiums-y-superdeportivos/chevrolet-corvette.png"},
{nombre: "Ford Mustang", imagen: "assets/premiums-y-superdeportivos/ford-mustang.png"},
{nombre: "Mercedes-benz AMG", imagen: "assets/premiums-y-superdeportivos/mercedes-benz-amg.png"},
{nombre: "Porsche 911", imagen: "assets/premiums-y-superdeportivos/porsche-911.png"},
];

const autosNobles = [
{nombre: "Audi A3", imagen: "assets/nobles-y-deportivos/audi-a3.png"},
{nombre: "Chevrolet Cruze", imagen: "assets/nobles-y-deportivos/chevrolet-cruze.png"},
{nombre: "Fiat Kronnos", imagen: "assets/nobles-y-deportivos/fiat-kronnos.png"},
{nombre: "Nissan Sentra", imagen: "assets/nobles-y-deportivos/nissan-sentra.png"},
{nombre: "Toyota Corolla", imagen: "assets/nobles-y-deportivos/toyota-corolla.png"},
{nombre: "Volkswagen Golf", imagen: "assets/nobles-y-deportivos/volkswagen-golf.png"},
];

function mostrarAutosPremium(){
    const contenedorPremium = document.getElementById("superdeportivos");
    let htmlCardPremium = "";

    autosPremium.forEach(autoP =>{
        htmlCardPremium += `
            <div class="card">
                <img src="${autoP.imagen}" alt="${autoP.nombre}">
                <h3 class="nombreAuto">${autoP.nombre}</h3>
                <a href="./visitanos.html" class="botonCotizar">Cotizar auto</a>
            </div>
        `;
    });
    contenedorPremium.innerHTML = htmlCardPremium;
}

function mostrarAutosNobles(){
    const contenedorNobles = document.getElementById("nobles");
    console.log(contenedorNobles);
    let htmlCardNobles = "";

    autosNobles.forEach(autoN =>{
        htmlCardNobles += `
            <div class="card">
                <img src="${autoN.imagen}" alt="${autoN.nombre}">
                <h3>${autoN.nombre}</h3>
                <a href="./visitanos.html" class="botonCotizar">Cotizar auto</a>
            </div>
        `;
    });
    contenedorNobles.innerHTML = htmlCardNobles;
}

if (document.getElementById("superdeportivos")) {
    mostrarAutosPremium();
}

if (document.getElementById("nobles")) {
    mostrarAutosNobles();
}