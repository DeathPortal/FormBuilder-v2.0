import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Services } from '../../shared/shared.services2'
@Component({
    selector: "textstyle1-style",
    templateUrl: "./textStyles/static.textstyle1.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
        host: {
    '(window:resize)': 'onResize($event)'
    },
  
})
export class StaticTextStyle1Component implements OnInit, OnDestroy{
    @Input() selectedEle : any;
    subscription: any;
    bold: string = "";
    italic: string = "";
    underline : string = "";
    eleSubscription: any;
    windowSize: any;
    constructor(private services: Services){}
     onResize(event:any) {
         this.windowSize = event.target.innerWidth;
    }
    ngOnInit(){
        this.subscription = this.selectedEle.getTextEleEmitter()
      .subscribe((item: any) => this.changed(item));
      this.eleSubscription = this.selectedEle.getSelectedEleEmitter()
      .subscribe(() => this.changedElement());
      this.windowSize = window.innerWidth;
      this.changedElement();
    }
    changedElement(){
        try{
        var ele = this.selectedEle.getElement();
        this.bold = (ele.style.fontWeight).trim();
        this.italic = (ele.style.fontStyle).trim();
        this.underline = (ele.style.textDecoration).trim();
        }catch(err){}
    }
    changed(item: any){
        this.bold = "";
        this.italic = "";
        this.underline = "";
        while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
           if(this.bold == ""){
            this.bold = (item.style.fontWeight).trim();
           }
           if(this.italic == ""){
            this.italic = (item.style.fontStyle).trim();
           }
           if(this.underline == ""){
            this.underline = (item.style.textDecoration).trim();
           }
            item = item.parentElement;
        }
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
        this.eleSubscription.unsubscribe();
    }

    
    boldToggle(){
        var ele = this.selectedEle.getElement();
        var selRng: any = this.services.selectedRange(ele);
        if(selRng.length <=0 || (selRng.length ==1 && selRng[0].text=="")){
            if(this.selectedEle.getElement().style.fontWeight == "bold")
            {
                this.selectedEle.getElement().style.fontWeight = "";
                this.bold = "";
            }else{
                this.selectedEle.getElement().style.fontWeight = "bold";
                this.bold = "bold"
            }
        }
        
        for(var i=0;i<selRng.length;i++){
            var item = selRng[i].dom;
            var boldType="";
            selRng[i].dom.innerHTML = selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
            if(selRng[i].text != ""){
                if(item.style.fontWeight == "bold"){
                    boldType = "bold";
                    this.bold = "normal";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='font-weight: normal;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                    this.services.separateStyles(item,'fontWeight','','bold');
                    selRng[i].dom.children[1].style.fontWeight="normal";
                    break;
                }else if(item.style.fontWeight == "normal"){
                    boldType = "normal";
                    this.bold = "bold";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='font-weight: bold;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                    break;
                }
            }else{
                break;
            }
                item = item.parentElement;
            }
            if(boldType == "" && selRng[i].text != ""){
                this.bold = "bold";
                selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='font-weight: bold;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
            }
        }
        
     }

     underlineToggle(){
         var ele = this.selectedEle.getElement();
        var selRng: any = this.services.selectedRange(ele);
        if(selRng.length <=0 || (selRng.length ==1 && selRng[0].text=="")){
            if(this.selectedEle.getElement().style.textDecoration == "underline")
            {
                this.selectedEle.getElement().style.textDecoration = "";
                this.underline = "";
            }else{
                this.selectedEle.getElement().style.textDecoration = "underline";
                this.underline = "underline";
            }
        }
        for(var i=0;i<selRng.length;i++){
            var item = selRng[i].dom;
            var underlineType="";
            selRng[i].dom.innerHTML = selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
            if(selRng[i].text != ""){
                if(item.style.textDecoration == "underline"){
                    underlineType = "underline";
                    this.underline = "none";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='text-decoration: none ;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                    this.services.separateStyles(item,'textDecoration','none','underline');
                     selRng[i].dom.children[1].style.textDecoration="none";
                    break;
                }else  if(item.style.textDecoration == "none"){
                    underlineType = "none";
                    this.underline = "underline";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='text-decoration: underline;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                }
                }else{
                    break;
                }
                item = item.parentElement;
            }
                if(underlineType == "" && selRng[i].text != ""){
                    this.underline = "underline";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='text-decoration: underline;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                }
        }
        
     }

     italicToggle(){
        var ele = this.selectedEle.getElement();
        var selRng: any = this.services.selectedRange(ele);
        if(selRng.length <=0 || (selRng.length ==1 && selRng[0].text=="")){
            if(this.selectedEle.getElement().style.fontStyle == "italic")
            {
                this.selectedEle.getElement().style.fontStyle = "";
                this.italic = "";
            }else{
                this.selectedEle.getElement().style.fontStyle = "italic";
                this.italic = "italic";
            }
        }
        for(var i=0;i<selRng.length;i++){
            var item = selRng[i].dom;
            var italicType="";
            selRng[i].dom.innerHTML = selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
                
            if(selRng[i].text != ""){
                if(item.style.fontStyle == "italic"){
                    italicType = "italic";
                    this.italic = "normal";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='font-style: normal;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                    this.services.separateStyles(item,'fontStyle','','italic');
                     selRng[i].dom.children[1].style.fontStyle="normal";
                    break;
                }else if(item.style.fontStyle == "normal"){
                    italicType = "normal";
                    this.italic = "italic";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='font-style: italic;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                    break;
                }
            }else{
                break;
            }
                item = item.parentElement;
            }
                if(italicType == "" && selRng[i].text != ""){
                    this.italic = "italic";
                    selRng[i].dom.innerHTML = "<span class='selectParent'>"+(selRng[i].dom.innerHTML).substr(0, selRng[i].start)+"</span>" + "<span class='selectParent' style='font-style: italic;'>"+selRng[i].text+"</span>"+"<span class='selectParent'>"+ (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length)+"</span>";
                }
        }
        
     }

}