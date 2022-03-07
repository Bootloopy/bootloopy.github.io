var more = document.getElementById("more");
var log = document.getElementById("log");
var body = document.body;
var html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
var status = 1;

function toggle() {
	if (status == 1) {
		showMore();
	} else {
		showLess();
	}
}

function showMore() {
	setTimeout(function() {
		status = 0;
	}, 100);
	log.style.display = "block";
	more.innerHTML = "Show Less"
}

function showLess() {
	setTimeout(function() {
		status = 1;
	}, 100);
	log.style.display = "none";
	more.innerHTML = "More Versions";
	window.document.body.style.height = height;
}

more.addEventListener("click", toggle);
