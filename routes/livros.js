const express = require('express');
const router = express.Router();

const respostaLivros = {
  status: "success",
  total_livros: 10,
  data: [
    {
      titulo: "1984",
      isbn: "978-8535914849",
      data_publicacao: "1949-06-08",
      estoque: 28
    },
    {
      titulo: "Cem Anos de Solidão",
      isbn: "978-8535909289",
      data_publicacao: "1967-05-30",
      estoque: 15
    },
    {
      titulo: "Orgulho e Preconceito",
      isbn: "978-8537807090",
      data_publicacao: "1813-01-28",
      estoque: 40
    },
    {
      titulo: "Harry Potter e a Pedra Filosofal",
      isbn: "978-8532511015",
      data_publicacao: "1997-06-26",
      estoque: 65
    },
    {
      titulo: "O Pequeno Príncipe",
      isbn: "978-8595700810",
      data_publicacao: "1943-04-06",
      estoque: 88
    },
    {
      titulo: "Crime e Castigo",
      isbn: "978-8573264903",
      data_publicacao: "1866-01-01",
      estoque: 5
    },
    {
      titulo: "A Revolução dos Bichos",
      isbn: "978-8535909555",
      data_publicacao: "1945-08-17",
      estoque: 33
    },
    {
      titulo: "Memórias Póstumas de Brás Cubas",
      isbn: "978-8583862211",
      data_publicacao: "1881-01-01",
      estoque: 19
    },
    {
      titulo: "O Código Da Vinci",
      isbn: "978-8539206775",
      data_publicacao: "2003-03-18",
      estoque: 22
    },
    {
      titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
      isbn: "978-8578270764",
      data_publicacao: "1950-10-16",
      estoque: 47
    }
  ],
  links: {
    self: "/api/v1/livros?page=2",
    prev: "/api/v1/livros?page=1"
  }
};


router.get('/', (req, res) => {
  res.json(respostaLivros);
});

module.exports = router;
