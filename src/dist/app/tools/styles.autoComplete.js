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
var shared_service_1 = require("../shared/shared.service");
var core_1 = require("@angular/core");
var css_prop_1 = require("../shared/css.prop");
var AutoCompleteStyle = (function () {
    function AutoCompleteStyle(selectedEle, myElement, css) {
        this.selectedEle = selectedEle;
        this.myElement = myElement;
        this.css = css;
        this.filteredList = [];
        this.valid = true;
        this.filteredStyleList = [];
        this.elementRef = myElement;
    }
    Object.defineProperty(AutoCompleteStyle.prototype, "Value", {
        set: function (val) {
            this.query = val[0];
            this.queryval = val[1];
        },
        enumerable: true,
        configurable: true
    });
    AutoCompleteStyle.prototype.filterStyle = function (event) {
        this.top = event.srcElement.getBoundingClientRect().top + event.srcElement.clientHeight;
        this.left = event.srcElement.getBoundingClientRect().left;
        this.filteredList = [];
        try {
            if (this.query !== "" && this.queryval !== "") {
                var style = this.css.cssValues[this.query];
                this.filteredStyleList = style.filter(function (el) {
                    return el.toLowerCase().indexOf(this.queryval.toLowerCase()) > -1;
                }.bind(this));
            }
            else {
                this.filteredStyleList = [];
            }
            if (this.filteredStyleList.length > 10) {
                this.filteredStyleList = this.filteredStyleList.slice(0, 10);
            }
        }
        catch (err) { }
    };
    AutoCompleteStyle.prototype.filter = function (event) {
        this.top = event.srcElement.getBoundingClientRect().top + event.srcElement.clientHeight;
        this.left = event.srcElement.getBoundingClientRect().left;
        this.filteredStyleList = [];
        if (this.query !== "") {
            this.filteredList = this.selectedEle.otherStyles.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
        if (this.filteredList.length > 5) {
            this.filteredList = this.filteredList.slice(0, 5);
        }
    };
    AutoCompleteStyle.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
        this.check();
    };
    AutoCompleteStyle.prototype.selectStyle = function (item) {
        this.queryval = item;
        this.filteredStyleList = [];
        this.setStyle();
    };
    AutoCompleteStyle.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    };
    AutoCompleteStyle.prototype.check = function () {
        var filteredList = [];
        for (var i = 0; i < this.selectedEle.otherStyles.length; i++) {
            if ((this.selectedEle.otherStyles)[i] == this.query) {
                filteredList.push(this.query);
                break;
            }
        }
        if (filteredList <= 0) {
            this.valid = false;
        }
        else {
            this.setStyle();
        }
    };
    AutoCompleteStyle.prototype.setStyle = function () {
        try {
            var el = this.selectedEle.getElement();
            el.style[this.query] = this.queryval;
            this.selectedEle.setElement(this.selectedEle.getElement());
            if (el.style[this.query] && this.queryval != '') {
                this.selectedEle.setSetStyles();
                this.selectedEle.getSelectedEleEmitter().emit();
            }
            this.valid = true;
        }
        catch (err) {
            this.valid = false;
        }
    };
    return AutoCompleteStyle;
}());
__decorate([
    core_1.Input('styles'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AutoCompleteStyle.prototype, "Value", null);
AutoCompleteStyle = __decorate([
    core_1.Component({
        selector: "predictiveStyle-search",
        template: "\n        <div class=\"row\" style=\"width: 10%; min-width:200px; padding: 5px; padding-left: 20px; display: inline-block; position: relative;\">\n            <div class=\"form-inline\" [ngClass]=\"valid?'form-inline':'has-danger'\">\n              <input (blur)=\"check()\" id=\"\" type=\"text\" class=\"validate filter-input form-control col-4\" style=\"padding: 5px;\" [(ngModel)]=\"query\" (keyup)=\"filter($event)\">\n              <span style=\"font-size: 20px;\">:</span>\n              <input (blur) = \"setStyle()\" id=\"\" type=\"text\" class=\"validate filter-input form-control col-4\" style=\"padding: 5px;\" [(ngModel)]=\"queryval\" (keyup)=\"filterStyle($event)\">\n            </div>\n        </div>\n            <div [style.top] = 'top+\"px\"' [style.left]= 'left+\"px\"' class=\"dropdown-menu\" *ngIf=\"filteredList.length > 0\" style=\"display:block; width:300px;\">\n                <a class=\"item-dropdown\" (click)=\"select(item)\" *ngFor=\"let item of filteredList\">{{item}}</a>\n            </div>\n            <div [style.top] = 'top+\"px\"' [style.left]= 'left+\"px\"' class=\"dropdown-menu\" *ngIf=\"filteredStyleList.length > 0\" style=\"display:block;\">\n                <a class=\"item-dropdown\" (click)=\"selectStyle(item)\" *ngFor=\"let item of filteredStyleList\">{{item}}</a>\n            </div>\n        \n        ",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(document:click)': 'handleClick($event)',
        },
    }),
    __metadata("design:paramtypes", [shared_service_1.SelectedElement, core_1.ElementRef, css_prop_1.CSSProp])
], AutoCompleteStyle);
exports.AutoCompleteStyle = AutoCompleteStyle;
//# sourceMappingURL=styles.autoComplete.js.map