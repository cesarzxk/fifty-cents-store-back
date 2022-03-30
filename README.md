<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648650340/prints/mobile/logo_vtups0.svg" width="300px">

<h3 align="center">
  Uma api NodeJS.
</h3>

<p align="center">O melhor lugar para realizar suas compras!</p>

<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/cesarzxk/fifty-cents-store-back?color=yellow">

  <a href="https://www.linkedin.com/in/cs-vargas/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-César%20Vargas-yellow">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/cesarzxk/fifty-cents-store-back?color=yellow">

  <a href="https://github.com/cesarzxk/fifty-cents-store-back/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/cesarzxk/fifty-cents-store-back?color=yellow">
  </a>

  <a href="https://github.com/cesarzxk/fifty-cents-store-back/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/cesarzxk/fifty-cents-store-back?color=yellow">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/cesarzxk/fifty-cents-store-back?color=yellow">
</p>

<p align="center">
  <a href="#%EF%B8%8F-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-capturas-de-tela">Capturas de Tela</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-técnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-iniciar-?">Iniciar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura-de-rotas">Estrutura de rotas</a>&nbsp;|&nbsp;
  <a href="#-como-contribuir-?">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 💇🏼 Sobre o projeto

Essa aplicação visa solucionar um problema imposto via um desafio fullstack, onde aqui foi realizado o consumo de api disponibilizado para dados e gerado dados armazenados em banco de dados para consulta.

## 📸 Capturas de tela

Imagens do aplicativo em operação via desktop.

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648639551/prints/Captura_de_tela_2022-03-30_081404_gewaja.png" width="400px">
<img alt="ScreenShot02" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648639551/prints/Captura_de_tela_2022-03-30_081607_p5ahsd.png" width="400px">
</p>
<p align="center">
<img alt="ScreenShot03" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648654067/fifth-cent-back/Captura_de_tela_2022-03-30_121639_vmeq8w.png" width="400px">
<img alt="ScreenShot04" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648654068/fifth-cent-back/Captura_de_tela_2022-03-30_120502_g0ki3z.png" width="400px">
</p>
<p align="center">
<img alt="ScreenShot03" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648654068/fifth-cent-back/Captura_de_tela_2022-03-30_122725_i0yvq1.png" width="400px">
</p>

## 🚀 Técnologias

As seguintes tecnologias foram utilizadar para desenvolver esse projeto:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token](https://jwt.io/)
- [UUID V4](https://www.npmjs.com/package/uuidv4)
- [Mongoose](https://mongoosejs.com/)
- [express-queue](https://www.npmjs.com/package/express-queue)

## 💻 Como iniciar ?

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

- [fifty-cents-store-frontend](https://github.com/cesarzxk/fifty-cents-store-front)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/cesarzxk/fifty-cents-store-back.git
```

**Siga aos passos a baixo**

Para iniciar o projeto primeiramente deve ser criado na raiz do projeto um arquivo .env com os sequintes parametros:

```bash

# .env file

SECRET= SUA-HASH-KEY #Sua chave hash

SERVER=mongodb+srv://SEU-USUARIO:SUA-SENHA@cluster0.irqbj.mongodb.net/fiftyCentsShopping?retryWrites=true&w=majority #Altere o usuário senha de acesso ao mongo db
```

**No terminal**

```bash
# Para instalar da dependências:
$ yarn

# Para iniciar o servidor:
$ yarn dev

```

## 🛰 Estrutura de rotas

```shell

├── /authenticate
│     │
│     └── / -> (POST method) #Recuperar dados do usuário
│
├───── /register
│           │
│           └── / -> (POST method) #Criar usuário
│
├─── /items
│      │
│      └── / -> (GET method) #Recuperar lista de items
│
└── /order
      │
      └── / -> (POST method) #Criar pedido
      │
      └── / -> (Get method) #Recuperar pedidos

```

### **Route Users (./authenticate/)**

_POST Method - authenticate_

Input:

```shell
{user, password} # Just the JWT
```

Return:

```shell
{_id, name, lastname, email, token}
```

### **Route Users (./register/)**

_POST Method - register_

Input:

```shell
{ name, password, lastname, email }
```

Return:

```shell
{token}
```

### **Route Transactions (./items/)**

_GET Method - listar items_

Input:

```shell
{ locale }
```

Return:

```shell
{ hasDiscount, name, images[], description, price, discountValue, material, category, id, locale}[]
```

_GET Method - Recuperar um item_

Input:

```shell
{ locale, id }
```

Return:

```shell
{ hasDiscount, name, images[], description, price, discountValue, material, category, id, locale}
```

### **Route Sessions (./order/)**

_POST Method - Criar pedido_

Input:

```shell
{
  {
    clientId,
    items:{productId, locale, quantity, name}[],
    total
  }
header:{bearer token}
}
```

Return:

```shell
{
  code:200
}
```

_POST Method - Recuperar pedidos_

Input:

```shell
{
  {
    id
  }[]
header:{bearer token}
}
```

Return:

```shell
{
  {
    id,
    clientId,
    items:{productId, locale, quantity, name}[],
    total
  }[]
}
```

<br/>
<p align="center">
<a href="https://insomnia.rest/run/?label=fifty-cents-store-back&uri=https%3A%2F%2Fres.cloudinary.com%2Fda91uwz7j%2Fraw%2Fupload%2Fv1648653839%2FInsomnia_2022-03-30_vnubhv.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

&nbsp;

## 🤔 Como contribuir ?

**Fazer um fork desse repositorio**

```bash
# Fork via GitHub linha de comando
# Se não possui GitHub CLI, use o website para isso.

$ gh repo fork cesarzxk/fifty-cents-store-back

```

**Siga os passos a baixo**

```bash
# Clone para seu fork
$ git clone your-fork-url && cd fifty-cents-store-back

# Crie uma branch com sua feature
$ git checkout -b my-feature

# Faça um commit com suas alterações
$ git commit -m "Minha nova feature"

# Envie o codigo para sua branch remota
$ git push origin my-feature
```

Após seu o merged do seu pull request, você poderá excluir sua branch.

## 📝 Licença

Esse projeto possui licença MIT - veja sobre [LICENSE](LICENSE) arquivo para detalhes.

---

Feito por 💜 &nbsp;César Vargas 👋 &nbsp;[Veja meu linkedin](https://www.linkedin.com/in/cs-vargas/)
