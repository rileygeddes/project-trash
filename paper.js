class Paper {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("sprites/paper.png");
    this.body = Bodies.circle(x, y, 20, options);
      this.width = 70;  
      this.height = 70; 
                        
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS)
      fill("white");
      //ellipse(0, 0,20,20);
      image(this.image, (this.width/2)*-1, (this.height/2)*-1, this.width, this.height);
      pop();
      
    }
}