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
var shared_services2_1 = require("../../shared/shared.services2");
var StaticTextStyle2Component = (function () {
    function StaticTextStyle2Component(services) {
        this.services = services;
        this.marker = false;
        this.colorPicker2 = false;
        this.status2 = false;
        this.color = "";
        this.selRng = [];
        this.response = new core_1.EventEmitter();
        this.bgcolor = "#FFF";
        // change after update
        this.colorPicker = false;
        this.status = false;
    }
    StaticTextStyle2Component.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
    };
    StaticTextStyle2Component.prototype.ngOnInit = function () {
        this.windowSize = window.innerWidth;
    };
    StaticTextStyle2Component.prototype.fetchSelectedRange = function () {
        this.selRng = this.services.selectedRange(this.selectedEle.getElement());
    };
    StaticTextStyle2Component.prototype.processMarkerResponse = function (evt) {
        this.marker = false;
        this.updateMarker(evt.response);
    };
    StaticTextStyle2Component.prototype.updateMarker = function (color) {
        var ele = this.selectedEle.getElement();
        var colorPicked = false;
        for (var i = 0; i < this.selRng.length; i++) {
            var item = this.selRng[i].dom;
            this.selRng[i].dom.innerHTML = this.selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while (item.tagName == "SPAN" || item.tagName == "span" || item.tagName == "Span") {
                if (this.selRng[i].text != "") {
                    if (item.style.background != "") {
                        this.selRng[i].dom.innerHTML = "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start) + "</span>" + "<span class='selectParent'>" + this.selRng[i].text + "</span>" + "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length) + "</span>";
                        this.services.separateStyles(item, 'background', '', item.style.background);
                        this.selRng[i].dom.children[1].style.background = color;
                        colorPicked = true;
                        break;
                    }
                }
                else {
                    break;
                }
                item = item.parentElement;
            }
            if (!colorPicked) {
                this.selRng[i].dom.innerHTML = "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start) + "</span>" + "<span class='selectParent' style='background: " + color + ";'>" + this.selRng[i].text + "</span>" + "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length) + "</span>";
            }
        }
        this.selRng = [];
    };
    StaticTextStyle2Component.prototype.processColorResponse = function (evt) {
        if (evt.statusCode == 0) {
            this.colorPicker2 = false;
            this.color = evt.response;
            this.updateTextColor();
            this.status2 = true;
        }
        else {
            this.colorPicker2 = false;
            this.selRng = [];
        }
    };
    StaticTextStyle2Component.prototype.updateTextColor = function () {
        var ele = this.selectedEle.getElement();
        if (this.selRng.length <= 0 || (this.selRng.length == 1 && this.selRng[0].text == "")) {
            this.selectedEle.getElement().style.color = this.color;
        }
        var colorPicked = false;
        for (var i = 0; i < this.selRng.length; i++) {
            var item = this.selRng[i].dom;
            var underlineType = "";
            this.selRng[i].dom.innerHTML = this.selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while (item.tagName == "SPAN" || item.tagName == "span" || item.tagName == "Span") {
                if (this.selRng[i].text != "") {
                    if (item.style.color != "") {
                        this.selRng[i].dom.innerHTML = "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start) + "</span>" + "<span class='selectParent'>" + this.selRng[i].text + "</span>" + "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length) + "</span>";
                        this.services.separateStyles(item, 'color', '', item.style.color);
                        this.selRng[i].dom.children[1].style.color = this.color;
                        colorPicked = true;
                        break;
                    }
                }
                else {
                    break;
                }
                item = item.parentElement;
            }
            if (!colorPicked) {
                this.selRng[i].dom.innerHTML = "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(0, this.selRng[i].start) + "</span>" + "<span class='selectParent' style='color: " + this.color + ";'>" + this.selRng[i].text + "</span>" + "<span class='selectParent'>" + (this.selRng[i].dom.innerHTML).substr(this.selRng[i].start + this.selRng[i].text.length) + "</span>";
            }
        }
        this.selRng = [];
    };
    Object.defineProperty(StaticTextStyle2Component.prototype, "selectedElement", {
        set: function (val) {
            this.selectedEle = val;
        },
        enumerable: true,
        configurable: true
    });
    StaticTextStyle2Component.prototype.processResponse = function (evt) {
        if (evt.statusCode == 0) {
            this.colorPicker = false;
            this.bgcolor = evt.response;
            this.selectedEle.getElement().style.background = this.bgcolor;
            this.status = true;
        }
    };
    StaticTextStyle2Component.prototype.openColorPicker = function () {
        if (this.status == false) {
            this.colorPicker = true;
        }
        else {
            this.colorPicker = false;
            this.status = false;
        }
    };
    return StaticTextStyle2Component;
}());
__decorate([
    core_1.Input('selectedEle'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StaticTextStyle2Component.prototype, "selectedElement", null);
StaticTextStyle2Component = __decorate([
    core_1.Component({
        selector: "textstyle2-style",
        templateUrl: "./textStyles/static.textStyle2.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        },
    }),
    __metadata("design:paramtypes", [shared_services2_1.Services])
], StaticTextStyle2Component);
exports.StaticTextStyle2Component = StaticTextStyle2Component;
//# sourceMappingURL=static.textstyle2.js.map