
export function fetchAllProducts() {
  //Todo : we will not hardcore server url here
  return new Promise(async(resolve) =>{
  const response = await fetch(" http://localhost:8080/products");
  const data = await response.json()
  resolve({data})}
  );
}
export function fetchProductById(id) {
  //Todo : we will not hardcore server url here
  return new Promise(async (resolve) => {
    const response = await fetch(" http://localhost:8080/products/"+id);
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchProductsByFilters(filter,sort,pagination) {
  //filter: "category":[ " smartphone ","laptops"]
  // queryString = use after ? for sorting
  // todo : on server will support multiple values
  // sort ={sort:"price",_order:"desc"}
  // pagination = {page:1,_limit:10}_page=1&-limit=10
  let queryString = "";

  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
for (let key in pagination) {
  queryString += `${key}=${pagination[key]}&`;
}
  return new Promise(async (resolve) => {
    const response = await fetch(
      " http://localhost:8080/products?" + queryString
    );

    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({ data:{products:data,totalItems:+totalItems} });
  });
}

export function fetchCategories() {
  //Todo : we will not hardcore server url here
  return new Promise(async (resolve) => {
    const response = await fetch(" http://localhost:8080/categories");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchBrands() {
  //Todo : we will not hardcore server url here
  return new Promise(async (resolve) => {
    const response = await fetch(" http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}