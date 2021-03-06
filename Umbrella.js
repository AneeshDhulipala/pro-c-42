class Umbrella {
      
    constructor(){
         var options = {
              isStatic = true,
              restitution = 0.5
         };
         display(){
            var pos = this.body.position;
            image(man_image, pos.x, pos.y);
       }
  }