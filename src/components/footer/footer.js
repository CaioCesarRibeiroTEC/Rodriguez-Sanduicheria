"use client";

import { FooterContainer, FooterContent, FooterImgContainer, FooterSpan, SocialMediaContainer, SocialMediaIcon, SocialMediaImg } from "./styled-footer";

const instaIcon = "/assets/footer/insta.jpg";
const whatsIcon = "/assets/footer/icons8-whatsapp-50.png";
const linkeIcon = "/assets/footer/linkedin.png";

export function FooterComponets(){
    return(
        <FooterContainer>
            
            <FooterSpan>Desenvolvido por:</FooterSpan>

            <FooterContent>
                <FooterImgContainer  href="https://github.com/CaioCesarRibeiroTEC" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/footer/logo-removebg-preview.png" alt="CR-Developer"/>
                    <b>CR-Developer	©</b>                                              
                </FooterImgContainer>

                <SocialMediaContainer>
                    <SocialMediaIcon>
                        <a href="https://www.instagram.com/cr.developer.dev/" target="_blank" rel="noopener noreferrer">
                            <SocialMediaImg src={instaIcon}/>    
                        </a>   
                    </SocialMediaIcon>

                    <SocialMediaIcon>
                        <a href="https://wa.me/5562981904367" target="_blank" rel="noopener noreferrer">
                            <SocialMediaImg src={whatsIcon}/>
                        </a>   
                    </SocialMediaIcon> 

                    <SocialMediaIcon>
                        <a href="https://www.linkedin.com/in/caio-césar-ribeiro-b07b46325" target="_blank" rel="noopener noreferrer">
                            <SocialMediaImg src={linkeIcon}/>    
                        </a>
                    </SocialMediaIcon> 

                </SocialMediaContainer>
            </FooterContent>
        </FooterContainer>

    )
}