import { Component,Output, EventEmitter } from '@angular/core';
@Component({
    selector: "colorpicker",
    templateUrl: "./html/colorPicker.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
  
})
export class ColorPickerComponent{

    @Output() response :EventEmitter<any> = new EventEmitter();
    selectedColorOption:string = 'Palettes'
    selectedColor: string;

    okStatus(){
        var evt: any = {};
        evt.statusCode = 0;
        evt.response = this.selectedColor;
        this.response.next(evt);
        this.selectedColorOption = 'Palettes'
    }

    cancelStatus(){
        var evt: any = {};
        evt.statusCode = 1;
        this.response.next(evt);
        this.selectedColorOption = 'Palettes'
    }
    processResponse(evt: any){
        if(evt.statusCode==0){
           this.selectedColor = evt.response;
           this.okStatus();
        }else{
            this.cancelStatus();
        }
    }

    onSelect(palette : string) : void{
        this.selectedColor = palette;
    }

    palettesStore = [
        [
        '#FFFFFF',
        '#EEEEEE',
        '#DDDDDD',
        '#CCCCCC',
        '#AAAAAA',
        '#999999',
        '#777777',
        '#666666',
        '#555555',
        '#333333',
        '#111111',
        '#000000'
        ],
        [
        '#FFD8D8',
        '#FFA5A5',
        '#FF7F7F',
        '#FF3F3F',
        '#FF0C0C',
        '#FF0000',
        '#DD0000',
        '#BB0000',
        '#990000',
        '#770000',
        '#550000',
        '#330000'
        ],
        [
        '#D8FFD8',
        '#A5FFA5',
        '#7FFF7F',
        '#3FFF3F',
        '#0CFF0C',
        '#00FF00',
        '#00DD00',
        '#00BB00',
        '#009900',
        '#007700',
        '#005500',
        '#003300'
        ],
        [
        '#D8D8FF',
        '#A5A5FF',
        '#7F7FFF',
        '#3F3FFF',
        '#0C0CFF',
        '#0000FF',
        '#0000DD',
        '#0000BB',
        '#000099',
        '#000077',
        '#000055',
        '#000033'
        ],
        [
        '#FFFFD8',
        '#FFFFA5',
        '#FFFF7F',
        '#FFFF3F',
        '#FFFF0C',
        '#FFFF00',
        '#DDDD00',
        '#BBBB00',
        '#999900',
        '#777700',
        '#555500',
        '#333300'
        ],
        [
        '#FFD8FF',
        '#FFA5FF',
        '#FF7FFF',
        '#FF3FFF',
        '#FF0CFF',
        '#FF00FF',
        '#DD00DD',
        '#BB00BB',
        '#990099',
        '#770077',
        '#550055',
        '#330033'
        ],
        [
        '#D8FFFF',
        '#A5FFFF',
        '#7FFFFF',
        '#3FFFFF',
        '#0CFFFF',
        '#00FFFF',
        '#00DDDD',
        '#00BBBB',
        '#009999',
        '#007777',
        '#005555',
        '#003333'
        ],
        
    ];

    webColors: string[] = ['#FFFFFF',
        '#C0C0C0',
        '#808080',
        '#000000',
        '#FF0000',
        '#800000',
        '#FFFF00',
        '#808000',
        '#00FF00',
        '#008000',
        '#00FFFF',
        '#008080',
        '#0000FF',
        '#000080',
        '#FF00FF',
        '#800080'
    ]
        

}