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
var $ = require("jquery");
var GradientComponent = (function () {
    function GradientComponent() {
        this.reply = new core_1.EventEmitter();
        this.response = new core_1.EventEmitter();
        this.colors = [];
        this.backColor = "";
        this.transparency = [];
        this.opacity = {};
        this.color = {};
        this.id = 0;
        this.direction = "linear-gradient";
        this.degree = 0;
        this.disableDegree = false;
    }
    GradientComponent.prototype.sendBackground = function () {
        var evt = {};
        var degree;
        if (this.direction == "linear-gradient") {
            this.disableDegree = true;
            degree = (this.degree + 90) + 'deg';
        }
        else {
            this.disableDegree = false;
            degree = "ellipse at center";
        }
        evt.response = this.direction + "(" + degree + ", " + this.backColor + ")";
        evt.statusCode = 0;
        this.reply.next(evt);
    };
    GradientComponent.prototype.cancelBackground = function () {
        var evt = {};
        evt.statusCode = 1;
        this.reply.next(evt);
    };
    GradientComponent.prototype.processResponse = function (evt) {
        this.color.show = false;
        if (evt.statusCode == 0) {
            var val = ((evt.response.split("(")[1]).split(")")[0]).split(",");
            this.selectedColor.red = parseInt(val[0]);
            this.selectedColor.green = parseInt(val[1]);
            this.selectedColor.blue = parseInt(val[2]);
            this.calculateColor();
        }
    };
    GradientComponent.prototype.ngOnInit = function () {
        this.color.show = false;
        var color = {};
        color.pos = 0;
        color.red = 0;
        color.green = 0;
        color.blue = 0;
        color.z = 0;
        color.uid = 0;
        this.colors.push(color);
        var color = {};
        color.pos = 100;
        color.red = 255;
        color.green = 255;
        color.blue = 255;
        color.z = 0;
        color.uid = 1;
        this.colors.push(color);
        var trans = {};
        trans.pos = 0;
        trans.val = 0.5;
        trans.color = 255 - Math.floor(trans.val * 255);
        trans.z = 0;
        trans.uid = 0;
        this.transparency.push(trans);
        var trans = {};
        trans.pos = 100;
        trans.val = 1;
        trans.color = 255 - Math.floor(trans.val * 255);
        trans.z = 0;
        trans.uid = 1;
        this.transparency.push(trans);
        this.calculateColor();
        this.opacity.opacity = false;
    };
    GradientComponent.prototype.calculateColor = function () {
        this.sort(this.colors);
        this.sort(this.transparency);
        var pillets = [];
        for (var i = 0; i < this.colors.length; i++) {
            var trans;
            for (var j = 0; j < this.transparency.length; j++) {
                if (this.colors[i].pos <= this.transparency[j].pos && j == 0) {
                    trans = this.transparency[j].val;
                    break;
                }
                if (this.colors[i].pos >= this.transparency[j].pos && j == this.transparency.length - 1) {
                    trans = this.transparency[j].val;
                    break;
                }
                if (this.colors[i].pos > this.transparency[j].pos && this.colors[i].pos < this.transparency[j + 1].pos) {
                    trans = this.transparency[j].val + ((this.transparency[j + 1].val - this.transparency[j].val) * this.colors[i].pos / (this.transparency[j + 1].pos - this.transparency[j].pos));
                }
            }
            var pillet = {};
            pillet.val = 'rgba(' + this.colors[i].red + ',' + this.colors[i].green + ',' + this.colors[i].blue + ',' + trans + ')';
            pillet.pos = this.colors[i].pos;
            pillets.push(pillet);
        }
        for (var i = 0; i < this.transparency.length; i++) {
            var color;
            for (var j = 0; j < this.colors.length; j++) {
                if (this.transparency[i].pos <= this.colors[j].pos && j == 0) {
                    color = this.colors[j].red + "," + this.colors[j].green + "," + this.colors[j].blue;
                    break;
                }
                if (this.transparency[i].pos >= this.colors[j].pos && j == this.colors.length - 1) {
                    color = this.colors[j].red + "," + this.colors[j].green + "," + this.colors[j].blue;
                    break;
                }
                if (this.transparency[i].pos > this.colors[j].pos && this.transparency[i].pos < this.colors[j + 1].pos) {
                    var divisor = parseFloat(this.colors[j + 1].pos) - parseFloat(this.colors[j].pos);
                    var red1 = parseFloat(this.colors[j].red);
                    var red2 = parseFloat(this.colors[j + 1].red);
                    var green1 = parseFloat(this.colors[j].green);
                    var green2 = parseFloat(this.colors[j + 1].green);
                    var blue1 = parseFloat(this.colors[j].blue);
                    var blue2 = parseFloat(this.colors[j + 1].blue);
                    var red = Math.floor(red1 + (((red2 - red1) / divisor) * parseInt(this.transparency[i].pos)));
                    var green = Math.floor(green1 + (((green2 - green1) / divisor) * parseInt(this.transparency[i].pos)));
                    var blue = Math.floor(blue1 + (((blue2 - blue1) / divisor) * parseInt(this.transparency[i].pos)));
                    color = red + "," + green + "," + blue;
                }
            }
            var pillet = {};
            pillet.val = 'rgba(' + color + ',' + this.transparency[i].val + ')';
            pillet.pos = this.transparency[i].pos;
            pillets.push(pillet);
        }
        this.sort(pillets);
        var str = "";
        for (var i = 0; i < pillets.length; i++) {
            str += pillets[i].val + " " + pillets[i].pos + "%";
            if (i != pillets.length - 1) {
                str += ", ";
            }
        }
        this.backColor = str;
        var degree;
        if (this.direction == "linear-gradient") {
            this.disableDegree = true;
            degree = (this.degree + 90) + 'deg';
        }
        else {
            this.disableDegree = false;
            degree = "ellipse at center";
        }
        this.previewSm.nativeElement.style.background = "linear-gradient(to right, " + this.backColor + ")";
        this.preview.nativeElement.style.background = this.direction + "(" + degree + ", " + this.backColor + ")";
    };
    GradientComponent.prototype.focusTimer = function () {
        var self = this;
        this.timer = setInterval(function () {
            var degree;
            if (self.direction == "linear-gradient") {
                self.disableDegree = true;
                degree = (self.degree + 90) + 'deg';
            }
            else {
                self.disableDegree = false;
                degree = "ellipse at center";
            }
            self.preview.nativeElement.style.background = self.direction + "(" + degree + ", " + self.backColor + ")";
        }, 500);
    };
    GradientComponent.prototype.blurTimer = function () {
        clearInterval(this.timer);
    };
    GradientComponent.prototype.changeDirection = function (direction) {
        this.direction = direction;
        var degree;
        if (direction == "linear-gradient") {
            this.disableDegree = true;
            degree = (this.degree + 90) + 'deg';
        }
        else {
            this.disableDegree = false;
            degree = "ellipse at center";
        }
        this.preview.nativeElement.style.background = this.direction + "(" + degree + ", " + this.backColor + ")";
    };
    GradientComponent.prototype.addTransperancy = function (event) {
        var left = event.clientX - event.target.getBoundingClientRect().left;
        this.sort(this.transparency);
        var trans = {};
        trans.pos = left * 100 / event.target.clientWidth;
        for (var i = 0; i < this.transparency.length; i++) {
            if (trans.pos <= this.transparency[i].pos && i == 0) {
                trans.val = this.transparency[i].val;
                break;
            }
            if (trans.pos >= this.transparency[i].pos && i == this.transparency.length - 1) {
                trans.val = this.transparency[i].val;
                break;
            }
            if (trans.pos > this.transparency[i].pos && trans.pos < this.transparency[i + 1].pos) {
                trans.val = this.transparency[i].val + ((this.transparency[i + 1].val - this.transparency[i].val) * trans.pos / (this.transparency[i + 1].pos - this.transparency[i].pos));
            }
        }
        trans.uid = this.transparency.length;
        trans.z = 0;
        trans.color = 255 - Math.floor(trans.val * 255);
        this.transparency.push(trans);
        this.calculateColor();
        event.preventDefault();
    };
    GradientComponent.prototype.addColor = function (event) {
        var left = event.clientX - event.target.getBoundingClientRect().left;
        this.sort(this.colors);
        var color = {};
        color.pos = left * 100 / event.target.clientWidth;
        for (var i = 0; i < this.colors.length; i++) {
            if (color.pos <= this.colors[i].pos && i == 0) {
                color.val = this.colors[i].val;
                break;
            }
            if (color.pos >= this.colors[i].pos && i == this.colors.length - 1) {
                color.val = this.colors[i].val;
                break;
            }
            if (color.pos > this.colors[i].pos && color.pos < this.colors[i + 1].pos) {
                var divisor = parseFloat(this.colors[i + 1].pos) - parseFloat(this.colors[i].pos);
                var red1 = parseFloat(this.colors[i].red);
                var red2 = parseFloat(this.colors[i + 1].red);
                var green1 = parseFloat(this.colors[i].green);
                var green2 = parseFloat(this.colors[i + 1].green);
                var blue1 = parseFloat(this.colors[i].blue);
                var blue2 = parseFloat(this.colors[i + 1].blue);
                color.red = Math.floor(red1 + (((red2 - red1) / divisor) * parseInt(color.pos)));
                color.green = Math.floor(green1 + (((green2 - green1) / divisor) * parseInt(color.pos)));
                color.blue = Math.floor(blue1 + (((blue2 - blue1) / divisor) * parseInt(color.pos)));
            }
        }
        color.uid = this.colors.length;
        color.z = 0;
        this.colors.push(color);
        event.preventDefault();
    };
    GradientComponent.prototype.moveTransparency = function (event, trans) {
        var self = event.target;
        var parent;
        while (self.getAttribute("_id") != "move") {
            self = self.parentElement;
        }
        this.opacity.opacity = false;
        this.color.show = false;
        parent = self.parentElement;
        trans.z = 99;
        var initLeft = event.clientX - (parseFloat(self.style.left.match(/[0-9]*\.?[0-9]/g).join("")) * parent.clientWidth / 100);
        var initTop = event.clientY - parent.getBoundingClientRect().top;
        self.setAttribute("_active", 'transActive');
        var uid = this.transparency[this.transparency.indexOf(trans)].uid;
        var _this = this;
        $(window).mousemove(function (event) {
            try {
                if (self.getAttribute("_active") == "transActive") {
                    var top = (event.clientY - initTop - parent.getBoundingClientRect().top) * 100 / parent.clientHeight;
                    var l = (event.clientX - initLeft) * 100 / parent.clientWidth;
                    if (l >= 100) {
                        self.style.left = 100 + "%";
                        l = 100;
                    }
                    else if (l <= 0) {
                        self.style.left = 0 + "%";
                        l = 0;
                    }
                    else {
                        self.style.left = l + "%";
                    }
                    var index;
                    for (var k = 0; k < _this.transparency.length; k++) {
                        if (uid == _this.transparency[k].uid) {
                            index = k;
                            break;
                        }
                    }
                    var notRemove = true;
                    if (top < -100) {
                        if (_this.transparency.length > 2) {
                            _this.transparency.splice(index, 1);
                            notRemove = false;
                        }
                    }
                    if (notRemove) {
                        _this.transparency[index].pos = l;
                    }
                    _this.calculateColor();
                }
            }
            catch (err) {
            }
        });
        $(window).unbind('mouseup');
        $(window).mouseup(function (event) {
            try {
                var l = (event.clientX - initLeft) * 100 / self.parentElement.clientWidth;
                if (l >= 100) {
                    self.style.left = 100 + "%";
                    l = 100;
                }
                else if (l <= 0) {
                    self.style.left = 0 + "%";
                    l = 0;
                }
                else {
                    self.style.left = l + "%";
                }
                var index;
                for (var k = 0; k < _this.transparency.length; k++) {
                    if (uid == _this.transparency[k].uid) {
                        index = k;
                        break;
                    }
                }
                _this.transparency[index].z = 0;
                _this.transparency[index].pos = l;
                _this.calculateColor();
            }
            catch (err) {
            }
            self.setAttribute("_active", '');
            $(window).unbind('mousemove');
            $(window).unbind('mouseup');
            event.preventDefault();
            event.stopPropagation();
        });
        event.preventDefault();
        event.stopPropagation();
    };
    GradientComponent.prototype.moveColor = function (event, color) {
        var self = event.target;
        var parent;
        while (self.getAttribute("_id") != "move") {
            self = self.parentElement;
        }
        this.opacity.opacity = false;
        this.color.show = false;
        parent = self.parentElement;
        color.z = 99;
        var initLeft = event.clientX - (parseFloat(self.style.left.match(/[0-9]*\.?[0-9]/g).join("")) * parent.clientWidth / 100);
        var initTop = event.clientY - parent.getBoundingClientRect().top;
        self.setAttribute("_active", 'colorActive');
        var uid = this.colors[this.colors.indexOf(color)].uid;
        var _this = this;
        $(window).mousemove(function (event) {
            try {
                if (self.getAttribute("_active") == "colorActive") {
                    var top = (event.clientY - initTop - parent.getBoundingClientRect().top) * 100 / parent.clientHeight;
                    var l = (event.clientX - initLeft) * 100 / parent.clientWidth;
                    if (l >= 100) {
                        self.style.left = 100 + "%";
                        l = 100;
                    }
                    else if (l <= 0) {
                        self.style.left = 0 + "%";
                        l = 0;
                    }
                    else {
                        self.style.left = l + "%";
                    }
                    var index;
                    for (var k = 0; k < _this.colors.length; k++) {
                        if (uid == _this.colors[k].uid) {
                            index = k;
                            break;
                        }
                    }
                    var notRemove = true;
                    if (top > 200) {
                        if (_this.colors.length > 2) {
                            _this.colors.splice(index, 1);
                            notRemove = false;
                        }
                    }
                    if (notRemove) {
                        _this.colors[index].pos = l;
                    }
                    _this.calculateColor();
                }
            }
            catch (err) {
            }
        });
        $(window).unbind('mouseup');
        $(window).mouseup(function (event) {
            try {
                var l = (event.clientX - initLeft) * 100 / self.parentElement.clientWidth;
                if (l >= 100) {
                    self.style.left = 100 + "%";
                    l = 100;
                }
                else if (l <= 0) {
                    self.style.left = 0 + "%";
                    l = 0;
                }
                else {
                    self.style.left = l + "%";
                }
                var index;
                for (var k = 0; k < _this.colors.length; k++) {
                    if (uid == _this.colors[k].uid) {
                        index = k;
                        break;
                    }
                }
                _this.colors[index].z = 0;
                _this.colors[index].pos = l;
                _this.calculateColor();
            }
            catch (err) {
            }
            self.setAttribute("_active", '');
            $(window).unbind('mousemove');
            $(window).unbind('mouseup');
            event.preventDefault();
            event.stopPropagation();
        });
        event.preventDefault();
        event.stopPropagation();
    };
    GradientComponent.prototype.changeOpacity = function (event, trans) {
        this.opacity.opacity = true;
        this.opacity.opacityTop = event.target.getBoundingClientRect().top;
        this.opacity.opacityLeft = event.target.getBoundingClientRect().left;
        this.opacity.opacityValue = (trans.val * 100) + '';
        this.selectedTrans = trans;
        var self = this.selectedTrans;
        var op = this.opacity;
        var col = this.color;
        $(window).mouseup();
        $(window).unbind('mouseup');
        $(window).mouseup(function (event) {
            try {
                if (event.target.getAttribute("_id") != "unhide" && event.target.parentElement.getAttribute('_id') != "unhide") {
                    op.opacity = false;
                    col.color.show = false;
                    $(window).unbind('mouseup');
                }
            }
            catch (err) {
                op.opacity = false;
                col.color.show = false;
                $(window).unbind('mouseup');
            }
        });
        event.preventDefault();
        event.stopPropagation();
    };
    GradientComponent.prototype.changeColor = function (event, color) {
        this.color.show = true;
        this.color.top = event.target.getBoundingClientRect().top;
        this.color.left = event.target.getBoundingClientRect().left;
        this.selectedColor = color;
        var self = this.selectedColor;
        var op = this.opacity;
        var col = this.color;
        $(window).mouseup();
        $(window).unbind('mouseup');
        $(window).mouseup(function (event) {
            try {
                if (event.target.getAttribute("_id") != "unhide" && event.target.parentElement.getAttribute('_id') != "unhide") {
                    op.show = false;
                    var col = this.color;
                    $(window).unbind('mouseup');
                }
            }
            catch (err) {
                op.show = false;
                var col = this.color;
                $(window).unbind('mouseup');
            }
        });
        event.preventDefault();
        event.stopPropagation();
    };
    GradientComponent.prototype.updateOpacity = function (event) {
        this.transparency[this.transparency.indexOf(this.selectedTrans)].val = event.target.value / 100;
        this.transparency[this.transparency.indexOf(this.selectedTrans)].color = 255 - Math.floor(event.target.value * 255 / 100);
        this.calculateColor();
    };
    GradientComponent.prototype.sort = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i].pos > arr[j].pos) {
                    var temp = JSON.parse(JSON.stringify(arr[i]));
                    arr[i] = JSON.parse(JSON.stringify(arr[j]));
                    arr[j] = temp;
                }
            }
        }
    };
    return GradientComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GradientComponent.prototype, "reply", void 0);
__decorate([
    core_1.ViewChild('preview'),
    __metadata("design:type", Object)
], GradientComponent.prototype, "preview", void 0);
__decorate([
    core_1.ViewChild('previewSm'),
    __metadata("design:type", Object)
], GradientComponent.prototype, "previewSm", void 0);
GradientComponent = __decorate([
    core_1.Component({
        selector: 'gradient-component',
        templateUrl: "./html/gradient.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
    })
], GradientComponent);
exports.GradientComponent = GradientComponent;
//# sourceMappingURL=gradient.component.js.map