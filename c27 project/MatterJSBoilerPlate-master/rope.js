class Rope{
    constructor(bodyA,pointB){
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.004,
        length: 250
      }
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
display(){
    var pointB = this.rope.pointB
    var bodyA = this.rope.bodyA.position
   
    strokeWeight(4);
    stroke(0,0,255);
    line(bodyA.x, bodyA.y, pointB.x, pointB.y);
}
}