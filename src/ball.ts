import {
  Actor,
  CollisionStartEvent,
  CollisionType,
  Color,
  vec,
} from "excalibur";
import Brick from "./brick";

class Ball extends Actor {
  private colliding: boolean = false;

  constructor(engine: ex.Engine) {
    super({
      x: 100,
      y: 300,
      radius: 10,
      color: Color.Red,
    });

    this.body.collisionType = CollisionType.Passive;

    const ballSpeed = vec(100, 100);
    this.vel = ballSpeed;

    this.on("collisionstart", (evt) => this.onCollisionStart(engine, evt));
    this.on("collisionend", (evt) => this.onCollisionEnd(engine, evt));
  }

  onPostUpdate(engine: ex.Engine): void {
    if (
      this.pos.x < this.width / 2 ||
      this.pos.x + this.width / 2 > engine.drawWidth
    ) {
      this.vel.x *= -1;
    }

    if (this.pos.y < this.height / 2) {
      this.vel.y *= -1;
    }
  }

  onCollisionStart(engine: ex.Engine, evt: CollisionStartEvent<Actor>): void {
    if (evt.other instanceof Brick) {
      evt.other.kill();
    }

    const intersection = evt.contact.mtv.normalize();

    if (!this.colliding) {
      this.colliding = true;
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        this.vel.x *= -1;
      } else {
        this.vel.y *= -1;
      }
    }
  }

  onCollisionEnd(engine: ex.Engine, evt: CollisionEndEvent<Actor>): void {
    this.colliding = false;
  }
}

export default Ball;
