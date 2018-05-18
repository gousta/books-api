
var books = global.books;

exports.HealthCheck = (req, res) => {
  res.json({
    status: 'ok',
    data: []
  })
}

exports.BooksGet = (req, res) => {
  const { keyword } = req.query;

  // let output = JSON.parse(JSON.stringify(books));
  // console.log('books', books);

  // if(keyword && keyword != '') {
  //   output = output.filter((book) => {
  //     console.log(book.title, book.title.indexOf(keyword));
  //     return book.title.indexOf(keyword) !== -1;
  //   })
  // }

  console.log('output', output);

  res.json({
    status: 'ok',
    data: output
  })
}

exports.BooksPost = (req, res) => {
  if(req.headers['x-efood-api-key'] !== '1301010410f0140f1001010l141f0') {
    res.send(403);
  }
  console.log(req.headers);
  
  if(req.body) {
    books.push(req.body);
  }

  res.json({
    status: 'ok',
    data: [
      req.body
    ]
  })
}