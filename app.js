// https://jsonplaceholder.typicode.com/posts


// const http = new HTTP();

// http.get("https://jsonplaceholder.typicode.com/posts", function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });
const data = {
    userId: 300,
    id: 100,
    title: "Welcome back",
    body: "how are you??"
};
// http.post("https://jsonplaceholder.typicode.com/posts", data, function (res) {
//     console.log(res);
// })

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (res) {
//     console.log(res);
// });

// http.delete("https://jsonplaceholder.typicode.com/posts/2", function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });




//By Using Fetch API library with promises ES6
// const http2 = new HTTP2();

// http2.get("https://jsonplaceholder.typicode.com/users").then(res=>console.log(res)).catch(err=>console.log(err));

// http2.post('https://jsonplaceholder.typicode.com/users', data).then(res => console.log(res)).catch(err => console.log(err));

// http2.put("https://jsonplaceholder.typicode.com/users/1", data).then(data => console.log(data)).catch(err => console.log(err));

// http2
//   .delete("https://jsonplaceholder.typicode.com/users/1", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));



//By using Fetch API with Async and Await ES7

const http3 =new HTTP3();

// http3.get("https://jsonplaceholder.typicode.com/users").then(res => console.log(res));

// http3
//   .post("https://jsonplaceholder.typicode.com/users",dat)
//   .then((res) => console.log(res));

// http3
//   .put("https://jsonplaceholder.typicode.com/users/3",data)
//   .then((res) => console.log(res));


// http3
//   .delete("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => console.log(res));

  


 

