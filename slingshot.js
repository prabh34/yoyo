class SlingShot{
    constructor(bodyA,pointB) {
        var sling_options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length:6,
        }
        this.pointB=pointB;
       this.sling= Constraint.create(sling_options)
       World.add(world,this.sling)
   
    }

    fly(){
        this.sling.bodyA = null;
    }
    display() {
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.Position;
        var pointB=this.pointB;

        strokeWeight(3);
        fill("red");
     //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
        
    }
}