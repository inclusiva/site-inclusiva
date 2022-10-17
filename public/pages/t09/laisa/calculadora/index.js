function Adição(){
    var Aresult = 0;
    Aresult=
      Number(document.getElementById('inp1').value) +
      Number(document.getElementById('inp2').value)
    
   window.alert("Sua resposta é: "+Aresult);
  }
  
  function Subtração(){
    var Sresult = 0;
    Sresult=
      Number(document.getElementById('inp1').value) -
      Number(document.getElementById('inp2').value)
    
   window.alert("Sua resposta é: "+Sresult);
  }
  
  function Multiplicação(){
    var Mresult = 0;
    Mresult=
      Number(document.getElementById('inp1').value) *
      Number(document.getElementById('inp2').value)
    
   window.alert("Sua resposta é: "+Mresult);
  }
  
  function Divisão(){
    var Dresult = 0;
    Dresult=
      Number(document.getElementById('inp1').value) /
      Number(document.getElementById('inp2').value)
    
   window.alert("Sua resposta é: "+Dresult);
  }
