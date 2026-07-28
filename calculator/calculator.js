let calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	multiply: function (a, b) {
		return a * b;
	},
	divide: function (a, b) {
		if (b === 0) {
			throw Error("Can't divide by zero!");
			return NaN;
		}
		return a / b;
	},
};

export { calculator };
