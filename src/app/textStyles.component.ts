import { Component} from '@angular/core';
import { WindowRef } from './services/window.service';
import { SelectedElement } from './shared/shared.service';

@Component({
    selector: "textStyles-menu",
    templateUrl: "./html/textStyles.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
    }

})
export class TextStylesComponent{
     windowSize : number;
 constructor(private winRef: WindowRef, private selectedEle : SelectedElement) {
       this.windowSize =   winRef.nativeWindow.innerWidth;
    }
        onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }

    
}
