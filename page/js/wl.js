document.getElementById("addWatch").addEventListener("click", addTo);

function addTo(){
	var title = document.getElementById("title").outerText;
	var title2 = localStorage.getItem("watchlists");
	var genre = document.getElementById("genre").outerText;
	var actors = document.getElementById("actors").innerText;
	var year = document.getElementById("year").innerText;
	var poster = document.getElementById("poster").outerHTML;
	var dateAdded = new Date ();
	var watched = false;

	var watchlist = {
		title,
		genre,
		actors,
		year,
		Date: dateAdded,
		watched: watched
} 
	if(localStorage.getItem("watchlists") === null){
		
		var watchlists = [];
		watchlists.push(watchlist);
	}
	else if(title2.match(watchlist.title)){
		console.log(2);
		return false;
	}

	/*localStorage.setItem("poster", JSON.stringify(poster));
	localStorage.setItem("title", JSON.stringify(title));
	localStorage.setItem("genre", JSON.stringify(genre));
	localStorage.setItem("actors", JSON.stringify(actors));
	localStorage.setItem("year", JSON.stringify(year));*/
	if(localStorage.getItem("watchlists") === null){
		
		var watchlists = [];
		watchlists.push(watchlist);
		localStorage.setItem("watchlists", JSON.stringify(watchlists));
			} 
		else{
		var watchlists = JSON.parse(localStorage.getItem("watchlists"));
		watchlists.push(watchlist);
		localStorage.setItem("watchlists", JSON.stringify(watchlists));
	}  
}






