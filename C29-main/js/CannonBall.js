class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
//crie um corpo circular
//carregue a imagem
    World.add(world, this.body);
  }

  shoot() {
    
    //defina o ângulo da bala para o canhão
    //defina valor estático para o corpo
    //defina a velocidade da bala para fazê-la se mover
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//mostrar a imagem
    pop();

    }
  }

