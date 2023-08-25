<h1 align="center">  Cadastro De Endereços </h1>
Este repositório contém o código-fonte e a documentação para um sistema de cadastro de endereços, projetado para simplificar o gerenciamento de informações de endereços. O sistema oferece funcionalidades de inserção, edição e exclusão de endereços, e integra-se perfeitamente com a API ViaCep para obter detalhes de endereços a partir de um CEP.

## Funcionalidades Principais

`Inserir Endereço:` Permite aos usuários adicionar um novo endereço, fornecendo todas as informações necessárias, incluindo título, logradouro, complemento, bairro, localidade e UF. A data de criação é automaticamente registrada.

`Editar Endereço:` Oferece a capacidade de modificar qualquer informação de um endereço existente. As alterações são registradas, atualizando a data de atualização.

`Excluir Endereço:` Permite a exclusão segura de um endereço, removendo-o do sistema permanentemente.

## Integração com ViaCep:

O sistema inclui uma funcionalidade adicional que simplifica o processo de inserção de endereços. Na página inicial, os usuários podem inserir um CEP em um campo de texto e, ao clicar em "Cadastrar", uma modal central será exibida na tela. Essa modal busca automaticamente informações detalhadas do CEP na API da ViaCep `(https://viacep.com.br/)` e preenche os campos, incluindo logradouro, complemento, bairro, localidade e UF.

## Tecnologias Utilizadas:

Linguagem de Programação: <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png" width=30><br>
Bibliotecas/Frameworks: <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png?20170919082558" width=30> <img loading="lazy" src="https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png" width=30><br>
Requisições HTTP: <img loading="lazy" src="https://avatars.githubusercontent.com/u/32372333?s=200&v=4" width=30>

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Autor

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/85231417?v=4" width=115><br><sub>Wellington Henrique Batista</sub>](https://github.com/henbatista) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
