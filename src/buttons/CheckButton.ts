import { Circle } from 'phaser-ce';
import LableButton from '../utils/button/LableButton';

export class CheckButton extends LableButton {
  constructor(game: Phaser.Game) {
    const config: any = {
      up: {
        key: 'btn-green-up',
        contentProps: {
          offsetX: -9,
          offsetY: -14,
        },
      },
      down: {
        key: 'btn-green-down',
        contentProps: {
          offsetX: -7,
          offsetY: -12,
        },
      },
      over: {
        key: 'btn-green-over',
        contentProps: {
          offsetX: -10,
          offsetY: -15,
        },
      },
      disabled: {
        key: 'btn-grey-disabled',
        contentProps: {
          offsetX: -8,
          offsetY: -10,
        },
      },
      label: {
        text: 'check',
        style: { fontSize: 40, fill: '#514734' },
        offsetX: -6,
        offsetY: -5,
      },
      hitArea: new Circle(50, 50, 100),
    };
    super(game, config);
  }

  protected createContent(props: any): PIXI.DisplayObjectContainer {
    const { offsetX: offsetX, offsetY: offsetY, center: center } = props;
    const content: PIXI.DisplayObjectContainer = this.game.make.image(
      offsetX,
      offsetY,
      'btn-icon-check',
    );
    if (center !== false) {
      content.x += (this.width - content.width) * 0.5;
      content.y += (this.height - content.height) * 0.5;
    }
    return content;
  }
}
