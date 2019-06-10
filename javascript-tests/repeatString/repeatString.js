const repeatString = function(str, num) {
	let finalString = "";
	
	if (num < 0) return 'ERROR';// if the number is less than zero return ERROR

	for (let i = 0; i <= num - 1; i ++) finalString += str;

	return finalString;
}

module.exports = repeatString
