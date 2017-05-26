import { Component,Input,EventEmitter, OnInit, OnDestroy } from '@angular/core';
@Component({
    selector: "horizontal-alignment",
    templateUrl: "./alignment/static.horizontal.alignment.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
     host: {
    '(window:resize)': 'onResize($event)'
    },
  
})
export class StaticHorizontalAlignmentComponent implements OnInit, OnDestroy{
    selectedEle : any;
    subscription: any;
    align: string;
    windowSize: any;
    @Input('selectedEle') 
    set selectedElement(val : any){
        this.selectedEle = val;
    }
     onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }

     ngOnInit(){
        this.subscription = this.selectedEle.getSelectedEleEmitter()
      .subscribe(() => this.changed());
      this.changed();
      this.windowSize = window.innerWidth;
    }

    changed(){
        try{
        this.align = this.selectedEle.getElement().style.textAlign;
        }catch(err){}
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    textAlign(align: any){
        if(this.align == align){
            this.selectedEle.getElement().style.textAlign = "";
            this.align = "";
        }else{
        this.selectedEle.getElement().style.textAlign = align;
        this.align = align;
        }
    }
}