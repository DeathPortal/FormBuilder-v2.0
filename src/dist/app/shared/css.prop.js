"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CSSProp = (function () {
    function CSSProp() {
        this.cssNames = ["azimuth", "align-items", "background", "background-attachment", "background-color", "background-image", "background-position", "background-repeat", "border", "border-bottom", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-style", "border-top-width", "border-width", "bottom", "caption-side", "clear", "clip", "color", "content", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "elevation", "empty-cells", "float", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "height", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "max-height", "max-width", "min-height", "min-width", "orphans", "outline", "outline-color", "outline-style", "outline-width", "overflow", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "pitch", "pitch-range", "play-during", "position", "quotes", "richness", "right", "size", "speak", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "table-layout", "text-align", "text-decoration", "text-indent", "text-shadow", "text-transform", "top", "unicode-bidi", "vertical-align", "visibility", "voice-family", "volume", "white-space", "widows", "width", "word-spacing", "z-index",];
        this.cssValues = { "azimuth": ["left-side", "far-left", "left", "center-left", "center", "center-right", "right", "far-right", "right-side", "behind", "leftwards", "rightwards"], "align-items": ["stretch", "center", "flex-start", "flex-end", "baseline", "initial", "inherit"], "background": [""], "background-attachment": ["fixed", "scroll"], "background-color": [""], "background-image": [""], "background-position": ["top", "left", "top", "center", "top", "right", "center", "left", "center", "center", "center", "right", "bottom", "left", "bottom", "center", "bottom", "right"], "background-repeat": ["repeat", "repeat-x", "repeat-y", "no-repeat"], "border": [""], "border-bottom": [""], "border-bottom-color": [""], "border-bottom-style": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"], "border-bottom-width": ["thin", "medium", "thick"], "border-collapse": ["collapse", "separate"], "border-color": [""], "border-left": [""], "border-left-color": [""], "border-left-style": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"], "border-left-width": ["thin", "medium", "thick"], "border-right": [""], "border-right-color": [""], "border-right-style": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"], "border-right-width": ["thin", "medium", "thick"], "border-spacing": [""], "border-style": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"], "border-top": [""], "border-top-color": [""], "border-top-style": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"], "border-top-width": ["thin", "medium", "thick"], "border-width": ["thin", "medium", "thick"], "bottom": [""], "caption-side": ["top", "bottom", "left", "right"], "clear": ["left", "right", "both", "none"], "clip": [""], "color": ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"], "content": ["", "open-quote", "close-quote", "no-open-quote", "no-close-quote"], "counter-increment": [""], "counter-reset": [""], "cue": ["cue-before", "cue-after"], "cue-after": [""], "cue-before": [""], "cursor": ["auto", "crosshair", "default", "pointer", "move", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "text", "wait", "help"], "direction": ["ltr", "rtl"], "display": ["none", "inline", "block", "list-item", "run-in", "compact", "marker", "table", "inline-table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption"], "elevation": ["below", "level", "above", "higher", "lower"], "empty-cells": ["show", "hide"], "float": ["left", "right", "none"], "font": ["font-style", "font-variant", "font-weight", "font-size", "line-height", "font-family"], "font-family": [""], "font-size": ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "smaller", "larger"], "font-size-adjust": [""], "font-stretch": ["normal", "wider", "narrower", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], "font-style": ["normal", "italic", "oblique"], "font-variant": ["normal", "small-caps"], "font-weight": ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "height": [""], "left": [""], "letter-spacing": [""], "line-height": [""], "list-style": [""], "list-style-image": [""], "list-style-position": ["inside", "outside"], "list-style-type": ["disc", "circle", "square", "decimal", "decimal-leading-zero", "lower-roman", "upper-roman", "lower-alpha", "upper-alpha", "lower-greek", "lower-latin", "upper-latin", "hebrew", "armenian", "georgian", "cjk-ideographic", "hiragana", "katakana", "hiragana-iroha", "katakana-iroha"], "margin": ["margin-top", "margin-right", "margin-bottom", "margin-left"], "margin-bottom": [""], "margin-left": [""], "margin-right": [""], "margin-top": [""], "marker-offset": [""], "marks": ["crop", "cross"], "max-height": [""], "max-width": [""], "min-height": [""], "min-width": [""], "orphans": [""], "outline": ["outline-color", "outline-style", "outline-width"], "outline-color": [""], "outline-style": ["none", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"], "outline-width": ["thin", "medium", "thick"], "overflow": ["visible", "hidden", "scroll", "auto"], "padding": [""], "padding-bottom": [""], "padding-left": [""], "padding-right": [""], "padding-top": [""], "page": [""], "page-break-after": ["auto", "always", "avoid", "left", "right"], "page-break-before": ["auto", "always", "avoid", "left", "right"], "page-break-inside": ["auto", "avoid"], "pause": ["pause-before", "pause-after"], "pause-after": [""], "pause-before": [""], "pitch": ["x-low", "low", "medium", "high", "x-high"], "pitch-range": [""], "play-during": ["mix", "repeat", "auto", "none"], "position": ["static", "relative", "absolute", "fixed"], "quotes": [""], "richness": [""], "right": [""], "size": ["auto", "landscape", "potrait"], "speak": ["normal", "none", "spell-out"], "speak-header": ["once", "always"], "speak-numeral": ["digits", "continuous"], "speak-punctuation": ["code", "none"], "speech-rate": ["x-slow", "slow", "medium", "fast", "x-fast", "faster", "slower"], "stress": [""], "table-layout": ["auto", "fixed"], "text-align": ["left", "right", "center", "justify"], "text-decoration": ["none", "underline", "overline", "line-through", "blink"], "text-indent": [""], "text-shadow": [""], "text-transform": ["none", "capitalize", "uppercase", "lowercase"], "top": [""], "unicode-bidi": ["normal", "embed", "bidi-override"], "vertical-align": ["baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom"], "visibility": ["visible", "hidden", "collapse"], "voice-family": [""], "volume": ["silent", "x-soft", "soft", "medium", "loud", "x-loud"], "white-space": ["normal", "pre", "nowrap"], "widows": [""], "width": [""], "word-spacing": [""], "z-index": [""] };
        this.css = [
            {
                "styleName": "azimuth",
                "styleValue": [
                    "left-side",
                    "far-left",
                    "left",
                    "center-left",
                    "center",
                    "center-right",
                    "right",
                    "far-right",
                    "right-side",
                    "behind",
                    "leftwards",
                    "rightwards"
                ]
            },
            {
                "styleName": "background",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "background-attachment",
                "styleValue": [
                    "fixed",
                    "scroll"
                ]
            },
            {
                "styleName": "background-color",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "background-image",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "background-position",
                "styleValue": [
                    "top",
                    "left",
                    "top",
                    "center",
                    "top",
                    "right",
                    "center",
                    "left",
                    "center",
                    "center",
                    "center",
                    "right",
                    "bottom",
                    "left",
                    "bottom",
                    "center",
                    "bottom",
                    "right"
                ]
            },
            {
                "styleName": "background-repeat",
                "styleValue": [
                    "repeat",
                    "repeat-x",
                    "repeat-y",
                    "no-repeat"
                ]
            },
            {
                "styleName": "border",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-bottom",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-bottom-color",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-bottom-style",
                "styleValue": [
                    "none",
                    "hidden",
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset"
                ]
            },
            {
                "styleName": "border-bottom-width",
                "styleValue": [
                    "thin",
                    "medium",
                    "thick"
                ]
            },
            {
                "styleName": "border-collapse",
                "styleValue": [
                    "collapse",
                    "separate"
                ]
            },
            {
                "styleName": "border-color",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-left",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-left-color",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-left-style",
                "styleValue": [
                    "none",
                    "hidden",
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset"
                ]
            },
            {
                "styleName": "border-left-width",
                "styleValue": [
                    "thin",
                    "medium",
                    "thick"
                ]
            },
            {
                "styleName": "border-right",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-right-color",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-right-style",
                "styleValue": [
                    "none",
                    "hidden",
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset"
                ]
            },
            {
                "styleName": "border-right-width",
                "styleValue": [
                    "thin",
                    "medium",
                    "thick"
                ]
            },
            {
                "styleName": "border-spacing",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-style",
                "styleValue": [
                    "none",
                    "hidden",
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset"
                ]
            },
            {
                "styleName": "border-top",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-top-color",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "border-top-style",
                "styleValue": [
                    "none",
                    "hidden",
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset"
                ]
            },
            {
                "styleName": "border-top-width",
                "styleValue": [
                    "thin",
                    "medium",
                    "thick"
                ]
            },
            {
                "styleName": "border-width",
                "styleValue": [
                    "thin",
                    "medium",
                    "thick"
                ]
            },
            {
                "styleName": "bottom",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "caption-side",
                "styleValue": [
                    "top",
                    "bottom",
                    "left",
                    "right"
                ]
            },
            {
                "styleName": "clear",
                "styleValue": [
                    "left",
                    "right",
                    "both",
                    "none"
                ]
            },
            {
                "styleName": "clip",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "color",
                "styleValue": [
                    "aqua",
                    "black",
                    "blue",
                    "fuchsia",
                    "gray",
                    "green",
                    "lime",
                    "maroon",
                    "navy",
                    "olive",
                    "purple",
                    "red",
                    "silver",
                    "teal",
                    "white",
                    "yellow"
                ]
            },
            {
                "styleName": "content",
                "styleValue": [
                    "",
                    "open-quote",
                    "close-quote",
                    "no-open-quote",
                    "no-close-quote"
                ]
            },
            {
                "styleName": "counter-increment",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "counter-reset",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "cue",
                "styleValue": [
                    "cue-before",
                    "cue-after"
                ]
            },
            {
                "styleName": "cue-after",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "cue-before",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "cursor",
                "styleValue": [
                    "auto",
                    "crosshair",
                    "default",
                    "pointer",
                    "move",
                    "e-resize",
                    "ne-resize",
                    "nw-resize",
                    "n-resize",
                    "se-resize",
                    "sw-resize",
                    "s-resize",
                    "w-resize",
                    "text",
                    "wait",
                    "help"
                ]
            },
            {
                "styleName": "direction",
                "styleValue": [
                    "ltr",
                    "rtl"
                ]
            },
            {
                "styleName": "display",
                "styleValue": [
                    "none",
                    "inline",
                    "block",
                    "list-item",
                    "run-in",
                    "compact",
                    "marker",
                    "table",
                    "inline-table",
                    "table-row-group",
                    "table-header-group",
                    "table-footer-group",
                    "table-row",
                    "table-column-group",
                    "table-column",
                    "table-cell",
                    "table-caption"
                ]
            },
            {
                "styleName": "elevation",
                "styleValue": [
                    "below",
                    "level",
                    "above",
                    "higher",
                    "lower"
                ]
            },
            {
                "styleName": "empty-cells",
                "styleValue": [
                    "show",
                    "hide"
                ]
            },
            {
                "styleName": "float",
                "styleValue": [
                    "left",
                    "right",
                    "none"
                ]
            },
            {
                "styleName": "font",
                "styleValue": [
                    "font-style",
                    "font-variant",
                    "font-weight",
                    "font-size",
                    "line-height",
                    "font-family"
                ]
            },
            {
                "styleName": "font-family",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "font-size",
                "styleValue": [
                    "xx-small",
                    "x-small",
                    "small",
                    "medium",
                    "large",
                    "x-large",
                    "xx-large",
                    "smaller",
                    "larger"
                ]
            },
            {
                "styleName": "font-size-adjust",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "font-stretch",
                "styleValue": [
                    "normal",
                    "wider",
                    "narrower",
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded"
                ]
            },
            {
                "styleName": "font-style",
                "styleValue": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "styleName": "font-variant",
                "styleValue": [
                    "normal",
                    "small-caps"
                ]
            },
            {
                "styleName": "font-weight",
                "styleValue": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900"
                ]
            },
            {
                "styleName": "height",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "left",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "letter-spacing",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "line-height",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "list-style",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "list-style-image",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "list-style-position",
                "styleValue": [
                    "inside",
                    "outside"
                ]
            },
            {
                "styleName": "list-style-type",
                "styleValue": [
                    "disc",
                    "circle",
                    "square",
                    "decimal",
                    "decimal-leading-zero",
                    "lower-roman",
                    "upper-roman",
                    "lower-alpha",
                    "upper-alpha",
                    "lower-greek",
                    "lower-latin",
                    "upper-latin",
                    "hebrew",
                    "armenian",
                    "georgian",
                    "cjk-ideographic",
                    "hiragana",
                    "katakana",
                    "hiragana-iroha",
                    "katakana-iroha"
                ]
            },
            {
                "styleName": "margin",
                "styleValue": [
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left"
                ]
            },
            {
                "styleName": "margin-bottom",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "margin-left",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "margin-right",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "margin-top",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "marker-offset",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "marks",
                "styleValue": [
                    "crop",
                    "cross"
                ]
            },
            {
                "styleName": "max-height",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "max-width",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "min-height",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "min-width",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "orphans",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "outline",
                "styleValue": [
                    "outline-color",
                    "outline-style",
                    "outline-width"
                ]
            },
            {
                "styleName": "outline-color",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "outline-style",
                "styleValue": [
                    "none",
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset"
                ]
            },
            {
                "styleName": "outline-width",
                "styleValue": [
                    "thin",
                    "medium",
                    "thick"
                ]
            },
            {
                "styleName": "overflow",
                "styleValue": [
                    "visible",
                    "hidden",
                    "scroll",
                    "auto"
                ]
            },
            {
                "styleName": "padding",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "padding-bottom",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "padding-left",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "padding-right",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "padding-top",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "page",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "page-break-after",
                "styleValue": [
                    "auto",
                    "always",
                    "avoid",
                    "left",
                    "right"
                ]
            },
            {
                "styleName": "page-break-before",
                "styleValue": [
                    "auto",
                    "always",
                    "avoid",
                    "left",
                    "right"
                ]
            },
            {
                "styleName": "page-break-inside",
                "styleValue": [
                    "auto",
                    "avoid"
                ]
            },
            {
                "styleName": "pause",
                "styleValue": [
                    "pause-before",
                    "pause-after"
                ]
            },
            {
                "styleName": "pause-after",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "pause-before",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "pitch",
                "styleValue": [
                    "x-low",
                    "low",
                    "medium",
                    "high",
                    "x-high"
                ]
            },
            {
                "styleName": "pitch-range",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "play-during",
                "styleValue": [
                    "mix",
                    "repeat",
                    "auto",
                    "none"
                ]
            },
            {
                "styleName": "position",
                "styleValue": [
                    "static",
                    "relative",
                    "absolute",
                    "fixed"
                ]
            },
            {
                "styleName": "quotes",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "richness",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "right",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "size",
                "styleValue": [
                    "auto",
                    "landscape",
                    "potrait"
                ]
            },
            {
                "styleName": "speak",
                "styleValue": [
                    "normal",
                    "none",
                    "spell-out"
                ]
            },
            {
                "styleName": "speak-header",
                "styleValue": [
                    "once",
                    "always"
                ]
            },
            {
                "styleName": "speak-numeral",
                "styleValue": [
                    "digits",
                    "continuous"
                ]
            },
            {
                "styleName": "speak-punctuation",
                "styleValue": [
                    "code",
                    "none"
                ]
            },
            {
                "styleName": "speech-rate",
                "styleValue": [
                    "x-slow",
                    "slow",
                    "medium",
                    "fast",
                    "x-fast",
                    "faster",
                    "slower"
                ]
            },
            {
                "styleName": "stress",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "table-layout",
                "styleValue": [
                    "auto",
                    "fixed"
                ]
            },
            {
                "styleName": "text-align",
                "styleValue": [
                    "left",
                    "right",
                    "center",
                    "justify"
                ]
            },
            {
                "styleName": "text-decoration",
                "styleValue": [
                    "none",
                    "underline",
                    "overline",
                    "line-through",
                    "blink"
                ]
            },
            {
                "styleName": "text-indent",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "text-shadow",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "text-transform",
                "styleValue": [
                    "none",
                    "capitalize",
                    "uppercase",
                    "lowercase"
                ]
            },
            {
                "styleName": "top",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "unicode-bidi",
                "styleValue": [
                    "normal",
                    "embed",
                    "bidi-override"
                ]
            },
            {
                "styleName": "vertical-align",
                "styleValue": [
                    "baseline",
                    "sub",
                    "super",
                    "top",
                    "text-top",
                    "middle",
                    "bottom",
                    "text-bottom"
                ]
            },
            {
                "styleName": "visibility",
                "styleValue": [
                    "visible",
                    "hidden",
                    "collapse"
                ]
            },
            {
                "styleName": "voice-family",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "volume",
                "styleValue": [
                    "silent",
                    "x-soft",
                    "soft",
                    "medium",
                    "loud",
                    "x-loud"
                ]
            },
            {
                "styleName": "white-space",
                "styleValue": [
                    "normal",
                    "pre",
                    "nowrap"
                ]
            },
            {
                "styleName": "widows",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "width",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "word-spacing",
                "styleValue": [
                    ""
                ]
            },
            {
                "styleName": "z-index",
                "styleValue": [
                    ""
                ]
            }
        ];
    }
    return CSSProp;
}());
CSSProp = __decorate([
    core_1.Injectable()
], CSSProp);
exports.CSSProp = CSSProp;
//# sourceMappingURL=css.prop.js.map