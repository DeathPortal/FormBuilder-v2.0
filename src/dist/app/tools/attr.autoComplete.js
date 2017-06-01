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
var AutoCompleteAttr = (function () {
    function AutoCompleteAttr(selectedEle, myElement) {
        this.selectedEle = selectedEle;
        this.myElement = myElement;
        this.filteredList = [];
        this.valid = true;
        this.elementRef = myElement;
    }
    Object.defineProperty(AutoCompleteAttr.prototype, "Value", {
        set: function (val) {
            this.query = val[0];
            this.queryval = val[1];
        },
        enumerable: true,
        configurable: true
    });
    AutoCompleteAttr.prototype.filter = function (event) {
        this.top = event.srcElement.getBoundingClientRect().top + event.srcElement.clientHeight;
        this.left = event.srcElement.getBoundingClientRect().left;
        if (this.query !== "") {
            this.filteredList = this.selectedEle.otherAttrs.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    AutoCompleteAttr.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
        this.check();
    };
    AutoCompleteAttr.prototype.handleClick = function (event) {
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
    AutoCompleteAttr.prototype.check = function () {
        var filteredList = [];
        for (var i = 0; i < this.selectedEle.otherAttrs.length; i++) {
            if ((this.selectedEle.otherAttrs)[i] == this.query) {
                filteredList.push(this.query);
                break;
            }
        }
        if (filteredList <= 0) {
            this.valid = false;
        }
        else {
            this.setAttribute();
        }
    };
    AutoCompleteAttr.prototype.setAttribute = function () {
        try {
            this.query = this.query.trim();
            this.queryval = this.queryval.trim();
            var el = this.selectedEle.getElement();
            if (this.query == "class") {
                el.setAttribute(this.query, el.getAttribute('defClass') + " " + this.queryval);
            }
            else {
                el.setAttribute(this.query, this.queryval);
            }
            this.selectedEle.setElement(this.selectedEle.getElement());
            this.valid = true;
        }
        catch (err) {
            this.valid = false;
        }
    };
    return AutoCompleteAttr;
}());
__decorate([
    core_1.Input('attr'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AutoCompleteAttr.prototype, "Value", null);
AutoCompleteAttr = __decorate([
    core_1.Component({
        selector: "predictiveAttr-search",
        template: "\n        <div class=\"row\" style=\"width: 10%; min-width:200px; padding: 5px; padding-left: 20px; display: inline-block; position: relative;\">\n            <div class=\"form-inline\" [ngClass]=\"valid?'form-inline':'has-danger'\">\n              <input (blur)=\"check()\" id=\"\" type=\"text\" class=\"validate filter-input form-control col-4\" style=\"padding: 5px;\" [(ngModel)]=\"query\" (keyup)=\"filter($event)\">\n              <span style=\"font-size: 20px;\">:</span>\n              <input (blur) = \"setAttribute()\" id=\"\" type=\"text\" class=\"validate filter-input form-control col-4\" style=\"padding: 5px;\" [(ngModel)]=\"queryval\">\n            </div>\n        </div>\n            <div [style.top] = 'top+\"px\"' [style.left]= 'left+\"px\"' class=\"dropdown-menu\" *ngIf=\"filteredList.length > 0\" style=\"display:block;\">\n                <a class=\"item-dropdown\" (click)=\"select(item)\" *ngFor=\"let item of filteredList\">{{item}}</a>\n            </div>\n        ",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(document:click)': 'handleClick($event)',
        },
    }),
    __metadata("design:paramtypes", [shared_service_1.SelectedElement, core_1.ElementRef])
], AutoCompleteAttr);
exports.AutoCompleteAttr = AutoCompleteAttr;
//# sourceMappingURL=attr.autoComplete.js.map