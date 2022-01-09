//HTTP library using ES6 classes and Fetch and ES7 async and await

// Version:3.0 of HTTP requests using Fetch API and async and await

class HTTP3 {
  async get(url) {
      const resonse = await fetch(url);

      const data = await resonse.json();

      return data;
  }

  async post(url, data) {
      const response = await fetch(url, {
          method: "POST",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(data),
      });

      const user = await response.json();

      return user;
  }

  async put(url, data) {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(data),
      });

      const resData = await response.json();

      return resData;
  }

  async delete(url) {
      const response = await fetch(url, {
          method: "DELETE",
          headers: {
              "Content-type": "application/json",
          },
      });

      const data = await 'Deleted';

      return data;
  }
}
