// src/app/sandwich/data.js

export const menuItems = [
  {
    id: 0,
    name: 'X-Rodrigues',
    type: 'burguer',
    img: '/assets/sanduiches/Rodrigues.jpeg', 
    price: { frango: 28.00, hamburguer: 30.00 },
    description: 'Pão, hambúrguer bovino, frango, 2 presunto, 2 mussarela, 2 ovos, 2 bacon, 2 salsicha, alface, tomate, milho, batata.',
  },
  {
    id: 1,
    name: 'X-Tudo',
    type: 'burguer',
    img: '/assets/sanduiches/x-tudo.jpeg',
    price: { frango: 15.00, hamburguer: 18.00 },
    description: 'Pão, hambúrguer bovino ou frango, presunto, mussarela, ovo, bacon, salsicha, alface, tomate, milho, batata.',
  },
  {
    id: 2,
    name: 'X-Simples',
    type: 'burguer',
    img: '/assets/sanduiches/x-simples.jpeg',
    price: { frango: 14.00, hamburguer: 16.00 },
    description: ' Pão, hambúrguer bovino ou frango, presunto, mussarela, alface, tomate, milho, batata',
  },
  {
    id: 3,
    name: 'X-Especial',
    type: 'burguer',
    img: '/assets/sanduiches/x-especial.jpeg',
    price: { frango: 16.00, hamburguer: 18.00 },
    description: 'Pão, hambúrguer bovino ou frango, presunto, mussarela, ovo, alface, tomate, milho, batata',
  },
  {
    id: 4,
    name: 'X-Bacon',
    type: 'burguer',
    img: '/assets/sanduiches/x-bacon.jpeg',
    price: { frango: 16.00, hamburguer: 18.00 },
    description: 'Pão, hambúrguer bovino ou frango, presunto, mussarela, bacon, alface, tomate, milho, batata',
  },
  {
    id: 5,
    name: 'X-Bacon Especial',
    type: 'burguer',
    img: '/assets/sanduiches/x-bacon.jpeg',
    price: { frango: 18.00, hamburguer: 20.00 },
    description: 'Pão, hambúrguer bovino ou frango, presunto, mussarela, ovo, bacon, alface, tomate, milho, batata',
  },
  {
    id: 7,
    name: 'X-Gostoso',
    type: 'burguer',
    img: '/assets/sanduiches/x-gostoso.jpeg',
    price: { frango: 15.00, hamburguer: 17.00 },
    description: 'Pão, hambúrguer bovino ou frango, 2 mussarela, 2 bacon, alface, tomate, milho, batata',
  },
];


export const addsInfo = [
  { addName: 'Mussarela', addPrice: 2.00 },
  { addName: 'Bacon', addPrice: 3.00 },
  { addName: 'Salsicha', addPrice: 2.00 },
  { addName: 'Frango', addPrice: 4.00 },
  { addName: 'Ovo', addPrice: 1.50 },
  { addName: 'Presunto', addPrice: 1.50 },
  { addName: 'Hambúrguer', addPrice: 5.00 },
];