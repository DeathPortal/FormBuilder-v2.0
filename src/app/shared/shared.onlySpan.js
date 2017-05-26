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
        else if (any.tagName == 'P' || any.tagName == 'PRE') {
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
    return Services;
}());
Services = __decorate([
    core_1.Injectable()
], Services);
exports.Services = Services;
//# sourceMappingURL=shared.onlySpan.js.map