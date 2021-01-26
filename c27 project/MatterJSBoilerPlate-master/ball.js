class Ball{
  constructor(x,y,radius){
      var options = {
          density: 1,
          frictionAir: 0.005,
          restatution: 2
      
      }

      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius
      
      World.add(world, this.body)   
  }
 
  display(){
      var pos = this.body.position
      ellipseMode(RADIUS)
      fill(250,0,0)
      ellipse(pos.x,pos.y,this.r,this.r)

  }
}