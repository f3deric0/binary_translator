const submitButton = document.getElementById("button");
console.log(submitButton)
submitButton.addEventListener('click',()=>{



const table = {

	a:"00001",
	b:"00010",
	c:"00011",
	d:"00100",
	e:"00101",
	f:"00110",
	g:"00111",
	h:"01000",
	i:"01001",
	j:"01010",
	m:"01101",
	n:"01110",
	o:"01111",
	p:"10000",
	q:"10001",
	r:"10010",
	s:"10011",
	t:"10100",
	u:"10101",
	v:"10110",
	w:"10111",
	x:"11000",
	y:"11001",
	z:"11010",

	A:"00001",
	B:"00010",
	C:"00011",
	D:"00100",
	E:"00101",
	F:"00110",
	G:"00111",
	H:"01000",
	I:"01001",
	J:"01010",
	M:"01101",
	N:"01110",
	O:"01111",
	P:"10000",
	Q:"10001",
	R:"10010",
	S:"10011",
	T:"10100",
	U:"10101",
	V:"10110",
	W:"10111",
	X:"11000",
	Y:"11001",
	Z:"11010"


};

const message =document.getElementById("text");	
console.log(message.value);
const letters = message.value.split("");
console.log(letters);
const result = letters.map(letter => {
	if (table[letter]) {

		return table[letter];
	} else {
			return letter;
		}
}).join(" ");

console.log(result);
const output = document.getElementById("output");
output.insertAdjacentHTML('afterbegin',`<p>${result}</p>`)
});



