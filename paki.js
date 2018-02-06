class Pakiman{
  constructor(n,v,a){
    this.nombre=n;
    this.vida=v;
    this.ataque=a;
  }
  //Dentro de la clase no es necesario colocar 'function'
  hablar(){
    alert(this.nombre);
  }
}

var cauchin=new Pakiman("Cauchin",100,30);
var pokacho=new Pakiman("Pokacho",80,50);
var tocinauro=new Pakiman("Tocinauro",120,40);
