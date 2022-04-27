const RecipeEl = document.getElementById("recipe");

const GetAllRecipe = () => {

// Put your ./recipe.json with your JSON feed
fetch('./recipe.json').then(response => {
  return response.json();

}).then(data => {
  // Work with JSON data here
  console.log(data);

  data.map(recipe => {
    return (
      RecipeEl.innerHTML += `
      
    <div class="container">
      <div class="grid">
          <div class="recipe-image">
          <img src="${recipe.imageURL}" class="card-img-top" alt="...">
          </div>
          <h2>${recipe.name}</h2>
          <div>
            <p class="time">Cook & Prep Time: ${recipe.cooktime}</p>
          </div>
          <div>
          <p class="steps">Ingredients</p>
            <ul>
              <li>${recipe.ingredients}</li>
            </ul>
          </div>
          <div>
          <p class="steps">Method</p>
            <ul>
            <li>${recipe.steps[0]}</li>
            <li>${recipe.steps[1]}</li>
            <li>${recipe.steps[2]}</li>
            <li>${recipe.steps[3]}</li>
            </ul>
          </div>
      </div>
      
    </div>
    `
  )
})



}).catch(err => {
  // Do something for an error here
});

};

GetAllRecipe();