import { Component, Input , OnInit, OnDestroy} from '@angular/core';
@Component({
    selector: "border-radius-static",
    templateUrl: "./border/static.borderRadius.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
  
})
export class StaticBorderRadiusComponent implements OnInit, OnDestroy{
unitTopLeft: string =  'px';
borderTopLeftRadius: any = 0;
borderTopRightRadius: any = 0;
borderBottomLeftRadius: any = 0;
borderBottomRightRadius: any = 0;
unitBottomLeft: string =  'px';
unitTopRight: string =  'px';
unitBottomRight: string =  'px';
selectedEle: any;
subscription: any;
@Input('selectedEle') 
    set selectedElement(val : any){
        this.selectedEle = val;
    }

    changeBorderRadius(){
    
        try{this.selectedEle.getElement().style.borderTopLeftRadius = this.borderTopLeftRadius+this.unitTopLeft;}catch(err){}
        try{this.selectedEle.getElement().style.borderTopRightRadius = this.borderTopRightRadius+this.unitTopRight;}catch(err){}
        try{this.selectedEle.getElement().style.borderBottomLeftRadius = this.borderBottomLeftRadius+this.unitBottomLeft;}catch(err){}
        try{this.selectedEle.getElement().style.borderBottomRightRadius = this.borderBottomRightRadius+this.unitBottomRight;}catch(err){}
    }

    processResponseTopLeft(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitTopLeft = evt.response;
            this.selectedEle.getElement().style.borderTopLeftRadius = this.borderTopLeftRadius+this.unitTopLeft;
            }catch(err){}
        }
    }

    processResponseTopRight(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitTopRight = evt.response;
            this.selectedEle.getElement().style.borderTopRightRadius = this.borderTopRightRadius+this.unitTopRight;
            }catch(err){}
        }
    }

    processResponseBottomLeft(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitBottomLeft = evt.response;
            this.selectedEle.getElement().style.borderBottomLeftRadius = this.borderBottomLeftRadius+this.unitBottomLeft;
            }catch(err){}
        }
    }

    processResponseBottomRight(evt:any){
        if(evt.statusCode==2){
            try{
            this.unitBottomRight = evt.response;
            this.selectedEle.getElement().style.borderBottomRightRadius = this.borderBottomRightRadius+this.unitBottomRight;
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
        this.borderTopLeftRadius = this.selectedEle.getElement().style.borderTopLeftRadius.match(/\d/g).join("");
        }catch(err){
             this.borderTopLeftRadius = "";
        }
        try{
            this.borderTopRightRadius = this.selectedEle.getElement().style.borderTopRightRadius.match(/\d/g).join("");
        }catch(err){
            this.borderTopRightRadius = "";            
        }
        try{
        this.borderBottomLeftRadius = this.selectedEle.getElement().style.borderBottomLeftRadius.match(/\d/g).join("");
        }catch(err){
            this.borderBottomLeftRadius = "";
        }
        try{
        this.borderBottomRightRadius = this.selectedEle.getElement().style.borderBottomRightRadius.match(/\d/g).join("");
        }catch(err){
            this.borderBottomRightRadius = "";
        }
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}