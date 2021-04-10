class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
      
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
    }

    display(){

            if(this.sling.body){
          
            push ()
             strokeWeight(4);
            stroke("yellow");
          
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
            
                pop ();
           
             }
        }
}