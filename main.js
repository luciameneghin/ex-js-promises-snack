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
