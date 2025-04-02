// const url = 'flowers.jpg';
// const myRequest = new Request(url);
// const image = document.querySelector('img');

// fetch(myRequest).then((res)=>{
//     if(!res.ok) throw new Error('something went wrong!!!');
//     return res.blob();
// }).then((data)=>{
//     const objURL = URL.createObjectURL(data)
//     image.src = objURL;
// }).catch((err)=>{
//     console.log(err);
// })


// async function GetImage(){
//     const response = await fetch('flowers.jpg');
//     const blob = await response.blob();
//     const image = document.querySelector("img");
//     const objectURL = URL.createObjectURL(blob);
//     image.src = objectURL;
// }

// GetImage().catch(error => {
//     console.error(error);
// });

// console.log("about to fetch a flower");

// const image = document.querySelector("img");

// const url = "flowers.jpg";

// async function setImage() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const blob = await response.blob();
//     const objectURL = URL.createObjectURL(blob);
//     image.src = objectURL;
//   } catch (e) {
//     console.error(e);
//   }
// }

// setImage();


// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//   .then(res => {
//     if (!res.ok) throw new Error('Failed to fetch data...!');
//     return res.json();
//   })
//   .then(res => console.log(res))
//   .catch(err => console.error('Error:', err.message));


// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((res)=>{
//     if (!res.ok) throw new Error('Request failed!!!'); return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })