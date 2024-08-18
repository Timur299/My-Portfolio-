function darkmode() {
	const body = document.body
	const wasDarkmode = localStorage.getItem('darkmode') == 'true'

	localStorage.setItem('darkmode', !wasDarkmode)
	body.classList.toggle('dark-mode', !wasDarkmode)
}

document.querySelector('.btn ').addEventListener('click', darkmode)

function onload() {
	document.body.classList.toggle(
		'dark-mode',
		localStorage.getItem('darkmode') == 'true'
	)
}

document.addEventListener('DOMContentLoaded', onload)


const host = document.querySelector('.nest')
const we = document.querySelector('.btn1')

we.addEventListener('click',function(){

host.textContent = 'I Am Web Developer '

})
