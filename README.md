RioBus
======

[![Build Status](https://snap-ci.com/RioBus/proxy/branch/dev/build_image)](https://snap-ci.com/RioBus/proxy/branch/dev)

O RioBus é um sistema colaborativo de monitoramento de ônibus em tempo real, que utiliza a API aberta de dados de
mobilidade urbana fornecida pela parceria entre a Prefeitura do Rio de Janeiro e a FETRANSPOR.
Seu objetivo principal é ajudar o cidadão, seja ele morador ou visitante, do Rio de Janeiro a se deslocar pela cidade.


Arquitetura
-----------

A aplicação do servidor do RioBus foi desenvolvida em Node.js junto ao ExpressJS, que é
uma solução bastante madura de framework para construir uma RESTful API.

A organização da lógica da aplicação segue um design bem modular, que deixa o código desacoplado e organizado, 
facilitando a manutenção e a adição de novas funcionalidades.


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

Execute a aplicação:
> $ npm start

Os dados dos ônibus são salvos no banco de dados NoSQL [MongoDB](https://www.mongodb.org/). Certifique-se de que ele 
esteja ligado antes de executar a aplicação. As configurações de conexão devem ser definidas no módulo ```config```, 
em ```Config.database```.

Comandos NPM
------------

npm test
> Invoca o Mocha e roda as rotinas de testes unitários configurados em test/

npm start
> Roda a aplicação

```OBS.: Para a aplicação funcionar, ela precisa estar em um projeto cujos módulos Node.js estejam instalados.```

Compatibilidade
---------------

* Node.js >= 4.0