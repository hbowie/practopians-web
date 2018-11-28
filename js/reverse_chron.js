/*
 Let's define a Page object
*/
function Page(section, type, date, title, author, link) {
	this.section = section;
	this.type = type;
	this.date = date;
	this.title = title;
	this.author = author;
	this.link = link;
}

/*
 Let's define a function to find a particular page within an array of pages.
 We'll use the url of the desired page as a key.
*/
function findPage(table, key) {
  var index = 0;
  var found = false;
  while (index < table.length && (! found)) {
    if (key == table[index].link) {
      document.write ("<p>Page found at index " + index + ".</p>");
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
 Find the next page to be visited.
*/
function nextPage(table, page, defaultLink, defaultTitle) {

  // Let's break the page URL down into a site and a local path
  var pageLower = page.toLowerCase();
  var site = "practopians.org/"
  var siteIndex = pageLower.indexOf(site);
  if (siteIndex < 0) {
  	site = "practopians/web/"
  	siteIndex = pageLower.indexOf(site);
  }
  var keystart = 0;
  if (siteIndex >= 0) {
    keyStart = siteIndex + site.length;
  }
  var key = page.substr(keyStart, page.length);
  document.write("<p>About to search for key of '" + key + "'.</p>");
  site = page.substr(0, keyStart);
  document.write("<p>Page located on site at " + site + ".</p>");
 
  // See if we can find the local path in the passed table
  var pageIndex = findPage(table, key);
  var nextPageIndex = pageIndex + 1;
  if (pageIndex < 0 || nextPageIndex >= table.length) {
    return new Page("", "", "", defaultTitle, "", defaultLink);
  } else {
    return table[nextPageIndex];
  }
}

var pages_by_descending_date = new Array();
var ix = 0;
var link;
link = "basics/evolution-and-its-implications.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Basics", "", "2018-05-22", "Evolution and Its Implications", "", "basics/evolution-and-its-implications.html");
}
ix++;
link = "quotes/to-simply-see-human-beings.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-05-20 13:21:32", "To simply see human beings", "Charles Woodson", "quotes/to-simply-see-human-beings.html");
}
ix++;
link = "links/institute-for-new-economic-thinking.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2018-05-20", "Institute for New Economic Thinking", "", "links/institute-for-new-economic-thinking.html");
}
ix++;
link = "quotes/the-best-way-to-predict-the-future-is-to-invent-it.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-24 08:44:31", "The best way to predict the future is to invent it", "Alan Kay", "quotes/the-best-way-to-predict-the-future-is-to-invent-it.html");
}
ix++;
link = "quotes/worshipping-the-divine-right-of-capital.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-24 08:38:11", "Worshipping the divine right of capital", "Tim O'Reilly", "quotes/worshipping-the-divine-right-of-capital.html");
}
ix++;
link = "quotes/governance-is-essential.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-24 08:33:37", "Governance is essential", "Tim O'Reilly", "quotes/governance-is-essential.html");
}
ix++;
link = "quotes/in-the-thrall-of-a-vast-world-spanning-machine.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-16 11:14:20", "In the thrall of a vast, world-spanning machine", "Tim O'Reilly", "quotes/in-the-thrall-of-a-vast-world-spanning-machine.html");
}
ix++;
link = "quotes/to-end-up-here-in-a-pile-of-bones.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-16 10:59:52", "To end up here in a pile of bones", "Frank Capra", "quotes/to-end-up-here-in-a-pile-of-bones.html");
}
ix++;
link = "links/information-is-beautiful-rhetological-fallacies.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2018-04-15", "Information is Beautiful - Rhetological Fallacies", "", "links/information-is-beautiful-rhetological-fallacies.html");
}
ix++;
link = "news/a-76k-monthly-pension-why-states-and-cities-are-short-on-cash.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2018-04-14", "A 76K Monthly Pension - Why States and Cities Are Short on Cash", "", "news/a-76k-monthly-pension-why-states-and-cities-are-short-on-cash.html");
}
ix++;
link = "blog/hbowie/talking-openly-about-hierarchy.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2018-04-13", "Talking Openly about Hierarchy", "Herb Bowie", "blog/hbowie/talking-openly-about-hierarchy.html");
}
ix++;
link = "quotes/creatively-maladjusted.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-12 15:38:47", "Creatively Maladjusted", "Martin Luther King Jr.", "quotes/creatively-maladjusted.html");
}
ix++;
link = "quotes/an-edifice-which-produces-beggars-needs-restructuring.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-12 15:32:29", "An edifice which produces beggars needs restructuring", "Martin Luther King Jr.", "quotes/an-edifice-which-produces-beggars-needs-restructuring.html");
}
ix++;
link = "quotes/when-machines-are-considered-more-important-than-people.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-12 15:28:50", "When machines are considered more important than people", "Martin Luther King Jr.", "quotes/when-machines-are-considered-more-important-than-people.html");
}
ix++;
link = "quotes/guided-missiles-and-misguided-men.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-12 15:24:32", "Guided missiles and misguided men", "Martin Luther King Jr.", "quotes/guided-missiles-and-misguided-men.html");
}
ix++;
link = "news/has-trump-made-the-working-class-great-again.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2018-04-12", "Has Trump Made the Working Class Great Again?", "", "news/has-trump-made-the-working-class-great-again.html");
}
ix++;
link = "quotes/the-biological-evolution-of-homo-sapiens-was-usurped-by-socio-cultural-evolution.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-11 12:20:50", "the biological evolution of Homo sapiens was usurped by socio-cultural evolution", "Jürgen Klüver", "quotes/the-biological-evolution-of-homo-sapiens-was-usurped-by-socio-cultural-evolution.html");
}
ix++;
link = "blog/hbowie/the-unraveling-of-the-common-good.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2018-04-10", "The Unraveling of The Common Good", "Herb Bowie", "blog/hbowie/the-unraveling-of-the-common-good.html");
}
ix++;
link = "quotes/bathing-in-mystery-and-confusion.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-09 16:46:51", "Bathing in mystery and confusion", "Carl Sagan", "quotes/bathing-in-mystery-and-confusion.html");
}
ix++;
link = "quotes/the-only-sensible-procedure-for-a-critic.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-09 16:39:21", "The only sensible procedure for a critic", "W.H. Auden", "quotes/the-only-sensible-procedure-for-a-critic.html");
}
ix++;
link = "quotes/we-are-idealists-and-we-are-realists.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-04-09 16:34:57", "We are idealists and we are realists", "Alan Lightman", "quotes/we-are-idealists-and-we-are-realists.html");
}
ix++;
link = "blog/hbowie/a-traditional-remedy-for-the-facebook-problem-competition.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2018-04-05", "A Traditional Remedy for the Facebook Problem: Competition", "Herb Bowie", "blog/hbowie/a-traditional-remedy-for-the-facebook-problem-competition.html");
}
ix++;
link = "links/population-reference-bureau.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2018-03-27", "Population Reference Bureau", "", "links/population-reference-bureau.html");
}
ix++;
link = "quotes/the-divine-literatus.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-03-20 08:38:53", "The divine literatus", "Walt Whitman", "quotes/the-divine-literatus.html");
}
ix++;
link = "quotes/set-off-from-the-rest-by-a-line-drawn.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-03-20 08:32:12", "Set off from the rest by a line drawn", "Walt Whitman", "quotes/set-off-from-the-rest-by-a-line-drawn.html");
}
ix++;
link = "news/empty-half-the-earth-of-its-humans-its-the-only-way-to-save-the-planet.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2018-03-20", "Empty half the Earth of its humans. It's the only way to save the planet", "", "news/empty-half-the-earth-of-its-humans-its-the-only-way-to-save-the-planet.html");
}
ix++;
link = "quotes/its-sports-and-its-all-love.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-03-19 12:44:01", "It's sports and it's all love", "Moritz Wagner", "quotes/its-sports-and-its-all-love.html");
}
ix++;
link = "quotes/public-morality.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-03-17 16:16:52", "Public morality", "Robert B. Reich", "quotes/public-morality.html");
}
ix++;
link = "quotes/public-truth.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-03-17 16:08:44", "Public Truth", "Robert B. Reich", "quotes/public-truth.html");
}
ix++;
link = "quotes/to-differentiate-truth-from-falsehood.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-03-17 16:04:35", "To differentiate truth from falsehood", "Robert B. Reich", "quotes/to-differentiate-truth-from-falsehood.html");
}
ix++;
link = "blog/hbowie/a-practopian-approach-to-gun-issues-in-the-us.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2018-02-27", "A Practopian Approach to Gun Issues in the US", "Herb Bowie", "blog/hbowie/a-practopian-approach-to-gun-issues-in-the-us.html");
}
ix++;
link = "quotes/living-with-the-strains-of-complexity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-29 13:11:31", "Living with the strains of complexity", "Daniel Patrick Moynihan", "quotes/living-with-the-strains-of-complexity.html");
}
ix++;
link = "quotes/everyone-is-entitled-to-his-own-opinion-but-not-his-own-facts.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-29 13:09:13", "Everyone is entitled to his own opinion, but not his own facts", "Daniel Patrick Moynihan", "quotes/everyone-is-entitled-to-his-own-opinion-but-not-his-own-facts.html");
}
ix++;
link = "quotes/the-institution-of-the-family.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-29 13:06:25", "The institution of the family", "Daniel Patrick Moynihan", "quotes/the-institution-of-the-family.html");
}
ix++;
link = "quotes/that-community-asks-for-and-gets-chaos.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-29 13:04:02", "That community asks for and gets chaos", "Daniel Patrick Moynihan", "quotes/that-community-asks-for-and-gets-chaos.html");
}
ix++;
link = "blog/hbowie/technology-education-for-the-youth-of-today.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2018-01-22", "Technology Education for the Youth of Today", "Herb Bowie", "blog/hbowie/technology-education-for-the-youth-of-today.html");
}
ix++;
link = "quotes/a-working-simple-system.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-21 16:06:48", "A working simple system", "John Gall", "quotes/a-working-simple-system.html");
}
ix++;
link = "quotes/rough-consensus-and-running-code.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-21 15:51:23", "Rough consensus and running code", "David D. Clark", "quotes/rough-consensus-and-running-code.html");
}
ix++;
link = "quotes/intelligence-plus-character.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-16 08:09:27", "Intelligence plus Character", "Martin Luther King Jr.", "quotes/intelligence-plus-character.html");
}
ix++;
link = "quotes/to-save-man-from-the-morass-of-propaganda.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-16 08:06:08", "To save man from the morass of propaganda", "Martin Luther King Jr.", "quotes/to-save-man-from-the-morass-of-propaganda.html");
}
ix++;
link = "quotes/an-ordinary-person-doing-an-ordinary-job.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-16 08:02:13", "An ordinary person, doing an ordinary job", "Martin Luther King Jr.", "quotes/an-ordinary-person-doing-an-ordinary-job.html");
}
ix++;
link = "quotes/intelligent-guides-of-family-planning.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-16 07:56:58", "Intelligent guides of family planning", "Martin Luther King Jr.", "quotes/intelligent-guides-of-family-planning.html");
}
ix++;
link = "quotes/you-have-your-position-because-of-the-events-of-history.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2018-01-16 07:50:36", "You have your position because of the events of history", "Martin Luther King Jr.", "quotes/you-have-your-position-because-of-the-events-of-history.html");
}
ix++;
link = "quotes/books-are-key-to-understanding-the-world.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-12-05 09:12:14", "Books are key to understanding the world", "Carl Sagan", "quotes/books-are-key-to-understanding-the-world.html");
}
ix++;
link = "blog/hbowie/art-and-the-eye-of-the-beholder.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2017-11-15", "Art and the Eye of the Beholder", "Herb Bowie", "blog/hbowie/art-and-the-eye-of-the-beholder.html");
}
ix++;
link = "quotes/the-brightest-goat-in-the-herd.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-11-06 12:02:36", "The brightest goat in the herd", "Yuval Noah Harari", "quotes/the-brightest-goat-in-the-herd.html");
}
ix++;
link = "quotes/the-system-has-been-shaping-and-reshaping-our-minds.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-11-06 11:57:15", "The system has been shaping and reshaping our minds", "Yuval Noah Harari", "quotes/the-system-has-been-shaping-and-reshaping-our-minds.html");
}
ix++;
link = "quotes/ill-take-the-big-sordid-dirty-crooked-city.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-10-27 11:29:54", "I'll take the big sordid dirty crooked city", "Raymond Chandler", "quotes/ill-take-the-big-sordid-dirty-crooked-city.html");
}
ix++;
link = "quotes/flexible-cooperation-with-strangers.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-10-15 07:14:00", "Flexible cooperation with strangers", "Yuval Noah Harari", "quotes/flexible-cooperation-with-strangers.html");
}
ix++;
link = "blog/hbowie/help-help-the-robots-are-coming.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2017-08-23", "Help! Help! The Robots are Coming!", "Herb Bowie", "blog/hbowie/help-help-the-robots-are-coming.html");
}
ix++;
link = "quotes/discovering-that-i-am-nobody.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-07-30 09:52:58", "Discovering that I am Nobody", "Josiah Royce", "quotes/discovering-that-i-am-nobody.html");
}
ix++;
link = "quotes/the-wonder-remains.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-07-29 17:58:54", "The wonder remains", "Alfred North Whitehead", "quotes/the-wonder-remains.html");
}
ix++;
link = "news/loss-of-fertile-land-fuels-looming-crisis-across-africa.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2017-07-29", "Loss of Fertile Land Fuels Looming Crisis Across Africa", "", "news/loss-of-fertile-land-fuels-looming-crisis-across-africa.html");
}
ix++;
link = "quotes/hands-that-must-work.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-07-18 08:46:36", "Hands that must work", "Lauretta Bender", "quotes/hands-that-must-work.html");
}
ix++;
link = "blog/hbowie/our-american-identity-where-to-next.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2017-07-13", "Our American Identity: Where To Next?", "Herb Bowie", "blog/hbowie/our-american-identity-where-to-next.html");
}
ix++;
link = "news/earths-sixth-mass-extinction-event-under-way.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2017-07-10", "Earth's sixth mass extinction event under way", "", "news/earths-sixth-mass-extinction-event-under-way.html");
}
ix++;
link = "news/remember-the-population-bomb-its-still-ticking.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2017-06-15", "Remember the Population Bomb? It's Still Ticking", "", "news/remember-the-population-bomb-its-still-ticking.html");
}
ix++;
link = "blog/hbowie/in-defense-of-balance.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2017-06-12", "In Defense of Balance", "Herb Bowie", "blog/hbowie/in-defense-of-balance.html");
}
ix++;
link = "quotes/push-outward.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-06-07 08:18:25", "Push Outward", "Michel Foucault", "quotes/push-outward.html");
}
ix++;
link = "quotes/couldnt-everyones-life-become-a-work-of-art.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-06-07 08:15:41", "Couldn’t everyone’s life become a work of art?", "Michel Foucault", "quotes/couldnt-everyones-life-become-a-work-of-art.html");
}
ix++;
link = "quotes/art-is-a-lie-that-makes-us-realize-truth.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-05-24 15:57:36", "Art is a lie that makes us realize truth", "Pablo Picasso", "quotes/art-is-a-lie-that-makes-us-realize-truth.html");
}
ix++;
link = "quotes/living-happily-ever-after.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-05-22 15:02:48", "Living happily ever after", "Bob Mandel", "quotes/living-happily-ever-after.html");
}
ix++;
link = "quotes/it-is-foolish-to-view-realism-and-idealism-as-incompatible.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-05-08 07:22:12", "It is foolish to view realism and idealism as incompatible", "John McCain", "quotes/it-is-foolish-to-view-realism-and-idealism-as-incompatible.html");
}
ix++;
link = "quotes/imagination-is-not-a-means-of-making-money.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-04-21 08:53:54", "Imagination is not a means of making money", "Ursula K. Le Guin", "quotes/imagination-is-not-a-means-of-making-money.html");
}
ix++;
link = "quotes/you-are-going-to-have-to-make-it-different.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-04-21 08:49:00", "You are going to have to make it different", "Jacob Bronowski", "quotes/you-are-going-to-have-to-make-it-different.html");
}
ix++;
link = "quotes/excitement-from-art.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-04-21 08:41:53", "Excitement from Art", "Anthony Burgess", "quotes/excitement-from-art.html");
}
ix++;
link = "quotes/moral-sawdust.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-04-20 08:32:06", "Moral Sawdust", "John Dickson Carr and Cecil Street", "quotes/moral-sawdust.html");
}
ix++;
link = "quotes/defending-the-pursuit-of-learning.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-03-26 13:18:19", "Defending the pursuit of learning", "John F. Kennedy", "quotes/defending-the-pursuit-of-learning.html");
}
ix++;
link = "quotes/our-privileges-can-be-no-greater-than-our-obligations.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-03-26 13:13:49", "Our privileges can be no greater than our obligations", "John F. Kennedy", "quotes/our-privileges-can-be-no-greater-than-our-obligations.html");
}
ix++;
link = "blog/hbowie/a-compact-extensible-open-source-belief-system-for-the-21st-century.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2017-03-26", "A Compact, Extensible, Open-Source Belief System for the 21st Century", "Herb Bowie", "blog/hbowie/a-compact-extensible-open-source-belief-system-for-the-21st-century.html");
}
ix++;
link = "quotes/a-bicycle-for-our-minds.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-03-18 09:20:32", "A bicycle for our minds", "Steve Jobs", "quotes/a-bicycle-for-our-minds.html");
}
ix++;
link = "creed/practopian-creed.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2017-03-18", "Practopian Creed", "", "creed/practopian-creed.html");
}
ix++;
link = "issues/sustainability/human-population-growth.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Issues", "", "2017-03-18", "Human Population Growth", "Herb Bowie", "issues/sustainability/human-population-growth.html");
}
ix++;
link = "quotes/when-old-men-plant-trees.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-03-16 14:13:41", "When old men plant trees", "anonymous", "quotes/when-old-men-plant-trees.html");
}
ix++;
link = "quotes/life-is-a-series-of-daring-adventures-from-a-secure-base.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-03-07 15:13:30", "Life is a series of daring adventures from a secure base", "David Brooks", "quotes/life-is-a-series-of-daring-adventures-from-a-secure-base.html");
}
ix++;
link = "links/global-footprint-network.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2017-03-06", "Global Footprint Network", "", "links/global-footprint-network.html");
}
ix++;
link = "news/the-cost-of-a-polluted-environment-17-million-child-deaths-a-year.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2017-03-06", "The cost of a polluted environment: 1.7 million child deaths a year", "", "news/the-cost-of-a-polluted-environment-17-million-child-deaths-a-year.html");
}
ix++;
link = "quotes/thralls-to-group-instincts.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-26 13:10:02", "Thralls to group instincts", "Walter Mosley", "quotes/thralls-to-group-instincts.html");
}
ix++;
link = "quotes/this-faith-in-consciousness.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-26 13:01:51", "This faith in consciousness", "Walter Mosley", "quotes/this-faith-in-consciousness.html");
}
ix++;
link = "quotes/accidents-of-birth.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-21 11:18:01", "Accidents of birth", "Anu Partanen", "quotes/accidents-of-birth.html");
}
ix++;
link = "quotes/nordic-societies-have-simply-taken-the-job-of-government-seriously.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-21 11:12:26", "Nordic societies have simply taken the job of government seriously", "Anu Partanen", "quotes/nordic-societies-have-simply-taken-the-job-of-government-seriously.html");
}
ix++;
link = "quotes/you-can-simply-focus-on-raising-a-human-being.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-21 11:04:03", "You can simply focus on raising a human being", "Anu Partanen", "quotes/you-can-simply-focus-on-raising-a-human-being.html");
}
ix++;
link = "quotes/the-us-remains-astonishingly-backward-when-it-comes-to-education.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-21 10:57:26", "The US remains astonishingly backward when it comes to education", "Anu Partanen", "quotes/the-us-remains-astonishingly-backward-when-it-comes-to-education.html");
}
ix++;
link = "quotes/independence-freedom-and-opportunity-for-every-member-of-society.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-21 10:27:11", "Independence, freedom and opportunity for every member of society", "Anu Partanen", "quotes/independence-freedom-and-opportunity-for-every-member-of-society.html");
}
ix++;
link = "links/the-nordic-theory-of-everything-in-search-of-a-better-life.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2017-02-21", "The Nordic Theory of Everything: In Search of a Better Life", "", "links/the-nordic-theory-of-everything-in-search-of-a-better-life.html");
}
ix++;
link = "quotes/facts-are-facts.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-20 08:28:52", "Facts are Facts", "Peter Kann", "quotes/facts-are-facts.html");
}
ix++;
link = "links/sapiens-a-brief-history-of-humankind.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2017-02-20", "Sapiens: A Brief History of Humankind", "", "links/sapiens-a-brief-history-of-humankind.html");
}
ix++;
link = "quotes/capitalists-who-worship-only-at-the-feet-of-capitalism.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-17 12:36:00", "Capitalists who worship only at the feet of capitalism", "Herb Bowie", "quotes/capitalists-who-worship-only-at-the-feet-of-capitalism.html");
}
ix++;
link = "quotes/cultural-as-opposed-to-biological-evolution.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-16 13:25:08", "Cultural, as opposed to biological, evolution", "Edwin G. Pulleyblank", "quotes/cultural-as-opposed-to-biological-evolution.html");
}
ix++;
link = "quotes/a-man-of-value.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-15 09:59:53", "A Man of Value", "Albert Einstein", "quotes/a-man-of-value.html");
}
ix++;
link = "quotes/the-point-of-modern-propaganda.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-02-05 09:34:38", "The point of modern propaganda", "Garry Kasparov", "quotes/the-point-of-modern-propaganda.html");
}
ix++;
link = "links/inequalityorg.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2017-02-04", "Inequality.org", "", "links/inequalityorg.html");
}
ix++;
link = "links/the-left-hand-of-darkness.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Links", "", "2017-01-31", "The Left Hand of Darkness", "", "links/the-left-hand-of-darkness.html");
}
ix++;
link = "news/earth-sets-a-temperature-record-for-the-third-straight-year.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2017-01-18", "Earth Sets a Temperature Record for the Third Straight Year", "", "news/earth-sets-a-temperature-record-for-the-third-straight-year.html");
}
ix++;
link = "quotes/a-meaningful-life.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-01-13 12:07:08", "A Meaningful Life", "Yuval Noah Harari", "quotes/a-meaningful-life.html");
}
ix++;
link = "quotes/the-world-empire-enforces-world-peace.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-01-13 11:51:50", "The World Empire enforces World Peace", "Yuval Noah Harari", "quotes/the-world-empire-enforces-world-peace.html");
}
ix++;
link = "quotes/our-social-order-now-in-a-state-of-permanent-flux.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2017-01-13 11:50:05", "Our Social Order Now in a State of Permanent Flux", "Yuval Noah Harari", "quotes/our-social-order-now-in-a-state-of-permanent-flux.html");
}
ix++;
link = "news/how-not-to-be-ignorant-about-the-world.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2017-01-13", "How Not To Be Ignorant About The World", "", "news/how-not-to-be-ignorant-about-the-world.html");
}
ix++;
link = "news/the-real-story-about-fake-news-is-partisanship.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2017-01-11", "The Real Story About Fake News Is Partisanship", "", "news/the-real-story-about-fake-news-is-partisanship.html");
}
ix++;
link = "blog/hbowie/another-way-to-think-about-the-us-elections.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2016-12-29", "Another Way to Think about the US Elections", "Herb Bowie", "blog/hbowie/another-way-to-think-about-the-us-elections.html");
}
ix++;
link = "quotes/a-completely-free-market.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-12-28 12:00:21", "A Completely Free Market", "Yuval Noah Harari", "quotes/a-completely-free-market.html");
}
ix++;
link = "quotes/when-growth-becomes-a-supreme-good.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-12-28 11:57:34", "When Growth Becomes a Supreme Good", "Yuval Noah Harari", "quotes/when-growth-becomes-a-supreme-good.html");
}
ix++;
link = "quotes/the-awesome-power-of-culture.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-12-28 08:17:44", "The Awesome Power of Culture", "Yuval Noah Harari", "quotes/the-awesome-power-of-culture.html");
}
ix++;
link = "blog/hbowie/christmas-for-all.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2016-12-08", "Christmas For All", "Herb Bowie", "blog/hbowie/christmas-for-all.html");
}
ix++;
link = "core/changes.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2016-12-05", "Changes", "", "core/changes.html");
}
ix++;
link = "core/pledge.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2016-12-05", "Pledge", "", "core/pledge.html");
}
ix++;
link = "quotes/cultures-as-a-kind-of-mental-infection.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-12-04 10:36:02", "Cultures as a kind of mental infection", "Yuval Noah Harari", "quotes/cultures-as-a-kind-of-mental-infection.html");
}
ix++;
link = "quotes/unprecedented-growth-in-human-power.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-12-04 10:32:22", "Unprecedented growth in human power", "Yuval Noah Harari", "quotes/unprecedented-growth-in-human-power.html");
}
ix++;
link = "quotes/authentic-cultures.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-12-03 10:22:36", "Authentic cultures", "Yuval Noah Harari", "quotes/authentic-cultures.html");
}
ix++;
link = "quotes/most-sociopolitical-hierarchies-lack-a-logical-or-biological-basis.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-28 08:52:16", "Most sociopolitical hierarchies lack a logical or biological basis", "Yuval Noah Harari", "quotes/most-sociopolitical-hierarchies-lack-a-logical-or-biological-basis.html");
}
ix++;
link = "quotes/from-a-biological-perspective-nothing-is-unnatural.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-28 08:47:42", "From a biological perspective, nothing is unnatural", "Yuval Noah Harari", "quotes/from-a-biological-perspective-nothing-is-unnatural.html");
}
ix++;
link = "quotes/human-imagination-more-than-biological-reality.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-28 08:38:44", "Human imagination more than biological reality", "Yuval Noah Harari", "quotes/human-imagination-more-than-biological-reality.html");
}
ix++;
link = "quotes/consistency-is-the-playground-of-dull-minds.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-28 08:33:21", "Consistency is the playground of dull minds", "Yuval Noah Harari", "quotes/consistency-is-the-playground-of-dull-minds.html");
}
ix++;
link = "quotes/a-progressive-annual-tax-on-capital.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-25 19:35:31", "A Progressive Annual Tax on Capital", "Thomas Piketty", "quotes/a-progressive-annual-tax-on-capital.html");
}
ix++;
link = "news/does-decision-making-matter.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2016-11-25", "Does Decision-Making Matter?", "", "news/does-decision-making-matter.html");
}
ix++;
link = "news/top-01-holds-same-amount-of-wealth-as-bottom-90.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2016-11-25", "Top 0.1% Holds Same Amount of Wealth as Bottom 90%", "", "news/top-01-holds-same-amount-of-wealth-as-bottom-90.html");
}
ix++;
link = "issues/sustainability/sustainability.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Issues", "", "2016-11-23", "Sustainability", "Herb Bowie", "issues/sustainability/sustainability.html");
}
ix++;
link = "core/about-the-principles-and-values.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2016-11-22", "About the Principles and Values", "", "core/about-the-principles-and-values.html");
}
ix++;
link = "quotes/myths-are-stronger-than-anyone-could-have-imagined.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-21 09:31:09", "Myths are stronger than anyone could have imagined", "Yuval Noah Harari", "quotes/myths-are-stronger-than-anyone-could-have-imagined.html");
}
ix++;
link = "quotes/when-his-salary-depends-on-his-not-understanding-it.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-20 11:23:35", "When his salary depends on his not understanding it", "Upton Sinclair", "quotes/when-his-salary-depends-on-his-not-understanding-it.html");
}
ix++;
link = "quotes/deeper-convictions-of-the-heart.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-14 15:57:21", "Deeper convictions of the heart", "Leonard Cohen", "quotes/deeper-convictions-of-the-heart.html");
}
ix++;
link = "quotes/these-principles-have-no-objective-validity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-12 13:22:46", "These principles have no objective validity", "Yuval Noah Harari", "quotes/these-principles-have-no-objective-validity.html");
}
ix++;
link = "quotes/history-is-something-very-few-people-have-been-doing.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-11 10:07:21", "History is something very few people have been doing", "Yuval Noah Harari", "quotes/history-is-something-very-few-people-have-been-doing.html");
}
ix++;
link = "news/what-seattle-doesnt-understand-about-trumps-appeal.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2016-11-11", "What Seattle Doesn't Understand About Trump's Appeal", "", "news/what-seattle-doesnt-understand-about-trumps-appeal.html");
}
ix++;
link = "quotes/evolutionary-success-and-individual-suffering.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-10 11:22:13", "Evolutionary success and individual suffering", "Yuval Noah Harari", "quotes/evolutionary-success-and-individual-suffering.html");
}
ix++;
link = "news/what-so-many-people-dont-get-about-the-us-working-class.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2016-11-10", "What So Many People Don’t Get About the U.S. Working Class", "", "news/what-so-many-people-dont-get-about-the-us-working-class.html");
}
ix++;
link = "blog/hbowie/making-sense-of-what-happened-on-nov-8.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2016-11-09", "Making Sense of What Happened on Nov 8", "Herb Bowie", "blog/hbowie/making-sense-of-what-happened-on-nov-8.html");
}
ix++;
link = "quotes/national-parks-and-reserves.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-07 13:52:48", "National parks and reserves", "John F. Kennedy", "quotes/national-parks-and-reserves.html");
}
ix++;
link = "quotes/no-single-natural-way-of-life-for-sapiens.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-11-05 10:06:49", "No single natural way of life for Sapiens", "Yuval Noah Harari", "quotes/no-single-natural-way-of-life-for-sapiens.html");
}
ix++;
link = "blog/hbowie/what-we-need-after-the-election.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2016-11-03", "What We Need After the Election", "Herb Bowie", "blog/hbowie/what-we-need-after-the-election.html");
}
ix++;
link = "quotes/that-magical-honeycomb-of-words.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-10-23 14:48:01", "That Magical Honeycomb of Words", "Tom Robbins", "quotes/that-magical-honeycomb-of-words.html");
}
ix++;
link = "intro/introduction.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Intro", "", "2016-10-15", "Introduction", "", "intro/introduction.html");
}
ix++;
link = "quotes/having-fewer-children-and-grandchildren.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-09-17 09:01:00", "Having Fewer Children and Grandchildren", "Herb Bowie", "quotes/having-fewer-children-and-grandchildren.html");
}
ix++;
link = "quotes/only-two-sources-of-real-wealth.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-04-26 09:02:12", "Only Two Sources of Real Wealth", "Dorothy L. Sayers", "quotes/only-two-sources-of-real-wealth.html");
}
ix++;
link = "quotes/people-with-passion.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-02-21 07:42:13", "People with Passion", "Steve Jobs", "quotes/people-with-passion.html");
}
ix++;
link = "blog/hbowie/developmental-levels-as-evolving-social-structures.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2016-01-10", "Developmental Levels as Evolving Social Structures", "Herb Bowie", "blog/hbowie/developmental-levels-as-evolving-social-structures.html");
}
ix++;
link = "quotes/thnk-globally-act-locally.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2016-01-05 19:40:57", "Thnk globally, act locally", "Disputed", "quotes/thnk-globally-act-locally.html");
}
ix++;
link = "quotes/any-love-for-justice.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2015-12-31 10:56:51", "Any Love for Justice", "James Baldwin", "quotes/any-love-for-justice.html");
}
ix++;
link = "core/background.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2015-12-16", "Background", "", "core/background.html");
}
ix++;
link = "core/mission.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2015-12-16", "Mission", "", "core/mission.html");
}
ix++;
link = "core/principles.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2015-12-16", "Principles", "", "core/principles.html");
}
ix++;
link = "core/values.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Core", "", "2015-12-16", "Values", "", "core/values.html");
}
ix++;
link = "news/how-isis-makes-radicals.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2015-12-08", "How ISIS Makes Radicals", "", "news/how-isis-makes-radicals.html");
}
ix++;
link = "quotes/ignorant-and-free.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2015-12-01 05:36:20", "Ignorant and Free", "Thomas Jefferson", "quotes/ignorant-and-free.html");
}
ix++;
link = "news/what-science-is-and-how-and-why-it-works.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "2015-11-21", "What Science Is -- and How and Why It Works", "", "news/what-science-is-and-how-and-why-it-works.html");
}
ix++;
link = "quotes/life-can-be-much-broader.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2015-10-16 04:39:08", "Life can be much broader", "Steve Jobs", "quotes/life-can-be-much-broader.html");
}
ix++;
link = "quotes/great-minds-discuss-ideas.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2015-08-30 14:24:57", "Great minds discuss ideas", "Eleanor Roosevelt", "quotes/great-minds-discuss-ideas.html");
}
ix++;
link = "quotes/the-extent-of-freedom-in-all-of-its-dimensions.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2015-07-03 13:47:05", "The Extent of Freedom in All of its Dimensions", "Anthony M. Kennedy", "quotes/the-extent-of-freedom-in-all-of-its-dimensions.html");
}
ix++;
link = "quotes/people-ask-me-to-predict-the-future.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2015-03-21 11:15:56", "People ask me to predict the future", "Ray Bradbury", "quotes/people-ask-me-to-predict-the-future.html");
}
ix++;
link = "quotes/i-must-study-politics-and-war.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2015-03-18 18:19:43", "I must study politics and war", "John Adams", "quotes/i-must-study-politics-and-war.html");
}
ix++;
link = "quotes/the-enormous-extension-of-our-being.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-12-06 13:20:17", "The Enormous Extension of our Being", "C. S. Lewis", "quotes/the-enormous-extension-of-our-being.html");
}
ix++;
link = "quotes/torturing-the-data.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-12-03 18:14:34", "Torturing the Data", "Darrell Huff", "quotes/torturing-the-data.html");
}
ix++;
link = "blog/hbowie/religion-storytelling-and-art.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2014-11-27", "Religion, Storytelling and Art", "Herb Bowie", "blog/hbowie/religion-storytelling-and-art.html");
}
ix++;
link = "quotes/the-inner-life-of-the-artist.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-11-03 04:55:22", "The Inner Life of the Artist", "Edward Hopper", "quotes/the-inner-life-of-the-artist.html");
}
ix++;
link = "quotes/to-prolong-our-presence-on-the-face-of-the-earth.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-10-31 19:17:06", "To prolong our presence on the face of the Earth", "Jonas Salk", "quotes/to-prolong-our-presence-on-the-face-of-the-earth.html");
}
ix++;
link = "quotes/the-original-naivet.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-09-27 07:12:08", "The original naiveté", "Henri Matisse", "quotes/the-original-naivet.html");
}
ix++;
link = "quotes/the-cult-of-ignorance.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-09-04 03:51:11", "The Cult of Ignorance", "Isaac Asimov", "quotes/the-cult-of-ignorance.html");
}
ix++;
link = "quotes/politics-and-the-debasement-of-language.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-07-21 18:10:29", "Politics and the Debasement of Language", "George Orwell", "quotes/politics-and-the-debasement-of-language.html");
}
ix++;
link = "quotes/the-web-of-life.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-07-20 07:26:46", "The Web of Life", "Ted Perry", "quotes/the-web-of-life.html");
}
ix++;
link = "quotes/the-other-side-of-complexity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-07-16 20:05:36", "The Other Side of Complexity", "Oliver Wendell Holmes", "quotes/the-other-side-of-complexity.html");
}
ix++;
link = "quotes/we-need-a-place-to-stand.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-06-13 04:28:19", "We Need a Place to Stand", "John Bacon and Ed Zeiders", "quotes/we-need-a-place-to-stand.html");
}
ix++;
link = "quotes/symbolic-language.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-04-09 18:54:37", "Symbolic Language", "David Christian", "quotes/symbolic-language.html");
}
ix++;
link = "quotes/the-golden-eternity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-03-23 15:19:09", "The Golden Eternity", "Jack Kerouac", "quotes/the-golden-eternity.html");
}
ix++;
link = "quotes/when-you-can-measure-what-you-are-speaking-about.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-03-13 06:15:56", "When you can measure what you are speaking about", "Lord Kelvin", "quotes/when-you-can-measure-what-you-are-speaking-about.html");
}
ix++;
link = "quotes/prime-training-for-permanent-underclasses.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2014-01-08 17:42:02", "Prime training for permanent underclasses", "John Taylor Gatto", "quotes/prime-training-for-permanent-underclasses.html");
}
ix++;
link = "quotes/critical-thinking-followed-by-action.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-12-28 13:09:27", "Critical Thinking Followed by Action", "Dalai Lama", "quotes/critical-thinking-followed-by-action.html");
}
ix++;
link = "blog/hbowie/human-nature.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2013-12-15", "Human Nature", "Herb Bowie", "blog/hbowie/human-nature.html");
}
ix++;
link = "quotes/myth-makers.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-12-12 09:11:11", "Myth-Makers", "Kurt Vonnegut", "quotes/myth-makers.html");
}
ix++;
link = "quotes/we-all-derive-from-the-same-source.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-06-27 04:12:18", "We All Derive From the Same Source", "Henry Miller", "quotes/we-all-derive-from-the-same-source.html");
}
ix++;
link = "quotes/monkeys-with-money-and-guns.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-04-01 04:52:55", "Monkeys with money and guns", "Tom Waits", "quotes/monkeys-with-money-and-guns.html");
}
ix++;
link = "quotes/god-and-morality.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-03-24 10:29:35", "God and Morality", "Frans de Waal", "quotes/god-and-morality.html");
}
ix++;
link = "quotes/this-dear-fucked-up-planet.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-03-21 18:27:09", "This dear fucked-up planet", "Henry Miller", "quotes/this-dear-fucked-up-planet.html");
}
ix++;
link = "quotes/more-popular-than-jesus.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-03-01 04:39:35", "More Popular than Jesus", "John Lennon", "quotes/more-popular-than-jesus.html");
}
ix++;
link = "quotes/little-things-seen-largely.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2013-01-03 05:42:18", "Little things seen largely", "Otto Jespersen", "quotes/little-things-seen-largely.html");
}
ix++;
link = "quotes/the-mysterious.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-11-06 04:07:51", "The Mysterious", "Albert Einstein", "quotes/the-mysterious.html");
}
ix++;
link = "blog/hbowie/the-four-quadrants-of-human-knowledge.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2012-10-26", "The Four Quadrants of Human Knowledge", "Herb Bowie", "blog/hbowie/the-four-quadrants-of-human-knowledge.html");
}
ix++;
link = "quotes/seeing-the-bigger-picture-from-multiple-angles.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-10-22 05:30:34", "Seeing the Bigger Picture from Multiple Angles", "Jeff Bezos and Jason Fried", "quotes/seeing-the-bigger-picture-from-multiple-angles.html");
}
ix++;
link = "blog/hbowie/religious-freedom.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2012-08-04", "Religious Freedom", "Herb Bowie", "blog/hbowie/religious-freedom.html");
}
ix++;
link = "quotes/ten-commandments-for-teachers.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-08-03 23:01:54", "Ten Commandments for Teachers", "Bertrand Russell", "quotes/ten-commandments-for-teachers.html");
}
ix++;
link = "quotes/first-they-came.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-08-03 22:49:09", "First they came...", "Martin Niemöller", "quotes/first-they-came.html");
}
ix++;
link = "quotes/the-divine-gift-of-purely-nonsensical-speech-and-action.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-07-29 10:36:54", "The Divine Gift of Purely Nonsensical Speech and Action", "Edmund Crispin", "quotes/the-divine-gift-of-purely-nonsensical-speech-and-action.html");
}
ix++;
link = "quotes/daily-acts-of-trivia.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-07-23 19:17:01", "Daily Acts of Trivia", "Robert Heinlein", "quotes/daily-acts-of-trivia.html");
}
ix++;
link = "quotes/liberalism-is-not-socialism.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-06-10 06:47:13", "Liberalism is not Socialism", "Winston Churchill", "quotes/liberalism-is-not-socialism.html");
}
ix++;
link = "quotes/the-ultimate-democracy.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-06-09 10:05:11", "The Ultimate Democracy", "Paul McCartney", "quotes/the-ultimate-democracy.html");
}
ix++;
link = "quotes/good-management-is-like-the-beatles.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-04-22 14:57:41", "Good Management is Like The Beatles", "Steve Jobs", "quotes/good-management-is-like-the-beatles.html");
}
ix++;
link = "quotes/equals.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-03-23 06:15:29", "Equals", "John Lennon", "quotes/equals.html");
}
ix++;
link = "quotes/the-left-hand-dimension.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-03-10 11:02:20", "The Left Hand Dimension", "Ken Wilber", "quotes/the-left-hand-dimension.html");
}
ix++;
link = "blog/hbowie/the-nature-of-god.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2012-03-10", "The Nature of God", "Herb Bowie", "blog/hbowie/the-nature-of-god.html");
}
ix++;
link = "blog/hbowie/reasons-for-belief.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2012-02-21", "Reasons for Belief", "Herb Bowie", "blog/hbowie/reasons-for-belief.html");
}
ix++;
link = "quotes/steve-jobs-ideals.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-02-04 06:27:37", "Steve Jobs Ideals", "Ron Johnson", "quotes/steve-jobs-ideals.html");
}
ix++;
link = "quotes/introduction-of-a-new-order-of-things.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-01-19 13:34:08", "Introduction of a new order of things", "Niccolò Machiavelli", "quotes/introduction-of-a-new-order-of-things.html");
}
ix++;
link = "quotes/a-coke-is-a-coke.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-01-09 17:37:44", "A Coke is a Coke", "Andy Warhol", "quotes/a-coke-is-a-coke.html");
}
ix++;
link = "quotes/the-time-worn-yoke-of-their-opinions.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2012-01-09 04:57:15", "The time-worn yoke of their opinions", "Ralph Waldo Emerson", "quotes/the-time-worn-yoke-of-their-opinions.html");
}
ix++;
link = "quotes/shareholder-value.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-12-29 08:50:31", "Shareholder Value", "Jack Welch", "quotes/shareholder-value.html");
}
ix++;
link = "quotes/labor-is-the-superior-of-capital.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-12-03 08:28:38", "Labor is the Superior of Capital", "Abraham Lincoln", "quotes/labor-is-the-superior-of-capital.html");
}
ix++;
link = "quotes/by-gifts-one-makes-slaves.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-10-30 12:21:59", "By Gifts One Makes Slaves", "Peter Freuchen", "quotes/by-gifts-one-makes-slaves.html");
}
ix++;
link = "quotes/unbelievable-heroes.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-10-30 11:35:29", "Unbelievable Heroes", "John Rogers", "quotes/unbelievable-heroes.html");
}
ix++;
link = "quotes/fuzzy-concept.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-09-18 20:53:57", "Fuzzy Concept", "Ansel Adams", "quotes/fuzzy-concept.html");
}
ix++;
link = "quotes/technology-married-with-the-humanities.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-09-01 06:31:28", "Technology married with the humanities", "Steve Jobs", "quotes/technology-married-with-the-humanities.html");
}
ix++;
link = "quotes/we-have-wonderful-arguments.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-08-30 19:39:19", "We have wonderful arguments", "Steve Jobs", "quotes/we-have-wonderful-arguments.html");
}
ix++;
link = "blog/hbowie/the-systemic-era.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2011-08-15", "The Systemic Era", "Herb Bowie", "blog/hbowie/the-systemic-era.html");
}
ix++;
link = "quotes/espn-president-meets-steve-jobs.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-08-01 12:42:03", "ESPN president meets Steve Jobs", "Tom Shales and James Andrew Miller", "quotes/espn-president-meets-steve-jobs.html");
}
ix++;
link = "quotes/we-dont-even-own-suits.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-08-01 12:36:08", "We don't even own suits", "Apple", "quotes/we-dont-even-own-suits.html");
}
ix++;
link = "quotes/between-saturday-night-and-sunday-morning.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-07-11 05:05:21", "Between Saturday night and Sunday morning", "Jimmy Buffet", "quotes/between-saturday-night-and-sunday-morning.html");
}
ix++;
link = "quotes/quality-matters.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-06-24 20:17:22", "Quality Matters", "Dambisa Moyo", "quotes/quality-matters.html");
}
ix++;
link = "quotes/the-credibility-of-a-comedian.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-06-21 18:13:17", "The Credibility of a Comedian", "Jon Stewart", "quotes/the-credibility-of-a-comedian.html");
}
ix++;
link = "quotes/taking-a-fence-down.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:14:33", "Taking a Fence Down", "G. K. Chesterton", "quotes/taking-a-fence-down.html");
}
ix++;
link = "quotes/we-are-in-eden-still.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:12:38", "We are in Eden still", "G. K. Chesterton", "quotes/we-are-in-eden-still.html");
}
ix++;
link = "quotes/the-cause-which-is-blocking-all-progress.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:11:48", "The cause which is blocking all progress", "G. K. Chesterton", "quotes/the-cause-which-is-blocking-all-progress.html");
}
ix++;
link = "quotes/generosity-among-the-rich.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:09:00", "Generosity Among the Rich", "G. K. Chesterton", "quotes/generosity-among-the-rich.html");
}
ix++;
link = "quotes/the-difference-between-construction-and-creation.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:08:09", "The difference between construction and creation", "G. K. Chesterton", "quotes/the-difference-between-construction-and-creation.html");
}
ix++;
link = "quotes/conservatives-and-progressives.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:06:37", "Conservatives and Progressives", "G. K. Chesterton", "quotes/conservatives-and-progressives.html");
}
ix++;
link = "quotes/the-center-of-every-mans-existence-is-a-dream.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:05:01", "The center of every man's existence is a dream", "G. K. Chesterton", "quotes/the-center-of-every-mans-existence-is-a-dream.html");
}
ix++;
link = "quotes/mysticism-has-kept-men-sane.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:04:28", "Mysticism has kept men sane", "G. K. Chesterton", "quotes/mysticism-has-kept-men-sane.html");
}
ix++;
link = "quotes/this-dazed-and-dramatic-ignorance.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-04-22 06:03:10", "This dazed and dramatic ignorance", "G. K. Chesterton", "quotes/this-dazed-and-dramatic-ignorance.html");
}
ix++;
link = "quotes/we-are-doing-our-best.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-03-09 06:38:19", "We are Doing our Best", "Winston Churchill", "quotes/we-are-doing-our-best.html");
}
ix++;
link = "quotes/our-reply-to-violence.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2011-01-18 04:57:18", "Our Reply to Violence", "Leonard Bernstein", "quotes/our-reply-to-violence.html");
}
ix++;
link = "quotes/six-impossible-things-before-breakfast.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-11-21 07:23:15", "Six Impossible Things Before Breakfast", "Lewis Carroll", "quotes/six-impossible-things-before-breakfast.html");
}
ix++;
link = "quotes/the-tautness-of-this-resonant-connection.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-11-20 12:35:29", "The Tautness of this Resonant Connection", "Herb Bowie", "quotes/the-tautness-of-this-resonant-connection.html");
}
ix++;
link = "quotes/ism-mania.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-31 18:30:54", "Ism-mania", "Robert Riskin", "quotes/ism-mania.html");
}
ix++;
link = "quotes/violent-opposition-from-mediocre-minds.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-27 20:15:50", "Violent Opposition from Mediocre Minds", "Albert Einstein", "quotes/violent-opposition-from-mediocre-minds.html");
}
ix++;
link = "quotes/a-planet-sized-problem.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-26 20:07:27", "A Planet-Sized Problem", "E. O. Wilson", "quotes/a-planet-sized-problem.html");
}
ix++;
link = "quotes/the-most-dangerous-of-devotions.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-26 20:04:13", "The Most Dangerous of Devotions", "E. O. Wilson", "quotes/the-most-dangerous-of-devotions.html");
}
ix++;
link = "quotes/true-character.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-26 20:00:28", "True Character", "E. O. Wilson", "quotes/true-character.html");
}
ix++;
link = "quotes/the-toxic-mix-of-religion-and-tribalism.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-26 19:52:23", "The Toxic Mix of Religion and Tribalism", "E. O. Wilson", "quotes/the-toxic-mix-of-religion-and-tribalism.html");
}
ix++;
link = "quotes/the-real-problem-of-humanity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-26 19:46:43", "The Real Problem of Humanity", "E. O. Wilson", "quotes/the-real-problem-of-humanity.html");
}
ix++;
link = "quotes/the-love-of-what-we-are-doing.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-10-23 11:28:26", "The Love of What We are Doing", "Wynton Marsalis", "quotes/the-love-of-what-we-are-doing.html");
}
ix++;
link = "quotes/the-loftiest-and-purest-art.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-08-21 12:50:18", "The Loftiest and Purest Art", "Walt Whitman", "quotes/the-loftiest-and-purest-art.html");
}
ix++;
link = "quotes/every-body-cries-a-union-is-absolutely-necessary.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-08-18 07:07:39", "Every Body cries, a Union is absolutely necessary", "Benjamin Franklin", "quotes/every-body-cries-a-union-is-absolutely-necessary.html");
}
ix++;
link = "quotes/only-a-human-being.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-08-15 09:16:17", "Only a Human Being", "Albert Einstein", "quotes/only-a-human-being.html");
}
ix++;
link = "quotes/a-happy-man.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-08-15 07:52:59", "A Happy Man", "Albert Einstein", "quotes/a-happy-man.html");
}
ix++;
link = "quotes/moral-religion.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-08-13 18:30:01", "Moral Religion", "Albert Einstein", "quotes/moral-religion.html");
}
ix++;
link = "quotes/this-highest-kind-of-religious-feeling.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-08-13 18:22:37", "This Highest Kind of Religious Feeling", "Albert Einstein", "quotes/this-highest-kind-of-religious-feeling.html");
}
ix++;
link = "quotes/freedom-of-judgment.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-07-12 15:10:39", "Freedom of Judgment", "Baruch Spinoza", "quotes/freedom-of-judgment.html");
}
ix++;
link = "quotes/notions-to-explain-nature.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-07-12 15:03:19", "Notions to Explain Nature", "Baruch Spinoza", "quotes/notions-to-explain-nature.html");
}
ix++;
link = "quotes/progress-depends-on-the-unreasonable-man.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-05-26 20:36:29", "Progress Depends on the Unreasonable Man", "George Bernard Shaw", "quotes/progress-depends-on-the-unreasonable-man.html");
}
ix++;
link = "quotes/hard-discipline-of-reasonableness-and-honesty.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-04-16 22:12:13", "Hard Discipline of Reasonableness and Honesty", "Gilbert Murray", "quotes/hard-discipline-of-reasonableness-and-honesty.html");
}
ix++;
link = "quotes/the-fragile-constructs-of-history.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-04-06 19:31:43", "The Fragile Constructs of History", "Eamonn Kelly", "quotes/the-fragile-constructs-of-history.html");
}
ix++;
link = "quotes/lean.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-03-25 06:27:17", "Lean", "Jim Womack", "quotes/lean.html");
}
ix++;
link = "quotes/a-mind-is-blown.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-03-10 06:39:13", "A mind is blown", "Michael Chabon", "quotes/a-mind-is-blown.html");
}
ix++;
link = "quotes/a-work-ethic-gone-mad.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-02-27 13:29:06", "A Work Ethic Gone Mad", "Matthew Stewart", "quotes/a-work-ethic-gone-mad.html");
}
ix++;
link = "quotes/preparing-managers-to-manage.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-02-27 13:07:00", "Preparing Managers to Manage", "Matthew Stewart", "quotes/preparing-managers-to-manage.html");
}
ix++;
link = "quotes/relieving-ignorance.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-02-27 12:42:19", "Relieving Ignorance", "Matthew Stewart", "quotes/relieving-ignorance.html");
}
ix++;
link = "quotes/where-the-puck-is-going-to-be.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-02-23 18:57:08", "Where the Puck is Going to Be", "Steve Jobs", "quotes/where-the-puck-is-going-to-be.html");
}
ix++;
link = "quotes/two-ideas-of-government.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2010-01-22 15:22:21", "Two ideas of government", "William Jennings Bryan", "quotes/two-ideas-of-government.html");
}
ix++;
link = "quotes/price-of-success.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2009-12-21 21:51:29", "Price of Success", "Frank Lloyd Wright", "quotes/price-of-success.html");
}
ix++;
link = "blog/hbowie/developmental-levels.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Blog", "", "2009-10-22", "Developmental Levels", "Herb Bowie", "blog/hbowie/developmental-levels.html");
}
ix++;
link = "quotes/faster-horses.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2009-05-29 06:21:19", "Faster Horses", "Henry Ford", "quotes/faster-horses.html");
}
ix++;
link = "quotes/the-makers-of-things.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2009-04-02 19:50:16", "The Makers of Things", "Barack Obama", "quotes/the-makers-of-things.html");
}
ix++;
link = "quotes/the-third-place.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2009-02-04 07:47:47", "The Third Place", "Ray Oldenburg", "quotes/the-third-place.html");
}
ix++;
link = "quotes/the-trick-in-keeping-bands-together.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2009-01-23 06:17:23", "The Trick in Keeping Bands Together", "Bruce Springsteen", "quotes/the-trick-in-keeping-bands-together.html");
}
ix++;
link = "quotes/a-return-to-these-truths.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2009-01-20 20:47:20", "A Return to These Truths", "Barack Obama", "quotes/a-return-to-these-truths.html");
}
ix++;
link = "quotes/postels-law.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2009-01-06 19:42:52", "Postel’s Law", "Jon Postel", "quotes/postels-law.html");
}
ix++;
link = "quotes/little-i-recognized-as-music.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-11-02 09:33:08", "Little I recognized as music", "Joe Boyd", "quotes/little-i-recognized-as-music.html");
}
ix++;
link = "quotes/counter-cultures-own-values-and-aesthetics-decayed.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-11-02 08:45:15", "Counter-Culture's own values and aesthetics decayed", "Joe Boyd", "quotes/counter-cultures-own-values-and-aesthetics-decayed.html");
}
ix++;
link = "quotes/records-we-made-together-in-the-sixties.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-11-02 08:12:54", "Records we made together in the sixties", "Joe Boyd", "quotes/records-we-made-together-in-the-sixties.html");
}
ix++;
link = "quotes/sixties-surpluses-of-money-and-time.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-11-02 07:28:14", "Sixties Surpluses of Money and Time", "Joe Boyd", "quotes/sixties-surpluses-of-money-and-time.html");
}
ix++;
link = "quotes/never-knew-cocaine-to-improve-anything.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-11-02 07:21:09", "Never Knew Cocaine to Improve Anything", "Joe Boyd", "quotes/never-knew-cocaine-to-improve-anything.html");
}
ix++;
link = "quotes/history-as-postmodern-collage.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-11-02 07:13:25", "History as Postmodern Collage", "Joe Boyd", "quotes/history-as-postmodern-collage.html");
}
ix++;
link = "quotes/chaos-and-mediocrity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-11-02 06:54:53", "Chaos and Mediocrity", "Joe Boyd", "quotes/chaos-and-mediocrity.html");
}
ix++;
link = "quotes/integrity-and-conviction.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-20 14:01:54", "Integrity and Conviction", "Wynton Marsalis", "quotes/integrity-and-conviction.html");
}
ix++;
link = "quotes/the-philosophy-of-jazz.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-20 13:51:42", "The Philosophy of Jazz", "Wynton Marsalis", "quotes/the-philosophy-of-jazz.html");
}
ix++;
link = "quotes/the-undisputed-sovereignty-of-the-human-being.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-20 13:39:30", "The Undisputed Sovereignty of the Human Being", "Wynton Marsalis", "quotes/the-undisputed-sovereignty-of-the-human-being.html");
}
ix++;
link = "quotes/inextricably-linked-in-freedom.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-20 13:28:13", "Inextricably Linked in Freedom", "Wynton Marsalis", "quotes/inextricably-linked-in-freedom.html");
}
ix++;
link = "quotes/levels-of-development.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-19 09:28:50", "Levels of Development", "Ken Wilber", "quotes/levels-of-development.html");
}
ix++;
link = "quotes/all-the-worlds-cultures-now-available-to-us.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-19 09:17:57", "All the World's Cultures Now Available to Us", "Ken Wilber", "quotes/all-the-worlds-cultures-now-available-to-us.html");
}
ix++;
link = "quotes/model-ii-decision-making.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-18 11:12:38", "Model II Decision-Making", "Chris Argyris and Donald Schön", "quotes/model-ii-decision-making.html");
}
ix++;
link = "quotes/model-ii-values.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-16 20:49:39", "Model II Values", "Chris Argyris and Donald Schön", "quotes/model-ii-values.html");
}
ix++;
link = "quotes/balance-is-required-to-maintain-democracy.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-07 18:07:48", "Balance is Required to Maintain Democracy", "Wynton Marsalis", "quotes/balance-is-required-to-maintain-democracy.html");
}
ix++;
link = "quotes/the-challenge-of-swing.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-07 18:07:48", "The Challenge of Swing", "Wynton Marsalis", "quotes/the-challenge-of-swing.html");
}
ix++;
link = "quotes/the-power-of-art.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-10-07 18:07:48", "The Power of Art", "Wynton Marsalis", "quotes/the-power-of-art.html");
}
ix++;
link = "quotes/an-invincible-summer.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-08-05 16:02:04", "An Invincible Summer", "Albert Camus", "quotes/an-invincible-summer.html");
}
ix++;
link = "quotes/dreams-come-true.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-08-04 21:12:04", "Dreams Come True", "John Updike", "quotes/dreams-come-true.html");
}
ix++;
link = "quotes/a-book-is-a-mans-best-friend.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-07-30 19:48:15", "A book is a man's best friend", "Groucho Marx", "quotes/a-book-is-a-mans-best-friend.html");
}
ix++;
link = "quotes/we-must-respect-the-other-fellows-religion.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-07-30 19:37:55", "We Must Respect the Other Fellow's Religion", "H. L. Mencken", "quotes/we-must-respect-the-other-fellows-religion.html");
}
ix++;
link = "quotes/the-underlying-principle-of-the-problem.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-07-13 13:40:38", "The Underlying Principle of the Problem", "Steve Jobs", "quotes/the-underlying-principle-of-the-problem.html");
}
ix++;
link = "quotes/to-give-in-the-same-measure.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-07-13 08:59:35", "To Give in the Same Measure", "Albert Einstein", "quotes/to-give-in-the-same-measure.html");
}
ix++;
link = "quotes/the-supreme-goal-of-all-theory.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-07-13 08:55:57", "The Supreme Goal of All Theory", "Albert Einstein", "quotes/the-supreme-goal-of-all-theory.html");
}
ix++;
link = "quotes/i-dream-things-that-never-were.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-07-05 18:07:08", "I Dream Things That Never Were", "George Bernard Shaw", "quotes/i-dream-things-that-never-were.html");
}
ix++;
link = "quotes/a-first-rate-intelligence.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-06-08 20:05:24", "A First-Rate Intelligence", "F. Scott Fitzgerald", "quotes/a-first-rate-intelligence.html");
}
ix++;
link = "quotes/the-columbia-disaster.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-06-01 10:06:31", "The Columbia Disaster", "Dennis Stauffer", "quotes/the-columbia-disaster.html");
}
ix++;
link = "quotes/occasions-when-the-intellect-retires-gracefully.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-05-21 19:41:18", "Occasions When the Intellect Retires Gracefully", "Margery Allingham", "quotes/occasions-when-the-intellect-retires-gracefully.html");
}
ix++;
link = "quotes/the-only-sign-of-mental-activity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-05-21 19:37:17", "The Only Sign of Mental Activity", "Margery Allingham", "quotes/the-only-sign-of-mental-activity.html");
}
ix++;
link = "quotes/a-dark-procession.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-05-21 19:25:38", "A Dark Procession", "Margery Allingham", "quotes/a-dark-procession.html");
}
ix++;
link = "quotes/work-soul-and-life.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-01-25 08:18:43", "Work, Soul and Life", "Albert Camus", "quotes/work-soul-and-life.html");
}
ix++;
link = "quotes/single-garment-of-destiny.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2008-01-20 12:28:31", "Single Garment of Destiny", "Martin Luther King Jr.", "quotes/single-garment-of-destiny.html");
}
ix++;
link = "quotes/a-long-conversation.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-12-02 13:10:14", "A Long Conversation", "Bruce Springsteen", "quotes/a-long-conversation.html");
}
ix++;
link = "quotes/progress-depends-on-retentiveness.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-11-13 17:53:40", "Progress Depends on Retentiveness", "George Santayana", "quotes/progress-depends-on-retentiveness.html");
}
ix++;
link = "quotes/the-four-fold-way.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-11-06 07:00:58", "The Four-Fold Way", "Angeles Arrien", "quotes/the-four-fold-way.html");
}
ix++;
link = "quotes/merely-thoroughly-outrageous.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-10-24 18:20:11", "Merely Thoroughly Outrageous", "Margery Allingham", "quotes/merely-thoroughly-outrageous.html");
}
ix++;
link = "quotes/apes-and-humans.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-10-08 19:40:58", "Apes and Humans", "Carl Sagan and Ann Druyan", "quotes/apes-and-humans.html");
}
ix++;
link = "quotes/chimps-and-humans.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-10-08 19:33:03", "Chimps and Humans", "Carl Sagan and Ann Druyan", "quotes/chimps-and-humans.html");
}
ix++;
link = "quotes/merely-a-muddle.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-09-29 07:47:36", "Merely a Muddle", "Michael Innes", "quotes/merely-a-muddle.html");
}
ix++;
link = "quotes/the-celestial-teapot.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-09-08 10:21:56", "The Celestial Teapot", "Bertrand Russell", "quotes/the-celestial-teapot.html");
}
ix++;
link = "quotes/evolutionary-drive-towards-complexity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-09-08 10:13:31", "Evolutionary Drive Towards Complexity", "Richard Dawkins", "quotes/evolutionary-drive-towards-complexity.html");
}
ix++;
link = "quotes/unintelligible-propositions.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-09-08 10:00:27", "Unintelligible Propositions", "Thomas Jefferson", "quotes/unintelligible-propositions.html");
}
ix++;
link = "quotes/the-world-is-a-wonderfully-weird-place.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-05-26 21:32:40", "The World is a Wonderfully Weird Place", "Tom Robbins", "quotes/the-world-is-a-wonderfully-weird-place.html");
}
ix++;
link = "quotes/wriggling.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-04-10 15:11:35", "Wriggling", "E. M. Forster", "quotes/wriggling.html");
}
ix++;
link = "quotes/only-connect.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-04-10 14:59:19", "Only Connect", "E. M. Forster", "quotes/only-connect.html");
}
ix++;
link = "quotes/the-rainbow-bridge.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-04-10 14:52:58", "The Rainbow Bridge", "E. M. Forster", "quotes/the-rainbow-bridge.html");
}
ix++;
link = "quotes/art-and-spirit.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-03-20 16:49:17", "Art and Spirit", "Ken Wilber", "quotes/art-and-spirit.html");
}
ix++;
link = "quotes/to-see-a-world-in-a-grain-of-sand.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-28 05:28:16", "To see a world in a grain of sand", "William Blake", "quotes/to-see-a-world-in-a-grain-of-sand.html");
}
ix++;
link = "quotes/art-science-and-empire.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-28 05:26:45", "Art, Science and Empire", "William Blake", "quotes/art-science-and-empire.html");
}
ix++;
link = "quotes/expectations-of-holiness.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-28 05:24:29", "Expectations of holiness", "William Blake", "quotes/expectations-of-holiness.html");
}
ix++;
link = "quotes/minute-particulars.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-28 05:22:20", "Minute Particulars", "William Blake", "quotes/minute-particulars.html");
}
ix++;
link = "quotes/a-foolish-consistency.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-16 06:17:11", "A foolish consistency", "Ralph Waldo Emerson", "quotes/a-foolish-consistency.html");
}
ix++;
link = "quotes/homophobia.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-11 09:51:34", "Homophobia", "Ken Wilber", "quotes/homophobia.html");
}
ix++;
link = "quotes/an-integral-god.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-11 09:48:55", "An Integral God", "Ken Wilber", "quotes/an-integral-god.html");
}
ix++;
link = "quotes/the-beautiful-the-good-and-the-true.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-11 09:42:57", "The Beautiful, the Good and the True", "Ken Wilber", "quotes/the-beautiful-the-good-and-the-true.html");
}
ix++;
link = "quotes/everybody-has-some-important-pieces-of-the-truth.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2007-02-10 15:04:57", "Everybody Has Some Important Pieces of the Truth", "Ken Wilber", "quotes/everybody-has-some-important-pieces-of-the-truth.html");
}
ix++;
link = "quotes/cockpits-with-instruments-controlled-by-gremlins.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-12-19 16:27:23", "Cockpits with Instruments Controlled by Gremlins", "Robert D. Austin", "quotes/cockpits-with-instruments-controlled-by-gremlins.html");
}
ix++;
link = "quotes/ancient-ethnic-sores-belching-fire.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-12-02 12:08:20", "Ancient ethnic sores belching fire", "Don Beck and Chris Cowan", "quotes/ancient-ethnic-sores-belching-fire.html");
}
ix++;
link = "quotes/belief-in-impossible-things.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Belief in Impossible Things", "Tom DeMarco and Timothy Lister", "quotes/belief-in-impossible-things.html");
}
ix++;
link = "quotes/democracy-is-worst-form-of-government.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Democracy is Worst Form of Government", "Winston Churchill", "quotes/democracy-is-worst-form-of-government.html");
}
ix++;
link = "quotes/down-these-mean-streets.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Down These Mean Streets", "Raymond Chandler", "quotes/down-these-mean-streets.html");
}
ix++;
link = "quotes/freedom-of-expression-in-business.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Freedom of Expression in Business", "Tom Peters and Robert H. Waterman Jr.", "quotes/freedom-of-expression-in-business.html");
}
ix++;
link = "quotes/learning-from-experience.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Learning from Experience", "Peter Senge", "quotes/learning-from-experience.html");
}
ix++;
link = "quotes/nirvana-antipattern.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Nirvana Antipattern", "William J. Brown, Hays W. McCormick III and Scott W. Thomas", "quotes/nirvana-antipattern.html");
}
ix++;
link = "quotes/the-change-dilemma.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "The Change Dilemma", "Sydney Harris", "quotes/the-change-dilemma.html");
}
ix++;
link = "quotes/those-sharp-scratchy-harsh-almost-unpleasant-guys.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Those Sharp, Scratchy, Harsh, Almost Unpleasant Guys", "Thomas J. Watson, Jr", "quotes/those-sharp-scratchy-harsh-almost-unpleasant-guys.html");
}
ix++;
link = "quotes/vital-and-significant-forms-of-art.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:32", "Vital and Significant Forms of Art", "Raymond Chandler", "quotes/vital-and-significant-forms-of-art.html");
}
ix++;
link = "quotes/art-is-a-hammer.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Art is a Hammer", "Bertolt Brecht", "quotes/art-is-a-hammer.html");
}
ix++;
link = "quotes/careful-thoughtful-small-practical-efforts.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Careful, thoughtful, small, practical efforts", "Joseph L. Badaracco, Jr.", "quotes/careful-thoughtful-small-practical-efforts.html");
}
ix++;
link = "quotes/changing-the-world.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Changing the World", "Margaret Mead", "quotes/changing-the-world.html");
}
ix++;
link = "quotes/climate-changers.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Climate Changers", "John Guillebaud", "quotes/climate-changers.html");
}
ix++;
link = "quotes/conventional-views.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Conventional Views", "John Kenneth Galbraith", "quotes/conventional-views.html");
}
ix++;
link = "quotes/cost-of-education.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Cost of Education", "Derek Bok", "quotes/cost-of-education.html");
}
ix++;
link = "quotes/do-the-right-thing.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Do the Right Thing", "Mark Twain", "quotes/do-the-right-thing.html");
}
ix++;
link = "quotes/easy-solutions.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Easy Solutions", "H. L. Mencken", "quotes/easy-solutions.html");
}
ix++;
link = "quotes/ends-for-which-we-live.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Ends for which We Live", "Martin Luther King Jr.", "quotes/ends-for-which-we-live.html");
}
ix++;
link = "quotes/enemies-of-art-and-artist.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Enemies of Art and Artist", "Henry Miller", "quotes/enemies-of-art-and-artist.html");
}
ix++;
link = "quotes/entertain-a-thought.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Entertain a Thought", "Aristotle", "quotes/entertain-a-thought.html");
}
ix++;
link = "quotes/every-third-american.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Every Third American", "H. L. Mencken", "quotes/every-third-american.html");
}
ix++;
link = "quotes/intellectual-debate.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Intellectual Debate", "John Stuart Mill", "quotes/intellectual-debate.html");
}
ix++;
link = "quotes/men-fear-thought.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Men Fear Thought", "Bertrand Russell", "quotes/men-fear-thought.html");
}
ix++;
link = "quotes/quality-of-children-vs-quantity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Quality of Children vs. Quantity", "Margaret Mead", "quotes/quality-of-children-vs-quantity.html");
}
ix++;
link = "quotes/simplicity-and-complexity.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Simplicity and Complexity", "Albert Einstein", "quotes/simplicity-and-complexity.html");
}
ix++;
link = "quotes/small-and-obscure-deeds.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Small and Obscure Deeds", "Albert Schweitzer", "quotes/small-and-obscure-deeds.html");
}
ix++;
link = "quotes/successful-planning.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Successful Planning", "Dashiell Hammett", "quotes/successful-planning.html");
}
ix++;
link = "quotes/ten-thousand-fools-proclaim-themselves.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Ten thousand fools proclaim themselves", "Martin Luther King Jr.", "quotes/ten-thousand-fools-proclaim-themselves.html");
}
ix++;
link = "quotes/the-arc-of-history.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "The Arc of History", "Martin Luther King Jr.", "quotes/the-arc-of-history.html");
}
ix++;
link = "quotes/the-art-of-progress.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "The Art of Progress", "Alfred North Whitehead", "quotes/the-art-of-progress.html");
}
ix++;
link = "quotes/the-discomfort-of-thought.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "The Discomfort of Thought", "John F. Kennedy", "quotes/the-discomfort-of-thought.html");
}
ix++;
link = "quotes/thinkings-a-dizzy-business.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Thinking's a Dizzy Business", "Dashiell Hammett", "quotes/thinkings-a-dizzy-business.html");
}
ix++;
link = "quotes/unarmed-truth-and-unconditional-love.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("Quotes", "", "2006-11-30 14:29:31", "Unarmed Truth and Unconditional Love", "Martin Luther King Jr.", "quotes/unarmed-truth-and-unconditional-love.html");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("", "", "", "", "", "");
}
ix++;
link = "";
if (link != "") {
  pages_by_descending_date[ix] = new Page("In other words, it is the perfect book for our times.", "", "", "", "", "");
}
ix++;
link = "news/a-staggering-number-of-the-worlds-children-are-breathing-toxic-air.html";
if (link != "") {
  pages_by_descending_date[ix] = new Page("News", "", "", "A staggering number of the world's children are breathing toxic air", "", "news/a-staggering-number-of-the-worlds-children-are-breathing-toxic-air.html");
}
ix++;

document.write("<p>First page has title of " + pages_by_descending_date[0].title) + ".</p>";

var thisURL = "http://www.practopians.org/quotes/to-simply-see-human-beings.html";
 
document.write("<p>This page has a URL of " + thisURL + ".</p>");

next = nextPage(pages_by_descending_date, thisURL, "", "");

document.write('<p>Next page is <a href="' + next.link + '">' + next.title + '</a></p>');
