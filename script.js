function firstChar(text) {
  // your code here
	text=text.split(" ").join("");
	if(s.length === 0){
		return s;
	}
	return s[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
