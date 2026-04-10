"use client";

import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { 
    CartContainer, CartItem, CloseButton, CartActionsContainer, 
    FinalizeButton, ClearCartButton, CheckoutContainer, FormSection, 
    FormLabel, FormInput, RadioGroup, RadioLabel, BackButton 
} from './styled-cart';

export function Cart() {
    const { 
        cart, removeFromCart, updateCartItemQuantity, 
        cartTotal, formatoReal, isCartOpen, setIsCartOpen,
        clearCart
    } = useContext(UserContext);

    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleConfirmOrder = () => {
        alert('Pedido confirmado! (Esta é uma simulação)');
        clearCart();
        setIsCheckingOut(false);
    }

    return (
        <CartContainer $isOpen={isCartOpen}>
            <CloseButton onClick={() => {
                setIsCartOpen(false);
                setIsCheckingOut(false); 
            }}>Fechar [X]</CloseButton>

            {isCheckingOut ? (
                // --- TELA DE CHECKOUT ---
                <CheckoutContainer>
                    <BackButton onClick={() => setIsCheckingOut(false)}>&#8592; Voltar para o carrinho</BackButton>
                    <h2>Finalizar Pedido</h2>

                    <FormSection>
                        <h3>Endereço de Entrega</h3>
                        <FormLabel htmlFor="cep">CEP:</FormLabel>
                        <FormInput id="cep" type="text" placeholder="74000-000" />

                        <FormLabel htmlFor="rua">Rua / Av.:</FormLabel>
                        <FormInput id="rua" type="text" placeholder="Av. Exemplo" />
                        
                        <FormLabel htmlFor="numero">Número:</FormLabel>
                        <FormInput id="numero" type="text" placeholder="123" />
                    </FormSection>

                    <FormSection>
                        <h3>Forma de Pagamento</h3>
                        <RadioGroup>
                            <RadioLabel>
                                <input type="radio" name="payment" value="credit" defaultChecked />
                                Cartão de Crédito
                            </RadioLabel>
                            <RadioLabel>
                                <input type="radio" name="payment" value="pix" />
                                PIX
                            </RadioLabel>
                             <RadioLabel>
                                <input type="radio" name="payment" value="cash" />
                                Dinheiro
                            </RadioLabel>
                        </RadioGroup>
                    </FormSection>
                    
                    <hr />
                    <h3>Total: {formatoReal(cartTotal)}</h3>
                    <FinalizeButton onClick={handleConfirmOrder}>Confirmar Pedido</FinalizeButton>
                </CheckoutContainer>
            ) : (
                // --- TELA DA LISTA DE ITENS ---
                <>
                    <h1>Seu Pedido</h1>
                    {cart.length === 0 ? <p>Seu carrinho está vazio.</p> :
                        cart.map(item => (
                            <CartItem key={item.cartId}>
                                <p className='item-name'>{item.name} {item.typeChoice && item.typeChoice !== 'normal' && `(${item.typeChoice}) `}</p>
                                <p className='item-details'>
                                    {item.adds && item.adds.length > 0 && 
                                        item.adds.map(a => a.addName).join(', ')
                                    }
                                </p>
                                <div className='item-controls'>
                                    <div className='quantity-controls'>
                                        <button onClick={() => updateCartItemQuantity(item.cartId, item.qt - 1)}>-</button>
                                        <span>{item.qt}</span>
                                        <button onClick={() => updateCartItemQuantity(item.cartId, item.qt + 1)}>+</button>
                                    </div>
                                    <span className='remove-button' onClick={() => removeFromCart(item.cartId)}>X</span>
                                    <span>{formatoReal(item.finalPrice * item.qt)}</span>
                                </div>
                            </CartItem>
                        ))
                    }
                    <hr/>
                    <h3>Total: {formatoReal(cartTotal)}</h3>

                    {cart.length > 0 && (
                        <CartActionsContainer>
                            <FinalizeButton onClick={() => setIsCheckingOut(true)}>Finalizar Pedido</FinalizeButton>
                            <ClearCartButton onClick={clearCart}>Esvaziar Carrinho</ClearCartButton>
                        </CartActionsContainer>
                    )}
                </>
            )}
        </CartContainer>
    );
}