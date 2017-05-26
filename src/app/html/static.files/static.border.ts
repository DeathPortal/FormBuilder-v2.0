import { Component, EventEmitter, Input, OnInit, OnDestroy} from '@angular/core';
@Component({
    selector: "border-static",
    templateUrl: "./border/static.border.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
  
})
export class StaticBorderComponent implements OnInit , OnDestroy{
    selectedBorder : string = "Style";
    borderSize: any;
    selectedEle: any;
    subscription : any;
    unit: string = 'px';
    borders=["dotted",
            "dashed",
            "solid", 
            "double",
            "groove",
            "ridge",
            "inset",
            "outset"];
@Input('selectedEle') 
    set selectedElement(val : any){
        this.selectedEle = val;
    }
changeBorderStyle(style: string){
    this.selectedBorder = style;
    this.selectedEle.getElement().style.borderStyle = style;
}
changeBorderSize(){
    try{
     this.selectedEle.getElement().style.borderWidth = this.borderSize+this.unit;
    }catch(err){

    }
}
response : EventEmitter<any> = new EventEmitter();
    bgcolor : string = '#FFF'; // change after update
    colorPicker: boolean = false;
    status: boolean = false;
    processResponse(evt:any){
        if(evt.statusCode==0){
            this.colorPicker = false;
            this.bgcolor = evt.response;
            this.selectedEle.getElement().style.borderColor = this.bgcolor;
            this.status = true;
        }else
        if(evt.statusCode==2){
            try{
            this.unit = evt.response;
            this.selectedEle.getElement().style.borderWidth = this.borderSize+this.unit;
            }catch(err){}
        }
    }
    openColorPicker(){
        if(this.status==false){
        this.colorPicker = true;
        }else{
            this.colorPicker = false;
            this.status = false;
        }
    }

    ngOnInit(){
        this.subscription = this.selectedEle.getSelectedEleEmitter()
      .subscribe(() => this.changed());
      this.changed();
    }
    changed(){
        try{
        this.selectedBorder = this.selectedEle.getElement().style.borderStyle;
        this.borderSize = (this.selectedEle.getElement().style.borderWidth.match(/\d/g)).join("");
        }catch(err){
            this.borderSize = '';
            this.selectedBorder = "";
        }
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}