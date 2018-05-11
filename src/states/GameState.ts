import Phaser from 'phaser-ce';
import { CheckButton } from '../buttons/CheckButton';
import { ExpertPinner } from '../buttons/ExpertPinner';

export default class GameState extends Phaser.State {
  private checkBtn: CheckButton;
  private expertPin: ExpertPinner;

  private mushroom!: Phaser.Sprite;

  public create(): void {
    // _____ PINER _____
    this.checkBtn = new CheckButton(this.game);
    this.checkBtn.onClick.add(this.checkClick, this);
    this.checkBtn.position.set(100, 100);
    // this.checkBtn.disable();

    // _____ PINER _____
    this.expertPin = new ExpertPinner(this.game);
    this.expertPin.onSwitch.add(this.expertClick, this);
    this.expertPin.position.set(300, 100);
    // this.expertPin.disable();
  }

  private checkClick(checkButton: CheckButton): void {
    console.warn('click');
  }

  private expertClick(pinner: ExpertPinner, isPined: boolean): void {
    console.warn(`isPined - ${isPined}`);
  }
}
