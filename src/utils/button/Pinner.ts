import { Pointer, Signal, Sprite } from 'phaser-ce';
import AbstractButton from './AbstractButton';

export default abstract class Pinner extends AbstractButton {
  public onSwitch: Signal = new Signal();

  protected upOverState: Sprite;
  protected downOverState: Sprite;
  protected isPined: boolean = false;

  constructor(game: Phaser.Game, config: any) {
    super(game, config);
    this.initStates(config);
  }

  /* tslint:disable:no-empty */
  protected downHandler(): void {}

  protected outHandler(): void {
    if (this.isPined) {
      this.setState(this.downState);
      return;
    }
    this.setState(this.upState);
  }

  protected overHandler(): void {
    if (this.isPined) {
      if (this.downOverState) {
        this.setState(this.downOverState);
      }
      return;
    }
    if (this.upOverState) {
      this.setState(this.upOverState);
    }
  }

  protected upHandler(sprite: Sprite, pointer: Pointer, isOver: boolean): void {
    sprite;
    pointer;
    if (isOver) {
      this.isPined = !this.isPined;
      this.onSwitch.dispatch(this, this.isPined);
      if (this.isPined) {
        this.setState(this.downState);
        return;
      }
      this.setState(this.upState);
    }
  }

  protected initStates(config: any): void {
    const upOver: any = (config as any)['upOver'];
    const downOver: any = (config as any)['downOver'];
    if (upOver) {
      this.upOverState = this.createState(
        upOver.key,
        upOver.frame,
        this.createUpOverContent,
        upOver.contentProps,
      );
    }
    if (downOver) {
      this.downOverState = this.createState(
        downOver.key,
        downOver.frame,
        this.createDownOverContent,
        downOver.contentProps,
      );
    }
    super.initStates(config);
  }

  protected createUpOverContent(props?: any): PIXI.DisplayObjectContainer {
    return this.createContent(props);
  }
  protected createDownOverContent(props?: any): PIXI.DisplayObjectContainer {
    return this.createContent(props);
  }
}
