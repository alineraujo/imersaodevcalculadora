function Calcular() {
	var notaBimestre1 = parseFloat(document.getElementById("valorum").value);
	var notaBimestre2 = parseFloat(document.getElementById("valordois").value);
	var notaBimestre3 = parseFloat(document.getElementById("valortres").value);
	var notaBimestre4 = parseFloat(document.getElementById("valorquatro").value);

	var notaFinal =
		(notaBimestre1 + notaBimestre2 + notaBimestre3 + notaBimestre4) / 4;

	var resultadoFinal = notaFinal.toFixed(1);

	//var valorNota = document.getElementById("valor").value; //criar um input type id "valor" no html e button tbm no html

	//var resultadoNota = parseFloat(valor);

	var elementoCalculado = document.getElementById("resultado"); //criar um id h2 "resultado" no html
	var resultado = "O resultado da sua média é " + resultadoFinal;
	//resultadoFinal.innerHTML = "O resultado da sua média é " + resultado;
	//console.log(resultado);
	if (resultadoFinal < 7) {
		elementoCalculado.innerHTML = resultado + " Infelizmente você foi reprovado ";
		console.log(resultado + " Infelizmente você foi reprovado");
	} else if (resultadoFinal >= 7) {
		elementoCalculado.innerHTML = resultado + " Parabéns você foi aprovado! ";
		console.log(resultado + " Parabéns você foi aprovado!");
	}
}