import { Graphics, Pointer, Sprite } from 'phaser-ce';
import Container from '../Container';

export default abstract class AbstractButton extends Container {
  protected states: Sprite[];
  protected upState: Sprite;
  protected downState: Sprite;
  protected disabledState: Sprite;

  private inputShape: Graphics;

  constructor(game: Phaser.Game, config: any) {
    super(game, true);

    this.states = [];
    this.initInputs((config as any)['hitArea']);
  }

  public disable(): void {
    this.input = false;
    if (this.disabledState) {
      this.setState(this.disabledState);
    }
  }

  public enable(): void {
    this.input = true;
    if (this.disabledState) {
      this.setState(this.upState);
    }
  }

  protected initStates(config: any): void {
    const up: any = (config as any)['up'];
    const down: any = (config as any)['down'];
    const disabled: any = (config as any)['disabled'];
    //
    this.upState = this.createState(
      up.key,
      up.frame,
      this.createUpContent,
      up.contentProps,
    );
    if (down) {
      this.downState = this.createState(
        down.key,
        down.frame,
        this.createDownContent,
        down.contentProps,
      );
    }
    if (disabled) {
      this.disabledState = this.createState(
        disabled.key,
        disabled.frame,
        this.createDisabledContent,
        disabled.contentProps,
      );
    }
    this.setState(this.upState);
  }
  protected abstract overHandler(sprite?: Sprite, pointer?: Pointer): void;
  protected abstract outHandler(sprite?: Sprite, pointer?: Pointer): void;
  protected abstract downHandler(sprite?: Sprite, pointer?: Pointer): void;
  protected abstract upHandler(
    sprite?: Sprite,
    pointer?: Pointer,
    isOver?: boolean,
  ): void;

  protected createUpContent(props?: any): PIXI.DisplayObjectContainer {
    return this.createContent(props);
  }
  protected createDownContent(props?: any): PIXI.DisplayObjectContainer {
    return this.createContent(props);
  }
  protected createDisabledContent(props?: any): PIXI.DisplayObjectContainer {
    return this.createContent(props);
  }
  protected createContent(props?: any): PIXI.DisplayObjectContainer {
    props;
    return null;
  }

  protected setState(state: Sprite): void {
    this.states.forEach((child: Sprite) => {
      child.visible = false;
    });
    state.visible = true;
  }

  protected createState(
    key: string,
    frame: string,
    contentCreator?: (props: any) => {},
    contentProps?: any,
  ): Sprite {
    const state: Sprite = this.game.make.sprite(0, 0, key, frame);
    this.addChild(state);

    if (contentCreator) {
      const content: PIXI.DisplayObjectContainer = contentCreator.call(
        this,
        contentProps,
      );
      if (content) {
        state.addChild(content);
      }
    }
    this.states.push(state);
    return state;
  }

  private set input(value: boolean) {
    this.inputShape.inputEnabled = value;
    if (value) {
      this.inputShape.input.useHandCursor = value;
    }
  }

  private initInputs(hitArea: any): void {
    this.inputShape = this.createInputShapeGraphics(hitArea);
    this.inputShape.inputEnabled = true;
    this.inputShape.input.useHandCursor = true;
    this.inputShape.events.onInputOver.add(this.overHandler, this);
    this.inputShape.events.onInputDown.add(this.downHandler, this);
    this.inputShape.events.onInputUp.add(this.upHandler, this);
    this.inputShape.events.onInputOut.add(this.outHandler, this);
    this.addChild(this.inputShape);
  }

  private createInputShapeGraphics(hitArea?: any): Graphics {
    const graphics: Graphics = this.game.make.graphics(0, 0);
    graphics.beginFill(0x000000, 0);
    graphics.drawRect(0, 0, this.width, this.height);
    graphics.endFill();
    if (hitArea) {
      graphics.hitArea = hitArea;
    }
    return graphics;
  }
}
