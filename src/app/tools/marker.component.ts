import { Component, Output, EventEmitter} from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

export class RGB{
    r: number;
    g:number;
    b:number;
}

@Component({
    selector: "marker-color",
    templateUrl: "./html/marker.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
})
export class MarkerComponent{
    @Output() response: EventEmitter<any> = new  EventEmitter();
    sendMarker(color: any){
        var evt: any = {};
        evt.statusCode = 0;
        evt.response = color;
        this.response.next(evt);
    }
    markerColors = [
        ['FFFF00',
        '00FF00',
        '00FFFF',
        'FF00FF',
        '0000FF',],
        ['FF0000',
        '000080',
        '008080',
        '008000',
        '800080',],
        ['800000',
        '808000',
        '808080',
        'C0C0C0',
        '000000']
    ];
}