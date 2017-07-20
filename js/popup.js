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

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } 
  else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function setLanguage(language) {
	var title = document.getElementById("title");
	var yearTitle = document.getElementById("yearTitle");
	var votesTitle = document.getElementById("votesTitle");
	var runtimeTitle = document.getElementById("runtimeTitle");
	var from = document.getElementsByClassName("from");
	var until = document.getElementsByClassName("until");

	if (language == "esp") {
		title.innerHTML = "FILTROS";
		yearTitle.innerHTML = "A&#209;O";
		votesTitle.innerHTML = "VOTOS";
		runtimeTitle.innerHTML = "DURACION (min)";

		for (var i = 0; i < from.length; i++) {
			from[i].innerHTML = "desde";
		}

		for (var i = 0; i < until.length; i++) {
			until[i].innerHTML = "hasta";
		}
	}
	else {
		title.innerHTML = "FILTERS";
		yearTitle.innerHTML = "YEAR";
		votesTitle.innerHTML = "VOTES";
		runtimeTitle.innerHTML = "RUNTIME (min)";

		for (var i = 0; i < from.length; i++) {
			from[i].innerHTML = "from";
		}

		for (var i = 0; i < until.length; i++) {
			until[i].innerHTML = "until";
		}
	}
}

function changeLanguage(language) {
	chrome.storage.sync.set({languageSelect: language}, function() {});
	setLanguage(language);
}

function toogleOnOff(filtersOnOff) {
	filtersOnOff.classList.toggle('power-off');
	filtersOnOff.classList.toggle('power');
}

function setOnOff(filtersOnOff) {
	var key = filtersOnOff.getAttribute("id");

	chrome.storage.sync.get(key, function (data) {
		var value = "on";

		if (data[key] == "on") {
			value = "off";
		}

		var objectToPersist = {};
		objectToPersist[key] = value;
		chrome.storage.sync.set(objectToPersist, function() {});
	});

}

function loadOnOff(filtersOnOff) {
	var key = filtersOnOff.getAttribute("id");

	chrome.storage.sync.get(key, function (data) {
		if (data[key] == "on") {
			toogleOnOff(filtersOnOff);
		}
	});
}

function changeRotateCss(dropdownFiltersToggle) {
	var rotateDownClass = "gly-rotate-down";
	var rotateUpClass = "gly-rotate-up";

	if (dropdownFiltersToggle.classList.contains(rotateDownClass)) {
		dropdownFiltersToggle.classList.remove(rotateDownClass);
		dropdownFiltersToggle.classList.add(rotateUpClass);
	}
	else {
		if (dropdownFiltersToggle.classList.contains(rotateUpClass)) {
			dropdownFiltersToggle.classList.remove(rotateUpClass);
			dropdownFiltersToggle.classList.add(rotateDownClass);
		}
		else {
			dropdownFiltersToggle.classList.add(rotateUpClass);
		}
	}
}

function setSlideCss() {
	var dropdownFilters = document.getElementById("mainFilters");
	dropdownFilters.classList.toggle('main-filter-toggle');
}

function slideUpMain() {
	var main = document.getElementById("main");
	main.classList.toggle("main");
}

var dropdownFiltersToggle = document.getElementById("mainFiltersToggle");
dropdownFiltersToggle.addEventListener("click", function() {
	slideUpMain();
	setSlideCss();
	changeRotateCss(dropdownFiltersToggle);
});

var filtersOnOff = document.getElementById("filtersOnOff");
filtersOnOff.addEventListener("click", function() {
	toogleOnOff(filtersOnOff);
	setOnOff(filtersOnOff);
});
loadOnOff(filtersOnOff);

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

var languageSelect = document.getElementById("myonoffswitch");
languageSelect.addEventListener("change", function(setEnglish) {
	chrome.storage.sync.get("languageSelect", function (data) {
		var languageOption = data["languageSelect"];
		var newLanguageOption = "esp";

		if (languageOption != null && languageOption == "esp") {
			newLanguageOption = "eng";
		}
		
		changeLanguage(newLanguageOption);
	});
});

chrome.storage.sync.get("languageSelect", function (data) {
	var languageOption = data["languageSelect"];

	if (languageOption != null) {
		if (languageOption != "esp") {
			languageSelect.removeAttribute("checked");
		}

		setLanguage(languageOption);
	}
	else {
		chrome.storage.sync.set({languageSelect: "esp"}, function() {});
	}
});