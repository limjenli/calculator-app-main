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
	} else if (theme == 2) {
		document.body.classList.remove("preload")
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
		updateTheme()
	})
})

// handle calculator logic

let outputDisplay = document.querySelector(".number-output")
let keys = document.querySelectorAll("button")
let output = 0

function commaSeparator(num) {
	let str = num.toString().split(".")
	str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	return str.join(".")
}

function updateDisplay(output) {
	outputDisplay.textContent = commaSeparator(output)
}

updateDisplay(output)

// for each key press
// determine if it's a number
// if yes, add to display
// if no, perform operation (delete, plus, minus, divide, multiply, add decimal)

keys.forEach((key) => {
	key.addEventListener("click", (e) => {
		// if key is a number
		if (
			e.target.matches("button") &&
			e.target.dataset.action == undefined
		) {
			output = output == 0 ? key.textContent : output + key.textContent
		} else if (e.target.dataset.action == "decimal") {
			output += "."
		} else if (e.target.dataset.action == "delete") {
			output.length == 1
				? (output = 0)
				: (output = output ? output.slice(0, -1) : output)
		} else if (e.target.dataset.action == "reset") {
			output = 0
		} else if (e.target.dataset.action == "plus") {
			output = output + "+"
		} else if (e.target.dataset.action == "minus") {
			output = output + "-"
		} else if (e.target.dataset.action == "multiply") {
			output = output + "*"
		} else if (e.target.dataset.action == "divide") {
			output = output + "/"
		} else if (e.target.dataset.action == "equals") {
			output = eval(output)
				.toFixed(5)
				.replace(/0+$/, "") // removes trailing zeros
				.replace(/\.$/, "") // removes trailing decimal
			updateDisplay(output)
		}

		updateDisplay(output)
	})
})
