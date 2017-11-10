webpackJsonp(["tags.module"],{

/***/ "../../../../../src/app/components/layout/tags/tags-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_component__ = __webpack_require__("../../../../../src/app/components/layout/tags/tags.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tags_component__["a" /* TagsComponent */] }
];
var TagsRoutingModule = (function () {
    function TagsRoutingModule() {
    }
    TagsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], TagsRoutingModule);
    return TagsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/tags/tags.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-left-cell {\n  padding-right: 5px;\n}\n\n.dashboard-right-cell {\n  padding-left: 5px;\n}\n\n.admin-content-con {\n  margin-top: 20px;\n  background-color: #fff;\n  border-top: 4px #e7eaec solid;\n  padding: 15px;\n}\n\n.admin-content-con h4 {\n  margin:0px;\n  padding-top: 3px;\n}\n.admin-content-con header {\n  margin-bottom: 20px;\n  border-bottom: 10px #eee solid;\n  padding-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Tags starts here -->\n<div class=\"row\">\n  <!-- tags left column starts here -->\n  <div class=\"col-md-4 dashboard-left-cell\">\n    <div class=\"admin-content-con\">\n      <header>\n        <h4>Create Tags</h4>\n      </header>\n\n      <form>\n        <div class=\"form-group\">\n          <label>Add Comma seperated Tags below</label>\n          <p>\n            <textarea class=\"form-control\" rows=\"4\" placeholder=\"e.g. css, python, java, ruby, etc.\"></textarea>\n          </p>\n          <p>\n            <button type=\"button\" class=\"btn btn-primary btn-block btn-large\">Save Tags</button>\n          </p>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!-- tags left column ends here -->\n\n  <!-- tags right column starts here -->\n  <div class=\"col-md-8 dashboard-right-cell\">\n    <div class=\"admin-content-con\">\n      <header>\n        <h4>Tags</h4>\n      </header>\n\n      <header>\n        <!-- table starts here -->\n        <table class=\"table table-striped table-hover\">\n          <thead>\n          <tr>\n            <th>Name</th>\n            <th>Status</th>\n            <th>Created</th>\n            <th>Action</th>\n          </tr>\n          </thead>\n          <!-- table data entering starts here -->\n          <tbody>\n          <!-- 1st row data starts here -->\n          <tr>\n            <td>python</td>\n            <td><span class=\"label label-success\">in use</span></td>\n            <td>2 days ago</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-warning btn-xs\">edit</button>\n              <button type=\"button\" class=\"btn btn-danger btn-xs disabled\">delete</button>\n            </td>\n          </tr>\n          <!-- 1st row data ends here -->\n\n          <!-- 2nd row data starts here -->\n          <tr>\n            <td>python</td>\n            <td><span class=\"label label-default\">not used</span></td>\n            <td>4 days ago</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-warning btn-xs\">edit</button>\n              <button type=\"button\" class=\"btn btn-danger btn-xs\">delete</button>\n            </td>\n          </tr>\n          <!-- 2nd row data ends here -->\n          </tbody>\n          <!-- table data entering ends here -->\n\n        </table>\n        <!-- table ends here -->\n      </header>\n    </div>\n  </div>\n  <!-- tags right column ends here -->\n</div>\n<!-- Tags ends here  -->\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
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

var TagsComponent = (function () {
    function TagsComponent() {
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tags',
            template: __webpack_require__("../../../../../src/app/components/layout/tags/tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/tags/tags.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/tags/tags.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModule", function() { return TagsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_routing_module__ = __webpack_require__("../../../../../src/app/components/layout/tags/tags-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tags_component__ = __webpack_require__("../../../../../src/app/components/layout/tags/tags.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TagsModule = (function () {
    function TagsModule() {
    }
    TagsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__tags_routing_module__["a" /* TagsRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tags_component__["a" /* TagsComponent */]
            ]
        })
    ], TagsModule);
    return TagsModule;
}());



/***/ })

});
//# sourceMappingURL=tags.module.chunk.js.map