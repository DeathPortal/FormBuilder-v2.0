import { Component} from '@angular/core';
import { WindowRef } from './services/window.service';
import { SelectedElement } from './shared/shared.service'
@Component({
    selector: "layout-menu",
    templateUrl: "./html/layout.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
    }

})
export class LayoutComponent{
    windowSize : number;
    showMargin : boolean = false;
    showPadding : boolean = false;
 constructor( private winRef: WindowRef, private selectedEle : SelectedElement) {
        // getting the native window obj
       this.windowSize =   winRef.nativeWindow.innerWidth;
    }
        onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }

}
