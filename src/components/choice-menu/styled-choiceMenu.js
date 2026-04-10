import styled from "styled-components";

export const ChoiceMenuContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;

    @media (max-width: 560px) {
        position: static;
        background: none;
        padding-bottom: 0;
    }
`;

export const ChoiceMenu = styled.div`
    width: 95%;
    border: 1px solid gold;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;  

export const MenuUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    list-style-type: none;
    margin: 0;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 500px) {
        flex-wrap: wrap; 
        gap: 15px 20px;
        padding: 15px;
    }
`;

export const MenuLi = styled.li`
    color: gold;
    cursor: pointer;
    
    font-size: 35px;
    
    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 650px) {
        font-size: 25px;
    }
`;

