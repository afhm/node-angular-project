webpackJsonp(["settings-page.module"],{

/***/ "../../../../../src/app/components/layout/settings-page/settings-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_page_component__ = __webpack_require__("../../../../../src/app/components/layout/settings-page/settings-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__settings_page_component__["a" /* SettingsPageComponent */] }
];
var SettingsPageRoutingModule = (function () {
    function SettingsPageRoutingModule() {
    }
    SettingsPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], SettingsPageRoutingModule);
    return SettingsPageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/settings-page/settings-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".settings-row {\n  border-bottom: 2px #eee solid;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.settings-row {\n  margin-bottom: 3px;\n  font-size: 16px;\n}\n\n.settings-row p {\n  color: #999;\n}\n\n@media(min-width: 480px) {\n  .small-input {\n    width: 80px;\n  }\n}\n\n.content-inner form button {\n  margin: 10px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/settings-page/settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- settings starts here -->\n<div class=\"content-inner\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form>\n        <div class=\"settings-row\">\n          <h3>Site Name</h3>\n          <p>This is always shown on the top left corner of the navigation</p>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" required=\"required\" title=\"\">\n          </div>\n        </div>\n\n        <!-- Posts per page -->\n        <div class=\"settings-row\">\n          <h3>Posts per page</h3>\n          <p>Control total number of blogs shown on the blog index page.</p>\n          <div class=\"form-group\">\n            <input type=\"number\" class=\"form-control small-input\" required=\"required\" title=\"\" min=\"5\" value=\"10\" step=\"\">\n          </div>\n        </div>\n        <!-- ======================== -->\n        <!-- blog under maintainance -->\n        <div class=\"settings-row\">\n          <h3>Under Maintainance</h3>\n          <p>Redirect all requests to a holding page.</p>\n          <div class=\"form-group\">\n            <label>\n              <input type=\"checkbox\"value=\"\">\n              blog is under maintainance\n            </label>\n          </div>\n        </div>\n        <!-- ==================================== -->\n        <!-- prevent commenting -->\n        <div class=\"settings-row\">\n          <h3>Prevent Commenting</h3>\n          <p>Enable or Disable visiotrs from commenting.</p>\n          <div class=\"form-group\">\n            <select class=\"form-control small-input\">\n              <option>enable</option>\n              <option>disable</option>\n            </select>\n          </div>\n        </div>\n        <!-- ========================================== -->\n\n        <!-- tags visibility -->\n        <div class=\"settings-row\">\n          <h3>Tags visibility</h3>\n          <p>Enable or Disable tags visibility on all blog posts.</p>\n          <div class=\"form-group\">\n            <select class=\"form-control small-input\" id=\"input\">\n              <option>enable</option>\n              <option>disable</option>\n            </select>\n          </div>\n        </div>\n        <!-- =================================================== -->\n        <button type=\"button\"class=\"btn btn-primary\" name=\"button\">Save Settings</button>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- settings ends here -->\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/settings-page/settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
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

var SettingsPageComponent = (function () {
    function SettingsPageComponent() {
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
    };
    SettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings-page',
            template: __webpack_require__("../../../../../src/app/components/layout/settings-page/settings-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/settings-page/settings-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/settings-page/settings-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_page_routing_module__ = __webpack_require__("../../../../../src/app/components/layout/settings-page/settings-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_page_component__ = __webpack_require__("../../../../../src/app/components/layout/settings-page/settings-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__settings_page_routing_module__["a" /* SettingsPageRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings_page_component__["a" /* SettingsPageComponent */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ })

});
//# sourceMappingURL=settings-page.module.chunk.js.map