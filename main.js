// function getPostTitle(id) {
//   return fetch(`https://dummyjson.com/posts/${id}`)
//     .then(response => response.json())
//     .then(post => console.log(`Titolo del post: ${post.title}`))
//     .catch(error => console.error("Errore:", error));
// }

// getPostTitle(6)

//SNACK 1
const getPostTitle = id => {
  const promessa = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(response => response.json())
      .then(post => resolve(post.title))
      .catch(reject);
  });
  return promessa
}

getPostTitle(2)
  .then(post => console.log(`Titolo del post: ${post}`))
  .catch(error => console.error("Errore:", error));

//BONUS SNACK 1
function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(response => response.json())
      .then(post => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then(response => response.json())
          .then(user => {
            const result = {
              ...post,
              user
            }
            resolve(result)
          })
          .catch(reject)
      })
      .catch(reject);
  });
}

getPost(5)
  .then(posts => console.log(posts))
  .catch(error => console.error("Errore:", error));



//SNACK 2
function lanciaDado() {
  const promessaDado = new Promise((resolve, reject) => {
    console.log("Lancio il dado...")
    setTimeout(() => {
      if (Math.random() <= 0.2) {
        reject('Il dado si è incastrato, ricarica la pagina')
      } else {
        resolve(Math.floor(Math.random() * 6) + 1)
      }
    }, 3000)
  })
  return promessaDado
}

lanciaDado()
  .then(result => console.log("Risultato del dado:", result))
  .catch(error => console.error("Errore:", error))

//BONUS SNACK 2
const creaLanciaDado = () => {

  let ultimoLancio = null;

  return function () {
    return new Promise((resolve, reject) => {
      console.log("Lancio il dado...")
      setTimeout(() => {
        if (Math.random() <= 0.2) {
          ultimoLancio = null;
          reject('Il dado si è incastrato, ricarica la pagina')
        } else {
          const risultato = Math.floor(Math.random() * 6) + 1
          if (risultato === ultimoLancio) {
            console.log('Incredibile! Hai fatto lo stesso risultato del lancio precedente!')
          }
          ultimoLancio = risultato;
          resolve(risultato)
        }
      }, 3000)
    })
  }
}

const lanciaDadoMemoria = creaLanciaDado();

lanciaDadoMemoria()
  .then(result => {
    console.log("Risultato del dado con memoria (1):", result)
    lanciaDadoMemoria()
      .then(result => console.log("Risultato del dado con memoria (2):", result))
      .catch(error => console.error("Errore:", error))
  })
  .catch(error => console.error("Errore:", error))