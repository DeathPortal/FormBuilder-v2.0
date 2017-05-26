import { Directive, HostListener, Input, Output, OnInit,ElementRef,EventEmitter } from '@angular/core';

@Directive({
  selector: '[ng2-droppable2]',
  host: {
        '(dragover)': 'onDragOver($event)',
        '(drop)': 'onDrop($event)'
    }
})
export class Droppable2 implements OnInit{
    cloneEle: any;
    topStart:number=0;
    leftStart:number=0;
    md:boolean = false;
    @Output() response: EventEmitter<any> = new EventEmitter(); 

    constructor(public element: ElementRef) {}

        ngOnInit(){
    }
    
    onDragOver(e:any){
        e.preventDefault();
        // $scope.element = angular.copy(e);
        //e.dataTransfer.setData('ele', str);
    };
    
    onDrop(e:any){
        var evt:any = {};
        evt.statusCode = 0;
        evt.response = e;
        this.response.next(evt);
        // this.style.opacity = '1.0';
        // $scope.element = {};
    }

        

         @Input('ng2-droppable2')
        set bounds(value:boolean){
          
        }
        

}