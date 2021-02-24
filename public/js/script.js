$(document).ready(function() {
  console.log('DOM content loaded!');

  const searchBtn = $('#search-button');
  const movieInput = $('#movieInput');
  const alertInput = $('#alertInput');
  const searchResults = $('#search-results');

  // Leftover variables from other search criteria
  // const directorInput = $('#directorInput');
  // const actorInput = $('#actorInput');

  async function getPlatform(cb) {
    await fetch("https://ott-details.p.rapidapi.com/getPlatforms?region=IN", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "bc1026b9b5msh09f9bd72ecaf669p16f9e1jsn203e48375d38",
        "x-rapidapi-host": "ott-details.p.rapidapi.com"
      }
    })
      .then(response => {
        console.log(response);
        cb(response);
      })
      .catch(err => {
        console.error(err);
      });

  }

  // Displays the Search Results section upon searching for a Movie Title

  searchBtn.on('click', async function getMovie() {
    if (movieInput.val() == "") {
      alertInput.text("Please input at a movie title.");
    }
    else {
      $.ajax(`/api/${movieInput.val()}`, {
        type: 'GET'
      }).then(function (data) {
        console.log(data);
        
        searchResults.empty();
        for (i = 0; i < data.results.length; i++) {
          searchResults.append(`<hr>
                      <div class="row">
                          <div class="col-lg-3">
                              <img src="${data.results[i].imageurl[0]}" alt="movie-poster" class="poster">
                          </div>
                          <div class="col-lg-9" id="results-content">
                              <button type="button" class="btn btn-danger watchListBtn" style="float: right;">Add to Watch List</button>
                              <h2 class="movieTitle">${data.results[i].title}</h2>
                              <h4>Synopsis</h4>
                              <p class="synopsis">${data.results[i].synopsis}</p>
                              <h4>Relase Year</h4>
                              <p class="year">${data.results[i].released}</p>
                              <h4>Streaming Service</h4>
                              <p class="streaming">N/A</p>
                          </div>
                      </div>
                      <h4 class="comments-header">Comments</h4>
                      <div class="row">
                          <div class="col-sm-12" class="comments-section">
                              <p class="comment-title">Title</p>
                              <p class="user-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore culpa placeat labore voluptates odio modi possimus nam nesciunt, natus atque? Omnis dolor esse nesciunt necessitatibus ea! Natus, ducimus veniam.</p>
                          </div>
                      </div>
                      <br>
                      <hr>
                      <div class="row">
                          <div class="col-sm-12">
                              <h4>Leave a Comment</h4>
                              <textarea class="form-control" type="text" placeholder="Type your comment here..." rows="3"></textarea>
                              <button type="submit" class="btn btn-primary">Comment <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16" style="margin-left: 6px;">
                                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                  </svg></button>
                          </div>
                      </div>
                      <br>`)
        }
      }).catch(err => console.log(err));

      alertInput.empty();
     
    }
  })
});
