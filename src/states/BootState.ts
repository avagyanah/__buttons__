import Phaser from 'phaser-ce';
import { GAME_STATE } from '../constants/Constants';
import GameConfig from '../constants/GameConfig';

export default class BootState extends Phaser.State {
  public init(args: any[]): void {
    super.init(args);
    this.stage.backgroundColor = GameConfig.backgroundColor;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.game.renderer.renderSession.roundPixels = true;
  }

  public preload(game: Phaser.Game): void {
    super.preload(game);
    this.game.load.image('btn-icon-expert', 'assets/btn-icon-expert.png');
    this.game.load.image('btn-icon-check', 'assets/btn-icon-check.png');
    this.game.load.image('btn-green-up', 'assets/btn-green-up.png');
    this.game.load.image('btn-green-over', 'assets/btn-green-over.png');
    this.game.load.image('btn-green-down', 'assets/btn-green-down.png');
    this.game.load.image('btn-grey-disabled', 'assets/btn-grey-disabled.png');
    this.game.load.image('btn-grey-up', 'assets/btn-grey-up.png');
    this.game.load.image('btn-grey-over', 'assets/btn-grey-over.png');
    this.game.load.image('btn-grey-down', 'assets/btn-grey-down.png');
    this.game.load.image(
      'btn-grey-disabled-small',
      'assets/btn-grey-disabled.png',
    );
  }

  public create(game: Phaser.Game): void {
    super.create(game);
    this.game.state.start(GAME_STATE);
  }
}
