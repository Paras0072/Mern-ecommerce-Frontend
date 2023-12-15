export function createUser(userData) {
  return new Promise(/* The `async` keyword is used to define an asynchronous function in JavaScript.
  An asynchronous function is a function that operates asynchronously, meaning it
  can perform tasks in the background without blocking the execution of other
  code. */
  async (resolve) => {
    const response = await fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    //todo : one server it will return only relevant information
    resolve({ data });
  });
}
export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    //todo : one server it will return only relevant information
  });
}
export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/check");
      if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    //todo : one server it will return only relevant information
  });
}
export function signOut(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
export function resetPasswordRequest(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/reset-password-request", {
      method: "POST",
      body: JSON.stringify({email}),
      headers: { "content-Type": "application/json" },
    });
       if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    //todo : one server it will return only relevant information
  });
}
export function resetPassword(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    //todo : one server it will return only relevant information
  });
}