function parseJSON() {
	var buttonsDiv = document.getElementById("buttons");
	buttonsDiv.innerHTML = "";
	var fieldsStringDiv = document.getElementById("fieldsString");
	fieldsStringDiv.innerHTML = "";
	var fieldsObjectDiv = document.getElementById("fieldsObject");
	fieldsObjectDiv.innerHTML = "";
	var buttonErrorDiv = document.getElementById("buttonsError");
	buttonErrorDiv.innerHTML = "";
	var fieldsErrorDiv = document.getElementById("fieldsError");
	fieldsErrorDiv.innerHTML = "";

	try {
		var userInput = JSON.parse(document.getElementById("userInput").value);
	} catch (error) {
		displayButtonsError("Your JSON didn't parse correctly.");
		return;
	}

	if (userInput.buttons) {
		if (Array.isArray(userInput.buttons)) {
			userInput.buttons.forEach(function (arrayElement) {
				if (typeof arrayElement === "string") {
					var btn = document.createElement("button");
					btn.appendChild(document.createTextNode(arrayElement));
					buttonsDiv.appendChild(btn);
				} else {
					displayButtonsError("Buttons was not all strings.");
				}
			});
		} else {
			displayButtonsError("Buttons was not an array.");
		}
	} else {
		displayButtonsError("Buttons was not set in your JSON.");
	}

	if (userInput.fields) {
		if (Array.isArray(userInput.fields)) {
			userInput.fields.forEach(function (arrayElement) {
				if (typeof arrayElement === "string") {
					var labelString = document.createElement("label");
					labelString.appendChild(document.createTextNode(arrayElement));
					var txtboxString = document.createElement("input");
					fieldsStringDiv.appendChild(labelString);
					fieldsStringDiv.appendChild(txtboxString);
				} else if (typeof arrayElement === "object") {
					var labelObject = document.createElement("label");
					labelObject.appendChild(document.createTextNode(arrayElement.name));
					if (!arrayElement.name) {
						displayFieldsError("Fields name is missing.");
					}
					var txtboxObject = document.createElement("input");
					txtboxObject.value = arrayElement.default;
					fieldsObjectDiv.appendChild(labelObject);
					fieldsObjectDiv.appendChild(txtboxObject);
				} else {
					displayFieldsError("Fields was not an object or a string.");
				}
			});
		} else {
			displayFieldsError("Fields was not an array.");
		}
	} else {
		displayFieldsError("Fields was not set in your JSON.");
	}

}

function displayButtonsError(errorString) {
	var buttonErrorDiv = document.getElementById("buttonsError");
	buttonErrorDiv.innerHTML = errorString;
}

function displayFieldsError(errorString) {
	var fieldsErrorDiv = document.getElementById("fieldsError");
	fieldsErrorDiv.innerHTML = errorString;
}