class ground{  
    constructor( x,y){
    var options={
        isStatic:true}
        this.body=Bodies.rectangle( x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add( world,this.body)
}
display(){
    var pos=this.body.position;
    fill ("yellow")
    rectMode( CENTER);
    rect(pos.x,pos.y,1800,10);

}
}