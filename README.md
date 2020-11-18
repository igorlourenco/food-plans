### ⚡  Jungsoft Frontend Tech Challenge - Igor

###### 👾 Disponível em [https://jungsoft-frontend-tech-challenge-igor.vercel.app](https://jungsoft-frontend-tech-challenge-igor.vercel.app/).

###### Resolvi criar a documentação em português porque julgo mais fácil para transmitir as informações com clareza.
###### I decided to create the documentation in Portuguese because I think it is easier to convey the information clearly.

---

**Como executar e testar**
1. Clone o projeto para sua máquina;
2. Navegue até o diretório do projeto e execute `yarn install` ou `npm install`, dependendo do gerenciador de pacotes da sua preferência;
3. Execute `yarn dev`;
4. Navegue até [http://localhost:3000](http://localhost:3000) e veja o projeto funcionando.

**Tecnologias utilizadas**
* JavaScript ([TypeScript](https://www.typescriptlang.org/)) como linguagem base para todo o desenvolvimento da aplicação;
* [Next.js](https://nextjs.org/) como o framework (de ReactJS) base do desenvolvimento;
* [Chakra UI](https://chakra-ui.com/getting-started) como biblioteca de estilização;
* [Apollo Client](https://www.apollographql.com/docs/react/) para fazer a conexão com o serviço backend.

**Conceitos praticados**
* Abstração de componentes;
* Consumo de dados de uma API;
* Envio de dados para uma API externa;
* Prática em seguir design predefinido;
* Responsividade;
* Uso de Apollo Client para consumo de dados.

**Dificuldades encontradas**
* Por ter sido o meu primeiro projeto utilizando Apollo Client, demorei um pouco para entender como funcionam *queries* e *mutations*;
* Ao finalizar o projeto, por conta de políticas de CORS, não consegui enviar dados com a *mutation* em qualquer máquina que não fosse a **localhost**, nem mesmo as que estavam na mesma rede.
* Com minha experiência e conhecimentos até o momento, não consegui resolver o problema do ponto anterior.
    * Nota-se que o consumo de dados utilizado para buscar o número de pessoas que as receitas atendem e a quantidade de receitas semanais funciona normalmente.
---

Feito com ❤ e TypeScript por Igor Lourenço.