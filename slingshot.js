class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:5,
            stiffness:0.004
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}