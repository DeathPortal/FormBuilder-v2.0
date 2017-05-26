import { Component, EventEmitter, Output, Input, OnInit, OnDestroy} from '@angular/core';
import { SharedVariable } from './shared/shared.variable'
@Component({
    selector: "color-tool",
    templateUrl: "./html/colorTool.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
  
})
export class ColorToolComponent implements OnDestroy, OnInit{
    event : EventEmitter<any> = new EventEmitter();
    colorPicker: boolean = false;
    status: boolean = false;
    bgcolor : string;
    subscription: any;
    ref : string[];
    item: string;
    ngOnInit(){
        this.subscription = this.shared.getSelectedEleEmitter()
      .subscribe((item:any) => this.changed(item));
    }
    changed(item: any){
        var color: any = item;
        try{
        for(var i=0;i<this.ref.length;i++){
            color = color[this.ref[i]];
        }
        this.bgcolor = color;
        }catch(err){

        }
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    @Input('defaultColor') set Color(val: any){
        this.ref = val;
    }
    constructor(private shared: SharedVariable){
    }
    @Output() response : EventEmitter<any> = new EventEmitter();
    processResponse(evt:any){
        if(evt.statusCode==0){
            this.colorPicker = false;
            this.bgcolor = evt.response;
            this.status = true;
        }else{
            this.colorPicker = false;
            this.status = true;
        }
        this.response.next(evt);
    }
    openColorPicker(){
        if(this.status==false){
        this.colorPicker = true;
        }else{
            this.colorPicker = false;
            this.status = false;
        }
    }
    
}