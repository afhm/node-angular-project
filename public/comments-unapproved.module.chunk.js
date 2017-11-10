webpackJsonp(["comments-unapproved.module"],{

/***/ "../../../../../src/app/components/layout/comments-unapproved/comments-unapproved-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsUnapprovedRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_unapproved_component__ = __webpack_require__("../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__comments_unapproved_component__["a" /* CommentsUnapprovedComponent */] }
];
var CommentsUnapprovedRoutingModule = (function () {
    function CommentsUnapprovedRoutingModule() {
    }
    CommentsUnapprovedRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], CommentsUnapprovedRoutingModule);
    return CommentsUnapprovedRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comments-row {\n  margin-bottom: 30px;\n}\n\n.comments-age {\n  font-size: 12px;\n}\n\n.comments-well {\n  margin-top: 10px;\n}\n\n.btn-default {\n  color: #676a6c;\n  border: 1px #eee solid;\n}\n\n.btn-default:hover {\n  color: #676a6c;\n  border: 1px #eee solid;\n  background-color: #f3f3f4;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- comments approval starts here -->\n<div class=\"row comments-row\">\n  <div class=\"col-sm-2 col-md-1\">\n    <img class=\"img-circle hidden-xs\" src=\"http://via.placeholder.com/70x70\">\n  </div>\n  <div class=\"col-sm-10 col-md-11\">\n    <div class=\"row\">\n      <div class=\"col-xs-9 col-sm-10 col-md-9\">\n        <b>UserName</b> posted on<b>&nbsp;How all things are made....</b><br>\n        <small>Today 2:21 pm - 1/11/17</small>\n      </div>\n\n      <div class=\"col-xs-3 col-sm-2 col-md-3\">\n        <div class=\"clearfix\">\n          <div class=\"pull-right comments-age\">\n            2 days ago\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"well well-sm comments-well\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    </div>\n    <div class=\"clearfix\">\n      <div class=\"pull-right\">\n        <a href=\"#\" class=\"btn btn-xs btn-default\">\n          <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n          approve\n        </a>\n        <a href=\"#\" class=\"btn btn-xs btn-default\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n          Delete\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row comments-row\">\n  <div class=\"col-sm-2 col-md-1\">\n    <img class=\"img-circle hidden-xs\" src=\"http://via.placeholder.com/70x70\">\n  </div>\n  <div class=\"col-sm-10 col-md-11\">\n    <div class=\"row\">\n      <div class=\"col-xs-9 col-sm-10 col-md-9\">\n        <b>UserName</b> posted on<b>&nbsp;How all things are made....</b><br>\n        <small>Today 2:21 pm - 1/11/17</small>\n      </div>\n\n      <div class=\"col-xs-3 col-sm-2 col-md-3\">\n        <div class=\"clearfix\">\n          <div class=\"pull-right comments-age\">\n            2 days ago\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"well well-sm comments-well\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    </div>\n    <div class=\"clearfix\">\n      <div class=\"pull-right\">\n        <a href=\"#\" class=\"btn btn-xs btn-default\">\n          <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n          approve\n        </a>\n        <a href=\"#\" class=\"btn btn-xs btn-default\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n          Delete\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- comments approval ends here -->\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsUnapprovedComponent; });
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

var CommentsUnapprovedComponent = (function () {
    function CommentsUnapprovedComponent() {
    }
    CommentsUnapprovedComponent.prototype.ngOnInit = function () {
    };
    CommentsUnapprovedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments-unapproved',
            template: __webpack_require__("../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsUnapprovedComponent);
    return CommentsUnapprovedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsUnapprovedModule", function() { return CommentsUnapprovedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_unapproved_routing_module__ = __webpack_require__("../../../../../src/app/components/layout/comments-unapproved/comments-unapproved-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_unapproved_component__ = __webpack_require__("../../../../../src/app/components/layout/comments-unapproved/comments-unapproved.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { PageHeaderModule } from '../../shared';
var CommentsUnapprovedModule = (function () {
    function CommentsUnapprovedModule() {
    }
    CommentsUnapprovedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__comments_unapproved_routing_module__["a" /* CommentsUnapprovedRoutingModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__comments_unapproved_component__["a" /* CommentsUnapprovedComponent */]]
        })
    ], CommentsUnapprovedModule);
    return CommentsUnapprovedModule;
}());



/***/ })

});
//# sourceMappingURL=comments-unapproved.module.chunk.js.map