function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var agora = data.getHours()
msg.innerHTML = `Agora São ${agora} Horas.`
if(agora >= 0 && agora < 12 ){
	//BOM DIA!
	img.src = 'manha.png'
	document.body.style.backgroundColor="#ff842a"
} else if (agora > 12 && agora <= 18){
	//BOA TARDE!
	img.src = 'tarde.png'
	document.body.style.backgroundColor="#6caf92"
} else{
	//BOA NOITE!
	img.src = 'noite.png'
	document.body.style.backgroundColor = "#2ababc"
}
}