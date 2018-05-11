import { Text } from 'phaser-ce';
import Pinner from './Pinner';

export default class LablePinner extends Pinner {
  public label: Text;

  constructor(game: Phaser.Game, config: any) {
    super(game, config);

    const { label: label } = config;
    this.createLabel(label);
  }

  private createLabel(label: any): void {
    const {
      offsetX: offsetX,
      offsetY: offsetY,
      text: text,
      style: style,
    } = label;
    //
    this.label = this.game.make.text(offsetX, offsetY, text, style);
    this.label.centerX = this.width * 0.5 + offsetX;
    this.label.y += this.height + offsetY;
    this.addChild(this.label);
  }
}
