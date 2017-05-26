import { Component, Input, EventEmitter} from '@angular/core';
@Component({
    selector: "layout-padding",
    templateUrl: "./layout/static.layoutPadding.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
  
})
export class StaticLayoutPaddingComponent{
    @Input() label : string[];
unitTop: string =  'px';
paddingTop: any = 0;
paddingRight: any = 0;
paddingLeft: any = 0;
paddingBottom: any = 0;
unitLeft: string =  'px';
unitRight: string =  'px';
unitBottom: string =  'px';
selectedEle: any;
subscription: any;
response : EventEmitter<any> = new EventEmitter();
    
@Input('selectedEle') 
    set selectedElement(val : any){
        this.selectedEle = val;
    }

    changePadding(){
        try{this.selectedEle.getElement().style.paddingTop = this.paddingTop+this.unitTop;}catch(err){}
        try{this.selectedEle.getElement().style.paddingRight = this.paddingRight+this.unitRight;}catch(err){}
        try{this.selectedEle.getElement().style.paddingBottom = this.paddingBottom+this.unitBottom;}catch(err){}
        try{this.selectedEle.getElement().style.paddingLeft = this.paddingLeft+this.unitLeft;}catch(err){}
    }

     processResponseTop(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitTop = evt.response;
            this.selectedEle.getElement().style.paddingTop = this.paddingTop+this.unitTop;
            }catch(err){}
        }
    }

    processResponseRight(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitRight = evt.response;
            this.selectedEle.getElement().style.paddingRight = this.paddingRight+this.unitRight;
            }catch(err){}
        }
    }

    processResponseBottom(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitBottom = evt.response;
            this.selectedEle.getElement().style.paddingBottom = this.paddingBottom+this.unitBottom;
            }catch(err){}
        }
    }

    processResponseLeft(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitLeft = evt.response;
            this.selectedEle.getElement().style.paddingLeft = this.paddingLeft+this.unitLeft;
            }catch(err){}
        }
    }

    ngOnInit(){
        this.subscription = this.selectedEle.getSelectedEleEmitter()
      .subscribe(() => this.changed());
      this.changed();
    }
    changed(){
         try{
        this.paddingTop = this.selectedEle.getElement().style.paddingTop.match(/\d/g).join("");
        }catch(err){
             this.paddingTop = "";
        }
        try{
            this.paddingRight = this.selectedEle.getElement().style.paddingRight.match(/\d/g).join("");
        }catch(err){
            this.paddingRight = "";            
        }
        try{
        this.paddingBottom = this.selectedEle.getElement().style.paddingBottom.match(/\d/g).join("");
        }catch(err){
            this.paddingBottom = "";
        }
        try{
        this.paddingLeft = this.selectedEle.getElement().style.paddingLeft.match(/\d/g).join("");
        }catch(err){
            this.paddingLeft = "";
        }
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}