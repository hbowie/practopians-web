var url = document.URL;
var urlLower = url.toLowerCase();
var depth = 0;
/* document.write('<p>Debugging Info:</p>');
document.write('<dl>');
document.write('<dt>url to lower case</dt>');
document.write('<dd>' + urlLower + '</dd>');
document.write('</dl>'); */

  // Let's break the page URL down into a site and a local path

var site = "practopians.org/"
var siteIndex = urlLower.indexOf(site);
if (siteIndex < 0) {
  site = "practopians/web/"
  siteIndex = urlLower.indexOf(site);
}
if (siteIndex < 0) {
  site = "practopians/"
  siteIndex = urlLower.indexOf(site);
}
var sectionStart = 0;
var pathStart = 0;
if (siteIndex >= 0) {
  pathStart = siteIndex + site.length;
}
sectionStart = pathStart;
var localPath = url.substring(pathStart, url.length);
var nextSlash = url.indexOf("/", pathStart);
var lastSlash = url.lastIndexOf("/");
var section = "home";
if (nextSlash >= 0) {
  section = url.substring(pathStart, nextSlash);
  depth++;
  if (lastSlash > nextSlash) {
	depth++;
  }
}

var page = url.substr(lastSlash + 1);

document.write('<div class="nav-footer">');
document.write('<div class="row">');
document.write('<div class="col-2 offset-5 text-center nav-footer-head">');
document.write('Where to Next?');
document.write('</div>');
document.write('</div>');

var nextLinesWritten = 0;

if (section == "home" || section == "intro" || section == "core") {
	ix = findPage(content_logical, localPath);
	var center = "Home";
	if (ix >= 0) {
	  center = content_logical[ix].section;
	}
	nextLinesWritten += writeNext(content_logical, ix, depth, "Prior", center, "Next");
}

if (section != "home" && section != "intro" && section != "core") {
  ix = findPage(pages_by_descending_date, localPath);
  if (ix >= 0) {
    nextLinesWritten += writeNext(pages_by_descending_date, ix, depth, "Newer", "All Items", "Older");
  }
  if (section != "basics") {
		nextLinesWritten += writeNextByType(pages_by_descending_date, ix, depth);
	}
	if (ix >= 0) {
		tags = pages_by_descending_date[ix].tags;
		if (tags.length > 0) {
			var tagStart = 0;
			var tagEnd = tags.length;
			var tag = "";
			do {
				tagEnd = tags.indexOf(",", tagStart);
				if (tagEnd < 0) {
					tagEnd = tags.length;
				}
				tag = tags.substring(tagStart, tagEnd);
				ix = findPageAndTag(pages_by_tag, localPath, tag);
				if (ix >= 0) {
					nextLinesWritten += writeNext(pages_by_tag, ix, depth, "Prior", tag, "Next");
				}
				tagStart = tagEnd + 2;
			} while (tagStart >= 0 && tagStart < tags.length);
		}
	}
}
if (nextLinesWritten == 0) {
	writeNextToHome(depth);
}

document.write('</div>');
