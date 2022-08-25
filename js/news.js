/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//variables
const generalBtn = document.getElementById("General");
const businessBtn = document.getElementById("business");
const SportsBtn = document.getElementById("Sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const UsBtn = document.getElementById("Us");
const scienceBtn = document.getElementById("science");
const localBtn = document.getElementById("local");
const WorldBtn = document.getElementById("World");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

//array
var newsDataArr =[];

//apis

const API_KEY = "8b1c875ac024483d948fa28f7418ca53";
const  HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apikey=";
const  GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apikey=";
const  BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=";
const  SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apikey=";
const  TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apikey=";
const  ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apikey=";
const  US_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=us&apikey=";
const  SCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=science&apikey=";
const  LOCAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=local&apikey=";
const  WORLD_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=world&apikey=";
const  SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";



window.onload = (function(){
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
});

generalBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>General news</h4>";
    fetchGeneralNews();
});
businessBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Business</h4>";
      fetchBusinessNews();
});
SportsBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Sports</h4>";
      fetchSportsNews();
});
technologyBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Technology</h4>";
      fetchTechnologyNews();
});
entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Entertainment</h4>";
      fetchEntertainmentNews();
});
UsBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Us</h4>";
      fetchUsNews();
});
scienceBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Science</h4>";
      fetchScienceNews();
});
localBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Local</h4>";
      fetchLocalNews();
});
WorldBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>World</h4>";
      fetchWorldNews();
});
searchBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Search :"+newsQuery.value+"</h4>";
      fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const  fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const  fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
      console.log(myJson);
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const fetchUsNews = async () => {
    const response = await fetch(US_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const fetchScienceNews = async () => {
    const response = await fetch(SCIENCE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const fetchLocalNews = async () => {
    const response = await fetch(LOCAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const fetchWorldNews = async () => {
    const response = await fetch(WORLD_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};
const fetchQueryNews = async () => {
    if(newsQuery.value === null)
        return;
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apikey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
      const myJson = await  response.json();
       newsDataArr = myJson.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
};

function displayNews(){
          newsdetails.innerHTML ==="";
    if( newsDataArr.length ===0){
      newsdetails.innerHTML = "<5>No data found</5>";  
      return;
    }
    newsDataArr.forEach(news =>{
        
        var date = news.publishedAt.split('T');
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
        
        var card =  document.createElement('div');
        card.className ="p-2";
         
         var image = document.createElement('img');
         image.setAttribimageute("height", "marchparnt");
         image.setAttribimageute("width", "100%");
         image.src= news.URLToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
       newsHeading.innerHTML = news.title; 
       
       var dateHeading = document.createElement('h6');
           dateHeading.className = "text-primary";
           dateHeading.innerHtml = date[0];
       
       var description = document.createElement('p');
           description.className = "text-muted";
           description.innerHtml = news.description;
           
           var link = document.createElement('a');
               link.className = "btn btn-dark";
               link.setAttribute("target", "_blank");
               link.href = news.Url;
               link.innerHTML = "Read more";
           
                    cardBody.appendChild(newsHeading);
                    cardBody.appendChild(dateHeading);
                    cardBody.appendChild(description);
                    cardBody.appendChild(link);

                    card.appendChild(image);
                    card.appendChild(cardBody);

                    col.appendChild(card);

                    newsdetails.appendchild(col);
           
    });
}
