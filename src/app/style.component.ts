import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SelectedElement } from './shared/shared.service'
@Component({
    selector:'style-component',
    template:`
    <div *ngFor='let style of styles' class="col" style="width: 10%; min-width:200px; max-width: 200px; height: 50%;">
        <div class="row">
            <predictiveStyle-search [styles] = '[style.name,style.value]'></predictiveStyle-search>
        </div>
    </div>
    <div class="col" style="width: 10%; min-width:200px; max-width: 200px;">
        <button (click)="addStyle()" class="btn btn-default" style="width:50%;"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    `,
    styleUrls:['./css/lib/bootstrap.css','./css/styles.css']
})
export class StyleComponent implements OnInit{
    constructor(private selectedEle: SelectedElement){}
    styles : any = [];
    subscription: any;
    @Output() response : EventEmitter<any> = new EventEmitter();
    ngOnInit(){
        this.subscription = this.selectedEle.getSelectedEleEmitter().subscribe(()=>this.changed());
        this.changed();
    }
    changed(){  
         this.styles = [];
        for(var i=0;i<this.selectedEle.setStyles.length;i++){
         var style:any = {};
            style.name =this.selectedEle.setStyles[i].name;
            style.value=this.selectedEle.setStyles[i].value;
            this.styles.push(style);
        }
        
}
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    addStyle(){
        this.changed();
        var style:any = {};
        style.nodeName ="";
        style.nodeValue="";
        this.styles.push(style);
    }
    
}