module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/aboutUs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Pedro Costa\\Desktop\\ETHProj\\kickstart\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    color: "green",
    inverted: true,
    vertical: true,
    style: {
      padding: '5em 0em',
      backgroundImage: 'url(https://images.unsplash.com/photo-1602168431602-9bfa3722a472?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80)',

      /* Set a specific height */
      minHeight: '400px',

      /* Create the parallax scrolling effect */
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no - repeat',
      backgroundSize: 'cover'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    inverted: true,
    as: "h4",
    content: "About",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    link: true,
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "/aboutUs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "About us"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "/aboutUs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Contact Us"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://coinmarketcap.com/alexandria/glossary/asset-backed-tokens",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "What are Tokens?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "/subscribe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Roadmap"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    inverted: true,
    as: "h4",
    content: "Services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    link: true,
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "/subscribe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Subscribe to Newsletter"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://forms.gle/a3HoNy1kZ5EWP9gN6",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Participate in Survey"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "/subscribe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "/subscribe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "FAQ"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h4",
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Additional Information"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Become an early adopter to help shape the future and be part of what comes next. Subscribe to the newsletter to stay up to date with our progress!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h4",
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Reach us at:"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    circular: true,
    color: "facebook",
    icon: "facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    circular: true,
    color: "twitter",
    icon: "twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    circular: true,
    color: "linkedin",
    icon: "linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    circular: true,
    color: "google plus",
    icon: "google plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }))))));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @artsy/fresnel */ "@artsy/fresnel");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Pedro Costa\\Desktop\\ETHProj\\kickstart\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/*export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};*/

const {
  MediaContextProvider,
  Media
} = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1080
  }
});
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a
 responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class DesktopContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "hideFixedMenu", () => this.setState({
      fixed: false
    }));

    _defineProperty(this, "showFixedMenu", () => this.setState({
      fixed: true
    }));
  }

  render() {
    const {
      children
    } = this.props;
    const {
      fixed
    } = this.state;
    return __jsx(Media, {
      greaterThan: "mobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Visibility"], {
      once: false,
      onBottomPassed: this.showFixedMenu,
      onBottomPassedReverse: this.hideFixedMenu,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      color: "green",
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 10,
        padding: '.2em 0em',
        backgroundImage: 'url(https://images.unsplash.com/photo-1602168431602-9bfa3722a472?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80)',

        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover'
      },
      vertical: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      fixed: fixed ? 'top' : null,
      inverted: !fixed,
      pointing: !fixed,
      secondary: !fixed,
      size: "large",
      borderless: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "/logo.png",
      size: "small",
      centered: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/openCampaigns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, "Open Campaigns"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/campaigns/new",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }, "New Campaign"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/aboutUs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }, "About Us"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      position: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      inverted: !fixed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 23
      }
    }, "Log in"))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      inverted: !fixed,
      primary: fixed,
      style: {
        marginLeft: '0.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 23
      }
    }, "Sign Up")))))))), children);
  }

}

DesktopContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

class MobileContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleSidebarHide", () => this.setState({
      sidebarOpened: false
    }));

    _defineProperty(this, "handleToggle", () => this.setState({
      sidebarOpened: true
    }));
  }

  render() {
    const {
      children
    } = this.props;
    const {
      sidebarOpened
    } = this.state;
    return __jsx(Media, {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Sidebar"].Pushable,
      at: "mobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Sidebar"].Pushable, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Sidebar"], {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"],
      animation: "overlay",
      inverted: true,
      onHide: this.handleSidebarHide,
      vertical: true,
      visible: sidebarOpened,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    }, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/OpenCampaigns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }
    }, "Open Campaigns"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/campaigns/new",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    }, "New Campaign"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/aboutUs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }, "About Us"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }, "Log in"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }
    }, "Sign Up")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Sidebar"].Pusher, {
      dimmed: sidebarOpened,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 350,
        padding: '.2em 0em'
      },
      vertical: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      inverted: true,
      pointing: true,
      secondary: true,
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      onClick: this.handleToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "sidebar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 21
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      position: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 19
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      inverted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, "Log in"))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      inverted: true,
      style: {
        marginLeft: '0.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 25
      }
    }, "Sign Up"))))))), children)));
  }

}

MobileContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

const ResponsiveContainer = ({
  children
}) =>
/* Heads up!
 * For large applications it may not be best option to
 put all page into these containers at
 * they will be rendered twice for SSR.
 */
__jsx(MediaContextProvider, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 256,
    columnNumber: 3
  }
}, __jsx(DesktopContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 257,
    columnNumber: 5
  }
}, children), __jsx(MobileContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 5
  }
}, children));

ResponsiveContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveContainer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Pedro Costa\\Desktop\\ETHProj\\kickstart\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //Since Layout is always loaded it
// is best to import this here

/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./ethereum/build/CampaignFactory.json":
/*!*********************************************!*\
  !*** ./ethereum/build/CampaignFactory.json ***!
  \*********************************************/
/*! exports provided: assembly, bytecode, functionHashes, gasEstimates, interface, metadata, opcodes, runtimeBytecode, srcmap, srcmapRuntime, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":489,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":489,\"name\":\"CALLVALUE\"},{\"begin\":28,\"end\":489,\"name\":\"ISZERO\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"DUP1\"},{\"begin\":28,\"end\":489,\"name\":\"REVERT\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":489,\"name\":\"DUP1\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"CODECOPY\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a72305820bbd97a3c76c5f2cf5767fcdba37a0d4a3365772dc8737dec50630419e590d2d40029\",\".code\":[{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":489,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"CALLDATALOAD\"},{\"begin\":28,\"end\":489,\"name\":\"DIV\"},{\"begin\":28,\"end\":489,\"name\":\"AND\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"339D50A5\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"EQ\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":489,\"name\":\"DUP1\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"4ACB9D4F\"},{\"begin\":28,\"end\":489,\"name\":\"EQ\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":489,\"name\":\"DUP1\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"A3303A75\"},{\"begin\":28,\"end\":489,\"name\":\"EQ\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"DUP1\"},{\"begin\":28,\"end\":489,\"name\":\"REVERT\"},{\"begin\":57,\"end\":91,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":57,\"end\":91,\"name\":\"JUMPDEST\"},{\"begin\":57,\"end\":91,\"name\":\"CALLVALUE\"},{\"begin\":57,\"end\":91,\"name\":\"ISZERO\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":57,\"end\":91,\"name\":\"JUMPI\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":57,\"end\":91,\"name\":\"DUP1\"},{\"begin\":57,\"end\":91,\"name\":\"REVERT\"},{\"begin\":57,\"end\":91,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":57,\"end\":91,\"name\":\"JUMPDEST\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":57,\"end\":91,\"name\":\"CALLDATALOAD\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":57,\"end\":91,\"name\":\"JUMP\"},{\"begin\":57,\"end\":91,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":57,\"end\":91,\"name\":\"JUMPDEST\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":57,\"end\":91,\"name\":\"MLOAD\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP1\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP2\"},{\"begin\":57,\"end\":91,\"name\":\"AND\"},{\"begin\":57,\"end\":91,\"name\":\"DUP2\"},{\"begin\":57,\"end\":91,\"name\":\"MSTORE\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":57,\"end\":91,\"name\":\"ADD\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":57,\"end\":91,\"name\":\"MLOAD\"},{\"begin\":57,\"end\":91,\"name\":\"DUP1\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP2\"},{\"begin\":57,\"end\":91,\"name\":\"SUB\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP1\"},{\"begin\":57,\"end\":91,\"name\":\"RETURN\"},{\"begin\":384,\"end\":486,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":384,\"end\":486,\"name\":\"JUMPDEST\"},{\"begin\":384,\"end\":486,\"name\":\"CALLVALUE\"},{\"begin\":384,\"end\":486,\"name\":\"ISZERO\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":384,\"end\":486,\"name\":\"JUMPI\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":384,\"end\":486,\"name\":\"DUP1\"},{\"begin\":384,\"end\":486,\"name\":\"REVERT\"},{\"begin\":384,\"end\":486,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":384,\"end\":486,\"name\":\"JUMPDEST\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":384,\"end\":486,\"name\":\"JUMP\"},{\"begin\":384,\"end\":486,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":384,\"end\":486,\"name\":\"JUMPDEST\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":384,\"end\":486,\"name\":\"MLOAD\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":384,\"end\":486,\"name\":\"DUP1\"},{\"begin\":384,\"end\":486,\"name\":\"DUP3\"},{\"begin\":384,\"end\":486,\"name\":\"MSTORE\"},{\"begin\":384,\"end\":486,\"name\":\"DUP2\"},{\"begin\":384,\"end\":486,\"name\":\"SWAP1\"},{\"begin\":384,\"end\":486,\"name\":\"DUP2\"},{\"begin\":384,\"end\":486,\"name\":\"ADD\"},{\"begin\":384,\"end\":486,\"name\":\"DUP4\"},{\"begin\":384,\"end\":486,\"name\":\"DUP2\"},{\"begin\":384,\"end\":486,\"name\":\"DUP2\"},{\"begin\":384,\"end\":486,\"name\":\"MLOAD\"},{\"begin\":384,\"end\":486,\"name\":\"DUP2\"},{\"begin\":384,\"end\":486,\"name\":\"MSTORE\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":384,\"end\":486,\"name\":\"ADD\"},{\"begin\":384,\"end\":486,\"name\":\"SWAP2\"},{\"begin\":384,\"end\":486,\"name\":\"POP\"},{\"begin\":384,\"end\":486,\"name\":\"DUP1\"},{\"begin\":384,\"end\":486,\"name\":\"MLOAD\"},{\"begin\":384,\"end\":486,\"name\":\"SWAP1\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":384,\"end\":486,\"name\":\"ADD\"},{\"begin\":384,\"end\":486,\"name\":\"SWAP1\"},{\"begin\":384,\"end\":486,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":384,\"end\":486,\"name\":\"MUL\"},{\"begin\":384,\"end\":486,\"name\":\"DUP1\"},{\"begin\":384,\"end\":486,\"name\":\"DUP4\"},{\"begin\":384,\"end\":486,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":29,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":99,\"end\":100,\"name\":\"DUP1\"},{\"begin\":94,\"end\":97,\"name\":\"DUP3\"},{\"begin\":90,\"end\":93,\"name\":\"ADD\"},{\"begin\":84,\"end\":89,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":74,\"name\":\"DUP4\"},{\"begin\":71,\"end\":74,\"name\":\"DUP3\"},{\"begin\":71,\"end\":74,\"name\":\"ADD\"},{\"begin\":64,\"end\":70,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":48,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP3\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"RETURN\"},{\"begin\":98,\"end\":378,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":98,\"end\":378,\"name\":\"JUMPDEST\"},{\"begin\":98,\"end\":378,\"name\":\"CALLVALUE\"},{\"begin\":98,\"end\":378,\"name\":\"ISZERO\"},{\"begin\":98,\"end\":378,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":98,\"end\":378,\"name\":\"JUMPI\"},{\"begin\":98,\"end\":378,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":98,\"end\":378,\"name\":\"DUP1\"},{\"begin\":98,\"end\":378,\"name\":\"REVERT\"},{\"begin\":98,\"end\":378,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":98,\"end\":378,\"name\":\"JUMPDEST\"},{\"begin\":98,\"end\":378,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":98,\"end\":378,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":98,\"end\":378,\"name\":\"CALLDATALOAD\"},{\"begin\":98,\"end\":378,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":98,\"end\":378,\"name\":\"JUMP\"},{\"begin\":98,\"end\":378,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":98,\"end\":378,\"name\":\"JUMPDEST\"},{\"begin\":98,\"end\":378,\"name\":\"STOP\"},{\"begin\":57,\"end\":91,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":57,\"end\":91,\"name\":\"JUMPDEST\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":57,\"end\":91,\"name\":\"DUP1\"},{\"begin\":57,\"end\":91,\"name\":\"SLOAD\"},{\"begin\":57,\"end\":91,\"name\":\"DUP3\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP1\"},{\"begin\":57,\"end\":91,\"name\":\"DUP2\"},{\"begin\":57,\"end\":91,\"name\":\"LT\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":57,\"end\":91,\"name\":\"JUMPI\"},{\"begin\":57,\"end\":91,\"name\":\"INVALID\"},{\"begin\":57,\"end\":91,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":57,\"end\":91,\"name\":\"JUMPDEST\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP2\"},{\"begin\":57,\"end\":91,\"name\":\"DUP3\"},{\"begin\":57,\"end\":91,\"name\":\"MSTORE\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP1\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP2\"},{\"begin\":57,\"end\":91,\"name\":\"KECCAK256\"},{\"begin\":57,\"end\":91,\"name\":\"ADD\"},{\"begin\":57,\"end\":91,\"name\":\"SLOAD\"},{\"begin\":57,\"end\":91,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":57,\"end\":91,\"name\":\"AND\"},{\"begin\":57,\"end\":91,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":57,\"end\":91,\"name\":\"DUP2\"},{\"begin\":57,\"end\":91,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":384,\"end\":486,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":384,\"end\":486,\"name\":\"JUMPDEST\"},{\"begin\":438,\"end\":447,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":438,\"end\":447,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":438,\"end\":447,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":438,\"end\":447,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":438,\"end\":447,\"name\":\"JUMPDEST\"},{\"begin\":463,\"end\":480,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":456,\"end\":480,\"name\":\"DUP1\"},{\"begin\":456,\"end\":480,\"name\":\"SLOAD\"},{\"begin\":456,\"end\":480,\"name\":\"DUP1\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":456,\"end\":480,\"name\":\"MUL\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":456,\"end\":480,\"name\":\"ADD\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":456,\"end\":480,\"name\":\"MLOAD\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":480,\"name\":\"DUP2\"},{\"begin\":456,\"end\":480,\"name\":\"ADD\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":456,\"end\":480,\"name\":\"MSTORE\"},{\"begin\":456,\"end\":480,\"name\":\"DUP1\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP3\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP2\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":480,\"name\":\"DUP2\"},{\"begin\":456,\"end\":480,\"name\":\"DUP2\"},{\"begin\":456,\"end\":480,\"name\":\"MSTORE\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":456,\"end\":480,\"name\":\"ADD\"},{\"begin\":456,\"end\":480,\"name\":\"DUP3\"},{\"begin\":456,\"end\":480,\"name\":\"DUP1\"},{\"begin\":456,\"end\":480,\"name\":\"SLOAD\"},{\"begin\":456,\"end\":480,\"name\":\"DUP1\"},{\"begin\":456,\"end\":480,\"name\":\"ISZERO\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":456,\"end\":480,\"name\":\"JUMPI\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":456,\"end\":480,\"name\":\"MUL\"},{\"begin\":456,\"end\":480,\"name\":\"DUP3\"},{\"begin\":456,\"end\":480,\"name\":\"ADD\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP2\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":456,\"end\":480,\"name\":\"MSTORE\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":456,\"end\":480,\"name\":\"KECCAK256\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":480,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":456,\"end\":480,\"name\":\"JUMPDEST\"},{\"begin\":456,\"end\":480,\"name\":\"DUP2\"},{\"begin\":456,\"end\":480,\"name\":\"SLOAD\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":456,\"end\":480,\"name\":\"AND\"},{\"begin\":456,\"end\":480,\"name\":\"DUP2\"},{\"begin\":456,\"end\":480,\"name\":\"MSTORE\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP2\"},{\"begin\":456,\"end\":480,\"name\":\"ADD\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":456,\"end\":480,\"name\":\"ADD\"},{\"begin\":456,\"end\":480,\"name\":\"DUP1\"},{\"begin\":456,\"end\":480,\"name\":\"DUP4\"},{\"begin\":456,\"end\":480,\"name\":\"GT\"},{\"begin\":456,\"end\":480,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":456,\"end\":480,\"name\":\"JUMPI\"},{\"begin\":456,\"end\":480,\"name\":\"tag\",\"value\":\"22\"},{\"begin\":456,\"end\":480,\"name\":\"JUMPDEST\"},{\"begin\":456,\"end\":480,\"name\":\"POP\"},{\"begin\":456,\"end\":480,\"name\":\"POP\"},{\"begin\":456,\"end\":480,\"name\":\"POP\"},{\"begin\":456,\"end\":480,\"name\":\"POP\"},{\"begin\":456,\"end\":480,\"name\":\"POP\"},{\"begin\":456,\"end\":480,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":480,\"name\":\"POP\"},{\"begin\":384,\"end\":486,\"name\":\"tag\",\"value\":\"21\"},{\"begin\":384,\"end\":486,\"name\":\"JUMPDEST\"},{\"begin\":384,\"end\":486,\"name\":\"SWAP1\"},{\"begin\":384,\"end\":486,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":98,\"end\":378,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":98,\"end\":378,\"name\":\"JUMPDEST\"},{\"begin\":217,\"end\":236,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":252,\"end\":259,\"name\":\"DUP2\"},{\"begin\":261,\"end\":271,\"name\":\"CALLER\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":239,\"end\":272,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":239,\"end\":272,\"name\":\"tag\",\"value\":\"25\"},{\"begin\":239,\"end\":272,\"name\":\"JUMPDEST\"},{\"begin\":239,\"end\":272,\"name\":\"SWAP2\"},{\"begin\":239,\"end\":272,\"name\":\"DUP3\"},{\"begin\":239,\"end\":272,\"name\":\"MSTORE\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":239,\"end\":272,\"name\":\"AND\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":239,\"end\":272,\"name\":\"DUP3\"},{\"begin\":239,\"end\":272,\"name\":\"ADD\"},{\"begin\":239,\"end\":272,\"name\":\"MSTORE\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":239,\"end\":272,\"name\":\"SWAP1\"},{\"begin\":239,\"end\":272,\"name\":\"DUP2\"},{\"begin\":239,\"end\":272,\"name\":\"ADD\"},{\"begin\":239,\"end\":272,\"name\":\"SWAP1\"},{\"begin\":239,\"end\":272,\"name\":\"MLOAD\"},{\"begin\":239,\"end\":272,\"name\":\"DUP1\"},{\"begin\":239,\"end\":272,\"name\":\"SWAP2\"},{\"begin\":239,\"end\":272,\"name\":\"SUB\"},{\"begin\":239,\"end\":272,\"name\":\"SWAP1\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":239,\"end\":272,\"name\":\"CREATE\"},{\"begin\":239,\"end\":272,\"name\":\"DUP1\"},{\"begin\":239,\"end\":272,\"name\":\"ISZERO\"},{\"begin\":239,\"end\":272,\"name\":\"ISZERO\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":239,\"end\":272,\"name\":\"JUMPI\"},{\"begin\":239,\"end\":272,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":239,\"end\":272,\"name\":\"DUP1\"},{\"begin\":239,\"end\":272,\"name\":\"REVERT\"},{\"begin\":239,\"end\":272,\"name\":\"tag\",\"value\":\"27\"},{\"begin\":239,\"end\":272,\"name\":\"JUMPDEST\"},{\"begin\":217,\"end\":272,\"name\":\"SWAP1\"},{\"begin\":217,\"end\":272,\"name\":\"POP\"},{\"begin\":335,\"end\":352,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":335,\"end\":370,\"name\":\"DUP1\"},{\"begin\":335,\"end\":370,\"name\":\"SLOAD\"},{\"begin\":335,\"end\":370,\"name\":\"DUP1\"},{\"begin\":335,\"end\":370,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":335,\"end\":370,\"name\":\"ADD\"},{\"begin\":335,\"end\":370,\"name\":\"DUP3\"},{\"begin\":335,\"end\":370,\"name\":\"DUP2\"},{\"begin\":335,\"end\":370,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP2\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP1\"},{\"begin\":335,\"end\":370,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":335,\"end\":370,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":335,\"end\":370,\"name\":\"tag\",\"value\":\"28\"},{\"begin\":335,\"end\":370,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":335,\"end\":370,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP2\"},{\"begin\":335,\"end\":370,\"name\":\"DUP3\"},{\"begin\":335,\"end\":370,\"name\":\"MSTORE\"},{\"begin\":335,\"end\":370,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP1\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP2\"},{\"begin\":335,\"end\":370,\"name\":\"KECCAK256\"},{\"begin\":335,\"end\":370,\"name\":\"ADD\"},{\"begin\":335,\"end\":370,\"name\":\"DUP1\"},{\"begin\":335,\"end\":370,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":335,\"end\":370,\"name\":\"AND\"},{\"begin\":335,\"end\":370,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP3\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP1\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP3\"},{\"begin\":335,\"end\":370,\"name\":\"AND\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP2\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP1\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP2\"},{\"begin\":335,\"end\":370,\"name\":\"OR\"},{\"begin\":335,\"end\":370,\"name\":\"SWAP1\"},{\"begin\":335,\"end\":370,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":98,\"end\":378,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":489,\"name\":\"MLOAD\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"ADD\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":489,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":489,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":489,\"name\":\"MLOAD\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":489,\"name\":\"DUP1\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":489,\"name\":\"DUP4\"},{\"begin\":28,\"end\":489,\"name\":\"CODECOPY\"},{\"begin\":28,\"end\":489,\"name\":\"ADD\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":489,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"SLOAD\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"DUP4\"},{\"begin\":28,\"end\":489,\"name\":\"SSTORE\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"ISZERO\"},{\"begin\":28,\"end\":489,\"name\":\"GT\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"DUP4\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":489,\"name\":\"KECCAK256\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP2\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"ADD\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":489,\"name\":\"DUP4\"},{\"begin\":28,\"end\":489,\"name\":\"ADD\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":28,\"end\":489,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"32\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"POP\"},{\"begin\":28,\"end\":489,\"name\":\"POP\"},{\"begin\":28,\"end\":489,\"name\":\"POP\"},{\"begin\":28,\"end\":489,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"21\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP2\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"35\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"DUP1\"},{\"begin\":28,\"end\":489,\"name\":\"DUP3\"},{\"begin\":28,\"end\":489,\"name\":\"GT\"},{\"begin\":28,\"end\":489,\"name\":\"ISZERO\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":489,\"name\":\"DUP2\"},{\"begin\":28,\"end\":489,\"name\":\"SSTORE\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":28,\"end\":489,\"name\":\"ADD\"},{\"begin\":28,\"end\":489,\"name\":\"PUSH [tag]\",\"value\":\"35\"},{\"begin\":28,\"end\":489,\"name\":\"JUMP\"},{\"begin\":28,\"end\":489,\"name\":\"tag\",\"value\":\"36\"},{\"begin\":28,\"end\":489,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":489,\"name\":\"POP\"},{\"begin\":28,\"end\":489,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":489,\"name\":\"JUMP\"}],\".data\":{\"0\":{\".code\":[{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":1372,\"end\":1494,\"name\":\"CALLVALUE\"},{\"begin\":1372,\"end\":1494,\"name\":\"ISZERO\"},{\"begin\":1372,\"end\":1494,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":1372,\"end\":1494,\"name\":\"JUMPI\"},{\"begin\":1372,\"end\":1494,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1372,\"end\":1494,\"name\":\"DUP1\"},{\"begin\":1372,\"end\":1494,\"name\":\"REVERT\"},{\"begin\":1372,\"end\":1494,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":1372,\"end\":1494,\"name\":\"JUMPDEST\"},{\"begin\":1372,\"end\":1494,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1372,\"end\":1494,\"name\":\"MLOAD\"},{\"begin\":1372,\"end\":1494,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1372,\"end\":1494,\"name\":\"DUP1\"},{\"begin\":1372,\"end\":1494,\"name\":\"PUSHSIZE\"},{\"begin\":1372,\"end\":1494,\"name\":\"DUP4\"},{\"begin\":1372,\"end\":1494,\"name\":\"CODECOPY\"},{\"begin\":1372,\"end\":1494,\"name\":\"DUP2\"},{\"begin\":1372,\"end\":1494,\"name\":\"ADD\"},{\"begin\":1372,\"end\":1494,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1372,\"end\":1494,\"name\":\"MSTORE\"},{\"begin\":1372,\"end\":1494,\"name\":\"DUP1\"},{\"begin\":1372,\"end\":1494,\"name\":\"DUP1\"},{\"begin\":1372,\"end\":1494,\"name\":\"MLOAD\"},{\"begin\":1372,\"end\":1494,\"name\":\"SWAP2\"},{\"begin\":1372,\"end\":1494,\"name\":\"SWAP1\"},{\"begin\":1372,\"end\":1494,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1372,\"end\":1494,\"name\":\"ADD\"},{\"begin\":1372,\"end\":1494,\"name\":\"DUP1\"},{\"begin\":1372,\"end\":1494,\"name\":\"MLOAD\"},{\"begin\":1435,\"end\":1442,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1435,\"end\":1452,\"name\":\"DUP1\"},{\"begin\":1435,\"end\":1452,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1435,\"end\":1452,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":1435,\"end\":1452,\"name\":\"SWAP3\"},{\"begin\":1435,\"end\":1452,\"name\":\"SWAP1\"},{\"begin\":1435,\"end\":1452,\"name\":\"SWAP3\"},{\"begin\":1435,\"end\":1452,\"name\":\"AND\"},{\"begin\":1435,\"end\":1452,\"name\":\"SWAP2\"},{\"begin\":1435,\"end\":1452,\"name\":\"SWAP1\"},{\"begin\":1435,\"end\":1452,\"name\":\"SWAP2\"},{\"begin\":1435,\"end\":1452,\"name\":\"OR\"},{\"begin\":1435,\"end\":1452,\"name\":\"DUP2\"},{\"begin\":1435,\"end\":1452,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1459,\"end\":1488,\"name\":\"SWAP4\"},{\"begin\":1459,\"end\":1488,\"name\":\"SWAP1\"},{\"begin\":1459,\"end\":1488,\"name\":\"SWAP4\"},{\"begin\":1459,\"end\":1488,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"855\"},{\"begin\":-1,\"end\":-1,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"DUP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"CODECOPY\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a72305820f6aa3c72083dd683f3e3189f41455cf5d6d1b76811861e992be58ca96583deb30029\",\".code\":[{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"CALLDATASIZE\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"CALLDATALOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"DIV\"},{\"begin\":493,\"end\":4070,\"name\":\"AND\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"3441006\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"A144391\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"3410452A\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"4051DDAC\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"481C6A75\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"81D12C58\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"82FDE093\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"8A9CFD55\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"937E09B1\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"D7BB99BA\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"D7D1BBDB\"},{\"begin\":493,\"end\":4070,\"name\":\"EQ\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"REVERT\"},{\"begin\":3145,\"end\":3617,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":3145,\"end\":3617,\"name\":\"JUMPDEST\"},{\"begin\":3145,\"end\":3617,\"name\":\"CALLVALUE\"},{\"begin\":3145,\"end\":3617,\"name\":\"ISZERO\"},{\"begin\":3145,\"end\":3617,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":3145,\"end\":3617,\"name\":\"JUMPI\"},{\"begin\":3145,\"end\":3617,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3145,\"end\":3617,\"name\":\"DUP1\"},{\"begin\":3145,\"end\":3617,\"name\":\"REVERT\"},{\"begin\":3145,\"end\":3617,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":3145,\"end\":3617,\"name\":\"JUMPDEST\"},{\"begin\":3145,\"end\":3617,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":3145,\"end\":3617,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3145,\"end\":3617,\"name\":\"CALLDATALOAD\"},{\"begin\":3145,\"end\":3617,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":3145,\"end\":3617,\"name\":\"JUMP\"},{\"begin\":3145,\"end\":3617,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":3145,\"end\":3617,\"name\":\"JUMPDEST\"},{\"begin\":3145,\"end\":3617,\"name\":\"STOP\"},{\"begin\":1076,\"end\":1117,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":1076,\"end\":1117,\"name\":\"JUMPDEST\"},{\"begin\":1076,\"end\":1117,\"name\":\"CALLVALUE\"},{\"begin\":1076,\"end\":1117,\"name\":\"ISZERO\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":1076,\"end\":1117,\"name\":\"JUMPI\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1076,\"end\":1117,\"name\":\"DUP1\"},{\"begin\":1076,\"end\":1117,\"name\":\"REVERT\"},{\"begin\":1076,\"end\":1117,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":1076,\"end\":1117,\"name\":\"JUMPDEST\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1076,\"end\":1117,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1076,\"end\":1117,\"name\":\"AND\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH [tag]\",\"value\":\"18\"},{\"begin\":1076,\"end\":1117,\"name\":\"JUMP\"},{\"begin\":1076,\"end\":1117,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":1076,\"end\":1117,\"name\":\"JUMPDEST\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1076,\"end\":1117,\"name\":\"MLOAD\"},{\"begin\":1076,\"end\":1117,\"name\":\"SWAP1\"},{\"begin\":1076,\"end\":1117,\"name\":\"ISZERO\"},{\"begin\":1076,\"end\":1117,\"name\":\"ISZERO\"},{\"begin\":1076,\"end\":1117,\"name\":\"DUP2\"},{\"begin\":1076,\"end\":1117,\"name\":\"MSTORE\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1076,\"end\":1117,\"name\":\"ADD\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1076,\"end\":1117,\"name\":\"MLOAD\"},{\"begin\":1076,\"end\":1117,\"name\":\"DUP1\"},{\"begin\":1076,\"end\":1117,\"name\":\"SWAP2\"},{\"begin\":1076,\"end\":1117,\"name\":\"SUB\"},{\"begin\":1076,\"end\":1117,\"name\":\"SWAP1\"},{\"begin\":1076,\"end\":1117,\"name\":\"RETURN\"},{\"begin\":3975,\"end\":4065,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMPDEST\"},{\"begin\":3975,\"end\":4065,\"name\":\"CALLVALUE\"},{\"begin\":3975,\"end\":4065,\"name\":\"ISZERO\"},{\"begin\":3975,\"end\":4065,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMPI\"},{\"begin\":3975,\"end\":4065,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3975,\"end\":4065,\"name\":\"DUP1\"},{\"begin\":3975,\"end\":4065,\"name\":\"REVERT\"},{\"begin\":3975,\"end\":4065,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMPDEST\"},{\"begin\":3975,\"end\":4065,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":3975,\"end\":4065,\"name\":\"PUSH [tag]\",\"value\":\"21\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMP\"},{\"begin\":3975,\"end\":4065,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMPDEST\"},{\"begin\":3975,\"end\":4065,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3975,\"end\":4065,\"name\":\"MLOAD\"},{\"begin\":3975,\"end\":4065,\"name\":\"SWAP1\"},{\"begin\":3975,\"end\":4065,\"name\":\"DUP2\"},{\"begin\":3975,\"end\":4065,\"name\":\"MSTORE\"},{\"begin\":3975,\"end\":4065,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3975,\"end\":4065,\"name\":\"ADD\"},{\"begin\":3975,\"end\":4065,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3975,\"end\":4065,\"name\":\"MLOAD\"},{\"begin\":3975,\"end\":4065,\"name\":\"DUP1\"},{\"begin\":3975,\"end\":4065,\"name\":\"SWAP2\"},{\"begin\":3975,\"end\":4065,\"name\":\"SUB\"},{\"begin\":3975,\"end\":4065,\"name\":\"SWAP1\"},{\"begin\":3975,\"end\":4065,\"name\":\"RETURN\"},{\"begin\":3623,\"end\":3969,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":3623,\"end\":3969,\"name\":\"JUMPDEST\"},{\"begin\":3623,\"end\":3969,\"name\":\"CALLVALUE\"},{\"begin\":3623,\"end\":3969,\"name\":\"ISZERO\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":3623,\"end\":3969,\"name\":\"JUMPI\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"REVERT\"},{\"begin\":3623,\"end\":3969,\"name\":\"tag\",\"value\":\"22\"},{\"begin\":3623,\"end\":3969,\"name\":\"JUMPDEST\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH [tag]\",\"value\":\"24\"},{\"begin\":3623,\"end\":3969,\"name\":\"JUMP\"},{\"begin\":3623,\"end\":3969,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":3623,\"end\":3969,\"name\":\"JUMPDEST\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3623,\"end\":3969,\"name\":\"MLOAD\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP5\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP6\"},{\"begin\":3623,\"end\":3969,\"name\":\"MSTORE\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP6\"},{\"begin\":3623,\"end\":3969,\"name\":\"ADD\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP4\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP4\"},{\"begin\":3623,\"end\":3969,\"name\":\"MSTORE\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP6\"},{\"begin\":3623,\"end\":3969,\"name\":\"ADD\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP3\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP3\"},{\"begin\":3623,\"end\":3969,\"name\":\"MSTORE\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP5\"},{\"begin\":3623,\"end\":3969,\"name\":\"ADD\"},{\"begin\":3623,\"end\":3969,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP2\"},{\"begin\":3623,\"end\":3969,\"name\":\"AND\"},{\"begin\":3623,\"end\":3969,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP4\"},{\"begin\":3623,\"end\":3969,\"name\":\"ADD\"},{\"begin\":3623,\"end\":3969,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP2\"},{\"begin\":3623,\"end\":3969,\"name\":\"ADD\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"MLOAD\"},{\"begin\":3623,\"end\":3969,\"name\":\"DUP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP2\"},{\"begin\":3623,\"end\":3969,\"name\":\"SUB\"},{\"begin\":3623,\"end\":3969,\"name\":\"SWAP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"RETURN\"},{\"begin\":982,\"end\":1004,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":982,\"end\":1004,\"name\":\"JUMPDEST\"},{\"begin\":982,\"end\":1004,\"name\":\"CALLVALUE\"},{\"begin\":982,\"end\":1004,\"name\":\"ISZERO\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":982,\"end\":1004,\"name\":\"JUMPI\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":982,\"end\":1004,\"name\":\"DUP1\"},{\"begin\":982,\"end\":1004,\"name\":\"REVERT\"},{\"begin\":982,\"end\":1004,\"name\":\"tag\",\"value\":\"25\"},{\"begin\":982,\"end\":1004,\"name\":\"JUMPDEST\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":982,\"end\":1004,\"name\":\"JUMP\"},{\"begin\":982,\"end\":1004,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":982,\"end\":1004,\"name\":\"JUMPDEST\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":982,\"end\":1004,\"name\":\"MLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":982,\"end\":1004,\"name\":\"SWAP2\"},{\"begin\":982,\"end\":1004,\"name\":\"SWAP1\"},{\"begin\":982,\"end\":1004,\"name\":\"SWAP2\"},{\"begin\":982,\"end\":1004,\"name\":\"AND\"},{\"begin\":982,\"end\":1004,\"name\":\"DUP2\"},{\"begin\":982,\"end\":1004,\"name\":\"MSTORE\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":982,\"end\":1004,\"name\":\"ADD\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":982,\"end\":1004,\"name\":\"MLOAD\"},{\"begin\":982,\"end\":1004,\"name\":\"DUP1\"},{\"begin\":982,\"end\":1004,\"name\":\"SWAP2\"},{\"begin\":982,\"end\":1004,\"name\":\"SUB\"},{\"begin\":982,\"end\":1004,\"name\":\"SWAP1\"},{\"begin\":982,\"end\":1004,\"name\":\"RETURN\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"CALLVALUE\"},{\"begin\":1199,\"end\":1224,\"name\":\"ISZERO\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPI\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"REVERT\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"28\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1199,\"end\":1224,\"name\":\"CALLDATALOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"30\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMP\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1199,\"end\":1224,\"name\":\"MLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP6\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP5\"},{\"begin\":1199,\"end\":1224,\"name\":\"AND\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ISZERO\"},{\"begin\":1199,\"end\":1224,\"name\":\"ISZERO\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP7\"},{\"begin\":1199,\"end\":1224,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"AND\"},{\"begin\":1199,\"end\":1224,\"name\":\"ISZERO\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":1199,\"end\":1224,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"AND\"},{\"begin\":1199,\"end\":1224,\"name\":\"DIV\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"C0\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP9\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"ISZERO\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPI\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1199,\"end\":1224,\"name\":\"LT\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPI\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP4\"},{\"begin\":1199,\"end\":1224,\"name\":\"SLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DIV\"},{\"begin\":1199,\"end\":1224,\"name\":\"MUL\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP4\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMP\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"32\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1199,\"end\":1224,\"name\":\"KECCAK256\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"SLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP4\"},{\"begin\":1199,\"end\":1224,\"name\":\"GT\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPI\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"SUB\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1199,\"end\":1224,\"name\":\"AND\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"31\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP7\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1199,\"end\":1224,\"name\":\"MLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"SUB\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"RETURN\"},{\"begin\":1045,\"end\":1071,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":1045,\"end\":1071,\"name\":\"JUMPDEST\"},{\"begin\":1045,\"end\":1071,\"name\":\"CALLVALUE\"},{\"begin\":1045,\"end\":1071,\"name\":\"ISZERO\"},{\"begin\":1045,\"end\":1071,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":1045,\"end\":1071,\"name\":\"JUMPI\"},{\"begin\":1045,\"end\":1071,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1045,\"end\":1071,\"name\":\"DUP1\"},{\"begin\":1045,\"end\":1071,\"name\":\"REVERT\"},{\"begin\":1045,\"end\":1071,\"name\":\"tag\",\"value\":\"34\"},{\"begin\":1045,\"end\":1071,\"name\":\"JUMPDEST\"},{\"begin\":1045,\"end\":1071,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":1045,\"end\":1071,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":1045,\"end\":1071,\"name\":\"JUMP\"},{\"begin\":2026,\"end\":2604,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":2026,\"end\":2604,\"name\":\"JUMPDEST\"},{\"begin\":2026,\"end\":2604,\"name\":\"CALLVALUE\"},{\"begin\":2026,\"end\":2604,\"name\":\"ISZERO\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH [tag]\",\"value\":\"37\"},{\"begin\":2026,\"end\":2604,\"name\":\"JUMPI\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP1\"},{\"begin\":2026,\"end\":2604,\"name\":\"REVERT\"},{\"begin\":2026,\"end\":2604,\"name\":\"tag\",\"value\":\"37\"},{\"begin\":2026,\"end\":2604,\"name\":\"JUMPDEST\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"CALLDATALOAD\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"ADD\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP1\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP4\"},{\"begin\":2026,\"end\":2604,\"name\":\"ADD\"},{\"begin\":2026,\"end\":2604,\"name\":\"CALLDATALOAD\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP1\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP3\"},{\"begin\":2026,\"end\":2604,\"name\":\"ADD\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP1\"},{\"begin\":2026,\"end\":2604,\"name\":\"DIV\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"MUL\"},{\"begin\":2026,\"end\":2604,\"name\":\"ADD\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2026,\"end\":2604,\"name\":\"MLOAD\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP1\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"ADD\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2026,\"end\":2604,\"name\":\"MSTORE\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"MSTORE\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP3\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP2\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP1\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP5\"},{\"begin\":2026,\"end\":2604,\"name\":\"ADD\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP4\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP4\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP1\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP3\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP5\"},{\"begin\":2026,\"end\":2604,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP5\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP7\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"DUP5\"},{\"begin\":2026,\"end\":2604,\"name\":\"CALLDATALOAD\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP5\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2026,\"end\":2604,\"name\":\"ADD\"},{\"begin\":2026,\"end\":2604,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2026,\"end\":2604,\"name\":\"AND\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"PUSH [tag]\",\"value\":\"39\"},{\"begin\":2026,\"end\":2604,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"JUMP\"},{\"begin\":1009,\"end\":1040,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":1009,\"end\":1040,\"name\":\"JUMPDEST\"},{\"begin\":1009,\"end\":1040,\"name\":\"CALLVALUE\"},{\"begin\":1009,\"end\":1040,\"name\":\"ISZERO\"},{\"begin\":1009,\"end\":1040,\"name\":\"PUSH [tag]\",\"value\":\"40\"},{\"begin\":1009,\"end\":1040,\"name\":\"JUMPI\"},{\"begin\":1009,\"end\":1040,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1009,\"end\":1040,\"name\":\"DUP1\"},{\"begin\":1009,\"end\":1040,\"name\":\"REVERT\"},{\"begin\":1009,\"end\":1040,\"name\":\"tag\",\"value\":\"40\"},{\"begin\":1009,\"end\":1040,\"name\":\"JUMPDEST\"},{\"begin\":1009,\"end\":1040,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":1009,\"end\":1040,\"name\":\"PUSH [tag]\",\"value\":\"42\"},{\"begin\":1009,\"end\":1040,\"name\":\"JUMP\"},{\"begin\":1564,\"end\":2020,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":1564,\"end\":2020,\"name\":\"JUMPDEST\"},{\"begin\":1564,\"end\":2020,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":1564,\"end\":2020,\"name\":\"PUSH [tag]\",\"value\":\"44\"},{\"begin\":1564,\"end\":2020,\"name\":\"JUMP\"},{\"begin\":2673,\"end\":3139,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":2673,\"end\":3139,\"name\":\"JUMPDEST\"},{\"begin\":2673,\"end\":3139,\"name\":\"CALLVALUE\"},{\"begin\":2673,\"end\":3139,\"name\":\"ISZERO\"},{\"begin\":2673,\"end\":3139,\"name\":\"PUSH [tag]\",\"value\":\"45\"},{\"begin\":2673,\"end\":3139,\"name\":\"JUMPI\"},{\"begin\":2673,\"end\":3139,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2673,\"end\":3139,\"name\":\"DUP1\"},{\"begin\":2673,\"end\":3139,\"name\":\"REVERT\"},{\"begin\":2673,\"end\":3139,\"name\":\"tag\",\"value\":\"45\"},{\"begin\":2673,\"end\":3139,\"name\":\"JUMPDEST\"},{\"begin\":2673,\"end\":3139,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":2673,\"end\":3139,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2673,\"end\":3139,\"name\":\"CALLDATALOAD\"},{\"begin\":2673,\"end\":3139,\"name\":\"PUSH [tag]\",\"value\":\"47\"},{\"begin\":2673,\"end\":3139,\"name\":\"JUMP\"},{\"begin\":3145,\"end\":3617,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":3145,\"end\":3617,\"name\":\"JUMPDEST\"},{\"begin\":3252,\"end\":3275,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1282,\"end\":1289,\"name\":\"DUP1\"},{\"begin\":1282,\"end\":1289,\"name\":\"SLOAD\"},{\"begin\":1268,\"end\":1278,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1268,\"end\":1289,\"name\":\"SWAP1\"},{\"begin\":1268,\"end\":1289,\"name\":\"DUP2\"},{\"begin\":1268,\"end\":1289,\"name\":\"AND\"},{\"begin\":1282,\"end\":1289,\"name\":\"SWAP2\"},{\"begin\":1282,\"end\":1289,\"name\":\"AND\"},{\"begin\":1268,\"end\":1289,\"name\":\"EQ\"},{\"begin\":1260,\"end\":1290,\"name\":\"PUSH [tag]\",\"value\":\"49\"},{\"begin\":1260,\"end\":1290,\"name\":\"JUMPI\"},{\"begin\":1260,\"end\":1290,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1260,\"end\":1290,\"name\":\"DUP1\"},{\"begin\":1260,\"end\":1290,\"name\":\"REVERT\"},{\"begin\":1260,\"end\":1290,\"name\":\"tag\",\"value\":\"49\"},{\"begin\":1260,\"end\":1290,\"name\":\"JUMPDEST\"},{\"begin\":3278,\"end\":3286,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3278,\"end\":3293,\"name\":\"DUP1\"},{\"begin\":3278,\"end\":3293,\"name\":\"SLOAD\"},{\"begin\":3287,\"end\":3292,\"name\":\"DUP4\"},{\"begin\":3287,\"end\":3292,\"name\":\"SWAP1\"},{\"begin\":3278,\"end\":3293,\"name\":\"DUP2\"},{\"begin\":3278,\"end\":3293,\"name\":\"LT\"},{\"begin\":3278,\"end\":3293,\"name\":\"PUSH [tag]\",\"value\":\"51\"},{\"begin\":3278,\"end\":3293,\"name\":\"JUMPI\"},{\"begin\":3278,\"end\":3293,\"name\":\"INVALID\"},{\"begin\":3278,\"end\":3293,\"name\":\"tag\",\"value\":\"51\"},{\"begin\":3278,\"end\":3293,\"name\":\"JUMPDEST\"},{\"begin\":3278,\"end\":3293,\"name\":\"SWAP1\"},{\"begin\":3278,\"end\":3293,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3278,\"end\":3293,\"name\":\"MSTORE\"},{\"begin\":3278,\"end\":3293,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3278,\"end\":3293,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3278,\"end\":3293,\"name\":\"KECCAK256\"},{\"begin\":3278,\"end\":3293,\"name\":\"SWAP1\"},{\"begin\":3278,\"end\":3293,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3278,\"end\":3293,\"name\":\"MUL\"},{\"begin\":3278,\"end\":3293,\"name\":\"ADD\"},{\"begin\":3252,\"end\":3293,\"name\":\"SWAP1\"},{\"begin\":3252,\"end\":3293,\"name\":\"POP\"},{\"begin\":3349,\"end\":3350,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3333,\"end\":3347,\"name\":\"DUP1\"},{\"begin\":3333,\"end\":3347,\"name\":\"SLOAD\"},{\"begin\":3333,\"end\":3350,\"name\":\"DUP2\"},{\"begin\":3333,\"end\":3350,\"name\":\"ISZERO\"},{\"begin\":3333,\"end\":3350,\"name\":\"ISZERO\"},{\"begin\":3333,\"end\":3350,\"name\":\"PUSH [tag]\",\"value\":\"53\"},{\"begin\":3333,\"end\":3350,\"name\":\"JUMPI\"},{\"begin\":3333,\"end\":3350,\"name\":\"INVALID\"},{\"begin\":3333,\"end\":3350,\"name\":\"tag\",\"value\":\"53\"},{\"begin\":3333,\"end\":3350,\"name\":\"JUMPDEST\"},{\"begin\":3333,\"end\":3350,\"name\":\"DIV\"},{\"begin\":3308,\"end\":3315,\"name\":\"DUP2\"},{\"begin\":3308,\"end\":3329,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3308,\"end\":3329,\"name\":\"ADD\"},{\"begin\":3308,\"end\":3329,\"name\":\"SLOAD\"},{\"begin\":3308,\"end\":3351,\"name\":\"GT\"},{\"begin\":3300,\"end\":3352,\"name\":\"ISZERO\"},{\"begin\":3300,\"end\":3352,\"name\":\"ISZERO\"},{\"begin\":3300,\"end\":3352,\"name\":\"PUSH [tag]\",\"value\":\"54\"},{\"begin\":3300,\"end\":3352,\"name\":\"JUMPI\"},{\"begin\":3300,\"end\":3352,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3300,\"end\":3352,\"name\":\"DUP1\"},{\"begin\":3300,\"end\":3352,\"name\":\"REVERT\"},{\"begin\":3300,\"end\":3352,\"name\":\"tag\",\"value\":\"54\"},{\"begin\":3300,\"end\":3352,\"name\":\"JUMPDEST\"},{\"begin\":3368,\"end\":3384,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3368,\"end\":3384,\"name\":\"DUP2\"},{\"begin\":3368,\"end\":3384,\"name\":\"ADD\"},{\"begin\":3368,\"end\":3384,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":3368,\"end\":3384,\"name\":\"SWAP1\"},{\"begin\":3368,\"end\":3384,\"name\":\"DIV\"},{\"begin\":3368,\"end\":3384,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3368,\"end\":3384,\"name\":\"AND\"},{\"begin\":3367,\"end\":3384,\"name\":\"ISZERO\"},{\"begin\":3359,\"end\":3385,\"name\":\"PUSH [tag]\",\"value\":\"55\"},{\"begin\":3359,\"end\":3385,\"name\":\"JUMPI\"},{\"begin\":3359,\"end\":3385,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3359,\"end\":3385,\"name\":\"DUP1\"},{\"begin\":3359,\"end\":3385,\"name\":\"REVERT\"},{\"begin\":3359,\"end\":3385,\"name\":\"tag\",\"value\":\"55\"},{\"begin\":3359,\"end\":3385,\"name\":\"JUMPDEST\"},{\"begin\":3433,\"end\":3450,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3433,\"end\":3450,\"name\":\"DUP2\"},{\"begin\":3433,\"end\":3450,\"name\":\"ADD\"},{\"begin\":3433,\"end\":3450,\"name\":\"SLOAD\"},{\"begin\":3433,\"end\":3450,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3460,\"end\":3473,\"name\":\"DUP3\"},{\"begin\":3460,\"end\":3473,\"name\":\"ADD\"},{\"begin\":3460,\"end\":3473,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3433,\"end\":3450,\"name\":\"SWAP1\"},{\"begin\":3433,\"end\":3450,\"name\":\"SWAP2\"},{\"begin\":3433,\"end\":3450,\"name\":\"AND\"},{\"begin\":3433,\"end\":3450,\"name\":\"SWAP1\"},{\"begin\":3433,\"end\":3474,\"name\":\"PUSH\",\"value\":\"8FC\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP2\"},{\"begin\":3433,\"end\":3474,\"name\":\"ISZERO\"},{\"begin\":3433,\"end\":3474,\"name\":\"MUL\"},{\"begin\":3433,\"end\":3474,\"name\":\"SWAP1\"},{\"begin\":3433,\"end\":3474,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3433,\"end\":3474,\"name\":\"MLOAD\"},{\"begin\":3433,\"end\":3474,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3433,\"end\":3474,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3433,\"end\":3474,\"name\":\"MLOAD\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP1\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP4\"},{\"begin\":3433,\"end\":3474,\"name\":\"SUB\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP2\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP6\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP9\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP9\"},{\"begin\":3433,\"end\":3474,\"name\":\"CALL\"},{\"begin\":3433,\"end\":3474,\"name\":\"SWAP4\"},{\"begin\":3433,\"end\":3474,\"name\":\"POP\"},{\"begin\":3433,\"end\":3474,\"name\":\"POP\"},{\"begin\":3433,\"end\":3474,\"name\":\"POP\"},{\"begin\":3433,\"end\":3474,\"name\":\"POP\"},{\"begin\":3433,\"end\":3474,\"name\":\"ISZERO\"},{\"begin\":3433,\"end\":3474,\"name\":\"ISZERO\"},{\"begin\":3433,\"end\":3474,\"name\":\"PUSH [tag]\",\"value\":\"56\"},{\"begin\":3433,\"end\":3474,\"name\":\"JUMPI\"},{\"begin\":3433,\"end\":3474,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3433,\"end\":3474,\"name\":\"DUP1\"},{\"begin\":3433,\"end\":3474,\"name\":\"REVERT\"},{\"begin\":3433,\"end\":3474,\"name\":\"tag\",\"value\":\"56\"},{\"begin\":3433,\"end\":3474,\"name\":\"JUMPDEST\"},{\"begin\":3481,\"end\":3497,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3481,\"end\":3497,\"name\":\"ADD\"},{\"begin\":3481,\"end\":3504,\"name\":\"DUP1\"},{\"begin\":3481,\"end\":3504,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF0000000000000000000000000000000000000000\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3481,\"end\":3504,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":3481,\"end\":3504,\"name\":\"OR\"},{\"begin\":3481,\"end\":3504,\"name\":\"SWAP1\"},{\"begin\":3481,\"end\":3504,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3145,\"end\":3617,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1076,\"end\":1117,\"name\":\"tag\",\"value\":\"18\"},{\"begin\":1076,\"end\":1117,\"name\":\"JUMPDEST\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1076,\"end\":1117,\"name\":\"MSTORE\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1076,\"end\":1117,\"name\":\"SWAP1\"},{\"begin\":1076,\"end\":1117,\"name\":\"DUP2\"},{\"begin\":1076,\"end\":1117,\"name\":\"MSTORE\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1076,\"end\":1117,\"name\":\"SWAP1\"},{\"begin\":1076,\"end\":1117,\"name\":\"KECCAK256\"},{\"begin\":1076,\"end\":1117,\"name\":\"SLOAD\"},{\"begin\":1076,\"end\":1117,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1076,\"end\":1117,\"name\":\"AND\"},{\"begin\":1076,\"end\":1117,\"name\":\"DUP2\"},{\"begin\":1076,\"end\":1117,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3975,\"end\":4065,\"name\":\"tag\",\"value\":\"21\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMPDEST\"},{\"begin\":4044,\"end\":4052,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":4044,\"end\":4059,\"name\":\"SLOAD\"},{\"begin\":3975,\"end\":4065,\"name\":\"tag\",\"value\":\"57\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMPDEST\"},{\"begin\":3975,\"end\":4065,\"name\":\"SWAP1\"},{\"begin\":3975,\"end\":4065,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3623,\"end\":3969,\"name\":\"tag\",\"value\":\"24\"},{\"begin\":3623,\"end\":3969,\"name\":\"JUMPDEST\"},{\"begin\":3805,\"end\":3824,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3805,\"end\":3824,\"name\":\"SLOAD\"},{\"begin\":3902,\"end\":3910,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3902,\"end\":3917,\"name\":\"SLOAD\"},{\"begin\":3926,\"end\":3940,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3926,\"end\":3940,\"name\":\"SLOAD\"},{\"begin\":3672,\"end\":3676,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3949,\"end\":3956,\"name\":\"SLOAD\"},{\"begin\":3805,\"end\":3824,\"name\":\"SWAP3\"},{\"begin\":3805,\"end\":3824,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3833,\"end\":3837,\"name\":\"ADDRESS\"},{\"begin\":3833,\"end\":3845,\"name\":\"DUP2\"},{\"begin\":3833,\"end\":3845,\"name\":\"AND\"},{\"begin\":3833,\"end\":3845,\"name\":\"BALANCE\"},{\"begin\":3833,\"end\":3845,\"name\":\"SWAP5\"},{\"begin\":3949,\"end\":3956,\"name\":\"AND\"},{\"begin\":3949,\"end\":3956,\"name\":\"SWAP1\"},{\"begin\":3623,\"end\":3969,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":982,\"end\":1004,\"name\":\"tag\",\"value\":\"27\"},{\"begin\":982,\"end\":1004,\"name\":\"JUMPDEST\"},{\"begin\":982,\"end\":1004,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":982,\"end\":1004,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":982,\"end\":1004,\"name\":\"AND\"},{\"begin\":982,\"end\":1004,\"name\":\"DUP2\"},{\"begin\":982,\"end\":1004,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"30\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"SLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"LT\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH [tag]\",\"value\":\"59\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPI\"},{\"begin\":1199,\"end\":1224,\"name\":\"INVALID\"},{\"begin\":1199,\"end\":1224,\"name\":\"tag\",\"value\":\"59\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMPDEST\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"MSTORE\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"KECCAK256\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"MUL\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP2\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP4\"},{\"begin\":1199,\"end\":1224,\"name\":\"ADD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SLOAD\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP3\"},{\"begin\":1199,\"end\":1224,\"name\":\"AND\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DIV\"},{\"begin\":1199,\"end\":1224,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1199,\"end\":1224,\"name\":\"AND\"},{\"begin\":1199,\"end\":1224,\"name\":\"SWAP1\"},{\"begin\":1199,\"end\":1224,\"name\":\"DUP6\"},{\"begin\":1199,\"end\":1224,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1045,\"end\":1071,\"name\":\"tag\",\"value\":\"36\"},{\"begin\":1045,\"end\":1071,\"name\":\"JUMPDEST\"},{\"begin\":1045,\"end\":1071,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1045,\"end\":1071,\"name\":\"SLOAD\"},{\"begin\":1045,\"end\":1071,\"name\":\"DUP2\"},{\"begin\":1045,\"end\":1071,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2026,\"end\":2604,\"name\":\"tag\",\"value\":\"39\"},{\"begin\":2026,\"end\":2604,\"name\":\"JUMPDEST\"},{\"begin\":2286,\"end\":2311,\"name\":\"PUSH [tag]\",\"value\":\"61\"},{\"begin\":2286,\"end\":2311,\"name\":\"PUSH [tag]\",\"value\":\"62\"},{\"begin\":2286,\"end\":2311,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":2286,\"end\":2311,\"name\":\"tag\",\"value\":\"61\"},{\"begin\":2286,\"end\":2311,\"name\":\"JUMPDEST\"},{\"begin\":1282,\"end\":1289,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1282,\"end\":1289,\"name\":\"SLOAD\"},{\"begin\":1268,\"end\":1278,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1268,\"end\":1289,\"name\":\"SWAP1\"},{\"begin\":1268,\"end\":1289,\"name\":\"DUP2\"},{\"begin\":1268,\"end\":1289,\"name\":\"AND\"},{\"begin\":1282,\"end\":1289,\"name\":\"SWAP2\"},{\"begin\":1282,\"end\":1289,\"name\":\"AND\"},{\"begin\":1268,\"end\":1289,\"name\":\"EQ\"},{\"begin\":1260,\"end\":1290,\"name\":\"PUSH [tag]\",\"value\":\"64\"},{\"begin\":1260,\"end\":1290,\"name\":\"JUMPI\"},{\"begin\":1260,\"end\":1290,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1260,\"end\":1290,\"name\":\"DUP1\"},{\"begin\":1260,\"end\":1290,\"name\":\"REVERT\"},{\"begin\":1260,\"end\":1290,\"name\":\"tag\",\"value\":\"64\"},{\"begin\":1260,\"end\":1290,\"name\":\"JUMPDEST\"},{\"begin\":2314,\"end\":2566,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":2314,\"end\":2566,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2314,\"end\":2566,\"name\":\"MLOAD\"},{\"begin\":2314,\"end\":2566,\"name\":\"SWAP1\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP2\"},{\"begin\":2314,\"end\":2566,\"name\":\"ADD\"},{\"begin\":2314,\"end\":2566,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2314,\"end\":2566,\"name\":\"SWAP1\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP2\"},{\"begin\":2314,\"end\":2566,\"name\":\"MSTORE\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP6\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP3\"},{\"begin\":2314,\"end\":2566,\"name\":\"MSTORE\"},{\"begin\":2314,\"end\":2566,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP3\"},{\"begin\":2314,\"end\":2566,\"name\":\"ADD\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP6\"},{\"begin\":2314,\"end\":2566,\"name\":\"SWAP1\"},{\"begin\":2314,\"end\":2566,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP5\"},{\"begin\":2314,\"end\":2566,\"name\":\"AND\"},{\"begin\":2314,\"end\":2566,\"name\":\"SWAP1\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP3\"},{\"begin\":2314,\"end\":2566,\"name\":\"ADD\"},{\"begin\":2314,\"end\":2566,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2314,\"end\":2566,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP3\"},{\"begin\":2314,\"end\":2566,\"name\":\"ADD\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP2\"},{\"begin\":2314,\"end\":2566,\"name\":\"SWAP1\"},{\"begin\":2314,\"end\":2566,\"name\":\"MSTORE\"},{\"begin\":2314,\"end\":2566,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":2314,\"end\":2566,\"name\":\"DUP3\"},{\"begin\":2314,\"end\":2566,\"name\":\"ADD\"},{\"begin\":2314,\"end\":2566,\"name\":\"MSTORE\"},{\"begin\":2573,\"end\":2581,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SLOAD\"},{\"begin\":2314,\"end\":2566,\"name\":\"SWAP2\"},{\"begin\":2314,\"end\":2566,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2573,\"end\":2581,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH [tag]\",\"value\":\"66\"},{\"begin\":2573,\"end\":2581,\"name\":\"DUP4\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH [tag]\",\"value\":\"67\"},{\"begin\":2573,\"end\":2598,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":2573,\"end\":2598,\"name\":\"tag\",\"value\":\"66\"},{\"begin\":2573,\"end\":2598,\"name\":\"JUMPDEST\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP4\"},{\"begin\":2573,\"end\":2598,\"name\":\"MSTORE\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"KECCAK256\"},{\"begin\":2587,\"end\":2597,\"name\":\"DUP4\"},{\"begin\":2587,\"end\":2597,\"name\":\"SWAP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2573,\"end\":2598,\"name\":\"MUL\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2587,\"end\":2597,\"name\":\"DUP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"MLOAD\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"MLOAD\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH [tag]\",\"value\":\"69\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH [tag]\",\"value\":\"70\"},{\"begin\":2573,\"end\":2598,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":2573,\"end\":2598,\"name\":\"tag\",\"value\":\"69\"},{\"begin\":2573,\"end\":2598,\"name\":\"JUMPDEST\"},{\"begin\":2573,\"end\":2598,\"name\":\"POP\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"MLOAD\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"SSTORE\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"MLOAD\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2573,\"end\":2598,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"AND\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"OR\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SSTORE\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"MLOAD\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SLOAD\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"ISZERO\"},{\"begin\":2573,\"end\":2598,\"name\":\"ISZERO\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":2573,\"end\":2598,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF0000000000000000000000000000000000000000\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"AND\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"OR\"},{\"begin\":2573,\"end\":2598,\"name\":\"SWAP1\"},{\"begin\":2573,\"end\":2598,\"name\":\"SSTORE\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP3\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"MLOAD\"},{\"begin\":2573,\"end\":2598,\"name\":\"DUP2\"},{\"begin\":2573,\"end\":2598,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2573,\"end\":2598,\"name\":\"ADD\"},{\"begin\":2573,\"end\":2598,\"name\":\"SSTORE\"},{\"begin\":2573,\"end\":2598,\"name\":\"POP\"},{\"begin\":2573,\"end\":2598,\"name\":\"POP\"},{\"begin\":2573,\"end\":2598,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"POP\"},{\"begin\":2026,\"end\":2604,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1009,\"end\":1040,\"name\":\"tag\",\"value\":\"42\"},{\"begin\":1009,\"end\":1040,\"name\":\"JUMPDEST\"},{\"begin\":1009,\"end\":1040,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1009,\"end\":1040,\"name\":\"SLOAD\"},{\"begin\":1009,\"end\":1040,\"name\":\"DUP2\"},{\"begin\":1009,\"end\":1040,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1564,\"end\":2020,\"name\":\"tag\",\"value\":\"44\"},{\"begin\":1564,\"end\":2020,\"name\":\"JUMPDEST\"},{\"begin\":1689,\"end\":1708,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1689,\"end\":1708,\"name\":\"SLOAD\"},{\"begin\":1677,\"end\":1686,\"name\":\"CALLVALUE\"},{\"begin\":1677,\"end\":1708,\"name\":\"GT\"},{\"begin\":1669,\"end\":1709,\"name\":\"PUSH [tag]\",\"value\":\"72\"},{\"begin\":1669,\"end\":1709,\"name\":\"JUMPI\"},{\"begin\":1669,\"end\":1709,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1669,\"end\":1709,\"name\":\"DUP1\"},{\"begin\":1669,\"end\":1709,\"name\":\"REVERT\"},{\"begin\":1669,\"end\":1709,\"name\":\"tag\",\"value\":\"72\"},{\"begin\":1669,\"end\":1709,\"name\":\"JUMPDEST\"},{\"begin\":1849,\"end\":1859,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1839,\"end\":1860,\"name\":\"AND\"},{\"begin\":1839,\"end\":1860,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1839,\"end\":1860,\"name\":\"SWAP1\"},{\"begin\":1839,\"end\":1860,\"name\":\"DUP2\"},{\"begin\":1839,\"end\":1860,\"name\":\"MSTORE\"},{\"begin\":1839,\"end\":1848,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1839,\"end\":1860,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1839,\"end\":1860,\"name\":\"MSTORE\"},{\"begin\":1839,\"end\":1860,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1839,\"end\":1860,\"name\":\"SWAP1\"},{\"begin\":1839,\"end\":1860,\"name\":\"KECCAK256\"},{\"begin\":1839,\"end\":1867,\"name\":\"DUP1\"},{\"begin\":1839,\"end\":1867,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1839,\"end\":1867,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1839,\"end\":1867,\"name\":\"SWAP1\"},{\"begin\":1839,\"end\":1867,\"name\":\"DUP2\"},{\"begin\":1839,\"end\":1867,\"name\":\"OR\"},{\"begin\":1839,\"end\":1867,\"name\":\"SWAP1\"},{\"begin\":1839,\"end\":1867,\"name\":\"SWAP2\"},{\"begin\":1839,\"end\":1867,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1967,\"end\":1983,\"name\":\"DUP1\"},{\"begin\":1967,\"end\":1983,\"name\":\"SLOAD\"},{\"begin\":1967,\"end\":1983,\"name\":\"SWAP1\"},{\"begin\":1967,\"end\":1983,\"name\":\"SWAP2\"},{\"begin\":1967,\"end\":1983,\"name\":\"ADD\"},{\"begin\":1967,\"end\":1983,\"name\":\"SWAP1\"},{\"begin\":1967,\"end\":1983,\"name\":\"SSTORE\"},{\"begin\":1564,\"end\":2020,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2673,\"end\":3139,\"name\":\"tag\",\"value\":\"47\"},{\"begin\":2673,\"end\":3139,\"name\":\"JUMPDEST\"},{\"begin\":2808,\"end\":2831,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2834,\"end\":2842,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2843,\"end\":2848,\"name\":\"DUP3\"},{\"begin\":2834,\"end\":2849,\"name\":\"DUP2\"},{\"begin\":2834,\"end\":2849,\"name\":\"SLOAD\"},{\"begin\":2834,\"end\":2849,\"name\":\"DUP2\"},{\"begin\":2834,\"end\":2849,\"name\":\"LT\"},{\"begin\":2834,\"end\":2849,\"name\":\"ISZERO\"},{\"begin\":2834,\"end\":2849,\"name\":\"ISZERO\"},{\"begin\":2834,\"end\":2849,\"name\":\"PUSH [tag]\",\"value\":\"74\"},{\"begin\":2834,\"end\":2849,\"name\":\"JUMPI\"},{\"begin\":2834,\"end\":2849,\"name\":\"INVALID\"},{\"begin\":2834,\"end\":2849,\"name\":\"tag\",\"value\":\"74\"},{\"begin\":2834,\"end\":2849,\"name\":\"JUMPDEST\"},{\"begin\":2834,\"end\":2849,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2834,\"end\":2849,\"name\":\"SWAP2\"},{\"begin\":2834,\"end\":2849,\"name\":\"DUP3\"},{\"begin\":2834,\"end\":2849,\"name\":\"MSTORE\"},{\"begin\":2834,\"end\":2849,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2834,\"end\":2849,\"name\":\"DUP1\"},{\"begin\":2834,\"end\":2849,\"name\":\"DUP4\"},{\"begin\":2834,\"end\":2849,\"name\":\"KECCAK256\"},{\"begin\":2934,\"end\":2944,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2924,\"end\":2945,\"name\":\"AND\"},{\"begin\":2924,\"end\":2945,\"name\":\"DUP5\"},{\"begin\":2924,\"end\":2945,\"name\":\"MSTORE\"},{\"begin\":2924,\"end\":2933,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2924,\"end\":2945,\"name\":\"SWAP1\"},{\"begin\":2924,\"end\":2945,\"name\":\"SWAP2\"},{\"begin\":2924,\"end\":2945,\"name\":\"MSTORE\"},{\"begin\":2924,\"end\":2945,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2924,\"end\":2945,\"name\":\"SWAP1\"},{\"begin\":2924,\"end\":2945,\"name\":\"SWAP3\"},{\"begin\":2924,\"end\":2945,\"name\":\"KECCAK256\"},{\"begin\":2924,\"end\":2945,\"name\":\"SLOAD\"},{\"begin\":2834,\"end\":2849,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2834,\"end\":2849,\"name\":\"SWAP2\"},{\"begin\":2834,\"end\":2849,\"name\":\"SWAP1\"},{\"begin\":2834,\"end\":2849,\"name\":\"SWAP2\"},{\"begin\":2834,\"end\":2849,\"name\":\"MUL\"},{\"begin\":2834,\"end\":2849,\"name\":\"SWAP1\"},{\"begin\":2834,\"end\":2849,\"name\":\"SWAP2\"},{\"begin\":2834,\"end\":2849,\"name\":\"ADD\"},{\"begin\":2834,\"end\":2849,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2924,\"end\":2945,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2924,\"end\":2945,\"name\":\"AND\"},{\"begin\":2916,\"end\":2946,\"name\":\"ISZERO\"},{\"begin\":2916,\"end\":2946,\"name\":\"ISZERO\"},{\"begin\":2916,\"end\":2946,\"name\":\"PUSH [tag]\",\"value\":\"76\"},{\"begin\":2916,\"end\":2946,\"name\":\"JUMPI\"},{\"begin\":2916,\"end\":2946,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2916,\"end\":2946,\"name\":\"DUP1\"},{\"begin\":2916,\"end\":2946,\"name\":\"REVERT\"},{\"begin\":2916,\"end\":2946,\"name\":\"tag\",\"value\":\"76\"},{\"begin\":2916,\"end\":2946,\"name\":\"JUMPDEST\"},{\"begin\":3046,\"end\":3056,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3028,\"end\":3057,\"name\":\"AND\"},{\"begin\":3028,\"end\":3057,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3028,\"end\":3057,\"name\":\"SWAP1\"},{\"begin\":3028,\"end\":3057,\"name\":\"DUP2\"},{\"begin\":3028,\"end\":3057,\"name\":\"MSTORE\"},{\"begin\":3028,\"end\":3045,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3028,\"end\":3045,\"name\":\"DUP3\"},{\"begin\":3028,\"end\":3045,\"name\":\"ADD\"},{\"begin\":3028,\"end\":3057,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3028,\"end\":3057,\"name\":\"MSTORE\"},{\"begin\":3028,\"end\":3057,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3028,\"end\":3057,\"name\":\"SWAP1\"},{\"begin\":3028,\"end\":3057,\"name\":\"KECCAK256\"},{\"begin\":3028,\"end\":3057,\"name\":\"SLOAD\"},{\"begin\":3028,\"end\":3057,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3028,\"end\":3057,\"name\":\"AND\"},{\"begin\":3027,\"end\":3057,\"name\":\"ISZERO\"},{\"begin\":3019,\"end\":3058,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":3019,\"end\":3058,\"name\":\"JUMPI\"},{\"begin\":3019,\"end\":3058,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3019,\"end\":3058,\"name\":\"DUP1\"},{\"begin\":3019,\"end\":3058,\"name\":\"REVERT\"},{\"begin\":3019,\"end\":3058,\"name\":\"tag\",\"value\":\"77\"},{\"begin\":3019,\"end\":3058,\"name\":\"JUMPDEST\"},{\"begin\":3083,\"end\":3093,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3065,\"end\":3094,\"name\":\"AND\"},{\"begin\":3065,\"end\":3094,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3065,\"end\":3094,\"name\":\"SWAP1\"},{\"begin\":3065,\"end\":3094,\"name\":\"DUP2\"},{\"begin\":3065,\"end\":3094,\"name\":\"MSTORE\"},{\"begin\":3065,\"end\":3082,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3065,\"end\":3082,\"name\":\"DUP3\"},{\"begin\":3065,\"end\":3082,\"name\":\"ADD\"},{\"begin\":3065,\"end\":3094,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3065,\"end\":3094,\"name\":\"MSTORE\"},{\"begin\":3065,\"end\":3094,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3065,\"end\":3094,\"name\":\"SWAP1\"},{\"begin\":3065,\"end\":3094,\"name\":\"KECCAK256\"},{\"begin\":3065,\"end\":3101,\"name\":\"DUP1\"},{\"begin\":3065,\"end\":3101,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3065,\"end\":3101,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3065,\"end\":3101,\"name\":\"SWAP1\"},{\"begin\":3065,\"end\":3101,\"name\":\"DUP2\"},{\"begin\":3065,\"end\":3101,\"name\":\"OR\"},{\"begin\":3065,\"end\":3101,\"name\":\"SWAP1\"},{\"begin\":3065,\"end\":3101,\"name\":\"SWAP2\"},{\"begin\":3065,\"end\":3101,\"name\":\"SSTORE\"},{\"begin\":3108,\"end\":3129,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3108,\"end\":3129,\"name\":\"SWAP1\"},{\"begin\":3108,\"end\":3129,\"name\":\"SWAP2\"},{\"begin\":3108,\"end\":3129,\"name\":\"ADD\"},{\"begin\":3108,\"end\":3131,\"name\":\"DUP1\"},{\"begin\":3108,\"end\":3131,\"name\":\"SLOAD\"},{\"begin\":3108,\"end\":3131,\"name\":\"SWAP1\"},{\"begin\":3108,\"end\":3131,\"name\":\"SWAP2\"},{\"begin\":3108,\"end\":3131,\"name\":\"ADD\"},{\"begin\":3108,\"end\":3131,\"name\":\"SWAP1\"},{\"begin\":3108,\"end\":3131,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2673,\"end\":3139,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"62\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":493,\"end\":4070,\"name\":\"MLOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"78\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"79\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"78\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"67\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SLOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP4\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"GT\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"81\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":493,\"end\":4070,\"name\":\"MUL\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":493,\"end\":4070,\"name\":\"MUL\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP4\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"KECCAK256\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"81\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"82\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"81\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"70\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"SLOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"AND\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":493,\"end\":4070,\"name\":\"MUL\"},{\"begin\":493,\"end\":4070,\"name\":\"SUB\"},{\"begin\":493,\"end\":4070,\"name\":\"AND\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DIV\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"KECCAK256\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DIV\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP3\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":493,\"end\":4070,\"name\":\"LT\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"84\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"MLOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":493,\"end\":4070,\"name\":\"NOT\"},{\"begin\":493,\"end\":4070,\"name\":\"AND\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP4\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"OR\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP6\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"86\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"84\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP6\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"86\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"85\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"GT\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"86\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"MLOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"85\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"86\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP3\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"88\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"87\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"79\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":493,\"end\":4070,\"name\":\"MLOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"82\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"57\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"90\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"GT\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"92\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"93\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"92\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":493,\"end\":4070,\"name\":\"AND\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"90\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"88\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"57\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"95\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"GT\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"95\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"93\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"SLOAD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":493,\"end\":4070,\"name\":\"AND\"},{\"begin\":493,\"end\":4070,\"name\":\"ISZERO\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":493,\"end\":4070,\"name\":\"MUL\"},{\"begin\":493,\"end\":4070,\"name\":\"SUB\"},{\"begin\":493,\"end\":4070,\"name\":\"AND\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DIV\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP3\"},{\"begin\":493,\"end\":4070,\"name\":\"SSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":493,\"end\":4070,\"name\":\"LT\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"98\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPI\"},{\"begin\":493,\"end\":4070,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"99\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"98\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DIV\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"MSTORE\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":493,\"end\":4070,\"name\":\"KECCAK256\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"DUP2\"},{\"begin\":493,\"end\":4070,\"name\":\"ADD\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"99\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP2\"},{\"begin\":493,\"end\":4070,\"name\":\"SWAP1\"},{\"begin\":493,\"end\":4070,\"name\":\"PUSH [tag]\",\"value\":\"88\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":493,\"end\":4070,\"name\":\"tag\",\"value\":\"99\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMPDEST\"},{\"begin\":493,\"end\":4070,\"name\":\"POP\"},{\"begin\":493,\"end\":4070,\"name\":\"JUMP\",\"value\":\"[out]\"}]}}}}}}},\"bytecode\":\"6060604052341561000f57600080fd5b610ba38061001e6000396000f300606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663339d50a581146100525780634acb9d4f14610091578063a3303a75146100f757600080fd5b341561005d57600080fd5b61006860043561010f565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561009c57600080fd5b6100a4610144565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100e35780820151838201526020016100cb565b505050509050019250505060405180910390f35b341561010257600080fd5b61010d6004356101ba565b005b600080548290811061011d57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b61014c61025b565b60008054806020026020016040519081016040528092919081815260200182805480156101af57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610184575b505050505090505b90565b600081336101c661026d565b91825273ffffffffffffffffffffffffffffffffffffffff16602082015260409081019051809103906000f08015156101fe57600080fd5b905060008054806001018281610214919061027d565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b60206040519081016040526000815290565b6040516108b3806102c583390190565b8154818355818115116102a1576000838152602090206102a19181019083016102a6565b505050565b6101b791905b808211156102c057600081556001016102ac565b509056006060604052341561000f57600080fd5b6040516040806108b3833981016040528080519190602001805160008054600160a060020a03909216600160a060020a031990921691909117905550506001556108558061005e6000396000f300606060405236156100ac5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630344100681146100b15780630a144391146100c95780633410452a146100fc5780634051ddac14610121578063481c6a751461016d57806381d12c581461019c57806382fde093146102635780638a9cfd5514610276578063937e09b1146102d7578063d7bb99ba146102ea578063d7d1bbdb146102f2575b600080fd5b34156100bc57600080fd5b6100c7600435610308565b005b34156100d457600080fd5b6100e8600160a060020a03600435166103df565b604051901515815260200160405180910390f35b341561010757600080fd5b61010f6103f4565b60405190815260200160405180910390f35b341561012c57600080fd5b6101346103fb565b60405194855260208501939093526040808501929092526060840152600160a060020a03909116608083015260a0909101905180910390f35b341561017857600080fd5b61018061041a565b604051600160a060020a03909116815260200160405180910390f35b34156101a757600080fd5b6101b2600435610429565b60405160208101859052600160a060020a038416604082015282151560608201526080810182905260a0808252865460026000196101006001841615020190911604908201819052819060c0820190889080156102505780601f1061022557610100808354040283529160200191610250565b820191906000526020600020905b81548152906001019060200180831161023357829003601f168201915b5050965050505050505060405180910390f35b341561026e57600080fd5b61010f610474565b341561028157600080fd5b6100c760046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505084359460200135600160a060020a0316935061047a92505050565b34156102e257600080fd5b61010f610592565b6100c7610598565b34156102fd57600080fd5b6100c76004356105d7565b6000805433600160a060020a0390811691161461032457600080fd5b600480548390811061033257fe5b906000526020600020906005020190506002805481151561034f57fe5b04816004015411151561036157600080fd5b600281015460a060020a900460ff161561037a57600080fd5b60028101546001820154600160a060020a039091169080156108fc0290604051600060405180830381858888f1935050505015156103b757600080fd5b600201805474ff0000000000000000000000000000000000000000191660a060020a17905550565b60036020526000908152604090205460ff1681565b6004545b90565b6001546004546002546000549293600160a060020a0330811631941690565b600054600160a060020a031681565b600480548290811061043757fe5b600091825260209091206005909102016001810154600282015460048301549293509091600160a060020a0382169160a060020a900460ff169085565b60025481565b610482610680565b60005433600160a060020a0390811691161461049d57600080fd5b60a06040519081016040528085815260200184815260200183600160a060020a0316815260200160001515815260200160008152509050600480548060010182816104e891906106b6565b6000928352602090922083916005020181518190805161050c9291602001906106e7565b5060208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055606082015160028201805491151560a060020a0274ff0000000000000000000000000000000000000000199092169190911790556080820151816004015550505050505050565b60015481565b60015434116105a657600080fd5b600160a060020a0333166000908152600360205260409020805460ff19166001908117909155600280549091019055565b60006004828154811015156105e857fe5b60009182526020808320600160a060020a033316845260039091526040909220546005909102909101915060ff16151561062157600080fd5b600160a060020a033316600090815260038201602052604090205460ff161561064957600080fd5b600160a060020a03331660009081526003820160205260409020805460ff1916600190811790915560049091018054909101905550565b60a060405190810160405280610694610765565b8152600060208201819052604082018190526060820181905260809091015290565b8154818355818115116106e2576005028160050283600052602060002091820191016106e29190610777565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072857805160ff1916838001178555610755565b82800160010185558215610755579182015b8281111561075557825182559160200191906001019061073a565b506107619291506107c8565b5090565b60206040519081016040526000815290565b6103f891905b8082111561076157600061079182826107e2565b5060006001820181905560028201805474ffffffffffffffffffffffffffffffffffffffffff19169055600482015560050161077d565b6103f891905b8082111561076157600081556001016107ce565b50805460018160011615610100020316600290046000825580601f106108085750610826565b601f01602090049060005260206000209081019061082691906107c8565b505600a165627a7a72305820f6aa3c72083dd683f3e3189f41455cf5d6d1b76811861e992be58ca96583deb30029a165627a7a72305820bbd97a3c76c5f2cf5767fcdba37a0d4a3365772dc8737dec50630419e590d2d40029\",\"functionHashes\":{\"createCampaign(uint256)\":\"a3303a75\",\"deployedCampaigns(uint256)\":\"339d50a5\",\"getDeployedCampaigns()\":\"4acb9d4f\"},\"gasEstimates\":{\"creation\":[627,595800],\"external\":{\"createCampaign(uint256)\":null,\"deployedCampaigns(uint256)\":667,\"getDeployedCampaigns()\":null},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedCampaigns\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedCampaigns\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"minimum\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createCampaign\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.17+commit.bdeb9e52\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedCampaigns\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedCampaigns\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"minimum\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createCampaign\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"\\\":\\\"CampaignFactory\\\"},\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"\\\":{\\\"keccak256\\\":\\\"0x5b83830c77822d3c8fb05c59e90369b7386a43cbc5cd880a4f2f08436fee08ab\\\",\\\"urls\\\":[\\\"bzzr://069b8972e630ae3d5e0c8e6e34c53b10a67c79f10049cbcedf81bf7e7bc4d301\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xBA3 DUP1 PUSH2 0x1E PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x339D50A5 DUP2 EQ PUSH2 0x52 JUMPI DUP1 PUSH4 0x4ACB9D4F EQ PUSH2 0x91 JUMPI DUP1 PUSH4 0xA3303A75 EQ PUSH2 0xF7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x5D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x68 PUSH1 0x4 CALLDATALOAD PUSH2 0x10F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x9C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xA4 PUSH2 0x144 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH1 0x20 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xE3 JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xCB JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x102 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10D PUSH1 0x4 CALLDATALOAD PUSH2 0x1BA JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x11D JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH2 0x14C PUSH2 0x25B JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x1AF JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x184 JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 CALLER PUSH2 0x1C6 PUSH2 0x26D JUMP JUMPDEST SWAP2 DUP3 MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 SWAP1 DUP2 ADD SWAP1 MLOAD DUP1 SWAP2 SUB SWAP1 PUSH1 0x0 CREATE DUP1 ISZERO ISZERO PUSH2 0x1FE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 POP PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x1 ADD DUP3 DUP2 PUSH2 0x214 SWAP2 SWAP1 PUSH2 0x27D JUMP JUMPDEST POP PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x0 DUP2 MSTORE SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x8B3 DUP1 PUSH2 0x2C5 DUP4 CODECOPY ADD SWAP1 JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 ISZERO GT PUSH2 0x2A1 JUMPI PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 SWAP1 KECCAK256 PUSH2 0x2A1 SWAP2 DUP2 ADD SWAP1 DUP4 ADD PUSH2 0x2A6 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x1B7 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x2C0 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x2AC JUMP JUMPDEST POP SWAP1 JUMP STOP PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0x8B3 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 DUP1 MLOAD SWAP2 SWAP1 PUSH1 0x20 ADD DUP1 MLOAD PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE POP POP PUSH1 0x1 SSTORE PUSH2 0x855 DUP1 PUSH2 0x5E PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE CALLDATASIZE ISZERO PUSH2 0xAC JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x3441006 DUP2 EQ PUSH2 0xB1 JUMPI DUP1 PUSH4 0xA144391 EQ PUSH2 0xC9 JUMPI DUP1 PUSH4 0x3410452A EQ PUSH2 0xFC JUMPI DUP1 PUSH4 0x4051DDAC EQ PUSH2 0x121 JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0x16D JUMPI DUP1 PUSH4 0x81D12C58 EQ PUSH2 0x19C JUMPI DUP1 PUSH4 0x82FDE093 EQ PUSH2 0x263 JUMPI DUP1 PUSH4 0x8A9CFD55 EQ PUSH2 0x276 JUMPI DUP1 PUSH4 0x937E09B1 EQ PUSH2 0x2D7 JUMPI DUP1 PUSH4 0xD7BB99BA EQ PUSH2 0x2EA JUMPI DUP1 PUSH4 0xD7D1BBDB EQ PUSH2 0x2F2 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0xBC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xC7 PUSH1 0x4 CALLDATALOAD PUSH2 0x308 JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0xD4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xE8 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x3DF JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x107 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10F PUSH2 0x3F4 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x12C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x134 PUSH2 0x3FB JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP5 DUP6 MSTORE PUSH1 0x20 DUP6 ADD SWAP4 SWAP1 SWAP4 MSTORE PUSH1 0x40 DUP1 DUP6 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH1 0x60 DUP5 ADD MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND PUSH1 0x80 DUP4 ADD MSTORE PUSH1 0xA0 SWAP1 SWAP2 ADD SWAP1 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x178 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x180 PUSH2 0x41A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x1A7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1B2 PUSH1 0x4 CALLDATALOAD PUSH2 0x429 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 ADD DUP6 SWAP1 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND PUSH1 0x40 DUP3 ADD MSTORE DUP3 ISZERO ISZERO PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0xA0 DUP1 DUP3 MSTORE DUP7 SLOAD PUSH1 0x2 PUSH1 0x0 NOT PUSH2 0x100 PUSH1 0x1 DUP5 AND ISZERO MUL ADD SWAP1 SWAP2 AND DIV SWAP1 DUP3 ADD DUP2 SWAP1 MSTORE DUP2 SWAP1 PUSH1 0xC0 DUP3 ADD SWAP1 DUP9 SWAP1 DUP1 ISZERO PUSH2 0x250 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x225 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x250 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x233 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x26E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10F PUSH2 0x474 JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x281 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xC7 PUSH1 0x4 PUSH1 0x24 DUP2 CALLDATALOAD DUP2 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP POP DUP5 CALLDATALOAD SWAP5 PUSH1 0x20 ADD CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP4 POP PUSH2 0x47A SWAP3 POP POP POP JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x2E2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10F PUSH2 0x592 JUMP JUMPDEST PUSH2 0xC7 PUSH2 0x598 JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x2FD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xC7 PUSH1 0x4 CALLDATALOAD PUSH2 0x5D7 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ PUSH2 0x324 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x4 DUP1 SLOAD DUP4 SWAP1 DUP2 LT PUSH2 0x332 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x5 MUL ADD SWAP1 POP PUSH1 0x2 DUP1 SLOAD DUP2 ISZERO ISZERO PUSH2 0x34F JUMPI INVALID JUMPDEST DIV DUP2 PUSH1 0x4 ADD SLOAD GT ISZERO ISZERO PUSH2 0x361 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 DUP2 ADD SLOAD PUSH1 0xA0 PUSH1 0x2 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0x37A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 DUP2 ADD SLOAD PUSH1 0x1 DUP3 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 DUP1 ISZERO PUSH2 0x8FC MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO ISZERO PUSH2 0x3B7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 ADD DUP1 SLOAD PUSH21 0xFF0000000000000000000000000000000000000000 NOT AND PUSH1 0xA0 PUSH1 0x2 EXP OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x4 SLOAD JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x4 SLOAD PUSH1 0x2 SLOAD PUSH1 0x0 SLOAD SWAP3 SWAP4 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB ADDRESS DUP2 AND BALANCE SWAP5 AND SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x4 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x437 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 SWAP1 SWAP2 MUL ADD PUSH1 0x1 DUP2 ADD SLOAD PUSH1 0x2 DUP3 ADD SLOAD PUSH1 0x4 DUP4 ADD SLOAD SWAP3 SWAP4 POP SWAP1 SWAP2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND SWAP2 PUSH1 0xA0 PUSH1 0x2 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP6 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x482 PUSH2 0x680 JUMP JUMPDEST PUSH1 0x0 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ PUSH2 0x49D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0xA0 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE PUSH1 0x20 ADD DUP4 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 DUP2 MSTORE POP SWAP1 POP PUSH1 0x4 DUP1 SLOAD DUP1 PUSH1 0x1 ADD DUP3 DUP2 PUSH2 0x4E8 SWAP2 SWAP1 PUSH2 0x6B6 JUMP JUMPDEST PUSH1 0x0 SWAP3 DUP4 MSTORE PUSH1 0x20 SWAP1 SWAP3 KECCAK256 DUP4 SWAP2 PUSH1 0x5 MUL ADD DUP2 MLOAD DUP2 SWAP1 DUP1 MLOAD PUSH2 0x50C SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0x6E7 JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE PUSH1 0x40 DUP3 ADD MLOAD PUSH1 0x2 DUP3 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x60 DUP3 ADD MLOAD PUSH1 0x2 DUP3 ADD DUP1 SLOAD SWAP2 ISZERO ISZERO PUSH1 0xA0 PUSH1 0x2 EXP MUL PUSH21 0xFF0000000000000000000000000000000000000000 NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x80 DUP3 ADD MLOAD DUP2 PUSH1 0x4 ADD SSTORE POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD CALLVALUE GT PUSH2 0x5A6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x2 DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x0 PUSH1 0x4 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x5E8 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND DUP5 MSTORE PUSH1 0x3 SWAP1 SWAP2 MSTORE PUSH1 0x40 SWAP1 SWAP3 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP2 MUL SWAP1 SWAP2 ADD SWAP2 POP PUSH1 0xFF AND ISZERO ISZERO PUSH2 0x621 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x3 DUP3 ADD PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x649 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x3 DUP3 ADD PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x4 SWAP1 SWAP2 ADD DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0xA0 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 PUSH2 0x694 PUSH2 0x765 JUMP JUMPDEST DUP2 MSTORE PUSH1 0x0 PUSH1 0x20 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x40 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x60 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x80 SWAP1 SWAP2 ADD MSTORE SWAP1 JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 ISZERO GT PUSH2 0x6E2 JUMPI PUSH1 0x5 MUL DUP2 PUSH1 0x5 MUL DUP4 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP2 DUP3 ADD SWAP2 ADD PUSH2 0x6E2 SWAP2 SWAP1 PUSH2 0x777 JUMP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x728 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x755 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x755 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x755 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x73A JUMP JUMPDEST POP PUSH2 0x761 SWAP3 SWAP2 POP PUSH2 0x7C8 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x0 DUP2 MSTORE SWAP1 JUMP JUMPDEST PUSH2 0x3F8 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x761 JUMPI PUSH1 0x0 PUSH2 0x791 DUP3 DUP3 PUSH2 0x7E2 JUMP JUMPDEST POP PUSH1 0x0 PUSH1 0x1 DUP3 ADD DUP2 SWAP1 SSTORE PUSH1 0x2 DUP3 ADD DUP1 SLOAD PUSH21 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND SWAP1 SSTORE PUSH1 0x4 DUP3 ADD SSTORE PUSH1 0x5 ADD PUSH2 0x77D JUMP JUMPDEST PUSH2 0x3F8 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x761 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x7CE JUMP JUMPDEST POP DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV PUSH1 0x0 DUP3 SSTORE DUP1 PUSH1 0x1F LT PUSH2 0x808 JUMPI POP PUSH2 0x826 JUMP JUMPDEST PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP1 PUSH2 0x826 SWAP2 SWAP1 PUSH2 0x7C8 JUMP JUMPDEST POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xf6 0xaa EXTCODECOPY PUSH19 0x83DD683F3E3189F41455CF5D6D1B76811861E SWAP10 0x2b 0xe5 DUP13 0xa9 PUSH6 0x83DEB30029A1 PUSH6 0x627A7A723058 KECCAK256 0xbb 0xd9 PUSH27 0x3C76C5F2CF5767FCDBA37A0D4A3365772DC8737DEC50630419E590 0xd2 0xd4 STOP 0x29 \",\"runtimeBytecode\":\"606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663339d50a581146100525780634acb9d4f14610091578063a3303a75146100f757600080fd5b341561005d57600080fd5b61006860043561010f565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561009c57600080fd5b6100a4610144565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100e35780820151838201526020016100cb565b505050509050019250505060405180910390f35b341561010257600080fd5b61010d6004356101ba565b005b600080548290811061011d57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b61014c61025b565b60008054806020026020016040519081016040528092919081815260200182805480156101af57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610184575b505050505090505b90565b600081336101c661026d565b91825273ffffffffffffffffffffffffffffffffffffffff16602082015260409081019051809103906000f08015156101fe57600080fd5b905060008054806001018281610214919061027d565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b60206040519081016040526000815290565b6040516108b3806102c583390190565b8154818355818115116102a1576000838152602090206102a19181019083016102a6565b505050565b6101b791905b808211156102c057600081556001016102ac565b509056006060604052341561000f57600080fd5b6040516040806108b3833981016040528080519190602001805160008054600160a060020a03909216600160a060020a031990921691909117905550506001556108558061005e6000396000f300606060405236156100ac5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630344100681146100b15780630a144391146100c95780633410452a146100fc5780634051ddac14610121578063481c6a751461016d57806381d12c581461019c57806382fde093146102635780638a9cfd5514610276578063937e09b1146102d7578063d7bb99ba146102ea578063d7d1bbdb146102f2575b600080fd5b34156100bc57600080fd5b6100c7600435610308565b005b34156100d457600080fd5b6100e8600160a060020a03600435166103df565b604051901515815260200160405180910390f35b341561010757600080fd5b61010f6103f4565b60405190815260200160405180910390f35b341561012c57600080fd5b6101346103fb565b60405194855260208501939093526040808501929092526060840152600160a060020a03909116608083015260a0909101905180910390f35b341561017857600080fd5b61018061041a565b604051600160a060020a03909116815260200160405180910390f35b34156101a757600080fd5b6101b2600435610429565b60405160208101859052600160a060020a038416604082015282151560608201526080810182905260a0808252865460026000196101006001841615020190911604908201819052819060c0820190889080156102505780601f1061022557610100808354040283529160200191610250565b820191906000526020600020905b81548152906001019060200180831161023357829003601f168201915b5050965050505050505060405180910390f35b341561026e57600080fd5b61010f610474565b341561028157600080fd5b6100c760046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505084359460200135600160a060020a0316935061047a92505050565b34156102e257600080fd5b61010f610592565b6100c7610598565b34156102fd57600080fd5b6100c76004356105d7565b6000805433600160a060020a0390811691161461032457600080fd5b600480548390811061033257fe5b906000526020600020906005020190506002805481151561034f57fe5b04816004015411151561036157600080fd5b600281015460a060020a900460ff161561037a57600080fd5b60028101546001820154600160a060020a039091169080156108fc0290604051600060405180830381858888f1935050505015156103b757600080fd5b600201805474ff0000000000000000000000000000000000000000191660a060020a17905550565b60036020526000908152604090205460ff1681565b6004545b90565b6001546004546002546000549293600160a060020a0330811631941690565b600054600160a060020a031681565b600480548290811061043757fe5b600091825260209091206005909102016001810154600282015460048301549293509091600160a060020a0382169160a060020a900460ff169085565b60025481565b610482610680565b60005433600160a060020a0390811691161461049d57600080fd5b60a06040519081016040528085815260200184815260200183600160a060020a0316815260200160001515815260200160008152509050600480548060010182816104e891906106b6565b6000928352602090922083916005020181518190805161050c9291602001906106e7565b5060208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055606082015160028201805491151560a060020a0274ff0000000000000000000000000000000000000000199092169190911790556080820151816004015550505050505050565b60015481565b60015434116105a657600080fd5b600160a060020a0333166000908152600360205260409020805460ff19166001908117909155600280549091019055565b60006004828154811015156105e857fe5b60009182526020808320600160a060020a033316845260039091526040909220546005909102909101915060ff16151561062157600080fd5b600160a060020a033316600090815260038201602052604090205460ff161561064957600080fd5b600160a060020a03331660009081526003820160205260409020805460ff1916600190811790915560049091018054909101905550565b60a060405190810160405280610694610765565b8152600060208201819052604082018190526060820181905260809091015290565b8154818355818115116106e2576005028160050283600052602060002091820191016106e29190610777565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072857805160ff1916838001178555610755565b82800160010185558215610755579182015b8281111561075557825182559160200191906001019061073a565b506107619291506107c8565b5090565b60206040519081016040526000815290565b6103f891905b8082111561076157600061079182826107e2565b5060006001820181905560028201805474ffffffffffffffffffffffffffffffffffffffffff19169055600482015560050161077d565b6103f891905b8082111561076157600081556001016107ce565b50805460018160011615610100020316600290046000825580601f106108085750610826565b601f01602090049060005260206000209081019061082691906107c8565b505600a165627a7a72305820f6aa3c72083dd683f3e3189f41455cf5d6d1b76811861e992be58ca96583deb30029a165627a7a72305820bbd97a3c76c5f2cf5767fcdba37a0d4a3365772dc8737dec50630419e590d2d40029\",\"srcmap\":\"28:461:0:-;;;;;;;;;;;;;;;;;\",\"srcmapRuntime\":\"28:461:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;57:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;384:102;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;71:3;;;64:6;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;98:280:0;;;;;;;;;;;;;;;;57:34;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;57:34:0;:::o;384:102::-;438:9;;:::i;:::-;463:17;456:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;384:102;;:::o;98:280::-;217:19;252:7;261:10;239:33;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;217:55;;335:17;:35;;;;;;;;;;;:::i;:::-;-1:-1:-1;335:35:0;;;;;;;;;;;-1:-1:-1;;335:35:0;;;;;;;;;;;;-1:-1:-1;98:280:0:o;28:461::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;\"}");

/***/ }),

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.js */ "./ethereum/web3.js");
/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json");
var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json", 1);
 //retrieving the created instance of Web3

 //give the location of the deployed factory Contract
//pass the ABI (interface) and the address contract was deployed to

const instance = new _web3_js__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__.interface), '0x74E13F6C7652dc847e1C3E93da22104475ABB61a');
/*const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  process.env.FACTORY_ADDRESS
);*/

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3; //so that it can be reassigned
//typeof can be used to check if a variable is defined

if (false) {} else {
  //Not in browser (we are on the server) or metamask isnt available
  //Set up our own provider using infura

  /*  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/3a47dfdd4321468da86e76aa75ee63d3'
  );*/
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(process.env.INFURA_PROVIDER);
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider); //Should add security measures for infura link
}

/* harmony default export */ __webpack_exports__["default"] = (web3); //const web3 = new Web3(window.web3.currentProvider);
//Assumes that metamask already injects a web3 instance onto the page
//Will fail if customer doesnt have metamask

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/aboutUs.js":
/*!**************************!*\
  !*** ./pages/aboutUs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Pedro Costa\\Desktop\\ETHProj\\kickstart\\pages\\aboutUs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import 'semantic-ui-css/semantic.min.css';




class AboutUs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //static makes it so that function is not assigned to instances of class but
  //to the class itself, CampaignIndex
  static async getInitialProps() {
    const campaigns = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getDeployedCampaigns().call();
    return {
      campaigns
    }; //same as
    //return {campaigns : campaigns} //setting a class variable
  } //Next.js adds requirements for data loading.
  //Cant be done in componentDidMount
  //"primary" as written below is the same as primary={true}


  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      style: {
        padding: '8em 0em'
      },
      vertical: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      stackable: true,
      verticalAlign: "middle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '3em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "Meet Our Team:"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, "Daniela Ant\xE3o", ' '), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      href: "https://www.linkedin.com/in/daniela-bruto-da-costa-antao-7379808/",
      target: "_blank",
      circular: true,
      color: "linkedin",
      icon: "linkedin",
      style: {
        marginTop: '-.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      icon: "mail",
      content: __jsx("a", {
        href: "dbruto@gmail.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 30
        }
      }, "dbruto@gmail.com"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 19
      }
    })), __jsx("p", {
      style: {
        fontSize: '1.33em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, "Have you met our CEO? She's a woman of great skill and even greater enthusiasm!", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }), __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, "Qualifications:"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      bulleted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, ' ', "Regulatory Affairs Lawyer in the ICT industry;"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, "Extensive inhouse experience with strategy-level corporate world.")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      floated: "right",
      width: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      bordered: true,
      circular: true,
      size: "medium",
      src: "/DAntao.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, "Pedro Costa", ' '), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      href: "https://www.linkedin.com/in/pedro-costa-628a4b1b6/",
      target: "_blank",
      circular: true,
      color: "linkedin",
      icon: "linkedin",
      style: {
        marginTop: '-.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      icon: "mail",
      content: __jsx("a", {
        href: "pcosta1com@gmail.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 23
        }
      }, "pcosta1com@gmail.com"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    })), __jsx("p", {
      style: {
        fontSize: '1.33em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, "And here's our CTO! He's quite green, yet he is still determined to give his all for our initiative!", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }), __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, "Qualifications:"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      bulleted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, " MSc in Physics Engineering (IST-UL);"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, "Basic-Intermediate knowledge of:", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].List, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 25
      }
    }, " C "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, " C++ "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, " Python "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 25
      }
    }, " JavaScript "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }
    }, " Solidity "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }, " React "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }, " HTML "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, " CSS ")))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      floated: "right",
      width: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      bordered: true,
      circular: true,
      size: "medium",
      src: "/PCosta.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      style: {
        padding: '8em 0em'
      },
      vertical: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      text: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, "What we bring to the table", ' '), __jsx("p", {
      style: {
        fontSize: '1.33em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, "A new lean middleman in the fintech industry of crowd & chain-enabled asset investment. We aim to provide access to reliable and liquid asset-backed investments in well performing verticals. Currently, we are focused on the", ' ', __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 15
      }
    }, "Legal Cannabis use case"), "."))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AboutUs); //Always necessary...

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")(); //routes.add('...', '...');
//First argument is what we take as a "routing indicator", and the second is
//where we route it to
//Routes get parsed in the order they are written


routes.add('/openCampaigns', '/openCampaigns').add('/login', '/login').add('/subscribe', '/subscribe').add('/register', '/register').add('/aboutUs', '/aboutUs').add('/campaigns/new', '/campaigns/new') //must come first!
.add('/campaigns/:address', '/campaigns/show') //":" denotes a "wildcard"
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new'); //need to account for exceptions of routes within /campaigns that are not
//campaigns, i.e. "new"

module.exports = routes; //exports helpers to navigate application

/***/ }),

/***/ "@artsy/fresnel":
/*!*********************************!*\
  !*** external "@artsy/fresnel" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@artsy/fresnel");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ldGhlcmV1bS93ZWIzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcnRzeS9mcmVzbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJwYWRkaW5nIiwiYmFja2dyb3VuZEltYWdlIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiRGVza3RvcENvbnRhaW5lciIsIkNvbXBvbmVudCIsInNldFN0YXRlIiwiZml4ZWQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsIm1hcmdpbkxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlNpZGViYXIiLCJQdXNoYWJsZSIsIk1lbnUiLCJoYW5kbGVTaWRlYmFySGlkZSIsImhhbmRsZVRvZ2dsZSIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJpbnN0YW5jZSIsIndlYjMiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsIkNhbXBhaWduRmFjdG9yeSIsImludGVyZmFjZSIsInByb3ZpZGVyIiwiV2ViMyIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsInByb2Nlc3MiLCJlbnYiLCJJTkZVUkFfUFJPVklERVIiLCJBYm91dFVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ25zIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9hYm91dFVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hYm91dFVzLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIEdyaWQsXG4gIExpc3QsXG4gIEhlYWRlcixcbiAgQ29udGFpbmVyLFxuICBCdXR0b24sXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWdtZW50XG4gICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgIGludmVydGVkXG4gICAgICB2ZXJ0aWNhbFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzVlbSAwZW0nLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgJ3VybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwMjE2ODQzMTYwMi05YmZhMzcyMmE0NzI/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0OTAmcT04MCknLFxuXG4gICAgICAgIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICAgICAgICBtaW5IZWlnaHQ6ICc0MDBweCcsXG5cbiAgICAgICAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gICAgICAgIGJhY2tncm91bmRBdHRhY2htZW50OiAnZml4ZWQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8gLSByZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgZGl2aWRlZCBpbnZlcnRlZCBzdGFja2FibGU+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz1cImg0XCIgY29udGVudD1cIkFib3V0XCIgLz5cbiAgICAgICAgICAgICAgPExpc3QgbGluayBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPVwiYVwiIGhyZWY9XCIvYWJvdXRVc1wiPlxuICAgICAgICAgICAgICAgICAgQWJvdXQgdXNcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPVwiYVwiIGhyZWY9XCIvYWJvdXRVc1wiPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2lubWFya2V0Y2FwLmNvbS9hbGV4YW5kcmlhL2dsb3NzYXJ5L2Fzc2V0LWJhY2tlZC10b2tlbnNcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBXaGF0IGFyZSBUb2tlbnM/XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz1cImFcIiBocmVmPVwiL3N1YnNjcmliZVwiPlxuICAgICAgICAgICAgICAgICAgUm9hZG1hcFxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz1cImg0XCIgY29udGVudD1cIlNlcnZpY2VzXCIgLz5cbiAgICAgICAgICAgICAgPExpc3QgbGluayBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPVwiYVwiIGhyZWY9XCIvc3Vic2NyaWJlXCI+XG4gICAgICAgICAgICAgICAgICBTdWJzY3JpYmUgdG8gTmV3c2xldHRlclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb3Jtcy5nbGUvYTNIb055MWtaNUVXUDlnTjZcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQYXJ0aWNpcGF0ZSBpbiBTdXJ2ZXlcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPVwiYVwiIGhyZWY9XCIvc3Vic2NyaWJlXCI+XG4gICAgICAgICAgICAgICAgICBIb3cgVG8gQWNjZXNzXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz1cImFcIiBocmVmPVwiL3N1YnNjcmliZVwiPlxuICAgICAgICAgICAgICAgICAgRkFRXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICBBZGRpdGlvbmFsIEluZm9ybWF0aW9uXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBCZWNvbWUgYW4gZWFybHkgYWRvcHRlciB0byBoZWxwIHNoYXBlIHRoZSBmdXR1cmUgYW5kIGJlIHBhcnQgb2ZcbiAgICAgICAgICAgICAgICB3aGF0IGNvbWVzIG5leHQuIFN1YnNjcmliZSB0byB0aGUgbmV3c2xldHRlciB0byBzdGF5IHVwIHRvIGRhdGVcbiAgICAgICAgICAgICAgICB3aXRoIG91ciBwcm9ncmVzcyFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICBSZWFjaCB1cyBhdDpcbiAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2lyY3VsYXIgY29sb3I9XCJmYWNlYm9va1wiIGljb249XCJmYWNlYm9va1wiIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2lyY3VsYXIgY29sb3I9XCJ0d2l0dGVyXCIgaWNvbj1cInR3aXR0ZXJcIiAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNpcmN1bGFyIGNvbG9yPVwibGlua2VkaW5cIiBpY29uPVwibGlua2VkaW5cIiAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNpcmN1bGFyIGNvbG9yPVwiZ29vZ2xlIHBsdXNcIiBpY29uPVwiZ29vZ2xlIHBsdXNcIiAvPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlZ21lbnQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnO1xuaW1wb3J0IHtcbiAgTWVudSxcbiAgU2lkZWJhcixcbiAgQnV0dG9uLFxuICBTZWdtZW50LFxuICBDb250YWluZXIsXG4gIFZpc2liaWxpdHksXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgR3JpZCxcbiAgRGl2aWRlcixcbiAgTGlzdCxcbiAgSW1hZ2UsXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLypleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkNyb3dkQ29pbjwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5DYW1wYWlnbnM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L01lbnUuTWVudT5cbiAgICA8L01lbnU+XG4gICk7XG59OyovXG5cbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgbW9iaWxlOiAwLFxuICAgIHRhYmxldDogNzY4LFxuICAgIGNvbXB1dGVyOiAxMDgwLFxuICB9LFxufSk7XG5cbi8qIEhlYWRzIHVwIVxuICogTmVpdGhlciBTZW1hbnRpYyBVSSBub3IgU2VtYW50aWMgVUkgUmVhY3Qgb2ZmZXIgYVxuIHJlc3BvbnNpdmUgbmF2YmFyLCBob3dldmVyLCBpdCBjYW4gYmUgaW1wbGVtZW50ZWQgZWFzaWx5LlxuICogSXQgY2FuIGJlIG1vcmUgY29tcGxpY2F0ZWQsIGJ1dCB5b3UgY2FuIGNyZWF0ZSByZWFsbHkgZmxleGlibGUgbWFya3VwLlxuICovXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcblxuICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KTtcbiAgc2hvd0ZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogdHJ1ZSB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj1cIm1vYmlsZVwiPlxuICAgICAgICA8VmlzaWJpbGl0eVxuICAgICAgICAgIG9uY2U9e2ZhbHNlfVxuICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnNob3dGaXhlZE1lbnV9XG4gICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VnbWVudFxuICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1pbkhlaWdodDogMTAsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcuMmVtIDBlbScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAndXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjAyMTY4NDMxNjAyLTliZmEzNzIyYTQ3Mj9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQ5MCZxPTgwKScsXG5cbiAgICAgICAgICAgICAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmRBdHRhY2htZW50OiAnZml4ZWQnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8gLSByZXBlYXQnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIGZpeGVkPXtmaXhlZCA/ICd0b3AnIDogbnVsbH1cbiAgICAgICAgICAgICAgaW52ZXJ0ZWQ9eyFmaXhlZH1cbiAgICAgICAgICAgICAgcG9pbnRpbmc9eyFmaXhlZH1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PXshZml4ZWR9XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgc2l6ZT1cInNtYWxsXCIgY2VudGVyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9vcGVuQ2FtcGFpZ25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPk9wZW4gQ2FtcGFpZ25zPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbnMvbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPk5ldyBDYW1wYWlnbjwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvYWJvdXRVc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaW52ZXJ0ZWQ9eyFmaXhlZH0+TG9nIGluPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkPXshZml4ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtmaXhlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVlbScgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICA8L1Zpc2liaWxpdHk+XG5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9NZWRpYT5cbiAgICApO1xuICB9XG59XG5cbkRlc2t0b3BDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5jbGFzcyBNb2JpbGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHt9O1xuXG4gIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pO1xuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiB0cnVlIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2lkZWJhck9wZW5lZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TWVkaWEgYXM9e1NpZGViYXIuUHVzaGFibGV9IGF0PVwibW9iaWxlXCI+XG4gICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxuICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICBhcz17TWVudX1cbiAgICAgICAgICAgIGFuaW1hdGlvbj1cIm92ZXJsYXlcIlxuICAgICAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cbiAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICB2aXNpYmxlPXtzaWRlYmFyT3BlbmVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvT3BlbkNhbXBhaWduc1wiPlxuICAgICAgICAgICAgICAgIDxhPk9wZW4gQ2FtcGFpZ25zPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cbiAgICAgICAgICAgICAgICA8YT5OZXcgQ2FtcGFpZ248L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvYWJvdXRVc1wiPlxuICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgPGE+TG9nIGluPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPGE+U2lnbiBVcDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9TaWRlYmFyPlxuXG4gICAgICAgICAgPFNpZGViYXIuUHVzaGVyIGRpbW1lZD17c2lkZWJhck9wZW5lZH0+XG4gICAgICAgICAgICA8U2VnbWVudFxuICAgICAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDM1MCwgcGFkZGluZzogJy4yZW0gMGVtJyB9fVxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxNZW51IGludmVydGVkIHBvaW50aW5nIHNlY29uZGFyeSBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2lkZWJhclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpbnZlcnRlZD5Mb2cgaW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaW52ZXJ0ZWQgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cbiAgICAgICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuICAgICAgPC9NZWRpYT5cbiAgICApO1xuICB9XG59XG5cbk1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmNvbnN0IFJlc3BvbnNpdmVDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIC8qIEhlYWRzIHVwIVxuICAgKiBGb3IgbGFyZ2UgYXBwbGljYXRpb25zIGl0IG1heSBub3QgYmUgYmVzdCBvcHRpb24gdG9cbiAgIHB1dCBhbGwgcGFnZSBpbnRvIHRoZXNlIGNvbnRhaW5lcnMgYXRcbiAgICogdGhleSB3aWxsIGJlIHJlbmRlcmVkIHR3aWNlIGZvciBTU1IuXG4gICAqL1xuICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XG4gICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cbiAgICA8TW9iaWxlQ29udGFpbmVyPntjaGlsZHJlbn08L01vYmlsZUNvbnRhaW5lcj5cbiAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cbik7XG5cblJlc3BvbnNpdmVDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zaXZlQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJzsgLy9TaW5jZSBMYXlvdXQgaXMgYWx3YXlzIGxvYWRlZCBpdFxuLy8gaXMgYmVzdCB0byBpbXBvcnQgdGhpcyBoZXJlXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiIsImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMy5qcyc7IC8vcmV0cmlldmluZyB0aGUgY3JlYXRlZCBpbnN0YW5jZSBvZiBXZWIzXG5pbXBvcnQgQ2FtcGFpZ25GYWN0b3J5IGZyb20gJy4vYnVpbGQvQ2FtcGFpZ25GYWN0b3J5Lmpzb24nO1xuXG4vL2dpdmUgdGhlIGxvY2F0aW9uIG9mIHRoZSBkZXBsb3llZCBmYWN0b3J5IENvbnRyYWN0XG4vL3Bhc3MgdGhlIEFCSSAoaW50ZXJmYWNlKSBhbmQgdGhlIGFkZHJlc3MgY29udHJhY3Qgd2FzIGRlcGxveWVkIHRvXG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICBKU09OLnBhcnNlKENhbXBhaWduRmFjdG9yeS5pbnRlcmZhY2UpLFxuICAnMHg3NEUxM0Y2Qzc2NTJkYzg0N2UxQzNFOTNkYTIyMTA0NDc1QUJCNjFhJ1xuKTtcbi8qY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gIEpTT04ucGFyc2UoQ2FtcGFpZ25GYWN0b3J5LmludGVyZmFjZSksXG4gIHByb2Nlc3MuZW52LkZBQ1RPUllfQUREUkVTU1xuKTsqL1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5sZXQgd2ViMzsgLy9zbyB0aGF0IGl0IGNhbiBiZSByZWFzc2lnbmVkXG5cbi8vdHlwZW9mIGNhbiBiZSB1c2VkIHRvIGNoZWNrIGlmIGEgdmFyaWFibGUgaXMgZGVmaW5lZFxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xuICAvL2luc2lkZSBicm93c2VyLCBtZXRhbWFzayBhdmFpbGFibGVcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59IGVsc2Uge1xuICAvL05vdCBpbiBicm93c2VyICh3ZSBhcmUgb24gdGhlIHNlcnZlcikgb3IgbWV0YW1hc2sgaXNudCBhdmFpbGFibGVcbiAgLy9TZXQgdXAgb3VyIG93biBwcm92aWRlciB1c2luZyBpbmZ1cmFcbiAgLyogIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbiAgICAnaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My8zYTQ3ZGZkZDQzMjE0NjhkYTg2ZTc2YWE3NWVlNjNkMydcbiAgKTsqL1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIocHJvY2Vzcy5lbnYuSU5GVVJBX1BST1ZJREVSKTtcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbiAgLy9TaG91bGQgYWRkIHNlY3VyaXR5IG1lYXN1cmVzIGZvciBpbmZ1cmEgbGlua1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuXG4vL2NvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuXG4vL0Fzc3VtZXMgdGhhdCBtZXRhbWFzayBhbHJlYWR5IGluamVjdHMgYSB3ZWIzIGluc3RhbmNlIG9udG8gdGhlIHBhZ2VcblxuLy9XaWxsIGZhaWwgaWYgY3VzdG9tZXIgZG9lc250IGhhdmUgbWV0YW1hc2tcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDYXJkLFxuICBCdXR0b24sXG4gIEdyaWQsXG4gIENvbnRhaW5lcixcbiAgU2VnbWVudCxcbiAgSGVhZGVyLFxuICBEaXZpZGVyLFxuICBJbWFnZSxcbiAgTGlzdCxcbiAgSWNvbixcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5cbi8vaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG5jbGFzcyBBYm91dFVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy9zdGF0aWMgbWFrZXMgaXQgc28gdGhhdCBmdW5jdGlvbiBpcyBub3QgYXNzaWduZWQgdG8gaW5zdGFuY2VzIG9mIGNsYXNzIGJ1dFxuXG4gIC8vdG8gdGhlIGNsYXNzIGl0c2VsZiwgQ2FtcGFpZ25JbmRleFxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcbiAgICByZXR1cm4geyBjYW1wYWlnbnMgfTtcblxuICAgIC8vc2FtZSBhc1xuXG4gICAgLy9yZXR1cm4ge2NhbXBhaWducyA6IGNhbXBhaWduc30gLy9zZXR0aW5nIGEgY2xhc3MgdmFyaWFibGVcbiAgfVxuXG4gIC8vTmV4dC5qcyBhZGRzIHJlcXVpcmVtZW50cyBmb3IgZGF0YSBsb2FkaW5nLlxuXG4gIC8vQ2FudCBiZSBkb25lIGluIGNvbXBvbmVudERpZE1vdW50XG5cbiAgLy9cInByaW1hcnlcIiBhcyB3cml0dGVuIGJlbG93IGlzIHRoZSBzYW1lIGFzIHByaW1hcnk9e3RydWV9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoM1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnM2VtJyB9fT5cbiAgICAgICAgICAgICAgICAgIE1lZXQgT3VyIFRlYW06XG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgzXCIgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgRGFuaWVsYSBBbnTDo297JyAnfVxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGFuaWVsYS1icnV0by1kYS1jb3N0YS1hbnRhby03Mzc5ODA4L1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua2VkaW5cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImxpbmtlZGluXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJy0uNWVtJyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17PGEgaHJlZj1cImRicnV0b0BnbWFpbC5jb21cIj5kYnJ1dG9AZ21haWwuY29tPC9hPn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cbiAgICAgICAgICAgICAgICAgIEhhdmUgeW91IG1ldCBvdXIgQ0VPPyBTaGUncyBhIHdvbWFuIG9mIGdyZWF0IHNraWxsIGFuZCBldmVuXG4gICAgICAgICAgICAgICAgICBncmVhdGVyIGVudGh1c2lhc20hXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxiPlF1YWxpZmljYXRpb25zOjwvYj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0IGJ1bGxldGVkPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgUmVndWxhdG9yeSBBZmZhaXJzIExhd3llciBpbiB0aGUgSUNUIGluZHVzdHJ5O1xuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICBFeHRlbnNpdmUgaW5ob3VzZSBleHBlcmllbmNlIHdpdGggc3RyYXRlZ3ktbGV2ZWwgY29ycG9yYXRlXG4gICAgICAgICAgICAgICAgICAgICAgd29ybGQuXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJyaWdodFwiIHdpZHRoPXs3fT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYm9yZGVyZWQgY2lyY3VsYXIgc2l6ZT1cIm1lZGl1bVwiIHNyYz1cIi9EQW50YW8uanBnXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgzXCIgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgUGVkcm8gQ29zdGF7JyAnfVxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGVkcm8tY29zdGEtNjI4YTRiMWI2L1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua2VkaW5cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImxpbmtlZGluXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJy0uNWVtJyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBjb3N0YTFjb21AZ21haWwuY29tXCI+cGNvc3RhMWNvbUBnbWFpbC5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cbiAgICAgICAgICAgICAgICAgIEFuZCBoZXJlJ3Mgb3VyIENUTyEgSGUncyBxdWl0ZSBncmVlbiwgeWV0IGhlIGlzIHN0aWxsXG4gICAgICAgICAgICAgICAgICBkZXRlcm1pbmVkIHRvIGdpdmUgaGlzIGFsbCBmb3Igb3VyIGluaXRpYXRpdmUhXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxiPlF1YWxpZmljYXRpb25zOjwvYj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0IGJ1bGxldGVkPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPiBNU2MgaW4gUGh5c2ljcyBFbmdpbmVlcmluZyAoSVNULVVMKTs8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICBCYXNpYy1JbnRlcm1lZGlhdGUga25vd2xlZGdlIG9mOlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPiBDIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT4gQysrIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT4gUHl0aG9uIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT4gSmF2YVNjcmlwdCA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+IFNvbGlkaXR5IDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT4gUmVhY3QgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPiBIVE1MIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT4gQ1NTIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwicmlnaHRcIiB3aWR0aD17N30+XG4gICAgICAgICAgICAgICAgPEltYWdlIGJvcmRlcmVkIGNpcmN1bGFyIHNpemU9XCJtZWRpdW1cIiBzcmM9XCIvUENvc3RhLmpwZ1wiIC8+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbD5cbiAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDNcIiBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XG4gICAgICAgICAgICAgIFdoYXQgd2UgYnJpbmcgdG8gdGhlIHRhYmxleycgJ31cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxuICAgICAgICAgICAgICBBIG5ldyBsZWFuIG1pZGRsZW1hbiBpbiB0aGUgZmludGVjaCBpbmR1c3RyeSBvZiBjcm93ZCAmXG4gICAgICAgICAgICAgIGNoYWluLWVuYWJsZWQgYXNzZXQgaW52ZXN0bWVudC4gV2UgYWltIHRvIHByb3ZpZGUgYWNjZXNzIHRvXG4gICAgICAgICAgICAgIHJlbGlhYmxlIGFuZCBsaXF1aWQgYXNzZXQtYmFja2VkIGludmVzdG1lbnRzIGluIHdlbGwgcGVyZm9ybWluZ1xuICAgICAgICAgICAgICB2ZXJ0aWNhbHMuIEN1cnJlbnRseSwgd2UgYXJlIGZvY3VzZWQgb24gdGhleycgJ31cbiAgICAgICAgICAgICAgPGI+TGVnYWwgQ2FubmFiaXMgdXNlIGNhc2U8L2I+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VXM7XG5cbi8vQWx3YXlzIG5lY2Vzc2FyeS4uLlxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xuXG4vL3JvdXRlcy5hZGQoJy4uLicsICcuLi4nKTtcbi8vRmlyc3QgYXJndW1lbnQgaXMgd2hhdCB3ZSB0YWtlIGFzIGEgXCJyb3V0aW5nIGluZGljYXRvclwiLCBhbmQgdGhlIHNlY29uZCBpc1xuLy93aGVyZSB3ZSByb3V0ZSBpdCB0b1xuLy9Sb3V0ZXMgZ2V0IHBhcnNlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgd3JpdHRlblxucm91dGVzXG4gIC5hZGQoJy9vcGVuQ2FtcGFpZ25zJywgJy9vcGVuQ2FtcGFpZ25zJylcbiAgLmFkZCgnL2xvZ2luJywgJy9sb2dpbicpXG4gIC5hZGQoJy9zdWJzY3JpYmUnLCAnL3N1YnNjcmliZScpXG4gIC5hZGQoJy9yZWdpc3RlcicsICcvcmVnaXN0ZXInKVxuICAuYWRkKCcvYWJvdXRVcycsICcvYWJvdXRVcycpXG4gIC5hZGQoJy9jYW1wYWlnbnMvbmV3JywgJy9jYW1wYWlnbnMvbmV3JykgLy9tdXN0IGNvbWUgZmlyc3QhXG4gIC5hZGQoJy9jYW1wYWlnbnMvOmFkZHJlc3MnLCAnL2NhbXBhaWducy9zaG93JykgLy9cIjpcIiBkZW5vdGVzIGEgXCJ3aWxkY2FyZFwiXG4gIC5hZGQoJy9jYW1wYWlnbnMvOmFkZHJlc3MvcmVxdWVzdHMnLCAnL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleCcpXG4gIC5hZGQoJy9jYW1wYWlnbnMvOmFkZHJlc3MvcmVxdWVzdHMvbmV3JywgJy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3Jyk7XG5cbi8vbmVlZCB0byBhY2NvdW50IGZvciBleGNlcHRpb25zIG9mIHJvdXRlcyB3aXRoaW4gL2NhbXBhaWducyB0aGF0IGFyZSBub3Rcbi8vY2FtcGFpZ25zLCBpLmUuIFwibmV3XCJcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7IC8vZXhwb3J0cyBoZWxwZXJzIHRvIG5hdmlnYXRlIGFwcGxpY2F0aW9uXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXJ0c3kvZnJlc25lbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==