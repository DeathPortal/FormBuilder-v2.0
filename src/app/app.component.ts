import { Component, OnInit } from '@angular/core';
import { SelectedElement } from './shared/shared.service'
@Component({
  selector: 'my-app',
  template: `<top-menu style="position:fixed; top:0px; left:0px; z-index:99; width: 100%; background: #FFF;"></top-menu>
              <div *ngIf = "windowWidth >= 1050" class="col-2" style="position: fixed; top: 170px; left: 0px; z-index: 90;" ><components-menu></components-menu></div>
              <div [style.top] = "offset+'px'" [style.height]="(windowHeight-offset)+'px'" [style.height]="(windowHeight-170)+'px'" class="row _scrollBar" style="position:absolute; top:170px; left:0px; width: 100%; overflow-y:scroll; margin: 0;">
                <div *ngIf = "windowWidth >= 1050" class="col-2"></div>
                <div [ngClass]="windowWidth >= 1050?'col-10': 'col-12'" [style.paddingLeft] = "windowWidth >= 1000?'': '30px'"><form-canvas id="_form-canvas" (response) = "processResponse($event);">{{data}}</form-canvas></div>
              </div>
              <div *ngIf = "windowWidth < 1050" [style.top] = "offset+'px'" style="position: fixed; top: 170px; left: -245px; z-index: 90; width: 270px;">
                <div style="position: relative; width: 230px; display: inline-block; top:0px; z-index:1;" ><components-menu></components-menu></div>
                <button (click) = "toggleComponents($event);" id="_componentsButton" style="position: relative; z-index:0; width: 25px; height: 70px; top: 30px; right:-10px; display: inline-block; padding:0px; text-align: center;">
                  <span class="fa fa-caret-right" style="width:100%;"></span>
                </button>
              </div>
              <div (click)="deleteElement();" style="position: fixed;bottom: 20px;right: 20px;z-index: 99;background-image: url('/app/img/delete.png');width: 64px;background-size: cover;height: 64px;">
              </div>
              <modal-component></modal-component>

      `,
  styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
  host: {
    '(window:resize)': 'onResize($event)'
}
})
export class AppComponent implements OnInit { 
  name = 'Angular';
  windowHeight: number;
  windowWidth: number;
  offset: number;
  target: any;
  data: any;
  processResponse(evt: any){
    if(evt.statusCode == 0){
      this.toggleComponents(this.target);
    }
  }
  constructor(private selectedEle:SelectedElement){};
  deleteElement(){
    try{
    this.selectedEle.getElement().parentElement.removeChild(this.selectedEle.getElement());
    this.selectedEle.selectedElement = null;
    }catch(err){
      
    }
  }
  ngOnInit(){
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    if(this.windowWidth >500){
      this.offset = 170;
    }else{
      this.offset = 60;
    }
  }
  onResize(event: any){
    this.windowWidth = event.target.innerWidth;
    if(this.windowWidth >= 1000){
    }
    if(this.windowWidth >500){
      this.offset = 170;
    }else{
      this.offset = 60;
    }
  }

  toggleComponents(event: any){
    this.target = event;
    try{
    var clss = event.target.children[0].getAttribute('class');
    if(clss == "fa fa-caret-right"){
      event.target.children[0].setAttribute('class','fa fa-caret-left');
      $(event.target.parentElement).animate({left: '0px'});
    }else{
      event.target.children[0].setAttribute('class','fa fa-caret-right');
      $(event.target.parentElement).animate({left: '-245px'});
    }
    }catch(err){
      var clss = event.target.getAttribute('class');
    if(clss == "fa fa-caret-right"){
      event.target.setAttribute('class','fa fa-caret-left');
      $(event.target.parentElement.parentElement).animate({left: '0px'});
    }else{
      event.target.setAttribute('class','fa fa-caret-right');
      $(event.target.parentElement.parentElement).animate({left: '-245px'});
    }
    }
    
  }
 }
