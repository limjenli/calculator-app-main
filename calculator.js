// handle theme switching

let themeToggle = document.querySelectorAll(".theme-toggle")
let theme = 1
let themeone = document.querySelector(".theme-one")
let themetwo = document.querySelector(".theme-two")
let themethree = document.querySelector(".theme-three")

function updateTheme() {
	if (theme == 1) {
		themethree.classList.remove("active")
		themeone.classList.add("active")
		document.body.classList.remove("theme-3")
		// document.body.classList.toggle("theme-1")
	} else if (theme == 2) {
		themeone.classList.remove("active")
		themetwo.classList.add("active")
		document.body.classList.add("theme-2")
	} else if (theme == 3) {
		themetwo.classList.remove("active")
		themethree.classList.add("active")
		document.body.classList.remove("theme-2")
		document.body.classList.add("theme-3")
	}
}

themeToggle.forEach((div) => {
	div.addEventListener("click", () => {
		theme != 3 ? theme++ : (theme = 1)
		console.log(theme)
		updateTheme()
	})
})

// handle calculator logic

let outputDisplay = document.querySelector(".number-output")
let keys = document.querySelectorAll("button")
let output

function updateDisplay(output) {
	outputDisplay.textContent = output ? commaSeparator(output) : ""
}

function commaSeparator(num) {
	let str = num.toString().split(".")
	str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	return str.join(".")
}

updateDisplay(233223)

// keys.forEach((key) => {
// 	key.addEventListener("click", (event) => {
// 		if (event.target.dataset.action === undefined) {
// 			// console.log(key.innerHTML)
// 			console.log(event.target.dataset.action)
// 			output = key.innerHTML
// 		}
// 	})

// 	console.log(output)
// 	updateDisplay(output)
// })

// keys.addEventListener("click", (e) => {
// 	if (e.target.matches("button")) return
// 	const key = e.target
// 	console.log(key)
// })

// check if number is pressed
// if yes, add to display
// check if number is pressed
// if yes, add to display

// if no, perform function
// if del, del last number in output
// if plus, sum previous num and next num
// if minus, minus numbers
// if multiply, times numbers
// if dot, add a decimal
// if divide, divide
// if reset, reset
// if equals, update output display with output
