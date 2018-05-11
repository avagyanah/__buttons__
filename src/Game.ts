import '@babel/polyfill';
import 'pixi';
import Phaser from 'phaser-ce';
import PhaserI18n from 'phaseri18next';
import GameConfig from './constants/GameConfig';
import BootState from './states/BootState';
import GameState from './states/GameState';
import { GAME_STATE, BOOT_STATE } from './constants/Constants';

class Game extends Phaser.Game {
  private static NAME: string = 'Game';
  public storage: PhaserSuperStorage.StoragePlugin;

  constructor() {
    super(
      GameConfig.gameWidth,
      GameConfig.gameHeight,
      Phaser.CANVAS,
      'gameContainer',
    );

    this.state.add(BOOT_STATE, BootState);
    this.state.add(GAME_STATE, GameState);

    setTimeout(() => {
      this.initPlugins();
    }, 1);
  }

  public initPlugins(): void {
    if (!this.isBooted) {
      setTimeout(this.initPlugins.bind(this), 1);
      console.warn('_Phaser PluginManager Initializing is in PROCESS...');
      return;
    }
    console.log('_Phaser PluginManager Initializign DONE!');
    this.state.start(BOOT_STATE);
  }
}

(window as any).game = new Game();
