export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    //todo : one server it will return only relevant information
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  //Todo : we will not hardcore server url here
  return new Promise(async (resolve) => {
    const response = await fetch(" /cart");
    const data = await response.json();
    resolve({ data });
  });
}
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    //todo : one server it will return only relevant information
    resolve({ data });
  });
}
export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + itemId, {
      method: "DELETE",

      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    //todo : one server it will return only relevant information
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  // get all the items and then delete it
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();

    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
