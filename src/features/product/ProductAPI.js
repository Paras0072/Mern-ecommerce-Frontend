
export function fetchAllProducts() {
  //Todo : we will not hardcore server url here
  return new Promise(async(resolve) =>{
  const response = await fetch(" http://localhost:8080/products");
  const data = await response.json()
  resolve({data})}
  );
}
export function fetchProductsByFilters(filter,sort) {
  //filter: "category":[ " smartphone ","laptops"]
  // queryString = use after ? for sorting 
  // todo : on server will support multiple values
  // sort ={sort:"price",_order:"desc"}

  let queryString='';
  
  for(let key in filter){
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
    }
   for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }
 
  return new Promise(async (resolve) => {
    const response = await fetch(" http://localhost:8080/products?"+queryString);
    
    const data = await response.json();
    resolve({ data });
  });
}
