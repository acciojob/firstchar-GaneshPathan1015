function firstChar(text) {
  // your code here

	let stringwithouspace = text.replace(/\s/g,'');
	return stringwithouspace.charAt(0);
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
