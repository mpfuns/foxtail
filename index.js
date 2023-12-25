//www.thecocktaildb.com/api/json/v1/1/random.php

 const momentElement= document.querySelector('#moment')

   async function randomMoment(){
    momentElement.classList+= ' cocktail__loading'
     const randomCocktail= await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

     const randomCocktailData=  await randomCocktail.json()
     const oneCocktail= randomCocktailData.drinks
     momentElement.classList.remove('cocktail__loading')

   momentElement.innerHTML= oneCocktail.map(cocktail => cocktailHTML(cocktail)).join("");
    
   }

   randomMoment();

   
    function cocktailHTML(cocktail){
         return `
         <figure class="cocktail--img-container" ><img  src=${cocktail.strDrinkThumb} /></figure>
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
            <p class="instruc">${cocktail.strInstructions}</p>
        `
    }