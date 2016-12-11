function signEstimate() {
	var x = document.getElementById("signText");
	var sign = x.elements[0].value;
	var signLength = sign.length;
	var cost;
	if (signLength <= 10){
		cost = 5;
	} else {
		cost = 3.50;
	}
	var signCost = signLength * cost;
	var shipping = 7;
	var total = signCost + shipping;
	document.getElementById("estimate").innerHTML = "Total cost of your sign: <br> £" + total;
	document.getElementById("prettySign").innerHTML = sign;
}

