class Box {
    constructor(x,y,width,height,color){
      
        var options= {
            restitution :0.8,
            friction:0.3,
            density:0.4

        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.visibility = 225;
        
        World.add(world,this.body);

    }
    display(){
        
        console.log(this.body.speed);
        if(this.body.speed <5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
        
      }
    }
  }