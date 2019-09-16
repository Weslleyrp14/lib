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



