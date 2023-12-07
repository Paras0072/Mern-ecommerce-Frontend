export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    //todo : one server it will return only relevant information
    resolve({ data });
  });
}
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const error = await response.json();
        reject( error );
      }
    } catch (error) {
      reject( error );
    }

    //todo : one server it will return only relevant information
  });
}
export function signOut(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
