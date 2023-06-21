console.log("Script");

var user = "Ricky";// init and assign of the value
var age = 99;//29
var isstudent = true;

var normalage = age - 70;

var name = "Dottie"
var email = "dorothy@gmail.com"
var age = "99"
var country = "usa"
var salary = "100000"

console.log(user,age,isstudent);
//concatenation
//document.write("<p> Name: " + user + "</p><p> Age:" +age + "</p><p> Active student: " +isStudent);

//template string

let childrennumber = "99"
let partnername = "Ben"
let geolocation = "Oklahoma"
let jobtitle = "Military"

document.write(`You will be in the ${jobtitle} in ${geolocation} and married to ${partnername} with ${childrennumber} kids.`)

var name = "Dottie";
var email = "dorothy.schwark@gmail.com";
var password = "enter password";
var age = "41";
var country = "America";
var salary = 15000*12;

document.write(`
<p>Name: ${name}</P>
<p>Email: ${email}</p>
<p>Salary: ${salary}</p>
`)

//homework assignmnet 1, 20 variables

var selectlocation = "USA";
var language = "english";
var fullname = "Dottie";
var email = "dorothy.schwark@gmail.com";
var password = "enterpassword";
var whoiswatching = "Adults";
var type = "docusoap";
var browsebylanguage = "list languages";
var newreleases = "list new shows";
var tvshows = "list shows";
var movies = "list movies";
var popularshows = "list popular shows";
var topmovies = "list movies";
var top10moviesusa = "list top 10 movies";
var top10showsusa = "list top 10 shows";
var nameofshow = "sellingsunset";
var rating = "TVMA";
var seasons = 4;
var episdoes = 40;
var length = 35;

document.write(`
<p>Location:${selectlocation}</p>
<p>Language: ${language}</p>
<p>Name: ${fullname} </p>
<p>Email: ${email}</p>
<p>Password:${password}</p>
<p>Who is Watching: ${whoiswatching}</p>
<p>Search: ${type}</p>
<p>Browse by Language: ${language}</p>
<p>New Releases:${newreleases}</p>
<p>TV Shows ${tvshows}</p>
<p>Movies ${movies}</p>
<p>Popular Shows ${popularshows}</p>
<p>Top Movies: ${topmovies}</p>
<p>Top 10 Movies in the USA:${top10moviesusa}</p>
<p>Top Shows in the USA: ${top10showsusa}</p>
<p>Name of Show:${nameofshow}</p>
<p>Rating: ${rating}</p>
<p>Seasons: ${seasons}</p>
<p>Episodes: ${episdoes}</p>
<p>Length: ${length}</p>
`)



