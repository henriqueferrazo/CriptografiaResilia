var btnExecutar = document.querySelector('#btn_executar');
var selectTipoCrypto = document.querySelector('#select');
var divIncrementoCesar = document.querySelector('#incremento_cesar');
var radios = document.querySelectorAll('input[name="rd_tipo_operacao"]');
var txtMensagem = document.querySelector('#txt_mensagem');
var txtResultado = document.querySelector('#txt_resultado');
var divResultado = document.querySelector('#div_resultado');
var txtIncrementoCesar = document.querySelector('#txt_incremento_cesar');

var ehParaCodificar = false;
var ehBase64 = false;

selectTipoCrypto.addEventListener('change', function(){
  if(this.value == '2'){
    divIncrementoCesar.style.display = "block";
    ehBase64 = false;
  } else {
    divIncrementoCesar.style.display = "none";
    ehBase64 = true;    
  }
});

radios.forEach(radio =>
radio.addEventListener("change", function(){
  if(this.id === 'rd_op_codifica'){
    btnExecutar.innerHTML = "Codificar Mensagem!";
    ehParaCodificar = true;
  } else {
    btnExecutar.innerHTML = "Decodificar Mensagem!";
    ehParaCodificar = false;
  }
  
}));

btnExecutar.addEventListener('click', function(e){
  e.preventDefault();
  var resultado = "";
  if(ehBase64){
    if(ehParaCodificar){
      resultado = utf8_to_b64(txtMensagem.value);
    } else {
      resultado = b64_to_utf8(txtMensagem.value);
    }
  } else {
    var incremento = parseInt(txtIncrementoCesar.value);
    if(ehParaCodificar){
     resultado = criptografar(txtMensagem.value, incremento);
    } else{
      resultado = decriptografar(txtMensagem.value, incremento);
    }

  }
  txtResultado.value = resultado;
  divResultado.style.display = "block";
});
