$(document).ready(function() {
  console.log('DOM content loaded!');

  const searchBtn = $('#search-button');
  const movieInput = $('#movieInput');
  const alertInput = $('#alertInput');
  const searchResults = $('#search-results');

  // Leftover variables from other search criteria
  // const directorInput = $('#directorInput');
  // const actorInput = $('#actorInput');

  // Displays the Search Results section upon searching for a Movie Title

  searchBtn.on('click', async function () {
    if (movieInput.val() == "") {
      alertInput.text("Please input at a movie title.");
    }
    else {
      $.ajax(`/api/${movieInput.val()}`, {
        type: 'GET'
      }).then(function (data) {
        searchResults.empty();
        for (i = 0; i < data.results.length; i++) {
          searchResults.append(`<hr><div>
                      <div class="row">
                          <div class="col-lg-3">
                              <img src="${data.results[i].imageurl[0]}" alt="movie-poster" class="poster">
                          </div>
                          <div class="col-lg-9" id="results-content">
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
                          <div class="col-sm-12 comments-section">
                          </div>
                      </div>
                      <br>
                      <hr>
                      <div class="row">
                          <div class="col-sm-12">
                              <h4>Leave a Comment</h4>
                              <textarea class="form-control comment-text" type="text" placeholder="Type your comment here..." rows="3"></textarea>
                              <button type="submit" class="btn btn-primary comment-btn" data-imdbid="${data.results[i].imdbid}">Comment <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16" style="margin-left: 6px;">
                                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                  </svg></button>
                          </div>
                      </div>
                      </div><br>`);
          let commentBtn = searchResults.find(".comment-btn").last();

          if (data.results[i].comments.length >= 1) {
            for (let comment of data.results[i].comments) {
              $('.comments-section').last().append(`<p class="user-comment">${comment.body}</p>`);
            }
          }
            

          commentBtn.on('click', function() {
            let movieSection = $(this).parent().parent().parent();
            let commentText = movieSection.find(".comment-text").val();
            if (commentText !== "") {
              $.ajax(`/api/comments`, {
                type: 'POST',
                data: { 
                  body: commentText,
                  movieId: $(this).attr("data-imdbid")
                }
              }).then(function (data) {
                console.log('movieSection');
                movieSection.find('.comments-section').append(`<p class="user-comment">${commentText}</p>`)
                movieSection.find(".comment-text").val("");
                }).catch(err => console.log(err));
            }
          });
        }
      }).catch(err => console.log(err));

      alertInput.empty();
     
    }
  })
});
