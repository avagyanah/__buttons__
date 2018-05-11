import Phaser from 'phaser-ce';
import { CheckButton } from '../buttons/CheckButton';
import { ExpertPinner } from '../buttons/ExpertPinner';
import { HintButton } from '../buttons/HintButton';

export default class GameState extends Phaser.State {
  private checkBtn: CheckButton;
  private expertPin: ExpertPinner;
  private hintBtn: HintButton;

  private mushroom!: Phaser.Sprite;

  public create(): void {
    // _____ Button _____
    this.checkBtn = new CheckButton(this.game);
    this.checkBtn.onClick.add(this.checkClick, this);
    this.checkBtn.position.set(100, 100);
    // this.checkBtn.disable();

    // _____ PINER _____
    this.expertPin = new ExpertPinner(this.game);
    this.expertPin.onSwitch.add(this.expertClick, this);
    this.expertPin.position.set(300, 100);
    // this.expertPin.disable();

    // _____ TIMER _____
    this.hintBtn = new HintButton(this.game);
    this.hintBtn.position.set(300, 350);
    // this.expertPin.disable();
    // this.hintBtn.disable();
  }

  private checkClick(checkButton: CheckButton): void {
    console.warn('click');
  }

  private expertClick(pinner: ExpertPinner, isPined: boolean): void {
    console.warn(`isPined - ${isPined}`);
  }
}
