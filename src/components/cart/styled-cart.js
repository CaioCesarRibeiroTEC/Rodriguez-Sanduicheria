import styled from 'styled-components';

export const CartContainer = styled.aside`
    /* --- Estilos para Telas > 700px (Desktop e Médio) --- */
    position: fixed;
    /* Aplicamos o $isOpen aqui para não dar erro no React! */
    right: ${props => props.$isOpen ? '20px' : '-420px'}; 
    width: 380px;
    top: 20vh;     
    bottom: 70px;
    height: auto; 
    overflow-y: auto;    
    background-color: aliceblue;
    box-shadow: -5px 0 15px rgba(0,0,0,0.2);
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    transition: right 0.4s ease-in-out;

    ::-webkit-scrollbar {
        width: 5px;
        background-color: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background-color: #888; 
        border-radius: 40px;
    }

    @media (max-width: 800px) {
        right: ${props => props.$isOpen ? '50px' : '-420px'};  
    }
    
    @media (max-width: 724px) {
        width: 98%;
        height: auto;
        top: 10vh;
        bottom: 0;
        left: ${props => props.$isOpen ? '10px' : '-100%'}; /* Esconde à esquerda em mobile */
        margin: 0;
        border-radius: 20px;
        box-shadow: none;
        transition: left 0.4s ease-in-out;
        
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    align-self: flex-end; 
    cursor: pointer;
`;

export const CartItem = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    
    .item-name {
        font-weight: bold;
        margin: 0;
    }
    .item-details {
        font-size: 12px;
        color: #555;
        margin: 5px 0;
    }
    .item-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;
    }
    .quantity-controls button {
        background: #ddd;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        cursor: pointer;
    }
    .quantity-controls span {
        margin: 0 10px;
    }
    .remove-button {
        color: red;
        cursor: pointer;
        font-weight: bold;
    }
`;

export const CartActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

const BaseButton = styled.button`
    padding: 12px;
    border-radius: 8px;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`;

export const FinalizeButton = styled(BaseButton)`
    background-color: #149125ff;
`;

export const ClearCartButton = styled(BaseButton)`
    background-color: #d92d2d;
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: #555;
    cursor: pointer;
    align-self: flex-start;
    margin-bottom: 15px;
`;

// --- Estilos para a tela de Checkout ---
export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const FormSection = styled.div`
    margin-bottom: 20px;
`;

export const FormLabel = styled.label`
    font-weight: bold;
    margin-top: 10px;
    display: block;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
`;

export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;