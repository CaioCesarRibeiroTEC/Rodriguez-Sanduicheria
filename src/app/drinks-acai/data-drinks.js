// src/app/drinks-acai/data.js (ou data-drinks.js)

export const drinksCategories = [
    {
        id: 'sucos',
        name: 'Sucos Naturais',
        img: '/assets/bebidas/sucos.png',
        description: 'Sucos feitos na hora com frutas selecionadas.',
        price: 8.00,
        options: ['Acerola', 'Manga', 'Caju', 'Abacaxi com Hortelã', 'Goiaba', 'Tamarindo']
    },
    {
        id: 'cremes',
        name: 'Cremes Especiais',
        img: '/assets/bebidas/cremes.png',
        description: 'Cremes super gelados e cremosos.',
        price: 12.00,
        options: ['Morango', 'Maracujá', 'Cupuaçu']
    },
    {
        id: 'outras',
        name: 'Outras Bebidas',
        img: '/assets/bebidas/outros.png',
        description: 'Água, refrigerantes e H2Oh!.',
        items: [
            { name: 'Água Mineral 500ml', price: 4.00 },
            { name: 'Coca-Cola Lata 350ml', price: 6.00 },
            { name: 'Coca-Cola 2L', price: 14.00 },
            { name: 'Guaraná Antarctica 600ml', price: 8.00 },
            { name: 'H2Oh!', price: 8.00 },
        ]
    },
    {
        id: 'acai',
        name: 'Açaí na Tigela',
        img: '/assets/bebidas/acai.png',
        description: 'O melhor açaí da região com os melhores acompanhamentos.',
        sizes: [
            { label: '200ml', price: 12.00 },
            { label: '400ml', price: 18.00 },
            { label: '500ml', price: 22.00 }
        ],
        toppings: [
            { name: 'Granola', price: 0 },
            { name: 'Banana', price: 0 },
            { name: 'Morango', price: 3.00 },
            { name: 'Leite em Pó', price: 2.50 },
            { name: 'Leite Condensado', price: 2.00 }
        ]
    }
];