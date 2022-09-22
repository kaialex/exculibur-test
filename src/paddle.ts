import { Actor, CollisionType, Color } from "excalibur";

class Paddle extends Actor {
  constructor(engine: ex.Engine) {
    super({
      x: 150,
      y: engine.drawHeight - 40,
      width: 200,
      height: 20,
      color: Color.Chartreuse,
    });
    this.body.collisionType = CollisionType.Fixed;
  }

  update(engine: ex.Engine): void {
    engine.input.pointers.primary.on("move", (evt) => {
      this.pos.x = evt.worldPos.x;
    });
  }
}

export default Paddle;
