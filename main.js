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

module.exports = "#mainDiv {\r\n\r\n}\r\n#navBarWrapper {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  font-size: 16px;\r\n  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;\r\n\r\n}\r\n#navbarWrapper nav.desk,  #navbarWrapper nav.mob{\r\n    width: 100%;\r\n    background:  black;\r\n    font-size: 16px;\r\n    height: auto;\r\n    box-shadow: 0px 2px 2px 0 rgba(0,0,0,0.14) ;\r\n\r\n}\r\nnav.desk ul {\r\n  list-style: none;\r\n  display: flex;\r\n  width: 75%;\r\n  height: auto;\r\n  margin: 0 auto;\r\n}\r\nnav.desk ul li {\r\n  width: 20%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  margin-bottom: 0px;\r\n  color: white;\r\n  padding: 2px 10px 2px 10px;\r\n  transition: all 0.5s ease;\r\n}\r\nnav ul li a {\r\n  text-decoration: none;\r\n  border: 3px solid transparent;\r\n  padding: 2px 10px 2px 10px;\r\n  border-radius: 5px;\r\n  transition: 0.5s all  ease-in-out;\r\n  color: white;\r\n}\r\nnav.desk ul li a:hover, nav.mob ul li a:hover {\r\n  background-color: #95afc0;\r\n  border: 3px solid white;\r\n  border-radius: 5px;\r\n  color: black;\r\n}\r\nnav.desk ul li a:focus, nav.mob ul li a:focus  {\r\n  background: black;\r\n\r\n}\r\nnav.desk ul li a:focus:hover, nav.mob ul li a:focus:hover  {\r\n  background: #95afc0;\r\n  color: black;\r\n}\r\nnav.desk ul li a.active, nav.mob ul li a.active {\r\n  background-color: #f5f6fa;\r\n  color: black;\r\n}\r\nnav.desk ul li a.active:hover, nav.mob ul li a.active:hover  {\r\n  color: black;\r\n  background-color: #95afc0;\r\n}\r\nnav.mob {\r\n  display: none;\r\n}\r\n#outerHamburger {\r\n  padding-right: 1%;\r\n  padding-top: 1.5%;\r\n  padding-bottom: 1.5%;\r\n}\r\n#hamburger {\r\n  height: 5%;\r\n  width: 9%;\r\n  overflow:hidden;\r\n  background: white;\r\n  cursor: pointer;\r\n  border-radius: 0.5em;\r\n}\r\n#hamWrap {\r\n  margin-right: 0.5em;\r\n  margin-left: 0.5em;\r\n  margin-top: 0.2em;\r\n  margin-bottom: 0.3em;\r\n}\r\n#hamburgerIcon {\r\n  width: 100%;\r\n  height: 2.4em;\r\n}\r\n#mobListWrap {\r\n  overflow: hidden;\r\n}\r\n#listExpander {\r\n  margin-top: -100%;\r\n  transition: all 0.5s;\r\n}\r\n#listExpander.expanded {\r\n  margin-top: 0;\r\n  width: 100%;\r\n}\r\n.contracted {\r\n\r\n}\r\n/*Mobile navigation ---------------- */\r\n@media screen and (max-width: 750px) {\r\n  nav.desk {\r\n    display: none;\r\n  }\r\n  nav.mob {\r\n    display: block;\r\n    align-items: right;\r\n  }\r\n  #navbarWrapper nav.mob {\r\n    font-size: 90%;\r\n  }\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 8%;\r\n  }\r\n  #mobListWrap {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .mob ul {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n  .mob li {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n@media screen and (max-width: 600px) {\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 9%;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  #navbarWrapper nav.mob {\r\n    font-size: 70%;\r\n  }\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 9%;\r\n  }\r\n\r\n}\r\n@media screen and (max-width: 410px) {\r\n  #navbarWrapper nav.mob {\r\n    font-size: 70%;\r\n  }\r\n}\r\n@media screen and (max-width: 337px) {\r\n  #navbarWrapper nav.mob {\r\n    font-size: 50%;\r\n  }\r\n  #hamburger {\r\n    height: 5%;\r\n    width: 9%;\r\n  }\r\n}\r\n#routerOutlet {\r\n  margin-top: 0px;\r\n}\r\n.navbar{\r\n  margin-bottom: 0!important;\r\n}\r\n.navbar-collapse.collapse.in {\r\n  display: block!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpRUFBaUU7O0FBRW5FO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osMkNBQTJDOztBQUUvQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTs7QUFFQTtBQUtBLHNDQUFzQztBQUN0QztFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0FBRUY7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUY7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7QUFDRjtBQUdBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluRGl2IHtcclxuXHJcbn1cclxuI25hdkJhcldyYXBwZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQYWxhdGlubyBMaW5vdHlwZScsICdCb29rIEFudGlxdWEnLCBQYWxhdGlubywgc2VyaWY7XHJcblxyXG59XHJcbiNuYXZiYXJXcmFwcGVyIG5hdi5kZXNrLCAgI25hdmJhcldyYXBwZXIgbmF2Lm1vYntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTQpIDtcclxuXHJcbn1cclxubmF2LmRlc2sgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5uYXYuZGVzayB1bCBsaSB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycHggMTBweCAycHggMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4IDJweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCAgZWFzZS1pbi1vdXQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbm5hdi5kZXNrIHVsIGxpIGE6aG92ZXIsIG5hdi5tb2IgdWwgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1YWZjMDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbm5hdi5kZXNrIHVsIGxpIGE6Zm9jdXMsIG5hdi5tb2IgdWwgbGkgYTpmb2N1cyAge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG5cclxufVxyXG5uYXYuZGVzayB1bCBsaSBhOmZvY3VzOmhvdmVyLCBuYXYubW9iIHVsIGxpIGE6Zm9jdXM6aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kOiAjOTVhZmMwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5uYXYuZGVzayB1bCBsaSBhLmFjdGl2ZSwgbmF2Lm1vYiB1bCBsaSBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbm5hdi5kZXNrIHVsIGxpIGEuYWN0aXZlOmhvdmVyLCBuYXYubW9iIHVsIGxpIGEuYWN0aXZlOmhvdmVyICB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWFmYzA7XHJcbn1cclxuXHJcbm5hdi5tb2Ige1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNvdXRlckhhbWJ1cmdlciB7XHJcbiAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgcGFkZGluZy10b3A6IDEuNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNSU7XHJcbn1cclxuXHJcbiNoYW1idXJnZXIge1xyXG4gIGhlaWdodDogNSU7XHJcbiAgd2lkdGg6IDklO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbn1cclxuI2hhbVdyYXAge1xyXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xyXG59XHJcbiNoYW1idXJnZXJJY29uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIuNGVtO1xyXG59XHJcbiNtb2JMaXN0V3JhcCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jbGlzdEV4cGFuZGVyIHtcclxuICBtYXJnaW4tdG9wOiAtMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4jbGlzdEV4cGFuZGVyLmV4cGFuZGVkIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250cmFjdGVkIHtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qTW9iaWxlIG5hdmlnYXRpb24gLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIG5hdi5kZXNrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIG5hdi5tb2Ige1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XHJcbiAgfVxyXG4gICNuYXZiYXJXcmFwcGVyIG5hdi5tb2Ige1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgfVxyXG4gICNoYW1idXJnZXIge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiA4JTtcclxuICB9XHJcbiAgI21vYkxpc3RXcmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tb2IgdWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tb2IgbGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNoYW1idXJnZXIge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiA5JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAjbmF2YmFyV3JhcHBlciBuYXYubW9iIHtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gIH1cclxuICAjaGFtYnVyZ2VyIHtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICB3aWR0aDogOSU7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gICNuYXZiYXJXcmFwcGVyIG5hdi5tb2Ige1xyXG4gICAgZm9udC1zaXplOiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzdweCkge1xyXG4gICNuYXZiYXJXcmFwcGVyIG5hdi5tb2Ige1xyXG4gICAgZm9udC1zaXplOiA1MCU7XHJcbiAgfVxyXG4gICNoYW1idXJnZXIge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiA5JTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4jcm91dGVyT3V0bGV0IHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLm5hdmJhcntcclxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZS5pbiB7XHJcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--Redesigned navbar-->\r\n<div id=\"navbarWrapper\">\r\n  <nav class=\"desk\">\r\n    <ul class=\"nav\">\r\n      <li><a routerLink='home' routerLinkActive='active'>Home</a></li>\r\n      <li><a routerLink='me' routerLinkActive='active'>About</a></li>\r\n\r\n      <li><a routerLink='contact' routerLinkActive='active'>Contact</a></li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <nav class=\"mob\">\r\n      <div class=\"d-flex justify-content-end\" id=\"outerHamburger\">\r\n        <div id=\"hamburger\" (click)=\"onClickHamburgerButton()\">\r\n\r\n          <div id=\"hamWrap\">\r\n            <img id=\"hamburgerIcon\" src=\"../assets/Hamburger_icon.png\">\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"mobListWrap\">\r\n        <div #listExpander id=\"listExpander\">\r\n          <ul class=\"nav\" >\r\n            <li><a routerLink='/home' routerLinkActive='active'>Home</a></li>\r\n            <li><a >Results</a></li>\r\n\r\n            <li><a >Contact</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n</div>\r\n\r\n\r\n\r\n    <div id=\"routerOutlet\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n"

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

module.exports = "#homeMain{\r\n    \r\n}\r\n#frame {\r\n    height: 400px;\r\n    width: 100%;\r\n    background-image: linear-gradient( rgba(4, 40, 116, 0.301), rgba(4, 40, 116, 0.301) ),url('architecturalbuilding.jpg');\r\n   \r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: inline-flex;\r\n}\r\n#leftFrame{\r\n    width: 100%;\r\n    height:100%;\r\n    margin-left: 70px;\r\n    margin-right: 40px;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n#left {\r\n    width: 100%;\r\n}\r\n#right {\r\n    height: 400px;\r\n    width: 400px;\r\n}\r\n#right div {\r\n    overflow: hidden; /* [1.2] Hide the overflowing of child elements */\r\n}\r\n#me {\r\n    max-width:100%;\r\n    height: 400px;\r\n    opacity: 0;\r\n    overflow:hidden;\r\n    transition: -webkit-transform .5s ease;\r\n    transition: transform .5s ease;\r\n    transition: transform .5s ease, -webkit-transform .5s ease;\r\n}\r\n#me:hover {\r\n    -webkit-transform: scale(1.1) ;\r\n            transform: scale(1.1) ;\r\n}\r\n.alt-header-text {\r\n    color: white;\r\n    font-family: 'Palatino Linotype', serif;\r\n    text-shadow: 2px 3px black;\r\n}\r\n.my-name {\r\n    color: rgb(160 251 255);\r\n    transition: 0.3s all ease-in-out;\r\n}\r\n.my-name:hover {\r\n    font-size: 42px;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n#welcome {\r\n    color:#ffffff;\r\n    font-family: 'Palatino Linotype', serif;\r\n    text-shadow: 2px 1px black;\r\n    font-size: 250%;   /*c*/\r\n    transition: -webkit-transform .5s ease;\r\n    transition: transform .5s ease;\r\n    transition: transform .5s ease, -webkit-transform .5s ease;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: 0.9 all ease-in-out;\r\n    \r\n}\r\n.header-text {\r\n    color: rgb(160 251 255);\r\n    font-family: 'Palatino Linotype', serif;\r\n    text-shadow: 3px 2px black;\r\n    \r\n}\r\n.separator1 {\r\n    color: whitesmoke;\r\n    border: 1px solid rgba(0, 0, 0, 0.336);\r\n}\r\n#subTitle {\r\n    color :#130f40;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 25px;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    opacity: 0;\r\n    border-radius: 13px;\r\n    text-align: center;\r\n    text-shadow: 0px 1.1px #a9a7a7;\r\n    background: rgb(255 255 255 / 75%);\r\n    width: 59%;\r\n    margin-left: 23%;\r\n}\r\n#segway {\r\n    color: rgb(0, 88, 165);\r\n    font-family: 'Times New Roman', Times, serif;\r\n    text-shadow: 1px  black;\r\n    font-size: 130%; \r\n    margin-top: 5%;  \r\n    \r\n}\r\n#segwayHr {\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n    border: 0;\r\n    height: 8px;\r\n}\r\n.showCaseWrapper {\r\n    width: 74%;\r\n    margin-left: 14%;\r\n}\r\n.showcase {\r\n    margin-top: 3%;\r\n    background: #dee2e6;\r\n}\r\n#personalProjectsText {\r\n    text-align: center;\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n    font-size: 120%;\r\n}\r\n.title-container {\r\n    \r\n}\r\n.card-title {\r\n    font-family: \"Lucida Console\";\r\n    font-weight: bold;\r\n    font-size: 1.4em;\r\n    text-align: center;\r\n}\r\n.feature-list {\r\n    font-size: 16px;\r\n    font-family: cursive, sans-serif;\r\n    color: gray;\r\n}\r\n.feature-intro {\r\n    font-weight: bold;\r\n}\r\n#bottomFeatureRow {\r\n    font-size: 120%;\r\n}\r\nbottomFeatureRow a {\r\n    text-decoration: underline;\r\n    color: blue;\r\n}\r\n#featurePhotoRow {\r\n    height: 100%;\r\n}\r\n.image-wrapper {\r\n   \r\n   \r\n    height: 100%;\r\n}\r\n.image-wrapper a {\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n.image-wrapper-a {\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n#reparkScreen {\r\n    width: 61%;\r\n    height: 55%;\r\n    \r\n    transition: -webkit-transform 1s ease;\r\n    \r\n    transition: transform 1s ease;\r\n    \r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n}\r\n#tableauScreen {\r\n    border-radius: 10px;\r\n    width: 61%;\r\n    height: 55%;\r\n    transition: -webkit-transform 1s ease;\r\n    transition: transform 1s ease;\r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n}\r\n.image-wrapper:hover img {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.resumeText {\r\n    text-align: center;\r\n}\r\n.resumeText h4 {\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n    color: rgb(0, 88, 165);\r\n}\r\n.resumeHr {\r\n    width: 70%;\r\n    border: 1px solid rgba(143, 143, 143, 0.582);\r\n}\r\n#resumeWrap {\r\n    display: inline-flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    \r\n}\r\n.resume-img-wrap {\r\n    border: 3px solid transparent;\r\n    overflow: hidden;\r\n    height: 17vw;\r\n    margin-bottom: 3%;\r\n    border-radius: 10px;\r\n}\r\n.resume-img-wrap:hover {\r\n    border: 3px solid #0984e3;\r\n}\r\n#resume {\r\n    transition: -webkit-transform .5s ease;\r\n    transition: transform .5s ease;\r\n    transition: transform .5s ease, -webkit-transform .5s ease;\r\n    height: 20vw;\r\n    padding-bottom: 5%;\r\n    width: 51vw;\r\n    \r\n}\r\n#resume:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n.social-media-panel-outer {\r\n    margin-left: 2%;\r\n    margin-top: 18px;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 95%;\r\n}\r\n.social-media-panel-outer a {\r\n    \r\n  transition: -webkit-transform .5s ease;\r\n    \r\n  transition: transform .5s ease;\r\n    \r\n  transition: transform .5s ease, -webkit-transform .5s ease;\r\n}\r\n.social-media-panel-outer a:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.social-media-panel {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 40%;\r\n}\r\n#facebookDiv, #githubDiv {\r\n    width: 80%;\r\n    display: inline-grid;\r\n}\r\n#linkedinDiv {\r\n    width: 80%;\r\n    display: inline-grid;\r\n}\r\n.social-media-text {\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\n.social-media-pic {\r\n  \r\n}\r\n#linkedin {\r\n    width: 40%;\r\n    \r\n}\r\n#facebook {\r\n   width: 40%;\r\n   border: 1px transparent white;\r\n   border-radius: 7%; \r\n}\r\n/* misc classes  */\r\n.bordered {\r\n    border: 1px solid gray;\r\n}\r\n.separator2 {\r\n    height: 12px;\r\n    border: 0;\r\n    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n}\r\n.image-container.welcome-img {\r\n   \r\n    overflow: visible;\r\n}\r\n.image-container {\r\n    overflow: hidden;\r\n}\r\n.image-container a {\r\n    overflow: hidden;\r\n}\r\n.bolding {\r\n    font-weight: bold;\r\n}\r\n/* for media queries:\r\nchange:\r\n#frame\r\n#right\r\n#welcome\r\n#me\r\n#subTitle\r\n*/\r\n@media screen and (min-width: 992px){\r\n    #reparkScreen {\r\n        width: 45%;\r\n        height: 82%;\r\n    }\r\n    .image-wrapper {\r\n        padding-top: 10px;\r\n    }\r\n    .image-wrapper:hover img {\r\n        -webkit-transform: scale(1.3);\r\n                transform: scale(1.3);\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    #reparkScreen {\r\n         height: 65vw;\r\n    }\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0hBQW1JOztJQUVuSSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQixFQUFFLGlEQUFpRDtBQUN2RTtBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0lBQ1YsZUFBZTtJQUNmLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsMERBQThCO0FBQ2xDO0FBQ0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGVBQWUsSUFBSSxJQUFJO0lBQ3ZCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsMERBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsK0JBQStCOztBQUVuQztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QywwQkFBMEI7O0FBRTlCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxzREFBc0Q7SUFDdEQsU0FBUztJQUNULFdBQVc7QUFDZjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtFQUFrRTtJQUNsRSxlQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOzs7SUFHSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXOztJQUVYLHFDQUE2Qjs7SUFBN0IsNkJBQTZCOztJQUE3Qix3REFBNkI7QUFDakM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLHFDQUE2QjtJQUE3Qiw2QkFBNkI7SUFBN0Isd0RBQTZCO0FBQ2pDO0FBRUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtFQUFrRTtJQUNsRSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDViw0Q0FBNEM7QUFDaEQ7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFdBQVc7O0FBRWY7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QiwwREFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmO0FBQ0E7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBOztFQUVFLHNDQUE4Qjs7RUFBOUIsOEJBQThCOztFQUE5QiwwREFBOEI7QUFDaEM7QUFDQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksVUFBVTs7QUFFZDtBQUNBO0dBQ0csVUFBVTtHQUNWLDZCQUE2QjtHQUM3QixpQkFBaUI7QUFDcEI7QUFJQSxrQkFBa0I7QUFFbEI7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0RBQXNEO0FBQzFEO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBR0E7Ozs7Ozs7Q0FPQztBQUVEO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDZCQUFxQjtnQkFBckIscUJBQXFCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJO1NBQ0ssWUFBWTtJQUNqQjs7QUFFSiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWVNYWlue1xyXG4gICAgXHJcbn1cclxuI2ZyYW1lIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiYSg0LCA0MCwgMTE2LCAwLjMwMSksIHJnYmEoNCwgNDAsIDExNiwgMC4zMDEpICksdXJsKCcuLi8uLi9hc3NldHMvYXJjaGl0ZWN0dXJhbGJ1aWxkaW5nLmpwZycpO1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuI2xlZnRGcmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jbGVmdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jcmlnaHQge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG4jcmlnaHQgZGl2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFsxLjJdIEhpZGUgdGhlIG92ZXJmbG93aW5nIG9mIGNoaWxkIGVsZW1lbnRzICovXHJcbn1cclxuXHJcbiNtZSB7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xyXG59XHJcbiNtZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgO1xyXG59XHJcblxyXG4uYWx0LWhlYWRlci10ZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFsYXRpbm8gTGlub3R5cGUnLCBzZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAycHggM3B4IGJsYWNrO1xyXG59XHJcblxyXG4ubXktbmFtZSB7XHJcbiAgICBjb2xvcjogcmdiKDE2MCAyNTEgMjU1KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubXktbmFtZTpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbiN3ZWxjb21lIHtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ1BhbGF0aW5vIExpbm90eXBlJywgc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjUwJTsgICAvKmMqL1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuOSBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxufVxyXG5cclxuLmhlYWRlci10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2IoMTYwIDI1MSAyNTUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYWxhdGlubyBMaW5vdHlwZScsIHNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDNweCAycHggYmxhY2s7XHJcbiAgICBcclxufVxyXG5cclxuLnNlcGFyYXRvcjEge1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzM2KTtcclxufVxyXG5cclxuI3N1YlRpdGxlIHtcclxuICAgIGNvbG9yIDojMTMwZjQwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxLjFweCAjYTlhN2E3O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSAyNTUgMjU1IC8gNzUlKTtcclxuICAgIHdpZHRoOiA1OSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMlO1xyXG59XHJcbiNzZWd3YXkge1xyXG4gICAgY29sb3I6IHJnYigwLCA4OCwgMTY1KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEzMCU7IFxyXG4gICAgbWFyZ2luLXRvcDogNSU7ICBcclxuICAgIFxyXG59XHJcbiNzZWd3YXlIciB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDEycHggMTJweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxufVxyXG5cclxuLnNob3dDYXNlV3JhcHBlciB7XHJcbiAgICB3aWR0aDogNzQlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcclxufVxyXG4uc2hvd2Nhc2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVlMmU2O1xyXG59XHJcbiNwZXJzb25hbFByb2plY3RzVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLENlbnR1cnlHb3RoaWMsQXBwbGVHb3RoaWMsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIFxyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZlYXR1cmUtbGlzdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcbi5mZWF0dXJlLWludHJvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNib3R0b21GZWF0dXJlUm93IHtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5ib3R0b21GZWF0dXJlUm93IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG4jZmVhdHVyZVBob3RvUm93IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgIFxyXG4gICBcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgYSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmltYWdlLXdyYXBwZXItYSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3JlcGFya1NjcmVlbiB7XHJcbiAgICB3aWR0aDogNjElO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xyXG59XHJcbiN0YWJsZWF1U2NyZWVuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogNjElO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXI6aG92ZXIgaW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLnJlc3VtZVRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yZXN1bWVUZXh0IGg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsQ2VudHVyeUdvdGhpYyxBcHBsZUdvdGhpYyxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigwLCA4OCwgMTY1KTtcclxufVxyXG4ucmVzdW1lSHIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQzLCAxNDMsIDE0MywgMC41ODIpO1xyXG59XHJcblxyXG5cclxuI3Jlc3VtZVdyYXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5yZXN1bWUtaW1nLXdyYXAge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxN3Z3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5yZXN1bWUtaW1nLXdyYXA6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzA5ODRlMztcclxufVxyXG4jcmVzdW1lIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgIGhlaWdodDogMjB2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgIHdpZHRoOiA1MXZ3O1xyXG4gICAgXHJcbn1cclxuI3Jlc3VtZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcblxyXG4uc29jaWFsLW1lZGlhLXBhbmVsLW91dGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG4uc29jaWFsLW1lZGlhLXBhbmVsLW91dGVyIGEge1xyXG4gICAgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtcGFuZWwtb3V0ZXIgYTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1wYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4jZmFjZWJvb2tEaXYsICNnaXRodWJEaXYge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG59XHJcbiNsaW5rZWRpbkRpdiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtcGljIHtcclxuICBcclxufVxyXG4jbGlua2VkaW4ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIFxyXG59XHJcbiNmYWNlYm9vayB7XHJcbiAgIHdpZHRoOiA0MCU7XHJcbiAgIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHdoaXRlO1xyXG4gICBib3JkZXItcmFkaXVzOiA3JTsgXHJcbn1cclxuXHJcblxyXG5cclxuLyogbWlzYyBjbGFzc2VzICAqL1xyXG5cclxuLmJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLnNlcGFyYXRvcjIge1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxMnB4IDEycHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5pbWFnZS1jb250YWluZXIud2VsY29tZS1pbWcge1xyXG4gICBcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciBhIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJvbGRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKiBmb3IgbWVkaWEgcXVlcmllczpcclxuY2hhbmdlOlxyXG4jZnJhbWVcclxuI3JpZ2h0XHJcbiN3ZWxjb21lXHJcbiNtZVxyXG4jc3ViVGl0bGVcclxuKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgICNyZXBhcmtTY3JlZW4ge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MiU7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Utd3JhcHBlcjpob3ZlciBpbWcge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAjcmVwYXJrU2NyZWVuIHtcclxuICAgICAgICAgaGVpZ2h0OiA2NXZ3O1xyXG4gICAgfVxyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"homeMain\">\r\n  \r\n  <div id=\"frame\">\r\n    <div id=\"leftFrame\">\r\n      <div id=\"left\">\r\n        <div class=\"image-container welcome-img\">\r\n          <h2 id=\"welcome\" class=\"header-text text-gp\"><span class=\"alt-header-text\">Welcome to </span> <a class=\"header-text\" routerLink='/me' routerLinkActive='active'><span class=\"bolding my-name\">HAIDER'S</span></a> website</h2>\r\n        </div>\r\n        <hr class=\"separator1\">\r\n        <p class=\"text-gp\" id=\"subTitle\">Here you can learn more about me </p>\r\n      </div>\r\n\r\n    </div>\r\n    <div id=\"rightFrame\">\r\n      <div id=\"right\">\r\n        <div>\r\n<!--           <a routerLink='home' routerLinkActive='active'>\r\n            <img id=\"me\" src=\"../../assets/me2cropped.png\">\r\n          </a>   -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n\r\n  <!-- Showcase the projects -->\r\n  <div>\r\n\r\n    <div id=\"segway\" >\r\n      <h3 id=\"personalProjectsText\" class=\"text-gp\">Side Project:</h3>\r\n    </div>\r\n    <hr id=\"segwayHr\" class=\"separator1\" style=\"width:100%;\">\r\n    <!---->\r\n\r\n   <div class=\"showCaseWrapper\"> \r\n    <div class=\"container showcase\">\r\n      \r\n       <!--Main Col-1-->\r\n      <div class=\"row\">\r\n        <div class=\"col-md \">\r\n          \r\n          <div class=\"row\">\r\n            \r\n              <div class=\"col-sm m-4 pl-5 justify-content-center title-container\"> \r\n                <h3 class=\"card-title text-gp\">RE-PARK App</h3>\r\n                <hr class=\"separator1\" style=\"width: 100%; border: 1px ridge grey; \">\r\n              </div>\r\n            \r\n          </div>\r\n          \r\n          <div class=\"row pl-5\">  <!-- Features Description section -->\r\n              <div class=\"col-sm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm\"><p class=\"feature-intro text-gp\">RePark is an Android app that lets you save\r\n                    your parking locations to remember them next time</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm ml-1\">\r\n                      <ul class=\"feature-list\">\r\n                        <li class=\"text-gp pb-1 mb-1\">Save up to three locations in your phone</li>\r\n                        <li class=\"text-gp pb-1 mb-1\">Get notifications when you are finished driving to save your parking spot</li>\r\n                        <li class=\"text-gp pb-1 mb-1\">Use phone camera to take photos of the parking location and save them</li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                <div id=\"bottomFeatureRow\" class=\"row\">\r\n                      <div class=\"col-sm ml-1 mb-5\"><a href=\"https://play.google.com/store/apps/details?id=com.haideralrustem1990.repark\" target=\"_blank\">Learn More</a></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!--Main Col-2-->\r\n        <div class=\"col-md productPhoto\">\r\n          <div id=\"featurePhotoRow\" class=\"row justify-content-center\">\r\n            <div (window:resize)=\"onResize($event)\" id=\"imageWrapper\" class=\"image-wrapper pt-5\">\r\n              <a class=\"pb-5\" href=\"https://play.google.com/store/apps/details?id=com.haideralrustem1990.repark\">\r\n                <img id=\"reparkScreen\" src=\"../../assets/phoneWithScreen.png\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n     </div>\r\n    </div>\r\n\r\n\r\n    <hr>\r\n    <!-- -------------------------------------------- -->\r\n\r\n    <div class=\"showCaseWrapper\"> \r\n      <div class=\"container showcase\">\r\n        \r\n         <!--Main Col-1-->\r\n        <div class=\"row\">\r\n          <div class=\"col-md \">\r\n            \r\n            <div class=\"row\">\r\n              \r\n                <div class=\"col-sm m-4 pl-5 justify-content-center title-container\"> \r\n                  <h3 class=\"card-title text-gp\">My personal Tableau Visualization Gallery</h3>\r\n                  <hr class=\"separator1\" style=\"width: 100%; border: 1px ridge grey; \">\r\n                </div>\r\n              \r\n            </div>\r\n            \r\n            <div class=\"row pl-5\">  <!-- Features Description section -->\r\n                <div class=\"col-sm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm\"><p class=\"feature-intro text-gp\">Tableau is a software\r\n                      that is dedicated for visual analytics, transforming complex data into\r\n                      simple visualizations and graphs</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm ml-1\">\r\n                        <ul class=\"feature-list\">\r\n                          <li class=\"text-gp pb-1 mb-1\">I used Tableau Public to create a gallery of visualizations</li>\r\n                          <li class=\"text-gp pb-1 mb-1\">These visualization are based on open-source datasets</li>\r\n                          <li class=\"text-gp pb-1 mb-1\"><a href=\"https://public.tableau.com/profile/haider.al.rustem#!/?newProfile=&activeTab=0\" \r\n                            target=\"_blank\">Check out my personal Gallery HERE</a></li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  \r\n                </div>\r\n              </div>\r\n  \r\n          </div>\r\n          <!--Main Col-2-->\r\n          <div class=\"col-md productPhoto\">\r\n            <div id=\"featurePhotoRow\" class=\"row justify-content-center\">\r\n              <div (window:resize)=\"onResize($event)\" id=\"imageWrapper\" class=\"image-wrapper pt-5\">\r\n                <a class=\"pb-5\" href=\"https://public.tableau.com/profile/haider.al.rustem#!/?newProfile=&activeTab=0\" target=\"_blank\">\r\n                  <img id=\"tableauScreen\" src=\"../../assets/tableau_shot.png\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n        </div>\r\n       </div>\r\n      </div>\r\n\r\n\r\n  </div>\r\n\r\n  \r\n\r\n  <hr class=\"separator2\">\r\n\r\n  <!-- Resume -->\r\n  <div class=\"resumeText\">\r\n    <h4 class=\"text-gp\">View my Resume: </h4>\r\n  </div>\r\n  <hr class=\"resumeHr\">\r\n\r\n    <!-- Add image that enlarges upon hover. Image is picture of a resume-->\r\n    <div id=\"resumeWrap\" class=\"image-container\">\r\n\r\n      <a  routerLink='/me' routerLinkActive='active'>\r\n        <div class=\"resume-img-wrap\">\r\n          <img id=\"resume\" src=\"../../assets/meme.jpg\" >\r\n        </div>\r\n        \r\n      </a>\r\n    </div>\r\n  \r\n  <!-- social media section  -->\r\n\r\n  <hr class=\"resumeHr\">\r\n  <div class=\"resumeText\">\r\n    <h4 class=\"text-gp\">Connect with me through Social Media: </h4>\r\n  </div>\r\n\r\n  <div class=\"social-media-panel-outer\">\r\n    <div class=\"social-media-panel\">\r\n      <div id=\"linkedinDiv\">\r\n        <a href=\"https://www.linkedin.com/in/haider-al-rustem-32010515a/\" target=\"_blank\" class=\"image-wrapper-a\">\r\n          \r\n            <img  id=\"linkedin\" class=\"social-media-pic\" src=\"../../assets/linkedin.png\">\r\n          \r\n        </a>\r\n        <p class=\"text-gp social-media-text\">Linkedin</p>\r\n      </div>\r\n      <div id=\"facebookDiv\" class=\"\">\r\n        <a href=\"https://www.facebook.com/hydar.ali.92\" target=\"_blank\" class=\"image-wrapper-a\">\r\n          <img id=\"facebook\" class=\"social-media-pic\" src=\"../../assets/facebook.png\">\r\n          \r\n        </a>\r\n        <p class=\"text-gp social-media-text\">Facebook</p>\r\n      </div>\r\n\r\n\r\n      <div id=\"facebookDiv\" class=\"\">\r\n        <a href=\"https://github.com/haideralrustem\" target=\"_blank\" class=\"image-wrapper-a\">\r\n          <img id=\"facebook\" class=\"social-media-pic\" src=\"../../assets/github.png\">\r\n          \r\n        </a>\r\n        <p class=\"text-gp social-media-text\">Github</p>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Connect with me form -->\r\n\r\n  <hr class=\"resumeHr\">\r\n  <div class=\"resumeText\">\r\n    <h4 class=\"text-gp\">Send Me a Message Here: </h4>\r\n  </div>\r\n  \r\n  <div  id=\"formWrapper\">\r\n    <app-connect-form></app-connect-form>\r\n  </div>\r\n\r\n    \r\n</div>\r\n\r\n\r\n"

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
        this.window = windowRef.nativeWindow;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if ((window.innerWidth) > 992) {
            $('#imageWrapper').removeClass('pt-5');
        }
        ;
        $("#me").delay(1000).animate({ opacity: 1 }, 700);
        $("#welcome").delay(600).animate({ opacity: 1 }, 200);
        $("#subTitle").delay(900).animate({ opacity: 1 }, 500);
    };
    HomeComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth > 992) {
            $('#imageWrapper').removeClass('pt-5');
        }
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

module.exports = "#main {\r\n  background-image: url('blueback.jpg'); \r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  padding-top: 2%;\r\n  font-size: 18px;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\nh3 {\r\n    width: 100%;\r\n    margin-left: 1%;\r\n}\r\n\r\nul {\r\n    margin-left: 1px;\r\n    padding-left: 1px;\r\n}\r\n\r\ntr {\r\n    margin-bottom: 1%;\r\n}\r\n\r\ntd {\r\n    vertical-align: top;\r\n    margin: 1%;\r\n    padding: 2%;\r\n}\r\n\r\n.my-card {\r\n    background: #ffffff;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    padding-bottom: 2%;\r\n    border-radius: 15px;\r\n    border: 3px solid transparent;\r\n    box-shadow: 0px 0px 6px 2px #00bfff;\r\n    transition: 0.7s background-color ease-in-out, 0.7s box-shadow ease-in-out,\r\n    0.7s border ease-in-out;\r\n}\r\n\r\n.my-card:hover {\r\n    background-color: #e6f3ff;\r\n    box-shadow: 0px 0px 25px 5px #d058ffb9;\r\n    border: 3px solid #8303b6ea;\r\n    text-shadow: 0px 0px 0.5px #101010;\r\n}\r\n\r\n.my-card.mc8 {\r\n    \r\n}\r\n\r\n.header-text {\r\n    font-family: \"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;\r\n}\r\n\r\n.enlarged-header {\r\n    font-weight: bold;\r\n    text-shadow: 0px 2px 11px #7ebbf2;\r\n}\r\n\r\n.body-text {\r\n    font-family: 'Palatino Linotype', serif;\r\n}\r\n\r\n.separator {\r\n    box-shadow: inset 0 12px 12px -12px blue;\r\n    border: 0;\r\n    height: 8px;\r\n    width: 100%;\r\n}\r\n\r\n.list-arrow {\r\n\r\n}\r\n\r\n.arrow {\r\n    border: solid rgb(32, 68, 226);\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 3px;\r\n   \r\n  }\r\n\r\n.right {\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n  }\r\n\r\n.programming-lang-link {\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n\r\n}\r\n\r\n.programming-lang-link:hover {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.back-top-btn {\r\n    position: fixed;\r\n    right: 0%;\r\n    bottom: 0%;\r\n    border: none;\r\n    width: 150px;\r\n    height: 150px;\r\n    background: url('back_top.png') no-repeat scroll 0 0 transparent;\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    opacity:0.8;\r\n}\r\n\r\n.back-top-btn:hover {\r\n    opacity:1; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvdmlzdWFsaXphdGlvbi5jb21wb25lbnQvdmlzdWFsaXphdGlvbi5jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DOzJCQUN1QjtBQUMzQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLGtDQUFrQztBQUN0Qzs7QUFFQTs7QUFFQTs7QUFDQTtJQUNJLGtFQUFrRTtBQUN0RTs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZOztFQUVkOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlDQUFpQztFQUNuQzs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0VBQTZFO0lBQzdFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvdmlzdWFsaXphdGlvbi5jb21wb25lbnQvdmlzdWFsaXphdGlvbi5jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9ibHVlYmFjay5qcGcnKTsgXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5oMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG51bCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbn1cclxudHIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxudGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLm15LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggIzAwYmZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuN3MgYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dCwgMC43cyBib3gtc2hhZG93IGVhc2UtaW4tb3V0LFxyXG4gICAgMC43cyBib3JkZXIgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm15LWNhcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjNmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCA1cHggI2QwNThmZmI5O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzgzMDNiNmVhO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMC41cHggIzEwMTAxMDtcclxufVxyXG5cclxuLm15LWNhcmQubWM4IHtcclxuICAgIFxyXG59XHJcbi5oZWFkZXItdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLENlbnR1cnlHb3RoaWMsQXBwbGVHb3RoaWMsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmVubGFyZ2VkLWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDExcHggIzdlYmJmMjtcclxufVxyXG5cclxuLmJvZHktdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BhbGF0aW5vIExpbm90eXBlJywgc2VyaWY7XHJcbn1cclxuLnNlcGFyYXRvciB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDEycHggMTJweCAtMTJweCBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxpc3QtYXJyb3cge1xyXG5cclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIGJvcmRlcjogc29saWQgcmdiKDMyLCA2OCwgMjI2KTtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAucmlnaHQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcblxyXG4ucHJvZ3JhbW1pbmctbGFuZy1saW5rIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuXHJcbn1cclxuXHJcbi5wcm9ncmFtbWluZy1sYW5nLWxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbi5iYWNrLXRvcC1idG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja190b3AucG5nXCIpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTowLjg7XHJcbn1cclxuXHJcbi5iYWNrLXRvcC1idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eToxOyBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/visualization.component/visualization.component.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/visualization.component/visualization.component.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a id=\"top\"></a>\r\n<div id=\"main\">\r\n\r\n\r\n<div class=\"my-card mc1\">\r\n<div class=\"container pt-4\">\r\n  \r\n  <div class=\"row  pt-3\">\r\n      <div class=\"\" style=\"width:100%;\">\r\n        <h3 class=\"header-text\">Haider Al-Rustem</h3>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container pt-2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\"  style=\"width:100%;\">\r\n    <hr class=\"separator\" style=\"width:100%;\">\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n  \r\n\r\n<div class=\"container pt-4\">\r\n\r\n  <div class=\"row \">\r\n      <div class=\"col-xs body-text\">\r\n\r\n        <p>2630 Bissonnet St. Apt 4201 , Houston, Texas, 77005</p>\r\n        <p>Phone: (832)249-0063 <span style=\"margin-left: 90px\">Work phone: +1 (713) 486-5100</span></p>\r\n        <p>Email: haideralrustem@yahoo.com </p>\r\n        <p>Born: August 25th, 1990</p>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"my-card mc2\">\r\n  <div class=\"container pt-4\">\r\n    <div class=\"row\"><h3 class=\"header-text\">Education</h3></div>\r\n    <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <ul>\r\n         \r\n            \r\n              <table>\r\n                <tr>\r\n                <td>\r\n                  <i class=\"arrow right\"></i> &nbsp;\r\n                  Master of Science (M.S.) in Healthcare Informatics, the Health Data Science track. <a href=\"https://sbmi.uth.edu/\" target=\"_blank\">At the University of Texas at Health Science Center</a>. GPA = 4.00 \r\n                </td>\r\n                \r\n                <td>(May 2018- May 2020)</td>\r\n                \r\n                </tr>\r\n\r\n                <tr>\r\n                  <td><i class=\"arrow right\"></i> &nbsp;\r\n                    Certificate of Biomedical Informatics, <a href=\"https://sbmi.uth.edu/\" target=\"_blank\">at the University of Texas at Health Science Center</a>. GPA = 4.00</td>\r\n                  <td>(May 2017-May 2018. Houston, TX, U.S)</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>Bachelor of Science, Pharmacy, University of Jordan, school of pharmacy.</td>\r\n                  <td>(2008- 2013. Amman/Jordan)</td>\r\n                </tr>\r\n                \r\n              \r\n              </table>\r\n          </ul>\r\n        </div>\r\n    </div>\r\n  </div> \r\n</div>\r\n  \r\n<div class=\"my-card mc3\">\r\n  <div class=\"container pt-4\">\r\n    <div class=\"row\"><h3 class=\"header-text\">Professional Experience</h3></div>\r\n    <hr class=\"separator\">\r\n    \r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          \r\n            <table>\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Research Assistant/ Programmer, tasked with the Management of research data using <a href=\"https://redcap.uth.tmc.edu/\" target=\"_blank\"><span style=\"font-weight: bold; color:red;;\">RED</span><span style=\"color:black; font-weight: bold;\">Cap</span></a> databases.  \r\n                  <br><a href=\"https://med.uth.edu/internalmedicine/cardiovascular-medicine/\" target=\"_blank\">The department of Cardiovascular and thoracic surgery at The University of Texas Health Science Center (UTH).</a>\r\n                </td>\r\n                <td>(Dec 2019- Present).</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Graduate Teaching Assistant Information Visualization course which focused on <a href=\"https://www.tableau.com/\" target=\"_blank\">Tableau software</a> mastery.\r\n                 <br> <a href=\"https://sbmi.uth.edu/\" target=\"_blank\">At The school of Biomedical Informatics at The University of Texas Health Science Center (UTH).</a>\r\n                </td>\r\n                <td> (Sep – Dec 2019). </td>\r\n              </tr>\r\n\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Intern at <a href=\"https://www.altibbi.com/\" target=\"_blank\">Altibbi.com</a> startup, which ran a healthcare-information website.\r\n               \r\n              </td>\r\n\r\n                <td>(May 2012-July 2013. Amman, Jordan)</td>\r\n              </tr>\r\n            </table>\r\n    \r\n\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"my-card mc4\">\r\n<div class=\"container pt-4\">\r\n  <div class=\"row \"><h3 class=\"header-text\">Technical Skills And Competencies</h3></div>\r\n  <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp; \r\n                Ability to program in \r\n                <a href=\"https://www.java.com/en/\" class=\"programming-lang-link\" target=\"_blank\">Java</a>, \r\n                <a href=\"https://www.python.org/\" class=\"programming-lang-link\" target=\"_blank\">Python</a>, \r\n                <a href=\"https://www.javascript.com/\" class=\"programming-lang-link\" target=\"_blank\">JavaScript</a>, and \r\n                <a href=\"https://www.r-project.org/\" class=\"programming-lang-link\" target=\"_blank\">R</a> programming languages.  </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp; Ability to use  <a href=\"https://www.python.org/\" class=\"programming-lang-link\" target=\"_blank\">Python</a>\r\n                 and <a href=\"https://www.r-project.org/\" class=\"programming-lang-link\" target=\"_blank\">R</a> for basic data analysis and visualization.\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp; Ability to write web elements in <a href=\"https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%2C%20or,scripting%20languages%20such%20as%20JavaScript.&text=HTML%20elements%20are%20the%20building%20blocks%20of%20HTML%20pages.\" class=\"programming-lang-link\" target=\"_blank\">HTML</a>;\r\n                 style them with <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS\" class=\"programming-lang-link\" target=\"_blank\">CSS</a>; \r\n                 and manipulate them with <a href=\"https://www.javascript.com/\" class=\"programming-lang-link\" target=\"_blank\">JavaScript</a>.\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Technical understanding of <span class=\"bold\">API</span> requests, XML, and <span class=\"bold\">JSON</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Ability to use <a href=\"https://www.oracle.com/database/technologies/appdev/sql.html\" class=\"programming-lang-link\" target=\"_blank\">SQL</a> \r\n                for querying, joining, creating and altering tables</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Ability to use <a href=\"https://www.tableau.com/\" class=\"programming-lang-link\" target=\"_blank\">Tableau</a> \r\n                software for data visualization and for creating dashboards.\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Familiarity with <a href=\"https://github.com/haideralrustem\" class=\"programming-lang-link\" target=\"_blank\">GitHub</a> Version Control basic commands (add, push, pull, commit).\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n            \r\n           \r\n          \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"my-card mc9\">\r\n  <div class=\"container\">\r\n    <div class=\"row \" style=\"margin-top: 3%;\"><h3 class=\"header-text\">Other Skills</h3></div>\r\n    <hr class=\"separator\">\r\n      <div class=\"row \">\r\n          <div class=\"col-xs body-text\">\r\n            <table>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Analytical approach to problem solving.\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Great social skills with an outgoing personality.\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Ability to get along with people from different backgrounds.\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><i class=\"arrow right\"></i> &nbsp;\r\n                  Proficiency at using <span class=\"bold\">Microsoft Word</span>, <span class=\"bold\">Excel</span>, and <span class=\"bold\">Power Point</span>.                  \r\n                </td>\r\n              </tr>\r\n\r\n\r\n            </table>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"my-card mc5\">\r\n<div class=\"container pt-4\">\r\n  <div class=\"row \"><h3 class=\"header-text\">Side Project</h3></div>\r\n  <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp;\r\n                RePark: an android app that assists users in remembering where they parked in multi-floor buildings. \r\n                (<a href=\"https://play.google.com/store/apps/details?id=com.haideralrustem1990.repark\">available at Google Store here</a>)\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>\r\n                <i class=\"arrow right\"></i> &nbsp;\r\n                Data Visualization gallery using Tableau public. <a href=\"https://public.tableau.com/profile/haider.al.rustem#!/?newProfile=&activeTab=0\" target=\"_blank\">Check it out here</a>\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n          \r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"my-card mc6\">\r\n<div class=\"container pt-4\">\r\n    <div class=\"row \"><h3 class=\"header-text\">Community Service</h3></div>\r\n    <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Volunteer at <a href=\"http://www.memorialhermann.org/\" target=\"_blank\">\r\n                  Memorial Hermann Hospital</a>.\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Volunteer for the <a href=\"http://www.jpsa-ipsf.org/\" target=\"_blank\">Jordanian Pharmacist Students Association (JPSA).</a> \r\n              </td>\r\n            </tr>\r\n          </table>\r\n         \r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"my-card mc7\">\r\n<div class=\"container pt-4\">\r\n    <div class=\"row \"><h3 class=\"header-text\">Hobbies</h3></div>\r\n     <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Soccer\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Sports cars\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Reading history and philosophy books\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                Movies and music\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div> \r\n   \r\n<div class=\"my-card mc8\">\r\n<div class=\"container pt-4\">\r\n    <div class=\"row \"><h3 class=\"header-text\">References</h3></div>\r\n  <hr class=\"separator\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs body-text\">\r\n          <table>\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                <a href=\"https://sbmi.uth.edu/faculty-and-staff/assaf-gottlieb.htm\" target=\"_blank\">Assaf Gottlieb</a>, PhD. Assistant Professor at the School of Biomedical Informatics (SBMI), University of Texas Health Science Center. Contact: Assaf.Gottlieb@uth.tmc.edu\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><i class=\"arrow right\"></i> &nbsp;\r\n                <a href=\"https://med.uth.edu/cvs/faculty/charles-c-miller-phd/\" target=\"_blank\">Charles C. Miller</a> a, PhD, Professor at the Cardiothoracic And Vascular Surgery Department, Memorial Hermann Hospital. Houston, TX, U.S. Contact email: Charles.C.Miller@uth.tmc.edu\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n          \r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div>\r\n  <a href=\"#top\"><button class=\"back-top-btn\"></button></a>\r\n</div>\r\n\r\n</div>\r\n\r\n<script>\r\n  function hoverHeadText(){\r\n    let es = document.querySelectorAll('.my-card');\r\n    \r\n    es.forEach((e)=>{\r\n      e.addEventListener(\"onmouseover\", function (event){\r\n        let identifier = event.target.classList[1];\r\n        let assocHeaderSelector = '.'+ identifier + ' '+ '.header-text';\r\n        let assocHeader = document.querySelector(assocHeaderSelector);\r\n        console.log(assocHeaderSelector);\r\n        assocHeader.classList.toggle('enlarged-header');\r\n      });\r\n\r\n      e.addEventListener(\"onmouseout\", function (event){\r\n        es.forEach((e)=>{\r\n          let identifier = event.target.classList[1];\r\n          let assocHeaderSelector = '.'+ identifier + ' '+ '.header-text';\r\n          let assocHeader = document.querySelector(assocHeaderSelector);\r\n          console.log(assocHeaderSelector);\r\n          assocHeader.classList.toggle('enlarged-header');\r\n        });\r\n      });\r\n\r\n\r\n    });\r\n\r\n  }\r\nalert();\r\n\r\n  hoverHeadText();\r\n</script>\r\n\r\n\r\n"

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