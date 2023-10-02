function qs(x){
	return document.querySelector(x)
}
function qsa(x){
	return document.querySelectorAll(x)
}

const dateArea = qs('.date-area')

const htext = qs('.htext')
const settings = qs('.settings')
const Theme = qs('#Theme')
const Font = qs('#Font')
const About = qs('#About')


htext.addEventListener('click', ()=>{
	settings.classList.toggle('hide')
})

for (var i = 1; i < 11; i++) {
	dateArea.innerHTML+='<li class="date"><p class="dtext"> Date:&emsp;January&ensp;'+i+',&ensp;2023 </p></li>'
}

