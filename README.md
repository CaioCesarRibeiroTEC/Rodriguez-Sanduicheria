# 🍔 Rodrigues Sanduicheria - Cardápio Digital

![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

Aplicação web desenvolvida para modernizar o atendimento de uma sanduicheria, oferecendo um **Cardápio Digital interativo** com sistema de carrinho de compras e personalização de pedidos.

O projeto foi inicialmente construído em React (SPA) e recentemente refatorado e migrado para **Next.js (App Router)**, garantindo maior performance, roteamento otimizado e uma estrutura escalável.

## ✨ Funcionalidades

- **Navegação Dinâmica:** Transição suave entre categorias (Combos, Sanduíches, Bebidas e Açaí) utilizando o App Router do Next.js.
- **Modais de Personalização Inteligentes:**
  - Escolha entre hambúrguer bovino ou frango.
  - Adição de ingredientes extras com cálculo automático de preços.
  - Modais dinâmicos adaptados para escolha de sabores (sucos/cremes) e montagem de Açaí (tamanhos e acompanhamentos).
- **Carrinho de Compras (Context API):** Gerenciamento global de estado para adicionar itens, alterar quantidades, remover produtos e calcular o total da compra em tempo real.
- **Checkout Simulado:** Formulário integrado para endereço de entrega e escolha da forma de pagamento (Cartão, PIX, Dinheiro).
- **Sistema de Avaliações:** Área para clientes deixarem comentários e notas, com persistência temporária (LocalStorage).
- **Design 100% Responsivo:** Layout adaptável para proporcionar a melhor experiência tanto em computadores quanto em dispositivos móveis (Smartphones/Tablets).

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **[Next.js](https://nextjs.org/)** - Framework React com App Router.
- **[React.js](https://reactjs.org/)** - Biblioteca JavaScript para construção da interface de usuário.
- **[Styled-Components](https://styled-components.com/)** - CSS-in-JS para estilização componentizada e isolada.
- **Context API** - Para gerenciamento do estado global do Carrinho de Compras.

## 📁 Estrutura de Pastas (Destaques)

O projeto segue a arquitetura moderna do Next.js:

- `/public`: Arquivos estáticos e imagens do projeto (logos, fotos dos sanduíches).
- `/src/app`: Rotas da aplicação (`/combos`, `/sandwich`, `/drinks-acai`) e o Layout Global (`AppShell`).
- `/src/components`: Componentes reutilizáveis (Header, Footer, Cart, MenuStyles, etc).
- `/src/context`: Lógica de estado global (`UserContext`).

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar a aplicação na sua máquina:

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/rodrigues-sanduicheria-nextjs.git](https://github.com/SEU-USUARIO/rodrigues-sanduicheria-nextjs.git)