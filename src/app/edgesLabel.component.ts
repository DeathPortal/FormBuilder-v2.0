import { Component, Input, OnInit} from '@angular/core';
import { WindowRef } from './services/window.service'

@Component({
    selector: "edge-label",
    templateUrl: "./html/edgesLabel.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
    }
  
})
export class EdgesLabelComponent implements OnInit{
    @Input() label: string[];
    displayLabel : string;
    windowSize: number;
    constructor(private winRef: WindowRef) {
        // getting the native window obj
       this.windowSize =   winRef.nativeWindow.innerWidth;
    }
        onResize(event : any) {
         this.windowSize = event.target.innerWidth;
         if(this.windowSize > 1500){
            this.displayLabel = this.label[0];
        }else if(this.windowSize < 1500 && this.windowSize > 1400){
            this.displayLabel = this.label[1];
        }else
        {
            this.displayLabel = this.label[2];
        }
    }
    ngOnInit(): void{
        if(this.windowSize > 1500){
            this.displayLabel = this.label[0];
        }else if(this.windowSize < 1500 && this.windowSize > 1400){
            this.displayLabel = this.label[1];
        }else
        {
            this.displayLabel = this.label[2];
        }
    }
}