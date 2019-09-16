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
  fantasma.addAnimation('normal', fantasmaimg, fantasmaimg);
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
