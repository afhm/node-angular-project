webpackJsonp(["layout.module"],{

/***/ "../../../../../src/app/components/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'create-article', loadChildren: './create-article/create-article.module#CreateArticleModule' },
            { path: 'view-article', loadChildren: './view-article/view-article.module#ViewArticleModule' },
            { path: 'comments-approved', loadChildren: './comments-approved/comments-approved.module#CommentsApprovedModule' },
            { path: 'comments-unapproved', loadChildren: './comments-unapproved/comments-unapproved.module#CommentsUnapprovedModule' },
            { path: 'commenters', loadChildren: './commenters/commenters.module#CommentersModule' },
            { path: 'tags', loadChildren: './tags/tags.module#TagsModule' },
            { path: 'settings-page', loadChildren: './settings-page/settings-page.module#SettingsPageModule' },
        ]
    }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  font-family: \"open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  background-color: #f3f3f4;\n  color: #676a6c;\n  height: 100vh;\n}\n\n.display-table {\n  padding: 0px;\n  height: 100vh;\n  width: 100%;\n}\n\n\n.display-table-row {\n  display: table-row;\n  height: 100vh;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-menu></app-menu>\n\n<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\" >\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_routing_module__ = __webpack_require__("../../../../../src/app/components/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components__ = __webpack_require__("../../../../../src/app/components/shared/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_app_menu_app_menu_component__ = __webpack_require__("../../../../../src/app/components/shared/components/app-menu/app-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__layout_routing_module__["a" /* LayoutRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_components__["b" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_app_menu_app_menu_component__["a" /* AppMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_components__["a" /* AppFooterComponent */],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map