function criptografar(palavra, peso){
    return cifraDeCesar(true, palavra, peso);
}

function decriptografar(palavra, peso){
    return cifraDeCesar(false, palavra, peso);
}
function cifraDeCesar(ehParaCriptografar, palavra, peso){
    var palavraSecreta = '';
    
    for(var idx = 0; idx < palavra.length; idx++){
        
        var codigoCaracter = 0;
        
        if(ehParaCriptografar){
            codigoCaracter = palavra.charCodeAt(idx) + peso;
        } else {
            codigoCaracter = palavra.charCodeAt(idx) - peso;
        }
        
        var caracter = String.fromCharCode(codigoCaracter)
        palavraSecreta = palavraSecreta.concat(caracter);
    }
    return palavraSecreta;
}