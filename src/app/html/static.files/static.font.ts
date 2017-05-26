import { Component, Input} from '@angular/core';
import { Services } from '../../shared/shared.services2';
@Component({
    selector: "textstyle-font",
    templateUrl: "./textStyles/static.font.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
  
})
export class StaticFontComponent{

    selectedFont: string[] = ["Font",""];

    @Input() selectedEle : any;
    subscription: any;
    fontSize: string;
    fontFamily: string = "";
    selRng: any = [];

     constructor(private services: Services){}

    ngOnInit(){
        this.subscription = this.selectedEle.getTextEleEmitter()
      .subscribe((item: any) => this.changed(item));
      this.subscription = this.selectedEle.getSelectedEleEmitter()
      .subscribe(() => this.changedElement());
      this.changedElement();
    }
    changedElement(){
        try{
        var ele = this.selectedEle.getElement();
        this.fontFamily = (ele.style.fontFamily).trim();
        }catch(err){}
    }
    changed(item: any){
        this.fontSize = "";
        this.fontFamily = "";
        while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
           if(this.fontSize == null || this.fontSize == ""){
               try{
            this.fontSize = ((item.style.fontSize).trim()).match(/\d/g).join("");
               }catch(err){
                   this.fontSize = "";
               }
           }
           if(this.fontFamily == ""){
            this.fontFamily = (item.style.fontFamily).trim();
            try{
                this.selectedFont = [(this.fontFamily.split(",")[0]).replace(/"/g,""),this.fontFamily.split(",")[1]];
            }catch(err){
                this.selectedFont = ["Font",""];
            }
           }
            item = item.parentElement;
        }
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    updateFontFamily(font: any){
        this.selectedFont = font;
        var ele = this.selectedEle.getElement();
        this.fontFamily = "";
        try{
        for(var i=0;i<this.selRng.length;i++){
            var item = this.selRng[i].dom;
            this.selRng[i].dom.innerHTML = this.selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
            if(this.selRng[i].text != ""){
                if(item.style.fontFamily != ""){
                    this.fontFamily = this.selectedFont[0]+','+ this.selectedFont[1];
                    this.selRng[i].dom.innerHTML = "<span class='selectParent'>"+(this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start)+"</span>" + "<span class='selectParent'>"+this.selRng[i].text+"</span>"+"<span class='selectParent'>"+ (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length)+"</span>";
                    this.services.separateStyles(item,'fontFamily','',item.style.fontFamily);
                    this.selRng[i].dom.children[1].style.fontFamily=this.fontFamily;
                    break;
                }
            }else{
                break;
            }
                item = item.parentElement;
            }
            if(this.fontFamily == ""){
                this.selRng[i].dom.innerHTML = "<span class='selectParent'>"+(this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start)+"</span>" + "<span class='selectParent'>"+this.selRng[i].text+"</span>"+"<span class='selectParent'>"+ (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length)+"</span>";
                this.fontFamily = this.selectedFont[0]+','+ this.selectedFont[1];
                this.selRng[i].dom.children[1].style.fontFamily=this.fontFamily;
            }
        }
        }catch(err){

        }
        this.selRng = [];
    }

    updateFontSize(){
        var ele = this.selectedEle.getElement();
        try{
        for(var i=0;i<this.selRng.length;i++){
            var item = this.selRng[i].dom;
            this.selRng[i].dom.innerHTML = this.selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while(item.tagName=="SPAN" || item.tagName=="span" || item.tagName=="Span"){
            if(this.selRng[i].text != ""){
                if(item.style.fontSize != ""){
                    this.selRng[i].dom.innerHTML = "<span class='selectParent'>"+(this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start)+"</span>" + "<span class='selectParent'>"+this.selRng[i].text+"</span>"+"<span class='selectParent'>"+ (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length)+"</span>";
                    this.services.separateStyles(item,'fontSize','',item.style.fontSize);
                    this.selRng[i].dom.children[1].style.fontSize=this.fontSize+'px';
                    break;
                }
            }else{
                break;
            }
                item = item.parentElement;
            }
        }
        }catch(err){

        }
        this.selRng = [];
    }

    fetchSelectedRange(){
        this.selRng = this.services.selectedRange(this.selectedEle.getElement());
    }
    
    serifFonts = [['Alegreya','serif'],
                    ['Arvo','serif'],
                    ['Brawler','serif'],
                    ['Cinzel','serif'],
                    ['Cormorant Garamond','serif'],
                    ['Crimson Text','serif'],
                    ['EB Garamond','serif'],
                    ['Gilda Display','serif'],
                    ['Lora','serif'],
                    ['Noto Serif','serif'],
                    ['Playfair Display','serif'],
                    ['Playfair Display SC','serif'],
                    ['Radley','serif'],
                    ['Slabo 27px','serif'],
                    ['Ultra','serif']];

              sansSerifFonts = [['Abel','sans-serif'],
                                ['Acme','sans-serif'],
                                ['Anton','sans-serif'],
                                ['Cuprum','sans-serif'],
                                ['Exo','sans-serif'],
                                ['Fjalla One','sans-serif'],
                                ['Lato','sans-serif'],
                                ['Maven Pro','sans-serif'],
                                ['Miriam Libre','sans-serif'],
                                ['Open Sans','sans-serif'],
                                ['Open Sans Condensed:300','sans-serif'],
                                ['Quicksand','sans-serif'],
                                ['Roboto','sans-serif'],
                                ['Source Sans Pro','sans-serif'],
                                ['Yanone Kaffeesatz','sans-serif']];


                displayFonts = [['Abril Fatface','cursive'],
                                ['Chonburi','cursive'],
                                ['Erica One','cursive'],
                                ['Forum','cursive'],
                                ['Fredoka One','cursive'],
                                ['Kranky','cursive'],
                                ['Life Savers','cursive'],
                                ['Lobster','cursive'],
                                ['Lobster Two','cursive'],
                                ['Love Ya Like A Sister','cursive'],
                                ['Oleo Script','cursive'],
                                ['Patua One','cursive'],
                                ['Poiret One','cursive'],
                                ['Righteous','cursive'],
                                ['Special Elite','cursive']];
                
                handwritingFonts = [['Alex Brush','cursive'],
                                    ['Clicker Script','cursive'],
                                    ['Cookie','cursive'],
                                    ['Dancing Script','cursive'],
                                    ['Gloria Hallelujah','cursive'],
                                    ['Great Vibes','cursive'],
                                    ['Indie Flower','cursive'],
                                    ['Kaushan Script','cursive'],
                                    ['Pacifico','cursive'],
                                    ['Pinyon Script','cursive'],
                                    ['Qwigley','cursive'],
                                    ['Reenie Beanie','cursive'],
                                    ['Satisfy','cursive'],
                                    ['Tangerine','cursive'],
                                    ['Yellowtail','cursive']];

                monospaceFonts = [['Anonymous Pro','monospace'],
                                    ['Cousine','monospace'],
                                    ['Cutive Mono','monospace'],
                                    ['Droid Sans Mono','monospace'],
                                    ['Fira Mono','monospace'],
                                    ['Inconsolata','monospace'],
                                    ['Nova Mono','monospace'],
                                    ['Overpass Mono','monospace'],
                                    ['Oxygen Mono','monospace'],
                                    ['PT Mono','monospace'],
                                    ['Roboto Mono','monospace'],
                                    ['Share Tech Mono','monospace'],
                                    ['Source Code Pro','monospace'],
                                    ['Space Mono','monospace'],
                                    ['Ubuntu Mono','monospace'],
                                    ['VT323','monospace']];

}