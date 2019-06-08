# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Tag async: Indica ao navegador que não precisa interromper a renderização do HTML ao localizar uma tag script, tanto o HTML quanto o arquivo externo de script, no caso API do Google Maps, serão montados assincronamente.

  Tag defer: Indica ao navegador que a execução da API poderá ser realizada logo após a conclusão da renderização do HTML no DOM. 
    
### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Este parâmetro é utilizado para chamar a função initMap() que está dentro do arquivo index.js.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Quando removemos o parâmetro a aplicação deixa de renderizar o mapa, isto ocorre porque não é chamada a função initMap(), está função contém a instância de um mapa que é montado em uma div no arquivo index.html.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Podemos colocar um evento onLoad chamando a função initMap() dentro da tag body, ex:
    <body onLoad="initMap()"></body>

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: Tag link: Está tag define um link entre o documento e um recurso externo, neste caso é um arquivo json.
  Tag meta: A tag meta fornece um resume do que será encontrado na página, isto auxilia os motores de busca a localizar e indexar a página, nesta tag pode ser fornecido as palavras chaves, a descrição de uma página, o autor do documento entre outros metadados.
    
    <meta name="theme-color" content="">
      Especifica a cor do tema para o Chrome no Android.

    <meta name="apple-mobile-web-app-capable" content="yes">
      Informa ao Apple IOS que a aplicação pode ter um ícone na área de trabalho do usuário e abre o navegador sem uma barra de menu.

    <meta name="apple-mobile-web-app-status-bar-style" content="black">`
      Define o estilo da barra de status, neste caso será preta.  
    

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não é um PWA, apesar de estar configurado nos metadados para aplle mobiles. Para que seja considerada um PWA falta ter responsividade e funcionar mesmo que o usuário esteja offline. 


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 

### c) Para que serve a tag ngFor do angular?
R:


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R:
