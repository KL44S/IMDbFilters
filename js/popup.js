function loadValue(element) {
	var key = element.getAttribute("id");

	chrome.storage.sync.get(key, function (data) {
		element.value = data[key];
	});
}

function saveValue(element) {
	var key = element.getAttribute("id");
	var value = element.value;
	var objectToPersist = {};
	objectToPersist[key] = value;

	chrome.storage.sync.set(objectToPersist, function() {});
}

var fromYearSelectedValue = document.getElementById("fromYearSelectedValue");
fromYearSelectedValue.addEventListener("change", function() {
	saveValue(fromYearSelectedValue);
});
loadValue(fromYearSelectedValue);

var untilYearSelectedValue = document.getElementById("untilYearSelectedValue");
untilYearSelectedValue.addEventListener("change", function() {
	saveValue(untilYearSelectedValue);
});
loadValue(untilYearSelectedValue);

var minRatingSelectedValue = document.getElementById("minRatingSelectedValue");
minRatingSelectedValue.addEventListener("change", function() {
	saveValue(minRatingSelectedValue);
});
loadValue(minRatingSelectedValue);

var maxRatingSelectedValue = document.getElementById("maxRatingSelectedValue");
maxRatingSelectedValue.addEventListener("change", function() {
	saveValue(maxRatingSelectedValue);
});
loadValue(maxRatingSelectedValue);

var minVotesSelectedValue = document.getElementById("minVotesSelectedValue");
minVotesSelectedValue.addEventListener("change", function() {
	saveValue(minVotesSelectedValue);
});
loadValue(minVotesSelectedValue);

var maxVotesSelectedValue = document.getElementById("maxVotesSelectedValue");
maxVotesSelectedValue.addEventListener("change", function() {
	saveValue(maxVotesSelectedValue);
});
loadValue(maxVotesSelectedValue);

var minRuntimeSelectedValue = document.getElementById("minRuntimeSelectedValue");
minRuntimeSelectedValue.addEventListener("change", function() {
	saveValue(minRuntimeSelectedValue);
});
loadValue(minRuntimeSelectedValue);

var maxRuntimeSelectedValue = document.getElementById("maxRuntimeSelectedValue");
maxRuntimeSelectedValue.addEventListener("change", function() {
	saveValue(maxRuntimeSelectedValue);
});
loadValue(maxRuntimeSelectedValue);