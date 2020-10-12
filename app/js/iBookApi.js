const getBooks = async (tagB) => {
  var finalBook = "";
  const responseB = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${tagB}`
  );
  const booksJson = await responseB.json();

  const books = booksJson.items.map(async (book) => {
    const books_titles = book.volumeInfo.title;
    const books_description = book.volumeInfo.description;
    const books_url = book.volumeInfo.infoLink;
    const books_image = book.volumeInfo.imageLinks.thumbnail;

    finalBook +=
      `<a href="${books_url}" target="_blank" class=book-card>` +
      `<div class"book-img><img src="${books_image}"></div>` +
      (books_description !== undefined
        ? `<h1>${books_titles}</h1><h2>${books_description.slice(
            0,
            200
          )}...</h2></a>`
        : `<h1>${books_titles}</h1>`);

    document.getElementById(`tagB`).innerHTML = tagB;
    document.getElementById(`booksA`).innerHTML = finalBook;
  });
};
