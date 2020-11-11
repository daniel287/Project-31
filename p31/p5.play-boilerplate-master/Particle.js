class Particle{
    constructter(x,y,r){
        var options = {
            restitution: 0.4
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.postion;
        var angle = this.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        elipseMode(RADIUS);
        elipse(0,0,this.r, this.r);
        pop();
    }
}