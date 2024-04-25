let searchInp = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let row = document.getElementById("row");

 

 

searchBtn.addEventListener("click",(e) => {
  e.preventDefault();
  let movieName = searchInp.value;
  let APIKey = "ac8ddaef";
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${APIKey}`;

  if (movieName.length <= 0) {
      row.innerHTML = ` <h3 style="color:white; margin-top:20px;" >Search a movie name </h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {

          row.innerHTML =`
         <div class="card">
          <div class="card__top">
            <img
              src=${data.Poster}
              alt=""
            />
            <div class="card__top-content">
              <h2>${data.Title}</h2>
              <div class="rating">
                <img
                  src="	https://nc0312.github.io/MovieDetails.github.io/star.svg"
                />
                <h4>${data.imdbRating}</h4>
              </div>
              <div class="details">
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
              </div>
              <div class="genre">
              <div>${data.Genre.split(",").join("</div><div>")}</div>
              </div>
            </div>
          </div>
          <h3>Plot:</h3>
             <p>${data.Plot}</p>
             <h3>Cast:</h3>
             <p>${data.Actors}</p>
        </div>
         `;
      }).catch(()=>{
          row.innerHTML =`<h3 style="color:white; margin-top:20px;">Error Occured</h3>`;
      });
  }
});

