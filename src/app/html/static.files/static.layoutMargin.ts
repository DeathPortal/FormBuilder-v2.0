import { Component,Input, EventEmitter} from '@angular/core';
@Component({
    selector: "layout-margin",
    templateUrl: "./layout/static.layoutMargin.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
  
})
export class StaticLayoutMarginComponent{
    @Input() label : string[];
    unitTop: string =  'px';
marginTop: any = 0;
marginRight: any = 0;
marginLeft: any = 0;
marginBottom: any = 0;
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

    changeMargin(){
        
        try{
            if(isNaN(this.marginTop)){
            this.selectedEle.getElement().style.marginTop = this.marginTop;
        }else{
            this.selectedEle.getElement().style.marginTop = this.marginTop+this.unitTop;
        }
            }catch(err){}
        try{
            if(isNaN(this.marginRight)){
                this.selectedEle.getElement().style.marginRight = this.marginRight;
            }else{
                this.selectedEle.getElement().style.marginRight = this.marginRight+this.unitRight;
            }
        }catch(err){}
        try{
            if(isNaN(this.marginBottom)){
                this.selectedEle.getElement().style.marginBottom = this.marginBottom;
            }else{
               this.selectedEle.getElement().style.marginBottom = this.marginBottom+this.unitBottom; 
            }
        }catch(err){}
        try{
            if(isNaN(this.marginLeft)){
                this.selectedEle.getElement().style.marginLeft = this.marginLeft;
            }else{
                this.selectedEle.getElement().style.marginLeft = this.marginLeft+this.unitLeft;
            }
        }catch(err){}
    }

     processResponseTop(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitTop = evt.response;
            this.selectedEle.getElement().style.marginTop = this.marginTop+this.unitTop;
            }catch(err){}
        }
    }

    processResponseRight(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitRight = evt.response;
            this.selectedEle.getElement().style.marginRight = this.marginRight+this.unitRight;
            }catch(err){}
        }
    }

    processResponseBottom(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitBottom = evt.response;
            this.selectedEle.getElement().style.marginBottom = this.marginBottom+this.unitBottom;
            }catch(err){}
        }
    }

    processResponseLeft(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitLeft = evt.response;
            this.selectedEle.getElement().style.marginLeft = this.marginLeft+this.unitLeft;
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
        this.marginTop = this.selectedEle.getElement().style.marginTop.match(/\d/g).join("");
        }catch(err){
             this.marginTop = "";
        }
        try{
            this.marginRight = this.selectedEle.getElement().style.marginRight.match(/\d/g).join("");
        }catch(err){
            this.marginRight = "";            
        }
        try{
        this.marginBottom = this.selectedEle.getElement().style.marginBottom.match(/\d/g).join("");
        }catch(err){
            this.marginBottom = "";
        }
        try{
        this.marginLeft = this.selectedEle.getElement().style.marginLeft.match(/\d/g).join("");
        }catch(err){
            this.marginLeft = "";
        }
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

   
}