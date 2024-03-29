document.querySelector('.get-jokes').addEventListener('click',test);
function test(e){
  
  const number = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){

    if(this.status === 200){


      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success'){
        response.value.forEach(function(joke){

          output += `<li> ${joke.joke} </li>`

        });
      }else{
        output += `<li>Somethink went wrong</li>`
      }

      document.querySelector('.jokes').innerHTML = output;

    }

  }

  xhr.send();

  e.preventDefault();
}