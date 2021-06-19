const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var roof2;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var con;
var con2;
var con3;
var con4;
var con5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		restitution: 1,
    friction: 0,
    isStatic: false,
    density: 0.8
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	roof2 = Bodies.rectangle(400,80,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(310,150,10,ball_options);
	World.add(world,ball);
	ball2 = Bodies.circle(320,150,10,ball_options);
	World.add(world,ball2);
	ball3 = Bodies.circle(330,150,10,ball_options);
	World.add(world,ball3);
	ball4 = Bodies.circle(340,150,10,ball_options);
	World.add(world,ball4);
	ball5 = Bodies.circle(350,150,10,ball_options);
	World.add(world,ball5);

	con = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyA:roof,
		pointB:{x:0,y:0},
		bodyB:ball,
		length:100,
		stiffness:0.02
	  });
	  World.add(world,con);

	  
	con2 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyA:roof,
		pointB:{x:0,y:0},
		bodyB:ball2,
		length:100,
		stiffness:0.02
	  });
	  World.add(world,con2);


	  con3 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyA:roof,
		pointB:{x:0,y:0},
		bodyB:ball3,
		length:100,
		stiffness:0.02
	  });
	  World.add(world,con3);


	  con4 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyA:roof,
		pointB:{x:0,y:0},
		bodyB:ball4,
		length:100,
		stiffness:0.02
	  });


	  World.add(world,con4);
	  con5 = Matter.Constraint.create({
		pointA:{x:0,y:0},
		bodyA:roof,
		pointB:{x:0,y:0},
		bodyB:ball5,
		length:100,
		stiffness:0.02
	  });
	  World.add(world,con5);

	  rectMode(CENTER);
	  ellipseMode(RADIUS);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x, ball.position.y, 10, 10)
  ellipse(ball2.position.x, ball2.position.y, 10, 10)
  ellipse(ball3.position.x, ball3.position.y, 10, 10)
  ellipse(ball4.position.x, ball4.position.y, 10, 10)
  ellipse(ball5.position.x, ball5.position.y, 10, 10)


  push();
  strokeWeight(2);
  stroke(255);
  line(roof.position.x - 50 ,roof.position.y,ball.position.x,ball.position.y);
  line(roof.position.x - 25 ,roof.position.y,ball2.position.x,ball2.position.y);
  line(roof.position.x,roof.position.y,ball3.position.x,ball3.position.y);
  line(roof.position.x +25 ,roof.position.y,ball4.position.x,ball4.position.y);
  line(roof.position.x +50 ,roof.position.y,ball5.position.x,ball5.position.y);
  pop();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:3});
    }
}

