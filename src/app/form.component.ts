import { Component, ElementRef, OnInit, OnDestroy, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { WindowRef } from './services/window.service';
import { SelectedElement } from './shared/shared.service';
import { Services } from './shared/shared.services2';
import * as $ from 'jquery';
@Component({
    selector: "form-canvas",
    templateUrl: "./html/canvas/form.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css'],
    host: {
    '(window:resize)': 'onResize($event)'
},
encapsulation: ViewEncapsulation.None
})
export class FormCanvasComponent implements OnInit, OnDestroy{
    windowWidth : number;
    windowHeight : number;
    showMargin : boolean = false;
    showPadding : boolean = false;
    target: any;
    timer: any;
    height: number;
    subscription: any;
    modalSubsciption: any;
    @Output() response: EventEmitter<any> = new EventEmitter();
 constructor( private winRef: WindowRef, private selectedEle: SelectedElement, private services: Services) {
        // getting the native window obj
       this.windowWidth =   winRef.nativeWindow.clientWidth;
       this.windowHeight =   winRef.nativeWindow.clientHeight;
    }
        onResize(event:any) {
         this.windowWidth = event.target.clientWidth;
         this.windowHeight = this.documentHeight();
         this.height = this.documentHeight()+ 100;
    }

    processResponse(event: any){
        this.target = event.response.srcElement;
        this.processRequest(event.response.dataTransfer.getData('srcElement'));
    }

    documentHeight(): number {
        return (document.getElementById('_domContainer').parentElement.parentElement.parentElement.scrollHeight);
}

    processRequest(req : string){
        if(this.target.getAttribute('id') == "_domContainer" && req == "container_001"){
            var div:Element = document.createElement('div');
            div.setAttribute('class','row selectedEle ui-resizable');
            div.setAttribute('defClass','selectedEle ui-resizable');
            div.setAttribute('attrType','div');
            div.setAttribute('style','margin:0px; min-height:70px; background: white; padding: 10px; width: 100%; max-width:100%;');
            //div.setAttribute('(click)','echo();');
            this.ResizeEvent(div);
            this.updateView(div);
        }else if(this.target.getAttribute('id') == "_domContainer" && req != "container_001"){
            alert("Please add a container");
        }else{
            if(req.split('_')[0]== "text" && this.target.tagName!="SPAN"){
                     var span:any = document.createElement('span');
                        span.setAttribute('attrType','div');
                    if(req == "text_001"){
                        span.setAttribute('class','text selectedEle');
                        span.setAttribute('defClass','text selectedEle');
                        span.setAttribute('style','padding: 2px; font-size: 12px; background: none; width: 100%; display: inline-block;');
                        span.innerHTML = "Small Text";
                    }else if(req == "text_002"){
                        span.setAttribute('class','text selectedEle');
                        span.setAttribute('defClass','text selectedEle');
                        span.setAttribute('style','padding: 2px; font-size: 16px; background: none; width: 100%; display: inline-block;');
                        span.innerHTML = "Medium Text";
                    }else if(req == "text_003"){
                        span.setAttribute('class','text selectedEle');
                        span.setAttribute('style','padding: 2px; font-size: 20px; background: none; width: 100%; display: inline-block;');
                        span.setAttribute('defClass','text selectedEle');
                        span.innerHTML = "Large Text";
                        
                    }else if(req == "text_004"){
                        span.setAttribute('class','text selectedEle badge badge-default');
                        span.setAttribute('defClass','text selectedEle');
                        span.innerHTML = "Default";
                    }else if(req == "text_005"){
                        span.setAttribute('class','text selectedEle badge badge-primary');
                        span.setAttribute('defClass','text selectedEle');
                        span.innerHTML = "Primary";
                    }
                    else if(req == "text_006"){
                        span.setAttribute('class','text selectedEle badge badge-success');
                        span.setAttribute('defClass','text selectedEle');
                        span.innerHTML = "Success";
                    }
                    else if(req == "text_007"){
                        span.setAttribute('class','text selectedEle badge badge-info');
                        span.setAttribute('defClass','text selectedEle');
                        span.innerHTML = "Info";
                    }
                    else if(req == "text_008"){
                        span.setAttribute('class','text selectedEle badge badge-warning');
                        span.setAttribute('defClass','text selectedEle');
                        span.innerHTML = "Warning";
                    }else if(req == "text_009"){
                        span.setAttribute('class','text selectedEle badge badge-danger');
                        span.setAttribute('defClass','text selectedEle');
                        span.innerHTML = "Danger";
                    }
                    this.textEvents(span);
                    this.updateView(span);
            }
            else if(req.split('_')[0]== "split" && this.target.tagName!="SPAN"){
                    if(req == "split_001"){
                       if(this.target.tagName == "DIV"){
                           var dom:any = document.createElement("div");
                           dom.setAttribute("class","row")
                           dom.innerHTML = `<div class="col-4" style="text-align:right font-family:Arial; display:flex; align-items:center;"><span>Number of Columns</span></div>
                           <div class="col-4">
                            <input id="no_of_cols" class="form-control" type="number" value="1">
                           </div>`
                           var evt : any = {};
                           evt.statusCode = "split_001";
                           evt.dom = dom;
                           evt.header = "Columns"
                           evt.parentElement = this.target;
                           evt.selectedEle = this.selectedEle;
                           evt.okfunction = function(){
                               var val = parseInt((dom.children[1].children[0]).value);
                               var className = evt.parentElement.getAttribute("class").split(" ");
                               var flag = false;
                               for(var i=0;i<className.length;i++){
                                   if(className[i]=="row"){
                                    flag = true;
                                    break;
                                   }
                               }
                               if(flag){
                                   for(var i=0;i<val;i++){
                                        var div = document.createElement('div');
                                        div.setAttribute("class","col selectedEle");
                                        div.setAttribute('defClass','selectedEle');
                                        div.setAttribute('attrType','div');
                                        div.setAttribute('style','max-height:100%;');
                                        evt.parentElement.appendChild(div);
                                   }
                                   evt.selectedEle.setElement(evt.parentElement.lastChild);
                               }else{
                                   var row = document.createElement('div');
                                    row.setAttribute("class","row");
                                    row.setAttribute("style","padding:0px;");
                                    for(var i=0;i<val;i++){
                                        var div = document.createElement('div');
                                        div.setAttribute("class","col selectedEle");
                                        div.setAttribute('defClass','selectedEle');
                                        div.setAttribute('attrType','div');
                                        div.setAttribute('style','max-height:100%;');
                                        row.appendChild(div);
                                   }
                                   evt.selectedEle.setElement(row.lastChild);
                                   evt.parentElement.appendChild(row);
                               }
                           }
                           this.selectedEle.setModal(evt);
                       }
                    }else
                    if(req == "split_002"){
                       if(this.target.tagName == "DIV"){
                           var dom:any = document.createElement("div");
                           dom.setAttribute("class","row")
                           dom.innerHTML = `<div class="col-4" style="text-align:right font-family:Arial; display:flex; align-items:center;"><span>Number of Rows</span></div>
                           <div class="col-4">
                            <input id="no_of_rows" class="form-control" type="number" value="1">
                           </div>`
                           var evt : any = {};
                           evt.statusCode = "split_002";
                           evt.dom = dom;
                           evt.header = "Rows"
                           evt.parentElement = this.target;
                           evt.selectedEle = this.selectedEle;
                           evt.okfunction = function(){
                               var val = parseInt((dom.children[1].children[0]).value);
                               var className = evt.parentElement.getAttribute("class").split(" ");
                               var flag = false;
                               for(var i=0;i<className.length;i++){
                                   if(className[i]=="col"){
                                    flag = true;
                                    break;
                                   }
                               }
                               var height = 100/val;
                               if(flag){
                                   for(var i=0;i<val;i++){
                                        var div = document.createElement('div');
                                        div.setAttribute("class","row selectedEle");
                                        div.setAttribute('defClass','selectedEle');
                                        div.setAttribute('attrType','div');
                                        div.setAttribute('style',' height:'+height+'%;');
                                        evt.parentElement.appendChild(div);
                                   }
                                   evt.selectedEle.setElement(evt.parentElement.lastChild);
                               }else{
                                   var col = document.createElement('div');
                                    col.setAttribute("class","col");
                                    col.setAttribute('style',"padding:0px;")
                                    for(var i=0;i<val;i++){
                                        var div = document.createElement('div');
                                        div.setAttribute("class","row selectedEle");
                                        div.setAttribute('defClass','selectedEle');
                                        div.setAttribute('attrType','div');
                                        div.setAttribute('style','height:'+height+'%;');
                                        col.appendChild(div);
                                   }
                                   evt.selectedEle.setElement(col.lastChild);
                                   evt.parentElement.appendChild(col);
                               }
                           }
                           this.selectedEle.setModal(evt);
                       }
                    }
            }
            else if(req.split('_')[0]== "misc" && this.target.tagName!="SPAN"){
                    if(req == "misc_001"){
                        var img:any = document.createElement('img');
                        img.setAttribute('class','selectedEle');
                        img.setAttribute('defClass','selectedEle');
                        img.setAttribute('attrType','img');
                        img.setAttribute('src','/app/img/image-placeholder.gif');
                        img.setAttribute('style','width: 64px; height: 64px;');
                        this.ResizeEvent(img);
                        this.updateView(img);
                    }
            } else if(req.split('_')[0]== "input" && this.target.tagName!="SPAN"){
                    if(req == "input_001"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','text');
                        input.setAttribute('placeholder','Text');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_002"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','password');
                        input.setAttribute('placeholder','Password');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_003"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','number');
                        input.setAttribute('placeholder','Number');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_004"){
                        var input:any = document.createElement('input');
                        var wrapper:any = document.createElement('div');
                        wrapper.setAttribute("class","input-group");
                        var addon:any = document.createElement('div');
                        addon.setAttribute("class","input-group-addon");
                        var span:any = document.createElement('span'); 
                        span.setAttribute('attrType','div');
                        span.setAttribute('class','text selectedEle');
                        span.setAttribute('defClass','text selectedEle');
                        span.setAttribute('style','font-size: 16px; background: none; width: 100%; display: inline-block;');
                        span.innerHTML = "@";
                        this.textEvents(span);
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','email');
                        input.setAttribute('placeholder','Email');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        addon.appendChild(span);
                        wrapper.appendChild(addon);
                        wrapper.appendChild(input);
                        this.updateView(wrapper);
                    }else if(req == "input_005"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','datetime-local');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_006"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','date');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_007"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','month');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_008"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','week');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_009"){
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-control selectedEle');
                        input.setAttribute('type','time');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                        this.updateView(input);
                    }else if(req == "input_010"){
                        var textAtrea:any = document.createElement('textarea');
                        textAtrea.setAttribute('class','form-control selectedEle');
                        textAtrea.setAttribute('style','width:100%; height:100%;');
                        textAtrea.setAttribute('defClass','selectedEle');
                        textAtrea.setAttribute('attrType','input');
                        this.updateView(textAtrea);
                    }
            }else if(req.split('_')[0]== "tick" && this.target.tagName!="SPAN"){
                if(req == "tick_001"){
                        var wrapper:any = document.createElement('div');
                        wrapper.setAttribute('class','form-check');
                        var label:any = document.createElement('label');
                        label.setAttribute('class','form-check-label');
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-check-input selectedEle');
                        input.setAttribute('type','radio');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                         var span:any = document.createElement('span'); 
                        span.setAttribute('attrType','div');
                        span.setAttribute('class','text selectedEle');
                        span.setAttribute('defClass','text selectedEle');
                        span.setAttribute('style','font-size: 16px; background: none; width: 100%; display: inline-block;');
                        span.innerHTML = "Radio Button";
                        this.textEvents(span);
                        wrapper.appendChild(label);
                        label.appendChild(input);
                        label.appendChild(span);
                        this.updateView(wrapper);
                    }else if(req == "tick_002"){
                        var wrapper:any = document.createElement('div');
                        wrapper.setAttribute('class','form-check');
                        var label:any = document.createElement('label');
                        label.setAttribute('class','form-check-label');
                        var input:any = document.createElement('input');
                        input.setAttribute('class','form-check-input selectedEle');
                        input.setAttribute('type','checkbox');
                        input.setAttribute('defClass','selectedEle');
                        input.setAttribute('attrType','input');
                         var span:any = document.createElement('span'); 
                        span.setAttribute('attrType','div');
                        span.setAttribute('class','text selectedEle');
                        span.setAttribute('defClass','text selectedEle');
                        span.setAttribute('style','font-size: 16px; background: none; width: 100%; display: inline-block;');
                        span.innerHTML = "CheckBox";
                        this.textEvents(span);
                        wrapper.appendChild(label);
                        label.appendChild(input);
                        label.appendChild(span);
                        this.updateView(wrapper);
                    }

             } else if(req.split('_')[0]== "select" && this.target.tagName!="SPAN"){
                     var select = document.createElement("select");
                    if(req == "select_002"){
                        select.setAttribute("multiple","");
                    }
                        select.setAttribute("class","form-control selectedEle");
                        select.setAttribute('defClass','selectedEle');
                        select.innerHTML = `<option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>`;
                           var dom:any = document.createElement("div");
                           dom.setAttribute("class","row");
                           dom.setAttribute("style","min-height: 100px;")
                           dom.innerHTML = `<div class="col-12">
                            <textarea style="width:100%, height:100%;"></textarea>
                           </div>`
                         var _this = this;
                        select.addEventListener("dblclick",function(){
                          var evt : any = {};
                           evt.statusCode = "select_001";
                           evt.dom = dom;
                           _this.selectedEle.setElement(select);
                           var values = "";
                           for(var i=0;i<_this.selectedEle.getElement().children.length;i++){
                                values += _this.selectedEle.getElement().children[i].innerHTML;
                                if(i!=_this.selectedEle.getElement().children.length-1){
                                    values +=","
                                }
                           }
                           (evt.dom.children[0].children[0]).value = values;
                           evt.header = "Options"
                           evt.selectedEle = _this.selectedEle;
                           evt.okfunction = function(){
                               var val = ((evt.dom.children[0].children[0]).value).split(",");
                               var str = "";
                               for(var i=0;i<val.length;i++){
                                   if(val[i]!=""){
                                    str += "<option>"+val[i].trim()+"</option>"
                                   }
                               }
                               evt.selectedEle.getElement().innerHTML = str;
                           }
                           _this.selectedEle.setModal(evt);
                        })

                        this.updateView(select);
            }else if(req.split('_')[0]== "button" && this.target.tagName!="SPAN"){
                var span:any = document.createElement('span');
                        span.setAttribute('attrType','div');
                        span.setAttribute('class','text selectedEle');
                        span.setAttribute('defClass','text selectedEle');
                        span.setAttribute('style','padding: 2px; font-size: 16px; background: none; width: 100%; display: inline-block;');
                        span.innerHTML = "Button";
                    if(req == "button_001"){
                        var button:any = document.createElement('button');
                        button.setAttribute('class','btn btn-default selectedEle');
                        button.setAttribute('type','button');
                        button.setAttribute('defClass','selectedEle');
                        button.setAttribute('attrType','button');
                        this.textEvents(span);
                        button.appendChild(span); 
                        this.updateView(button);
                    }else if(req == "button_002"){
                        var wrapper:any =document.createElement('div');
                        wrapper.setAttribute('class','dropdown');
                        var button:any = document.createElement('button');
                        button.setAttribute('class','btn btn-secondary dropdown-toggle selectedEle');
                        button.setAttribute('type','button');
                        button.setAttribute('defClass','selectedEle');
                        button.setAttribute('attrType','button');
                        button.setAttribute("type","button");
                        button.setAttribute("data-toggle","dropdown");
                        button.setAttribute("aria-haspopup","true");
                        button.setAttribute("aria-expanded","false");
                        button.setAttribute("id","dropdownMenuButton");
                        this.textEvents(span);
                        button.appendChild(span);
                        wrapper.appendChild(button);
                        var options = document.createElement('div');
                        options.setAttribute("class","dropdown-menu");
                        options.setAttribute("aria-labelledby","dropdownMenuButton");
                        options.innerHTML = `<div class="dropdown-item">Action</div>
                                                <div class="dropdown-item">Another action</div>
                                                <div class="dropdown-item">Something else here</div>`
                        var _this = this;
                        wrapper.appendChild(options);
                        var dom:any = document.createElement("div");
                           dom.setAttribute("class","row");
                           dom.setAttribute("style","min-height: 100px;")
                           dom.innerHTML = `<div class="col-12">
                            <textarea style="width:100%, height:100%;"></textarea>
                           </div>`
                        button.addEventListener("dblclick",function(){
                          var evt : any = {};
                           evt.statusCode = "button_002";
                           evt.dom = dom;
                           _this.selectedEle.setElement(button);
                           evt.options = options;
                           var values = "";
                           for(var i=0;i<evt.options.children.length;i++){
                                values += evt.options.children[i].innerHTML;
                                if(i!=evt.options.children.length-1){
                                    values +=","
                                }
                           }
                           (evt.dom.children[0].children[0]).value = values;
                           evt.header = "Options"
                           evt.selectedEle = _this.selectedEle;
                           evt.okfunction = function(){
                               var val = ((evt.dom.children[0].children[0]).value).split(",");
                               var str = "";
                               for(var i=0;i<val.length;i++){
                                   if(val[i]!=""){
                                    str += "<div class='dropdown-item'>"+val[i].trim()+"</div>"
                                   }
                               }
                               evt.options.innerHTML = str;
                           }
                           _this.selectedEle.setModal(evt);
                        })
                        this.updateView(wrapper);
                    }else if(req == "button_003"){
                         var wrapper:any =document.createElement('div');
                        wrapper.setAttribute('class','btn-group');
                        var button:any = document.createElement('button');
                        button.setAttribute('class','btn btn-default selectedEle');
                        button.setAttribute('type','button');
                        button.setAttribute('defClass','selectedEle');
                        button.setAttribute('attrType','button');
                        var splitButton = document.createElement('button');
                        splitButton.setAttribute('class','btn btn-default dropdown-toggle dropdown-toggle-split');
                        splitButton.setAttribute("data-toggle","dropdown");
                        splitButton.setAttribute("aria-haspopup","true");
                        splitButton.setAttribute("aria-expanded","false");
                        this.textEvents(span);
                        button.appendChild(span);
                        wrapper.appendChild(button);
                        wrapper.appendChild(splitButton);
                        var options = document.createElement('div');
                        options.setAttribute("class","dropdown-menu");
                        options.setAttribute("aria-labelledby","dropdownMenuButton");
                        options.innerHTML = `<div class="dropdown-item">Action</div>
                                                <div class="dropdown-item">Another action</div>
                                                <div class="dropdown-item">Something else here</div>`
                        var _this = this;
                        wrapper.appendChild(options);
                        var dom:any = document.createElement("div");
                           dom.setAttribute("class","row");
                           dom.setAttribute("style","min-height: 100px;")
                           dom.innerHTML = `<div class="col-12">
                            <textarea style="width:100%, height:100%;"></textarea>
                           </div>`
                        button.addEventListener("dblclick",function(){
                          var evt : any = {};
                           evt.statusCode = "button_002";
                           evt.dom = dom;
                           _this.selectedEle.setElement(button);
                           evt.options = options;
                           var values = "";
                           for(var i=0;i<evt.options.children.length;i++){
                                values += evt.options.children[i].innerHTML;
                                if(i!=evt.options.children.length-1){
                                    values +=","
                                }
                           }
                           (evt.dom.children[0].children[0]).value = values;
                           evt.header = "Options"
                           evt.selectedEle = _this.selectedEle;
                           evt.okfunction = function(){
                               var val = ((evt.dom.children[0].children[0]).value).split(",");
                               var str = "";
                               for(var i=0;i<val.length;i++){
                                   if(val[i]!=""){
                                    str += "<div class='dropdown-item'>"+val[i].trim()+"</div>"
                                   }
                               }
                               evt.options.innerHTML = str;
                           }
                           _this.selectedEle.setModal(evt);
                        })
                        this.updateView(wrapper);
                    }
            }
            else if(req == "container_001"){
                 var div:Element = document.createElement('div');
                    div.setAttribute('class','row selectedEle ui-resizable');
                    div.setAttribute('defClass','selectedEle ui-resizable');
                    div.setAttribute('attrType','div');
                    div.setAttribute('style','min-height:70px; background: white; padding: 10px; width: 100%; max-width:100%;');
                    //div.setAttribute('(click)','echo();');
                    this.ResizeEvent(div);
                    this.updateView(div);
            }
        }
        if(this.target.getAttribute('id') == "_domContainer"){
            this.height = this.documentHeight()+ 100;
        }
    }

     ngOnInit(){
        this.subscription = this.selectedEle.touched.subscribe((item: any) => this.addElement(item));
    }
    addElement(item: any){
        this.target = this.selectedEle.getElement();
        var ele = item.response;
        try{
        while((ele.getAttribute('id')== null || ele.getAttribute('id')== "")) {
            ele = ele.parentElement;
        }
        var flag = false;
        try{
            if(this.target.tagName == "SPAN"){
                flag = false;
            }else{
                flag = true;
            }
        }catch(err){
            flag = true;
        }
        if(item.statusCode == 0 && flag){
            this.processRequest(ele.getAttribute('id'));
            var evt: any = {};
            evt.statusCode =0;
            this.response.next(evt);
        }else{
            alert('Please select a proper component before adding a component.');
        }
        }catch(err){}
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    changeSelectElement(evt: any){
        this.selectedEle.setElement(evt.srcElement);
        evt.preventDefault();
    }

    textEvents(span: any){
        var ele = this.selectedEle;
        var timer: any;
                var ser = this.services;
                span.addEventListener('dblclick',function(event: any){
                    event.preventDefault();
                    event.stopPropagation();
                    ele.startTextTimer();
                    this.setAttribute('contentEditable', true);
                    // var range, selection;
                    //  if (window.getSelection && document.createRange) {
                    //         selection = window.getSelection();
                    //         range = document.createRange();
                    //         range.setStart(ele.getElement().childNodes[0],0);
                    //         console.log(ele.getElement().childNodes[ele.getElement().childNodes.length-1]);
                    //         range.setEnd(ele.getElement().childNodes[ele.getElement().childNodes.length-1],ele.getElement().childNodes[ele.getElement().childNodes.length-1].textContent.length);
                    //         selection.removeAllRanges();
                    //         selection.addRange(range);
                        
                    //     }
                    ele.getElement().style.cursor = "text"
                });
                span.addEventListener('blur',function(){
                    if((this.innerHTML).trim()==""){
                        this.parentElement.removeChild(this);
                    }
                    ele.stopTextTimer();
                    this.setAttribute('contentEditable', false);
                    ele.getElement().style.cursor = "default"
                });
                span.addEventListener('paste',function(event: any){
                    event.preventDefault();
                    var s = $(event.clipboardData.getData('text/html'));
                    for(var i=2;i<s.length-2;i++){
                        s[i] = ser.onlySpan(s[i]);
                        s[i].setAttribute('class','selectParent')
                    }
                    var txt = "";
                    for(var i=2;i<s.length-2;i++){
                        txt += s[i].outerHTML;
                    }
                    event.srcElement.innerHTML = (event.srcElement.innerHTML).substring(0,ele.getIBeam(event.srcElement))+txt+(event.srcElement.innerHTML).substring(ele.getIBeam(event.srcElement),(event.srcElement.innerHTML).length);
                },false);
                span.addEventListener('touchstart', function(){
                    var element = ele;
                    var _this = this;
                    timer = setTimeout(function(){
                        element.startTextTimer();
                        _this.setAttribute('contentEditable', true);
                        var range, selection;
                     if (window.getSelection && document.createRange) {
                            selection = window.getSelection();
                            range = document.createRange();
                            range.setStart(_this.childNodes[0],0);
                            console.log(_this.childNodes[_this.childNodes.length-1]);
                            range.setEnd(_this.childNodes[_this.childNodes.length-1],_this.childNodes[_this.childNodes.length-1].textContent.length);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        
                        }
                    }, 1000); 
                });

                span.addEventListener('touchend', function(){
                    if (timer)
                        clearTimeout(timer); // clearTimeout, not cleartimeout..
                });
                //div.setAttribute('(click)','echo();');
    }


    ResizeEvent(dom: any){
        var resizeClick:any = {};
            var selectedEle = this.selectedEle;
            dom.addEventListener("mousedown", function(event: any){
                var ele = event.srcElement;
                var width;
                var box = { left: 0, top: 0, width:0, height:0 };
                try {
                    box = ele.getBoundingClientRect();
                } 
                catch(e) 
                {}

                var doc = document,
                docElem = doc.documentElement,
                body = document.body,
                win = window,
                clientTop  = docElem.clientTop  || document.body.clientTop  || 0,
                clientLeft = docElem.clientLeft || body.clientLeft || 0,
                scrollTop  = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop,
                scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
                top  = box.top  + scrollTop  - clientTop,
                left = box.left + scrollLeft - clientLeft;
                var l = event.clientX - left;
                var t = event.clientY-top;
                if(l>box.width-10 && l<box.width+10 && t>box.height-10 && t<box.height +10){
                    resizeClick.clicked = true;
                    var parentHeight = ele.parentElement.clientHeight - parseFloat(ele.parentElement.style.paddingTop.match(/[0-9]*\.?[0-9]*/g).join(""));
                        var parentWidth = ele.parentElement.clientWidth - parseFloat(ele.parentElement.style.paddingLeft.match(/[0-9]*\.?[0-9]*/g).join(""));

                    if(ele.currentStyle){
                        resizeClick.maxWidth = ele.currentStyle.maxWidth;
                        resizeClick.minWidth = ele.currentStyle.minWidth;
                        resizeClick.maxHeight = ele.currentStyle.maxHeight;
                        resizeClick.minHeight = ele.currentStyle.minHeight;
                    } else if (window.getComputedStyle) {
                        var e = window.getComputedStyle(ele, null);
                        try{resizeClick.maxWidth = (e.maxWidth.replace(/[0-9]*\.?[0-9]*/g,"")=='%')?(parseFloat(e.maxWidth.match(/[0-9]*\.?[0-9]*/g).join(""))*parentWidth/100):parseFloat(e.maxWidth.match(/[0-9]*\.?[0-9]*/g).join(""))}catch(err){resizeClick.maxWidth = parentWidth;};
                        try{resizeClick.minWidth = (e.minWidth.replace(/[0-9]*\.?[0-9]*/g,"")=='%')?(parseFloat(e.minWidth.match(/[0-9]*\.?[0-9]*/g).join(""))*parentWidth/100):parseFloat(e.minWidth.match(/[0-9]*\.?[0-9]*/g).join(""))}catch(err){resizeClick.minWidth = 0;};
                        try{resizeClick.maxHeight = (e.maxHeight.replace(/[0-9]*\.?[0-9]*/g,"")=='%')?(parseFloat(e.maxHeight.match(/[0-9]*\.?[0-9]*/g).join(""))*parentHeight/100):parseFloat(e.maxHeight.match(/[0-9]*\.?[0-9]*/g).join(""))}catch(err){resizeClick.maxHeight = parentHeight;};
                        try{resizeClick.minHeight = (e.minHeight.replace(/[0-9]*\.?[0-9]*/g,"")=='%')?(parseFloat(e.minHeight.match(/[0-9]*\.?[0-9]*/g).join(""))*parentHeight/100):parseFloat(e.minHeight.match(/[0-9]*\.?[0-9]*/g).join(""))}catch(err){resizeClick.minHeight = 0;};
                    }
                    resizeClick.top = top;
                    resizeClick.left = left;
                    if(isNaN(resizeClick.maxWidth)){resizeClick.maxWidth = parentWidth;}
                    if(isNaN(resizeClick.minWidth)){resizeClick.minWidth = 0;}
                    if(isNaN(resizeClick.maxHeight)){resizeClick.maxHeight = parentHeight;}
                    if(isNaN(resizeClick.minHeight)){resizeClick.minHeight = 0;}
                    resizeClick.parentHeight = parentHeight;
                    resizeClick.parentWidth = parentWidth;
                    var selected:any = selectedEle;
                    var element = event.target;
                    $(window).mousemove(function(event: any){
                        if(!event.isPropagationStopped()){
                        if(resizeClick.clicked){
                            var w = event.clientX - resizeClick.left;
                            var h = event.clientY - resizeClick.top;
                            if(resizeClick.minWidth < w && w < resizeClick.maxWidth){
                                element.style.width = w+'px';
                            }
                            if(resizeClick.minHeight < h && h < resizeClick.maxHeight){
                                element.style.height = h+'px';
                            }
                        }
                        }
                        event.preventDefault();
                    });
                     $(window).mouseup(function(event: any){
                        resizeClick.clicked = false;
                        if(!event.isPropagationStopped()){
                            if(ele.style.width.replace(/[0-9]*\.?[0-9]*/g,"")!='%'){
                            ele.style.width = (parseFloat(ele.style.width.match(/[0-9]*\.?[0-9]*/g).join(""))*100/resizeClick.parentWidth)+"%";
                            }
                        selected.setSetStyles();
                        selected.getSelectedEleEmitter().emit();
                        $(window).unbind('mousemove');
                        $(window).unbind('mouseup');
                    }
                    
                        event.preventDefault();
                        event.stopPropagation();
                    });
                }
                if(event.target.tagName != 'SPAN'){
                    event.preventDefault();
                }
            });
            
            
    }







    updateView(dom : Element){
        this.selectedEle.setElement(dom);
        this.target.appendChild(dom);
        //console.log(this.selectedEle.getElement());
    }

}