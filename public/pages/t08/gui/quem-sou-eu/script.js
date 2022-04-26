document.getElementById("form").onsubmit = enviarForm;

function enviarForm(){
  let inputNome= document.getElementById("nome");
  let inputIdade= document.getElementById("idade");
  let inputGenero= document.getElementById("genero");
  alert(inputNome.value)
  alert(inputIdade.value)
  alert(inputGenero.value)
}