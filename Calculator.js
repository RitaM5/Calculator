function clearScreen(){
					document.getElementById("value").value="";
					}

function display(value){
					document.getElementById("value").value += value;
					}
					
function calculate(){
					var p = document.getElementById("value").value;
					var q = eval(p);
					document.getElementById("value").value= q;
					}