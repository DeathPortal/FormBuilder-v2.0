import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Services } from '../../shared/shared.services2'
@Component({
    selector: "textstyle2-style",
    templateUrl: "./textStyles/static.textStyle2.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
        host: {
    '(window:resize)': 'onResize($event)'
    },
  
})
export class StaticTextStyle2Component implements OnInit{
    marker = false;
    colorPicker2 = false;
    status2 = false;
    color: string = "";
    selRng: any = [];
    windowSize: any;
    constructor(private services: Services){}
     onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }
    ngOnInit(){
      this.windowSize = window.innerWidth;
    }

    fetchSelectedRange(){
        this.selRng = this.services.selectedRange(this.selectedEle.getElement());
    }
    processMarkerResponse(evt: any){
        this.marker = false;
        this.updateMarker(evt.response)
    }
    updateMarker(color: any){
        var ele = this.selectedEle.getElement();
        var colorPicked = false;
        for(var i=0;i<this.selRng.length;i++){
            var item = this.selRng[i].dom;
            this.selRng[i].dom.innerHTML = this.selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
            if(this.selRng[i].text != ""){
                if(item.style.background != ""){
                    this.selRng[i].dom.innerHTML = "<span class='selectParent'>"+(this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start)+"</span>" + "<span class='selectParent'>"+this.selRng[i].text+"</span>"+"<span class='selectParent'>"+ (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length)+"</span>";
                    this.services.separateStyles(item,'background','',item.style.background);
                     this.selRng[i].dom.children[1].style.background=color;
                    colorPicked = true;
                    break;
                }
                }else{
                    break;
                }
                item = item.parentElement;
            }
                if(!colorPicked){
                    this.selRng[i].dom.innerHTML = "<span class='selectParent'>"+(this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start)+"</span>" + "<span class='selectParent' style='background: "+color+";'>"+this.selRng[i].text+"</span>"+"<span class='selectParent'>"+ (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length)+"</span>";
                }
        }
        this.selRng = [];
    }
    processColorResponse(evt:any){
        if(evt.statusCode==0){
            this.colorPicker2 = false;
            this.color = evt.response;
            this.updateTextColor();
            this.status2 = true;
        }else{
            this.colorPicker2 = false;
            this.selRng = [];
        }
    }
    updateTextColor(){
         var ele = this.selectedEle.getElement();
         if(this.selRng.length <=0 || (this.selRng.length ==1 && this.selRng[0].text=="")){
             this.selectedEle.getElement().style.color = this.color;
         }
            
        var colorPicked = false;
            for(var i=0;i<this.selRng.length;i++){
                var item = this.selRng[i].dom;
                var underlineType="";
                this.selRng[i].dom.innerHTML = this.selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
                while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
                if(this.selRng[i].text != ""){
                    if(item.style.color != ""){
                        this.selRng[i].dom.innerHTML = "<span class='selectParent'>"+(this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start)+"</span>" + "<span class='selectParent'>"+this.selRng[i].text+"</span>"+"<span class='selectParent'>"+ (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length)+"</span>";
                        this.services.separateStyles(item,'color','',item.style.color);
                        this.selRng[i].dom.children[1].style.color=this.color;
                        colorPicked = true;
                        break;
                    }
                    }else{
                        break;
                    }
                    item = item.parentElement;
                }
                    if(!colorPicked){
                        this.selRng[i].dom.innerHTML = "<span class='selectParent'>"+(this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start)+"</span>" + "<span class='selectParent' style='color: "+this.color+";'>"+this.selRng[i].text+"</span>"+"<span class='selectParent'>"+ (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length)+"</span>";
                    }
            }
        
         
        this.selRng = [];
    }
    response : EventEmitter<any> = new EventEmitter();
    selectedEle: any;
    ref : any;
    @Input('selectedEle') 
    set selectedElement(val : any){
        this.selectedEle = val;
    }
    bgcolor : string = "#FFF";
     // change after update
    colorPicker: boolean = false;
    status: boolean = false;
    processResponse(evt:any){
        if(evt.statusCode==0){
            this.colorPicker = false;
            this.bgcolor = evt.response;
            this.selectedEle.getElement().style.background = this.bgcolor;
            this.status = true;
        }
    }
    openColorPicker(){
        if(this.status==false){
        this.colorPicker = true;
        }else{
            this.colorPicker = false;
            this.status = false;
        }
    }
    
}