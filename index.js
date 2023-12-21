//www.thecocktaildb.com/api/json/v1/1/random.php

 const momentElement= document.querySelector('.section-moment')

   async function randomMoment(){
     const randomCocktail= await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

     const randomCocktailData=  await randomCocktail.json()

     
      console.log( randomCocktailData)
   }

   randomMoment();

   //15  for  both
    function cocktailHTML(cocktail){
         return `
         <figure><img  src="${cocktail.strDrinkThumb}"/></figure>
            <h3>${cocktail.strDrink} <em>(${cocktail.strAlcoholic})</em></h3>
            <h4>Ingredients</h4>
            <p>${cocktail.strIngredient1 || ""}${cocktail.strMeasure1 || ""}
            ${cocktail.strIngredient2 || ""}${cocktail.strMeasure2 || ""}
            ${cocktail.strIngredient3 || ""}${cocktail.strMeasure3 || ""}
            ${cocktail.strIngredient1 || ""}${cocktail.strMeasure1 || ""}
            
            
            </p>
            <h4>Instuction</h4>
            <p></p>
        `
    }