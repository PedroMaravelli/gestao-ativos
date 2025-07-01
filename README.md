

# Gestão de Ativos

Sistema web para **gestão de ativos de uma empresa**, permitindo o controle eficiente de **hardware, software e ativos de rede**.

## 🧩 Tecnologias Utilizadas

- **React 19** – biblioteca principal da interface
- **React Router DOM 7** – gerenciamento de rotas
- **Styled Components 6** – estilização com CSS-in-JS
- **Lucide React** – ícones modernos e personalizáveis
- **Axios** – consumo de APIs
- **Vite** – ferramenta de build e dev server
- **Node.js** – ambiente de execução

## 💻 Funcionalidades

- Cadastro e visualização de ativos
- Classificação por tipo (hardware, software, rede)
- Interface moderna e responsiva
- Navegação rápida entre páginas

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a passo

Clone o repositório:

```bash
git clone https://github.com/PedroMaravelli/gestao-ativos.git
cd gestao-ativos
````

Instale as dependências:

```bash
npm install
# ou
yarn
```

Inicie o projeto com Vite:

```bash
npm run dev
# ou
yarn dev
```

Acesse no navegador:

```
http://localhost:5173
```

## 📁 Estrutura do projeto

```
gestao-ativos/
├── public/ # Arquivos públicos
├── src/
│  ├── assets/ # Imagens, ícones e outros recursos estáticos
│  ├── components/ # Componentes reutilizáveis
│  ├── routes/ # Arquivo de definição de rotas
│  ├── screens/ # Páginas principais da aplicação
│  ├── service/ # Serviços como chamadas à API
│  ├── App.jsx # Componente principal da aplicação
│  ├── main.jsx # Ponto de entrada da aplicação React
│  ├── App.css # Estilos globais
│  └── index.css # Estilos base
├── index.html # HTML base da aplicação
├── vite.config.js # Configuração do Vite
├── package.json # Dependências e scripts do projeto
├── eslint.config.js # Regras de lint
└── README.md # Documentação do projeto
```




Desenvolvido com 💻 por [Pedro Maravelli](https://github.com/PedroMaravelli)

