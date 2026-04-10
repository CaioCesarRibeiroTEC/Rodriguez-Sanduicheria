// src/app/drinks-acai/page.js
"use client";

import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { drinksCategories } from './data-drinks'; 
import { 
    Container, Title, MenuGrid, MenuItem, MenuItemContent, MenuSpan, MenuP,
    ModalOverlay, ModalContainer, ModalImage, ModalInfo, AddsGrid, AddButton, DrinksMenuContainer
} from '../../components/menu-styles';

export default function DrinksAcaiPage() {
    const { isCartOpen, addToCart, formatoReal } = useContext(UserContext);

    // Estados para controlar o Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [category, setCategory] = useState(null);
    
    // Estados para guardar as escolhas do utilizador dentro do modal
    const [selectedFlavor, setSelectedFlavor] = useState(''); // Usado para Sucos e Cremes
    const [selectedOther, setSelectedOther] = useState(null); // Usado para Outras Bebidas
    const [selectedSize, setSelectedSize] = useState(null);   // Usado para Açaí
    const [selectedToppings, setSelectedToppings] = useState([]); // Usado para Açaí

    // Função que abre o modal e limpa as escolhas antigas
    const handleOpenModal = (cat) => {
        setCategory(cat);
        setSelectedFlavor('');
        setSelectedOther(null);
        setSelectedSize(cat.id === 'acai' ? cat.sizes[0] : null); // O açaí já vem com o 1º tamanho pré-selecionado
        setSelectedToppings([]);
        setIsModalOpen(true);
    };

    // Função para selecionar/desmarcar os acompanhamentos do Açaí
    const handleToggleTopping = (topping) => {
        const isSelected = selectedToppings.some(t => t.name === topping.name);
        if (isSelected) {
            setSelectedToppings(selectedToppings.filter(t => t.name !== topping.name));
        } else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    // Função para calcular preços e montar o pedido final
    const handleAddOrder = () => {
        let cartItem = {
            id: category.id + Date.now(), // Cria um ID único
            cartId: Date.now(),
            img: category.img,
            qt: 1, // Por defeito, adicionamos 1 unidade de cada vez
            adds: []
        };

        // Lógica para Sucos e Cremes
        if (category.id === 'sucos' || category.id === 'cremes') {
            if (!selectedFlavor) return alert("Por favor, escolha um sabor!");
            cartItem.name = `${category.name} (${selectedFlavor})`;
            cartItem.finalPrice = category.price;
        } 
        // Lógica para Outras Bebidas (Refrigerantes/Água)
        else if (category.id === 'outras') {
            if (!selectedOther) return alert("Por favor, escolha uma bebida!");
            cartItem.name = selectedOther.name;
            cartItem.finalPrice = selectedOther.price;
        } 
        // Lógica para o Açaí
        else if (category.id === 'acai') {
            const extraPrice = selectedToppings.reduce((acc, t) => acc + t.price, 0);
            cartItem.name = `Açaí ${selectedSize.label}`;
            cartItem.adds = selectedToppings.map(t => ({ addName: t.name }));
            cartItem.finalPrice = selectedSize.price + extraPrice;
        }

        addToCart(cartItem);
        setIsModalOpen(false);
    };

    return (
        <Container $isCartOpen={isCartOpen}>
            <DrinksMenuContainer id="drinks-acai">
                <Title>Bebidas & Açaí</Title>
                <hr style={{marginBottom: '20px'}}/>
                
                {/* A MÁGICA DO MAP: Desenha os 4 cartões com apenas 1 bloco de código */}
                <MenuGrid $isCartOpen={isCartOpen}>
                    {drinksCategories.map(cat => (
                        <MenuItem key={cat.id} onClick={() => handleOpenModal(cat)}>
                            <MenuItemContent>
                                <img src={cat.img} alt={cat.name} style={{objectFit: 'cover'}}/>
                                <MenuSpan className="item-name">{cat.name}</MenuSpan>
                            </MenuItemContent>
                            <MenuItemContent>
                                <MenuP>{cat.description}</MenuP>
                                {/* Mostra "A partir de" apenas no açaí */}
                                <MenuSpan className="item-price">
                                    {cat.id === 'acai' ? 'A partir de ' : ''} 
                                    {formatoReal(cat.price || cat.sizes?.[0].price || 0)}
                                </MenuSpan>
                            </MenuItemContent>
                        </MenuItem>
                    ))}
                </MenuGrid>

                {/* --- MODAL DINÂMICO --- */}
                <ModalOverlay $isOpen={isModalOpen}>
                    <ModalContainer>
                        {category && (
                            <>
                                <ModalImage>
                                    <img src={category.img} alt={category.name}/>
                                </ModalImage>
                                <ModalInfo>
                                    <div>
                                        <h2>{category.name}</h2>
                                        <p style={{marginBottom: '20px'}}>{category.description}</p>

                                        {/* Mostra as opções se for SUCO ou CREME */}
                                        {(category.id === 'sucos' || category.id === 'cremes') && (
                                            <div>
                                                <h3>Escolha o Sabor:</h3>
                                                <AddsGrid>
                                                    {category.options.map(flavor => (
                                                        <AddButton 
                                                            key={flavor}
                                                            $isSelected={selectedFlavor === flavor}
                                                            onClick={() => setSelectedFlavor(flavor)}
                                                        >
                                                            {flavor}
                                                        </AddButton>
                                                    ))}
                                                </AddsGrid>
                                            </div>
                                        )}

                                        {/* Mostra as opções se for OUTRAS BEBIDAS */}
                                        {category.id === 'outras' && (
                                            <div>
                                                <h3>Escolha a Bebida:</h3>
                                                <AddsGrid>
                                                    {category.items.map(item => (
                                                        <AddButton 
                                                            key={item.name}
                                                            $isSelected={selectedOther?.name === item.name}
                                                            onClick={() => setSelectedOther(item)}
                                                        >
                                                            {item.name} ({formatoReal(item.price)})
                                                        </AddButton>
                                                    ))}
                                                </AddsGrid>
                                            </div>
                                        )}

                                        {/* Mostra a estrutura complexa se for AÇAÍ */}
                                        {category.id === 'acai' && (
                                            <div>
                                                <h3>Tamanho:</h3>
                                                <AddsGrid>
                                                    {category.sizes.map(s => (
                                                        <AddButton 
                                                            key={s.label}
                                                            $isSelected={selectedSize?.label === s.label}
                                                            onClick={() => setSelectedSize(s)}
                                                        >
                                                            {s.label} ({formatoReal(s.price)})
                                                        </AddButton>
                                                    ))}
                                                </AddsGrid>
                                                <h3>Acompanhamentos:</h3>
                                                <AddsGrid>
                                                    {category.toppings.map(t => (
                                                        <AddButton 
                                                            key={t.name}
                                                            $isSelected={selectedToppings.some(st => st.name === t.name)}
                                                            onClick={() => handleToggleTopping(t)}
                                                        >
                                                            {t.name} {t.price > 0 ? `(+${formatoReal(t.price)})` : '(Grátis)'}
                                                        </AddButton>
                                                    ))}
                                                </AddsGrid>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        {/* Preço dinâmico para o Açaí */}
                                        {category.id === 'acai' && (
                                            <h3 style={{marginBottom: '15px'}}>
                                                Total: {formatoReal((selectedSize?.price || 0) + selectedToppings.reduce((acc, t) => acc + t.price, 0))}
                                            </h3>
                                        )}
                                        <button 
                                            style={{background: '#149125ff', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', cursor: 'pointer', width: '100%', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold'}}
                                            onClick={handleAddOrder}
                                        >
                                            Adicionar ao Carrinho
                                        </button>
                                        <button 
                                            style={{background: '#d92d2d', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontSize: '16px', fontWeight: 'bold'}}
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </ModalInfo>
                            </>
                        )}
                    </ModalContainer>
                </ModalOverlay>
            </DrinksMenuContainer>
        </Container>
    );
}