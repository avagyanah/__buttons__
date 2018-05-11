import { Circle } from 'phaser-ce';
import LableCoolDownButton from '../utils/button/LableCoolDownButton';

export class HintButton extends LableCoolDownButton {
  constructor(game: Phaser.Game) {
    const config: any = {
      up: {
        key: 'btn-grey-up',
        contentProps: {
          offsetX: -11,
          offsetY: -11,
        },
      },
      down: {
        key: 'btn-grey-down',
        contentProps: {
          offsetX: -11,
          offsetY: -15,
        },
      },
      over: {
        key: 'btn-grey-over',
        contentProps: {
          offsetX: -12,
          offsetY: -13,
        },
      },
      disabled: {
        key: 'btn-grey-disabled-small',
        contentProps: {
          offsetX: -12,
          offsetY: -11,
        },
      },
      label: {
        text: 'hint',
        style: { fontSize: 40, fill: '#514734' },
        offsetX: -6,
        offsetY: -5,
      },
      hitArea: new Circle(50, 50, 100),
      cooldown: {
        offsetX: -5,
        offsetY: -12,
        diameter: 40,
        delay: 2000,
        color: 0x000000,
        alpha: 0.7,
      },
    };
    super(game, config);
  }

  protected createContent(props: any): PIXI.DisplayObjectContainer {
    const { offsetX: offsetX, offsetY: offsetY, center: center } = props;
    const content: PIXI.DisplayObjectContainer = this.game.make.image(
      offsetX,
      offsetY,
      'btn-icon-hint',
    );
    if (center !== false) {
      content.x += (this.width - content.width) * 0.5;
      content.y += (this.height - content.height) * 0.5;
    }
    return content;
  }
}
