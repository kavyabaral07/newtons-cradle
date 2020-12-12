class Sling{
 constructor(BodyA,PointB){
  var options ={
   BodyA : BodyA,
   PointB : PointB,
   stiffness : 1,
   angularstifness : 1,
   length : 220
  }
  this.PointB = PointB;
  this.PointX = bodyA.x;
  this.PointY = bodyA.y - 250;
  this.sling = Constraint.create(options);
  World.add(world,this.sling);
 }
 fly(){
     this.sling.bodyA = null;
 }
 display(){
  if (this.sling.BodyA){
   var PointA = this.sling.BodyA.position;
   var PointB = this.PointB;
   push();
   strokeWeight(3.5);
   stroke("#fff");
   line(PointA.x,PointA.y,PointB.x,PointB.y);
   Pop();
  }
 }
}