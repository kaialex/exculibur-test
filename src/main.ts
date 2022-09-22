import { Engine } from "excalibur";
import Ball from "./ball";
import Bricks from "./bricks";
import Paddle from "./paddle";

const game = new Engine({
  width: 800,
  height: 600,
});

const paddle = new Paddle(game);
const ball = new Ball(game);
const bricks = new Bricks(game, 4, 4);

game.add(paddle);
game.add(ball);
bricks.bricks.forEach((brick) => game.add(brick));

ball.on("exitviewport", () => {
  alert("Game Over");
  ball.kill();
});

game.start();
