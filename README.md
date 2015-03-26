RioBus
======

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

Execute a aplicação:
    $ npm start


Comandos do NPM e Gulp
----------------------

gulp build ou npm build
    Compila o projeto e gera o código em dist/

gulp clean
    Limpa o diretório dist/ que é onde fica o código compilado

gulp run
    gulp clean && Executa o código compilado

npm start
    gulp build && gulp run

```OBS.: Para a aplicação funcionar, ela precisa estar em um projeto cujos módulos Node.js estejam instalados.```