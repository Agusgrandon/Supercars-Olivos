const autos = [
{nombre: "Aston Martin DB11", categoria: "premium", imagen: "assets/premiums-y-superdeportivos/aston-martin-db11.png"},
{nombre: "Audi R8", categoria: "premium", imagen: "assets/premiums-y-superdeportivos/audi-r8.png"},
{nombre: "Chevrolet Corvette", categoria: "premium", imagen: "assets/premiums-y-superdeportivos/chevrolet-corvette.png"},
{nombre: "Ford Mustang", categoria: "premium", imagen: "assets/premiums-y-superdeportivos/ford-mustang.png"},
{nombre: "Mercedes-benz AMG", categoria: "premium", imagen: "assets/premiums-y-superdeportivos/mercedes-benz-amg.png"},
{nombre: "Porsche 911", categoria: "premium", imagen: "assets/premiums-y-superdeportivos/porsche-911.png"},
];


function renderizarAutos() {
    const contenedorPremiums =
        document.getElementById("contenedor-premiums");

    autos.forEach(function(auto) {
      
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card-auto");

        const imagen = document.createElement("img");
        imagen.src = auto.imagen;
        imagen.alt = auto.nombre;
        imagen.loading = "lazy";

  
        const nombre = document.createElement("h3");
        nombre.textContent = auto.nombre;

        
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);

        if (auto.categoria === "premium") {
            contenedorPremiums.appendChild(tarjeta);
        } else if (auto.categoria === "deportivo") {
            contenedorDeportivos.appendChild(tarjeta);
        }
    });
}


renderizarAutos();
