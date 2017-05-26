import { Directive, HostListener, Input, OnInit,ElementRef,EventEmitter,Output } from '@angular/core';
import { SelectedElement } from '../shared/shared.service'
@Directive({
  selector: '[ng2-draggable2]',
   host: {
        '(dragstart)': 'onDragStart($event)',
        '(dragend)':'onDragEnd($event)',
        '(touchstart)':'addtoSelected($event)'
    }
})
export class Draggable2 implements OnInit{
    cloneEle: any;
    topStart:number=0;
    leftStart:number=0;
    md:boolean = false;

    constructor(public element: ElementRef, private selectedEle: SelectedElement) {}

        ngOnInit(){
          this.element.nativeElement.setAttribute('draggable', 'true');
    }

    
    onDragStart(e:any){
        e.srcElement.style.opacity = '0.4';
        e.dataTransfer.setData("srcElement", e.srcElement.getAttribute('id'));
        // $scope.element = angular.copy(e);
        //e.dataTransfer.setData('ele', str);
    };
    
    onDragEnd(e:any){
        e.preventDefault();
        e.srcElement.style.opacity = '1';
        // this.style.opacity = '1.0';
        // $scope.element = {};
    }

addtoSelected(event: any){
    event.preventDefault();
    var evt: any = {};
    evt.statusCode = 0;
    evt.response = event.srcElement;
    this.selectedEle.touchEvent(evt);
}
        

         @Input('ng2-draggable2')
        set bounds(value:boolean){
          
        }
        

}