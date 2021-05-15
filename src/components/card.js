import axios from "axios";

const Card = (article) => {
  // Creating elements, setting them with class syntax and adding text content to each element.
  const card = document.createElement('div');
    card.classList.add('card');
  const headLine = document.createElement('div');
    headLine.classList.add('headline');
    headLine.textContent = article.headline
  const author = document.createElement('div');
    author.classList.add('author');
  const imgContain = document.createElement('div');
    imgContain.classList.add('img-container');
  const img = document.createElement('img');
    img.src = article.authorPhoto
  const span = document.createElement('span');
    span.textContent = `By ${article.authorName}`;
    
    // Appends
  card.append(headLine, author);
  author.append(imgContain, span);
  imgContain.append(img);
    
   // Event Listeners
  card.addEventListener('click', e =>{
    console.log(headLine);
  })

  return card

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((res => {
    const entryPoint = document.querySelector(selector);
    const allCards = Object.values(res.data.articles);
    console.log(res.data.articles)
    allCards.forEach(value => {
      for (let i = 0; i < value.length; i++){
        entryPoint.append(Card(value[i]))
      }
    }) 
  }))
  .catch((err => {
    console.log('Error', err)
  }))
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
