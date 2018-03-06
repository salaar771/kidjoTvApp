webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/age-gate/age-gate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".age-section{\n    background: radial-gradient(circle,indianred,darkslateblue);\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 100vh;\n    width: 100%;\n    position: relative;\n    background-color: rgba(0,0,0,.5);\n    background-blend-mode: overlay;\n    overflow: hidden;\n}\n.main-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #fffe;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    padding: 3em 2em;\n    border-radius: 10px;\n    width: 60%;\n    height: 50%;\n    overflow: hidden;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n}\n.hello-div{\n    width: 350px;\n}\n.hello-div h2{\n    display: block;\n    font-size:30px;\n    font-family: Bree;\n    font-weight: 700;\n    word-spacing: 5px;\n    float: left;\n    width: 100%;\n    padding-top: 0;\n    color: #222;\n    overflow: hidden;\n}\n.hello-div p{\n    line-height: 1.5em;\n    font-size: 25px;\n    font-family: bree;\n    word-spacing: 5px;\n    color: #222;\n}\n#age-input-box{\n    margin: 1.8em 4em;\n    float: left;\n    border: 5px solid #999a;\n    border-radius: 10px;\n    font-size: 1.3em;\n    padding: 1em 0;\n    text-align: center;\n    width: auto;\n    \n}\n#age-input-box:focus{\n    outline: none;\n    border: 5px solid #666;\n}\ninput::-webkit-input-placeholder {\n    font-size: 35px;\n    text-align: center;\n    color: #999;\n}\n.information-div{\n    max-width: 400px;\n    font-size:23px;\n    font-family: bree;\n    position: absolute;\n    top: 70%;\n    color: #777;\n}\n.number-div{\n    display:-webkit-inline-box;\n    display:-ms-inline-flexbox;\n    display:inline-flex;\n    width: 300px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-flow: wrap;\n        flex-flow: wrap;\n    position: absolute;\n    top:45px;\n    right: 2em;\n    font-family: bree;\n}\n.number-div .btn{\n    margin: 15px;\n    margin-left: 10px; \n    margin-top: auto;\n    background: src(\"assets/tablet-l/age_gate_key_a.png\");\n    position: relative;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    border:none; \n}\n.number-div :nth-child(10){\n    margin-left: 27%;\n}\n.number-div .btn{\n    display: block;\n    color: #000;\n    font-size: 25px;\n    padding: .9em;\n    border-radius: 100%;\n    cursor: pointer;\n}\n.number-div .btn:focus{\n    outline: none;\n    background: src(\"assets/tablet-l/age_gate_key_focus_a.png\")center center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n.number-div div:nth-child(11){\n    background:none;\n    border: none;\n    border-radius: 50%;\n    padding: 0;\n    margin: 0;\n}\n.remove-icon a{\n    width: 50px;\n    padding: 1em 1.3em;\n}\n.remove-icon svg{\n    display: block;\n    width: 50px;\n    margin-left: 15px;\n}\n@media(max-width: 1160px)\n{   .age-section{\n    height: 1100px;\n    width: auto;\n}\n    .main-container{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 70%;\n        top: 4%;\n        bottom: 4%;\n        -webkit-box-align:  center;\n            -ms-flex-align:  center;\n                align-items:  center;\n    }\n    .hello-div{\n        margin: 0 auto;\n    }\n    .age-box-div{\n        margin: 0;\n        float: left;\n        margin: 0 auto;\n    }\n    .information-div{\n        top: 38%;\n    }\n    .number-div{\n        top:50%; \n        left: 2em;\n        margin: 0 auto;\n    }\n}\n@media(max-width: 550px)\n{    \n    .main-container{\n        width: 80%;\n    }\n    .hello-div{\n        width: auto;\n        overflow: hidden;\n    }\n    .age-box-div{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        float: none;\n        margin: 0em;\n        padding: 0;\n        display: flex;\n        -webkit-box-pack:center;\n            -ms-flex-pack:center;\n                justify-content:center;\n        width: 225px;\n    }\n    .number-div{\n        top:55%; \n        overflow: hidden;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/age-gate/age-gate.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"age-section\">\n  <div class=\"main-container\">\n    <div class=\"hello-div\">\n      <h2>Hello,</h2>\n      <p>please confirm your year of birth before continuing.</p>\n    </div>\n    <div class=\"age-box-div\">\n      <input id=\"age-input-box\" type=\"text\" placeholder=\"Y Y Y Y\">\n    </div>\n    <div class=\"information-div\">This information is never stored and is only used to gain access to the parental controls.</div>\n    <div class=\"number-div\">\n      <div class=\"01\"><button class=\"btn\" type=\"button\" data-number=\"1\">1</button></div>\n      <div class=\"02\"><button class=\"btn\" type=\"button\" data-number=\"2\">2</button></div>\n      <div class=\"03\"><button class=\"btn\" type=\"button\" data-number=\"3\">3</button></div>\n      <div class=\"04\"><button class=\"btn\" type=\"button\" data-number=\"4\">4</button></div>\n      <div class=\"05\"><button class=\"btn\" type=\"button\" data-number=\"5\">5</button></div>\n      <div class=\"06\"><button class=\"btn\" type=\"button\" data-number=\"6\">6</button></div>\n      <div class=\"07\"><button class=\"btn\" type=\"button\" data-number=\"7\">7</button></div>\n      <div class=\"08\"><button class=\"btn\" type=\"button\" data-number=\"8\">8</button></div>\n      <div class=\"09\"><button class=\"btn\" type=\"button\" data-number=\"9\">9</button></div>\n      <div class=\"00 last\"><button class=\"btn\" type=\"button\" data-number=\"0\">0</button></div>\n      <div class=\"remove-icon\">\n        <a href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" width=\"50px\"\n            height=\"50px\" viewBox=\"0 0 612 612\">\n            <g>\n              <g id=\"backspace\">\n                <path d=\"M561,76.5H178.5c-17.85,0-30.6,7.65-40.8,22.95L0,306l137.7,206.55c10.2,12.75,22.95,22.95,40.8,22.95H561    c28.05,0,51-22.95,51-51v-357C612,99.45,589.05,76.5,561,76.5z M484.5,397.8l-35.7,35.7L357,341.7l-91.8,91.8l-35.7-35.7    l91.8-91.8l-91.8-91.8l35.7-35.7l91.8,91.8l91.8-91.8l35.7,35.7L392.7,306L484.5,397.8z\"\n                  fill=\"#999\" />\n              </g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n          </svg>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/age-gate/age-gate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeGateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgeGateComponent = /** @class */ (function () {
    function AgeGateComponent() {
    }
    AgeGateComponent.prototype.ngOnInit = function () {
    };
    AgeGateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-age-gate',
            template: __webpack_require__("../../../../../src/app/age-gate/age-gate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/age-gate/age-gate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgeGateComponent);
    return AgeGateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/age-gate/age-gate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AgeGateModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__age_gate_component__ = __webpack_require__("../../../../../src/app/age-gate/age-gate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgeGateModule = /** @class */ (function () {
    function AgeGateModule() {
    }
    AgeGateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__age_gate_component__["a" /* AgeGateComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__age_gate_component__["a" /* AgeGateComponent */]],
            providers: []
        })
    ], AgeGateModule);
    return AgeGateModule;
}());



/***/ }),

/***/ "../../../../../src/app/age-gate/age-gate.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeGateRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__age_gate_component__ = __webpack_require__("../../../../../src/app/age-gate/age-gate.component.ts");

var AgeGateRoutes = [
    {
        path: 'age',
        component: __WEBPACK_IMPORTED_MODULE_0__age_gate_component__["a" /* AgeGateComponent */],
    },
];


/***/ }),

/***/ "../../../../../src/app/age-gate/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__age_gate_component__ = __webpack_require__("../../../../../src/app/age-gate/age-gate.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__age_gate_module__ = __webpack_require__("../../../../../src/app/age-gate/age-gate.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__age_gate_route__ = __webpack_require__("../../../../../src/app/age-gate/age-gate.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__age_gate_route__["a"]; });





/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<ng4-loading-spinner> </ng4-loading-spinner>\n<!-- <walkthrough [is-round]=\"true\" [walkthrough-type]=\"'transparency'\" [focus-element-selector]=\"'#focusItem'\" [icon]=\"'single_tap'\"\n    [main-caption]=\"'Visit to this app\n    '\" [is-active]=\"true\" [use-button]=\"true\">\n    <p>this is some text</p>\n</walkthrough> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_videogular2_overlay_play__ = __webpack_require__("../../../../videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_buffering__ = __webpack_require__("../../../../videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_streaming__ = __webpack_require__("../../../../videogular2/streaming.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_streaming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_videogular2_streaming__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__ = __webpack_require__("../../../../angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_walkthrough__ = __webpack_require__("../../../../ngx-walkthrough/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_walkthrough___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_walkthrough__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__video_selection_video_selection_component__ = __webpack_require__("../../../../../src/app/video-selection/video-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__age_gate_age_gate_component__ = __webpack_require__("../../../../../src/app/age-gate/age-gate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__overtime_error_overtime_error_component__ = __webpack_require__("../../../../../src/app/overtime-error/overtime-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__folder_folder_component__ = __webpack_require__("../../../../../src/app/folder/folder.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__video_selection_video_selection_component__["a" /* VideoSelectionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__age_gate_age_gate_component__["a" /* AgeGateComponent */],
                __WEBPACK_IMPORTED_MODULE_22__overtime_error_overtime_error_component__["a" /* OvertimeErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_23__folder_folder_component__["a" /* FolderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__["HotkeyModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_6_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_7_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_8_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_9_videogular2_buffering__["VgBufferingModule"],
                __WEBPACK_IMPORTED_MODULE_10_videogular2_streaming__["VgStreamingModule"],
                __WEBPACK_IMPORTED_MODULE_13_ngx_walkthrough__["WalkthroughModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_index__ = __webpack_require__("../../../../../src/app/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_selection_index__ = __webpack_require__("../../../../../src/app/video-selection/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_index__ = __webpack_require__("../../../../../src/app/favorites/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__age_gate_index__ = __webpack_require__("../../../../../src/app/age-gate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overtime_error_index__ = __webpack_require__("../../../../../src/app/overtime-error/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__folder_index__ = __webpack_require__("../../../../../src/app/folder/index.ts");







var routes = __WEBPACK_IMPORTED_MODULE_0__settings_index__["a" /* SettingsRoutes */].concat(__WEBPACK_IMPORTED_MODULE_1__video_selection_index__["a" /* VideoSelectionRoutes */], __WEBPACK_IMPORTED_MODULE_2__favorites_index__["a" /* FavoritesRoutes */], __WEBPACK_IMPORTED_MODULE_3__age_gate_index__["a" /* AgeGateRoutes */], __WEBPACK_IMPORTED_MODULE_4__overtime_error_index__["a" /* OverTimeRoutes */], __WEBPACK_IMPORTED_MODULE_5__home_index__["a" /* HomeRoutes */], __WEBPACK_IMPORTED_MODULE_6__folder_index__["a" /* FolderRoutes */]);


/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.playlist-section{\n    background-image: url('https://salaar771.github.io/kidjoTvApp/assets/tablet-l/background_day_bottom.jpg');\n    background-size: cover;\n    background-position: center;\n    height: 100vh;\n    background-color:lightsteelblue;\n    background-blend-mode: multiply;\n    overflow: hidden;\n    position: relative;\n}\n\n.footer-heading{\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    height: 80px;\n}\n\n.footer-heading img{\n    max-width: 200px;\n}\n\n.footer-heading h3{\n    position: absolute;\n    top: 50%;;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 25px;\n    font-family: bree;\n    color: #444;\n}\n\n.side-bar{\n    position: relative;\n    top: 10%;\n    width: 6%;\n}\n\n.side-bar-contents img{\n    -webkit-transform: translate(-12%);\n            transform: translate(-12%);\n    width: 80px;\n    height: 500px;\n    border-radius: 15px;\n}\n\n.side-bar-contents p{\n    position: absolute;\n    top: 50%;\n    left: 1%;\n    font-size: 25px;\n    width: 40px;\n    text-align: center;\n    color: #fff;\n    font-weight: 500;\n    font-family: bree;\n}\n\n.playlist{\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    text-align: center;\n    top: 5%;\n    color: #fff;\n    font-size: 25px;\n}\n\n.playlist img{\n    max-width: 100px;\n}\n\n.playlist h3{\n    margin-top: -10px;\n    font-family: bree;\n}\n\n.main-videocard-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    max-width: 95%;\n    position: absolute;\n    top: 30%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    /* margin: 0 auto; */\n    left: 53%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n}\n\n[class^=\"video-card-container\"]\n{\n    margin-left: 2.5em;\n}\n\n.video-card-container{\n    position: relative;\n    max-width: 300px;\n    height: 264px;\n    padding: 0;\n    border-radius: 15px;\n    background: red;\n}\n\n.video-card{\n    position: relative;\n    max-width: 300px;\n    padding: 0;\n    margin: 0;\n}\n\n/* .caption{\n    padding: 1em;\n    background: red;\n    position: absolute;\n    bottom: -49px; \n    left: 0;\n    right: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    color: #fff;\n    font-family: bree;\n    font-weight: 500;\n    font-size: 13px;\n    text-align: left;\n} */\n\n.caption p{\n    padding: 5px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    font-size: 13px;\n    font-weight: 500 !important;\n}\n\n.delete-btn{    \n    position: absolute;\n    top: 155%;\n    width: 100px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n}\n\n.delete-btn svg{\n    width: 15px;\n    height: 15px;\n    margin-right: auto;\n    margin-left: 0px !important;\n    margin-bottom: 13px !important; \n}\n\n.delete-btn p{    \n    margin-top: 2%;\n    margin-right: auto;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-family: bree;\n    font-weight: bold;\n    font-size: 13px !important;\n}\n\n#button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100px;\n    height: 32px;\n    border-radius: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n            filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n}\n\n#button:focus{\n    outline: none;\n}\n\n.video-card-container{\n    position: relative;\n    max-width: 300px;\n    height: 264px;\n    padding: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background: red;\n}\n\n.lock-overlay img{\n    position: absolute !important;\n    top: 0% !important;\n    left: 0 !important;\n    right: 0 !important;\n    border-top-left-radius: 5px !important;\n    border-top-right-radius: 5px !important;\n}\n\n.lock-overlay .lock-bar{\n    width: 100% !important;\n}\n\n.lock-overlay .lock-icon{\n    margin-left: 26%;\n    margin-top: 3%;\n    width: 15px;\n}\n\n.lock-overlay p{\n    position: absolute;\n    top: 5%;\n    right: 25%;\n    color: #fff;\n    font-family: bree;\n    font-size: 14px;\n}\n\n.video-card .caption{\n    padding: 1em;\n    background: red;\n    position: absolute;\n    bottom: -45px; \n    left: 0;\n    right: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    color: #fff;\n    font-family: bree;\n    text-align: left;\n}\n\n.delete-btn{    \n    position: absolute;\n    top: 210px;\n    width: 170px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n}\n\n.delete-btn svg{\n    width: 15px;\n    height: 15px;\n    margin-right: auto;\n    margin-left: 7px;\n}\n\n.delete-btn p{\n    margin-right: auto;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-family: bree;\n}\n\n#button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100px;\n    height: 32px;\n    border-radius: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n            filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n}\n\n#button:focus{\n    outline: none;\n}\n\n.video-card-container{\n    position: relative;\n    max-width: 300px;\n    height: 264px;\n    padding: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background: red;\n    \n}\n\n.video-card{\n    position: relative;\n    max-width: 300px;\n    padding: 0;\n    margin: 0;\n}\n\n.video-card .caption{\n    padding: 1em;\n    background: red;\n    position: absolute;\n    bottom: -45px; \n    left: 0;\n    right: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    color: #fff;\n    font-family: bree;\n    font-weight: bold;\n    text-align: left;\n}\n\n.delete-btn{    \n    position: absolute;\n    top: 110%;\n    width: 100px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    cursor: pointer;\n}\n\n.delete-btn svg{\n    width: 15px;\n    height: 15px;\n    margin-right: auto;\n    margin-left: -5px;\n    margin-bottom: 9px;\n}\n\n.delete-btn p{\n    margin-top: 2%;\n    margin-right: auto;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-family: bree;\n    font-weight: bold;\n}\n\n#button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100px;\n    height: 32px;\n    border-radius: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n            filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n}\n\n#button:focus{\n    outline: none;\n}\n\n.img-thumbnail{\n    border: 3px solid #fff !important;\n    position: relative;\n}\n\n.activeImg{\n    max-width: 100%;\n}\n\n.playbtn{\n    background-color: red !important;\n    color: white !important;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    padding: .5em 1.5em;\n\n}\n\n@media(max-width:1024px)\n{    \n    .playlist-section{\n        background-size: cover;\n        background-repeat: no-repeat;\n        height: 1320px;  \n    }\n    .playlist{\n        top: 2.5%;\n    }\n    .main-video-card container{\n        left: 50%;\n        -webkit-transform: translate(-50%);\n                transform: translate(-50%);    \n        position: relative;\n        max-width: 300px;\n        height: 263px;\n        padding: 0;\n        border-radius: 15px;\n        background: red;\n}\n    .video-card{\n        top: 2%;\n    }\n    .main-videocard-container{\n        display:grid;\n        grid-gap: 70px;\n        margin-left: auto;\n        margin-right: auto;\n        left: 40%;\n        top: 16%;\n        width: 20%;\n    }\n    .video-card .lock-overlay img{\n        position: absolute;\n        top: -3%;\n        left: 0;\n        right: 0;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n}\n\n}\n\n@media(width:768px)\n{    \n    .playlist{\n        top: 2.5%;\n    }\n    .main-videocard-container{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-left: auto;\n        margin-right: auto;\n        left: 36%;\n        top: 14%;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        margin-bottom: 100px;\n    } \n    .video-card-container{\n        margin-bottom:90px;\n     }\n    \n}\n\n@media(max-width:500px)\n{    \n    .main-videocard-container{\n     display: -webkit-box;\n     display: -ms-flexbox;\n     display: flex;\n     margin-left: auto;\n     margin-right: auto;\n     left: 14%;\n     top: 14%;\n     -ms-flex-wrap: wrap;\n         flex-wrap: wrap;\n     margin-bottom: 100px;\n    }\n    .video-card .lock-overlay .lock-bar{\n        position: absolute;\n        top: -3%;\n        width: 100.6%;\n        left: auto;\n    }\n\n    .video-card-container{\n        margin-bottom:90px;\n    }\n    .side-bar{\n    position: relative;\n    top: 10%;\n    }\n    .side-bar-contents img{\n    -webkit-transform: translate(-12%);\n            transform: translate(-12%);\n    width: 45px;\n    height: 500px;\n    border-radius: 15px;\n    }\n    .side-bar-contents p{\n    position: absolute;\n    top: 50%;\n    left: 1%;\n    font-size: 20px;\n    width: 30px;\n    text-align: center;\n    color: #fff;\n    font-weight: 500;\n    font-family: bree;\n    }\n}\n\n/*  =========================   Playlist Settings ===========================*/\n\n.playlist-setting{\n    background: src(\"assets/tablet-l/background_day_top.webp\");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: auto;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n    background-color: rgba(0,0,0,.2);\n    background-blend-mode:overlay;\n}\n\n.playlist-icon-top{\n    position: absolute;\n    top: 0%;\n    right: 50%;\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    background-size: cover;\n    background-position: center;\n    text-align: center;\n    height: 80px;\n}\n\n.playlist-icon-top h3{\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 23px;\n    color: #444;\n    font-family: bree;\n}\n\n.playlist-icon-top img{\n    max-width: 200px;\n}\n\n.playlist-setting-footer{\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    height: 80px;\n}\n\n.playlist-setting-footer img{\n    max-width: 200px;\n}\n\n.playlist-setting-footer h3{\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(42%);\n            transform: translate(42%);\n    font-size: 23px;\n    color: #444;\n    font-family: bree;\n}\n\n.main-card-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    position: absolute;\n    top: 30%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.card-container img{\n    width: 240px;\n    padding-left: 20px;\n    position: relative;\n}\n\n.card-container .active img{\n    width: 320px;\n}\n\n.card-poster img{\n    position: absolute;\n    top: 70px;\n    left: 13%;\n    max-width: 200px;\n    background: red;\n}\n\n@media(max-width:768px)\n{\n    .playlist-setting{\n        height: 1000px;\n    }\n    .main-card-container{\n        top: 20%;\n    }\n}\n\n@media(max-width:1149px)\n{\n    .playlist-setting{\n        height: 1020px;\n    }\n    .main-card-container{\n        top: 20%;\n    }\n}\n\n@media(max-width:616px)\n{\n    .playlist-setting{\n        height: 1300px;\n    }\n    .main-card-container{\n        top: 10%;\n    }\n}\n\n.run-time-over-section{\n    width: auto;\n    min-height: 100vh;\n    background:#2e336c;\n    padding: 0 3em;\n    text-align: center;\n    background-size: cover;\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.sleeping-moon-image img{\n    max-width: 420px;\n    z-index: 10000;\n}\n\n.para-1{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 50px;\n    font-weight: bold;\n    font-family: bree;\n    color: #fff;\n    width: 100%;\n    \n}\n\n.para-2{\n    position: absolute;\n    bottom: 5%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 32px;\n    font-weight: bold;\n    font-family: bree;\n    color: aqua;\n    border: 6px solid aqua;\n    border-radius: 12px;\n    padding: .3em 1em;\n    width: 270px;\n}\n\n.sub-para{\n    font-style: normal;\n    font-size: 21px;\n    font-family: bree light;\n}\n\n@media(max-width:812px)\n{\n    .para-1{\n        top: 45%;\n        font-size: 32px\n    }\n    .para-2{\n        font-size: 28px;\n    }\n    .sleeping-moon-image img{\n        max-width:300px ;\n        width:100%;\n}\n}\n\n.leftRs {\n    position: absolute;\n    margin: auto;\n    top: -125px;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    left: 0;\n    right: 95%;\n    opacity: 0;\n}\n\n.rightRs {\n    position: absolute;\n    margin: auto;\n    top: -125px;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    right: 0;\n    left: 95%;\n    opacity: 0;\n}\n\n/* modal style */\n\n.overlay {\n    height: 100%;\n    width: 100%;\n    display: none;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n}\n\n.overlay-content {\n    position: relative;\n    width: 100vw !important;\n    height: 100vh !important;\n    text-align: center;\n    z-index: -1;\n}\n\n.overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n.overlay a:hover, .overlay a:focus {\n    color: #f1f1f1;\n}\n\n.overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n    z-index: 1;\n}\n\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.favouriteFocus:focus .footer-heading h3{\n    color: #4dbcae;\n }\n\n.Duration{\n    position: absolute;\n    top: 55%;\n    background: rgba(0,0,0,.7);\n    padding: 0px 6px;\n    color: #fff;\n    font-size: 10px;\n    border-radius: 2px;\n    left: 3%;\n }\n\n.imgActive{ /* IE 9 */\n    -webkit-transform: scale(1.4); /* Safari 3-8 */\n    transform: scale(1.4); \n}\n\n.imgActive:focus{ /* IE 9 */\n    -webkit-transform: scale(1.4); /* Safari 3-8 */\n    transform: scale(1.4); \n}\n\n.activeImg{\n    max-width: 100%;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    margin-left: 0px;\n    margin-bottom: 3px;\n}\n\n/* ccugfyfgh */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"playlist-section\">\n  <div class=\"side-bar\">\n    <div class=\"side-bar-contents\">\n      <img src=\"assets/svgs/water_background.svg\">\n      <p>{{time}} min</p>\n    </div>\n  </div>\n  <div class=\"playlist\">\n    <img src=\"assets/svgs/favorites_heart.svg\">\n    <h3>Playlist</h3>\n  </div>\n  <div class=\"main-videocard-container\">\n    <ngx-carousel [inputs]=\"carouselTile\" [moveToSlide]=\"arrayIndex\" (onMove)=\"onmoveFn($event)\">\n      <ngx-tile NgxCarouselItem *ngFor=\"let vid of FavVideo; let i = index\">\n        <img class=\"activeImg\" src={{vid[0].imgUrl}} [ngClass]=\"{'imgActive':i==arrayIndex}\" />\n        <button class=\"btn playbtn\" (click)=\"openNav()\">Play</button>\n        <span class=\"Duration\" [ngClass]=\"{'imgActive':i==arrayIndex}\">{{vid[0].duration}} min</span>\n        <!-- <span class=\"Duration\" [ngClass]=\"{'imgActive':i==arrayIndex}\">{{vid[0].duration}} min</span> -->\n        <!-- <div class=\"lock-overlay\">\n          <img class=\"lock-bar\" src=\"assets/svgs/video_card_lock_bar.svg\">\n          <img class=\"lock-icon\" src=\"assets/svgs/video_card_lock.svg\">\n          <p>Press to unlock</p>\n        </div> -->\n        <div class=\"caption\" [ngClass]=\"{'imgActive':i==arrayIndex}\">\n          <p style=\"     color: white; font-weight: 900; background-color: red;margin-top: -2%;\">{{vid[0].Title}}</p>\n        </div>\n        <div class=\"delete-btn\" (click)=\"deleteFav(vid[0].id)\">\n          <button type=\"button\" value=\"btn\" id=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M15.9078 12.3744l3.7228-3.7227c.3826-.3827.3848-1.0175-.0054-1.4077l-2.1204-2.1204c-.393-.393-1.0205-.3927-1.4077-.0055l-3.7227 3.723-3.7228-3.723c-.3826-.3825-1.0175-.3847-1.4077.0056L5.1234 7.244c-.393.393-.3926 1.0204-.0054 1.4077l3.7228 3.7227-3.7228 3.7228c-.3826.3827-.3848 1.0175.0054 1.4077l2.1204 2.1203c.393.393 1.0205.3927 1.4077.0054l3.7228-3.7227 3.7228 3.7227c.3827.3827 1.0176.3848 1.4078-.0054l2.1204-2.1204c.393-.393.3926-1.0206.0054-1.4078l-3.7228-3.7228zM0 12.493C-.004 5.5893 5.5894-.004 12.493 0 19.3964.004 24.996 5.6035 25 12.507c.004 6.9036-5.5894 12.497-12.493 12.493C5.6036 24.996.004 19.3965 0 12.493z\"/></svg><p>delete</p>\n                          </button>\n        </div>\n      </ngx-tile>\n\n      <button NgxCarouselPrev #previous class='leftRs'>&lt;</button>\n      <button NgxCarouselNext #next class='rightRs'>&gt;</button>\n\n    </ngx-carousel>\n  </div>\n  <a [routerLink]=\"[ '/'] \" #home class=\"favouriteFocus\">\n    <div class=\"footer-heading\">\n      <img src=\"assets/svgs/navigation_folder_bottom.svg\">\n      <h3>Videos</h3>\n    </div>\n  </a>\n\n\n  <div id=\"myNav\" class=\"overlay\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" #close (click)=\"closeNav()\">&times;</a>\n    <div class=\"overlay-content\">\n      <vg-player (onPlayerReady)=\"onPlayerReady($event)\" [hidden]=\"!isPlaying\">\n        <vg-overlay-play></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n\n        <vg-scrub-bar>\n          <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n          <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-controls>\n          <vg-play-pause></vg-play-pause>\n          <vg-playback-button></vg-playback-button>\n\n          <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n          <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n          <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n          <vg-track-selector></vg-track-selector>\n          <vg-mute></vg-mute>\n          <vg-volume></vg-volume>\n\n          <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n\n\n        <video #media [vgMedia]=\"media\" [vgDash]=\"currentStream\" [vgHls]=\"currentStream\" id=\"singleVideo\">\n        </video>\n\n\n\n      </vg-player>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEY_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_favoritesService_index__ = __webpack_require__("../../../../../src/app/shared/services/favoritesService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["Enter"] = 13] = "Enter";
    KEY_CODE[KEY_CODE["Up_key"] = 38] = "Up_key";
    KEY_CODE[KEY_CODE["Down_key"] = 40] = "Down_key";
    KEY_CODE[KEY_CODE["escape_key"] = 27] = "escape_key";
})(KEY_CODE || (KEY_CODE = {}));
var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favService, spinnerService) {
        this.favService = favService;
        this.spinnerService = spinnerService;
        this.uri = [];
        this.Favorites = [];
        this.FavVideo = [];
        this.downCount = 0;
        this.upCount = 0;
        this.arrayIndex = 0;
        this.currentStream = "https://d23sw6prl9jc74.cloudfront.net/6/NavdQMkX7J.mp4";
        this.getList();
    }
    FavoritesComponent.prototype.keyEvent = function (event) {
        console.log(event);
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            console.log("right key ");
            this.GoRight();
        }
        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            console.log("left key ");
            this.GoLeft();
        }
        if (event.keyCode === KEY_CODE.Up_key) {
            console.log("Up key ");
            this.GoUp();
        }
        if (event.keyCode === KEY_CODE.Down_key) {
            console.log("Down key ");
            this.GoDown();
        }
        if (event.keyCode === KEY_CODE.Enter) {
            console.log("Enter key ");
            var video = this.FavVideo[this.arrayIndex];
            if (video) {
                this.openNav();
            }
        }
        if (event.keyCode === KEY_CODE.escape_key) {
            this.close.nativeElement.focus();
            this.closeNav();
        }
    };
    FavoritesComponent.prototype.GoDown = function () {
        if (this.downCount < 1) {
            this.downCount++;
        }
        if (this.downCount == 1) {
            this.myHomeBtn.nativeElement.focus();
            this.downCount = 0;
        }
        // if (this.downCount == 2) {
        //   // this.mySettingsBtn.nativeElement.focus();
        //   this.downCount = 0;
        // }
        console.log("test");
    };
    FavoritesComponent.prototype.GoUp = function () {
        if (this.upCount < 1) {
            this.upCount++;
        }
        if (this.upCount == 1) {
            this.myRight.nativeElement.focus();
            this.upCount = 0;
        }
        // if (this.upCount == 2) {
        //   this.myLeft.nativeElement.focus();
        //   this.upCount = 0;
        // }
    };
    FavoritesComponent.prototype.onmoveFn = function ($event) {
        console.log($event);
    };
    FavoritesComponent.prototype.GoLeft = function () {
        --this.arrayIndex;
    };
    FavoritesComponent.prototype.GoRight = function () {
        console.log("test");
        ++this.arrayIndex;
    };
    FavoritesComponent.prototype.ngOnInit = function () {
        this.time = localStorage.getItem('screenTimeLimit');
        this.carouselTile = {
            grid: { xs: 2, sm: 2, md: 4, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            loop: true,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: "\n        .tile {\n          position: relative;\n          max-width:56%;\n          transform: scale(1.2);\n          border-radius: 10px;\n      }\n      .ngxcarousel-inner {\n        height: 500px;\n    }\n      .ngxcarouselPoint {\n        display: none;\n    }\n    .ngxcarousel-items {\n      top: 20%;\n      left: 10%;\n  }\n    "
            },
            load: 2,
            touch: true,
            easing: 'ease'
        };
    };
    FavoritesComponent.prototype.openNav = function () {
        console.log("test");
        document.getElementById("myNav").style.display = "block";
        this.isPlaying = true;
        this.api.play();
    };
    FavoritesComponent.prototype.closeNav = function () {
        document.getElementById("myNav").style.display = "none";
        this.api.pause();
    };
    FavoritesComponent.prototype.getList = function () {
        var _this = this;
        var kidId = localStorage.getItem('kidId');
        this.spinnerService.show();
        this.favService.GetFavorite(kidId).subscribe(function (data) {
            _this.spinnerService.hide();
            console.log(data);
            _this.Favorites = data.favorites;
            var subCard = [];
            var temp = [];
            for (var index = 0; index < _this.Favorites.length; index++) {
                subCard = [{ 'id': _this.Favorites[index].id, 'duration': _this.Favorites[index].duration, 'imgUrl': _this.VideoImageUrl(_this.Favorites[index].id), 'Title': _this.Favorites[index].title }];
                temp.push(subCard);
            }
            _this.FavVideo = temp;
        }, function (Error) {
            _this.spinnerService.hide();
        });
    };
    FavoritesComponent.prototype.VideoImageUrl = function (id) {
        var url = localStorage.getItem('videoImageUrl');
        this.innerheigth = window.innerHeight;
        if (this.innerheigth <= 1440 && this.innerheigth >= 1080) {
            this.bucketName = 'phone-l';
        }
        else if (this.innerheigth <= 1080 && this.innerheigth >= 768) {
            this.bucketName = 'phone-m';
        }
        else if (this.innerheigth <= 360 && this.innerheigth >= 0) {
            this.bucketName = 'phone-s';
        }
        else if (this.innerheigth <= 2048 && this.innerheigth >= 1536) {
            this.bucketName = 'tablet-l';
        }
        else if (this.innerheigth <= 1536 && this.innerheigth >= 1440) {
            this.bucketName = 'tablet-m';
        }
        else if (this.innerheigth <= 768 && this.innerheigth >= 360) {
            this.bucketName = 'tablet-s';
        }
        return url + this.bucketName + '/' + id + '.png';
    };
    FavoritesComponent.prototype.onPlayerReady = function (api) {
        var _this = this;
        var x = 1;
        this.api = api;
        this.api.getDefaultMedia().subscriptions.ended.subscribe(function () {
            x++;
            if (x > 2) {
                var src = _this.currentStream;
                _this.onPlayerReady(_this.api);
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__("#myButton").trigger("click");
                }, 1000);
                x = 0;
            }
            else {
                _this.api.play();
            }
        });
    };
    FavoritesComponent.prototype.deleteFav = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.favService.RemoveFavorite(id).subscribe(function (data) {
            console.log("test");
            _this.spinnerService.hide();
        }, function (Error) {
            _this.spinnerService.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('close'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FavoritesComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previous'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FavoritesComponent.prototype, "myLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('next'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FavoritesComponent.prototype, "myRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('home'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FavoritesComponent.prototype, "myHomeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], FavoritesComponent.prototype, "keyEvent", null);
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorites/favorites.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_favoritesService_index__["a" /* FavoriteService */],
            __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/favorites/favorites.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FavoritesModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritesModule = /** @class */ (function () {
    function FavoritesModule() {
    }
    FavoritesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__favorites_component__["a" /* FavoritesComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__favorites_component__["a" /* FavoritesComponent */]],
            providers: []
        })
    ], FavoritesModule);
    return FavoritesModule;
}());



/***/ }),

/***/ "../../../../../src/app/favorites/favorites.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");

var FavoritesRoutes = [
    {
        path: 'favorites',
        component: __WEBPACK_IMPORTED_MODULE_0__favorites_component__["a" /* FavoritesComponent */],
    },
];


/***/ }),

/***/ "../../../../../src/app/favorites/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorites_module__ = __webpack_require__("../../../../../src/app/favorites/favorites.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_route__ = __webpack_require__("../../../../../src/app/favorites/favorites.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__favorites_route__["a"]; });





/***/ }),

/***/ "../../../../../src/app/folder/folder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.playlist-section{\n    background-image: url(\"https://salaar771.github.io/kidjoTvApp/assets/tablet-l/background_day_bottom.webp\");\n    background-size: cover;\n    background-position: center;\n    height: 100vh;\n    background-color:lightsteelblue;\n    background-blend-mode: multiply;\n    overflow: hidden;\n    position: relative;\n}\n\n.footer-heading{\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    height: 80px;\n}\n\n.footer-heading img{\n    max-width: 200px;\n}\n\n.footer-heading h3{\n    position: absolute;\n    top: 50%;;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 25px;\n    font-family: bree;\n    color: #444;\n}\n\n.side-bar{\n    position: relative;\n    top: 10%;\n}\n\n.side-bar-contents img{\n    -webkit-transform: translate(-12%);\n            transform: translate(-12%);\n    width: 80px;\n    height: 500px;\n    border-radius: 15px;\n}\n\n.side-bar-contents p{\n    position: absolute;\n    top: 50%;\n    left: 1%;\n    font-size: 25px;\n    width: 40px;\n    text-align: center;\n    color: #fff;\n    font-weight: 500;\n    font-family: bree;\n}\n\n.playlist{\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    text-align: center;\n    top: 5%;\n    color: #fff;\n    font-size: 25px;\n}\n\n.playlist img{\n    max-width: 100px;\n}\n\n.playlist h3{\n    margin-top: -10px;\n    font-family: bree;\n}\n\n.main-videocard-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    top: 31%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);    \n}\n\n[class^=\"video-card-container\"]\n{\n    margin-left: 2.5em;\n}\n\n.video-card-container{\n    position: relative;\n    max-width: 300px;\n    height: 264px;\n    padding: 0;\n    border-radius: 15px;\n    background: red;\n}\n\n.video-card{\n    position: relative;\n    max-width: 300px;\n    padding: 0;\n    margin: 0;\n}\n\n.video-card .caption{\n    padding: 1em;\n    background: red;\n    position: absolute;\n    bottom: -45px; \n    left: 0;\n    right: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    color: #fff;\n    font-family: bree;\n    font-weight: bold;\n    text-align: left;\n}\n\n.delete-btn{    \n    position: absolute;\n    top: 130%;\n    width: 100px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n}\n\n.delete-btn svg{\n    width: 15px;\n    height: 15px;\n    margin-right: auto;\n    margin-left: 7px;\n}\n\n.delete-btn p{\n    margin-right: auto;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-family: bree;\n    font-weight: bold;\n}\n\n#button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100px;\n    height: 32px;\n    border-radius: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n            filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n}\n\n#button:focus{\n    outline: none;\n}\n\n.video-card-container{\n    position: relative;\n    max-width: 300px;\n    height: 264px;\n    padding: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background: red;\n}\n\n.video-card{\n    position: relative;\n    max-width: 300px;\n    padding: 0;\n    margin: 0;\n}\n\n.video-card .lock-overlay img{\n    position: absolute;\n    top: -2%;\n    left: 0;\n    right: 0;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.video-card .lock-overlay .lock-bar{\n    width: 100%;\n}\n\n.video-card .lock-overlay .lock-icon{\n    top: 3%;\n    left: 30%;\n}\n\n.video-card .lock-overlay p{\n    position: absolute;\n    top: 5%;\n    right: 27%;\n    color: #fff;\n    font-family: bree\n}\n\n.video-card .caption{\n    padding: 1em;\n    background: red;\n    position: absolute;\n    bottom: -45px; \n    left: 0;\n    right: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    color: #fff;\n    font-family: bree;\n    text-align: left;\n}\n\n.delete-btn{    \n    position: absolute;\n    top: 130%;\n    width: 100px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n}\n\n.delete-btn svg{\n    width: 15px;\n    height: 15px;\n    margin-right: auto;\n    margin-left: 7px;\n}\n\n.delete-btn p{\n    margin-right: auto;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-family: bree;\n}\n\n#button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100px;\n    height: 32px;\n    border-radius: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n            filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n}\n\n#button:focus{\n    outline: none;\n}\n\n.video-card-container{\n    position: relative;\n    max-width: 300px;\n    height: 264px;\n    padding: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background: red;\n    \n}\n\n.video-card{\n    position: relative;\n    max-width: 300px;\n    padding: 0;\n    margin: 0;\n}\n\n.video-card .caption{\n    padding: 1em;\n    background: red;\n    position: absolute;\n    bottom: -45px; \n    left: 0;\n    right: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    color: #fff;\n    font-family: bree;\n    font-weight: bold;\n    text-align: left;\n}\n\n.delete-btn{    \n    position: absolute;\n    top: 130%;\n    width: 100px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n}\n\n.delete-btn svg{\n    width: 15px;\n    height: 15px;\n    margin-right: auto;\n    margin-left: 7px;\n}\n\n.delete-btn p{\n    margin-right: auto;\n    margin-left: 10px;\n    text-transform: uppercase;\n    font-family: bree;\n    font-weight: bold;\n}\n\n#button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100px;\n    height: 32px;\n    border-radius: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n            filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n}\n\n#button:focus{\n    outline: none;\n}\n\n@media(max-width:1024px)\n{    \n    .playlist-section{\n        background-size: cover;\n        background-repeat: no-repeat;\n        height: 1320px;  \n    }\n    .playlist{\n        top: 2.5%;\n    }\n    .main-video-card container{\n        left: 50%;\n        -webkit-transform: translate(-50%);\n                transform: translate(-50%);    \n        position: relative;\n        max-width: 300px;\n        height: 263px;\n        padding: 0;\n        border-radius: 15px;\n        background: red;\n}\n    .video-card{\n        top: 2%;\n    }\n    .main-videocard-container{\n        display:grid;\n        grid-gap: 70px;\n        margin-left: auto;\n        margin-right: auto;\n        left: 40%;\n        top: 16%;\n        width: 20%;\n    }\n    .video-card .lock-overlay img{\n        position: absolute;\n        top: -3%;\n        left: 0;\n        right: 0;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n}\n\n}\n\n@media(width:768px)\n{    \n    .playlist{\n        top: 2.5%;\n    }\n    .main-videocard-container{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-left: auto;\n        margin-right: auto;\n        left: 36%;\n        top: 14%;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        margin-bottom: 100px;\n    } \n    .video-card-container{\n        margin-bottom:90px;\n     }\n    \n}\n\n@media(max-width:500px)\n{    \n    .main-videocard-container{\n     display: -webkit-box;\n     display: -ms-flexbox;\n     display: flex;\n     margin-left: auto;\n     margin-right: auto;\n     left: 14%;\n     top: 14%;\n     -ms-flex-wrap: wrap;\n         flex-wrap: wrap;\n     margin-bottom: 100px;\n    }\n    .video-card .lock-overlay .lock-bar{\n        position: absolute;\n        top: -3%;\n        width: 100.6%;\n        left: auto;\n    }\n\n    .video-card-container{\n        margin-bottom:90px;\n    }\n    .side-bar{\n    position: relative;\n    top: 10%;\n    }\n    .side-bar-contents img{\n    -webkit-transform: translate(-12%);\n            transform: translate(-12%);\n    width: 45px;\n    height: 500px;\n    border-radius: 15px;\n    }\n    .side-bar-contents p{\n    position: absolute;\n    top: 50%;\n    left: 1%;\n    font-size: 20px;\n    width: 30px;\n    text-align: center;\n    color: #fff;\n    font-weight: 500;\n    font-family: bree;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/folder/folder.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"playlist-section\">\n  <div class=\"side-bar\">\n    <div class=\"side-bar-contents\">\n      <img src=\"assets/svgs/water_background.svg\">\n      <p>5 min</p>\n    </div>\n  </div>\n  <div class=\"playlist\">\n    <img src=\"assets/svgs/favorites_heart.svg\">\n    <h3>Playlist</h3>\n  </div>\n  <div class=\"main-videocard-container\">\n    <div class=\"video-card-container\">\n      <div class=\"video-card\">\n        <iframe width=\"300\" height=\"215\" src=\"https://www.youtube.com/embed/qY4S5lJx_ss?rel=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n          allowfullscreen></iframe>\n        <div class=\"lock-overlay\">\n          <img class=\"lock-bar\" src=\"assets/svgs/video_card_lock_bar.svg\">\n          <img class=\"lock-icon\" src=\"assets/svgs/video_card_lock.svg\">\n          <p>Press to unlock</p>\n        </div>\n        <div class=\"caption\">\n          <p>Catty Jane Builds A Boat</p>\n        </div>\n        <div class=\"delete-btn\">\n          <button type=\"button\" value=\"btn\" id=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M15.9078 12.3744l3.7228-3.7227c.3826-.3827.3848-1.0175-.0054-1.4077l-2.1204-2.1204c-.393-.393-1.0205-.3927-1.4077-.0055l-3.7227 3.723-3.7228-3.723c-.3826-.3825-1.0175-.3847-1.4077.0056L5.1234 7.244c-.393.393-.3926 1.0204-.0054 1.4077l3.7228 3.7227-3.7228 3.7228c-.3826.3827-.3848 1.0175.0054 1.4077l2.1204 2.1203c.393.393 1.0205.3927 1.4077.0054l3.7228-3.7227 3.7228 3.7227c.3827.3827 1.0176.3848 1.4078-.0054l2.1204-2.1204c.393-.393.3926-1.0206.0054-1.4078l-3.7228-3.7228zM0 12.493C-.004 5.5893 5.5894-.004 12.493 0 19.3964.004 24.996 5.6035 25 12.507c.004 6.9036-5.5894 12.497-12.493 12.493C5.6036 24.996.004 19.3965 0 12.493z\"/></svg><p>delete</p>\n                      </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"video-card-container\">\n      <div class=\"video-card\">\n        <iframe width=\"300\" height=\"215\" src=\"https://www.youtube.com/embed/nwZEcdBMLLU?rel=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n          allowfullscreen></iframe>\n        <div class=\"lock-overlay\">\n          <img class=\"lock-bar\" src=\"assets/svgs/video_card_lock_bar.svg\">\n          <img class=\"lock-icon\" src=\"assets/svgs/video_card_lock.svg\">\n          <p>Press to unlock</p>\n        </div>\n        <div class=\"caption\">\n          <p>Beauty And The Beast</p>\n        </div>\n        <div class=\"delete-btn\">\n          <button type=\"button\" value=\"btn\" id=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M15.9078 12.3744l3.7228-3.7227c.3826-.3827.3848-1.0175-.0054-1.4077l-2.1204-2.1204c-.393-.393-1.0205-.3927-1.4077-.0055l-3.7227 3.723-3.7228-3.723c-.3826-.3825-1.0175-.3847-1.4077.0056L5.1234 7.244c-.393.393-.3926 1.0204-.0054 1.4077l3.7228 3.7227-3.7228 3.7228c-.3826.3827-.3848 1.0175.0054 1.4077l2.1204 2.1203c.393.393 1.0205.3927 1.4077.0054l3.7228-3.7227 3.7228 3.7227c.3827.3827 1.0176.3848 1.4078-.0054l2.1204-2.1204c.393-.393.3926-1.0206.0054-1.4078l-3.7228-3.7228zM0 12.493C-.004 5.5893 5.5894-.004 12.493 0 19.3964.004 24.996 5.6035 25 12.507c.004 6.9036-5.5894 12.497-12.493 12.493C5.6036 24.996.004 19.3965 0 12.493z\"/></svg><p>delete</p>\n                      </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"video-card-container\">\n      <div class=\"video-card\">\n        <iframe width=\"300\" height=\"215\" src=\"https://www.youtube.com/embed/aa3OQiJPQCQ?rel=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n          allowfullscreen></iframe>\n        <div class=\"lock-overlay\">\n          <img class=\"lock-bar\" src=\"assets/svgs/video_card_lock_bar.svg\">\n          <img class=\"lock-icon\" src=\"assets/svgs/video_card_lock.svg\">\n          <p>Press to unlock</p>\n        </div>\n        <div class=\"caption\">\n          <p>Bert, Beth And The Turtle</p>\n        </div>\n        <div class=\"delete-btn\">\n          <button type=\"button\" value=\"btn\" id=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M15.9078 12.3744l3.7228-3.7227c.3826-.3827.3848-1.0175-.0054-1.4077l-2.1204-2.1204c-.393-.393-1.0205-.3927-1.4077-.0055l-3.7227 3.723-3.7228-3.723c-.3826-.3825-1.0175-.3847-1.4077.0056L5.1234 7.244c-.393.393-.3926 1.0204-.0054 1.4077l3.7228 3.7227-3.7228 3.7228c-.3826.3827-.3848 1.0175.0054 1.4077l2.1204 2.1203c.393.393 1.0205.3927 1.4077.0054l3.7228-3.7227 3.7228 3.7227c.3827.3827 1.0176.3848 1.4078-.0054l2.1204-2.1204c.393-.393.3926-1.0206.0054-1.4078l-3.7228-3.7228zM0 12.493C-.004 5.5893 5.5894-.004 12.493 0 19.3964.004 24.996 5.6035 25 12.507c.004 6.9036-5.5894 12.497-12.493 12.493C5.6036 24.996.004 19.3965 0 12.493z\"/></svg><p>delete</p>\n                      </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-heading\">\n    <img src=\"assets/svgs/navigation_folder_bottom.svg\">\n    <h3>Videos</h3>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/folder/folder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FolderComponent = /** @class */ (function () {
    function FolderComponent() {
    }
    FolderComponent.prototype.ngOnInit = function () {
    };
    FolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-folder',
            template: __webpack_require__("../../../../../src/app/folder/folder.component.html"),
            styles: [__webpack_require__("../../../../../src/app/folder/folder.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FolderComponent);
    return FolderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/folder/folder.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FolderModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__folder_component__ = __webpack_require__("../../../../../src/app/folder/folder.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FolderModule = /** @class */ (function () {
    function FolderModule() {
    }
    FolderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__folder_component__["a" /* FolderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__folder_component__["a" /* FolderComponent */]],
            providers: []
        })
    ], FolderModule);
    return FolderModule;
}());



/***/ }),

/***/ "../../../../../src/app/folder/folder.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__folder_component__ = __webpack_require__("../../../../../src/app/folder/folder.component.ts");

var FolderRoutes = [
    {
        path: 'folder',
        component: __WEBPACK_IMPORTED_MODULE_0__folder_component__["a" /* FolderComponent */],
    },
];


/***/ }),

/***/ "../../../../../src/app/folder/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__folder_component__ = __webpack_require__("../../../../../src/app/folder/folder.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__folder_module__ = __webpack_require__("../../../../../src/app/folder/folder.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__folder_route__ = __webpack_require__("../../../../../src/app/folder/folder.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__folder_route__["a"]; });





/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.playlist-setting{\n    background-image: url('https://salaar771.github.io/kidjoTvApp/assets/tablet-l/background.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: auto;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n    background-color: rgba(0,0,0,.2);\n    background-blend-mode:overlay;\n}\n\n.side-bar{\n    position: relative;\n    top: 22%;\n    z-index: 1;\n    width: 6%;\n    \n}\n\n.side-bar-contents img{\n    -webkit-transform: translate(-12%);\n            transform: translate(-12%);\n    width: 80px;\n    height: 500px;\n    border-radius: 15px;\n}\n\n.side-bar-contents p{\n    position: absolute;\n    top: 50%;\n    left: 15%;\n    font-size: 25px;\n    width: 20px;\n    text-align: center;\n    color: #fff;\n    font-weight: 500;\n    font-family: bree;\n}\n\n.playlist-icon-top{\n    position: absolute;\n    top: 0%;\n    right: 50%;\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    background-size: cover;\n    background-position: center;\n    text-align: center;\n    height: 80px;\n}\n\n.playlist-icon-top h3{\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 23px;\n    color: #444;\n    font-family: bree;\n}\n\n.playlist-icon-top img{\n    max-width: 200px;\n}\n\n.playlist-setting-footer{\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    height: 80px;\n}\n\n.playlist-setting-footer img{\n    max-width: 200px;\n}\n\n.playlist-setting-footer h3{\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(42%);\n            transform: translate(42%);\n    font-size: 23px;\n    color: #444;\n    font-family: bree;\n}\n\n.main-card-container{\n    margin:-150px auto;\n    max-width: 90%;\n}\n\n.img-thumbnail{\n    position: relative;\n    border: 9px solid #fff !important;\n}\n\n.img-thumbnail::after{\n    content: '';\n    position: absolute !important;\n    width: 20px;\n    top: 5px;\n    bottom: 5px;\n    -webkit-box-shadow: 8px 0px 4px 0px #111;\n            box-shadow: 8px 0px 4px 0px #111;\n    border-radius: 10px;\n    right: 0;\n    z-index: 1;\n}\n\n@media(max-width:1366px){\n    .main-card-container{\n        margin-top: -10%;\n    }\n}\n\n@media(width:1024px)\n{\n    .main-card-container{\n        margin: -20% auto;\n        margin-left: 8%\n    }\n}\n\n@media(max-width:812px){\n    .main-card-container{\n        margin: -171px auto;\n        max-width: 100%;\n        -webkit-transform: scale(.8);\n                transform: scale(.8);\n    }\n    .side-bar-contents img{\n        width: 60px;\n        height: 212px;\n    }\n    .side-bar-contents p{\n        top :30%;\n    }\n}\n\n@media(width:414px)\n{\n    .main-card-container{\n        margin:0 auto;\n        max-width: 85%;\n        margin-left: 13%;\n        margin-top: -130px;\n    }\n    .side-bar-contents img{\n        width: 60px;\n        height: 400px;\n    }\n    \n}\n\n@media (max-width:812px) {\n    \n    .playlist-icon-top img{\n        max-width: 150px !important;\n    }\n    .playlist-icon-top h3{\n        position: absolute;\n        top: 15%;\n    }\n    .playlist-setting-footer img{\n        max-width: 150px;\n        position: -webkit-sticky;\n        position: sticky;\n        -webkit-transform: translateY(20px);\n                transform: translateY(20px);\n    }\n    .imgActive{ /* IE 9 */\n        -webkit-transform: scale(1.2) !important; /* Safari 3-8 */\n        transform: scale(1.2) !important; \n    }\n}\n\n@media (max-width:412px)\n{\n    .main-card-container{\n        margin-top: 0;\n        margin: -140px auto;\n        margin-left: 14%;\n    }\n    .side-bar img{\n        height: 300px;\n    }\n}\n\n@media(width:768px){\n    .main-card-container{\n        margin-top:20%; \n    }\n}\n\n.leftRs {\n    /* display: none !important; */\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    left: 0;\n    opacity: 0;\n}\n\n.rightRs {\n    /* display: none !important; */\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    right: 0;\n    left: 100% ;\n    opacity: 0;\n    /* left: -100; */\n}\n\n.activeImg{\n    cursor:pointer;\n    max-width: 226px;\n    border-radius: 15px;\n    border: 4px solid #fff;\n}\n\n/* .activeImg:hover{\n    -ms-transform: scale(1.11); \n    -webkit-transform: scale(1.11); \n    transform: scale(1.11); \n} */\n\n.imgActive{ /* IE 9 */\n    -webkit-transform: scale(1.4); /* Safari 3-8 */\n    transform: scale(1.4); \n}\n\n.imgActive:focus{ /* IE 9 */\n    -webkit-transform: scale(1.4); /* Safari 3-8 */\n    transform: scale(1.4); \n}\n\n.sliderFocus:focus .activeImg{ /* IE 9 */\n    -webkit-transform: scale(1.4); /* Safari 3-8 */\n    transform: scale(1.4); \n}\n\n.settingFocus:focus .playlist-setting-footer h3{\n    color: #fbb133;\n}\n\n.favouriteFocus:focus .playlist-icon-top h3{\n    color: #fc6969;\n }\n\n.selected_item{\nbackground: black;\n    color: red !important;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"playlist-setting\">\n  <div class=\"side-bar\">\n    <div class=\"side-bar-contents\">\n      <img src=\"/assets/svgs/water_background.svg\">\n      <p>{{time}} min</p>\n    </div>\n  </div>\n  <a [routerLink]=\"['/favorites']\" #favorite class=\"favouriteFocus\">\n    <div class=\"playlist-icon-top\">\n      <img src=\"assets/svgs/navigation_favorites_top.svg\">\n      <h3>Favourite</h3>\n    </div>\n  </a>\n\n  <div class=\"main-card-container\">\n    <ngx-carousel [inputs]=\"carouselTile\" [moveToSlide]= \"arrayIndex\" (onMove)=\"onmoveFn($event)\">\n      <ngx-tile NgxCarouselItem class=\"ngxcarouselPoint\" *ngFor=\"let folder of folders; let i = index\">\n        <div (click)=\"goToVideoPage(folder[0].id,folder[0].imgUrl,folder[0].color)\"  #slider class=\"sliderFocus\">\n          <img class=\"activeImg img-thumbnail\" [style.background]=\"folder[0].color \" [ngClass]=\"{'imgActive':i==arrayIndex}\"\n            src={{folder[0].imgUrl}}/>\n        </div>\n      </ngx-tile>\n      <button NgxCarouselPrev #previous class='leftRs'>&lt;</button>\n      <button NgxCarouselNext #next class='rightRs'>&gt;</button>\n\n    </ngx-carousel>\n  </div>\n\n  <a [routerLink]=\"[ '/settings'] \" #setting class=\"settingFocus\">\n    <div class=\"playlist-setting-footer \">\n      <img src=\"assets/svgs/navigation_settings_bottom.svg \">\n      <h3>Settings</h3>\n    </div>\n  </a>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEY_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_RefreshWeb_index__ = __webpack_require__("../../../../../src/app/shared/services/RefreshWeb/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["Enter"] = 13] = "Enter";
    KEY_CODE[KEY_CODE["Up_key"] = 38] = "Up_key";
    KEY_CODE[KEY_CODE["Down_key"] = 40] = "Down_key";
})(KEY_CODE || (KEY_CODE = {}));
var HomeComponent = /** @class */ (function () {
    function HomeComponent(refreshweb, router, spinnerService) {
        this.refreshweb = refreshweb;
        this.router = router;
        this.spinnerService = spinnerService;
        this.obj = new Object();
        this.ids = [];
        this.cards = [];
        this.folders = [];
        this.arrayIndex = 0;
        this.downCount = 0;
        this.upCount = 0;
        this.refreshWeb();
    }
    HomeComponent.prototype.keyEvent = function (event) {
        console.log(event);
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            console.log("right key ");
            this.GoRight();
        }
        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            console.log("left key ");
            this.GoLeft();
        }
        if (event.keyCode === KEY_CODE.Up_key) {
            console.log("Up key ");
            this.GoUp();
        }
        if (event.keyCode === KEY_CODE.Down_key) {
            console.log("Down key ");
            this.GoDown();
        }
        if (event.keyCode === KEY_CODE.Enter) {
            console.log("Enter key ");
            var folder = this.folders[this.arrayIndex];
            this.goToVideoPage(folder[0].id, folder[0].imgUrl, folder[0].color);
        }
    };
    HomeComponent.prototype.onmoveFn = function ($event) {
        console.log($event);
    };
    HomeComponent.prototype.GoDown = function () {
        if (this.downCount < 2) {
            this.downCount++;
        }
        if (this.downCount == 1) {
            this.myRight.nativeElement.focus();
        }
        if (this.downCount == 2) {
            this.mySettingsBtn.nativeElement.focus();
            this.downCount = 0;
        }
        console.log("test");
    };
    HomeComponent.prototype.GoUp = function () {
        if (this.upCount < 2) {
            this.upCount++;
        }
        if (this.upCount == 1) {
            this.myLeft.nativeElement.focus();
        }
        if (this.upCount == 2) {
            this.myFavBtn.nativeElement.focus();
            this.upCount = 0;
        }
        // this.myFavBtn.nativeElement.focus();
    };
    HomeComponent.prototype.GoLeft = function () {
        --this.arrayIndex;
        // this.myLeft.nativeElement.focus();
    };
    HomeComponent.prototype.GoRight = function () {
        console.log("test");
        ++this.arrayIndex;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.GetCard();
        this.time = localStorage.getItem('screenTimeLimit');
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 4, lg: 5, all: 0 },
            slide: 1,
            speed: 400,
            loop: true,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: "\n        .ngxcarouselPoint {\n          display: none;\n        }\n       .ngxcarousel-inner {\n        height: 350px;\n        width: 108%;\n         }\n       .ngx-tile.item {\n        width:80%;\n       }\n        .tile {\n        width: 60%;\n        border-radius: 15px;\n       }\n      .ngxcarousel-items {\n      top: 39px;\n      left:8%;\n       }\n         @media (min-width: 992px){\n              .ngxcarouselxUMiWG > .ngxcarousel > .ngxcarousel-inner > .ngxcarousel-items > .item {\n                   width: 31% !important;\n              }\n  \n          }\n        "
            },
            load: 2,
            touch: true,
            easing: 'ease'
        };
    };
    HomeComponent.prototype.refreshWeb = function () {
        var _this = this;
        this.deviceId = localStorage.getItem('X-Kidjo-DeviceId');
        if (!this.deviceId) {
            this.refreshweb.RefreshWeb().subscribe(function (data) {
                console.log(data);
                _this.ImageUrl = data.folderImageUrl;
                _this.videoUrl = data.videoUrl;
                _this.videoImageUrl = data.videoImageUrl;
                localStorage.setItem('videoImageUrl', _this.videoImageUrl);
                localStorage.setItem('videoUrl', _this.videoUrl);
                localStorage.setItem('folderImageUrl', _this.ImageUrl);
                localStorage.setItem('X-Kidjo-DeviceId', data.deviceId);
                _this.kidId = data.kids[0].id;
                localStorage.setItem('kidId', _this.kidId);
                _this.activeSubscription = data.User[0].activeSubscription;
            });
        }
        if (this.activeSubscription == true) {
            localStorage.setItem('premiumActive', 'true');
        }
        else {
            localStorage.setItem('premiumActive', 'false');
        }
    };
    HomeComponent.prototype.GetCard = function () {
        var _this = this;
        this.obj = localStorage.getItem('kidId');
        this.obj = localStorage.getItem('premiumActive');
        this.spinnerService.show();
        this.refreshweb.GetCard(this.obj).subscribe(function (data) {
            _this.spinnerService.hide();
            _this.cards = data.cards;
            var tempData = [];
            var test = [];
            var color = ['red', 'yellow', 'blue', 'green', 'orange', 'purple'];
            var counter = 0;
            for (var index = 0; index < _this.cards.length; index++) {
                if (counter == 5) {
                    counter = 0;
                }
                if (_this.cards[index].id) {
                    test = [{ 'id': _this.cards[index].id, 'color': color[counter], 'imgUrl': _this.folderImage(_this.cards[index].id) }];
                    tempData.push(test);
                    // increment counter
                    counter++;
                }
            }
            _this.folders = tempData;
        }, function (Error) {
            _this.spinnerService.hide();
        });
    };
    HomeComponent.prototype.folderImage = function (id) {
        var url = localStorage.getItem('folderImageUrl');
        this.innerheigth = window.innerHeight;
        if (this.innerheigth <= 1440 && this.innerheigth >= 1080) {
            this.bucketName = '/phone-l';
        }
        else if (this.innerheigth <= 1080 && this.innerheigth >= 768) {
            this.bucketName = '/phone-m';
        }
        else if (this.innerheigth <= 360 && this.innerheigth >= 0) {
            this.bucketName = '/phone-s';
        }
        else if (this.innerheigth <= 2048 && this.innerheigth >= 1536) {
            this.bucketName = '/tablet-l';
        }
        else if (this.innerheigth <= 1536 && this.innerheigth >= 1440) {
            this.bucketName = '/tablet-m';
        }
        else if (this.innerheigth <= 768 && this.innerheigth >= 360) {
            this.bucketName = '/tablet-s';
        }
        return url + 'folderImage' + this.bucketName + '/' + id + '.png';
    };
    HomeComponent.prototype.goToVideoPage = function (id, url, color) {
        console.log(color);
        this.router.navigate(['./video', id, url, color]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('setting'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "mySettingsBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('favorite'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "myFavBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previous'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "myLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('next'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "myRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "keyEvent", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_RefreshWeb_index__["a" /* RefreshWebService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HomeModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_image_slider__ = __webpack_require__("../../../../angular-image-slider/angular-image-slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3_angular_image_slider__["a" /* SliderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");

var HomeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
    },
];


/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_route__ = __webpack_require__("../../../../../src/app/home/home.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__home_route__["a"]; });





/***/ }),

/***/ "../../../../../src/app/overtime-error/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overtime_error_component__ = __webpack_require__("../../../../../src/app/overtime-error/overtime-error.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overtime_error_module__ = __webpack_require__("../../../../../src/app/overtime-error/overtime-error.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overtime_error_route__ = __webpack_require__("../../../../../src/app/overtime-error/overtime-error.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__overtime_error_route__["a"]; });





/***/ }),

/***/ "../../../../../src/app/overtime-error/overtime-error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".run-time-over-section{\n    width: auto;\n    min-height: 100vh;\n    background:#2e336c;\n    padding: 0 3em;\n    text-align: center;\n    background-size: cover;\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.sleeping-moon-image img{\n    max-width: 420px;\n    z-index: 10000;\n}\n.para-1{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 50px;\n    font-weight: bold;\n    font-family: bree;\n    color: #fff;\n    width: 100%;\n    \n}\n.para-2{\n    position: absolute;\n    bottom: 5%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 32px;\n    font-weight: bold;\n    font-family: bree;\n    color: aqua;\n    border: 6px solid aqua;\n    border-radius: 12px;\n    padding: .3em 1em;\n    width: 270px;\n}\n.sub-para{\n    font-style: normal;\n    font-size: 21px;\n    font-family: bree light;\n}\n@media(max-width:812px)\n{\n    .para-1{\n        top: 45%;\n        font-size: 32px\n    }\n    .para-2{\n        font-size: 28px;\n    }\n    .sleeping-moon-image img{\n        max-width:300px ;\n        width:100%;\n}\n} \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overtime-error/overtime-error.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"run-time-over-section\">\n  <div class=\"parent-container\">\n    <div class=\"sleeping-moon-image\">\n      <img src=\"assets/tablet-l/overtime_moon_a.png\">\n    </div>\n    <p class=\"para-1\">\n      You have run out of screen time! See you next time!\n    </p>\n    <p class=\"para-2\">\n      Press anywhere to reset the timer?\n      <em class=\"sub-para\">PARENTS ONLY!</em>\n    </p>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/overtime-error/overtime-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OvertimeErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OvertimeErrorComponent = /** @class */ (function () {
    function OvertimeErrorComponent() {
    }
    OvertimeErrorComponent.prototype.ngOnInit = function () {
    };
    OvertimeErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overtime-error',
            template: __webpack_require__("../../../../../src/app/overtime-error/overtime-error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/overtime-error/overtime-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OvertimeErrorComponent);
    return OvertimeErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/overtime-error/overtime-error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OverTimeModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overtime_error_component__ = __webpack_require__("../../../../../src/app/overtime-error/overtime-error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OverTimeModule = /** @class */ (function () {
    function OverTimeModule() {
    }
    OverTimeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__overtime_error_component__["a" /* OvertimeErrorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__overtime_error_component__["a" /* OvertimeErrorComponent */]],
            providers: []
        })
    ], OverTimeModule);
    return OverTimeModule;
}());



/***/ }),

/***/ "../../../../../src/app/overtime-error/overtime-error.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverTimeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overtime_error_component__ = __webpack_require__("../../../../../src/app/overtime-error/overtime-error.component.ts");

var OverTimeRoutes = [
    {
        path: 'overtime',
        component: __WEBPACK_IMPORTED_MODULE_0__overtime_error_component__["a" /* OvertimeErrorComponent */],
    },
];


/***/ }),

/***/ "../../../../../src/app/settings/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_route__ = __webpack_require__("../../../../../src/app/settings/settings.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_route__["a"]; });





/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".videos-filter-1{\n    background: radial-gradient(circle,brown 0%,steelblue 90%);\n    background-size: cover;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0,0,0,.2);\n    background-blend-mode: overlay;\n    position: relative;\n    overflow: hidden;\n}\n.video-filter-top{\n    position:absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    height: 80px;\n    position: fixed;\n}\n.video-filter-top h3{\n    position: absolute;\n    top: 24%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 23px;\n    color: #444;\n    font-family: bree;\n}\n.video-filter-top img{\n    max-width: 200px;\n}\n.main-element-container{\n     display: -webkit-inline-box;\n     display: -ms-inline-flexbox;\n     display: inline-flex;   \n     margin-top: 200px ;\n     -webkit-box-pack: center;\n         -ms-flex-pack: center;\n             justify-content: center;\n     /* margin-left: 8%; */\n     position: absolute;\n     left: 50%;\n     -webkit-transform: translate(-50%);\n             transform: translate(-50%);\n}\n[class^=\"box\"] img{\n    max-width: 320px;\n    margin: 20px;\n    position: relative;\n}\n.box-1{\n    position: relative;\n}\n.text-box-1{\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    color: #fff;\n}\n.text-box-1 ul{\n    position: absolute;\n    width: 100%;\n    padding-top: 60px;\n    list-style: none;\n    text-align: left;\n    font-size: 20px;\n    line-height: 1.9em;\n    padding-left: 0;\n}\n.text-box-1 li{\n    text-align: center;\n}\n.last-item{\n    /* top: 174px;\n    right: -88px; */\n}\n.text-box-1  img{\n    display: inline-block !important;  \n    right: -48%;\n    max-width: 30px;\n    position: absolute;\n    margin: 5px;\n    \n}\n.text-box-1 h4{\n    font-size: 24px;\n    font-family: bree;\n    font-weight: 500;\n}\n@media(max-width:1408px)\n{\n    .videos-filter-1{\n        overflow: scroll;\n    }\n    .main-element-container{\n        -webkit-transform: none;\n                transform: none;\n        left: auto;\n\n    }\n}\n@media(max-width:360px) {\n    .main-element-container{\n        top: -3%;\n    }\n    \n}\n@media(max-width:840px){\n    .main-element-container{\n        margin-top:-5%;\n}\n}\n@media(max-width:1024px) {\n    .main-element-container{\n        margin-top: 40%;\n    }\n    \n}\n.selected-text{\n    color: #4eb3a6;\n}\n@media(max-width:1024px){\n    .main-element-container{\n        margin-top: 25%;\n    }\n    [class^=\"box\"] img{\n        max-width: 320px;\n    }\n    .text-box-1 ul{\n        padding-top: 0;\n        font-size: 19px;\n    }\n    .text-box-1 h4{\n        font-size: 23px;\n        padding-top: 15px;\n    }\n    .text-box-1  img{\n        max-width: 23px;\n        right: -30%;\n    }\n}\n@media(max-width:812px){\n    .main-element-container{\n        margin-top: 10%;\n    }\n    [class^=\"box\"] img{\n        max-width: 170px;\n    }\n    .text-box-1 ul{\n        padding-top: 0;\n        font-size: 14px;\n    }\n    .text-box-1 h4{\n        font-size: 16px;\n        padding-top: 15px;\n    }\n    .text-box-1  img{\n        max-width: 23px;\n        right: -30%;\n    }\n}\n.favouriteFocus:focus .video-filter-top h3{\n    color: #4dbcae;\n }\n.imgActive{\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); \n}\nselected_item{\n    color:red;\n    text-align: left;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n}\n.test:focus{\n    color:red;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n}\n.selected_item{\n    background: white;\n        color: black !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"videos-filter-1\">\n    <a [routerLink]=\"[ '/'] \" #home class=\"favouriteFocus\">\n        <div class=\"video-filter-top\">\n            <img src=\"assets/svgs/navigation_folder_top.svg\">\n            <h3>Videos</h3>\n        </div>\n    </a>\n    <div class=\"main-element-container\">\n        <div #box1 class=\"box-1 test\" [ngClass]=\"{'imgActive':1==arrayIndex}\">\n            <img src=\"assets/svgs/settings_box_background.svg\">\n\n            <div class=\"text-box-1\">\n                <h4>Filter by age</h4>\n                <ul style=\"cursor: pointer;\">\n                    <li #fitrstList [ngClass]=\"{'selected-text':selectedAge == m,'selected_item':i == ageItemsIndex}\" style=\"text-align: center;\"\n                        *ngFor=\"let m of age; let i = index;\" (click)=\"getAge(m)\">{{m}}\n                        <img src=\"assets/svgs/settings_check.svg\" *ngIf=\"setAgeTick(m)\">\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"box-1\" #box2 [ngClass]=\"{'imgActive':2==arrayIndex}\">\n            <img src=\"assets/svgs/settings_box_background.svg\">\n            <div class=\"text-box-1\">\n                <h4>Set time limit</h4>\n                <ul style=\" cursor: pointer; \">\n                    <li #secondList [ngClass]=\"{'selected-text':selectedTime == time,'selected_item':i == timeItemsIndex}\" *ngFor=\"let time of timeLimit;  let i = index; \"\n                        (click)=\"getTime(time) \">{{time}} \n                        <img src=\"assets/svgs/settings_check.svg\" *ngIf=\"setTimeTick(time) \" style=\" display: inline-block !important; \">\n                    </li>\n                    <!-- <li [ngClass]=\"{'selected_item':6 == timeItemsIndex}\" (click)=\"getTime(off) \">{{off}} <img src=\"assets/svgs/settings_check.svg \" *ngIf=\"setTimeTick(off)\">\n                    </li> -->\n                </ul>\n            </div>\n        </div>\n        <div class=\"box-1\" #box3 [ngClass]=\"{'imgActive':3==arrayIndex}\">\n            <img src=\"assets/svgs/settings_box_background.svg \">\n\n            <div class=\"text-box-1\">\n                <h4>Choose content</h4>\n                <ul style=\" cursor: pointer; \">\n                    <li #thirdtList [ngClass]=\"{'selected-text':selectedContent == c,'selected_item':i == contentItemsIndex}\" *ngFor=\"let c of content;  let i = index; \"\n                        (click)=\"getContent(c) \">{{c}}\n                        <img src=\"assets/svgs/settings_check.svg \" *ngIf=\"setContentTick(c) \" style=\"right:-50px;\"></li>\n\n                </ul>\n            </div>\n        </div>\n        <div class=\"box-1\" #box4 [ngClass]=\"{'imgActive':4==arrayIndex}\">\n            <img src=\"assets/svgs/settings_box_background.svg \">\n\n            <div class=\"text-box-1\">\n                <h4>Language</h4>\n                <ul style=\" cursor: pointer; \">\n                    <li #forthList [ngClass]=\"{'selected-text':selectedLanguage == lang,'selected_item':i == langItemsIndex}\" *ngFor=\"let lang of language;  let i = index; \"\n                        (click)=\"getLanguage(lang) \">{{lang}}\n                        <img src=\"assets/svgs/settings_check.svg \" *ngIf=\"setLanguageTick(lang) \">\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEY_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["Enter"] = 13] = "Enter";
    KEY_CODE[KEY_CODE["Up_key"] = 38] = "Up_key";
    KEY_CODE[KEY_CODE["Down_key"] = 40] = "Down_key";
})(KEY_CODE || (KEY_CODE = {}));
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.arrayIndex = 1;
        this.liIndex = 0;
        this.age = [3, 4, 5, 6, 7];
        this.timeLimit = ['5 Minutes', '20 Minutes', '40 Minutes', '60 Minutes', '90 Minutes', 'Off'];
        this.content = ["Mix", "Entertainment", "Educational"];
        this.language = ["English", "Espanol", "Français", "Portugues"];
        this.testt = [];
        this.downCount = 0;
        this.upCount = 0;
        this.ageItemsIndex = 0;
        this.ageIndex = this.age.length;
        this.timeIndex = this.timeLimit.length;
        this.contentIndex = this.content.length;
        this.langIndex = this.language.length;
        this.off = "Off";
        this.selectedAge = localStorage.getItem('Age');
        this.selectedTime = localStorage.getItem('screenTimeLimit');
        this.selectedContent = localStorage.getItem('selectedContentType');
        this.selectedLanguage = localStorage.getItem('language');
    }
    SettingsComponent.prototype.keyEvent = function (event) {
        console.log(event);
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            console.log("right key ");
            this.GoRight();
        }
        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            console.log("left key ");
            this.GoLeft();
        }
        if (event.keyCode === KEY_CODE.Up_key) {
            console.log("Up key ");
            this.GoUp();
        }
        if (event.keyCode === KEY_CODE.Down_key) {
            console.log("Down key ");
            this.GoDown();
        }
        if (event.keyCode === KEY_CODE.Enter) {
            console.log("Enter key ");
            if (this.arrayIndex != 0) {
                this.myHomeBtn.nativeElement.blur();
            }
            if (this.arrayIndex == 1) {
                this.getAge(this.age[this.ageItemsIndex]);
                this.ageItemsIndex = 8;
                // this.arrayIndex = 2;
            }
            if (this.arrayIndex == 2) {
                this.getTime(this.timeLimit[this.timeItemsIndex]);
                this.timeItemsIndex = 8;
            }
            if (this.arrayIndex == 3) {
                this.getContent(this.content[this.contentItemsIndex]);
                this.contentItemsIndex = 6;
            }
            if (this.arrayIndex == 4) {
                this.getLanguage(this.language[this.langItemsIndex]);
                this.langItemsIndex = 8;
            }
            this.arrayIndex = 0;
        }
    };
    SettingsComponent.prototype.GoDown = function () {
        if (this.arrayIndex == 0) {
            this.myHomeBtn.nativeElement.blur();
            this.arrayIndex = 1;
        }
        if (this.arrayIndex == 1) {
            this.fitrstList.nativeElement.focus();
        }
        if (this.ageIndex < 6 && this.arrayIndex == 1) {
            // this.getAge(this.age[this.itemsIndex++]);
            this.ageItemsIndex++;
            if (this.ageItemsIndex == 5) {
                this.ageItemsIndex = 0;
            }
        }
        if (this.timeIndex < 7 && this.arrayIndex == 2) {
            // this.getTime(this.timeLimit[this.itemsIndex++]);
            this.timeItemsIndex++;
            if (this.timeItemsIndex == 6) {
                this.timeItemsIndex = 0;
            }
        }
        if (this.contentIndex < 4 && this.arrayIndex == 3) {
            // this.getTime(this.timeLimit[this.itemsIndex++]);
            this.contentItemsIndex++;
            if (this.contentItemsIndex == 3) {
                this.contentItemsIndex = 0;
            }
        }
        if (this.langIndex < 5 && this.arrayIndex == 4) {
            // this.getTime(this.timeLimit[this.itemsIndex++]);
            this.langItemsIndex++;
            if (this.langItemsIndex == 4) {
                this.langItemsIndex = 0;
            }
        }
    };
    SettingsComponent.prototype.GoUp = function () {
        if (this.arrayIndex != 0) {
        }
        if (this.upCount < 1) {
            this.upCount++;
        }
        if (this.upCount == 1 && this.arrayIndex == 0) {
            this.myHomeBtn.nativeElement.focus();
            this.upCount = 0;
        }
        if (this.selectedAge > 3 && this.arrayIndex == 1) {
            // this.getAge(this.age[--this.itemsIndex]);
            --this.ageItemsIndex;
        }
        if (this.timeIndex > 0 && this.arrayIndex == 2) {
            // this.getAge(this.age[--this.itemsIndex]);
            --this.timeItemsIndex;
        }
        if (this.contentIndex > 0 && this.arrayIndex == 3) {
            // this.getAge(this.age[--this.itemsIndex]);
            --this.contentItemsIndex;
        }
        if (this.langIndex > 0 && this.arrayIndex == 4) {
            // this.getAge(this.age[--this.itemsIndex]);
            --this.langItemsIndex;
        }
    };
    SettingsComponent.prototype.GoLeft = function () {
        --this.arrayIndex;
        if (this.arrayIndex == 0) {
            this.arrayIndex = 1;
        }
        if (this.arrayIndex == 3) {
            this.timeItemsIndex = 8;
            this.contentItemsIndex = 0;
            this.langItemsIndex = 6;
            this.ageItemsIndex = 7;
        }
        if (this.arrayIndex == 2) {
            this.timeItemsIndex = 0;
            this.contentItemsIndex = 6;
            this.langItemsIndex = 6;
            this.ageItemsIndex = 7;
        }
        if (this.arrayIndex == 1) {
            this.timeItemsIndex = 8;
            this.contentItemsIndex = 6;
            this.langItemsIndex = 6;
            this.ageItemsIndex = 0;
        }
    };
    SettingsComponent.prototype.GoRight = function () {
        ++this.arrayIndex;
        if (this.arrayIndex == 5) {
            this.arrayIndex = 1;
            this.ageItemsIndex = 0;
            this.langItemsIndex = 7;
        }
        if (this.arrayIndex == 2) {
            this.timeItemsIndex = 0;
            this.contentItemsIndex = 5;
            this.langItemsIndex = 6;
            this.ageItemsIndex = 7;
        }
        if (this.arrayIndex == 3) {
            this.contentItemsIndex = 0;
            this.langItemsIndex = 6;
            this.ageItemsIndex = 7;
            this.timeItemsIndex = 8;
        }
        if (this.arrayIndex == 4) {
            this.langItemsIndex = 0;
            this.ageItemsIndex = 7;
            this.timeItemsIndex = 8;
            this.contentItemsIndex = 5;
        }
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.setAgeTick = function (val) {
        var age = localStorage.getItem('Age');
        if (val == age) {
            return true;
        }
        else {
            return false;
        }
    };
    SettingsComponent.prototype.setTimeTick = function (val) {
        var time = localStorage.getItem('screenTimeLimit');
        if (val == time) {
            return true;
        }
        else {
            return false;
        }
    };
    SettingsComponent.prototype.setContentTick = function (val) {
        var content = localStorage.getItem('selectedContentType');
        if (val == content) {
            return true;
        }
        else {
            return false;
        }
    };
    SettingsComponent.prototype.setLanguageTick = function (val) {
        var language = localStorage.getItem('language');
        if (val == language) {
            return true;
        }
        else {
            return false;
        }
    };
    SettingsComponent.prototype.getAge = function (age) {
        localStorage.setItem('Age', age);
        this.selectedAge = age;
    };
    SettingsComponent.prototype.getTime = function (time) {
        localStorage.setItem('screenTimeLimit', time);
        this.selectedTime = time;
    };
    SettingsComponent.prototype.getContent = function (content) {
        localStorage.setItem('selectedContentType', content);
        this.selectedContent = content;
    };
    SettingsComponent.prototype.getLanguage = function (lang) {
        localStorage.setItem('language', lang);
        this.selectedLanguage = lang;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('home'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "myHomeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lost'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "LostFocus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('box1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "firstBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('box2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "secondBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('box3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "thirdBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('box4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "forthBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fitrstList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "fitrstList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('secondList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "secondList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('thirdtList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "thirdtList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('forthList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SettingsComponent.prototype, "forthList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SettingsComponent.prototype, "keyEvent", null);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]],
            providers: []
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");

var SettingsRoutes = [
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_0__settings_component__["a" /* SettingsComponent */],
    },
];


/***/ }),

/***/ "../../../../../src/app/shared/entities/Addfav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFav; });
var AddFav = /** @class */ (function () {
    function AddFav() {
    }
    return AddFav;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/RefreshWeb.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Refresh; });
var Refresh = /** @class */ (function () {
    function Refresh() {
    }
    return Refresh;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/ResponseError.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseError; });
var ResponseError = /** @class */ (function () {
    function ResponseError() {
    }
    return ResponseError;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Card */
var Card = /** @class */ (function () {
    function Card() {
    }
    ;
    return Card;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/folder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Folder */
var Folder = /** @class */ (function () {
    function Folder() {
    }
    return Folder;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/formate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Formate */
var Formate = /** @class */ (function () {
    function Formate() {
    }
    return Formate;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResponseError__ = __webpack_require__("../../../../../src/app/shared/entities/ResponseError.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__ResponseError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kid__ = __webpack_require__("../../../../../src/app/shared/entities/kid.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/shared/entities/user.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language__ = __webpack_require__("../../../../../src/app/shared/entities/language.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formate__ = __webpack_require__("../../../../../src/app/shared/entities/formate.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__folder__ = __webpack_require__("../../../../../src/app/shared/entities/folder.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Addfav__ = __webpack_require__("../../../../../src/app/shared/entities/Addfav.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__Addfav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RefreshWeb__ = __webpack_require__("../../../../../src/app/shared/entities/RefreshWeb.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__RefreshWeb__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video__ = __webpack_require__("../../../../../src/app/shared/entities/video.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subCard__ = __webpack_require__("../../../../../src/app/shared/entities/subCard.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card__ = __webpack_require__("../../../../../src/app/shared/entities/card.ts");
/* unused harmony namespace reexport */
//0







//1



//2



/***/ }),

/***/ "../../../../../src/app/shared/entities/kid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export kid */
var kid = /** @class */ (function () {
    function kid() {
    }
    return kid;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/language.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export language */
var language = /** @class */ (function () {
    function language() {
    }
    return language;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/subCard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SubCard */
var SubCard = /** @class */ (function () {
    function SubCard() {
    }
    return SubCard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export user */
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());



/***/ }),

/***/ "../../../../../src/app/shared/entities/video.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Video */
var Video = /** @class */ (function () {
    function Video() {
    }
    return Video;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/RefreshWeb/RefreshWeb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshWebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_index__ = __webpack_require__("../../../../../src/app/shared/services/RestService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_index__ = __webpack_require__("../../../../../src/app/shared/entities/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RefreshWebService = /** @class */ (function () {
    function RefreshWebService(restConnector) {
        this.restConnector = restConnector;
        this.d = new Date();
        this.date = new Date(this.d.getUTCDay(), this.d.getUTCDate(), this.d.getUTCMonth(), this.d.getUTCFullYear(), this.d.getUTCHours(), this.d.getUTCMinutes(), this.d.getUTCSeconds());
    }
    RefreshWebService.prototype.RefreshWeb = function () {
        var refreshweb = new __WEBPACK_IMPORTED_MODULE_2__entities_index__["b" /* Refresh */]();
        refreshweb.Date = this.date;
        var url = "/device/refreshWeb";
        return this.restConnector.httpPostWeb(refreshweb, url);
    };
    RefreshWebService.prototype.GetCard = function (values) {
        this.contentType = 'education';
        var url = "/cards/getList";
        return this.restConnector.httpGetWeb(url + "?kidId=" + values.kidId + "contentType" + values.contentType + "premiumActive" + values.premiumActive, this.contentType);
    };
    RefreshWebService.prototype.updateKid = function (values) {
        var url = "/kid/[kidId]/update";
        return this.restConnector.httpPostWeb(values, url);
    };
    RefreshWebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__RestService_index__["a" /* RESTConnectorService */]])
    ], RefreshWebService);
    return RefreshWebService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/RefreshWeb/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RefreshWeb_service__ = __webpack_require__("../../../../../src/app/shared/services/RefreshWeb/RefreshWeb.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__RefreshWeb_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/services/RestService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rest_connector_service__ = __webpack_require__("../../../../../src/app/shared/services/RestService/rest-connector.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__rest_connector_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/services/RestService/rest-connector.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESTConnectorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blockui_index__ = __webpack_require__("../../../../../src/app/shared/services/blockui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_index__ = __webpack_require__("../../../../../src/app/shared/entities/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sha_js__ = __webpack_require__("../../../../sha.js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sha_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sha_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * This class provides the Wrrapper Http service to call REST / WebAPI
 */
var RESTConnectorService = /** @class */ (function () {
    function RESTConnectorService(http, blockUiService) {
        this.http = http;
        this.blockUiService = blockUiService;
        this.AppString = " Tg4TwzUgR8";
        // time = new Date();
        this.Url = "https://staging.kidjo.net/app/api/3";
        this.d = new Date();
        this.DeviceId = "5492532046838041";
        this.date = new Date(this.d.getUTCDay(), this.d.getUTCDate(), this.d.getUTCMonth(), this.d.getUTCFullYear(), this.d.getUTCHours(), this.d.getUTCMinutes(), this.d.getUTCSeconds()).toString();
        this.d.getTimezoneOffset();
        this.timeZoneOffsetInMinutes = this.d;
    }
    RESTConnectorService.prototype.getHeader = function (contentType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", contentType);
        headers.append("X-Kidjo-DeviceId", this.DeviceId);
        headers.append("X-Kidjo-Date", this.date);
        var auth = __WEBPACK_IMPORTED_MODULE_5_sha_js__('sha256').update(this.DeviceId + this.date + this.AppString).digest('hex');
        headers.append("Authorization", auth);
        return headers;
    };
    RESTConnectorService.prototype.handleErrorWeb = function (error, stopBlock) {
        // console.log(error);
        var body = error.json();
        var err = new __WEBPACK_IMPORTED_MODULE_4__entities_index__["c" /* ResponseError */]();
        err.type = error.type;
        err.status = error.status;
        err.statusText = error.statusText;
        err.error = body.error;
        err.message = body.Message;
        err.description = body.error_description;
        this.blockUiService.stopBlock();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
    };
    RESTConnectorService.prototype.handleError = function (error, blockUiService, blocking) {
        console.log(error);
        //let body = error.json();
        if (blocking) {
            blockUiService.stopBlock();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    RESTConnectorService.prototype.parseResponseWeb = function (response) {
        if (response.text.length == 0) {
            console.log("Lenght is zero");
            return;
        }
        var body;
        try {
            body = response.json();
        }
        catch (e) {
            this.blockUiService.stopBlock();
            //return Observable.throw(e);
            console.log(response);
        }
        this.blockUiService.stopBlock();
        return body;
    };
    RESTConnectorService.prototype.httpPostWeb = function (obj, url, contentType) {
        var _this = this;
        if (contentType === void 0) { contentType = "application/json"; }
        url = this.Url + url;
        this.blockUiService.startBlock();
        var body = obj;
        var headers = this.getHeader(contentType);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // alert();
        return this.http.post(url, body, options)
            .map(function (response) {
            return _this.parseResponse(response, _this.blockUiService, true);
        })
            .catch(function (error) { return _this.handleError(error, _this.blockUiService, true); });
    };
    RESTConnectorService.prototype.httpGetWeb = function (url, contentType) {
        var _this = this;
        url = this.Url + url;
        this.blockUiService.startBlock();
        var headers = this.getHeader(contentType);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options)
            .map(function (response) {
            return _this.parseResponse(response, _this.blockUiService, true);
        })
            .catch(function (error) { return _this.handleError(error, _this.blockUiService, true); });
    };
    RESTConnectorService.prototype.parseResponse = function (response, blockUiService, blocking) {
        // alert();
        if (blocking) {
            blockUiService.stopBlock();
        }
        var body = response.json();
        return body;
    };
    RESTConnectorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__blockui_index__["a" /* BlockUIService */]])
    ], RESTConnectorService);
    return RESTConnectorService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/blockui/BlockUi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockUIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Injectable, EventEmitter } from '@angular/core';


/**
 * This class provides the BlockUI Service
 */
var BlockUIService = /** @class */ (function () {
    function BlockUIService() {
        //blockUIEvent: EventEmitter<any>;
        this.blockUI = false;
        this.blockUIEvent$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* ReplaySubject */](1);
        this.locked = false;
        this.blockUIEvent$.next(false);
    }
    /**
     * Set block ui event
     * @startBlock
     */
    BlockUIService.prototype.startBlock = function () {
        if (this.locked) {
            return;
        }
        this.blockUI = true;
        this.blockUIEvent$.next(true);
    };
    BlockUIService.prototype.startBlockHold = function () {
        this.locked = true;
        this.blockUI = true;
        this.blockUIEvent$.next(true);
    };
    BlockUIService.prototype.stopBlockHold = function () {
        this.locked = false;
        this.blockUI = false;
        this.blockUIEvent$.next(false);
    };
    /**
     * Reset block ui event
     * @stopBlock
     */
    BlockUIService.prototype.stopBlock = function () {
        if (this.locked) {
            return;
        }
        this.blockUI = false;
        this.blockUIEvent$.next(false);
    };
    BlockUIService.prototype.getCurrentState = function () {
        return this.blockUI;
    };
    BlockUIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BlockUIService);
    return BlockUIService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/blockui/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockUi_service__ = __webpack_require__("../../../../../src/app/shared/services/blockui/BlockUi.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BlockUi_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/services/favoritesService/favorites.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_index__ = __webpack_require__("../../../../../src/app/shared/services/RestService/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoriteService = /** @class */ (function () {
    function FavoriteService(restConnector) {
        this.restConnector = restConnector;
        this.contentType = "application/json";
    }
    FavoriteService.prototype.addFavrouit = function (values) {
        console.log(values);
        alert();
        var url = "/kid/" + values.kidId + "/favorites/add";
        return this.restConnector.httpPostWeb(values, url);
    };
    FavoriteService.prototype.GetFavorite = function (kidId) {
        var url = "/kid/" + kidId + "/favorites/getList";
        return this.restConnector.httpGetWeb(url, this.contentType);
    };
    FavoriteService.prototype.RemoveFavorite = function (videoId) {
        var kidId = localStorage.getItem("kidId");
        var url = "/kid/" + kidId + "/favorites/remove";
        return this.restConnector.httpPostWeb(videoId, url);
    };
    FavoriteService.prototype.SetLanguage = function (id) {
        var url = "/language/set";
        return this.restConnector.httpPostWeb(id, url);
    };
    FavoriteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__RestService_index__["a" /* RESTConnectorService */]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/favoritesService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorites_service__ = __webpack_require__("../../../../../src/app/shared/services/favoritesService/favorites.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__favorites_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/services/videoService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_service__ = __webpack_require__("../../../../../src/app/shared/services/videoService/video.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__video_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/services/videoService/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_index__ = __webpack_require__("../../../../../src/app/shared/services/RestService/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoService = /** @class */ (function () {
    function VideoService(restConnector) {
        this.restConnector = restConnector;
        this.contentType = "application/json";
    }
    VideoService.prototype.GetSubCard = function (SubId) {
        var id = SubId;
        var url = "/cards/folder/" + id;
        return this.restConnector.httpGetWeb(url, this.contentType);
    };
    VideoService.prototype.getVideo = function (videoID) {
        var url = "/cards/video/" + videoID;
        return this.restConnector.httpGetWeb(url, this.contentType);
    };
    VideoService.prototype.startVideo = function (videoId) {
        var url = "/cards/video/" + videoId + "/started";
        return this.restConnector.httpGetWeb(url, this.contentType);
    };
    VideoService.prototype.EndVideo = function (videoId) {
        var kidId = localStorage.getItem('kidId');
        var obj = new Object();
        obj = videoId;
        obj = kidId;
        var url = "/cards/video/" + videoId + "/end";
        return this.restConnector.httpPostWeb(obj, url, this.contentType);
    };
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__RestService_index__["a" /* RESTConnectorService */]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blockui_index__ = __webpack_require__("../../../../../src/app/shared/services/blockui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_RestService_index__ = __webpack_require__("../../../../../src/app/shared/services/RestService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_RefreshWeb_index__ = __webpack_require__("../../../../../src/app/shared/services/RefreshWeb/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_videoService_index__ = __webpack_require__("../../../../../src/app/shared/services/videoService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_favoritesService_index__ = __webpack_require__("../../../../../src/app/shared/services/favoritesService/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_blockui_index__["a" /* BlockUIService */],
                __WEBPACK_IMPORTED_MODULE_3__services_RestService_index__["a" /* RESTConnectorService */],
                __WEBPACK_IMPORTED_MODULE_4__services_RefreshWeb_index__["a" /* RefreshWebService */],
                __WEBPACK_IMPORTED_MODULE_5__services_videoService_index__["a" /* VideoService */],
                __WEBPACK_IMPORTED_MODULE_6__services_favoritesService_index__["a" /* FavoriteService */]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/video-selection/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_selection_component__ = __webpack_require__("../../../../../src/app/video-selection/video-selection.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_selection_route__ = __webpack_require__("../../../../../src/app/video-selection/video-selection.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__video_selection_route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_selection_module__ = __webpack_require__("../../../../../src/app/video-selection/video-selection.module.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/video-selection/video-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".books-section{\n    height: 100vh;\n    background-color:lightsteelblue;\n    background-blend-mode: multiply;\n    position: relative;\n    overflow: hidden;\n}\n.background{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-image: url('https://salaar771.github.io/kidjoTvApp/assets/tablet-l/background_day_bottom.png');\n    background-size: cover;\n    -webkit-filter: blur(40px);\n            filter: blur(40px);\n    background-repeat: no-repeat;\n    background-position: relative;\n}\n.side-bar{\n    position: relative;\n    top: 10%;\n    z-index: 1;\n    width: 6%;\n}\n.side-bar-contents img{\n    -webkit-transform: translate(-12%);\n            transform: translate(-12%);\n    width: 80px;\n    height: 500px;\n    border-radius: 15px;\n}\n.side-bar-contents p{\n    position: absolute;\n    top: 50%;\n    left: 15%;\n    font-size: 25px;\n    width: 20px;\n    text-align: center;\n    color: #fff;\n    font-weight: 500;\n    font-family: bree;\n}\n.books{\n    position: relative;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    text-align: center;\n    top: 12%;\n    color: #fff;\n    font-size: 25px;\n}\n.books img{\n    max-width: 152px;\n    border: 9px solid #fff;\n    border-radius: 15px;\n    \n    /* border-radius: 4px */\n}\n.mybtn{\n    max-width: 45px;\n    position: absolute;\n    top: 4%;\n    right: 5%;\n}\n.main-books-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    max-width: 95%;\n    position: absolute;\n    top: 30%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    /* margin: 0 auto; */\n    left: 53%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n}\n.books{\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    text-align: center;\n    top: 5%;\n    color: #fff;\n    font-size: 25px;\n}\n.books img{\n    max-width: 120px;\n    border: 4px solid #fff;\n    border-radius: 4px\n}\n.books-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    top: 31%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);    \n}\n[class^=\"books-container\"]\n{\n    margin-left: 2.5em;\n}\n.books-container{\n    position: relative;\n    max-width: 300px;\n    height: 264px;\n    padding: 0;\n    border-radius: 15px;\n    background: red;\n}\n.books-card{\n    position: relative;\n    max-width: 300px;\n    padding: 0;\n    margin: 0;\n}\n.video{\n position: relative;\n    \n}\n.lock-overlay img{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.lock-overlay .lock-bar{\n    width: 100%;\n}\n.lock-overlay .lock-icon{\n    top: 5%;\n    left: 25%;\n    width: 15px;\n}\n.lock-overlay p{\n    position: absolute;\n    top: 5%;\n    right: 25%;\n    color: #fff;\n    font-family: bree;\n    font-size: 14px;\n}\n.books-card .caption{\n    padding: 0em;\n    background: red;\n    position: absolute;\n    top: 86%;\n    left: 6%;\n    right: 0;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    color: #fff;\n    font-family: bree;\n    text-align: left;\n}\n.caption p{\n    padding: 8px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    font-size: 13px;\n    font-weight: 500 !important;\n}\n.fav-btn{    \n    position: absolute;\n    top: 113%;\n    width: 100px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    cursor: pointer;\n}\n.fav-btn img{\n    width: 15px;\n    height: 15px;\n    margin-bottom: 10%;\n    cursor: pointer;\n}\n.fav-btn p{\n    margin-right: auto;\n    margin-left:10px;\n    text-transform: uppercase;\n    font-family: bree;\n    font-weight: bold;\n    font-size: 12px;\n    margin-top: 5%;\n    cursor: pointer;\n}\n#button-fav{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 108px;\n    height: 32px;\n    border-radius: 10px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n            filter: drop-shadow(0 2px 2px rgba(0,0,0,.6));\n    cursor: pointer;\n}\n#button-fav:focus{\n    outline: none;\n}\nfavBtnClick .fav-btn p{\n    color: white;\n    background-color: red;\n}\n/* @media(max-width:1025px)\n{    \n    .books-section{\n        background-size: contain;\n        height: 1320px;  \n    }\n    .books{\n        top: 2%;\n    }\n    .main-books-container{\n        display:grid;\n        grid-gap: 70px;\n        margin-left: auto;\n        margin-right: auto;\n        left: 40%;\n        top: 15%;\n        width: 20%;\n    }\n} */\n/* @media(max-width:500px)\n{\n    .side-bar{\n    position: relative;\n    top: 10%;\n    }\n.side-bar-contents img{\n    transform: translate(-12%);\n    width: 45px;\n    height: 500px;\n    border-radius: 15px;\n    }\n.side-bar-contents p{\n    position: absolute;\n    top: 50%;\n    left: 1%;\n    font-size: 20px;\n    width: 30px;\n    text-align: center;\n    color: #fff;\n    font-weight: 500;\n    font-family: bree;\n    }\n} */\n.playlist-icon-top{\n    position: absolute;\n    top: 0%;\n    right: 50%;\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    background-size: cover;\n    background-position: center;\n    text-align: center;\n    height: 80px;\n}\n.playlist-icon-top h3{\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    font-size: 23px;\n    color: #444;\n    font-family: bree;\n}\n.playlist-icon-top img{\n    max-width: 200px;\n}\n/* .img-thumbnail{\n    border: 10px solid #fff;\n    border-radius: 4px;\n    position: relative;\n} */\n.activeImg{\n    max-width: 100%;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n.playbtn{\n    background-color: red !important;\n    color: white !important;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    padding: .2em 1em;\n\n}\n.leftRs {\n    position: absolute;\n    margin: auto;\n    top: -65px;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    left: -93%;\n    right: 0;\n    opacity: 0;\n}\n.rightRs {\n    position: absolute;\n    margin: auto;\n    top: -60px;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    right: 0;\n    opacity: 0;\n    /* left: ; */\n}\n@media(max-width:736px){\n    .side-bar-contents img{\n        width: 60px;\n        height: 212px;\n    }\n    .side-bar{\n        top: 23%;\n    }\n    .side-bar-contents p{\n        top: 30%;\n    }\n    img.img-thumbnail{\n        width: 172px;\n    }\n    .main-books-container{\n        max-width: 80%;\n        height: 50%;\n    }\n    .rightRs{\n        top: -33px;\n        right: 26%;\n    }\n    .leftRs{\n        top: -33px;\n        left: 25%;\n    }\n    #video{\n        max-width: 60%;\n    }\n\n}\n@media(max-width:640px){\n    .rightRs{\n        right: 27%;\n    }\n    .leftRs{\n        left: 27%;\n    }\n}\n@media(max-width:1024px){\n.main-books-container{\n    max-width: 80%;\n    }\n    .rightRs{\n        right: 137px;\n        top: -110px;\n    }\n    .leftRs{\n        left: 138px;\n    }\n}\n/* test */\n.overlay {\n    height: 100%;\n    width: 100%;\n    display: none;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n}\n.overlay-content {\n    position: relative;\n    width: 100vw !important;\n    height: 100vh !important;\n    text-align: center;\n    z-index: -1;\n}\n.overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n.overlay a:hover, .overlay a:focus {\n    color: #f1f1f1;\n}\n.overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n    z-index: 1;\n}\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n.disabled {\n    /* cursor: not-allowed; */\n    pointer-events: none;\n}\n.fa{\n    font-size: 55px !important;\n    color: #fff !important;\n}\n.favouriteFocus:focus .mybtn{\nbackground-color: white;\nborder-radius: 50px;\n    /* background-color: red; */\n }\n.Duration{\n    position: absolute;\n    top: 55%;\n    background: rgba(0,0,0,.7);\n    padding: 0px 6px;\n    color: #fff;\n    font-size: 10px;\n    border-radius: 2px;\n    left: 3%;\n }\n.imgActive{ /* IE 9 */\n    -webkit-transform: scale(1.4); /* Safari 3-8 */\n    transform: scale(1.4); \n}\n.imgActive:focus{ /* IE 9 */\n    -webkit-transform: scale(1.4); /* Safari 3-8 */\n    transform: scale(1.4); \n}\n.subCard{\n    max-width: 152px !important ;\n    border: 9px solid #fff !important;\n    border-radius: 15px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-selection/video-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"books-section\">\n  <div class=\"background\"></div>\n  <div class=\"side-bar\">\n    <div class=\"side-bar-contents\">\n      <img src=\"/assets/svgs/water_background.svg\">\n      <p>{{time}} min</p>\n    </div>\n  </div>\n  <a [routerLink]=\"['/']\" #home class=\"favouriteFocus\">\n    <img class=\"mybtn\" src=\"/assets/svgs/video_card_cross.svg\">\n  </a>\n  <div class=\"books\">\n    <img class=\"subCard img-thumbnail\" [style.background]='color' src={{imgUrl}}>\n\n  </div>\n  <div class=\"main-books-container\">\n    <ngx-carousel [inputs]=\"carouselTile\" [moveToSlide]=\"arrayIndex\" (onMove)=\"onmoveFn($event)\">\n      <ngx-tile NgxCarouselItem *ngFor=\"let vid of video;  let i = index\">\n        <img class=\"activeImg\" src={{vid[0].imgUrl}} [ngClass]=\"{'imgActive':i==arrayIndex}\" />\n        <button class=\"btn playbtn\" data-toggle=\"modal\" data-target=\"#videoModdal\" (click)=\"openNav()\" [ngClass]=\"{'imgActive':i==arrayIndex}\">Play</button>\n        <span class=\"Duration\" [ngClass]=\"{'imgActive':i==arrayIndex}\">{{vid[0].duration}} min</span>\n        <!-- <div class=\"lock-overlay\">\n          <img class=\"lock-bar\" src=\"assets/svgs/video_card_lock_bar.svg\">\n          <img class=\"lock-icon\" src=\"assets/svgs/video_card_lock.svg\">\n          <p>Press to unlock</p>\n        </div> -->\n        <div class=\"caption\">\n          <p style=\"     color: white; font-weight: 900; background-color: red;margin-top: -2%;\" [ngClass]=\"{'imgActive':i==arrayIndex}\">{{vid[0].Title}}</p>\n        </div>\n        <div class=\"fav-btn\" style=\"cursor: pointer;\" (click)=\"addToFav(vid[0].id)\">\n          <button [ngClass]=\"{'favBtnClick':true}\" type=\"button\" value=\"btn\" id=\"button-fav\">\n                  <img src=\"assets/svgs/video_card_heart.svg\">\n                  <p>Favorite</p>\n              </button>\n        </div>\n      </ngx-tile>\n      <button NgxCarouselPrev #previous class='leftRs'>&lt;</button>\n      <button NgxCarouselNext #next class='rightRs'>&gt;</button>\n\n    </ngx-carousel>\n  </div>\n\n\n\n  <!-- Full screen modal to show video -->\n\n\n  <div id=\"myNav\" class=\"overlay\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" #close (click)=\"closeNav()\">&times;</a>\n    <div class=\"overlay-content\">\n      <vg-player (onPlayerReady)=\"onPlayerReady($event)\" [hidden]=\"!isPlaying\">\n        <vg-overlay-play></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n        <vg-scrub-bar>\n          <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n          <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n        <vg-controls>\n          <vg-play-pause></vg-play-pause>\n          <vg-playback-button></vg-playback-button>\n          <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n          <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n          <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n          <vg-track-selector></vg-track-selector>\n          <vg-mute></vg-mute>\n          <vg-volume></vg-volume>\n          <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n        <video #media [vgMedia]=\"media\" preload=\"auto\" [vgDash]=\"currentStream\" [vgHls]=\"currentStream\" id=\"singleVideo\">\n        </video>\n      </vg-player>\n    </div>\n  </div>\n\n\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/video-selection/video-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEY_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_videoService_index__ = __webpack_require__("../../../../../src/app/shared/services/videoService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_favoritesService_index__ = __webpack_require__("../../../../../src/app/shared/services/favoritesService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_entities_index__ = __webpack_require__("../../../../../src/app/shared/entities/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["Enter"] = 13] = "Enter";
    KEY_CODE[KEY_CODE["Up_key"] = 38] = "Up_key";
    KEY_CODE[KEY_CODE["Down_key"] = 40] = "Down_key";
    KEY_CODE[KEY_CODE["escape_key"] = 27] = "escape_key";
})(KEY_CODE || (KEY_CODE = {}));
var VideoSelectionComponent = /** @class */ (function () {
    function VideoSelectionComponent(route, videoService, favService, spinnerService) {
        var _this = this;
        this.route = route;
        this.videoService = videoService;
        this.favService = favService;
        this.spinnerService = spinnerService;
        this.video = [];
        this.cards = [];
        this.formate = [];
        this.arrayIndex = 0;
        this.uri = [];
        this.downCount = 0;
        this.upCount = 0;
        this.manifestUri = "https://d23sw6prl9jc74.cloudfront.net/8/NavdQMkX7J.mp4";
        this.currentStream = "https://d23sw6prl9jc74.cloudfront.net/6/NavdQMkX7J.mp4";
        var Url = this.route.snapshot.params['url'];
        this.imgUrl = Url;
        var Color = this.route.snapshot.params['color'];
        this.color = Color;
        // this.elem = this.ref.nativeElement;
        // var Url = this.route.params.subscribe(params => {
        //   this.imgUrl = +params['url'];
        //   console.log(this.imgUrl);
        // });
        var ids = this.route.params.subscribe(function (params) {
            _this.idss = +params['id'];
            // console.log(this.idss);
        });
        this.getSubCard();
        this.uri.push([this.manifestUri]);
        this.uri.push([this.manifestUri]);
        this.uri.push([this.manifestUri]);
        this.uri.push([this.manifestUri]);
        this.uri.push([this.manifestUri]);
    }
    // @HostListener('window:keyup', ['$event'])
    // keyEvent(event: KeyboardEvent) {
    //   console.log(event);
    //   if (event.keyCode === KEY_CODE.Up_key) {
    //     console.log("Up key ");
    //     this.myHomeBtn.nativeElement.focus();
    //   }
    // }
    VideoSelectionComponent.prototype.keyEvent = function (event) {
        console.log(event);
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            console.log("right key ");
            this.GoRight();
        }
        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            console.log("left key ");
            this.GoLeft();
        }
        if (event.keyCode === KEY_CODE.Up_key) {
            console.log("Up key ");
            this.GoUp();
        }
        if (event.keyCode === KEY_CODE.Down_key) {
            console.log("Down key ");
            this.GoDown();
        }
        if (event.keyCode === KEY_CODE.Enter) {
            console.log("Enter key ");
            var video = this.video[this.arrayIndex];
            this.openNav();
        }
        if (event.keyCode === KEY_CODE.escape_key) {
            this.close.nativeElement.focus();
            this.closeNav();
        }
    };
    VideoSelectionComponent.prototype.GoDown = function () {
        if (this.downCount < 2) {
            this.downCount++;
        }
        if (this.downCount == 1) {
            this.myRight.nativeElement.focus();
            this.downCount = 0;
        }
        // if (this.downCount == 2) {
        //   // this.mySettingsBtn.nativeElement.focus();
        //   this.downCount = 0;
        // }
        console.log("test");
    };
    VideoSelectionComponent.prototype.GoUp = function () {
        if (this.upCount < 1) {
            this.upCount++;
        }
        // if (this.upCount == 1) {
        //   this.myLeft.nativeElement.focus();
        // }
        if (this.upCount == 1) {
            this.myHomeBtn.nativeElement.focus();
            this.upCount = 0;
        }
        // this.myFavBtn.nativeElement.focus();
    };
    VideoSelectionComponent.prototype.onmoveFn = function ($event) {
        console.log($event);
    };
    VideoSelectionComponent.prototype.GoLeft = function () {
        --this.arrayIndex;
        // this.myLeft.nativeElement.focus();
    };
    VideoSelectionComponent.prototype.GoRight = function () {
        console.log("test");
        ++this.arrayIndex;
    };
    VideoSelectionComponent.prototype.ngOnInit = function () {
        this.time = localStorage.getItem('screenTimeLimit');
        // let timer = Observable.timer();
        // timer.subscribe(t => t);
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 5, lg: 6, all: 0 },
            slide: 1,
            speed: 400,
            loop: true,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: "\n        .tile {\n          position: relative;\n          max-width:80%;\n          transform: scale(1.2);\n          border-radius: 10px;\n      }\n      .ngxcarousel-inner {\n        height: 450px;\n        width: 108%;\n    }\n      .ngxcarouselPoint {\n        display: none;\n    }\n    .ngxcarousel-items {\n      top: 88px;\n      left: 8%;\n  }\n  ngx-tile.item {\n    margin: 3%;\n    }\n\n        "
            },
            load: 2,
            touch: true,
            easing: 'ease'
        };
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
        this.uri.push(this.manifestUri);
    };
    VideoSelectionComponent.prototype.getSubCard = function () {
        var _this = this;
        this.spinnerService.show();
        this.videoService.GetSubCard(this.idss).subscribe(function (data) {
            _this.spinnerService.hide();
            console.log(data);
            _this.cards = data.subcards;
            var subCard = [];
            var temp = [];
            var url = "assets/tablet-l/read-2799818_1920.jpg";
            for (var index = 0; index < _this.cards.length; index++) {
                subCard = [{ 'id': _this.cards[index].id, 'duration': _this.cards[index].duration, 'imgUrl': _this.VideoImageUrl(_this.cards[index].id), 'videourl': _this.videoURL(_this.cards[index].formats, _this.cards[index].id), 'Title': _this.cards[index].title }];
                temp.push(subCard);
            }
            _this.video = temp;
            console.log(_this.video);
        }, function (Error) {
            _this.spinnerService.hide();
        });
    };
    VideoSelectionComponent.prototype.videoURL = function (FormateId, id) {
        var url = localStorage.getItem('videoUrl');
        // console.log(FormateId, id);
        // this.size = this.formate[index].id;
        var formate = [1, 2, 3, 4, 5, 6, 7, 8];
        this.innerheigth = window.innerHeight;
        if (this.innerheigth <= 720 && this.innerheigth >= 480) {
            if (FormateId[0].id == formate || FormateId[0].id == formate || FormateId[0].id == formate) {
                var ID = FormateId[0].id;
                console.log(ID);
            }
            this.bucketName = '.mp4';
            return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
        }
        else if (this.innerheigth <= 480 && this.innerheigth >= 360) {
            if (FormateId[0].id == 4 || FormateId[0].id == 5 || FormateId[0].id == 6) {
                var ID = FormateId[0].id;
            }
            this.bucketName = '.mp4';
            return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
        }
        else if (this.innerheigth <= 360 && this.innerheigth >= 240) {
            if (FormateId[0].id == 7) {
                var ID = FormateId[0].id;
            }
            this.bucketName = '.mp4';
            return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
        }
        else if (this.innerheigth <= 240 && this.innerheigth >= 0) {
            if (FormateId[0].id == 8) {
                var ID = FormateId[0].id;
            }
            this.bucketName = '.mp4';
            return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
        }
    };
    VideoSelectionComponent.prototype.VideoImageUrl = function (id) {
        var url = localStorage.getItem('videoImageUrl');
        // console.log(url);
        this.innerheigth = window.innerHeight;
        if (this.innerheigth <= 1440 && this.innerheigth >= 1080) {
            this.bucketName = 'phone-l';
        }
        else if (this.innerheigth <= 1080 && this.innerheigth >= 768) {
            this.bucketName = 'phone-m';
        }
        else if (this.innerheigth <= 360 && this.innerheigth >= 0) {
            this.bucketName = 'phone-s';
        }
        else if (this.innerheigth <= 2048 && this.innerheigth >= 1536) {
            this.bucketName = 'tablet-l';
        }
        else if (this.innerheigth <= 1536 && this.innerheigth >= 1440) {
            this.bucketName = 'tablet-m';
        }
        else if (this.innerheigth <= 768 && this.innerheigth >= 360) {
            this.bucketName = 'tablet-s';
        }
        return url + this.bucketName + '/' + id + '.png';
    };
    VideoSelectionComponent.prototype.openNav = function () {
        document.getElementById("myNav").style.display = "block";
        this.isPlaying = true;
        this.api.play();
    };
    VideoSelectionComponent.prototype.closeNav = function () {
        document.getElementById("myNav").style.display = "none";
        this.api.pause();
    };
    VideoSelectionComponent.prototype.addToFav = function (id) {
        var _this = this;
        var favourite = new __WEBPACK_IMPORTED_MODULE_5__shared_entities_index__["a" /* AddFav */]();
        favourite.videoId = id;
        favourite.kidId = localStorage.getItem('kidId');
        // this.spinnerService.show();
        this.favService.addFavrouit(favourite).subscribe(function (data) {
            console.log(data);
            console.log("test");
            _this.AddToFav = true;
            // this.spinnerService.hide();
        }, function (Error) {
            // this.spinnerService.hide();
        });
    };
    VideoSelectionComponent.prototype.onPlayerReady = function (api) {
        var _this = this;
        var x = 1;
        this.api = api;
        this.api.getDefaultMedia().subscriptions.ended.subscribe(function () {
            x++;
            if (x > 2) {
                var src = _this.currentStream;
                // this.setCurrentVideo("SampleVideo_1280x720_2mb.mp4", "video/mp4");
                _this.onPlayerReady(_this.api);
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_6_jquery__("#myButton").trigger("click");
                }, 1000);
                x = 0;
            }
            else {
                _this.api.play();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('close'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VideoSelectionComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previous'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VideoSelectionComponent.prototype, "myLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('next'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VideoSelectionComponent.prototype, "myRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('home'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VideoSelectionComponent.prototype, "myHomeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VideoSelectionComponent.prototype, "keyEvent", null);
    VideoSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-selection',
            template: __webpack_require__("../../../../../src/app/video-selection/video-selection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-selection/video-selection.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_videoService_index__["a" /* VideoService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_favoritesService_index__["a" /* FavoriteService */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], VideoSelectionComponent);
    return VideoSelectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/video-selection/video-selection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoSelectionModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_selection_component__ = __webpack_require__("../../../../../src/app/video-selection/video-selection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoSelectionModule = /** @class */ (function () {
    function VideoSelectionModule() {
    }
    VideoSelectionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__video_selection_component__["a" /* VideoSelectionComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__video_selection_component__["a" /* VideoSelectionComponent */]],
            providers: []
        })
    ], VideoSelectionModule);
    return VideoSelectionModule;
}());



/***/ }),

/***/ "../../../../../src/app/video-selection/video-selection.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSelectionRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_selection_component__ = __webpack_require__("../../../../../src/app/video-selection/video-selection.component.ts");

var VideoSelectionRoutes = [
    {
        path: 'video/:id/:url/:color',
        component: __WEBPACK_IMPORTED_MODULE_0__video_selection_component__["a" /* VideoSelectionComponent */],
    },
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    hmr: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map