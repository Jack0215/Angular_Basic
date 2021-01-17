import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
                                          //이벤트 처리를 위해 삽입
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public render:Renderer2, public eleRef:ElementRef) { }
  //이벤트 처리
  @HostListener('mouseover') onMouseOver(){
    this.render.setStyle(this.eleRef.nativeElement, "color","red");
    this.render.setStyle(this.eleRef.nativeElement, "foint-size","50px");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.render.removeStyle(this.eleRef.nativeElement, "color");
    this.render.removeStyle(this.eleRef.nativeElement, "foint-size");
  }

}
    