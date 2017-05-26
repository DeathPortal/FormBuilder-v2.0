import { Injectable, HostListener } from '@angular/core';

function _window() : any {
   // return the global native browser window object
   return window;
}

@Injectable()
export class WindowRef {
    windowSize : number;
   get getWindowSize() : number {
       if(typeof this.windowSize == 'undefined'){
            this.windowSize = this.nativeWindow.innerWidth;
            console.log(this.windowSize);
       }
      return this.windowSize;
   }
   @HostListener('window:resize', ['$event'])
  onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }

    get nativeWindow() : any {
      return _window();
   }
}