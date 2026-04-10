"use client";

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { HeaderComponets } from "./header/header";
import { ChoiceMenuComponets } from "./choice-menu/choiceMenu";
import { FooterComponets } from "./footer/footer";
import styled from "styled-components";
import { Cart } from "./cart/cart";

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    overflow: hidden;
`;

const MainContent = styled.main`
    width: 100%;
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    transition: padding-right 0.3s ease-in-out;

    @media (min-width: 700px) {
        padding-right: ${({ isCartOpen }) => isCartOpen ? '400px' : '20px'};
    }
`;

export function AppShell({ children }) {
    const { isCartOpen } = useContext(UserContext);

    return (
        <HomeContainer>
            <HeaderComponets />
            
            <ChoiceMenuComponets />
            
            
            <MainContent > 
                {children}
            </MainContent>

            <Cart />
            
            <FooterComponets />
        </HomeContainer>
    );
}