import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
                                          //이벤트 처리를 위해 삽입
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  title="사용자 정의 directive 사용";
    
  @Input("appHighlight") colorName:string; //속성값이 colorName에 저장

  constructor(public render:Renderer2, public eleRef:ElementRef) { 
   
  }
  @HostListener('click')onMouseClick(){
    this.render.setStyle(this.eleRef.nativeElement, "color", this.colorName);
  }
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
    