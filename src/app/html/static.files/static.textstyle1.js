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
var StaticTextStyle1Component = (function () {
    function StaticTextStyle1Component(services) {
        this.services = services;
        this.bold = "";
        this.italic = "";
        this.underline = "";
    }
    StaticTextStyle1Component.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
    };
    StaticTextStyle1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getTextEleEmitter()
            .subscribe(function (item) { return _this.changed(item); });
        this.eleSubscription = this.selectedEle.getSelectedEleEmitter()
            .subscribe(function () { return _this.changedElement(); });
        this.windowSize = window.innerWidth;
        this.changedElement();
    };
    StaticTextStyle1Component.prototype.changedElement = function () {
        try {
            var ele = this.selectedEle.getElement();
            this.bold = (ele.style.fontWeight).trim();
            this.italic = (ele.style.fontStyle).trim();
            this.underline = (ele.style.textDecoration).trim();
        }
        catch (err) { }
    };
    StaticTextStyle1Component.prototype.changed = function (item) {
        this.bold = "";
        this.italic = "";
        this.underline = "";
        while (item.tagName == "SPAN" || item.tagName == "span" || item.tagName == "Span") {
            if (this.bold == "") {
                this.bold = (item.style.fontWeight).trim();
            }
            if (this.italic == "") {
                this.italic = (item.style.fontStyle).trim();
            }
            if (this.underline == "") {
                this.underline = (item.style.textDecoration).trim();
            }
            item = item.parentElement;
        }
    };
    StaticTextStyle1Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.eleSubscription.unsubscribe();
    };
    StaticTextStyle1Component.prototype.boldToggle = function () {
        var ele = this.selectedEle.getElement();
        var selRng = this.services.selectedRange(ele);
        if (selRng.length <= 0 || (selRng.length == 1 && selRng[0].text == "")) {
            if (this.selectedEle.getElement().style.fontWeight == "bold") {
                this.selectedEle.getElement().style.fontWeight = "";
                this.bold = "";
            }
            else {
                this.selectedEle.getElement().style.fontWeight = "bold";
                this.bold = "bold";
            }
        }
        for (var i = 0; i < selRng.length; i++) {
            var item = selRng[i].dom;
            var boldType = "";
            selRng[i].dom.innerHTML = selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while (item.tagName == "SPAN" || item.tagName == "span" || item.tagName == "Span") {
                if (selRng[i].text != "") {
                    if (item.style.fontWeight == "bold") {
                        boldType = "bold";
                        this.bold = "normal";
                        selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='font-weight: normal;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
                        this.services.separateStyles(item, 'fontWeight', '', 'bold');
                        selRng[i].dom.children[1].style.fontWeight = "normal";
                        break;
                    }
                    else if (item.style.fontWeight == "normal") {
                        boldType = "normal";
                        this.bold = "bold";
                        selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='font-weight: bold;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
                        break;
                    }
                }
                else {
                    break;
                }
                item = item.parentElement;
            }
            if (boldType == "" && selRng[i].text != "") {
                this.bold = "bold";
                selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='font-weight: bold;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
            }
        }
    };
    StaticTextStyle1Component.prototype.underlineToggle = function () {
        var ele = this.selectedEle.getElement();
        var selRng = this.services.selectedRange(ele);
        if (selRng.length <= 0 || (selRng.length == 1 && selRng[0].text == "")) {
            if (this.selectedEle.getElement().style.textDecoration == "underline") {
                this.selectedEle.getElement().style.textDecoration = "";
                this.underline = "";
            }
            else {
                this.selectedEle.getElement().style.textDecoration = "underline";
                this.underline = "underline";
            }
        }
        for (var i = 0; i < selRng.length; i++) {
            var item = selRng[i].dom;
            var underlineType = "";
            selRng[i].dom.innerHTML = selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while (item.tagName == "SPAN" || item.tagName == "span" || item.tagName == "Span") {
                if (selRng[i].text != "") {
                    if (item.style.textDecoration == "underline") {
                        underlineType = "underline";
                        this.underline = "none";
                        selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='text-decoration: none ;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
                        this.services.separateStyles(item, 'textDecoration', 'none', 'underline');
                        selRng[i].dom.children[1].style.textDecoration = "none";
                        break;
                    }
                    else if (item.style.textDecoration == "none") {
                        underlineType = "none";
                        this.underline = "underline";
                        selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='text-decoration: underline;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
                    }
                }
                else {
                    break;
                }
                item = item.parentElement;
            }
            if (underlineType == "" && selRng[i].text != "") {
                this.underline = "underline";
                selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='text-decoration: underline;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
            }
        }
    };
    StaticTextStyle1Component.prototype.italicToggle = function () {
        var ele = this.selectedEle.getElement();
        var selRng = this.services.selectedRange(ele);
        if (selRng.length <= 0 || (selRng.length == 1 && selRng[0].text == "")) {
            if (this.selectedEle.getElement().style.fontStyle == "italic") {
                this.selectedEle.getElement().style.fontStyle = "";
                this.italic = "";
            }
            else {
                this.selectedEle.getElement().style.fontStyle = "italic";
                this.italic = "italic";
            }
        }
        for (var i = 0; i < selRng.length; i++) {
            var item = selRng[i].dom;
            var italicType = "";
            selRng[i].dom.innerHTML = selRng[i].dom.innerHTML.replace(/&(nbsp|amp|quot|lt|gt);/g, ' ');
            while (item.tagName == "SPAN" || item.tagName == "span" || item.tagName == "Span") {
                if (selRng[i].text != "") {
                    if (item.style.fontStyle == "italic") {
                        italicType = "italic";
                        this.italic = "normal";
                        selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='font-style: normal;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
                        this.services.separateStyles(item, 'fontStyle', '', 'italic');
                        selRng[i].dom.children[1].style.fontStyle = "normal";
                        break;
                    }
                    else if (item.style.fontStyle == "normal") {
                        italicType = "normal";
                        this.italic = "italic";
                        selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='font-style: italic;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
                        break;
                    }
                }
                else {
                    break;
                }
                item = item.parentElement;
            }
            if (italicType == "" && selRng[i].text != "") {
                this.italic = "italic";
                selRng[i].dom.innerHTML = "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(0, selRng[i].start) + "</span>" + "<span class='selectParent' style='font-style: italic;'>" + selRng[i].text + "</span>" + "<span class='selectParent'>" + (selRng[i].dom.innerHTML).substr(selRng[i].start + selRng[i].text.length) + "</span>";
            }
        }
    };
    return StaticTextStyle1Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StaticTextStyle1Component.prototype, "selectedEle", void 0);
StaticTextStyle1Component = __decorate([
    core_1.Component({
        selector: "textstyle1-style",
        templateUrl: "./textStyles/static.textStyle1.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        },
    }),
    __metadata("design:paramtypes", [shared_services2_1.Services])
], StaticTextStyle1Component);
exports.StaticTextStyle1Component = StaticTextStyle1Component;
//# sourceMappingURL=static.textstyle1.js.map