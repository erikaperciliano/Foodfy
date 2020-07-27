function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".item_ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
    ingredients.value = "";
  }
  
  document
  .querySelector(".new_ingredient")
  .addEventListener("click", addIngredient)

  function addPreparationMode() {
    const ingredients = document.querySelector("#preparation_mode");
    const fieldContainer = document.querySelectorAll(".preparation");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
    ingredients.value = "";
  }
  
  document
  .querySelector(".new_step")
  .addEventListener("click", addPreparationMode)

 
