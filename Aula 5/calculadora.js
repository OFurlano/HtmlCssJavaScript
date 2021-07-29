function digitado(e) {
	let tecla=e.target.innerText;
	var visor=document.getElementById('visor');
	let resultadoConta=0
	switch (tecla) {
		case	'C' : visor.innerHTML = "0"; return;
		case	'=' : calculaElemetosnoVisor();return;
	}
	visor.innerHTML += tecla;
	
}

window.onload = function() {
	var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", digitado);
	}
}
 function calculaElemetosnoVisor(){
	let numero
	stringTextonoVisor=visor.textContent;
	console.log({stringTextonoVisor})
	for(let i=0;i<stringTextonoVisor.length;i++){
		if(stringTextonoVisor[i]=!isNaN)
		numero += stringTextonoVisor[i]
	}
 }