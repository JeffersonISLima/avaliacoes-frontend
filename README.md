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
    `<body onload="initMap()"></body>`

  Outra maneira de fazer com que funcione, é chamar o evento onload no final da página index.js, ex:
  `window.onload = initMap;`

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: Tag link: Está tag define um link entre o documento e um recurso externo, neste caso é um arquivo json.
  Tag meta: A tag meta fornece um resume do que será encontrado na página, isto auxilia os motores de busca a localizar e indexar a página, nesta tag pode ser fornecido as palavras chaves, a descrição de uma página, o autor do documento entre outros metadados.
    
    `<meta name="theme-color" content="">`
      Especifica a cor do tema para o Chrome no Android.

    `<meta name="apple-mobile-web-app-capable" content="yes">`
      Informa ao Apple IOS que a aplicação pode ter um ícone na área de trabalho do usuário e abre o navegador sem uma barra de menu.

    `<meta name="apple-mobile-web-app-status-bar-style" content="black">`
      Define o estilo da barra de status, neste caso será preta.  
    

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não é um PWA, apesar de estar configurado nos metadados para aplle mobiles. Para que seja considerada um PWA falta ter responsividade e funcionar mesmo que o usuário esteja offline. 


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:
  O método ngOnInit() é carregado uma única vez na inicialização de um componente. Este método invoca todos os métodos que estão dentro de seu escopo para serem inicializados junto com o componente.
  Métodos lifecycle hooks:
    ngOnChanges(): Manipula as mudanças, é chamado quando uma propriedade vinculada a dados de uma diretiva é alterada.
    
    ngDoCheck(): 	Detecção de mudanças, chamado quando o Angular não pode detectar alguma mudança automaticamente.

    ngAfterContentInit(): Definido para manipular quaisquer tarefas adicionais de inicialização.

    ngAfterContentChecked():  É chamado depois que o detector de mudança padrão concluiu a verificação de todo o conteúdo de uma diretiva.

    ngAfterViewInit(): Este ciclo é chamado após o Angular ter inicializado totalmente a visualização de um componente. Este metódo manipula qualquer tarefa adicional de inicialização.

    ngAfterViewChecked(): Este lifecycle hook é chamado depois que o detector de mudanças padrão concluiu a verificação da exibição de um componente em busca de alterações.

    ngOnDestroy():  Este método é chamado quando uma diretiva ou serviço é destruído. Utilizado para realizar limpeza personalizada quando a instância for destruída.


### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 
  Web components são um conjunto de tecnologias diferentes que permitem criar elementos customizados e reutilizáveis para a plataforma web.
  As vantagens no uso é que componentes criados neste padrão, funcionarão em navegadores modernos e podem ser usados ​​com qualquer biblioteca ou estrutura JavaScript que trabalhe com HTML.

### c) Para que serve a tag ngFor do angular?
R:
  Está tag executa um loop, iterando em cada elemento de um array.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R
  Declara um array vazio e define o tipo string no TypeScript.

### e) Como funciona a api Events do Ionic? Para que serve?
R: 
  A API Events é utilizada para comunicação entre componentes quando um determinado evento acontece no aplicativo, por exemplo, um usuário pode receber uma mensagem de saudação quando faz login.

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 
  Flexbox em CSS é utilizado para facilitar o posicionamento de itens da estrutura HTML na página, como por exemplo imagens lado a lado.  

  As tags ion-grid, ion-row, ion-col, geram um sistema de posionamento conhecido como grid layout na página, baseado em linhas e colunas. Uma vantagem importante é a responsividade que o grid permite para diferentes tipos de dispositivos, outra vantagem é a rapidez com que o front-end é desenvolvido e a atualização do layout de maneira consistente.


## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:
  1- O bundle não era gerado por erro de digitação no import do LoadingController e na função dismissLoading  do arquivo home.page.ts;

  2- A função printOnConsole() funciona de forma síncrona, isto atrasa a execução das outras funções;

  3- A forma de consumir a API com o método push dos dados para o array vazio causava erro em algumas imagens que não eram recuperadas, na aba network do developer tools apareciam como 404, ou seja, não encontradas;

  4- A forma de embaralhar o array de cartas;

  5- O tempo de execução para a função dismissLoading() dentro do SetTimeout;

  6- Estilo CSS inline;

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:
  1- O bundle não era gerado por erro de digitação no import do LoadingController e na função dismissLoading  do arquivo home.page.ts; 

  2- A forma de consumir a API com o método push dos dados para o array vazio causava erro em algumas imagens que não eram recuperadas, na aba network do developer tools apareciam como 404, ou seja, não encontradas;

  3- A função printOnConsole() funciona de forma síncrona, isto atrasa a execução das outras funções;

  4- O tempo de execução para a função dismissLoading() dentro do SetTimeout;

  5- A forma de embaralhar o array de cartas;

  6- Estilo CSS inline;

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 
  1- Impacto: App indisponível. 
     Dificuldade: Nenhuma, após ler o terminal identifiquei as palavras erradas e o arquivo onde estavam.
  
  2- Impacto: Fotos não recuperadas, não renderizavam.
     Dificuldade: Nenhuma, já havia utilizado o Axios com o React JS, bastou instalar essa dependência no projeto, importar no componente e utilizar o método get do Axios para buscar os dados da API e colocar em um array.
  
  3- Impacto: Atraso na execução.
     Dificuldade: Nenhuma, a função printOnConsole() e a chamada dela dentro do ngOnInit() foram excluídas.
  
  4- Impacto: Atraso na execução.
     Dificuldade: Nenhuma, o tempo mínimo para a execução dentro do setTimeOut() foi alterado de cinco segundos para um segundo.

  5- Impacto: Atraso na execução.
     Dificuldade: Média, não conhecia a biblioteca Lodash, pesquisei a documentação e alguns sites na web. Essa biblioteca tem uma maneira relativamente simples de embaralhar um array que foi implementada no projeto para retornar um array de fotos aleatórias a cada reflesh na página.
  
  6- Impacto: Nenhum.
     Dificuldade: Nenhuma. As configurações de estilo CSS foram colocadas em um arquivo externo.
    

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:
  async: Declara uma função assíncrona.
  await: Aguarda a resolução da função assíncrona antes de continuar com o fluxo atual.

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:
  A vantagem é o uso de promisses, as demais funções do programa podem continuar executando e quando a função assíncrona concluir sua tarefa, ela retorna a promisse, isto é importante para não  bloquear a aplicação enquanto a função assíncrona é executada.

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R:
  Está é uma biblioteca para iteração sobre um array que visa performance nas operações, também facilita a manipulação dos elementos do array independente do tipo de dado.
