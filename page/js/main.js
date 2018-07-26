$(document).ready(()=> {
	$("#searchForm").on("submit", (e) => {
		let searchText =$("#searchText").val();
		getMovies(searchText);
		e.preventDefault();
	});
});

function getMovies(searchText){
	axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b199f269&s="+searchText)
		.then((response) => {
			console.log(response);
			let movies = response.data.Search;
			let output = "";
			$.each(movies, (index, movie) => {
				output += `
					<div class="col-md-3">
					<div class="well text-center">
						<img src="${movie.Poster}">
						<h5>${movie.Title}</h5>
						<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
					</div>
					</div>
				`;

			});

			$("#movies").html(output);
	})
	.catch((err) => {
		console.log(err);
	});
}

function movieSelected(id){
	sessionStorage.setItem("movieId", id);
	window.location = "movie.html";
	return false;
}

function getMovie(){
	let movieId = sessionStorage.getItem("movieId");
	axios.get("http://www.omdbapi.com/?apikey=b199f269&i="+movieId)
		.then((response) => {
			console.log(response);
			let movie = response.data;

			let output = `
				<div class="row">
					<div class="col-md-4">
						<img src="${movie.Poster}" class="thumbnail" id="poster">
					</div>
					<div class="col-md-8">
						<h3 id="title">${movie.Title}</h3>
						<ul class="list-group">
							<li class="list-group-item" id="genre">Genre: ${movie.Genre}</li>
							<li class="list-group-item" id="actors">Actors: ${movie.Actors}</li>
							<li class="list-group-item">Awards: ${movie.Awards}</li>
							<li class="list-group-item" id="year">Year: ${movie.Year}</li>
							<li class="list-group-item">Released: ${movie.Released}</li>
							<li class="list-group-item">imdbRating: ${movie.imdbRating}</li>
							<li class="list-group-item">Writer: ${movie.Writer}</li>
							<li class="list-group-item">Production: ${movie.Production}</li>
							<li class="list-group-item">Director: ${movie.Director}</li>
							<li class="list-group-item">Rated: ${movie.Rated}</li>
							<li class="list-group-item">Country: ${movie.Country}</li>
							<li class="list-group-item">Runtime: ${movie.Runtime}</li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="well">
						<h4>Plot</h4>
						<p>${movie.Plot}</p>
						<hr>
					</div>
				</div>
			`;

			$("#movie").html(output);
			
	})
	



}

