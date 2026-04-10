"use client";

import styled from "styled-components";

export const Container = styled.div`
    width: ${({ $isCartOpen }) => $isCartOpen ? '80%' : '100%'};  
    @media (max-width: 768px) {
        width: 100% !important; /* Em telas pequenas, ocupa sempre 100% */
    }

`;

export const Title = styled.h1`
    width: 100%;
    font-size: 35px;
    display: flex;
    justify-content: center;
    color: gold;
`;

export const MenuGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${({ $isCartOpen }) => $isCartOpen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};

    @media (max-width: 1300px) {
        grid-template-columns: ${({ $isCartOpen }) => $isCartOpen ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
    }

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;

export const MenuItem = styled.div`
    color: aliceblue;
    text-align: center;
    cursor: pointer;
    border-radius: 50px;
    padding: 5px;
    background-color: rgba(49, 3, 3, 0.53);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid rgba(49, 3, 3, 0.53);
    @media (max-width: 1300px) {
        margin: 0 auto;
    }
`;

export const MenuItemContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    

    @media (max-width: 1300px) {
        width: 100%;
    }

    img {
        width: 300px;
        height: 350px;
        border-radius: 20px;
        object-fit: cover;

        @media (max-width: 750px) {
            width: 350px;
            height: 400px;
        }

        @media (max-width: 520px) {
            width: 250px;
            height: 300px;
        }

        @media (max-width: 400px) {
            width: 200px;
            height: 200px;
        }
    }
`;

export const MenuSpan = styled.span`  
    color:  gold;
`;

export const MenuP = styled.p`
    color: gold;
`;

export const MenuSection = styled.section`
    padding-top: 20px; /* Espaçamento para o título não colar no item anterior */

    &:first-child {
        padding-top: 0;
    }
`;

//COMBOS
export const CombosMenuContainer = styled.div`
    font-family: "Bodoni Moda", serif;
    font-size: 15px;
    padding: 20px;
`;

//SANDWICH
export const SandwichMenuContainer = styled.div`
    font-family: "Bodoni Moda", serif;
    font-size: 15px;
    padding: 20px;
`;

export const SandwichMenuContent = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 950px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const MenuArea = styled.main`
    flex: 1;
`;

// SANDWICH-Modal
export const ModalOverlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background-color: aliceblue;
    width: 70vw;
    height: 60vh;
    border-radius: 20px;
    display: flex;
    overflow: hidden;

    @media (max-width: 1050px) {
        width: 90vw;
        height: 70vh;

    }

    @media (max-width: 900px) {
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        overflow-y: auto; /* Permite rolar o modal em telas pequenas */
    }
`;

export const ModalImage = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
        width: 60%;
        height: 50%;
    }

    @media (max-width: 900px) {
        width: 50%;
           

    }

    @media (max-width: 500px) {
        width: 85%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
`;

export const ModalInfo = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SnackMenuContainer = styled.div`
    font-family: "Bodoni Moda", serif;
    font-size: 15px;
    padding: 20px;
`;

export const DrinksMenuContainer = styled.div`
    font-family: "Bodoni Moda", serif;
    font-size: 15px;
    padding: 20px;
`;

export const AcaiMenuContainer = styled.div`
    font-family: "Bodoni Moda", serif;
    font-size: 15px;
    padding: 20px;
`;

export const AddsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin: 15px 0;
`;

export const AddButton = styled.button`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid crimson;
    cursor: pointer;
    background-color: ${props => props.$isSelected ? 'crimson' : 'white'};
    color: ${props => props.$isSelected ? 'white' : 'crimson'};
    font-size: 12px;
    transition: all ease 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;