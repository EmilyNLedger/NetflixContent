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
var Countries = getColumn(url, 3);
// console.log(Countries);
var Genres = getColumn(url, 7);
// console.log(Genres);
var Release_Year = getColumn(url, 5);
// console.log(Release_Year);
var Ratings = getColumn(url, 6);
// console.log(Ratings);
var Type = getColumn(url, 1);
// console.log(Type);
function getCountry(){

}

/*
Takes a country as a parameter and returns a list of movies/tv shows created in that country
country - (string) is the name the country that produced that movie or tv show
return- (list) that list of all movies produced from that country
*/



/*
Takes a genre as a parameter and returns a list of movies/tv shows that are classified under that genre
genre - (string) is the name 

*/