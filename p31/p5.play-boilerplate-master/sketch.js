var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine, world;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions =[];

function setup(){
    var cavas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Division(width/2,height,width,20);

       for (var k = 0; k <=width; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50){
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();

        for(var j = 0; j < pinkos.length; j++){
    pinkos[j].display();
    }

      if(frameCount%60 === 0){
      particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
    }

    for(var x = 0; x < particles.length; x++){
      particles[x].display();
    }

    for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  }