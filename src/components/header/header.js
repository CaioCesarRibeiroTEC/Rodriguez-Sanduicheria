"use client";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { 
    HeaderContainer, 
    HeaderImgContainer, 
    HeaderImg, 
    HeaderAdvertising,
    AdvertisingBlockDesktop,
    PromoLine,
    PlusSign,
    HeaderContactsContainer, 
    HeaderSocialMediaImg, 
    HeaderCartContainer, 
    HeaderCartSpan, 
    CartCounter
} from "./styled-header";

// No Next.js usamos o caminho absoluto da pasta public
const headerImg = '/assets/header/removebg-preview.png';
const contactWhats = '/assets/header/whatsapp.png';
const contactInsta = '/assets/header/instagram.png';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined });
  useEffect(() => {
    function handleResize() { setWindowSize({ width: window.innerWidth }); }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}

export function HeaderComponets(){
    const { cart, toggleCart } = useContext(UserContext);
    const { width } = useWindowSize();

    const DesktopLayout = () => (
        <>
            <HeaderImgContainer>
                <HeaderImg src={headerImg}/>
            </HeaderImgContainer>

            <HeaderAdvertising>
                <AdvertisingBlockDesktop>
                    <span>O melhor</span>
                    <span>da região!</span>
                </AdvertisingBlockDesktop>
                <div style={{display: 'flex',alignItems: 'center', justifyContent: "center"}}>
                    <PlusSign>+</PlusSign>
                    <AdvertisingBlockDesktop>
                        <span>X-tudo</span>
                        <PromoLine>
                            <span>Suco 400ml</span>
                        </PromoLine>
                    </AdvertisingBlockDesktop>
                </div>
            </HeaderAdvertising>

            <HeaderContactsContainer>
                <a href="https://wa.me/556294555090" target="_blank" rel="noopener noreferrer">
                    <HeaderSocialMediaImg src={contactWhats} alt="Whatsapp"/>
                </a>
                <a href="https://www.instagram.com/rodriguez_sanduicheria/" target="_blank" rel="noopener noreferrer">
                    <HeaderSocialMediaImg src={contactInsta} alt="Instagram"/>
                </a>
            </HeaderContactsContainer>

            <HeaderCartContainer onClick={toggleCart}>
                {cart.length > 0 && <CartCounter>{cart.length}</CartCounter>}
                <HeaderCartSpan>🛒</HeaderCartSpan>
            </HeaderCartContainer>
        </>
    );

    const MobileLayout = () => (
        <>
            <HeaderImgContainer>
                <HeaderImg src={headerImg} alt="Logomarca Rodrigues"/>
            </HeaderImgContainer>

            <HeaderAdvertising>
                 <AdvertisingBlockDesktop>
                    <span>O melhor</span>
                    <span>da região!</span>
                </AdvertisingBlockDesktop>
                <div style={{display: 'flex',alignItems: 'center', justifyContent: "center"}}>
                    <PlusSign>+</PlusSign>
                    <AdvertisingBlockDesktop>
                        <span>X-tudo</span>
                        <PromoLine>
                            <span>Suco 400ml</span>
                        </PromoLine>
                    </AdvertisingBlockDesktop>
                </div>
            </HeaderAdvertising>

            <HeaderContactsContainer>
                <a href="https://wa.me/556294555090" target="_blank" rel="noopener noreferrer">
                    <HeaderSocialMediaImg src={contactWhats} alt="Whatsapp"/>
                </a>
                <a href="https://www.instagram.com/rodriguez_sanduicheria/" target="_blank" rel="noopener noreferrer">
                    <HeaderSocialMediaImg src={contactInsta} alt="Instagram"/>
                </a>
            </HeaderContactsContainer>
            
            <HeaderCartContainer onClick={toggleCart}>
                {cart.length > 0 && <CartCounter>{cart.length}</CartCounter>}
                <HeaderCartSpan>🛒</HeaderCartSpan>
            </HeaderCartContainer>
        </>
    );

    return(
        <HeaderContainer>
            {width > 560 ? <DesktopLayout /> : <MobileLayout />}
        </HeaderContainer>
    )
}