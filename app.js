function Car(marca, modelo, precio, km, color, cuotas, anio, patente, vendido) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.km = km;
    this.color = color;
    this.cuotas = cuotas;
    this.anio = anio;
    this.patente = patente;
    this.vendido = vendido;
}

let autos = [];

let primerAuto = new Car('Ford', 'Fiesta', 150000, 200, 'Azul', 12, 2019, 'APL123', false);
let segundoAuto = new Car('Toyota', 'Corolla', 100000, 0, 'Blanco', 14, 2019, 'JJK116', true);

autos.push(primerAuto, segundoAuto);

let concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        for (let auto of this.autos) {
            if(auto.patente == patente) {
                return auto;
            } else {
                return null;
            }
        }
    },
    venderAuto: function(patente) {
        let busqueda = this.buscarAuto(patente);
        if(busqueda) {
            busqueda.vendido = true;
        }
    },
    autosParaLaVenta: function() {
        return this.autos.filter( auto => auto.vendido === false);
    },
    autosNuevos: function() {
        let autosEnVenta = this.autosParaLaVenta();
        return autosEnVenta.filter(auto => auto.km < 100);
    },
    listaDeVentas: function() {
        let autosVendidos = this.autos.filter(auto => auto.vendido === true);
        let lista = [];
        autosVendidos.forEach(auto => lista.push(auto.precio))
        return lista;
    }
};
