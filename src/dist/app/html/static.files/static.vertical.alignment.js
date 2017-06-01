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
var StaticVerticalAlignmentComponent = (function () {
    function StaticVerticalAlignmentComponent() {
        this.align = "";
    }
    StaticVerticalAlignmentComponent.prototype.verticalAlign = function (align) {
        if (this.selectedEle.getElement().tagName == "DIV") {
            if (this.align != "") {
                var html = this.selectedEle.getElement().children[0];
                var tempDiv = document.createElement('div');
                while (html.children.length > 0) {
                    tempDiv.appendChild(html.children[0]);
                }
                while (this.selectedEle.getElement().children.length > 1) {
                    tempDiv.appendChild(this.selectedEle.getElement().children[1]);
                }
                this.selectedEle.getElement().innerHTML = "";
                while (tempDiv.childNodes.length > 0) {
                    this.selectedEle.getElement().appendChild(tempDiv.childNodes[0]);
                }
            }
            if (this.align == align) {
                this.selectedEle.getElement().style.display = "";
                this.selectedEle.getElement().style.alignItems = "";
                this.align = "";
            }
            else {
                this.selectedEle.getElement().style.display = "flex";
                var div = document.createElement('div');
                div.style.width = "100%";
                while (this.selectedEle.getElement().childNodes.length > 0) {
                    div.appendChild(this.selectedEle.getElement().childNodes[0]);
                }
                this.selectedEle.getElement().innerHTML = "";
                this.selectedEle.getElement().appendChild(div);
                this.selectedEle.getElement().style.alignItems = align;
                this.align = align;
            }
        }
        else {
            alert("Please select a div tag");
        }
    };
    StaticVerticalAlignmentComponent.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
    };
    StaticVerticalAlignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter()
            .subscribe(function () { return _this.changed(); });
        this.changed();
        this.windowSize = window.innerWidth;
    };
    StaticVerticalAlignmentComponent.prototype.changed = function () {
        try {
            this.align = this.selectedEle.getElement().style.alignItems;
        }
        catch (err) { }
    };
    StaticVerticalAlignmentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return StaticVerticalAlignmentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StaticVerticalAlignmentComponent.prototype, "selectedEle", void 0);
StaticVerticalAlignmentComponent = __decorate([
    core_1.Component({
        selector: "vertical-alignment",
        templateUrl: "./alignment/static.vertical.alignment.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        },
    })
], StaticVerticalAlignmentComponent);
exports.StaticVerticalAlignmentComponent = StaticVerticalAlignmentComponent;
//# sourceMappingURL=static.vertical.alignment.js.map