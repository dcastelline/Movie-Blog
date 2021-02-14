const searchBtn = $('#search-button');
const movieInput = $('#movieInput');
const alertInput = $('#alertInput');
const numberOfSearches = $('#numSearchBar');

// Each Movie section in the main page, encompassed in one HTML element
const firstSearch = $('#search-results-one');
const secondSearch = $('#search-results-two');
const thirdSearch = $('#search-results-three');
const fourthSearch = $('#search-results-four');
const fifthSearch = $('#search-results-five');

// Leftover variables from other search criteria
// const directorInput = $('#directorInput');
// const actorInput = $('#actorInput');

// Destination Elements in the HTML for the API responses
const firstMovieTitle = $("#movieTitle1");
const secondMovieTitle = $("#movieTitle2");
const thirdMovieTitle = $("#movieTitle3");
const fourthMovieTitle = $("#movieTitle4");
const fifthMovieTitle = $("#movieTitle1");

const firstSynopsis = $("#synopsis1");
const secondSynopsis = $("#synopsis2");
const thirdSynopsis = $("#synopsis3");
const fourthSynopsis = $("#synopsis4");
const fifthSynopsis = $("#synopsis5");

const firstReleaseYear = $("year1");
const secondReleaseYear = $("year2");
const thirdReleaseYear = $("year3");
const fourthReleaseYear = $("year4");
const fifthReleaseYear = $("year5");

const firstStreamServ = $("streaming1");
const secondStreamServ = $("streaming2");
const thirdStreamServ = $("streaming3");
const fourthStreamServ = $("streaming4");
const fifthStreamServ = $("streaming5");
// End of Destination Elements for API responses

// Hides the Movie section results of the page
firstSearch.hide();
secondSearch.hide();
thirdSearch.hide();
fourthSearch.hide();
fifthSearch.hide();

// Displays the Search Results section upon searching for a Movie Title
searchBtn.on('click', () => {
    if (movieInput.val() == ""){
        alertInput.text("Please input at a movie title.");
    }
    else {
        alertInput.hide();
        
        // numOfSearches gives us the amount of searches the user wants to make in interger form
        let numOfSearches = parseInt(numberOfSearches.val());
        if (numOfSearches === 1){
            firstSearch.show();
        }
        else if (numOfSearches === 2){
            firstSearch.show();
            secondSearch.show();
        }
        else if (numOfSearches === 3){
            firstSearch.show();
            secondSearch.show();
            thirdSearch.show();
        }
        else if (numOfSearches === 4){
            firstSearch.show();
            secondSearch.show();
            thirdSearch.show();
            fourthSearch.show();
        }
        else if (numOfSearches === 5){
            firstSearch.show();
            secondSearch.show();
            thirdSearch.show();
            fourthSearch.show();
            fifthSearch.show();
        }
    }
});