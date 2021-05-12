const createBook = (book) => (
  {
    type: 'CREATE_BOOK',
    book,
  }
);

const removeBook = (book) => (
  {
    type: 'REMOVE_BOOK',
    book,
  }
);

export { createBook, removeBook };