"use client";

import { useContext } from "react";
import { ChoiceMenu, ChoiceMenuContainer, IconImg, MenuLi, MenuUl, OpenMenu, OpenMenuSpan } from "./styled-choiceMenu";
import { UserContext } from "../../context/userContext";
import { useRouter } from "next/navigation"; 

const homeIcon = "/assets/header/casa (1).png"; 

export function ChoiceMenuComponets(){

    const { openMenu, setOpenMenu, width } = useContext(UserContext);
    const router = useRouter(); 

    const handleScrollTo = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <ChoiceMenuContainer>
                    <ChoiceMenu>
                        <MenuUl>
                            <MenuLi onClick={() => router.push('/combos') || handleScrollTo('combos')}>Combos</MenuLi>
                            <MenuLi onClick={() => router.push('/sandwich') || handleScrollTo('sandwich')}>Sanduíches</MenuLi>
                            <MenuLi onClick={() => router.push('/drinks-acai') || handleScrollTo('drinks-acai')}>Bebidas e Açaí</MenuLi>
                        </MenuUl>                
                    </ChoiceMenu>
        </ChoiceMenuContainer>
    )
}