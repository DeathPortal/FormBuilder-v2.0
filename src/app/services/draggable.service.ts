import { Directive, HostListener, Input, OnInit,ElementRef,EventEmitter } from '@angular/core';

@Directive({
  selector: '[ng2-draggable]'
})
export class Draggable implements OnInit{
    topStart:number=0;
    leftStart:number=0;
    boundsUp: number=0;
    boundsRight: number=0;
    boundsDown: number=0;
    boundsLeft: number=0;
    md:boolean = false;

    constructor(public element: ElementRef) {}

        ngOnInit(){
          // css changes
            this.element.nativeElement.style.position = 'absolute';
            this.element.nativeElement.className += ' cursor-draggable';
        }

        @HostListener('mousedown', ['$event'])
        onMouseDown(event:MouseEvent) {
          event.preventDefault();
          event.stopPropagation();
          if(event.button === 2)
            return; // prevents right click drag, remove his if you don't want it
          this.md = true;
          this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px','');
          this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px','');
          if((event.clientY - this.topStart)>this.boundsDown){
                this.element.nativeElement.style.top = this.boundsDown+'px';
             }else if((event.clientY - this.topStart)<this.boundsUp){
                this.element.nativeElement.style.top = this.boundsUp+'px';
             }
             if((event.clientX - this.leftStart)>this.boundsRight){
                this.element.nativeElement.style.left = this.boundsRight+'px';
             }else if((event.clientX - this.leftStart)<this.boundsLeft){
                this.element.nativeElement.style.left = this.boundsLeft+'px';
             }
        }

        @HostListener('document:mouseup', ['$event'])
        onMouseUp(event:MouseEvent) {
          event.preventDefault();
          event.stopPropagation();
          this.md = false;
        }

        @HostListener('document:mousemove', ['$event'])
        onMouseMove(event:MouseEvent) {
          event.preventDefault();
          event.stopPropagation();
          if(this.md == true){
            if((event.clientY - this.topStart)>this.boundsDown){
                this.element.nativeElement.style.top = this.boundsDown+'px';
             }else if((event.clientY - this.topStart)<this.boundsUp){
                this.element.nativeElement.style.top = this.boundsUp+'px';
             }else{
                this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
             }
             if((event.clientX - this.leftStart)>this.boundsRight){
                this.element.nativeElement.style.left = this.boundsRight+'px';
             }else if((event.clientX - this.leftStart)<this.boundsLeft){
                this.element.nativeElement.style.left = this.boundsLeft+'px';
             }else{
                this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
             }
          }
        }

        @HostListener('document:mouseleave', ['$event'])
        onmouseleave(event:MouseEvent) {
          event.preventDefault();
          event.stopPropagation();
          if(this.md){
            if((event.clientY - this.topStart)>this.boundsDown){
                this.element.nativeElement.style.top = this.boundsDown+'px';
             }else if((event.clientY - this.topStart)<this.boundsUp){
                this.element.nativeElement.style.top = this.boundsUp+'px';
             }
             if((event.clientX - this.leftStart)>this.boundsRight){
                this.element.nativeElement.style.left = this.boundsRight+'px';
             }else if((event.clientX - this.leftStart)<this.boundsLeft){
                this.element.nativeElement.style.left = this.boundsLeft+'px';
             }
          }
          this.md = false;
        }

        @Input('ng2-draggable')
        set bounds(bounds:any[]){
          try{
            if(bounds[1].split(',')[0] == "full")
              {
                bounds[1] = this.element.nativeElement.parentNode.clientWidth+parseInt(bounds[1].split(',')[1]);
              }
          }catch(err){}
          try{
            if(bounds[2].split(',')[0] == "full")
              {
                bounds[2] = this.element.nativeElement.parentNode.clientHeight+parseInt(bounds[2].split(',')[1]);
              }
          }catch(err){}
          this.boundsUp = bounds[0];
          this.boundsRight = bounds[1];
          this.boundsDown = bounds[2];
          this.boundsLeft = bounds[3];
        }
}