RioBus
======

Rio de Janeiro bus geolocalization web app

    http://riob.us

Os dados são oferecidos publicamente pela prefeitura do Rio de Janeiro, em parceria com a FETRANSPOR e Iplanrio. As posições dos ônibus são recuperadas pelo GPS embarcado neles, enviados para a FETRANSPOR e, por fim, a Iplanrio as disponibiliza no Data.Rio, o projeto de dados abertos do município.

Para rodá-lo, 
<ol>

	<li>instale node.js</li>

	<li>Clone o projeto ou baixe o zip.
		<ol>
			<li>se baixou o zip, descopacte-o.</li>
			<li>se preferir clonar:<br>
			<code>$ git clone https://github.com/RioBus/server.git</code></li>
		</ol>
	</li>

	<li>Abra o terminal e entre na raiz do projeto.<br>
	<code>$ cd server/</code> </li>
		
	<li>Instale as dependencias usando o npm. <br>
	<code>$ npm install</code></li>

	<li>Rode o script de execução do node<br>
	<code>$ npm build</code></li>

	<li>O projeto estará em <code>dist/</code></li>

	<li>Para rodar, execute<br>
	<code>$ node dist/index.js</code></li>
		
</ol>
