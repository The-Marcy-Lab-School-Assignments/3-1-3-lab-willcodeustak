import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';
//layers - fetch will fetch and clean up data
//presentation layer - deals with what user see's - Rendering

// app function - integration layer , grabs all elements ,assembles and executes helper functions.
export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks();  //first we fetch
  //if books is a promise you can .then it
  //however await does this for us and we can just console.log(books)
  console.log(books);
  // const books =
  // render out the books

 //then we render

renderBookList(bookListEl,books) //takes in container and data and populates the container with data





  // renders BookList

  bookListEl.addEventListener('click', async (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        const authorKey = button.dataset.authorUrlKey;
        const authorInfo = await getAuthor(authorKey);
        renderAuthorInfo(authorInfoEl, authorInfo);
    }
});

renderNewUserForm(newUserFormEl)
  newUserFormEl.addEventListener('submit', async (e) => {
      e.preventDefault()
      
    const form =  new FormData(e.target)
    const object =  Object.fromEntries(form)

    const newUser =  await createNewUser(object)
    renderNewUser(newUserEl,newUser)

  })
}
