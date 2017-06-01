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
var shared_service_1 = require("./shared/shared.service");
var AppComponent = (function () {
    function AppComponent(selectedEle) {
        this.selectedEle = selectedEle;
        this.name = 'Angular';
    }
    AppComponent.prototype.processResponse = function (evt) {
        if (evt.statusCode == 0) {
            this.toggleComponents(this.target);
        }
    };
    ;
    AppComponent.prototype.deleteElement = function () {
        try {
            this.selectedEle.getElement().parentElement.removeChild(this.selectedEle.getElement());
            this.selectedEle.selectedElement = null;
        }
        catch (err) {
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        if (this.windowWidth > 500) {
            this.offset = 170;
        }
        else {
            this.offset = 60;
        }
    };
    AppComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        if (this.windowWidth >= 1000) {
        }
        if (this.windowWidth > 500) {
            this.offset = 170;
        }
        else {
            this.offset = 60;
        }
    };
    AppComponent.prototype.toggleComponents = function (event) {
        this.target = event;
        try {
            var clss = event.target.children[0].getAttribute('class');
            if (clss == "fa fa-caret-right") {
                event.target.children[0].setAttribute('class', 'fa fa-caret-left');
                $(event.target.parentElement).animate({ left: '0px' });
            }
            else {
                event.target.children[0].setAttribute('class', 'fa fa-caret-right');
                $(event.target.parentElement).animate({ left: '-245px' });
            }
        }
        catch (err) {
            var clss = event.target.getAttribute('class');
            if (clss == "fa fa-caret-right") {
                event.target.setAttribute('class', 'fa fa-caret-left');
                $(event.target.parentElement.parentElement).animate({ left: '0px' });
            }
            else {
                event.target.setAttribute('class', 'fa fa-caret-right');
                $(event.target.parentElement.parentElement).animate({ left: '-245px' });
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<top-menu style=\"position:fixed; top:0px; left:0px; z-index:99; width: 100%; background: #FFF;\"></top-menu>\n              <div *ngIf = \"windowWidth >= 1050\" class=\"col-2\" style=\"position: fixed; top: 170px; left: 0px; z-index: 90;\" ><components-menu></components-menu></div>\n              <div [style.top] = \"offset+'px'\" [style.height]=\"(windowHeight-offset)+'px'\" [style.height]=\"(windowHeight-170)+'px'\" class=\"row _scrollBar\" style=\"position:absolute; top:170px; left:0px; width: 100%; overflow-y:scroll; margin: 0;\">\n                <div *ngIf = \"windowWidth >= 1050\" class=\"col-2\"></div>\n                <div [ngClass]=\"windowWidth >= 1050?'col-10': 'col-12'\" [style.paddingLeft] = \"windowWidth >= 1000?'': '30px'\"><form-canvas id=\"_form-canvas\" (response) = \"processResponse($event);\">{{data}}</form-canvas></div>\n              </div>\n              <div *ngIf = \"windowWidth < 1050\" [style.top] = \"offset+'px'\" style=\"position: fixed; top: 170px; left: -245px; z-index: 90; width: 270px;\">\n                <div style=\"position: relative; width: 230px; display: inline-block; top:0px; z-index:1;\" ><components-menu></components-menu></div>\n                <button (click) = \"toggleComponents($event);\" id=\"_componentsButton\" style=\"position: relative; z-index:0; width: 25px; height: 70px; top: 30px; right:-10px; display: inline-block; padding:0px; text-align: center;\">\n                  <span class=\"fa fa-caret-right\" style=\"width:100%;\"></span>\n                </button>\n              </div>\n              <div (click)=\"deleteElement();\" style=\"position: fixed;bottom: 20px;right: 20px;z-index: 99;background-image: url('/app/img/delete.png');width: 64px;background-size: cover;height: 64px;\">\n              </div>\n              <modal-component></modal-component>\n\n      ",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [shared_service_1.SelectedElement])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map