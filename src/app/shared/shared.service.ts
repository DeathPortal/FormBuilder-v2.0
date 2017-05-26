import { Injectable, EventEmitter } from '@angular/core';
import { SharedVariable } from '../tools/shared/shared.variable';
import { CSSProp } from './css.prop';
@Injectable()
export class SelectedElement {
   selectedElement : any = document.createElement('div');
   previousElement: any;
   textTimer: any;
   touched: EventEmitter<any> = new EventEmitter();
   modal: EventEmitter<any> = new EventEmitter();
   constructor(private shared: SharedVariable, private css: CSSProp){
   }
   setElement(ele: any){
       if(ele.getAttribute('id')!='_domContainer'){
            if(ele.getAttribute('class')=='selectParent'){
                this.setElement(ele.parentElement);
            }
            else{
                
            this.previousElement = this.selectedElement;
            try{
                this.previousElement.setAttribute('class',this.previousElement.getAttribute('class').replace(/ drawBorder/g,''));
            }catch(err){}
            ele.setAttribute('class',ele.getAttribute('class')+' drawBorder');
            if(ele!=this.selectedElement){
            this.selectedElement = ele;
                this.setSetAttrs();
            this.shared.selectedEle = this.selectedElement;
            this.shared.updateStyles();
            this.updateStyles();
            }
            }
       }
   }

   getElement(): any{
      
       return this.selectedElement;
   }

   evt : EventEmitter<any> = new EventEmitter();
   textEmitter : EventEmitter<any> = new EventEmitter();
    updateStyles(){
        this.evt.emit();
    }

    getSelectedEleEmitter(){
        return this.evt;
    }

     getTextEleEmitter(){
        return this.textEmitter;
    }
    getIBeam(ele: any): number{
        var rng,startSel: any;
                        var sel: any = window.getSelection();
                        rng = sel.getRangeAt(0);
                            startSel = ele.compareDocumentPosition(rng.startContainer) === Node.DOCUMENT_POSITION_FOLLOWING ? 0 : rng.startOffset;
                            return startSel;
    }
    startTextTimer(){
        var e = this.selectedElement;
        var prev:number;
        var prevDom: any;
        var emitter = this.textEmitter;
        var _this = this;
        this.textTimer = setInterval(function(){
            try{
            var rng,startSel: any;
                     var sel: any = window.getSelection();
                        rng = sel.getRangeAt(0);
                            startSel = e.compareDocumentPosition(rng.startContainer) === Node.DOCUMENT_POSITION_FOLLOWING ? 0 : rng.startOffset;
                           if(prev != startSel || prevDom!=rng.startContainer.parentElement){
                               prev = startSel;
                               prevDom = rng.startContainer.parentElement;
                               emitter.next(rng.startContainer.parentElement);
                           }
            }catch(err){}
                    },500);
    }

    stopTextTimer(){
        clearInterval(this.textTimer);
    }

    touchEvent(evt: any){
        this.touched.emit(evt);
    }

    setSetAttrs(){
        this.setAttrs = [];
        try{
        var attrs = JSON.parse(JSON.stringify(this[this.selectedElement.getAttribute('attrtype')]));
        for (var i = 0, atts = this.selectedElement.attributes, n = atts.length, arr = []; i < n; i++){
             var filteredList = attrs.filter(function(ele: any){
            return ele.toLowerCase().indexOf(atts[i].nodeName.toLowerCase()) > -1;
        }.bind(this));
            if(filteredList.length > 0){
                this.setAttrs.push(atts[i]);
                attrs.splice(attrs.indexOf(atts[i].nodeName),1);
            }
        }
        }catch(err){}
        this.otherAttrs = attrs;
        this.setSetStyles();
    }

    setSetStyles(){
        this.setStyles = [];
        var otherStyles = JSON.parse(JSON.stringify(this.css.cssNames));
        try{
        var styles = (this.selectedElement.attributes['style'].nodeValue).split(';');
        for(var i=0;i<styles.length;i++){
            if(styles[i]!=""){
            var s = styles[i].split(':');
           var filteredList = otherStyles.filter(function(ele: any){
            return ele.toLowerCase().indexOf((s[0].trim()).toLowerCase()) > -1;
        }.bind(this));
            if(filteredList.length > 0){
                var style:any = {};
                style.name = s[0].trim();
                style.value = s[1].trim()
                this.setStyles.push(style);
                otherStyles.splice(otherStyles.indexOf(s[0].trim()),1);
            }
            }
        }
        }catch(err){}
        this.otherStyles = otherStyles;
    }

    setModal(evt: any){
        this.modal.emit(evt);
    }


    setStyles: any=[];
    otherStyles: any=[];
    setAttrs: any = [];
    otherAttrs: any = [];

div = [ 
'accesskey',
'align',
'class',
'contenteditable',
'contextmenu',
'dir' ,
'draggable',
'dropzone',
'hidden',
'id',
'lang',
'spellcheck',
'style',
'tabindex',
'title',
'translate',
 ]

img = [
    'accesskey',
'alt',
'class',
'contenteditable',
'contextmenu',
'crossorigin',
'dir',
'draggable',
'dropzone',
'height',
'hidden',
'id',
'ismap',
'lang',
'longdesc',
'sizes',
'spellcheck',
'src',
'srcset',
'style',
'tabindex',
'title',
'translate',
'usemap',
'width'];

input = [
'accept',
'accesskey',
'alt',
'autocomplete',
'autofocus',
'checked',
'class',
'contenteditable',
'contextmenu',
'dir',
'dirname',
'disabled',
'draggable',
'dropzone',
'form',
'formaction',
'formenctype',
'formmethod',
'formnovalidate',
'formtarget',
'height',
'hidden',
'id',
'lang',
'list',
'max',
'maxlength',
'min',
'multiple',
'name',
'pattern',
'placeholder',
'readonly',
'required',
'size',
'spellcheck',
'src',
'step',
'style',
'tabindex',
'title',
'translate',
'type',
'value',
'width',
]

button=[

'accesskey',
'autofocus',
'class',
'contenteditable',
'contextmenu',
'dir',
'disabled',
'draggable',
'dropzone',
'form',
'formaction',
'formenctype',
'formmethod',
'formnovalidate',
'formtarget',
'framenamename',
'hidden',
'id',
'lang',
'spellcheck',
'style',
'tabindex',
'title',
'translate',
'type',
'value'
]

select = [
    'accesskey',
'autofocus',
'class',
'contenteditable',
'contextmenu',
'dir',
'disabled',
'draggable',
'dropzone',
'form',
'hidden',
'id',
'lang',
'name',
'required',
'size',
'spellcheck',
'style',
'tabindex',
'title',
'translate',
 
]


global = ['accesskey',
'class',
'contenteditable',
'contextmenu',
'dir',
'draggable',
'dropzone',
'hidden',
'id',
'lang',
'spellcheck',
'style',
'tabindex',
'title',
'translate',
]

}