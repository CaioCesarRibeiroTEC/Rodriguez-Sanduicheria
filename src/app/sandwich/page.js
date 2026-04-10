"use client";

import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { menuItems, addsInfo } from './data-sandwich';
import { 
    SandwichMenuContainer, SandwichMenuContent, MenuArea, Title, MenuGrid, MenuItem,
    ModalOverlay, ModalContainer, ModalImage, ModalInfo,
    AddsGrid, AddButton, Container, MenuSpan, MenuP, 
    MenuItemContent
} from '../../components/menu-styles';

export default function SandwichPage() {
    const { isCartOpen, addToCart, formatoReal } = useContext(UserContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedType, setSelectedType] = useState('hamburguer');
    const [selectedAdds, setSelectedAdds] = useState([]);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setQuantity(1);
        setSelectedType(item.type === 'hot-dog' ? 'normal' : 'hamburguer');
        setSelectedAdds([]);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => setIsModalOpen(false);

    const handleToggleAdd = (add) => {
        const isSelected = selectedAdds.some(a => a.addName === add.addName);
        if (isSelected) {
            setSelectedAdds(selectedAdds.filter(a => a.addName !== add.addName));
        } else {
            setSelectedAdds([...selectedAdds, add]);
        }
    };

    // --- FUNÇÃO PARA CALCULAR O PREÇO ATUAL ---
    const getCurrentPrice = () => {
        if (!selectedItem) return 0;

        let basePrice = selectedItem.type === 'hot-dog' 
            ? selectedItem.price.normal 
            : selectedItem.price[selectedType];
        
        let addsPrice = selectedAdds.reduce((acc, add) => acc + add.addPrice, 0);
        
        return (basePrice + addsPrice) * quantity;
    };

    const handleAddToCart = () => {
        const currentPrice = getCurrentPrice(); 

        const cartItem = {
            ...selectedItem,
            cartId: Date.now(),
            qt: quantity,
            typeChoice: selectedType,
            adds: selectedAdds,
            finalPrice: currentPrice / quantity 
        };
        addToCart(cartItem);
        handleCloseModal();
    };

    return (
        <Container $isCartOpen={isCartOpen}>
            <SandwichMenuContainer id="sandwich">
                <SandwichMenuContent>
                    <MenuArea>
                        <Title>Sanduíches</Title>
                        <hr />
                        <MenuGrid $isCartOpen={isCartOpen}>
                            {menuItems.map(item => (
                                <MenuItem key={item.id} onClick={() => handleOpenModal(item)}>
                                    <MenuItemContent>
                                        <img src={item.img} alt={item.name} />
                                        <MenuSpan className="item-name">{item.name}</MenuSpan>
                                    </MenuItemContent>

                                    <MenuItemContent>
                                        <MenuP>{item.description}</MenuP>
                                        <MenuSpan className="item-price">{formatoReal(item.price.hamburguer)}</MenuSpan>                            
                                    </MenuItemContent>
                                </MenuItem>
                            ))}
                        </MenuGrid>
                    </MenuArea>
                </SandwichMenuContent>

                {/* --- MODAL --- */}
                <ModalOverlay $isOpen={isModalOpen}>
                    <ModalContainer>
                        {selectedItem && (
                            <>
                                <ModalImage>
                                    <img src={selectedItem.img} alt={selectedItem.name}/>
                                </ModalImage>
                                <ModalInfo>
                                    <div>
                                        <h2>{selectedItem.name}</h2>
                                        <p>{selectedItem.description}</p>
                                        
                                        {selectedItem.type === 'burguer' && (
                                            <div style={{ marginBottom: '15px' }}>
                                                <button 
                                                    onClick={() => setSelectedType('hamburguer')} 
                                                    style={{ background: selectedType === 'hamburguer' ? 'crimson' : '#EEE', color: selectedType === 'hamburguer' ? 'white' : 'black', border: 'none', padding: '8px 15px', borderRadius: '5px', marginRight: '10px', cursor: 'pointer' }}
                                                >
                                                    Hambúrguer
                                                </button>
                                                <button 
                                                    onClick={() => setSelectedType('frango')} 
                                                    style={{ background: selectedType === 'frango' ? 'crimson' : '#EEE', color: selectedType === 'frango' ? 'white' : 'black', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}
                                                >
                                                    Frango
                                                </button>
                                            </div>
                                        )}

                                        <div>
                                            <h3>Adicionais</h3>
                                            <AddsGrid>
                                                {addsInfo.map(add => (
                                                    <AddButton 
                                                        key={add.addName}
                                                        $isSelected={selectedAdds.some(a => a.addName === add.addName)}
                                                        onClick={() => handleToggleAdd(add)}
                                                    >
                                                        {add.addName} (+{formatoReal(add.addPrice)})
                                                    </AddButton>
                                                ))}
                                            </AddsGrid>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className='quantity-controls' style={{marginBottom: '15px', display: 'flex', alignItems: 'center'}}>
                                            <button style={{padding: '5px 15px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc'}} onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
                                            <span style={{fontSize: '18px', margin: '0 15px', fontWeight: 'bold'}}>{quantity}</span>
                                            <button style={{padding: '5px 15px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc'}} onClick={() => setQuantity(q => q + 1)}>+</button>
                                        </div>
                                        <h3 style={{marginBottom: '15px'}}>Preço: {formatoReal(getCurrentPrice())}</h3> 
                                        <button style={{background: '#149125ff', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', width: '100%', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold'}} onClick={handleAddToCart}>Adicionar ao Carrinho</button>
                                        <button style={{background: '#d92d2d', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontSize: '16px', fontWeight: 'bold'}} onClick={handleCloseModal}>Cancelar</button>
                                    </div>
                                </ModalInfo>
                            </>
                        )}
                    </ModalContainer>
                </ModalOverlay>
            </SandwichMenuContainer>
        </Container>
    );
}