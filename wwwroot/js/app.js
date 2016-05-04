webpackJsonp([1],{

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(93);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __WEBPACK_IMPORTED_MODULE_1_react_dom__ && __WEBPACK_IMPORTED_MODULE_1_react_dom__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_react_dom__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_react_dom__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_react_dom___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_react_dom___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inversify_config__ = __webpack_require__(331);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(325);




	alert("gg");
	let ninja = /* harmony import */__WEBPACK_IMPORTED_MODULE_2__inversify_config__["a"].get("INinja");
	ninja.fight();
	ninja.boo = "2";
	//let a = <App inversifyKernel={kernel}/>;
	/* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_1_react_dom__.render(/* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_0_react__.createElement(/* harmony import */__WEBPACK_IMPORTED_MODULE_3__App__["default"], {kernel: /* harmony import */__WEBPACK_IMPORTED_MODULE_2__inversify_config__["a"]}), document.getElementById("content"));


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Page__ = __webpack_require__(326);


	class App extends /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_0_react__.Component {
	    constructor(props) {
	        super(props);
	    }
	    getChildContext() {
	        return { kernel: this.props.kernel };
	    }
	    //childContextTypes: {
	    //    kernel: IKernel;
	    //}
	    render() {
	        return (/* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_0_react__.createElement(/* harmony import */__WEBPACK_IMPORTED_MODULE_1__Page__["default"], null));
	    }
	}
	App.childContextTypes = {
	    kernel: /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.object
	};


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });

	//@injectable()
	class Page extends /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_0_react__.Component {
	    constructor(props, context) {
	        super(props, context);
	        this.service = context.kernel.get("IService");
	    }
	    render() {
	        return (/* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {className: "b-logo"}, this.service.test()));
	    }
	}
	//    static contextTypes: { kernel: React.Requireable<{kernel: IKernel;}>}  = {
	Page.contextTypes = {
	    kernel: /* harmony namespace import */ __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.object
	};


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(23);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __WEBPACK_IMPORTED_MODULE_0_inversify__ && __WEBPACK_IMPORTED_MODULE_0_inversify__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_inversify___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_inversify___default });
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};

	//import Page from "../Page";
	let Ninja = class Ninja {
	    constructor(katana, shuriken) {
	        this.katana = katana;
	        this.shuriken = shuriken;
	        this._boo = "1";
	    }
	    fight() {
	        //ReactDom.render(
	        //    React.createElement(Page, null),
	        //    document.getElementById("content")
	        //);
	        //return this.katana.hit();
	    }
	    ;
	    sneak() { return this.shuriken.throw(); }
	    ;
	    set boo(boo) {
	        this._boo = boo;
	    }
	    get boo() {
	        return this._boo;
	    }
	};
	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return Ninja; }});
	Ninja = __decorate([
	    /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["injectable"].bind()(),
	    __param(0, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["inject"].bind()("IKatana")),
	    __param(1, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["inject"].bind()("IShuriken")), 
	    __metadata('design:paramtypes', [Object, Object])
	], Ninja);


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(23);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __WEBPACK_IMPORTED_MODULE_0_inversify__ && __WEBPACK_IMPORTED_MODULE_0_inversify__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_inversify___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_inversify___default });
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};

	let Service = class Service {
	    constructor(ninja) {
	        this.ninja = ninja;
	    }
	    test() {
	        return this.ninja.boo;
	    }
	};
	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return Service; }});
	Service = __decorate([
	    /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["injectable"].bind()(),
	    __param(0, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["inject"].bind()("INinja")), 
	    __metadata('design:paramtypes', [Object])
	], Service);


/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(23);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __WEBPACK_IMPORTED_MODULE_0_inversify__ && __WEBPACK_IMPORTED_MODULE_0_inversify__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_inversify___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_inversify___default });
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};

	let Katana = class Katana {
	    hit() {
	        return "cut!";
	    }
	};
	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return Katana; }});
	Katana = __decorate([
	    /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["injectable"].bind()(), 
	    __metadata('design:paramtypes', [])
	], Katana);


/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(23);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __WEBPACK_IMPORTED_MODULE_0_inversify__ && __WEBPACK_IMPORTED_MODULE_0_inversify__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_inversify___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_inversify___default });
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};

	let Shuriken = class Shuriken {
	    throw() {
	        return "hit!";
	    }
	};
	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return Shuriken; }});
	Shuriken = __decorate([
	    /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["injectable"].bind()(), 
	    __metadata('design:paramtypes', [])
	], Shuriken);


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(23);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __WEBPACK_IMPORTED_MODULE_0_inversify__ && __WEBPACK_IMPORTED_MODULE_0_inversify__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_inversify__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_inversify___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_inversify___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Ninja__ = __webpack_require__(327);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_katana__ = __webpack_require__(329);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_shuriken__ = __webpack_require__(330);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_Service__ = __webpack_require__(328);





	//import Page from "./Page";
	let kernel = new /* harmony import */__WEBPACK_IMPORTED_MODULE_0_inversify__["Kernel"]();
	//let kernel = KernelStore.get();
	kernel.bind("INinja").to(/* harmony import */__WEBPACK_IMPORTED_MODULE_1__classes_Ninja__["a"]).inSingletonScope();
	kernel.bind("IKatana").to(/* harmony import */__WEBPACK_IMPORTED_MODULE_2__classes_katana__["a"]);
	kernel.bind("IShuriken").to(/* harmony import */__WEBPACK_IMPORTED_MODULE_3__classes_shuriken__["a"]);
	kernel.bind("IService").to(/* harmony import */__WEBPACK_IMPORTED_MODULE_4__classes_Service__["a"]);
	/* harmony default export */ exports["a"] = kernel;


/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(159);


/***/ }

},[336]);