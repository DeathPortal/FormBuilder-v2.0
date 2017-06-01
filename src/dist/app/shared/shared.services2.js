"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Services = (function () {
    function Services() {
        this.rangeElements = [];
    }
    Services.prototype.onlySpan = function (any) {
        var span = document.createElement('span');
        span.innerHTML = any.innerHTML.replace('&nbsp;', ' ');
        var style = any.getAttribute('style');
        if (style != null) {
            span.setAttribute('style', any.getAttribute('style'));
        }
        if (any.tagName == 'B' || any.tagName == 'STRONG') {
            span.style.fontWeight = "bold";
            any = span;
        }
        else if (any.tagName == 'I' || any.tagName == 'EM') {
            span.style.fontStyle = "italic";
            any = span;
        }
        else if (any.tagName == 'INS') {
            span.style.textDecoration = "underline";
            any = span;
        }
        else {
            any = span;
        }
        for (var i = 0; i < any.childNodes.length; i++) {
            if (any.childNodes[i].nodeType == 3) {
                var spanEle = document.createElement('span');
                spanEle.innerHTML = any.childNodes[i].nodeValue;
                spanEle.setAttribute('class', "selectParent");
                any.replaceChild(spanEle, any.childNodes[i]);
            }
            else {
                var child = this.onlySpan(any.childNodes[i]);
                any.replaceChild(child, any.childNodes[i]);
            }
        }
        any.setAttribute('class', "selectParent");
        return any;
    };
    Services.prototype.separateStyles = function (item, style, val1, val2) {
        item.style[style] = val1;
        for (var i = 0; i < item.children.length; i++) {
            this.separateStyles(item.children[i], style, val1, val2);
        }
        if (item.children.length <= 0) {
            item.style[style] = val2;
        }
    };
    Services.prototype.selectedRange = function (ele) {
        this.rangeElements = [];
        var rng, startSel, endSel, sel;
        var rangeElements = [];
        sel = window.getSelection();
        if (!sel.rangeCount
            || ele.compareDocumentPosition((rng = sel.getRangeAt(0)).startContainer) === Node.DOCUMENT_POSITION_PRECEDING
            || ele.compareDocumentPosition(rng.endContainer) === Node.DOCUMENT_POSITION_FOLLOWING)
            sel = "";
        else {
            startSel = ele.compareDocumentPosition(rng.startContainer) === Node.DOCUMENT_POSITION_FOLLOWING ? 0 : rng.startOffset;
            endSel = ele.compareDocumentPosition(rng.endContainer) === Node.DOCUMENT_POSITION_PRECEDING ? ele.textContent.length : rng.endOffset;
            if (rng.startContainer.parentElement == rng.endContainer.parentElement) {
                var range = {};
                sel = rng.startContainer.parentElement.textContent.substring(startSel, endSel);
                range.start = startSel;
                range.stop = endSel;
                range.text = sel;
                range.dom = rng.startContainer.parentElement;
                rangeElements.push(range);
            }
            else {
                var commonParent = rng.startContainer.parentElement.parentElement;
                var cp = rng.endContainer.parentElement.parentElement;
                while (true) {
                    var flag = false;
                    while (true) {
                        if (commonParent == cp) {
                            flag = true;
                            break;
                        }
                        else if (cp.tagName != "SPAN") {
                            break;
                        }
                        cp = cp.parentElement;
                    }
                    if (flag) {
                        break;
                    }
                    commonParent = commonParent.parentElement;
                }
                var ele = {};
                this.start = false;
                this.stop = false;
                ele = commonParent;
                this.fetchChildren(ele, rng);
                rangeElements = this.rangeElements;
            }
        }
        return rangeElements;
    };
    Services.prototype.fetchChildren = function (ele, rng) {
        for (var i = 0; i < ele.children.length; i++) {
            this.fetchChildren(ele.children[i], rng);
        }
        if (this.stop == true) {
            return;
        }
        if (ele.children.length <= 0) {
            if (ele == rng.startContainer.parentElement) {
                this.start = true;
                var range = {};
                var startSel = ele.compareDocumentPosition(rng.startContainer) === Node.DOCUMENT_POSITION_FOLLOWING ? 0 : rng.startOffset;
                range.start = startSel;
                range.stop = rng.startContainer.textContent.length;
                range.text = rng.startContainer.textContent.substring(range.start, range.stop);
                range.dom = rng.startContainer.parentElement;
                this.rangeElements.push(range);
            }
            else if (ele == rng.endContainer.parentElement) {
                this.stop = true;
                var range = {};
                var endSel = ele.compareDocumentPosition(rng.endContainer) === Node.DOCUMENT_POSITION_PRECEDING ? ele.textContent.length : rng.endOffset;
                range.start = 0;
                range.stop = endSel;
                range.text = rng.endContainer.textContent.substring(range.start, range.stop);
                range.dom = rng.endContainer.parentElement;
                this.rangeElements.push(range);
            }
            else if (this.start == true) {
                var range = {};
                range.start = 0;
                range.stop = ele.textContent.length;
                range.text = ele.textContent.substring(range.start, range.stop);
                range.dom = ele;
                this.rangeElements.push(range);
            }
        }
    };
    return Services;
}());
Services = __decorate([
    core_1.Injectable()
], Services);
exports.Services = Services;
//# sourceMappingURL=shared.services2.js.map