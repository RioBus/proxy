RioBus
======

[![Build Status](https://travis-ci.org/RioBus/proxy.svg)](https://travis-ci.org/RioBus/proxy)
[![Coverage Status](https://coveralls.io/repos/RioBus/proxy/badge.svg)](https://coveralls.io/r/RioBus/proxy)

O RioBus é um sistema colaborativo de monitoramento de ônibus em tempo real, que utiliza a API aberta de dados de
mobilidade urbana fornecida pela parceria entre a Prefeitura do Rio de Janeiro e a FETRANSPOR.
Seu objetivo principal é ajudar o cidadão, seja ele morador ou visitante, do Rio de Janeiro a se deslocar pela cidade.


Arquitetura
-----------

A aplicação do servidor do RioBus foi desenvolvida em TypeScript, através do GULP e Node.js junto ao ExpressJS, que é
uma solução bastante madura de framework para construir uma RESTful API.

A organização da lógica da aplicação segue a metodologia de desenvolvimento do DDD (Domain-Driven Design), que deixa o
código desacoplado e organizado, facilitando a manutenção e a adição de novas funcionalidades.

Além disso, foi preparada uma infra-estrutura graças ao poder do GULP, um dos automatizadores de tarefas mais utilizados
atualmente por equipes de desenvolvimento de Javascript. Desta forma foi possível escrever um código limpo e sucinto que
garante flexibilidade e modularidade.

Além disso, o GULP compila o código do TypeScript em "Javascript comum" seguindo os padrões CommonJS, garantindo a
compatibilidade com a plataforma do Node.js.


Instalação
----------

Instale o Node.js

Windows e Linux:
> http://nodebr.com/instalando-node-js-atraves-do-gerenciador-de-pacotes/

Mac OS X:
> https://nodejs.org/download/

Faça o download do projeto em sua máquina:
> $ git clone https://github.com/RioBus/proxy.git

Entre na raiz do projeto e instale as dependências do Node.js:
> $ npm install

Ainda na raiz do projeto, configure o ambiente
> $ npm run configure

Execute a aplicação:
> $ npm start

Os dados dos ônibus são salvos no banco de dados NoSQL [MongoDB](https://www.mongodb.org/). Certifique-se de que ele 
esteja ligado antes de executar a aplicação. As configurações de conexão devem ser definidas na classe ```Config```, 
em ```Config.environment.<ambiente>.database```.

Comandos NPM
------------

npm run configure
> Configura o ambiente para compilação

npm run build
> Compila o projeto para JavaScript e põe o código em compiled/build/

npm run test
> Invoca o Mocha e roda as rotinas de testes unitários configurados em test/

npm run start
> Compila e roda a aplicação

npm run release
> Compila e gera um código comprimido para distribuição

npm run deploy
> Compila, gera o código de distribuição e executa a aplicação final

```OBS.: Para a aplicação funcionar, ela precisa estar em um projeto cujos módulos Node.js estejam instalados.```

Compatibilidade
---------------

* nodejs >= 0.11