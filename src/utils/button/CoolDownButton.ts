import { Graphics, Pointer, Sprite } from 'phaser-ce';
import Button from './Button';

export default abstract class CoolDownButton extends Button {
  private graphics: Graphics;
  private config: any;
  constructor(game: Phaser.Game, config: any) {
    super(game, config);
    this.initStates(config);
    this.config = config;
  }

  protected upHandler(sprite: Sprite, pointer: Pointer, isOver: boolean): void {
    super.upHandler(sprite, pointer, isOver);
    this.setState(this.upState);
    if (isOver) {
      this.startCoolDown();
    }
  }

  private startCoolDown(): void {
    const config: any = (this.config as any)['cooldown'];
    const offsetX: any = (config as any)['offsetX'];
    const offsetY: any = (config as any)['offsetY'];
    const diameter: any = (config as any)['diameter'];
    const delay: any = (config as any)['delay'];
    const color: any = (config as any)['color'];
    const alpha: any = (config as any)['alpha'];

    this.graphics = this.game.add.graphics(
      this.disabledState.centerX + offsetX,
      this.disabledState.centerY + offsetY,
    );
    this.graphics.angle -= 90;

    this.input = false;
    this.addChild(this.graphics);
    //
    const tweenObject: any = {
      angle: 0,
      diam: diameter,
      col: color,
      alp: alpha,
    };
    const tween: Phaser.Tween = this.game.add
      .tween(tweenObject)
      .to({ endAngle: tweenObject.angle + Math.PI * 2 }, delay, null, true);
    tween.onUpdateCallback(this.tweenUpdate, this);
    tween.onComplete.addOnce(this.tweenComplete, this);
  }

  private tweenUpdate(tween: Phaser.Tween, value: any): void {
    this.graphics.clear();
    this.graphics.beginFill(tween.target.col, tween.target.alp);
    this.graphics.arc(0, 0, tween.target.diam, 0, tween.target.endAngle, true);
    this.graphics.endFill();
  }

  private tweenComplete(): void {
    this.input = true;
    this.graphics.parent.removeChild(this.graphics);
  }
}
