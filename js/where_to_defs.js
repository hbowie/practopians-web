/*
 Let's define a Page object
*/
function Page(section, type, date, title, author, link, tags, tag) {
	this.section = section;
	this.type = type;
	this.date = date;
	this.title = title;
	this.author = author;
	this.link = link;
	this.tags = tags;
	this.tag = tag;
}

/*
 Let's define a function to find a particular page within an array of pages.
 We'll use the local path of the desired page as a key.
*/
function findPage(table, key) {
  var index = 0;
  var found = false;
  while (index < table.length && (! found)) {
    try {
			if (key == table[index].link) {
				found = true;
			} else {
				index++;
			}
    }
    catch (err) {
      index++;
    }
  }
  if (! found) {
    index = -1;
  }
  return index;
}

/*
 Let's define a function to find a particular page within an array of pages.
 We'll use the local path of the desired page as a key.
*/
function findPageAndTag(table, key, tag) {
  var index = 0;
  var found = false;
  while (index < table.length && (! found)) {
    if (key == table[index].link && tag == table[index].tag) {
      found = true;
    } else {
      index++;
    }
  }
  if (! found) {
    index = -1;
  }
  return index;
}

/*
	Wrap the page title in an HTML anchor tag with an href to the link
*/
function getAnchor(page, relative) {
  var title = page.title;
  if (title == "Index") {
    title = page.section + " " + page.title;
  }
  return '<a href="' + relative + page.link + '">' + title + '</a>';
}

/*
  Write a row of next/prior links
*/
function writeNextByType(table, index, depth) {
  var nextLinesWritten = 0;
  var relative = "";
  var j = 0;
  while (j < depth) {
    relative = relative + "../";
    j++;
  }
  currPage = table[index];
  var skips = 0;
  var priorPageIx = index - 1;
  while (priorPageIx >= 0 && table[priorPageIx].type != currPage.type) {
    priorPageIx--;
    skips++;
  }
  var nextPageIx = index + 1;
  try {
		while (nextPageIx < table.length && table[nextPageIx].type != currPage.type) {
			nextPageIx++;
			skips++;
		}
  }
  catch (err) {
    skips = 0;
  }
  if (skips > 0) {
		document.write('<div class="row nav-footer-row">');
		document.write('<div class="col-5 text-right">');
		if (priorPageIx >= 0) {
			var priorPage = table[priorPageIx];
			document.write(getAnchor(priorPage, relative) + ' &lt;= ' + "Newer");
		}
		document.write('</div>');
		document.write('<div class="col-2 text-center nav-footer-center">');
		document.write(currPage.section);
		document.write('</div>');
		document.write('<div class="col-5 text-left">');
		var nextPageIx = index + 1;
		while (nextPageIx < table.length && table[nextPageIx].type != currPage.type) {
			nextPageIx++;
		}
		if (nextPageIx < table.length) {
			var nextPage = table[nextPageIx];
			document.write("Older" + ' =&gt; ' + getAnchor(nextPage, relative));
		}
		document.write('</div>');
		document.write('</div>');
		nextLinesWritten++;
  }
  return nextLinesWritten;
}

/*
  Write a row of next/prior links
*/
function writeNext(table, index, depth, left, center, right) {
  var nextLinesWritten = 0;
  var relative = "";
  var j = 0;
  while (j < depth) {
    relative = relative + "../";
    j++;
  }
  document.write('<div class="row nav-footer-row">');
  document.write('<div class="col-5 text-right">');
  if (index > 0) {
    var priorPage = table[index - 1];
    document.write(getAnchor(priorPage, relative) + ' &lt;= ' + left);
  }
  document.write('</div>');
  document.write('<div class="col-2 text-center nav-footer-center">');
  document.write(center);
  document.write('</div>');
  document.write('<div class="col-5 text-left">');
  var nextIndex = index + 1;
  if (nextIndex < table.length) {
    var nextPage = table[nextIndex];
    document.write(right + ' =&gt; ' + getAnchor(nextPage, relative));
  }
  document.write('</div>');
  document.write('</div>');
  nextLinesWritten++;
  return nextLinesWritten;
}

/*
  Write a Next Row to go Home
*/
function writeNextToHome(depth) {
  var nextLinesWritten = 0;
  var relative = "";
  var j = 0;
  while (j < depth) {
    relative = relative + "../";
    j++;
  }
  document.write('<div class="row nav-footer-row">');
  document.write('<div class="col-5 text-right">');
  document.write('</div>');
  document.write('<div class="col-2 text-center nav-footer-center">');
  document.write("Site");
  document.write('</div>');
  document.write('<div class="col-5 text-left">');
  document.write("Next")
  document.write(' =&gt; ');
  document.write ('<a href="' + relative + 'index.html' + '">' + 'Home' + '</a>');
  document.write('</div>');
  document.write('</div>');
  nextLinesWritten++;
  return nextLinesWritten;
}

var content_logical = new Array();
var pages_by_descending_date = new Array();
var pages_by_tag = new Array();

var ix = 0;
var link = "";
var title = "";
