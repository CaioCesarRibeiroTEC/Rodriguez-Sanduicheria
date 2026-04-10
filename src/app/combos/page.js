// src/app/combos/page.js
"use client";

import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { combosItems } from './data-combos';
import { 
    CombosMenuContainer,
    Title,
    MenuGrid,
    MenuItem,
    Container,
    MenuSpan,
    MenuP,
    MenuItemContent
} from '../../components/menu-styles';

export default function CombosPage() {
    const { isCartOpen, addToCart, formatoReal } = useContext(UserContext);

    const handleAddToCart = (combo) => {
        const cartItem = {
            id: combo.id,
            cartId: Date.now(), 
            name: combo.name,
            img: combo.img,
            qt: 1, 
            adds: [], 
            typeChoice: '', 
            finalPrice: combo.price 
        };
        addToCart(cartItem);
    };

    return (
        <Container $isCartOpen={isCartOpen}>
            <CombosMenuContainer id="combos">
                <Title>Combos</Title>
                <hr />
                <MenuGrid $isCartOpen={isCartOpen}>
                    {combosItems.map(item => (
                        <MenuItem key={item.id} onClick={() => handleAddToCart(item)}>                            
                            <MenuItemContent>
                                <img src={item.img} alt={item.name} />
                                <MenuSpan className="item-name">{item.name}</MenuSpan>
                            </MenuItemContent>

                            <MenuItemContent>
                                <MenuP>{item.description}</MenuP>
                                <MenuSpan className="item-price">{formatoReal(item.price)}</MenuSpan>                            
                            </MenuItemContent>
                        </MenuItem>
                    ))}
                </MenuGrid>
            </CombosMenuContainer>
        </Container>
    );
}