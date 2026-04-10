import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 95%;
    display: flex;
    flex-direction: column;
    margin-top: auto; 
    margin-bottom: 5px; 
    align-items: center;

`;

export const FooterContent = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  rgba(77, 70, 70, 0.5);
    border-radius: 15px;
    padding: 5px;
    
    @media (max-width: 900px) {
        width: 100%;
        
    }
`;

export const FooterImgContainer = styled.a`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;

    img{
        width: 45px;
        object-fit: cover;
        cursor: pointer;
    };

    b{
        color: rgb(248, 245, 242);
        cursor: pointer;
        font-size: 18px;
    }

    @media (max-width: 500px) {
        width: 70%;
        
    }
`;

export const FooterSpan = styled.span`
    font-size: 15px;
    color: rgba(247, 114, 5, 1);
    background-color:  rgba(77, 70, 70, 0.5);
    border-radius: 15px;
    padding: 5px;

    b {
        font-size: 20px;
    }
`;

export const SocialMediaContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const SocialMediaIcon = styled.i`
    cursor: pointer;
`;

export const SocialMediaImg = styled.img`
    width: 25px;
    border-radius: 50%;
`;


