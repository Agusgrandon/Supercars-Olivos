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

    autosPremium.forEach(auto =>{
        htmlCardPremium += `
            <div class="card">
                <img src="${auto.imagen}" alt="${auto.nombre}">
                <h3>${auto.nombre}</h3>
                
            </div>
        `;
    });

    contenedorPremium.innerHTML = htmlCardPremium;
}

mostrarAutosPremium();