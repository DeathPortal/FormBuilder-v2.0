import { Component, Output, EventEmitter, OnInit, OnDestroy, Input} from '@angular/core';
import { SelectedElement } from './shared/shared.service'

@Component({
    selector: "units-menu",
    templateUrl: "./html/unitsButton.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']

})
export class UnitsButtonComponent{
    selectedUnit : String = 'px';
    subscription : any;
    ref: any;
    constructor(private selectedElement: SelectedElement){}
    @Input('refPath')
    set Value(val: any){
        this.ref = val;
    } 
    @Output() response : EventEmitter<any> = new EventEmitter();
    ngOnInit(){
        this.subscription = this.selectedElement.getSelectedEleEmitter().subscribe(() => this.changed())
    }
    changed(){
        try{
        var path: any = this.selectedElement.getElement();
        for(var i=0;i<this.ref.length;i++){
            path = path[this.ref[i]];
        }
        this.selectedUnit = path.replace(/[0-9]/g, '');
        }catch(err){
            this.selectedUnit = 'px';
        }
        if(this.selectedUnit == '' || this.selectedUnit == undefined){
            this.selectedUnit = 'px';
        }
    }

    onchange(unit: string){
        this.selectedUnit = unit
        var evt: any={};
        evt.statusCode = 2;
        evt.response = unit;
        this.response.next(evt);
    }
    units = ["px",
                     "%",
                     "em",
                     "ex",
                     "cm",
                     "mm",
                     "in",
                     "pt",
                     "pc",
                     "ch",
                     "rem",
                     "vw",
                     "vh",
                     "vmin",
                     "vmax"]
}