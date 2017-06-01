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
var shared_variable_1 = require("../tools/shared/shared.variable");
var css_prop_1 = require("./css.prop");
var SelectedElement = (function () {
    function SelectedElement(shared, css) {
        this.shared = shared;
        this.css = css;
        this.selectedElement = document.createElement('div');
        this.touched = new core_1.EventEmitter();
        this.modal = new core_1.EventEmitter();
        this.evt = new core_1.EventEmitter();
        this.textEmitter = new core_1.EventEmitter();
        this.setStyles = [];
        this.otherStyles = [];
        this.setAttrs = [];
        this.otherAttrs = [];
        this.div = [
            'accesskey',
            'align',
            'class',
            'contenteditable',
            'contextmenu',
            'dir',
            'draggable',
            'dropzone',
            'hidden',
            'id',
            'lang',
            'spellcheck',
            'style',
            'tabindex',
            'title',
            'translate',
        ];
        this.img = [
            'accesskey',
            'alt',
            'class',
            'contenteditable',
            'contextmenu',
            'crossorigin',
            'dir',
            'draggable',
            'dropzone',
            'height',
            'hidden',
            'id',
            'ismap',
            'lang',
            'longdesc',
            'sizes',
            'spellcheck',
            'src',
            'srcset',
            'style',
            'tabindex',
            'title',
            'translate',
            'usemap',
            'width'
        ];
        this.input = [
            'accept',
            'accesskey',
            'alt',
            'autocomplete',
            'autofocus',
            'checked',
            'class',
            'contenteditable',
            'contextmenu',
            'dir',
            'dirname',
            'disabled',
            'draggable',
            'dropzone',
            'form',
            'formaction',
            'formenctype',
            'formmethod',
            'formnovalidate',
            'formtarget',
            'height',
            'hidden',
            'id',
            'lang',
            'list',
            'max',
            'maxlength',
            'min',
            'multiple',
            'name',
            'pattern',
            'placeholder',
            'readonly',
            'required',
            'size',
            'spellcheck',
            'src',
            'step',
            'style',
            'tabindex',
            'title',
            'translate',
            'type',
            'value',
            'width',
        ];
        this.button = [
            'accesskey',
            'autofocus',
            'class',
            'contenteditable',
            'contextmenu',
            'dir',
            'disabled',
            'draggable',
            'dropzone',
            'form',
            'formaction',
            'formenctype',
            'formmethod',
            'formnovalidate',
            'formtarget',
            'framenamename',
            'hidden',
            'id',
            'lang',
            'spellcheck',
            'style',
            'tabindex',
            'title',
            'translate',
            'type',
            'value'
        ];
        this.select = [
            'accesskey',
            'autofocus',
            'class',
            'contenteditable',
            'contextmenu',
            'dir',
            'disabled',
            'draggable',
            'dropzone',
            'form',
            'hidden',
            'id',
            'lang',
            'name',
            'required',
            'size',
            'spellcheck',
            'style',
            'tabindex',
            'title',
            'translate',
        ];
        this.global = ['accesskey',
            'class',
            'contenteditable',
            'contextmenu',
            'dir',
            'draggable',
            'dropzone',
            'hidden',
            'id',
            'lang',
            'spellcheck',
            'style',
            'tabindex',
            'title',
            'translate',
        ];
    }
    SelectedElement.prototype.setElement = function (ele) {
        if (ele.getAttribute('id') != '_domContainer') {
            if (ele.getAttribute('class') == 'selectParent') {
                this.setElement(ele.parentElement);
            }
            else {
                this.previousElement = this.selectedElement;
                try {
                    this.previousElement.setAttribute('class', this.previousElement.getAttribute('class').replace(/ drawBorder/g, ''));
                }
                catch (err) { }
                ele.setAttribute('class', ele.getAttribute('class') + ' drawBorder');
                if (ele != this.selectedElement) {
                    this.selectedElement = ele;
                    this.setSetAttrs();
                    this.shared.selectedEle = this.selectedElement;
                    this.shared.updateStyles();
                    this.updateStyles();
                }
            }
        }
    };
    SelectedElement.prototype.getElement = function () {
        return this.selectedElement;
    };
    SelectedElement.prototype.updateStyles = function () {
        this.evt.emit();
    };
    SelectedElement.prototype.getSelectedEleEmitter = function () {
        return this.evt;
    };
    SelectedElement.prototype.getTextEleEmitter = function () {
        return this.textEmitter;
    };
    SelectedElement.prototype.getIBeam = function (ele) {
        var rng, startSel;
        var sel = window.getSelection();
        rng = sel.getRangeAt(0);
        startSel = ele.compareDocumentPosition(rng.startContainer) === Node.DOCUMENT_POSITION_FOLLOWING ? 0 : rng.startOffset;
        return startSel;
    };
    SelectedElement.prototype.startTextTimer = function () {
        var e = this.selectedElement;
        var prev;
        var prevDom;
        var emitter = this.textEmitter;
        var _this = this;
        this.textTimer = setInterval(function () {
            try {
                var rng, startSel;
                var sel = window.getSelection();
                rng = sel.getRangeAt(0);
                startSel = e.compareDocumentPosition(rng.startContainer) === Node.DOCUMENT_POSITION_FOLLOWING ? 0 : rng.startOffset;
                if (prev != startSel || prevDom != rng.startContainer.parentElement) {
                    prev = startSel;
                    prevDom = rng.startContainer.parentElement;
                    emitter.next(rng.startContainer.parentElement);
                }
            }
            catch (err) { }
        }, 500);
    };
    SelectedElement.prototype.stopTextTimer = function () {
        clearInterval(this.textTimer);
    };
    SelectedElement.prototype.touchEvent = function (evt) {
        this.touched.emit(evt);
    };
    SelectedElement.prototype.setSetAttrs = function () {
        this.setAttrs = [];
        try {
            var attrs = JSON.parse(JSON.stringify(this[this.selectedElement.getAttribute('attrtype')]));
            for (var i = 0, atts = this.selectedElement.attributes, n = atts.length, arr = []; i < n; i++) {
                var filteredList = attrs.filter(function (ele) {
                    return ele.toLowerCase().indexOf(atts[i].nodeName.toLowerCase()) > -1;
                }.bind(this));
                if (filteredList.length > 0) {
                    this.setAttrs.push(atts[i]);
                    attrs.splice(attrs.indexOf(atts[i].nodeName), 1);
                }
            }
        }
        catch (err) { }
        this.otherAttrs = attrs;
        this.setSetStyles();
    };
    SelectedElement.prototype.setSetStyles = function () {
        this.setStyles = [];
        var otherStyles = JSON.parse(JSON.stringify(this.css.cssNames));
        try {
            var styles = (this.selectedElement.attributes['style'].nodeValue).split(';');
            for (var i = 0; i < styles.length; i++) {
                if (styles[i] != "") {
                    var s = styles[i].split(':');
                    var filteredList = otherStyles.filter(function (ele) {
                        return ele.toLowerCase().indexOf((s[0].trim()).toLowerCase()) > -1;
                    }.bind(this));
                    if (filteredList.length > 0) {
                        var style = {};
                        style.name = s[0].trim();
                        style.value = s[1].trim();
                        this.setStyles.push(style);
                        otherStyles.splice(otherStyles.indexOf(s[0].trim()), 1);
                    }
                }
            }
        }
        catch (err) { }
        this.otherStyles = otherStyles;
    };
    SelectedElement.prototype.setModal = function (evt) {
        this.modal.emit(evt);
    };
    return SelectedElement;
}());
SelectedElement = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [shared_variable_1.SharedVariable, css_prop_1.CSSProp])
], SelectedElement);
exports.SelectedElement = SelectedElement;
//# sourceMappingURL=shared.service.js.map