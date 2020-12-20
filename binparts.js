class Wall {
    constructor(x,y,width,height,image) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.x=890
      this.y=503.5
      World.add(world, this.body);
      this.image = loadImage(image);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image, this.x, this.y,220,166.5)
    }
  };