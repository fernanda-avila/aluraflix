## 📺 AluraFlix
### 📜 Descrição

O AluraFlix é uma aplicação em React que permite a exibição, criação, edição e exclusão de cards de vídeos. 


### 🖥️ Sobre o Vite
O projeto foi desenvolvido utilizando Vite, um construtor de aplicações web extremamente rápido que utiliza ESM (ECMAScript Modules) nativo para uma inicialização rápida e tempos de desenvolvimento mais ágeis. 

Ele oferece recarregamento rápido de módulos (HMR - Hot Module Replacement), o que é ideal para desenvolvimento React eficiente e rápido.

### 🌀 Inicializando um Projeto com Vite

#### 1. Instalação do Vite
Primeiro, você precisa ter o Node.js instalado na sua máquina. Você pode baixá-lo em nodejs.org.

Depois de ter o Node.js instalado, abra seu terminal (ou prompt de comando) e instale a versão mais recente do Vite globalmente via npm (Node Package Manager), usando o seguinte comando:

```
npm install -g create-vite@latest
```
#### 2. Criando um Novo Projeto com Vite

Depois de instalar o Vite, crie um novo projeto com o comando ```create-vite```, seguido pelo nome do seu projeto. Por exemplo, para criar um projeto chamado meu-projeto:
```
create-vite meu-projeto
```

Isso criará uma estrutura básica de projeto com Vite na pasta meu-projeto.

#### 3. Navegando para o Diretório do Projeto
Após a criação bem-sucedida, navegue para o diretório do seu projeto usando o comando cd:
```
cd meu-projeto
```

#### 4. Instalando as Dependências

Dentro do diretório do projeto, instale as dependências utilizando npm ou yarn:

Com npm:
```
npm install
```

Com yarn:
```
yarn install
```


#### 5. Rodando o Projeto
Para iniciar o servidor de desenvolvimento, use o seguinte comando:

Com npm:
```
npm run dev
```

Com yarn:
```
yarn dev
```

Isso iniciará o servidor de desenvolvimento do Vite. Por padrão, ele estará disponível em http://localhost:3000.


### 🌐 Sobre o Json-Server
A aplicação utiliza também o json-server para simular um backend, facilitando o desenvolvimento e os testes. 🚀
O json-server é uma biblioteca que cria uma API REST fake baseada em um arquivo JSON. 
É muito útil para simular um backend e testar a integração da sua aplicação.

###  🛠️ Inicializando o Json-Server

Crie um arquivo db.json na raiz do projeto com o seguinte conteúdo:

```
{
  "videos": [
    { "id": 1, "imagem": "link_to_image1", "area": "Video Area 1" },
    { "id": 2, "imagem": "link_to_image2", "area": "Video Area 2" }
  ]
}
```

Inicie o json-server:

```
npx json-server --watch db.json --port 8080
```

#### 4. Rodando a Aplicação
Com npm:
```
npm start
```

Com yarn:
```
yarn start
```

A aplicação estará disponível em http://localhost:3000.

### ✨ Funcionalidades
Exibição de uma lista de vídeos.

Criação de novos vídeos.

Edição de vídeos existentes.

Exclusão de vídeos.

Navegação entre páginas.

Página de erro personalizada (404).

Função para converter url automáticamente

A função ```convertToEmbedUrl``` transforma uma URL de vídeo do YouTube que está no formato de visualização padrão (do tipo youtube.com/watch?v=) em uma URL de incorporação (embed) do YouTube. Isso é útil para incorporar vídeos de forma mais integrada e responsiva em páginas da web. Se a URL não corresponder ao formato esperado, a função retorna a URL original sem modificação.

convertToEmbedUrl
```
function convertToEmbedUrl(url) {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1];
      return https://www.youtube.com/embed/${videoId};
    }
    return url; 
  }
```

Exemplo de uso:
```
const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const embedUrl = convertToEmbedUrl(url);
console.log(embedUrl);
```
// Output: https://www.youtube.com/embed/dQw4w9WgXcQ


### 🛠️ Tecnologias Utilizadas
React

React Router

CSS Modules

json-server

Swiper

### ⚙️ Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

Node.js

npm ou yarn

### 🚀 Como rodar o projeto
#### 1. Clonando o Repositório
```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd aluraflix
```
#### 2. Instalando as Dependências
Com npm:

```
npm install
```

Com yarn:


```
yarn install
```

### 🗂️ Estrutura do Projeto
```
aluraflix/

├── node_modules/

├── public/

│   ├── index.html

│   └── ...

├── src/

│   ├── componentes/

│   │   ├── Area/

│   │   ├── Banner/

│   │   ├── CampoTexto/

│   │   ├── Footer/

│   │   ├── Botao/

│   │   ├── TextArea/

│   │   ├── Header/

│   │   ├── ListaSuspensaArea/

│   │   ├── ModalEditarVideo/

│   │   └── ...

│   ├── pages/

│   │   ├── AssistirVideo/

│   │   ├── Inicial/

│   │   ├── NorFound/

│   │   └── NovoVideo/

│   ├── App.jsx

│   ├── index.jsx

│   └── ...

├── db.json

├── package.json

├── README.md

└── vite.config.
```

### 📄 Páginas Disponíveis
Página Inicial: Exibe uma lista de vídeos.

Criar Vídeo: Formulário para adicionar novos vídeos.

Assistir Vídeo: Página dedicada para assistir a um vídeo selecionado.

Editar Vídeo (Modal): Modal para editar as informações de um vídeo.

Excluir Vídeo: Opção de excluir vídeos na lista principal.

### 🧩 Componentes Principais
Area: Componente responsável por exibir áreas específicas de vídeos.

Banner: Componente de destaque.

CampoTexto: Componente de campo de entrada de texto.

Footer: Rodapé da aplicação.

Botao: Botão de formulário.

TextArea: Componente de descrição do formulário.
Header: Cabeçalho da aplicação.

ListaSuspensaArea: Lista suspensa para selecionar áreas.

ModalEditarVideo: Modal para editar vídeos.

### 🔄 Hooks e Métodos

#### Hooks

useState: Utilizado para gerenciar o estado dos componentes.

useEffect: Utilizado para realizar efeitos colaterais em componentes funcionais.

useHistory: Hook do React Router para manipular o histórico de navegação.

#### Métodos
fetch: Utilizado para realizar requisições HTTP (GET, POST, DELETE, etc.).

window.scrollTo: Utilizado para rolar a página para uma posição específica.

### 🔄 React Router
O React Router é uma biblioteca utilizada para gerenciar a navegação entre diferentes páginas em uma aplicação React.

Instalação via npm ou yarn:

Com npm:
```
npm install react-router-dom
```

Com yarn:
```
yarn add react-router-dom
```

#### Importação no seu projeto:

Em qualquer componente onde você deseja usar o React Router, importe os componentes necessários do react-router-dom. Por exemplo, no seu arquivo App.js ou em componentes de roteamento específicos.

```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
```

Você pode acessar a documentação oficial do React Router para aprender mais sobre como utilizá-lo e configurá-lo em seu projeto:

Documentação oficial do React Router: [React Router Docs](https://reactrouter.com/en/main)

Com esses passos e a documentação, você estará pronto para começar a utilizar o React Router!

### 🌠 Swiper
O Swiper é uma biblioteca que permite a criação de carrosséis de imagens e outros tipos de conteúdo interativo.

Instalação via npm ou yarn


Com npm:
```
npm install swiper
```

Com yarn:
```
yarn add swiper
```

Importação no seu projeto:

 Você pode fazer isso globalmente no seu arquivo principal (como index.js ou App.js) ou em componentes específicos onde deseja usar o Swiper.

```
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
```

Documentação oficial do Swiper: [Swiper Docs](https://swiperjs.com/react)

