# viasoft-js-back

Para rodar o back-end é necessário configurar a porta do servidor que será utilizada.
Por padrão a porta é a "8080", porém pode ser mudado com uma variável de ambiente chamada "PORT".

É necessário também instalar o mongoDb e iniciar o processo (geralmente mongod).

**Passo a passo da instalação no seguinte link**
https://docs.mongodb.com/manual/installation/

Após a instalação, é necessário configurar o endereço/porta do banco de dados no backend.
Essa configuração está no arquivo "./src/config/db.config.ts"

Nesse arquivo deve ser configurada a propriedade 'url' da constante 'dbConfig'. 

A url deve ficar mais ou menos assim: **`mongodb://${IP do banco}:${Porta do banco}/${Nome do banco}`**

Sendo o nome do banco de sua escolha.

**Após essas configurações o backend pode ser rodado através dos comandos 'npm start' ou 'yarn start'**
