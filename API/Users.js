fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))

export function getUsers () {
     const url = 'https://fakestoreapi.com/users'
     return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
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