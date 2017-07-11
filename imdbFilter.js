function filterByYear(element, fromYear, untilYear) {
	
	if (fromYear == null || fromYear == undefined || fromYear == "") {
		fromYear = 0;
	}

	if (untilYear == null || untilYear == undefined || untilYear == "") {
		untilYear = 99999999;
	}

	var span = element.find("span[class='lister-item-year text-muted unbold']");
	var spanText = span.text().replace('(', '').replace(')', '');
	var year = parseInt(spanText);

	if (year > untilYear || year < fromYear) {
		return true;
	}
}

function filterByRating(element, minScore, maxScore) {
	if (minScore == null || minScore == undefined || minScore == "") {
		minScore = 0.0;
	}

	if (maxScore == null || maxScore == undefined || maxScore == "") {
		maxScore = 11.0;
	}

	var div = element.find("div[class='inline-block ratings-imdb-rating']");
	var divText = div.children().next().text().replace(',', '.');
	var score = parseFloat(divText);

	if (score > maxScore || score < minScore) {
		return true;
	}
}

function filterByYearTop(element, fromYear, untilYear) {
	
	if (fromYear == null || fromYear == undefined || fromYear == "") {
		fromYear = 0;
	}

	if (untilYear == null || untilYear == undefined || untilYear == "") {
		untilYear = 99999999;
	}

	var span = element.find("span.secondaryInfo");
	var spanText = span.text().replace('(', '').replace(')', '');
	var year = parseInt(spanText);

	if (year > untilYear || year < fromYear) {
		return true;
	}
}

function filterByRatingTop(element, minScore, maxScore) {
	if (minScore == null || minScore == undefined || minScore == "") {
		minScore = 0.0;
	}

	if (maxScore == null || maxScore == undefined || maxScore == "") {
		maxScore = 11.0;
	}

	var div = element.find("td[class='ratingColumn imdbRating']");
	var divText = div.children().text().replace(',', '.');
	var score = parseFloat(divText);

	if (score > maxScore || score < minScore) {
		return true;
	}
}

function filterByRuntime(element, minRuntime, maxRuntime) {
	if (minRuntime == null || minRuntime == undefined || minRuntime == "") {
		minRuntime = 0;
	}

	if (maxRuntime == null || maxRuntime == undefined || maxRuntime == "") {
		maxRuntime = 99999999;
	}

	var span = element.find("span.runtime");
	var spanText = span.text().replace(' min', '');
	var runtime = parseInt(spanText);

	if (runtime > maxRuntime || runtime < minRuntime) {
		return true;
	}
}

function filterByVotes(element, minVotesNumber, maxVotesNumber) {
	if (minVotesNumber == null || minVotesNumber == undefined || minVotesNumber == "") {
		minVotesNumber = 0;
	}

	if (maxVotesNumber == null || maxVotesNumber == undefined || maxVotesNumber == "") {
		maxVotesNumber = 99999999;
	}

	var paragraphers = element.find("p.sort-num_votes-visible");
	var attribute = "data-value";
	var votesNumber = $(paragraphers.children()[1]).attr(attribute);

	if (votesNumber > maxVotesNumber || votesNumber < minVotesNumber) {
		return true;
	}
}

function isTop() {
	var locationToSearch = "http://www.imdb.com/chart";
	var currentLocation = window.location.toString();

	var locationMatch = currentLocation.indexOf(locationToSearch);

	return locationMatch >= 0;
}

function filter() {
	var isTopVar = isTop();
	var items = null;

	if (isTopVar) {
		items = $(".lister-list").find("tr");
	}
	else {
		items = $("div[class='lister-item mode-advanced']");
	}

	var fromYearSelectedValue = parseInt($("#fromYearSelectedValue").val());
	var untilYearSelectedValue = $("#untilYearSelectedValue").val();
	var minRatingSelectedValue = $("#minRatingSelectedValue").val();
	var maxRatingSelectedValue = $("#maxRatingSelectedValue").val();
	var minVotesSelectedValue = $("#minVotesSelectedValue").val();
	var maxVotesSelectedValue = $("#maxVotesSelectedValue").val();
	var minRuntimeSelectedValue = $("#minRuntimeSelectedValue").val();
	var maxRuntimeSelectedValue = $("#maxRuntimeSelectedValue").val();

	items.each(function() {
		if (isTopVar) {
			if (filterByYearTop($(this), fromYearSelectedValue, untilYearSelectedValue)) {
				$(this).remove();
			}
			else {
				if (filterByRatingTop($(this), minRatingSelectedValue, maxRatingSelectedValue)) {
					$(this).remove();
				}
			}
		}
		else {
			if (filterByYear($(this), fromYearSelectedValue, untilYearSelectedValue)) {
				$(this).remove();
			}
			else {
				if (filterByRating($(this), minRatingSelectedValue, maxRatingSelectedValue)) {
					$(this).remove();
				}
				else {
					if (filterByVotes($(this), minVotesSelectedValue, maxVotesSelectedValue)) {
						$(this).remove();
					}
					else {
						if (filterByRuntime($(this), minRuntimeSelectedValue, maxRuntimeSelectedValue)) {
							$(this).remove();
						}
					}
				}
			}
		}
	});
}

(function() {
	filter();
}());