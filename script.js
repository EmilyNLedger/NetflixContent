function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";
var Title_Of_Contents = getColumn(url, 2);
var Countries = getColumn(url, 3);
var Genres = getColumn(url, 7);
var Release_Years = getColumn(url, 5);
var Ratings = getColumn(url, 6);
var Types = getColumn(url, 1);



/*
Takes a country as a parameter and returns a list of movies/tv shows created in that country
country - (string) is the name the country that produced that movie or tv show
return- (list) that list of all movies produced from that country
*/
function getCountry(country){
  var result = [];
    for(var i = 0; i < Title_Of_Contents.length; i++){
        if(Countries[i].toLowerCase().includes(country.toLowerCase())){
          result.push(Title_Of_Contents[i])
        }
      }
       if(result.length == 0){
        return "That country doesn't exist"
      }
      else{
        return result;
    }
}
// console.log(getCountry("United Statesss"));      


/*
Takes a genre as a parameter and returns a list of movies/tv shows that are classified under that genre
genre - (string) is the name of a genre that the movie/tv show is catagorized under
return - (list) returns a list of all the movies/tv shows that fall under the parameter or That Genre does not exist
*/

function getGenre(genre){
  var result = [];
    for(var i = 0; i < Title_Of_Contents.length; i++){
      if(Genres[i].toLowerCase().includes(genre.toLowerCase())){
        result.push(Title_Of_Contents[i])
      }
    }
    if(result.length == 0){
      return "That Genre does not exist"
    } else {
      return result;
    }

}

console.log(getGenre("HorRor"));

/*
Takes a rating as a paramter and returns a list of movies/tv shows that are classified under that rating
rating - (string) is the name 
return - (list) list of all movies/ tv shows under that rating  or That Rating does not exist
*/

function getRating(rating){
  var result = [];
    for(var i = 0; i < Title_Of_Contents.length; i++){
      if(Ratings[i].toLowerCase().includes(rating.toLowerCase())){
    result.push(Title_Of_Contents[i])
      }
    }
    if(result.length == 0){
      return "That Rating does not exist"
    } else {
      return result;
    }

}
//  console.log(getRating("PG-13"))




/*
Takes a year as a parameter and returns a list of movies/tv shows created in that year
year - (number) is the release date of the movie or tv show
return - (list) list of all movies produced from that country
*/

function getYear(year){
  var result = [];
    for(var i = 0; i < Title_Of_Contents.length; i++){
      if(Release_Years[i].toLowerCase().includes(year)){
    result.push(Title_Of_Contents[i])
      }
    }
    if(result.length == 0){
        return ["No Titles under that year"];
    } else {
      return result;
    }
}
// console.log(getYear(1986))

/*
Takes a title as a parameter and returns either movie or tv show 
title - (variable) is the release date of the movie or tv show
return - (variable) either the word list or movie to explain whether the title is a movie or a tv show
*/

function getType(title){
    for(var i = 0; i < Title_Of_Contents.length; i++){
      if(Title_Of_Contents[i].includes(title)){
        return Types[i];
      }
    }
   
    return "No Titles under that name"
  
}

// console.log(getType("The Aerial"));


