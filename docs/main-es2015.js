(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'koshex';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "./src/app/placeholder/placeholder.component.ts");
/* harmony import */ var _placeholder_event_placeholder_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./placeholder-event/placeholder-event.component */ "./src/app/placeholder-event/placeholder-event.component.ts");
/* harmony import */ var _placeholder_chart_placeholder_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./placeholder-chart/placeholder-chart.component */ "./src/app/placeholder-chart/placeholder-chart.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
                echarts: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! echarts */ "./node_modules/echarts/index.js"))
            }),
            angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__["DragAndDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_10__["PlaceholderComponent"],
        _placeholder_event_placeholder_event_component__WEBPACK_IMPORTED_MODULE_11__["PlaceholderEventComponent"],
        _placeholder_chart_placeholder_chart_component__WEBPACK_IMPORTED_MODULE_12__["PlaceholderChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__["DragAndDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_10__["PlaceholderComponent"],
                    _placeholder_event_placeholder_event_component__WEBPACK_IMPORTED_MODULE_11__["PlaceholderEventComponent"],
                    _placeholder_chart_placeholder_chart_component__WEBPACK_IMPORTED_MODULE_12__["PlaceholderChartComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"].forRoot({
                        echarts: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! echarts */ "./node_modules/echarts/index.js"))
                    }),
                    angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__["DragAndDropModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "row"], ["src", "assets/img/logo.svg", "width", "115", "alt", "The logo of Koshex"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  background-color: #f0f4ff;\n  border-bottom: 1px solid #eeeeef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xca3Jpc2hcXE9uZURyaXZlXFxEZXNrdG9wXFxwcm9qZWN0XFxLb3NoZXgtcmVhY3RcXGtvc2hleC1hbmd1bGFyL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVmO1xyXG59IiwibmF2IHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _placeholder_chart_placeholder_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../placeholder-chart/placeholder-chart.component */ "./src/app/placeholder-chart/placeholder-chart.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../placeholder/placeholder.component */ "./src/app/placeholder/placeholder.component.ts");
/* harmony import */ var _placeholder_event_placeholder_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../placeholder-event/placeholder-event.component */ "./src/app/placeholder-event/placeholder-event.component.ts");











const _c0 = ["main"];
function HomeComponent_app_placeholder_chart_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-placeholder-chart");
} }
function HomeComponent_div_18_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.error);
} }
const _c1 = function () { return { standalone: true }; };
const _c2 = function (a0) { return { "active": a0 }; };
function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Goal Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_18_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.goalTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Goal Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeTab(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "volunteer_activism");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Need");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeTab(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Desire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changeTab(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Dream");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Goal Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.minusInput(ctx_r14.amount); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_18_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.amount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_span_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.plusInput(ctx_r16.amount); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Goal Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_span_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.minusYearInput(ctx_r17.year); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_18_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.year = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_span_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.plusYearInput(ctx_r19.year); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomeComponent_div_18_div_48_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.clearModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.saveModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.goalTitle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r2.view_pills === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx_r2.view_pills === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx_r2.view_pills === 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.amount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1))("ngModel", ctx_r2.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error);
} }
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "directions_car");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_19_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.closeLifePlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount (38%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngb-progressbar", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Timeline (80%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ngb-progressbar", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 80);
} }
function HomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Retire at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Financial end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Retirement new worth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/img/excited.png)", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.kData.retireAt, " age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.kData.financialEnd, " age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.kData.netWorth, " Lac");
} }
function HomeComponent_app_placeholder_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-placeholder");
} }
function HomeComponent_div_23_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function HomeComponent_div_23_li_4_Template_li_dragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.dragEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", data_r25.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25.name);
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add life events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_23_li_4_Template, 6, 2, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.events);
} }
function HomeComponent_app_placeholder_event_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-placeholder-event");
} }
const _c3 = function (a0) { return { "display-block": a0 }; };
class HomeComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.isModalShow = false;
        this.isLifePlanModalShow = false;
        this.amount = 0;
        this.year = 0;
        this.xData = [];
        this.yData = [];
        this.cData = [];
        this.symbolPath = [];
        this.loading = true;
        this.display = false;
        this.kData = {
            retireAt: 45,
            financialEnd: 90,
            netWorth: 14.2,
        };
        this.events = [
            {
                name: 'House',
                image: 'house.png',
            },
            {
                name: 'Education',
                image: 'education.png',
            },
            {
                name: 'Career',
                image: 'career.png',
            },
            {
                name: 'Trip & Trekking',
                image: 'trip.png',
            },
            {
                name: 'Vehicle',
                image: 'vehicle.png',
            },
            {
                name: 'Special Occassions',
                image: 'occassion.png',
            },
            {
                name: 'Be the debt free',
                image: 'debt_free.png',
            },
            {
                name: 'Life Experiences',
                image: 'life_experience.png',
            },
            {
                name: 'Custom',
                image: 'custom.png',
            },
        ];
        // popup goal priority
        this.view_pills = 1;
        this.changeTab = function (tab) {
            this.view_pills = tab;
        };
    }
    ngOnInit() {
        var chartDom = document.getElementById('main');
        var myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](chartDom);
        var symbolSize = 20;
        setTimeout(() => {
            this.loading = false;
            this.display = true;
        }, 2000);
        this.cData = [
            [10, 50, ''],
            [18, 50, ''],
            [28, 150, 'assets/img/occassion.png'],
            [32, 400, 'assets/img/vehicle.png'],
            [36, 750, ''],
            [40, 1550, 'assets/img/house.png'],
            [48, 1000, 'assets/img/education.png'],
            [52, 350, ''],
            [56, 230, ''],
            [60, 550, 'assets/img/trip.png'],
            [70, 290, ''],
            [80, 400, 'assets/img/life_experience.png'],
            [90, 90, ''],
        ];
        var symbolPath1 = this.cData;
        this.options = {
            tooltip: {
                trigger: 'item',
                padding: 15,
                backgroundColor: '#3c3b5d',
                borderColor: '#3c3b5d',
                className: 'k-chart-tooltip',
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                },
                grid: {
                    top: '8%',
                    bottom: '12%',
                },
                formatter: function (params) {
                    return `<div>
                        <div class="d-flex">
                            <div style="min-width: 70px;">Age <p style="font-weight: 600;font-size: 12px">${params.name}</p> </div>
                            <div style="min-width: 70px;">Year<p style="font-weight: 600;font-size: 12px">2020</p> </div>
                        </div>
                        <div class="d-flex" style="border-top: solid 1px rgba(32, 30, 69, 0.6);padding-top:10px;margin-top: 10px;">
                            <div style="min-width: 70px;">Net Worth <p style="font-weight: 600;font-size: 12px">₹ 25 lac</p></div>
                            <div style="min-width: 70px;">Savings <p style="font-weight: 600;font-size: 12px">₹ 20 lac</p> </div>
                        </div>
                    </div>`;
                },
            },
            title: {
                left: 'center',
                text: '',
            },
            responsive: true,
            grid: {
                left: 50,
                right: 20,
            },
            toolbox: {
                show: false,
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                },
            ],
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                },
                {
                    start: 0,
                    end: 10,
                },
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    sampling: 'lttb',
                    // symbol: 'circle' ,
                    symbol: function (cData, params) {
                        if (symbolPath1[params.dataIndex][2] == '' ||
                            symbolPath1[params.dataIndex][2] == 'undefined') {
                        }
                        else {
                            var d = 'image://' + symbolPath1[params.dataIndex][2];
                            return d;
                        }
                    },
                    symbolSize: function (cData, params) {
                        if (symbolPath1[params.dataIndex][2] == '' ||
                            symbolPath1[params.dataIndex][2] == 'undefined') {
                            return 10;
                        }
                        else {
                            return 33;
                        }
                    },
                    smooth: true,
                    // symbolSize: 25,
                    itemStyle: {
                        color: '#3366ff',
                    },
                    areaStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_1__["graphic"].LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#95bbff',
                            },
                            {
                                offset: 1,
                                color: 'rgba(92, 133, 255, 0)',
                            },
                        ]),
                    },
                    data: this.cData,
                    label: {
                        show: false,
                        position: 'top',
                        color: 'black',
                        fontSize: 12,
                    },
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5,
        };
    }
    ngDoCheck() { }
    // DRAG & DROP
    dragEnd(event) {
        this.isModalShow = true;
    }
    drop(event) {
        this.isModalShow = true;
    }
    // MODAL CLICKS
    clearModal() {
        this.isModalShow = false;
    }
    saveModal() {
        if (!this.goalTitle) {
            this.error = 'Please enter your goal title';
            return;
        }
        if (!this.amount || this.amount == 0) {
            this.error = 'Please add amount';
            return;
        }
        if (!this.year || this.year == 0) {
            this.error = 'Please add goal year';
            return;
        }
        this.isModalShow = false;
        const img = 'assets/img/c_beach.png';
        this.cData.push([this.year, this.amount, img]);
        this.cData.sort();
        var sPath = this.cData;
        // this.resizeChart();
        this.options = {
            tooltip: {
                trigger: 'item',
                padding: 15,
                backgroundColor: '#3c3b5d',
                borderColor: '#3c3b5d',
                className: 'k-chart-tooltip',
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                },
                formatter: function (params) {
                    return `<div>
                        <div class="d-flex">
                            <div style="min-width: 70px;">Age <p style="font-weight: 600;font-size: 12px">${params.name}</p> </div>
                            <div style="min-width: 70px;">Year<p style="font-weight: 600;font-size: 12px">2020</p> </div>
                        </div>
                        <div class="d-flex" style="border-top: solid 1px rgba(32, 30, 69, 0.6);padding-top:10px;margin-top: 10px;">
                            <div style="min-width: 70px;">Net Worth <p style="font-weight: 600;font-size: 12px">₹ 25 lac</p></div>
                            <div style="min-width: 70px;">Savings <p style="font-weight: 600;font-size: 12px">₹ 20 lac</p> </div>
                        </div>
                    </div>`;
                },
            },
            title: {
                left: 'center',
                text: '',
            },
            responsive: true,
            grid: {
                left: 50,
                right: 20,
            },
            toolbox: {
                show: false,
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                },
            ],
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                },
                {
                    start: 0,
                    end: 10,
                },
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    sampling: 'lttb',
                    // symbol: 'circle' ,
                    symbol: function (cData, params) {
                        if (sPath[params.dataIndex][2] == '' ||
                            sPath[params.dataIndex][2] == 'undefined') {
                        }
                        else {
                            var d = 'image://' + sPath[params.dataIndex][2];
                            return d;
                        }
                    },
                    symbolSize: function (cData, params) {
                        if (sPath[params.dataIndex][2] == '' ||
                            sPath[params.dataIndex][2] == 'undefined') {
                            return 10;
                        }
                        else {
                            return 33;
                        }
                    },
                    smooth: true,
                    // symbolSize: 25,
                    itemStyle: {
                        color: '#3366ff',
                    },
                    areaStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_1__["graphic"].LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#95bbff',
                            },
                            {
                                offset: 1,
                                color: 'rgba(92, 133, 255, 0)',
                            },
                        ]),
                    },
                    data: this.cData,
                    label: {
                        show: false,
                        position: 'top',
                        color: 'black',
                        fontSize: 12,
                    },
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5,
        };
        this.error = '';
        this.amount = 0;
        this.goalTitle = '';
        this.year = 0;
    }
    onChartInit(ec) {
        this.echartsInstance = ec;
    }
    resizeChart() {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    }
    // active event click
    onChartClick(ec) {
        if (ec.value[2] != '') {
            this.isLifePlanModalShow = true;
        }
    }
    closeLifePlan() {
        this.isLifePlanModalShow = false;
    }
    // PLUS MINUS INPUT
    plusInput(qdata) {
        this.amount = qdata + 1;
    }
    minusInput(qdata) {
        this.amount = qdata - 1;
        if (this.amount == 0) {
            this.amount = 0;
        }
    }
    plusYearInput(qdata) {
        this.year = qdata + 1;
    }
    minusYearInput(qdata) {
        this.year = qdata - 1;
        if (this.year == 0) {
            this.year = 0;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divView = _t.first);
    } }, decls: 25, vars: 11, consts: [[1, "min-vh-100"], [1, "container"], [1, "row"], [1, "col-sm-9", "pl-0"], [4, "ngIf"], [1, "box", "left", 3, "ngClass"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-secondary", "mr-3"], [1, "btn", "btn-secondary"], [1, "btn", "btn-primary"], [1, "drag-container"], ["mwlDroppable", "", 3, "drop"], ["id", "main", "echarts", "", 1, "demo-chart", 2, "width", "100%", "height", "430px", 3, "options", "chartInit", "chartClick"], ["main", ""], ["class", "ag-wrapper", 4, "ngIf"], [1, "col-sm-3", "pl-0"], ["class", "box right-data p-3", 3, "background-image", 4, "ngIf"], ["class", "box right-le mt-3", 4, "ngIf"], [1, "ag-wrapper"], [1, "ag-modal"], [1, "ag-body"], [1, "form-group"], ["for", "goalTitle", 1, "small"], [1, "k-input"], ["src", "assets/img/house.png"], ["type", "text", "aria-describedby", "GoalTitle", "placeholder", "Goal Title", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "goalPriority", 1, "small"], [1, "nav", "nav-pills", "flex-column", "flex-sm-row"], [1, "flex-sm-fill", "text-sm-center", "nav-link", 3, "ngClass", "click"], [1, "material-icons"], [1, "form-group", "m-0", 2, "margin-right", "5px !important"], ["for", "goalAmount", 1, "small"], [1, "qty-input"], [1, "k-minus", 3, "click"], ["type", "text", 1, "count", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "plus", 3, "click"], [1, "form-group", "m-0"], ["for", "goalYear", 1, "small"], ["type", "text", 1, "amount", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["class", "alert alert-danger small m-0", 4, "ngIf"], [1, "ag-footer"], [1, "btn", "btn-primary", "mr-2", 3, "click"], [1, "btn", "btn-primary", "btn-primary-fill", 3, "click"], [1, "alert", "alert-danger", "small", "m-0"], [1, "k-lp-popup"], [1, "d-flex"], ["type", "text", "aria-describedby", "title", "placeholder", "Title", "value", "Buy a House", 1, "form-control"], [1, "material-icons", "k-delete", 3, "click"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "k-progress"], [1, "mt-2"], ["type", "primary", "height", ".4rem", 3, "value"], [1, "box", "right-data", "p-3"], ["src", "assets/img/edit.png", "alt", "The icon for edit", "width", "", 1, "edit"], [1, "mr-5"], [1, "mt-3"], [1, "m-0"], [1, "box", "right-le", "mt-3"], ["mwlDraggable", "", 3, "dragEnd", 4, "ngFor", "ngForOf"], ["mwlDraggable", "", 3, "dragEnd"], [1, "e-box"], ["alt", "The icon for life events", "width", "32", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_app_placeholder_chart_4_Template, 1, 0, "app-placeholder-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Scenario 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Scenario 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function HomeComponent_Template_div_drop_15_listener($event) { return ctx.droppedData = $event.dropData; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartInit", function HomeComponent_Template_div_chartInit_16_listener($event) { return ctx.onChartInit($event); })("chartClick", function HomeComponent_Template_div_chartClick_16_listener($event) { return ctx.onChartClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 54, 19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 20, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 18, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_app_placeholder_22_Template, 1, 0, "app-placeholder", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 5, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_app_placeholder_event_24_Template, 1, 0, "app-placeholder-event", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLifePlanModalShow && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["ɵa"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsDirective"], _placeholder_chart_placeholder_chart_component__WEBPACK_IMPORTED_MODULE_5__["PlaceholderChartComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbar"], _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_8__["PlaceholderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["ɵb"], _placeholder_event_placeholder_event_component__WEBPACK_IMPORTED_MODULE_9__["PlaceholderEventComponent"]], styles: [".center[_ngcontent-%COMP%], .right-le[_ngcontent-%COMP%]   div.e-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsection[_ngcontent-%COMP%] {\n  background-color: #f0f4ff;\n  padding: 80px 0;\n}\n\n.display-block[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.box[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: solid 1px #cdd5ea;\n}\n\n.left[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n  background-color: #f5f8ff;\n}\n\n.right-data[_ngcontent-%COMP%] {\n  background-color: #ffe1f7;\n  color: rgba(32, 30, 69, 0.6);\n  min-width: 285px;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: bottom right;\n}\n\n.right-data[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  width: 19px;\n  cursor: pointer;\n}\n\n.right-data[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #201e45;\n  font-weight: 500;\n}\n\n.right-data[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #201e45;\n  font-weight: 600;\n}\n\n.right-data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n.right-le[_ngcontent-%COMP%] {\n  background-color: #f0f4ff;\n  min-width: 285px;\n}\n\n.right-le[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.right-le[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 7px;\n  box-shadow: inset 1px 2px 2px 0 rgba(15, 31, 77, 0.2), inset -2px -2px 4px 0 #ffffff;\n}\n\n.right-le[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  width: calc(33.3% - 15px);\n  margin: 7px;\n}\n\n.right-le[_ngcontent-%COMP%]   div.e-box[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: solid 1px #cdd5ea;\n  background-color: #f5f8ff;\n  font-size: 10px;\n  min-width: 72px;\n  height: 80px;\n  padding: 11px 4px 3px;\n  transform: translateY(0);\n  transition: all 0.5s;\n  cursor: pointer;\n}\n\n.right-le[_ngcontent-%COMP%]   div.e-box[_ngcontent-%COMP%]::before {\n  content: \"\";\n}\n\n.right-le[_ngcontent-%COMP%]   div.e-box[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(60, 59, 93, 0.32);\n}\n\n.right-le[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  line-height: 10px;\n  height: 22px;\n}\n\n.right-le[_ngcontent-%COMP%]   div.e-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n  border-radius: 4px;\n}\n\n.eloop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: -1;\n}\n\n.ag-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  background-color: rgba(32, 30, 69, 0.16);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ag-modal[_ngcontent-%COMP%] {\n  max-width: 385px;\n  min-width: 385px;\n  border-radius: 8px;\n  box-shadow: 4px 4px 8px 0 rgba(191, 202, 217, 0.9), -4px -4px 8px 0 #ffffff;\n  border: solid 1px #ebeff5;\n  background-color: #f0f4ff;\n  margin: 0 auto;\n}\n\n.ag-modal[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%] {\n  padding: 12px 5px 12px 12px;\n  box-shadow: inset 2px 2px 4px 0 rgba(15, 31, 77, 0.2), inset -2px -2px 4px 0 #ffffff;\n  background-color: #e6ecfa;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 16px 16px;\n  border-radius: 8px;\n  border: solid 1px rgba(32, 30, 69, 0.16);\n  background-color: #f0f4ff;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: 0.2px;\n  color: rgba(32, 30, 69, 0.6);\n  margin: 0 0 5px;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  top: 5px;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 45px;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 6px;\n  box-shadow: inset 2px 2px 4px 0 rgba(15, 31, 77, 0.2), inset -2px -2px 4px 0 #ffffff;\n  background-color: #f0f4ff;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  line-height: 1.29;\n  letter-spacing: 0.25px;\n  text-align: center;\n  color: #201e45;\n  border: 0;\n  background: transparent;\n  width: 75px;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%], .ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  padding: 3px;\n  border-radius: 4px;\n  box-shadow: 2px 2px 2px 0 rgba(191, 202, 217, 0.9), -2px -2px 2px 0 #ffffff;\n  border: solid 1px #ebeff5;\n  background-color: #f0f4ff;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 500;\n  font-size: x-large;\n  line-height: 21px;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  padding: 5px;\n  border-radius: 6px;\n  border: solid 1px rgba(32, 30, 69, 0.16);\n  background-color: #e6ecfa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.29;\n  letter-spacing: 0.25px;\n  color: rgba(32, 30, 69, 0.6);\n  margin: 0px 2px;\n  cursor: pointer;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n  background-color: rgba(32, 30, 69, 0.16);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 5px;\n  color: rgba(32, 30, 69, 0.32);\n  font-size: 18px;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px 0 rgba(191, 202, 217, 0.9), -2px -2px 2px 0 #ffffff;\n  border: solid 1px #ebeff5;\n  background-image: linear-gradient(167deg, #c2dfff 16%, #79bbff 82%);\n  color: #ffffff;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #0999f7;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-footer[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: right;\n}\n\n.ag-modal[_ngcontent-%COMP%]   .ag-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-transform: UPPERCASE;\n  min-width: 100px;\n}\n\n.lp-popup[_ngcontent-%COMP%] {\n  width: 260px;\n  min-height: 115px;\n  padding: 10px;\n  border-radius: 8px;\n  box-shadow: 4px 4px 8px 0 rgba(191, 202, 217, 0.9), -4px -4px 8px 0 #ffffff;\n  border: solid 1px #ebeff5;\n  background-image: linear-gradient(168deg, #c2dfff 14%, #79bbff 84%);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.33;\n  letter-spacing: 0.2px;\n  color: #ffffff;\n}\n\n.lp-popup[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.lp-popup[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  top: 7px;\n}\n\n.lp-popup[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 1px 0 12px 8px;\n  padding: 8px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 4px;\n  background-color: #60afff;\n  cursor: pointer;\n}\n\n.lp-popup[_ngcontent-%COMP%]   .k-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 4px;\n  box-shadow: inset 2px 2px 4px 0 rgba(15, 31, 77, 0.2), inset -2px -2px 4px 0 #ffffff;\n  background-color: #60afff;\n  color: #fff;\n  padding-left: 40px;\n}\n\n.lp-popup[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 5px;\n}\n\n@media (max-width: 992px) {\n  .col-sm-3[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 767px) {\n  .pl-0[_ngcontent-%COMP%] {\n    padding-left: 15px !important;\n  }\n\n  .left[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .left[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .lp-popup[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGtyaXNoXFxPbmVEcml2ZVxcRGVza3RvcFxccHJvamVjdFxcS29zaGV4LXJlYWN0XFxrb3NoZXgtYW5ndWxhci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURPQTtFQUNJLHlCQVZNO0VBV04sZUFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBckJXO0VBc0JYLHlCQXJCSztBQ2lCVDs7QURNQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSEo7O0FES0E7RUFDSSx5QkFBQTtFQUNBLDRCQTVCSTtFQTZCSixnQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxpQ0FBQTtBQ0hKOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FESUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURJSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURJSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNGUjs7QURLQTtFQUNJLHlCQXpETTtFQTBETixnQkFBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBRElJO0VBQ1EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvRkFBQTtBQ0RaOztBREdJO0VBQ1Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNEWjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNEUjs7QURJSTtFQUNJLFdBQUE7QUNGUjs7QURJSTtFQUNJLDhDQUFBO0FDRlI7O0FESUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZSOztBRElJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJFQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNESjs7QURFSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FERUk7RUFDSSwyQkFBQTtFQUNBLG9GQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURDUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDQ1o7O0FEQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ0VoQjs7QURBWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0VoQjs7QUREZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDR3BCOztBRERnQjtFQUNJLGtCQUFBO0FDR3BCOztBREFZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0ZBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNFaEI7O0FERGdCO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNHcEI7O0FEQVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJFQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VoQjs7QURBWTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRWhCOztBRERnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNHcEI7O0FEQVk7RUFDSSwyRUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUVBQUE7RUFDQSxjQUFBO0FDRWhCOztBRERnQjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0dwQjs7QURFSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ0FSOztBRENRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDWjs7QURJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJFQUFBO0VBQ0EseUJBQUE7RUFDQSxtRUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDREo7O0FERUk7RUFDSSxrQkFBQTtBQ0FSOztBRENRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NaOztBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUNJLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9GQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURHSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDRFI7O0FETUE7RUFDSTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VDSE47O0VES0U7SUFDSSxtQkFBQTtFQ0ZOO0FBQ0Y7O0FESUE7RUFDSTtJQUNJLDZCQUFBO0VDRk47O0VESUU7SUFDSSx5QkFBQTtFQ0ROO0VERU07SUFDSSxtQkFBQTtFQ0FWOztFRElNO0lBQ0ksd0JBQUE7RUNEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlclJhZGl1czogOHB4O1xyXG4kYm9yZGVyOiBzb2xpZCAxcHggI2NkZDVlYTtcclxuJGJnQ29sb3I6ICNmMGY0ZmY7XHJcbiRjb2xvcjogcmdiYSgzMiwgMzAsIDY5LCAwLjYpO1xyXG5cclxuLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRiZ0NvbG9yO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG59XHJcblxyXG4uZGlzcGxheS1ibG9ja3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyO1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmY7XHJcbn1cclxuLnJpZ2h0LWRhdGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMWY3O1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIG1pbi13aWR0aDogMjg1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZlMWY3IHVybChhc3NldHMvaW1nL2V4Y2l0ZWQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XHJcbiAgICAuZWRpdHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGJ7XHJcbiAgICAgICAgY29sb3I6ICMyMDFlNDU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogIzIwMWU0NTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgaDZ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnJpZ2h0LWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokYmdDb2xvcjsgIFxyXG4gICAgbWluLXdpZHRoOiAyODVweDsgIFxyXG59XHJcbi5yaWdodC1sZSBoNntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnJpZ2h0LWxlIHtcclxuICAgIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDJweCAwIHJnYmEoMTUsIDMxLCA3NywgMC4yKSwgaW5zZXQgLTJweCAtMnB4IDRweCAwICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgbGkgeyBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygzMy4zJSAtIDE1cHgpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDdweDtcclxuICAgIH1cclxuICAgIGRpdi5lLWJveCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjZGQ1ZWE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmZjtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3MnB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDRweCAzcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIEBleHRlbmQgLmNlbnRlcjtcclxuICAgIH1cclxuICAgIGRpdi5lLWJveDo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgfVxyXG4gICAgZGl2LmUtYm94OmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDYwLCA1OSwgOTMsIDAuMzIpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICBkaXYuZS1ib3ggaW1ne1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGY0ZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG59XHJcbi5lbG9vcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4vLyBNT0RBTFxyXG4uYWctd3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzAsIDY5LCAwLjE2KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFnLW1vZGFse1xyXG4gICAgbWF4LXdpZHRoOiAzODVweDtcclxuICAgIG1pbi13aWR0aDogMzg1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAwIHJnYmEoMTkxLCAyMDIsIDIxNywgMC45KSwgLTRweCAtNHB4IDhweCAwICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWJlZmY1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvOyAgXHJcbiAgICBoNntcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5hZy1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggNXB4IDEycHggMTJweDtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAwIHJnYmEoMTUsIDMxLCA3NywgMC4yKSwgaW5zZXQgLTJweCAtMnB4IDRweCAwICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWNmYTtcclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgzMiwgMzAsIDY5LCAwLjE2KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZjtcclxuICAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMyLCAzMCwgNjksIDAuNik7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmstaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnF0eS1pbnB1dHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNHB4IDAgcmdiYSgxNSwgMzEsIDc3LCAwLjIpLCBpbnNldCAtMnB4IC0ycHggNHB4IDAgI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0ZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMDFlNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbHVzLC5taW51c3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMCByZ2JhKDE5MSwgMjAyLCAyMTcsIDAuOSksIC0ycHggLTJweCAycHggMCAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ViZWZmNTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0ZmY7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMzIsIDMwLCA2OSwgMC4xNik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlY2ZhO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI5O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMyLCAzMCwgNjksIDAuNik7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMCwgNjksIDAuMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzMiwgMzAsIDY5LCAwLjMyKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMCByZ2JhKDE5MSwgMjAyLCAyMTcsIDAuOSksIC0ycHggLTJweCAycHggMCAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ViZWZmNTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjdkZWcsICNjMmRmZmYgMTYlLCAjNzliYmZmIDgyJSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDk5OWY3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFnLWZvb3RlcntcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gR09BTCBQT1BVUFxyXG4ubHAtcG9wdXB7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAwIHJnYmEoMTkxLCAyMDIsIDIxNywgMC45KSwgLTRweCAtNHB4IDhweCAwICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWJlZmY1O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2OGRlZywgI2MyZGZmZiAxNCUsICM3OWJiZmYgODQlKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLmstaW5wdXR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZWxldGV7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMXB4IDAgMTJweCA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGFmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmstaW5wdXQgaW5wdXR7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggMCByZ2JhKDE1LCAzMSwgNzcsIDAuMiksIGluc2V0IC0ycHggLTJweCA0cHggMCAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGFmZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2dyZXNze1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi8vIE1FRElBXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAgIC5jb2wtc20tMywuY29sLXNtLTkge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5sZWZ0e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY3cHgpeyAgICBcclxuICAgIC5wbC0wIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sZWZ0IC5kLWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxwLXBvcHVwe1xyXG4gICAgICAgIC5kLWZsZXh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY2VudGVyLCAucmlnaHQtbGUgZGl2LmUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmO1xuICBwYWRkaW5nOiA4MHB4IDA7XG59XG5cbi5kaXNwbGF5LWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NkZDVlYTtcbn1cblxuLmxlZnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmY7XG59XG5cbi5yaWdodC1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTFmNztcbiAgY29sb3I6IHJnYmEoMzIsIDMwLCA2OSwgMC42KTtcbiAgbWluLXdpZHRoOiAyODVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XG59XG4ucmlnaHQtZGF0YSAuZWRpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgd2lkdGg6IDE5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yaWdodC1kYXRhIGIge1xuICBjb2xvcjogIzIwMWU0NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5yaWdodC1kYXRhIGg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzIwMWU0NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yaWdodC1kYXRhIGg2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucmlnaHQtbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmO1xuICBtaW4td2lkdGg6IDI4NXB4O1xufVxuXG4ucmlnaHQtbGUgaDYge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucmlnaHQtbGUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggMnB4IDAgcmdiYSgxNSwgMzEsIDc3LCAwLjIpLCBpbnNldCAtMnB4IC0ycHggNHB4IDAgI2ZmZmZmZjtcbn1cbi5yaWdodC1sZSBsaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoMzMuMyUgLSAxNXB4KTtcbiAgbWFyZ2luOiA3cHg7XG59XG4ucmlnaHQtbGUgZGl2LmUtYm94IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2RkNWVhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAxMXB4IDRweCAzcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yaWdodC1sZSBkaXYuZS1ib3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4ucmlnaHQtbGUgZGl2LmUtYm94OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg2MCwgNTksIDkzLCAwLjMyKTtcbn1cbi5yaWdodC1sZSBwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMjJweDtcbn1cbi5yaWdodC1sZSBkaXYuZS1ib3ggaW1nIHtcbiAgYmFja2dyb3VuZDogI2YwZjRmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZWxvb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5hZy13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzAsIDY5LCAwLjE2KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWctbW9kYWwge1xuICBtYXgtd2lkdGg6IDM4NXB4O1xuICBtaW4td2lkdGg6IDM4NXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDAgcmdiYSgxOTEsIDIwMiwgMjE3LCAwLjkpLCAtNHB4IC00cHggOHB4IDAgI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ViZWZmNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYWctbW9kYWwgaDYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hZy1tb2RhbCAuYWctYm9keSB7XG4gIHBhZGRpbmc6IDEycHggNXB4IDEycHggMTJweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggMCByZ2JhKDE1LCAzMSwgNzcsIDAuMiksIGluc2V0IC0ycHggLTJweCA0cHggMCAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlY2ZhO1xufVxuLmFnLW1vZGFsIC5hZy1ib2R5IGZvcm0ge1xuICBwYWRkaW5nOiAxNnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgzMiwgMzAsIDY5LCAwLjE2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZjtcbn1cbi5hZy1tb2RhbCAuYWctYm9keSBmb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogcmdiYSgzMiwgMzAsIDY5LCAwLjYpO1xuICBtYXJnaW46IDAgMCA1cHg7XG59XG4uYWctbW9kYWwgLmFnLWJvZHkgZm9ybSAuay1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hZy1tb2RhbCAuYWctYm9keSBmb3JtIC5rLWlucHV0IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5hZy1tb2RhbCAuYWctYm9keSBmb3JtIC5rLWlucHV0IGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xufVxuLmFnLW1vZGFsIC5hZy1ib2R5IGZvcm0gLnF0eS1pbnB1dCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAwIHJnYmEoMTUsIDMxLCA3NywgMC4yKSwgaW5zZXQgLTJweCAtMnB4IDRweCAwICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY0ZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5hZy1tb2RhbCAuYWctYm9keSBmb3JtIC5xdHktaW5wdXQgaW5wdXQge1xuICBsaW5lLWhlaWdodDogMS4yOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIwMWU0NTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDc1cHg7XG59XG4uYWctbW9kYWwgLmFnLWJvZHkgZm9ybSAucGx1cywgLmFnLW1vZGFsIC5hZy1ib2R5IGZvcm0gLm1pbnVzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDAgcmdiYSgxOTEsIDIwMiwgMjE3LCAwLjkpLCAtMnB4IC0ycHggMnB4IDAgI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ViZWZmNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uYWctbW9kYWwgLmFnLWJvZHkgZm9ybSAubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDMyLCAzMCwgNjksIDAuMTYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlY2ZhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgY29sb3I6IHJnYmEoMzIsIDMwLCA2OSwgMC42KTtcbiAgbWFyZ2luOiAwcHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWctbW9kYWwgLmFnLWJvZHkgZm9ybSAubmF2LXBpbGxzIC5uYXYtbGluayAubWF0ZXJpYWwtaWNvbnMge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMwLCA2OSwgMC4xNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHJnYmEoMzIsIDMwLCA2OSwgMC4zMik7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hZy1tb2RhbCAuYWctYm9keSBmb3JtIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDAgcmdiYSgxOTEsIDIwMiwgMjE3LCAwLjkpLCAtMnB4IC0ycHggMnB4IDAgI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ViZWZmNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2N2RlZywgI2MyZGZmZiAxNiUsICM3OWJiZmYgODIlKTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYWctbW9kYWwgLmFnLWJvZHkgZm9ybSAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUgLm1hdGVyaWFsLWljb25zIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwOTk5Zjc7XG59XG4uYWctbW9kYWwgLmFnLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFnLW1vZGFsIC5hZy1mb290ZXIgLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmxwLXBvcHVwIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBtaW4taGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAwIHJnYmEoMTkxLCAyMDIsIDIxNywgMC45KSwgLTRweCAtNHB4IDhweCAwICNmZmZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlYmVmZjU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjhkZWcsICNjMmRmZmYgMTQlLCAjNzliYmZmIDg0JSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubHAtcG9wdXAgLmstaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubHAtcG9wdXAgLmstaW5wdXQgLm1hdGVyaWFsLWljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogN3B4O1xufVxuLmxwLXBvcHVwIC5kZWxldGUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDFweCAwIDEycHggOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYWZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxwLXBvcHVwIC5rLWlucHV0IGlucHV0IHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAwIHJnYmEoMTUsIDMxLCA3NywgMC4yKSwgaW5zZXQgLTJweCAtMnB4IDRweCAwICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MGFmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4ubHAtcG9wdXAgLnByb2dyZXNzIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb2wtc20tMywgLmNvbC1zbS05IHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubGVmdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wbC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sZWZ0IC5kLWZsZXgge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxlZnQgLmQtZmxleCBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAubHAtcG9wdXAgLmQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { divView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['main']
        }] }); })();


/***/ }),

/***/ "./src/app/placeholder-chart/placeholder-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/placeholder-chart/placeholder-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: PlaceholderChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderChartComponent", function() { return PlaceholderChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlaceholderChartComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlaceholderChartComponent.ɵfac = function PlaceholderChartComponent_Factory(t) { return new (t || PlaceholderChartComponent)(); };
PlaceholderChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceholderChartComponent, selectors: [["app-placeholder-chart"]], decls: 3, vars: 0, consts: [[1, "ph-wrapper"], [1, "ph-wrapper-cell"], [1, "ph-image"]], template: function PlaceholderChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ph-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 285px;\n  margin-bottom: 30px;\n}\n\n.ph-wrapper-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n.animated-background[_ngcontent-%COMP%], .ph-image[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1.25s;\n          animation-duration: 1.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #F6F6F6;\n  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);\n  background-size: 800px 104px;\n  height: 96px;\n  position: relative;\n}\n\n.ph-image[_ngcontent-%COMP%] {\n  height: 458px;\n  width: 808px;\n  margin: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2Vob2xkZXItY2hhcnQvQzpcXFVzZXJzXFxrcmlzaFxcT25lRHJpdmVcXERlc2t0b3BcXHByb2plY3RcXEtvc2hleC1yZWFjdFxca29zaGV4LWFuZ3VsYXIvc3JjXFxhcHBcXHBsYWNlaG9sZGVyLWNoYXJ0XFxwbGFjZWhvbGRlci1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhY2Vob2xkZXItY2hhcnQvcGxhY2Vob2xkZXItY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdDO0VBQ0c7SUFDSyw2QkFBQTtFQ0FQO0VERUU7SUFDSyw0QkFBQTtFQ0FQO0FBQ0Y7O0FETkM7RUFDRztJQUNLLDZCQUFBO0VDQVA7RURFRTtJQUNLLDRCQUFBO0VDQVA7QUFDRjs7QURHQTtFQUNLLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREw7O0FES0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlaG9sZGVyLWNoYXJ0L3BsYWNlaG9sZGVyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWluLXdpZHRoOiAyODVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5waC13cmFwcGVyLWNlbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gXHJcbiAvLyBBbmltYXRpb25cclxuIEBrZXlmcmFtZXMgcGxhY2VIb2xkZXJTaGltbWVye1xyXG4gICAgMCV7XHJcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZC1iYWNrZ3JvdW5kIHtcclxuICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xyXG4gICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjZGNkY2IDglLCAjRjBGMEYwIDE4JSwgI0Y2RjZGNiAzMyUpO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XHJcbiAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLy8gUGFnZSBFbGVtZW50c1xyXG4ucGgtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA0NThweDtcclxuICAgIHdpZHRoOiA4MDhweDtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgQGV4dGVuZCAuYW5pbWF0ZWQtYmFja2dyb3VuZDtcclxufSIsIi5waC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDI4NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucGgtd3JhcHBlci1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgfVxufVxuLmFuaW1hdGVkLWJhY2tncm91bmQsIC5waC1pbWFnZSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlSG9sZGVyU2hpbW1lcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNkY2RjYgOCUsICNGMEYwRjAgMTglLCAjRjZGNkY2IDMzJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gIGhlaWdodDogOTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGgtaW1hZ2Uge1xuICBoZWlnaHQ6IDQ1OHB4O1xuICB3aWR0aDogODA4cHg7XG4gIG1hcmdpbjogN3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceholderChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-placeholder-chart',
                templateUrl: './placeholder-chart.component.html',
                styleUrls: ['./placeholder-chart.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/placeholder-event/placeholder-event.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/placeholder-event/placeholder-event.component.ts ***!
  \******************************************************************/
/*! exports provided: PlaceholderEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderEventComponent", function() { return PlaceholderEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlaceholderEventComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlaceholderEventComponent.ɵfac = function PlaceholderEventComponent_Factory(t) { return new (t || PlaceholderEventComponent)(); };
PlaceholderEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceholderEventComponent, selectors: [["app-placeholder-event"]], decls: 13, vars: 0, consts: [[1, "ph-wrapper"], [1, "ph-wrapper-cell"], [1, "ph-image"]], template: function PlaceholderEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ph-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 285px;\n  margin-bottom: 30px;\n}\n\n.ph-wrapper-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n.animated-background[_ngcontent-%COMP%], .ph-image[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1.25s;\n          animation-duration: 1.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #F6F6F6;\n  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);\n  background-size: 800px 104px;\n  height: 96px;\n  position: relative;\n}\n\n.ph-image[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  margin: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2Vob2xkZXItZXZlbnQvQzpcXFVzZXJzXFxrcmlzaFxcT25lRHJpdmVcXERlc2t0b3BcXHByb2plY3RcXEtvc2hleC1yZWFjdFxca29zaGV4LWFuZ3VsYXIvc3JjXFxhcHBcXHBsYWNlaG9sZGVyLWV2ZW50XFxwbGFjZWhvbGRlci1ldmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhY2Vob2xkZXItZXZlbnQvcGxhY2Vob2xkZXItZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdDO0VBQ0c7SUFDSyw2QkFBQTtFQ0FQO0VERUU7SUFDSyw0QkFBQTtFQ0FQO0FBQ0Y7O0FETkM7RUFDRztJQUNLLDZCQUFBO0VDQVA7RURFRTtJQUNLLDRCQUFBO0VDQVA7QUFDRjs7QURHQTtFQUNLLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREw7O0FES0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlaG9sZGVyLWV2ZW50L3BsYWNlaG9sZGVyLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWluLXdpZHRoOiAyODVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5waC13cmFwcGVyLWNlbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gXHJcbiAvLyBBbmltYXRpb25cclxuIEBrZXlmcmFtZXMgcGxhY2VIb2xkZXJTaGltbWVye1xyXG4gICAgMCV7XHJcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZC1iYWNrZ3JvdW5kIHtcclxuICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xyXG4gICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjZGNkY2IDglLCAjRjBGMEYwIDE4JSwgI0Y2RjZGNiAzMyUpO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XHJcbiAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLy8gUGFnZSBFbGVtZW50c1xyXG4ucGgtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICAgIEBleHRlbmQgLmFuaW1hdGVkLWJhY2tncm91bmQ7XHJcbn0iLCIucGgtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWluLXdpZHRoOiAyODVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnBoLXdyYXBwZXItY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgcGxhY2VIb2xkZXJTaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cbi5hbmltYXRlZC1iYWNrZ3JvdW5kLCAucGgtaW1hZ2Uge1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYmFja2dyb3VuZDogI0Y2RjZGNjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjZGNkY2IDglLCAjRjBGMEYwIDE4JSwgI0Y2RjZGNiAzMyUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBoLWltYWdlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiA3cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceholderEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-placeholder-event',
                templateUrl: './placeholder-event.component.html',
                styleUrls: ['./placeholder-event.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/placeholder/placeholder.component.ts":
/*!******************************************************!*\
  !*** ./src/app/placeholder/placeholder.component.ts ***!
  \******************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlaceholderComponent.ɵfac = function PlaceholderComponent_Factory(t) { return new (t || PlaceholderComponent)(); };
PlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceholderComponent, selectors: [["app-placeholder"]], decls: 8, vars: 0, consts: [[1, "ph-wrapper"], [1, "ph-wrapper-cell"], [1, "ph-text-line"], [1, "ph-text-line", "w-75"], [1, "ph-text-line", "w-50"]], template: function PlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ph-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 285px;\n  margin-bottom: 50px;\n}\n\n.ph-wrapper-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n.animated-background[_ngcontent-%COMP%], .ph-text-line[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1.25s;\n          animation-duration: 1.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #F6F6F6;\n  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);\n  background-size: 800px 104px;\n  height: 96px;\n  position: relative;\n}\n\n.ph-text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.ph-text-line[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 100%;\n  margin: 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2Vob2xkZXIvQzpcXFVzZXJzXFxrcmlzaFxcT25lRHJpdmVcXERlc2t0b3BcXHByb2plY3RcXEtvc2hleC1yZWFjdFxca29zaGV4LWFuZ3VsYXIvc3JjXFxhcHBcXHBsYWNlaG9sZGVyXFxwbGFjZWhvbGRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURHQztFQUNHO0lBQ0ssNkJBQUE7RUNBUDtFREVFO0lBQ0ssNEJBQUE7RUNBUDtBQUNGOztBRE5DO0VBQ0c7SUFDSyw2QkFBQTtFQ0FQO0VERUU7SUFDSyw0QkFBQTtFQ0FQO0FBQ0Y7O0FER0E7RUFDSyxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RMOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0ZIIiwiZmlsZSI6InNyYy9hcHAvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGgtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4td2lkdGg6IDI4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnBoLXdyYXBwZXItY2VsbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiBcclxuIC8vIEFuaW1hdGlvblxyXG4gQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXJ7XHJcbiAgICAwJXtcclxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcclxuICAgIH1cclxufVxyXG5cclxuLmFuaW1hdGVkLWJhY2tncm91bmQge1xyXG4gICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXM7XHJcbiAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlSG9sZGVyU2hpbW1lcjtcclxuICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgYmFja2dyb3VuZDogI0Y2RjZGNjtcclxuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNkY2RjYgOCUsICNGMEYwRjAgMTglLCAjRjZGNkY2IDMzJSk7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcclxuICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vLyBQYWdlIEVsZW1lbnRzXHJcbi5waC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XHJcbn1cclxuXHJcbi5waC10ZXh0LWxpbmUge1xyXG4gICBoZWlnaHQ6IDEwcHg7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW46IDRweCAwO1xyXG4gICBAZXh0ZW5kIC5hbmltYXRlZC1iYWNrZ3JvdW5kO1xyXG59ICIsIi5waC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDI4NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucGgtd3JhcHBlci1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5Aa2V5ZnJhbWVzIHBsYWNlSG9sZGVyU2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xuICB9XG59XG4uYW5pbWF0ZWQtYmFja2dyb3VuZCwgLnBoLXRleHQtbGluZSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlSG9sZGVyU2hpbW1lcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNkY2RjYgOCUsICNGMEYwRjAgMTglLCAjRjZGNkY2IDMzJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gIGhlaWdodDogOTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGgtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucGgtdGV4dC1saW5lIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0cHggMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-placeholder',
                templateUrl: './placeholder.component.html',
                styleUrls: ['./placeholder.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krish\OneDrive\Desktop\project\Koshex-react\koshex-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map