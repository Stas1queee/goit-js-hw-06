const categories = document.getElementsByClassName("item");
const numberOfCategories = categories.length;
console.log("Number of categories:", numberOfCategories);

for (const category of categories) {
  const nameOfCategory = category.firstElementChild.textContent;
  console.log("Category:", nameOfCategory);

  const numberOfElements = category.lastElementChild.children.length;
  console.log("Elements:", numberOfElements);
}

