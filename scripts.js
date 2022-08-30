let valorCompra = 1050;
print(formataMoeda(valorCompra));
print("");
print("01 parcela de " + formataMoeda(valorCompra));
let contParcelas = 2;
while (contParcelas <= 12) {
	print(formataNumero(contParcelas) + " parcelas de " + formataMoeda(valorCompra / contParcelas++));
}

print("");
let x = 50;
do {
	x -= 5
} while (x > 0);

let y = 5;


function print(texto) {
	document.write(texto + "<br>");
}
function imprima(texto) {
	document.write(texto);
}

function formataNumero(valor) {
	return new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(valor);
}

function formataMoeda(valor) {
	let padraoBR = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return padraoBR.format(valor);
}