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


// Função que cria os Sprites
function fantasma1(x, y){
  var fantasmaimg1 = PegaImagem('fantasma-1');
  var fantasmaimg2 = PegaImagem('fantasma-7');
  fantasma1 = createSprite(x, y);
  fantasma1.addAnimation('normal', fantasmaimg1, fantasmaimg2);
}


function monstro1(x, y){
  var monstroimg1 = PegaImagem('monstro');
  monstro1 = createSprite(x, y);
  monstro1.addAnimation('normal', monstroimg1);
}

function moeda1(x, y){
  var moedaimg1 = PegaImagem('moeda');
  moeda1 = createSprite(x, y);
  moeda1.addAnimation('normal', moedaimg1);
}



