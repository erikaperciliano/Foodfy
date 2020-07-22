function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".item_igredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document
  .querySelector(".new_igredient")
  .addEventListener("click", addIngredient)

/* document.querySelector(".new_igredient").addEventListener("click", function(){
    alert('Funcionando!');
  });
*/

