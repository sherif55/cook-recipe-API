var receipeImg=document.getElementById("receipeImg");
var publisher=document.getElementById("publisher");
var title=document.getElementById("title");
var query= new URLSearchParams(location.search);
var currentId=query.get('rid');
var recipeData;
var ingredients;
function getRecipeDetails(){

    var httpRequest=new XMLHttpRequest();
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${currentId}`);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
        if(httpRequest.readyState==4&&httpRequest.status==200)
        {
           recipeData=JSON.parse(httpRequest.response).recipe;
           receipeImg.src=recipeData.image_url;
           ingredients=recipeData.ingredients;
           publisher.innerHTML=recipeData.publisher;
           title.innerHTML=recipeData.title;
           console.log(recipeData);
           displayIngredients();
           
        }
    })
}
function displayIngredients(){

    var ingredientsLis=``;
    for(var i=0 ;i<ingredients.length;i++)
    {
        ingredientsLis+=
        `
        <li>${ingredients[i]}</li>
        `

    }
    document.getElementById("ingredientsUl").innerHTML=ingredientsLis;
}

getRecipeDetails();