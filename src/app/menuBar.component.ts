import { Component, OnInit, OnDestroy} from '@angular/core';
import { WindowRef } from './services/window.Service';
import { SelectedElement } from './shared/shared.service';
@Component({
    selector: "top-menu",
    templateUrl: "./html/menuBar.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
    },
providers:[WindowRef]

})
export class MenuBarComponent implements OnInit, OnDestroy{
    menu: string = "Alignment";
    showFontFamily: boolean = false;
    windowSize : number;
    subscription: any;
    attrcols: any;
    stylecols: any;
 constructor(private winRef: WindowRef, private selectedEle: SelectedElement) {
       this.windowSize =   winRef.nativeWindow.innerWidth;
    }
    processResponse(event:any){
        
    }
        onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }
    menuType : String = 'menu';
    changeMenu(type:string) : void
    {
        this.menuType = type;
    }

     ngOnInit(){
        this.subscription = this.selectedEle.getSelectedEleEmitter().subscribe(()=>this.changed());
    }
    changed(){ 
        try{ 
     var acols = this.selectedEle.getElement().attributes.length;
     this.attrcols = acols/2 + acols%2 +2;
        }catch(err){this.attrcols = 2;}
    try{ 
    var scols = (this.selectedEle.getElement().getAttribute('style')).split(';').length;
     this.stylecols = scols/2 + scols%2 +2;
     }catch(err){ this.stylecols = 2;}
}
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
