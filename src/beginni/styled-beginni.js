import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    height: 78vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;


export const AboutEstablishment = styled.div`
    width: 100%;
    height: 25vh;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
`;

export const Assessment = styled.div`
    width: 100%;
    height: 40vh;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; /* Adiciona a barra de rolagem quando necessário */
    background-color: rgba(0, 0, 0, 0.48);
    border-radius: 40px;
`;



// Estilos para o formulário de avaliação
export const AssessmentForm = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

export const AssessmentTextArea = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    resize: none;
`;

export const AssessmentRatingSelect = styled.select`
    padding: 10px;
    border-radius: 8px;
    border: none;
    width: 150px;
`;

export const AssessmentButton = styled.button`
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #149125ff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #127a1e;
    }
`;

// Estilos para a lista de avaliações
export const ReviewList = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ReviewItem = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid gold; /* Sua borda favorita :) */
    position: relative; /* Necessário para posicionar o botão de deletar */
    padding-top: 30px; /* Adiciona espaço no topo para o botão não sobrepor o conteúdo */
`;

export const ReviewText = styled.p`
    margin: 0;
    color: white;
`;

export const ReviewRating = styled.div`
    font-size: 20px;
    margin-bottom: 5px;
`;

export const ReviewTimestamp = styled.span`
    display: block;
    font-size: 12px;
    color: #ccc;
    margin-top: 5px;
`;

// --- NOVO COMPONENTE DE ESTILO PARA O BOTÃO DELETAR ---
export const DeleteButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    
    &:hover {
        background-color: #cc0000;
    }
`;