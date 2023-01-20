// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {

  let numberOfCakes = 0;

  for (const ingredient in recipe) {

    if (!available[ingredient] || recipe[ingredient] > available[ingredient]) {
      return 0;
    }

    let numberOfCakesByIngredient = Math.floor(available[ingredient] / recipe[ingredient]);

    if (numberOfCakes > numberOfCakesByIngredient || numberOfCakes === 0) {
      numberOfCakes = numberOfCakesByIngredient;
    }
  }
  return numberOfCakes;
}