import { Component, Input, OnInit, OnDestroy} from '@angular/core';
@Component({
    selector: "vertical-alignment",
    templateUrl: "./alignment/static.vertical.alignment.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
    },
  
})
export class StaticVerticalAlignmentComponent{
    subscription: any;
    align: string ="";
    windowSize: any;
    @Input() selectedEle: any;
    verticalAlign(align: any){
        if(this.selectedEle.getElement().tagName == "DIV"){
        if(this.align != ""){
            var html = this.selectedEle.getElement().children[0];
            var tempDiv = document.createElement('div');
             while(html.children.length > 0){
                tempDiv.appendChild(html.children[0]);
            }
            while(this.selectedEle.getElement().children.length > 1){
                tempDiv.appendChild(this.selectedEle.getElement().children[1]);
            }
            this.selectedEle.getElement().innerHTML = "";
            while(tempDiv.childNodes.length > 0){
                 this.selectedEle.getElement().appendChild(tempDiv.childNodes[0]);
            }
        }
        if(this.align == align){
            this.selectedEle.getElement().style.display = "";
            this.selectedEle.getElement().style.alignItems = "";
            this.align = "";
        }else{
            this.selectedEle.getElement().style.display = "flex";
            var div = document.createElement('div');
            div.style.width = "100%";
            while(this.selectedEle.getElement().childNodes.length > 0){
                div.appendChild(this.selectedEle.getElement().childNodes[0]);
            }
            this.selectedEle.getElement().innerHTML = "";
            this.selectedEle.getElement().appendChild(div);
            this.selectedEle.getElement().style.alignItems = align;
            this.align = align;
        }
        }else{
            alert("Please select a div tag");
        }
    }

    onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }

     ngOnInit(){
        this.subscription = this.selectedEle.getSelectedEleEmitter()
      .subscribe(() => this.changed());
      this.changed();
      this.windowSize = window.innerWidth;
    }

    changed(){
        try{
        this.align = this.selectedEle.getElement().style.alignItems;
        }catch(err){}
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}