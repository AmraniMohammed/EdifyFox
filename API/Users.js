var request = new XMLHttpRequest();

var data = new FormData();
data.append("login","admin");
data.append("pwd","@");

request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('POST', 'https://edifyfox.com/php/loginService/api');
request.send(data);

export function getUsers () {
    //  const url = 'https://fakestoreapi.com/users'
    //  return fetch(url)
    //         .then((response) => response.json())
    //         .catch((error) => console.error(error))
    // let ajax = new XMLHttpRequest();
    // let form = new FormData();

    // form.append('login', email);
    // form.append('login', id);
    // form.append('login', password);

    fetch('https://edifyfox.com/php/loginService/api', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'admin',
            password: '@',
        })
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
}


export function getToken (username, password) {
     const url = 'https://fakestoreapi.com/auth/login'
     return fetch(url,{
        method:'POST',
        body:JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(res=>res.json())
        .catch((error) => console.error(error))

}