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
function dates(){
for (var i = 1; i < 31; i++) {
	dateArea.innerHTML+='<li class="date"><p class="dtext"> Date:&emsp;January&ensp;'+i+',&ensp;2023 </p></li>'
}
}

function add_click(){
const date = qsa('.dtext')
date.addEventListener('click', () => {
	date.classList.add('active')
})
}

dates().then(add_click())