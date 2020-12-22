class paper{
    constructor( x,y,radius,angle){
        var options={
            isstatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5,
        }
        this.body=Bodies.circle( x,y,10,options);
        this.image( "pic/paper.png");
        World.add( world,this.body);
       
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
    rotate ( angle);
        imageMode( RADIUS);
        image(this.image,pos.x,pos.y,20);

        pop();
    }

}