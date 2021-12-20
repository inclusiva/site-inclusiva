
function calculadora() {    
               var n1 = parseInt(document.getElementById("n1").value);    
               var n2 = parseInt(document.getElementById("n2").value);    
               var resultado = 0;  
  if (document.getElementsByName("operacao")[0].checked) {    
                   resultado = n1+ n2;  
               }    
               if (document.getElementsByName("operacao")[1].checked) {    
                   resultado = n1 - n2;    
               }    
               if (document.getElementsByName("operacao")[2].checked) {    
                   resultado = n1 * n2;    
               }    
               if (document.getElementsByName("operacao")[3].checked) {    
                   resultado = n1 / n2;    
               }    
               document.getElementById("resultado").value = resultado;    
            }    