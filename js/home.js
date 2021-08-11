getreceipts("strawberry");
var receipts=[];
var links=document.getElementsByClassName("nav-link");
for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(eventinfo){
        var currentMeal=eventinfo.target.text;
        getreceipts(currentMeal);
    })
}
function getreceipts(meal){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
     
        if (httpRequest.readyState==4 && httpRequest.status==200) {
            receipts=JSON.parse(httpRequest.response).recipes;
        }
        displayReceipts();
    })
   
}


 function displayReceipts(){
    
    var cols=``
    for(var i=0 ; i<receipts.length;i++)
    {
        cols+=
        `
         <div class="col-md-4 my-3">
         <div>
         <img class=" w-100 receipts-img " src="${receipts[i].image_url}">
         <h3>${receipts[i].title}</h3>
         <button class="btn btn-outline-dark"><a class="text-info text-decoration-none " target="_blank" href="${receipts[i].source_url}">Source Website</a></button>
         <button class="btn btn-outline-info"><a class="text-dark text-decoration-none " target="_blank" href="readmore.html?rid=${receipts[i].recipe_id}">Read More</a></button>
         </div>
         </div>
        `
    }
    document.getElementById("postsRow").innerHTML=cols;
 }

