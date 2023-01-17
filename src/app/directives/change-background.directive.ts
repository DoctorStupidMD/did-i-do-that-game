import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {
	@Input()
	isCorrect: boolean = false;

  constructor(private elementRef: ElementRef,
		private render: Renderer2) { }

	@HostListener("click")
	answer() {
		if (this.isCorrect) {
			this.render.setStyle(this.elementRef.nativeElement, "background", "#90EE90");
			this.render.setStyle(this.elementRef.nativeElement, "color", "#fff");
			this.render.setStyle(this.elementRef.nativeElement, "border", "2px solid grey");
		} else {
			this.render.setStyle(this.elementRef.nativeElement, "background", "#ff726f");
			this.render.setStyle(this.elementRef.nativeElement, "color", "#fff");
			this.render.setStyle(this.elementRef.nativeElement, "border", "2px solid grey");
		}
	}
}
