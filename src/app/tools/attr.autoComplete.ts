import { SelectedElement } from '../shared/shared.service';
import { Component, ElementRef, Input } from '@angular/core' ;

@Component({
    selector: "predictiveAttr-search",
    template: `
        <div class="row" style="width: 10%; min-width:200px; padding: 5px; padding-left: 20px; display: inline-block; position: relative;">
            <div class="form-inline" [ngClass]="valid?'form-inline':'has-danger'">
              <input (blur)="check()" id="" type="text" class="validate filter-input form-control col-4" style="padding: 5px;" [(ngModel)]="query" (keyup)="filter($event)">
              <span style="font-size: 20px;">:</span>
              <input (blur) = "setAttribute()" id="" type="text" class="validate filter-input form-control col-4" style="padding: 5px;" [(ngModel)]="queryval">
            </div>
        </div>
            <div [style.top] = 'top+"px"' [style.left]= 'left+"px"' class="dropdown-menu" *ngIf="filteredList.length > 0" style="display:block;">
                <a class="item-dropdown" (click)="select(item)" *ngFor="let item of filteredList">{{item}}</a>
            </div>
        `,
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
        '(document:click)': 'handleClick($event)',
    },
})
export class AutoCompleteAttr{
    constructor (private selectedEle: SelectedElement,private myElement: ElementRef){
        this.elementRef = myElement;
    }
    @Input('attr')
    set Value(val: any){
        this.query = val[0];
        this.queryval = val[1];
    }

    query: any;
    queryval:any;
    filteredList: any = [];
    elementRef: any;
    valid: boolean = true;
    top: number;
    left: number;
    filter(event : any) {
         this.top = event.srcElement.getBoundingClientRect().top + event.srcElement.clientHeight;
        this.left = event.srcElement.getBoundingClientRect().left;
    if (this.query !== ""){
        this.filteredList = this.selectedEle.otherAttrs.filter(function(el: any){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}
 
select(item: any){
    this.query = item;
    this.filteredList = [];
    this.check();
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
    for(var i=0;i<this.selectedEle.otherAttrs.length;i++){
        if((this.selectedEle.otherAttrs)[i]==this.query){
            filteredList.push(this.query);
            break;
        }
    }
        if(filteredList <= 0){
            this.valid = false;
        }else{
            this.setAttribute()
        }
}

setAttribute(){
    try{
        this.query = this.query.trim();
        this.queryval = this.queryval.trim();
        var el = this.selectedEle.getElement();
        if(this.query == "class"){
        el.setAttribute(this.query,el.getAttribute('defClass')+" "+this.queryval);
        }else{
            el.setAttribute(this.query,this.queryval);
        }
        this.selectedEle.setElement(this.selectedEle.getElement());
        this.valid = true;
    }catch(err){
        this.valid = false;
    }
}
}