import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class SharedVariable{
    selectedEle: any;
    evt : EventEmitter<any> = new EventEmitter();
    myWindow : any = null;
    updateStyles(){
        this.evt.emit(this.selectedEle);
    }

    getSelectedEleEmitter(){
        return this.evt;
    }

}