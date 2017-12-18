function changeColors() {
	document.getElementById('body-left').style.background = '#e2e214';
	document.getElementById('body-right').style.background =  '#8c000a';
	var pTags = document.getElementsByTagName('P');
	for (var i = 0; i < pTags.length; i++) {
		pTags[i].style.color = 'grey';
		document.getElementById('external-link').style.color = '#4759fc';
	}
}

function backgroundAlignment() {
	var leftWidth = Math.random() * 100;
	var rightWidth = 100 - leftWidth;
	document.getElementById('body-left').style.width = leftWidth + "%";
	document.getElementById('body-right').style.width = rightWidth + "%";
}

// document.getElementById('diff-color-btn').addEventListener("click", function ChangeColors());