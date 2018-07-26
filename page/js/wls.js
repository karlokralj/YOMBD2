function removeMovie(title){
	var watchlists = JSON.parse(localStorage.getItem("watchlists"));
	for(var i = 0;i <watchlists.length;i++){
		if(watchlists[i].title == title){
			watchlists.splice(i, 1);
		}
	}

	localStorage.setItem("watchlists", JSON.stringify(watchlists));

	fetchWatchlists();
}


/*test*/
/*function watchd1(title){
	var watchlists = JSON.parse(localStorage.getItem('watchlists'));
	for(var i = 0;i <watchlists.length;i++){
		if(watchlists[i].title == title){
			console.log("cool");
			watchlists[i].watched = true;
		}
		else if(watchlists[i].title == title){
			console.log("not cool");
			watchlists[i].watched = false;
		}

				
}

	localStorage.setItem("watchlists", JSON.stringify(watchlists));

	fetchWatchlists();
}
*/


/*test 2-radi*/
function watchd(title){
	var watched = '(Watched)';
	var watchlists = JSON.parse(localStorage.getItem('watchlists'));
	for(var i = 0;i <watchlists.length;i++){
		if(watchlists[i].title == title){
			console.log("cool");
			watchlists[i].title = title + watched;
		}
		if(watchlists[i].title.includes("(Watched)(Watched)")){
			console.log("notcool");
			watchlists[i].title = title.replace("(Watched)(Watched)", "(Watched)");
		} 
	}

	localStorage.setItem("watchlists", JSON.stringify(watchlists));

	fetchWatchlists();
}




function watchd2(title){
	var watched = '(Watched)';
	var watchlists = JSON.parse(localStorage.getItem('watchlists'));
	for(var i = 0;i <watchlists.length;i++){
		if(watchlists[i].title == title){
			console.log("not cool");
			watchlists[i].title = title.replace("(Watched)", "");
		} 
	}

	localStorage.setItem("watchlists", JSON.stringify(watchlists));

	fetchWatchlists();
}



function fetchWatchlists(){
	var watchlists = JSON.parse(localStorage.getItem("watchlists"));
	var watchlistsResults = document.getElementById("watchlistsResults");
	
	
	watchlistsResults.innerHTML = '<div class="container">'+
								  '<input type="text" class="form-control form-1" id="filterEnput" placeholder="Search by title">'+
								  '<input type="text" class="form-control form-2" id="filterInput" placeholder="Search by actors">'+
								  '<input type="text" class="form-control form-3" id="filterEenput" placeholder="Search by genre">'+
								  '<div class="container2">'+
								  '<p> Filter: </p>'+
								  '<a class="btn btn-normal" id="Wtchd">Watched</a>'+
								  '<a class="btn btn-normal" id="nWtchd">Not watched</a>'+
								  '<input type="button" value="Refresh" onClick="location.href=location.href" class= "btn">'
	                              '</div>'+
	                              '</div>';
	for(var i = 0; i < watchlists.length; i++){
		var title = watchlists[i].title;
		var genre = watchlists[i].genre;
		var actors = watchlists[i].actors;
		var year = watchlists[i].year;
		var date = watchlists[i].Date;
		var watched = watchlists[i].watched;

		watchlistsResults.innerHTML +=  '<ul class="uList">'+
										'<li class="moviee">'+
										'<div class="divclass">'+
										'<h3 class="omg">'+title+
										'</h3>'+
										'<p class="omg">'+genre+
										'</p>'+
										'<p class="omg">'+actors+
										'</p>'+
										'<p class="omg2">'+year+
										'</p>'+
										'<p class="omg2">Date Added: '+date+
										'</p>'+
										'<br>'+
										'<a onclick="removeMovie(\''+title+'\')" class="btn btn-danger">Remove</a>'+
										'<a onclick="watchd(\''+title+'\')" class="btn btn-normal">Watched</a>'+
										'<a onclick="watchd2(\''+title+'\')" class="btn btn-normal2">Not Watched</a>'+
										'</div>'+
										'</li>'+
										'</ul>'
										

										/*$.getScript("./js/srch.js")*/	
		
	}
let filterEnput = document.getElementById("filterEnput");
		filterEnput.addEventListener("keyup", filterOne);
		function filterOne(){
		let filterValue = document.getElementById("filterEnput").value.toUpperCase();
		let uList = document.getElementsByClassName('uList');
		for (var i = 0; i < uList.length; ++i) {
    	let li = uList[i].querySelectorAll("li.moviee");  
    	let a = uList[i].querySelectorAll("a.btn");
		
		for(let i = 0;i < li.length;i++){
			let p = li[i].getElementsByClassName('omg')[0];
			if(p.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
			}
			else {
			li[i].style.display = 'none';
				}
			}
		}							
 	}


let filterInput = document.getElementById("filterInput");
		filterInput.addEventListener("keyup", filterTwo);
		function filterTwo(){
		let filterValue1 = document.getElementById("filterInput").value.toUpperCase();
		let uList1 = document.getElementsByClassName('uList');
		for (var i = 0; i < uList1.length; ++i) {
    	let li1 = uList1[i].querySelectorAll("li.moviee");  
    	let a1 = uList1[i].querySelectorAll("a.btn");
		
		for(let i = 0;i < li1.length;i++){
			let p1 = li1[i].getElementsByClassName('omg')[2];
			if(p1.innerHTML.toUpperCase().indexOf(filterValue1) > -1){
			li1[i].style.display = '';
			}
			else {
			li1[i].style.display = 'none';
				}
			}
		}
}
let filterEenput = document.getElementById("filterEenput");
		filterEenput.addEventListener("keyup", filterThree);
		function filterThree(){
		let filterValue2 = document.getElementById("filterEenput").value.toUpperCase();
		let uList2 = document.getElementsByClassName('uList');
		for (var i = 0; i < uList2.length; ++i) {
    	let li2 = uList2[i].querySelectorAll("li.moviee");  
    	let a2 = uList2[i].querySelectorAll("a.btn");
		
		for(let i = 0;i < li2.length;i++){
			let p2 = li2[i].getElementsByClassName('omg')[1];
			if(p2.innerHTML.toUpperCase().indexOf(filterValue2) > -1){
			li2[i].style.display = '';
			}
			else {
			li2[i].style.display = 'none';
				}
			}
		}							
 	}

 	var wtchd = document.getElementById("Wtchd");
 	wtchd.addEventListener("click", filterFour);
 	function filterFour(){
 		let uList3 = document.getElementsByClassName('uList');
 		for (var i = 0; i < uList3.length; ++i) {
    	let li3 = uList3[i].querySelectorAll("li.moviee");  
    	let a3 = uList3[i].querySelectorAll("a.btn");

    	for(let i = 0;i < li3.length;i++){
			let p3 = li3[i].getElementsByClassName('omg')[0];
			if(p3.innerHTML.includes("(Watched)")){
			li3[i].style.display = '';
			}
			else {
			li3[i].style.display = 'none';
				}
			}
		}							
 	}

 	var nWtchd = document.getElementById("nWtchd");
 	nWtchd.addEventListener("click", filterFive);
 	function filterFive(){
 		let uList4 = document.getElementsByClassName('uList');
 		for (var i = 0; i < uList4.length; ++i) {
    	let li4 = uList4[i].querySelectorAll("li.moviee");  
    	let a4 = uList4[i].querySelectorAll("a.btn");

    	for(let i = 0;i < li4.length;i++){
			let p4 = li4[i].getElementsByClassName('omg')[0];
			if(!p4.innerHTML.includes("(Watched)")){
			li4[i].style.display = '';
			}
			else {
			li4[i].style.display = 'none';
				}
			}
		}							
 	}
 }









