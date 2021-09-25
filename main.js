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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  margin:0;\r\n  padding: 0;\r\n}\r\n\r\n#mainDiv {\r\n\r\n}\r\n\r\n#navBarWrapper {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  font-size: 16px;\r\n  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;\r\n\r\n}\r\n\r\n#navbarWrapper nav.desk,  #navbarWrapper nav.mob{\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    background:  #26005e;\r\n    font-size: 16px;\r\n    height: auto;\r\n    box-shadow: 0px 2px 2px 0 rgba(0,0,0,0.14) ;\r\n    border-bottom: 2px solid rgba(207, 205, 205, 0.452);\r\n\r\n}\r\n\r\nnav.desk ul {\r\n  list-style: none;\r\n  display: flex;\r\n  width: 75%;\r\n  height: auto;\r\n  margin: 0 auto;\r\n}\r\n\r\nnav.desk ul li {\r\n  width: 20%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  margin-bottom: 0px;\r\n  color: white;\r\n  padding: 2px 10px 2px 10px;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\nnav ul li a {\r\n  text-decoration: none;\r\n  border: 3px solid transparent;\r\n  padding: 2px 10px 2px 10px;\r\n  border-radius: 5px;\r\n  transition: 0.5s all  ease-in-out;\r\n  color: white;\r\n}\r\n\r\nnav.desk ul li a:hover, nav.mob ul li a:hover {\r\n  background-color: #98acfa;\r\n  border: 3px solid white;\r\n  border-radius: 5px;\r\n  color: #0c008e;\r\n}\r\n\r\nnav.desk ul li a:focus, nav.mob ul li a:focus  {\r\n  background: #0c008e;\r\n\r\n}\r\n\r\nnav.desk ul li a:focus:hover, nav.mob ul li a:focus:hover  {\r\n  background: #98acfa;\r\n  color: #0c008e;\r\n}\r\n\r\nnav.desk ul li a.active, nav.mob ul li a.active {\r\n  background-color: #f5f6fa;\r\n  color: black;\r\n}\r\n\r\nnav.desk ul li a.active:hover, nav.mob ul li a.active:hover  {\r\n  color: black;\r\n  background-color: #98acfa;\r\n}\r\n\r\nnav.mob {\r\n  display: none;\r\n}\r\n\r\n#outerHamburger {\r\n  padding-right: 1%;\r\n  padding-top: 1.5%;\r\n  padding-bottom: 1.5%;\r\n}\r\n\r\n#hamburger {\r\n  height: 5%;\r\n  width: 9%;\r\n  overflow:hidden;\r\n  background: white;\r\n  cursor: pointer;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n#hamWrap {\r\n  margin-right: 0.5em;\r\n  margin-left: 0.5em;\r\n  margin-top: 0.2em;\r\n  margin-bottom: 0.3em;\r\n}\r\n\r\n#hamburgerIcon {\r\n  width: 100%;\r\n  height: 2.4em;\r\n}\r\n\r\n#mobListWrap {\r\n  overflow: hidden;\r\n}\r\n\r\n#mobListWrap li {\r\n  margin-top: 1%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n#listExpander {\r\n  margin-top: -100%;\r\n  transition: all 0.4s;\r\n  opacity: 0;\r\n}\r\n\r\n#listExpander.expanded {\r\n  margin-top: 0;\r\n  width: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n.contracted {\r\n\r\n}\r\n\r\n/*Mobile navigation ---------------- */\r\n\r\n@media screen and (max-width: 750px) {\r\n  nav.desk {\r\n    display: none;\r\n  }\r\n  nav.mob {\r\n    display: block;\r\n    align-items: right;\r\n  }\r\n  #navbarWrapper nav.mob {\r\n    font-size: 90%;\r\n  }\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 8%;\r\n  }\r\n  #mobListWrap {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .mob ul {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n  .mob li {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 9%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #navbarWrapper nav.mob {\r\n    font-size: 70%;\r\n  }\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 9%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 410px) {\r\n  #navbarWrapper nav.mob {\r\n    font-size: 70%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 337px) {\r\n  #navbarWrapper nav.mob {\r\n    font-size: 50%;\r\n  }\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 9%;\r\n  }\r\n}\r\n\r\n#routerOutlet {\r\n  margin-top: 0px;\r\n}\r\n\r\n.navbar{\r\n  margin-bottom: 0!important;\r\n}\r\n\r\n.navbar-collapse.collapse.in {\r\n  display: block!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBOztBQUVBOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlFQUFpRTs7QUFFbkU7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLG1EQUFtRDs7QUFFdkQ7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1COztBQUVyQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUNBOztBQUVBOztBQUtBLHNDQUFzQzs7QUFDdEM7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiOztBQUVGOztBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUNGOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI21haW5EaXYge1xyXG5cclxufVxyXG4jbmF2QmFyV3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogJ1BhbGF0aW5vIExpbm90eXBlJywgJ0Jvb2sgQW50aXF1YScsIFBhbGF0aW5vLCBzZXJpZjtcclxuXHJcbn1cclxuI25hdmJhcldyYXBwZXIgbmF2LmRlc2ssICAjbmF2YmFyV3JhcHBlciBuYXYubW9ie1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogICMyNjAwNWU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCkgO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjA3LCAyMDUsIDIwNSwgMC40NTIpO1xyXG5cclxufVxyXG5uYXYuZGVzayB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbm5hdi5kZXNrIHVsIGxpIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4IDJweCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsICBlYXNlLWluLW91dDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxubmF2LmRlc2sgdWwgbGkgYTpob3ZlciwgbmF2Lm1vYiB1bCBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThhY2ZhO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzBjMDA4ZTtcclxufVxyXG5uYXYuZGVzayB1bCBsaSBhOmZvY3VzLCBuYXYubW9iIHVsIGxpIGE6Zm9jdXMgIHtcclxuICBiYWNrZ3JvdW5kOiAjMGMwMDhlO1xyXG5cclxufVxyXG5uYXYuZGVzayB1bCBsaSBhOmZvY3VzOmhvdmVyLCBuYXYubW9iIHVsIGxpIGE6Zm9jdXM6aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kOiAjOThhY2ZhO1xyXG4gIGNvbG9yOiAjMGMwMDhlO1xyXG59XHJcbm5hdi5kZXNrIHVsIGxpIGEuYWN0aXZlLCBuYXYubW9iIHVsIGxpIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubmF2LmRlc2sgdWwgbGkgYS5hY3RpdmU6aG92ZXIsIG5hdi5tb2IgdWwgbGkgYS5hY3RpdmU6aG92ZXIgIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4YWNmYTtcclxufVxyXG5cclxubmF2Lm1vYiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI291dGVySGFtYnVyZ2VyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICBwYWRkaW5nLXRvcDogMS41JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41JTtcclxufVxyXG5cclxuI2hhbWJ1cmdlciB7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICB3aWR0aDogOSU7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxufVxyXG4jaGFtV3JhcCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zZW07XHJcbn1cclxuI2hhbWJ1cmdlckljb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMi40ZW07XHJcbn1cclxuI21vYkxpc3RXcmFwIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNtb2JMaXN0V3JhcCBsaSB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuI2xpc3RFeHBhbmRlciB7XHJcbiAgbWFyZ2luLXRvcDogLTEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4jbGlzdEV4cGFuZGVyLmV4cGFuZGVkIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbnRyYWN0ZWQge1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLypNb2JpbGUgbmF2aWdhdGlvbiAtLS0tLS0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgbmF2LmRlc2sge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbmF2Lm1vYiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcclxuICB9XHJcbiAgI25hdmJhcldyYXBwZXIgbmF2Lm1vYiB7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICB9XHJcbiAgI2hhbWJ1cmdlciB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgd2lkdGg6IDglO1xyXG4gIH1cclxuICAjbW9iTGlzdFdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1vYiB1bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm1vYiBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgI2hhbWJ1cmdlciB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgd2lkdGg6IDklO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICNuYXZiYXJXcmFwcGVyIG5hdi5tb2Ige1xyXG4gICAgZm9udC1zaXplOiA3MCU7XHJcbiAgfVxyXG4gICNoYW1idXJnZXIge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiA5JTtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XHJcbiAgI25hdmJhcldyYXBwZXIgbmF2Lm1vYiB7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMzN3B4KSB7XHJcbiAgI25hdmJhcldyYXBwZXIgbmF2Lm1vYiB7XHJcbiAgICBmb250LXNpemU6IDUwJTtcclxuICB9XHJcbiAgI2hhbWJ1cmdlciB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgd2lkdGg6IDklO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiNyb3V0ZXJPdXRsZXQge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ubmF2YmFye1xyXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlLmluIHtcclxuICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--Redesigned navbar-->\r\n<div id=\"navbarWrapper\">\r\n  <nav class=\"desk\">\r\n    <ul class=\"nav\">\r\n      <li><a routerLink='home' routerLinkActive='active'>Home</a></li>\r\n      <li><a routerLink='me' routerLinkActive='active'>About</a></li>\r\n\r\n      <li><a routerLink='contact' routerLinkActive='active'>Contact</a></li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <nav class=\"mob\">\r\n      <div class=\"d-flex justify-content-end\" id=\"outerHamburger\">\r\n        <div id=\"hamburger\" (click)=\"onClickHamburgerButton()\">\r\n\r\n          <div id=\"hamWrap\">\r\n            <img id=\"hamburgerIcon\" src=\"../assets/Hamburger_icon.png\">\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"mobListWrap\">\r\n        <div #listExpander id=\"listExpander\">\r\n          <ul class=\"nav\" >\r\n            <li><a routerLink='home' routerLinkActive='active'>Home</a></li>\r\n            <li><a routerLink='me' routerLinkActive='active'>About</a></li>\r\n\r\n            <li><a routerLink='contact' routerLinkActive='active'>Contact</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n</div>\r\n\r\n\r\n\r\n    <div id=\"routerOutlet\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/test-service */ "./src/app/services/test-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(testService) {
        this.testService = testService;
        this.title = 'app';
    }
    AppComponent.prototype.onClickHamburgerButton = function () {
        if (this.listExpander.nativeElement.classList.contains('expanded')) {
            $('#listExpander').removeClass('expanded');
            console.log($('#listExpander').attr('class'));
        }
        else {
            $('#listExpander').addClass('expanded');
            console.log($('#listExpander').attr('class'));
        }
    };
    AppComponent.prototype.callApi = function (name) {
        this.testService.getAllCats().subscribe(function (val) { return console.log(val); });
    };
    AppComponent.prototype.onEmitPost = function (payload) {
        console.log(payload);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listExpander'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "listExpander", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/test-service */ "./src/app/services/test-service.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _services_windowRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/windowRef */ "./src/app/services/windowRef.ts");
/* harmony import */ var _connect_form_connect_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./connect-form/connect-form.component */ "./src/app/connect-form/connect-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_email_sender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/email-sender */ "./src/app/services/email-sender.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");
/* harmony import */ var _services_college_fetch_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/college-fetch.service */ "./src/app/services/college-fetch.service.ts");
/* harmony import */ var _visualization_component_visualization_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visualization.component/visualization.component.component */ "./src/app/visualization.component/visualization.component.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
                _connect_form_connect_form_component__WEBPACK_IMPORTED_MODULE_8__["ConnectFormComponent"],
                _testing_testing_component__WEBPACK_IMPORTED_MODULE_12__["TestingComponent"],
                _visualization_component_visualization_component_component__WEBPACK_IMPORTED_MODULE_14__["VisualizationComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'testing', component: _testing_testing_component__WEBPACK_IMPORTED_MODULE_12__["TestingComponent"] },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"] },
                    { path: 'me', component: _visualization_component_visualization_component_component__WEBPACK_IMPORTED_MODULE_14__["VisualizationComponent"] },
                    { path: '*', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
                ], { useHash: true })
            ],
            providers: [_services_windowRef__WEBPACK_IMPORTED_MODULE_7__["WindowRefService"], _services_email_sender__WEBPACK_IMPORTED_MODULE_10__["EmailSenderService"], _services_test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"], _services_college_fetch_service__WEBPACK_IMPORTED_MODULE_13__["CollegeFetchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#outerFrame {\r\n    \r\n}\r\n#shiftedRight{\r\n  \r\n}\r\n@media screen and (max-width: 320px) {\r\n    .captions {\r\n  \r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBRUU7SUFDRTs7SUFFQTtFQUNGIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvdXRlckZyYW1lIHtcclxuICAgIFxyXG59XHJcbiNzaGlmdGVkUmlnaHR7XHJcbiAgXHJcbn1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLmNhcHRpb25zIHtcclxuICBcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"outerFrame\">\r\n  <div id=\"shiftedRight\">\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/connect-form/connect-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/connect-form/connect-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#formWrapOuter {\r\n    margin-top: 3%;\r\n    width: 60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background: #e8eded;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    border-radius: 3%;\r\n}\r\n#formWrap {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n}\r\n#formSeparator{\r\n    height: 1px;\r\n    border: 0;\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvY29ubmVjdC1mb3JtL2Nvbm5lY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0RBQXNEO0FBQzFEIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvY29ubmVjdC1mb3JtL2Nvbm5lY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvcm1XcmFwT3V0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlZGVkO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XHJcbn1cclxuI2Zvcm1XcmFwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4jZm9ybVNlcGFyYXRvcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxMnB4IDEycHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/connect-form/connect-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/connect-form/connect-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"formWrapOuter\">\r\n  <div id=\"formWrap\" *ngIf=\"!name; else formInfo\"> \r\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"sendForm(rForm.value)\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupExampleInput\">Name</label>\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control form-control-sm\" id=\"formGroupExampleInput\" placeholder=\"Your Name\">\r\n      </div>\r\n      <hr class=\"form-separator\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupExampleInput2\">Email</label>\r\n        <input formControlName=\"email\" type=\"email\" class=\"form-control form-control-sm\" id=\"formGroupExampleInput2\" placeholder=\"example@something.com\">\r\n      </div>\r\n      <hr class=\"form-separator\">\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"formGroupExampleInput2\">Phone Number</label>\r\n          <input formControlName=\"phone\" type=\"number\" class=\"form-control form-control-sm\" id=\"formGroupExampleInput2\" placeholder=\"Optional\">\r\n        </div>\r\n      \r\n      <hr class=\"form-separator\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleFormControlTextarea1\">Message</label>\r\n        <textarea formControlName=\"message\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"5\" placeholder=\"Write your message here...\"></textarea>\r\n      </div>\r\n\r\n      <hr class=\"form-separator\">\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!rForm.valid\">Submit</button>\r\n\r\n    </form>\r\n  </div>\r\n</div> \r\n\r\n<ng-template #formInfo>\r\n  <div>\r\n    {{name}}\r\n  </div>\r\n</ng-template> "

/***/ }),

/***/ "./src/app/connect-form/connect-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/connect-form/connect-form.component.ts ***!
  \********************************************************/
/*! exports provided: ConnectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectFormComponent", function() { return ConnectFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_email_sender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/email-sender */ "./src/app/services/email-sender.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectFormComponent = /** @class */ (function () {
    function ConnectFormComponent(fb, emailSender) {
        this.fb = fb;
        this.emailSender = emailSender;
        this.rForm = fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator],
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]
        });
    }
    ConnectFormComponent.prototype.ngOnInit = function () {
    };
    ConnectFormComponent.prototype.sendForm = function (post) {
        this.message = post.message;
        this.name = post.name;
        this.phone = post.phone;
        this.email = post.email;
        this.emailSender.sendMessageToEmail(this.name, this.phone, this.email, this.message)
            .subscribe(function (data) { console.log(data); });
    };
    ConnectFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect-form',
            template: __webpack_require__(/*! ./connect-form.component.html */ "./src/app/connect-form/connect-form.component.html"),
            styles: [__webpack_require__(/*! ./connect-form.component.css */ "./src/app/connect-form/connect-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_email_sender__WEBPACK_IMPORTED_MODULE_2__["EmailSenderService"]])
    ], ConnectFormComponent);
    return ConnectFormComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contMain{\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n   \r\n}\r\n#frame {\r\n    height: 400px;\r\n    width: 100%;\r\n    background-image: url('blue-building.jpg');\r\n   \r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: inline-flex;\r\n}\r\n#leftFrame{\r\n    width: 100%;\r\n    height:100%;\r\n    margin-left: 70px;\r\n    margin-right: 40px;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n#right {\r\n    height: 400px;\r\n    width: 400px;\r\n}\r\n#right div {\r\n    overflow: hidden; /* [1.2] Hide the overflowing of child elements */\r\n}\r\n#me {\r\n    max-width:100%;\r\n    height: 400px;\r\n    opacity: 0;\r\n    overflow:hidden;\r\n    transition: -webkit-transform .5s ease;\r\n    transition: transform .5s ease;\r\n    transition: transform .5s ease, -webkit-transform .5s ease;\r\n}\r\n#me:hover {\r\n    -webkit-transform: scale(1.2) ;\r\n            transform: scale(1.2) ;\r\n}\r\n#welcome {\r\n    color: aliceblue;\r\n    font-family: 'Palatino Linotype', serif;\r\n    text-shadow: 3px 2px black;\r\n    font-size: 250%;   /*c*/\r\n    \r\n}\r\n.separator1 {\r\n    color: whitesmoke;\r\n    border: 1px solid rgba(0, 0, 0, 0.336);\r\n}\r\n#subTitle {\r\n    color: aliceblue;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 25px;\r\n    font-style: italic;\r\n    opacity: 0;\r\n}\r\n#segway {\r\n    color: rgb(0, 88, 165);\r\n    font-family: 'Times New Roman', Times, serif;\r\n    text-shadow: 1px  black;\r\n    font-size: 130%; \r\n    margin-top: 5%;  \r\n    \r\n}\r\n#segwayHr {\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n    border: 0;\r\n    height: 8px;\r\n}\r\n#showCaseWrapper {\r\n    width: 74%;\r\n    margin-left: 14%;\r\n}\r\n.showcase {\r\n    margin-top: 3%;\r\n    background: #dee2e6;\r\n}\r\n#personalProjectsText {\r\n    text-align: center;\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n    font-size: 120%;\r\n}\r\n.title-container {\r\n    \r\n}\r\n.card-title {\r\n    font-family: \"Lucida Console\";\r\n    font-weight: bold;\r\n    font-size: 1.4em;\r\n    text-align: center;\r\n}\r\n.feature-list {\r\n    font-size: 16px;\r\n    font-family: cursive, sans-serif;\r\n    color: gray;\r\n}\r\n.feature-intro {\r\n    font-weight: bold;\r\n}\r\n#bottomFeatureRow {\r\n    font-size: 120%;\r\n}\r\nbottomFeatureRow a {\r\n    text-decoration: underline;\r\n    color: blue;\r\n}\r\n#featurePhotoRow {\r\n    height: 100%;\r\n}\r\n.image-wrapper {\r\n   \r\n   \r\n    height: 100%;\r\n}\r\n.image-wrapper a {\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n.image-wrapper-a {\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n#reparkScreen {\r\n    width: 61%;\r\n    height: 55%;\r\n    transition: -webkit-transform 1s ease;\r\n    transition: transform 1s ease;\r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n}\r\n.image-wrapper:hover img {\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n}\r\n.cool-text {\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n    color: rgb(0, 88, 165);\r\n}\r\n.resumeText h3 {\r\n    \r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n    color: rgb(0, 88, 165);\r\n}\r\n.resumeText h4 {\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n    color: rgb(0, 88, 165);\r\n}\r\n.resumeHr {\r\n    width: 70%;\r\n    border: 1px solid rgba(143, 143, 143, 0.582);\r\n}\r\n#resumeWrap {\r\n    display: inline-flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n#resume {\r\n    transition: -webkit-transform .5s ease;\r\n    transition: transform .5s ease;\r\n    transition: transform .5s ease, -webkit-transform .5s ease;\r\n    height: 20vw;\r\n    padding-bottom: 5%;\r\n    width: 51vw;\r\n}\r\n#resume:hover {\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n}\r\n.social-media-panel-outer {\r\n    margin-left: 2%;\r\n    margin-top: 18px;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 95%;\r\n}\r\n.social-media-panel-outer a {\r\n    \r\n  transition: -webkit-transform .5s ease;\r\n    \r\n  transition: transform .5s ease;\r\n    \r\n  transition: transform .5s ease, -webkit-transform .5s ease;\r\n}\r\n.social-media-panel-outer a:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.social-media-panel {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 40%;\r\n}\r\n#facebookDiv {\r\n    width: 80%;\r\n    display: inline-grid;\r\n}\r\n#linkedinDiv {\r\n    width: 80%;\r\n    display: inline-grid;\r\n}\r\n.social-media-text {\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\n.social-media-pic {\r\n  \r\n}\r\n#linkedin {\r\n    width: 40%;\r\n    \r\n}\r\n#facebook {\r\n   width: 40%;\r\n   border: 1px transparent white;\r\n   border-radius: 7%; \r\n}\r\n/* misc classes  */\r\n.bordered {\r\n    border: 1px solid gray;\r\n}\r\n.separator2 {\r\n    height: 12px;\r\n    border: 0;\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n}\r\n.image-container {\r\n    overflow: hidden;\r\n}\r\n.image-container a {\r\n    overflow: hidden;\r\n}\r\n/* for media queries:\r\nchange:\r\n#frame\r\n#right\r\n#welcome\r\n#me\r\n#subTitle\r\n*/\r\n@media screen and (min-width: 992px){\r\n    #reparkScreen {\r\n        width: 45%;\r\n        height: 82%;\r\n    }\r\n    .image-wrapper {\r\n        padding-top: 10px;\r\n    }\r\n    .image-wrapper:hover img {\r\n        -webkit-transform: scale(1.3);\r\n                transform: scale(1.3);\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    #reparkScreen {\r\n         height: 65vw;\r\n    }\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsMENBQXVEOztJQUV2RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0IsRUFBRSxpREFBaUQ7QUFDdkU7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixzQ0FBOEI7SUFBOUIsOEJBQThCO0lBQTlCLDBEQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsZUFBZSxJQUFJLElBQUk7O0FBRTNCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLHNEQUFzRDtJQUN0RCxTQUFTO0lBQ1QsV0FBVztBQUNmO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLGVBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7OztJQUdJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxxQ0FBNkI7SUFBN0IsNkJBQTZCO0lBQTdCLHdEQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0VBQWtFO0lBQ2xFLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGtFQUFrRTtJQUNsRSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtFQUFrRTtJQUNsRSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDViw0Q0FBNEM7QUFDaEQ7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QiwwREFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7QUFHQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7O0VBRUUsc0NBQThCOztFQUE5Qiw4QkFBOEI7O0VBQTlCLDBEQUE4QjtBQUNoQztBQUNBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7R0FDRyxVQUFVO0dBQ1YsNkJBQTZCO0dBQzdCLGlCQUFpQjtBQUNwQjtBQUlBLGtCQUFrQjtBQUVsQjtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBR0E7Ozs7Ozs7Q0FPQztBQUVEO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDZCQUFxQjtnQkFBckIscUJBQXFCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJO1NBQ0ssWUFBWTtJQUNqQjs7QUFFSiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRNYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgXHJcbn1cclxuI2ZyYW1lIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JsdWUtYnVpbGRpbmcuanBnJyk7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4jbGVmdEZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNyaWdodCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbiNyaWdodCBkaXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogWzEuMl0gSGlkZSB0aGUgb3ZlcmZsb3dpbmcgb2YgY2hpbGQgZWxlbWVudHMgKi9cclxufVxyXG5cclxuI21lIHtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbn1cclxuI21lOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSA7XHJcbn1cclxuI3dlbGNvbWUge1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFsYXRpbm8gTGlub3R5cGUnLCBzZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAzcHggMnB4IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyNTAlOyAgIC8qYyovXHJcbiAgICBcclxufVxyXG5cclxuLnNlcGFyYXRvcjEge1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzM2KTtcclxufVxyXG5cclxuI3N1YlRpdGxlIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuI3NlZ3dheSB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDg4LCAxNjUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4ICBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTMwJTsgXHJcbiAgICBtYXJnaW4tdG9wOiA1JTsgIFxyXG4gICAgXHJcbn1cclxuI3NlZ3dheUhyIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMTJweCAxMnB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogOHB4O1xyXG59XHJcblxyXG4jc2hvd0Nhc2VXcmFwcGVyIHtcclxuICAgIHdpZHRoOiA3NCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xyXG59XHJcbi5zaG93Y2FzZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGJhY2tncm91bmQ6ICNkZWUyZTY7XHJcbn1cclxuI3BlcnNvbmFsUHJvamVjdHNUZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsQ2VudHVyeUdvdGhpYyxBcHBsZUdvdGhpYyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgXHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmVhdHVyZS1saXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLmZlYXR1cmUtaW50cm8ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuI2JvdHRvbUZlYXR1cmVSb3cge1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcbmJvdHRvbUZlYXR1cmVSb3cgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbiNmZWF0dXJlUGhvdG9Sb3cge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICAgXHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBhIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW1hZ2Utd3JhcHBlci1hIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4jcmVwYXJrU2NyZWVuIHtcclxuICAgIHdpZHRoOiA2MSU7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xyXG59XHJcbi5pbWFnZS13cmFwcGVyOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuLmNvb2wtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLENlbnR1cnlHb3RoaWMsQXBwbGVHb3RoaWMsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMCwgODgsIDE2NSk7XHJcbn1cclxuLnJlc3VtZVRleHQgaDMge1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLENlbnR1cnlHb3RoaWMsQXBwbGVHb3RoaWMsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMCwgODgsIDE2NSk7XHJcbn1cclxuLnJlc3VtZVRleHQgaDQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIixDZW50dXJ5R290aGljLEFwcGxlR290aGljLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDAsIDg4LCAxNjUpO1xyXG59XHJcbi5yZXN1bWVIciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDMsIDE0MywgMTQzLCAwLjU4Mik7XHJcbn1cclxuXHJcblxyXG4jcmVzdW1lV3JhcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3Jlc3VtZSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbiAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogNTF2dztcclxufVxyXG4jcmVzdW1lOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuXHJcbi5zb2NpYWwtbWVkaWEtcGFuZWwtb3V0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtcGFuZWwtb3V0ZXIgYSB7XHJcbiAgICBcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1wYW5lbC1vdXRlciBhOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG4uc29jaWFsLW1lZGlhLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcbiNmYWNlYm9va0RpdiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuI2xpbmtlZGluRGl2IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxufVxyXG4uc29jaWFsLW1lZGlhLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1waWMge1xyXG4gIFxyXG59XHJcbiNsaW5rZWRpbiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgXHJcbn1cclxuI2ZhY2Vib29rIHtcclxuICAgd2lkdGg6IDQwJTtcclxuICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgd2hpdGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDclOyBcclxufVxyXG5cclxuXHJcblxyXG4vKiBtaXNjIGNsYXNzZXMgICovXHJcblxyXG4uYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxufVxyXG4uc2VwYXJhdG9yMiB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDEycHggMTJweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbWFnZS1jb250YWluZXIgYSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLyogZm9yIG1lZGlhIHF1ZXJpZXM6XHJcbmNoYW5nZTpcclxuI2ZyYW1lXHJcbiNyaWdodFxyXG4jd2VsY29tZVxyXG4jbWVcclxuI3N1YlRpdGxlXHJcbiovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAjcmVwYXJrU2NyZWVuIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogODIlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXdyYXBwZXI6aG92ZXIgaW1nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgI3JlcGFya1NjcmVlbiB7XHJcbiAgICAgICAgIGhlaWdodDogNjV2dztcclxuICAgIH1cclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"x\" class=\"container pt-3 mt-5\" style=\"border: 1px solid gray;\">\r\n  <div id=\"contMain\">  \r\n  <div class=\"row pl-4 pb-4\">\r\n        <div class=\"col-xs\">\r\n          <h3 class=\"cool-text\">Contact Info:</h3>\r\n          \r\n          \r\n          <p>2630 Bissonnet St. Apt 4201 , Houston, Texas, 77005</p>\r\n          <p>Phone: +1 (832)249-0063 </p>\r\n          <p>Work: +1 (713) 486-5100</p>\r\n          <p>Email: haideralrustem@yahoo.com </p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n    <div class=\"row pl-4 pb-4\" >\r\n        \r\n        <div class=\"resumeText\">\r\n          <h4 class=\"text-gp\">Connect with me through Social Media: </h4>\r\n        </div>\r\n      \r\n        <div class=\"social-media-panel-outer\">\r\n          <div class=\"social-media-panel\">\r\n            <div id=\"linkedinDiv\">\r\n              <a href=\"https://www.linkedin.com/in/haider-al-rustem-32010515a/\" target=\"_blank\" class=\"image-wrapper-a\">\r\n                <img  id=\"linkedin\" class=\"social-media-pic\" src=\"../../assets/linkedin.png\">\r\n              \r\n              </a>\r\n              <p class=\"text-gp social-media-text\">Linkedin</p>\r\n            </div>\r\n            <div id=\"facebookDiv\" class=\"\">\r\n              <a href=\"https://www.facebook.com/hydar.ali.92\" target=\"_blank\" class=\"image-wrapper-a\">\r\n                <img id=\"facebook\" class=\"social-media-pic\" src=\"../../assets/facebook.png\">\r\n                \r\n              </a>\r\n              <p class=\"text-gp social-media-text\">Facebook</p>\r\n            </div>\r\n\r\n            <div id=\"facebookDiv\" class=\"\">\r\n              <a  href=\"https://github.com/haideralrustem\" target=\"_blank\" class=\"image-wrapper-a\">\r\n                <img id=\"facebook\" class=\"social-media-pic\" src=\"../../assets/github.png\">\r\n                \r\n              </a>\r\n              <p class=\"text-gp social-media-text\">Github</p>\r\n            </div>\r\n      \r\n      \r\n          </div>\r\n      \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    overflow: hidden;\r\n}\r\n\r\n#homeMain{\r\n    \r\n}\r\n\r\nh3.text-gp, h4.text-gp {\r\n    color: rgb(89 67 222);\r\n}\r\n\r\n.debug-background {\r\n    background: rgb(255 255 255 / 25%);\r\n}\r\n\r\n#frame {\r\n    position: relative;\r\n    height: 400px;\r\n    width: 100%;\r\n    /* background-image: linear-gradient( rgba(4, 40, 116, 0.301), rgba(4, 40, 116, 0.301) ),url('../../assets/architecturalbuilding.jpg'); */\r\n    background-image: url('purple_lapop.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n    transition: 0.6s all ease-in-out;\r\n    opacity: 0;\r\n}\r\n\r\n.my-photo {\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    top: 85%;;\r\n    left: 40%;\r\n\r\n    opacity: 0;\r\n    \r\n}\r\n\r\n.my-photo img {\r\n    width: 15vw;\r\n    border-radius: 45px;\r\n}\r\n\r\n#leftFrame{\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n#left {\r\n    position: relative;\r\n    left: 16%;\r\n    top: 16%;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.alt-header-text {\r\n    color: white;\r\n    font-family: 'Palatino Linotype', serif;\r\n    text-shadow: 1px 2px black;\r\n}\r\n\r\n.my-name {\r\n    display: inline-block;\r\n    transition: 0.3s all ease-in-out;\r\n    font-family: 'Cairo', sans-serif;\r\n    font-style: italic;\r\n    padding-left: 10px;\r\n    padding-right: 14px;\r\n}\r\n\r\n.my-name:hover {    \r\n    -webkit-transform: scale(1.2);    \r\n            transform: scale(1.2);\r\n   \r\n}\r\n\r\n.my-name a {\r\n    text-decoration: none;\r\n    color: #87daf8;\r\n}\r\n\r\n.my-name a:hover {\r\n   \r\n    color: #aeecfc;\r\n    text-shadow: 0px 0px 3px #aeecfc;\r\n}\r\n\r\n.welcome {\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: 60vw;\r\n    /* background-color: #cac6c642; */\r\n    font-family: monospace, sans-serif;\r\n    font-size: 200%;\r\n    /* opacity: 0; */\r\n    text-align: center;\r\n    background: rgb(255 255 255 / 25%);\r\n    border-radius: 20px;\r\n\r\n    padding-top: 4%;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    \r\n\r\n    transition: 0.9s all ease-in-out;\r\n}\r\n\r\n.welcome-text {\r\n    color: beige;\r\n    font-family: 'Cairo', sans-serif;\r\n}\r\n\r\n.header-text {\r\n    color: rgb(160 251 255);\r\n    font-family: 'Palatino Linotype', serif;\r\n    text-shadow: 1px 2px black;\r\n    \r\n}\r\n\r\n.separator1 {\r\n    color: whitesmoke;\r\n    border: 1px solid rgba(0, 0, 0, 0.336);\r\n}\r\n\r\n#subTitle {\r\n    position: relative;\r\n    top: 200%;\r\n\r\n    width: 100%;\r\n    color :#130f40;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 25px;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    opacity: 0;\r\n    border-radius: 13px;\r\n    text-align: center;\r\n    text-shadow: 0px 1.1px #a9a7a7;\r\n    background: rgb(255 255 255 / 65%);\r\n    \r\n    margin-left: 0%;\r\n    padding: 1%;\r\n    transition: 0.3s text-shadow ease-in-out, 0.1s color ease-in-out,\r\n                0.1s box-shadow ease-in-out;\r\n    \r\n    \r\n}\r\n\r\n#subTitle:hover {\r\n    color: #5a2cff;\r\n    background: rgb(255 255 255 / 85%);\r\n    text-shadow: 0px 0px 0px #0c90fa;\r\n    box-shadow: 0px 0px 20px 5px #87daf8;\r\n}\r\n\r\n.subTitle-link {\r\n    text-decoration: none;\r\n    transition: 0.4s all ease-in-out;\r\n}\r\n\r\n#segway {\r\n    \r\n    font-family: 'Times New Roman', Times, serif;\r\n    text-shadow: 1px  black;\r\n    font-size: 130%; \r\n    margin-top: 5%;  \r\n    \r\n}\r\n\r\n#segwayHr {\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n    border: 0;\r\n    height: 8px;\r\n}\r\n\r\n.projects-main-wrap {\r\n    padding-left: 6%;\r\n    padding-right: 6%;\r\n}\r\n\r\n.showCaseWrapper {\r\n    width: 74%;\r\n    margin-left: 14%;\r\n}\r\n\r\n.showcase {\r\n    \r\n    margin-top: 3%;\r\n    /* background: #d07af28a; */\r\n    background: #b57ddb;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #f3b7b6, #b57ddb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.scroll-in-show {\r\n    opacity: 0;\r\n    transition: 1s opacity ease-in-out;\r\n}\r\n\r\n#personalProjectsText {\r\n    text-align: center;\r\n    font-family: \"Gill Sans\", sans-serif;\r\n    font-size: 120%;\r\n}\r\n\r\n.title-container {\r\n    \r\n}\r\n\r\n.card-title {\r\n    font-family: \"Lucida Console\";\r\n    font-weight: bold;\r\n    font-size: 1.4em;\r\n    text-align: center;\r\n    color: #26005e;\r\n}\r\n\r\n.feature-list {\r\n    font-size: 16px;\r\n    font-family: cursive, sans-serif;\r\n    color: rgb(49, 49, 49);\r\n}\r\n\r\n.feature-intro {\r\n    font-weight: bold;\r\n}\r\n\r\n#bottomFeatureRow {\r\n    font-size: 120%;\r\n}\r\n\r\nbottomFeatureRow a {\r\n    text-decoration: underline;\r\n    color: blue;\r\n}\r\n\r\n#featurePhotoRow {\r\n    height: 100%;\r\n}\r\n\r\n.project-description-text{\r\n        padding: 0 0 0 5%;\r\n}\r\n\r\n.image-wrapper {\r\n\r\n    height: 100%;\r\n}\r\n\r\n.image-wrapper a {\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 1%;\r\n    height: 100%;\r\n}\r\n\r\n.image-wrapper-a {\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.second .image-wrapper a {\r\n    padding-top: 3%;\r\n}\r\n\r\n#imageWrapperDjango {\r\n    overflow: visible;\r\n}\r\n\r\n#imageWrapperDjango a {\r\n    overflow: visible;\r\n}\r\n\r\n#djangoAppScreen {\r\n    width: 45%;\r\n    transition: -webkit-transform 1s ease;\r\n    transition: transform 1s ease;\r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n    border-radius: 10px;\r\n}\r\n\r\n#reparkScreen {\r\n    width: 61%;\r\n    height: 100%;\r\n    transition: -webkit-transform 1s ease;\r\n    transition: transform 1s ease;\r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n}\r\n\r\n#tableauScreen {\r\n    border-radius: 10px;\r\n    width: 61%;\r\n    height: 55%;\r\n    transition: -webkit-transform 1s ease;\r\n    transition: transform 1s ease;\r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n}\r\n\r\n#djangoAppScreen:hover {\r\n    -webkit-transform: scale(1.19);\r\n            transform: scale(1.19);\r\n    box-shadow: 0px 0px 10px 5px #bc87f8;\r\n}\r\n\r\n.image-wrapper:hover img {\r\n    -webkit-transform: scale(1.19);\r\n            transform: scale(1.19);\r\n    \r\n}\r\n\r\n.second .image-wrapper:hover img {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    box-shadow: 0px 0px 10px 5px #bc87f8;\r\n}\r\n\r\n.resumeText {\r\n    text-align: center;\r\n}\r\n\r\n.resumeText h4 {\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n    \r\n}\r\n\r\n.resumeHr {\r\n    width: 70%;\r\n    border: 1px solid rgba(143, 143, 143, 0.582);\r\n}\r\n\r\n#resumeWrap {\r\n    display: inline-flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    \r\n}\r\n\r\n.resume-img-wrap {\r\n    border: 3px solid transparent;\r\n    overflow: hidden;\r\n    height: 17vw;\r\n    margin-bottom: 3%;\r\n    border-radius: 10px;\r\n}\r\n\r\n.resume-img-wrap:hover {\r\n    border: 3px solid #0984e3;\r\n}\r\n\r\n#resume {\r\n    transition: -webkit-transform .5s ease;\r\n    transition: transform .5s ease;\r\n    transition: transform .5s ease, -webkit-transform .5s ease;\r\n    height: 20vw;\r\n    padding-bottom: 5%;\r\n    width: 51vw;\r\n    \r\n}\r\n\r\n#resume:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n\r\n.social-media-panel-outer {\r\n    margin-left: 2%;\r\n    margin-top: 18px;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 95%;\r\n}\r\n\r\n.social-media-panel-outer a {\r\n    \r\n  transition: -webkit-transform .5s ease;\r\n    \r\n  transition: transform .5s ease;\r\n    \r\n  transition: transform .5s ease, -webkit-transform .5s ease;\r\n}\r\n\r\n.social-media-panel-outer a:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n\r\n.social-media-panel {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 40%;\r\n}\r\n\r\n#facebookDiv, #githubDiv {\r\n    width: 80%;\r\n    display: inline-grid;\r\n}\r\n\r\n#linkedinDiv {\r\n    width: 80%;\r\n    display: inline-grid;\r\n}\r\n\r\n.social-media-text {\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\n\r\n.social-media-pic {\r\n  \r\n}\r\n\r\n#linkedin {\r\n    width: 40%;\r\n    \r\n}\r\n\r\n#facebook {\r\n   width: 40%;\r\n   border: 1px transparent white;\r\n   border-radius: 7%; \r\n}\r\n\r\n/* misc classes  */\r\n\r\n.bordered {\r\n    border: 1px solid gray;\r\n}\r\n\r\n.separator-styled{\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 1px;\r\n    border-style: solid;\r\n    border-width: 8px 11px 0 0px;\r\n    border-color: #0c90fa transparent transparent;\r\n    transition: 0.7s opacity ease-in-out;\r\n    opacity: 0;\r\n}\r\n\r\n.separator2 {\r\n    height: 12px;\r\n    border: 0;\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.image-container.welcome-img {\r\n    position: relative;\r\n    left: 80%;\r\n\r\n    width: 100%;\r\n    overflow: visible;\r\n    display: block;\r\n    padding-left: 2%;\r\n\r\n    transition: 1s all ease-in-out;\r\n    \r\n}\r\n\r\n.pre-animation-left {\r\n    left: 200%;  \r\n}\r\n\r\n.pre-animation-top {\r\n    top: 200%;  \r\n}\r\n\r\n.post-animation-left  {\r\n    left: 0%;\r\n}\r\n\r\n.post-animation-top {\r\n    top: 0%;\r\n}\r\n\r\n.image-container {\r\n    overflow: hidden;\r\n}\r\n\r\n.image-container a {\r\n    overflow: hidden;\r\n}\r\n\r\n.bolding {\r\n    font-weight: bold;\r\n}\r\n\r\n#formWrapper {\r\n    margin-bottom: 15%;\r\n}\r\n\r\n/* for media queries:\r\nchange:\r\n#frame\r\n#right\r\n#welcome\r\n#me\r\n#subTitle\r\n*/\r\n\r\n@media  screen and (min-width: 320px) and (max-width: 480px) {\r\n    /* Styles */\r\n    #right {\r\n        height: 25vw;\r\n        width: 400px;\r\n    }\r\n\r\n    #leftFrame .text-gp  {\r\n        font-size: 16px;\r\n    }\r\n\r\n    #leftFrame .welcome-text-wrap span, .my-name {\r\n        font-size: 80%;\r\n    }\r\n\r\n    #left {\r\n        left: 17%;\r\n        top: 20%;\r\n        width: 60vw;\r\n    }\r\n\r\n    .projects-main-wrap {\r\n        padding-left: 1%;\r\n        padding-right: 1%;\r\n    }\r\n    .showCaseWrapper {\r\n        width: 93%;\r\n        margin-left: 4%;\r\n    }\r\n    .image-container.welcome-img.post-animation-left {\r\n        left: 0%;\r\n    }\r\n\r\n    .row project-description-text .text-gp {\r\n        font-size: 16px;\r\n    }\r\n\r\n    \r\n    #reparkScreen {\r\n        width: 38%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        height:-webkit-fit-content;\r\n        height:-moz-fit-content;\r\n        height:fit-content;\r\n    }\r\n    .image-wrapper-a {\r\n        width: 20vw;\r\n    }\r\n\r\n    #social-media-connect {\r\n        width: 90%;\r\n        margin-left: 4%;\r\n    }\r\n    \r\n}\r\n\r\n@media  screen and (min-width: 480px) and (max-width: 568px) {\r\n    \r\n    #left {\r\n        left: 17%;\r\n        top: 20%;\r\n        width: 60vw;\r\n    }\r\n\r\n    .showCaseWrapper {\r\n        width: 93%;\r\n        margin-left: 4%;\r\n    }\r\n\r\n    .image-wrapper-a {\r\n        width: 18vw;\r\n    }\r\n\r\n    .image-container.welcome-img.post-animation-left {\r\n        left: 0%;\r\n    }\r\n\r\n    #reparkScreen {\r\n        width: 38%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        height:-webkit-fit-content;\r\n        height:-moz-fit-content;\r\n        height:fit-content;\r\n    }\r\n\r\n    #social-media-connect {\r\n        width: 90%;\r\n        margin-left: 4%;\r\n    }\r\n\r\n    .my-photo {\r\n       top: 85%;;\r\n    }\r\n    .my-photo img {\r\n        width: 10vw;\r\n        border-radius: 45px;\r\n    }\r\n    #subTitle {\r\n        font-size: 19px;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media screen and (min-width: 568px) and (max-width: 768px) {\r\n    \r\n    #leftFrame {\r\n        overflow: visible;\r\n        max-width: 36vw;\r\n    }\r\n    #left {\r\n        left: 41%;\r\n        top: 20%;\r\n    }\r\n    .image-container.welcome-img {\r\n        \r\n    \r\n    }\r\n\r\n    .showCaseWrapper {\r\n        width: 90%;\r\n        margin-left: 6%;\r\n    }\r\n\r\n    .image-container.welcome-img.post-animation-left {\r\n        left: 0%;\r\n    }\r\n    .post-animation-top {\r\n        top: 0%;\r\n    }\r\n    #reparkScreen {\r\n        width: 38%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        height:-webkit-fit-content;\r\n        height:-moz-fit-content;\r\n        height:fit-content;\r\n    }\r\n\r\n\r\n    .my-photo {\r\n        top: 72%;\r\n    }\r\n    .my-photo img {\r\n        width: 12vw;\r\n        border-radius: 45px;\r\n    }\r\n    #subTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    \r\n}\r\n\r\n@media screen and (min-width: 768px) and (max-width: 900px) {\r\n   \r\n    .image-container.welcome-img.post-animation-left  {\r\n        left: 0%;\r\n    }\r\n    .post-animation-top {\r\n        top: 0%;\r\n    }\r\n    #reparkScreen {\r\n        width: 45%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        height:-webkit-fit-content;\r\n        height:-moz-fit-content;\r\n        height:fit-content;\r\n    }\r\n\r\n    .my-photo {\r\n        top: 72%;\r\n    }\r\n    .my-photo img {\r\n        width: 12vw;\r\n        border-radius: 45px;\r\n    }\r\n    #subTitle {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1000px) {\r\n    .image-container.welcome-img.post-animation-left {\r\n        left: 0%;\r\n    }\r\n    .post-animation-top {\r\n        top: 0%;\r\n    }\r\n\r\n    .welcome {        \r\n        width: 55vw;\r\n    }\r\n    #reparkScreen {\r\n        width: 43%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        height:-webkit-fit-content;\r\n        height:-moz-fit-content;\r\n        height:fit-content;\r\n    }\r\n\r\n    .my-photo {\r\n        top: 75%;\r\n    }\r\n    .my-photo img {\r\n        width: 8vw;\r\n        border-radius: 55px;\r\n    }\r\n    #subTitle {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (min-width: 1000px) and (max-width: 1200px) {\r\n    #djangoAppScreen {\r\n        width: 65%;\r\n    }\r\n    #reparkScreen {\r\n        width: 45%;\r\n        height: 82%;\r\n    }\r\n    .image-wrapper {\r\n        padding-top: 10px;\r\n    }\r\n    .image-wrapper:hover img {\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2);\r\n    }\r\n\r\n    .welcome {\r\n        padding-bottom: 3%;\r\n        width: 55vw;\r\n    }\r\n    .image-container.welcome-img.post-animation-left  {\r\n        left: 0%;\r\n    }\r\n    .post-animation-top {\r\n        top: 0%;\r\n    }\r\n\r\n     #reparkScreen {\r\n        margin-top: 1%;\r\n        width: 43%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        padding-top: 5%;\r\n        height:100%;\r\n    }\r\n    .repark .productPhoto {\r\n        width: 55%;\r\n    }\r\n\r\n    .my-photo {\r\n        top: 75%;\r\n    }\r\n    .my-photo img {\r\n        width: 8vw;\r\n        border-radius: 65px;\r\n    }\r\n    #subTitle {\r\n        font-size: 23px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) and (max-width: 1380px) {\r\n    .welcome {\r\n        padding-bottom: 4%;\r\n        width: 56vw;\r\n    }\r\n    .image-container.welcome-img.post-animation-left {\r\n        left: -3%;\r\n    }\r\n\r\n\r\n    #djangoAppScreen {\r\n        width: 65%;\r\n    }\r\n\r\n    #reparkScreen {\r\n        margin-top: 1%;\r\n        width: 43%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        padding-top: 5%;\r\n        height:100%;\r\n    }\r\n    .repark .productPhoto {\r\n        width: 55%;\r\n    }\r\n\r\n\r\n\r\n    .my-photo {\r\n        top: 70%;\r\n    }\r\n    .my-photo img {\r\n        width: 8vw;\r\n        border-radius: 65px;\r\n    }\r\n    #subTitle {\r\n        font-size: 23px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1380px) {\r\n    .welcome {\r\n        padding-bottom: 4%;\r\n        width: 56vw;\r\n    }\r\n    .image-container.welcome-img.post-animation-left {\r\n        left: -3%;\r\n    }\r\n\r\n    .showCaseWrapper {\r\n        width: 60%;\r\n        margin-left: 18%;\r\n        \r\n    }\r\n    #djangoAppScreen {\r\n        width: 65%;\r\n    }\r\n    #reparkScreen {\r\n        margin-top: 1%;\r\n        width: 43%;\r\n        height: 60%;\r\n    }\r\n    .productPhoto {\r\n        padding-top: 5%;\r\n        height:100%;\r\n    }\r\n    .repark .productPhoto {\r\n        width: 55%;\r\n    }\r\n\r\n\r\n    .my-photo {\r\n        top: 71%;\r\n    }\r\n    .my-photo img {\r\n        width: 6vw;\r\n        border-radius: 65px;\r\n    }\r\n    #subTitle {\r\n        font-size: 23px;\r\n    }\r\n    \r\n}\r\n\r\n/* ...............STYLING THE PROFILE PHOTO............. */\r\n\r\n/* ............ LEGACY .................. */\r\n\r\n@media screen and (min-width: 992px){\r\n    \r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    \r\n}\r\n\r\n/* ............................ */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCx5SUFBeUk7SUFDekkseUNBQXNEO0lBQ3RELDRCQUE0QjtJQUM1QixzQkFBc0I7O0lBRXRCLGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFNBQVM7O0lBRVQsVUFBVTs7QUFFZDs7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUlBO0lBQ0ksMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0NB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aWxlIjoiLi4vLi4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2hvbWVNYWlue1xyXG4gICAgXHJcbn1cclxuIFxyXG5oMy50ZXh0LWdwLCBoNC50ZXh0LWdwIHtcclxuICAgIGNvbG9yOiByZ2IoODkgNjcgMjIyKTtcclxufVxyXG5cclxuLmRlYnVnLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSAyNTUgMjU1IC8gMjUlKTtcclxufVxyXG5cclxuI2ZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiYSg0LCA0MCwgMTE2LCAwLjMwMSksIHJnYmEoNCwgNDAsIDExNiwgMC4zMDEpICksdXJsKCcuLi8uLi9hc3NldHMvYXJjaGl0ZWN0dXJhbGJ1aWxkaW5nLmpwZycpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvcHVycGxlX2xhcG9wLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IDAuNnMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm15LXBob3RvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiA4NSU7O1xyXG4gICAgbGVmdDogNDAlO1xyXG5cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBcclxufVxyXG4ubXktcGhvdG8gaW1nIHtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuXHJcblxyXG4jbGVmdEZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuI2xlZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTYlO1xyXG4gICAgdG9wOiAxNiU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4uYWx0LWhlYWRlci10ZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFsYXRpbm8gTGlub3R5cGUnLCBzZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4ubXktbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcclxufVxyXG5cclxuLm15LW5hbWU6aG92ZXIgeyAgICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgXHJcbn1cclxuXHJcbi5teS1uYW1lIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM4N2RhZjg7XHJcbn1cclxuLm15LW5hbWUgYTpob3ZlciB7XHJcbiAgIFxyXG4gICAgY29sb3I6ICNhZWVjZmM7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggI2FlZWNmYztcclxufVxyXG5cclxuXHJcblxyXG4ud2VsY29tZSB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjNmM2NDI7ICovXHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgLyogb3BhY2l0eTogMDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSAvIDI1JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIFxyXG5cclxuICAgIHRyYW5zaXRpb246IDAuOXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLndlbGNvbWUtdGV4dCB7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiKDE2MCAyNTEgMjU1KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFsYXRpbm8gTGlub3R5cGUnLCBzZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IGJsYWNrO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zZXBhcmF0b3IxIHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMzNik7XHJcbn1cclxuXHJcbiNzdWJUaXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwMCU7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvciA6IzEzMGY0MDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMS4xcHggI2E5YTdhNztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSAvIDY1JSk7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0ZXh0LXNoYWRvdyBlYXNlLWluLW91dCwgMC4xcyBjb2xvciBlYXNlLWluLW91dCxcclxuICAgICAgICAgICAgICAgIDAuMXMgYm94LXNoYWRvdyBlYXNlLWluLW91dDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuI3N1YlRpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNWEyY2ZmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSAyNTUgMjU1IC8gODUlKTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCAjMGM5MGZhO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCAjODdkYWY4O1xyXG59XHJcblxyXG4uc3ViVGl0bGUtbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuI3NlZ3dheSB7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEzMCU7IFxyXG4gICAgbWFyZ2luLXRvcDogNSU7ICBcclxuICAgIFxyXG59XHJcbiNzZWd3YXlIciB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDEycHggMTJweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxufVxyXG5cclxuLnByb2plY3RzLW1haW4td3JhcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNiU7XHJcbn1cclxuXHJcbi5zaG93Q2FzZVdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDc0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XHJcbn1cclxuLnNob3djYXNlIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZDA3YWYyOGE7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjYjU3ZGRiOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmM2I3YjYsICNiNTdkZGIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YzYjdiNiwgI2I1N2RkYik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxufVxyXG5cclxuLnNjcm9sbC1pbi1zaG93IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG59XHJcbiNwZXJzb25hbFByb2plY3RzVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIFxyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzI2MDA1ZTtcclxufVxyXG4uZmVhdHVyZS1saXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcclxufVxyXG4uZmVhdHVyZS1pbnRybyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jYm90dG9tRmVhdHVyZVJvdyB7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbn1cclxuYm90dG9tRmVhdHVyZVJvdyBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuI2ZlYXR1cmVQaG90b1JvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uLXRleHR7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgNSU7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBhIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW1hZ2Utd3JhcHBlci1hIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uc2Vjb25kIC5pbWFnZS13cmFwcGVyIGEge1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG59XHJcblxyXG4jaW1hZ2VXcmFwcGVyRGphbmdvIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4jaW1hZ2VXcmFwcGVyRGphbmdvIGEge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuI2RqYW5nb0FwcFNjcmVlbiB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jcmVwYXJrU2NyZWVuIHtcclxuICAgIHdpZHRoOiA2MSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcclxufVxyXG4jdGFibGVhdVNjcmVlbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDYxJTtcclxuICAgIGhlaWdodDogNTUlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XHJcbn1cclxuXHJcbiNkamFuZ29BcHBTY3JlZW46aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE5KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggI2JjODdmODtcclxufVxyXG4uaW1hZ2Utd3JhcHBlcjpob3ZlciBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE5KTtcclxuICAgIFxyXG59XHJcbi5zZWNvbmQgLmltYWdlLXdyYXBwZXI6aG92ZXIgaW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggI2JjODdmODtcclxufVxyXG5cclxuLnJlc3VtZVRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yZXN1bWVUZXh0IGg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsQ2VudHVyeUdvdGhpYyxBcHBsZUdvdGhpYyxzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ucmVzdW1lSHIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQzLCAxNDMsIDE0MywgMC41ODIpO1xyXG59XHJcblxyXG5cclxuI3Jlc3VtZVdyYXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5yZXN1bWUtaW1nLXdyYXAge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxN3Z3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5yZXN1bWUtaW1nLXdyYXA6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzA5ODRlMztcclxufVxyXG4jcmVzdW1lIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgIGhlaWdodDogMjB2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgIHdpZHRoOiA1MXZ3O1xyXG4gICAgXHJcbn1cclxuI3Jlc3VtZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcblxyXG4uc29jaWFsLW1lZGlhLXBhbmVsLW91dGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG4uc29jaWFsLW1lZGlhLXBhbmVsLW91dGVyIGEge1xyXG4gICAgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtcGFuZWwtb3V0ZXIgYTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1wYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4jZmFjZWJvb2tEaXYsICNnaXRodWJEaXYge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG59XHJcbiNsaW5rZWRpbkRpdiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtcGljIHtcclxuICBcclxufVxyXG4jbGlua2VkaW4ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIFxyXG59XHJcbiNmYWNlYm9vayB7XHJcbiAgIHdpZHRoOiA0MCU7XHJcbiAgIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHdoaXRlO1xyXG4gICBib3JkZXItcmFkaXVzOiA3JTsgXHJcbn1cclxuXHJcblxyXG5cclxuLyogbWlzYyBjbGFzc2VzICAqL1xyXG5cclxuLmJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3Itc3R5bGVke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDhweCAxMXB4IDAgMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGM5MGZhIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC43cyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnNlcGFyYXRvcjIge1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxMnB4IDEycHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5pbWFnZS1jb250YWluZXIud2VsY29tZS1pbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogODAlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbn1cclxuLnByZS1hbmltYXRpb24tbGVmdCB7XHJcbiAgICBsZWZ0OiAyMDAlOyAgXHJcbn1cclxuLnByZS1hbmltYXRpb24tdG9wIHtcclxuICAgIHRvcDogMjAwJTsgIFxyXG59XHJcbi5wb3N0LWFuaW1hdGlvbi1sZWZ0ICB7XHJcbiAgICBsZWZ0OiAwJTtcclxufVxyXG4ucG9zdC1hbmltYXRpb24tdG9wIHtcclxuICAgIHRvcDogMCU7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciBhIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJvbGRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNmb3JtV3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuXHJcblxyXG4vKiBmb3IgbWVkaWEgcXVlcmllczpcclxuY2hhbmdlOlxyXG4jZnJhbWVcclxuI3JpZ2h0XHJcbiN3ZWxjb21lXHJcbiNtZVxyXG4jc3ViVGl0bGVcclxuKi9cclxuQG1lZGlhICBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC8qIFN0eWxlcyAqL1xyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDI1dnc7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNsZWZ0RnJhbWUgLnRleHQtZ3AgIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2xlZnRGcmFtZSAud2VsY29tZS10ZXh0LXdyYXAgc3BhbiwgLm15LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNsZWZ0IHtcclxuICAgICAgICBsZWZ0OiAxNyU7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgd2lkdGg6IDYwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3RzLW1haW4td3JhcCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICAgIH1cclxuICAgIC5zaG93Q2FzZVdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLWNvbnRhaW5lci53ZWxjb21lLWltZy5wb3N0LWFuaW1hdGlvbi1sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHByb2plY3QtZGVzY3JpcHRpb24tdGV4dCAudGV4dC1ncCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgI3JlcGFya1NjcmVlbiB7XHJcbiAgICAgICAgd2lkdGg6IDM4JTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0UGhvdG8ge1xyXG4gICAgICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgIH1cclxuICAgIC5pbWFnZS13cmFwcGVyLWEge1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgICNzb2NpYWwtbWVkaWEtY29ubmVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgXHJcbiAgICAjbGVmdCB7XHJcbiAgICAgICAgbGVmdDogMTclO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaG93Q2FzZVdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZS13cmFwcGVyLWEge1xyXG4gICAgICAgIHdpZHRoOiAxOHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZS1jb250YWluZXIud2VsY29tZS1pbWcucG9zdC1hbmltYXRpb24tbGVmdCB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3JlcGFya1NjcmVlbiB7XHJcbiAgICAgICAgd2lkdGg6IDM4JTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0UGhvdG8ge1xyXG4gICAgICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICAjc29jaWFsLW1lZGlhLWNvbm5lY3Qge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5teS1waG90byB7XHJcbiAgICAgICB0b3A6IDg1JTs7XHJcbiAgICB9XHJcbiAgICAubXktcGhvdG8gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTB2dztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgfVxyXG4gICAgI3N1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgXHJcbiAgICAjbGVmdEZyYW1lIHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDM2dnc7XHJcbiAgICB9XHJcbiAgICAjbGVmdCB7XHJcbiAgICAgICAgbGVmdDogNDElO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLWNvbnRhaW5lci53ZWxjb21lLWltZyB7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc2hvd0Nhc2VXcmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2JTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UtY29udGFpbmVyLndlbGNvbWUtaW1nLnBvc3QtYW5pbWF0aW9uLWxlZnQge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgLnBvc3QtYW5pbWF0aW9uLXRvcCB7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuICAgICNyZXBhcmtTY3JlZW4ge1xyXG4gICAgICAgIHdpZHRoOiAzOCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdFBob3RvIHtcclxuICAgICAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5teS1waG90byB7XHJcbiAgICAgICAgdG9wOiA3MiU7XHJcbiAgICB9XHJcbiAgICAubXktcGhvdG8gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTJ2dztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgfVxyXG4gICAgI3N1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgXHJcbiAgICAuaW1hZ2UtY29udGFpbmVyLndlbGNvbWUtaW1nLnBvc3QtYW5pbWF0aW9uLWxlZnQgIHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgIH1cclxuICAgIC5wb3N0LWFuaW1hdGlvbi10b3Age1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICB9XHJcbiAgICAjcmVwYXJrU2NyZWVuIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RQaG90byB7XHJcbiAgICAgICAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5teS1waG90byB7XHJcbiAgICAgICAgdG9wOiA3MiU7XHJcbiAgICB9XHJcbiAgICAubXktcGhvdG8gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTJ2dztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgfVxyXG4gICAgI3N1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuaW1hZ2UtY29udGFpbmVyLndlbGNvbWUtaW1nLnBvc3QtYW5pbWF0aW9uLWxlZnQge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgLnBvc3QtYW5pbWF0aW9uLXRvcCB7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29tZSB7ICAgICAgICBcclxuICAgICAgICB3aWR0aDogNTV2dztcclxuICAgIH1cclxuICAgICNyZXBhcmtTY3JlZW4ge1xyXG4gICAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdFBob3RvIHtcclxuICAgICAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm15LXBob3RvIHtcclxuICAgICAgICB0b3A6IDc1JTtcclxuICAgIH1cclxuICAgIC5teS1waG90byBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA4dnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgIH1cclxuICAgICNzdWJUaXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICNkamFuZ29BcHBTY3JlZW4ge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgICAjcmVwYXJrU2NyZWVuIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogODIlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXdyYXBwZXI6aG92ZXIgaW1nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWUge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgICAgICB3aWR0aDogNTV2dztcclxuICAgIH1cclxuICAgIC5pbWFnZS1jb250YWluZXIud2VsY29tZS1pbWcucG9zdC1hbmltYXRpb24tbGVmdCAge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgLnBvc3QtYW5pbWF0aW9uLXRvcCB7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAgI3JlcGFya1NjcmVlbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0UGhvdG8ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIH1cclxuICAgIC5yZXBhcmsgLnByb2R1Y3RQaG90byB7XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgIH1cclxuXHJcbiAgICAubXktcGhvdG8ge1xyXG4gICAgICAgIHRvcDogNzUlO1xyXG4gICAgfVxyXG4gICAgLm15LXBob3RvIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDh2dztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2NXB4O1xyXG4gICAgfVxyXG4gICAgI3N1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzODBweCkge1xyXG4gICAgLndlbGNvbWUge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICAgICAgICB3aWR0aDogNTZ2dztcclxuICAgIH1cclxuICAgIC5pbWFnZS1jb250YWluZXIud2VsY29tZS1pbWcucG9zdC1hbmltYXRpb24tbGVmdCB7XHJcbiAgICAgICAgbGVmdDogLTMlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjZGphbmdvQXBwU2NyZWVuIHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG5cclxuICAgICNyZXBhcmtTY3JlZW4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdFBob3RvIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB9XHJcbiAgICAucmVwYXJrIC5wcm9kdWN0UGhvdG8ge1xyXG4gICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAubXktcGhvdG8ge1xyXG4gICAgICAgIHRvcDogNzAlO1xyXG4gICAgfVxyXG4gICAgLm15LXBob3RvIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDh2dztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2NXB4O1xyXG4gICAgfVxyXG4gICAgI3N1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM4MHB4KSB7XHJcbiAgICAud2VsY29tZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gICAgICAgIHdpZHRoOiA1NnZ3O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLWNvbnRhaW5lci53ZWxjb21lLWltZy5wb3N0LWFuaW1hdGlvbi1sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAtMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3dDYXNlV3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTglO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgI2RqYW5nb0FwcFNjcmVlbiB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxuICAgICNyZXBhcmtTY3JlZW4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdFBob3RvIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB9XHJcbiAgICAucmVwYXJrIC5wcm9kdWN0UGhvdG8ge1xyXG4gICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5teS1waG90byB7XHJcbiAgICAgICAgdG9wOiA3MSU7XHJcbiAgICB9XHJcbiAgICAubXktcGhvdG8gaW1nIHtcclxuICAgICAgICB3aWR0aDogNnZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDY1cHg7XHJcbiAgICB9XHJcbiAgICAjc3ViVGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi8qIC4uLi4uLi4uLi4uLi4uLlNUWUxJTkcgVEhFIFBST0ZJTEUgUEhPVE8uLi4uLi4uLi4uLi4uICovXHJcblxyXG5cclxuXHJcbi8qIC4uLi4uLi4uLi4uLiBMRUdBQ1kgLi4uLi4uLi4uLi4uLi4uLi4uICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIFxyXG59XHJcblxyXG4vKiAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uICovIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n<link href=\"https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap\" rel=\"stylesheet\">\r\n<div id=\"homeMain\">\r\n  \r\n  <div id=\"frame\">\r\n\r\n    <div class=\"my-photo\">\r\n      <a routerLink='/me' routerLinkActive='active'>\r\n        <img src=\"../../assets/haider_smile_image2.jpg\">\r\n      </a>\r\n      \r\n    </div>\r\n\r\n    <div id=\"leftFrame\">\r\n      <div id=\"left\">\r\n        <div class=\"image-container welcome-img \"\r\n        [ngClass]=\"{'post-animation-left': this.visible === '1' }\">\r\n\r\n\r\n          <!-- <h2 id=\"welcome\" class=\"header-text text-gp\"><span class=\"alt-header-text\">Welcome to </span> \r\n                 \r\n              \r\n          <div class=\"my-name-expander\">\r\n            <span class=\"bolding my-name\">\r\n              <a class=\"header-text\" routerLink='/me' routerLinkActive='active'>\r\n              HAIDER'S\r\n              </a>\r\n            </span>\r\n          </div>\r\n\r\n          landing page\r\n\r\n          </h2> -->\r\n        \r\n        <div class=\"welcome\" \r\n        [style.opacity]=\"this.visible === '1' ? '1' : '0'\">\r\n          <div class=\"welcome-text-wrap\">\r\n            <span class=\"welcome-text\"> Welcome to \r\n            </span>\r\n            <div class=\"my-name\"><a routerLink='/me' routerLinkActive='active'>HAIDER's</a></div>\r\n            <span  class=\"welcome-text\">\r\n              Landing page..\r\n            </span>\r\n\r\n          </div>\r\n          \r\n        </div>\r\n\r\n\r\n\r\n\r\n                        \r\n        </div>\r\n        <hr class=\"separator-styled\">\r\n        <a class=\"subTitle-link\" routerLink='/me' routerLinkActive='active'>\r\n          <p class=\"text-gp\" id=\"subTitle\">Here you can learn more about \r\n            ME </p>\r\n        </a>\r\n        \r\n        \r\n      </div>\r\n\r\n    </div>\r\n    \r\n  </div>\r\n\r\n  \r\n\r\n  <!-- Showcase the projects -->\r\n  <div class=\"projects-main-wrap\">\r\n\r\n    <div id=\"segway\" >\r\n      <h3 id=\"personalProjectsText\" class=\"text-gp\">Side Projects:</h3>\r\n    </div>\r\n    <hr id=\"segwayHr\" class=\"separator1\" style=\"width:100%;\">\r\n\r\n    <!---->\r\n\r\n\r\n    \r\n  \r\n\r\n\r\n    <!--  -->\r\n\r\n   <div class=\"showCaseWrapper\"> \r\n    <div class=\"container showcase scroll-in-show earlier repark\">\r\n      \r\n       <!--Main Col-1-->\r\n      <div class=\"row\">\r\n        <div class=\"col-md \">\r\n          \r\n          <div class=\"row\">\r\n            \r\n              <div class=\"col-sm m-4  justify-content-center title-container\"> \r\n                <h3 class=\"card-title text-gp\">RE-PARK App</h3>\r\n                <hr class=\"separator1\" style=\"width: 100%; border: 1px ridge grey; \">\r\n              </div>\r\n            \r\n          </div>\r\n          \r\n          <div class=\"row project-description-text\">  <!-- Features Description section -->\r\n              <div class=\"col-sm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm\"><p class=\"feature-intro text-gp\">RePark is an Android app that lets you save\r\n                    your parking locations to remember them next time</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm ml-1\">\r\n                      <ul class=\"feature-list\">\r\n                        <li class=\"text-gp pb-1 mb-1\">Save up to three locations in your phone</li>\r\n                        <li class=\"text-gp pb-1 mb-1\">Get notifications when you are finished driving to save your parking spot</li>\r\n                        <li class=\"text-gp pb-1 mb-1\">Use phone camera to take photos of the parking location and save them</li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                <div id=\"bottomFeatureRow\" class=\"row\">\r\n                      <div class=\"col-sm ml-1 mb-5\"><a href=\"https://play.google.com/store/apps/details?id=com.haideralrustem1990.repark\" target=\"_blank\">Learn More</a></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!--Main Col-2-->\r\n        <div class=\"productPhoto\">\r\n          <div id=\"featurePhotoRow\" class=\"row justify-content-center\">\r\n            <div (window:resize)=\"onResize($event)\" id=\"imageWrapper\" class=\"image-wrapper\">\r\n              <a class=\"pb-5\" href=\"https://play.google.com/store/apps/details?id=com.haideralrustem1990.repark\" target=\"_blank\" >\r\n                <img id=\"reparkScreen\" src=\"../../assets/phoneWithScreen.png\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n     </div>\r\n    </div>\r\n\r\n\r\n    <!--     -->\r\n\r\n    <div class=\"showCaseWrapper\"> \r\n      <div class=\"container showcase scroll-in-show earlier repark\">\r\n        \r\n         <!--Main Col-1-->\r\n        <div class=\"row\">\r\n          <div class=\"col-md \">\r\n            \r\n            <div class=\"row\">\r\n              \r\n                <div class=\"col-sm m-4  justify-content-center title-container\"> \r\n                  <h3 class=\"card-title text-gp\">Mock Computational Analytics Web App</h3>\r\n                  <hr class=\"separator1\" style=\"width: 100%; border: 1px ridge grey; \">\r\n                </div>\r\n              \r\n            </div>\r\n            \r\n            <div class=\"row project-description-text\">  <!-- Features Description section -->\r\n                <div class=\"col-sm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm\"><p class=\"feature-intro text-gp\">A Mock website that was built using Django framework.\r\n                      \r\n                    </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm ml-1\">\r\n                        <ul class=\"feature-list\">\r\n                          <li class=\"text-gp pb-1 mb-1\">Uses HTML, CSS, JavaScript</li>\r\n                          <li class=\"text-gp pb-1 mb-1\">Responsive design</li>\r\n                          <li class=\"text-gp pb-1 mb-1\">Built with the Django framework with Python at the backend.</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  <div id=\"bottomFeatureRow\" class=\"row\">\r\n                        <div class=\"col-sm ml-1 mb-5\"><a href=\"https://haiderapps.herokuapp.com/\" target=\"_blank\">Learn More</a></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n          </div>\r\n          <!--Main Col-2-->\r\n          <div class=\"productPhoto\">\r\n            <div id=\"featurePhotoRow\" class=\"row justify-content-center\">\r\n              <div (window:resize)=\"onResize($event)\" id=\"imageWrapperDjango\" class=\"image-wrapper\">\r\n                <a class=\"pb-5\" href=\"https://haiderapps.herokuapp.com/\" target=\"_blank\" >\r\n                  <img id=\"djangoAppScreen\" src=\"../../assets/djangoAppScreen.png\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n        </div>\r\n       </div>\r\n      </div>\r\n\r\n    <hr>\r\n    <!-- -------------------------------------------- -->\r\n\r\n    <div class=\"showCaseWrapper\"> \r\n      <div class=\"container showcase scroll-in-show second\">\r\n        \r\n         <!--Main Col-1-->\r\n        <div class=\"row\">\r\n          <div class=\"col-md \">\r\n            \r\n            <div class=\"row\">\r\n              \r\n                <div class=\"col-sm m-4  justify-content-center title-container\"> \r\n                  <h3 class=\"card-title text-gp\">My personal Tableau Visualization Gallery</h3>\r\n                  <hr class=\"separator1\" style=\"width: 100%; border: 1px ridge grey; \">\r\n                </div>\r\n              \r\n            </div>\r\n            \r\n            <div class=\"row project-description-text\">  <!-- Features Description section -->\r\n                <div class=\"col-sm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm\"><p class=\"feature-intro text-gp\">Tableau is a software\r\n                      that is dedicated for visual analytics, transforming complex data into\r\n                      simple visualizations and graphs</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm ml-1\">\r\n                        <ul class=\"feature-list\">\r\n                          <li class=\"text-gp pb-1 mb-1\">I used Tableau Public to create a gallery of visualizations</li>\r\n                          <li class=\"text-gp pb-1 mb-1\">These visualization are based on open-source datasets</li>\r\n                          <li class=\"text-gp pb-1 mb-1\"><a href=\"https://public.tableau.com/profile/haider.al.rustem#!/?newProfile=&activeTab=0\" \r\n                            target=\"_blank\">Check out my personal Gallery HERE</a></li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  \r\n                </div>\r\n              </div>\r\n  \r\n          </div>\r\n          <!--Main Col-2-->\r\n          <div class=\"productPhoto\">\r\n            <div id=\"featurePhotoRow\" class=\"row justify-content-center\">\r\n              <div (window:resize)=\"onResize($event)\" id=\"imageWrapper\" class=\"image-wrapper \">\r\n                <a class=\"pb-5\" href=\"https://public.tableau.com/profile/haider.al.rustem#!/?newProfile=&activeTab=0\" target=\"_blank\">\r\n                  <img id=\"tableauScreen\" src=\"../../assets/tableau_shot.png\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n        </div>\r\n       </div>\r\n      </div>\r\n\r\n\r\n  </div>\r\n\r\n  \r\n\r\n  <hr class=\"separator2\">\r\n\r\n  <!-- Resume -->\r\n  <div class=\"resumeText scroll-in-show\">\r\n    <h4 class=\"text-gp\">View my Resume: </h4>\r\n  </div>\r\n  <hr class=\"resumeHr\">\r\n\r\n    <!-- Add image that enlarges upon hover. Image is picture of a resume-->\r\n    <div id=\"resumeWrap\" class=\"image-container scroll-in-show\">\r\n\r\n      <a  routerLink='/me' routerLinkActive='active'>\r\n        <div class=\"resume-img-wrap\">\r\n          <img id=\"resume\" src=\"../../assets/meme.jpg\" >\r\n        </div>\r\n        \r\n      </a>\r\n    </div>\r\n  \r\n  <!-- social media section  -->\r\n\r\n  <hr class=\"resumeHr \">\r\n  <div class=\"resumeText scroll-in-show\" id=\"social-media-connect\">\r\n    <h4 class=\"text-gp\">Connect with me through Social Media: </h4>\r\n  </div>\r\n\r\n  <div class=\"social-media-panel-outer scroll-in-show\">\r\n    <div class=\"social-media-panel\">\r\n      <div id=\"linkedinDiv\">\r\n        <a href=\"https://www.linkedin.com/in/haider-al-rustem-32010515a/\" target=\"_blank\" class=\"image-wrapper-a\">\r\n          \r\n            <img  id=\"linkedin\" class=\"social-media-pic\" src=\"../../assets/linkedin.png\">\r\n          \r\n        </a>\r\n        <p class=\"text-gp social-media-text\">Linkedin</p>\r\n      </div>\r\n      <div id=\"facebookDiv\" class=\"\">\r\n        <a href=\"https://www.facebook.com/hydar.ali.92\" target=\"_blank\" class=\"image-wrapper-a\">\r\n          <img id=\"facebook\" class=\"social-media-pic\" src=\"../../assets/facebook.png\">\r\n          \r\n        </a>\r\n        <p class=\"text-gp social-media-text\">Facebook</p>\r\n      </div>\r\n\r\n\r\n      <div id=\"facebookDiv\" class=\"\">\r\n        <a href=\"https://github.com/haideralrustem\" target=\"_blank\" class=\"image-wrapper-a\">\r\n          <img id=\"facebook\" class=\"social-media-pic\" src=\"../../assets/github.png\">\r\n          \r\n        </a>\r\n        <p class=\"text-gp social-media-text\">Github</p>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Connect with me form -->\r\n\r\n  <hr class=\"resumeHr\">\r\n  <div class=\"resumeText\">\r\n    <h4 class=\"text-gp\">Send Me a Message Here: </h4>\r\n  </div>\r\n  \r\n  <div  id=\"formWrapper\">\r\n    <app-connect-form></app-connect-form>\r\n  </div>\r\n\r\n    \r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_windowRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/windowRef */ "./src/app/services/windowRef.ts");
/* harmony import */ var _services_college_fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/college-fetch.service */ "./src/app/services/college-fetch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(windowRef, collegeSvc) {
        this.collegeSvc = collegeSvc;
        this.visible = '0';
        this.base_animation = 500;
        this.window = windowRef.nativeWindow;
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('#frame').delay(300).animate({ opacity: 1 }, 300);
        if ((window.innerWidth) > 992) {
            $('#imageWrapper');
        }
        ;
        $("#me").delay(1000).animate({ opacity: 1 }, 700);
        //  $("#welcome").delay(600).animate({ opacity: 1 }, 200);​
        $('.separator-styled').delay(this.base_animation + 300).animate({ opacity: 1,
            top: 0 }, 1000);
        $("#subTitle").delay(this.base_animation + 1500).animate({ opacity: 1,
            top: 0 }, 1000);
        $(".my-photo").delay(this.base_animation + 1700).animate({ opacity: 1 }, 1300);
        $(".scroll-in-show").each(function (index) {
            var top_of_window = $(window).scrollTop();
            var top_of_object = $(this).offset().top;
            if (top_of_window >= top_of_object * 0.6) {
                $(this).css({ "opacity": "1" });
            }
            else {
                $(this).css({ "opacity": "0" });
            }
        });
        $(".scroll-in-show.earlier").each(function (index) {
            var top_of_window = $(window).scrollTop();
            var top_of_object = $(this).offset().top;
            if (top_of_window >= top_of_object * 0.2) {
                $(this).css({ "opacity": "1" });
            }
            else {
                $(this).css({ "opacity": "0" });
            }
        });
        //....................
        $(window).scroll(function () {
            var base = 0;
            $(".scroll-in-show").each(function (index) {
                var top_of_window = $(window).scrollTop();
                var top_of_object = $(this).offset().top;
                if (top_of_window >= top_of_object - 550) {
                    $(this).css({ "opacity": "1" });
                }
                else {
                    $(this).css({ "opacity": "0" });
                }
                base += 0.01;
            });
            $(".scroll-in-show.earlier").each(function (index) {
                var top_of_window = $(window).scrollTop();
                var top_of_object = $(this).offset().top;
                if (top_of_window >= top_of_object - 550) {
                    $(this).css({ "opacity": "1" });
                }
                else {
                    $(this).css({ "opacity": "0" });
                }
            });
        });
        this.slideAnimations();
    };
    HomeComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth > 992) {
            $('.my-name-expander');
        }
    };
    HomeComponent.prototype.slideAnimations = function () {
        var _this = this;
        setTimeout(function () {
            _this.visible = '1';
        }, this.base_animation + 500);
    };
    HomeComponent.prototype.mockGet = function () {
        this.collegeSvc.fetchColleges().subscribe(function (colleges) {
            console.log(colleges);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_windowRef__WEBPACK_IMPORTED_MODULE_1__["WindowRefService"], _services_college_fetch_service__WEBPACK_IMPORTED_MODULE_2__["CollegeFetchService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/college-fetch.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/college-fetch.service.ts ***!
  \***************************************************/
/*! exports provided: CollegeFetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeFetchService", function() { return CollegeFetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollegeFetchService = /** @class */ (function () {
    function CollegeFetchService(httpCli) {
        this.httpCli = httpCli;
        this.collegesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CollegeFetchService.prototype.fetchColleges = function () {
        return this.httpCli.get('http://haiderwebsite.us-east-2.elasticbeanstalk.com/api/colleges?all=1');
    };
    CollegeFetchService.prototype.getCollegesUpdate = function () {
        return this.collegesUpdated.asObservable();
    };
    CollegeFetchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CollegeFetchService);
    return CollegeFetchService;
}());



/***/ }),

/***/ "./src/app/services/email-sender.ts":
/*!******************************************!*\
  !*** ./src/app/services/email-sender.ts ***!
  \******************************************/
/*! exports provided: EmailSenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSenderService", function() { return EmailSenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailSenderService = /** @class */ (function () {
    function EmailSenderService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    EmailSenderService.prototype.sendMessageToEmail = function (name, phone, receiver, message) {
        return this.http.post("http://haiderwebsite.us-east-2.elasticbeanstalk.com/api/post/email", { 'from': receiver,
            'name': name,
            'phone': phone,
            'content': message }, { 'headers': this.header });
    };
    EmailSenderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailSenderService);
    return EmailSenderService;
}());



/***/ }),

/***/ "./src/app/services/test-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/test-service.ts ***!
  \******************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = /** @class */ (function () {
    function TestService(http) {
        this.http = http;
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TestService.prototype.getAllCats = function () {
        return this.http.get('http://localhost:4200/api/members');
    };
    TestService.prototype.addUser = function (newUser) {
        this.users.push(newUser);
        // Subject here emits payload. Recieve payload when you return asObservable()
        this.usersUpdated.next(this.users.slice());
    };
    TestService.prototype.getUsersUpdate = function () {
        // 
        return this.usersUpdated.asObservable();
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/windowRef.ts":
/*!***************************************!*\
  !*** ./src/app/services/windowRef.ts ***!
  \***************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getWindow() {
    return window;
}
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "./src/app/testing/testing.component.css":
/*!***********************************************!*\
  !*** ./src/app/testing/testing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "separator1 {\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n    border: 0;\r\n    height: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvdGVzdGluZy90ZXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzREFBc0Q7SUFDdEQsU0FBUztJQUNULFdBQVc7QUFDZiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL3Rlc3RpbmcvdGVzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VwYXJhdG9yMSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDEycHggMTJweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/testing/testing.component.html":
/*!************************************************!*\
  !*** ./src/app/testing/testing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rForm\" (ngSubmit)=\"submitForm(rForm.value, myForm)\" #myForm=\"ngForm\">  \r\n    <div class=\"form-group\">\r\n        <label for=\"exampleFormControlTextarea1\">Example textarea</label>\r\n        <textarea formControlName='post' class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"5\"></textarea>\r\n    </div>\r\n    <button type=\"submit\"  class=\"btn btn-primary\">Submit</button>\r\n</form> \r\n<hr class=\"separator1\">\r\n\r\n<div>\r\n    <p *ngFor=\"let c of colleges\" >\r\n        {{c[\"school.name\"]}} \r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/testing/testing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/test-service */ "./src/app/services/test-service.ts");
/* harmony import */ var _services_college_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/college-fetch.service */ "./src/app/services/college-fetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestingComponent = /** @class */ (function () {
    function TestingComponent(fb, ts, collegeSvc, httpCli) {
        this.fb = fb;
        this.ts = ts;
        this.collegeSvc = collegeSvc;
        this.httpCli = httpCli;
        this.postEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rForm = fb.group({
            'post': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
        });
    }
    TestingComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOninit');
        this.collegeSvc.fetchColleges().subscribe(function (colleges) {
            _this.colleges = colleges;
            console.log(colleges);
            console.log(_this.colleges);
        });
    };
    TestingComponent.prototype.submitForm = function (value, myForm) {
        this.post = value.post;
        var newUser = { name: this.post, age: 25 };
        this.ts.addUser(newUser);
        console.dir(myForm);
        myForm.resetForm();
    };
    TestingComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TestingComponent.prototype, "postEmitter", void 0);
    TestingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testing',
            template: __webpack_require__(/*! ./testing.component.html */ "./src/app/testing/testing.component.html"),
            styles: [__webpack_require__(/*! ./testing.component.css */ "./src/app/testing/testing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"],
            _services_college_fetch_service__WEBPACK_IMPORTED_MODULE_3__["CollegeFetchService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TestingComponent);
    return TestingComponent;
}());



/***/ }),

/***/ "./src/app/visualization.component/visualization.component.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/visualization.component/visualization.component.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\r\n  /* background-image: url('../../assets/architecturalbuilding.jpg'); \r\n  background-size: cover;\r\n  background-repeat: no-repeat; */\r\n  background: #6190E8;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #A7BFE8, #6190E8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n  padding-top: 5%;\r\n  font-size: 18px;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n\r\nspan.material-icons {\r\n    color: #6610f2\r\n}\r\n\r\n\r\n.scroll-in-show , .dynamic-show, .latent {\r\n    opacity: 0;\r\n    transition: 1s opacity ease-in-out;\r\n    \r\n}\r\n\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n\r\nh3 {\r\n    width: 100%;\r\n    margin-left: 1%;\r\n}\r\n\r\n\r\nul {\r\n    margin-left: 1px;\r\n    padding-left: 1px;\r\n}\r\n\r\n\r\ntr {\r\n    margin-bottom: 1%;\r\n}\r\n\r\n\r\ntd {\r\n    vertical-align: top;\r\n    margin: 1%;\r\n    padding: 2%;\r\n}\r\n\r\n\r\n.my-card {\r\n    background: #ffffff;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    padding-bottom: 2%;\r\n    border-radius: 15px;\r\n    border: 3px solid transparent;\r\n    box-shadow: 0px 0px 6px 2px #00bfff;\r\n    transition: 0.7s background-color ease-in-out, 0.7s box-shadow ease-in-out,\r\n    0.7s border ease-in-out, 1s opacity ease-in-out;\r\n}\r\n\r\n\r\n.my-card:hover {\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 0px 25px 5px #d058ffb9;\r\n    border: 3px solid #8303b6ea;\r\n    text-shadow: 0px 0px 0.5px #101010;\r\n}\r\n\r\n\r\n.my-card.mc8 {\r\n    \r\n}\r\n\r\n\r\n.header-text {\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n}\r\n\r\n\r\n.enlarged-header {\r\n    font-weight: bold;\r\n    text-shadow: 0px 2px 11px #7ebbf2;\r\n}\r\n\r\n\r\n.body-text {\r\n    font-family: 'Palatino Linotype', serif;\r\n}\r\n\r\n\r\n.separator {\r\n    box-shadow: inset 0 12px 12px -12px blue;\r\n    border: 0;\r\n    height: 8px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.list-arrow {\r\n\r\n}\r\n\r\n\r\n.arrow {\r\n    border: solid rgb(32, 68, 226);\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 3px;\r\n   \r\n  }\r\n\r\n\r\n.right {\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n  }\r\n\r\n\r\n.programming-lang-link {\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n    transition: 0.2s all ease-in-out;\r\n\r\n}\r\n\r\n\r\n.programming-lang-link:hover {\r\n    background-color: #e4f8f5;\r\n}\r\n\r\n\r\n.back-top-btn {\r\n    position: fixed;\r\n    right: 0%;\r\n    bottom: 0%;\r\n    border: none;\r\n    width: 150px;\r\n    height: 150px;\r\n    background: url('back_top.png') no-repeat scroll 0 0 transparent;\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    opacity:0.8;\r\n}\r\n\r\n\r\n.back-top-btn:hover {\r\n    opacity:1; \r\n}\r\n\r\n\r\n#work-phone-span{\r\n    display: initial;\r\n}\r\n\r\n\r\n#work-phone-span-mob{\r\n    display: none;\r\n}\r\n\r\n\r\n@media  screen and (min-width: 320px) and (max-width: 480px) {\r\n    /* Styles */\r\n    #work-phone-span{\r\n        display: none;\r\n    }\r\n\r\n\r\n    #work-phone-span-mob{\r\n        display: block;\r\n    }\r\n}\r\n\r\n\r\n@media  screen and (min-width: 480px) and (max-width: 568px) {\r\n    #work-phone-span{\r\n        display: none;\r\n    }\r\n\r\n    #work-phone-span-mob{\r\n        display: block;\r\n    }\r\n    \r\n}\r\n\r\n\r\n@media screen and (min-width: 568px) and (max-width: 768px) {\r\n    #work-phone-span{\r\n        display: none;\r\n    }\r\n\r\n    #work-phone-span-mob{\r\n        display: block;\r\n    }\r\n        \r\n}\r\n\r\n\r\n@media screen and (min-width: 768px) and (max-width: 900px) {\r\n   \r\n    \r\n}\r\n\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1000px) {\r\n    \r\n    \r\n}\r\n\r\n\r\n@media screen and (min-width: 1000px) and (max-width: 1200px) {\r\n   \r\n}\r\n\r\n\r\n@media screen and (min-width: 1200px) and (max-width: 1380px) {\r\n   \r\n}\r\n\r\n\r\n@media screen and (min-width: 1380px) {\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvdmlzdWFsaXphdGlvbi5jb21wb25lbnQvdmlzdWFsaXphdGlvbi5jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOztpQ0FFK0I7RUFDL0IsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ1ksK0JBQStCO0FBQ2pHLHVEQUF1RCxFQUFFLHFFQUFxRTs7RUFFNUgsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7OztBQUdBO0lBQ0k7QUFDSjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1Ysa0NBQWtDOztBQUV0Qzs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7OztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQzttREFDK0M7QUFDbkQ7OztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0Isa0NBQWtDO0FBQ3RDOzs7QUFFQTs7QUFFQTs7O0FBQ0E7SUFDSSxrRUFBa0U7QUFDdEU7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7OztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztBQUNmOzs7QUFFQTs7QUFFQTs7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZOztFQUVkOzs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQ0FBaUM7RUFDbkM7OztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQzs7QUFFcEM7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdFQUE2RTtJQUM3RSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7OztBQUlBO0lBQ0ksV0FBVztJQUNYO1FBQ0ksYUFBYTtJQUNqQjs7O0lBR0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztBQUVKOzs7QUFFQTs7O0FBR0E7OztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7OztBQUVBOztBQUVBOzs7QUFDQTs7QUFFQSIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL3Zpc3VhbGl6YXRpb24uY29tcG9uZW50L3Zpc3VhbGl6YXRpb24uY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbiB7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYXJjaGl0ZWN0dXJhbGJ1aWxkaW5nLmpwZycpOyBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXHJcbiAgYmFja2dyb3VuZDogIzYxOTBFODsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNBN0JGRTgsICM2MTkwRTgpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQTdCRkU4LCAjNjE5MEU4KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuXHJcbnNwYW4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgY29sb3I6ICM2NjEwZjJcclxufVxyXG5cclxuXHJcbi5zY3JvbGwtaW4tc2hvdyAsIC5keW5hbWljLXNob3csIC5sYXRlbnQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDFzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxufVxyXG5cclxuLmJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxudWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG59XHJcbnRyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcbnRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5teS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMnB4ICMwMGJmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQsIDAuN3MgYm94LXNoYWRvdyBlYXNlLWluLW91dCxcclxuICAgIDAuN3MgYm9yZGVyIGVhc2UtaW4tb3V0LCAxcyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG59XHJcbi5teS1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggNXB4ICNkMDU4ZmZiOTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4MzAzYjZlYTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDAuNXB4ICMxMDEwMTA7XHJcbn1cclxuXHJcbi5teS1jYXJkLm1jOCB7XHJcbiAgICBcclxufVxyXG4uaGVhZGVyLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIixDZW50dXJ5R290aGljLEFwcGxlR290aGljLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5lbmxhcmdlZC1oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCAxMXB4ICM3ZWJiZjI7XHJcbn1cclxuXHJcbi5ib2R5LXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYWxhdGlubyBMaW5vdHlwZScsIHNlcmlmO1xyXG59XHJcbi5zZXBhcmF0b3Ige1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxMnB4IDEycHggLTEycHggYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5saXN0LWFycm93IHtcclxuXHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgICBib3JkZXI6IHNvbGlkIHJnYigzMiwgNjgsIDIyNik7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG5cclxuLnByb2dyYW1taW5nLWxhbmctbGluayB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuXHJcbi5wcm9ncmFtbWluZy1sYW5nLWxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZjhmNTtcclxufVxyXG5cclxuXHJcbi5iYWNrLXRvcC1idG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja190b3AucG5nXCIpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTowLjg7XHJcbn1cclxuXHJcbi5iYWNrLXRvcC1idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eToxOyBcclxufVxyXG5cclxuXHJcbiN3b3JrLXBob25lLXNwYW57XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG59XHJcblxyXG5cclxuI3dvcmstcGhvbmUtc3Bhbi1tb2J7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAvKiBTdHlsZXMgKi9cclxuICAgICN3b3JrLXBob25lLXNwYW57XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgI3dvcmstcGhvbmUtc3Bhbi1tb2J7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICAjd29yay1waG9uZS1zcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI3dvcmstcGhvbmUtc3Bhbi1tb2J7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3dvcmstcGhvbmUtc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICN3b3JrLXBob25lLXNwYW4tbW9ie1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIHtcclxuICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM4MHB4KSB7XHJcbiAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/visualization.component/visualization.component.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/visualization.component/visualization.component.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n<a id=\"top\"></a>\r\n<div id=\"main\">\r\n\r\n\r\n<div class=\"my-card mc1\">\r\n<div class=\"container pt-4\">\r\n  \r\n  <div class=\"row  pt-3\">\r\n      <div class=\"\" style=\"width:100%;\">\r\n        <h3 class=\"header-text\">Haider Al-Rustem <span class=\"material-icons\">\r\n          verified\r\n          </span> </h3>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container pt-2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\"  style=\"width:100%;\">\r\n    <hr class=\"separator\" style=\"width:100%;\">\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n  \r\n\r\n<div class=\"container pt-4\">\r\n\r\n  <div class=\"row \">\r\n      <div class=\"col-xs body-text\">\r\n\r\n        <p><span  class=\"material-icons\">\r\n          home \r\n          </span>\r\n          \r\n          <a target=\"_blank\" href=\"http://maps.google.com/?q=2630 Bissonnet St. Apt 4201 , Houston, Texas, 77005\">\r\n          2630 Bissonnet St. Apt 4201 , Houston, Texas, 77005</a>\r\n        </p>\r\n          \r\n        <p>\r\n          <span class=\"material-icons\">\r\n            settings_cell\r\n            </span>\r\n          Phone: (832)249-0063 \r\n          \r\n            <span id=\"work-phone-span\" style=\"margin-left: 90px\">\r\n              <span class=\"material-icons\">\r\n                call \r\n              </span>\r\n              Work phone: +1 (713) 486-5100</span></p>\r\n\r\n          <p id=\"work-phone-span-mob\" >\r\n            <span class=\"material-icons\">\r\n              call \r\n            </span>\r\n            Work phone: +1 (713) 486-5100</p>\r\n        <p><span class=\"material-icons\">\r\n          email \r\n          </span>\r\n          Email: haideralrustem@yahoo.com </p>\r\n        <p> <span class=\"material-icons\">\r\n          av_timer \r\n          </span>\r\n          Born: August 25th, 1990</p>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"my-card mc2  dynamic-show\">\r\n  <div class=\"container pt-4\">\r\n    <div class=\"row\"><h3 class=\"header-text\">\r\n      <span class=\"material-icons\">\r\n         school\r\n        </span>\r\n      Education</h3></div>\r\n    <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <ul>\r\n         \r\n            \r\n              <table>\r\n                <tr>\r\n                <td>\r\n                  <i class=\"arrow right\"></i> &nbsp;\r\n                  Master of Science (M.S.) in Healthcare Informatics, the Health Data Science track. <a href=\"https://sbmi.uth.edu/\" target=\"_blank\">At the University of Texas at Health Science Center</a>. GPA = 4.00 \r\n                </td>\r\n                \r\n                <td>(May 2018- May 2020)</td>\r\n                \r\n                </tr>\r\n\r\n                <tr>\r\n                  <td><i class=\"arrow right\"></i> &nbsp;\r\n                    Certificate of Biomedical Informatics, <a href=\"https://sbmi.uth.edu/\" target=\"_blank\">at the University of Texas at Health Science Center</a>. GPA = 4.00</td>\r\n                  <td>(May 2017-May 2018. Houston, TX, U.S)</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td><i class=\"arrow right\"></i> &nbsp;\r\n                    Bachelor of Science, Pharmacy, University of Jordan, school of pharmacy.</td>\r\n                  <td>(2008- 2013. Amman/Jordan)</td>\r\n                </tr>\r\n                \r\n              \r\n              </table>\r\n          </ul>\r\n        </div>\r\n    </div>\r\n  </div> \r\n</div>\r\n  \r\n<div class=\"my-card mc3 scroll-in-show\" >\r\n  <div class=\"container pt-4\">\r\n    <div class=\"row\"><h3 class=\"header-text\">\r\n      <span class=\"material-icons\">\r\n         work\r\n        </span>\r\n      Professional Experience</h3></div>\r\n    <hr class=\"separator\">\r\n    \r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          \r\n            <table>\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Research Assistant/ Programmer, tasked with the Management of research data using <a href=\"https://redcap.uth.tmc.edu/\" target=\"_blank\"><span style=\"font-weight: bold; color:red;;\">RED</span><span style=\"color:black; font-weight: bold;\">Cap</span></a> databases.  \r\n                  <br><a href=\"https://med.uth.edu/internalmedicine/cardiovascular-medicine/\" target=\"_blank\">The department of Cardiovascular and thoracic surgery at The University of Texas Health Science Center (UTH).</a>\r\n                </td>\r\n                <td>(Dec 2019- Present).</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Graduate Teaching Assistant Information Visualization course which focused on <a href=\"https://www.tableau.com/\" target=\"_blank\">Tableau software</a> mastery.\r\n                 <br> <a href=\"https://sbmi.uth.edu/\" target=\"_blank\">At The school of Biomedical Informatics at The University of Texas Health Science Center (UTH).</a>\r\n                </td>\r\n                <td> (Sep – Dec 2019). </td>\r\n              </tr>\r\n\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Intern at <a href=\"https://www.altibbi.com/\" target=\"_blank\">Altibbi.com</a> startup, which ran a healthcare-information website.\r\n               \r\n              </td>\r\n\r\n                <td>(May 2012-July 2013. Amman, Jordan)</td>\r\n              </tr>\r\n            </table>\r\n    \r\n\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"my-card mc4 scroll-in-show\">\r\n<div class=\"container pt-4\">\r\n  <div class=\"row \"><h3 class=\"header-text\">\r\n    <span class=\"material-icons\">\r\n       integration_instructions\r\n      </span>\r\n    Technical Skills And Competencies</h3></div>\r\n  <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp; \r\n                Ability to program in \r\n                <a href=\"https://www.java.com/en/\" class=\"programming-lang-link\" target=\"_blank\">Java</a>, \r\n                <a href=\"https://www.python.org/\" class=\"programming-lang-link\" target=\"_blank\">Python</a>, \r\n                <a href=\"https://www.javascript.com/\" class=\"programming-lang-link\" target=\"_blank\">JavaScript</a>, and \r\n                <a href=\"https://www.r-project.org/\" class=\"programming-lang-link\" target=\"_blank\">R</a> programming languages.  </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp; Ability to use  <a href=\"https://www.python.org/\" class=\"programming-lang-link\" target=\"_blank\">Python</a>\r\n                 and <a href=\"https://www.r-project.org/\" class=\"programming-lang-link\" target=\"_blank\">R</a> for basic data analysis and visualization.\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp; Ability to write web elements in <a href=\"https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%2C%20or,scripting%20languages%20such%20as%20JavaScript.&text=HTML%20elements%20are%20the%20building%20blocks%20of%20HTML%20pages.\" class=\"programming-lang-link\" target=\"_blank\">HTML</a>;\r\n                 style them with <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS\" class=\"programming-lang-link\" target=\"_blank\">CSS</a>; \r\n                 and manipulate them with <a href=\"https://www.javascript.com/\" class=\"programming-lang-link\" target=\"_blank\">JavaScript</a>.\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Technical understanding of <span class=\"bold\">API</span> requests, XML, and <span class=\"bold\">JSON</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Ability to use <a href=\"https://www.oracle.com/database/technologies/appdev/sql.html\" class=\"programming-lang-link\" target=\"_blank\">SQL</a> \r\n                for querying, joining, creating and altering tables</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Ability to use <a href=\"https://www.tableau.com/\" class=\"programming-lang-link\" target=\"_blank\">Tableau</a> \r\n                software for data visualization and for creating dashboards.\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Familiarity with <a href=\"https://github.com/haideralrustem\" class=\"programming-lang-link\" target=\"_blank\">GitHub</a> Version Control basic commands (add, push, pull, commit).\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n            \r\n           \r\n          \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"my-card mc9 scroll-in-show\">\r\n  <div class=\"container\">\r\n    <div class=\"row \" style=\"margin-top: 3%;\"><h3 class=\"header-text\">\r\n      <span class=\"material-icons\">\r\n        groups\r\n        </span>\r\n      Other Skills</h3></div>\r\n    <hr class=\"separator\">\r\n      <div class=\"row \">\r\n          <div class=\"col-xs body-text\">\r\n            <table>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Analytical approach to problem solving.\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Great social skills with an outgoing personality.\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Ability to get along with people from different backgrounds.\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Proficiency at using <span class=\"bold\">Microsoft Word</span>, <span class=\"bold\">Excel</span>, and <span class=\"bold\">Power Point</span>.                  \r\n                </td>\r\n              </tr>\r\n\r\n\r\n            </table>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"my-card mc5 latent\">\r\n<div class=\"container pt-4\">\r\n  <div class=\"row \"><h3 class=\"header-text\">\r\n    <span class=\"material-icons\">\r\n        devices\r\n      </span>\r\n     Side Projects</h3></div>\r\n  <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp;\r\n                RePark: an android app that assists users in remembering where they parked in multi-floor buildings. \r\n                (<a href=\"https://play.google.com/store/apps/details?id=com.haideralrustem1990.repark\">available at Google Store here</a>)\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp;\r\n                Data Visualization gallery using Tableau public. <a href=\"https://public.tableau.com/profile/haider.al.rustem#!/?newProfile=&activeTab=0\" target=\"_blank\">Check it out here</a>\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n          \r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"my-card mc6  latent\">\r\n<div class=\"container pt-4\">\r\n    <div class=\"row \"><h3 class=\"header-text\">\r\n      <span class=\"material-icons\">\r\n         emoji_people\r\n        </span>\r\n       Community Service</h3></div>\r\n    <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Volunteer at <a href=\"http://www.memorialhermann.org/\" target=\"_blank\">\r\n                  Memorial Hermann Hospital</a>.\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Volunteer for the <a href=\"http://www.jpsa-ipsf.org/\" target=\"_blank\">Jordanian Pharmacist Students Association (JPSA).</a> \r\n              </td>\r\n            </tr>\r\n          </table>\r\n         \r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"my-card mc7  latent\">\r\n<div class=\"container pt-4\">\r\n    <div class=\"row \"><h3 class=\"header-text\">\r\n      <span class=\"material-icons\">\r\n         sports_soccer\r\n        </span>\r\n       Hobbies</h3></div>\r\n     <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Soccer and Cars\r\n              </td>\r\n            </tr>\r\n            \r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Reading history and philosophy books\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Movies and music\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div> \r\n   \r\n<div class=\"my-card mc8  latent\">\r\n<div class=\"container pt-4\">\r\n    <div class=\"row \"><h3 class=\"header-text\">\r\n      <span class=\"material-icons\">\r\n         list_alt\r\n        </span>\r\n       References</h3></div>\r\n  <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                <a href=\"https://sbmi.uth.edu/faculty-and-staff/assaf-gottlieb.htm\" target=\"_blank\">Assaf Gottlieb</a>, PhD. Assistant Professor at the School of Biomedical Informatics (SBMI), University of Texas Health Science Center. Contact: Assaf.Gottlieb@uth.tmc.edu\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                <a href=\"https://med.uth.edu/cvs/faculty/charles-c-miller-phd/\" target=\"_blank\">Charles C. Miller</a> a, PhD, Professor at the Cardiothoracic And Vascular Surgery Department, Memorial Hermann Hospital. Houston, TX, U.S. Contact email: Charles.C.Miller@uth.tmc.edu\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n          \r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div>\r\n  <a href=\"#top\"><button class=\"back-top-btn\"></button></a>\r\n</div>\r\n\r\n</div>\r\n\r\n<script>\r\n  function hoverHeadText(){\r\n    let es = document.querySelectorAll('.my-card');\r\n    \r\n    es.forEach((e)=>{\r\n      e.addEventListener(\"onmouseover\", function (event){\r\n        let identifier = event.target.classList[1];\r\n        let assocHeaderSelector = '.'+ identifier + ' '+ '.header-text';\r\n        let assocHeader = document.querySelector(assocHeaderSelector);\r\n        console.log(assocHeaderSelector);\r\n        assocHeader.classList.toggle('enlarged-header');\r\n      });\r\n\r\n      e.addEventListener(\"onmouseout\", function (event){\r\n        es.forEach((e)=>{\r\n          let identifier = event.target.classList[1];\r\n          let assocHeaderSelector = '.'+ identifier + ' '+ '.header-text';\r\n          let assocHeader = document.querySelector(assocHeaderSelector);\r\n          console.log(assocHeaderSelector);\r\n          assocHeader.classList.toggle('enlarged-header');\r\n        });\r\n      });\r\n\r\n\r\n    });\r\n\r\n  }\r\nalert();\r\n\r\n  hoverHeadText();\r\n</script>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/visualization.component/visualization.component.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/visualization.component/visualization.component.component.ts ***!
  \******************************************************************************/
/*! exports provided: VisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationComponent", function() { return VisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_college_fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/college-fetch.service */ "./src/app/services/college-fetch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizationComponent = /** @class */ (function () {
    function VisualizationComponent(collegeSvc) {
        this.collegeSvc = collegeSvc;
    }
    VisualizationComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        $(".scroll-in-show").each(function (index) {
            var top_of_window = $(window).scrollTop();
            var top_of_object = $(this).offset().top;
            if (top_of_window >= top_of_object * 0.69) {
                $(this).css({ "opacity": "1" });
            }
            else {
                $(this).css({ "opacity": "0" });
            }
        });
        $(".dynamic-show").each(function (index) {
            var top_of_window = $(window).scrollTop();
            var top_of_object = $(this).offset().top;
            if (top_of_window >= top_of_object * 0) {
                $(this).css({ "opacity": "1" });
            }
            else {
                $(this).css({ "opacity": "0" });
            }
        });
        $('.latent').each(function (index) {
            var top_of_window = $(window).scrollTop();
            var top_of_object = $(this).offset().top;
            if (top_of_window >= top_of_object * 0.82) {
                $(this).css({ "opacity": "1" });
            }
            else {
                $(this).css({ "opacity": "0" });
            }
        });
        //..............
        $(window).scroll(function () {
            var inc = 570;
            $(".scroll-in-show").each(function (index) {
                var top_of_window = $(window).scrollTop();
                var top_of_object = $(this).offset().top;
                if (top_of_window >= top_of_object - inc) {
                    $(this).css({ "opacity": "1" });
                }
                else {
                    $(this).css({ "opacity": "0" });
                }
                inc += 0.15;
            });
            $(".dynamic-show").each(function (index) {
                var top_of_window = $(window).scrollTop();
                var top_of_object = $(this).offset().top;
                if (top_of_window >= top_of_object * 0) {
                    $(this).css({ "opacity": "1" });
                }
                else {
                    $(this).css({ "opacity": "0" });
                }
            });
            $('.latent').each(function (index) {
                var top_of_window = $(window).scrollTop();
                var top_of_object = $(this).offset().top;
                if (top_of_window >= top_of_object - inc) {
                    $(this).css({ "opacity": "1" });
                }
                else {
                    $(this).css({ "opacity": "0" });
                }
                inc += 0.02;
            });
        });
    };
    VisualizationComponent.prototype.ngAfterContentInit = function () {
    };
    VisualizationComponent.prototype.clicked = function (event) {
    };
    VisualizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualization.component',
            template: __webpack_require__(/*! ./visualization.component.component.html */ "./src/app/visualization.component/visualization.component.component.html"),
            styles: [__webpack_require__(/*! ./visualization.component.component.css */ "./src/app/visualization.component/visualization.component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_college_fetch_service__WEBPACK_IMPORTED_MODULE_1__["CollegeFetchService"]])
    ], VisualizationComponent);
    return VisualizationComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\xario\OneDrive\Documents\git repos\myWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map