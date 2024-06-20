var searchInput = document.querySelector(".search-input")
var searchBox = document.querySelector(".search-box")

document.querySelector('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})