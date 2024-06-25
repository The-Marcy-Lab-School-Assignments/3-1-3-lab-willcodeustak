export const renderBookList = (bookListEl, books) => {
  //take in a container and data
  // render the data in the container
  bookListEl.innerHTML = '';
  books.forEach((book) => {
    //created elements
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const button = document.createElement('button');

    //manipulated the content of the elements
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`

    p.textContent = `Title: ${book.title}`

    button.textContent = `View ${book.author.name}`
    button.setAttribute(`data-author-url-key`,book.author.urlKey)
    button.dataset.authorUrlKey = book.author.urlKey

    //append
    li.append(img,p,button);
    bookListEl.append(li);
  })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = ''  //innerHTML anytime you need to clear page.
  const h2 = document.createElement('h2');
  h2.textContent = author.name;

  const img = document.createElement('img');
  img.src = author.pictureUrl ;
  img.alt = `A picture of ${author.name}`;

  const birthP = document.createElement('p');
  birthP.textContent = `Born: ${author.birthDate}`;

  const p = document.createElement('p');
  p.textContent = author.bio;

  const a = document.createElement('a');
  a.href = author.wikipediaUrl;
  a.textContent = `Wikipedia Link`;


authorInfoEl.append(h2,img,birthP,p,a)

}

export const renderNewUserForm = (newUserFormEl) => {
 newUserFormEl.innerHTML = `
 <label for="username">Username</label>
  <input id = "username" name = "username" ></input>
  <label for="is-cool" >Is this user cool?</label>
  <input id = "is-cool" name = "isCool" type = "checkbox"></input>
  <label for = "favorite-language">Favorite Language</label>
  <select id = "favorite-language" name = "favoriteLanguage">
  
  <option value="None">None</option>
  <option value="JavaScript">JavaScript</option>
  <option value="Python">Python</option>
  <option value="Ruby">Ruby</option>


  </select>


  <button>Create User</button>
 `
  //inner html
}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = ``
  const h2 = document.createElement('h2');
h2.textContent = newUser.username ;
  h2.dataset.userId = newUser.id //dataset is universal for element nodes.
  const p = document.createElement('p');

  if (newUser.isCool){
    p.textContent = `The hippest in the house!`
  }
  else {
    p.textContent = `A real square.`
  }

  const favoriteP = document.createElement('p');
  favoriteP.textContent = `Favorite Language: ${newUser.favoriteLanguage}`
  newUserEl.append(h2,p,favoriteP)
}
