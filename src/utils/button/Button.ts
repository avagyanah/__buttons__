import { Pointer, Signal, Sprite } from 'phaser-ce';
import AbstractButton from './AbstractButton';

export default abstract class Button extends AbstractButton {
  public onClick: Signal = new Signal();

  protected overState: Sprite;

  constructor(game: Phaser.Game, config: any) {
    super(game, config);

    this.initStates(config);
  }

  protected overHandler(): void {
    if (this.overState) {
      this.setState(this.overState);
    }
  }
  protected outHandler(): void {
    this.setState(this.upState);
  }
  protected downHandler(): void {
    if (this.downState) {
      this.setState(this.downState);
    }
  }
  protected upHandler(sprite: Sprite, pointer: Pointer, isOver: boolean): void {
    sprite;
    pointer;
    if (isOver) {
      this.overState
        ? this.setState(this.overState)
        : this.setState(this.upState);
      this.onClick.dispatch(this);
    }
  }

  protected initStates(config: any): void {
    const over: any = (config as any)['over'];
    if (over) {
      this.overState = this.createState(
        over.key,
        over.frame,
        this.createOverContent,
        over.contentProps,
      );
    }
    super.initStates(config);
  }

  protected createOverContent(props?: any): PIXI.DisplayObjectContainer {
    return this.createContent(props);
  }
}
