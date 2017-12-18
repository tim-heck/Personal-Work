var azureUrl = "http://webprogrammingassignment3.azurewebsites.net/api/favoriteCharacters";

var ranIndex = 0;

function getRanIndex(max) {
	max = Math.floor(max);
	return Math.floor(Math.random() * max);
}

function simpleFormOneResult(data) {
	document.getElementById("formOneResults").innerHTML = JSON.stringify(data);
}

function simpleFormOneError(data) {
	document.getElementById("formOneErrors").innerHTML = JSON.stringify(data);
}

function simpleFormTwoResult(data) {
	document.getElementById("formTwoResults").innerHTML = JSON.stringify(data);
}

function simpleFormTwoError(data) {
	document.getElementById("formTwoErrors").innerHTML = JSON.stringify(data);
}

function forcePull() {
	$.ajax(azureUrl, 
	{
		method: "GET",
		success: simpleFormOneResult,
		error: simpleFormOneError
	});
}

function forceRead() {
	$.ajax(azureUrl, 
	{
		method: "GET",
		success: function(data) {
			ranIndex = getRanIndex(data.length);
			forceReadResult(data, ranIndex);
		},
		error: simpleFormOneError
	});
}

function forceReadResult(data, index) {
	$.ajax(azureUrl + "/" + index, 
	{
		method: "GET",
		success: document.getElementById("formOneResults").innerHTML = JSON.stringify(data[index]) + ' Index: ' + index,
		error: simpleFormOneError
	});
}

function forcePush() {
	$.ajax(azureUrl, 
	{
		method: "POST",
		success: simpleFormOneResult,
		error: simpleFormOneError,
		contentType: "application/json",
		processData: false,
		data: JSON.stringify(
		{
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			character: document.getElementById("character").value
		})
	});
}

function forceInsight() {
	$.ajax(azureUrl + "/" + ranIndex + "/views", 
	{
		method: "GET",
		success: simpleFormTwoResult,
		error: simpleFormTwoError
	});
}

function watchMovies() {
	$.ajax(azureUrl + "/" + ranIndex + "/views", 
	{
		method: "POST",
		success: simpleFormTwoResult,
		error: simpleFormTwoError,
		contentType: "application/json",
		processData: false,
		data: JSON.stringify(
		{
			ViewDate: document.getElementById("viewDate").value
		})
	});
}

function forceDelete() {
	var deleteIndex = 1;
	$.ajax(azureUrl + "/", 
	{
		method: "GET",
		success: function(data) {
			deleteIndex = getRanIndex(data.length);
			forceDeleteResult(data, deleteIndex);
		},
		error: simpleFormOneError
	});
}

function forceDeleteResult(data, index) {
	$.ajax(azureUrl + "/" + index, 
	{
		method: "DELETE",
		success: document.getElementById("formOneResults").innerHTML = "Deleted: " + JSON.stringify(data[index]),
		error: simpleFormOneError
	});
}