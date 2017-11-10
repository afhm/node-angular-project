webpackJsonp(["view-article.module"],{

/***/ "../../../../../src/app/components/layout/view-article/view-article-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewArticleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_article_component__ = __webpack_require__("../../../../../src/app/components/layout/view-article/view-article.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__view_article_component__["a" /* ViewArticleComponent */] }
];
var ViewArticleRoutingModule = (function () {
    function ViewArticleRoutingModule() {
    }
    ViewArticleRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ViewArticleRoutingModule);
    return ViewArticleRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/view-article/view-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-default {\n  color: #676a6c;\n  border: 1px #eee solid;\n}\n\n.btn-default:hover {\n  background-color: #f3f3f4;\n  color: #676a6c;\n  border: 1px #eee solid;\n}\n\n.article-row p {\n  font-size: 16px;\n  margin-bottom: 0px;\n  font-weight: 400;\n}\n\n.status-padding {\n  padding-top: 10px;\n}\n\n.article-title small {\n  color: #bbb;\n}\n\n/*making article responsive*/\n@media(max-width: 991px) {\n  .article-title {\n    padding-left: 30px;\n  }\n}\n\n@media(min-width: 767px) {\n  .article-actions {\n    float: right;\n  }\n}\n\n@media(max-width: 767px) {\n  .article-actions {\n    padding-left: 10px;\n    margin-top: 10px;\n  }\n}\n/*=================================*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/view-article/view-article.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- viewing  article starts here -->\n<div id=\"content\">\n  <header class=\"clearfix\">\n    <h2 class=\"page_title pull-left\">All Articles</h2>\n    <button type=\"button\" class=\"btn btn-primary btn-xs pull-right\">Create new Article</button>\n  </header>\n\n  <div class=\"content-inner\">\n    <div class=\"row search-row\">\n      <div class=\"col-md-12\">\n        <!-- input-group starts here -->\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control search-field\" id=\"search\" placeholder=\"Search for...\">\n          <span class=\"input-group-btn\">\n                      <button class=\"btn btn-primary go\" type=\"button\">Go!</button>\n                    </span>\n        </div>\n        <!-- input group ends here -->\n      </div>\n    </div>\n\n    <div class=\"row article-row\">\n      <div class=\"col-xs-2 col-sm-1 col-md-1 status-padding\">\n        <span class=\"label label-success label-sm\">Active</span>\n      </div>\n      <div class=\"col-xs-10 col-md-6 col-md-8 article-title\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>\n        <small>Created 1st November 2017</small>\n      </div>\n      <div class=\"col-xs-10 col-sm-5 col-md-3 col-xs-offset-2 col-sm-offset-0 col-md-offset-0 col-lg-offset-0\">\n        <div class=\"article-actions\">\n          <a href=\"#\" class=\"btn btn-default btn-xs\">\n            <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\">&nbsp;View</span>\n          </a>\n\n          <a href=\"#\" class=\"btn btn-default btn-xs\">\n            <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\">&nbsp;Edit</span>\n          </a>\n\n          <a href=\"#\" class=\"btn btn-default btn-xs\">\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\">&nbsp;Delete</span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n\n    <hr>\n    <!-- pagination starts here -->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <nav aria-label=\"Page navigation\">\n          <ul class=\"pagination\">\n            <li>\n              <a href=\"#\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n              </a>\n            </li>\n            <li><a href=\"#\">1</a></li>\n            <li><a href=\"#\">2</a></li>\n            <li><a href=\"#\">3</a></li>\n            <li><a href=\"#\">4</a></li>\n            <li><a href=\"#\">5</a></li>\n            <li>\n              <a href=\"#\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n    <!-- pagination ens here -->\n  </div>\n</div>\n<!-- Viewing article ends here -->\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/view-article/view-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewArticleComponent; });
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

var ViewArticleComponent = (function () {
    function ViewArticleComponent() {
    }
    ViewArticleComponent.prototype.ngOnInit = function () {
    };
    ViewArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-article',
            template: __webpack_require__("../../../../../src/app/components/layout/view-article/view-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/view-article/view-article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewArticleComponent);
    return ViewArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/view-article/view-article.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArticleModule", function() { return ViewArticleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_article_routing_module__ = __webpack_require__("../../../../../src/app/components/layout/view-article/view-article-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_article_component__ = __webpack_require__("../../../../../src/app/components/layout/view-article/view-article.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { PageHeaderModule } from '../shared';
var ViewArticleModule = (function () {
    function ViewArticleModule() {
    }
    ViewArticleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__view_article_routing_module__["a" /* ViewArticleRoutingModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__view_article_component__["a" /* ViewArticleComponent */]]
        })
    ], ViewArticleModule);
    return ViewArticleModule;
}());



/***/ })

});
//# sourceMappingURL=view-article.module.chunk.js.map