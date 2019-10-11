// Função que adicona um número aleátorio de moedas em posições aleatórias

	//A letra "j" decido o número de moedas que devem aparecer
	//A letra "q" indica qual grupo a moeda pertence
	
function sorteiaMoedas(j, q) {
for(var i = 0; i<j; i++) {
    var coin = createSprite(random(100, width-100), random(100, height-100));
    coin.addAnimation('girando', PegaImagem('moeda_girando_1'), PegaImagem('moeda_girando_6'));
    coin.addToGroup(q);
      }
}

// Funções que criam os Sprites
function fantasma(x, y){
  var fantasmaimg1 = PegaImagem('fantasma-1');
  var fantasmaimg2 = PegaImagem('fantasma-7');
  fantasma = createSprite(x, y);
  fantasma.addAnimation('normal', fantasmaimg1, fantasmaimg2);
}

function fantasma2(x, y){
  var fantasma2img1 = PegaImagem('fantasma-andando-1');
  var fantasma2img2 = PegaImagem('fantasma-andando-4');
  fantasma2 = createSprite(x, y);
  fantasma2.addAnimation('normal', fantasma2img1, fantasma2img2);
}

function fantasma3(x, y){
  var fantasma3img1 = PegaImagem('fantasma-rodando-1');
  var fantasma3img2 = PegaImagem('fantasma-rodando-3');
  fantasma3 = createSprite(x, y);
  fantasma3.addAnimation('normal', fantasma3img1, fantasma3img2);
}

function monstro(x, y){
  var monstroimg1 = PegaImagem('monstro');
  monstro = createSprite(x, y);
  monstro.addAnimation('normal', monstroimg1);
}

function bagunça1(x, y){
  var bagunçaimg1 = PegaImagem('bagunça');
  bagunça1 = createSprite(x, y);
  bagunça1.addAnimation('normal', bagunçaimg1);
}


function caixa1(x, y){
  var caixaimg1 = PegaImagem('caixa-1');
  var caixaimg2 = PegaImagem('caixa-3');
  caixa1 = createSprite(x, y);
  caixa1.addAnimation('normal', caixaimg1, caixaimg2);
}

function cano1(x, y){
  var canoimg1 = PegaImagem('cano');
  cano1 = createSprite(x, y);
  cano1.addAnimation('normal', canoimg1);
}

function chao1(x, y){
  var chaoimg1 = PegaImagem('chao-1');
  var chaoimg2 = PegaImagem('chao-2');
  chao1 = createSprite(x, y);
  chao1.addAnimation('normal', chaoimg1, chaoimg2);
}


function chao2(x, y){
  var chao2img1 = PegaImagem('chao-pequeno-1');
  var chao2img2 = PegaImagem('chao-pequeno-3');
  chao2 = createSprite(x, y);
  chao2.addAnimation('normal', chao2img1, chao2img2);
}

function bola1(x, y){
  var bolaimg1 = PegaImagem('circulo-pequeno-1');
  var bolaimg2 = PegaImagem('circulo-pequeno-3');
  bola1 = createSprite(x, y);
  bola1.addAnimation('normal', bolaimg1, bolaimg2);
}

function bola2(x, y){
  var bola2img1 = PegaImagem('circulo');
  bola2 = createSprite(x, y);
  bola2.addAnimation('normal', bola2img1);
}

function estrela(x, y){
   var estrelaimg2 = PegaImagem('estrela-2');
  estrela = createSprite(x, y);
  estrela.addAnimation('normal',  estrelaimg2);
}

function estrela2(x, y){
  var estrela2img1 = PegaImagem('estrela-1');
   estrela2 = createSprite(x, y);
  estrela2.addAnimation('normal', estrela2img1);
}

function estrela3(x, y){
  var estrela3img1 = PegaImagem('estrela-explodindo1');
  var estrela3img2 = PegaImagem('estrela-explodindo11');
  estrela3 = createSprite(x, y);
  estrela3.addAnimation('normal', estrela3img1, estrela3img2);
}

function estrela4(x, y){
  var estrela4img1 = PegaImagem('estrela-sono1');
  var estrela4img2 = PegaImagem('estrela-sono8');
  estrela4 = createSprite(x, y);
  estrela4.addAnimation('normal', estrela4img1, estrela4img2);
}

function estrela5(x, y){
  var estrela5img1 = PegaImagem('estrelanormal1');
  var estrela5img2 = PegaImagem('estrelanormal3');
  estrela5 = createSprite(x, y);
  estrela5.addAnimation('normal', estrela5img1, estrela5img2);
}

function estrela6(x, y){
  var estrela6img1 = PegaImagem('estrelaredonda1');
  var estrela6img2 = PegaImagem('estrelaredonda9');
  estrela6 = createSprite(x, y);
  estrela6.addAnimation('normal', estrela6img1, estrela6img2);
}

function estrela6(x, y){
  var estrela6img1 = PegaImagem('estrelaredonda1');
  var estrela6img2 = PegaImagem('estrelaredonda9');
  estrela6 = createSprite(x, y);
  estrela6.addAnimation('normal', estrela6img1, estrela6img2);
}

function moeda(x, y){
  var  moeda1img1 = PegaImagem('moeda_girando_1');
  var moeda1img2 = PegaImagem('moeda_girando_6');
  moeda = createSprite(x, y);
  moeda.addAnimation('normal', moeda1img1, moeda1img2);
}

function moldura(x, y){
  var  molduraimg1 = PegaImagem('moldura');
  moldura = createSprite(x, y);
  moldura.addAnimation('normal', molduraimg1);
}

function nave(x, y){
  var  naveimg1 = PegaImagem('nave-1');
  var naveimg2 = PegaImagem('nave-7');
  nave = createSprite(x, y);
  nave.addAnimation('normal', naveimg1, naveimg2);
}

function nuvem(x, y){
  var  nuvemimg1 = PegaImagem('nuvem-bola-1');
  var nuvemimg2 = PegaImagem('nuvem-bola-7');
  nuvem = createSprite(x, y);
  nuvem.addAnimation('normal', nuvemimg1, nuvemimg2);
}

function nuvem2(x, y){
  var  nuvem2img1 = PegaImagem('nuvem-maluca-1');
  var nuvem2img2 = PegaImagem('nuvem-maluca-9');
  nuvem2 = createSprite(x, y);
  nuvem2.addAnimation('normal', nuvem2img1, nuvem2img2);
}

function nuvem3(x, y){
  var  nuvem3img1 = PegaImagem('nuvem');
  nuvem3 = createSprite(x, y);
  nuvem3.addAnimation('normal', nuvem3img1);
}

function passaro(x, y){
  var  passaroimg1 = PegaImagem('bird');
  passaro = createSprite(x, y);
  passaro.addAnimation('normal', passaroimg1);
}

function passaro2(x, y){
  var  passaro2img1 = PegaImagem('passaro');
  passaro2 = createSprite(x, y);
  passaro2.addAnimation('normal', passaro2img1);
}

function pedra2(x, y){
  var  pedra2img1 = PegaImagem('pedra-0');
  var pedra2img2 = PegaImagem('pedra-3');
  pedra2 = createSprite(x, y);
  pedra2.addAnimation('normal', pedra2img1, pedra2img2);
}

function quadrado(x, y){
  var   quadradoimg1 = PegaImagem('quadrado-1');
   quadrado = createSprite(x, y);
   quadrado.addAnimation('normal',  quadradoimg1);
}

function quadrado2(x, y){
  var   quadrado2img1 = PegaImagem('quadrado-pequeno');
   quadrado2 = createSprite(x, y);
   quadrado2.addAnimation('normal',  quadrado2img1);
}

function retangulo(x, y){
  var   retanguloimg1 = PegaImagem('retangulo-pequeno');
   retangulo = createSprite(x, y);
   retangulo.addAnimation('normal',  retanguloimg1);
}

function rosto(x, y){
  var   rostoimg1 = PegaImagem('rosto');
   rosto = createSprite(x, y);
   rosto.addAnimation('normal',  rostoimg1);
}

function sol(x, y){
  var  solimg1 = PegaImagem('sol-1');
  var solimg2 = PegaImagem('sol-3');
  sol = createSprite(x, y);
  sol.addAnimation('normal', solimg1, solimg2);
}

function tiro(x, y){
  var   tiroimg1 = PegaImagem('tiro');
   tiro = createSprite(x, y);
   tiro.addAnimation('normal',  tiroimg1);
}

function triangulo(x, y){
  var   trianguloimg1 = PegaImagem('triangulo-1');
   triangulo = createSprite(x, y);
   triangulo.addAnimation('normal',  trianguloimg1);
}

function triangulo2(x, y){
  var   triangulo2img1 = PegaImagem('triangulo-pequeno');
   triangulo2 = createSprite(x, y);
   triangulo2.addAnimation('normal',  triangulo2img1);
}

function alienigena(x, y){
  var  alienigenaimg1 = PegaImagem('alien_1');
  var alienigenaimg2 = PegaImagem('alien_6');
  alienigena = createSprite(x, y);
  alienigena.addAnimation('normal', alienigenaimg1, alienigenaimg2);
}

function alienigena2(x, y){
  var  alienigena2img1 = PegaImagem('alien-gato (1)');
  var alienigena2img2 = PegaImagem('alien-gato (2)');
  var alienigena2img3 = PegaImagem('alien-gato (3)');
  var alienigena2img4 = PegaImagem('alien-gato (4)');
  var alienigena2img5 = PegaImagem('alien-gato (5)');
  var alienigena2img6 = PegaImagem('alien-gato (6)');
  var alienigena2img7 = PegaImagem('alien-gato (7)');
  var alienigena2img8 = PegaImagem('alien-gato (8)');
  var alienigena2img9 = PegaImagem('alien-gato (9)');
  var alienigena2img10 = PegaImagem('alien-gato (10)');
  var alienigena2img11 = PegaImagem('alien-gato (11)');
  var alienigena2img12 = PegaImagem('alien-gato (12)');
  alienigena2 = createSprite(x, y);
  alienigena2.addAnimation('normal', alienigena2img1, alienigena2img2, alienigena2img3, alienigena2img4, alienigena2img5, alienigena2img6, alienigena2img7, alienigena2img8, alienigena2img9, alienigena2img10, alienigena2img11, alienigena2img12);
}

function astronauta(x, y){
  var  astronautaimg1 = PegaImagem('astronauta_1');
  var astronautaimg2 = PegaImagem('astronauta_6');
  astronauta = createSprite(x, y);
  astronauta.addAnimation('normal', astronautaimg1, astronautaimg2);
}

function astronauta2(x, y){
  var  astronautaimg1 = PegaImagem('astronauta_voando_1');
  var astronautaimg2 = PegaImagem('astronauta_voando_14');
  astronauta2 = createSprite(x, y);
  astronauta2.addAnimation('normal', astronautaimg1, astronautaimg2);
}

function meteoro(x, y){
  var  meteoroimg1 = PegaImagem('meteoro');
  meteoro = createSprite(x, y);
  meteoro.addAnimation('normal', meteoroimg1);
}

function astronautaCabeça(x, y){
  var  astronautaCabeçaimg1 = PegaImagem('Astronauta_cabeca');
  astronautaCabeça = createSprite(x, y);
  astronautaCabeça.addAnimation('normal', astronautaCabeçaimg1);
}


function astronautaCorpo(x, y){
  var  astronautaCorpoimg1 = PegaImagem('Astronauta_corpo');
  astronautaCorpo = createSprite(x, y);
  astronautaCorpo.addAnimation('normal', astronautaCorpoimg1);
}



function alienigena1Cabeça(x, y){
  var  alienigena1Cabeçaimg1 = PegaImagem('Alien_1_cabeca');
  alienigena1Cabeça = createSprite(x, y);
  alienigena1Cabeça.addAnimation('normal', alienigena1Cabeçaimg1);
}


function alienigena1Corpo(x, y){
  var  alienigena1Corpoimg1 = PegaImagem('Alien_1_corpo');
  alienigena1Corpo = createSprite(x, y);
  alienigena1Corpo.addAnimation('normal', alienigena1Corpoimg1);
}

function alienigena2Cabeça(x, y){
  var  alienigena2Cabeçaimg1 = PegaImagem('Alien_2_cabeca');
  alienigena2Cabeça = createSprite(x, y);
  alienigena2Cabeça.addAnimation('normal', alienigena2Cabeçaimg1);
}


function alienigena2Corpo(x, y){
  var  alienigena2Corpoimg1 = PegaImagem('Alien_2_corpo');
  alienigena2Corpo = createSprite(x, y);
  alienigena2Corpo.addAnimation('normal', alienigena2Corpoimg1);
}


function alienigena3Cabeça(x, y){
  var  alienigena3Cabeçaimg1 = PegaImagem('Alien_3_cabeca');
  alienigena3Cabeça = createSprite(x, y);
  alienigena3Cabeça.addAnimation('normal', alienigena3Cabeçaimg1);
}


function alienigena3Corpo(x, y){
  var  alienigena3Corpoimg1 = PegaImagem('Alien_3_corpo');
  alienigena3Corpo = createSprite(x, y);
  alienigena3Corpo.addAnimation('normal', alienigena3Corpoimg1);
}

function alienigena4Cabeça(x, y){
  var  alienigena4Cabeçaimg1 = PegaImagem('Alien_4_cabeca');
  alienigena4Cabeça = createSprite(x, y);
  alienigena4Cabeça.addAnimation('normal', alienigena4Cabeçaimg1);
}


function alienigena4Corpo(x, y){
  var  alienigena4Corpoimg1 = PegaImagem('Alien_4_corpo');
  alienigena4Corpo = createSprite(x, y);
  alienigena4Corpo.addAnimation('normal', alienigena4Corpoimg1);
}



function alienigena5Cabeça(x, y){
  var  alienigena5Cabeçaimg1 = PegaImagem('Alien_5_cabeca');
  alienigena5Cabeça = createSprite(x, y);
  alienigena5Cabeça.addAnimation('normal', alienigena5Cabeçaimg1);
}


function alienigena5Corpo(x, y){
  var  alienigena5Corpoimg1 = PegaImagem('Alien_5_corpo');
  alienigena5Corpo = createSprite(x, y);
  alienigena5Corpo.addAnimation('normal', alienigena5Corpoimg1);
}


function alienigena6Cabeça(x, y){
  var  alienigena6Cabeçaimg1 = PegaImagem('Alien_6_cabeca');
  alienigena6Cabeça = createSprite(x, y);
  alienigena6Cabeça.addAnimation('normal', alienigena6Cabeçaimg1);
}


function alienigena6Corpo(x, y){
  var  alienigena6Corpoimg1 = PegaImagem('Alien_6_corpo');
  alienigena6Corpo = createSprite(x, y);
  alienigena6Corpo.addAnimation('normal', alienigena6Corpoimg1);
}

function alienigena7Cabeça(x, y){
  var  alienigena7Cabeçaimg1 = PegaImagem('Alien_7_cabeca');
  alienigena7Cabeça = createSprite(x, y);
  alienigena7Cabeça.addAnimation('normal', alienigena7Cabeçaimg1);
}


function alienigena7Corpo(x, y){
  var  alienigena7Corpoimg1 = PegaImagem('Alien_7_corpo');
  alienigena7Corpo = createSprite(x, y);
  alienigena7Corpo.addAnimation('normal', alienigena7Corpoimg1);
}

function alienigena8Cabeça(x, y){
  var  alienigena8Cabeçaimg1 = PegaImagem('Alien_8_cabeca');
  alienigena8Cabeça = createSprite(x, y);
  alienigena8Cabeça.addAnimation('normal', alienigena8Cabeçaimg1);
}


function alienigena8Corpo(x, y){
  var  alienigena8Corpoimg1 = PegaImagem('Alien_8_corpo');
  alienigena8Corpo = createSprite(x, y);
  alienigena8Corpo.addAnimation('normal', alienigena8Corpoimg1);
}

function planeta(x, y){
  var planetaimg = PegaImagem('planeta 1');
  planeta = createSprite(x, y);
  planeta.addAnimation('normal', planetaimg);
}

function planeta2(x, y){
  var planetaimg2 = PegaImagem('planeta 2');
  planeta2 = createSprite(x, y);
  planeta2.addAnimation('normal', planetaimg2);
}

function planeta3(x, y){
  var planetaimg3 = PegaImagem('planeta 3');
  planeta3 = createSprite(x, y);
  planeta3.addAnimation('normal', planetaimg3);
}

function planeta4(x, y){
  var planetaimg4 = PegaImagem('planeta 4');
  planeta4 = createSprite(x, y);
  planeta4.addAnimation('normal', planetaimg4);
}

function planeta5(x, y){
  var planetaimg5 = PegaImagem('planeta 5');
  planeta5 = createSprite(x, y);
  planeta5.addAnimation('normal', planetaimg5);
}

function planeta6(x, y){
  var planetaimg6 = PegaImagem('planeta 6');
  planeta6 = createSprite(x, y);
  planeta6.addAnimation('normal', planetaimg6);
}

function planeta7(x, y){
  var planetaimg7 = PegaImagem('planeta 7');
  planeta7 = createSprite(x, y);
  planeta7.addAnimation('normal', planetaimg7);
}

function planeta8(x, y){
  var planetaimg8 = PegaImagem('planeta 8');
  planeta8 = createSprite(x, y);
  planeta8.addAnimation('normal', planetaimg8);
}

function foguete(x,y){
  var fogueteimg = PegaImagem('foguete');
  foguete = createSprite(x,y,30,30);
  foguete.addAnimation('normal',fogueteimg);
}

function macaco(x,y){
  var macacoimg = PegaImagem('macaco');
  macaco = createSprite(x,y);
  macaco.addAnimation('normal',macacoimg);
}

function fruta(x,y){
  var frutaimg = PegaImagem('fruta1');
  fruta = createSprite(x,y);
  fruta.addAnimation('normal',frutaimg);
}
function fruta2(x,y){
  var frutaimg = PegaImagem('fruta2');
  fruta2 = createSprite(x,y);
  fruta2.addAnimation('normal',frutaimg);
}
function fruta3(x,y){
  var frutaimg = PegaImagem('fruta3');
  fruta3= createSprite(x,y);
  fruta3.addAnimation('normal',frutaimg);
}
function fruta4(x,y){
  var frutaimg = PegaImagem('fruta4');
  fruta4 = createSprite(x,y);
  fruta4.addAnimation('normal',frutaimg);
}
function fruta5(x,y){
  var frutaimg = PegaImagem('fruta5');
  fruta5 = createSprite(x,y);
  fruta5.addAnimation('normal',frutaimg);
}

function leao(x,y){
  var leaoimg = PegaImagem('leao');
  leao = createSprite(x,y);
  leao.addAnimation('normal',leaoimg);
}

function girafa(x,y){
  var girafaimg = PegaImagem('girafa');
  girafa = createSprite(x,y);
  girafa.addAnimation('normal',girafaimg);
}

function pinguim(x,y){
  var pinguimimg = PegaImagem('pinguim');
  pinguim = createSprite(x,y);
  pinguim.addAnimation('normal',pinguimimg);
}

function bola(x,y){
  var bolaimg = PegaImagem('bola');
  bola = createSprite(x,y);
  bola.addAnimation('normal',bolaimg);
}

function sapo(x,y){
  var sapoimg = PegaImagem('sapo');
  sapo = createSprite(x,y);
  sapo.addAnimation('normal',sapoimg);
}

function inseto1(x,y){
  var inseto1img = PegaImagem('inseto1');
  inseto1 = createSprite(x,y);
  sapinseto1o.addAnimation('normal',inseto1img);
}

function animalcorrendo1(x,y){
  var correndo1img = PegaImagem('AnimalCorrendo1');
  correndo1 = createSprite(x,y);
  correndo1.addAnimation('normal',correndo1img);
}

function animalcorrendo2(x,y){
  var correndo2img = PegaImagem('AnimalCorrendo2');
  correndo2 = createSprite(x,y);
  correndo2.addAnimation('normal',correndo2img);
}

function animalcorrendo3(x,y){
  var correndo3img = PegaImagem('AnimalCorrendo3');
  correndo3 = createSprite(x,y);
  correndo3.addAnimation('normal',correndo3img);
}

function animalcorrendo4(x,y){
  var correndo4img = PegaImagem('AnimalCorrendo4');
  correndo4 = createSprite(x,y);
  correndo4.addAnimation('normal',correndo4img);
}
