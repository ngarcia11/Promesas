// Import stylesheets
//import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
//execute
/*let promise = new Promise(function(resolve, reject){
            setTimeout(function(){
  return resolve("Hola mundo");
  reject(new Error("Hubo un error"));
}, 2000);
});
   promise.then(console.log).catch(console.log)

   promise.then(function(resultado){
     console.log(resultado);
  }).catch(function(err){
    console.log(err);
  } ) */

  /*function dummy(){
    if(Math.floor(Date.now()/100) % 2 == 0)
       return Promise.resolver("hola mundo");
       return Promise.reject("Error");
  }

  Promise.reject("Hola Mundo").then(console.log).catch(console.log); */

  function getUserInfo(username){
    return new Promise(function(resolve, reject){
      let ajaxCall = new XMLHttpRequest();
      ajaxCall.open('GET', "https://api.github.com/users/"+username);
      ajaxCall.onload = function(){
        if(ajaxCall.status == 2000) return reject(ajaxCall.response);
      };
      ajaxCall.send();
    });
  }

