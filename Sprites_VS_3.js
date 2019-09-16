function fantasma1(x, y){
  var fantasma1 = PegaImagem('fantasma-1');
  var fantasma2 = PegaImagem('fantasma-7');
  fantasma1 = createSprite(x, y);
  fantasma1.addAnimation('normal', fantasma1, fantasma2);
}


function monstro1(x, y){
  var monstro1 = PegaImagem('monstro');
  monstro1 = createSprite(x, y);
  monstro1.addAnimation('normal', monstro1);
}



