import { Actor, Color } from "excalibur";

interface BrickProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: Color;
}

class Brick extends Actor {
  constructor(props: BrickProps) {
    super({
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      color: props.color,
    });
  }
}

export default Brick;
