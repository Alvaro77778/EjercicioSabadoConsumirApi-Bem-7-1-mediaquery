function actualizarDolar (){
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(datos =>{

        let datosEntregados = datos.dolar.nombre;
        let datosUnidadDolar = datos.dolar.unidad_medida;
        let datosValorDolar = datos.dolar.valor;
        let datosFechaDolar = datos.dolar.fecha;

        console.log(datosEntregados)

        let nombreDolar = document.getElementById('unidadDolar');
        nombreDolar.innerHTML = datosUnidadDolar;

        let valorDolar = document.getElementById('valorDolar');
        valorDolar.innerHTML = datosValorDolar;

        let fechaDolar = document.getElementById('fechaDolar');
        fechaDolar.innerHTML = datosFechaDolar;

        let styleCuadrado = document.getElementById('tableUno');
        styleCuadrado.style.paddingLeft = '31%';

    })
}

function actualizarDolarIntercambio (){
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(datos =>{

        let datosEntregados = datos.dolar_intercambio.nombre;
        let datosUnidadDolar = datos.dolar_intercambio.unidad_medida;
        let datosValorDolar = datos.dolar_intercambio.valor;
        let datosFechaDolar = datos.dolar_intercambio.fecha;

        console.log(datosEntregados)

        let nombreDolar = document.getElementById('unidadDolarDos');
        nombreDolar.innerHTML = datosUnidadDolar;

        let valorDolar = document.getElementById('valorDolarDos');
        valorDolar.innerHTML = datosValorDolar;

        let fechaDolar = document.getElementById('fechaDolarDos');
        fechaDolar.innerHTML = datosFechaDolar;

        let styleCuadrado = document.getElementById('tableUnoDos');
        styleCuadrado.style.paddingLeft = '31%';

    })
}

function actualizarEuro(){
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(datos =>{

        let datosEntregados = datos.euro.nombre;
        let datosUnidadDolar = datos.euro.unidad_medida;
        let datosValorDolar = datos.euro.valor;
        let datosFechaDolar = datos.euro.fecha;

        console.log(datosEntregados)

        let nombreDolar = document.getElementById('unidadDolarTres');
        nombreDolar.innerHTML = datosUnidadDolar;

        let valorDolar = document.getElementById('valorDolarTres');
        valorDolar.innerHTML = datosValorDolar;

        let fechaDolar = document.getElementById('fechaDolarTres');
        fechaDolar.innerHTML = datosFechaDolar;

        let styleCuadrado = document.getElementById('tableUnoTres');
        styleCuadrado.style.paddingLeft = '31%';

    })
}

function actualizarTasaDesempleo(){
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(datos =>{

        let datosEntregados = datos.tasa_desempleo.nombre;
        let datosUnidadDolar = datos.tasa_desempleo.unidad_medida;
        let datosValorDolar = datos.tasa_desempleo.valor;
        let datosFechaDolar = datos.tasa_desempleo.fecha;

        console.log(datosEntregados)

        let nombreDolar = document.getElementById('unidadDolarCuatro');
        nombreDolar.innerHTML = datosUnidadDolar;

        let valorDolar = document.getElementById('valorDolarCuatro');
        valorDolar.innerHTML = datosValorDolar;

        let fechaDolar = document.getElementById('fechaDolarCuatro');
        fechaDolar.innerHTML = datosFechaDolar;

        let styleCuadrado = document.getElementById('tableUnoCuatro');
        styleCuadrado.style.paddingLeft = '32%';

    })
}

function actualizarBitcoin(){
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(datos =>{

        let datosEntregados = datos.bitcoin.nombre;
        let datosUnidadDolar = datos.bitcoin.unidad_medida;
        let datosValorDolar = datos.bitcoin.valor;
        let datosFechaDolar = datos.bitcoin.fecha;

        console.log(datosEntregados)

        let nombreDolar = document.getElementById('unidadDolarCinco');
        nombreDolar.innerHTML = datosUnidadDolar;

        let valorDolar = document.getElementById('valorDolarCinco');
        valorDolar.innerHTML = datosValorDolar;

        let fechaDolar = document.getElementById('fechaDolarCinco');
        fechaDolar.innerHTML = datosFechaDolar;

        let styleCuadrado = document.getElementById('tableUnoCinco');
        styleCuadrado.style.paddingLeft = '30%';

    })
}