const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest(); // instantiate new object from the constructor
     xhr.open(method, url); //open request

     xhr.responseType = 'json'; // for the get

if (data){
     xhr.setRequestHeader('Content-Type', 'application/json'); // for the send. Says we are sending JSON data
}
     xhr.onload = () => { // assign listener to onload event
        if (xhr.status >= 400){
          reject(xhr.response);
        } else {
         resolve(xhr.response); //resolve the promise and pass the response to then
        }
     };

     xhr.onerror = () => {
       reject('Something went wrong!')
     };

     xhr.send(JSON.stringify(data)); // send the request};
  });
  return promise;
};

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
      console.log(responseData);
    });
 };

const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in',
  //  password: 'pistol'
  }).then(responseData => {
   console.log(responseData);
  })
  .catch(err => {
    console.log(err);
  });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
