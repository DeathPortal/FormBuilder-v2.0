import { SelectedElement } from '../shared/shared.service';
import { Component, ElementRef, Input } from '@angular/core' ;
import { CSSProp } from '../shared/css.prop'
@Component({
    selector: "predictiveStyle-search",
    template: `
        <div class="row" style="width: 10%; min-width:200px; padding: 5px; padding-left: 20px; display: inline-block; position: relative;">
            <div class="form-inline" [ngClass]="valid?'form-inline':'has-danger'">
              <input (blur)="check()" id="" type="text" class="validate filter-input form-control col-4" style="padding: 5px;" [(ngModel)]="query" (keyup)="filter($event)">
              <span style="font-size: 20px;">:</span>
              <input (blur) = "setStyle()" id="" type="text" class="validate filter-input form-control col-4" style="padding: 5px;" [(ngModel)]="queryval" (keyup)="filterStyle($event)">
            </div>
        </div>
            <div [style.top] = 'top+"px"' [style.left]= 'left+"px"' class="dropdown-menu" *ngIf="filteredList.length > 0" style="display:block;">
                <a class="item-dropdown" (click)="select(item)" *ngFor="let item of filteredList">{{item}}</a>
            </div>
            <div [style.top] = 'top+"px"' [style.left]= 'left+"px"' class="dropdown-menu" *ngIf="filteredStyleList.length > 0" style="display:block;">
                <a class="item-dropdown" (click)="selectStyle(item)" *ngFor="let item of filteredStyleList">{{item}}</a>
            </div>
        
        `,
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
        '(document:click)': 'handleClick($event)',
    },
})
export class AutoCompleteStyle{
    constructor (private selectedEle: SelectedElement,private myElement: ElementRef, private css:CSSProp){
        this.elementRef = myElement;
    }
    @Input('styles')
    set Value(val: any){
        this.query = val[0];
        this.queryval = val[1];
    }
    top: number;
    left: number;

    filterStyle(event: any){
        this.top = event.srcElement.getBoundingClientRect().top + event.srcElement.clientHeight;
        this.left = event.srcElement.getBoundingClientRect().left;
        this.filteredList = [];
        try{
         if (this.query !== "" && this.queryval !==""){
        var style = this.css.cssValues[this.query];
        this.filteredStyleList = style.filter(function(el: any){
            return el.toLowerCase().indexOf(this.queryval.toLowerCase()) > -1;
        }.bind(this));
        }else{
            this.filteredStyleList = [];
        }
        if(this.filteredStyleList.length>5){
            this.filteredStyleList = this.filteredStyleList.slice(0,5);
        }
        }catch(err){}
    }
    query: any;
    queryval:any;
    filteredList: any = [];
    elementRef: any;
    valid: boolean = true;
    filteredStyleList: any = [];
    filter(event: any) {
        this.top = event.srcElement.getBoundingClientRect().top + event.srcElement.clientHeight;
        this.left = event.srcElement.getBoundingClientRect().left;
        this.filteredStyleList = [];
    if (this.query !== ""){
        this.filteredList = this.selectedEle.otherStyles.filter(function(el: any){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
    if(this.filteredList.length>5){
        this.filteredList = this.filteredList.slice(0,5);
    }
}
 
select(item: any){
    this.query = item;
    this.filteredList = [];
    this.check();
}
selectStyle(item: any){
    this.queryval = item;
    this.filteredStyleList = [];
    this.setStyle();
}

handleClick(event: any){
   var clickedComponent = event.target;
   var inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if(!inside){
        this.filteredList = [];
    }
}

check(){
    var filteredList: any = [];
    for(var i=0;i<this.selectedEle.otherStyles.length;i++){
        if((this.selectedEle.otherStyles)[i]==this.query){
            filteredList.push(this.query);
            break;
        }
    }
        if(filteredList <= 0){
            this.valid = false;
        }else{
            this.setStyle()
        }
}

setStyle(){
    try{
        var el = this.selectedEle.getElement();
        el.style[this.query] = this.queryval;
        this.selectedEle.setElement(this.selectedEle.getElement());
        if(el.style[this.query] && this.queryval != ''){
            this.selectedEle.setSetStyles();
            this.selectedEle.getSelectedEleEmitter().emit();
        }
        this.valid = true;
    }catch(err){
        this.valid = false;
    }
}
}