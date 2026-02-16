(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
        "question": "What was the topic of his recent science class?",
        "tag": "science"
    },
    {
        "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
        "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
        "tag": "parent_teacher_conference"
    },
    {
        "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
        "question": "How does the nursery school support kids’ transitions into school?",
        "tag": "orientation"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.Data = exports.urlData = void 0;
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEvent = exports.ButtonEvent = exports.ClickEvent = exports.BaseTrackerEvent = void 0;
exports.objectToTrackerEvent = objectToTrackerEvent;
exports.isTrackerEvent = isTrackerEvent;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
(0, console_wrapper_1.log)("event loaded.", 2 /* DebugLevelEnum.BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = (0, funcs_1.now)();
}
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = (0, funcs_1.now)();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: false,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* ActionEnum.CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* ActionEnum.CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* ActionEnum.HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;

},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReceiver = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
(0, console_wrapper_1.log)("receiver loaded.", 2 /* DebugLevelEnum.BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if ((0, event_1.isTrackerEvent)(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;

},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBanner = void 0;
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)("banner loaded.", 2 /* DebugLevelEnum.BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});

},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
(0, console_wrapper_1.log)("document loaded.", 2 /* DebugLevelEnum.BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <".concat(id, ">."));
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        (0, console_wrapper_1.error)(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;

},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
(0, console_wrapper_1.log)('element loaded.', 2 /* DebugLevelEnum.BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};

},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoc = exports.ModeEnum = exports.AppEnum = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
(0, console_wrapper_1.log)('html loc loaded.', 2 /* DebugLevelEnum.BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum || (exports.AppEnum = AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum || (exports.ModeEnum = ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;

},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)('modal loaded.', 2 /* DebugLevelEnum.BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: ".concat(Math.round(window.pageXOffset), "px; top: ").concat(Math.round(window.pageYOffset), "px;"));
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});

},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroll = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
(0, console_wrapper_1.log)('scroll loaded.', 2 /* DebugLevelEnum.BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            (0, console_wrapper_1.error)(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: false,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = (0, funcs_1.now)();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        var _this = this;
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(function () { return _this.scroll(); });
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if (!('requestAnimationFrame' in window)) {
            window.scroll(0, Number(this.endPos));
            // (window as Window).scroll({ top: this.endPos, left: 0, behavior: 'auto' });
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;

},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitForm = void 0;
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)('submit form loaded.', 2 /* DebugLevelEnum.BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, queryString, urlParams, textArea;
            return __generator(this, function (_a) {
                event.preventDefault();
                allowed = allowSubmission.allow();
                if (allowed === null) {
                    qp = new URL(window.location.href).searchParams;
                    data_1.data.urlData.raw = window.location.href;
                    data_1.data.urlData.assignmentID = qp.get('assignmentId');
                    data_1.data.urlData.hitID = qp.get('hitId');
                    data_1.data.urlData.workerID = qp.get('workerId');
                    data_1.data.urlData.submitTo =
                        qp.get('turkSubmitTo') + '/mturk/externalSubmit';
                    if (data_1.data.urlData.assignmentID !== null) {
                        document_1.D.id('assignment-id').value =
                            data_1.data.urlData.assignmentID;
                    }
                    if (data_1.data.urlData.hitID !== null) {
                        document_1.D.id('hit-id').value =
                            data_1.data.urlData.hitID;
                    }
                    queryString = window.location.search;
                    urlParams = new URLSearchParams(queryString);
                    data_1.data.data.task = urlParams.get("tag");
                    textArea = document.getElementById("text-area");
                    if (textArea) {
                        data_1.data.data.response = textArea.value;
                    }
                    console.log("\n\nDATA FOR TASK: " + data_1.data.data.task + "\n");
                    console.log(JSON.stringify(data_1.data));
                    alert("Open console to see user data. Please record into a text document.");
                    // (Elements.submitForm as HTMLFormElement).action = data.urlData
                    //     .submitTo as string;
                    // allowSubmission.preSubmit();
                    // const resp = await fetch(gate, {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         'x-api-key': k,
                    //     },
                    //     body: JSON.stringify({
                    //         sandbox: params.sandbox,
                    //         wustl_key: params.wustl_key,
                    //         project: params.project,
                    //         iteration: params.iteration,
                    //         tag: params.tag,
                    //         assignmentID: data.urlData.assignmentID,
                    //         hitID: data.urlData.hitID,
                    //         workerID: data.urlData.workerID,
                    //         log: data.serialize(),
                    //     }),
                    // }); // TODO: verify this actually works
                    // console.log(resp.status);
                    // console.log(await resp.json());
                    // if (resp.status !== 200) {
                    //     alert(
                    //         'You made a bad request with your submission. The server thinks that you made this error: ' +
                    //             (await resp.json()).error
                    //     );
                    //     return;
                    // }
                    // SubmitForm.elem.removeEventListener(
                    //     'submit',
                    //     SubmitForm.submitFunc
                    // );
                    // SubmitForm.elem.submit();
                }
                else {
                    alert(allowed);
                }
                return [2 /*return*/];
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;

},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerElements = void 0;
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;

},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;

},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
(0, console_wrapper_1.log)("router loaded.", 2 /* DebugLevelEnum.BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* RouterMode.ON */ ||
            config.mode === 2 /* RouterMode.STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* RouterMode.STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        var _this = this;
        return (0, console_wrapper_1.error)(function () { return __awaiter(_this, void 0, void 0, function () {
            var target, url, hash, el, rect, scrollTop, headerOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        target = e.target;
                        url = target.href;
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        _a.sent();
                        window.dispatchEvent(new CustomEvent("newPageLoad"));
                        hash = new URL(url).hash;
                        if (!hash) return [3 /*break*/, 3];
                        // You gotta wait for the page to load so the DOM is updated for the scroll location
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 350); })];
                    case 2:
                        // You gotta wait for the page to load so the DOM is updated for the scroll location
                        _a.sent();
                        el = document.getElementById(hash.slice(1));
                        if (el) {
                            rect = el.getBoundingClientRect();
                            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            headerOffset = 50;
                            window.scrollTo({
                                top: rect.top + scrollTop - headerOffset,
                                behavior: "smooth",
                            });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            (0, console_wrapper_1.error)(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return (0, console_wrapper_1.error)(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error("All forms except for the one in the top header are inactive.");
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent("newPageLoad"));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent("newPageLoad"));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp("#");
    Router.EMPTY = new RegExp("^$");
    Router.AT_SYMBOL = new RegExp("@");
    // public static HASH_TAG_RESPONDER = noop;
    // Essentially if links are just hashes, still returns noop, but if they have path and hash
    // they use the SPA nav
    Router.HASH_TAG_RESPONDER = function (event) {
        var target = event.target;
        var rawHref = target.getAttribute("href") || "";
        if (rawHref.startsWith("#")) {
            event.preventDefault();
            var el = document.getElementById(rawHref.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            return;
        }
        // Cross-page link with hash (e.g. teddy bears -> enrichment#art) - use SPA
        Router.STANDARD_LINK_LISTENER(event);
    };
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) { return event.preventDefault(); };
    Router.pathPrefix = "";
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, "click", func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === "pdf") {
                        document_1.D.addEventListener(elem, "click", function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, "click", function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, "click", function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, "click", func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, "click", function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, "click", function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, "click", func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, "submit", Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, "submit", Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;

},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
(0, console_wrapper_1.log)('tracker loaded.', 2 /* DebugLevelEnum.BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spreadArray([], __read(inds), false));
            sub = sub.substring(0, ind) + '...';
        }
        console.log(scen);
        console.log('loaded scen');
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        (0, console_wrapper_1.setDebugLevel)(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!(0, event_1.isTrackerEvent)(evData)) {
                    (0, event_1.objectToTrackerEvent)(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;

},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = error;
exports.errorHO = errorHO;
exports.setDebugLevel = setDebugLevel;
exports.log = log;
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* DebugLevelEnum.BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
var debugLevel = 2 /* DebugLevelEnum.BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}

},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = noop;
exports.now = now;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("funcs loaded.", 2 /* DebugLevelEnum.BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
function now() {
    return new Date().getTime();
}

},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoader = void 0;
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
(0, console_wrapper_1.log)('html loader loaded.', 2 /* DebugLevelEnum.BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        (0, console_wrapper_1.log)('regsiter post load function', 3 /* DebugLevelEnum.DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                (0, console_wrapper_1.log)('begin load', 3 /* DebugLevelEnum.DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                (0, console_wrapper_1.log)('end load', 3 /* DebugLevelEnum.DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                (0, console_wrapper_1.log)('begin request', 3 /* DebugLevelEnum.DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        (0, console_wrapper_1.log)('resolve request', 3 /* DebugLevelEnum.DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        (0, console_wrapper_1.log)('Flattening', 3 /* DebugLevelEnum.DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;

},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("id generator loaded", 2 /* DebugLevelEnum.BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: false,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;

},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReady = isReady;
exports.waitUntilReady = waitUntilReady;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("ready loaded", 2 /* DebugLevelEnum.BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    (0, console_wrapper_1.log)("document is ready", 3 /* DebugLevelEnum.DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}

},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenarios = void 0;
// tslint:disable-next-line: no-var-requires
// export const scenarios: Scenario[] = require('./../../../../scenarios/scenarios.json');
var scenarios_json_1 = __importDefault(require("./../../../../scenarios/scenarios.json"));
exports.scenarios = scenarios_json_1.default;
window.scenarios = scenarios_json_1.default;

},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;

},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = doSomething;
function doSomething() {
    console.log("Put some code in here!");
}

},{}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
exports.setupAll = setupAll;
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    (0, do_something_1.doSomething)();
}
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });

},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./slideshow":29}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsToCache = void 0;
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
    // Put more items in the array below here.
];

},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br>\n              Morning: 9-11:45 a.m.<br>\n              Afternoon: 12:30-3:15 p.m.<br>\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div>\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"321\"\n    height=\"28\"\n    viewBox=\"0 0 321 28\"\n    class=\"washu-logo\"\n    aria-labelledby=\"title\"\n  >\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path\n      fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\"\n    ></path>\n    <path\n      fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\"\n    ></path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\"\n      ></path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\"\n      ></path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\"\n      ></path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n  </div>\n  <div id=\"main-menu-container\">\n    <div class=\"container\">\n      <div class=\"navbar\">\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"about\" href=\"files/about.html\">About </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a id=\"parent-handbook\" href=\"files/parent_handbook.html\"\n              >Home and School Communication</a\n            >\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\"\n              >Curriculum Overview</a\n            >\n            <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears</a>\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears</a>\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs</a>\n            <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears</a>\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears</a>\n            <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks Extended Day</a>\n            <a id=\"enrichment-program\" href=\"files/enrichment_programs.html\"\n              >Enrichment Program</a\n            >\n          </div>\n        </div>\n        <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a\n              id=\"nursery-school-merchandise\"\n              href=\"files/nursery_school_merchandise.html\"\n              >Nursery School Merchandise</a\n            >\n            <a id=\"parent-association\" href=\"files/parent_association.html\"\n              >Parent Association</a\n            >\n          </div>\n        </div>\n\n        <a id=\"apply\" href=\"files/apply.html\">Apply</a>\n        <a id=\"forms\" href=\"files/forms.html\">Forms</a>\n\n        <a id=\"parent-resources\" href=\"files/parent_resources.html\"\n          >Parent Resources</a\n        >\n      </div>\n    </div>\n  </div>\n</header>\n";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slideshow = void 0;
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;

},{"./../core/dom/document":6}],30:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, ready_1.waitUntilReady)()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert("This HIT is broken and cannot be completed at this time.");
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: "information-foraging",
                    bucketName: "cse-256-log",
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id("text-area");
                                console.log(textArea.value);
                                if (textArea.value === "") {
                                    return "You must fill out the text box to turn this HIT in.";
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return "There was an error fill out the form and try again.";
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id("text-area").value;
                            return;
                        },
                    },
                    debugLevel: 1 /* DebugLevelEnum.NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* RouterMode.STANDARD_ALLOWANCES */,
                                                module: "A" /* RouterModule.A */,
                                            },
                                            { mode: 0 /* RouterMode.OFF */, module: "FORM" /* RouterModule.FORM */ },
                                            {
                                                mode: 2 /* RouterMode.STANDARD_ALLOWANCES */,
                                                module: "IMG" /* RouterModule.IMG */,
                                            },
                                        ], "files/");
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* ActionEnum.CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* ActionEnum.CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, "keypress", function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* ActionEnum.BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener("scroll", function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* ActionEnum.SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* ActionEnum.HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* ActionEnum.BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* ActionEnum.CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* ActionEnum.SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load("files/index.html")];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();

},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFaEQsUUFBQSxPQUFPLEdBQWlCO0lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUMzQyxLQUFLLEVBQUUsU0FB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O3dDQUN6QyxrQkFBa0I7d0NBQ2xCLHFCQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBQTs7d0NBRHJDLGtCQUFrQjt3Q0FDbEIsU0FBcUMsQ0FBQzs7Ozs7cUJBQ3ZDO2lCQUNGLENBQUMsQ0FBQzs7OztLQUNKLENBQUM7QUFFRixLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVtcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgY29uc2lkZXJpbmcgc2VuZGluZyB5b3VyIGNoaWxkIHRvIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW914oCZdmUgbGVhcm5lZCB0aGF0IHRoZSBjdXJyaWN1bHVtIGlzIHBsYXktYmFzZWQgYW5kIHlvdSB3YW50IHRvIGtub3cgaG93IGxlYXJuaW5nIGlzIGluY29ycG9yYXRlZCBpbnRvIGEgcGxheS1iYXNlZCBjb250ZXh0LiBZb3UgaGF2ZSBzb21lIGlkZWFzIGFib3V0IGhvdyBsYW5ndWFnZSBsZWFybmluZyBtaWdodCBoYXBwZW4sIGJ1dCBhcmUgbGVzcyBzdXJlIGFib3V0IG1hdGguXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIHNvbWUgZXhhbXBsZXMgb2YgaG93IG1hdGggbGVhcm5pbmcgaXMgaW5jb3Jwb3JhdGVkIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cIixcbiAgICAgICAgXCJ0YWdcIjogXCJtYXRoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciA0IHllYXIgb2xkLiBCb3RoIHlvdSBhbmQgeW91ciBzcG91c2Ugd29yaywgc28geW91IG5lZWQgdG8gZnVsbHkgdW5kZXJzdGFuZCB3aGF0IHNjaGVkdWxpbmcgY29uc3RyYWludHMgZWFjaCBvcHRpb24gaW52b2x2ZXMuIE9uZSBvZiB5b3VyIHNjaG9vbHMgb2YgaW50ZXJlc3QgaXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoZW4gZG9lcyBzY2hvb2wgc3RhcnQgYW5kIGVuZCBlYWNoIGRheT8gV2hhdCBpcyB0aGUgbG9uZ2VzdCBwZXJpb2Qgb2YgdGltZSB0aGF0IHlvdXIgY2hpbGQgY2FuIGJlIHRoZXJlP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInNjaG9vbF9kYXlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDMuNSB5ZWFyIG9sZC4gWW914oCZdmUgYmVlbiB0b2xkIHRoYXQgb25lIG9mIHRoZSBoYWxsbWFya3Mgb2YgYSBnb29kIHByb2dyYW0gaXMgdGVhY2hlcnMgd2hvIGhhdmUgYmVlbiB0aGVyZSBmb3IgYSBsb25nIHRpbWUuIFlvdSB3YW50IHlvdXIgY2hpbGQgdG8gYXR0ZW5kIGluIHRoZSBtb3JuaW5ncyBvbmx5LlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hpY2ggdGVhY2hlcnMgd291bGQgeW91ciBjaGlsZCBoYXZlIGFuZCBob3cgbG9uZyBoYXZlIHRoZXkgYmVlbiBhdCB0aGUgc2Nob29sP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInRlYWNoZXJfdGVudXJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBzdGFydGluZyB0byBsb29rIGF0IHN1bW1lciBjYW1wIG9wdGlvbnMgYW5kIGhhdmUgaGVhcmQgZ29vZCB0aGluZ3MgYWJvdXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGZvciB5b3VuZyBjaGlsZHJlbi5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBkYWlseSBjYW1wIGhvdXJzPyBBcmUgdGhlcmUgYW55IGV4dGVuZGVkIGRheSBvcHBvcnR1bml0aWVzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInN1bW1lcl9jYW1wXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciBzcGlyaXRlZCAzIHllYXIgb2xkIGFuZCB3YW50IHRvIHVuZGVyc3RhbmQgdGhlaXIgYXBwcm9hY2ggdG8gZGlzY2lwbGluZS5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkbyB0ZWFjaGVycyBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgYXBwcm9hY2ggZGlzY2lwbGluZT9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJkaXNjaXBsaW5lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91ciBkYXVnaHRlciBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzcyBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFNoZSBjYW1lIGhvbWUgdGhpcyB3ZWVrIHNpbmdpbmcgYSBzb25nIGluIFNwYW5pc2ggYWJvdXQgc2hhcGVzLCBidXQgeW91IGFyZSBwcmV0dHkgc3VyZSB0aGF0IHNoZSBoYXMgc29tZSBvZiB0aGUgd29yZHMgd3JvbmcuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSB0aGUgY29ycmVjdCBseXJpY3M/XCIsXG4gICAgICAgIFwidGFnXCI6IFwic3BhbmlzaF9zb25nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiSXQgaXMgbWlkLURlY2VtYmVyIGFuZCB5b3UgYXJlIHRoaW5raW5nIGFib3V0IHRoaW5ncyB0byBkbyBvdmVyIHlvdXIgZGF1Z2h0ZXIncyB1cGNvbWluZyBzY2hvb2wgYnJlYWsuIFNoZSBpcyAzIHllYXJzIG9sZCBhbmQgYXR0ZW5kcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGFuZCBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzc3Jvb20uIFlvdSBhcmUgcGxhbm5pbmcgYSB0cmlwIHRvIHRoZSBsaWJyYXJ5IGFuZCB3YW50IHRvIGNoZWNrIG91dCBzb21lIGJvb2tzIHRoYXQgY29ubmVjdCB3aXRoIHNvbWV0aGluZyBzaGUgaXMgZG9pbmcgaW4gc2Nob29sLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgc29tZSBwb3RlbnRpYWwgYm9vayB0b3BpY3MgdGhhdCByZWxhdGUgdG8gc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgb24gaW4gaGVyIGNsYXNzcm9vbSB0aGlzIHdlZWs/XCIsXG4gICAgICAgIFwidGFnXCI6IFwiYm9va3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3Ugd2FudCB0byBhY2NlcHQgdGhlIG9mZmVyIG9mIGFkbWlzc2lvbi5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpZ3VyZSBvdXQgd2hhdCB5b3UgbmVlZCB0byBkbyBhdCB0aGlzIHRpbWUgdG8gZmluYWxpemUgeW91ciBjaGlsZOKAmXMgcGxhY2UgYXQgdGhlIHNjaG9vbC5cIixcbiAgICAgICAgXCJ0YWdcIjogXCJhZG1pc3Npb25fMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSBuZWVkIHRvIHBheSBvbmUgbW9udGggb2YgdHVpdGlvbiBhcyBhIGRlcG9zaXQuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIG91dCBob3cgbXVjaCBvbmUgbW9udGggb2YgdHVpdGlvbiBpcyBhbmQgd2hldGhlciBvciBub3QgaXQgaXMgcG9zc2libGUgdG8gcGF5IG9ubGluZS5cIixcbiAgICAgICAgXCJ0YWdcIjogXCJkZXBvc2l0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBtb3ZpbmcgdG8gU3QuIExvdWlzIGZyb20gQmVpamluZyBhbmQgbG9va2luZyBmb3IgYSBQcmUtSyBwcm9ncmFtIGZvciB5b3VyIGRhdWdodGVyLCBhZ2UgNS4gU2hlIGlzIHZlcnkgY2xvc2UgdG8gaGVyIGZyaWVuZHMgYW5kIHlvdSBhcmUgd29ycmllZCB0aGF0IHRoZSBtb3ZlIG1pZ2h0IGJlIGhhcmQgb24gaGVyLiBTaGUgbWF5IG5lZWQgc29tZSBleHRyYSBzdXBwb3J0IGZyb20gaGVyIG5ldyB0ZWFjaGVycyBsZWFybmluZyBFbmdsaXNoLCBhZGFwdGluZyB0byBBbWVyaWNhbiBjdWx0dXJlLCBhbmQgbWFraW5nIG5ldyBmcmllbmRzLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBzdGFmZiBhcHByb2FjaCBwcm92aWRpbmcgZXh0cmEgaGVscCB0byBzdHVkZW50cyB3aG8gbmVlZCBpdD9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJoZWxwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBsb29raW5nIGF0IE51cnNlcnkgU2Nob29scyBmb3IgeW91ciBzb29uIHRvIGJlIDMgeWVhciBvbGQuIEhlIGhhcyBuZXZlciBiZWVuIGluIHNjaG9vbCBvciBkYXljYXJlIGJlZm9yZSBhbmQgeW91IGFyZSBzb21ld2hhdCB3b3JyaWVkIGFib3V0IHRoZSB0cmFuc2l0aW9uLiBZb3UnZCBsaWtlIHRvIGVuc3VyZSB0aGF0IHlvdSdsbCBiZSBhYmxlIHRvIGhhdmUgc3Ryb25nIGNvbW11bmljYXRpb25hdCBoaXMgbmV3IHNjaG9vbC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgaGFuZGxlIGNvbW11bmljYXRpbmcgd2l0aCBwYXJlbnRzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcImNvbW11bmljYXRpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJJdOKAmXMgbWlkLURlY2VtYmVyIGFuZCB5b3VyIHNvbiwgYWdlIDQsIGNhbWUgaG9tZSBhbGwgZXhjaXRlZCBhYm91dCBzY2llbmNlIGNsYXNzLiBUaGV5IGxlYXJuZWQgYSBuZXcgd29yZCwgYnV0IGhlIGNhbuKAmXQgYWN0dWFsbHkgcmVtZW1iZXIgdGhlIHdvcmQgdGhleSBsZWFybmVkIGFib3V0LlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCB3YXMgdGhlIHRvcGljIG9mIGhpcyByZWNlbnQgc2NpZW5jZSBjbGFzcz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJzY2llbmNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBzZWxlY3RpbmcgYSBwcmUtc2Nob29sLCBidXQgd2FudCB0byBiZSBzdXJlIHRoYXQgeW91ciBkYXVnaHRlciB3aWxsIGJlIHJlYWR5IGZvciBraW5kZXJnYXJ0ZW4gd2hlbiBpdOKAmXMgdGltZS5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBudXJzZXJ5IHNjaG9vbCBhc3Nlc3MgY2hpbGRyZW7igJlzIGtub3dsZWRnZSwgc3VwcG9ydCB0aGVpciBncm93dGgsIGFuZCBzaGFyZSB0aGUgcmVzdWx0cyB3aXRoIHBhcmVudHM/XCIsXG4gICAgICAgIFwidGFnXCI6IFwicGFyZW50X3RlYWNoZXJfY29uZmVyZW5jZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBoYXZlIHJlY2VudGx5IGFjY2VwdGVkIGEgcG9zaXRpb24gZm9yIHlvdXIgY2hpbGQgZm9yIHRoZSBjb21pbmcgc2Nob29sIHllYXIgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gVXAgdG8gdGhpcyBwb2ludCwgeW91ciBjaGlsZCBoYXMgYmVlbiBhdCBob21lIGFuZCB5b3UgYXJlIHNvbWV3aGF0IHdvcnJpZWQgYWJvdXQgdGhlIHRyYW5zaXRpb24uXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgbnVyc2VyeSBzY2hvb2wgc3VwcG9ydCBraWRz4oCZIHRyYW5zaXRpb25zIGludG8gc2Nob29sP1wiLFxuICAgICAgICBcInRhZ1wiOiBcIm9yaWVudGF0aW9uXCJcbiAgICB9XG5dXG4iLCJpbXBvcnQgeyBUcmFja2VyRXZlbnQgfSBmcm9tICcuL2V2ZW50JztcbmNvbnNvbGUubG9nKCdkYXRhIGxvYWRlZC4nKTtcbmV4cG9ydCBpbnRlcmZhY2UgTXR1cmtVUkxEYXRhIHtcbiAgICByYXc6IHN0cmluZztcbiAgICBhc3NpZ25tZW50SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgaGl0SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgd29ya2VySUQ6IHN0cmluZyB8IG51bGw7XG4gICAgc3VibWl0VG86IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcblxuZXhwb3J0IGNvbnN0IHVybERhdGE6IE10dXJrVVJMRGF0YSA9IHtcbiAgICByYXc6IHVybFBhcmFtcy50b1N0cmluZygpLFxuICAgIGFzc2lnbm1lbnRJRDogdXJsUGFyYW1zLmdldCgnYXNzaWdubWVudElkJyksXG4gICAgaGl0SUQ6IHVybFBhcmFtcy5nZXQoJ2hpdElkJyksXG4gICAgd29ya2VySUQ6IHVybFBhcmFtcy5nZXQoJ3dvcmtlcklkJyksXG4gICAgc3VibWl0VG86IHVybFBhcmFtcy5nZXQoJ3R1cmtTdWJtaXRUbycpLFxufTtcblxuZXhwb3J0IGNsYXNzIERhdGEge1xuICAgIHB1YmxpYyBsb2dzOiB7IFtldmVudFR5cGU6IHN0cmluZ106IFRyYWNrZXJFdmVudFtdIH0gPSB7fTtcbiAgICBwdWJsaWMgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIHB1YmxpYyBlcnJvcnM6IGFueVtdID0gW107XG4gICAgcHVibGljIHVybERhdGE6IE10dXJrVVJMRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHJhd010dXJrVVJMRGF0YTogTXR1cmtVUkxEYXRhKSB7XG4gICAgICAgIHRoaXMudXJsRGF0YSA9IHJhd010dXJrVVJMRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXRhID0gbmV3IERhdGEodXJsRGF0YSk7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7IGRhdGEgfSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgbm93IH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmNzXCI7XG5sb2coXCJldmVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjb25zdCBlbnVtIEFjdGlvbkVudW0ge1xuICBDTElDSyA9IFwiY2xpY2tcIixcbiAgQlVUVE9OID0gXCJidXR0b25cIixcbiAgU0NST0xMID0gXCJzY3JvbGxcIixcbiAgSElTVE9SWSA9IFwiaGlzdG9yeVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrZXJFdmVudCB7XG4gIGFjdGlvbjogc3RyaW5nO1xuICB0aW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1RyYWNrZXJFdmVudChvYmo6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgb2JqLmFjdGlvbiA9IGFjdGlvbjtcbiAgb2JqLnRpbWUgPSBub3coKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhY2tlckV2ZW50KG9iajogYW55KTogb2JqIGlzIFRyYWNrZXJFdmVudCB7XG4gIHJldHVybiBvYmouYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqLnRpbWUgIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VUcmFja2VyRXZlbnQ8VD4gaW1wbGVtZW50cyBUcmFja2VyRXZlbnQge1xuICBwdWJsaWMgY3VzdEV2OiBDdXN0b21FdmVudDtcbiAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgdGltZTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihhY3Rpb246IHN0cmluZywgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDxUPiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuY3VzdEV2ID0gbmV3IEN1c3RvbUV2ZW50KGFjdGlvbiwgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy50aW1lID0gbm93KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRldGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0RXYuZGV0YWlsO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBDbGlja0V2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBpZDogc3RyaW5nO1xufT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZXZlbnRJbml0RGljdD86XG4gICAgICB8IEN1c3RvbUV2ZW50SW5pdDx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpZDogc3RyaW5nIH0+XG4gICAgICB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC54ID0geDtcbiAgICB0aGlzLmRldGFpbC55ID0geTtcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBCdXR0b25FdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGtleTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uQ0xJQ0ssIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLmtleSA9IGtleTtcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBIaXN0b3J5RXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcbiAgdXJsOiBzdHJpbmc7XG4gIGV4dHJhPzogYW55O1xufT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBleHRyYT86IGFueSxcbiAgICBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PHsgdXJsOiBzdHJpbmcgfT4gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5ISVNUT1JZLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC51cmwgPSB1cmw7XG4gICAgdGhpcy5kZXRhaWwuZXh0cmEgPSBleHRyYTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBUcmFja2VyRXZlbnQgfSBmcm9tIFwiLi9ldmVudFwiO1xubG9nKFwicmVjZWl2ZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgRXZlbnRSZWNlaXZlciB7XG4gIHByaXZhdGUgbWFwID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIGVtaXR0ZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcblxuICBwdWJsaWMgcmVnaXN0ZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGNhbGxiYWNrPzogKGV2ZW50OiBUcmFja2VyRXZlbnQpID0+IHZvaWQpIHtcbiAgICB0aGlzLmVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrRXYgPSAoKGV2ZW50IGFzIHVua25vd24pIGFzIEN1c3RvbUV2ZW50KVxuICAgICAgICAuZGV0YWlsIGFzIFRyYWNrZXJFdmVudDtcbiAgICAgIGlmIChpc1RyYWNrZXJFdmVudCh0cmFja0V2KSAmJiBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayh0cmFja0V2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMubWFwLnNldChldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZG9FdmVudChldmVudDogVHJhY2tlckV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLm1hcC5nZXQoXCJcIiArIGV2ZW50LmFjdGlvbik7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwiLi8uLi9yb3V0ZXIvaGlzdG9yeVwiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5sb2coXCJiYW5uZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgVG9wQmFubmVyIHtcbiAgcHVibGljIHN0YXRpYyBzaG93KCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID0gdHJ1ZTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgdHJ1ZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgZmFsc2UpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZENvbnRlbnQsIHRydWUpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID0gZmFsc2U7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgdHJ1ZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIGZhbHNlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCBmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRvRGlzcGxheUNoYW5nZSgpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA/IFRvcEJhbm5lci5oaWRlKCkgOiBUb3BCYW5uZXIuc2hvdygpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRkQXJyb3csIFwiY2xpY2tcIiwgVG9wQmFubmVyLmRvRGlzcGxheUNoYW5nZSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzaG93aW5nID0gdHJ1ZTtcbn1cblxuRC5hZGRFdmVudExpc3RlbmVyKFwibXR1cmstdG9wLWJhbm5lci1iYWNrXCIsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKEhpc3RvcnkuY2FuQmFja3dhcmQoKSkge1xuICAgIFJvdXRlci5sb2FkV2l0aFBhdGhQcmVmaXgoSGlzdG9yeS5iYWNrd2FyZCgpKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIlRoZXJlIGlzIG5vIHBhZ2UgaGlzdG9yeSB0byBnbyBiYWNrIGZvciBhdCB0aGlzIHRpbWUhXCIpO1xuICB9XG59KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSBcIi4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJkb2N1bWVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBEIHtcbiAgcHVibGljIHN0YXRpYyBkb2M6IERvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgcHVibGljIHN0YXRpYyBlbGVtKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBELmlkKGVsZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbSBhcyBFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheShlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgZWxlbSA9IEQuZWxlbShlbGVtKTtcbiAgICBpZiAoc2hvdykge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaWQoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50ID0gRC5kb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgd2FzIG5vdCBmb3VuZCwgaWQ6IDwke2lkfT4uYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc3RhdGljIGNsYXooY2xhejogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xheik7XG4gIH1cbiAgcHVibGljIHN0YXRpYyB0YWcodGFnOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gRC5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGltYWdlKGlkOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgZXJyb3IoKCkgPT4gRC5pZChpZCkuc2V0QXR0cmlidXRlKFwic3JjXCIsIHVybCkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRFdmVudExpc3RlbmVyKFxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGxpc3RlbmVyOiAoZTogRXZlbnQpID0+IGFueVxuICApIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IHdyYXBwZXJGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsaXN0ZW5lcihlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgICAoZWxlbSBhcyBFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHdyYXBwZXJGdW5jKTtcbiAgICByZXR1cm4gd3JhcHBlckZ1bmM7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVhY2goZWxlbTogRWxlbWVudCB8IHN0cmluZywgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnkpIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcHBseShjaGlsZHJlbltpXSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlYWNoUmVjdXIoXG4gICAgZWxlbTogRWxlbWVudCB8IHN0cmluZyxcbiAgICBhcHBseTogKG5vZGU6IEVsZW1lbnQpID0+IGFueVxuICApIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgYXBwbHkoY2hpbGQpO1xuICAgICAgRC5lYWNoUmVjdXIoY2hpbGQsIGFwcGx5KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZTxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICB0YWdOYW1lOiBLLFxuICAgIG9wdGlvbnM/OiBFbGVtZW50Q3JlYXRpb25PcHRpb25zXG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xubG9nKCdlbGVtZW50IGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vKipcbiAqIFRoZXNlIGFyZSBlbGVtZW50cyB0aGF0IGFyZSBpbiBldmVyeSBzaW5nbGUgcHJvamVjdC4gRXZlbiBpZiB0aGV5IGFyZSBub3QgdXNlZCB0aGV5IHNob3VsZFxuICogYmUgcGxhY2UgaW4gdGhlIHByb2plY3QgYW5kIGRpc3BsYXkgc2hvdWxkIGJlIHNldCB0byBub25lLiBUaGlzIHNpbXBsaWZpZXMgY29uZmlndXJhdGlvblxuICogYW5kIHNvbWUgY29tbW9uIGZ1bmN0aW9ucyBhbmQgYWxsb3dzIGxlc3MgbnVsbCBjaGVja3MgdG8gYmUgcGVyZm9ybWVkIG92ZXJhbGwuIElmIHRoZVxuICogZWxlbWVudCBkb2VzIG5vdCBleGlzdCBhdCBydW4gdGltZSBhbiBlbXB0eSBkaXYgd2l0aCB0aGF0IGlkIGlzIGNyZWF0ZWQgYW5kIGl0cyBkaXNwbGF5XG4gKiBpcyBzZXQgdG8gbm9uZSB0aGVuIGFwcGVuZGVkIHRvIHRoZSBib2R5LlxuICovXG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZ2V0IGFuIGVsZW1lbnQsIGlmIHVuc3VjY2Vzc2Z1bCwgY3JlYXRlcyBkaXYgd2l0aCBpZCBhbmQgYXBwZW5kcyB0byBib2R5LlxuICpcbiAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgZWxlbWVudCB0byByZXRyaWV2ZS5cbiAqL1xuZnVuY3Rpb24gbWFrZUVsZW1JZk5vdEV4aXN0KGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IGVsZW07XG4gICAgdHJ5IHtcbiAgICAgICAgZWxlbSA9IEQuaWQoaWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlbGVtID0gRC5jcmVhdGUoJ2RpdicpO1xuICAgICAgICBlbGVtLmlkID0gaWQ7XG4gICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xufVxuXG4vKipcbiAqIENvbW1vbmx5IGFjY2Vzc2VkIGVsZW1lbnRzLCBhbGxvd3MgZm9yIGNsZWFyZXIgZG9tIG1hbmlwIG9uIHRoZXNlIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudHMgPSB7XG4gICAgZG9jdW1lbnQ6IEQuZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICB3cmFwcGVyOiBtYWtlRWxlbUlmTm90RXhpc3QoJ3dyYXBwZXInKSxcbiAgICBodG1sTG9jOiBtYWtlRWxlbUlmTm90RXhpc3QoJ2h0bWwtbG9jJyksXG4gICAgaW5uZXJCb2R5OiBtYWtlRWxlbUlmTm90RXhpc3QoJ2lubmVyLWJvZHknKSxcbiAgICBkZERvd246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tYnV0dG9uJyksXG4gICAgZGRVcDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWNvbGxhcHNlLWJ1dHRvbicpLFxuICAgIGRkQ29udGVudDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50JyksXG4gICAgYmFja0J1dHRvbjogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWJhY2snKSxcbiAgICBkZEFycm93OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItYXJyb3cnKSxcbiAgICBtdFRvcEJhbm5lclRleHQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci10ZXh0JyksXG4gICAgbXRTY2VuYXJpb0NvbnRleHQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnc2NlbmFyaW9fY29udGV4dCcpLFxuICAgIG10U2NlbmFyaW9RdWVzdGlvbjogbWFrZUVsZW1JZk5vdEV4aXN0KCdzY2VuYXJpb19xdWVzdGlvbicpLFxuICAgIGxvZ0ZpbGVJbnB1dDogbWFrZUVsZW1JZk5vdEV4aXN0KFxuICAgICAgICAnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudC1sb2ctZmlsZS1pbnB1dCdcbiAgICApLFxuICAgIHN1Ym1pdEZvcm06IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstc3VibWl0LWZvcm0nKSxcbiAgICBtb2RhbDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtb2RhbCcpLFxufTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLy4uL2RvbS9lbGVtZW50cyc7XG5sb2coJ2h0bWwgbG9jIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgZW51bSBBcHBFbnVtIHtcbiAgICBJTkZPUk1BVElPTl9GT1JBR0lORyA9ICdpbmZvcm1hdGlvbi1mb3JhZ2luZycsXG4gICAgQ09HTklUSVZFX0xPQUQgPSAnY29nbml0aXZlLWxvYWQnLFxuICAgIEdFTkRFUl9NQUcgPSAnZ2VuZGVyLW1hZycsXG4gICAgRVJST1IgPSAnZXJyb3InLFxufVxuXG5leHBvcnQgZW51bSBNb2RlRW51bSB7XG4gICAgUkVBTCA9ICdyZWFsJyxcbiAgICBTQU5EQk9YID0gJ3NhbmRib3gnLFxuICAgIFRFU1QgPSAndGVzdCcsXG4gICAgRVJST1IgPSAnZXJyb3InLFxufVxuXG5leHBvcnQgY2xhc3MgSFRNTExvYyB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMuaHRtbExvYztcbiAgICBwdWJsaWMgc3RhdGljIGFwcDogQXBwRW51bTtcbiAgICBwdWJsaWMgc3RhdGljIG1vZGU6IE1vZGVFbnVtO1xuICAgIHB1YmxpYyBzdGF0aWMgc2NlbmFyaW86IHN0cmluZztcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XG4gICAgICAgIEhUTUxMb2MuYXBwID0gKEhUTUxMb2MuZWxlbS5kYXRhc2V0LmFwcCBhcyBBcHBFbnVtKSB8fCBBcHBFbnVtLkVSUk9SO1xuICAgICAgICBIVE1MTG9jLm1vZGUgPVxuICAgICAgICAgICAgKEhUTUxMb2MuZWxlbS5kYXRhc2V0Lm1vZGUgYXMgTW9kZUVudW0pIHx8IE1vZGVFbnVtLkVSUk9SO1xuICAgICAgICBIVE1MTG9jLnNjZW5hcmlvID0gSFRNTExvYy5lbGVtLmRhdGFzZXQuc2NlbmFyaW8gfHwgJ2Vycm9yJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuL2VsZW1lbnRzJztcbmxvZygnbW9kYWwgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMubW9kYWw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoc3JjOiBzdHJpbmcpIHtcbiAgICAgICAgTW9kYWwuZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgYGxlZnQ6ICR7TWF0aC5yb3VuZCh3aW5kb3cucGFnZVhPZmZzZXQpfXB4OyB0b3A6ICR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICl9cHg7YFxuICAgICAgICApO1xuICAgICAgICBNb2RhbC5lbGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdoaWRlLW1vZGFsJywgJ3Nob3ctbW9kYWwnKTtcbiAgICAgICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjID0gc3JjO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub3Njcm9sbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICAgICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnc2hvdy1tb2RhbCcsICdoaWRlLW1vZGFsJyk7XG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9ICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xuICAgIH1cbn1cblxuRC5hZGRFdmVudExpc3RlbmVyKE1vZGFsLmVsZW0sICdjbGljaycsIChlKSA9PiB7XG4gICAgTW9kYWwuaGlkZSgpO1xufSk7XG5ELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIobm9kZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wLCBub3cgfSBmcm9tICcuLy4uL3V0aWxzL2Z1bmNzJztcbmxvZygnc2Nyb2xsIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vKipcbiAqIExpbmVhciBpbXBsZW1lbnRhdGlvbiBvZiBzY3JvbGxpbmcuXG4gKiBGb2xsb3dzIHRoZSBzaW5nbGV0b24gcGF0dGVybiwgY2FsbCBkbyB0byBzdGFydCBhIHNjcm9sbCBvcGVyYXRpb24uXG4gKlxuICogSWYgYSBzY3JvbGwgaXMgY2FsbGVkIHdoZW4gYW5vdGhlciBzY3JvbGwgaGFzIGFscmVhZHkgYmVndW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLCBidXQgdGhlIGZpcnN0IHNjcm9sbCB3aWxsIGNvbnRpbnVlIHVudGlsIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY3JvbGwge1xuICAgIHB1YmxpYyBzdGF0aWMgU1RFUF9JTl9NUyA9IDE3O1xuXG4gICAgcHVibGljIHN0YXRpYyBjYWxsYmFjayhcbiAgICAgICAgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgPSAyMDAsXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnkgPSBub29wXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmIChTY3JvbGwucnVubmluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgbWFrZSBtdWx0aXBsZSBjYWxscyB0byBzY3JvbGwgYXQgdGhlIHNhbWUgdGltZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFNjcm9sbC5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb2xkQ29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3Iob2xkQ29tcGxldGUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBjb21wbGV0ZSkuYXR0ZW1wdFNjcm9sbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcHJvbWlzZShlbmRQb3M6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDIwMCkge1xuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICByZXNvbHZlOiAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgIHJlamVjdDogKGFyZzA6IGFueSkgPT4gdm9pZFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuUmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKGVuZFBvcywgZHVyYXRpb24sIHJ1blJlc29sdmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dGVtcHRTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBTY3JvbGwoMCwgMCwgbm9vcCk7XG4gICAgcHJpdmF0ZSBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2Nyb2xsJykpO1xuICAgICAgICAgICAgY29tcGxldGUoYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gU2Nyb2xsLnJ1bm5pbmc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4gICAgKTogU2Nyb2xsIHtcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNTY3JvbGxBbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGN1clRpbWUgPSBub3coKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1heChcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAodGhpcy5kdXJhdGlvbiAtIGN1clRpbWUpIC8gU2Nyb2xsLlNURVBfSU5fTVNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY3VyUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCh0aGlzLmVuZFBvcyAtIGN1clBvcykgLyBzdGVwcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5jYWxjU2Nyb2xsQW1vdW50KCkpO1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSB0aGlzLmVuZFBvcykge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuc2Nyb2xsKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdHRlbXB0U2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICBpZiAoISgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuc2Nyb2xsKDAsIE51bWJlcih0aGlzLmVuZFBvcykpO1xuICAgICAgICAgICAgLy8gKHdpbmRvdyBhcyBXaW5kb3cpLnNjcm9sbCh7IHRvcDogdGhpcy5lbmRQb3MsIGxlZnQ6IDAsIGJlaGF2aW9yOiAnYXV0bycgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3MnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi8uLi91dGlscy9xX3BhcmFtcyc7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vZWxlbWVudHMnO1xubG9nKCdzdWJtaXQgZm9ybSBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGludGVyZmFjZSBBbGxvd1N1Ym1pc3Npb24ge1xuICAgIGFsbG93KCk6IHN0cmluZyB8IG51bGw7XG4gICAgcHJlU3VibWl0KC4uLmFyZ3M6IGFueSk6IGFueTtcbn1cblxuY29uc3QgayA9ICdOY0YyV1JrVWJmNXR6ajRiSXZJOTgxRnFtUzZwTWxPODNnMmo3dTVSJztcbmNvbnN0IGdhdGUgPSAnaHR0cHM6Ly8yeWtvcHExb2hhLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL1BST0QvbG9ncyc7XG5cbmNvbnN0IEFsbG93U3VibWlzc2lvbkRlZmF1bHQ6IEFsbG93U3VibWlzc2lvbiA9IHtcbiAgICBhbGxvdzogKCkgPT4gbnVsbCxcbiAgICBwcmVTdWJtaXQ6IG5vb3AsXG59O1xuXG5leHBvcnQgY2xhc3MgU3VibWl0Rm9ybSB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMuc3VibWl0Rm9ybSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHVibGljIHN0YXRpYyBhbGxvd1N1Ym1pdERlZmF1bHQgPSB7IGFsbG93OiAoKSA9PiB0cnVlLCBwcmVTdWJtaXQ6IG5vb3AgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoXG4gICAgICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uID0gQWxsb3dTdWJtaXNzaW9uRGVmYXVsdFxuICAgICkge1xuICAgICAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBhbGxvd2VkID0gYWxsb3dTdWJtaXNzaW9uLmFsbG93KCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHFwID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5yYXcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEID0gcXAuZ2V0KCdhc3NpZ25tZW50SWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQgPSBxcC5nZXQoJ2hpdElkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLndvcmtlcklEID0gcXAuZ2V0KCd3b3JrZXJJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5zdWJtaXRUbyA9XG4gICAgICAgICAgICAgICAgICAgIHFwLmdldCgndHVya1N1Ym1pdFRvJykgKyAnL210dXJrL2V4dGVybmFsU3VibWl0JztcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnYXNzaWdubWVudC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybERhdGEuaGl0SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKEQuaWQoJ2hpdC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLnRhc2sgPSB1cmxQYXJhbXMuZ2V0KFwidGFnXCIpXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5kYXRhLnJlc3BvbnNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWFyZWFcIikudmFsdWVcbiAgICAgICAgICAgICAgICAvLyBkYXRhLmRhdGEucmVzcG9uc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtYXJlYVwiKSEudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtYXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0QXJlYSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSB0ZXh0QXJlYS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcblxcbkRBVEEgRk9SIFRBU0s6IFwiICsgZGF0YS5kYXRhLnRhc2sgKyBcIlxcblwiKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICAgICAgICAgICBhbGVydChcIk9wZW4gY29uc29sZSB0byBzZWUgdXNlciBkYXRhLiBQbGVhc2UgcmVjb3JkIGludG8gYSB0ZXh0IGRvY3VtZW50LlwiKVxuXG4gICAgICAgICAgICAgICAgLy8gKEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50KS5hY3Rpb24gPSBkYXRhLnVybERhdGFcbiAgICAgICAgICAgICAgICAvLyAgICAgLnN1Ym1pdFRvIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICAvLyBhbGxvd1N1Ym1pc3Npb24ucHJlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGdhdGUsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAneC1hcGkta2V5JzogayxcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2FuZGJveDogcGFyYW1zLnNhbmRib3gsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3dXN0bF9rZXk6IHBhcmFtcy53dXN0bF9rZXksXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0OiBwYXJhbXMucHJvamVjdCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZXJhdGlvbjogcGFyYW1zLml0ZXJhdGlvbixcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRhZzogcGFyYW1zLnRhZyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFzc2lnbm1lbnRJRDogZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhpdElEOiBkYXRhLnVybERhdGEuaGl0SUQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3b3JrZXJJRDogZGF0YS51cmxEYXRhLndvcmtlcklELFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbG9nOiBkYXRhLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgICAgICAgICAvLyB9KTsgLy8gVE9ETzogdmVyaWZ5IHRoaXMgYWN0dWFsbHkgd29ya3NcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXdhaXQgcmVzcC5qc29uKCkpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ1lvdSBtYWRlIGEgYmFkIHJlcXVlc3Qgd2l0aCB5b3VyIHN1Ym1pc3Npb24uIFRoZSBzZXJ2ZXIgdGhpbmtzIHRoYXQgeW91IG1hZGUgdGhpcyBlcnJvcjogJyArXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKGF3YWl0IHJlc3AuanNvbigpKS5lcnJvclxuICAgICAgICAgICAgICAgIC8vICAgICApO1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIFN1Ym1pdEZvcm0uZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIC8vICAgICAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgU3VibWl0Rm9ybS5zdWJtaXRGdW5jXG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICAvLyBTdWJtaXRGb3JtLmVsZW0uc3VibWl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGFsbG93ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBTdWJtaXRGb3JtLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgU3VibWl0Rm9ybS5zdWJtaXRGdW5jKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdWJtaXRGdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnk7XG59XG4iLCJpbXBvcnQgeyBUb3BCYW5uZXIgfSBmcm9tIFwiLi9iYW5uZXJcIjtcbmltcG9ydCB7IEhUTUxMb2MgfSBmcm9tIFwiLi9odG1sX2xvY1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tlckVsZW1lbnRzIHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cFRyYWNrZXJFbGVtZW50cygpIHtcbiAgICAvLyBzZXR1cCBkb20gZWxlbWVudHNcbiAgICBUb3BCYW5uZXIuc2V0dXAoKTtcbiAgICBIVE1MTG9jLnNldHVwKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuLy4uL3RyYWNrZXIvdHJhY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeUVudHJ5IHtcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuO1xuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeTtcbiAgICBjdXJyVVJMOiBzdHJpbmc7XG4gICAgZXh0cmE/OiBhbnk7XG4gICAgbmV4dEVudHJpZXM6IEhpc3RvcnlFbnRyeVtdO1xufVxuXG5mdW5jdGlvbiBuZXdIaXN0b3J5RW50cnkoXG4gICAgY3VyclVSTDogc3RyaW5nLFxuICAgIGhhc1ByZXZVUkw6IGJvb2xlYW4sXG4gICAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5LFxuICAgIGV4dHJhPzogYW55XG4pOiBIaXN0b3J5RW50cnkge1xuICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoJ2hpc3RvcnknKSh7IHVybDogY3VyclVSTCwgZXh0cmEgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VyclVSTCxcbiAgICAgICAgaGFzUHJldlVSTCxcbiAgICAgICAgcHJldkVudHJ5LFxuICAgICAgICBleHRyYSxcbiAgICAgICAgbmV4dEVudHJpZXM6IFtdLFxuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5IHtcbiAgICBwdWJsaWMgc3RhdGljIGZvcndhcmQodXJsOiBzdHJpbmcsIGV4dHJhPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIHRydWUsIEhpc3RvcnkuY3Vycmhpc3RvcnksIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5uZXh0RW50cmllcy5wdXNoKGhpc3RFbnQpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbkJhY2t3YXJkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5oYXNQcmV2VVJMICYmXG4gICAgICAgICAgICAhSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnk/LmV4dHJhPy53cmFwcGVyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBiYWNrd2FyZCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIUhpc3RvcnkuY2FuQmFja3dhcmQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ28gYmFjayBhbnkgZnVydGhlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSk7XG4gICAgICAgIGNvbnN0IHByZXZFbnRyeSA9IEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5IGFzIEhpc3RvcnlFbnRyeTtcbiAgICAgICAgY29uc3QgbmV4dFVSTCA9IHByZXZFbnRyeS5jdXJyVVJMO1xuICAgICAgICBjb25zdCBoaXN0RW50ID0gbmV3SGlzdG9yeUVudHJ5KFxuICAgICAgICAgICAgbmV4dFVSTCxcbiAgICAgICAgICAgIHByZXZFbnRyeS5oYXNQcmV2VVJMLFxuICAgICAgICAgICAgcHJldkVudHJ5LnByZXZFbnRyeSxcbiAgICAgICAgICAgIHsgYmFjazogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgICAgICByZXR1cm4gbmV4dFVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKHVybDogc3RyaW5nLCBleHRyYT86IGFueSkge1xuICAgICAgICBIaXN0b3J5LmZpcnN0SGlzdG9yeSA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIGZhbHNlLCB1bmRlZmluZWQsIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IEhpc3RvcnkuZmlyc3RIaXN0b3J5O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZpcnN0SGlzdG9yeTogSGlzdG9yeUVudHJ5O1xuICAgIHByaXZhdGUgc3RhdGljIGN1cnJoaXN0b3J5OiBIaXN0b3J5RW50cnk7XG59XG5cbih3aW5kb3cgYXMgYW55KS5oID0gSGlzdG9yeTtcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi4vZG9tL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuLi9kb20vZWxlbWVudHNcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL2RvbS9tb2RhbFwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBub29wIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmNzXCI7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSBcIi4uL3V0aWxzL2h0bWxfbG9hZGVyXCI7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xubG9nKFwicm91dGVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kZSB7XG4gIE9GRixcbiAgT04sXG4gIFNUQU5EQVJEX0FMTE9XQU5DRVMsXG59XG5cbi8vIFRPRE86IE5lZWQgdG8gaW1wcm92ZSB0aGlzIHRvIHRha2UgaW4gYSBmdW5jdGlvbiBmb3IgdGhlIGFsbG93YW5jZSBvciByZWR1Y2UgYWJzdHJhY3RuZXNzIG92ZXJhbGwuXG5cbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZHVsZSB7XG4gIEEgPSBcIkFcIixcbiAgSU1HID0gXCJJTUdcIixcbiAgRk9STSA9IFwiRk9STVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlckNvbmZpZyB7XG4gIG1vZHVsZTogUm91dGVyTW9kdWxlO1xuICBtb2RlOiBSb3V0ZXJNb2RlO1xufVxuXG5pbnRlcmZhY2UgRnVsbFJvdXRlckNvbmZpZyBleHRlbmRzIFJvdXRlckNvbmZpZyB7XG4gIHNldHVwKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCk6IGFueTtcbn1cblxuZnVuY3Rpb24gdGVzdE9uKGVsZW06IEVsZW1lbnQsIGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gIHJldHVybiAoXG4gICAgZWxlbS50YWdOYW1lID09PSBjb25maWcubW9kdWxlICYmXG4gICAgKGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLk9OIHx8XG4gICAgICBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTKVxuICApO1xufVxuZnVuY3Rpb24gdGVzdEFsbG93YW5jZShjb25maWc6IFJvdXRlckNvbmZpZykge1xuICByZXR1cm4gY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUztcbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG4gIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdTID0gbmV3IFJlZ0V4cChcIiNcIik7XG4gIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSBuZXcgUmVnRXhwKFwiXiRcIik7XG4gIHB1YmxpYyBzdGF0aWMgQVRfU1lNQk9MID0gbmV3IFJlZ0V4cChcIkBcIik7XG5cbiAgLy8gcHVibGljIHN0YXRpYyBIQVNIX1RBR19SRVNQT05ERVIgPSBub29wO1xuICAvLyBFc3NlbnRpYWxseSBpZiBsaW5rcyBhcmUganVzdCBoYXNoZXMsIHN0aWxsIHJldHVybnMgbm9vcCwgYnV0IGlmIHRoZXkgaGF2ZSBwYXRoIGFuZCBoYXNoXG4gIC8vIHRoZXkgdXNlIHRoZSBTUEEgbmF2XG4gIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBjb25zdCByYXdIcmVmID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIjtcbiAgICBpZiAocmF3SHJlZi5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmF3SHJlZi5zbGljZSgxKSk7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ3Jvc3MtcGFnZSBsaW5rIHdpdGggaGFzaCAoZS5nLiB0ZWRkeSBiZWFycyAtPiBlbnJpY2htZW50I2FydCkgLSB1c2UgU1BBXG4gICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZXZlbnQgYXMgTW91c2VFdmVudCk7XG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgRU1QVFlfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0xfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBwdWJsaWMgc3RhdGljIHBhdGhQcmVmaXggPSBcIlwiO1xuXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlKGNvbmZpZ3M6IFJvdXRlckNvbmZpZ1tdLCBwYXRoUHJlZml4OiBzdHJpbmcpIHtcbiAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgUm91dGVyLmNvbmZpZ3Muc2V0KGNvbmZpZy5tb2R1bGUsIFJvdXRlci51cGdyYWRlQ29uZmlnKGNvbmZpZykpO1xuICAgIH0pO1xuICAgIFJvdXRlci5wYXRoUHJlZml4ID0gcGF0aFByZWZpeDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgIEQuZWFjaFJlY3VyKGVsZW0sIChub2RlKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiBSb3V0ZXIuY29uZmlncy52YWx1ZXMoKSkge1xuICAgICAgICBpZiAodGVzdE9uKG5vZGUsIGNvbmZpZykpIHtcbiAgICAgICAgICBjb25maWcuc2V0dXAoY29uZmlnLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBTVEFOREFSRF9MSU5LX0xJU1RFTkVSKGU6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gZXJyb3IoYXN5bmMgKCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICBjb25zdCB1cmwgPSB0YXJnZXQuaHJlZjtcbiAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICBhd2FpdCBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld1BhZ2VMb2FkXCIpKTtcbiAgICAgIGNvbnN0IGhhc2ggPSBuZXcgVVJMKHVybCkuaGFzaDtcbiAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgIC8vIFlvdSBnb3R0YSB3YWl0IGZvciB0aGUgcGFnZSB0byBsb2FkIHNvIHRoZSBET00gaXMgdXBkYXRlZCBmb3IgdGhlIHNjcm9sbCBsb2NhdGlvblxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCAzNTApKTtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoLnNsaWNlKDEpKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9XG4gICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICBjb25zdCBoZWFkZXJPZmZzZXQgPSA1MDtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCAtIGhlYWRlck9mZnNldCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIE9OX0NPTVBMRVRFX1NMTChwb3N0OiAoZTogTW91c2VFdmVudCkgPT4gYW55KSB7XG4gICAgcmV0dXJuIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlcnJvcihhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUpO1xuICAgICAgICBwb3N0KGUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgSU1BR0VfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIGVycm9yKCgpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgRk9STV9PRkZfTElTVEVORVIoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiQWxsIGZvcm1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBpbiB0aGUgdG9wIGhlYWRlciBhcmUgaW5hY3RpdmUuXCIsXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFsbG93YW5jZXNPbigpIHtcbiAgICBSb3V0ZXIucmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICB7IHJlZ2V4OiBSb3V0ZXIuRU1QVFksIGZ1bmM6IFJvdXRlci5FTVBUWV9SRVNQT05ERVIgfSxcbiAgICAgIHsgcmVnZXg6IFJvdXRlci5IQVNIX1RBR1MsIGZ1bmM6IFJvdXRlci5IQVNIX1RBR19SRVNQT05ERVIgfSxcbiAgICAgIHsgcmVnZXg6IFJvdXRlci5BVF9TWU1CT0wsIGZ1bmM6IFJvdXRlci5BVF9TWU1CT0xfUkVTUE9OREVSIH0sXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT2ZmKCkge1xuICAgIFJvdXRlci51bnJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgUm91dGVyLkVNUFRZLFxuICAgICAgUm91dGVyLkhBU0hfVEFHUyxcbiAgICAgIFJvdXRlci5BVF9TWU1CT0wsXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgIC4uLnJlZ2V4czogQXJyYXk8eyByZWdleDogUmVnRXhwOyBmdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkgfT5cbiAgKSB7XG4gICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PlxuICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLnNldChyZWdleC5yZWdleCwgcmVnZXguZnVuYyksXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJBbGxvd2FuY2UoLi4ucmVnZXhzOiBSZWdFeHBbXSkge1xuICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT4gUm91dGVyLmxpbmtBbGxvd2FuY2VzLmRlbGV0ZShyZWdleCkpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgY2xlYXJBbGxvd2FuY2VzKCkge1xuICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICBjb25zdCByZXQgPSBhd2FpdCBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdQYWdlTG9hZFwiKSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFdpdGhQYXRoUHJlZml4KHBhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTChSb3V0ZXIucGF0aFByZWZpeCArIHBhZ2UsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld1BhZ2VMb2FkXCIpKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgU2V0dXBGdW5jdGlvbnMgPSB7XG4gICAgQTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgYU5vZGUgPSBlbGVtIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaHJlZiA9IGFOb2RlLmhyZWY7XG4gICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlc3QgPSByZWdleC50ZXN0KGhyZWYpO1xuICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiAhdGVzdDtcbiAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgZnVuYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgIGlmIChocmVmLnN1YnN0cihocmVmLmxlbmd0aCAtIDMpID09PSBcInBkZlwiKSB7XG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIE1vZGFsLmRpc3BsYXkoaHJlZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIElNRzogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW1nTm9kZSA9IGVsZW0gYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChpbWdOb2RlLnNyYyk7XG4gICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIGZ1bmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudCksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICAgICAgUm91dGVyLklNQUdFX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIEZPUk06IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGZvcm1Ob2RlID0gZWxlbSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoZm9ybU5vZGUuc3JjKTtcbiAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcbiAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgZnVuYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcInN1Ym1pdFwiLCBSb3V0ZXIuRk9STV9PRkZfTElTVEVORVIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJzdWJtaXRcIiwgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIGNvbmZpZ3MgPSBuZXcgTWFwPFJvdXRlck1vZHVsZSwgRnVsbFJvdXRlckNvbmZpZz4oKTtcblxuICBwcml2YXRlIHN0YXRpYyBsaW5rQWxsb3dhbmNlczogTWFwPFJlZ0V4cCwgKGV2ZW50OiBFdmVudCkgPT4gYW55PiA9IG5ldyBNYXA8XG4gICAgUmVnRXhwLFxuICAgIChldmVudDogRXZlbnQpID0+IGFueVxuICA+KCk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGF0aFJlZ2V4ID0gL1xcLyhbXFx3XSsuaHRtbCkvO1xuXG4gIHByaXZhdGUgc3RhdGljIHVwZ3JhZGVDb25maWcoY29uZmlnOiBSb3V0ZXJDb25maWcpOiBGdWxsUm91dGVyQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlOiBjb25maWcubW9kdWxlLFxuICAgICAgbW9kZTogY29uZmlnLm1vZGUsXG4gICAgICBzZXR1cDogUm91dGVyLlNldHVwRnVuY3Rpb25zW2NvbmZpZy5tb2R1bGVdLFxuICAgIH07XG4gIH1cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UGF0aE5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJldCA9IFJvdXRlci5wYXRoUmVnZXguZXhlYyh1cmwpO1xuICAgIHJldHVybiByZXQgPT09IG51bGwgPyB1cmwgOiByZXQubGVuZ3RoID4gMSA/IHJldFsxXSA6IHVybDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNUcmFja2VyRXZlbnQsIG9iamVjdFRvVHJhY2tlckV2ZW50IH0gZnJvbSAnLi4vZGF0YS1sb2cvZXZlbnQnO1xuaW1wb3J0IHsgRXZlbnRSZWNlaXZlciB9IGZyb20gJy4uL2RhdGEtbG9nL3JlY2VpdmVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IFRyYWNrZXJFbGVtZW50cyB9IGZyb20gJy4uL2RvbS90cmFja2VyX2VsZW1zJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2csIHNldERlYnVnTGV2ZWwgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi91dGlscy9zY2VuYXJpb3MnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBBbGxvd1N1Ym1pc3Npb24sIFN1Ym1pdEZvcm0gfSBmcm9tICcuLy4uL2RvbS9zdWJtaXRfZm9ybSc7XG5cbmxvZygndHJhY2tlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrZXJDb25maWd1cmF0aW9uIHtcbiAgICBhbGxvd1N1Ym1pc3Npb246IEFsbG93U3VibWlzc2lvbjtcbiAgICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bTtcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XG4gICAga2V5UHJlZml4OiBzdHJpbmc7XG4gICAgc2V0dXAoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgbGFzdFBvcyA9IHsgeDogMCwgeTogMCwgdGltZTogMCB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU2NlbmFyaW8oc2NlbjogU2NlbmFyaW8pIHtcbiAgICAgICAgbGV0IHN1YiA9IHNjZW4uY29udGV4dDtcbiAgICAgICAgaWYgKHN1Yi5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAgc3ViID0gc3ViLnN1YnN0cmluZygwLCA1MCk7XG4gICAgICAgICAgICBjb25zdCBpbmRzID0gW1xuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignICcpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignLicpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignLCcpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignPycpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignIScpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnN0IGluZCA9IE1hdGgubWF4KC4uLmluZHMpO1xuICAgICAgICAgICAgc3ViID0gc3ViLnN1YnN0cmluZygwLCBpbmQpICsgJy4uLic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc2Nlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQgc2NlbicpO1xuICAgICAgICBFbGVtZW50cy5tdFRvcEJhbm5lclRleHQuaW5uZXJUZXh0ID0gc3ViO1xuICAgICAgICBFbGVtZW50cy5tdFNjZW5hcmlvQ29udGV4dC5pbm5lclRleHQgPSBzY2VuLmNvbnRleHQ7XG4gICAgICAgIEVsZW1lbnRzLm10U2NlbmFyaW9RdWVzdGlvbi5pbm5lclRleHQgPSBzY2VuLnF1ZXN0aW9uO1xuICAgICAgICBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzayA9IHNjZW4udGFnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnQoY29uZmlnOiBUcmFja2VyQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzZXREZWJ1Z0xldmVsKGNvbmZpZy5kZWJ1Z0xldmVsKTtcbiAgICAgICAgLy8gY29uZmlndXJlIHRyYWNrZXIgc3BlY2lmaWMgZWxlbWVudHNcbiAgICAgICAgVHJhY2tlckVsZW1lbnRzLnNldHVwVHJhY2tlckVsZW1lbnRzKCk7XG4gICAgICAgIFN1Ym1pdEZvcm0uc2V0dXAoY29uZmlnLmFsbG93U3VibWlzc2lvbik7XG4gICAgICAgIGRhdGEuZGF0YS50YXNrID0gRWxlbWVudHMuaHRtbExvYy5kYXRhc2V0LnRhc2s7XG4gICAgICAgIGNvbmZpZy5zZXR1cCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFdmVudChldmVudFR5cGU6IHN0cmluZykge1xuICAgICAgICBkYXRhLmxvZ3NbZXZlbnRUeXBlXSA9IFtdO1xuICAgICAgICB0aGlzLnJlY2VpdmVyLnJlZ2lzdGVyKGV2ZW50VHlwZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkYXRhLmxvZ3NbZXZlbnRUeXBlXS5wdXNoKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gKGV2RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2RGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVHJhY2tlckV2ZW50KGV2RGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VG9UcmFja2VyRXZlbnQoZXZEYXRhLCBldmVudFR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVyLmRvRXZlbnQoZXZEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0dGFjaERhdGEoa2V5OiBzdHJpbmcsIGF0dHJpYnV0ZTogYW55KSB7XG4gICAgICAgIGRhdGEuZGF0YVtrZXldID0gYXR0cmlidXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIGNvbXB1dGU6ICh2YWw6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIGRhdGEuZGF0YVtuYW1lXSA9IGNvbXB1dGUoZGF0YS5kYXRhW25hbWVdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWNlaXZlciA9IG5ldyBFdmVudFJlY2VpdmVyKCk7XG59XG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vLi4vZGF0YS1sb2cvZGF0YVwiO1xubG9nKFwiY29uc29sZSB3cmFwcGVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVycm9yPFQ+KFxuICBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBUXG4pOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgcmV0dXJuIGVycm9ySE8oZnVuYykoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySE88VD4oXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcbik6ICguLi5hcmdzOiBhbnkpID0+IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gYXN5bmMgKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuYyhhcmdzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGF0YS5lcnJvcnMucHVzaChlcnJvcik7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIERlYnVnTGV2ZWxFbnVtIHtcbiAgTk9ORSA9IDEsXG4gIEJBU0lDID0gMixcbiAgREVUQUlMRUQgPSAzLFxufVxuXG5sZXQgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW0gPSBEZWJ1Z0xldmVsRW51bS5CQVNJQztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYnVnTGV2ZWwobGV2ZWw6IERlYnVnTGV2ZWxFbnVtKSB7XG4gIGRlYnVnTGV2ZWwgPSBsZXZlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlOiBzdHJpbmcsIGltcG9ydGFuY2U6IERlYnVnTGV2ZWxFbnVtKSB7XG4gIGlmIChkZWJ1Z0xldmVsID49IGltcG9ydGFuY2UpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiZnVuY3MgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5leHBvcnQgZnVuY3Rpb24gbm93KCk6IG51bWJlciB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cbiIsImltcG9ydCB7IEQgfSBmcm9tICcuLi9kb20vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL2Z1bmNzJztcbmxvZygnaHRtbCBsb2FkZXIgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGUge1xuICAgIFtuYW1lOiBzdHJpbmddOiBFbGVtZW50O1xufVxuZXhwb3J0IGNsYXNzIEhUTUxMb2FkZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgQ0FDSEU6IENhY2hlID0ge307XG5cbiAgICBwdWJsaWMgc3RhdGljIGZpbmlzaCgpIHtcbiAgICAgICAgSFRNTExvYWRlci5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzRmluaXNoZWQoKSB7XG4gICAgICAgIHJldHVybiBIVE1MTG9hZGVyLmZpbmlzaGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2FjaGVIVE1MKG5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChIVE1MTG9hZGVyLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBjYWNoZSBuZXcgSFRNTCBlbnRpdGllcyBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRzbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RzLWxvYWQnKTtcbiAgICAgICAgdHNsLmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgICAgIHRzbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB0aGlzLkNBQ0hFW25hbWVdID0gdHNsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJQb3N0TG9hZEZ1bmMoZnVuYzogKCkgPT4gYW55KSB7XG4gICAgICAgIGxvZygncmVnc2l0ZXIgcG9zdCBsb2FkIGZ1bmN0aW9uJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICBIVE1MTG9hZGVyLnBvc3RMb2FkRnVuYyA9IGZ1bmM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKGh0bWw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2coJ2JlZ2luIGxvYWQnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IEQuZWxlbShlbGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWcgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5yZW1vdmVUYWdzRnJvbURvY3VtZW50RnJhZ21lbnQoZnJhZywgJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIubG9hZEFsbENhY2hlZEVsZW1lbnRzKGZyYWcpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgICAgICAgICAgICBsb2coJ2VuZCBsb2FkJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIucG9zdExvYWRGdW5jKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRVUkwodXJsOiBzdHJpbmcsIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIEhUTUxMb2FkZXIubG9hZChhd2FpdCBIVE1MTG9hZGVyLmdldEhUTUwodXJsKSwgZWxlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRIVE1MKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2coJ2JlZ2luIHJlcXVlc3QnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQobnVsbCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZygncmVzb2x2ZSByZXF1ZXN0JywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwb3N0TG9hZEZ1bmM6ICgpID0+IGFueSA9IG5vb3A7XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZW1vdmVUYWdzRnJvbURvY3VtZW50RnJhZ21lbnQoXG4gICAgICAgIGZyYWc6IERvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIHRhZ05hbWU6IHN0cmluZ1xuICAgICkge1xuICAgICAgICBmcmFnLnF1ZXJ5U2VsZWN0b3JBbGwodGFnTmFtZSkuZm9yRWFjaCgodGFnKSA9PiBmcmFnLnJlbW92ZUNoaWxkKHRhZykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZsYXR0ZW5UU0xvYWRUYWdzKCkge1xuICAgICAgICBsb2coJ0ZsYXR0ZW5pbmcnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgIGNvbnN0IHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgT2JqZWN0LmtleXMoSFRNTExvYWRlci5DQUNIRSkuZm9yRWFjaChcbiAgICAgICAgICAgIChuYW1lKSA9PlxuICAgICAgICAgICAgICAgIChIVE1MTG9hZGVyLkNBQ0hFW25hbWVdID0gSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFnKFxuICAgICAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSkgYXMgRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcyxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICkgYXMgRWxlbWVudClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBtdWx0aXBsZVRhYnMobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJldCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcmV0ICs9ICdcXHQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmxhdHRlblRTTG9hZFRhZyhcbiAgICAgICAgZWxlbTogRWxlbWVudCxcbiAgICAgICAgZmxhdHRlbmVkOiBTZXQ8c3RyaW5nPixcbiAgICAgICAgY291bnQ6IG51bWJlclxuICAgICk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgdGFicyA9IEhUTUxMb2FkZXIubXVsdGlwbGVUYWJzKGNvdW50KTtcbiAgICAgICAgaWYgKGNvdW50ID4gMTAwKSB7XG4gICAgICAgICAgICBhbGVydCgnQ2hlY2sgdGhlIGNvbnNvbGUsIGFuIGVycm9yIGhhcyBvY2N1cnJlZC4nKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnSXQgc2VlbXMgbGlrZSB5b3UgbWlnaHQgaGF2ZSBpbmZpbml0ZWx5IHJlY3Vyc2l2ZWx5IG5lc3RlZCB0YWdzLicgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuSGVyZSBhcmUgYWxsIG9mIHRoZSB0YWdzIHRoYXQgaGF2ZSBiZWVuIGZsYXR0ZW5lZCBzbyBmYXI6ICcgK1xuICAgICAgICAgICAgICAgICAgICBmbGF0dGVuZWQgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuSGVyZSBpcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBlbGVtZW50OiAnICtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgIGlmIChuYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsYXR0ZW5lZC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgndHMtbG9hZCcpLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFnKGUsIGZsYXR0ZW5lZCwgY291bnQgKyAxKTtcbiAgICAgICAgICAgIGlmIChjaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGUucmVwbGFjZVdpdGgoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZmxhdHRlbmVkLmFkZChuYW1lKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q2FjaGVkQ29udGVudChcbiAgICAgICAgbmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgICk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCB8fCBuYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5DQUNIRVtuYW1lXTtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkQWxsQ2FjaGVkRWxlbWVudHMoZnJhZzogRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBmcmFnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RzLWxvYWQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnJlcGxhY2VXaXRoKGNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuLi9kb20vZWxlbWVudHNcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9kb20vZG9jdW1lbnRcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImlkIGdlbmVyYXRvciBsb2FkZWRcIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIElER2VuZXJhdG9yIHtcbiAgcHVibGljIHN0YXRpYyByZXNldCgpIHtcbiAgICBJREdlbmVyYXRvci5pZENvdW50ID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG5leHQoKSB7XG4gICAgSURHZW5lcmF0b3IuaWRDb3VudCArPSAxO1xuICAgIHJldHVybiBJREdlbmVyYXRvci5wcmVmaXggKyBJREdlbmVyYXRvci5pZENvdW50O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhcHBseUlEKGVsZW06IEVsZW1lbnQpIHtcbiAgICBlbGVtLmlkID0gZWxlbS5pZCA/IGVsZW0uaWQgOiBJREdlbmVyYXRvci5uZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGFkZHMgaWRzIHRvIGFsbCBlbGVtZW50cyB0aGF0IGFyZSBiZWxvdyB0aGUgZ2l2ZW5cbiAgICogZWxlbWVudCBpbiB0aGUgaGVpcmFyY2h5LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbSAtIHRoZSBlbGVtZW50IHRvIHN0YXJ0IGFwcGx5aW5nIGlkcyB0byBpdHMgY2hpbGRyZW4uXG4gICAqICAgICAgICAgICAgICAgICAgV2lsbCBub3QgYXBwbHkgYW4gaWQgdG8gdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhcHBseVJlY3VyKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICBELmVhY2hSZWN1cihlbGVtLCB0aGlzLmFwcGx5SUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGlkcyB0byBhbGwgaHRtbCBlbGVtZW50cyBpbiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGluIHRoZSBET00gdGhhdCBkbyBub3QgaGF2ZSBpZHMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGF0dGFjaElkc1RvQWxsRWxlbWVudHMoKSB7XG4gICAgSURHZW5lcmF0b3IuYXBwbHlSZWN1cihFbGVtZW50cy5odG1sTG9jKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGlkQ291bnQgPSAwO1xuICBwcml2YXRlIHN0YXRpYyBwcmVmaXggPSBcImF1dG9fZ2VuX2lkX3VucV9cIjtcbn1cbiIsImNvbnN0IHFQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG5leHBvcnQgY29uc3QgcGFyYW1zID0ge1xuICAgIHd1c3RsX2tleTogJycsXG4gICAgc2FuZGJveDogZmFsc2UsXG4gICAgcHJvamVjdDogJycsXG4gICAgaXRlcmF0aW9uOiAwLFxuICAgIHRhZzogJycsXG59O1xudHJ5IHtcbiAgICBxUGFyYW1zLmZvckVhY2goY29uc29sZS5sb2cpO1xuICAgIGlmIChcbiAgICAgICAgWyd3dXN0bF9rZXknLCAnc2FuZGJveCcsICdwcm9qZWN0JywgJ2l0ZXJhdGlvbicsICd0YWcnXS5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygna2V5OiAnICsgcVBhcmFtcy5oYXMoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gcVBhcmFtcy5oYXMoa2V5KTtcbiAgICAgICAgfSlcbiAgICApIHtcbiAgICAgICAgcGFyYW1zLnd1c3RsX2tleSA9IHFQYXJhbXMuZ2V0KCd3dXN0bF9rZXknKSBhcyBzdHJpbmc7XG4gICAgICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoJ3NhbmRib3gnKSA9PT0gJ3RydWUnO1xuICAgICAgICBwYXJhbXMucHJvamVjdCA9IHFQYXJhbXMuZ2V0KCdwcm9qZWN0JykgYXMgc3RyaW5nO1xuICAgICAgICBwYXJhbXMuaXRlcmF0aW9uID0gcGFyc2VJbnQocVBhcmFtcy5nZXQoJ2l0ZXJhdGlvbicpIGFzIHN0cmluZywgMTApO1xuICAgICAgICBwYXJhbXMudGFnID0gcVBhcmFtcy5nZXQoJ3RhZycpIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbWlzc2luZyBxdWVyeSBwYXJhbXMnKTtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAnVGhpcyBISVQgaXMgbWlzc2luZyBuZWNjZXNzYXJ5IG1ldGFkYXRhLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLidcbiAgICAgICAgKTtcbiAgICB9XG59IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgYWxlcnQoZSk7XG4gICAgYWxlcnQoXG4gICAgICAgICdUaGlzIEhJVCBpcyBicm9rZW4sIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xuICAgICk7XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5cbmxvZyhcInJlYWR5IGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5cbmxldCByZWFkeSA9IGZhbHNlO1xuXG5sZXQgcmVzb2x2ZUZ1bmM6ICh2YWw6IGJvb2xlYW4pID0+IGFueTtcbmxldCByZWplY3RGdW5jO1xuY29uc3QgcmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWw6IGJvb2xlYW4pID0+IGFueSwgcmVqZWN0KSA9PiB7XG4gIHJlc29sdmVGdW5jID0gcmVzb2x2ZTtcbiAgcmVqZWN0RnVuYyA9IHJlamVjdDtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxvZyhcImRvY3VtZW50IGlzIHJlYWR5XCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgcmVhZHkgPSB0cnVlO1xuICByZXNvbHZlRnVuYyh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgcmV0dXJuIHJlYWR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gcmVhZHkgPyBQcm9taXNlLnJlc29sdmUodHJ1ZSkgOiByZWFkeVByb21pc2U7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFNjZW5hcmlvIHtcbiAgICBjb250ZXh0OiBzdHJpbmc7XG4gICAgcXVlc3Rpb246IHN0cmluZztcbiAgICB0YWc6IHN0cmluZztcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby12YXItcmVxdWlyZXNcbi8vIGV4cG9ydCBjb25zdCBzY2VuYXJpb3M6IFNjZW5hcmlvW10gPSByZXF1aXJlKCcuLy4uLy4uLy4uLy4uL3NjZW5hcmlvcy9zY2VuYXJpb3MuanNvbicpO1xuaW1wb3J0IHNjZW5hcmlvcyBmcm9tICcuLy4uLy4uLy4uLy4uL3NjZW5hcmlvcy9zY2VuYXJpb3MuanNvbic7XG5leHBvcnQgeyBzY2VuYXJpb3MgfTtcbih3aW5kb3cgYXMgYW55KS5zY2VuYXJpb3MgPSBzY2VuYXJpb3M7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBhY2NvcmRpb25zID0gRC5jbGF6KFwiYWNjb3JkaW9uXCIpO1xuICAgIGZvciAobGV0IGFjY0luZGV4ID0gMDsgYWNjSW5kZXggPCBhY2NvcmRpb25zLmxlbmd0aDsgKythY2NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IGFjY29yZGlvbnMuaXRlbShhY2NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgQWNjb3JkaW9uLmFjY29yZGlvbnMucHVzaChuZXcgQWNjb3JkaW9uKGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmFjY29yZGlvbnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFjY29yZGlvbnM6IEFjY29yZGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihvdXRlciwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzLFxuICAgICAgICAgICAgICAgIHRvIGhpZ2hsaWdodCB0aGUgYnV0dG9uIHRoYXQgY29udHJvbHMgdGhlIHBhbmVsICovXG4gICAgICB0aGlzLm91dGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgYWN0aXZlIHBhbmVsICovXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMub3V0ZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSB7XG4gIGNvbnNvbGUubG9nKFwiUHV0IHNvbWUgY29kZSBpbiBoZXJlIVwiKTtcbn1cbiIsImltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9kby1zb21ldGhpbmcnO1xuaW1wb3J0IHsgSFRNTENvbnRlbnQsIGl0ZW1zVG9DYWNoZSB9IGZyb20gJy4vaHRtbC1pbXBvcnRzJztcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gJy4vc2xpZGVzaG93JztcblxuLy8gUHV0IGFsbCBmdW5jdGlvbiBjYWxscyB0aGF0IG5lZWQgdG8gYmUgbWFkZSBvbiBldmVyeSBwYWdlIGxvYWQgaW5zaWRlIHRoZSBzZXR1cEFsbCBmdW5jdGlvbiBib2R5LlxuZXhwb3J0IGZ1bmN0aW9uIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKSB7XG4gICAgLy8gVE9ETzogUHV0IGFsbCBvcGVyYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGV2ZXIgcGFnZSBsb2FkIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgLy8gRm9yIGV4YW1wbGUgeW91IGNvdWxkIHdyaXRlOiBTdGlja3kuc2V0dXAoKVxuICAgIGRvU29tZXRoaW5nKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cEFsbCgpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocjogYW55KSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWRpbmcnKTtcbiAgICBTbGlkZXNob3cuc2V0dXBBbGwoKTtcbiAgICBBY2NvcmRpb24uc2V0dXBBbGwoKTtcbiAgICBQdXRTdHVkZW50UGFnZUxvYWRPcGVyYXRpb25zSW5zaWRlVGhpc1N0dWRlbnRCb2R5KCk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGVkJyk7XG59XG5cbml0ZW1zVG9DYWNoZS5mb3JFYWNoKChpdGVtOiBIVE1MQ29udGVudCkgPT4ge1xuICAgIEhUTUxMb2FkZXIuY2FjaGVIVE1MKGl0ZW0ubmFtZSwgaXRlbS5jb250ZW50KTtcbn0pO1xuKHdpbmRvdyBhcyBhbnkpLkhUTUxMb2FkZXIgPSBIVE1MTG9hZGVyO1xuXG5jb25zb2xlLmxvZygnZHluYW1pYy1kb20gbG9hZGVkJyk7XG4vLyBEbyBub3QgdG91Y2ggdGhpcyBsaW5lLCBuZWVkZWQgdG8gcmVpbml0aWFsaXplIGNvZGUgaW4gdGhlIGR5bmFtaWMtZG9tLnRzIHNldHVwQWxsIGZ1bmN0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV3UGFnZUxvYWQnLCAoKSA9PiBzZXR1cEFsbCgpKTtcbiIsImRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShpZDogc3RyaW5nKTogc3RyaW5nO1xuXG4vLyBUaGlzIGRlZmluZXMgdGhlIGRhdGEgdGhhdCBuZWVkcyB0byBiZSBwYXNzZWQgdG8gdGhlIEhUTUxMb2FkZXIgdG8gY2FjaGUgeW91ciBodG1sIGNvbnRlbnQuXG5leHBvcnQgaW50ZXJmYWNlIEhUTUxDb250ZW50IHtcbiAgICBuYW1lOiBzdHJpbmc7IC8vIFRoZSBuYW1lIHRoYXQgeW91IHdpbGwgdXNlIHRvIHJlZmVyZW5jZSB0aGUgY29udGVudCBpbiB5b3VyIGh0bWwgcGFnZXMuXG4gICAgY29udGVudDogc3RyaW5nOyAvLyBUaGUgYWN0dWFsIGh0bWwgc3RyaW5nIHRoYXQgd2lsbCBiZSBwdWxsZWQgZnJvbSB0aGUgc291cmNlIGZpbGUgdGhhdCB5b3Ugc3BlY2lmeS5cbn1cblxuLy8gQW4gSFRNTENvbnRlbnQgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhlIGZvbGxvd2luZzpcbi8vIHtcbi8vICAgICBuYW1lOiAnZm9vdGVyJyxcbi8vICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbi8vIH1cblxuLy8gVGhlbiB5b3UgY2FuIHJlZmVyZW5jZSB0aGF0IGNvbnRlbnQgaW4geW91ciBodG1sIHVzaW5nIHRoZSBmb2xsb3dpbmcgdGFnIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgbmFtZSBhdHRyaWJ1dGUuXG4vLyA8dHMtbG9hZCBkYXRhLW5hbWU9XCJoZWFkZXJcIj48L3RzLWxvYWQ+XG5cbi8vIFlvdSBjYW4gc3BlY2lmeSBhcyBtYW55IGFzIHlvdSB3YW50IGluc2lkZSBvZiB0aGUgYXJyYXkgYW5kIHRoZXkgd2lsbCBhbGwgYmUgYnVuZGxlZCB1cCB3aXRoIHlvdXIgd2Vic2l0ZS5cbi8vIE1ha2Ugc3VyZSB0byBtYWtlIGEgY29ycmVzcG9uZGluZyBodG1sIGZpbGUgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgZm9yIGVhY2ggZWxlbWVudCB5b3Ugc3BlY2lmeS5cblxuZXhwb3J0IGNvbnN0IGl0ZW1zVG9DYWNoZSA9IFtcbiAgICAvLyBGZWVsIGZyZWUgdG8gY2hhbmdlIHRoZSBjb250ZW50IGluc2lkZSBhbnkgb2YgdGhlIGh0bWwgZmlsZXMgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgdG8gc3VpdCB5b3VyIG5lZWRzLlxuICAgIHtcbiAgICAgICAgbmFtZTogJ2hlYWRlcicsXG4gICAgICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9oZWFkZXIuaHRtbCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnZm9vdGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2Zvb3Rlci5odG1sJyksXG4gICAgfSxcbiAgICAvLyBQdXQgbW9yZSBpdGVtcyBpbiB0aGUgYXJyYXkgYmVsb3cgaGVyZS5cbl07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvb3RlciBpZD1cXFwiY29sb3Bob25cXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiIHJvbGU9XFxcImNvbnRlbnRpbmZvXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci13aWRnZXRzXFxcIj5cXG4gICAgICA8YXNpZGUgY2xhc3M9XFxcIndpZGdldCBzaXRlLWNvbnRhY3RcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5OdXJzZXJ5IFNjaG9vbDwvaDI+XFxuICAgICAgICA8cD42OTI2IEZvcmVzdCBQYXJrIFBhcmt3YXk8L3A+XFxuICAgICAgICA8cD5TdC4gTG91aXMsIE1PIDYzMTMwPC9wPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInBob25lXFxcIj4zMTQtOTM1LTY2ODkgPHNwYW4+fDwvc3Bhbj4gRmF4OiAzMTQtOTM1LTcyNDk8L3A+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvbWFpbHRvOm51cnNlcnlAd3VzdGwuZWR1XFxcIj5udXJzZXJ5QHd1c3RsLmVkdTwvYT5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2FzaWRlPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC00XFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5Ib3VycyBvZiBPcGVyYXRpb248L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIENsYXNzZXMgbWVldCBNb24uIHRocm91Z2ggRnJpLjxicj5cXG4gICAgICAgICAgICAgIE1vcm5pbmc6IDktMTE6NDUgYS5tLjxicj5cXG4gICAgICAgICAgICAgIEFmdGVybm9vbjogMTI6MzAtMzoxNSBwLm0uPGJyPlxcbiAgICAgICAgICAgICAgRnVsbCBkYXk6IDkgYS5tLi0zOjE1IHAubS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC0zXFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5BcHBseSBmb3IgdGhlIE51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICBFeHBlcmllbmNlIHRoZSBpbm5vdmF0aXZlIGFwcHJvYWNoIGFuZCBkeW5hbWljIHRlYWNoaW5nXFxuICAgICAgICAgICAgICBlbnZpcm9ubWVudCBvZiB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5SZWdpc3RlciBOb3c8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtaW5mb1xcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImZvb3Rlci1jb3B5cmlnaHRcXFwiPsKpMjAxOSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZm9vdGVyPlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInd1c3RsLWJyYW5kaW5nXFxcIj5cXG4gIDxzdmdcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcbiAgICB3aWR0aD1cXFwiMzIxXFxcIlxcbiAgICBoZWlnaHQ9XFxcIjI4XFxcIlxcbiAgICB2aWV3Qm94PVxcXCIwIDAgMzIxIDI4XFxcIlxcbiAgICBjbGFzcz1cXFwid2FzaHUtbG9nb1xcXCJcXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ0aXRsZVxcXCJcXG4gID5cXG4gICAgPHRpdGxlIGlkPVxcXCJ0aXRsZVxcXCI+V2FzaGluZ3RvbiBVbml2ZXJzaXR5IGluIFN0LiBMb3VpczwvdGl0bGU+XFxuICAgIDxwYXRoXFxuICAgICAgZmlsbD1cXFwiI0ZGRlxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMS43NmMtLjA5IDAtNC40MS4wNC0xMC40Ni0xLjIxVjE4YzAgLjI3LjAxLjQ3LjAxLjQ3di4wMmMuMDQuODEuMjggMS40NS43NyAyIC4zMi4zNC43Ni43IDEuMzggMS4wNS4xNy4xLjM1LjE4LjU1LjI4LjE1LjA3LjMxLjE0LjQ3LjIuMTQuMDYuNTUuMjQuNjkuMjlsNi41OSAyLjUgNi41OS0yLjVjLjE1LS4wNS41Ni0uMjQuNjktLjI5LjE2LS4wNy4zMi0uMTQuNDctLjIuMTktLjEuMzgtLjE4LjU1LS4yOC42Mi0uMzUgMS4wNi0uNyAxLjM4LTEuMDUuNDgtLjU1LjczLTEuMTkuNzctMnYtLjAyczAtLjE5LjAxLS40N1YuNTVDMTQuODYgMS44IDEwLjU1IDEuNzYgMTAuNDYgMS43NnpcXFwiXFxuICAgID48L3BhdGg+XFxuICAgIDxwYXRoXFxuICAgICAgZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMi44Yy0uMDkgMC00LjAzLjA0LTkuNTYtMS4xdjE1Ljk1YzAgLjI1LjAxLjQzLjAxLjQ0di4wMmMuMDQuNzQuMjUgMS4zMy43IDEuODMuMjkuMzEuNy42NCAxLjI2Ljk1LjE1LjA5LjMyLjE3LjUuMjYuMTQuMDcuMjguMTMuNDQuMTkuMTIuMDUuNS4yMi42My4yN2w2LjAzIDIuMjkgNi4wMy0yLjI5Yy4xMy0uMDUuNTEtLjIyLjYzLS4yNy4xNS0uMDYuMy0uMTMuNDQtLjE5LjE4LS4wOS4zNS0uMTcuNS0uMjYuNTYtLjMxLjk3LS42NCAxLjI2LS45NS40NC0uNS42Ni0xLjA5LjctMS44M3YtLjAyczAtLjE4LjAxLS40NFYxLjdjLTUuNTUgMS4xNC05LjUgMS4xLTkuNTggMS4xelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAzLjc1Yy0uMDggMC0zLjY4LjA0LTguNzQtMS4wMnY0LjA4YzUuMDUgMS4wNSA4LjY3IDEuMDIgOC43NCAxLjAyczMuNjguMDQgOC43NC0xLjAyVjIuNzNjLTUuMDYgMS4wNS04LjY2IDEuMDItOC43NCAxLjAyelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjQTUxNDE3XFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiA3LjgzYy0uMDggMC0zLjY4LjA0LTguNzQtMS4wMnY5LjA1YzUuMDUgMS4wNSA4LjY3IDEuMDIgOC43NCAxLjAyczMuNjguMDQgOC43NC0xLjAyVjYuODJjLTUuMDYgMS4wNC04LjY2IDEuMDEtOC43NCAxLjAxelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xLjcyIDE3LjcyYy4wMy42OS4yMyAxLjIzLjY0IDEuNjguMjYuMjguNjQuNTggMS4xNS44Ny4xNS4wOC4yOS4xNS40Ni4yMy4xMy4wNi4yNi4xMi40LjE3LjExLjA1LjQ2LjIuNTguMjRMMTAuNDYgMjNsNS41MS0yLjA5Yy4xMi0uMDQuNDYtLjIuNTgtLjI0LjE0LS4wNi4yNy0uMTIuNC0uMTcuMTYtLjA4LjMyLS4xNS40Ni0uMjMuNTEtLjI5Ljg4LS41OCAxLjE1LS44Ny40MS0uNDYuNi0xIC42NC0xLjY4di0uMDJzMC0uMTYuMDEtLjR2LTEuNDRjLTUuMDUgMS4wNS04LjY3IDEuMDItOC43NCAxLjAycy0zLjY4LjA0LTguNzQtMS4wMnYxLjQ1Yy0uMDIuMjUtLjAxLjQxLS4wMS40MXpcXFwiXFxuICAgID48L3BhdGg+XFxuICAgIDxwYXRoXFxuICAgICAgZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNNC44IDMuNjlsLjQxIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNS0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bTExLjMxIDBsLjQyIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNi0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bS01LjY1LjQ4bC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDYuNzUuMzktMS4yNC0xLjA0LS43NyAxLjMtLjAxLjQxLTEuMjJ6TTEwLjQ2IDE3LjIxbC0uNDYuNDV2MS4yMmwuMjMuNjV2MS4wOWguNDV2LTEuMDlsLjIzLS42NXYtMS4yMmwtLjQ1LS40NXptLjIyIDQuNDF2LS42NWgtLjQ1di42NWwtLjIzLjQyLjQ2LjU2LjQ2LS41Ni0uMjQtLjQyem0uMzMtLjY1di41bC4yOS4zMS41MS0uNDF2LS40MWgtLjh6bS41NC0yLjA0bC0uNTQuNnYxLjA5aC40NHYtLjY1bC40My0uNDYuNTUuMzYuMzUtLjM2di0uNThoLTEuMjN6bS0xLjY0IDIuMDR2LjVsLS4yOS4zMS0uNTItLjQxdi0uNDFoLjgxem0tLjU1LTIuMDRsLjU0LjZ2MS4wOWgtLjQzdi0uNjVsLS40My0uNDYtLjU1LjM2LS4zNS0uMzZ2LS41OGgxLjIyelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xNC42MiA5LjI3djUuMTloLTMuNDlsLS4yNS4yMS0uNDMuMzctLjQzLS4zNy0uMjUtLjIxSDYuMjlWOS4yN2wtLjc0LjU0djUuMzhoNC4xMmwuMzcuMzEuNDMuMzguNDMtLjM4LjM3LS4zMWg0LjEyVjkuODFsLS43Ny0uNTR6XFxcIlxcbiAgICA+PC9wYXRoPlxcbiAgICA8cGF0aFxcbiAgICAgIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTExLjAyIDguODNsLS4xNC4xMS0uNDMuMzgtLjQzLS4zOC0uMTItLjExSDcuMDN2NC44OWgyLjg4bC4yLjE3LjM1LjMxLjM2LS4zMS4xOS0uMTdoMi44OFY4LjgzaC0yLjg3ek0xNi4xMSAxMC4zNXYzLjMxYy45NS0uMTQgMS45OC0uMzEgMy4wOC0uNTRWOS44MWE1MC41IDUwLjUgMCAwIDEtMy4wOC41NHptLTExLjMxIDBjLS45NS0uMTQtMS45OC0uMzEtMy4wOC0uNTR2My4zMWMxLjEuMjMgMi4xNC40MSAzLjA4LjU0di0zLjMxelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk0xNi4xMSAxNi43NmwtLjMxLjMydi44NmwuMTUuNDZ2Ljc3aC4zMXYtLjc3bC4xNi0uNDZ2LS44NmwtLjMxLS4zMnptLjE2IDMuMDl2LS40NWgtLjMxdi40NmwtLjE1LjMuMzEuNC4zMi0uNC0uMTctLjMxem0uMjMtLjQ1di4zNWwuMi4yMi4zNi0uMjh2LS4yOWgtLjU2em0uMzgtMS40M2wtLjM4LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzguMjUuMjQtLjI1di0uNDFoLS44NXptLTEuMTQgMS40M3YuMzVsLS4yMS4yMi0uMzUtLjI4di0uMjloLjU2em0tLjM5LTEuNDNsLjM5LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzkuMjUtLjI0LS4yNXYtLjQxaC44NXpNNC44IDE2Ljc2bC0uMzIuMzJ2Ljg2bC4xNi40NnYuNzdoLjMxdi0uNzdsLjE1LS40NnYtLjg2bC0uMy0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNi4zLjMyLjQuMzEtLjQtLjE2LS4zMXptLjIyLS40NXYuMzVsLjIxLjIyLjM1LS4yOHYtLjI5aC0uNTZ6bS4zOS0xLjQzbC0uMzkuNDN2Ljc3aC4zMXYtLjQ2bC4zLS4zMy4zOS4yNS4yNC0uMjV2LS40MWgtLjg1ek00LjQyIDE5LjR2LjM1bC0uMi4yMi0uMzYtLjI4di0uMjloLjU2em0tLjM4LTEuNDNsLjM4LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzguMjUtLjI0LS4yNXYtLjQxaC44NXpcXFwiXFxuICAgID48L3BhdGg+XFxuICAgIDxnIGZpbGw9XFxcIiNGRkZcXFwiIGNsYXNzPVxcXCJ3YXNodS1sb2dvLXRleHRcXFwiPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMjMyLjQ3IDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3em0xMy44MiAxMi4wM3YtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDYgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDEuOTkgMS42OHY3LjY0YzAgMS40My0uNyAxLjU1LTEuMjEgMS42OC0uMDMgMC0uMDYtLjAxLS4xIDAtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjkgMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMxIDAgMS4xNS0uMTMgMi41My0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNlYxMy4xYy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMjYgMCAuNzMtLjIuNDUtLjQ0LS42OC0uNS0xLjk3LjMtMS45NS0yLjA0ek00OC45MSAyLjRjLjM3LS4wNS41NS0uMTkuNTUtLjE5IDAtLjI0LS4wNS0uMy0uMzktLjMtLjY1IDAtMS4wNS4xMS0xLjY5LjExLS43MSAwLTEuMjUtLjA4LTEuODUtLjA4LS4zNCAwLS4zMS4xMS0uMzEuMyAwIC4yMS42NS4wOCAxLjAyLjg5LjIxLjQ0LjEzIDEuMzYtLjA4IDEuOWwtNS4wMSAxMy43NC0yLjE0LTYuMS0uODMtMi4yM3MtLjEzLjA2LjQ2LTEuNzlsMS4xNy0zLjUyYy41Ny0xLjczIDEuMTQtMi42NCAxLjg4LTIuNjUuOTItLjAyLjkyLS41Ny4yMS0uNTdzLTEuMTMuMDYtMS43NS4wNmMtLjY1IDAtLjk5LS4wNi0xLjY5LS4wNi0uMjYgMC0uNTUuMDgtLjUyLjMuMDMuMjEuNDIuMTQuNzEuMy40Ny4yNC43OCAxLjI1LjQ1IDIuM2wtMS4zOCA0LjQyLTEuNTgtNC4xM2MtLjMxLS43OC0uNzMtMi41Mi4wMy0yLjY3LjczLS4xNS42My0uNTIuMTgtLjUyLS44NiAwLTEuMzIuMTEtMi4xNS4xMS0uOTEgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMTggMC0uNTIuMDMtLjQyLjM4LjA1LjIxLjQ5LjE0Ljc2LjMgMS4wNS42OCAxLjI1IDEuNTUgMS42MiAyLjUybDIuMyA2LjQ4Yy40MiAxLjE2LjQ1Ljc0LjExIDEuNzNsLTIgNS41LTQuOTUtMTQuMTFjLS4zOS0xLjA2LS42LTEuNzkuMjYtMi4yLjM3LS4xOS40Ny0uMjIuNTItLjMuMDUtLjA3LjEtLjMyLS40NS0uMy0uODkuMDMtMS40My4xMS0yLjMyLjExLS45NCAwLTEuNTktLjExLTIuNDUtLjExLS4yOSAwLS4zNC4xNC0uMzQuMzUgMCAuMzMuNzEuMTEgMS4zMS44MS4zNC4zOC45OSAxLjY2IDEuMTQgMi4xMkwzMi44IDIyLjNjLjExLjI1LjE0Ljc2LjQ4Ljc2LjI3IDAgLjMzLS41Ny40Mi0uNzlsMy4xMy04LjU5IDMuMDUgOC4xNmMuMTMuMzMuMzEgMS4yMi42MyAxLjIyLjI2IDAgLjM2LS40My40OS0uODNsNS45LTE2Ljg3Yy41LTEuMzYgMS4wNy0yLjc5IDIuMDEtMi45NnptNjUuNDYgNi43MWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjk2LjUyIDMuNTEgMS40MiA0LjYzLS4zMS4yMS0uOTIuNy0yLjE1LjctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMS4ybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuNTEtLjM1LTMuNTEtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNDQgMS40NC0xLjc5IDIuMjMtMi42MyAyLjY4LS4zOC4wOS0uODEuMTItMS4yOS4wMS0uNzQtLjE2LTEuNi0xLjA2LTMuODMtMS4wNi0yLjM4IDAtNC40NiAxLjk1LTQuNDYgNC41NSAwIDEuNC42MiAyLjc2IDEuNzEgMy40OC0uMi4xMi0xLjUzIDEuMjQtMS4zNyAyLjU2IDAgMC0uMDMgMS4zNyAxLjA1IDEuODItLjMzLjE0LS42Ny4zNi0uOTYuNjMtLjctLjI2LTEuNzItLjA2LTEuNzItMS45MVYxNS4xYzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uNzMuOTktMi45MSAxLjU1LS4xMy4wMy0uNDMuMS0uNDQuMzQgMCAuNjUgMS43NS0uNzEgMS43NiAxLjY4djcuNjRjMCAxLjY1LTEuMzEgMS42NS0xLjU0IDEuNjctLjEgMC0uMTkgMC0uMzEuMDEtLjU1LS4wNS0xLjUxLS4zLTEuNTEtMS4zNFY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS43OC0uODYgMi4wMS0xLjQzIDIuMDMtLjY5LS4wOS0xLjIyLS4zNy0xLjIyLTEuNDF2LTUuMTRjMC0yLjY1LTEuMDEtNi4wNy00LjMzLTYuMDctMS40NyAwLTIuNzUuODEtMy43MyAxLjkyVjIuNDFjMC0uMzEtLjE1LS40OC0uMzEtLjQ5LS40LS4wMy0xLjA3IDEuMTktMi45NiAxLjYzLS4xMy4wMy0uNjIuMDctLjYyLjI1IDAgLjY1IDEuOTctLjMxIDEuOTkgMS42OVYyMC42YzAgMS41MS0xLjMgMS4zMS0xLjUzIDEuNzktLjA0LjIxLjA4LjMxLjI2LjMxLjQyIDAgMS41NS0uMTIgMi4zNS0uMTJzMi4xLjEyIDIuNjQuMTJjLjMxIDAgLjQ0LS4wNi40NC0uNDQtLjI3LS41Mi0yLjI4LjI4LTIuMjgtMi4zN3YtNi41YzAtMS41NyAxLjg3LTIuNzggMy4wMy0yLjc4LjkxIDAgMy4xNC43MSAzLjE0IDQuNTN2NS42NGMwIDEuMTEtMS4xOCAxLjIzLTEuMjcgMS41NyAwIC4yNC4xNS4zNC40Mi4zNC4yOCAwIDEuMTEtLjEyIDIuMTItLjEyLjU2IDAgMS4wNy4wMyAxLjUuMDYuMjMuMDUuNTcuMDUuOTkuMDUuMjggMCAxLS4xMSAxLjgyLS4xMXMxLjQ4LjA3IDEuOTkuMTFjLjEuMDEuMi4wMS4zLjAxLjA0IDAgLjA4LjAxLjEyLjAxaC4wMWMuMzIuMDEuNjEgMCAuNzQgMCAuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2YzAgMi0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MuOTMgMCAxLjUzLjA3IDEuOTEuMS0uMjkuNDItLjQ4LjktLjUxIDEuNC0uMTQgMi41MSAyLjkzIDMuNDEgNS41MSAzLjM3IDUuMTItLjA3IDYuNTctMy42MiA1LjUxLTUuNTEtMS4wOS0xLjk1LTMuNDQtMS44Ny01LjY4LTEuODYtNC4yLjAyLTMuNDEtMi41OS0xLjY5LTIuNDkuNC4wMi4yLjE0IDEuNTcuMTQgMi40MyAwIDQuNzYtMS42NiA0LjctNC4zOC0uMDEtLjIzLjA1LTEuMDMtLjUzLTIuMTQgMS4xNC4wMS42OSAwIDIuNDEgMGwtLjAxIDcuNjNjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS43NCAwIDMuMDEtMS4xNSAzLjI0LTEuNjggMS4wMyAxLjEgMi40NiAxLjY4IDQuMTIgMS42OCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzggMC01LjgtMy42NS02Ljk2LTUuNjEtNi45NnpNOTUuNjIgMjEuNzJjLjIxLS4wMS4yNy4wOCAyLjY0LjE3IDIuNDUuMDYgMy4zMy43NyAzLjQ5IDEuNC4yNiAxLjEyLS41MyAzLjUyLTQuMDUgMy4yOS0yLjIyLS4xNS0yLjg3LTEuMi0zLjAzLTEuNDQtLjg0LTEuMTYtLjE2LTMuMzUuOTUtMy40MnptMi4wMS00LjU3Yy0yLjA4IDAtMi43OC0yLTIuNzgtMy45MSAwLTEuOTYuNTktMy41OCAyLjY3LTMuNTggMi4xMSAwIDIuOTUgMi4xNiAyLjk1IDQuMDcuMDEgMS45My0uODcgMy40Mi0yLjg0IDMuNDJ6bTE2Ljk5IDQuODFjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6XFxcIlxcbiAgICAgID48L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0xMzEuMTEgMjAuMTl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ0LS40NC0uNjUtLjQ5LTEuOTQuMzEtMS45Mi0yLjAzek03Ny40MSA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42LjAyLjM1Ljc3IDEuNTcgMS4wNyAxLjU3em0tMTcuMyA2Ljk2Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA0IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ3IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIC41MS0uMDEuOTgtLjAxIDEuMzgtLjA3LjM2LS4yLjctLjU0LjcyLTEuMjQuMDgtLjk0LTEuOS0uOTQtMi45NXYtNi40M2MtLjA2LTEuOTctMS41NC0zLjI1LTMuOC0zLjI1LTMuMDkgMC01LjMxIDMuODEtNC4yNSA1IC4yNS4yOCAxLjI2LS44IDEuMzItLjg2cy4wOC0uMTMuMDgtLjEzYy0uMDEtMS4zLjk3LTIuOTUgMi4zNy0zLjA5IDEuNi0uMTUgMi40IDEuMDQgMi40IDIuNjV2Mi4wOWMtNi4wNiAxLjIxLTYuOTMgMy4yMi02LjkzIDQuODcgMCAyLjIxIDEuNTUgMy4yIDMuMjMgMy4yIDEuNDUgMCAyLjg4LS42OSAzLjk2LTEuOC4zNCAxLjAzIDEuMDEgMS42NSAyLjAyIDEuNjIuMzUtLjAxLjQxLjA5IDEuNDYtLjM3LjM3LS4xLjM1LS4wOS43Ny0uMDEuNTYuMTkgMS4zMi41NyAyLjY2LjU3IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNS0uNDMtMi40MS0yLjM5LTMuNjN6bS04LjQzIDQuMzJjMCAxLjY1LTEuNjggMi41Mi0yLjYgMi41Mi0xLjM4IDAtMi4zMy0uODktMi4zMy0yLjY2IDAtMi43MyAzLjI4LTMuMjMgNC45NC0zLjY3LS4wMS0uMDEtLjAxIDMuODEtLjAxIDMuODF6bTIxOS45OS4xOWMtLjMxIDAtMS4wNyAxLjI5LTEuMDcgMS42MyAwIC4zNC43NyAxLjYgMS4wNyAxLjYuMzMgMCAxLjA3LTEuMjMgMS4wNy0xLjZzLS43My0xLjYzLTEuMDctMS42M3ptMzMuNzEgMS4xMlY5LjkyYzAtLjYxLS4zNC0uNzctLjQ0LS43Ny0uMzkgMC0uNjEuMS0uODguMTYtLjI3LjEtLjU4LjIzLTEuMjkuMjMtLjEzIDAtLjc5LS4xMi0uNzYuMjUuMDQuMzcgMS41Ny4xNSAxLjU4IDEuMjN2Ny44M2MtLjEyIDEuMzctMS4yNyAyLjg4LTIuNjYgMi44OC0uMzIgMC0yLjM5LS4yMi0yLjM3LTMuNjVWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS42MS4yMi0xLjMyLjE5LS4zOC0uMDItLjc5LS4wNy0uNzMuMjkuMDYuMzIgMS41OSAwIDEuNTkgMS4yM3Y3LjUxYzAgMi43NCAxLjYxIDQuMzIgMy41NiA0LjMyIDEuMyAwIDIuNDktLjI4IDMuMjQtMS44aC4wNXYxLjMyYzAgLjEzLjAzLjQ4LjIyLjQ4LjM3IDAgLjU2LS4zLjgzLS40LjI5LS4wNy4zNy0uMzMgMS4yOC0uNDIuMzktLjA0LjgyLS4yNC44Mi0uNS0uMTEtLjUzLTEuNC4wNi0xLjQtLjc4ek0yOTAuMDkgOS4xMWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjczLjQyIDMuMTUgMS4xMyA0LjIzLS43OS41Ny0yLjIzIDEuMS00Ljk2IDEuMS0yLjEzIDAtMS45My0uNzQtMS45My0yLjU1VjQuNTdjMC0yLjY2IDEuOTktMS44OSAyLjAzLTIuMzcuMDMtLjM0LS4yOC0uMjYtLjYxLS4yNi0uMzggMC0xLjA3LjE1LTIuNTIuMTUtMS4yNSAwLTIuMzQtLjEyLTIuODgtLjEyLS4zMyAwLS42My4xLS41Mi4zNS4yNS41NyAyLjE0LjA1IDIuMTQgMS42NXYxNS4xYzAgMS40NC4yMSAyLjM2LS40NSAyLjczLS44MS40OS0xLjc2LjUxLTEuNjguODMuMDUuMTkuNDUuMi42OC4yIDEuMDIgMCAyLjQyLS4xMyAzLjQ0LS4xNSAxLjk0LS4wNiAzLjg2LjEzIDUuNzkuMTMgMS4xMiAwIDEuNC0uMjIgMi4yMi0xLjMzLjAxLS4wMi4wMi0uMDMuMDQtLjA1IDEuMDEuOTQgMi4zNCAxLjQ0IDMuODcgMS40NCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzguMDEtNS44Mi0zLjY1LTYuOTgtNS42Mi02Ljk4em0uMjYgMTIuODVjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6bS0zMi4wMy0xMC40OWMtLjc1LS4zNy0xLjg1LTEuMDQtMi4zOS0xLjM2LTIuMzctMS4zNy0zLjMtMi4yNi0zLjM3LTMuNTItLjEyLTIuMjEgMi4wNC0zLjUyIDMuNTgtMy4zNSAxLjk2IDAgMy41NyAxLjE5IDQuMjQgMy43My4wNy4yNy4zMS44OS41Ni44OS4yMiAwIC4yNi0uMi4yNC0uNDVsLS4zMy00LjAyYy0uMDItLjMzLS4xNC0uNDItLjI3LS40Mi0uMjIgMC0uMzYuMzMtLjU2LjMzLS4zMSAwLTEuMS0xLjExLTMuOC0xLjA5LS4xOC0uMDEtLjQzLjAyLS40My4wMi0yLjYzLS4wNS01LjEgMS43LTUuMDIgNS40LjA3IDMuMzcgMy44NSA1LjMgNS44OSA2LjU5IDEuNTEuOSAzLjA5IDIuMzQgMy4wNCAzLjk1LS4wOCAyLjQ3LTEuNjMgNC4wOC0zLjU4IDMuOTQtNC41OS0uMDgtMy45Ni02LjEzLTQuNzgtNi4xMy0uNTYgMC0uNDUgMS41Mi0uNDYgMi4zMiAwIDEuOTItLjA4IDMuNDkuMTQgMy43Ny4wNy4wOS4yOS4wNS43NC4wNS45IDAgMiAxLjA1IDQuNjUgMS4wNSAyLjk1LjA1IDUuMzgtMi42OSA1LjM4LTYuMjUtLjAxLTIuMTktLjYyLTMuNTgtMy40Ny01LjQ1em01MS42OS0zLjMxYy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMzEyLjY0IDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5em01Ljk4LTYuODhjLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMTEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAxLS4xMyAwLS4yOC4wMS0uMjguMDEtMS44MS0uMDMtMy41IDEuMTEtMy40NCAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41Mi0uMDEgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNy0uMDEtMS40OC0uNDMtMi4zOS0yLjM5LTMuNnptLTQ4LjczIDUuNjZjLS4yNi4xMy0uODUuNzctMi4yOC43Ny0xLjA3IDAtMS42OC0uNjQtMS43NC0ydi04LjgybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMy43NS4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjM0IDMuMjgtMS44LjAzLS4yNSAwLS4yOC0uMTUtLjI2em0tODEuMzItMS4wOWMtLjU3IDAtMS40MiAxLjYyLTMuNjYgMS42Mi0xLjU4IDAtNC4xNy0xLjUzLTQuMTctNi42Nmg2LjljLjYgMCAuODguMDMuODgtLjUyIDAtMS4yNS0xLjQtNC45NS00LjU5LTQuOTUtMy4yNCAwLTUuMDggMy4zMy01LjA4IDcuMzEgMCAyLjA1IDEuMzUgNi4zOCA1LjI0IDYuMzggMi4zMyAwIDQuNTktMi4yNCA0LjU5LTIuOTUtLjAxLS4xMS0uMDEtLjIzLS4xMS0uMjN6bS01LjA4LTkuODFjMS40MiAwIDIuODggMS41NiAyLjg4IDMuMyAwIC40Ni0uMTUuNjItLjUyLjYyaC01LjExYzAtMS43MSAxLjEzLTMuOTIgMi43NS0zLjkyem0tMzEuNy03LjMzYy4xLS4xNi0uMjUtLjI0LS4zNy0uMjQtLjQyIDAtMS4zNy4xMS0xLjguMTEtLjg5IDAtMS42NC0uMDktMi41My0uMDktLjA3IDAtLjQ2LjA1LS40Ni4xOC0uMDEuNjMgMi4xMy0uMTEgMi4xMyAyLjZ2MTAuNTdjMCAzLjEzLS45OSA2LjQxLTUuMjkgNi40MS0zLjA5IDAtNC43Ni0xLjk0LTQuNzYtNi4xN1Y0LjQxYzAtMS45MSAxLjQ5LTEuNDkgMS41Mi0xLjkyLjAzLS40MS0xLjMzLS4xNi0xLjQzLS4xNi0uNzEgMC0xLjIxLjA4LTEuOTUuMDgtLjYyIDAtMS4zNy0uMS0xLjk3LS4xLS4xMiAwLS41My0uMDItLjYxLjE1LS4yMy41NiAxLjkxLjI2IDEuOTEgMS44M3YxMC45MmMwIDQuMDggMS4xNCA4LjA4IDcuMTcgNy45NyA3LjE0LS4xMiA3LjAxLTYuNTQgNy4wMS03LjgzVjUuMTJjLjAxLTIuNDMgMS4yLTIuMiAxLjQzLTIuNTd6bTI4LjE5IDcuMjRjLjE3LS4yLjIyLS41My0uNTctLjQ2LS40NSAwLS43Ny4wOC0xLjIyLjA4LS41NyAwLS42OC0uMDItMS4yMi0uMDQtLjY4LS4wMi0uODYuMDUtLjgyLjI1LjEyLjYgMS41NS4wMSAxLjM2IDEuOC0uMTYgMS41LS42NSAyLjc5LTEuMTQgNC4wN2wtMS43MyA0LjYyLTIuNTQtNy43Yy0uMzEtLjk2LS40NS0xLjQ3LS40NS0xLjU3IDAtLjk2IDEuMTYtLjc1IDEuNDItMS4xNC4xNi0uMjYtLjE3LS40LS41NC0uNC0uMzEgMC0uNjcuMTEtMS42My4xMy0uNzkuMDItMS4zNi4wMi0xLjctLjA1LS44OS0uMTYtLjgyLjMzLS41MS40OHMuNDYuMDEuOTEgMS4zNmwzLjkxIDExLjA2Yy4wOC4yMi4xOC43Ny41Mi43Ny4zOSAwIC4zOS0uMzkuODgtMS42OSAwIDAgMy43NS0xMC40OCA0LTEwLjg2LjUxLS43NC44OS0uNSAxLjA3LS43MXptMTQuNDctLjVjLTEuMDcgMC0xLjggMS4yOC0yLjMzIDIuMTZoLS4wNVY5LjUzYzAtLjMtLjE1LS40OC0uMy0uNDgtLjQxIDAtLjcyLjgxLTIuODcgMS4zMy0uMTMuMDMtLjQ4LjEtLjQ4LjI4IDAgLjY0IDEuODItLjE5IDEuODIgMS45M3Y4LjA3YzAgMS4yNS0xLjI5IDEuMTItMS4yOSAxLjc3IDAgLjE4LjA4LjI3LjI4LjI3LjE3IDAgLjYzLS4xMiAyLjMyLS4xMiAxLjQxIDAgMi4wMi4xMiAyLjM3LjEyLjI4IDAgLjQxLS4wNi40MS0uMzQgMC0uOTgtMi4yNS40OC0yLjI1LTIuMzR2LTYuODhjMC0uNC42LTEuOCAxLjY0LTEuOC45MSAwIDEuMDIuNyAxLjUuNy4zIDAgLjkxLS45MS45MS0xLjM4LS4wMS0uNTgtMS4xNi0xLjM3LTEuNjgtMS4zN3ptMzIuNTUuMWMtLjI3IDAtLjk2LjA0LTEuNTkuMDQtLjc2IDAtMS4xMy0uMDktMS40NS0uMDktLjQ4IDAtLjk2IDAtLjg3LjMyLjEuMzYgMS43My4yMyAxLjczIDIuMDEgMCAuMjMgMCAuNTItLjMzIDEuNzFsLTIuMDggNi42My0yLjktOC4xNXMtLjE0LS4yNi0uMTQtLjc5YzAtMS4zMiAxLjU0LTEuMTcgMS42LTEuNDEuMDUtLjE5LS4yMS0uNC0uNjItLjRoLTMuNjNjLS4wMiAwLS4wMy4wMS0uMDUuMDFoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMi43Ni4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjMzIDMuMjgtMS44IDAtLjI3LS4wNC0uMjktLjE4LS4yNy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMC43czIuNS0uMDEgMy4yMS0uMDFjLjA0LjA2LjA4LjEzLjEuMTlsMi45OSA4LjQ1Yy4yNC42OS4zOS45Mi42OCAyLjE0LjE5Ljc5LjEyIDEuNTEuMTIgMS41MS0uMjkgMS4yNy0xLjA3IDEuOTktMi4yNiA0LjM0LS4xMi4yMiAxLjcxLS4wMiAxLjgxLS4wNS4xNS0uMDUuMTMtLjA5LjMxLS40MmwxLjMyLTMuOTMgMy42OS0xMS4zNGMuNTQtMS45OCAxLjM5LTEuNjIgMS41My0xLjg5LjEyLS4xMyAwLS4zLS4zMy0uM3pcXFwiXFxuICAgICAgPjwvcGF0aD5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIyMi4yMiAyMi43NmwtLjA3LjE5VjIzbC4wNy0uMjR6bS0xNC43NC0xNC42Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMjEwLjExIDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5ek0xNjYuNTIgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzcgMS41NyAxLjA3IDEuNTd6TTE2OS4xNyAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0aC0uMTdjLS41NC0uMS0xLjA2LS4zMi0xLjA1LTEuNzl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjA0IDAgLjA5LS4wMS4xMy0uMDEuMTEgMCAuMjEuMDEuMzQuMDEuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjM0LjAyLjc1LS43OC4wOC0uNjd6bTMyLjcyLTYuODljLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDItLjEzIDAtLjI4LjAyLS4yOC4wMi0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ1IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDYgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYyLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyIDAgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNDctLjQyLTIuMzgtMi4zOC0zLjZ6XFxcIlxcbiAgICAgID48L3BhdGg+XFxuICAgIDwvZz5cXG4gIDwvc3ZnPlxcbjwvZGl2PlxcbjxoZWFkZXIgcm9sZT1cXFwiYmFubmVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJzaXRlLXRpdGxlXFxcIiBocmVmPVxcXCJmaWxlcy9pbmRleC5odG1sXFxcIj5OdXJzZXJ5IFNjaG9vbDwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwibWFpbi1tZW51LWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImFib3V0XFxcIiBocmVmPVxcXCJmaWxlcy9hYm91dC5odG1sXFxcIj5BYm91dCA8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwidHVpdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvdHVpdGlvbi5odG1sXFxcIj5UdWl0aW9uPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdGFmZlxcXCIgaHJlZj1cXFwiZmlsZXMvc3RhZmYuaHRtbFxcXCI+U3RhZmY8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1oYW5kYm9va1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2hhbmRib29rLmh0bWxcXFwiXFxuICAgICAgICAgICAgICA+SG9tZSBhbmQgU2Nob29sIENvbW11bmljYXRpb248L2FcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjbGFzc3Jvb21zXFxcIiBocmVmPVxcXCJmaWxlcy9jbGFzc3Jvb21zLmh0bWxcXFwiPkNsYXNzcm9vbXMgPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImN1cnJpY3VsdW0tb3ZlcnZpZXdcXFwiIGhyZWY9XFxcImZpbGVzL2N1cnJpY3VsdW1fb3ZlcnZpZXcuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5DdXJyaWN1bHVtIE92ZXJ2aWV3PC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJ0ZWRkeS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvdGVkZHlfYmVhcnMuaHRtbFxcXCI+VGVkZHkgQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhbmRhLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9wYW5kYV9iZWFycy5odG1sXFxcIj5QYW5kYSBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmVhci1jdWJzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX2N1YnMuaHRtbFxcXCI+QmVhciBDdWJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiaWctYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL2JpZ19iZWFycy5odG1sXFxcIj5CaWcgQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInN1bi1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvc3VuX2JlYXJzLmh0bWxcXFwiPlN1biBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmVhci10cmFja3NcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfdHJhY2tzLmh0bWxcXFwiPkJlYXIgVHJhY2tzIEV4dGVuZGVkIERheTwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiZW5yaWNobWVudC1wcm9ncmFtXFxcIiBocmVmPVxcXCJmaWxlcy9lbnJpY2htZW50X3Byb2dyYW1zLmh0bWxcXFwiXFxuICAgICAgICAgICAgICA+RW5yaWNobWVudCBQcm9ncmFtPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGEgaWQ9XFxcImNhbGVuZGFyXFxcIiBocmVmPVxcXCJmaWxlcy9jYWxlbmRhci5odG1sXFxcIj5DYWxlbmRhcjwvYT5cXG4gICAgICAgIDxhIGlkPVxcXCJzdW1tZXItY2FtcFxcXCIgaHJlZj1cXFwiZmlsZXMvc3VtbWVyX2NhbXAuaHRtbFxcXCI+U3VtbWVyIENhbXA8L2E+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJnZXQtaW52b2x2ZWRcXFwiIGhyZWY9XFxcImZpbGVzL2dldF9pbnZvbHZlZC5odG1sXFxcIj5HZXQgSW52b2x2ZWQ8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YVxcbiAgICAgICAgICAgICAgaWQ9XFxcIm51cnNlcnktc2Nob29sLW1lcmNoYW5kaXNlXFxcIlxcbiAgICAgICAgICAgICAgaHJlZj1cXFwiZmlsZXMvbnVyc2VyeV9zY2hvb2xfbWVyY2hhbmRpc2UuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5OdXJzZXJ5IFNjaG9vbCBNZXJjaGFuZGlzZTwvYVxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFyZW50LWFzc29jaWF0aW9uXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfYXNzb2NpYXRpb24uaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5QYXJlbnQgQXNzb2NpYXRpb248L2FcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8YSBpZD1cXFwiYXBwbHlcXFwiIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPkFwcGx5PC9hPlxcbiAgICAgICAgPGEgaWQ9XFxcImZvcm1zXFxcIiBocmVmPVxcXCJmaWxlcy9mb3Jtcy5odG1sXFxcIj5Gb3JtczwvYT5cXG5cXG4gICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtcmVzb3VyY2VzXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfcmVzb3VyY2VzLmh0bWxcXFwiXFxuICAgICAgICAgID5QYXJlbnQgUmVzb3VyY2VzPC9hXFxuICAgICAgICA+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9oZWFkZXI+XFxuXCI7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFNsaWRlc2hvdyB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgU2xpZGVzaG93LmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBzbGlkZXNob3dzID0gRC5jbGF6KFwic2xpZGVzaG93XCIpO1xuICAgIGZvciAobGV0IHNzSW5kZXggPSAwOyBzc0luZGV4IDwgc2xpZGVzaG93cy5sZW5ndGg7ICsrc3NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IHNsaWRlc2hvd3MuaXRlbShzc0luZGV4KTtcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBTbGlkZXNob3cuc2xpZGVzaG93cy5wdXNoKG5ldyBTbGlkZXNob3coZWxlbSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzY2FyZEFsbCgpIHtcbiAgICBTbGlkZXNob3cuc2xpZGVzaG93cyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2xpZGVzaG93czogU2xpZGVzaG93W10gPSBbXTtcblxuICBwcml2YXRlIHNsaWRlSW5kZXggPSAwO1xuICBwcml2YXRlIHNsaWRlQ291bnQgPSAwO1xuICBwcml2YXRlIHNsaWRlczogRWxlbWVudFtdID0gW107XG4gIHByaXZhdGUgZG90czogRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuZWFjaFJlY3VyKHRoaXMub3V0ZXIsIChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBjTGlzdCA9IGVsZW0uY2xhc3NMaXN0O1xuICAgICAgaWYgKGNMaXN0LmNvbnRhaW5zKFwicHJldi1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMubWludXNTbGlkZSgxKSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwibmV4dC1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMucGx1c1NsaWRlKDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZW50cnlcIikpIHtcbiAgICAgICAgdGhpcy5zbGlkZXMucHVzaChlbGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZG90XCIpKSB7XG4gICAgICAgIHRoaXMuZG90cy5wdXNoKGVsZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBELmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb3RzW2ldLCBcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd1NsaWRlKGkpKTtcbiAgICB9XG4gICAgdGhpcy5zbGlkZUNvdW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgIHRoaXMuc2hvd1NsaWRlKHRoaXMuc2xpZGVJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgcGx1c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggKz0gbikpO1xuICB9XG4gIHB1YmxpYyBtaW51c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggLT0gbikpO1xuICB9XG4gIHB1YmxpYyBzaG93U2xpZGUoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IGluZGV4ICUgdGhpcy5zbGlkZUNvdW50O1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IE1hdGgubWF4KHRoaXMuc2xpZGVJbmRleCwgLTEgKiB0aGlzLnNsaWRlSW5kZXgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICh0aGlzLnNsaWRlc1tpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgICh0aGlzLnNsaWRlc1t0aGlzLnNsaWRlSW5kZXhdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRoaXMuZG90c1t0aGlzLnNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcmFtcyB9IGZyb20gXCIuLi9jb3JlL3V0aWxzL3FfcGFyYW1zXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vLi4vY29yZS9kYXRhLWxvZy9kYXRhXCI7XG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSBcIi4vLi4vY29yZS9kYXRhLWxvZy9ldmVudFwiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9zY3JvbGxcIjtcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwiLi8uLi9jb3JlL3JvdXRlci9oaXN0b3J5XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZGUsIFJvdXRlck1vZHVsZSB9IGZyb20gXCIuLy4uL2NvcmUvcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gXCIuLy4uL2NvcmUvdHJhY2tlci90cmFja2VyXCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSB9IGZyb20gXCIuLy4uL2NvcmUvdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSBcIi4vLi4vY29yZS91dGlscy9odG1sX2xvYWRlclwiO1xuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tIFwiLi8uLi9jb3JlL3V0aWxzL2lkX2dlbmVyYXRvclwiO1xuaW1wb3J0IHsgd2FpdFVudGlsUmVhZHkgfSBmcm9tIFwiLi8uLi9jb3JlL3V0aWxzL3JlYWR5XCI7XG5pbXBvcnQgeyBzY2VuYXJpb3MsIFNjZW5hcmlvIH0gZnJvbSBcIi4vLi4vY29yZS91dGlscy9zY2VuYXJpb3NcIjtcblxuY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XG4gIGNvbnN0IHNjZW5hcmlvID0gc2NlbmFyaW9zLmZpbmQoKHNjZW4pID0+IHNjZW4udGFnID09PSBwYXJhbXMudGFnKTtcbiAgaWYgKCFwYXJhbXMuc2FuZGJveCkge1xuICAgIGlmIChzY2VuYXJpbyA9PT0gbnVsbCB8fCBzY2VuYXJpbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGVydChcIlRoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUcmFja2VyLmxvYWRTY2VuYXJpbyhzY2VuYXJpbyBhcyBTY2VuYXJpbyk7XG4gICAgfVxuICB9XG4gIFRyYWNrZXIuc3RhcnQoe1xuICAgIGtleVByZWZpeDogXCJpbmZvcm1hdGlvbi1mb3JhZ2luZ1wiLFxuICAgIGJ1Y2tldE5hbWU6IFwiY3NlLTI1Ni1sb2dcIixcbiAgICBhbGxvd1N1Ym1pc3Npb246IHtcbiAgICAgIGFsbG93KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gRC5pZChcInRleHQtYXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcbiAgICAgICAgICBpZiAodGV4dEFyZWEudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIllvdSBtdXN0IGZpbGwgb3V0IHRoZSB0ZXh0IGJveCB0byB0dXJuIHRoaXMgSElUIGluLlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBcIlRoZXJlIHdhcyBhbiBlcnJvciBmaWxsIG91dCB0aGUgZm9ybSBhbmQgdHJ5IGFnYWluLlwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlU3VibWl0KCkge1xuICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSAoRC5pZChcInRleHQtYXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW0uTk9ORSxcblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgLy8gY29uZmlndXJlIHJvdXRlclxuICAgICAgUm91dGVyLmRlZmF1bHRBbGxvd2FuY2VzT24oKTtcbiAgICAgIFJvdXRlci5jb25maWd1cmUoXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5BLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBtb2RlOiBSb3V0ZXJNb2RlLk9GRiwgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuRk9STSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLklNRyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBcImZpbGVzL1wiLFxuICAgICAgKTtcbiAgICAgIEhpc3Rvcnkuc2V0dXAod2luZG93LmxvY2F0aW9uLmhyZWYsIHsgd3JhcHBlcjogdHJ1ZSB9KTtcbiAgICAgIC8vIGNvbmZpZ3VyZSBodG1sIGxvYWRlciBwb3N0IG9wZXJhdGlvblxuICAgICAgSFRNTExvYWRlci5maW5pc2goKTtcbiAgICAgIEhUTUxMb2FkZXIucmVnaXN0ZXJQb3N0TG9hZEZ1bmMoKCkgPT4ge1xuICAgICAgICBJREdlbmVyYXRvci5yZXNldCgpO1xuICAgICAgICBJREdlbmVyYXRvci5hdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCk7XG4gICAgICAgIFJvdXRlci5zZXR1cChFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgU2Nyb2xsLnByb21pc2UoMCk7XG4gICAgICB9KTtcbiAgICAgIC8vIGNvbmZpZ3VyZSBsaXN0ZW5lcnMgb24gaHRtbCBsb2NcbiAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5odG1sTG9jLCBBY3Rpb25FbnVtLkNMSUNLLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBldiA9IGUgYXMgTW91c2VFdmVudDtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgeTogZXYuY2xpZW50WSxcbiAgICAgICAgICBpZDogKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgIH07XG4gICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5DTElDSykob2JqKTtcbiAgICAgIH0pO1xuICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRvY3VtZW50LCBcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ID0gZSBhcyBLZXlib2FyZEV2ZW50O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAga2V5OiBldi5rZXksXG4gICAgICAgICAgaWQ6IChldi5zcmNFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgfTtcbiAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLkJVVFRPTikob2JqKTtcbiAgICAgIH0pO1xuICAgICAgLy8gU1BFQ0lBTCBDQVNFOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgZG9lcyBub3QgYmVoYXZlIHRoZSBzYW1lIHdheSBhcyBkb2N1bWVudCBzbyB0aGUgYmVsb3cgZnVuY3Rpb24gbXVzdCBiZWhhdmUgZGlmZmVyZW50bHkgdGhhbiB0aGUgbGlzdGVuZXJzIGFib3ZlLlxuICAgICAgY29uc3Qgc0VsZW0gPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGR4ID0gc0VsZW0uc2Nyb2xsTGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBzRWxlbS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IGR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueCAtIGR4KSA+IDEwIHx8XG4gICAgICAgICAgKE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy55IC0gZHkpID4gMTAgJiZcbiAgICAgICAgICAgIGR0aW1lIC0gVHJhY2tlci5sYXN0UG9zLnRpbWUgPiAxMDApXG4gICAgICAgICkge1xuICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy54ID0gZHg7XG4gICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnkgPSBkeTtcbiAgICAgICAgICBUcmFja2VyLmxhc3RQb3MudGltZSA9IGR0aW1lO1xuICAgICAgICAgIGNvbnN0IG9iaiA9IHsgeDogZHgsIHk6IGR5IH07XG4gICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLlNDUk9MTCkob2JqKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBjb25maWd1cmUgdHJhY2tlZCBldmVudHNcbiAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkhJU1RPUlkpO1xuICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQlVUVE9OKTtcbiAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkNMSUNLKTtcbiAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLlNDUk9MTCk7XG4gICAgICAvLyBsb2FkIGZpcnN0IHBhZ2VcbiAgICAgIGF3YWl0IFJvdXRlci5sb2FkKFwiZmlsZXMvaW5kZXguaHRtbFwiKTtcbiAgICB9LFxuICB9KTtcbn07XG5cbnNldHVwKCk7XG4iXX0=
