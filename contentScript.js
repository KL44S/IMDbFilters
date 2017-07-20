var srciptElement = document.createElement('script');
srciptElement.src = chrome.extension.getURL('imdbFilter.min.js');

(document.head||document.documentElement).appendChild(srciptElement);

chrome.storage.sync.get(null, function (data) {
	//From año
	var fromYearHiddenElement = document.createElement("input");
	fromYearHiddenElement.setAttribute("id", "fromYearSelectedValue");
	fromYearHiddenElement.setAttribute("type", "hidden");
	fromYearHiddenElement.value = data["fromYearSelectedValue"];

	//Until año
	var untilYearHiddenElement = document.createElement("input");
	untilYearHiddenElement.setAttribute("id", "untilYearSelectedValue");
	untilYearHiddenElement.setAttribute("type", "hidden");
	untilYearHiddenElement.value = data["untilYearSelectedValue"];

	//From rating
	var minRatingHiddenElement = document.createElement("input");
	minRatingHiddenElement.setAttribute("id", "minRatingSelectedValue");
	minRatingHiddenElement.setAttribute("type", "hidden");
	minRatingHiddenElement.value = data["minRatingSelectedValue"];

	//Until rating
	var maxRatingHiddenElement = document.createElement("input");
	maxRatingHiddenElement.setAttribute("id", "maxRatingSelectedValue");
	maxRatingHiddenElement.setAttribute("type", "hidden");
	maxRatingHiddenElement.value = data["maxRatingSelectedValue"];

	//From votos
	var minVotesHiddenElement = document.createElement("input");
	minVotesHiddenElement.setAttribute("id", "minVotesSelectedValue");
	minVotesHiddenElement.setAttribute("type", "hidden");
	minVotesHiddenElement.value = data["minVotesSelectedValue"];

	//Until votos
	var maxVotesHiddenElement = document.createElement("input");
	maxVotesHiddenElement.setAttribute("id", "maxVotesSelectedValue");
	maxVotesHiddenElement.setAttribute("type", "hidden");
	maxVotesHiddenElement.value = data["maxVotesSelectedValue"];

	//From duracion
	var minRuntimeHiddenElement = document.createElement("input");
	minRuntimeHiddenElement.setAttribute("id", "minRuntimeSelectedValue");
	minRuntimeHiddenElement.setAttribute("type", "hidden");
	minRuntimeHiddenElement.value = data["minRuntimeSelectedValue"];

	//Until duracion
	var maxRuntimeHiddenElement = document.createElement("input");
	maxRuntimeHiddenElement.setAttribute("id", "maxRuntimeSelectedValue");
	maxRuntimeHiddenElement.setAttribute("type", "hidden");
	maxRuntimeHiddenElement.value = data["maxRuntimeSelectedValue"];

	//ON-OFF
	var filtersOnOffElement = document.createElement("input");
	filtersOnOffElement.setAttribute("id", "filtersOnOffValue");
	filtersOnOffElement.setAttribute("type", "hidden");
	filtersOnOffElement.value = data["filtersOnOff"];

	document.body.appendChild(fromYearHiddenElement);
	document.body.appendChild(untilYearHiddenElement);
	document.body.appendChild(minRatingHiddenElement);
	document.body.appendChild(maxRatingHiddenElement);
	document.body.appendChild(minVotesHiddenElement);
	document.body.appendChild(maxVotesHiddenElement);
	document.body.appendChild(minRuntimeHiddenElement);
	document.body.appendChild(maxRuntimeHiddenElement);
	document.body.appendChild(filtersOnOffElement);
});


srciptElement.onload = function() {
    srciptElement.parentNode.removeChild(srciptElement);
};