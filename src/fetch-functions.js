export const getFirstThreeFantasyBooks = async () => {
  //fetch data with a URL
  try{
    const  url = "https://openlibrary.org/subjects/fantasy.json";
    const response = await fetch(url);
  // check to see if the response is ok
    if (!response.ok) throw new Error(`Failed to get fantasy books`)
  
  //parse the response body from JSON into a JS object
    const jsonData = await response.json();
   //console.log(jsonData); testing data

    // If the contentType of the response is not JSON, parse it as plain
    // text and return a tuple with a null error


     // returns 3 books
     return jsonData.works.slice(0, 3).map((work) => {
      return {
        title: work.title,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key,
        },
        coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
      }
    });
  }

  //parse the response body from JSON into a JS object
 catch (error) {
  // if there was an error, log it and return a tuple: [data, error]
    console.warn(error.message);
      // return new Promise(() => null)
    return null ; //intentionally left empty "null"
  //function that is marked as async WILL return a promise
  } 

};

//use event listeners for the next parts
//still use fetch and render



export const getAuthor = async (urlKey) => {
  try{
  const  url = `https://openlibrary.org${urlKey}.json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to get author`)
    const jsonData = await response.json();
  return {
    birthDate: jsonData.birth_date,
    bio : jsonData.bio,
    wikipediaUrl: jsonData.wikipedia,  //error on test case
    name: jsonData.name,
    pictureUrl:`https://covers.openlibrary.org/a/id/${jsonData.photos[0]}-M.jpg`,
  }
  }
    catch (error) {
      // if there was an error, log it and return a tuple: [data, error]
        console.warn(error.message);
          // return new Promise(() => null)
        return null ; //intentionally left empty "null"
      //function that is marked as async WILL return a promise
      } 
  
 
  // fetch data with a URL
  //check to see if the response is ok
  //parse the response body from JSON into a JS object
  //returns author 
};

export const createNewUser = async (user) => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    // Send POST request to create a new user
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    
    const response = await fetch(url, options);

    // Check if the response is okay
    if (!response.ok) {
      throw new Error('Failed to create new user');
    }

    // Parse the response body from JSON into a JS object
    const newUser = await response.json();

    // Return the new user object
    return newUser;
  } catch (error) {
    // Log the error message and return null
    console.warn(error.message);
    return null;
  }
};
