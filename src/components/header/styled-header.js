import styled from "styled-components";

// --- Container Principal ---
export const HeaderContainer = styled.header`
    width: 97%;
    height: 5vh;
    background-color: rgba(77, 70, 70, 0.5);
    border-radius: 30px;
    padding: 5px;
    box-sizing: border-box;
    font-family: "Caveat Brush", cursive;
    color: gold;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;

    /* Estilos para Mobile <= 560px */
    @media (max-width: 560px) {
        width: 95%;
        height: auto;
        padding: 5px 10px;
        justify-content: space-between;
    }
`;

// --- Container da Propaganda ---
export const HeaderAdvertising = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 560px) {
        width: auto;
        gap: 10px; /* Espaço entre os dois blocos de texto */
        margin: 0 5px;
    }
`;

// --- Bloco de Texto da Propaganda (Desktop e Mobile) ---
export const AdvertisingBlockDesktop = styled.div`

    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 25px;
    line-height: 0.9;
    white-space: nowrap;

    /* Estilos para Mobile <= 560px */
    @media (max-width: 560px) {
        font-size: 17px; /* Fonte bem menor para caber */
        line-height: 1;
    }
`;

export const PromoLine = styled.div`
    display: flex;
    align-items: center;
`;

export const PlusSign = styled.span`
    /* Estilos para Desktop > 560px */
    font-size: 40px;
    margin-right: 8px;

    /* Estilos para Mobile <= 560px */
    @media (max-width: 560px) {
        font-size: 40px;
        margin-right: 4px;
    }
`;


// --- Ícones de Contato ---
export const HeaderContactsContainer = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;

    @media (max-width: 560px) {
        width: auto;
        gap: 8px;
        flex-direction: column; /* <-- ADICIONE ESTA LINHA */
    }
`;

export const HeaderSocialMediaImg = styled.img`
    width: 25px;
    cursor: pointer;
    
    @media (max-width: 560px) {
        width: 22px;
    }
`;


// --- Carrinho de Compras ---
export const HeaderCartContainer = styled.div`
    width: 50px;
    height: 50px;
    background-color: aliceblue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 560px) {
        width: 45px;
        height: 45px;
    }
`;

// --- Logo ---
export const HeaderImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HeaderImg = styled.img`
    max-width: 80px;
    @media (max-width: 560px) {
        max-width: 50px; /* Logo menor para caber no layout horizontal */
    }
`;

// --- Componentes que não precisam de alteração ---
export const HeaderCartSpan = styled.span` font-size: 25px; `;
export const CartCounter = styled.div`
    position: absolute;
    top: 5px;
    right: -5px;
    background-color: crimson;
    color: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    font-family: Arial, sans-serif;
`;

// Componente do layout mobile antigo - não é mais necessário
export const AdvertisingBlockMobile = styled.div`display: none;`;