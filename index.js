let side = 1
const kostka = document.querySelector('.dice')
const pootocKostkou = () => {
	side = side + 1
	if (side === 7) {
		side = 1
	}
	kostka.src = `img/side${side}.svg`
}
document.addEventListener('keydown', pootocKostkou)

