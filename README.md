# Lista de Tecnologias para Aprender

Esta é uma aplicação web desenvolvida com React para gerenciar uma lista de tecnologias que você deseja aprender. A aplicação permite adicionar, editar e remover tecnologias, exibindo-as de forma dinâmica na interface.

# Tema Recebido

O tema desta aplicação é "Lista de Tecnologias para Aprender". O objetivo é criar uma interface onde os usuários possam adicionar novas tecnologias que desejam aprender, editar informações existentes e remover tecnologias da lista.

# Instruções de Instalação e Uso

## Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Passos para Instalação

1. Clone o repositório para o seu computador:
   ```bash
   git clone [URL_DO_REPOSITORIO]

2. Navegue até o diretório do projeto:
    ```bash
    cd hello-world

3. Instale as dependências do projeto:
    ```bash
    npm install

## Execução da Aplicação

1. Inicie a aplicação
    ```bash
    npm start

2. Abra o navegador e acesse
    ```bash
    http://localhost:3000

## Uso

 - Adicione novas tecnologias utilizando o formulário de entrada.
 - Edite as tecnologias existentes clicando no botão "Editar" ao lado da tecnologia desejada.
 - Remova tecnologias da lista clicando no botão "Remover" ao lado da tecnologia desejada.

 ## Descrição dos componentes

 ### App.js
 Este é o componente principal da aplicação. Ele gerencia o estado global, incluindo a lista de tecnologias, e define as funções para adicionar, editar e remover tecnologias.

 ### AddTechnology.js
 Este componente contém um formulário para adicionar novas tecnologias. Ele usa o hook "useState" para gerenciar o estado do campo de entrada.

 ### TechnologyList.js
 Este componente exibe a lista de tecnologias. Ele recebe a lista de tecnologias e as funções de edição e remoção como props e mapeia cada tecnologia para um componente "TechnologyItem".

 ### TechnologyItem.js
 Este componente representa cada item da lista de tecnologias. Ele permite a edição e remoção de tecnologias. O estado de edição é gerenciado pelo hook "useState".

 ### Estilo e Layout
 A estilização básica da aplicação é feita utilizando CSS. O arquivo "App.css" contém estilos básicos para o layout e a apresentação dos componentes.