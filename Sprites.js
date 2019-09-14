function carregarPersonagens() {
  drawSprites();
}







function bola(x ,y) {
  bolaImg = loadImage('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/estrelaredonda9.png');
  bola = createSprite(x, y);
  bola.addImage(bolaImg);
}



function estrela(x ,y) {
  estrelaImg = loadImage('https://raw.githubusercontent.com/fabiojavaroni/imagens/master/estrela-normal-1.png');
  estrela = createSprite(x, y);
  estrela.addImage(bolaImg);
}
