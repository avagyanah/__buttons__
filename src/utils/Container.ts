import IGame from '../IGame';

export default class Container extends PIXI.DisplayObjectContainer {
  protected game: IGame;

  constructor(game: IGame, addToWorld: boolean = false) {
    super();
    this.game = game;
    if (addToWorld) {
      this.game.world.add(this);
    }
  }

  /* tslint:disable:no-empty */
  public update(): void {}
  /* tslint:disable:no-empty */
  public postUpdate(): void {}

  public bringToTop(child: PIXI.DisplayObject): void {
    this.addChild(child);
  }
}
