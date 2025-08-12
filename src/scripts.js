
function resultados(){
    const grados = parseFloat(document.getElementById('grados').value);

    let resulFah = (grados * 1.8 ) + 32;
    let resulKel = grados + 273.15;
    document.getElementById('fahrenheit').innerHTML = resulFah;
    document.getElementById('kelvin').innerHTML = resulKel


}
