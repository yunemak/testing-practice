function caesarCipher(str, num) {
	let array = [];
	for (let c = 0; c < str.length; c++) {
		array.push(String.fromCharCode(str[c].charCodeAt(0) + num));
	}
	return array.join("");
}

export { caesarCipher };
