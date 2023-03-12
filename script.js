let totalCijena = 0

function Dodaj(povrce){
	
	let oneItem = povrce.closest('.oneItem')
	let kolicina = povrce.previousElementSibling.value
	let naziv = oneItem.querySelector('.nazivPovrca').innerText
	let korpa = document.querySelector('.uKorpi')
	let cijenaArtikla = oneItem.querySelector('.cijena').innerText
	cijenaArtikla = cijenaArtikla.substring(1)
	let total = document.querySelector('#total')

	
	if(parseInt(kolicina) > 0){
		ukupnaCijena = kolicina * cijenaArtikla
		totalCijena+=ukupnaCijena
		korpa.innerHTML += `<div class="stavka"><span><span class="naziv">${naziv}</span> * ${kolicina} = $<span class="ukupnaCijena">${ukupnaCijena}</span><button class="ukloni" onclick="Ukloni(this)">Ukloni</button><hr class="linija"></div> `
								
							
		povrce.innerText = 'Dodato'
		povrce.setAttribute('disabled', 'true')
		total.innerText=`Ukupno: $${totalCijena}`


	}else{
		alert('Odaberite kolicinu povrca!')
	}


}


function Ukloni(dugme){
	let stavkaRacuna = dugme.closest('.stavka')
	let dugmeUkloni = stavkaRacuna.querySelector('.ukloni')
	let linija = stavkaRacuna.querySelector('.linija')
	let name = stavkaRacuna.querySelector('.naziv').innerText
	let ukupnaCijena = stavkaRacuna.querySelector('.ukupnaCijena').innerText
	let oneItem = document.querySelectorAll('.oneItem')

	totalCijena-=parseInt(ukupnaCijena)
	total.innerText=`Ukupno: $${totalCijena}`
	stavkaRacuna.remove()
	dugmeUkloni.remove()
	linija.remove()

	let dodaj = document.querySelector('.actions button')
	dodaj.removeAttribute('disabled')
	dodaj.innerText = 'Dodaj'

	oneItem.forEach(function (vege){
		let itemName = vege.querySelector('.nazivPovrca').innerText
		console.log(name)
		if(itemName === name){
			vege.querySelector('.actions button').removeAttribute('disabled')
			vege.querySelector('.actions button').innerText = 'Dodaj'
			vege.querySelector('.actions input').value = 0
		}
	})

}