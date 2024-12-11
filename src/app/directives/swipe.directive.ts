import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { GestureController } from "@ionic/angular";

@Directive({
  selector: '[appSwipe]',
  standalone: true
})
export class SwipeDirective {

  @Output() swipeUp = new EventEmitter<void>();
  @Output() swipeDown = new EventEmitter<void>();

  constructor(private el: ElementRef, private gestosController: GestureController) {
    const gestos = this.gestosController.create({
      el: document.body,
      threshold: 0,
      gestureName: 'swipe-up-down',
      onMove: ev => this.handleSwipe(ev)
    });

    gestos.enable(true);
  }

  handleSwipe(ev: any) {
    if (ev.deltaY < -15) {
      this.swipeUp.emit();
    } else if (ev.deltaY > 15) {
      this.swipeDown.emit();
    }
  }

}
