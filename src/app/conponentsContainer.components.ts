import { Component} from '@angular/core';
import { WindowRef } from './services/window.service';
@Component({
    selector: "components-menu",
    templateUrl: "./html/componentsContainer.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
    }

})
export class ComponentsContainerComponent{
    windowWidth : number;
    windowHeight : number;
    showMargin : boolean = false;
    showPadding : boolean = false;
    offset: number;
 constructor( private winRef: WindowRef) {
        // getting the native window obj
       this.windowWidth =   winRef.nativeWindow.innerWidth;
       this.windowHeight =   winRef.nativeWindow.innerHeight;
        if(this.windowWidth >500){
      this.offset = 170;
    }else{
      this.offset = 60;
    }
    }
        onResize(event:any) {
         this.windowWidth = event.target.innerWidth;
         this.windowHeight = event.target.innerHeight;
          if(this.windowWidth >500){
      this.offset = 170;
    }else{
      this.offset = 60;
    }
    }

}