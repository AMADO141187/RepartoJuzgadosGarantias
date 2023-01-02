const juzgados = [];

function mostrarJuzgados(){
    let texto = '';
    for(let juzgado of juzgados){
        console.log(juzgado);
        texto += `<li>${juzgado.nombreJuzgado}</li>`;
    }
   document.getElementById('juzgados').innerHTML = texto;
}

function agregarJuzgado(){
    const formulario = document.forms['formulario'];
    const nombreJuzgado = formulario['nombreJuzgado'];
    if( nombreJuzgado.value != ''){
        const juzgado = new Juzgado(nombreJuzgado.value);
        console.log(juzgado);
        juzgados.push(juzgado);
        mostrarJuzgados();
    }
    else{
        console.log("No hay informacion que agregar");
    }
    document.getElementById('nombreJuzgado').value = "";
}

function ganadorReparto(){
    let reparto = "";
    random = Math.floor(Math.random()*juzgados.length);
    reparto = juzgados[random]; 
    console.log(Object.values(reparto));

   document.getElementById('juzgadoGanador').innerHTML = Object.values(reparto);
    
}
