class dustbin{
constructor( x,y,width,height){ 
    var options={
isStatic:true
}
this.body=Bodies.rectangle( x,y,width,height,options);
this.height=height;
this.width=width;
this.image=loadImage( "pic/dustbingreen.png")
World.add( world,this.body)
}
display(){
    var pos=this.body.position;
    push ();
    fill( "white");
    imageMode( CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);

pop();

}






}