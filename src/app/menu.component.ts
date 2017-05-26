import { Component} from '@angular/core';
import { SharedVariable } from './tools/shared/shared.variable'
@Component({
    selector: "menu-bar",
    templateUrl: "./html/menu.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
})
export class MenuComponent{
    constructor(private sharedVariable:SharedVariable ){}
    errCount : number = 0;
    export(){
var headers = '<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>';
        if(this.sharedVariable.myWindow == null){
        var myWindow = window.open("","_blank");
        this.sharedVariable.myWindow = myWindow;
        this.sharedVariable.myWindow.document.write(headers);
    }else if(this.sharedVariable.myWindow.closed){
        var myWindow = window.open("","_blank");
        this.sharedVariable.myWindow = myWindow;
        this.sharedVariable.myWindow.document.write(headers);
    }
    try{
    this.sharedVariable.myWindow.focus();
    try{
    this.sharedVariable.myWindow.document.body.innerHTML = "";
    }catch(err){

    }
        var domContainer = document.getElementById("_domContainer").outerHTML;
        var body = ($.parseHTML(domContainer))[0];
        this.removeDefault(body);
        this.sharedVariable.myWindow.document.write(body.innerHTML);
        var js = `
        <div style="width:100%; height: 50px; border: 2px solid #666; background: #999; position: fixed; bottom: 0px; left: 0px;">
            <button class="btn btn success" style="float: right" onclick="showModal();">Code</button>
        </div>
        <div id="_modal" style="width:100%; height: 100%; background: rgba(0,0,0,0.4); position: fixed; top: 0px; left: 0px; display: none;z-index: 99;">
            <div class="container-fluid" style=" width: 80%; background: white; overflow: auto;">
            <div class="row" style="height: 30%; margin-bottom:20px; margin-top:20px;">
                <div class="col-12">
                    <label class="badge badge-primary">Header</label>
                    <textarea id="_header" style="overflow:auto; height: 90%; width:100%;" disabled="true"></textarea>
                </div>
            </div>
            <div  class="row" style="height: 50%; margin-bottom:20px; margin-top:20px;">
                <div class="col-12">
                    <label class="badge badge-primary">Body</label>
                     <textarea id="_body" style="overflow:auto; height: 90%; width:100%;" disabled="true"></textarea>
                </div>
            </div>
            <div  class="row" style="height: 150px;">
                <div class="container-fluid" style="width: 100px;">
                     <button class="btn btn-danger" onclick="closeModal();">Close</button>
                </div>
            </div>
            </div>
        </div>
            <script>
                function showModal(){
                    var headers = \'`+headers.replace(/\//g,"//")+`\';
                    var body = \'`+body.innerHTML.replace(/\//g,"//").replace(/\n/g,' ')+`\'
                    document.getElementById('_modal').style.display = "";
                    document.getElementById('_header').value = headers.replace(/\\/\\//g,"/");
                    document.getElementById('_body').value = body.replace(/\\/\\//g,"/");
                }
                function closeModal(){
                    document.getElementById('_modal').style.display = "none";
                }
            </script>
        `
        this.sharedVariable.myWindow.document.write(js);
        this.errCount = 0;
    }catch(err){
        this.sharedVariable.myWindow = null;
        if(this.errCount < 5){
            this.export();
        }else{
            this.sharedVariable.myWindow = window.open("","_blank");
            this.sharedVariable.myWindow.document.write(err);
        }
        this.errCount++;
    }

    }
    removeDefault(body: any){
        for(var i=0;i<body.children.length; i++){
            this.removeDefault(body.children[i]);
        }
        if(body.getAttribute("defclass")){
            if(body.getAttribute("class")){
                body.setAttribute("class",(body.getAttribute("class").replace(body.getAttribute("defclass"),'')));
            }
            body.removeAttribute("defclass");
        }
        if(body.getAttribute("attrtype")){
            body.removeAttribute("attrtype");
        }
    }

}