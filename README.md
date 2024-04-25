# NetflixContent
This function set can find all of the movies or tv shows in the Netflix database from a certain country, classified under a certain genre, classified under a certain rating, or produced during a certain year. It can also tell you whether a given title is a movie or a tv show. 
#
##### Takes a country as a parameter and returns a list of movies/tv shows created in that country
###### country - (string) is the name the country that produced that movie or tv show
###### return- (list) that list of all movies produced from that country
**` function getCountry(country) `**
#
##### Takes a genre as a parameter and returns a list of movies/tv shows that are classified under that genre
###### genre - (string) is the name of a genre that the movie/tv show is catagorized under
###### return - (list) returns a list of all the movies/tv shows that fall under the parameter or That Genre does not exist
**` function getGenre(genre) `**
#
##### Takes a rating as a paramter and returns a list of movies/tv shows that are classified under that rating
###### rating - (string) is the name 
###### return - (list) list of all movies/ tv shows under that rating  or That Rating does not exist
**` function getRating(rating) `**
#
##### Takes a year as a parameter and returns a list of movies/tv shows created in that year
###### year - (number) is the release date of the movie or tv show
###### return - (list) list of all movies produced from that country
**` function getYear(year) `**
#
##### Takes a title as a parameter and returns either movie or tv show 
###### title - (variable) is the release date of the movie or tv show
###### return - (variable) either the word list or movie to explain whether the title is a movie or a tv show
**` function getType(title) `**
