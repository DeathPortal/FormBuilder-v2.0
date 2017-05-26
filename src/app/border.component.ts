import { Component } from '@angular/core';
import { WindowRef } from './services/window.service';
import { SelectedElement } from './shared/shared.service'
@Component({
    selector: "border-menu",
    templateUrl: "./html/border.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
    }

})
export class BorderComponent{
    showBorder: boolean = false;
    showBorderRadius: boolean = false;
    

windowSize : number;
 constructor(private winRef: WindowRef, private selectedEle : SelectedElement) {
        this.windowSize =   winRef.nativeWindow.innerWidth;
    }
        onResize(event : any) {
         this.windowSize = event.target.innerWidth;
    }


}
