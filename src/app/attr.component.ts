import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SelectedElement } from './shared/shared.service'
@Component({
    selector:'attr-component',
    template:`
    <div *ngFor='let attr of attrs' class="col" style="width: 10%; min-width:200px; max-width: 200px; height: 50%;">
        <div class="row">
            <predictiveAttr-search [attr] = '[attr.nodeName,attr.nodeValue]'></predictiveAttr-search>
        </div>
    </div>
    <div class="col" style="width: 10%; min-width:200px; max-width: 200px;">
        <button (click)="addAttr()" class="btn btn-default" style="width:50%;"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    `,
    styleUrls:['./css/lib/bootstrap.css','./css/styles.css']
})
export class AttributeComponent implements OnInit{
    constructor(private selectedEle: SelectedElement){}
    attrs : any = [];
    subscription: any;
    @Output() response : EventEmitter<any> = new EventEmitter();
    ngOnInit(){
        this.subscription = this.selectedEle.getSelectedEleEmitter().subscribe(()=>this.changed());
        this.changed();
    }
    changed(){  
         this.attrs = [];
        for(var i=0;i<this.selectedEle.setAttrs.length;i++){
            
         var attr:any = {};
            attr.nodeName =this.selectedEle.setAttrs[i].nodeName;
            if(attr.nodeName == "class"){
            attr.nodeValue=((this.selectedEle.setAttrs[i].nodeValue).replace(this.selectedEle.getElement().getAttribute('defClass'),'').replace("drawBorder","")).trim();
            }else{
                attr.nodeValue=(this.selectedEle.setAttrs[i].nodeValue);
            }
            this.attrs.push(attr);
        }
        
}
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    addAttr(){
        this.changed();
        var attr:any = {};
        attr.nodeName ="";
        attr.nodeValue="";
        this.attrs.push(attr);
    }
    
}