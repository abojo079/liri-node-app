require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api'); //Using the Spotify api and getting the key from keys.js
var spotify = new Spotify(keys.spotify);

var moment = require('moment'); 
moment().format();

var axios = require('axios'); 

var fs = require('fs'); 

var search = process.argv[2]; 
var term = process.argv[3]; 

switch (search) {
    case "concert-this":
        concertThis(term);
        break;
    case "spotify-this-song":
        spotifySong(term);
        break;
    case "movie-this":
        movieThis(term);
        break;
    case "do-what-it-says":
        doThis(term);
        break;
};



function spotifySong(value) {
    if(typeof value === "undefined"){
        value = "The Sign";
    }


    spotify
    .search({ type: 'track', query: value })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var spotifyResults = 
                "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}

function movieThis(value) {
    if(!value){
        value = "mr nobody";
    }
    axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
            var movieResults = 
                "--------------------------------------------------------------------" +
                    "\nMovie Title: " + response.data.Title + 
                    "\nYear of Release: " + response.data.Year +
                    "\nIMDB Rating: " + response.data.imdbRating +
                    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                    "\nCountry Produced: " + response.data.Country +
                    "\nLanguage: " + response.data.Language +
                    "\nPlot: " + response.data.Plot +
                    "\nActors/Actresses: " + response.data.Actors;
            console.log(movieResults);
    })
    .catch(function (error) {
        console.log(error);
    });
    
}

//I was unable to complete the concert search portion and the append text to the text file