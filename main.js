// function getPostTitle(id) {
//   return fetch(`https://dummyjson.com/posts/${id}`)
//     .then(response => response.json())
//     .then(post => console.log(`Titolo del post: ${post.title}`))
//     .catch(error => console.error("Errore:", error));
// }

// getPostTitle(6)

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




function lanciaDado() {
  const promessaDado = new Promise((resolve, reject) => {
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