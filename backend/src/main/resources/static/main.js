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

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.userService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                console.log(currentUser.role + "fail in " + route.data.roles);
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        console.log("Need log in");
        // not logged in so redirect to login page with the return url{queryParams: {returnUrl: state.url}}
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_interceptors/error-interceptor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_interceptors/error-interceptor.service.ts ***!
  \************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.userService.logout();
                _this.router.navigate(['/login']);
            }
            var error = err.error || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_interceptors/jwt-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/_interceptors/jwt-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(userService) {
        this.userService = userService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.userService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: currentUser.type + " " + currentUser.token,
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_interceptors/loaderInterceptor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_interceptors/loaderInterceptor.service.ts ***!
  \************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_loadingService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loadingService */ "./src/app/services/loadingService.ts");




var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(loadingService) {
        this.loadingService = loadingService;
        this.totalRequests = 0;
    }
    LoadingInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        console.log('caught');
        this.totalRequests++;
        this.loadingService.setLoading(true);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.totalRequests--;
            if (_this.totalRequests == 0) {
                _this.loadingService.setLoading(false);
            }
        }));
    };
    LoadingInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loadingService__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());



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
/* harmony import */ var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/card/card.component */ "./src/app/pages/card/card.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product-detail/detail.component */ "./src/app/pages/product-detail/detail.component.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/order-detail/order-detail.component */ "./src/app/pages/order-detail/order-detail.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/product-list/product.list.component */ "./src/app/pages/product-list/product.list.component.ts");
/* harmony import */ var _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user-edit/user-detail.component */ "./src/app/pages/user-edit/user-detail.component.ts");
/* harmony import */ var _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/product-edit/product-edit.component */ "./src/app/pages/product-edit/product-edit.component.ts");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./enum/Role */ "./src/app/enum/Role.ts");
/* harmony import */ var _pages_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/product-add/product-add.component */ "./src/app/pages/product-add/product-add.component.ts");
/* harmony import */ var _pages_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/category-add/category-add.component */ "./src/app/pages/category-add/category-add.component.ts");
/* harmony import */ var _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/category-edit/category-edit.component */ "./src/app/pages/category-edit/category-edit.component.ts");
/* harmony import */ var _pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/category-list/category.list.component */ "./src/app/pages/category-list/category.list.component.ts");
/* harmony import */ var _pages_statistics_stats_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/statistics/stats.component */ "./src/app/pages/statistics/stats.component.ts");
/* harmony import */ var _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user-list/user.list.component */ "./src/app/pages/user-list/user.list.component.ts");





















var routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: 'product/:id', component: _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"] },
    { path: 'category/:id', component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: 'product', component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: 'category', component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'logout', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'cart', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: 'success', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'order/:id', component: _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'order', component: _pages_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'seller', redirectTo: 'seller/home', pathMatch: 'full' },
    {
        path: 'seller/product',
        component: _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'seller/category',
        component: _pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_18__["CategoryListComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'profile',
        component: _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: 'seller/product/:id/edit',
        component: _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_13__["ProductEditComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'seller/product/add',
        component: _pages_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_15__["ProductAddComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'seller/category/:id/edit',
        component: _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_17__["CategoryEditComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'seller/category/add',
        component: _pages_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_16__["CategoryAddComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'seller/users',
        component: _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["UserListComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'seller/home',
        component: _pages_statistics_stats_component__WEBPACK_IMPORTED_MODULE_19__["StatsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes) //{onSameUrlNavigation: 'reload'}
            ],
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

module.exports = "body {\r\n    background: linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25))\r\n}\r\n\r\n.card-animation {\r\n    -webkit-animation: pulse 2s infinite;\r\n            animation: pulse 2s infinite;\r\n  }\r\n\r\n@-webkit-keyframes pulse {\r\n    0%, 100% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n    50% {\r\n      -webkit-transform: scale(1.1);\r\n              transform: scale(1.1);\r\n    }\r\n  }\r\n\r\n@keyframes pulse {\r\n    0%, 100% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n    50% {\r\n      -webkit-transform: scale(1.1);\r\n              transform: scale(1.1);\r\n    }\r\n  }\r\n\r\n.footer-copyright {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: red;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7Q0FDN0U7O0FBRUQ7SUFDSSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0dBQzlCOztBQUVEO0lBQ0U7TUFDRSw0QkFBb0I7Y0FBcEIsb0JBQW9CO0tBQ3JCO0lBQ0Q7TUFDRSw4QkFBc0I7Y0FBdEIsc0JBQXNCO0tBQ3ZCO0dBQ0Y7O0FBUEQ7SUFDRTtNQUNFLDRCQUFvQjtjQUFwQixvQkFBb0I7S0FDckI7SUFDRDtNQUNFLDhCQUFzQjtjQUF0QixzQkFBc0I7S0FDdkI7R0FDRjs7QUFFRDtJQUNFLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtHQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNDEsIDM5LCAxNyksIHJnYigyNDUsIDE3NSwgMjUpKVxyXG59XHJcblxyXG4uY2FyZC1hbmltYXRpb24ge1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSwgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItY29weXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-spinner></app-spinner>\r\n<div\r\n  style=\"\r\n    background: linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25));\r\n  \"\r\n>\r\n  <app-navigation></app-navigation>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n    <div class=\"container\">\r\n      <br />\r\n      <hr />\r\n\r\n      <!--Copyright-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"footer-copyright py-3 text-center\">© 2023 Copyright</div>\r\n  <!--/.Copyright-->\r\n</div>\r\n"

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
        this.title = 'ecommerce';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/navigation/navigation.component */ "./src/app/parts/navigation/navigation.component.ts");
/* harmony import */ var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/card/card.component */ "./src/app/pages/card/card.component.ts");
/* harmony import */ var _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/pagination/pagination.component */ "./src/app/parts/pagination/pagination.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/product-detail/detail.component */ "./src/app/pages/product-detail/detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_interceptors/error-interceptor.service */ "./src/app/_interceptors/error-interceptor.service.ts");
/* harmony import */ var _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_interceptors/jwt-interceptor.service */ "./src/app/_interceptors/jwt-interceptor.service.ts");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/order-detail/order-detail.component */ "./src/app/pages/order-detail/order-detail.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/product-list/product.list.component */ "./src/app/pages/product-list/product.list.component.ts");
/* harmony import */ var _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user-edit/user-detail.component */ "./src/app/pages/user-edit/user-detail.component.ts");
/* harmony import */ var _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/product-edit/product-edit.component */ "./src/app/pages/product-edit/product-edit.component.ts");
/* harmony import */ var _pages_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/product-add/product-add.component */ "./src/app/pages/product-add/product-add.component.ts");
/* harmony import */ var _pages_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/category-add/category-add.component */ "./src/app/pages/category-add/category-add.component.ts");
/* harmony import */ var _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/category-edit/category-edit.component */ "./src/app/pages/category-edit/category-edit.component.ts");
/* harmony import */ var _pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/category-list/category.list.component */ "./src/app/pages/category-list/category.list.component.ts");
/* harmony import */ var _pages_statistics_stats_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/statistics/stats.component */ "./src/app/pages/statistics/stats.component.ts");
/* harmony import */ var _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/user-list/user.list.component */ "./src/app/pages/user-list/user.list.component.ts");
/* harmony import */ var _interceptors_loaderInterceptor_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_interceptors/loaderInterceptor.service */ "./src/app/_interceptors/loaderInterceptor.service.ts");
/* harmony import */ var _services_loadingService__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/loadingService */ "./src/app/services/loadingService.ts");
/* harmony import */ var _pages_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/spinner/spinner-component */ "./src/app/pages/spinner/spinner-component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                _pages_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetailComponent"],
                _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
                _pages_order_order_component__WEBPACK_IMPORTED_MODULE_17__["OrderComponent"],
                _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailComponent"],
                _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__["ProductListComponent"],
                _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_20__["UserDetailComponent"],
                _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_21__["ProductEditComponent"],
                _pages_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_22__["ProductAddComponent"],
                _pages_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_23__["CategoryAddComponent"],
                _pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_24__["CategoryEditComponent"],
                _pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_25__["CategoryListComponent"],
                _pages_statistics_stats_component__WEBPACK_IMPORTED_MODULE_26__["StatsComponent"],
                _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_27__["UserListComponent"],
                _pages_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__["SpinnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"], _services_loadingService__WEBPACK_IMPORTED_MODULE_29__["LoadingService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _interceptors_loaderInterceptor_service__WEBPACK_IMPORTED_MODULE_28__["LoadingInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enum/OrderStatus.ts":
/*!*************************************!*\
  !*** ./src/app/enum/OrderStatus.ts ***!
  \*************************************/
/*! exports provided: OrderStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatus", function() { return OrderStatus; });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["New"] = 0] = "New";
    OrderStatus[OrderStatus["Finished"] = 1] = "Finished";
    OrderStatus[OrderStatus["Cancelled"] = 2] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));


/***/ }),

/***/ "./src/app/enum/ProductStatus.ts":
/*!***************************************!*\
  !*** ./src/app/enum/ProductStatus.ts ***!
  \***************************************/
/*! exports provided: ProductStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStatus", function() { return ProductStatus; });
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["Available"] = 0] = "Available";
    ProductStatus[ProductStatus["Unavailable"] = 1] = "Unavailable";
})(ProductStatus || (ProductStatus = {}));


/***/ }),

/***/ "./src/app/enum/Role.ts":
/*!******************************!*\
  !*** ./src/app/enum/Role.ts ***!
  \******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["Customer"] = "ROLE_CUSTOMER";
    Role["Admin"] = "ROLE_ADMIN";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/models/Category.ts":
/*!************************************!*\
  !*** ./src/app/models/Category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(category) {
        if (category) {
            this.categoryId = category.categoryId;
            this.categoryName = category.categoryName;
        }
        else {
            this.categoryId = null;
            this.categoryName = '';
        }
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/models/ProductInOrder.ts":
/*!******************************************!*\
  !*** ./src/app/models/ProductInOrder.ts ***!
  \******************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(productInfo, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.productId = productInfo.productId;
        this.productName = productInfo.productName;
        this.productPrice = productInfo.productPrice;
        this.productStock = productInfo.productStock;
        this.productDescription = productInfo.productDescription;
        ;
        this.productIcon = productInfo.productIcon;
        this.productCategory = { categoryId: productInfo.productCategory.categoryId };
        this.count = quantity;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/Role */ "./src/app/enum/Role.ts");

var User = /** @class */ (function () {
    function User() {
        this.active = true;
        this.role = _enum_Role__WEBPACK_IMPORTED_MODULE_0__["Role"].Customer;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/productInfo.ts":
/*!***************************************!*\
  !*** ./src/app/models/productInfo.ts ***!
  \***************************************/
/*! exports provided: ProductInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
var ProductInfo = /** @class */ (function () {
    function ProductInfo(productInOrder) {
        if (productInOrder) {
            this.productId = productInOrder.productId;
            this.productName = productInOrder.productName;
            this.productPrice = productInOrder.productPrice;
            this.productStock = productInOrder.productStock;
            this.productDescription = productInOrder.productDescription;
            this.productIcon = productInOrder.productIcon;
            this.productCategory = { categoryId: productInOrder.productCategory.categoryId };
            this.productStatus = 0;
        }
        else {
            this.productId = '';
            this.productName = '';
            this.productPrice = 20;
            this.productStock = 100;
            this.productDescription = '';
            this.productIcon = '';
            this.productCategory = 0;
            this.productStatus = 0;
        }
    }
    return ProductInfo;
}());



/***/ }),

/***/ "./src/app/pages/card/card.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/card/card.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/card/card.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/card/card.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">{{title}}</h1>\r\n<div class=\"row card-deck text-center\">\r\n  <div *ngFor=\"let productInfo of page?.content\" class=\"col-lg-4 \">\r\n    <div class=\"card mb-4\"  >\r\n      <img height=\"200px\" class=\"card-img-top\" src=\"{{productInfo.productIcon}}\" alt=\"{{productInfo.productName}}\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title \">{{productInfo.productName}}</h4>\r\n        <div class=\"text-left\">\r\n          <p class=\"card-test\"><strong>Description: </strong>{{productInfo.productDescription}}</p>\r\n          <p class=\"card-text\"><strong>Price: </strong>{{productInfo.productPrice | currency}}</p>\r\n          <p class=\"card-text\"><strong>Stock: </strong>{{productInfo.productStock}}</p>\r\n        </div>\r\n        <br>\r\n        <a routerLink=\"/product/{{productInfo.productId}}\" *ngIf=\"productInfo.productStatus == 0; else offBlock\"\r\n           class=\"btn btn-primary btn-lg\"\r\n        >Get It!</a>\r\n        <ng-template #offBlock><a class=\"btn btn-secondary btn-lg disabled\">Unavailable</a></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-pagination  [currentPage]=\"page\" ></app-pagination>\r\n"

/***/ }),

/***/ "./src/app/pages/card/card.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/card/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CardComponent = /** @class */ (function () {
    function CardComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Welcome to Ecommerce Store!';
        this.querySub = this.route.queryParams.subscribe(function () {
            _this.update();
        });
        this.paramSub = this.route.params.subscribe(function () {
            _this.update();
        });
    };
    CardComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
        this.paramSub.unsubscribe();
    };
    CardComponent.prototype.update = function () {
        if (this.route.snapshot.queryParamMap.get('page')) {
            var currentPage = +this.route.snapshot.queryParamMap.get('page');
            var size = +this.route.snapshot.queryParamMap.get('size');
            this.getProds(currentPage, size);
        }
        else {
            this.getProds();
        }
    };
    CardComponent.prototype.getProds = function (page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 3; }
        if (this.route.snapshot.url.length == 1) {
            this.productService.getAllInPage(+page, +size)
                .subscribe(function (page) {
                _this.page = page;
                _this.title = 'Welcome to Ecommerce Store!';
            });
        }
        else { //  /category/:id
            var type = this.route.snapshot.url[1].path;
            this.title = "Browse Products";
            this.productService.getCategoryInPage(+type, page, size)
                .subscribe(function (categoryPage) {
                _this.title = categoryPage.category;
                _this.page = categoryPage.page;
            });
        }
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/pages/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/pages/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/cart/cart.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">My Cart</h1>\r\n\r\n<!--Cart Detail Table-->\r\n<table class=\"table table-striped text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th scope=\"col\">Photo</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Price</th>\r\n        <th scope=\"col\">Quantity</th>\r\n        <th scope=\"col\">Subtotal</th>\r\n        <th scope=\"col\">Action</th>\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n    <tr *ngFor=\"let productInOrder of cartItems\">\r\n        <th class=\"align-middle\" scope=\"row\">\r\n            <a routerLink=\"/product/{{productInOrder.productId}}\"><img height=\"100px\"\r\n                                                                       src=\"{{productInOrder.productIcon}}\"\r\n                                                                       alt=\"{{productInOrder.productName}}\"></a>\r\n        </th>\r\n        <td class=\"align-middle\"><a style=\"color: navajowhite;\"\r\n                routerLink=\"/product/{{productInOrder.productId}}\">{{productInOrder.productName}}</a></td>\r\n        <td class=\"align-middle\">{{productInOrder.productPrice | currency}}</td>\r\n\r\n        <td class=\"align-middle\">\r\n            <a (click)=\"minusOne(productInOrder)\"><i class=\"fa fa-minus\"></i></a>\r\n            <input min=\"1\" id=\"{{productInOrder.productId}}\"\r\n                   [max]=productInOrder.productStock\r\n                   [(ngModel)]=\"productInOrder.count\"\r\n                   (change)=\"onChange(productInOrder)\"\r\n                   size=\"5\"\r\n                   type=\"number\"\r\n                   required\r\n                   name='count'>\r\n            <a (click)=\"addOne(productInOrder)\"> <i class=\"fa fa-plus\"></i></a>\r\n        </td>\r\n\r\n        <td class=\"align-middle\">{{productInOrder.productPrice * productInOrder.count|currency}}</td>\r\n        <td class=\"align-middle\">\r\n            <a style=\"color: navajowhite;\" (click)=\"remove(productInOrder)\" routerLink=\"./\">Remove</a>\r\n        </td>\r\n\r\n    </tr>\r\n\r\n    </tbody>\r\n</table>\r\n\r\n<div *ngIf=\"cartItems?.length > 0; else empty\">\r\n    <h5 style=\"display: inline;\">Total: {{total | currency}}</h5>\r\n    <button (click)=\"checkout()\" class=\"btn btn-warning float-right\">Checkout</button>\r\n</div>\r\n<ng-template #empty>\r\n    <h4 class=\"text-muted text-center\">Cart is empty. Go to get something! :)</h4>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");








var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, userService, router) {
        var _this = this;
        this.cartService = cartService;
        this.userService = userService;
        this.router = router;
        this.cartItems = [];
        this.total = 0;
        this.updateTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userSubscription = this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    CartComponent_1 = CartComponent;
    CartComponent.validateCount = function (productInOrder) {
        var max = productInOrder.productStock;
        if (productInOrder.count > max) {
            productInOrder.count = max;
        }
        else if (productInOrder.count < 1) {
            productInOrder.count = 1;
        }
        console.log(productInOrder.count);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCart().subscribe(function (prods) {
            _this.cartItems = prods;
        });
        this.sub = this.updateTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), 
        //
        // ignore new term if same as previous term
        // Same Object Reference, not working here
        //  distinctUntilChanged((p: ProductInOrder, q: ProductInOrder) => p.count === q.count),
        //
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (productInOrder) { return _this.cartService.update(productInOrder); })).subscribe(function (prod) {
            if (prod) {
                throw new Error();
            }
        }, function (_) { return console.log('Update Item Failed'); });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        if (!this.currentUser) {
            this.cartService.storeLocalCart();
        }
        this.userSubscription.unsubscribe();
    };
    CartComponent.prototype.ngAfterContentChecked = function () {
        this.total = this.cartItems.reduce(function (prev, cur) { return prev + cur.count * cur.productPrice; }, 0);
    };
    CartComponent.prototype.addOne = function (productInOrder) {
        productInOrder.count++;
        CartComponent_1.validateCount(productInOrder);
        if (this.currentUser) {
            this.updateTerms.next(productInOrder);
        }
    };
    CartComponent.prototype.minusOne = function (productInOrder) {
        productInOrder.count--;
        CartComponent_1.validateCount(productInOrder);
        if (this.currentUser) {
            this.updateTerms.next(productInOrder);
        }
    };
    CartComponent.prototype.onChange = function (productInOrder) {
        CartComponent_1.validateCount(productInOrder);
        if (this.currentUser) {
            this.updateTerms.next(productInOrder);
        }
    };
    CartComponent.prototype.remove = function (productInOrder) {
        var _this = this;
        this.cartService.remove(productInOrder).subscribe(function (success) {
            _this.cartItems = _this.cartItems.filter(function (e) { return e.productId !== productInOrder.productId; });
            console.log('Cart: ' + _this.cartItems);
        }, function (_) { return console.log('Remove Cart Failed'); });
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        if (!this.currentUser) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
        }
        else if (this.currentUser.role !== _enum_Role__WEBPACK_IMPORTED_MODULE_7__["Role"].Customer) {
            this.router.navigate(['/seller']);
        }
        else {
            this.cartService.checkout().subscribe(function (_) {
                _this.cartItems = [];
            }, function (error1) {
                console.log('Checkout Cart Failed');
            });
            this.router.navigate(['/']);
        }
    };
    var CartComponent_1;
    CartComponent = CartComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/pages/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/pages/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/pages/category-add/category-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/category-add/category-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5LWFkZC9jYXRlZ29yeS1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/category-add/category-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/category-add/category-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Add Category</h1>\r\n<div style=\"width:40%; margin: 25px auto\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        \r\n    \r\n        <!--Name-->\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input [(ngModel)]=\"category.categoryName\" type=\"text\" class=\"form-control form-control-lg\" id=\"categoryName\"\r\n                   #categoryName=\"ngModel\"\r\n                   name=\"categoryName\" placeholder=\"Name\" required>\r\n        </div>\r\n        <div *ngIf=\"categoryName.invalid && (categoryName.dirty ||categoryName.touched)\">\r\n            <div *ngIf=\"categoryName.errors.required\">\r\n                Name is required.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"!form.form.valid\" class=\"btn btn-lg btn-primary btn-block\">Submit</button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/category-add/category-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/category-add/category-add.component.ts ***!
  \**************************************************************/
/*! exports provided: CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Category */ "./src/app/models/Category.ts");
/* harmony import */ var src_app_services_CategoryService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CategoryService */ "./src/app/services/CategoryService.ts");





var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(categoryService, route, router) {
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.category = new src_app_models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.isEdit = false;
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
    };
    CategoryAddComponent.prototype.onSubmit = function () {
        this.add();
    };
    CategoryAddComponent.prototype.add = function () {
        var _this = this;
        this.categoryService.create(this.category).subscribe(function (prod) {
            if (!prod)
                throw new Error;
            _this.router.navigate(['/seller/category']);
        }, function (e) {
        });
    };
    CategoryAddComponent.prototype.ngAfterContentChecked = function () {
        console.log(this.category);
    };
    CategoryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-add',
            template: __webpack_require__(/*! ./category-add.component.html */ "./src/app/pages/category-add/category-add.component.html"),
            styles: [__webpack_require__(/*! ./category-add.component.css */ "./src/app/pages/category-add/category-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_CategoryService__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/category-edit/category-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-edit/category-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5LWVkaXQvY2F0ZWdvcnktZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/category-edit/category-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/category-edit/category-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Edit Category</h1>\r\n<div style=\"width:40%; margin: 25px auto\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"categoryId\">Code</label>\r\n            <input [readOnly]=\"isEdit\" [disabled]=\"isEdit\" [(ngModel)]=\"category.categoryId\" type=\"text\"\r\n                   class=\"form-control form-control-lg\" #categoryIdInput\r\n                   id=\"categoryId\" name=\"categoryId\" required #categoryId=\"ngModel\">\r\n            <div *ngIf=\"categoryIdInput.invalid && (categoryIdInput.dirty ||categoryIdInput.touched)\">\r\n                <div *ngIf=\"categoryIdInput.errors.required\">\r\n                    Name is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    \r\n        <!--Name-->\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input [(ngModel)]=\"category.categoryName\" type=\"text\" class=\"form-control form-control-lg\" id=\"categoryName\"\r\n                   #categoryName=\"ngModel\"\r\n                   name=\"categoryName\" placeholder=\"Name\" required>\r\n        </div>\r\n        <div *ngIf=\"categoryName.invalid && (categoryName.dirty ||categoryName.touched)\">\r\n            <div *ngIf=\"categoryName.errors.required\">\r\n                Name is required.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"!form.form.valid\" class=\"btn btn-lg btn-primary btn-block\">Submit</button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/category-edit/category-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/category-edit/category-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Category */ "./src/app/models/Category.ts");
/* harmony import */ var src_app_services_CategoryService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CategoryService */ "./src/app/services/CategoryService.ts");





var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(categoryService, route, router) {
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.category = new src_app_models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.isEdit = false;
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryId = this.route.snapshot.paramMap.get('id');
        if (this.categoryId) {
            this.isEdit = true;
            this.categoryService.getDetail(this.categoryId).subscribe(function (prod) { return _this.category = prod; });
        }
    };
    CategoryEditComponent.prototype.update = function () {
        var _this = this;
        this.categoryService.update(this.category).subscribe(function (prod) {
            if (!prod)
                throw new Error();
            _this.router.navigate(['/seller/category']);
        }, function (err) {
        });
    };
    CategoryEditComponent.prototype.onSubmit = function () {
        if (this.category) {
            this.update();
        }
    };
    CategoryEditComponent.prototype.ngAfterContentChecked = function () {
        console.log(this.category);
    };
    CategoryEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-edit',
            template: __webpack_require__(/*! ./category-edit.component.html */ "./src/app/pages/category-edit/category-edit.component.html"),
            styles: [__webpack_require__(/*! ./category-edit.component.css */ "./src/app/pages/category-edit/category-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_CategoryService__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/category-list/category.list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-list/category.list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnkubGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/category-list/category.list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/category-list/category.list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4\">Categories</h1>\r\n<a\r\n  *ngIf=\"currentUser?.role == Role.Customer\"\r\n  style=\"color: inherit\"\r\n  routerLink=\"/seller/product/new\"\r\n  class=\"float-right mb-3\"\r\n  ><i class=\"fas fa-plus fa-2x\">Add</i>\r\n</a>\r\n<table id=\"table\" class=\"table table-striped text-center\" style=\"width: 100%\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let category of page?.content\">\r\n      <td class=\"align-middle\">{{ category.categoryId }}</td>\r\n      <td class=\"align-middle\">{{ category.categoryName }}</td>\r\n      <td class=\"align-middle\">\r\n        <a\r\n          style=\"display: block\"\r\n          routerLink=\"/seller/category/{{ category.categoryId }}/edit\"\r\n        >\r\n          Edit</a\r\n        >\r\n\r\n        <a style=\"display: block\" routerLink=\"/\" (click)=\"remove(category)\">\r\n          Remove</a\r\n        >\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<app-pagination [currentPage]=\"page\"></app-pagination>\r\n"

/***/ }),

/***/ "./src/app/pages/category-list/category.list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/category-list/category.list.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");
/* harmony import */ var src_app_services_CategoryService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/CategoryService */ "./src/app/services/CategoryService.ts");






var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(userService, categoryService, route, router) {
        this.userService = userService;
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"];
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySub = this.route.queryParams.subscribe(function () {
            _this.update();
        });
    };
    CategoryListComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
    };
    CategoryListComponent.prototype.update = function () {
        if (this.route.snapshot.queryParamMap.get('page')) {
            var currentPage = +this.route.snapshot.queryParamMap.get('page');
            var size = +this.route.snapshot.queryParamMap.get('size');
            this.getCategories(currentPage, size);
        }
        else {
            this.getCategories();
        }
    };
    CategoryListComponent.prototype.getCategories = function (page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 5; }
        this.categoryService.getCategoryPaged(page, size)
            .subscribe(function (data) {
            _this.page = data;
        });
    };
    CategoryListComponent.prototype.getProds = function (page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 5; }
        this.categoryService.getAllInPage(+page, +size)
            .subscribe(function (page) {
            _this.page = page;
        });
    };
    CategoryListComponent.prototype.remove = function (productInfo) {
        var _this = this;
        this.categoryService.delelte(productInfo).subscribe(function (_) {
            _this.router.navigate(['/seller/category']);
        }, function (err) {
        });
    };
    CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category.list',
            template: __webpack_require__(/*! ./category.list.component.html */ "./src/app/pages/category-list/category.list.component.html"),
            styles: [__webpack_require__(/*! ./category.list.component.css */ "./src/app/pages/category-list/category.list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_CategoryService__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Sign In</h1>\r\n<div style=\"width:40%; margin: 25px auto\">\r\n\r\n    <div class=\"alert alert-danger\" *ngIf=\"isInvalid\">\r\n        Invalid username and password.\r\n    </div>\r\n    <div class=\"alert alert-info\" *ngIf=\"isLogout\">\r\n        You have been logged out.\r\n    </div>\r\n\r\n\r\n    <form #form='ngForm' (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Email address</label>\r\n            <input type=\"text\" class=\"form-control form-control-lg\" id=\"email\" name=\"email\" placeholder=\"Enter email\"\r\n                   required autofocus [(ngModel)]=\"model.username\" #email=\"ngModel\" autocomplete=\"email\" >\r\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                Email is required\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control form-control-lg\" id=\"password\" name=\"password\"  autocomplete=\"password\"\r\n                   placeholder=\"Password\" required [(ngModel)]=\"model.password\" #password='ngModel'>\r\n            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\r\n                Email is required\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div>\r\n                <input type=\"checkbox\" id=\"remember_me\" name=\"remember-me\" [(ngModel)]=\"model.remembered\">\r\n                <label for=\"remember_me\" class=\"inline\">Remember me</label>\r\n                <a class=\"float-right\" routerLink=\"/register\">Sign Up</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"!form.form.valid\" type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Sign In</button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.model = {
            username: '',
            password: '',
            remembered: false
        };
        this.returnUrl = '/';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.queryParamMap;
        this.isLogout = params.has('logout');
        this.returnUrl = params.get('returnUrl');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.userService.login(this.model).subscribe(function (user) {
            if (user) {
                if (user.role != _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"].Customer) {
                    _this.returnUrl = '/seller';
                }
                _this.router.navigateByUrl(_this.returnUrl);
            }
            else {
                _this.isLogout = false;
                _this.isInvalid = true;
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Order Detail</h1>\r\n<table class=\"table table-striped text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th scope=\"col\">Photo</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Price</th>\r\n        <th scope=\"col\">Quantity</th>\r\n        <th scope=\"col\">Subtotal</th>\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of (order$ | async)?.products\">\r\n        <th class=\"align-middle\" scope=\"row\">\r\n            <a routerLink=\"/seller/product/{{item.productId}}/edit\"><img height=\"100px\" src=\"{{item.productIcon}}\"\r\n                                                                         alt=\"{{item.productName}}\"></a>\r\n        </th>\r\n        <td class=\"align-middle\"><a routerLink=\"/seller/product/{{item.productId}}/edit\">{{item.productName}}</a></td>\r\n        <td class=\"align-middle\">{{item.productDescription}}</td>\r\n        <td class=\"align-middle\">{{item.productPrice | currency}}</td>\r\n        <td class=\"align-middle\">{{item.count}}</td>\r\n        <td class=\"align-middle\">{{(item.productPrice * item.count | currency)}}</td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n<h5 style=\"display: inline\" class=\"float-right\">Total: {{(order$ | async)?.orderAmount | currency}}</h5>\r\n"

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(orderService, route) {
        this.orderService = orderService;
        this.route = route;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        // this.items$ = this.route.paramMap.pipe(
        //     map(paramMap =>paramMap.get('id')),
        //     switchMap((id:string) => this.orderService.show(id))
        // )
        this.order$ = this.orderService.show(this.route.snapshot.paramMap.get('id'));
    };
    OrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/pages/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/pages/order-detail/order-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/order/order.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/order/order.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/order/order.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/order/order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Orders</h1>\r\n\r\n<table class=\"table table-striped text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th scope=\"col\">Order #</th>\r\n        <th scope=\"col\">Customer Name</th>\r\n        <th scope=\"col\">Customer Email</th>\r\n        <th scope=\"col\">Customer phone</th>\r\n        <th scope=\"col\">Shipping Address</th>\r\n        <th scope=\"col\">Total</th>\r\n        <th scope=\"col\">Order Data</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\">Action</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n    <tr *ngFor=\"let order of page?.content\">\r\n        <th class=\"align-middle\" scope=\"row\">\r\n            {{order.orderId}}\r\n        </th>\r\n        <td class=\"align-middle\">{{order.buyerName}}</td>\r\n        <td class=\"align-middle\">{{order.buyerEmail}}</td>\r\n        <td class=\"align-middle\">{{order.buyerPhone}}</td>\r\n        <td class=\"align-middle\">{{order.buyerAddress}}</td>\r\n        <td class=\"align-middle\">{{order.orderAmount | currency}}</td>\r\n        <td class=\"align-middle\">{{order.createTime | date}}</td>\r\n        <td class=\"align-middle\">{{OrderStatus[order.orderStatus]}}</td>\r\n        <td class=\"align-middle\">\r\n            <a *ngIf=\"!(currentUser.role == Role.Customer && currentUser.name == order.buyerEmail)\"\r\n               style=\"display:\r\n            block\" href=\"\" routerLink=\"/order/{{order.orderId}}\">\r\n                Show</a>\r\n            <a *ngIf=\"order.orderStatus == 0\" style=\"display: block\" (click)=\"cancel(order)\" routerLink=\"./\">Cancel</a>\r\n            <a *ngIf=\"currentUser.role != Role.Customer && order.orderStatus == 0\"\r\n               style=\"display: block\"\r\n               (click)=\"finish(order)\"\r\n               routerLink=\"./\">\r\n                Finish</a>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<app-pagination [currentPage]=\"page\"></app-pagination>\r\n"

/***/ }),

/***/ "./src/app/pages/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _enum_OrderStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/OrderStatus */ "./src/app/enum/OrderStatus.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");








var OrderComponent = /** @class */ (function () {
    function OrderComponent(httpClient, orderService, userService, route) {
        this.httpClient = httpClient;
        this.orderService = orderService;
        this.userService = userService;
        this.route = route;
        this.OrderStatus = _enum_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"];
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_7__["Role"];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.userService.currentUserValue;
        this.querySub = this.route.queryParams.subscribe(function () {
            _this.update();
        });
    };
    OrderComponent.prototype.update = function () {
        var _this = this;
        var nextPage = 1;
        var size = 10;
        if (this.route.snapshot.queryParamMap.get('page')) {
            nextPage = +this.route.snapshot.queryParamMap.get('page');
            size = +this.route.snapshot.queryParamMap.get('size');
        }
        this.orderService.getPage(nextPage, size).subscribe(function (page) { return _this.page = page; }, function (_) {
            console.log("Get Orde Failed");
        });
    };
    OrderComponent.prototype.cancel = function (order) {
        this.orderService.cancel(order.orderId).subscribe(function (res) {
            if (res) {
                order.orderStatus = res.orderStatus;
            }
        });
    };
    OrderComponent.prototype.finish = function (order) {
        this.orderService.finish(order.orderId).subscribe(function (res) {
            if (res) {
                order.orderStatus = res.orderStatus;
            }
        });
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/pages/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/pages/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-add/product-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/product-add/product-add.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtYWRkL3Byb2R1Y3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/product-add/product-add.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-add/product-add.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Add Product</h1>\r\n<div style=\"width:40%; margin: 25px auto\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        \r\n        <!--Photo-->\r\n        <div class=\"form-group\">\r\n            <label>Product Photo</label>\r\n            <input [(ngModel)]=\"product.productIcon\"  type=\"file\" (change)=\"handleUpload($event)\" class=\"form-control form-control-lg\" id=\"productIcon\"\r\n                   name=\"productIcon\" placeholder=\"Photo\">\r\n        </div>\r\n\r\n        <!--Name-->\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input [(ngModel)]=\"product.productName\" type=\"text\" class=\"form-control form-control-lg\" id=\"productName\"\r\n                   #productName=\"ngModel\"\r\n                   name=\"productName\" placeholder=\"Name\" required>\r\n        </div>\r\n        <div *ngIf=\"productName.invalid && (productName.dirty ||productName.touched)\">\r\n            <div *ngIf=\"productName.errors.required\">\r\n                Name is required.\r\n            </div>\r\n        </div>\r\n\r\n        <!--Category-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productCategory\">Category</label>\r\n            <select class=\"custom-select custom-select-lg \" id=\"productCategory\" name=\"productCategory\"\r\n                    [(ngModel)]=\"product.productCategory\" \r\n                    required>\r\n                <option  *ngFor=\"let category of categories\"  value={{category.categoryId}}>{{category.categoryName}}</option>\r\n              \r\n            </select>\r\n        </div>\r\n\r\n        <!--Description-->\r\n        <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control form-control-lg text-left\"\r\n                      id=\"productDescription\" name=\"productDescription\"\r\n                      placeholder=\"Description\" [(ngModel)]=\"product.productDescription\"></textarea>\r\n        </div>\r\n        <!--Price-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productPrice\">Price</label>\r\n            <input class=\"form-control form-control-lg\"\r\n                   type=\"number\"\r\n                   id=\"productPrice\"\r\n                   name=\"productPrice\"\r\n                   #productPrice=\"ngModel\"\r\n                   [ngModel]=\"product.productPrice\" (ngModelChange)=\"product.productPrice=$event\"\r\n                   required>\r\n            <div *ngIf=\"productPrice.invalid && (productPrice.dirty ||productPrice.touched)\">\r\n                <div *ngIf=\"productPrice.errors.required\">\r\n                    Price is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Stock-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productStock\">Stock</label>\r\n            <input class=\"form-control form-control-lg\"\r\n                   type=\"number\"\r\n                   id=\"productStock\"\r\n                   name=\"productStock\"\r\n                   min=\"0\" #productStock=\"ngModel\"\r\n                   [(ngModel)]=\"product.productStock\"\r\n                   required>\r\n            <div *ngIf=\"productStock.invalid && (productStock.dirty ||productStock.touched)\">\r\n                <div *ngIf=\"productStock.errors.required\">\r\n                    Stock is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Status-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productStatus\">Status</label>\r\n            <select class=\"custom-select custom-select-lg \" id=\"productStatus\" name=\"productStatus\" required\r\n                    [(ngModel)]=\"product.productStatus\">\r\n                <option [ngValue]=0>Available</option>\r\n                <option [ngValue]=1>Unavailable</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"!form.form.valid\" class=\"btn btn-lg btn-primary btn-block\">Submit</button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product-add/product-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/product-add/product-add.component.ts ***!
  \************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_productInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/productInfo */ "./src/app/models/productInfo.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = new _models_productInfo__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"]();
        this.isEdit = false;
        this.categories = [];
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    ProductAddComponent.prototype.onSubmit = function () {
        this.add();
    };
    ProductAddComponent.prototype.handleUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.product.productIcon = reader.result;
        };
    };
    ProductAddComponent.prototype.add = function () {
        var _this = this;
        this.product = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.product, { productCategory: { categoryId: this.product.productCategory } });
        this.productService.create(this.product).subscribe(function (prod) {
            if (!prod)
                throw new Error;
            _this.router.navigate(['/seller/product']);
        }, function (e) {
        });
    };
    ProductAddComponent.prototype.ngAfterContentChecked = function () {
        console.log(this.product);
    };
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/pages/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/pages/product-add/product-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-detail/detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-detail/detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/product-detail/detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/product-detail/detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">{{title}}</h1>\r\n<div class=\"row text-center justify-content-center\">\r\n  <div class=\"col-lg-6 \">\r\n    <div class=\"card mb-4 \">\r\n      <img height=\"60%\" class=\"card-img-top\" src=\"{{productInfo?.productIcon}}\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title \">{{productInfo?.productName}}</h4>\r\n        <form name=\"form\" #form='ngForm' (ngSubmit)=\"productInfo?.productStatus == 0 && addToCart()\">\r\n          <div class=\"text-left\">\r\n            <input hidden name=\"productId\" [value]=productInfo?.productId>\r\n            <p class=\"card-test\"><strong>Description: </strong>{{productInfo?.productDescription}}</p>\r\n            <p class=\"card-text\">\r\n              <strong>Price: </strong>\r\n              <label id=\"price\">{{productInfo?.productPrice | currency}}</label>\r\n            </p>\r\n            <p class=\"card-text\"><strong>Stock: </strong>{{productInfo?.productStock}}</p>\r\n\r\n            <label class=\"card-text\">\r\n              <strong>Quantity: </strong>\r\n              <input [(ngModel)]=count\r\n                     (change)=\"validateCount()\"\r\n                     type=\"number\"\r\n                     name=\"count\"\r\n                     required\r\n                     min=\"1\"\r\n                     [max]=productInfo?.productStock\r\n              >\r\n            </label>\r\n\r\n\r\n            <p class=\"card-text\"><strong>Subtotal: </strong>\r\n              <label id=\"subtotal\">{{count * productInfo?.productPrice | currency}}</label>\r\n            </p>\r\n          </div>\r\n          <button type=\"submit\" [disabled]=\"!form.form.valid\" *ngIf=\"productInfo?.productStatus == 0; else offBlock\"\r\n                  class=\"btn btn-primary btn-lg\"\r\n          >Add to Cart\r\n          </button>\r\n          <ng-template #offBlock><a class=\"btn btn-secondary btn-lg disabled\">Unavailable</a></ng-template>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product-detail/detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/product-detail/detail.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _models_ProductInOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/ProductInOrder */ "./src/app/models/ProductInOrder.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(productService, cartService, cookieService, route, router) {
        this.productService = productService;
        this.cartService = cartService;
        this.cookieService = cookieService;
        this.route = route;
        this.router = router;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getProduct();
        this.title = 'Product Detail';
        this.count = 1;
    };
    // ngOnChanges(changes: SimpleChanges): void {
    //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //   // Add '${implements OnChanges}' to the class.
    //   console.log(changes);
    //   if (this.item.quantity in changes) {
    //   }
    // }
    DetailComponent.prototype.getProduct = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.productService.getDetail(id).subscribe(function (prod) {
            _this.productInfo = prod;
            _this.title = prod.productName;
        }, function (_) { return console.log('Get Cart Failed'); });
    };
    DetailComponent.prototype.addToCart = function () {
        var _this = this;
        this.cartService
            .addItem(new _models_ProductInOrder__WEBPACK_IMPORTED_MODULE_6__["CartItem"](this.productInfo, this.count))
            .subscribe(function (res) {
            if (!res) {
                console.log('Add Cart failed' + res);
                throw new Error();
            }
            _this.router.navigateByUrl('/cart');
        }, function (_) { return console.log('Add Cart Failed'); });
    };
    DetailComponent.prototype.validateCount = function () {
        console.log('Validate');
        var max = this.productInfo.productStock;
        if (this.count > max) {
            this.count = max;
        }
        else if (this.count < 1) {
            this.count = 1;
        }
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/pages/product-detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/pages/product-detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Edit Product</h1>\r\n<div style=\"width:40%; margin: 25px auto\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <!--Id-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productId\">Code</label>\r\n            <input [readOnly]=\"isEdit\" [disabled]=\"isEdit\" [(ngModel)]=\"product.productId\" type=\"text\"\r\n                   class=\"form-control form-control-lg\" #productIdInput\r\n                   id=\"productId\" name=\"productId\" required #productId=\"ngModel\">\r\n            <div *ngIf=\"productIdInput.invalid && (productIdInput.dirty ||productIdInput.touched)\">\r\n                <div *ngIf=\"productIdInput.errors.required\">\r\n                    Name is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Photo-->\r\n        <div class=\"form-group\">\r\n            <label>Product Photo</label>\r\n            <input [(ngModel)]=\"product.productIcon\"  type=\"file\" (change)=\"handleUpload($event)\" class=\"form-control form-control-lg\" id=\"productIcon\"\r\n                   name=\"productIcon\" placeholder=\"Photo\">\r\n        </div>\r\n\r\n\r\n        <!--Name-->\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input [(ngModel)]=\"product.productName\" type=\"text\" class=\"form-control form-control-lg\" id=\"productName\"\r\n                   #productName=\"ngModel\"\r\n                   name=\"productName\" placeholder=\"Name\" required>\r\n        </div>\r\n        <div *ngIf=\"productName.invalid && (productName.dirty ||productName.touched)\">\r\n            <div *ngIf=\"productName.errors.required\">\r\n                Name is required.\r\n            </div>\r\n        </div>\r\n\r\n        <!--Category-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productCategory\">Category</label>\r\n            <select class=\"custom-select custom-select-lg \" id=\"productCategory\" name=\"productCategory\"\r\n                    [(ngModel)]=\"product.productCategory.categoryId\"\r\n                    required>\r\n                    <option  *ngFor=\"let category of categories\"  [selected]=\"product.productCategory.categoryId == category.categoryId\" value={{category.categoryId}}>{{category.categoryName}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <!--Description-->\r\n        <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control form-control-lg text-left\"\r\n                      id=\"productDescription\" name=\"productDescription\"\r\n                      placeholder=\"Description\" [(ngModel)]=\"product.productDescription\"></textarea>\r\n        </div>\r\n        <!--Price-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productPrice\">Price</label>\r\n            <input class=\"form-control form-control-lg\"\r\n                   type=\"number\"\r\n                   id=\"productPrice\"\r\n                   name=\"productPrice\"\r\n                   #productPrice=\"ngModel\"\r\n                   [ngModel]=\"product.productPrice\" (ngModelChange)=\"product.productPrice=$event\"\r\n                   required>\r\n            <div *ngIf=\"productPrice.invalid && (productPrice.dirty ||productPrice.touched)\">\r\n                <div *ngIf=\"productPrice.errors.required\">\r\n                    Price is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Stock-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productStock\">Stock</label>\r\n            <input class=\"form-control form-control-lg\"\r\n                   type=\"number\"\r\n                   id=\"productStock\"\r\n                   name=\"productStock\"\r\n                   min=\"0\" #productStock=\"ngModel\"\r\n                   [(ngModel)]=\"product.productStock\"\r\n                   required>\r\n            <div *ngIf=\"productStock.invalid && (productStock.dirty ||productStock.touched)\">\r\n                <div *ngIf=\"productStock.errors.required\">\r\n                    Stock is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Status-->\r\n        <div class=\"form-group\">\r\n            <label for=\"productStatus\">Status</label>\r\n            <select class=\"custom-select custom-select-lg \" id=\"productStatus\" name=\"productStatus\" required\r\n                    [(ngModel)]=\"product.productStatus\">\r\n                <option [ngValue]=0>Available</option>\r\n                <option [ngValue]=1>Unavailable</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"!form.form.valid\" class=\"btn btn-lg btn-primary btn-block\">Submit</button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_productInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/productInfo */ "./src/app/models/productInfo.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = new _models_productInfo__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"]();
        this.isEdit = false;
        this.categories = [];
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productId = this.route.snapshot.paramMap.get('id');
        if (this.productId) {
            this.isEdit = true;
            this.productService.getDetail(this.productId).subscribe(function (prod) { return _this.product = prod; });
            this.productService.getAllCategories().subscribe(function (data) {
                _this.categories = data;
            });
        }
    };
    ProductEditComponent.prototype.handleUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.product.productIcon = reader.result;
        };
    };
    ProductEditComponent.prototype.update = function () {
        var _this = this;
        this.productService.update(this.product).subscribe(function (prod) {
            if (!prod)
                throw new Error();
            _this.router.navigate(['/seller']);
        }, function (err) {
        });
    };
    ProductEditComponent.prototype.onSubmit = function () {
        if (this.productId) {
            this.update();
        }
    };
    ProductEditComponent.prototype.ngAfterContentChecked = function () {
        console.log(this.product);
    };
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/pages/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/pages/product-edit/product-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-list/product.list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-list/product.list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0Lmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product-list/product.list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-list/product.list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 \">Products</h1>\r\n<a *ngIf=\"currentUser?.role == Role.Customer\" style=\"color: inherit\"\r\n   routerLink=\"/seller/product/new\" class=\"float-right mb-3\"><i class=\"fas fa-plus fa-2x\">Add</i>\r\n</a>\r\n<table id=\"table\" class=\"table table-striped text-center\" style=\"width:100%;\">\r\n    <thead>\r\n    <tr>\r\n        <th scope=\"col\">Photo</th>\r\n        <th scope=\"col\">Code</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Type</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Price</th>\r\n        <th scope=\"col\">Stock</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\">Action</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let productInfo of page?.content\">\r\n        <th class=\"align-middle\" scope=\"row\">\r\n            <img height=\"100px\" src=\"{{productInfo.productIcon}}\" alt=\"{{productInfo.productName}}\">\r\n        </th>\r\n        <td class=\"align-middle\">{{productInfo.productId}}</td>\r\n        <td class=\"align-middle\">{{productInfo.productName}}</td>\r\n        <td class=\"align-middle\">{{productInfo.productCategory.categoryName}}</td>\r\n        <td class=\"align-middle\">{{productInfo.productDescription}}</td>\r\n        <td class=\"align-middle\">{{productInfo.productPrice | currency}}</td>\r\n        <td class=\"align-middle\">{{productInfo.productStock}}</td>\r\n        <td class=\"align-middle\">{{ProductStatus[productInfo.productStatus]}}</td>\r\n        <td class=\"align-middle\">\r\n            <a style=\"display: block\" routerLink=\"/seller/product/{{productInfo.productId}}/edit\">\r\n                Edit</a>\r\n\r\n            <a style=\"display: block\"\r\n               (click)=\"remove(productInfo)\" routerLink=\"./\">\r\n                Remove</a>\r\n        </td>\r\n\r\n    </tbody>\r\n</table>\r\n<app-pagination [currentPage]=\"page\"></app-pagination>\r\n"

/***/ }),

/***/ "./src/app/pages/product-list/product.list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-list/product.list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_ProductStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enum/ProductStatus */ "./src/app/enum/ProductStatus.ts");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");







var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(userService, productService, route, router) {
        this.userService = userService;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_6__["Role"];
        this.ProductStatus = _enum_ProductStatus__WEBPACK_IMPORTED_MODULE_5__["ProductStatus"];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySub = this.route.queryParams.subscribe(function () {
            _this.update();
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
    };
    ProductListComponent.prototype.update = function () {
        if (this.route.snapshot.queryParamMap.get('page')) {
            var currentPage = +this.route.snapshot.queryParamMap.get('page');
            var size = +this.route.snapshot.queryParamMap.get('size');
            this.getProds(currentPage, size);
        }
        else {
            this.getProds();
        }
    };
    ProductListComponent.prototype.getProds = function (page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 5; }
        this.productService.getAllInPage(+page, +size)
            .subscribe(function (page) {
            _this.page = page;
        });
    };
    ProductListComponent.prototype.getCategories = function () {
        this.productService.getAllCategories()
            .subscribe(function (page) {
            console.log(page);
        });
    };
    ProductListComponent.prototype.remove = function (productInfo) {
        var _this = this;
        this.productService.delelte(productInfo).subscribe(function (_) {
            _this.router.navigate(['/seller/product']);
        }, function (err) {
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product.list',
            template: __webpack_require__(/*! ./product.list.component.html */ "./src/app/pages/product-list/product.list.component.html"),
            styles: [__webpack_require__(/*! ./product.list.component.css */ "./src/app/pages/product-list/product.list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Sign Up</h1>\r\n<div style=\"width:40%; margin: 25px auto\" >\r\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label><b>Email address</b></label>\r\n      <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control form-control-lg\" id=\"email\" name=\"email\" placeholder=\"Enter email\" email required autofocus  #email=\"ngModel\">\r\n      <div  *ngIf=\"email.invalid && (email.dirty ||email.touched)\" >\r\n          <div *ngIf=\"email.errors.required\" >\r\n              Email is required.\r\n          </div>\r\n          <div *ngIf=\"email.errors.email\">\r\n              Invalid Email.\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Name</b></label>\r\n      <input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control form-control-lg\" id=\"name\" name=\"name\" placeholder=\"Your name\" required #name=\"ngModel\">\r\n        <div  *ngIf=\"name.invalid && (name.dirty ||name.touched)\">\r\n            <div *ngIf=\"name.errors.required\">\r\n                Name is required.\r\n            </div>\r\n            <div *ngIf=\"name.errors.minlength\">\r\n                Name must be at least 3 characters long.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Password</b></label>\r\n      <input  [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control form-control-lg\" id=\"password\" name=\"password\" placeholder=\"Password\" minlength=\"3\" required #password=\"ngModel\">\r\n        <div  *ngIf=\"password.invalid && (password.dirty ||password.touched)\">\r\n            <div *ngIf=\"password.errors.required\">\r\n                Password is required.\r\n            </div>\r\n            <div *ngIf=\"password.errors.minlength\">\r\n                Password must be at least 3 characters long.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Phone</b></label>\r\n      <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control form-control-lg\" id=\"phone\" name=\"phone\" placeholder=\"Phone\" required #phone=\"ngModel\" >\r\n        <div  *ngIf=\"phone.invalid && (phone.dirty ||phone.touched)\">\r\n            <div *ngIf=\"phone.errors.required\">\r\n                Phone is required.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Address</b></label>\r\n      <input [(ngModel)]=\"user.address\" type=\"text\" class=\"form-control form-control-lg\" id=\"address\" name=\"address\" placeholder=\"Address\" required #address=\"ngModel\">\r\n        <div  *ngIf=\"address.invalid && (address.dirty ||address.touched)\">\r\n            <div *ngIf=\"address.errors.required\">\r\n                Address is required.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!form.form.valid\" >Sign Up</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(location, userService, router) {
        this.location = location;
        this.userService = userService;
        this.router = router;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.signUp(this.user).subscribe(function (u) {
            _this.router.navigate(['/login']);
        }, function (e) { });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/spinner/spinner-component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/spinner/spinner-component.ts ***!
  \****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loadingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loadingService */ "./src/app/services/loadingService.ts");



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(loader) {
        this.loader = loader;
    }
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/pages/spinner/spinner.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].ShadowDom,
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/pages/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_loadingService__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/spinner/spinner.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/spinner/spinner.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cssload-container {\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    z-index: 9999;\r\n  }\r\n  \r\n  .cssload-speeding-wheel {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 48%;\r\n    top: 40%;\r\n    width: 63px;\r\n    height: 63px;\r\n    margin: 0 auto;\r\n    border: 4px solid rgb(0, 0, 0);\r\n    border-radius: 50%;\r\n    border-left-color: transparent;\r\n    border-right-color: transparent;\r\n    animation: cssload-spin 500ms infinite linear;\r\n    -o-animation: cssload-spin 500ms infinite linear;\r\n    -ms-animation: cssload-spin 500ms infinite linear;\r\n    -webkit-animation: cssload-spin 500ms infinite linear;\r\n    -moz-animation: cssload-spin 500ms infinite linear;\r\n  }\r\n  \r\n  @keyframes cssload-spin {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes cssload-spin {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsY0FBYztHQUNmOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsOENBQThDO0lBQzlDLGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsc0RBQXNEO0lBQ3RELG1EQUFtRDtHQUNwRDs7RUFFRDtJQUNFO01BQ0Usa0NBQTBCO2NBQTFCLDBCQUEwQjtNQUMxQiwwQkFBMEI7S0FDM0I7R0FDRjs7RUFnQkQ7SUFDRTtNQUNFLGtDQUFrQztNQUNsQywwQkFBMEI7S0FDM0I7R0FDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc2xvYWQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcbiAgXHJcbiAgLmNzc2xvYWQtc3BlZWRpbmctd2hlZWwge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDglO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB3aWR0aDogNjNweDtcclxuICAgIGhlaWdodDogNjNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1tcy1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/spinner/spinner.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/spinner/spinner.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.loader.getLoading()\" class=\"cssload-container\">\r\n    <div class=\"cssload-speeding-wheel\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/statistics/stats.component.css":
/*!******************************************************!*\
  !*** ./src/app/pages/statistics/stats.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/statistics/stats.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/statistics/stats.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <h2 style=\"text-align: center\">{{ title }}</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\" *ngFor=\"let card of cards\">\r\n      <div class=\"card text-center card-animation\">\r\n        <div class=\"card-body\">\r\n          <i [class]=\"card.icon\"></i>\r\n          <h5 class=\"card-title\">{{ card.title }}</h5>\r\n          <p class=\"card-text\">{{ card.number }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/statistics/stats.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/statistics/stats.component.ts ***!
  \*****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StatsComponent = /** @class */ (function () {
    function StatsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.cards = [
            { title: 'Products', number: 0, icon: 'fas fa-box' },
            { title: 'Categories', number: 0, icon: 'fas fa-tags' },
            { title: 'Users', number: 0, icon: 'fas fa-users' },
            { title: 'Orders', number: 0, icon: 'fas fa-shopping-cart' }
        ];
        this.title = "Welcome Admin";
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getStats().subscribe(function (u) {
            _this.cards =
                [
                    { title: 'Products', number: u.products, icon: 'fas fa-box' },
                    { title: 'Categories', number: u.categories, icon: 'fas fa-tags' },
                    { title: 'Users', number: u.users, icon: 'fas fa-users' },
                    { title: 'Orders', number: u.orders, icon: 'fas fa-shopping-cart' }
                ];
        }, function (e) {
        });
    };
    StatsComponent.prototype.ngOnDestroy = function () {
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/pages/statistics/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/pages/statistics/stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-edit/user-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-edit/user-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZWRpdC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user-edit/user-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/user-edit/user-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Edit Profile</h1>\r\n<div style=\"width:40%; margin: 25px auto\" >\r\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label><b>Email address</b></label>\r\n        <input readonly [value]=user?.email type=\"email\" class=\"form-control form-control-lg \" disabled id=\"email\"\r\n               name=\"email\" placeholder=\"Enter email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Name</b></label>\r\n      <input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control form-control-lg\" id=\"name\" name=\"name\" placeholder=\"Your name\" required #name=\"ngModel\" autofocus>\r\n      <div  *ngIf=\"name.invalid && (name.dirty || name.touched)\">\r\n        <div *ngIf=\"name.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"name.errors.minlength\">\r\n          Name must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Password</b></label>\r\n      <input  [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control form-control-lg\" id=\"password\" name=\"password\" placeholder=\"Password\" minlength=\"3\" required #password=\"ngModel\">\r\n      <div  *ngIf=\"password.invalid && (password.dirty ||password.touched)\">\r\n        <div *ngIf=\"password.errors.required\">\r\n          Password is required.\r\n        </div>\r\n        <div *ngIf=\"password.errors.minlength\">\r\n          Password must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Phone</b></label>\r\n      <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control form-control-lg\" id=\"phone\" name=\"phone\" placeholder=\"Phone\" required #phone=\"ngModel\" >\r\n      <div  *ngIf=\"phone.invalid && (phone.dirty ||phone.touched)\">\r\n        <div *ngIf=\"phone.errors.required\">\r\n          Phone is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><b>Address</b></label>\r\n      <input [(ngModel)]=\"user.address\" type=\"text\" class=\"form-control form-control-lg\" id=\"address\" name=\"address\" placeholder=\"Address\" required #address=\"ngModel\">\r\n      <div  *ngIf=\"address.invalid && (address.dirty ||address.touched)\">\r\n        <div *ngIf=\"address.errors.required\">\r\n          Address is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!form.form.valid\" >Update</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/user-edit/user-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/user-edit/user-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");






var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var account = this.userService.currentUserValue.account;
        this.userService.get(account).subscribe(function (u) {
            _this.user = u;
            _this.user.password = '';
        }, function (e) {
        });
    };
    UserDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.update(this.user).subscribe(function (u) {
            _this.userService.nameTerms.next(u.name);
            var url = '/';
            if (_this.user.role != _enum_Role__WEBPACK_IMPORTED_MODULE_5__["Role"].Customer) {
                url = '/seller';
            }
            _this.router.navigateByUrl(url);
        }, function (_) { });
    };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/pages/user-edit/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/pages/user-edit/user-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-list/user.list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-list/user.list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbGlzdC91c2VyLmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user-list/user.list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/user-list/user.list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4\">Users</h1>\r\n<table id=\"table\" class=\"table table-striped text-center\" style=\"width: 100%\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Email</th>\r\n      <th scope=\"col\">Address</th>\r\n      <th scope=\"col\">Phone</th>\r\n      <th scope=\"col\">Role</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let user of page?.content\">\r\n      <td class=\"align-middle\">{{ user.id }}</td>\r\n      <td class=\"align-middle\">{{ user.name }}</td>\r\n      <td class=\"align-middle\">{{ user.email }}</td>\r\n      <td class=\"align-middle\">{{ user.address }}</td>\r\n      <td class=\"align-middle\">{{ user.phone }}</td>\r\n      <td class=\"align-middle\">{{ user.role }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<app-pagination [currentPage]=\"page\"></app-pagination>\r\n"

/***/ }),

/***/ "./src/app/pages/user-list/user.list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user-list/user.list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");





var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.ngOnDestroy = function () {
    };
    UserListComponent.prototype.getUsers = function (page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 5; }
        this.userService.getAllUsers(page, size)
            .subscribe(function (data) {
            _this.page = data;
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user.list',
            template: __webpack_require__(/*! ./user.list.component.html */ "./src/app/pages/user-list/user.list.component.html"),
            styles: [__webpack_require__(/*! ./user.list.component.css */ "./src/app/pages/user-list/user.list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/parts/navigation/navigation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/parts/navigation/navigation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/parts/navigation/navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/parts/navigation/navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"root\">\r\n    <img\r\n      src=\"/assets/brand.png\"\r\n      width=\"30\"\r\n      height=\"30\"\r\n      class=\"d-inline-block align-top\"\r\n      alt=\"\"\r\n    />\r\n    Ecommerce\r\n  </a>\r\n\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarNav\"\r\n    aria-controls=\"navbarNav\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <div\r\n      class=\"navbar-nav\"\r\n      *ngIf=\"!currentUser || currentUser.role == Role.Customer\"\r\n    >\r\n      <div class=\"dropdown show\">\r\n        <a\r\n          class=\"btn btn-secondary dropdown-toggle\"\r\n          href=\"#\"\r\n          role=\"button\"\r\n          id=\"dropdownMenuLink\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n        >\r\n          Categories\r\n        </a>\r\n\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n          <a\r\n            *ngFor=\"let category of categories\"\r\n            class=\"dropdown-item\"\r\n            routerLink=\"/category/{{ category.categoryId }}\"\r\n          >\r\n            {{ category.categoryName }}</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"navbar-nav\"\r\n      style=\"padding: 8px\"\r\n      *ngIf=\"currentUser && currentUser.role == Role.Admin\"\r\n    >\r\n      <div class=\"dropdown show\">\r\n        <a\r\n          class=\"btn btn-secondary dropdown-toggle\"\r\n          href=\"#\"\r\n          role=\"button\"\r\n          id=\"dropdownMenuLink\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n        >\r\n          Products\r\n        </a>\r\n\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n          <a class=\"dropdown-item\" routerLink=\"/seller/product\">\r\n            View All Products</a\r\n          >\r\n          <a class=\"dropdown-item\" routerLink=\"/seller/product/add\"> Add New</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"navbar-nav\"\r\n      style=\"padding: 8px\"\r\n      *ngIf=\"currentUser && currentUser.role == Role.Admin\"\r\n    >\r\n      <div class=\"dropdown show\">\r\n        <a class=\"btn btn-secondary\" routerLink=\"/order\" role=\"button\">\r\n          Orders\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"navbar-nav\"\r\n      style=\"padding: 8px\"\r\n      *ngIf=\"currentUser && currentUser.role == Role.Admin\"\r\n    >\r\n      <div class=\"dropdown show\">\r\n        <a class=\"btn btn-secondary\" routerLink=\"/seller/users\" role=\"button\">\r\n          Users\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"navbar-nav\"\r\n      style=\"padding: 8px\"\r\n      *ngIf=\"currentUser && currentUser.role == Role.Admin\"\r\n    >\r\n      <div class=\"dropdown show\">\r\n        <a\r\n          class=\"btn btn-secondary dropdown-toggle\"\r\n          href=\"#\"\r\n          role=\"button\"\r\n          id=\"dropdownMenuLink\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n        >\r\n          Category\r\n        </a>\r\n\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n          <a class=\"dropdown-item\" routerLink=\"/seller/category\">\r\n            View All Categories</a\r\n          >\r\n          <a class=\"dropdown-item\" routerLink=\"/seller/category/add\">\r\n            Add New</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"navbar-nav ml-auto\">\r\n      <a\r\n        *ngIf=\"!currentUser || currentUser.role == Role.Customer\"\r\n        class=\"nav-item nav-link\"\r\n        routerLink=\"/cart\"\r\n      >\r\n        <i class=\"fas fa-shopping-cart\"></i>\r\n        Cart\r\n      </a>\r\n\r\n      <ng-container *ngIf=\"currentUser; else noUser\">\r\n        <a\r\n          *ngIf=\"currentUser.role == Role.Customer\"\r\n          class=\"nav-item nav-link\"\r\n          routerLink=\"/order\"\r\n        >\r\n          <i class=\"fas fa-list-ul\"></i>\r\n          Orders\r\n        </a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/profile\">\r\n          {{ name }}\r\n        </a>\r\n        <a\r\n          class=\"nav-item nav-link\"\r\n          (click)=\"logout()\"\r\n          routerLink=\"/login\"\r\n          [queryParams]=\"{ logout: true }\"\r\n        >\r\n          Sign Out\r\n        </a>\r\n      </ng-container>\r\n      <ng-template #noUser>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/login\"> Sign In </a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/register\"> Sign Up </a>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/parts/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/parts/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(userService, productService, router) {
        this.userService = userService;
        this.productService = productService;
        this.router = router;
        this.root = '/';
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name$ = this.userService.name$.subscribe(function (aName) { return _this.name = aName; });
        this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            if (!user || user.role == _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"].Customer) {
                _this.root = '/';
            }
            else {
                _this.root = '/seller';
            }
        });
        this.getCategories();
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        this.currentUserSubscription.unsubscribe();
        // this.name$.unsubscribe();
    };
    NavigationComponent.prototype.getCategories = function () {
        var _this = this;
        this.productService.getAllCategories()
            .subscribe(function (data) {
            _this.categories = data;
        });
    };
    NavigationComponent.prototype.logout = function () {
        this.userService.logout();
        // this.router.navigate(['/login'], {queryParams: {logout: 'true'}} );
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/parts/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/parts/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/parts/pagination/pagination.component.css":
/*!***********************************************************!*\
  !*** ./src/app/parts/pagination/pagination.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/parts/pagination/pagination.component.html":
/*!************************************************************!*\
  !*** ./src/app/parts/pagination/pagination.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 column\">\r\n  <ul class=\"pagination justify-content-end\">\r\n      <li class=\"page-item\" *ngIf=\"currentPage?.number > 0; else prev\">\r\n          <a\r\n                  class=\"page-link\"\r\n                  [routerLink]=\"['./']\"\r\n                  [queryParams]=\"{ page: currentPage?.number, size: currentPage?.size }\"\r\n          >Previous</a\r\n          >\r\n    </li>\r\n      <ng-template #prev>\r\n          <li class=\"page-item  disabled\"><a class=\"page-link\">Previous</a></li>\r\n      </ng-template>\r\n\r\n      <ng-container *ngFor=\"let item of counter(currentPage?.totalPages); let i = index\">\r\n          <li class=\"page-item\" *ngIf=\"currentPage && currentPage.number != i; else active\">\r\n            <a class=\"page-link \"\r\n                    routerLink=\"./\"\r\n                    [queryParams]=\"{ page: i + 1, size: currentPage?.size }\"\r\n            >{{ i + 1 }}</a\r\n            >\r\n        </li>\r\n          <ng-template #active>\r\n              <li\r\n                      class=\"page-item active \"\r\n\r\n              >\r\n                  <button class=\"page-link \" disabled>{{ i + 1 }}</button>\r\n              </li>\r\n          </ng-template>\r\n      </ng-container>\r\n\r\n      <li\r\n              class=\"page-item\"\r\n              *ngIf=\"currentPage?.number + 1 < currentPage?.totalPages; else next\"\r\n      >\r\n          <a\r\n                  class=\"page-link\"\r\n                  [routerLink]=\"['./']\"\r\n                  [queryParams]=\"{\r\n          page: currentPage?.number + 2,\r\n          size: currentPage?.size\r\n        }\"\r\n          >Next</a\r\n          >\r\n    </li>\r\n    <ng-template #next>\r\n        <li class=\"page-item disabled \"><a class=\"page-link\">Next</a></li>\r\n    </ng-template>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/parts/pagination/pagination.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/parts/pagination/pagination.component.ts ***!
  \**********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.counter = function (i) {
        if (i === void 0) { i = 1; }
        return new Array(i);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "currentPage", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/parts/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/parts/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/services/CategoryService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/CategoryService.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Category */ "./src/app/models/Category.ts");







var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.categoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"] + "/category";
    }
    CategoryService.prototype.getCategoryPaged = function (page, size) {
        var url = this.categoryUrl + "?page=" + page + "&size=" + size;
        return this.http.get(url).pipe(
        // tap(data => console.log(data))
        );
    };
    CategoryService.prototype.getAllInPage = function (page, size) {
        var url = this.categoryUrl + "?page=" + page + "&size=" + size;
        return this.http.get(url)
            .pipe(
        // tap(_ => console.log(_)),
        );
    };
    CategoryService.prototype.getCategoryInPage = function (categoryType, page, size) {
        var url = this.categoryUrl + "/" + categoryType + "?page=" + page + "&size=" + size;
        return this.http.get(url).pipe(
        // tap(data => console.log(data))
        );
    };
    CategoryService.prototype.getDetail = function (id) {
        var url = this.categoryUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (_) {
            console.log("Get Detail Failed");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _models_Category__WEBPACK_IMPORTED_MODULE_6__["Category"]());
        }));
    };
    CategoryService.prototype.update = function (category) {
        console.log(category);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"] + "/seller/category";
        return this.http.put(url, category);
    };
    CategoryService.prototype.create = function (category) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"] + "/seller/category";
        return this.http.post(url, category);
    };
    CategoryService.prototype.delelte = function (category) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"] + "/seller/category/" + category.categoryId;
        return this.http.delete(url);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CategoryService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");








var CartService = /** @class */ (function () {
    function CartService(http, cookieService, userService) {
        var _this = this;
        this.http = http;
        this.cookieService = cookieService;
        this.userService = userService;
        this.cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/cart";
        this.localMap = {};
        this.itemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.items = this.itemsSubject.asObservable();
        this.totalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.total = this.totalSubject.asObservable();
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    CartService.prototype.getLocalCart = function () {
        if (this.cookieService.check('cart')) {
            this.localMap = JSON.parse(this.cookieService.get('cart'));
            return Object.values(this.localMap);
        }
        else {
            this.localMap = {};
            return [];
        }
    };
    CartService.prototype.getCart = function () {
        var _this = this;
        var localCart = this.getLocalCart();
        if (this.currentUser) {
            if (localCart.length > 0) {
                return this.http.post(this.cartUrl, localCart).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
                    _this.clearLocalCart();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cart) { return cart.cartItems; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]); }));
            }
            else {
                return this.http.get(this.cartUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cart) { return cart.cartItems; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]); }));
            }
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(localCart);
        }
    };
    CartService.prototype.addItem = function (productInOrder) {
        if (!this.currentUser) {
            if (this.cookieService.check('cart')) {
                this.localMap = JSON.parse(this.cookieService.get('cart'));
            }
            if (!this.localMap[productInOrder.productId]) {
                this.localMap[productInOrder.productId] = productInOrder;
            }
            else {
                this.localMap[productInOrder.productId].count += productInOrder.count;
            }
            this.cookieService.set('cart', JSON.stringify(this.localMap));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
        }
        else {
            var url = this.cartUrl + "/add";
            return this.http.post(url, {
                'quantity': productInOrder.count,
                'productId': productInOrder.productId
            });
        }
    };
    CartService.prototype.update = function (productInOrder) {
        if (this.currentUser) {
            var url = this.cartUrl + "/" + productInOrder.productId;
            return this.http.put(url, productInOrder.count);
        }
    };
    CartService.prototype.remove = function (productInOrder) {
        if (!this.currentUser) {
            delete this.localMap[productInOrder.productId];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }
        else {
            var url = this.cartUrl + "/" + productInOrder.productId;
            return this.http.delete(url).pipe();
        }
    };
    CartService.prototype.checkout = function () {
        var url = this.cartUrl + "/checkout";
        return this.http.post(url, null).pipe();
    };
    CartService.prototype.storeLocalCart = function () {
        this.cookieService.set('cart', JSON.stringify(this.localMap));
    };
    CartService.prototype.clearLocalCart = function () {
        console.log('clear local cart');
        this.cookieService.delete('cart');
        this.localMap = {};
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/loadingService.ts":
/*!********************************************!*\
  !*** ./src/app/services/loadingService.ts ***!
  \********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = false;
    }
    LoadingService.prototype.setLoading = function (loading) {
        this.loading = loading;
    };
    LoadingService.prototype.getLoading = function () {
        return this.loading;
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.orderUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"] + "/order";
    }
    OrderService.prototype.getPage = function (page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 10; }
        return this.http.get(this.orderUrl + "?page=" + page + "&size=" + size).pipe();
    };
    OrderService.prototype.show = function (id) {
        return this.http.get(this.orderUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); }));
    };
    OrderService.prototype.cancel = function (id) {
        return this.http.patch(this.orderUrl + "/cancel/" + id, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); }));
    };
    OrderService.prototype.finish = function (id) {
        return this.http.patch(this.orderUrl + "/finish/" + id, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); }));
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_productInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/productInfo */ "./src/app/models/productInfo.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/product";
        this.categoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/category";
        this.publicCategoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/category/public";
        this.statsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/seller/statistics";
    }
    ProductService.prototype.getAllInPage = function (page, size) {
        var url = this.productUrl + "?page=" + page + "&size=" + size;
        return this.http.get(url)
            .pipe(
        // tap(_ => console.log(_)),
        );
    };
    ProductService.prototype.getCategoryInPage = function (categoryType, page, size) {
        var url = this.categoryUrl + "/" + categoryType + "?page=" + page + "&size=" + size;
        return this.http.get(url).pipe(
        // tap(data => console.log(data))
        );
    };
    ProductService.prototype.getAllCategories = function () {
        var url = "" + this.publicCategoryUrl;
        return this.http.get(url).pipe(
        // tap(data => console.log(data))
        );
    };
    ProductService.prototype.getStats = function () {
        var url = "" + this.statsUrl;
        return this.http.get(url).pipe(
        // tap(data => console.log(data))
        );
    };
    ProductService.prototype.getDetail = function (id) {
        var url = this.productUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (_) {
            console.log("Get Detail Failed");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _models_productInfo__WEBPACK_IMPORTED_MODULE_5__["ProductInfo"]());
        }));
    };
    ProductService.prototype.update = function (productInfo) {
        console.log(productInfo);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/seller/product/" + productInfo.productId + "/edit";
        return this.http.put(url, productInfo);
    };
    ProductService.prototype.create = function (productInfo) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/seller/product/new";
        return this.http.post(url, productInfo);
    };
    ProductService.prototype.delelte = function (productInfo) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/seller/product/" + productInfo.productId + "/delete";
        return this.http.delete(url);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







var UserService = /** @class */ (function () {
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.nameTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.name$ = this.nameTerms.asObservable();
        var memo = localStorage.getItem('currentUser');
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(memo));
        this.currentUser = this.currentUserSubject.asObservable();
        cookieService.set('currentUser', memo);
    }
    Object.defineProperty(UserService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (loginForm) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/login";
        return this.http.post(url, loginForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) {
            if (user && user.token) {
                _this.cookieService.set('currentUser', JSON.stringify(user));
                if (loginForm.remembered) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                console.log((user.name));
                _this.nameTerms.next(user.name);
                _this.currentUserSubject.next(user);
                return user;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Login Failed', null)));
    };
    UserService.prototype.logout = function () {
        this.currentUserSubject.next(null);
        localStorage.removeItem('currentUser');
        this.cookieService.delete('currentUser');
    };
    UserService.prototype.signUp = function (user) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/register";
        return this.http.post(url, user);
    };
    UserService.prototype.getAllUsers = function (page, size) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/seller/users?page=" + page + "&size=" + size;
        return this.http.get(url).pipe(
        // tap(data => console.log(data))
        );
    };
    UserService.prototype.update = function (user) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/profile";
        return this.http.put(url, user);
    };
    UserService.prototype.get = function (email) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/profile/" + email;
        return this.http.get(url);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, apiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
var apiUrl = 'http://localhost:8080';
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

module.exports = __webpack_require__(/*! C:\Users\bryan\OneDrive\Desktop\ecommerce-store-1\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map