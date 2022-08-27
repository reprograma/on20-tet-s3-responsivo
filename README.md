<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Responsividade HTML e CSS
Turma Online 20 - Todas em Tech  | Front-end | Semana 3 | 2022 | Professora Jaqueline de Almeida

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clique no botão "code"
* Copie o endereço do repositório
* Abra o seu Gitbash

* Entre no seu desktop:
```
     cd desktop
```
* Clone o fork na sua máquina: basta abrir o seu terminal e digitar:
  
```
     git clone url-do-seu-repositorio-forkado
```
* Digite o comando  ls para encontrar o seu repositório:
  
```
     ls
```
* Copie o nome do repositorio e entre na pasta clonada:
  
```
     cd on20-tet-s2-html-css
```
* Crie uma branch com o seu nome:
  
```
     git checkout -b seu-nome
```
* Digite o comando para abrir o projeto no vscode:
  
```
     code .
```

### Resumo
O que veremos na aula de hoje?
* [Mobile First](#mobilefirst)
* [Imagens Responsivas](#imagens)
* [Unidades de medidas](#medidas)
* [Tipos de Display](#display)
* [Media Queries ](#mediaquery)

* [Intervalos](#intervalos)
   Intervalos: Vamos comer 😋, esticar as pernas e  beber café! ☕

   Teremos dois intervalos: 10:30 e 15:00;

   Almoçaremos às 12:00;

   Voltaremos às 13:00.


## Conteúdo

### Responsividade 
1. [Layout Responsivo](#layoutresponsivo)
2. [Resolução de tela x tamanho de tela](#resolucaotela)
3. [O que é mobile first](#mobilefirst)
4. [Meta tag viewport](#viewport)

### Unidades de medidas
1. [Unidades de medidas responsivas](#mediaresponsivas)
    * [Em](#em)
    * [Rem](#rem)
    * [Porcentagem](#porcentagem)
    * [vw](#vw)
    * [vh](#vh)

### Tipos de imagens
1. [Imagens Responsivas](#imagensresponsivas)
    * [PNG](#em)
    * [JPEG](#rem)
    * [SVG](#porcentagem)
  

### Classes e Identificadores nas tags
1. [Uso de classes e indentificadores nas tags](#classeseindetificadores)
    * [class](#class)
    * [# - cerquilha](#cerquilha)
    * [> maior que](#maiorque)
    * [múltiplos filhos](#multiplosfilhos)
   

### Media Queries
1. [O que é Media Queries](#mediaqueries)
   * [Breakpoints](#breakpoints)
     
### Tipos de Display
1. [Display Flex](#displayflex)
2. [Display Grid](#displaygrid)

### Position
1. [Position absolute](#positionabsolute)
2. [Position relative](#positionrelative)

### Cross browser 
1. [Cross Browser e a importância de testar](#crossbrowser)
   
### Responsividade - Conceitos

#### Layout responsivo

Um **layout responsivo** é aquele que se "adapta" automaticamente aos dispositivos no qual ele está sendo visualizado, e é parte fundamental do conceito de **design responsivo**, que nada mais é do que a possibilidade de **adaptação fluida** de um site a diversos tamanhos de tela.

![gif-responsivo](https://media.giphy.com/media/b2CD0Qrq2ulwY/giphy.gif)

 #### Tipos de dispositivos: 
  - Notebooks 
  - Tablets
  - Desktops
  - Televisões

![many-devices](./assets/img/many-devices.jpg)

**Alguns fundamentos para a construção de um layout responsivo são:**

* Redimensionar imagens automaticamente
* Simplificar e/ou ocultar elementos
* Adaptar o tamanho de botões e links para interfaces touch.
  
**Responsivo vs adaptativo:**

O design responsivo expande de forma fluída, enquanto o adaptativo aguarda a tela terminar a expansão.

![responsivo-adaptativo](https://www.oficinadanet.com.br/imagens/post/13652/3038367-slide-s-1-9-gifs-that-explain-responsive-design-brilliantly-01responsive-vs-adaptive.gif)

**Vantagens:**

* Usabilidade (design adaptado para diversos formatos);
* Manutenção (não precisa desenvolver outras versões);
* SEO Google (tudo em uma url só).

**Desvantagens:**

* Desenvolvimento apenas para os principais dispositivos do mercado;
* Versões antigas de navegadores que não reconhecem a linguagem de adapatação;
* Necessidade de uma pré construção da arquitetura do código e do layout.
* Um pouco mais demorado para carregar.


#### Resolução de tela X Tamanho de tela
 
* Conceitos

**Resolução:** é a medida de definição de imagens digitais, que utiliza o **pixel** como unidade de medida.

* Pixels por polegada: PPI - _**P**ixels **P**er **I**nch_ para monitores e telas

É fundamental termos em mente que **a resolução é determinada pelo tamanho da tela (expresso pela sua altura e largura) mais a quantidade de pixels nela inserida.**

![comparativa-resolucao](./assets/img/comparativa-resolucao.jpg)

Dessa forma, olhando simplesmente para o tamanho (largura x altura) **não podemos afirmar que esse possui alta ou baixa resolução. A quantidade de pixels contidas nele, é que dirá se o mesmo possui alta ou baixa resolução.**

Podemos ter um tamanho de tela com dimensões grandes porém com poucos pixels. O inverso também é possível, um tamanho com dimensões pequenas porém com muitos pixels. Assim, **dispositivos que possuem o mesmo tamanho nem sempre possuem uma mesma resolução.**

### Unidades de medidas:

![gif-medidas](https://www.oficinadanet.com.br/imagens/post/13652/3038367-slide-s-2-9-gifs-that-explain-responsive-design-brilliantly-02relative-units-vs-static-units-1.gif)

####  Medidas absolutas

Essas são as mais comuns que vemos no dia a dia. São medidas que não estão referenciadas a qualquer outra unidade, ou seja, não dependem de um valor de referência.
Essas medidas são **estáticas** não mudam de acordo com as especificações do dispositivo.

_Quais são:_ 


  **pixels (px)**, points (pt), inches/polegadas (in), centímetro (cm), milímetro (mm) e paica (pc)

  
   ```
   * 96px = 1 in = 2,54cm = 25,4mm = 72pt = 6pc
   ```

Destas, pixel é a mais indicada e usada. 

#### Medidas  relativas

Essas são as que normalmente não estamos habituados. Essas medidas são calculadas tendo como base uma outra unidade de medida pré-definida.

Devido ao fato de que essas medidas serem calculadas pelo browser baseando-se em outra unidade, elas tendem a ser bastantes **flexíveis**. Ou seja, podemos ter resultados diferentes de acordo com o tamanho de tela. 

_Quais são:_

* em

  **EM** vem de “ ephemeral”  e é uma unidade de **medida tipográfica**. Para entender sua aplicação, vamos utilizar o exemplo abaixo onde foi definido um tamanho de fonte no elemento `<div>`. O valor de **em** declarado em qualquer elemento-filho dentro de `<div>` será igual a: **o valor declarado no elemento-filho * o valor declarado no elemento pai**. 

  ```
    Nesse caso: **1.2(em) * 14px = 16.8px**
  ```

  ![unidade-em](./assets/img/unidade-em.jpg)

  Entretanto, o que acontece quando se tem um elemento com valor **em** dentro de outro elemento com valor **em** ?

<<<<<<< HEAD
![unidade-em-aninhada](./assets/img/unidade-em-aninhada.jpgQ)
=======
![unidade-em-aninhada](https://codepen.io/raissamartinsmenezes/pen/OJJXdzQ)
>>>>>>> a448eb9b0afb0988fe1491855bc4968550001cfd

[Calculadora online: px para em](http://pxtoem.com/)

* rem

   O **REM** -  vem de “Root ephemeral”  e chega como sucessor do **EM** e ambos compartilham a mesma lógica de funcionamento, porém a forma de implementação é diferente. Enquanto o em está diretamente relacionado ao tamanho da fonte do elemento pai, o **rem** está relacionado com o tamanho da fonte do **elemento root (raiz)**. Embora sejam medidas tipográficas, **REM e EM** também podem ser utilizadas para outras finalidades, na atribuição de valores para margins e paddings por

![unidade-rem](./assets/img/unidade-rem.jpg)

Referência: [ Raissa Martins - Rem](https://codepen.io/raissamartinsmenezes/pen/LYYRZam)

[Calculadora online: px para rem](https://daniellamb.com/experiments/px-to-rem-calc/) 

* porcentagem %

Apesar de não ser uma unidade de medida, a porcentagem costuma ser bastante utilizada quando falamos de layout responsivo e fluido por conta de seu caráter adaptativo.

![porcentagem](./assets/img/porcentagem.jpg)
Referência: [ Raissa Martins - Porcentagem ](https://codepen.io/raissamartinsmenezes/pen/abbmJvY)

A porcentagem permite que criemos elementos que sempre vão se readaptar para ocupar a quantidade especificada.

![porcentagem-muda-tamanho](./assets/img/porcentagem-muda-tamanho.jpg)
Referência: [Raissa Martins - Porcentagem](https://codepen.io/raissamartinsmenezes/pen/abbmJvY)

**Note que a propriedade `width:` é relativa ao elemento-ancestral mais próximo.** 

* vh e vw

 Muitas técnicas de web design responsivo dependem muito de regras percentuais. **Mas e se fosse preciso usar a largura ou a altura da viewport ao invés da largura do elemento-pai?** Isso é exatamente o que as unidades vh e vw proporcionam.

 A medida vh é igual a **1/100** da altura da viewport. Então, por exemplo, se a altura do navegador é 900px, 1vh equivale a 9px e, analogamente, se a largura da viewport é 750px, 1vw equivale a 7.5px. Sendo assim, **1vw = 1% da largura da viewport e 1vh = 1% da altura da viewport**.


![vw-vh](./assets/img/vw-vh.jpg)

Vamos conferir o [exemplo 😊](./exemplos/exemplo-medidas-viewport.html)

* Outras unidades de medida

  **vmax e vmin:** [UNIDADES CSS RELATIVAS: VW, VH, VMAX, VMIN (CSS3)](https://www.youtube.com/watch?v=g__c-7M9Xzk&t=94s)

  **ex e ch:** [UNIDADES CSS RELATIVAS: %, REM, EM, CH, EX (CSS3)](https://www.youtube.com/watch?v=etM0JBeFbf8).


#### Mobile First

![gif-mobile-first](https://www.oficinadanet.com.br/imagens/post/13652/3038367-slide-s-8-9-gifs-that-explain-responsive-design-brilliantly-08desktop-first-vs-mobile-first-3.gif)

**Mobile First** é um método onde o foco do desenvolvimento de projetos web está direcionado aos dispositivos móveis. A técnica prioriza a construção da arquitetura mobile, seguida do pensamento para desktops. O conceito está cada vez mais popular no mercado da comunicação e da tecnologia.

![mobile-first](./assets/img/mobile-first.jpeg)

**Vantagens:**

* Otimização do site para o celular
* Os conteúdos precisam ser disponibilizados de forma mais otimizada e não há espaço para informações irrelevantes
* Sites limpos, funcionais e visualmente agradáveis

**Desvantagem:**

* Limitação criativa do projeto

#### Metatag viewport

### Imagens 

O uso de imagens é fundamental na construção de uma página web. Seja em logotipos, ícones, imagens que referenciem o tema da página, fotos, as imagens dão informações e auxiliam no engajamento do usuário.

### Tipos de imagens 

* PNG: pouco compacta, mantém a qualidade da imagem, mas tem o tamanho elevado, sendo formatada por pixel.

* JPEG: mais compacta que PNG, tem baixa qualidade, tamanho menor  e não é possível usar transparência.

* GIF: efeito de animação, baixa qualidade.

* SVG: criados através de instruções ao computador, feito por cálculo. É mais leve que PNG.

Imagens em SVG tem seu uso mais comumente em  logotipo,  ícones, imagens mais simples. 
Nos demais casos, use sempre PNG, optando  por utilizar imagens com até 1500px.

#### Imagens responsivas

Imagens responsivas respondem ao tamanho da tela para escalar porporcionalmente, sem ficar pixeladas ou desproporcionais.

![imagem-maior](./assets/img/imagem-maior.jpg)

Uma técnica para conseguirmos ter imagens responsivas é a seguinte:

```css
.img-responsiva {
  width: 100%;
  max-width: 100%;
  height: auto;
}
```

- Explicação: Criamos uma classe que podemos aplicar a todas as imagens que estão no html que queremos que fiquem responsivas. As imagens que tiverem essa classe vão ter 100% de largura com altura sempre proporcional a largura. O atributo `max-width: 100%` vai assegurar que essa imagem não estique mais do que o tamanho original dela permite.

![max-width](https://www.oficinadanet.com.br/imagens/post/13652/3038367-slide-s-7-9-gifs-that-explain-responsive-design-brilliantly-07max-width-vx-no-max-width-1.gif)

### Classes e Identificadores nas tags

Utilizando  **Classes e os  IDS** no HTML para nomearmos as tags. Podemos chamá-las no CSS para criarmos as estilizações.
Chamamos a classe usando o **.**, exemplo:

 ```
 
  <nav class = "navegador"></nav>

 ``` 

 ```
 
  .navegador {
    background-color: blue;

  }

```

Para o ID usamos a # (cerquilha):

```
 
  <main id = "principal"></nav>

 ``` 

 ```
 
  #principal {
    background-color: red;

  }

 ``` 
 Enquanto os nomes das classe podem ser repetidas no HTML, o nome de um ID só pode ser referenciado uma vez no HTML - mas pode-se ter vários IDs ao lonho do código HTML, com nomes distintos. 
 Todas as propriedades usadas nas classes, podem ser utilizadas também nos ids. 

### Media Queries

**Media queries** é uma técnica de consulta de mídia que atribui diferentes estilos CSS para cada resolução de tela detectada.

As media queries definem condições para utilização de estilos CSS. Se o dispositivo de acesso do usuário se adequar as **condições** definidas, se aplicam os estilos definidos nos elementos. 

#### Breakpoints

Os **breakpoints**, literalmente, são pontos de interrupção. São pontos que a interface do usuário será adaptada para um novo tamanho de tela, ou densidade de pixels.
Eles são aplicados graças as media queries, pois seus valores são utilizados na sintaxe, definindo a partir de qual ponto os estilos CSS serão aplicados.


![gif-breakpoints](https://www.oficinadanet.com.br/imagens/post/13652/3038367-slide-s-3-9-gifs-that-explain-responsive-design-brilliantly-03with-breakpoints-vs-without-breakpoints-1.gif)

##### Os brekpoints mais utilizados são:

1. **@media (min-width:320px)**{ /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
2. **@media (min-width:480px)** { /* smartphones, Android phones, landscape iPhone */ }
3. **@media (min-width:600px)** { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
4. **@media (min-width:801px)** { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
5. **@media (min-width:1025px)** { /* big landscape tablets, laptops, and desktops */ }
6. **@media (min-width:1281px)** { /* hi-res laptops and desktops */ }

* Referência: [Breakpoints](https://gist.github.com/janily/8453473)

**Importante:** Quando formos utilizar media queries, o primeiro passo é adicionar uma metatag chamada viewport  no código - lembra que falamos dela lá em cima. Essa tag vai passar instruções para o browser renderizar o conteúdo do site conforme o tamanho do dispositivo.


```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/style.css" rel="stylesheet">
</head>
```

![breakpoints-media-queries](./assets/img/breakpoints-media-queries.jpg)

**Sintaxe:**

```css
/* condição até 600px */
@media (max-width: 600px) { 
  .nome-da-classe {
    color: #fff; /* elemento que vai ser modificado/adicionado/sobrescrito nessa resolução */
  }
}

/* condição a partir de 900px, utilizado em abordagem de mobile-first */
@media (min-width: 900px) { 
  .nome-da-classe {
    color: #fff; /* elemento que vai ser modificado/adicionado/sobrescrito nessa resolução */
  }
}

/* condição a partir de 600px até 900px */
@media (min-width: 600px) and (max-width: 900px) { 
  .nome-da-classe {
    color: #fff; /* elemento que vai ser modificado/adicionado/sobrescrito nessa resolução */
  }
}
```
![breakpoints-comuns](./assets/img/breakpoints-comuns.jpg)

Vamos analisar sua aplicação no [exemplo 😊](https://github.com/reprograma/On10-TodasEmTech-Responsividade/blob/main/exemplos/exemplo-media-queries.html)

### Displays

A propriedade display especifica o tipo de caixa - lembra que tudo é caixa? - de renderização (exibição de conteúdos solicitados na tela do navegador). O padrão de display  padrão do Css é inline.

#### Tipos de display 

* Flex 
  
O display flex, como o nome diz é um display que permite a flexibilidade na inclusão do conteúdo. O display flex é incluido no elemento pai, tornando os filhos flex-itens.

Com diversos 
Vamos entender como o flex funciona:
[aqui!](https://codepen.io/raissamartinsmenezes/pen/XWWNbrP)

[Guia completo de Flexbox](https://origamid.com/projetos/flexbox-guia-completo/)


### Aula de quarta-feira 

* Grid
 
### Grid 

![grid-100](./assets/img/grid-100.jpg)

[flexbox-grid](https://pt.stackoverflow.com/questions/327488/flexbox-css-grid)

[Guia completo de Grid](https://www.origamid.com/projetos/css-grid-layout-guia-completo/)

### Position

### Cross browser

---

### Exercícios 
* [Exercicio para sala](https://github.com/reprograma/on20-tet-s3-responsivo/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/reprograma/on20-tet-s3-responsivo/tree/main/exercicios/para-casa)

### Material da aula 

### Links Úteis

- [Guia de CSS](https://css-tricks.com/guides/)
- [Qual unidade de medida utilizar: Pixel, Em ou REM?](https://receitasdecodigo.com.br/front-end/qual-unidade-de-medida-voce-usa-em-seu-css-px-em-ou-rem)
- [Unidades de Medidas no CSS](https://www.treinaweb.com.br/blog/unidades-de-medidas-no-css)
- [Calculadora PPI ](https://www.calculatorsoup.com/calculators/technology/ppi-calculator.php)
- [Diferenças entre IDs e Classes](https://desenvolvimentoparaweb.com/css/diferencas-entre-ids-e-classes/)
- [Media Queries MDN](https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries)
- [Mobile Test Me](http://mobiletest.me/)
- [Media queries-breakpoints-projetos-mobile-first](https://blog.apiki.com/media-queries-breakpoints-projetos-mobile-first/)
- [Display CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)


### Estudos em vídeo

- ([As diferenças entre id e class - Gustavo Guanabara](https://www.youtube.com/watch?v=zXfTjPrMC_0))


<p align="center">
Desenvolvido com :purple_heart:  
</p>

