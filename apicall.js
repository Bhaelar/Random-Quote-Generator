$(document).ready(function () {
	var api = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	var quote; 
	var author;
	var api2 = "http://www.colr.org/json/color/random";
	function getColor () {
		$.getJSON(api2, function(data) {
			var color = "#" + data.colors[0].hex;
			$("body").css("background",color);
			$(".text").css("color",color);
			$(".new-quote").css("background",color);
			$("#tweet-quote").css("color",color);
		});
	}
	function getQuote() {
		$.getJSON(api, function(data) {
		
			quote = "'" + data.quoteText + "'";
			author = "-" + data.quoteAuthor;
			$(".text").html(quote).fadeIn(1500);
			$(".author").html(author).fadeIn(1500);
		});
		
	}
	getColor();
	getQuote();
	
	$(".new-quote").click(function() {
		getColor();
		getQuote();
	});
	$("#tweet-quote").on("click",function() {
	   window.open("https://twitter.com/intent/tweet?text=" + quote + " " + author);
	 });
	
})