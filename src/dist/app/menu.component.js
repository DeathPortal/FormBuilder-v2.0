"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var shared_variable_1 = require("./tools/shared/shared.variable");
var MenuComponent = (function () {
    function MenuComponent(sharedVariable) {
        this.sharedVariable = sharedVariable;
        this.errCount = 0;
    }
    MenuComponent.prototype.export = function () {
        var headers = '<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>';
        if (this.sharedVariable.myWindow == null) {
            var myWindow = window.open("", "_blank");
            this.sharedVariable.myWindow = myWindow;
            this.sharedVariable.myWindow.document.write(headers);
        }
        else if (this.sharedVariable.myWindow.closed) {
            var myWindow = window.open("", "_blank");
            this.sharedVariable.myWindow = myWindow;
            this.sharedVariable.myWindow.document.write(headers);
        }
        try {
            this.sharedVariable.myWindow.focus();
            try {
                this.sharedVariable.myWindow.document.body.innerHTML = "";
            }
            catch (err) {
            }
            var domContainer = document.getElementById("_domContainer").outerHTML;
            var body = ($.parseHTML(domContainer))[0];
            this.removeDefault(body);
            this.sharedVariable.myWindow.document.write(body.innerHTML);
            var js = "\n        <div style=\"width:100%; height: 50px; border: 2px solid #666; background: #999; position: fixed; bottom: 0px; left: 0px;\">\n            <button class=\"btn btn success\" style=\"float: right\" onclick=\"showModal();\">Code</button>\n        </div>\n        <div id=\"_modal\" style=\"width:100%; height: 100%; background: rgba(0,0,0,0.4); position: fixed; top: 0px; left: 0px; display: none;z-index: 99;\">\n            <div class=\"container-fluid\" style=\" width: 80%; background: white; overflow: auto;\">\n            <div class=\"row\" style=\"height: 30%; margin-bottom:20px; margin-top:20px;\">\n                <div class=\"col-12\">\n                    <label class=\"badge badge-primary\">Header</label>\n                    <textarea id=\"_header\" style=\"overflow:auto; height: 90%; width:100%;\" disabled=\"true\"></textarea>\n                </div>\n            </div>\n            <div  class=\"row\" style=\"height: 50%; margin-bottom:20px; margin-top:20px;\">\n                <div class=\"col-12\">\n                    <label class=\"badge badge-primary\">Body</label>\n                     <textarea id=\"_body\" style=\"overflow:auto; height: 90%; width:100%;\" disabled=\"true\"></textarea>\n                </div>\n            </div>\n            <div  class=\"row\" style=\"height: 150px;\">\n                <div class=\"container-fluid\" style=\"width: 100px;\">\n                     <button class=\"btn btn-danger\" onclick=\"closeModal();\">Close</button>\n                </div>\n            </div>\n            </div>\n        </div>\n            <script>\n                function showModal(){\n                    var headers = '" + headers.replace(/\//g, "//") + "';\n                    var body = '" + body.innerHTML.replace(/\//g, "//").replace(/\n/g, ' ') + "'\n                    document.getElementById('_modal').style.display = \"\";\n                    document.getElementById('_header').value = headers.replace(/\\/\\//g,\"/\");\n                    document.getElementById('_body').value = body.replace(/\\/\\//g,\"/\");\n                }\n                function closeModal(){\n                    document.getElementById('_modal').style.display = \"none\";\n                }\n            </script>\n        ";
            this.sharedVariable.myWindow.document.write(js);
            this.errCount = 0;
        }
        catch (err) {
            this.sharedVariable.myWindow = null;
            if (this.errCount < 5) {
                this.export();
            }
            else {
                this.sharedVariable.myWindow = window.open("", "_blank");
                this.sharedVariable.myWindow.document.write(err);
            }
            this.errCount++;
        }
    };
    MenuComponent.prototype.removeDefault = function (body) {
        for (var i = 0; i < body.children.length; i++) {
            this.removeDefault(body.children[i]);
        }
        if (body.getAttribute("defclass")) {
            if (body.getAttribute("class")) {
                body.setAttribute("class", (body.getAttribute("class").replace(body.getAttribute("defclass"), '')));
            }
            body.removeAttribute("defclass");
        }
        if (body.getAttribute("attrtype")) {
            body.removeAttribute("attrtype");
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "menu-bar",
        templateUrl: "./html/menu.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    }),
    __metadata("design:paramtypes", [shared_variable_1.SharedVariable])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map