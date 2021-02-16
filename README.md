# Sistema de Pedidos
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GustavoSC1/curso-spring-ionic-frontend/blob/master/LICENSE)

# Sobre o projeto

O projeto **Sistema de Pedidos** é um e-commerce que foi criado dentro do curso **Spring Boot, Hibernate, REST, Ionic, JWT, S3, MySQL, MongoDB** com o intuito de colocar em prática todo conceito estudado durante o curso.

A aplicação consiste em um app mobile que simula um e-commerce. O app possui toda a parte de login, cadastro de usuário, fluxo completo de navegação de carrinho de compras, fluxo de fechamento de pedido, tela de perfil de usuário com envio de foto tanto pela câmera quanto pela galeria.

## Layout
![Layout](https://ik.imagekit.io/gustavosc/Sistema_de_Pedidos/Imagem_readme_Bgg48AXr5.png) 

## Modelo conceitual
![Modelo Conceitual](https://ik.imagekit.io/gustavosc/Sistema_de_Pedidos/Modelo_conceitual_9DCgqTOAM.PNG)

# Tecnologias utilizadas
## Front end
- [TypeScript](TypeScript)
- [Angular 5](https://angular.io/)
- [Ionic 3](https://ionicframework.com/docs)

# Como executar o projeto

## Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico para executar um Aplicativo Ionic 3:

  -Instalar o NodeJS [aqui](https://nodejs.org).
    Obs: Instalar versão LTS

  -Testar o NodeJS:
  ```bash
    node -v
    npm -v
  ```
  
  -Instalar o [Ionic CLI](https://ionicframework.com/docs/intro/installation) e Cordova :
  ```bash
    npm install -g ionic@3.19.0 cordova@7.1.0
   ```
    
Além disso, você também pode utilizar o back-end rodando localmente em sua máquina com os dados fictícios. Você pode encontrar o back-end e todas as instruções para iniciá-lo [aqui] (https://github.com/GustavoSC1/cursomc). 

## Front end web
Pré-requisitos: npm / yarn

Você pode utilizar o back-end funcionando em sua máquina ou o deploy dele no Heroku, para isso acesse o arquivo src\config\api.config.ts e edite o valor de BASE_URL.

Deve ser assim:

baseUrl: "https://java-spring-ionic-curso.herokuapp.com"

Ou

baseUrl: "http://localhost:8080"

Você também pode baixar o apk do app [aqui](https://www.dropbox.com/s/ds6ouxjohp2u1tq/SistemaPedidos.apk?dl=0).

```bash
# clonar repositório
git clone https://github.com/GustavoSC1/curso-spring-ionic-frontend

# entrar na pasta do projeto front end web
cd curso-spring-ionic-frontend-master

# instalar dependências
npm install

# executar o projeto no navegador
ionic cordova platform add browser --save

# executar o projeto em um dispositivo conectado
ionic cordova platform add android --save
```

# Autor

Gustavo da Silva Cruz

https://www.linkedin.com/in/gustavo-silva-cruz-20b128bb/
