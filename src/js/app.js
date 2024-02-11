// target:
// 1. create category
// 2. create product based on selected category
// 3. edit product
// 4. remove product
// 5. save products in local storage
// -> Storage Class for handle application method
// -> ProductView Class
// -> CategoryView Class
// -> Main and App Class

import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
  // setApp => categories : ok
  ProductView.setApp();
  CategoryView.setApp();

  // create categories option
  CategoryView.createCategoriesList();
  ProductView.createProductsList(ProductView.products);
});


