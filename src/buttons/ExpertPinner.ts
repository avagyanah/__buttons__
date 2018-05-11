import { Circle } from 'phaser-ce';
import LablePinner from '../utils/button/LablePinner';

export class ExpertPinner extends LablePinner {
  constructor(game: Phaser.Game) {
    const config: any = {
      up: {
        key: 'btn-grey-up',
        contentProps: {
          offsetX: -9,
          offsetY: -14,
        },
      },
      down: {
        key: 'btn-grey-down',
        contentProps: {
          offsetX: -7,
          offsetY: -12,
        },
      },
      upOver: {
        key: 'btn-grey-over',
        contentProps: {
          offsetX: -10,
          offsetY: -15,
        },
      },
      disabled: {
        key: 'btn-grey-disabled-small',
        contentProps: {
          offsetX: -8,
          offsetY: -10,
        },
      },
      label: {
        text: 'expert',
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
      'btn-icon-expert',
    );
    if (center !== false) {
      content.x += (this.width - content.width) * 0.5;
      content.y += (this.height - content.height) * 0.5;
    }
    return content;
  }
}
