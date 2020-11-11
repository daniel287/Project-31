class Pinko{
    constructter(x,y,r){
        var options = {
            isStatic: true,
              restitution: 1,
            friction: 0
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.postion;
        var angle = this.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(white);
        elipseMode(RADIUS);
        elipse(0,0, 10, 10);
        pop();
    }
}