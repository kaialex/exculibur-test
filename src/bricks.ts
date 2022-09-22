import { Actor, Color, Engine } from "excalibur";
import Brick from "./brick";

class Bricks {
  public bricks: Actor[] = [];

  constructor(engine: Engine, columns: number, rows: number) {
    const padding = 20; // px
    const yoffset = 20; // y-offset

    const brickWidth = (engine.drawWidth - padding * (columns + 1)) / columns;
    const brickHeight = 30; //

    const brickColor = [Color.Violet, Color.Orange, Color.Yellow];

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < columns; i++) {
        this.bricks.push(
          new Brick({
            x: brickWidth / 2 + i * (brickWidth + padding) + padding,
            y: yoffset + j * (brickHeight + padding) + padding,
            width: brickWidth,
            height: brickHeight,
            color: brickColor[(i + j) % 3],
          })
        );
      }
    }
  }
}

export default Bricks;
