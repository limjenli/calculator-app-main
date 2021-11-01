let outputDisplay = document.querySelector(".number-output")
outputDisplay.textContent = commaSeparator(2332232)
let output

function commaSeparator(num) {
	let str = num.toString().split(".")
	str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	return str.join(".")
}

// add number to display

// delete last number in display

// check if number is pressed
// if yes, add to display
// check if number is pressed
// if yes, add to display

// if no, perform function
//
