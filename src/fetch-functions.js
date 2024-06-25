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
return jsonData.works.slice(0,3).map((work)=> {
  return {
      title: work.title,
      author:  { //only care about first author - else you'd change accordingly
        name: work.authors[0].name,
        urlKey: work.authors[0].key,
      },
      coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
    }                       //turn into string template // replace numbers afte rID with ${work.cover_id}
  });
}


  //parse the response body from JSON into a JS object
 catch (error) {
  // if there was an error, log it and return a tuple: [data, error]
  console.warn(error.message);
  return null ; //intentionally left empty "null"
  //function that is marked as async WILL return a promise
}

};

//use event listeners for the next parts
//still use fetch and render



export const getAuthor = () => {
  // fetch data with a URL
  //check to see if the response is ok
  //parse the response body from JSON into a JS object
  //returns author 
};

export const createNewUser = () => {
  //fetch data with a URL
  //check to see if the response is ok
  //parse the response body from JSON into a JS object
  //returns ?
}
