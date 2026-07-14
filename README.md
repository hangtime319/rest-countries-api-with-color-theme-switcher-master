# REST Countries API with Color Theme Switcher

Esta é uma solução para o desafio [REST Countries API with color theme switcher no Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). 

## 🔗 Links
- **Projeto Online (Live Site):** [https://hangtime319.github.io/rest-countries-api-with-color-theme-switcher-master/](https://hangtime319.github.io/rest-countries-api-with-color-theme-switcher-master/)

## 📋 Visão Geral

O objetivo deste projeto foi construir uma aplicação web que exibe dados de países do mundo todo, permitindo que o usuário navegue, pesquise, filtre e visualize detalhes de cada nação, além de poder alternar entre os modos claro e escuro.

### ✨ Funcionalidades (Features)
Os usuários são capazes de:
- Ver todos os países na página inicial através de uma interface em grid responsiva.
- Pesquisar por um país específico utilizando um campo de input.
- Filtrar os países por continente (África, América, Ásia, Europa, Oceania) através de um menu dropdown customizado.
- Clicar em um país para ver informações mais detalhadas em uma página dedicada.
- Navegar pelos países que fazem fronteira clicando diretamente nas tags de fronteira na página de detalhes.
- Alternar o esquema de cores do site entre Modo Claro (Light Mode) e Modo Escuro (Dark Mode).

## 🛠️ Tecnologias Utilizadas

- [ReactJS](https://react.dev/) - Biblioteca JavaScript para construção de interfaces.
- [Vite](https://vitejs.dev/) - Ferramenta de build super rápida.
- [React Router DOM](https://reactrouter.com/) - Para roteamento dinâmico e navegação SPA (Single Page Application).
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização e responsividade.
- Flexbox e CSS Grid.
- Variáveis CSS customizadas (para o sistema de temas globais).

## 🧠 O que eu aprendi

Este projeto foi fundamental para solidificar conceitos importantes do ecossistema React. Alguns dos principais aprendizados incluem:

### 1. Roteamento Dinâmico (React Router)
Aprendi a transformar componentes isolados em páginas navegáveis. Utilizei o `useParams` para capturar a sigla do país diretamente da URL (`/country/:id`) e renderizar a página de detalhes correspondente.

### 2. Elevação de Estado (Lifting State Up)
Para fazer o campo de busca e o filtro de continente funcionarem juntos com a lista de países, precisei "elevar o estado" (usando `useState`) para o componente pai (`MainCountries`). Isso me permitiu criar uma lógica de filtragem combinada:
```javascript
const filteredCountries = countries.filter((country) => {
  const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
  return matchesSearch && matchesRegion;
});

### 3. Dark Mode com Tailwind CSS
Implementei um sistema de temas utilizando a manipulação do documentElement no React e redefinindo variáveis globais no arquivo CSS principal. Aprendi como usar utilitários dinâmicos do Tailwind e a classe fill-current em arquivos SVG para fazer ícones mudarem de cor magicamente acompanhando o texto pai.

### 4. Custom Hooks e Referências
Descobri que inputs nativos como <select> são difíceis de estilizar da forma que queremos na web. Para contornar isso, criei um dropdown customizado para o filtro de regiões e utilizei os hooks useRef e useEffect para criar a funcionalidade avançada de fechar o menu ao clicar fora dele (Click Outside).

🚀 Como rodar o projeto localmente
Para rodar este projeto na sua máquina, siga os passos abaixo:

Clone o repositório para o seu computador:

Bash
git clone [https://github.com/hangtime319/rest-countries-api-with-color-theme-switcher-master.git](https://github.com/hangtime319/rest-countries-api-with-color-theme-switcher-master.git)
Entre na pasta do projeto:

Bash
cd rest-countries-api-with-color-theme-switcher-master
Instale as dependências necessárias:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev

Feito com dedicação durante meus estudos de ReactJS e Tailwind CSS! 🚀
