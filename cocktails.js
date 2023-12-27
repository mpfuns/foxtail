//www.thecocktaildb.com/api/json/v1/1/search.php?f=

const cocktailListEl=  document.querySelector('.cocktails-list');
const cocktailsSection= document.querySelector('.found-title')
const homePageLetter= localStorage.getItem('letter')
let currentLetter=""




async function  renderCocktails (letter){
    cocktailListEl.classList+= ' cocktail__loading'
 const cocktails= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)

 const cocktailsData= await cocktails.json();
 cocktailListEl.classList.remove('cocktail__loading')

 cocktailListEl.innerHTML= cocktailsData.drinks.map(cocktail => cocktailItemsHTML(cocktail)).join('')

cocktailsSection.innerHTML= `<h1>All drinks found by letter "${letter}"</h1>`

if(cocktailsData.drinks.length %2 ===1){
    cocktailListEl.innerHTML+= oddList()
    
}

}

renderCocktails(homePageLetter);

function cocktailItemsHTML(cocktail){
    return `
    <div class="cocktail__item">
    <figure class="cocktail-list__img-container" ><img  src=${cocktail.strDrinkThumb} /></figure>
       <h3>${cocktail.strDrink} <em>(${cocktail.strAlcoholic})</em></h3>
       <h4>${cocktail.strGlass} is needed</h4>
       
       <h4>Ingredients</h4>
       <ul class="ingredients-list">
       <li>${cocktail.strIngredient1 || ""} ${cocktail.strMeasure1 || ""}</li>
       <li> ${cocktail.strIngredient2 || ""} ${cocktail.strMeasure2 || ""}</li>
       <li>${cocktail.strIngredient3 || ""} ${cocktail.strMeasure3 || ""}</li>
       <li>${cocktail.strIngredient4 || ""} ${cocktail.strMeasure4 || ""}</li>
       <li>${cocktail.strIngredient5 || ""} ${cocktail.strMeasure5 || ""}</li>
       <li>${cocktail.strIngredient6 || ""} ${cocktail.strMeasure6 || ""}</li>
       <li>${cocktail.strIngredient7 || ""} ${cocktail.strMeasure7 || ""}</li>
       <li>${cocktail.strIngredient8 || ""} ${cocktail.strMeasure8 || ""}</li>
       <li>${cocktail.strIngredient9 || ""} ${cocktail.strMeasure9 || ""}</li>
       <li>${cocktail.strIngredient10 || ""} ${cocktail.strMeasure10 || ""}</li>
       <li>${cocktail.strIngredient11 || ""} ${cocktail.strMeasure11 || ""}</li>
       <li>${cocktail.strIngredient12 || ""} ${cocktail.strMeasure12 || ""}</li>
       <li>${cocktail.strIngredient13 || ""} ${cocktail.strMeasure13 || ""}</li>
       <li>${cocktail.strIngredient14 || ""} ${cocktail.strMeasure14 || ""}</li>
       <li>${cocktail.strIngredient15 || ""} ${cocktail.strMeasure15 || ""}</li>
       </ul>
       <h4>Instruction</h4>
       <p class="instruc__max">${cocktail.strInstructions}</p>
       </div>
   `
}

function oddList (){
    return `<div class="space"></div>` 
}

function searchCocktail(){
    
    renderCocktails(currentLetter);
   
    
  
  
     }

function firstLetter(event ){
 currentLetter=event.target.value
 localStorage.setItem('letter', currentLetter)  
        }    
        
        
function characterCheck(event){

            let charCode= event.which || event.keyCode;
            let charStr= String.fromCharCode(charCode);
            const regex= /^[a-zA-Z]$/;
            
            if(!regex.test(charStr)){
              event.preventDefault();
            }
        }