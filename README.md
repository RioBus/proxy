RioBus [![Build Status](https://travis-ci.org/RioBus/server.svg)](https://travis-ci.org/RioBus/server)
======================================================================================================

O RioBus é um sistema colaborativo de monitoramento de ônibus em tempo real, que utiliza a API aberta de dados de
mobilidade urbana fornecida pela parceria entre a Prefeitura do Rio de Janeiro e a FETRANSPOR.
Seu objetivo principal é ajudar o cidadão, seja ele morador ou visitante, do Rio de Janeiro a se deslocar pela cidade.


Arquitetura
-----------

A aplicação do servidor do RioBus foi desenvolvida em ECMAscript 6, através do GULP e Node.js junto ao ExpressJS, que é
uma solução bastante madura de framework para construir uma RESTful API.

A organização da lógica da aplicação segue a metodologia de desenvolvimento do DDD (Domain-Driven Design), que deixa o
código desacoplado e organizado, facilitando a manutenção e a adição de novas funcionalidades.

Além disso, foi preparada uma infra-estrutura graças ao poder do GULP, um dos automatizadores de tarefas mais utilizados
atualmente por equipes de desenvolvimento de Javascript. Desta forma foi possível escrever um código limpo e sucinto que
garante flexibilidade e modularidade.

Além disso, o GULP compila o código do ECMAscript 6 em "Javascript comum" seguindo os padrões CommonJS, garantindo a
compatibilidade com a plataforma do Node.js.


Instalação
----------

Instale o Node.js

Windows e Linux:

    http://nodebr.com/instalando-node-js-atraves-do-gerenciador-de-pacotes/

Mac OS X:

    https://nodejs.org/download/

Faça o download do projeto em sua máquina:

    $ git clone https://github.com/RioBus/server.git

Entre na raiz do projeto e instale as dependências do Node.js:

    $ npm install

Todos os dados dos itinerários e das localizações dos ônibus são salvas em cache. O diretório até o arquivo deve existir
para que seja possível criar os arquivos de cache e deve ser indicado em ```config.js```, em 
```server.dataProvider.dataPath``` e em ```server.dataProvider.path.output```.

Execute a aplicação:

    $ npm start


Comandos do NPM e Gulp
----------------------

> gulp build ou npm run build

    Compila o projeto e gera o código em dist/

> gulp clean

    Limpa o diretório dist/ que é onde fica o código compilado

> gulp run

    gulp clean && Executa o código compilado

> npm test

    Invoca o Mocha para executar as rotinas de teste definidas em test/

> npm start

    gulp build && gulp run

```OBS.: Para a aplicação funcionar, ela precisa estar em um projeto cujos módulos Node.js estejam instalados.```

Compatibilidade
---------------

Esta aplicação é compatível com as seguintes versões do nodejs:

* 0.12.x
* 0.11.x