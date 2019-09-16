function fantasma1(x, y){
  var fantasma1 = PegaImagem('fantasma-1');
  var fantasma2 = PegaImagem('fantasma-7');
  fantasma = createSprite(x, y);
  fantasma.addAnimation('normal', fantasma1, fantasma2);
}


function monstro1(x, y){
  var monstro1 = PegaImagem('monstro');
  monstro = createSprite(x, y);
  monstro.addAnimation('normal', monstro1);
}



