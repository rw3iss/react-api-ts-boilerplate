// Todo: extract parts of this for dom, non-dom, etc to separate modules for singular inclusion.

/* This file contains pending functions which should be moved to the above @rw3iss/js-utils library */

var cl = function() {
  console.log.apply(console, arguments);
}

// Returns json object with parts.
var parseUrl = function(path) {
	var urlSections = path.split('/');
	urlSections = urlSections.filter(function(sectionString) {
		return sectionString.length > 0;
	});

	var urlPath = path;

	return {
		urlSections: urlSections,
		urlPath: urlPath
	}
}

// Determines if the given object contains all of the given properties.
var hasProperties = function(object, properties) {
	for (const p of properties) {
		if (!object.hasOwnProperty(p))
			return false;
	}

	return true;
}

module.exports = {
	/* general */
	cl: cl,
	parseUrl: parseUrl,

	/* objects */
	hasProperties: hasProperties,

	/* dom stuff */
/* 	$: querySelector,
	on: addEvent,
	serializeForm: serializeForm,
	popupWindow: popupWindow,
	loadScript: loadScript,
	loadStyle: loadStyle,
	getOffset: getOffset */
}

// hack to add cl() (console.log) as a global so it's available to any file that requires this one:
if (typeof window != 'undefined' && typeof GLOBAL == 'undefined') {
	window.cl = cl;
} else if (typeof GLOBAL != 'undefined') {
	GLOBAL.cl = cl;
} else {
	throw new Error("Could not create global method 'cl' in js-utils");
}