
export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    //todo : one server it will return only relevant information
    resolve({ data });
  });
}
