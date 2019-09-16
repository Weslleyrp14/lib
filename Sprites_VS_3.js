function fantasma(x, y){
  var fantasmaimg1 = PegaImagem('fantasma-1');
  var fantasmaimg2 = PegaImagem('fantasma-7');
  fantasma = createSprite(x, y);
  fantasma.addAnimation('normal', fantasma1, fantasma2);
}


function monstro(x, y){
  var monstroimg1 = PegaImagem('monstro');
  monstro = createSprite(x, y);
  monstro.addAnimation('normal', monstro1);
}



