(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componentes_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/cliente/cliente.component */ "./src/app/componentes/cliente/cliente.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _componentes_activo_activo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/activo/activo.component */ "./src/app/componentes/activo/activo.component.ts");
/* harmony import */ var _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/usuario/usuario.component */ "./src/app/componentes/usuario/usuario.component.ts");
/* harmony import */ var _componentes_programa_programa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/programa/programa.component */ "./src/app/componentes/programa/programa.component.ts");
/* harmony import */ var _componentes_planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/planificacion/planificacion.component */ "./src/app/componentes/planificacion/planificacion.component.ts");
/* harmony import */ var _componentes_planificacionp_planificacionp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/planificacionp/planificacionp.component */ "./src/app/componentes/planificacionp/planificacionp.component.ts");
/* harmony import */ var _componentes_programacion_programacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/programacion/programacion.component */ "./src/app/componentes/programacion/programacion.component.ts");
/* harmony import */ var _componentes_venta_venta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/venta/venta.component */ "./src/app/componentes/venta/venta.component.ts");
/* harmony import */ var _componentes_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/pagina/pagina.component */ "./src/app/componentes/pagina/pagina.component.ts");
/* harmony import */ var _componentes_transmision_transmision_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/transmision/transmision.component */ "./src/app/componentes/transmision/transmision.component.ts");
/* harmony import */ var _componentes_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/radio/radio.component */ "./src/app/componentes/radio/radio.component.ts");
















var routes = [
    ///transmitir
    { path: 'transmitir', component: _componentes_transmision_transmision_component__WEBPACK_IMPORTED_MODULE_14__["TransmisionComponent"] },
    { path: 'radio', component: _componentes_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__["RadioComponent"] },
    { path: 'activo', component: _componentes_activo_activo_component__WEBPACK_IMPORTED_MODULE_6__["ActivoComponent"] },
    { path: 'usuario', component: _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_7__["UsuarioComponent"] },
    { path: 'venta', component: _componentes_venta_venta_component__WEBPACK_IMPORTED_MODULE_12__["VentaComponent"] },
    { path: 'pagina', component: _componentes_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_13__["PaginaComponent"] },
    { path: 'programa', component: _componentes_programa_programa_component__WEBPACK_IMPORTED_MODULE_8__["ProgramaComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'cliente', component: _componentes_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_3__["ClienteComponent"] },
    { path: 'planificacion', component: _componentes_planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_9__["PlanificacionComponent"] },
    { path: 'planificacionp', component: _componentes_planificacionp_planificacionp_component__WEBPACK_IMPORTED_MODULE_10__["PlanificacionpComponent"] },
    { path: 'programacion', component: _componentes_programacion_programacion_component__WEBPACK_IMPORTED_MODULE_11__["ProgramacionComponent"] },
    { path: '', redirectTo: 'producto', pathMatch: 'full' },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: '**', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'proyecto';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _componentes_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/cliente/cliente.component */ "./src/app/componentes/cliente/cliente.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _componentes_activo_activo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/activo/activo.component */ "./src/app/componentes/activo/activo.component.ts");
/* harmony import */ var _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/usuario/usuario.component */ "./src/app/componentes/usuario/usuario.component.ts");
/* harmony import */ var _componentes_programa_programa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/programa/programa.component */ "./src/app/componentes/programa/programa.component.ts");
/* harmony import */ var _componentes_planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/planificacion/planificacion.component */ "./src/app/componentes/planificacion/planificacion.component.ts");
/* harmony import */ var _componentes_programacion_programacion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/programacion/programacion.component */ "./src/app/componentes/programacion/programacion.component.ts");
/* harmony import */ var _componentes_venta_venta_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/venta/venta.component */ "./src/app/componentes/venta/venta.component.ts");
/* harmony import */ var _componentes_planificacionp_planificacionp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/planificacionp/planificacionp.component */ "./src/app/componentes/planificacionp/planificacionp.component.ts");
/* harmony import */ var _componentes_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/pagina/pagina.component */ "./src/app/componentes/pagina/pagina.component.ts");
/* harmony import */ var _componentes_transmision_transmision_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/transmision/transmision.component */ "./src/app/componentes/transmision/transmision.component.ts");
/* harmony import */ var _componentes_radio_radio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/radio/radio.component */ "./src/app/componentes/radio/radio.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _componentes_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_8__["ClienteComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileSelectDirective"],
                _componentes_activo_activo_component__WEBPACK_IMPORTED_MODULE_11__["ActivoComponent"],
                _componentes_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_12__["UsuarioComponent"],
                _componentes_programa_programa_component__WEBPACK_IMPORTED_MODULE_13__["ProgramaComponent"],
                _componentes_planificacion_planificacion_component__WEBPACK_IMPORTED_MODULE_14__["PlanificacionComponent"],
                _componentes_programacion_programacion_component__WEBPACK_IMPORTED_MODULE_15__["ProgramacionComponent"],
                _componentes_venta_venta_component__WEBPACK_IMPORTED_MODULE_16__["VentaComponent"],
                _componentes_planificacionp_planificacionp_component__WEBPACK_IMPORTED_MODULE_17__["PlanificacionpComponent"],
                _componentes_pagina_pagina_component__WEBPACK_IMPORTED_MODULE_18__["PaginaComponent"],
                _componentes_transmision_transmision_component__WEBPACK_IMPORTED_MODULE_19__["TransmisionComponent"],
                _componentes_radio_radio_component__WEBPACK_IMPORTED_MODULE_20__["RadioComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/activo/activo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/activo/activo.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: rgba(33, 214, 175, 0.301);\r\n}\r\n.table .thead-dark th {\r\n  \r\n  font-size: 20px;\r\n}\r\ninput.transparent-input{\r\n  background-color: rgba(33, 214, 160, 0.301)!important;\r\n  border:none !important;\r\n}\r\nh1.textt{\r\n  color: rgba(119, 255, 28, 0.658);\r\n  background-color: rgba(154, 196, 187, 0.301);\r\n  font-weight: normal;\r\n  font-size: 35px;\r\n  font-family: cera;\r\n  text-transform: uppercase;\r\n}\r\n.fullscreen_bg {\r\n  position:absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  background-position: 50% 50%;\r\n  background-image: url('https://noticierouniversal.com/wp-content/uploads/2018/10/a1a527267c1539720380_standard_desktop_fullhd.jpeg');\r\n}\r\n.form-signin {\r\n  max-width: 280px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading, .form-signin {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"text\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n  border-top-style: solid;\r\n  border-right-style: solid;\r\n  border-bottom-style: none;\r\n  border-left-style: solid;\r\n  border-color: #000;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-top-style: none;\r\n  border-right-style: solid;\r\n  border-bottom-style: solid;\r\n  border-left-style: solid;\r\n  border-color: #000;\r\n}\r\n.form-signin-heading {\r\n  color: #fff;\r\n  text-align: center;\r\n  text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n  \r\n}\r\n/* change the background color */\r\n.navbar-custom {\r\n  background-color: #ff5500;\r\n}\r\n/* change the brand and text color */\r\n.navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n  color: rgba(255,255,255,.8);\r\n  \r\n}\r\n/* change the link color */\r\n.navbar-custom .navbar-nav .nav-link {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n/* change the color of active or hovered links */\r\n.navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n  color: #ffffff;\r\n}\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute; \r\n  min-width: 160px;\r\n}\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n  border-radius: 10px;\r\n  background-color: rgba(3, 26, 22, 0.616);\r\n  color: rgb(255, 255, 255);\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  \r\n}\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411\r\n  );}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {display: block;}\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWN0aXZvL2FjdGl2by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiwyQ0FBMkM7QUFDN0M7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG9JQUFvSTtBQUN0STtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFHYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQ0FBc0M7O0FBRXhDO0FBR0EsZ0NBQWdDO0FBQ2hDO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0Esb0NBQW9DO0FBQ3BDOztFQUVFLDJCQUEyQjs7QUFFN0I7QUFDQSwwQkFBMEI7QUFDMUI7RUFDRSwrQkFBK0I7QUFDakM7QUFDQSxnREFBZ0Q7QUFDaEQ7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7O0FBRWhCO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQjtHQUEwQyxDQUFDO0FBRXRFLG9DQUFvQztBQUNwQyxtQ0FBbUMsY0FBYyxDQUFDO0FBRWxELDBGQUEwRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FjdGl2by9hY3Rpdm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDIxNCwgMTc1LCAwLjMwMSk7XHJcbn1cclxuLnRhYmxlIC50aGVhZC1kYXJrIHRoIHtcclxuICBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0LnRyYW5zcGFyZW50LWlucHV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDIxNCwgMTYwLCAwLjMwMSkhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuaDEudGV4dHR7XHJcbiAgY29sb3I6IHJnYmEoMTE5LCAyNTUsIDI4LCAwLjY1OCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDE5NiwgMTg3LCAwLjMwMSk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6IGNlcmE7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZ1bGxzY3JlZW5fYmcge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL25vdGljaWVyb3VuaXZlcnNhbC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYTFhNTI3MjY3YzE1Mzk3MjAzODBfc3RhbmRhcmRfZGVza3RvcF9mdWxsaGQuanBlZycpO1xyXG59XHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgbWF4LXdpZHRoOiAyODBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMwMDA7XHJcbn1cclxuLmZvcm0tc2lnbmluLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICBcclxufVxyXG5cclxuXHJcbi8qIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4ubmF2YmFyLWN1c3RvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTUwMDtcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGJyYW5kIGFuZCB0ZXh0IGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItYnJhbmQsXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItdGV4dCB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gIFxyXG59XHJcbi8qIGNoYW5nZSB0aGUgbGluayBjb2xvciAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuLyogY2hhbmdlIHRoZSBjb2xvciBvZiBhY3RpdmUgb3IgaG92ZXJlZCBsaW5rcyAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayxcclxuLm5hdmJhci1jdXN0b20gLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAyNiwgMjIsIDAuNjE2KTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgXHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDExXHJcbiAgKTt9XHJcblxyXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/activo/activo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/activo/activo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n<table class=\"table table-sm table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Codigo</th>\n        <th>Objeto</th>\n        <th>Descripsion</th>\n        <th>Observaciones</th>\n        <th>Condicion</th>\n        <th>Borrar</th>\n        <th>Actualizar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of lista\">\n        <td>{{item.codigo}}</td>\n        <td>{{item.objeto}}</td>\n        <td>{{item.descripsion}}</td>\n        <td>{{item.observaciones}}</td>\n        <td>{{item.condicion}}</td>\n        <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \n          data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\n        <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\n          <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\n      </tr>\n    </tbody>\n</table>\n<!--modal eliminar-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>esta seguro de borrar</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--modal nuevo-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de productos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form  [formGroup]=\"validationsform\"  action=\"\">\n          <div class=\"form-group\">\n            <label for=\"codigo\" class=\"bmd-label-floating\">Codigo</label>\n            <input [(ngModel)]=\"acti.codigo\" name=\"codigo\" formControlName=\"codigo\" type=\"text\" class=\"form-control\" >\n            <span class=\"bmd-help\">Codigo</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"objeto\" class=\"bmd-label-floating\">Objeto</label>\n            <input [(ngModel)]=\"acti.objeto\" name=\"objeto\" formControlName=\"objeto\" type=\"text\" class=\"form-control\" id=\"objeto\">\n            <span class=\"bmd-help\">Objeto</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descripsion\" class=\"bmd-label-floating\">Descripsion</label>\n            <input [(ngModel)]=\"acti.descripsion\" name=\"descripsion\" formControlName=\"descripsion\" type=\"text\" class=\"form-control\" id=\"descripsion\">\n            <span class=\"bmd-help\">Objeto</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"observaciones\" class=\"bmd-label-floating\">Observaciones</label>\n            <input [(ngModel)]=\"acti.observaciones\" name=\"observaciones\" formControlName=\"observaciones\" type=\"text\" class=\"form-control\" id=\"observaciones\">\n            <span class=\"bmd-help\">Observaciones</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"condicion\" class=\"bmd-label-floating\">Condicion</label>\n            <input [(ngModel)]=\"acti.condicion\" name=\"condicion\" formControlName=\"condicion\" type=\"text\" class=\"form-control\" id=\"condicion\">\n            <span class=\"bmd-help\">Condicion</span>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <script>\n      $(document).ready(function(){\n      $('#exampleModalCenter').modal()\n    })\n      </script>\n\n\n"

/***/ }),

/***/ "./src/app/componentes/activo/activo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/activo/activo.component.ts ***!
  \********************************************************/
/*! exports provided: ActivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivoComponent", function() { return ActivoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_activo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/activo.service */ "./src/app/services/activo.service.ts");
/* harmony import */ var _models_activo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/activo */ "./src/app/models/activo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ActivoComponent = /** @class */ (function () {
    function ActivoComponent(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.acti = new _models_activo__WEBPACK_IMPORTED_MODULE_4__["Activo"]('', '', '', '', '', 1, '');
        this.lista = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            codigo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            objeto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            descripsion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            condicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ActivoComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
    };
    ActivoComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            _this.lista = serve.datos;
        });
        console.log(this.acti);
    };
    ActivoComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    ActivoComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.acti).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.acti);
            delete this.acti._id;
            this.http.nuevo(this.acti).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    ActivoComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    ActivoComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    ActivoComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    ActivoComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.acti = activo.datos;
            }
        });
    };
    ActivoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activo',
            template: __webpack_require__(/*! ./activo.component.html */ "./src/app/componentes/activo/activo.component.html"),
            styles: [__webpack_require__(/*! ./activo.component.css */ "./src/app/componentes/activo/activo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_activo_service__WEBPACK_IMPORTED_MODULE_3__["ActivoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ActivoComponent);
    return ActivoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/cliente/cliente.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/cliente/cliente.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1.textt{\r\n    color: rgba(119, 255, 28, 0.658);\r\n    background-color: rgba(154, 196, 187, 0.301);\r\n    font-weight: normal;\r\n    font-size: 35px;\r\n    font-family: cera;\r\n    text-transform: uppercase;\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://elceo.com/wp-content/uploads/2020/04/radio1-1.gif');\r\n  }\r\n  .form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading, .form-signin {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-style: solid;\r\n    border-right-style: solid;\r\n    border-bottom-style: none;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-style: none;\r\n    border-right-style: solid;\r\n    border-bottom-style: solid;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin-heading {\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n    \r\n  }\r\n  /* change the background color */\r\n  .navbar-custom {\r\n    background-color: #ff5500;\r\n  }\r\n  /* change the brand and text color */\r\n  .navbar-custom .navbar-brand,\r\n  .navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n    \r\n  }\r\n  /* change the link color */\r\n  .navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  /* change the color of active or hovered links */\r\n  .navbar-custom .nav-item.active .nav-link,\r\n  .navbar-custom .nav-item:hover .nav-link {\r\n    color: #ffffff;\r\n  }\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute; \r\n    min-width: 160px;\r\n  }\r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    border-radius: 10px;\r\n    background-color: rgba(3, 26, 22, 0.616);\r\n    color: rgb(255, 255, 255);\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    \r\n  }\r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411\r\n    );}\r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2xpZW50ZS9jbGllbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDJDQUEyQztFQUM3QztFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFFQTtJQUNFLHFEQUFxRDtJQUNyRCxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0ZBQWtGO0VBQ3BGO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUdiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNDQUFzQzs7RUFFeEM7RUFHQSxnQ0FBZ0M7RUFDaEM7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxvQ0FBb0M7RUFDcEM7O0lBRUUsMkJBQTJCOztFQUU3QjtFQUNBLDBCQUEwQjtFQUMxQjtJQUNFLCtCQUErQjtFQUNqQztFQUNBLGdEQUFnRDtFQUNoRDs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUVBLDhCQUE4QjtFQUM5QjtJQUNFLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYzs7RUFFaEI7RUFFQSw0Q0FBNEM7RUFDNUMsMkJBQTJCO0tBQTRDLENBQUM7RUFFeEUsb0NBQW9DO0VBQ3BDLG1DQUFtQyxjQUFjLENBQUM7RUFFbEQsMEZBQTBGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvY2xpZW50ZS9jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyMTQsIDE3NSwgMC4zMDEpO1xyXG4gIH1cclxuICAudGFibGUgLnRoZWFkLWRhcmsgdGgge1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LnRyYW5zcGFyZW50LWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjE0LCAxNjAsIDAuMzAxKSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoMS50ZXh0dHtcclxuICAgIGNvbG9yOiByZ2JhKDExOSwgMjU1LCAyOCwgMC42NTgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDE5NiwgMTg3LCAwLjMwMSk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGNlcmE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuZnVsbHNjcmVlbl9iZyB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2VsY2VvLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9yYWRpbzEtMS5naWYnKTtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbi1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgLm5hdmJhci1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTUwMDtcclxuICB9XHJcbiAgLyogY2hhbmdlIHRoZSBicmFuZCBhbmQgdGV4dCBjb2xvciAqL1xyXG4gIC5uYXZiYXItY3VzdG9tIC5uYXZiYXItYnJhbmQsXHJcbiAgLm5hdmJhci1jdXN0b20gLm5hdmJhci10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgIFxyXG4gIH1cclxuICAvKiBjaGFuZ2UgdGhlIGxpbmsgY29sb3IgKi9cclxuICAubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB9XHJcbiAgLyogY2hhbmdlIHRoZSBjb2xvciBvZiBhY3RpdmUgb3IgaG92ZXJlZCBsaW5rcyAqL1xyXG4gIC5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rLFxyXG4gIC5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMjYsIDIyLCAwLjYxNik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQxMVxyXG4gICAgKTt9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi8iXX0= */"

/***/ }),

/***/ "./src/app/componentes/cliente/cliente.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/cliente/cliente.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n<table class=\"table table-sm table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>nombre</th>\n        <th>appaterno</th>\n        <th>apmaterno</th>\n        <th>ci</th>\n        <th>nit</th>\n        <th>telefono</th>\n        <th>direccion</th>\n        <th>Borrar</th>\n        <th>Actualizar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of lista\">\n        <td>{{item.nombre}}</td>\n        <td>{{item.appaterno}}</td>\n        <td>{{item.apmaterno}}</td>\n        <td>{{item.ci}}</td>\n        <td>{{item.nit}}</td>\n        <td>{{item.telefono}}</td>\n        <td>{{item.direccion}}</td>\n        <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \n          data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\n        <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\n          <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\n      </tr>\n    </tbody>\n</table>\n<!--modal eliminar-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>esta seguro de borrar</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--modal nuevo-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de productos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <br><br><br><br><br>\n        <form  [formGroup]=\"validationsform\"  action=\"\">\n          <div class=\"form-group\">\n            <label for=\"nombre\" class=\"bmd-label-floating\">nombre</label>\n            <input [(ngModel)]=\"cli.nombre\" name=\"nombre\" formControlName=\"nombre\" type=\"text\" class=\"form-control\" id=\"nombre\" >\n            <span class=\"bmd-help\">nombre</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"appaterno\" class=\"bmd-label-floating\">appaterno</label>\n            <input [(ngModel)]=\"cli.appaterno\" name=\"appaterno\" formControlName=\"appaterno\" type=\"text\" class=\"form-control\" id=\"appaterno\">\n            <span class=\"bmd-help\">appaterno</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"apmaterno\" class=\"bmd-label-floating\">apmaterno</label>\n            <input [(ngModel)]=\"cli.apmaterno\" name=\"apmaterno\" formControlName=\"apmaterno\" type=\"text\" class=\"form-control\" id=\"apmaterno\">\n            <span class=\"bmd-help\">apmaterno</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"ci\" class=\"bmd-label-floating\">ci</label>\n            <input [(ngModel)]=\"cli.ci\" name=\"ci\" formControlName=\"ci\" type=\"text\" class=\"form-control\" id=\"ci\">\n            <span class=\"bmd-help\">ci</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"nit\" class=\"bmd-label-floating\">nit</label>\n            <input [(ngModel)]=\"cli.nit\" name=\"nit\" formControlName=\"nit\" type=\"text\" class=\"form-control\" id=\"nit\">\n            <span class=\"bmd-help\">nit</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"telefono\" class=\"bmd-label-floating\">telefono</label>\n            <input [(ngModel)]=\"cli.telefono\" name=\"telefono\" formControlName=\"telefono\" type=\"text\" class=\"form-control\" id=\"telefono\">\n            <span class=\"bmd-help\">telefono</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"direccion\" class=\"bmd-label-floating\">direccion</label>\n            <input [(ngModel)]=\"cli.direccion\" name=\"direccion\" formControlName=\"direccion\" type=\"text\" class=\"form-control\" id=\"direccion\">\n            <span class=\"bmd-help\">direccion</span>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <script>\n      $(document).ready(function(){\n      $('#exampleModalCenter').modal()\n    })\n      </script>\n\n\n"

/***/ }),

/***/ "./src/app/componentes/cliente/cliente.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/cliente/cliente.component.ts ***!
  \**********************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ClienteComponent = /** @class */ (function () {
    function ClienteComponent(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.cli = new _models_cliente__WEBPACK_IMPORTED_MODULE_4__["Cliente"]('', '', '', '', '', '', '', 1, '');
        this.lista = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            appaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            apmaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ci: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ClienteComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
    };
    ClienteComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            _this.lista = serve.datos;
        });
        console.log(this.cli);
    };
    ClienteComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    ClienteComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.cli).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.cli);
            delete this.cli._id;
            this.http.nuevo(this.cli).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    ClienteComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    ClienteComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    ClienteComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    ClienteComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.cli = activo.datos;
            }
        });
    };
    ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cliente',
            template: __webpack_require__(/*! ./cliente.component.html */ "./src/app/componentes/cliente/cliente.component.html"),
            styles: [__webpack_require__(/*! ./cliente.component.css */ "./src/app/componentes/cliente/cliente.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "./src/app/componentes/pagina/pagina.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/pagina/pagina.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1{\r\n    text-transform: uppercase;\r\n    font-size: 43px;\r\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: bolder;\r\n    letter-spacing: 3px;\r\n    color: rgb(255, 255, 255);\r\n    border-color: black;\r\n    -webkit-text-stroke: 2px rgb(50, 51, 47);\r\n\ttext-shadow:\r\n\t\t0 0 5px rgb(179, 255, 0),\r\n\t\t0 0 10px rgb(157, 255, 0),\r\n\t\t0 0 20px rgb(166, 255, 0),\r\n\t\t0 0 40px rgb(164, 250, 4);\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://www.wallpapertip.com/wmimgs/50-505627_high-resolution-concert-background.jpg');\r\n  }\r\n  div.transbox {\r\n    margin: 30px;\r\n    background-color: #ffffff91;\r\n    border: 1px solid black;\r\n    opacity: 0.6;\r\n  }\r\n  div.transbox p {\r\n    margin: 5%;\r\n    font-weight: bold;\r\n    color: #1a1919;\r\n  }\r\n  div.transbox1 p {\r\n    margin: 3%;\r\n    font-weight: bold;\r\n    color: #000000;\r\n  }\r\n  div.transbox1 h2 {\r\n    text-transform: uppercase;\r\n    font-size: 30px;\r\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: bolder;\r\n    letter-spacing: 3px;\r\n    color: rgb(255, 255, 255);\r\n    border-color: black;\r\n    -webkit-text-stroke: 2px rgb(50, 51, 47);\r\n\ttext-shadow:\r\n\t\t0 0 5px rgb(179, 255, 0),\r\n\t\t0 0 10px rgb(157, 255, 0),\r\n\t\t0 0 20px rgb(166, 255, 0),\r\n\t\t0 0 40px rgb(164, 250, 4);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGFnaW5hL3BhZ2luYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwyQ0FBMkM7RUFDN0M7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSxxREFBcUQ7SUFDckQsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHVJQUF1STtJQUN2SSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsd0NBQXdDO0NBQzNDOzs7OzJCQUkwQjtFQUN6QjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDZHQUE2RztFQUMvRztFQUNBO0lBQ0UsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix1SUFBdUk7SUFDdkksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHdDQUF3QztDQUMzQzs7OzsyQkFJMEI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wYWdpbmEvcGFnaW5hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyMTQsIDE3NSwgMC4zMDEpO1xyXG4gIH1cclxuICAudGFibGUgLnRoZWFkLWRhcmsgdGgge1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dC50cmFuc3BhcmVudC1pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDIxNCwgMTYwLCAwLjMwMSkhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaDF7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiA0M3B4O1xyXG4gICAgZm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCByZ2IoNTAsIDUxLCA0Nyk7XHJcblx0dGV4dC1zaGFkb3c6XHJcblx0XHQwIDAgNXB4IHJnYigxNzksIDI1NSwgMCksXHJcblx0XHQwIDAgMTBweCByZ2IoMTU3LCAyNTUsIDApLFxyXG5cdFx0MCAwIDIwcHggcmdiKDE2NiwgMjU1LCAwKSxcclxuXHRcdDAgMCA0MHB4IHJnYigxNjQsIDI1MCwgNCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsc2NyZWVuX2JnIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LndhbGxwYXBlcnRpcC5jb20vd21pbWdzLzUwLTUwNTYyN19oaWdoLXJlc29sdXRpb24tY29uY2VydC1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gIH1cclxuICBkaXYudHJhbnNib3gge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjkxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdi50cmFuc2JveCBwIHtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMWExOTE5O1xyXG4gIH1cclxuICBkaXYudHJhbnNib3gxIHAge1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gIGRpdi50cmFuc2JveDEgaDIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggcmdiKDUwLCA1MSwgNDcpO1xyXG5cdHRleHQtc2hhZG93OlxyXG5cdFx0MCAwIDVweCByZ2IoMTc5LCAyNTUsIDApLFxyXG5cdFx0MCAwIDEwcHggcmdiKDE1NywgMjU1LCAwKSxcclxuXHRcdDAgMCAyMHB4IHJnYigxNjYsIDI1NSwgMCksXHJcblx0XHQwIDAgNDBweCByZ2IoMTY0LCAyNTAsIDQpO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/pagina/pagina.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/pagina/pagina.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n\r\n\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\r\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\r\n    width=\"100\"\r\n    height=\"85\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <br>\r\n      <h1>RADIO \"HIT 91.3\"</h1>\r\n    </div>\r\n  </nav>\r\n  <div>\r\n    <div class=\"background\">\r\n        <div class=\"transbox\">\r\n            <div class=\"transbox1\">\r\n                <p>Radio HIT MINERIA 91.3 nace un 23 de septiembre de 1998 con único propósito de una emisora enteramente de entretenimiento cuyo propósito era la promoción de equipo de sonido para diferentes actos sociales es así como fue la primera emisora en la ciudad de programación eminentemente juvenil de música latino tropical y en horarios estelares música de producción nacional en su momento con gran audiencia en diferentes círculos sociales.</p>\r\n                <h2>Misión </h2>\r\n                <p>Introducir las nuevas tecnologías de comunicación e información, para facilitar el desarrollo del trabajo de producción radial y expandir nuestra emisión a más radioyentes.</p>\r\n                <h2>Visión</h2>\r\n                <p>Difundir promocionar, defender nuestra cultura y producción a través tendencias tecnológicas.</p>\r\n\r\n            </div>\r\n        </div>\r\n      </div>\r\n                                 "

/***/ }),

/***/ "./src/app/componentes/pagina/pagina.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/pagina/pagina.component.ts ***!
  \********************************************************/
/*! exports provided: PaginaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaComponent", function() { return PaginaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginaComponent = /** @class */ (function () {
    function PaginaComponent() {
    }
    PaginaComponent.prototype.ngOnInit = function () {
    };
    PaginaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagina',
            template: __webpack_require__(/*! ./pagina.component.html */ "./src/app/componentes/pagina/pagina.component.html"),
            styles: [__webpack_require__(/*! ./pagina.component.css */ "./src/app/componentes/pagina/pagina.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginaComponent);
    return PaginaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/planificacion/planificacion.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/planificacion/planificacion.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1.textt{\r\n    color: rgba(119, 255, 28, 0.658);\r\n    background-color: rgba(154, 196, 187, 0.301);\r\n    font-weight: normal;\r\n    font-size: 35px;\r\n    font-family: cera;\r\n    text-transform: uppercase;\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://us.123rf.com/450wm/aleksanderdn/aleksanderdn1606/aleksanderdn160600009/60174510-micr%C3%B3fono-profesional-del-estudio-y-los-auriculares-sobre-la-mesa-de-madera-3d.jpg?ver=6');\r\n  }\r\n  .form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading, .form-signin {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-style: solid;\r\n    border-right-style: solid;\r\n    border-bottom-style: none;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-style: none;\r\n    border-right-style: solid;\r\n    border-bottom-style: solid;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin-heading {\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n    \r\n  }\r\n  /* change the background color */\r\n  .navbar-custom {\r\n    background-color: #ff5500;\r\n}\r\n  /* change the brand and text color */\r\n  .navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n    \r\n}\r\n  /* change the link color */\r\n  .navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n}\r\n  /* change the color of active or hovered links */\r\n  .navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ffffff;\r\n}\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute; \r\n    min-width: 160px;\r\n  }\r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    border-radius: 10px;\r\n    background-color: rgba(3, 26, 22, 0.616);\r\n    color: rgb(255, 255, 255);\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    \r\n  }\r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411\r\n    );}\r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGxhbmlmaWNhY2lvbi9wbGFuaWZpY2FjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDJDQUEyQztFQUM3QztFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFFQTtJQUNFLHFEQUFxRDtJQUNyRCxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsOE1BQThNO0VBQ2hOO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUdiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNDQUFzQzs7RUFFeEM7RUFHQSxnQ0FBZ0M7RUFDbEM7SUFDSSx5QkFBeUI7QUFDN0I7RUFDQSxvQ0FBb0M7RUFDcEM7O0lBRUksMkJBQTJCOztBQUUvQjtFQUNBLDBCQUEwQjtFQUMxQjtJQUNJLDJCQUEyQjtBQUMvQjtFQUNBLGdEQUFnRDtFQUNoRDs7SUFFSSxjQUFjO0FBQ2xCO0VBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUVBLDhCQUE4QjtFQUM5QjtJQUNFLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYzs7RUFFaEI7RUFFQSw0Q0FBNEM7RUFDNUMsMkJBQTJCO0tBQTRDLENBQUM7RUFFeEUsb0NBQW9DO0VBQ3BDLG1DQUFtQyxjQUFjLENBQUM7RUFFbEQsMEZBQTBGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcGxhbmlmaWNhY2lvbi9wbGFuaWZpY2FjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyMTQsIDE3NSwgMC4zMDEpO1xyXG4gIH1cclxuICAudGFibGUgLnRoZWFkLWRhcmsgdGgge1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dC50cmFuc3BhcmVudC1pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDIxNCwgMTYwLCAwLjMwMSkhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaDEudGV4dHR7XHJcbiAgICBjb2xvcjogcmdiYSgxMTksIDI1NSwgMjgsIDAuNjU4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxOTYsIDE4NywgMC4zMDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjZXJhO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLmZ1bGxzY3JlZW5fYmcge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91cy4xMjNyZi5jb20vNDUwd20vYWxla3NhbmRlcmRuL2FsZWtzYW5kZXJkbjE2MDYvYWxla3NhbmRlcmRuMTYwNjAwMDA5LzYwMTc0NTEwLW1pY3IlQzMlQjNmb25vLXByb2Zlc2lvbmFsLWRlbC1lc3R1ZGlvLXktbG9zLWF1cmljdWxhcmVzLXNvYnJlLWxhLW1lc2EtZGUtbWFkZXJhLTNkLmpwZz92ZXI9NicpO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBjaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3IgKi9cclxuLm5hdmJhci1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTUwMDtcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGJyYW5kIGFuZCB0ZXh0IGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItYnJhbmQsXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICBcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGxpbmsgY29sb3IgKi9cclxuLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGNvbG9yIG9mIGFjdGl2ZSBvciBob3ZlcmVkIGxpbmtzICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rLFxyXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMjYsIDIyLCAwLjYxNik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQxMVxyXG4gICAgKTt9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/planificacion/planificacion.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentes/planificacion/planificacion.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n<table class=\"table table-sm table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Fecha</th>\n        <th>Entrevistado</th>\n        <th>Descripcion evento</th>\n        <th>Canal Principal</th>\n        <th>Programa</th>\n        <th>Locutor</th>\n        <th>Borrar</th>\n        <th>Actualizar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of lista\">\n        <td>{{item.date}}</td>\n        <td>{{item.entrevistado}}</td>\n        <td>{{item.descripcionevento}}</td>\n        <td>{{item.canalprincipal}}</td>\n        <td>\n          <ng-container *ngFor=\"let e of listaprog\">\n              <div *ngIf=\"e._id == item.idprograma\">\n                  {{e.nombreprograma}}\n              </div>\n          </ng-container></td>\n          <td>\n            <ng-container *ngFor=\"let t of listausers\">\n              <div *ngIf=\"t._id == item.idusuario\">\n                  {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\n              </div>\n          </ng-container>\n        </td>\n\n        <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \n          data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\n        <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\n          <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\n      </tr>\n    </tbody>\n</table>\n<!--modal eliminar-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>esta seguro de borrar</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--modal nuevo-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de productos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form  [formGroup]=\"validationsform\"  action=\"\">\n          <div class=\"form-group\">\n            <label for=\"date\" class=\"bmd-label-floating\">Fecha</label>\n            <input [(ngModel)]=\"plani.date\" name=\"date\" formControlName=\"date\" type=\"datetime-local\" class=\"form-control\" id=\"date\">\n            <span class=\"bmd-help\">Fecha</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"entrevistado\" class=\"bmd-label-floating\">entrevistado</label>\n            <input [(ngModel)]=\"plani.entrevistado\" name=\"entrevistado\" formControlName=\"entrevistado\" type=\"text\" class=\"form-control\" id=\"entrevistado\">\n            <span class=\"bmd-help\">entrevistado</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descripcionevento\" class=\"bmd-label-floating\">Eescripcion Evento</label>\n            <input [(ngModel)]=\"plani.descripcionevento\" name=\"descripcionevento\" formControlName=\"descripcionevento\" type=\"text\" class=\"form-control\" id=\"descripcionevento\">\n            <span class=\"bmd-help\">Descripcion Evento</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"canalprincipal\" class=\"bmd-label-floating\">Canal Principal</label>\n            <input [(ngModel)]=\"plani.canalprincipal\" name=\"canalprincipal\" formControlName=\"canalprincipal\" type=\"text\" class=\"form-control\" id=\"canalprincipal\">\n            <span class=\"bmd-help\">Canal Principal</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"idprograma\" class=\"bmd-label-floating\">Programa</label>\n            <select [(ngModel)]=\"plani.idprograma\" name=\"idprograma\"\n             formControlName=\"idprograma\" type=\"text\" class=\"form-control\" id=\"idprograma\">\n                <option *ngFor=\"let x of listaprog\" value={{x._id}}>{{x.nombreprograma}}</option>\n            </select>\n            <span class=\"bmd-help\">Programa</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"idusuario\" class=\"bmd-label-floating\"> Locutor</label>\n            <select [(ngModel)]=\"plani.idusuario\" name=\"idusuario\" formControlName=\"idusuario\" \n            type=\"text\" class=\"form-control\" id=\"idusuario\">\n            <option *ngFor=\"let t of listausers\" value={{t._id}}>\n                {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\n            </option>\n          </select>\n            <span class=\"bmd-help\">Locutor</span>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <script>\n      $(document).ready(function(){\n      $('#exampleModalCenter').modal()\n    })\n      </script>\n"

/***/ }),

/***/ "./src/app/componentes/planificacion/planificacion.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/planificacion/planificacion.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlanificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionComponent", function() { return PlanificacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_planificacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/planificacion.service */ "./src/app/services/planificacion.service.ts");
/* harmony import */ var _services_programa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/programa.service */ "./src/app/services/programa.service.ts");
/* harmony import */ var _models_planificacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/planificacion */ "./src/app/models/planificacion.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");








var PlanificacionComponent = /** @class */ (function () {
    function PlanificacionComponent(formBuilder, http, https, http_, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.https = https;
        this.http_ = http_;
        this.router = router;
        this.plani = new _models_planificacion__WEBPACK_IMPORTED_MODULE_5__["Planificacion"]('', '', '', '', 1, '', '', '');
        this.listausers = [];
        this.lista = [];
        this.listaprog = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            entrevistado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            descripcionevento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            canalprincipal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idprograma: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idusuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    PlanificacionComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
        this.listarprog();
        this.listarusers();
    };
    PlanificacionComponent.prototype.listarusers = function () {
        var _this = this;
        this.https.listar().subscribe(function (serve) {
            _this.listausers = serve.datos;
        });
    };
    PlanificacionComponent.prototype.listarprog = function () {
        var _this = this;
        this.http_.listar().subscribe(function (serve) {
            _this.listaprog = serve.datos;
            console.log("listaa datos", _this.listaprog);
        });
    };
    PlanificacionComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            _this.lista = serve.datos;
        });
        console.log(this.plani);
    };
    PlanificacionComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    PlanificacionComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.plani).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.plani);
            delete this.plani._id;
            this.http.nuevo(this.plani).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    PlanificacionComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    PlanificacionComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    PlanificacionComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    PlanificacionComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.plani = activo.datos;
            }
        });
    };
    PlanificacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planificacion',
            template: __webpack_require__(/*! ./planificacion.component.html */ "./src/app/componentes/planificacion/planificacion.component.html"),
            styles: [__webpack_require__(/*! ./planificacion.component.css */ "./src/app/componentes/planificacion/planificacion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_planificacion_service__WEBPACK_IMPORTED_MODULE_3__["PlanificacionService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"],
            _services_programa_service__WEBPACK_IMPORTED_MODULE_4__["ProgramaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], PlanificacionComponent);
    return PlanificacionComponent;
}());



/***/ }),

/***/ "./src/app/componentes/planificacionp/planificacionp.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/planificacionp/planificacionp.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1.textt{\r\n    color: rgba(119, 255, 28, 0.658);\r\n    background-color: rgba(154, 196, 187, 0.301);\r\n    font-weight: normal;\r\n    font-size: 35px;\r\n    font-family: cera;\r\n    text-transform: uppercase;\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://us.123rf.com/450wm/aleksanderdn/aleksanderdn1606/aleksanderdn160600009/60174510-micr%C3%B3fono-profesional-del-estudio-y-los-auriculares-sobre-la-mesa-de-madera-3d.jpg?ver=6');\r\n  }\r\n  .form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading, .form-signin {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-style: solid;\r\n    border-right-style: solid;\r\n    border-bottom-style: none;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-style: none;\r\n    border-right-style: solid;\r\n    border-bottom-style: solid;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin-heading {\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n    \r\n  }\r\n  /* change the background color */\r\n  .navbar-custom {\r\n    background-color: #ff5500;\r\n}\r\n  /* change the brand and text color */\r\n  .navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n    \r\n}\r\n  /* change the link color */\r\n  .navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n}\r\n  /* change the color of active or hovered links */\r\n  .navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ffffff;\r\n}\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute; \r\n    min-width: 160px;\r\n  }\r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    border-radius: 10px;\r\n    background-color: rgba(3, 26, 22, 0.616);\r\n    color: rgb(255, 255, 255);\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    \r\n  }\r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411\r\n    );}\r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGxhbmlmaWNhY2lvbnAvcGxhbmlmaWNhY2lvbnAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMkNBQTJDO0VBQzdDO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUVBO0lBQ0UscURBQXFEO0lBQ3JELHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw4TUFBOE07RUFDaE47RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBR2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0NBQXNDOztFQUV4QztFQUdBLGdDQUFnQztFQUNsQztJQUNJLHlCQUF5QjtBQUM3QjtFQUNBLG9DQUFvQztFQUNwQzs7SUFFSSwyQkFBMkI7O0FBRS9CO0VBQ0EsMEJBQTBCO0VBQzFCO0lBQ0ksMkJBQTJCO0FBQy9CO0VBQ0EsZ0RBQWdEO0VBQ2hEOztJQUVJLGNBQWM7QUFDbEI7RUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjOztFQUVoQjtFQUVBLDRDQUE0QztFQUM1QywyQkFBMkI7S0FBNEMsQ0FBQztFQUV4RSxvQ0FBb0M7RUFDcEMsbUNBQW1DLGNBQWMsQ0FBQztFQUVsRCwwRkFBMEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wbGFuaWZpY2FjaW9ucC9wbGFuaWZpY2FjaW9ucC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjE0LCAxNzUsIDAuMzAxKTtcclxuICB9XHJcbiAgLnRhYmxlIC50aGVhZC1kYXJrIHRoIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQudHJhbnNwYXJlbnQtaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyMTQsIDE2MCwgMC4zMDEpIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgxLnRleHR0e1xyXG4gICAgY29sb3I6IHJnYmEoMTE5LCAyNTUsIDI4LCAwLjY1OCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTk2LCAxODcsIDAuMzAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogY2VyYTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsc2NyZWVuX2JnIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdXMuMTIzcmYuY29tLzQ1MHdtL2FsZWtzYW5kZXJkbi9hbGVrc2FuZGVyZG4xNjA2L2FsZWtzYW5kZXJkbjE2MDYwMDAwOS82MDE3NDUxMC1taWNyJUMzJUIzZm9uby1wcm9mZXNpb25hbC1kZWwtZXN0dWRpby15LWxvcy1hdXJpY3VsYXJlcy1zb2JyZS1sYS1tZXNhLWRlLW1hZGVyYS0zZC5qcGc/dmVyPTYnKTtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbi1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU1MDA7XHJcbn1cclxuLyogY2hhbmdlIHRoZSBicmFuZCBhbmQgdGV4dCBjb2xvciAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLWJyYW5kLFxyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLXRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgXHJcbn1cclxuLyogY2hhbmdlIHRoZSBsaW5rIGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbn1cclxuLyogY2hhbmdlIHRoZSBjb2xvciBvZiBhY3RpdmUgb3IgaG92ZXJlZCBsaW5rcyAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayxcclxuLm5hdmJhci1jdXN0b20gLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDI2LCAyMiwgMC42MTYpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MTFcclxuICAgICk7fVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXHJcbiAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/planificacionp/planificacionp.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/planificacionp/planificacionp.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n<table class=\"table table-sm table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Fecha</th>\n        <th>Tema 1</th>\n        <th>Puntos 1</th>\n        <th>Tema 2</th>\n        <th>Puntos 2</th>\n        <th>Tema 3</th>\n        <th>Puntos 3</th>\n        <th>Programa</th>\n        <th>entrevistado</th>\n        <th>Locutor</th>\n        <th>Borrar</th>\n        <th>Actualizar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of lista\">\n        <td>{{item.date}}</td>\n        <td>{{item.tema1}}</td>\n        <td>{{item.puntos1}}</td>\n        <td>{{item.tema2}}</td>\n        <td>{{item.puntos2}}</td>\n        <td>{{item.tema3}}</td>\n        <td>{{item.puntos3}}</td>\n        <td>\n          <ng-container *ngFor=\"let e of listaprog\">\n              <div *ngIf=\"e._id == item.idprograma\">\n                  {{e.nombreprograma}}\n              </div>\n          </ng-container></td>\n          <td>\n            <ng-container *ngFor=\"let t of listausers\">\n              <div *ngIf=\"t._id == item.idusuario\">\n                  {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\n              </div>\n          </ng-container>\n        </td>\n        <td>\n          <ng-container *ngFor=\"let y of listaplani\">\n            <div *ngIf=\"y._id == item.idplanificacion\">\n                {{y.entrevistado}}\n            </div>\n        </ng-container>\n      </td>\n        <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \n          data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\n        <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\n          <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\n      </tr>\n    </tbody>\n</table>\n<!--modal eliminar-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>esta seguro de borrar</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--modal nuevo-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de productos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form  [formGroup]=\"validationsform\"  action=\"\">\n          <br><br><br><br><br>\n          <div class=\"form-group\">\n            <label for=\"date\" class=\"bmd-label-floating\">Fecha</label>\n            <input [(ngModel)]=\"planip.date\" name=\"date\" formControlName=\"date\" type=\"datetime-local\" class=\"form-control\" id=\"date\">\n            <span class=\"bmd-help\">Fecha</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"tema1\" class=\"bmd-label-floating\">Tema 1</label>\n            <input [(ngModel)]=\"planip.tema1\" name=\"tema1\" formControlName=\"tema1\" type=\"text\" class=\"form-control\" id=\"tema1\">\n            <span class=\"bmd-help\">Tema 1</span>\n          </div>\n          \n          <div class=\"form-group\">\n            <label for=\"puntos1\" class=\"bmd-label-floating\">Puntos 1</label>\n            <input [(ngModel)]=\"planip.puntos1\" name=\"puntos1\" formControlName=\"puntos1\" type=\"text\" class=\"form-control\" id=\"puntos1\">\n            <span class=\"bmd-help\">Puntos 1</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"tema2\" class=\"bmd-label-floating\">Tema 2</label>\n            <input [(ngModel)]=\"planip.tema2\" name=\"tema2\" formControlName=\"tema2\" type=\"text\" class=\"form-control\" id=\"tema2\">\n            <span class=\"bmd-help\">Tema 2</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"puntos2\" class=\"bmd-label-floating\">Puntos 2</label>\n            <input [(ngModel)]=\"planip.puntos2\" name=\"puntos2\" formControlName=\"puntos2\" type=\"text\" class=\"form-control\" id=\"puntos2\">\n            <span class=\"bmd-help\">Puntos 2</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"tema3\" class=\"bmd-label-floating\">Tema 3</label>\n            <input [(ngModel)]=\"planip.tema3\" name=\"tema3\" formControlName=\"tema3\" type=\"text\" class=\"form-control\" id=\"tema3\">\n            <span class=\"bmd-help\">Tema 3</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"puntos3\" class=\"bmd-label-floating\">Puntos 3</label>\n            <input [(ngModel)]=\"planip.puntos3\" name=\"puntos3\" formControlName=\"puntos3\" type=\"text\" class=\"form-control\" id=\"puntos3\">\n            <span class=\"bmd-help\">Puntos 3</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"idprograma\" class=\"bmd-label-floating\">Programa</label>\n            <select [(ngModel)]=\"planip.idprograma\" name=\"idprograma\"\n             formControlName=\"idprograma\" type=\"text\" class=\"form-control\" id=\"idprograma\">\n                <option *ngFor=\"let x of listaprog\" value={{x._id}}>{{x.nombreprograma}}</option>\n            </select>\n            <span class=\"bmd-help\">Programa</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"idplanificacion\" class=\"bmd-label-floating\"> Entrevistado</label>\n            <select [(ngModel)]=\"planip.idplanificacion\" name=\"idplanificacion\" formControlName=\"idplanificacion\" \n            type=\"text\" class=\"form-control\" id=\"idplanificacion\">\n            <option *ngFor=\"let y of listaplani\" value={{y._id}}>\n                {{y.entrevistado}}\n            </option>\n          </select>\n            <span class=\"bmd-help\">Locutor</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"idusuario\" class=\"bmd-label-floating\"> Locutor</label>\n            <select [(ngModel)]=\"planip.idusuario\" name=\"idusuario\" formControlName=\"idusuario\" \n            type=\"text\" class=\"form-control\" id=\"idusuario\">\n            <option *ngFor=\"let t of listausers\" value={{t._id}}>\n                {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\n            </option>\n          </select>\n            <span class=\"bmd-help\">Locutor</span>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <script>\n      $(document).ready(function(){\n      $('#exampleModalCenter').modal()\n    })\n      </script>\n\n"

/***/ }),

/***/ "./src/app/componentes/planificacionp/planificacionp.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/planificacionp/planificacionp.component.ts ***!
  \************************************************************************/
/*! exports provided: PlanificacionpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionpComponent", function() { return PlanificacionpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_planificacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/planificacion.service */ "./src/app/services/planificacion.service.ts");
/* harmony import */ var _services_programa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/programa.service */ "./src/app/services/programa.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_planificacionp_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/planificacionp.service */ "./src/app/services/planificacionp.service.ts");
/* harmony import */ var _models_planificacionp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/planificacionp */ "./src/app/models/planificacionp.ts");









var PlanificacionpComponent = /** @class */ (function () {
    function PlanificacionpComponent(formBuilder, http, httpp_, https, http_, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.httpp_ = httpp_;
        this.https = https;
        this.http_ = http_;
        this.router = router;
        this.planip = new _models_planificacionp__WEBPACK_IMPORTED_MODULE_8__["Planificacionp"]('', '', '', '', '', '', '', 1, '', '', '', '');
        this.listausers = [];
        this.lista = [];
        this.listaprog = [];
        this.listaplani = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tema1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            puntos1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tema2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            puntos2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tema3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            puntos3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idprograma: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idplanificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idusuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    PlanificacionpComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
        this.listarprog();
        this.listarplani();
        this.listarusers();
    };
    PlanificacionpComponent.prototype.listarusers = function () {
        var _this = this;
        this.https.listar().subscribe(function (serve) {
            _this.listausers = serve.datos;
        });
    };
    PlanificacionpComponent.prototype.listarplani = function () {
        var _this = this;
        this.httpp_.listar().subscribe(function (serve) {
            _this.listaplani = serve.datos;
        });
    };
    PlanificacionpComponent.prototype.listarprog = function () {
        var _this = this;
        this.http_.listar().subscribe(function (serve) {
            _this.listaprog = serve.datos;
            console.log("listaa datos", _this.listaprog);
        });
    };
    PlanificacionpComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            _this.lista = serve.datos;
        });
        console.log(this.planip);
    };
    PlanificacionpComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    PlanificacionpComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.planip).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.planip);
            delete this.planip._id;
            this.http.nuevo(this.planip).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    PlanificacionpComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    PlanificacionpComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    PlanificacionpComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    PlanificacionpComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.planip = activo.datos;
            }
        });
    };
    PlanificacionpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planificacionp',
            template: __webpack_require__(/*! ./planificacionp.component.html */ "./src/app/componentes/planificacionp/planificacionp.component.html"),
            styles: [__webpack_require__(/*! ./planificacionp.component.css */ "./src/app/componentes/planificacionp/planificacionp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_planificacionp_service__WEBPACK_IMPORTED_MODULE_7__["PlanificacionpService"],
            _services_planificacion_service__WEBPACK_IMPORTED_MODULE_3__["PlanificacionService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"],
            _services_programa_service__WEBPACK_IMPORTED_MODULE_4__["ProgramaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PlanificacionpComponent);
    return PlanificacionpComponent;
}());



/***/ }),

/***/ "./src/app/componentes/programa/programa.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/programa/programa.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1.textt{\r\n    color: rgba(119, 255, 28, 0.658);\r\n    background-color: rgba(154, 196, 187, 0.301);\r\n    font-weight: normal;\r\n    font-size: 35px;\r\n    font-family: cera;\r\n    text-transform: uppercase;\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://elceo.com/wp-content/uploads/2018/11/radio-unsplash.jpg');\r\n  }\r\n  .form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading, .form-signin {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-style: solid;\r\n    border-right-style: solid;\r\n    border-bottom-style: none;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-style: none;\r\n    border-right-style: solid;\r\n    border-bottom-style: solid;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin-heading {\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n    \r\n  }\r\n  /* change the background color */\r\n  .navbar-custom {\r\n    background-color: #ff5500;\r\n}\r\n  /* change the brand and text color */\r\n  .navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n    \r\n}\r\n  /* change the link color */\r\n  .navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n}\r\n  /* change the color of active or hovered links */\r\n  .navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ffffff;\r\n}\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute; \r\n    min-width: 160px;\r\n  }\r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    border-radius: 10px;\r\n    background-color: rgba(3, 26, 22, 0.616);\r\n    color: rgb(255, 255, 255);\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    \r\n  }\r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411\r\n    );}\r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  \r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJvZ3JhbWEvcHJvZ3JhbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMkNBQTJDO0VBQzdDO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUVBO0lBQ0UscURBQXFEO0lBQ3JELHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix3RkFBd0Y7RUFDMUY7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBR2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0NBQXNDOztFQUV4QztFQUdBLGdDQUFnQztFQUNsQztJQUNJLHlCQUF5QjtBQUM3QjtFQUNBLG9DQUFvQztFQUNwQzs7SUFFSSwyQkFBMkI7O0FBRS9CO0VBQ0EsMEJBQTBCO0VBQzFCO0lBQ0ksMkJBQTJCO0FBQy9CO0VBQ0EsZ0RBQWdEO0VBQ2hEOztJQUVJLGNBQWM7QUFDbEI7RUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjOztFQUVoQjtFQUVBLDRDQUE0QztFQUM1QywyQkFBMkI7S0FBNEMsQ0FBQztFQUV4RSxvQ0FBb0M7RUFDcEMsbUNBQW1DLGNBQWMsQ0FBQztFQUVsRCwwRkFBMEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wcm9ncmFtYS9wcm9ncmFtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjE0LCAxNzUsIDAuMzAxKTtcclxuICB9XHJcbiAgLnRhYmxlIC50aGVhZC1kYXJrIHRoIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQudHJhbnNwYXJlbnQtaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyMTQsIDE2MCwgMC4zMDEpIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgxLnRleHR0e1xyXG4gICAgY29sb3I6IHJnYmEoMTE5LCAyNTUsIDI4LCAwLjY1OCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTk2LCAxODcsIDAuMzAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogY2VyYTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsc2NyZWVuX2JnIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZWxjZW8uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL3JhZGlvLXVuc3BsYXNoLmpwZycpO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBjaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3IgKi9cclxuLm5hdmJhci1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTUwMDtcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGJyYW5kIGFuZCB0ZXh0IGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItYnJhbmQsXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICBcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGxpbmsgY29sb3IgKi9cclxuLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGNvbG9yIG9mIGFjdGl2ZSBvciBob3ZlcmVkIGxpbmtzICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rLFxyXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMjYsIDIyLCAwLjYxNik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQxMVxyXG4gICAgKTt9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuICBcclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/componentes/programa/programa.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/programa/programa.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n<table class=\"table table-sm table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Nombre Programa</th>\n        <th>Genero</th>\n        <th>Hora Inicio</th>\n        <th>Hora Fin</th>\n        <th>Locutor</th>\n        <th>Borrar</th>\n        <th>Actualizar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of lista\">\n        <td>{{item.nombreprograma}}</td>\n        <td>{{item.genero}}</td>\n        <td>{{item.horainicio}}</td>\n        <td>{{item.horafin}}</td>\n        <td>\n          <ng-container *ngFor=\"let e of listausers\">\n            <div *ngIf=\"e._id == item.idusuario\">\n                {{e.nombre}} {{e.appaterno}} {{e.apmaterno}}\n            </div>\n        </ng-container>\n      </td>\n        <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \n          data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\n        <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\n          <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\n      </tr>\n    </tbody>\n</table>\n<!--modal eliminar-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>esta seguro de borrar</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--modal nuevo-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de productos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form  [formGroup]=\"validationsform\"  action=\"\">\n          <div class=\"form-group\">\n            <label for=\"nombreprograma\" class=\"bmd-label-floating\">Nombre Programa</label>\n            <input [(ngModel)]=\"prog.nombreprograma\" name=\"nombreprograma\" formControlName=\"nombreprograma\" type=\"text\" class=\"form-control\" id=\"nombreprograma\">\n            <span class=\"bmd-help\">Nombre Programa</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"genero\" class=\"bmd-label-floating\">Genero</label>\n            <input [(ngModel)]=\"prog.genero\" name=\"genero\" formControlName=\"genero\" type=\"text\" class=\"form-control\" id=\"genero\">\n            <span class=\"bmd-help\">Genero</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"horainicio\" class=\"bmd-label-floating\">Hora Inicio</label>\n            <input [(ngModel)]=\"prog.horainicio\" name=\"horainicio\" formControlName=\"horainicio\" type=\"text\" class=\"form-control\" id=\"horainicio\">\n            <span class=\"bmd-help\">Hora Inicio</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"horafin\" class=\"bmd-label-floating\">Hora Fin</label>\n            <input [(ngModel)]=\"prog.horafin\" name=\"horafin\" formControlName=\"horafin\" type=\"text\" class=\"form-control\" id=\"horafin\">\n            <span class=\"bmd-help\">Hora Fin</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"idusuario\" class=\"bmd-label-floating\"> Locutor</label>\n            <select [(ngModel)]=\"prog.idusuario\" name=\"idusuario\" formControlName=\"idusuario\" \n            type=\"text\" class=\"form-control\" id=\"idusuario\">\n            <option *ngFor=\"let t of listausers\" value={{t._id}}>\n                {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\n            </option>\n          </select>\n            <span class=\"bmd-help\">Locutor</span>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <script>\n      $(document).ready(function(){\n      $('#exampleModalCenter').modal()\n    })\n      </script>\n"

/***/ }),

/***/ "./src/app/componentes/programa/programa.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/programa/programa.component.ts ***!
  \************************************************************/
/*! exports provided: ProgramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaComponent", function() { return ProgramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_programa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/programa.service */ "./src/app/services/programa.service.ts");
/* harmony import */ var _models_programa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/programa */ "./src/app/models/programa.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");







var ProgramaComponent = /** @class */ (function () {
    function ProgramaComponent(formBuilder, http, https, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.https = https;
        this.router = router;
        this.listausers = [];
        this.prog = new _models_programa__WEBPACK_IMPORTED_MODULE_4__["Programa"]('', '', '', '', 1, '', '');
        this.lista = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            nombreprograma: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            horainicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            horafin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idusuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ProgramaComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
        this.listarusers();
    };
    ProgramaComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            _this.lista = serve.datos;
        });
        console.log(this.prog);
    };
    ProgramaComponent.prototype.listarusers = function () {
        var _this = this;
        this.https.listar().subscribe(function (serve) {
            _this.listausers = serve.datos;
        });
        console.log("sdsasd", this.listausers);
    };
    ProgramaComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    ProgramaComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.prog).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.prog);
            delete this.prog._id;
            this.http.nuevo(this.prog).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    ProgramaComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    ProgramaComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    ProgramaComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    ProgramaComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.prog = activo.datos;
            }
        });
    };
    ProgramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programa',
            template: __webpack_require__(/*! ./programa.component.html */ "./src/app/componentes/programa/programa.component.html"),
            styles: [__webpack_require__(/*! ./programa.component.css */ "./src/app/componentes/programa/programa.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_programa_service__WEBPACK_IMPORTED_MODULE_3__["ProgramaService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProgramaComponent);
    return ProgramaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/programacion/programacion.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/programacion/programacion.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1.textt{\r\n    color: rgba(119, 255, 28, 0.658);\r\n    background-color: rgba(154, 196, 187, 0.301);\r\n    font-weight: normal;\r\n    font-size: 35px;\r\n    font-family: cera;\r\n    text-transform: uppercase;\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://i1.wp.com/elceo.com/wp-content/uploads/2020/03/radio_cdmx_fotoarteCL.jpg?fit=1000%2C600&ssl=1');\r\n  }\r\n  .form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading, .form-signin {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-style: solid;\r\n    border-right-style: solid;\r\n    border-bottom-style: none;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-style: none;\r\n    border-right-style: solid;\r\n    border-bottom-style: solid;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin-heading {\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n    \r\n  }\r\n  /* change the background color */\r\n  .navbar-custom {\r\n    background-color: #ff5500;\r\n}\r\n  /* change the brand and text color */\r\n  .navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n    \r\n}\r\n  /* change the link color */\r\n  .navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n}\r\n  /* change the color of active or hovered links */\r\n  .navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ffffff;\r\n}\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute; \r\n    min-width: 160px;\r\n  }\r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    border-radius: 10px;\r\n    background-color: rgba(3, 26, 22, 0.616);\r\n    color: rgb(255, 255, 255);\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    \r\n  }\r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411\r\n    );}\r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJvZ3JhbWFjaW9uL3Byb2dyYW1hY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwyQ0FBMkM7RUFDN0M7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSxxREFBcUQ7SUFDckQsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDhIQUE4SDtFQUNoSTtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFHYixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQ0FBc0M7O0VBRXhDO0VBR0EsZ0NBQWdDO0VBQ2xDO0lBQ0kseUJBQXlCO0FBQzdCO0VBQ0Esb0NBQW9DO0VBQ3BDOztJQUVJLDJCQUEyQjs7QUFFL0I7RUFDQSwwQkFBMEI7RUFDMUI7SUFDSSwyQkFBMkI7QUFDL0I7RUFDQSxnREFBZ0Q7RUFDaEQ7O0lBRUksY0FBYztBQUNsQjtFQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFFQSw4QkFBOEI7RUFDOUI7SUFDRSxtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7O0VBRWhCO0VBRUEsNENBQTRDO0VBQzVDLDJCQUEyQjtLQUE0QyxDQUFDO0VBRXhFLG9DQUFvQztFQUNwQyxtQ0FBbUMsY0FBYyxDQUFDO0VBRWxELDBGQUEwRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3Byb2dyYW1hY2lvbi9wcm9ncmFtYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDIxNCwgMTc1LCAwLjMwMSk7XHJcbiAgfVxyXG4gIC50YWJsZSAudGhlYWQtZGFyayB0aCB7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGlucHV0LnRyYW5zcGFyZW50LWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjE0LCAxNjAsIDAuMzAxKSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoMS50ZXh0dHtcclxuICAgIGNvbG9yOiByZ2JhKDExOSwgMjU1LCAyOCwgMC42NTgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDE5NiwgMTg3LCAwLjMwMSk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGNlcmE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuZnVsbHNjcmVlbl9iZyB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2kxLndwLmNvbS9lbGNlby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvcmFkaW9fY2RteF9mb3RvYXJ0ZUNMLmpwZz9maXQ9MTAwMCUyQzYwMCZzc2w9MScpO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBjaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3IgKi9cclxuLm5hdmJhci1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTUwMDtcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGJyYW5kIGFuZCB0ZXh0IGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItYnJhbmQsXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICBcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGxpbmsgY29sb3IgKi9cclxuLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxufVxyXG4vKiBjaGFuZ2UgdGhlIGNvbG9yIG9mIGFjdGl2ZSBvciBob3ZlcmVkIGxpbmtzICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rLFxyXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMjYsIDIyLCAwLjYxNik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQxMVxyXG4gICAgKTt9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/programacion/programacion.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/programacion/programacion.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n<table class=\"table table-sm table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Dia</th>\n        <th>horario</th>\n        <th>Programa</th>\n        <th>Locutor</th>\n        <th>Borrar</th>\n        <th>Actualizar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of lista\">\n        <td>{{item.dia}}</td>\n        <td>\n          <ng-container *ngFor=\"let e of listaprog\">\n              <div *ngIf=\"e._id == item.idprograma\">\n                  {{e.horainicio}} - {{e.horafin}}\n              </div>\n          </ng-container></td>\n\n        <td>\n          <ng-container *ngFor=\"let e of listaprog\">\n              <div *ngIf=\"e._id == item.idprograma\">\n                  {{e.nombreprograma}}\n              </div>\n          </ng-container></td>\n          <td>\n            <ng-container *ngFor=\"let t of listausers\">\n              <div *ngIf=\"t._id == item.idusuario\">\n                  {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\n              </div>\n          </ng-container>\n        </td>\n\n        <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \n          data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\n        <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\n          <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\n      </tr>\n    </tbody>\n</table>\n<!--modal eliminar-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>esta seguro de borrar</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--modal nuevo-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de productos</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form  [formGroup]=\"validationsform\"  action=\"\">\n          <div class=\"form-group\">\n            <label for=\"dia\" class=\"bmd-label-floating\">dia</label>\n            <input [(ngModel)]=\"program.dia\" name=\"date\" formControlName=\"dia\" type=\"text\" class=\"form-control\" id=\"dia\">\n            <span class=\"bmd-help\">dia</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"idprograma\" class=\"bmd-label-floating\">Programa</label>\n            <select [(ngModel)]=\"program.idprograma\" name=\"idprograma\"\n             formControlName=\"idprograma\" type=\"text\" class=\"form-control\" id=\"idprograma\">\n                <option *ngFor=\"let x of listaprog\" value={{x._id}}>{{x.horainicio}} {{x.horafin}}</option>\n            </select>\n            <span class=\"bmd-help\">Programa</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"idprograma\" class=\"bmd-label-floating\">Programa</label>\n            <select [(ngModel)]=\"program.idprograma\" name=\"idprograma\"\n             formControlName=\"idprograma\" type=\"text\" class=\"form-control\" id=\"idprograma\">\n                <option *ngFor=\"let x of listaprog\" value={{x._id}}>{{x.nombreprograma}}</option>\n            </select>\n            <span class=\"bmd-help\">Programa</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"idusuario\" class=\"bmd-label-floating\"> Locutor</label>\n            <select [(ngModel)]=\"program.idusuario\" name=\"idusuario\" formControlName=\"idusuario\" \n            type=\"text\" class=\"form-control\" id=\"idusuario\">\n            <option *ngFor=\"let t of listausers\" value={{t._id}}>\n                {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\n            </option>\n          </select>\n            <span class=\"bmd-help\">Locutor</span>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <script>\n      $(document).ready(function(){\n      $('#exampleModalCenter').modal()\n    })\n      </script>\n"

/***/ }),

/***/ "./src/app/componentes/programacion/programacion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/componentes/programacion/programacion.component.ts ***!
  \********************************************************************/
/*! exports provided: ProgramacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramacionComponent", function() { return ProgramacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_programacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/programacion.service */ "./src/app/services/programacion.service.ts");
/* harmony import */ var _services_programa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/programa.service */ "./src/app/services/programa.service.ts");
/* harmony import */ var _models_Programacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Programacion */ "./src/app/models/Programacion.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");








var ProgramacionComponent = /** @class */ (function () {
    function ProgramacionComponent(formBuilder, http, https, http_, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.https = https;
        this.http_ = http_;
        this.router = router;
        this.program = new _models_Programacion__WEBPACK_IMPORTED_MODULE_5__["Programacion"]('', 1, '', '', '');
        this.listausers = [];
        this.lista = [];
        this.listaprog = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            dia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idprograma: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            idusuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ProgramacionComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
        this.listarprog();
        this.listarusers();
    };
    ProgramacionComponent.prototype.listarusers = function () {
        var _this = this;
        this.https.listar().subscribe(function (serve) {
            _this.listausers = serve.datos;
        });
    };
    ProgramacionComponent.prototype.listarprog = function () {
        var _this = this;
        this.http_.listar().subscribe(function (serve) {
            _this.listaprog = serve.datos;
            console.log("listaa datos", _this.listaprog);
        });
    };
    ProgramacionComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            _this.lista = serve.datos;
        });
        console.log(this.program);
    };
    ProgramacionComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    ProgramacionComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.program).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.program);
            delete this.program._id;
            this.http.nuevo(this.program).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    ProgramacionComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    ProgramacionComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    ProgramacionComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    ProgramacionComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.program = activo.datos;
            }
        });
    };
    ProgramacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programacion',
            template: __webpack_require__(/*! ./programacion.component.html */ "./src/app/componentes/programacion/programacion.component.html"),
            styles: [__webpack_require__(/*! ./programacion.component.css */ "./src/app/componentes/programacion/programacion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_programacion_service__WEBPACK_IMPORTED_MODULE_3__["ProgramacionService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"],
            _services_programa_service__WEBPACK_IMPORTED_MODULE_4__["ProgramaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ProgramacionComponent);
    return ProgramacionComponent;
}());



/***/ }),

/***/ "./src/app/componentes/radio/radio.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/radio/radio.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/radio/radio.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/radio/radio.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n\n  <div class=\"wrapper\">\n\n    <header>\n      <h1>Radio En vivo</h1>\n    </header>\n    <style>\n      .buffered {\n        height: 20px;\n        position: relative;\n        background: #555;\n        width: 300px;\n      }\n      \n      #buffered-amount {\n        display: block;\n        height: 100%;\n        background-color: #777;\n        width: 0;\n      }\n      \n      .progress {\n        margin-top: -20px;\n        height: 20px;\n        position: relative;\n        width: 300px;\n      }\n      \n      #progress-amount {\n        display: block;\n        height: 100%;\n        background-color: #595;\n        width: 0;\n      }\n      </style>\n          <audio id=\"audio\" controls>\n          <source type=\"audio/mp3\" src=\"\"/>\n              Your browser does not support the audio format.\n          </audio>\n      \n          <div class=\"buffered\">\n        <span id=\"buffered-amount\"></span>\n      </div>\n      <div class=\"progress\">\n        <span id=\"progress-amount\"></span>\n      </div>\n         \n          <script >\n          const socket = io(\"http://192.168.1.11:3000/\");\n    var audio = document.getElementById('audio');\n\n    audio.addEventListener('progress', function() {\n        var duration =  audio.duration;\n        if (duration > 0) {\n        for (var i = 0; i < audio.buffered.length; i++) {\n                if (audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime) {\n                    document.getElementById(\"buffered-amount\").style.width = (audio.buffered.end(audio.buffered.length - 1 - i) / duration) * 100 + \"%\";\n                    break;\n                }\n            }\n        }\n    });\n    audio.addEventListener('timeupdate', function() {\n        var duration =  audio.duration;\n        if (duration > 0) {\n        document.getElementById('progress-amount').style.width = ((audio.currentTime / duration)*100) + \"%\";\n        }\n    });\n\nblob_audio=[];\n\nsocket.on('voice', function(arrayBuffer) {\n    \n    var blob = new Blob(//blob_audio\n    [arrayBuffer]\n    , { 'type' : 'audio/ogg; codecs=opus' });\n\n    audio.src = window.URL.createObjectURL(blob);\n\n    audio.autoplay = true;\n    console.log(\"play\");\n});\n          </script>\n   \n  </div>\n\n  <script>\n     \n    \n\n      </script>\n"

/***/ }),

/***/ "./src/app/componentes/radio/radio.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/radio/radio.component.ts ***!
  \******************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



var mediaRecorder;
var RadioComponent = /** @class */ (function () {
    //@ViewChild('audio') audio: ElementRef<HTMLAudioElement>;
    function RadioComponent() {
        this.blob_audio = [];
    }
    RadioComponent.prototype.ngOnInit = function () {
        (function ($) {
            $(document).ready(function () {
                var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])("http://192.168.1.11:3000/");
                var audio = document.getElementById('audio');
                //document.getElementById('audio');
                audio.addEventListener('progress', function () {
                    var duration = document.getElementById('audio').duration;
                    //audio.duration;
                    if (duration > 0) {
                        for (var i = 0; i < audio.buffered.length; i++) {
                            if (audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime) {
                                document.getElementById("buffered-amount").style.width = (audio.buffered.end(audio.buffered.length - 1 - i) / duration) * 100 + "%";
                                break;
                            }
                        }
                    }
                });
                audio.addEventListener('timeupdate', function () {
                    var duration = audio.duration;
                    if (duration > 0) {
                        document.getElementById('progress-amount').style.width = ((audio.currentTime / duration) * 100) + "%";
                    }
                });
                socket.on('voice', function (arrayBuffer) {
                    //blob_audio.push(arrayBuffer);
                    var blob = new Blob(//blob_audio
                    [arrayBuffer], { 'type': 'audio/ogg; codecs=opus' });
                    audio.src = window.URL.createObjectURL(blob);
                    audio.autoplay = true;
                    console.log("play");
                });
                console.log("Hello from jQuery!");
            });
        })(jQuery);
        /*
        */
    };
    RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/componentes/radio/radio.component.html"),
            styles: [__webpack_require__(/*! ./radio.component.css */ "./src/app/componentes/radio/radio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/componentes/transmision/transmision.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/transmision/transmision.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RyYW5zbWlzaW9uL3RyYW5zbWlzaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/transmision/transmision.component.html":
/*!********************************************************************!*\
  !*** ./src/app/componentes/transmision/transmision.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n\n  <div class=\"wrapper\">\n\n    <header>\n      <h1>Radio En vivo</h1>\n    </header>\n\n    <section class=\"main-controls\">\n      <canvas id=\"canvas\" class=\"visualizer\" #myCanvas height=\"60px\"></canvas>\n      <div id=\"buttons\">\n        <button id=\"record\" class=\"record\">Iniciar transmision</button>\n        <button id=\"stop\" class=\"stop\">Stop</button>\n      </div>\n    </section>\n\n    <section class=\"sound-clips\">\n\n\n    </section>\n\n  </div>\n<!--modal eliminar-->\n\n<!--modal nuevo-->\n<!-- Modal -->\n\n\n  <script >\nalert(\"sss\");\n$(document).ready(function(){\n     const record = document.querySelector('.record');\nconst stop = document.querySelector('.stop');\nconst soundClips = document.querySelector('.sound-clips');\nconst canvas = document.querySelector('.visualizer');\nconst mainSection = document.querySelector('.main-controls');\nstop.disabled = true;\nlet audioCtx;\nconst canvasCtx = canvas.getContext(\"2d\");\n\nconst socket = io(\"http://localhost:3000\");\nconsole.log(\"asdas\");\nif (navigator.mediaDevices.getUserMedia) {\n  console.log('getUserMedia supported.');\n\n  const constraints = { audio: true };\n  let chunks = [];\n\n  let onSuccess = function(stream) {\n    const mediaRecorder = new MediaRecorder(stream);\n\n    visualize(stream);\n\n    record.onclick = function() {\n      mediaRecorder.start();\n      console.log(mediaRecorder.state);\n      console.log(\"recorder started\");\n      record.style.background = \"red\";\n\n      stop.disabled = false;\n      record.disabled = true;\n    }\n\n    stop.onclick = function() {\n      mediaRecorder.stop();\n      console.log(mediaRecorder.state);\n      console.log(\"recorder stopped\");\n      record.style.background = \"\";\n      record.style.color = \"\";\n      // mediaRecorder.requestData();\n\n      stop.disabled = true;\n      record.disabled = false;\n    }\n\n    mediaRecorder.onstop = function(e) {\n      var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });\n      socket.emit('radio', blob);\n      chunks=[];\n      \n    }\n\n    mediaRecorder.ondataavailable = function(e) {\n      chunks.push(e.data);\n      //blob = new Blob(chunks, { 'type' : 'audio/wav' });\n        //socket.emit('voice', blob);\n        //console.log(\"send\");\n    }\n    mediaRecorder.sendData = function(buffer) {\n        console.log(\"send\");\n        blob = new Blob(buffer, { 'type' : 'audio/wav' });\n        socket.emit('voice', blob);\n    }\n    mediaRecorder.start();\n\n    // Stop recording after 5 seconds and broadcast it to server\n    setInterval(function() {\n      console.log(\"enviando\");\n        mediaRecorder.stop()\n        mediaRecorder.start();\n    }, 5000);\n  }\n\n  let onError = function(err) {\n    console.log('The following error occured: ' + err);\n  }\n\n  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);\n\n} else {\n   console.log('getUserMedia not supported on your browser!');\n}\n\nfunction visualize(stream) {\n  if(!audioCtx) {\n    audioCtx = new AudioContext();\n  }\n\n  const source = audioCtx.createMediaStreamSource(stream);\n\n  const analyser = audioCtx.createAnalyser();\n  analyser.fftSize = 2048;\n  const bufferLength = analyser.frequencyBinCount;\n  const dataArray = new Uint8Array(bufferLength);\n\n  source.connect(analyser);\n  //analyser.connect(audioCtx.destination);\n\n  draw()\n\n  function draw() {\n    const WIDTH = canvas.width\n    const HEIGHT = canvas.height;\n\n    requestAnimationFrame(draw);\n\n    analyser.getByteTimeDomainData(dataArray);\n\n    canvasCtx.fillStyle = 'rgb(200, 200, 200)';\n    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);\n\n    canvasCtx.lineWidth = 2;\n    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';\n\n    canvasCtx.beginPath();\n\n    let sliceWidth = WIDTH * 1.0 / bufferLength;\n    let x = 0;\n\n\n    for(let i = 0; i < bufferLength; i++) {\n\n      let v = dataArray[i] / 128.0;\n      let y = v * HEIGHT/2;\n\n      if(i === 0) {\n        canvasCtx.moveTo(x, y);\n      } else {\n        canvasCtx.lineTo(x, y);\n      }\n\n      x += sliceWidth;\n    }\n\n    canvasCtx.lineTo(canvas.width, canvas.height/2);\n    canvasCtx.stroke();\n\n  }\n}\n\nwindow.onresize = function() {\n  canvas.width = mainSection.offsetWidth;\n}\n\nwindow.onresize();\n})\n\n      </script>\n"

/***/ }),

/***/ "./src/app/componentes/transmision/transmision.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/transmision/transmision.component.ts ***!
  \******************************************************************/
/*! exports provided: TransmisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmisionComponent", function() { return TransmisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



var mediaRecorder;
var inicio = false;
var TransmisionComponent = /** @class */ (function () {
    //inicio:boolean=false;
    function TransmisionComponent() {
    }
    TransmisionComponent.prototype.ngOnInit = function () {
        (function ($) {
            $(document).ready(function () {
                console.log('gsssss.');
                var record = document.getElementById('record');
                //document.querySelector('.record');
                var stop = document.getElementById('stop');
                //document.querySelector('.stop');
                var soundClips = document.querySelector('.sound-clips');
                var canvas = document.getElementById('canvas');
                //(document.getElementById('.visualizer') as HTMLCanvasElement);
                //document.querySelector('.visualizer');
                var mainSection = document.querySelector('.main-controls');
                //stop.disabled = true;
                var audioCtx;
                console.log(document.getElementById('canvas'));
                var canvasCtx = 
                //this.myCanvas//.nativeElement
                //.getContext('2d');
                //(<HTMLCanvasElement> document.getElementById('.visualizer')).getContext("2d");
                document.getElementById('canvas').getContext("2d");
                //canvas.getContext("2d");
                var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])("http://localhost:3000");
                if (navigator.mediaDevices.getUserMedia) {
                    console.log('getUserMedia supported.');
                    var constraints = { audio: true };
                    var chunks_1 = [];
                    var onSuccess = function (stream) {
                        mediaRecorder = new MediaRecorder(stream);
                        //mediaRecorder.stop();
                        visualize(stream);
                        record.onclick = function () {
                            inicio = true;
                            mediaRecorder.start();
                            //mediaRecorder.start();
                            record.style.background = "red";
                            stop.disabled = false;
                            record.disabled = true;
                        };
                        stop.onclick = function () {
                            inicio = false;
                            mediaRecorder.stop();
                            record.style.background = "";
                            record.style.color = "";
                            // mediaRecorder.requestData();
                            stop.disabled = true;
                            record.disabled = false;
                        };
                        mediaRecorder.onstop = function (e) {
                            var blob = new Blob(chunks_1, { 'type': 'audio/ogg; codecs=opus' });
                            socket.emit('radio', blob);
                            chunks_1 = [];
                        };
                        mediaRecorder.ondataavailable = function (e) {
                            //if(this.inicio){
                            chunks_1.push(e.data);
                            //}
                            //blob = new Blob(chunks, { 'type' : 'audio/wav' });
                            //socket.emit('voice', blob);
                            //console.log("send");
                        };
                        mediaRecorder.sendData = function (buffer) {
                            if (inicio) {
                                console.log("send");
                                var blob = new Blob(buffer, { 'type': 'audio/wav' });
                                socket.emit('voice', blob);
                            }
                        };
                        // Stop recording after 5 seconds and broadcast it to server
                        setInterval(function () {
                            console.log("enviando" + inicio);
                            if (inicio) {
                                mediaRecorder.stop();
                                mediaRecorder.start();
                            }
                        }, 5000);
                    };
                    var onError = function (err) {
                        console.log('The following error occured: ' + err);
                    };
                    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
                }
                else {
                    console.log('getUserMedia not supported on your browser!');
                }
                function visualize(stream) {
                    if (!audioCtx) {
                        audioCtx = new AudioContext();
                    }
                    var source = audioCtx.createMediaStreamSource(stream);
                    var analyser = audioCtx.createAnalyser();
                    analyser.fftSize = 2048;
                    var bufferLength = analyser.frequencyBinCount;
                    var dataArray = new Uint8Array(bufferLength);
                    source.connect(analyser);
                    //analyser.connect(audioCtx.destination);
                    draw();
                    function draw() {
                        var WIDTH = canvas.width;
                        var HEIGHT = canvas.height;
                        requestAnimationFrame(draw);
                        analyser.getByteTimeDomainData(dataArray);
                        canvasCtx.fillStyle = 'rgb(200, 200, 200)';
                        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
                        canvasCtx.lineWidth = 2;
                        canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
                        canvasCtx.beginPath();
                        var sliceWidth = WIDTH * 1.0 / bufferLength;
                        var x = 0;
                        for (var i = 0; i < bufferLength; i++) {
                            var v = dataArray[i] / 128.0;
                            var y = v * HEIGHT / 2;
                            if (i === 0) {
                                canvasCtx.moveTo(x, y);
                            }
                            else {
                                canvasCtx.lineTo(x, y);
                            }
                            x += sliceWidth;
                        }
                        canvasCtx.lineTo(canvas.width, canvas.height / 2);
                        canvasCtx.stroke();
                    }
                }
                /*
                window.onresize = function() {
                  canvas.width = mainSection.offsetWidth;
                }
                
                window.onresize();
                */
                console.log("Hello from jQuery!");
            });
        })(jQuery);
        /*
        */
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TransmisionComponent.prototype, "myCanvas", void 0);
    TransmisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transmision',
            template: __webpack_require__(/*! ./transmision.component.html */ "./src/app/componentes/transmision/transmision.component.html"),
            styles: [__webpack_require__(/*! ./transmision.component.css */ "./src/app/componentes/transmision/transmision.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransmisionComponent);
    return TransmisionComponent;
}());



/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/usuario/usuario.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1.textt{\r\n    color: rgba(119, 255, 28, 0.658);\r\n    background-color: rgba(154, 196, 187, 0.301);\r\n    font-weight: normal;\r\n    font-size: 35px;\r\n    font-family: cera;\r\n    text-transform: uppercase;\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://assets.eleconomista.com.mx/__export/1522095578091/sites/eleconomista/img/2018/03/26/cabina-radio-_-archivo.jpg_423392900.jpg');\r\n  }\r\n  .form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading, .form-signin {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-style: solid;\r\n    border-right-style: solid;\r\n    border-bottom-style: none;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-style: none;\r\n    border-right-style: solid;\r\n    border-bottom-style: solid;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin-heading {\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n  }\r\n  /* change the background color */\r\n  .navbar-custom {\r\n    background-color: #ff5500;\r\n}\r\n  /* change the brand and text color */\r\n  .navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n}\r\n  /* change the link color */\r\n  .navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n}\r\n  /* change the color of active or hovered links */\r\n  .navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ffffff;\r\n}\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute; \r\n    min-width: 160px;\r\n  }\r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    border-radius: 10px;\r\n    background-color: rgba(3, 26, 22, 0.616);\r\n    color: rgb(255, 255, 255);\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411);}\r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDJDQUEyQztFQUM3QztFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFFQTtJQUNFLHFEQUFxRDtJQUNyRCxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNkpBQTZKO0VBQy9KO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUdiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNDQUFzQztFQUN4QztFQUdBLGdDQUFnQztFQUNsQztJQUNJLHlCQUF5QjtBQUM3QjtFQUNBLG9DQUFvQztFQUNwQzs7SUFFSSwyQkFBMkI7QUFDL0I7RUFDQSwwQkFBMEI7RUFDMUI7SUFDSSwyQkFBMkI7QUFDL0I7RUFDQSxnREFBZ0Q7RUFDaEQ7O0lBRUksY0FBYztBQUNsQjtFQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFFQSw4QkFBOEI7RUFDOUI7SUFDRSxtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7RUFFQSw0Q0FBNEM7RUFDNUMsMkJBQTJCLHNDQUFzQyxDQUFDO0VBRWxFLG9DQUFvQztFQUNwQyxtQ0FBbUMsY0FBYyxDQUFDO0VBRWxELDBGQUEwRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjE0LCAxNzUsIDAuMzAxKTtcclxuICB9XHJcbiAgLnRhYmxlIC50aGVhZC1kYXJrIHRoIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQudHJhbnNwYXJlbnQtaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyMTQsIDE2MCwgMC4zMDEpIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgxLnRleHR0e1xyXG4gICAgY29sb3I6IHJnYmEoMTE5LCAyNTUsIDI4LCAwLjY1OCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTk2LCAxODcsIDAuMzAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogY2VyYTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsc2NyZWVuX2JnIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYXNzZXRzLmVsZWNvbm9taXN0YS5jb20ubXgvX19leHBvcnQvMTUyMjA5NTU3ODA5MS9zaXRlcy9lbGVjb25vbWlzdGEvaW1nLzIwMTgvMDMvMjYvY2FiaW5hLXJhZGlvLV8tYXJjaGl2by5qcGdfNDIzMzkyOTAwLmpwZycpO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU1MDA7XHJcbn1cclxuLyogY2hhbmdlIHRoZSBicmFuZCBhbmQgdGV4dCBjb2xvciAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLWJyYW5kLFxyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLXRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG59XHJcbi8qIGNoYW5nZSB0aGUgbGluayBjb2xvciAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG59XHJcbi8qIGNoYW5nZSB0aGUgY29sb3Igb2YgYWN0aXZlIG9yIGhvdmVyZWQgbGlua3MgKi9cclxuLm5hdmJhci1jdXN0b20gLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmssXHJcbi5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAyNiwgMjIsIDAuNjE2KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQxMSk7fVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/usuario/usuario.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\n    width=\"100\"\n    height=\"85\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <br>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reportes\n          </button>\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cerrar Secion\n          </button>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div>\n\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\n  </div>\n<table class=\"table table-sm table-dark\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>CodigoUsuario</th>\n        <th>Nombre</th>\n        <th>Apellido Paterno</th>\n        <th>Apellido Materno</th>\n        <th>Telefono</th>\n        <th>Direccion</th>\n        <th>Cedula</th>\n        <th>Cargo</th>\n        <th>Loguin</th>\n        <th>Contraseña</th>\n        <th>Borrar</th>\n        <th>Actualizar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of lista\">\n        <td>{{item.codigousuario}}</td>\n        <td>{{item.nombre}}</td>\n        <td>{{item.appaterno}}</td>\n        <td>{{item.apmaterno}}</td>\n        <td>{{item.telefono}}</td>\n        <td>{{item.direccion}}</td>\n        <td>{{item.cedula}}</td>\n        <td>{{item.cargo}}</td>\n        <td>{{item.login}}</td>\n        <td>{{item.password}}</td>\n        <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \n          data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\n        <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\n          <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\n      </tr>\n    </tbody>\n</table>\n<!--modal eliminar-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>esta seguro de borrar</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--modal nuevo-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <br><br><br><br><br><br><br><br>\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de usuarios</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" >\n        <form  [formGroup]=\"validationsform\"  action=\"\">\n          <div class=\"form-group\">\n            <label for=\"codigo\" class=\"bmd-label-floating\">CodigoUsuario</label>\n            <input [(ngModel)]=\"usu.codigousuario\" name=\"codigousuario\" formControlName=\"codigousuario\" type=\"text\" class=\"form-control\" id=\"codigousuario\">\n            <span class=\"bmd-help\">Codigo</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"nombre\" class=\"bmd-label-floating\">Nombre</label>\n            <input [(ngModel)]=\"usu.nombre\" name=\"nombre\" formControlName=\"nombre\" type=\"text\" class=\"form-control\" id=\"nombre\">\n            <span class=\"bmd-help\">Nombre</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"appaterno\" class=\"bmd-label-floating\">Apellido Paterno</label>\n            <input [(ngModel)]=\"usu.appaterno\" name=\"appaterno\" formControlName=\"appaterno\" type=\"text\" class=\"form-control\" id=\"appaterno\">\n            <span class=\"bmd-help\">Apellido Paterno</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"apmaterno\" class=\"bmd-label-floating\">Apellido Materno</label>\n            <input [(ngModel)]=\"usu.apmaterno\" name=\"apmaterno\" formControlName=\"apmaterno\" type=\"text\" class=\"form-control\" id=\"apmaterno\">\n            <span class=\"bmd-help\">Apellido Materno</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"telefono\" class=\"bmd-label-floating\">Telefon</label>\n            <input [(ngModel)]=\"usu.telefono\" name=\"telefono\" formControlName=\"telefono\" type=\"text\" class=\"form-control\" id=\"telefono\">\n            <span class=\"bmd-help\">Telefono</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"direccion\" class=\"bmd-label-floating\">Direccion</label>\n            <input [(ngModel)]=\"usu.direccion\" name=\"direccion\" formControlName=\"direccion\" type=\"text\" class=\"form-control\" id=\"direccion\">\n            <span class=\"bmd-help\">Direccion</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"objeto\" class=\"bmd-label-floating\">Cedula</label>\n            <input [(ngModel)]=\"usu.cedula\" name=\"cedula\" formControlName=\"cedula\" type=\"text\" class=\"form-control\" id=\"cedula\">\n            <span class=\"bmd-help\">Objeto</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"cargo\" class=\"bmd-label-floating\">Cargo</label>\n            <input [(ngModel)]=\"usu.cargo\" name=\"cargo\" formControlName=\"cargo\" type=\"text\" class=\"form-control\" id=\"cargo\">\n            <span class=\"bmd-help\">Cargo</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"login\" class=\"bmd-label-floating\">Login</label>\n            <input [(ngModel)]=\"usu.login\" name=\"login\" formControlName=\"login\" type=\"text\" class=\"form-control\" id=\"login\">\n            <span class=\"bmd-help\">Login</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" class=\"bmd-label-floating\">Password</label>\n            <input [(ngModel)]=\"usu.password\" name=\"password\" formControlName=\"password\" type=\"text\" class=\"form-control\" id=\"password\">\n            <span class=\"bmd-help\">Password</span>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <script>\n      $(document).ready(function(){\n      $('#exampleModalCenter').modal()\n    })\n      </script>"

/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/usuario/usuario.component.ts ***!
  \**********************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.usu = new _models_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"]('', '', '', '', '', '', '', '', '', '', 1, '');
        this.lista = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            codigousuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            appaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            apmaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cargo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
    };
    UsuarioComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            _this.lista = serve.datos;
        });
        console.log(this.usu);
    };
    UsuarioComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    UsuarioComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.usu).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.usu);
            delete this.usu._id;
            this.http.nuevo(this.usu).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    UsuarioComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    UsuarioComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    UsuarioComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    UsuarioComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.usu = activo.datos;
            }
        });
    };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/componentes/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/componentes/usuario/usuario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/componentes/venta/venta.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/venta/venta.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(33, 214, 175, 0.301);\r\n  }\r\n  .table .thead-dark th {\r\n    \r\n    font-size: 20px;\r\n  }\r\n  input.transparent-input{\r\n    background-color: rgba(33, 214, 160, 0.301)!important;\r\n    border:none !important;\r\n  }\r\n  h1.textt{\r\n    color: rgba(119, 255, 28, 0.658);\r\n    background-color: rgba(154, 196, 187, 0.301);\r\n    font-weight: normal;\r\n    font-size: 35px;\r\n    font-family: cera;\r\n    text-transform: uppercase;\r\n  }\r\n  .fullscreen_bg {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-image: url('https://i.pinimg.com/originals/25/82/68/2582684ec9bbf0efd3e08fece11145f8.jpg');\r\n  }\r\n  .form-signin {\r\n    max-width: 280px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading, .form-signin {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-style: solid;\r\n    border-right-style: solid;\r\n    border-bottom-style: none;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-style: none;\r\n    border-right-style: solid;\r\n    border-bottom-style: solid;\r\n    border-left-style: solid;\r\n    border-color: #000;\r\n  }\r\n  .form-signin-heading {\r\n    color: #fff;\r\n    text-align: center;\r\n    text-shadow: 0 2px 2px rgba(0,0,0,0.5);\r\n    \r\n  }\r\n  /* change the background color */\r\n  .navbar-custom {\r\n    background-color: #ff5500;\r\n}\r\n  /* change the brand and text color */\r\n  .navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n    \r\n}\r\n  /* change the link color */\r\n  .navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n}\r\n  /* change the color of active or hovered links */\r\n  .navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ffffff;\r\n}\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute; \r\n    min-width: 160px;\r\n  }\r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    border-radius: 10px;\r\n    background-color: rgba(3, 26, 22, 0.616);\r\n    color: rgb(255, 255, 255);\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    \r\n  }\r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.411\r\n    );}\r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdmVudGEvdmVudGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMkNBQTJDO0VBQzdDO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUVBO0lBQ0UscURBQXFEO0lBQ3JELHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixxR0FBcUc7RUFDdkc7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBR2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0NBQXNDOztFQUV4QztFQUdBLGdDQUFnQztFQUNsQztJQUNJLHlCQUF5QjtBQUM3QjtFQUNBLG9DQUFvQztFQUNwQzs7SUFFSSwyQkFBMkI7O0FBRS9CO0VBQ0EsMEJBQTBCO0VBQzFCO0lBQ0ksMkJBQTJCO0FBQy9CO0VBQ0EsZ0RBQWdEO0VBQ2hEOztJQUVJLGNBQWM7QUFDbEI7RUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjOztFQUVoQjtFQUVBLDRDQUE0QztFQUM1QywyQkFBMkI7S0FBNEMsQ0FBQztFQUV4RSxvQ0FBb0M7RUFDcEMsbUNBQW1DLGNBQWMsQ0FBQztFQUVsRCwwRkFBMEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy92ZW50YS92ZW50YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjE0LCAxNzUsIDAuMzAxKTtcclxuICB9XHJcbiAgLnRhYmxlIC50aGVhZC1kYXJrIHRoIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQudHJhbnNwYXJlbnQtaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyMTQsIDE2MCwgMC4zMDEpIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgxLnRleHR0e1xyXG4gICAgY29sb3I6IHJnYmEoMTE5LCAyNTUsIDI4LCAwLjY1OCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTk2LCAxODcsIDAuMzAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogY2VyYTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsc2NyZWVuX2JnIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8yNS84Mi82OC8yNTgyNjg0ZWM5YmJmMGVmZDNlMDhmZWNlMTExNDVmOC5qcGcnKTtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbi1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU1MDA7XHJcbn1cclxuLyogY2hhbmdlIHRoZSBicmFuZCBhbmQgdGV4dCBjb2xvciAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLWJyYW5kLFxyXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLXRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgXHJcbn1cclxuLyogY2hhbmdlIHRoZSBsaW5rIGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbn1cclxuLyogY2hhbmdlIHRoZSBjb2xvciBvZiBhY3RpdmUgb3IgaG92ZXJlZCBsaW5rcyAqL1xyXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayxcclxuLm5hdmJhci1jdXN0b20gLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDI2LCAyMiwgMC42MTYpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MTFcclxuICAgICk7fVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXHJcbiAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/venta/venta.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/venta/venta.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n\r\n\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<div id=\"fullscreen_bg\" class=\"fullscreen_bg\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #04d4966b;\">\r\n    <img src=\"https://4.bp.blogspot.com/-a3BfzdpmI58/XwkNA1rxj9I/AAAAAAAABHc/pD-L9OCNvfMdgrfFu8UiKDLkA7AIIRUnQCK4BGAYYCw/s1600/Radio%2BHit%2Blogo%2BCABECER.png\"\r\n    width=\"100\"\r\n    height=\"85\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <br>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/usuario\">Usuario</button>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/activo\">Inventario</button>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programa\">Programa</button>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/planificacionp\">Planificacion</button>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/programacion\">Horario</button>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/cliente\">Cliente</button>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/venta\">Ventas</button>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded\" routerLink=\"/pagina\">Pagina web</button>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <button type=\"button\" class=\"btn btn-outline-light btn-rounded dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Reportes\r\n          </button>\r\n          <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" routerLink=\"producto\">Producto</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Anotbtn  action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button routerLink=\"/login\" (click)=\"salir()\"  type=\"button\" class=\"btn btn-outline-warning btn-rounded\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Cerrar Secion\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <div>\r\n\r\n<button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>\r\n<button routerLink=\"/menu\" class=\"btn btn-danger\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\">Menu Principal</button>\r\n  </div>\r\n<table class=\"table table-sm table-dark\">\r\n    <thead class=\"thead-dark\">\r\n        <tr>\r\n            <th>Cliente</th>\r\n            <th> Razon Social</th>\r\n            <th>Fecha</th>\r\n            <th>Usuario</th>\r\n            <th>Total</th>\r\n            <th>Detalle</th>\r\n            <th>Borrar</th>\r\n            <th>Actualizar</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of lista\">\r\n            <td>\r\n                <ng-container *ngFor=\"let cl of listaclient\">\r\n                  <div *ngIf=\"cl._id == item.idcliente[0]\">\r\n                    {{cl.nit}} / {{cl.nombre}} {{cl.appaterno}} {{cl.apmaterno}}\r\n                  </div>\r\n              </ng-container>\r\n            </td>\r\n            <td>{{item.razonsocial}}</td>\r\n            <td>{{item.fecha}}</td>\r\n              <td>\r\n                <ng-container *ngFor=\"let t of listausers\">\r\n                  <div *ngIf=\"t._id == item.idusuario[0]\">\r\n                      {{t.nombre}} {{t.appaterno}} {{t.apmaterno}}\r\n                  </div>\r\n              </ng-container>\r\n            </td>\r\n            <td>{{item.total}}</td>\r\n            <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \r\n                data-target=\"#exampleModal\"(click)=\"detalle(item)\" style=\"background-color:#062c27b7;\">detalle</button></td>\r\n            <td><button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" \r\n              data-target=\"#exampleModal\"(click)=\"borrar(item)\" style=\"background-color:#062c27b7;\">borrar</button></td>\r\n            <td><button (click)=\"editar(item)\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\"  >Editar</button></td>\r\n              <!----<button (click)=\"action\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"class=\"btn btn-outline-warning\" style=\"background-color:#062c27b7;\" >+</button>-->\r\n               \r\n          </tr>\r\n        </tbody>\r\n    </table>\r\n<!--modal eliminar-->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmar</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>esta seguro de borrar</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\r\n        <button type=\"button\" (click)=\"confirmado()\" data-dismiss=\"modal\" class=\"btn btn-primary\">SI</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--modal nuevo-->\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Formulario de productos</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\" >\r\n        <form  [formGroup]=\"validationsform\"  action=\"\">\r\n          <br><br><br><br><br>\r\n          <div class=\"form-group\">\r\n            <label for=\"idcliente\" class=\"bmd-label-floating\">Nit</label>\r\n            <input #input (keyup)=\"buscarCliente( input.value )\" formControlName=\"idcliente\" type=\"text\" class=\"form-control\"  id=\"idcliente\">\r\n            <span class=\"bmd-help\">Nit</span>\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr class=\"table-success\">\r\n                        <th>Nit</th>\r\n                        <th>Nombre</th>\r\n                        <th>Apellido Paterno</th>\r\n                        <th>Apellido Materno</th>\r\n                        <th>Confirmar</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of listcli\">\r\n                        <td>{{ item.nit }}</td>                \r\n                        <td>{{ item.nombre }}</td>\r\n                        <td>{{ item.appaterno }}</td>\r\n                        <td>{{ item.apmaterno }}</td>\r\n                        <td><button (click)=\"confirmar(item)\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i></button></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <label type=\"hidden\" for=\"\" value=\"cli._id\" [(ngModel)]=\"vent.idcliente\" ></label>\r\n            {{cli._id}}\r\n        </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"razonsocial\" class=\"bmd-label-floating\">Razon Social</label>\r\n            <input [(ngModel)]=\"vent.razonsocial\" name=\"razonsocial\" formControlName=\"razonsocial\" type=\"text\" class=\"form-control\" id=\"razonsocial\">\r\n            <span class=\"bmd-help\">Razon Social</span>\r\n          </div>\r\n         \r\n          <div class=\"form-group\">\r\n            <label for=\"fecha\" class=\"bmd-label-floating\">Fecha</label>\r\n            <input [(ngModel)]=\"vent.fecha\" name=\"fecha\" formControlName=\"fecha\" type=\"datetime-local\" class=\"form-control\" id=\"fecha\">\r\n            <span class=\"bmd-help\">Fecha</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"total\" class=\"bmd-label-floating\">Total</label>\r\n            <input [(ngModel)]=\"vent.total\" name=\"total\" formControlName=\"total\" type=\"text\" class=\"form-control\" id=\"total\">\r\n            <span class=\"bmd-help\">Total</span>\r\n          </div>\r\n        </form>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\"(click)=\"nuevo()\" data-dismiss=\"modal\"   class=\"btn btn-primary\">Guardar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n  <script>\r\n      $(document).ready(function(){\r\n      $('#exampleModalCenter').modal()\r\n    })\r\n      </script>"

/***/ }),

/***/ "./src/app/componentes/venta/venta.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/venta/venta.component.ts ***!
  \******************************************************/
/*! exports provided: VentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaComponent", function() { return VentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var _models_venta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/venta */ "./src/app/models/venta.ts");









var VentaComponent = /** @class */ (function () {
    function VentaComponent(formBuilder, https, http, httpss, router) {
        this.formBuilder = formBuilder;
        this.https = https;
        this.http = http;
        this.httpss = httpss;
        this.router = router;
        this.listadet = [];
        this.listaclient = [];
        this.listcli = [];
        this.listausers = [];
        this.cli = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]('', '', '', '', '', '', '', 1, '');
        this.vent = new _models_venta__WEBPACK_IMPORTED_MODULE_8__["Venta"]('', '', '', '', 0, 1, this.listadet, '');
        this.lista = [];
        this.action = false;
        this.form2 = false; //para abrir nuevo cliente
        this.validationsform = this.formBuilder.group({
            idcliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            razonsocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    VentaComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        this.listar();
        this.listaclientes();
        this.listauserss();
    };
    VentaComponent.prototype.buscarCliente = function (termino) {
        var _this = this;
        if (termino.length <= 0) {
            return;
        }
        this.https.buscarCliente(termino)
            .subscribe(function (serve) {
            return _this.listcli = serve.datos;
        });
    };
    VentaComponent.prototype.confirmar = function (cliente) {
        this.cli = cliente;
        console.log("estructura", this.cli);
    };
    VentaComponent.prototype.listaclientes = function () {
        var _this = this;
        this.https.listar().subscribe(function (serve) {
            _this.listaclient = serve.datos;
            console.log("listaa datos", _this.listaclient);
        });
    };
    VentaComponent.prototype.listauserss = function () {
        var _this = this;
        this.httpss.listar().subscribe(function (serve) {
            _this.listausers = serve.datos;
            console.log("listaa datos", _this.listausers);
        });
    };
    VentaComponent.prototype.listar = function () {
        var _this = this;
        this.http.listar().subscribe(function (serve) {
            console.log("sad", serve.datos);
            _this.lista = serve.datos;
        });
        console.log(this.vent);
    };
    VentaComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    VentaComponent.prototype.nuevo = function () {
        var _this = this;
        if (this.action) {
            this.http.editar(this.vent).subscribe(function (dato) {
                if (dato.estado == 1) {
                    _this.form2 = false;
                    _this.action = false;
                }
            });
            this.listar();
        }
        else {
            console.log(this.vent);
            delete this.vent._id;
            this.http.nuevo(this.vent).subscribe(function (serve) {
                if (serve.estado) {
                    _this.lista.push(serve.dato);
                    //jQuery('#exampleModalCenter').modal('hide');
                }
            });
        }
        this.validationsform.reset();
        this.listar();
    };
    VentaComponent.prototype.confirmado = function () {
        var _this = this;
        this.http.borrar(this.select).subscribe(function (s) {
            _this.lista.splice(_this.lista.indexOf(_this.select), 1);
        });
    };
    VentaComponent.prototype.mostrar = function (t) {
        this.action = t;
    };
    VentaComponent.prototype.borrar = function (item) {
        this.select = item;
    };
    VentaComponent.prototype.editar = function (item) {
        var _this = this;
        this.form2 = true;
        this.select = item;
        this.action = true;
        console.log(item);
        this.http.cargaractivo(item._id).subscribe(function (activo) {
            if (activo.bien == 1) {
                console.log("datoos viniendo del backend", activo.datos);
                _this.vent = activo.datos;
            }
        });
    };
    VentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venta',
            template: __webpack_require__(/*! ./venta.component.html */ "./src/app/componentes/venta/venta.component.html"),
            styles: [__webpack_require__(/*! ./venta.component.css */ "./src/app/componentes/venta/venta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            _services_venta_service__WEBPACK_IMPORTED_MODULE_7__["VentaService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VentaComponent);
    return VentaComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin:0;\r\n  padding:0;\r\n  font-family: sans-serif;\r\n  background: linear-gradient(#141e30, #243b55);\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.site-wrapper {\r\n  border-top: 4px solid #c8ff00; }\r\n.login-box {  \r\n  width: 400px;\r\n  padding: 40px;\r\n  background: rgba(0,0,0,.5);\r\n  box-sizing: border-box;\r\n  box-shadow: 0 15px 25px rgba(0,0,0,.6);\r\n  border-radius: 10px;\r\n}\r\n.login-box h2 {\r\n  font-size: 43px;\r\n  margin: 0 0 30px;\r\n  padding: 0;\r\n  text-align: center;\r\n  color: rgb(255, 255, 255);\r\n    border-color: black;\r\n    -webkit-text-stroke: 2px rgb(50, 51, 47);\r\n\ttext-shadow:\r\n\t\t0 0 5px rgb(179, 255, 0),\r\n\t\t0 0 10px rgb(157, 255, 0),\r\n\t\t0 0 20px rgb(166, 255, 0),\r\n\t\t0 0 40px rgb(164, 250, 4);\r\n}\r\n.login-box .user-box {\r\n  position: relative;\r\n}\r\n.login-box .user-box input {\r\n  width: 100%;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  margin-bottom: 30px;\r\n  border: none;\r\n  border-bottom: 1px solid #fff;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n.login-box .user-box label {\r\n  position: absolute;\r\n  top:0;\r\n  left: 0;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  pointer-events: none;\r\n  transition: .5s;\r\n}\r\n.login-box .user-box input:focus ~ label,\r\n.login-box .user-box input:active ~ label{\r\n  top: -20px;\r\n  left: 0;\r\n  color: #03e9f4;\r\n  font-size: 15px;\r\n\r\n}\r\n.login-box form a {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  color: #03e9f4;\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  transition: .5s;\r\n  margin-top: 40px;\r\n  letter-spacing: 4px\r\n}\r\n.login-box a:hover {\r\n  background: #17a6ad;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px #03e9f4,\r\n              0 0 25px #03e9f4,\r\n              0 0 50px #03e9f4,\r\n              0 0 100px #03e9f4;\r\n}\r\n.login-box a span {\r\n  position: absolute;\r\n  display: block;\r\n}\r\n.login-box a span:nth-child(1) {\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(90deg, transparent, #03e9f4);\r\n  -webkit-animation: btn-anim1 1s linear infinite;\r\n          animation: btn-anim1 1s linear infinite;\r\n}\r\n@-webkit-keyframes btn-anim1 {\r\n  0% {\r\n    left: -100%;\r\n  }\r\n  50%,100% {\r\n    left: 100%;\r\n  }\r\n}\r\n@keyframes btn-anim1 {\r\n  0% {\r\n    left: -100%;\r\n  }\r\n  50%,100% {\r\n    left: 100%;\r\n  }\r\n}\r\n.login-box a span:nth-child(2) {\r\n  top: -100%;\r\n  right: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(180deg, transparent, #03e9f4);\r\n  -webkit-animation: btn-anim2 1s linear infinite;\r\n          animation: btn-anim2 1s linear infinite;\r\n  -webkit-animation-delay: .25s;\r\n          animation-delay: .25s\r\n}\r\n@-webkit-keyframes btn-anim2 {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  50%,100% {\r\n    top: 100%;\r\n  }\r\n}\r\n@keyframes btn-anim2 {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  50%,100% {\r\n    top: 100%;\r\n  }\r\n}\r\n.login-box a span:nth-child(3) {\r\n  bottom: 0;\r\n  right: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(270deg, transparent, #03e9f4);\r\n  -webkit-animation: btn-anim3 1s linear infinite;\r\n          animation: btn-anim3 1s linear infinite;\r\n  -webkit-animation-delay: .5s;\r\n          animation-delay: .5s\r\n}\r\n@-webkit-keyframes btn-anim3 {\r\n  0% {\r\n    right: -100%;\r\n  }\r\n  50%,100% {\r\n    right: 100%;\r\n  }\r\n}\r\n@keyframes btn-anim3 {\r\n  0% {\r\n    right: -100%;\r\n  }\r\n  50%,100% {\r\n    right: 100%;\r\n  }\r\n}\r\n.login-box a span:nth-child(4) {\r\n  bottom: -100%;\r\n  left: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(360deg, transparent, #03e9f4);\r\n  -webkit-animation: btn-anim4 1s linear infinite;\r\n          animation: btn-anim4 1s linear infinite;\r\n  -webkit-animation-delay: .75s;\r\n          animation-delay: .75s\r\n}\r\n@-webkit-keyframes btn-anim4 {\r\n  0% {\r\n    bottom: -100%;\r\n  }\r\n  50%,100% {\r\n    bottom: 100%;\r\n  }\r\n}\r\n@keyframes btn-anim4 {\r\n  0% {\r\n    bottom: -100%;\r\n  }\r\n  50%,100% {\r\n    bottom: 100%;\r\n  }\r\n}\r\n.pt-table {\r\n  display: table;\r\n  width: 100%;\r\n  height: calc(100vh - 4px); }\r\n.pt-tablecell {\r\n  display: table-cell;\r\n  vertical-align: middle; }\r\n.page-home {\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  vertical-align: middle; }\r\n.page-home .overlay {\r\n    background-color: rgba(0, 0, 0, 0.295);\r\n}\r\n@media (min-width: 1200px)\r\n{\r\n.col-lg-offset-2 {\r\n    margin-left: 30.66666667%;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLDZDQUE2QztFQUM3QyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDZCQUE2QixFQUFFO0FBQ2pDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdDQUF3QztDQUMzQzs7OzsyQkFJMEI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsT0FBTztFQUNQLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsVUFBVTtFQUNWLE9BQU87RUFDUCxjQUFjO0VBQ2QsZUFBZTs7QUFFakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUNGO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQjs7OytCQUc2QjtBQUMvQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6QztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBUEE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsK0NBQXVDO1VBQXZDLHVDQUF1QztFQUN2Qyw2QkFBb0I7VUFBcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGO0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCx5REFBeUQ7RUFDekQsK0NBQXVDO1VBQXZDLHVDQUF1QztFQUN2Qyw0QkFBbUI7VUFBbkI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBUEE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsK0NBQXVDO1VBQXZDLHVDQUF1QztFQUN2Qyw2QkFBb0I7VUFBcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBUEE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBR1gseUJBQXlCLEVBQUU7QUFFN0I7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUU7QUFDMUI7RUFDRSxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtBQUN4QjtJQUNFLHNDQUFzQztBQUMxQztBQUNBOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTQxZTMwLCAjMjQzYjU1KTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNpdGUtd3JhcHBlciB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNjOGZmMDA7IH1cclxuLmxvZ2luLWJveCB7ICBcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAyNXB4IHJnYmEoMCwwLDAsLjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggaDIge1xyXG4gIGZvbnQtc2l6ZTogNDNweDtcclxuICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IHJnYig1MCwgNTEsIDQ3KTtcclxuXHR0ZXh0LXNoYWRvdzpcclxuXHRcdDAgMCA1cHggcmdiKDE3OSwgMjU1LCAwKSxcclxuXHRcdDAgMCAxMHB4IHJnYigxNTcsIDI1NSwgMCksXHJcblx0XHQwIDAgMjBweCByZ2IoMTY2LCAyNTUsIDApLFxyXG5cdFx0MCAwIDQwcHggcmdiKDE2NCwgMjUwLCA0KTtcclxufVxyXG5cclxuLmxvZ2luLWJveCAudXNlci1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxvZ2luLWJveCAudXNlci1ib3ggaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubG9naW4tYm94IC51c2VyLWJveCBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggLnVzZXItYm94IGlucHV0OmZvY3VzIH4gbGFiZWwsXHJcbi5sb2dpbi1ib3ggLnVzZXItYm94IGlucHV0OmFjdGl2ZSB+IGxhYmVse1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogMDtcclxuICBjb2xvcjogIzAzZTlmNDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcblxyXG59XHJcblxyXG4ubG9naW4tYm94IGZvcm0gYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgY29sb3I6ICMwM2U5ZjQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDRweFxyXG59XHJcblxyXG4ubG9naW4tYm94IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxN2E2YWQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzAzZTlmNCxcclxuICAgICAgICAgICAgICAwIDAgMjVweCAjMDNlOWY0LFxyXG4gICAgICAgICAgICAgIDAgMCA1MHB4ICMwM2U5ZjQsXHJcbiAgICAgICAgICAgICAgMCAwIDEwMHB4ICMwM2U5ZjQ7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggYSBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggYSBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICMwM2U5ZjQpO1xyXG4gIGFuaW1hdGlvbjogYnRuLWFuaW0xIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBidG4tYW5pbTEge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gIH1cclxuICA1MCUsMTAwJSB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWJveCBhIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICB0b3A6IC0xMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcclxuICBhbmltYXRpb246IGJ0bi1hbmltMiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuMjVzXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW0yIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IC0xMDAlO1xyXG4gIH1cclxuICA1MCUsMTAwJSB7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tYm94IGEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogLTEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdHJhbnNwYXJlbnQsICMwM2U5ZjQpO1xyXG4gIGFuaW1hdGlvbjogYnRuLWFuaW0zIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IC41c1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMyB7XHJcbiAgMCUge1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gIH1cclxuICA1MCUsMTAwJSB7XHJcbiAgICByaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggYSBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgYm90dG9tOiAtMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcclxuICBhbmltYXRpb246IGJ0bi1hbmltNCAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNzVzXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW00IHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IC0xMDAlO1xyXG4gIH1cclxuICA1MCUsMTAwJSB7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5wdC10YWJsZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA0cHgpO1xyXG4gIGhlaWdodDogLW1vei1jYWxjKDEwMHZoIC0gNHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cHgpOyB9XHJcblxyXG4ucHQtdGFibGVjZWxsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cclxuLnBhZ2UtaG9tZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxyXG4gIC5wYWdlLWhvbWUgLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI5NSk7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG4uY29sLWxnLW9mZnNldC0yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMC42NjY2NjY2NyU7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"site-wrapper\">\n  <div class=\"pt-table desktop-768\">\n    <div class=\"pt-tablecell page-home relative\" style=\"background-image: url(https://cyberpunkcity.store/wp-content/uploads/2019/07/mejores-libros-cyberpunk.jpg);\n    background-position: center;\n    background-size: cover;\">\n                    <div class=\"overlay\"></div>\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8\">                              \n                                <div class=\"page-title  home text-center\">\n                                </div>\n                                <div class=\"hexagon-menu clear\">\n                                  <div class=\"login-box\">\n                                    <h2>Iniciar sesión</h2>\n                                    <form>\n                                      <div class=\"user-box\">\n                                        <input id=\"login\" name=\"login\" type=\"text\" [(ngModel)]=\"login\" placeholder=\"Nombre Usuario\" required=\"\" autofocus=\"\" class=\"form-control transparent-input\">\n                                        <label>Nombre Usuario</label>\n                                      </div>\n                                      <div class=\"user-box\">\n                                        <input input id=\"password\" name=\"password\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña\" required=\"\" autofocus=\"\" class=\"form-control transparent-input\">\n                                        <label>Contraseña</label>\n                                      </div>\n                                      <a type=\"button\" (click)=\"entrar()\" ng-disabled=\"miFormulario.$invalid\"value=\"entrar\" class=\"btn btn-lg btn-outline-light btn-block\">\n                                        <span></span>\n                                        <span></span>\n                                        <span></span>\n                                        <span></span>\n                                        Enviar\n                                      </a>\n                                    </form>\n                                  </div> \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n  </main>\n\n\n\n  \n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(Slogin, router) {
        this.Slogin = Slogin;
        this.router = router;
        this.login = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("token" + localStorage.getItem('token'));
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['menu']);
        }
    };
    LoginComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    LoginComponent.prototype.entrar = function () {
        var _this = this;
        this.Slogin.login(this.login, this.password)
            .subscribe(function (s) {
            if (s.estado == 1) {
                localStorage.setItem('token', s.token);
                //swal("Entrada", "Bienvenido", "success");
                _this.router.navigate(['menu']);
                alert("Bienvenido!!");
            }
            else {
                console.log('no entras');
                //Swal("Mall", "Tu no puedes entrar", "warning");
                alert("No pudo Ingresar Verifique sus datos!!");
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n  font-family: \"Libre Baskerville\", serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 30px;\r\n  background-color: #f8f8fa;\r\n  color: #ababab; }\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #f90a23;\r\n    background-image: -webkit-linear-gradient(45deg,rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.heading-page\r\n{\r\n      text-transform: uppercase;\r\n    font-size: 43px;\r\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: bolder;\r\n    letter-spacing: 3px;\r\n    color: rgb(255, 255, 255);\r\n    border-color: black;\r\n    -webkit-text-stroke: 2px rgb(50, 51, 47);\r\n\ttext-shadow:\r\n\t\t0 0 5px rgb(179, 255, 0),\r\n\t\t0 0 10px rgb(157, 255, 0),\r\n\t\t0 0 20px rgb(166, 255, 0),\r\n\t\t0 0 40px rgb(164, 250, 4);\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  transition: all 0.3s ease 0s; }\r\n\r\na:hover, a:focus {\r\n    color: #ababab;\r\n    text-decoration: none;\r\n    outline: 0 none; }\r\n\r\nh1, h2, h3,\r\nh4, h5, h6 {\r\n  color: #1e2530;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  margin: 0;\r\n  line-height: 1.3; }\r\n\r\np {\r\n  margin-bottom: 20px; }\r\n\r\np:last-child {\r\n    margin-bottom: 0; }\r\n\r\n/*\r\n * Selection color\r\n */\r\n\r\n::-moz-selection {\r\n  background-color: #FA6862;\r\n  color: rgb(0, 250, 112); }\r\n\r\n::selection {\r\n  background-color: #FA6862;\r\n  color: #fff; }\r\n\r\n/*\r\n *  Reset bootstrap's default style\r\n */\r\n\r\n.form-control::-webkit-input-placeholder,\r\n::-webkit-input-placeholder {\r\n  opacity: 1;\r\n  color: inherit; }\r\n\r\n.form-control:-moz-placeholder,\r\n:-moz-placeholder {\r\n  /* Firefox 18- */\r\n  opacity: 1;\r\n  color: inherit; }\r\n\r\n.form-control::-moz-placeholder,\r\n::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  opacity: 1;\r\n  color: inherit; }\r\n\r\n.form-control:-ms-input-placeholder,\r\n:-ms-input-placeholder {\r\n  opacity: 1;\r\n  color: inherit; }\r\n\r\nbutton, input, select,\r\ntextarea, label {\r\n  font-weight: 400; }\r\n\r\n.btn {\r\n  transition: all 0.3s ease 0s; }\r\n\r\n.btn:hover, .btn:focus, .btn:active:focus {\r\n    outline: 0 none; }\r\n\r\n.btn-primary {\r\n  background-color: #FA6862;\r\n  border: 0;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 700;\r\n  height: 48px;\r\n  line-height: 50px;\r\n  padding: 0 42px;\r\n  text-transform: uppercase; }\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary:active:focus {\r\n    background-color: #f9423a; }\r\n\r\n.btn-border {\r\n  border: 1px solid #d7d8db;\r\n  display: inline-block;\r\n  padding: 7px; }\r\n\r\n/*\r\n *  CSS Helper Class\r\n */\r\n\r\n.clear:before, .clear:after {\r\n  content: \" \";\r\n  display: table; }\r\n\r\n.clear:after {\r\n  clear: both; }\r\n\r\n.pt-table {\r\n  display: table;\r\n  width: 100%;\r\n  height: calc(100vh - 4px); }\r\n\r\n.pt-tablecell {\r\n  display: table-cell;\r\n  vertical-align: middle; }\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%; }\r\n\r\n.relative {\r\n  position: relative; }\r\n\r\n.primary,\r\n.link:hover {\r\n  color: #FA6862; }\r\n\r\n.no-gutter {\r\n  margin-left: 0;\r\n  margin-right: 0; }\r\n\r\n.no-gutter > [class^=\"col-\"] {\r\n    padding-left: 0;\r\n    padding-right: 0; }\r\n\r\n.flex {\r\n  display: -moz-flex;\r\n  display: flex; }\r\n\r\n.flex-middle {\r\n  -moz-align-items: center;\r\n  align-items: center; }\r\n\r\n.space-between {\r\n  -moz-justify-content: space-between;\r\n  justify-content: space-between; }\r\n\r\n.nicescroll-cursors {\r\n  background: #FA6862 !important; }\r\n\r\n.preloader {\r\n  bottom: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 1000;\r\n  display: -moz-flex;\r\n  display: flex; }\r\n\r\n.preloader.active.hidden {\r\n    display: none; }\r\n\r\n.loading-mask {\r\n  background-color: #FA6862;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 20%;\r\n  transition: all 0.6s cubic-bezier(0.61, 0, 0.6, 1) 0s; }\r\n\r\n.loading-mask:nth-child(2) {\r\n    left: 20%;\r\n    transition-delay: 0.1s; }\r\n\r\n.loading-mask:nth-child(3) {\r\n    left: 40%;\r\n    transition-delay: 0.2s; }\r\n\r\n.loading-mask:nth-child(4) {\r\n    left: 60%;\r\n    transition-delay: 0.3s; }\r\n\r\n.loading-mask:nth-child(5) {\r\n    left: 80%;\r\n    transition-delay: 0.4s; }\r\n\r\n.preloader.active.done {\r\n  z-index: 0; }\r\n\r\n.preloader.active .loading-mask {\r\n  width: 0; }\r\n\r\n/*------------------------------------------------\r\n\tStart Styling\r\n-------------------------------------------------*/\r\n\r\n.mt20{margin-top:20px;}\r\n\r\n.site-wrapper {\r\n  border-top: 4px solid #c8ff00; }\r\n\r\n.page-close {\r\n  font-size: 30px;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 30px;\r\n  z-index: 100; }\r\n\r\n.page-title {\r\n  margin-bottom: 75px; }\r\n\r\n.page-title img {\r\n    margin-bottom: 20px; }\r\n\r\n.page-title h2 {\r\n    font-size: 68px;\r\n    margin-bottom: 25px;\r\n    position: relative;\r\n    z-index: 0;\r\n    font-weight: 900;\r\n    text-transform: uppercase; }\r\n\r\n.page-title p {\r\n    font-size: 16px; }\r\n\r\n.page-title .title-bg {\r\n    color: rgba(48, 30, 30, 0.973);\r\n    font-size: 158px;\r\n    left: 0;\r\n    letter-spacing: 10px;\r\n    line-height: 0.7;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 50%;\r\n    z-index: -1;\r\n    transform: translateY(-50%); }\r\n\r\n.section-title {\r\n  margin-bottom: 20px; }\r\n\r\n.section-title h3 {\r\n    display: inline-block;\r\n    position: relative; }\r\n\r\n.section-title h3::before, .section-title h3::after {\r\n      content: \"\";\r\n      height: 2px;\r\n      position: absolute;\r\n      bottom: 8px;\r\n      left: calc(100% + 14px); }\r\n\r\n.section-title h3::before {\r\n      background-color: #1e2530;\r\n      width: 96px;\r\n      bottom: 14px; }\r\n\r\n.section-title h3::after {\r\n      background-color: #FA6862;\r\n      width: 73px; }\r\n\r\n.section-title.light h3 {\r\n    color: #fff; }\r\n\r\n.section-title.light h3::before {\r\n      background-color: #fff; }\r\n\r\n.page-nav {\r\n  bottom: 40px;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0; }\r\n\r\n.page-nav span {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 0.9;\r\n    text-transform: uppercase; }\r\n\r\n/*------------------------------------------------\r\n    Home Page\r\n-------------------------------------------------*/\r\n\r\n.hexagon-item:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.page-home {\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  vertical-align: middle; }\r\n\r\n.page-home .overlay {\r\n    background-color: rgba(0, 76, 255, 0.144);\r\n}\r\n\r\n/* End of container */\r\n\r\n.hexagon-item {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  height: 173.20508px;\r\n  float: left;\r\n  margin-left: -29px;\r\n  z-index: 0;\r\n  position: relative;\r\n  transform: rotate(30deg); }\r\n\r\n.hexagon-item:first-child {\r\n    margin-left: 0; }\r\n\r\n.hexagon-item:hover {\r\n    z-index: 1; }\r\n\r\n.hexagon-item:hover .hex-item:last-child {\r\n      opacity: 1;\r\n      transform: scale(1.3); }\r\n\r\n.hexagon-item:hover .hex-item:first-child {\r\n      opacity: 1;\r\n      transform: scale(1.2); }\r\n\r\n.hexagon-item:hover .hex-item:first-child div:before,\r\n      .hexagon-item:hover .hex-item:first-child div:after {\r\n        height: 5px; }\r\n\r\n.hexagon-item:hover .hex-item div::before,\r\n    .hexagon-item:hover .hex-item div::after {\r\n      background-color: #d9ff00; }\r\n\r\n.hexagon-item:hover .hex-content svg {\r\n      transform: scale(0.97); }\r\n\r\n.page-home .hexagon-item:nth-last-child(1),\r\n.page-home .hexagon-item:nth-last-child(2),\r\n.page-home .hexagon-item:nth-last-child(3) {\r\n  transform: rotate(30deg) translate(87px, -80px); }\r\n\r\n.hex-item {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50px;\r\n  width: 100px;\r\n  height: 173.20508px; }\r\n\r\n.hex-item:first-child {\r\n    z-index: 0;\r\n    transform: scale(0.9);\r\n    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }\r\n\r\n.hex-item:last-child {\r\n    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);\r\n    z-index: 1; }\r\n\r\n.hex-item div {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100px;\r\n    height: 173.20508px;\r\n    transform-origin: center center; }\r\n\r\n.hex-item div::before, .hex-item div::after {\r\n      background-color: #d9ff00;\r\n      content: \"\";\r\n      position: absolute;\r\n      width: 100%;\r\n      height: 3px;\r\n      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s; }\r\n\r\n.hex-item div:before {\r\n      top: 0; }\r\n\r\n.hex-item div:after {\r\n      bottom: 0; }\r\n\r\n.hex-item div:nth-child(1) {\r\n      transform: rotate(0deg); }\r\n\r\n.hex-item div:nth-child(2) {\r\n      transform: rotate(60deg); }\r\n\r\n.hex-item div:nth-child(3) {\r\n      transform: rotate(120deg); }\r\n\r\n.hex-content {\r\n\r\n  display: block;\r\n  height: 180px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  text-align: center;\r\n  transform: rotate(-30deg);\r\n  width: 156px;\r\n  color: #fff;\r\ntext-shadow:\r\n  0 0 5px rgb(179, 255, 0),\r\n  0 0 10px rgb(157, 255, 0),\r\n  0 0 20px rgb(166, 255, 0),\r\n  0 0 40px rgb(164, 250, 4);\r\n }\r\n\r\n.hex-content .hex-content-inner {\r\n    left: 50%;\r\n    margin: -3px 0 0 2px;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%); }\r\n\r\n.hex-content .icon {\r\n    display: block;\r\n    font-size: 36px;\r\n    line-height: 30px;\r\n    margin-bottom: 11px; }\r\n\r\n.hex-content .title {\r\n    display: block;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    line-height: 24px;\r\n    text-transform: uppercase; }\r\n\r\n.hex-content svg {\r\n    left: -7px;\r\n    position: absolute;\r\n    top: -13px;\r\n    transform: scale(0.87);\r\n    z-index: -1;\r\n    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s; }\r\n\r\n.hex-content:hover {\r\n    color: #fff; }\r\n\r\n.page-home .hexagon-item:nth-last-child(1), .page-home .hexagon-item:nth-last-child(2), .page-home .hexagon-item:nth-last-child(3) {\r\n    transform: rotate(30deg) translate(87px, -80px);\r\n}\r\n\r\n/*------------------------------------------------\r\n    Welcome Page\r\n-------------------------------------------------*/\r\n\r\n.author-image-large {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0; }\r\n\r\n.author-image-large img {\r\n    height: calc(100vh - 4px); }\r\n\r\n@media (min-width: 1200px)\r\n{\r\n.col-lg-offset-2 {\r\n    margin-left: 16.66666667%;\r\n}\r\n}\r\n\r\n@media (min-width: 1200px)\r\n{\r\n.col-lg-8 {\r\n    width: 66.66666667%;\r\n}\r\n}\r\n\r\n.hexagon-item:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.pt-table.desktop-768 .pt-tablecell {\r\n    padding-bottom: 110px;\r\n    padding-top: 60px;\r\n}\r\n\r\n.hexagon-item:hover .icon i\r\n{\r\n  color:#ff0037;\r\n  transition:0.6s;\r\n  \r\n}\r\n\r\n.hexagon-item:hover .title\r\n{\r\n  -webkit-animation: focus-in-contract 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n\t        animation: focus-in-contract 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n/***************************/\r\n\r\n@-webkit-keyframes focus-in-contract {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    filter: blur(12px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    filter: blur(0px);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes focus-in-contract {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    filter: blur(12px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    filter: blur(0px);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767px)\r\n{\r\n.hexagon-item {\r\n    float: none;\r\n    margin: 0 auto 50px;\r\n}\r\n  .hexagon-item:first-child {\r\n    margin-left: auto;\r\n}\r\n  \r\n  .page-home .hexagon-item:nth-last-child(1), .page-home .hexagon-item:nth-last-child(2), .page-home .hexagon-item:nth-last-child(3) {\r\n    transform: rotate(30deg) translate(0px, 0px);\r\n}\r\n  \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUU7O0FBRWxCO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzTUFBc007QUFDMU07O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O01BRU0seUJBQXlCO0lBQzNCLGVBQWU7SUFDZix1SUFBdUk7SUFDdkksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHdDQUF3QztDQUMzQzs7OzsyQkFJMEI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0VBSWQsNEJBQTRCLEVBQUU7O0FBQzlCO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlLEVBQUU7O0FBRXJCOztFQUVFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLG1CQUFtQixFQUFFOztBQUNyQjtJQUNFLGdCQUFnQixFQUFFOztBQUV0Qjs7RUFFRTs7QUFDRjtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBRTs7QUFFM0I7RUFDRSx5QkFBeUI7RUFDekIsV0FBVyxFQUFFOztBQUVmOztFQUVFOztBQUNGOztFQUVFLFVBQVU7RUFDVixjQUFjLEVBQUU7O0FBRWxCOztFQUVFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsY0FBYyxFQUFFOztBQUVsQjs7RUFFRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWMsRUFBRTs7QUFFbEI7O0VBRUUsVUFBVTtFQUNWLGNBQWMsRUFBRTs7QUFFbEI7O0VBRUUsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBSUUsNEJBQTRCLEVBQUU7O0FBQzlCO0lBQ0UsZUFBZSxFQUFFOztBQUVyQjtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUIsRUFBRTs7QUFDM0I7SUFDRSx5QkFBeUIsRUFBRTs7QUFFL0I7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVksRUFBRTs7QUFFaEI7O0VBRUU7O0FBQ0Y7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFFOztBQUVsQjtFQUNFLFdBQVcsRUFBRTs7QUFFZjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBR1gseUJBQXlCLEVBQUU7O0FBRTdCO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFFOztBQUUxQjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZLEVBQUU7O0FBRWhCO0VBQ0Usa0JBQWtCLEVBQUU7O0FBRXRCOztFQUVFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFFOztBQUNqQjtJQUNFLGVBQWU7SUFDZixnQkFBZ0IsRUFBRTs7QUFFdEI7RUFHRSxrQkFBa0I7RUFFbEIsYUFBYSxFQUFFOztBQUVqQjtFQUlFLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBRTs7QUFFdkI7RUFJRSxtQ0FBbUM7RUFDbkMsOEJBQThCLEVBQUU7O0FBRWxDO0VBQ0UsOEJBQThCLEVBQUU7O0FBRWxDO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxlQUFlO0VBQ2YsUUFBUTtFQUNSLE1BQU07RUFDTixhQUFhO0VBR2Isa0JBQWtCO0VBRWxCLGFBQWEsRUFBRTs7QUFDZjtJQUNFLGFBQWEsRUFBRTs7QUFFbkI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFJVixxREFBcUQsRUFBRTs7QUFDdkQ7SUFDRSxTQUFTO0lBSVQsc0JBQXNCLEVBQUU7O0FBQzFCO0lBQ0UsU0FBUztJQUlULHNCQUFzQixFQUFFOztBQUMxQjtJQUNFLFNBQVM7SUFJVCxzQkFBc0IsRUFBRTs7QUFDMUI7SUFDRSxTQUFTO0lBSVQsc0JBQXNCLEVBQUU7O0FBRTVCO0VBQ0UsVUFBVSxFQUFFOztBQUVkO0VBQ0UsUUFBUSxFQUFFOztBQUVaOztrREFFa0Q7O0FBQ2xELE1BQU0sZUFBZSxDQUFDOztBQUN0QjtFQUNFLDZCQUE2QixFQUFFOztBQUVqQztFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZLEVBQUU7O0FBRWhCO0VBQ0UsbUJBQW1CLEVBQUU7O0FBQ3JCO0lBQ0UsbUJBQW1CLEVBQUU7O0FBQ3ZCO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5QkFBeUIsRUFBRTs7QUFDN0I7SUFDRSxlQUFlLEVBQUU7O0FBQ25CO0lBQ0UsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1Asb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBS1gsMkJBQTJCLEVBQUU7O0FBRWpDO0VBQ0UsbUJBQW1CLEVBQUU7O0FBQ3JCO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFFOztBQUNwQjtNQUNFLFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFdBQVc7TUFHWCx1QkFBdUIsRUFBRTs7QUFDM0I7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLFlBQVksRUFBRTs7QUFDaEI7TUFDRSx5QkFBeUI7TUFDekIsV0FBVyxFQUFFOztBQUNqQjtJQUNFLFdBQVcsRUFBRTs7QUFDYjtNQUNFLHNCQUFzQixFQUFFOztBQUU5QjtFQUNFLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFFBQVEsRUFBRTs7QUFDVjtJQUNFLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUIsRUFBRTs7QUFFL0I7O2tEQUVrRDs7QUFFbEQ7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUU7O0FBQ3hCO0lBQ0UseUNBQXlDO0FBQzdDOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFLbEIsd0JBQXdCLEVBQUU7O0FBQzFCO0lBQ0UsY0FBYyxFQUFFOztBQUNsQjtJQUNFLFVBQVUsRUFBRTs7QUFDWjtNQUNFLFVBQVU7TUFLVixxQkFBcUIsRUFBRTs7QUFDekI7TUFDRSxVQUFVO01BS1YscUJBQXFCLEVBQUU7O0FBQ3ZCOztRQUVFLFdBQVcsRUFBRTs7QUFDakI7O01BRUUseUJBQXlCLEVBQUU7O0FBQzdCO01BS0Usc0JBQXNCLEVBQUU7O0FBRTlCOzs7RUFPRSwrQ0FBK0MsRUFBRTs7QUFFbkQ7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CLEVBQUU7O0FBQ3JCO0lBQ0UsVUFBVTtJQUtWLHFCQUFxQjtJQUlyQix1REFBdUQsRUFBRTs7QUFDM0Q7SUFDRSxtREFBbUQ7SUFDbkQsVUFBVSxFQUFFOztBQUNkO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLG1CQUFtQjtJQUtuQiwrQkFBK0IsRUFBRTs7QUFDakM7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUlYLDBEQUEwRCxFQUFFOztBQUM5RDtNQUNFLE1BQU0sRUFBRTs7QUFDVjtNQUNFLFNBQVMsRUFBRTs7QUFDYjtNQUtFLHVCQUF1QixFQUFFOztBQUMzQjtNQUtFLHdCQUF3QixFQUFFOztBQUM1QjtNQUtFLHlCQUF5QixFQUFFOztBQUdqQzs7RUFFRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOzs7OzJCQUkyQjtDQUMxQjs7QUFDQztJQUNFLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFLUixnQ0FBZ0MsRUFBRTs7QUFDcEM7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBRTs7QUFDdkI7SUFDRSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFFOztBQUM3QjtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixXQUFXO0lBSVgsMERBQTBELEVBQUU7O0FBQzlEO0lBQ0UsV0FBVyxFQUFFOztBQUVqQjtJQUtJLCtDQUErQztBQUNuRDs7QUFDQTs7a0RBRWtEOztBQUNsRDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTSxFQUFFOztBQUNSO0lBR0UseUJBQXlCLEVBQUU7O0FBRy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7O0FBRUE7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUlBOztFQUVFLGFBQWE7RUFDYixlQUFlOztBQUVqQjs7QUFHQTs7RUFFRSx1RkFBdUY7U0FDaEYsK0VBQStFO0FBQ3hGOztBQUNBLDRCQUE0Qjs7QUFFNUI7RUFDRTtJQUNFLG1CQUFtQjtJQUVYLGtCQUFrQjtJQUMxQixVQUFVO0VBQ1o7RUFDQTtJQUVVLGlCQUFpQjtJQUN6QixVQUFVO0VBQ1o7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBRVgsa0JBQWtCO0lBQzFCLFVBQVU7RUFDWjtFQUNBO0lBRVUsaUJBQWlCO0lBQ3pCLFVBQVU7RUFDWjtBQUNGOztBQU1BOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtFQUNFO0lBQ0UsaUJBQWlCO0FBQ3JCOztFQUVFO0lBS0UsNENBQTRDO0FBQ2hEOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgQmFza2VydmlsbGVcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmYTtcclxuICBjb2xvcjogI2FiYWJhYjsgfVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5MGEyMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uaGVhZGluZy1wYWdlXHJcbntcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogNDNweDtcclxuICAgIGZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggcmdiKDUwLCA1MSwgNDcpO1xyXG5cdHRleHQtc2hhZG93OlxyXG5cdFx0MCAwIDVweCByZ2IoMTc5LCAyNTUsIDApLFxyXG5cdFx0MCAwIDEwcHggcmdiKDE1NywgMjU1LCAwKSxcclxuXHRcdDAgMCAyMHB4IHJnYigxNjYsIDI1NSwgMCksXHJcblx0XHQwIDAgNDBweCByZ2IoMTY0LCAyNTAsIDQpO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzOyB9XHJcbiAgYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2FiYWJhYjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTsgfVxyXG5cclxuaDEsIGgyLCBoMyxcclxuaDQsIGg1LCBoNiB7XHJcbiAgY29sb3I6ICMxZTI1MzA7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7IH1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cclxuICBwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuLypcclxuICogU2VsZWN0aW9uIGNvbG9yXHJcbiAqL1xyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2ODYyO1xyXG4gIGNvbG9yOiByZ2IoMCwgMjUwLCAxMTIpOyB9XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNjg2MjtcclxuICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLypcclxuICogIFJlc2V0IGJvb3RzdHJhcCdzIGRlZmF1bHQgc3R5bGVcclxuICovXHJcbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjb2xvcjogaW5oZXJpdDsgfVxyXG5cclxuLmZvcm0tY29udHJvbDotbW96LXBsYWNlaG9sZGVyLFxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogRmlyZWZveCAxOC0gKi9cclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiBpbmhlcml0OyB9XHJcblxyXG4uZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyLFxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgb3BhY2l0eTogMTtcclxuICBjb2xvcjogaW5oZXJpdDsgfVxyXG5cclxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IGluaGVyaXQ7IH1cclxuXHJcbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCxcclxudGV4dGFyZWEsIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogNDAwOyB9XHJcblxyXG4uYnRuIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsgfVxyXG4gIC5idG46aG92ZXIsIC5idG46Zm9jdXMsIC5idG46YWN0aXZlOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAgbm9uZTsgfVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2ODYyO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAwIDQycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlLCAuYnRuLXByaW1hcnk6YWN0aXZlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTQyM2E7IH1cclxuXHJcbi5idG4tYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDdkOGRiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA3cHg7IH1cclxuXHJcbi8qXHJcbiAqICBDU1MgSGVscGVyIENsYXNzXHJcbiAqL1xyXG4uY2xlYXI6YmVmb3JlLCAuY2xlYXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlOyB9XHJcblxyXG4uY2xlYXI6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoOyB9XHJcblxyXG4ucHQtdGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMHZoIC0gNHB4KTtcclxuICBoZWlnaHQ6IC1tb3otY2FsYygxMDB2aCAtIDRweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHB4KTsgfVxyXG5cclxuLnB0LXRhYmxlY2VsbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTsgfVxyXG5cclxuLnJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuXHJcbi5wcmltYXJ5LFxyXG4ubGluazpob3ZlciB7XHJcbiAgY29sb3I6ICNGQTY4NjI7IH1cclxuXHJcbi5uby1ndXR0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDsgfVxyXG4gIC5uby1ndXR0ZXIgPiBbY2xhc3NePVwiY29sLVwiXSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwOyB9XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4OyB9XHJcblxyXG4uZmxleC1taWRkbGUge1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XHJcblxyXG4ubmljZXNjcm9sbC1jdXJzb3JzIHtcclxuICBiYWNrZ3JvdW5kOiAjRkE2ODYyICFpbXBvcnRhbnQ7IH1cclxuXHJcbi5wcmVsb2FkZXIge1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7IH1cclxuICAucHJlbG9hZGVyLmFjdGl2ZS5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmxvYWRpbmctbWFzayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNjg2MjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMC42MSwgMCwgMC42LCAxKSAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjYxLCAwLCAwLjYsIDEpIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjYxLCAwLCAwLjYsIDEpIDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjYxLCAwLCAwLjYsIDEpIDBzOyB9XHJcbiAgLmxvYWRpbmctbWFzazpudGgtY2hpbGQoMikge1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7IH1cclxuICAubG9hZGluZy1tYXNrOm50aC1jaGlsZCgzKSB7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4yczsgfVxyXG4gIC5sb2FkaW5nLW1hc2s6bnRoLWNoaWxkKDQpIHtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzOyB9XHJcbiAgLmxvYWRpbmctbWFzazpudGgtY2hpbGQoNSkge1xyXG4gICAgbGVmdDogODAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC40cztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7IH1cclxuXHJcbi5wcmVsb2FkZXIuYWN0aXZlLmRvbmUge1xyXG4gIHotaW5kZXg6IDA7IH1cclxuXHJcbi5wcmVsb2FkZXIuYWN0aXZlIC5sb2FkaW5nLW1hc2sge1xyXG4gIHdpZHRoOiAwOyB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFN0YXJ0IFN0eWxpbmdcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5tdDIwe21hcmdpbi10b3A6MjBweDt9XHJcbi5zaXRlLXdyYXBwZXIge1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjYzhmZjAwOyB9XHJcblxyXG4ucGFnZS1jbG9zZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzBweDtcclxuICB0b3A6IDMwcHg7XHJcbiAgei1pbmRleDogMTAwOyB9XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzVweDsgfVxyXG4gIC5wYWdlLXRpdGxlIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbiAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG4gIC5wYWdlLXRpdGxlIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyB9XHJcbiAgLnBhZ2UtdGl0bGUgLnRpdGxlLWJnIHtcclxuICAgIGNvbG9yOiByZ2JhKDQ4LCAzMCwgMzAsIDAuOTczKTtcclxuICAgIGZvbnQtc2l6ZTogMTU4cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMC43O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbiAgLnNlY3Rpb24tdGl0bGUgaDMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiAgICAuc2VjdGlvbi10aXRsZSBoMzo6YmVmb3JlLCAuc2VjdGlvbi10aXRsZSBoMzo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDhweDtcclxuICAgICAgbGVmdDogLXdlYmtpdC1jYWxjKDEwMCUgKyAxNHB4KTtcclxuICAgICAgbGVmdDogLW1vei1jYWxjKDEwMCUgKyAxNHB4KTtcclxuICAgICAgbGVmdDogY2FsYygxMDAlICsgMTRweCk7IH1cclxuICAgIC5zZWN0aW9uLXRpdGxlIGgzOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyNTMwO1xyXG4gICAgICB3aWR0aDogOTZweDtcclxuICAgICAgYm90dG9tOiAxNHB4OyB9XHJcbiAgICAuc2VjdGlvbi10aXRsZSBoMzo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2ODYyO1xyXG4gICAgICB3aWR0aDogNzNweDsgfVxyXG4gIC5zZWN0aW9uLXRpdGxlLmxpZ2h0IGgzIHtcclxuICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgICAuc2VjdGlvbi10aXRsZS5saWdodCBoMzo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG5cclxuLnBhZ2UtbmF2IHtcclxuICBib3R0b206IDQwcHg7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7IH1cclxuICAucGFnZS1uYXYgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMC45O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEhvbWUgUGFnZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5oZXhhZ29uLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5wYWdlLWhvbWUge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cclxuICAucGFnZS1ob21lIC5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNzYsIDI1NSwgMC4xNDQpO1xyXG59XHJcblxyXG4vKiBFbmQgb2YgY29udGFpbmVyICovXHJcbi5oZXhhZ29uLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNzMuMjA1MDhweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogLTI5cHg7XHJcbiAgei1pbmRleDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyB9XHJcbiAgLmhleGFnb24taXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxyXG4gIC5oZXhhZ29uLWl0ZW06aG92ZXIge1xyXG4gICAgei1pbmRleDogMTsgfVxyXG4gICAgLmhleGFnb24taXRlbTpob3ZlciAuaGV4LWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IH1cclxuICAgIC5oZXhhZ29uLWl0ZW06aG92ZXIgLmhleC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxyXG4gICAgICAuaGV4YWdvbi1pdGVtOmhvdmVyIC5oZXgtaXRlbTpmaXJzdC1jaGlsZCBkaXY6YmVmb3JlLFxyXG4gICAgICAuaGV4YWdvbi1pdGVtOmhvdmVyIC5oZXgtaXRlbTpmaXJzdC1jaGlsZCBkaXY6YWZ0ZXIge1xyXG4gICAgICAgIGhlaWdodDogNXB4OyB9XHJcbiAgICAuaGV4YWdvbi1pdGVtOmhvdmVyIC5oZXgtaXRlbSBkaXY6OmJlZm9yZSxcclxuICAgIC5oZXhhZ29uLWl0ZW06aG92ZXIgLmhleC1pdGVtIGRpdjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlmZjAwOyB9XHJcbiAgICAuaGV4YWdvbi1pdGVtOmhvdmVyIC5oZXgtY29udGVudCBzdmcge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7IH1cclxuXHJcbi5wYWdlLWhvbWUgLmhleGFnb24taXRlbTpudGgtbGFzdC1jaGlsZCgxKSxcclxuLnBhZ2UtaG9tZSAuaGV4YWdvbi1pdGVtOm50aC1sYXN0LWNoaWxkKDIpLFxyXG4ucGFnZS1ob21lIC5oZXhhZ29uLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSg4N3B4LCAtODBweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDg3cHgsIC04MHB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSg4N3B4LCAtODBweCk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSg4N3B4LCAtODBweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSg4N3B4LCAtODBweCk7IH1cclxuXHJcbi5oZXgtaXRlbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDE3My4yMDUwOHB4OyB9XHJcbiAgLmhleC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XHJcbiAgLmhleC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xyXG4gICAgei1pbmRleDogMTsgfVxyXG4gIC5oZXgtaXRlbSBkaXYge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTczLjIwNTA4cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyOyB9XHJcbiAgICAuaGV4LWl0ZW0gZGl2OjpiZWZvcmUsIC5oZXgtaXRlbSBkaXY6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZmYwMDtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSAwcztcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIDBzO1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIDBzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIDBzOyB9XHJcbiAgICAuaGV4LWl0ZW0gZGl2OmJlZm9yZSB7XHJcbiAgICAgIHRvcDogMDsgfVxyXG4gICAgLmhleC1pdGVtIGRpdjphZnRlciB7XHJcbiAgICAgIGJvdHRvbTogMDsgfVxyXG4gICAgLmhleC1pdGVtIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgLmhleC1pdGVtIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XHJcbiAgICAuaGV4LWl0ZW0gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTsgfVxyXG5cclxuXHJcbi5oZXgtY29udGVudCB7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xyXG4gIHdpZHRoOiAxNTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxudGV4dC1zaGFkb3c6XHJcbiAgMCAwIDVweCByZ2IoMTc5LCAyNTUsIDApLFxyXG4gIDAgMCAxMHB4IHJnYigxNTcsIDI1NSwgMCksXHJcbiAgMCAwIDIwcHggcmdiKDE2NiwgMjU1LCAwKSxcclxuICAwIDAgNDBweCByZ2IoMTY0LCAyNTAsIDQpO1xyXG4gfVxyXG4gIC5oZXgtY29udGVudCAuaGV4LWNvbnRlbnQtaW5uZXIge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luOiAtM3B4IDAgMCAycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxyXG4gIC5oZXgtY29udGVudCAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDsgfVxyXG4gIC5oZXgtY29udGVudCAudGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuICAuaGV4LWNvbnRlbnQgc3ZnIHtcclxuICAgIGxlZnQ6IC03cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xM3B4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIDBzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIDBzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSAwcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgMHM7IH1cclxuICAuaGV4LWNvbnRlbnQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7IH1cclxuXHJcbi5wYWdlLWhvbWUgLmhleGFnb24taXRlbTpudGgtbGFzdC1jaGlsZCgxKSwgLnBhZ2UtaG9tZSAuaGV4YWdvbi1pdGVtOm50aC1sYXN0LWNoaWxkKDIpLCAucGFnZS1ob21lIC5oZXhhZ29uLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDg3cHgsIC04MHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSg4N3B4LCAtODBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSg4N3B4LCAtODBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDg3cHgsIC04MHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKSB0cmFuc2xhdGUoODdweCwgLTgwcHgpO1xyXG59XHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBXZWxjb21lIFBhZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5hdXRob3ItaW1hZ2UtbGFyZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7IH1cclxuICAuYXV0aG9yLWltYWdlLWxhcmdlIGltZyB7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDRweCk7XHJcbiAgICBoZWlnaHQ6IC1tb3otY2FsYygxMDB2aCAtIDRweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cHgpOyB9XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG4uY29sLWxnLW9mZnNldC0yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG4uY29sLWxnLTgge1xyXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcclxufVxyXG59XHJcblxyXG4uaGV4YWdvbi1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucHQtdGFibGUuZGVza3RvcC03NjggLnB0LXRhYmxlY2VsbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuXHJcblxyXG4uaGV4YWdvbi1pdGVtOmhvdmVyIC5pY29uIGlcclxue1xyXG4gIGNvbG9yOiNmZjAwMzc7XHJcbiAgdHJhbnNpdGlvbjowLjZzO1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmhleGFnb24taXRlbTpob3ZlciAudGl0bGVcclxue1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmb2N1cy1pbi1jb250cmFjdCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuXHQgICAgICAgIGFuaW1hdGlvbjogZm9jdXMtaW4tY29udHJhY3QgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmb2N1cy1pbi1jb250cmFjdCB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmb2N1cy1pbi1jb250cmFjdCB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxyXG57XHJcbi5oZXhhZ29uLWl0ZW0ge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xyXG59XHJcbiAgLmhleGFnb24taXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4gIFxyXG4gIC5wYWdlLWhvbWUgLmhleGFnb24taXRlbTpudGgtbGFzdC1jaGlsZCgxKSwgLnBhZ2UtaG9tZSAuaGV4YWdvbi1pdGVtOm50aC1sYXN0LWNoaWxkKDIpLCAucGFnZS1ob21lIC5oZXhhZ29uLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSgwcHgsIDBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZSgwcHgsIDBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKSB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG59XHJcbiAgXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"site-wrapper\">\n  <div class=\"pt-table desktop-768\">\n    <div class=\"pt-tablecell page-home relative\" style=\"background-image: url(https://wallpapercave.com/wp/wp3102515.jpg);\n    background-position: center;\n    background-size: cover;\">\n    \n                    <div class=\"overlay\"></div>\n                    <button routerLink=\"/login\" (click)=\"salir()\"  style=\"position: absolute;top: 5%;\" type=\"button\" class=\"btn btn-outline-success\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Cerrar Secion</button>\n                        \n\n                    <div class=\"container\">\n                        \n                      \n                        <div class=\"row\">\n                            \n                          \n                            <div class=\"col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8\">\n                              \n                                <div class=\"page-title  home text-center\">\n                                  <span class=\"heading-page\"> Bienvenidos al menú de Radio \"Hit 91.3\"\n                                  </span>\n                                 \n                                </div>\n\n                                <div class=\"hexagon-menu clear\">\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/usuario\"  class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-universal-access\"></i>\n                                                </span>\n                                                <span class=\"title\">Usuario</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/activo\" class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-bullseye\"></i>\n                                                </span>\n                                                <span class=\"title\">Inventario</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/programa\"  class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-braille\"></i>\n                                                </span>\n                                                <span class=\"title\">Programa</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>    \n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/planificacionp\" class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-id-badge\"></i>\n                                                </span>\n                                                <span class=\"title\">Planificacion de Emision</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a  routerLink=\"/planificacion\" class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-life-ring\"></i>\n                                                </span>\n                                                <span class=\"title\">Entrevistados</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/programacion\" class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-clipboard\"></i>\n                                                </span>\n                                                <span class=\"title\">Horario</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/venta\" class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-map-signs\"></i>\n                                                </span>\n                                                <span class=\"title\">Ventas</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/transmitir\" class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-map-signs\"></i>\n                                                </span>\n                                                <span class=\"title\">Transmitir</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                    <div class=\"hexagon-item\">\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"hex-item\">\n                                            <div></div>\n                                            <div></div>\n                                            <div></div>\n                                        </div>\n                                        <a routerLink=\"/radio\" class=\"hex-content\">\n                                            <span class=\"hex-content-inner\">\n                                                <span class=\"icon\">\n                                                    <i class=\"fa fa-map-signs\"></i>\n                                                </span>\n                                                <span class=\"title\">Radio</span>\n                                            </span>\n                                            <svg viewBox=\"0 0 173.20508075688772 200\" height=\"200\" width=\"174\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z\" fill=\"#1e2530\"></path></svg>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n  </main>\n\n\n\n  "

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var URL = 'http://localhost:3000/producto/subir';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.salir = function () {
        localStorage.removeItem('token');
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/Programacion.ts":
/*!****************************************!*\
  !*** ./src/app/models/Programacion.ts ***!
  \****************************************/
/*! exports provided: Programacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Programacion", function() { return Programacion; });
var Programacion = /** @class */ (function () {
    function Programacion(dia, estado, idprograma, idusuario, _id) {
        this.dia = dia;
        this.estado = estado;
        this.idprograma = idprograma;
        this.idusuario = idusuario;
        this._id = _id;
    }
    return Programacion;
}());



/***/ }),

/***/ "./src/app/models/activo.ts":
/*!**********************************!*\
  !*** ./src/app/models/activo.ts ***!
  \**********************************/
/*! exports provided: Activo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activo", function() { return Activo; });
var Activo = /** @class */ (function () {
    function Activo(codigo, objeto, descripsion, observaciones, condicion, estado, _id) {
        this.codigo = codigo;
        this.objeto = objeto;
        this.descripsion = descripsion;
        this.observaciones = observaciones;
        this.condicion = condicion;
        this.estado = estado;
        this._id = _id;
    }
    return Activo;
}());



/***/ }),

/***/ "./src/app/models/cliente.ts":
/*!***********************************!*\
  !*** ./src/app/models/cliente.ts ***!
  \***********************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente(nombre, appaterno, apmaterno, ci, nit, telefono, direccion, estado, _id) {
        this.nombre = nombre;
        this.appaterno = appaterno;
        this.apmaterno = apmaterno;
        this.ci = ci;
        this.nit = nit;
        this.telefono = telefono;
        this.direccion = direccion;
        this.estado = estado;
        this._id = _id;
    }
    return Cliente;
}());



/***/ }),

/***/ "./src/app/models/planificacion.ts":
/*!*****************************************!*\
  !*** ./src/app/models/planificacion.ts ***!
  \*****************************************/
/*! exports provided: Planificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planificacion", function() { return Planificacion; });
var Planificacion = /** @class */ (function () {
    function Planificacion(date, entrevistado, descripcionevento, canalprincipal, estado, idprograma, idusuario, _id) {
        this.date = date;
        this.entrevistado = entrevistado;
        this.descripcionevento = descripcionevento;
        this.canalprincipal = canalprincipal;
        this.estado = estado;
        this.idprograma = idprograma;
        this.idusuario = idusuario;
        this._id = _id;
    }
    return Planificacion;
}());



/***/ }),

/***/ "./src/app/models/planificacionp.ts":
/*!******************************************!*\
  !*** ./src/app/models/planificacionp.ts ***!
  \******************************************/
/*! exports provided: Planificacionp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planificacionp", function() { return Planificacionp; });
var Planificacionp = /** @class */ (function () {
    function Planificacionp(date, tema1, puntos1, tema2, puntos2, tema3, puntos3, estado, idprograma, idplanificacion, idusuario, _id) {
        this.date = date;
        this.tema1 = tema1;
        this.puntos1 = puntos1;
        this.tema2 = tema2;
        this.puntos2 = puntos2;
        this.tema3 = tema3;
        this.puntos3 = puntos3;
        this.estado = estado;
        this.idprograma = idprograma;
        this.idplanificacion = idplanificacion;
        this.idusuario = idusuario;
        this._id = _id;
    }
    return Planificacionp;
}());



/***/ }),

/***/ "./src/app/models/programa.ts":
/*!************************************!*\
  !*** ./src/app/models/programa.ts ***!
  \************************************/
/*! exports provided: Programa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Programa", function() { return Programa; });
var Programa = /** @class */ (function () {
    function Programa(nombreprograma, genero, horainicio, horafin, estado, idusuario, _id) {
        this.nombreprograma = nombreprograma;
        this.genero = genero;
        this.horainicio = horainicio;
        this.horafin = horafin;
        this.estado = estado;
        this.idusuario = idusuario;
        this._id = _id;
    }
    return Programa;
}());



/***/ }),

/***/ "./src/app/models/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/models/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(codigousuario, nombre, appaterno, apmaterno, telefono, direccion, cedula, cargo, login, password, estado, _id) {
        this.codigousuario = codigousuario;
        this.nombre = nombre;
        this.appaterno = appaterno;
        this.apmaterno = apmaterno;
        this.telefono = telefono;
        this.direccion = direccion;
        this.cedula = cedula;
        this.cargo = cargo;
        this.login = login;
        this.password = password;
        this.estado = estado;
        this._id = _id;
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/models/venta.ts":
/*!*********************************!*\
  !*** ./src/app/models/venta.ts ***!
  \*********************************/
/*! exports provided: Venta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Venta", function() { return Venta; });
var Venta = /** @class */ (function () {
    function Venta(idcliente, razonsocial, fecha, idusuario, total, estado, detalle, _id) {
        this.idcliente = idcliente;
        this.razonsocial = razonsocial;
        this.fecha = fecha;
        this.idusuario = idusuario;
        this.total = total;
        this.estado = estado;
        this.detalle = detalle;
        this._id = _id;
    }
    return Venta;
}());



/***/ }),

/***/ "./src/app/services/activo.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/activo.service.ts ***!
  \********************************************/
/*! exports provided: ActivoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivoService", function() { return ActivoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ActivoService = /** @class */ (function () {
    function ActivoService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/activo";
    }
    ActivoService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    ActivoService.prototype.nuevo = function (acti) {
        return this.http.post(this.url + '/insertar', acti);
    };
    ActivoService.prototype.editar = function (acti) {
        return this.http.put(this.url + '/editar/' + acti._id, acti);
    };
    ActivoService.prototype.borrar = function (acti) {
        return this.http.delete(this.url + '/borrar/' + acti._id);
    };
    ActivoService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ActivoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActivoService);
    return ActivoService;
}());



/***/ }),

/***/ "./src/app/services/cliente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/cliente";
    }
    ClienteService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    ClienteService.prototype.nuevo = function (cli) {
        return this.http.post(this.url + '/insertar', cli);
    };
    ClienteService.prototype.editar = function (cli) {
        return this.http.put(this.url + '/editar/' + cli._id, cli);
    };
    ClienteService.prototype.borrar = function (cli) {
        return this.http.delete(this.url + '/borrar/' + cli._id);
    };
    ClienteService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ClienteService.prototype.buscarCliente = function (termino) {
        var url = this.url + '/busqueda/' + termino;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (login, pws) {
        console.log(login, pws);
        return this.http.post('http://localhost:3000/users/login', { login: login, password: pws });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/planificacion.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/planificacion.service.ts ***!
  \***************************************************/
/*! exports provided: PlanificacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionService", function() { return PlanificacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PlanificacionService = /** @class */ (function () {
    function PlanificacionService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/planificacion";
    }
    PlanificacionService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    PlanificacionService.prototype.nuevo = function (plani) {
        return this.http.post(this.url + '/insertar', plani);
    };
    PlanificacionService.prototype.editar = function (plani) {
        return this.http.put(this.url + '/editar/' + plani._id, plani);
    };
    PlanificacionService.prototype.borrar = function (plani) {
        return this.http.delete(this.url + '/borrar/' + plani._id);
    };
    PlanificacionService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    PlanificacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlanificacionService);
    return PlanificacionService;
}());



/***/ }),

/***/ "./src/app/services/planificacionp.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/planificacionp.service.ts ***!
  \****************************************************/
/*! exports provided: PlanificacionpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionpService", function() { return PlanificacionpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PlanificacionpService = /** @class */ (function () {
    function PlanificacionpService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/planificacionp";
    }
    PlanificacionpService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    PlanificacionpService.prototype.nuevo = function (planip) {
        return this.http.post(this.url + '/insertar', planip);
    };
    PlanificacionpService.prototype.editar = function (planip) {
        return this.http.put(this.url + '/editar/' + planip._id, planip);
    };
    PlanificacionpService.prototype.borrar = function (planip) {
        return this.http.delete(this.url + '/borrar/' + planip._id);
    };
    PlanificacionpService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    PlanificacionpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlanificacionpService);
    return PlanificacionpService;
}());



/***/ }),

/***/ "./src/app/services/programa.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/programa.service.ts ***!
  \**********************************************/
/*! exports provided: ProgramaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaService", function() { return ProgramaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProgramaService = /** @class */ (function () {
    function ProgramaService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/programa";
    }
    ProgramaService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    ProgramaService.prototype.nuevo = function (prog) {
        return this.http.post(this.url + '/insertar', prog);
    };
    ProgramaService.prototype.editar = function (prog) {
        return this.http.put(this.url + '/editar/' + prog._id, prog);
    };
    ProgramaService.prototype.borrar = function (prog) {
        return this.http.delete(this.url + '/borrar/' + prog._id);
    };
    ProgramaService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ProgramaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProgramaService);
    return ProgramaService;
}());



/***/ }),

/***/ "./src/app/services/programacion.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/programacion.service.ts ***!
  \**************************************************/
/*! exports provided: ProgramacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramacionService", function() { return ProgramacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProgramacionService = /** @class */ (function () {
    function ProgramacionService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/programacion";
    }
    ProgramacionService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    ProgramacionService.prototype.nuevo = function (progr) {
        return this.http.post(this.url + '/insertar', progr);
    };
    ProgramacionService.prototype.editar = function (progr) {
        return this.http.put(this.url + '/editar/' + progr._id, progr);
    };
    ProgramacionService.prototype.borrar = function (progr) {
        return this.http.delete(this.url + '/borrar/' + progr._id);
    };
    ProgramacionService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ProgramacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProgramacionService);
    return ProgramacionService;
}());



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/usuario";
    }
    UsuarioService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    UsuarioService.prototype.nuevo = function (usu) {
        return this.http.post(this.url + '/insertar', usu);
    };
    UsuarioService.prototype.editar = function (usu) {
        return this.http.put(this.url + '/editar/' + usu._id, usu);
    };
    UsuarioService.prototype.borrar = function (usu) {
        return this.http.delete(this.url + '/borrar/' + usu._id);
    };
    UsuarioService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/app/services/venta.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/venta.service.ts ***!
  \*******************************************/
/*! exports provided: VentaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaService", function() { return VentaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var VentaService = /** @class */ (function () {
    function VentaService(http) {
        this.http = http;
        //direccion del servidor
        this.url = "http://localhost:3000/venta";
    }
    VentaService.prototype.listar = function () {
        return this.http.get(this.url + '/lista/'
            + localStorage.getItem('token'));
    };
    VentaService.prototype.nuevo = function (vent) {
        return this.http.post(this.url + '/insertar', vent);
    };
    VentaService.prototype.editar = function (vent) {
        return this.http.put(this.url + '/editar/' + vent._id, vent);
    };
    VentaService.prototype.borrar = function (vent) {
        return this.http.delete(this.url + '/borrar/' + vent._id);
    };
    VentaService.prototype.cargaractivo = function (id) {
        var url = this.url + '/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    VentaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VentaService);
    return VentaService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! O:\borrar\tesis\proycss\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map