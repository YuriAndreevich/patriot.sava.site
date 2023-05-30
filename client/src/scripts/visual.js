window.jQuery || function (window, undefined) {
        var readyList, rootjQuery, core_strundefined = typeof undefined, location = window.location, document = window.document, docElem = document.documentElement, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "1.10.2", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function (selector, context) {
            return new jQuery.fn.init(selector, context, rootjQuery)
        }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function (all, letter) {
            return letter.toUpperCase()
        }, completed = function (event) {
            if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
                detach();
                jQuery.ready()
            }
        }, detach = function () {
            if (document.addEventListener) {
                document.removeEventListener("DOMContentLoaded", completed, false);
                window.removeEventListener("load", completed, false)
            } else {
                document.detachEvent("onreadystatechange", completed);
                window.detachEvent("onload", completed)
            }
        };
        jQuery.fn = jQuery.prototype = {
            jquery: core_version,
            constructor: jQuery,
            init: function (selector, context, rootjQuery) {
                var match, elem;
                if (!selector) {
                    return this
                }
                if (typeof selector === "string") {
                    if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                        match = [null, selector, null]
                    } else {
                        match = rquickExpr.exec(selector)
                    }
                    if (match && (match[1] || !context)) {
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                for (match in context) {
                                    if (jQuery.isFunction(this[match])) {
                                        this[match](context[match])
                                    } else {
                                        this.attr(match, context[match])
                                    }
                                }
                            }
                            return this
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem && elem.parentNode) {
                                if (elem.id !== match[2]) {
                                    return rootjQuery.find(selector)
                                }
                                this.length = 1;
                                this[0] = elem
                            }
                            this.context = document;
                            this.selector = selector;
                            return this
                        }
                    } else if (!context || context.jquery) {
                        return (context || rootjQuery).find(selector)
                    } else {
                        return this.constructor(context).find(selector)
                    }
                } else if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this
                } else if (jQuery.isFunction(selector)) {
                    return rootjQuery.ready(selector)
                }
                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context
                }
                return jQuery.makeArray(selector, this)
            },
            selector: "",
            length: 0,
            toArray: function () {
                return core_slice.call(this)
            },
            get: function (num) {
                return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num]
            },
            pushStack: function (elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                ret.context = this.context;
                return ret
            },
            each: function (callback, args) {
                return jQuery.each(this, callback, args)
            },
            ready: function (fn) {
                jQuery.ready.promise().done(fn);
                return this
            },
            slice: function () {
                return this.pushStack(core_slice.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (i) {
                var len = this.length
                    , j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
            },
            map: function (callback) {
                return this.pushStack(jQuery.map(this, function (elem, i) {
                    return callback.call(elem, i, elem)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: core_push,
            sort: [].sort,
            splice: [].splice
        };
        jQuery.fn.init.prototype = jQuery.fn;
        jQuery.extend = jQuery.fn.extend = function () {
            var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[1] || {};
                i = 2
            }
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {}
            }
            if (length === i) {
                target = this;
                --i
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : []
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {}
                            }
                            target[name] = jQuery.extend(deep, clone, copy)
                        } else if (copy !== undefined) {
                            target[name] = copy
                        }
                    }
                }
            }
            return target
        }
            ;
        jQuery.extend({
            expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
            noConflict: function (deep) {
                if (window.$ === jQuery) {
                    window.$ = _$
                }
                if (deep && window.jQuery === jQuery) {
                    window.jQuery = _jQuery
                }
                return jQuery
            },
            isReady: false,
            readyWait: 1,
            holdReady: function (hold) {
                if (hold) {
                    jQuery.readyWait++
                } else {
                    jQuery.ready(true)
                }
            },
            ready: function (wait) {
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                    return
                }
                if (!document.body) {
                    return setTimeout(jQuery.ready)
                }
                jQuery.isReady = true;
                if (wait !== true && --jQuery.readyWait > 0) {
                    return
                }
                readyList.resolveWith(document, [jQuery]);
                if (jQuery.fn.trigger) {
                    jQuery(document).trigger("ready").off("ready")
                }
            },
            isFunction: function (obj) {
                return jQuery.type(obj) === "function"
            },
            isArray: Array.isArray || function (obj) {
                return jQuery.type(obj) === "array"
            }
            ,
            isWindow: function (obj) {
                return obj != null && obj == obj.window
            },
            isNumeric: function (obj) {
                return !isNaN(parseFloat(obj)) && isFinite(obj)
            },
            type: function (obj) {
                if (obj == null) {
                    return String(obj)
                }
                return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj
            },
            isPlainObject: function (obj) {
                var key;
                if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                    return false
                }
                try {
                    if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (e) {
                    return false
                }
                if (jQuery.support.ownLast) {
                    for (key in obj) {
                        return core_hasOwn.call(obj, key)
                    }
                }
                for (key in obj) { }
                return key === undefined || core_hasOwn.call(obj, key)
            },
            isEmptyObject: function (obj) {
                var name;
                for (name in obj) {
                    return false
                }
                return true
            },
            error: function (msg) {
                throw new Error(msg)
            },
            parseHTML: function (data, context, keepScripts) {
                if (!data || typeof data !== "string") {
                    return null
                }
                if (typeof context === "boolean") {
                    keepScripts = context;
                    context = false
                }
                context = context || document;
                var parsed = rsingleTag.exec(data)
                    , scripts = !keepScripts && [];
                if (parsed) {
                    return [context.createElement(parsed[1])]
                }
                parsed = jQuery.buildFragment([data], context, scripts);
                if (scripts) {
                    jQuery(scripts).remove()
                }
                return jQuery.merge([], parsed.childNodes)
            },
            parseJSON: function (data) {
                if (window.JSON && window.JSON.parse) {
                    return window.JSON.parse(data)
                }
                if (data === null) {
                    return data
                }
                if (typeof data === "string") {
                    data = jQuery.trim(data);
                    if (data) {
                        if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                            return new Function("return " + data)()
                        }
                    }
                }
                jQuery.error("Invalid JSON: " + data)
            },
            parseXML: function (data) {
                var xml, tmp;
                if (!data || typeof data !== "string") {
                    return null
                }
                try {
                    if (window.DOMParser) {
                        tmp = new DOMParser;
                        xml = tmp.parseFromString(data, "text/xml")
                    } else {
                        xml = new ActiveXObject("Microsoft.XMLDOM");
                        xml.async = "false";
                        xml.loadXML(data)
                    }
                } catch (e) {
                    xml = undefined
                }
                if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                    jQuery.error("Invalid XML: " + data)
                }
                return xml
            },
            noop: function () { },
            globalEval: function (data) {
                if (data && jQuery.trim(data)) {
                    (window.execScript || function (data) {
                        window["eval"].call(window, data)
                    }
                    )(data)
                }
            },
            camelCase: function (string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
            },
            nodeName: function (elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
            },
            each: function (obj, callback, args) {
                var value, i = 0, length = obj.length, isArray = isArraylike(obj);
                if (args) {
                    if (isArray) {
                        for (; i < length; i++) {
                            value = callback.apply(obj[i], args);
                            if (value === false) {
                                break
                            }
                        }
                    } else {
                        for (i in obj) {
                            value = callback.apply(obj[i], args);
                            if (value === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (isArray) {
                        for (; i < length; i++) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) {
                                break
                            }
                        }
                    } else {
                        for (i in obj) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) {
                                break
                            }
                        }
                    }
                }
                return obj
            },
            trim: core_trim && !core_trim.call("﻿ ") ? function (text) {
                return text == null ? "" : core_trim.call(text)
            }
                : function (text) {
                    return text == null ? "" : (text + "").replace(rtrim, "")
                }
            ,
            makeArray: function (arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArraylike(Object(arr))) {
                        jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                    } else {
                        core_push.call(ret, arr)
                    }
                }
                return ret
            },
            inArray: function (elem, arr, i) {
                var len;
                if (arr) {
                    if (core_indexOf) {
                        return core_indexOf.call(arr, elem, i)
                    }
                    len = arr.length;
                    i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                    for (; i < len; i++) {
                        if (i in arr && arr[i] === elem) {
                            return i
                        }
                    }
                }
                return -1
            },
            merge: function (first, second) {
                var l = second.length
                    , i = first.length
                    , j = 0;
                if (typeof l === "number") {
                    for (; j < l; j++) {
                        first[i++] = second[j]
                    }
                } else {
                    while (second[j] !== undefined) {
                        first[i++] = second[j++]
                    }
                }
                first.length = i;
                return first
            },
            grep: function (elems, callback, inv) {
                var retVal, ret = [], i = 0, length = elems.length;
                inv = !!inv;
                for (; i < length; i++) {
                    retVal = !!callback(elems[i], i);
                    if (inv !== retVal) {
                        ret.push(elems[i])
                    }
                }
                return ret
            },
            map: function (elems, callback, arg) {
                var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret[ret.length] = value
                        }
                    }
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret[ret.length] = value
                        }
                    }
                }
                return core_concat.apply([], ret)
            },
            guid: 1,
            proxy: function (fn, context) {
                var args, proxy, tmp;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp
                }
                if (!jQuery.isFunction(fn)) {
                    return undefined
                }
                args = core_slice.call(arguments, 2);
                proxy = function () {
                    return fn.apply(context || this, args.concat(core_slice.call(arguments)))
                }
                    ;
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy
            },
            access: function (elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0
                    , length = elems.length
                    , bulk = key == null;
                if (jQuery.type(key) === "object") {
                    chainable = true;
                    for (i in key) {
                        jQuery.access(elems, fn, i, key[i], true, emptyGet, raw)
                    }
                } else if (value !== undefined) {
                    chainable = true;
                    if (!jQuery.isFunction(value)) {
                        raw = true
                    }
                    if (bulk) {
                        if (raw) {
                            fn.call(elems, value);
                            fn = null
                        } else {
                            bulk = fn;
                            fn = function (elem, key, value) {
                                return bulk.call(jQuery(elem), value)
                            }
                        }
                    }
                    if (fn) {
                        for (; i < length; i++) {
                            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
                        }
                    }
                }
                return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
            },
            now: function () {
                return (new Date).getTime()
            },
            swap: function (elem, options, callback, args) {
                var ret, name, old = {};
                for (name in options) {
                    old[name] = elem.style[name];
                    elem.style[name] = options[name]
                }
                ret = callback.apply(elem, args || []);
                for (name in options) {
                    elem.style[name] = old[name]
                }
                return ret
            }
        });
        jQuery.ready.promise = function (obj) {
            if (!readyList) {
                readyList = jQuery.Deferred();
                if (document.readyState === "complete") {
                    setTimeout(jQuery.ready)
                } else if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", completed, false);
                    window.addEventListener("load", completed, false)
                } else {
                    document.attachEvent("onreadystatechange", completed);
                    window.attachEvent("onload", completed);
                    var top = false;
                    try {
                        top = window.frameElement == null && document.documentElement
                    } catch (e) { }
                    if (top && top.doScroll) {
                        (function doScrollCheck() {
                            if (!jQuery.isReady) {
                                try {
                                    top.doScroll("left")
                                } catch (e) {
                                    return setTimeout(doScrollCheck, 50)
                                }
                                detach();
                                jQuery.ready()
                            }
                        }
                        )()
                    }
                }
            }
            return readyList.promise(obj)
        }
            ;
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase()
        });
        function isArraylike(obj) {
            var length = obj.length
                , type = jQuery.type(obj);
            if (jQuery.isWindow(obj)) {
                return false
            }
            if (obj.nodeType === 1 && length) {
                return true
            }
            return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj)
        }
        rootjQuery = jQuery(document);
        (function (window, undefined) {
            var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), hasDuplicate = false, sortOrder = function (a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0
                }
                return 0
            }, strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function (elem) {
                var i = 0
                    , len = this.length;
                for (; i < len; i++) {
                    if (this[i] === elem) {
                        return i
                    }
                }
                return -1
            }
                , booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rsibling = new RegExp(whitespace + "*[+~]"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                    ID: new RegExp("^#(" + characterEncoding + ")"),
                    CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
                    TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + attributes),
                    PSEUDO: new RegExp("^" + pseudos),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + booleans + ")$", "i"),
                    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                }, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function (_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 65536;
                    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
                };
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType
            } catch (e) {
                push = {
                    apply: arr.length ? function (target, els) {
                        push_native.apply(target, slice.call(els))
                    }
                        : function (target, els) {
                            var j = target.length
                                , i = 0;
                            while (target[j++] = els[i++]) { }
                            target.length = j - 1
                        }
                }
            }
            function Sizzle(selector, context, results, seed) {
                var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                    setDocument(context)
                }
                context = context || document;
                results = results || [];
                if (!selector || typeof selector !== "string") {
                    return results
                }
                if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                    return []
                }
                if (documentIsHTML && !seed) {
                    if (match = rquickExpr.exec(selector)) {
                        if (m = match[1]) {
                            if (nodeType === 9) {
                                elem = context.getElementById(m);
                                if (elem && elem.parentNode) {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results
                                    }
                                } else {
                                    return results
                                }
                            } else {
                                if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                    results.push(elem);
                                    return results
                                }
                            }
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results
                        } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results
                        }
                    }
                    if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        nid = old = expando;
                        newContext = context;
                        newSelector = nodeType === 9 && selector;
                        if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                            groups = tokenize(selector);
                            if (old = context.getAttribute("id")) {
                                nid = old.replace(rescape, "\\$&")
                            } else {
                                context.setAttribute("id", nid)
                            }
                            nid = "[id='" + nid + "'] ";
                            i = groups.length;
                            while (i--) {
                                groups[i] = nid + toSelector(groups[i])
                            }
                            newContext = rsibling.test(selector) && context.parentNode || context;
                            newSelector = groups.join(",")
                        }
                        if (newSelector) {
                            try {
                                push.apply(results, newContext.querySelectorAll(newSelector));
                                return results
                            } catch (qsaError) { } finally {
                                if (!old) {
                                    context.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed)
            }
            function createCache() {
                var keys = [];
                function cache(key, value) {
                    if (keys.push(key += " ") > Expr.cacheLength) {
                        delete cache[keys.shift()]
                    }
                    return cache[key] = value
                }
                return cache
            }
            function markFunction(fn) {
                fn[expando] = true;
                return fn
            }
            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return !!fn(div)
                } catch (e) {
                    return false
                } finally {
                    if (div.parentNode) {
                        div.parentNode.removeChild(div)
                    }
                    div = null
                }
            }
            function addHandle(attrs, handler) {
                var arr = attrs.split("|")
                    , i = attrs.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler
                }
            }
            function siblingCheck(a, b) {
                var cur = b && a
                    , diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                if (diff) {
                    return diff
                }
                if (cur) {
                    while (cur = cur.nextSibling) {
                        if (cur === b) {
                            return -1
                        }
                    }
                }
                return a ? 1 : -1
            }
            function createInputPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type
                }
            }
            function createButtonPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type
                }
            }
            function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                    argument = +argument;
                    return markFunction(function (seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                        while (i--) {
                            if (seed[j = matchIndexes[i]]) {
                                seed[j] = !(matches[j] = seed[j])
                            }
                        }
                    })
                })
            }
            isXML = Sizzle.isXML = function (elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false
            }
                ;
            support = Sizzle.support = {};
            setDocument = Sizzle.setDocument = function (node) {
                var doc = node ? node.ownerDocument || node : preferredDoc
                    , parent = doc.defaultView;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document
                }
                document = doc;
                docElem = doc.documentElement;
                documentIsHTML = !isXML(doc);
                if (parent && parent.attachEvent && parent !== parent.top) {
                    parent.attachEvent("onbeforeunload", function () {
                        setDocument()
                    })
                }
                support.attributes = assert(function (div) {
                    div.className = "i";
                    return !div.getAttribute("className")
                });
                support.getElementsByTagName = assert(function (div) {
                    div.appendChild(doc.createComment(""));
                    return !div.getElementsByTagName("*").length
                });
                support.getElementsByClassName = assert(function (div) {
                    div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    div.firstChild.className = "i";
                    return div.getElementsByClassName("i").length === 2
                });
                support.getById = assert(function (div) {
                    docElem.appendChild(div).id = expando;
                    return !doc.getElementsByName || !doc.getElementsByName(expando).length
                });
                if (support.getById) {
                    Expr.find["ID"] = function (id, context) {
                        if (typeof context.getElementById !== strundefined && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m && m.parentNode ? [m] : []
                        }
                    }
                        ;
                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    }
                } else {
                    delete Expr.find["ID"];
                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    }
                }
                Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
                    if (typeof context.getElementsByTagName !== strundefined) {
                        return context.getElementsByTagName(tag)
                    }
                }
                    : function (tag, context) {
                        var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                        if (tag === "*") {
                            while (elem = results[i++]) {
                                if (elem.nodeType === 1) {
                                    tmp.push(elem)
                                }
                            }
                            return tmp
                        }
                        return results
                    }
                    ;
                Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
                    if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                        return context.getElementsByClassName(className)
                    }
                }
                    ;
                rbuggyMatches = [];
                rbuggyQSA = [];
                if (support.qsa = rnative.test(doc.querySelectorAll)) {
                    assert(function (div) {
                        div.innerHTML = "<select><option selected=''></option></select>";
                        if (!div.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                        }
                        if (!div.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked")
                        }
                    });
                    assert(function (div) {
                        var input = doc.createElement("input");
                        input.setAttribute("type", "hidden");
                        div.appendChild(input).setAttribute("t", "");
                        if (div.querySelectorAll("[t^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                        }
                        if (!div.querySelectorAll(":enabled").length) {
                            rbuggyQSA.push(":enabled", ":disabled")
                        }
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:")
                    })
                }
                if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                    assert(function (div) {
                        support.disconnectedMatch = matches.call(div, "div");
                        matches.call(div, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos)
                    })
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a
                        , bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
                }
                    : function (a, b) {
                        if (b) {
                            while (b = b.parentNode) {
                                if (b === a) {
                                    return true
                                }
                            }
                        }
                        return false
                    }
                    ;
                sortOrder = docElem.compareDocumentPosition ? function (a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0
                    }
                    var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                    if (compare) {
                        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                            if (a === doc || contains(preferredDoc, a)) {
                                return -1
                            }
                            if (b === doc || contains(preferredDoc, b)) {
                                return 1
                            }
                            return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
                        }
                        return compare & 4 ? -1 : 1
                    }
                    return a.compareDocumentPosition ? -1 : 1
                }
                    : function (a, b) {
                        var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                        if (a === b) {
                            hasDuplicate = true;
                            return 0
                        } else if (!aup || !bup) {
                            return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
                        } else if (aup === bup) {
                            return siblingCheck(a, b)
                        }
                        cur = a;
                        while (cur = cur.parentNode) {
                            ap.unshift(cur)
                        }
                        cur = b;
                        while (cur = cur.parentNode) {
                            bp.unshift(cur)
                        }
                        while (ap[i] === bp[i]) {
                            i++
                        }
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                    }
                    ;
                return doc
            }
                ;
            Sizzle.matches = function (expr, elements) {
                return Sizzle(expr, null, null, elements)
            }
                ;
            Sizzle.matchesSelector = function (elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem)
                }
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret
                        }
                    } catch (e) { }
                }
                return Sizzle(expr, document, null, [elem]).length > 0
            }
                ;
            Sizzle.contains = function (context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context)
                }
                return contains(context, elem)
            }
                ;
            Sizzle.attr = function (elem, name) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem)
                }
                var fn = Expr.attrHandle[name.toLowerCase()]
                    , val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val
            }
                ;
            Sizzle.error = function (msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg)
            }
                ;
            Sizzle.uniqueSort = function (results) {
                var elem, duplicates = [], j = 0, i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while (elem = results[i++]) {
                        if (elem === results[i]) {
                            j = duplicates.push(i)
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1)
                    }
                }
                return results
            }
                ;
            getText = Sizzle.getText = function (elem) {
                var node, ret = "", i = 0, nodeType = elem.nodeType;
                if (!nodeType) {
                    for (; node = elem[i]; i++) {
                        ret += getText(node)
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem)
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue
                }
                return ret
            }
                ;
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " "
                        }
                        return match.slice(0, 4)
                    },
                    CHILD: function (match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0])
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +(match[7] + match[8] || match[3] === "odd")
                        } else if (match[3]) {
                            Sizzle.error(match[0])
                        }
                        return match
                    },
                    PSEUDO: function (match) {
                        var excess, unquoted = !match[5] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null
                        }
                        if (match[3] && match[4] !== undefined) {
                            match[2] = match[4]
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess)
                        }
                        return match.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function (nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function () {
                            return true
                        }
                            : function (elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                            }
                    },
                    CLASS: function (className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (name, operator, check) {
                        return function (elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!="
                            }
                            if (!operator) {
                                return true
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false
                        }
                    },
                    CHILD: function (type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth"
                            , forward = type.slice(-4) !== "last"
                            , ofType = what === "of-type";
                        return first === 1 && last === 0 ? function (elem) {
                            return !!elem.parentNode
                        }
                            : function (elem, context, xml) {
                                var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                                if (parent) {
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while (node = node[dir]) {
                                                if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                    return false
                                                }
                                            }
                                            start = dir = type === "only" && !start && "nextSibling"
                                        }
                                        return true
                                    }
                                    start = [forward ? parent.firstChild : parent.lastChild];
                                    if (forward && useCache) {
                                        outerCache = parent[expando] || (parent[expando] = {});
                                        cache = outerCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = cache[0] === dirruns && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                outerCache[type] = [dirruns, nodeIndex, diff];
                                                break
                                            }
                                        }
                                    } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                        diff = cache[1]
                                    } else {
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    (node[expando] || (node[expando] = {}))[type] = [dirruns, diff]
                                                }
                                                if (node === elem) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    diff -= last;
                                    return diff === first || diff % first === 0 && diff / first >= 0
                                }
                            }
                    },
                    PSEUDO: function (pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument)
                        }
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                                var idx, matched = fn(seed, argument), i = matched.length;
                                while (i--) {
                                    idx = indexOf.call(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i])
                                }
                            }) : function (elem) {
                                return fn(elem, 0, args)
                            }
                        }
                        return fn
                    }
                },
                pseudos: {
                    not: markFunction(function (selector) {
                        var input = []
                            , results = []
                            , matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                            while (i--) {
                                if (elem = unmatched[i]) {
                                    seed[i] = !(matches[i] = elem)
                                }
                            }
                        }) : function (elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            return !results.pop()
                        }
                    }),
                    has: markFunction(function (selector) {
                        return function (elem) {
                            return Sizzle(selector, elem).length > 0
                        }
                    }),
                    contains: markFunction(function (text) {
                        return function (elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                        }
                    }),
                    lang: markFunction(function (lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang)
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function (elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false
                        }
                    }),
                    target: function (elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id
                    },
                    root: function (elem) {
                        return elem === docElem
                    },
                    focus: function (elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                    },
                    enabled: function (elem) {
                        return elem.disabled === false
                    },
                    disabled: function (elem) {
                        return elem.disabled === true
                    },
                    checked: function (elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
                    },
                    selected: function (elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex
                        }
                        return elem.selected === true
                    },
                    empty: function (elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function (elem) {
                        return !Expr.pseudos["empty"](elem)
                    },
                    header: function (elem) {
                        return rheader.test(elem.nodeName)
                    },
                    input: function (elem) {
                        return rinputs.test(elem.nodeName)
                    },
                    button: function (elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button"
                    },
                    text: function (elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type)
                    },
                    first: createPositionalPseudo(function () {
                        return [0]
                    }),
                    last: createPositionalPseudo(function (matchIndexes, length) {
                        return [length - 1]
                    }),
                    eq: createPositionalPseudo(function (matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument]
                    }),
                    even: createPositionalPseudo(function (matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    odd: createPositionalPseudo(function (matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    lt: createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    gt: createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    })
                }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"];
            for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
                Expr.pseudos[i] = createInputPseudo(i)
            }
            for (i in {
                submit: true,
                reset: true
            }) {
                Expr.pseudos[i] = createButtonPseudo(i)
            }
            function setFilters() { }
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters;
            function tokenize(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0)
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar
                        }
                        groups.push(tokens = [])
                    }
                    matched = false;
                    if (match = rcombinators.exec(soFar)) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length)
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length)
                        }
                    }
                    if (!matched) {
                        break
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
            }
            function toSelector(tokens) {
                var i = 0
                    , len = tokens.length
                    , selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value
                }
                return selector
            }
            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir
                    , checkNonElements = base && dir === "parentNode"
                    , doneName = done++;
                return combinator.first ? function (elem, context, xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml)
                        }
                    }
                }
                    : function (elem, context, xml) {
                        var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                        if (xml) {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true
                                    }
                                }
                            }
                        } else {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {});
                                    if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                        if ((data = cache[1]) === true || data === cachedruns) {
                                            return data === true
                                        }
                                    } else {
                                        cache = outerCache[dir] = [dirkey];
                                        cache[1] = matcher(elem, context, xml) || cachedruns;
                                        if (cache[1] === true) {
                                            return true
                                        }
                                    }
                                }
                            }
                        }
                    }
            }
            function elementMatcher(matchers) {
                return matchers.length > 1 ? function (elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false
                        }
                    }
                    return true
                }
                    : matchers[0]
            }
            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                for (; i < len; i++) {
                    if (elem = unmatched[i]) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i)
                            }
                        }
                    }
                }
                return newUnmatched
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter)
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector)
                }
                return markFunction(function (seed, results, context, xml) {
                    var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml)
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if (elem = temp[i]) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if (elem = matcherOut[i]) {
                                        temp.push(matcherIn[i] = elem)
                                    }
                                }
                                postFinder(null, matcherOut = [], temp, xml)
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem)
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml)
                        } else {
                            push.apply(results, matcherOut)
                        }
                    }
                })
            }
            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function (elem) {
                    return elem === checkContext
                }, implicitRelative, true), matchAnyContext = addCombinator(function (elem) {
                    return indexOf.call(checkContext, elem) > -1
                }, implicitRelative, true), matchers = [function (elem, context, xml) {
                    return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml))
                }
                ];
                for (; i < len; i++) {
                    if (matcher = Expr.relative[tokens[i].type]) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)]
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                        }
                        matchers.push(matcher)
                    }
                }
                return elementMatcher(matchers)
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var matcherCachedRuns = 0
                    , bySet = setMatchers.length > 0
                    , byElement = elementMatchers.length > 0
                    , superMatcher = function (seed, context, xml, results, expandContext) {
                        var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                        if (outermost) {
                            outermostContext = context !== document && context;
                            cachedruns = matcherCachedRuns
                        }
                        for (; (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                while (matcher = elementMatchers[j++]) {
                                    if (matcher(elem, context, xml)) {
                                        results.push(elem);
                                        break
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                    cachedruns = ++matcherCachedRuns
                                }
                            }
                            if (bySet) {
                                if (elem = !matcher && elem) {
                                    matchedCount--
                                }
                                if (seed) {
                                    unmatched.push(elem)
                                }
                            }
                        }
                        matchedCount += i;
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while (matcher = setMatchers[j++]) {
                                matcher(unmatched, setMatched, context, xml)
                            }
                            if (seed) {
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results)
                                        }
                                    }
                                }
                                setMatched = condense(setMatched)
                            }
                            push.apply(results, setMatched);
                            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                                Sizzle.uniqueSort(results)
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup
                        }
                        return unmatched
                    };
                return bySet ? markFunction(superMatcher) : superMatcher
            }
            compile = Sizzle.compile = function (selector, group) {
                var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!group) {
                        group = tokenize(selector)
                    }
                    i = group.length;
                    while (i--) {
                        cached = matcherFromTokens(group[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached)
                        } else {
                            elementMatchers.push(cached)
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers))
                }
                return cached
            }
                ;
            function multipleContexts(selector, contexts, results) {
                var i = 0
                    , len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results)
                }
                return results
            }
            function select(selector, context, results, seed) {
                var i, tokens, token, type, find, match = tokenize(selector);
                if (!seed) {
                    if (match.length === 1) {
                        tokens = match[0] = match[0].slice(0);
                        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                            if (!context) {
                                return results
                            }
                            selector = selector.slice(tokens.shift().value.length)
                        }
                        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                        while (i--) {
                            token = tokens[i];
                            if (Expr.relative[type = token.type]) {
                                break
                            }
                            if (find = Expr.find[type]) {
                                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results
                                    }
                                    break
                                }
                            }
                        }
                    }
                }
                compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
                return results
            }
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = hasDuplicate;
            setDocument();
            support.sortDetached = assert(function (div1) {
                return div1.compareDocumentPosition(document.createElement("div")) & 1
            });
            if (!assert(function (div) {
                div.innerHTML = "<a href='#'></a>";
                return div.firstChild.getAttribute("href") === "#"
            })) {
                addHandle("type|href|height|width", function (elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!support.attributes || !assert(function (div) {
                div.innerHTML = "<input/>";
                div.firstChild.setAttribute("value", "");
                return div.firstChild.getAttribute("value") === ""
            })) {
                addHandle("value", function (elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue
                    }
                })
            }
            if (!assert(function (div) {
                return div.getAttribute("disabled") == null
            })) {
                addHandle(booleans, function (elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return (val = elem.getAttributeNode(name)) && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null
                    }
                })
            }
            jQuery.find = Sizzle;
            jQuery.expr = Sizzle.selectors;
            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.unique = Sizzle.uniqueSort;
            jQuery.text = Sizzle.getText;
            jQuery.isXMLDoc = Sizzle.isXML;
            jQuery.contains = Sizzle.contains
        }
        )(window);
        var optionsCache = {};
        function createOptions(options) {
            var object = optionsCache[options] = {};
            jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
                object[flag] = true
            });
            return object
        }
        jQuery.Callbacks = function (options) {
            options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, firingLength, firingIndex, firingStart, list = [], stack = !options.once && [], fire = function (data) {
                memory = options.memory && data;
                fired = true;
                firingIndex = firingStart || 0;
                firingStart = 0;
                firingLength = list.length;
                firing = true;
                for (; list && firingIndex < firingLength; firingIndex++) {
                    if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                        memory = false;
                        break
                    }
                }
                firing = false;
                if (list) {
                    if (stack) {
                        if (stack.length) {
                            fire(stack.shift())
                        }
                    } else if (memory) {
                        list = []
                    } else {
                        self.disable()
                    }
                }
            }, self = {
                add: function () {
                    if (list) {
                        var start = list.length;
                        (function add(args) {
                            jQuery.each(args, function (_, arg) {
                                var type = jQuery.type(arg);
                                if (type === "function") {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg)
                                    }
                                } else if (arg && arg.length && type !== "string") {
                                    add(arg)
                                }
                            })
                        }
                        )(arguments);
                        if (firing) {
                            firingLength = list.length
                        } else if (memory) {
                            firingStart = start;
                            fire(memory)
                        }
                    }
                    return this
                },
                remove: function () {
                    if (list) {
                        jQuery.each(arguments, function (_, arg) {
                            var index;
                            while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                list.splice(index, 1);
                                if (firing) {
                                    if (index <= firingLength) {
                                        firingLength--
                                    }
                                    if (index <= firingIndex) {
                                        firingIndex--
                                    }
                                }
                            }
                        })
                    }
                    return this
                },
                has: function (fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length)
                },
                empty: function () {
                    list = [];
                    firingLength = 0;
                    return this
                },
                disable: function () {
                    list = stack = memory = undefined;
                    return this
                },
                disabled: function () {
                    return !list
                },
                lock: function () {
                    stack = undefined;
                    if (!memory) {
                        self.disable()
                    }
                    return this
                },
                locked: function () {
                    return !stack
                },
                fireWith: function (context, args) {
                    if (list && (!fired || stack)) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        if (firing) {
                            stack.push(args)
                        } else {
                            fire(args)
                        }
                    }
                    return this
                },
                fire: function () {
                    self.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!fired
                }
            };
            return self
        }
            ;
        jQuery.extend({
            Deferred: function (func) {
                var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]]
                    , state = "pending"
                    , promise = {
                        state: function () {
                            return state
                        },
                        always: function () {
                            deferred.done(arguments).fail(arguments);
                            return this
                        },
                        then: function () {
                            var fns = arguments;
                            return jQuery.Deferred(function (newDefer) {
                                jQuery.each(tuples, function (i, tuple) {
                                    var action = tuple[0]
                                        , fn = jQuery.isFunction(fns[i]) && fns[i];
                                    deferred[tuple[1]](function () {
                                        var returned = fn && fn.apply(this, arguments);
                                        if (returned && jQuery.isFunction(returned.promise)) {
                                            returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
                                        } else {
                                            newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                        }
                                    })
                                });
                                fns = null
                            }).promise()
                        },
                        promise: function (obj) {
                            return obj != null ? jQuery.extend(obj, promise) : promise
                        }
                    }
                    , deferred = {};
                promise.pipe = promise.then;
                jQuery.each(tuples, function (i, tuple) {
                    var list = tuple[2]
                        , stateString = tuple[3];
                    promise[tuple[1]] = list.add;
                    if (stateString) {
                        list.add(function () {
                            state = stateString
                        }, tuples[i ^ 1][2].disable, tuples[2][2].lock)
                    }
                    deferred[tuple[0]] = function () {
                        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                        return this
                    }
                        ;
                    deferred[tuple[0] + "With"] = list.fireWith
                });
                promise.promise(deferred);
                if (func) {
                    func.call(deferred, deferred)
                }
                return deferred
            },
            when: function (subordinate) {
                var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function (i, contexts, values) {
                    return function (value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                        if (values === progressValues) {
                            deferred.notifyWith(contexts, values)
                        } else if (!--remaining) {
                            deferred.resolveWith(contexts, values)
                        }
                    }
                }, progressValues, progressContexts, resolveContexts;
                if (length > 1) {
                    progressValues = new Array(length);
                    progressContexts = new Array(length);
                    resolveContexts = new Array(length);
                    for (; i < length; i++) {
                        if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues))
                        } else {
                            --remaining
                        }
                    }
                }
                if (!remaining) {
                    deferred.resolveWith(resolveContexts, resolveValues)
                }
                return deferred.promise()
            }
        });
        jQuery.support = function (support) {
            var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
            div.setAttribute("className", "t");
            div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            all = div.getElementsByTagName("*") || [];
            a = div.getElementsByTagName("a")[0];
            if (!a || !a.style || !all.length) {
                return support
            }
            select = document.createElement("select");
            opt = select.appendChild(document.createElement("option"));
            input = div.getElementsByTagName("input")[0];
            a.style.cssText = "top:1px;float:left;opacity:.5";
            support.getSetAttribute = div.className !== "t";
            support.leadingWhitespace = div.firstChild.nodeType === 3;
            support.tbody = !div.getElementsByTagName("tbody").length;
            support.htmlSerialize = !!div.getElementsByTagName("link").length;
            support.style = /top/.test(a.getAttribute("style"));
            support.hrefNormalized = a.getAttribute("href") === "/a";
            support.opacity = /^0.5/.test(a.style.opacity);
            support.cssFloat = !!a.style.cssFloat;
            support.checkOn = !!input.value;
            support.optSelected = opt.selected;
            support.enctype = !!document.createElement("form").enctype;
            support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
            support.inlineBlockNeedsLayout = false;
            support.shrinkWrapBlocks = false;
            support.pixelPosition = false;
            support.deleteExpando = true;
            support.noCloneEvent = true;
            support.reliableMarginRight = true;
            support.boxSizingReliable = true;
            input.checked = true;
            support.noCloneChecked = input.cloneNode(true).checked;
            select.disabled = true;
            support.optDisabled = !opt.disabled;
            try {
                delete div.test
            } catch (e) {
                support.deleteExpando = false
            }
            input = document.createElement("input");
            input.setAttribute("value", "");
            support.input = input.getAttribute("value") === "";
            input.value = "t";
            input.setAttribute("type", "radio");
            support.radioValue = input.value === "t";
            input.setAttribute("checked", "t");
            input.setAttribute("name", "t");
            fragment = document.createDocumentFragment();
            fragment.appendChild(input);
            support.appendChecked = input.checked;
            support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
            if (div.attachEvent) {
                div.attachEvent("onclick", function () {
                    support.noCloneEvent = false
                });
                div.cloneNode(true).click()
            }
            for (i in {
                submit: true,
                change: true,
                focusin: true
            }) {
                div.setAttribute(eventName = "on" + i, "t");
                support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            for (i in jQuery(support)) {
                break
            }
            support.ownLast = i !== "0";
            jQuery(function () {
                var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", body = document.getElementsByTagName("body")[0];
                if (!body) {
                    return
                }
                container = document.createElement("div");
                container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
                body.appendChild(container).appendChild(div);
                div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                tds = div.getElementsByTagName("td");
                tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                isSupported = tds[0].offsetHeight === 0;
                tds[0].style.display = "";
                tds[1].style.display = "none";
                support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
                div.innerHTML = "";
                div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                jQuery.swap(body, body.style.zoom != null ? {
                    zoom: 1
                } : {}, function () {
                    support.boxSizing = div.offsetWidth === 4
                });
                if (window.getComputedStyle) {
                    support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                    support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                        width: "4px"
                    }).width === "4px";
                    marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = divReset;
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight)
                }
                if (typeof div.style.zoom !== core_strundefined) {
                    div.innerHTML = "";
                    div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                    support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                    div.style.display = "block";
                    div.innerHTML = "<div></div>";
                    div.firstChild.style.width = "5px";
                    support.shrinkWrapBlocks = div.offsetWidth !== 3;
                    if (support.inlineBlockNeedsLayout) {
                        body.style.zoom = 1
                    }
                }
                body.removeChild(container);
                container = div = tds = marginDiv = null
            });
            all = select = fragment = opt = a = input = null;
            return support
        }({});
        var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
            , rmultiDash = /([A-Z])/g;
        function internalData(elem, name, data, pvt) {
            if (!jQuery.acceptData(elem)) {
                return
            }
            var ret, thisCache, internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
            if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
                return
            }
            if (!id) {
                if (isNode) {
                    id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++
                } else {
                    id = internalKey
                }
            }
            if (!cache[id]) {
                cache[id] = isNode ? {} : {
                    toJSON: jQuery.noop
                }
            }
            if (typeof name === "object" || typeof name === "function") {
                if (pvt) {
                    cache[id] = jQuery.extend(cache[id], name)
                } else {
                    cache[id].data = jQuery.extend(cache[id].data, name)
                }
            }
            thisCache = cache[id];
            if (!pvt) {
                if (!thisCache.data) {
                    thisCache.data = {}
                }
                thisCache = thisCache.data
            }
            if (data !== undefined) {
                thisCache[jQuery.camelCase(name)] = data
            }
            if (typeof name === "string") {
                ret = thisCache[name];
                if (ret == null) {
                    ret = thisCache[jQuery.camelCase(name)]
                }
            } else {
                ret = thisCache
            }
            return ret
        }
        function internalRemoveData(elem, name, pvt) {
            if (!jQuery.acceptData(elem)) {
                return
            }
            var thisCache, i, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
            if (!cache[id]) {
                return
            }
            if (name) {
                thisCache = pvt ? cache[id] : cache[id].data;
                if (thisCache) {
                    if (!jQuery.isArray(name)) {
                        if (name in thisCache) {
                            name = [name]
                        } else {
                            name = jQuery.camelCase(name);
                            if (name in thisCache) {
                                name = [name]
                            } else {
                                name = name.split(" ")
                            }
                        }
                    } else {
                        name = name.concat(jQuery.map(name, jQuery.camelCase))
                    }
                    i = name.length;
                    while (i--) {
                        delete thisCache[name[i]]
                    }
                    if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                        return
                    }
                }
            }
            if (!pvt) {
                delete cache[id].data;
                if (!isEmptyDataObject(cache[id])) {
                    return
                }
            }
            if (isNode) {
                jQuery.cleanData([elem], true)
            } else if (jQuery.support.deleteExpando || cache != cache.window) {
                delete cache[id]
            } else {
                cache[id] = null
            }
        }
        jQuery.extend({
            cache: {},
            noData: {
                applet: true,
                embed: true,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (elem) {
                elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
                return !!elem && !isEmptyDataObject(elem)
            },
            data: function (elem, name, data) {
                return internalData(elem, name, data)
            },
            removeData: function (elem, name) {
                return internalRemoveData(elem, name)
            },
            _data: function (elem, name, data) {
                return internalData(elem, name, data, true)
            },
            _removeData: function (elem, name) {
                return internalRemoveData(elem, name, true)
            },
            acceptData: function (elem) {
                if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                    return false
                }
                var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
                return !noData || noData !== true && elem.getAttribute("classid") === noData
            }
        });
        jQuery.fn.extend({
            data: function (key, value) {
                var attrs, name, data = null, i = 0, elem = this[0];
                if (key === undefined) {
                    if (this.length) {
                        data = jQuery.data(elem);
                        if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                            attrs = elem.attributes;
                            for (; i < attrs.length; i++) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name])
                                }
                            }
                            jQuery._data(elem, "parsedAttrs", true)
                        }
                    }
                    return data
                }
                if (typeof key === "object") {
                    return this.each(function () {
                        jQuery.data(this, key)
                    })
                }
                return arguments.length > 1 ? this.each(function () {
                    jQuery.data(this, key, value)
                }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null
            },
            removeData: function (key) {
                return this.each(function () {
                    jQuery.removeData(this, key)
                })
            }
        });
        function dataAttr(elem, key, data) {
            if (data === undefined && elem.nodeType === 1) {
                var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
                    } catch (e) { }
                    jQuery.data(elem, key, data)
                } else {
                    data = undefined
                }
            }
            return data
        }
        function isEmptyDataObject(obj) {
            var name;
            for (name in obj) {
                if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                    continue
                }
                if (name !== "toJSON") {
                    return false
                }
            }
            return true
        }
        jQuery.extend({
            queue: function (elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = jQuery._data(elem, type);
                    if (data) {
                        if (!queue || jQuery.isArray(data)) {
                            queue = jQuery._data(elem, type, jQuery.makeArray(data))
                        } else {
                            queue.push(data)
                        }
                    }
                    return queue || []
                }
            },
            dequeue: function (elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type)
                    , startLength = queue.length
                    , fn = queue.shift()
                    , hooks = jQuery._queueHooks(elem, type)
                    , next = function () {
                        jQuery.dequeue(elem, type)
                    };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress")
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks)
                }
                if (!startLength && hooks) {
                    hooks.empty.fire()
                }
            },
            _queueHooks: function (elem, type) {
                var key = type + "queueHooks";
                return jQuery._data(elem, key) || jQuery._data(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function () {
                        jQuery._removeData(elem, type + "queue");
                        jQuery._removeData(elem, key)
                    })
                })
            }
        });
        jQuery.fn.extend({
            queue: function (type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type)
                }
                return data === undefined ? this : this.each(function () {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type)
                    }
                })
            },
            dequeue: function (type) {
                return this.each(function () {
                    jQuery.dequeue(this, type)
                })
            },
            delay: function (time, type) {
                time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                type = type || "fx";
                return this.queue(type, function (next, hooks) {
                    var timeout = setTimeout(next, time);
                    hooks.stop = function () {
                        clearTimeout(timeout)
                    }
                })
            },
            clearQueue: function (type) {
                return this.queue(type || "fx", [])
            },
            promise: function (type, obj) {
                var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function () {
                    if (!--count) {
                        defer.resolveWith(elements, [elements])
                    }
                };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined
                }
                type = type || "fx";
                while (i--) {
                    tmp = jQuery._data(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve)
                    }
                }
                resolve();
                return defer.promise(obj)
            }
        });
        var nodeHook, boolHook, rclass = /[\t\r\n\f]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute, getSetInput = jQuery.support.input;
        jQuery.fn.extend({
            attr: function (name, value) {
                return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1)
            },
            removeAttr: function (name) {
                return this.each(function () {
                    jQuery.removeAttr(this, name)
                })
            },
            prop: function (name, value) {
                return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1)
            },
            removeProp: function (name) {
                name = jQuery.propFix[name] || name;
                return this.each(function () {
                    try {
                        this[name] = undefined;
                        delete this[name]
                    } catch (e) { }
                })
            },
            addClass: function (value) {
                var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value === "string" && value;
                if (jQuery.isFunction(value)) {
                    return this.each(function (j) {
                        jQuery(this).addClass(value.call(this, j, this.className))
                    })
                }
                if (proceed) {
                    classes = (value || "").match(core_rnotwhite) || [];
                    for (; i < len; i++) {
                        elem = this[i];
                        cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " "
                                }
                            }
                            elem.className = jQuery.trim(cur)
                        }
                    }
                }
                return this
            },
            removeClass: function (value) {
                var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === "string" && value;
                if (jQuery.isFunction(value)) {
                    return this.each(function (j) {
                        jQuery(this).removeClass(value.call(this, j, this.className))
                    })
                }
                if (proceed) {
                    classes = (value || "").match(core_rnotwhite) || [];
                    for (; i < len; i++) {
                        elem = this[i];
                        cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                while (cur.indexOf(" " + clazz + " ") >= 0) {
                                    cur = cur.replace(" " + clazz + " ", " ")
                                }
                            }
                            elem.className = value ? jQuery.trim(cur) : ""
                        }
                    }
                }
                return this
            },
            toggleClass: function (value, stateVal) {
                var type = typeof value;
                if (typeof stateVal === "boolean" && type === "string") {
                    return stateVal ? this.addClass(value) : this.removeClass(value)
                }
                if (jQuery.isFunction(value)) {
                    return this.each(function (i) {
                        jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
                    })
                }
                return this.each(function () {
                    if (type === "string") {
                        var className, i = 0, self = jQuery(this), classNames = value.match(core_rnotwhite) || [];
                        while (className = classNames[i++]) {
                            if (self.hasClass(className)) {
                                self.removeClass(className)
                            } else {
                                self.addClass(className)
                            }
                        }
                    } else if (type === core_strundefined || type === "boolean") {
                        if (this.className) {
                            jQuery._data(this, "__className__", this.className)
                        }
                        this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || ""
                    }
                })
            },
            hasClass: function (selector) {
                var className = " " + selector + " "
                    , i = 0
                    , l = this.length;
                for (; i < l; i++) {
                    if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                        return true
                    }
                }
                return false
            },
            val: function (value) {
                var ret, hooks, isFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret
                        }
                        ret = elem.value;
                        return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret
                    }
                    return
                }
                isFunction = jQuery.isFunction(value);
                return this.each(function (i) {
                    var val;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (isFunction) {
                        val = value.call(this, i, jQuery(this).val())
                    } else {
                        val = value
                    }
                    if (val == null) {
                        val = ""
                    } else if (typeof val === "number") {
                        val += ""
                    } else if (jQuery.isArray(val)) {
                        val = jQuery.map(val, function (value) {
                            return value == null ? "" : value + ""
                        })
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val
                    }
                })
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function (elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return val != null ? val : elem.text
                    }
                },
                select: {
                    get: function (elem) {
                        var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                        for (; i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) {
                                    return value
                                }
                                values.push(value)
                            }
                        }
                        return values
                    },
                    set: function (elem, value) {
                        var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                        while (i--) {
                            option = options[i];
                            if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
                                optionSet = true
                            }
                        }
                        if (!optionSet) {
                            elem.selectedIndex = -1
                        }
                        return values
                    }
                }
            },
            attr: function (elem, name, value) {
                var hooks, ret, nType = elem.nodeType;
                if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return
                }
                if (typeof elem.getAttribute === core_strundefined) {
                    return jQuery.prop(elem, name, value)
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = name.toLowerCase();
                    hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name)
                    } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret
                    } else {
                        elem.setAttribute(name, value + "");
                        return value
                    }
                } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret
                } else {
                    ret = jQuery.find.attr(elem, name);
                    return ret == null ? undefined : ret
                }
            },
            removeAttr: function (elem, value) {
                var name, propName, i = 0, attrNames = value && value.match(core_rnotwhite);
                if (attrNames && elem.nodeType === 1) {
                    while (name = attrNames[i++]) {
                        propName = jQuery.propFix[name] || name;
                        if (jQuery.expr.match.bool.test(name)) {
                            if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                                elem[propName] = false
                            } else {
                                elem[jQuery.camelCase("default-" + name)] = elem[propName] = false
                            }
                        } else {
                            jQuery.attr(elem, name, "")
                        }
                        elem.removeAttribute(getSetAttribute ? name : propName)
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function (elem, value) {
                        if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val
                            }
                            return value
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (elem, name, value) {
                var ret, hooks, notxml, nType = elem.nodeType;
                if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return
                }
                notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
                if (notxml) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name]
                }
                if (value !== undefined) {
                    return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value
                } else {
                    return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function (elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                    }
                }
            }
        });
        boolHook = {
            set: function (elem, value, name) {
                if (value === false) {
                    jQuery.removeAttr(elem, name)
                } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                    elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name)
                } else {
                    elem[jQuery.camelCase("default-" + name)] = elem[name] = true
                }
                return name
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
            var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
            jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
                var fn = jQuery.expr.attrHandle[name]
                    , ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
                jQuery.expr.attrHandle[name] = fn;
                return ret
            }
                : function (elem, name, isXML) {
                    return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null
                }
        });
        if (!getSetInput || !getSetAttribute) {
            jQuery.attrHooks.value = {
                set: function (elem, value, name) {
                    if (jQuery.nodeName(elem, "input")) {
                        elem.defaultValue = value
                    } else {
                        return nodeHook && nodeHook.set(elem, value, name)
                    }
                }
            }
        }
        if (!getSetAttribute) {
            nodeHook = {
                set: function (elem, value, name) {
                    var ret = elem.getAttributeNode(name);
                    if (!ret) {
                        elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name))
                    }
                    ret.value = value += "";
                    return name === "value" || value === elem.getAttribute(name) ? value : undefined
                }
            };
            jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function (elem, name, isXML) {
                var ret;
                return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null
            }
                ;
            jQuery.valHooks.button = {
                get: function (elem, name) {
                    var ret = elem.getAttributeNode(name);
                    return ret && ret.specified ? ret.value : undefined
                },
                set: nodeHook.set
            };
            jQuery.attrHooks.contenteditable = {
                set: function (elem, value, name) {
                    nodeHook.set(elem, value === "" ? false : value, name)
                }
            };
            jQuery.each(["width", "height"], function (i, name) {
                jQuery.attrHooks[name] = {
                    set: function (elem, value) {
                        if (value === "") {
                            elem.setAttribute(name, "auto");
                            return value
                        }
                    }
                }
            })
        }
        if (!jQuery.support.hrefNormalized) {
            jQuery.each(["href", "src"], function (i, name) {
                jQuery.propHooks[name] = {
                    get: function (elem) {
                        return elem.getAttribute(name, 4)
                    }
                }
            })
        }
        if (!jQuery.support.style) {
            jQuery.attrHooks.style = {
                get: function (elem) {
                    return elem.style.cssText || undefined
                },
                set: function (elem, value) {
                    return elem.style.cssText = value + ""
                }
            }
        }
        if (!jQuery.support.optSelected) {
            jQuery.propHooks.selected = {
                get: function (elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) {
                            parent.parentNode.selectedIndex
                        }
                    }
                    return null
                }
            }
        }
        jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            jQuery.propFix[this.toLowerCase()] = this
        });
        if (!jQuery.support.enctype) {
            jQuery.propFix.enctype = "encoding"
        }
        jQuery.each(["radio", "checkbox"], function () {
            jQuery.valHooks[this] = {
                set: function (elem, value) {
                    if (jQuery.isArray(value)) {
                        return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0
                    }
                }
            };
            if (!jQuery.support.checkOn) {
                jQuery.valHooks[this].get = function (elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value
                }
            }
        });
        var rformElems = /^(?:input|select|textarea)$/i
            , rkeyEvent = /^key/
            , rmouseEvent = /^(?:mouse|contextmenu)|click/
            , rfocusMorph = /^(?:focusinfocus|focusoutblur)$/
            , rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
        function returnTrue() {
            return true
        }
        function returnFalse() {
            return false
        }
        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (err) { }
        }
        jQuery.event = {
            global: {},
            add: function (elem, types, handler, data, selector) {
                var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
                if (!elemData) {
                    return
                }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector
                }
                if (!handler.guid) {
                    handler.guid = jQuery.guid++
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {}
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function (e) {
                        return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined
                    }
                        ;
                    eventHandle.elem = elem
                }
                types = (types || "").match(core_rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        continue
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle, false)
                            } else if (elem.attachEvent) {
                                elem.attachEvent("on" + type, eventHandle)
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid
                        }
                    }
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj)
                    } else {
                        handlers.push(handleObj)
                    }
                    jQuery.event.global[type] = true
                }
                elem = null
            },
            remove: function (elem, types, handler, selector, mappedTypes) {
                var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
                if (!elemData || !(events = elemData.events)) {
                    return
                }
                types = (types || "").match(core_rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, true)
                        }
                        continue
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj)
                            }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                            jQuery.removeEvent(elem, type, elemData.handle)
                        }
                        delete events[type]
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    delete elemData.handle;
                    jQuery._removeData(elem, "events")
                }
            },
            trigger: function (event, data, elem, onlyHandlers) {
                var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document], type = core_hasOwn.call(event, "type") ? event.type : event, namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return
                }
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return
                }
                if (type.indexOf(".") >= 0) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort()
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) {
                    event.target = elem
                }
                data = data == null ? [event] : jQuery.makeArray(data, [event]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                    return
                }
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode
                    }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur
                    }
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                    }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data)
                    }
                    handle = ontype && cur[ontype];
                    if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                        event.preventDefault()
                    }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                        if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null
                            }
                            jQuery.event.triggered = type;
                            try {
                                elem[type]()
                            } catch (e) { }
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp
                            }
                        }
                    }
                }
                return event.result
            },
            dispatch: function (event) {
                event = jQuery.event.fix(event);
                var i, ret, handleObj, matched, j, handlerQueue = [], args = core_slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
                args[0] = event;
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return
                }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) {
                    special.postDispatch.call(this, event)
                }
                return event.result
            },
            handlers: function (event, handlers) {
                var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                    for (; cur != this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                            matches = [];
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matches[sel] === undefined) {
                                    matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length
                                }
                                if (matches[sel]) {
                                    matches.push(handleObj)
                                }
                            }
                            if (matches.length) {
                                handlerQueue.push({
                                    elem: cur,
                                    handlers: matches
                                })
                            }
                        }
                    }
                }
                if (delegateCount < handlers.length) {
                    handlerQueue.push({
                        elem: this,
                        handlers: handlers.slice(delegateCount)
                    })
                }
                return handlerQueue
            },
            fix: function (event) {
                if (event[jQuery.expando]) {
                    return event
                }
                var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
                if (!fixHook) {
                    this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}
                }
                copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                event = new jQuery.Event(originalEvent);
                i = copy.length;
                while (i--) {
                    prop = copy[i];
                    event[prop] = originalEvent[prop]
                }
                if (!event.target) {
                    event.target = originalEvent.srcElement || document
                }
                if (event.target.nodeType === 3) {
                    event.target = event.target.parentNode
                }
                event.metaKey = !!event.metaKey;
                return fixHook.filter ? fixHook.filter(event, originalEvent) : event
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (event, original) {
                    if (event.which == null) {
                        event.which = original.charCode != null ? original.charCode : original.keyCode
                    }
                    return event
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (event, original) {
                    var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
                    if (event.pageX == null && original.clientX != null) {
                        eventDoc = event.target.ownerDocument || document;
                        doc = eventDoc.documentElement;
                        body = eventDoc.body;
                        event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
                    }
                    if (!event.relatedTarget && fromElement) {
                        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement
                    }
                    if (!event.which && button !== undefined) {
                        event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0
                    }
                    return event
                }
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function () {
                        if (this !== safeActiveElement() && this.focus) {
                            try {
                                this.focus();
                                return false
                            } catch (e) { }
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === safeActiveElement() && this.blur) {
                            this.blur();
                            return false
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                            this.click();
                            return false
                        }
                    },
                    _default: function (event) {
                        return jQuery.nodeName(event.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (event) {
                        if (event.result !== undefined) {
                            event.originalEvent.returnValue = event.result
                        }
                    }
                }
            },
            simulate: function (type, elem, event, bubble) {
                var e = jQuery.extend(new jQuery.Event, event, {
                    type: type,
                    isSimulated: true,
                    originalEvent: {}
                });
                if (bubble) {
                    jQuery.event.trigger(e, null, elem)
                } else {
                    jQuery.event.dispatch.call(elem, e)
                }
                if (e.isDefaultPrevented()) {
                    event.preventDefault()
                }
            }
        };
        jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle, false)
            }
        }
            : function (elem, type, handle) {
                var name = "on" + type;
                if (elem.detachEvent) {
                    if (typeof elem[name] === core_strundefined) {
                        elem[name] = null
                    }
                    elem.detachEvent(name, handle)
                }
            }
            ;
        jQuery.Event = function (src, props) {
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props)
            }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse
            } else {
                this.type = src
            }
            if (props) {
                jQuery.extend(this, props)
            }
            this.timeStamp = src && src.timeStamp || jQuery.now();
            this[jQuery.expando] = true
        }
            ;
        jQuery.Event.prototype = {
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (!e) {
                    return
                }
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    e.returnValue = false
                }
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (!e) {
                    return
                }
                if (e.stopPropagation) {
                    e.stopPropagation()
                }
                e.cancelBubble = true
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = returnTrue;
                this.stopPropagation()
            }
        };
        jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function (event) {
                    var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                    if (!related || related !== target && !jQuery.contains(target, related)) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix
                    }
                    return ret
                }
            }
        });
        if (!jQuery.support.submitBubbles) {
            jQuery.event.special.submit = {
                setup: function () {
                    if (jQuery.nodeName(this, "form")) {
                        return false
                    }
                    jQuery.event.add(this, "click._submit keypress._submit", function (e) {
                        var elem = e.target
                            , form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                        if (form && !jQuery._data(form, "submitBubbles")) {
                            jQuery.event.add(form, "submit._submit", function (event) {
                                event._submit_bubble = true
                            });
                            jQuery._data(form, "submitBubbles", true)
                        }
                    })
                },
                postDispatch: function (event) {
                    if (event._submit_bubble) {
                        delete event._submit_bubble;
                        if (this.parentNode && !event.isTrigger) {
                            jQuery.event.simulate("submit", this.parentNode, event, true)
                        }
                    }
                },
                teardown: function () {
                    if (jQuery.nodeName(this, "form")) {
                        return false
                    }
                    jQuery.event.remove(this, "._submit")
                }
            }
        }
        if (!jQuery.support.changeBubbles) {
            jQuery.event.special.change = {
                setup: function () {
                    if (rformElems.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") {
                            jQuery.event.add(this, "propertychange._change", function (event) {
                                if (event.originalEvent.propertyName === "checked") {
                                    this._just_changed = true
                                }
                            });
                            jQuery.event.add(this, "click._change", function (event) {
                                if (this._just_changed && !event.isTrigger) {
                                    this._just_changed = false
                                }
                                jQuery.event.simulate("change", this, event, true)
                            })
                        }
                        return false
                    }
                    jQuery.event.add(this, "beforeactivate._change", function (e) {
                        var elem = e.target;
                        if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                            jQuery.event.add(elem, "change._change", function (event) {
                                if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                    jQuery.event.simulate("change", this.parentNode, event, true)
                                }
                            });
                            jQuery._data(elem, "changeBubbles", true)
                        }
                    })
                },
                handle: function (event) {
                    var elem = event.target;
                    if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                        return event.handleObj.handler.apply(this, arguments)
                    }
                },
                teardown: function () {
                    jQuery.event.remove(this, "._change");
                    return !rformElems.test(this.nodeName)
                }
            }
        }
        if (!jQuery.support.focusinBubbles) {
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function (orig, fix) {
                var attaches = 0
                    , handler = function (event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true)
                    };
                jQuery.event.special[fix] = {
                    setup: function () {
                        if (attaches++ === 0) {
                            document.addEventListener(orig, handler, true)
                        }
                    },
                    teardown: function () {
                        if (--attaches === 0) {
                            document.removeEventListener(orig, handler, true)
                        }
                    }
                }
            })
        }
        jQuery.fn.extend({
            on: function (types, selector, data, fn, one) {
                var type, origFn;
                if (typeof types === "object") {
                    if (typeof selector !== "string") {
                        data = data || selector;
                        selector = undefined
                    }
                    for (type in types) {
                        this.on(type, selector, data, types[type], one)
                    }
                    return this
                }
                if (data == null && fn == null) {
                    fn = selector;
                    data = selector = undefined
                } else if (fn == null) {
                    if (typeof selector === "string") {
                        fn = data;
                        data = undefined
                    } else {
                        fn = data;
                        data = selector;
                        selector = undefined
                    }
                }
                if (fn === false) {
                    fn = returnFalse
                } else if (!fn) {
                    return this
                }
                if (one === 1) {
                    origFn = fn;
                    fn = function (event) {
                        jQuery().off(event);
                        return origFn.apply(this, arguments)
                    }
                        ;
                    fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
                }
                return this.each(function () {
                    jQuery.event.add(this, types, fn, data, selector)
                })
            },
            one: function (types, selector, data, fn) {
                return this.on(types, selector, data, fn, 1)
            },
            off: function (types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this
                }
                if (typeof types === "object") {
                    for (type in types) {
                        this.off(type, selector, types[type])
                    }
                    return this
                }
                if (selector === false || typeof selector === "function") {
                    fn = selector;
                    selector = undefined
                }
                if (fn === false) {
                    fn = returnFalse
                }
                return this.each(function () {
                    jQuery.event.remove(this, types, fn, selector)
                })
            },
            trigger: function (type, data) {
                return this.each(function () {
                    jQuery.event.trigger(type, data, this)
                })
            },
            triggerHandler: function (type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, true)
                }
            }
        });
        var isSimple = /^.[^:#\[\.,]*$/
            , rparentsprev = /^(?:parents|prev(?:Until|All))/
            , rneedsContext = jQuery.expr.match.needsContext
            , guaranteedUnique = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        jQuery.fn.extend({
            find: function (selector) {
                var i, ret = [], self = this, len = self.length;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function () {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return true
                            }
                        }
                    }))
                }
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret)
                }
                ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                ret.selector = this.selector ? this.selector + " " + selector : selector;
                return ret
            },
            has: function (target) {
                var i, targets = jQuery(target, this), len = targets.length;
                return this.filter(function () {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return true
                        }
                    }
                })
            },
            not: function (selector) {
                return this.pushStack(winnow(this, selector || [], true))
            },
            filter: function (selector) {
                return this.pushStack(winnow(this, selector || [], false))
            },
            is: function (selector) {
                return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length
            },
            closest: function (selectors, context) {
                var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                        if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            cur = ret.push(cur);
                            break
                        }
                    }
                }
                return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret)
            },
            index: function (elem) {
                if (!elem) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof elem === "string") {
                    return jQuery.inArray(this[0], jQuery(elem))
                }
                return jQuery.inArray(elem.jquery ? elem[0] : elem, this)
            },
            add: function (selector, context) {
                var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector)
                    , all = jQuery.merge(this.get(), set);
                return this.pushStack(jQuery.unique(all))
            },
            addBack: function (selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
            }
        });
        function sibling(cur, dir) {
            do {
                cur = cur[dir]
            } while (cur && cur.nodeType !== 1);
            return cur
        }
        jQuery.each({
            parent: function (elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null
            },
            parents: function (elem) {
                return jQuery.dir(elem, "parentNode")
            },
            parentsUntil: function (elem, i, until) {
                return jQuery.dir(elem, "parentNode", until)
            },
            next: function (elem) {
                return sibling(elem, "nextSibling")
            },
            prev: function (elem) {
                return sibling(elem, "previousSibling")
            },
            nextAll: function (elem) {
                return jQuery.dir(elem, "nextSibling")
            },
            prevAll: function (elem) {
                return jQuery.dir(elem, "previousSibling")
            },
            nextUntil: function (elem, i, until) {
                return jQuery.dir(elem, "nextSibling", until)
            },
            prevUntil: function (elem, i, until) {
                return jQuery.dir(elem, "previousSibling", until)
            },
            siblings: function (elem) {
                return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
            },
            children: function (elem) {
                return jQuery.sibling(elem.firstChild)
            },
            contents: function (elem) {
                return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes)
            }
        }, function (name, fn) {
            jQuery.fn[name] = function (until, selector) {
                var ret = jQuery.map(this, fn, until);
                if (name.slice(-5) !== "Until") {
                    selector = until
                }
                if (selector && typeof selector === "string") {
                    ret = jQuery.filter(selector, ret)
                }
                if (this.length > 1) {
                    if (!guaranteedUnique[name]) {
                        ret = jQuery.unique(ret)
                    }
                    if (rparentsprev.test(name)) {
                        ret = ret.reverse()
                    }
                }
                return this.pushStack(ret)
            }
        });
        jQuery.extend({
            filter: function (expr, elems, not) {
                var elem = elems[0];
                if (not) {
                    expr = ":not(" + expr + ")"
                }
                return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
                    return elem.nodeType === 1
                }))
            },
            dir: function (elem, dir, until) {
                var matched = []
                    , cur = elem[dir];
                while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                    if (cur.nodeType === 1) {
                        matched.push(cur)
                    }
                    cur = cur[dir]
                }
                return matched
            },
            sibling: function (n, elem) {
                var r = [];
                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== elem) {
                        r.push(n)
                    }
                }
                return r
            }
        });
        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) {
                return jQuery.grep(elements, function (elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not
                })
            }
            if (qualifier.nodeType) {
                return jQuery.grep(elements, function (elem) {
                    return elem === qualifier !== not
                })
            }
            if (typeof qualifier === "string") {
                if (isSimple.test(qualifier)) {
                    return jQuery.filter(qualifier, elements, not)
                }
                qualifier = jQuery.filter(qualifier, elements)
            }
            return jQuery.grep(elements, function (elem) {
                return jQuery.inArray(elem, qualifier) >= 0 !== not
            })
        }
        function createSafeFragment(document) {
            var list = nodeNames.split("|")
                , safeFrag = document.createDocumentFragment();
            if (safeFrag.createElement) {
                while (list.length) {
                    safeFrag.createElement(list.pop())
                }
            }
            return safeFrag
        }
        var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
            , rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g
            , rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i")
            , rleadingWhitespace = /^\s+/
            , rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
            , rtagName = /<([\w:]+)/
            , rtbody = /<tbody/i
            , rhtml = /<|&#?\w+;/
            , rnoInnerhtml = /<(?:script|style|link)/i
            , manipulation_rcheckableType = /^(?:checkbox|radio)$/i
            , rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i
            , rscriptType = /^$|\/(?:java|ecma)script/i
            , rscriptTypeMasked = /^true\/(.*)/
            , rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
            , wrapMap = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }
            , safeFragment = createSafeFragment(document)
            , fragmentDiv = safeFragment.appendChild(document.createElement("div"));
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        jQuery.fn.extend({
            text: function (value) {
                return jQuery.access(this, function (value) {
                    return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value))
                }, null, value, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this)
                    }
                })
            },
            after: function () {
                return this.domManip(arguments, function (elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this.nextSibling)
                    }
                })
            },
            remove: function (selector, keepData) {
                var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
                for (; (elem = elems[i]) != null; i++) {
                    if (!keepData && elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem))
                    }
                    if (elem.parentNode) {
                        if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                            setGlobalEval(getAll(elem, "script"))
                        }
                        elem.parentNode.removeChild(elem)
                    }
                }
                return this
            },
            empty: function () {
                var elem, i = 0;
                for (; (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false))
                    }
                    while (elem.firstChild) {
                        elem.removeChild(elem.firstChild)
                    }
                    if (elem.options && jQuery.nodeName(elem, "select")) {
                        elem.options.length = 0
                    }
                }
                return this
            },
            clone: function (dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function () {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                })
            },
            html: function (value) {
                return jQuery.access(this, function (value) {
                    var elem = this[0] || {}
                        , i = 0
                        , l = this.length;
                    if (value === undefined) {
                        return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined
                    }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = value.replace(rxhtmlTag, "<$1></$2>");
                        try {
                            for (; i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, false));
                                    elem.innerHTML = value
                                }
                            }
                            elem = 0
                        } catch (e) { }
                    }
                    if (elem) {
                        this.empty().append(value)
                    }
                }, null, value, arguments.length)
            },
            replaceWith: function () {
                var args = jQuery.map(this, function (elem) {
                    return [elem.nextSibling, elem.parentNode]
                })
                    , i = 0;
                this.domManip(arguments, function (elem) {
                    var next = args[i++]
                        , parent = args[i++];
                    if (parent) {
                        if (next && next.parentNode !== parent) {
                            next = this.nextSibling
                        }
                        jQuery(this).remove();
                        parent.insertBefore(elem, next)
                    }
                }, true);
                return i ? this : this.remove()
            },
            detach: function (selector) {
                return this.remove(selector, true)
            },
            domManip: function (args, callback, allowIntersection) {
                args = core_concat.apply([], args);
                var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
                if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                    return this.each(function (index) {
                        var self = set.eq(index);
                        if (isFunction) {
                            args[0] = value.call(this, index, self.html())
                        }
                        self.domManip(args, callback, allowIntersection)
                    })
                }
                if (l) {
                    fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
                    first = fragment.firstChild;
                    if (fragment.childNodes.length === 1) {
                        fragment = first
                    }
                    if (first) {
                        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                        hasScripts = scripts.length;
                        for (; i < l; i++) {
                            node = fragment;
                            if (i !== iNoClone) {
                                node = jQuery.clone(node, true, true);
                                if (hasScripts) {
                                    jQuery.merge(scripts, getAll(node, "script"))
                                }
                            }
                            callback.call(this[i], node, i)
                        }
                        if (hasScripts) {
                            doc = scripts[scripts.length - 1].ownerDocument;
                            jQuery.map(scripts, restoreScript);
                            for (i = 0; i < hasScripts; i++) {
                                node = scripts[i];
                                if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                    if (node.src) {
                                        jQuery._evalUrl(node.src)
                                    } else {
                                        jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""))
                                    }
                                }
                            }
                        }
                        fragment = first = null
                    }
                }
                return this
            }
        });
        function manipulationTarget(elem, content) {
            return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
        }
        function disableScript(elem) {
            elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
            return elem
        }
        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            if (match) {
                elem.type = match[1]
            } else {
                elem.removeAttribute("type")
            }
            return elem
        }
        function setGlobalEval(elems, refElements) {
            var elem, i = 0;
            for (; (elem = elems[i]) != null; i++) {
                jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"))
            }
        }
        function cloneCopyEvent(src, dest) {
            if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
                return
            }
            var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
            if (events) {
                delete curData.handle;
                curData.events = {};
                for (type in events) {
                    for (i = 0,
                        l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i])
                    }
                }
            }
            if (curData.data) {
                curData.data = jQuery.extend({}, curData.data)
            }
        }
        function fixCloneNodeIssues(src, dest) {
            var nodeName, e, data;
            if (dest.nodeType !== 1) {
                return
            }
            nodeName = dest.nodeName.toLowerCase();
            if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
                data = jQuery._data(dest);
                for (e in data.events) {
                    jQuery.removeEvent(dest, e, data.handle)
                }
                dest.removeAttribute(jQuery.expando)
            }
            if (nodeName === "script" && dest.text !== src.text) {
                disableScript(dest).text = src.text;
                restoreScript(dest)
            } else if (nodeName === "object") {
                if (dest.parentNode) {
                    dest.outerHTML = src.outerHTML
                }
                if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
                    dest.innerHTML = src.innerHTML
                }
            } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
                dest.defaultChecked = dest.checked = src.checked;
                if (dest.value !== src.value) {
                    dest.value = src.value
                }
            } else if (nodeName === "option") {
                dest.defaultSelected = dest.selected = src.defaultSelected
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue
            }
        }
        jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (name, original) {
            jQuery.fn[name] = function (selector) {
                var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
                for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(true);
                    jQuery(insert[i])[original](elems);
                    core_push.apply(ret, elems.get())
                }
                return this.pushStack(ret)
            }
        });
        function getAll(context, tag) {
            var elems, elem, i = 0, found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
            if (!found) {
                for (found = [],
                    elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
                    if (!tag || jQuery.nodeName(elem, tag)) {
                        found.push(elem)
                    } else {
                        jQuery.merge(found, getAll(elem, tag))
                    }
                }
            }
            return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
        }
        function fixDefaultChecked(elem) {
            if (manipulation_rcheckableType.test(elem.type)) {
                elem.defaultChecked = elem.checked
            }
        }
        jQuery.extend({
            clone: function (elem, dataAndEvents, deepDataAndEvents) {
                var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
                if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                    clone = elem.cloneNode(true)
                } else {
                    fragmentDiv.innerHTML = elem.outerHTML;
                    fragmentDiv.removeChild(clone = fragmentDiv.firstChild)
                }
                if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0; (node = srcElements[i]) != null; ++i) {
                        if (destElements[i]) {
                            fixCloneNodeIssues(node, destElements[i])
                        }
                    }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0; (node = srcElements[i]) != null; i++) {
                            cloneCopyEvent(node, destElements[i])
                        }
                    } else {
                        cloneCopyEvent(elem, clone)
                    }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"))
                }
                destElements = srcElements = node = null;
                return clone
            },
            buildFragment: function (elems, context, scripts, selection) {
                var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
                for (; i < l; i++) {
                    elem = elems[i];
                    if (elem || elem === 0) {
                        if (jQuery.type(elem) === "object") {
                            jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
                        } else if (!rhtml.test(elem)) {
                            nodes.push(context.createTextNode(elem))
                        } else {
                            tmp = tmp || safe.appendChild(context.createElement("div"));
                            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                            j = wrap[0];
                            while (j--) {
                                tmp = tmp.lastChild
                            }
                            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                                nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]))
                            }
                            if (!jQuery.support.tbody) {
                                elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                                j = elem && elem.childNodes.length;
                                while (j--) {
                                    if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                        elem.removeChild(tbody)
                                    }
                                }
                            }
                            jQuery.merge(nodes, tmp.childNodes);
                            tmp.textContent = "";
                            while (tmp.firstChild) {
                                tmp.removeChild(tmp.firstChild)
                            }
                            tmp = safe.lastChild
                        }
                    }
                }
                if (tmp) {
                    safe.removeChild(tmp)
                }
                if (!jQuery.support.appendChecked) {
                    jQuery.grep(getAll(nodes, "input"), fixDefaultChecked)
                }
                i = 0;
                while (elem = nodes[i++]) {
                    if (selection && jQuery.inArray(elem, selection) !== -1) {
                        continue
                    }
                    contains = jQuery.contains(elem.ownerDocument, elem);
                    tmp = getAll(safe.appendChild(elem), "script");
                    if (contains) {
                        setGlobalEval(tmp)
                    }
                    if (scripts) {
                        j = 0;
                        while (elem = tmp[j++]) {
                            if (rscriptType.test(elem.type || "")) {
                                scripts.push(elem)
                            }
                        }
                    }
                }
                tmp = null;
                return safe
            },
            cleanData: function (elems, acceptData) {
                var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
                for (; (elem = elems[i]) != null; i++) {
                    if (acceptData || jQuery.acceptData(elem)) {
                        id = elem[internalKey];
                        data = id && cache[id];
                        if (data) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type)
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle)
                                    }
                                }
                            }
                            if (cache[id]) {
                                delete cache[id];
                                if (deleteExpando) {
                                    delete elem[internalKey]
                                } else if (typeof elem.removeAttribute !== core_strundefined) {
                                    elem.removeAttribute(internalKey)
                                } else {
                                    elem[internalKey] = null
                                }
                                core_deletedIds.push(id)
                            }
                        }
                    }
                }
            },
            _evalUrl: function (url) {
                return jQuery.ajax({
                    url: url,
                    type: "GET",
                    dataType: "script",
                    async: false,
                    global: false,
                    "throws": true
                })
            }
        });
        jQuery.fn.extend({
            wrapAll: function (html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function (i) {
                        jQuery(this).wrapAll(html.call(this, i))
                    })
                }
                if (this[0]) {
                    var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0])
                    }
                    wrap.map(function () {
                        var elem = this;
                        while (elem.firstChild && elem.firstChild.nodeType === 1) {
                            elem = elem.firstChild
                        }
                        return elem
                    }).append(this)
                }
                return this
            },
            wrapInner: function (html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function (i) {
                        jQuery(this).wrapInner(html.call(this, i))
                    })
                }
                return this.each(function () {
                    var self = jQuery(this)
                        , contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html)
                    } else {
                        self.append(html)
                    }
                })
            },
            wrap: function (html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function (i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    if (!jQuery.nodeName(this, "body")) {
                        jQuery(this).replaceWith(this.childNodes)
                    }
                }).end()
            }
        });
        var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rposition = /^(top|right|bottom|left)$/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {
            BODY: "block"
        }, cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, cssNormalTransform = {
            letterSpacing: 0,
            fontWeight: 400
        }, cssExpand = ["Top", "Right", "Bottom", "Left"], cssPrefixes = ["Webkit", "O", "Moz", "ms"];
        function vendorPropName(style, name) {
            if (name in style) {
                return name
            }
            var capName = name.charAt(0).toUpperCase() + name.slice(1)
                , origName = name
                , i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in style) {
                    return name
                }
            }
            return origName
        }
        function isHidden(elem, el) {
            elem = el || elem;
            return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem)
        }
        function showHide(elements, show) {
            var display, elem, hidden, values = [], index = 0, length = elements.length;
            for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue
                }
                values[index] = jQuery._data(elem, "olddisplay");
                display = elem.style.display;
                if (show) {
                    if (!values[index] && display === "none") {
                        elem.style.display = ""
                    }
                    if (elem.style.display === "" && isHidden(elem)) {
                        values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName))
                    }
                } else {
                    if (!values[index]) {
                        hidden = isHidden(elem);
                        if (display && display !== "none" || !hidden) {
                            jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))
                        }
                    }
                }
            }
            for (index = 0; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue
                }
                if (!show || elem.style.display === "none" || elem.style.display === "") {
                    elem.style.display = show ? values[index] || "" : "none"
                }
            }
            return elements
        }
        jQuery.fn.extend({
            css: function (name, value) {
                return jQuery.access(this, function (elem, name, value) {
                    var len, styles, map = {}, i = 0;
                    if (jQuery.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (; i < len; i++) {
                            map[name[i]] = jQuery.css(elem, name[i], false, styles)
                        }
                        return map
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                }, name, value, arguments.length > 1)
            },
            show: function () {
                return showHide(this, true)
            },
            hide: function () {
                return showHide(this)
            },
            toggle: function (state) {
                if (typeof state === "boolean") {
                    return state ? this.show() : this.hide()
                }
                return this.each(function () {
                    if (isHidden(this)) {
                        jQuery(this).show()
                    } else {
                        jQuery(this).hide()
                    }
                })
            }
        });
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function (elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: true,
                fillOpacity: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return
                }
                var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rrelNum.exec(value))) {
                        value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                        type = "number"
                    }
                    if (value == null || type === "number" && isNaN(value)) {
                        return
                    }
                    if (type === "number" && !jQuery.cssNumber[origName]) {
                        value += "px"
                    }
                    if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit"
                    }
                    if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        try {
                            style[name] = value
                        } catch (e) { }
                    }
                } else {
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                        return ret
                    }
                    return style[name]
                }
            },
            css: function (elem, name, extra, styles) {
                var num, val, hooks, origName = jQuery.camelCase(name);
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get" in hooks) {
                    val = hooks.get(elem, true, extra)
                }
                if (val === undefined) {
                    val = curCSS(elem, name, styles)
                }
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name]
                }
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === true || jQuery.isNumeric(num) ? num || 0 : val
                }
                return val
            }
        });
        if (window.getComputedStyle) {
            getStyles = function (elem) {
                return window.getComputedStyle(elem, null)
            }
                ;
            curCSS = function (elem, name, _computed) {
                var width, minWidth, maxWidth, computed = _computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
                if (computed) {
                    if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                        ret = jQuery.style(elem, name)
                    }
                    if (rnumnonpx.test(ret) && rmargin.test(name)) {
                        width = style.width;
                        minWidth = style.minWidth;
                        maxWidth = style.maxWidth;
                        style.minWidth = style.maxWidth = style.width = ret;
                        ret = computed.width;
                        style.width = width;
                        style.minWidth = minWidth;
                        style.maxWidth = maxWidth
                    }
                }
                return ret
            }
        } else if (document.documentElement.currentStyle) {
            getStyles = function (elem) {
                return elem.currentStyle
            }
                ;
            curCSS = function (elem, name, _computed) {
                var left, rs, rsLeft, computed = _computed || getStyles(elem), ret = computed ? computed[name] : undefined, style = elem.style;
                if (ret == null && style && style[name]) {
                    ret = style[name]
                }
                if (rnumnonpx.test(ret) && !rposition.test(name)) {
                    left = style.left;
                    rs = elem.runtimeStyle;
                    rsLeft = rs && rs.left;
                    if (rsLeft) {
                        rs.left = elem.currentStyle.left
                    }
                    style.left = name === "fontSize" ? "1em" : ret;
                    ret = style.pixelLeft + "px";
                    style.left = left;
                    if (rsLeft) {
                        rs.left = rsLeft
                    }
                }
                return ret === "" ? "auto" : ret
            }
        }
        function setPositiveNumber(elem, value, subtract) {
            var matches = rnumsplit.exec(value);
            return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
        }
        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0
                , val = 0;
            for (; i < 4; i += 2) {
                if (extra === "margin") {
                    val += jQuery.css(elem, extra + cssExpand[i], true, styles)
                }
                if (isBorderBox) {
                    if (extra === "content") {
                        val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles)
                    }
                    if (extra !== "margin") {
                        val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                    }
                } else {
                    val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    if (extra !== "padding") {
                        val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                    }
                }
            }
            return val
        }
        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = true
                , val = name === "width" ? elem.offsetWidth : elem.offsetHeight
                , styles = getStyles(elem)
                , isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            if (val <= 0 || val == null) {
                val = curCSS(elem, name, styles);
                if (val < 0 || val == null) {
                    val = elem.style[name]
                }
                if (rnumnonpx.test(val)) {
                    return val
                }
                valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
                val = parseFloat(val) || 0
            }
            return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
        }
        function css_defaultDisplay(nodeName) {
            var doc = document
                , display = elemdisplay[nodeName];
            if (!display) {
                display = actualDisplay(nodeName, doc);
                if (display === "none" || !display) {
                    iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                    doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                    doc.write("<!doctype html><html><body>");
                    doc.close();
                    display = actualDisplay(nodeName, doc);
                    iframe.detach()
                }
                elemdisplay[nodeName] = display
            }
            return display
        }
        function actualDisplay(name, doc) {
            var elem = jQuery(doc.createElement(name)).appendTo(doc.body)
                , display = jQuery.css(elem[0], "display");
            elem.remove();
            return display
        }
        jQuery.each(["height", "width"], function (i, name) {
            jQuery.cssHooks[name] = {
                get: function (elem, computed, extra) {
                    if (computed) {
                        return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function () {
                            return getWidthOrHeight(elem, name, extra)
                        }) : getWidthOrHeight(elem, name, extra)
                    }
                },
                set: function (elem, value, extra) {
                    var styles = extra && getStyles(elem);
                    return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0)
                }
            }
        });
        if (!jQuery.support.opacity) {
            jQuery.cssHooks.opacity = {
                get: function (elem, computed) {
                    return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : ""
                },
                set: function (elem, value) {
                    var style = elem.style
                        , currentStyle = elem.currentStyle
                        , opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : ""
                        , filter = currentStyle && currentStyle.filter || style.filter || "";
                    style.zoom = 1;
                    if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                        style.removeAttribute("filter");
                        if (value === "" || currentStyle && !currentStyle.filter) {
                            return
                        }
                    }
                    style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity
                }
            }
        }
        jQuery(function () {
            if (!jQuery.support.reliableMarginRight) {
                jQuery.cssHooks.marginRight = {
                    get: function (elem, computed) {
                        if (computed) {
                            return jQuery.swap(elem, {
                                display: "inline-block"
                            }, curCSS, [elem, "marginRight"])
                        }
                    }
                }
            }
            if (!jQuery.support.pixelPosition && jQuery.fn.position) {
                jQuery.each(["top", "left"], function (i, prop) {
                    jQuery.cssHooks[prop] = {
                        get: function (elem, computed) {
                            if (computed) {
                                computed = curCSS(elem, prop);
                                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
                            }
                        }
                    }
                })
            }
        });
        if (jQuery.expr && jQuery.expr.filters) {
            jQuery.expr.filters.hidden = function (elem) {
                return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none"
            }
                ;
            jQuery.expr.filters.visible = function (elem) {
                return !jQuery.expr.filters.hidden(elem)
            }
        }
        jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function (value) {
                    var i = 0
                        , expanded = {}
                        , parts = typeof value === "string" ? value.split(" ") : [value];
                    for (; i < 4; i++) {
                        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
                    }
                    return expanded
                }
            };
            if (!rmargin.test(prefix)) {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
            }
        });
        var r20 = /%20/g
            , rbracket = /\[\]$/
            , rCRLF = /\r?\n/g
            , rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
            , rsubmittable = /^(?:input|select|textarea|keygen)/i;
        jQuery.fn.extend({
            serialize: function () {
                return jQuery.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this
                }).filter(function () {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type))
                }).map(function (i, elem) {
                    var val = jQuery(this).val();
                    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        }
                    }) : {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }).get()
            }
        });
        jQuery.param = function (a, traditional) {
            var prefix, s = [], add = function (key, value) {
                value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
            };
            if (traditional === undefined) {
                traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
            }
            if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
                jQuery.each(a, function () {
                    add(this.name, this.value)
                })
            } else {
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add)
                }
            }
            return s.join("&").replace(r20, "+")
        }
            ;
        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) {
                jQuery.each(obj, function (i, v) {
                    if (traditional || rbracket.test(prefix)) {
                        add(prefix, v)
                    } else {
                        buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add)
                    }
                })
            } else if (!traditional && jQuery.type(obj) === "object") {
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
                }
            } else {
                add(prefix, obj)
            }
        }
        jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
            jQuery.fn[name] = function (data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
            }
        });
        jQuery.fn.extend({
            hover: function (fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
            },
            bind: function (types, data, fn) {
                return this.on(types, null, data, fn)
            },
            unbind: function (types, fn) {
                return this.off(types, null, fn)
            },
            delegate: function (selector, types, data, fn) {
                return this.on(types, selector, data, fn)
            },
            undelegate: function (selector, types, fn) {
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
            }
        });
        var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
        try {
            ajaxLocation = location.href
        } catch (e) {
            ajaxLocation = document.createElement("a");
            ajaxLocation.href = "";
            ajaxLocation = ajaxLocation.href
        }
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
        function addToPrefiltersOrTransports(structure) {
            return function (dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*"
                }
                var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
                if (jQuery.isFunction(func)) {
                    while (dataType = dataTypes[i++]) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func)
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func)
                        }
                    }
                }
            }
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {}
                , seekingTransport = structure === transports;
            function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return false
                    } else if (seekingTransport) {
                        return !(selected = dataTypeOrTransport)
                    }
                });
                return selected
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
        }
        function ajaxExtend(target, src) {
            var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
                }
            }
            if (deep) {
                jQuery.extend(true, target, deep)
            }
            return target
        }
        jQuery.fn.load = function (url, params, callback) {
            if (typeof url !== "string" && _load) {
                return _load.apply(this, arguments)
            }
            var selector, response, type, self = this, off = url.indexOf(" ");
            if (off >= 0) {
                selector = url.slice(off, url.length);
                url = url.slice(0, off)
            }
            if (jQuery.isFunction(params)) {
                callback = params;
                params = undefined
            } else if (params && typeof params === "object") {
                type = "POST"
            }
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
                    type: type,
                    dataType: "html",
                    data: params
                }).done(function (responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
                }).complete(callback && function (jqXHR, status) {
                    self.each(callback, response || [jqXHR.responseText, status, jqXHR])
                }
                )
            }
            return this
        }
            ;
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
            jQuery.fn[type] = function (fn) {
                return this.on(type, fn)
            }
        });
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ajaxLocation,
                type: "GET",
                isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": jQuery.parseJSON,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function (target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function (url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined
                }
                options = options || {};
                var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                    readyState: 0,
                    getResponseHeader: function (key) {
                        var match;
                        if (state === 2) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while (match = rheaders.exec(responseHeadersString)) {
                                    responseHeaders[match[1].toLowerCase()] = match[2]
                                }
                            }
                            match = responseHeaders[key.toLowerCase()]
                        }
                        return match == null ? null : match
                    },
                    getAllResponseHeaders: function () {
                        return state === 2 ? responseHeadersString : null
                    },
                    setRequestHeader: function (name, value) {
                        var lname = name.toLowerCase();
                        if (!state) {
                            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                            requestHeaders[name] = value
                        }
                        return this
                    },
                    overrideMimeType: function (type) {
                        if (!state) {
                            s.mimeType = type
                        }
                        return this
                    },
                    statusCode: function (map) {
                        var code;
                        if (map) {
                            if (state < 2) {
                                for (code in map) {
                                    statusCode[code] = [statusCode[code], map[code]]
                                }
                            } else {
                                jqXHR.always(map[jqXHR.status])
                            }
                        }
                        return this
                    },
                    abort: function (statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText)
                        }
                        done(0, finalText);
                        return this
                    }
                };
                deferred.promise(jqXHR).complete = completeDeferred.add;
                jqXHR.success = jqXHR.done;
                jqXHR.error = jqXHR.fail;
                s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
                if (s.crossDomain == null) {
                    parts = rurl.exec(s.url.toLowerCase());
                    s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))))
                }
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional)
                }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (state === 2) {
                    return jqXHR
                }
                fireGlobals = s.global;
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart")
                }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url;
                if (!s.hasContent) {
                    if (s.data) {
                        cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                        delete s.data
                    }
                    if (s.cache === false) {
                        s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++
                    }
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
                    }
                }
                if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType)
                }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i])
                }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                    return jqXHR.abort()
                }
                strAbort = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                    jqXHR[i](s[i])
                }
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) {
                    done(-1, "No Transport")
                } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [jqXHR, s])
                    }
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = setTimeout(function () {
                            jqXHR.abort("timeout")
                        }, s.timeout)
                    }
                    try {
                        state = 1;
                        transport.send(requestHeaders, done)
                    } catch (e) {
                        if (state < 2) {
                            done(-1, e)
                        } else {
                            throw e
                        }
                    }
                }
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (state === 2) {
                        return
                    }
                    state = 2;
                    if (timeoutTimer) {
                        clearTimeout(timeoutTimer)
                    }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    isSuccess = status >= 200 && status < 300 || status === 304;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses)
                    }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified
                            }
                        }
                        if (status === 204 || s.type === "HEAD") {
                            statusText = "nocontent"
                        } else if (status === 304) {
                            statusText = "notmodified"
                        } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error
                        }
                    } else {
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0
                            }
                        }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
                    } else {
                        deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
                    }
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
                    }
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                        if (!--jQuery.active) {
                            jQuery.event.trigger("ajaxStop")
                        }
                    }
                }
                return jqXHR
            },
            getJSON: function (url, data, callback) {
                return jQuery.get(url, data, callback, "json")
            },
            getScript: function (url, callback) {
                return jQuery.get(url, undefined, callback, "script")
            }
        });
        jQuery.each(["get", "post"], function (i, method) {
            jQuery[method] = function (url, data, callback, type) {
                if (jQuery.isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined
                }
                return jQuery.ajax({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                })
            }
        });
        function ajaxHandleResponses(s, jqXHR, responses) {
            var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
                }
            }
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break
                    }
                }
            }
            if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0]
            } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break
                    }
                    if (!firstDataType) {
                        firstDataType = type
                    }
                }
                finalDataType = finalDataType || firstDataType
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType)
                }
                return responses[finalDataType]
            }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv]
                }
            }
            current = dataTypes.shift();
            while (current) {
                if (s.responseFields[current]) {
                    jqXHR[s.responseFields[current]] = response
                }
                if (!prev && isSuccess && s.dataFilter) {
                    response = s.dataFilter(response, s.dataType)
                }
                prev = current;
                current = dataTypes.shift();
                if (current) {
                    if (current === "*") {
                        current = prev
                    } else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) {
                                            conv = converters[conv2]
                                        } else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (conv !== true) {
                            if (conv && s["throws"]) {
                                response = conv(response)
                            } else {
                                try {
                                    response = conv(response)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: response
            }
        }
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (text) {
                    jQuery.globalEval(text);
                    return text
                }
            }
        });
        jQuery.ajaxPrefilter("script", function (s) {
            if (s.cache === undefined) {
                s.cache = false
            }
            if (s.crossDomain) {
                s.type = "GET";
                s.global = false
            }
        });
        jQuery.ajaxTransport("script", function (s) {
            if (s.crossDomain) {
                var script, head = document.head || jQuery("head")[0] || document.documentElement;
                return {
                    send: function (_, callback) {
                        script = document.createElement("script");
                        script.async = true;
                        if (s.scriptCharset) {
                            script.charset = s.scriptCharset
                        }
                        script.src = s.url;
                        script.onload = script.onreadystatechange = function (_, isAbort) {
                            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                                script.onload = script.onreadystatechange = null;
                                if (script.parentNode) {
                                    script.parentNode.removeChild(script)
                                }
                                script = null;
                                if (!isAbort) {
                                    callback(200, "success")
                                }
                            }
                        }
                            ;
                        head.insertBefore(script, head.firstChild)
                    },
                    abort: function () {
                        if (script) {
                            script.onload(undefined, true)
                        }
                    }
                }
            }
        });
        var oldCallbacks = []
            , rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
                this[callback] = true;
                return callback
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
                } else if (s.jsonp !== false) {
                    s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
                }
                s.converters["script json"] = function () {
                    if (!responseContainer) {
                        jQuery.error(callbackName + " was not called")
                    }
                    return responseContainer[0]
                }
                    ;
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function () {
                    responseContainer = arguments
                }
                    ;
                jqXHR.always(function () {
                    window[callbackName] = overwritten;
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName)
                    }
                    if (responseContainer && jQuery.isFunction(overwritten)) {
                        overwritten(responseContainer[0])
                    }
                    responseContainer = overwritten = undefined
                });
                return "script"
            }
        });
        var xhrCallbacks, xhrSupported, xhrId = 0, xhrOnUnloadAbort = window.ActiveXObject && function () {
            var key;
            for (key in xhrCallbacks) {
                xhrCallbacks[key](undefined, true)
            }
        }
            ;
        function createStandardXHR() {
            try {
                return new window.XMLHttpRequest
            } catch (e) { }
        }
        function createActiveXHR() {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) { }
        }
        jQuery.ajaxSettings.xhr = window.ActiveXObject ? function () {
            return !this.isLocal && createStandardXHR() || createActiveXHR()
        }
            : createStandardXHR;
        xhrSupported = jQuery.ajaxSettings.xhr();
        jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        xhrSupported = jQuery.support.ajax = !!xhrSupported;
        if (xhrSupported) {
            jQuery.ajaxTransport(function (s) {
                if (!s.crossDomain || jQuery.support.cors) {
                    var callback;
                    return {
                        send: function (headers, complete) {
                            var handle, i, xhr = s.xhr();
                            if (s.username) {
                                xhr.open(s.type, s.url, s.async, s.username, s.password)
                            } else {
                                xhr.open(s.type, s.url, s.async)
                            }
                            if (s.xhrFields) {
                                for (i in s.xhrFields) {
                                    xhr[i] = s.xhrFields[i]
                                }
                            }
                            if (s.mimeType && xhr.overrideMimeType) {
                                xhr.overrideMimeType(s.mimeType)
                            }
                            if (!s.crossDomain && !headers["X-Requested-With"]) {
                                headers["X-Requested-With"] = "XMLHttpRequest"
                            }
                            try {
                                for (i in headers) {
                                    xhr.setRequestHeader(i, headers[i])
                                }
                            } catch (err) { }
                            xhr.send(s.hasContent && s.data || null);
                            callback = function (_, isAbort) {
                                var status, responseHeaders, statusText, responses;
                                try {
                                    if (callback && (isAbort || xhr.readyState === 4)) {
                                        callback = undefined;
                                        if (handle) {
                                            xhr.onreadystatechange = jQuery.noop;
                                            if (xhrOnUnloadAbort) {
                                                delete xhrCallbacks[handle]
                                            }
                                        }
                                        if (isAbort) {
                                            if (xhr.readyState !== 4) {
                                                xhr.abort()
                                            }
                                        } else {
                                            responses = {};
                                            status = xhr.status;
                                            responseHeaders = xhr.getAllResponseHeaders();
                                            if (typeof xhr.responseText === "string") {
                                                responses.text = xhr.responseText
                                            }
                                            try {
                                                statusText = xhr.statusText
                                            } catch (e) {
                                                statusText = ""
                                            }
                                            if (!status && s.isLocal && !s.crossDomain) {
                                                status = responses.text ? 200 : 404
                                            } else if (status === 1223) {
                                                status = 204
                                            }
                                        }
                                    }
                                } catch (firefoxAccessException) {
                                    if (!isAbort) {
                                        complete(-1, firefoxAccessException)
                                    }
                                }
                                if (responses) {
                                    complete(status, statusText, responses, responseHeaders)
                                }
                            }
                                ;
                            if (!s.async) {
                                callback()
                            } else if (xhr.readyState === 4) {
                                setTimeout(callback)
                            } else {
                                handle = ++xhrId;
                                if (xhrOnUnloadAbort) {
                                    if (!xhrCallbacks) {
                                        xhrCallbacks = {};
                                        jQuery(window).unload(xhrOnUnloadAbort)
                                    }
                                    xhrCallbacks[handle] = callback
                                }
                                xhr.onreadystatechange = callback
                            }
                        },
                        abort: function () {
                            if (callback) {
                                callback(undefined, true)
                            }
                        }
                    }
                }
            })
        }
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {
            "*": [function (prop, value) {
                var tween = this.createTween(prop, value)
                    , target = tween.cur()
                    , parts = rfxnum.exec(value)
                    , unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px")
                    , start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop))
                    , scale = 1
                    , maxIterations = 20;
                if (start && start[3] !== unit) {
                    unit = unit || start[3];
                    parts = parts || [];
                    start = +target || 1;
                    do {
                        scale = scale || ".5";
                        start = start / scale;
                        jQuery.style(tween.elem, prop, start + unit)
                    } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations)
                }
                if (parts) {
                    start = tween.start = +start || +target || 0;
                    tween.unit = unit;
                    tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]
                }
                return tween
            }
            ]
        };
        function createFxNow() {
            setTimeout(function () {
                fxNow = undefined
            });
            return fxNow = jQuery.now()
        }
        function createTween(value, prop, animation) {
            var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
            for (; index < length; index++) {
                if (tween = collection[index].call(animation, prop, value)) {
                    return tween
                }
            }
        }
        function Animation(elem, properties, options) {
            var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function () {
                delete tick.elem
            }), tick = function () {
                if (stopped) {
                    return false
                }
                var currentTime = fxNow || createFxNow()
                    , remaining = Math.max(0, animation.startTime + animation.duration - currentTime)
                    , temp = remaining / animation.duration || 0
                    , percent = 1 - temp
                    , index = 0
                    , length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent)
                }
                deferred.notifyWith(elem, [animation, percent, remaining]);
                if (percent < 1 && length) {
                    return remaining
                } else {
                    deferred.resolveWith(elem, [animation]);
                    return false
                }
            }, animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {}
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function (prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween
                },
                stop: function (gotoEnd) {
                    var index = 0
                        , length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1)
                    }
                    if (gotoEnd) {
                        deferred.resolveWith(elem, [animation, gotoEnd])
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd])
                    }
                    return this
                }
            }), props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
                result = animationPrefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    return result
                }
            }
            jQuery.map(props, createTween, animation);
            if (jQuery.isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation)
            }
            jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            }));
            return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
        }
        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
                name = jQuery.camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (jQuery.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0]
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index]
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing
                        }
                    }
                } else {
                    specialEasing[name] = easing
                }
            }
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweener: function (props, callback) {
                if (jQuery.isFunction(props)) {
                    callback = props;
                    props = ["*"]
                } else {
                    props = props.split(" ")
                }
                var prop, index = 0, length = props.length;
                for (; index < length; index++) {
                    prop = props[index];
                    tweeners[prop] = tweeners[prop] || [];
                    tweeners[prop].unshift(callback)
                }
            },
            prefilter: function (callback, prepend) {
                if (prepend) {
                    animationPrefilters.unshift(callback)
                } else {
                    animationPrefilters.push(callback)
                }
            }
        });
        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, "fxshow");
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function () {
                        if (!hooks.unqueued) {
                            oldfire()
                        }
                    }
                }
                hooks.unqueued++;
                anim.always(function () {
                    anim.always(function () {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire()
                        }
                    })
                })
            }
            if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                    if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                        style.display = "inline-block"
                    } else {
                        style.zoom = 1
                    }
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                if (!jQuery.support.shrinkWrapBlocks) {
                    anim.always(function () {
                        style.overflow = opts.overflow[0];
                        style.overflowX = opts.overflow[1];
                        style.overflowY = opts.overflow[2]
                    })
                }
            }
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.exec(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
                        continue
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                }
            }
            if (!jQuery.isEmptyObject(orig)) {
                if (dataShow) {
                    if ("hidden" in dataShow) {
                        hidden = dataShow.hidden
                    }
                } else {
                    dataShow = jQuery._data(elem, "fxshow", {})
                }
                if (toggle) {
                    dataShow.hidden = !hidden
                }
                if (hidden) {
                    jQuery(elem).show()
                } else {
                    anim.done(function () {
                        jQuery(elem).hide()
                    })
                }
                anim.done(function () {
                    var prop;
                    jQuery._removeData(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop])
                    }
                });
                for (prop in orig) {
                    tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = tween.start;
                        if (hidden) {
                            tween.end = tween.start;
                            tween.start = prop === "width" || prop === "height" ? 1 : 0
                        }
                    }
                }
            }
        }
        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing)
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function (elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || "swing";
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
            },
            cur: function () {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
            },
            run: function (percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
                } else {
                    this.pos = eased = percent
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (hooks && hooks.set) {
                    hooks.set(this)
                } else {
                    Tween.propHooks._default.set(this)
                }
                return this
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function (tween) {
                    var result;
                    if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                        return tween.elem[tween.prop]
                    }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result
                },
                set: function (tween) {
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween)
                    } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                    } else {
                        tween.elem[tween.prop] = tween.now
                    }
                }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function (tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now
                }
            }
        };
        jQuery.each(["toggle", "show", "hide"], function (i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function (speed, easing, callback) {
                return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback)
            }
        });
        jQuery.fn.extend({
            fadeTo: function (speed, to, easing, callback) {
                return this.filter(isHidden).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback)
            },
            animate: function (prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop)
                    , optall = jQuery.speed(speed, easing, callback)
                    , doAnimation = function () {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        if (empty || jQuery._data(this, "finish")) {
                            anim.stop(true)
                        }
                    };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
            },
            stop: function (type, clearQueue, gotoEnd) {
                var stopQueue = function (hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd)
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined
                }
                if (clearQueue && type !== false) {
                    this.queue(type || "fx", [])
                }
                return this.each(function () {
                    var dequeue = true
                        , index = type != null && type + "queueHooks"
                        , timers = jQuery.timers
                        , data = jQuery._data(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index])
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index])
                            }
                        }
                    }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1)
                        }
                    }
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type)
                    }
                })
            },
            finish: function (type) {
                if (type !== false) {
                    type = type || "fx"
                }
                return this.each(function () {
                    var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                    data.finish = true;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) {
                        hooks.stop.call(this, true)
                    }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1)
                        }
                    }
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this)
                        }
                    }
                    delete data.finish
                })
            }
        });
        function genFx(type, includeWidth) {
            var which, attrs = {
                height: type
            }, i = 0;
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type
            }
            return attrs
        }
        jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (name, props) {
            jQuery.fn[name] = function (speed, easing, callback) {
                return this.animate(props, speed, easing, callback)
            }
        });
        jQuery.speed = function (speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
            if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx"
            }
            opt.old = opt.complete;
            opt.complete = function () {
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this)
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue)
                }
            }
                ;
            return opt
        }
            ;
        jQuery.easing = {
            linear: function (p) {
                return p
            },
            swing: function (p) {
                return .5 - Math.cos(p * Math.PI) / 2
            }
        };
        jQuery.timers = [];
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.tick = function () {
            var timer, timers = jQuery.timers, i = 0;
            fxNow = jQuery.now();
            for (; i < timers.length; i++) {
                timer = timers[i];
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1)
                }
            }
            if (!timers.length) {
                jQuery.fx.stop()
            }
            fxNow = undefined
        }
            ;
        jQuery.fx.timer = function (timer) {
            if (timer() && jQuery.timers.push(timer)) {
                jQuery.fx.start()
            }
        }
            ;
        jQuery.fx.interval = 13;
        jQuery.fx.start = function () {
            if (!timerId) {
                timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval)
            }
        }
            ;
        jQuery.fx.stop = function () {
            clearInterval(timerId);
            timerId = null
        }
            ;
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        jQuery.fx.step = {};
        if (jQuery.expr && jQuery.expr.filters) {
            jQuery.expr.filters.animated = function (elem) {
                return jQuery.grep(jQuery.timers, function (fn) {
                    return elem === fn.elem
                }).length
            }
        }
        jQuery.fn.offset = function (options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i)
                })
            }
            var docElem, win, box = {
                top: 0,
                left: 0
            }, elem = this[0], doc = elem && elem.ownerDocument;
            if (!doc) {
                return
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box
            }
            if (typeof elem.getBoundingClientRect !== core_strundefined) {
                box = elem.getBoundingClientRect()
            }
            win = getWindow(doc);
            return {
                top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
            }
        }
            ;
        jQuery.offset = {
            setOffset: function (elem, options, i) {
                var position = jQuery.css(elem, "position");
                if (position === "static") {
                    elem.style.position = "relative"
                }
                var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, props = {}, curPosition = {}, curTop, curLeft;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0
                }
                if (jQuery.isFunction(options)) {
                    options = options.call(elem, i, curOffset)
                }
                if (options.top != null) {
                    props.top = options.top - curOffset.top + curTop
                }
                if (options.left != null) {
                    props.left = options.left - curOffset.left + curLeft
                }
                if ("using" in options) {
                    options.using.call(elem, props)
                } else {
                    curElem.css(props)
                }
            }
        };
        jQuery.fn.extend({
            position: function () {
                if (!this[0]) {
                    return
                }
                var offsetParent, offset, parentOffset = {
                    top: 0,
                    left: 0
                }, elem = this[0];
                if (jQuery.css(elem, "position") === "fixed") {
                    offset = elem.getBoundingClientRect()
                } else {
                    offsetParent = this.offsetParent();
                    offset = this.offset();
                    if (!jQuery.nodeName(offsetParent[0], "html")) {
                        parentOffset = offsetParent.offset()
                    }
                    parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var offsetParent = this.offsetParent || docElem;
                    while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                        offsetParent = offsetParent.offsetParent
                    }
                    return offsetParent || docElem
                })
            }
        });
        jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (method, prop) {
            var top = /Y/.test(prop);
            jQuery.fn[method] = function (val) {
                return jQuery.access(this, function (elem, method, val) {
                    var win = getWindow(elem);
                    if (val === undefined) {
                        return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method]
                    }
                    if (win) {
                        win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop())
                    } else {
                        elem[method] = val
                    }
                }, method, val, arguments.length, null)
            }
        });
        function getWindow(elem) {
            return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false
        }
        jQuery.each({
            Height: "height",
            Width: "width"
        }, function (name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function (defaultExtra, funcName) {
                jQuery.fn[funcName] = function (margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean")
                        , extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                    return jQuery.access(this, function (elem, type, value) {
                        var doc;
                        if (jQuery.isWindow(elem)) {
                            return elem.document.documentElement["client" + name]
                        }
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
                        }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                    }, type, chainable ? margin : undefined, chainable, null)
                }
            })
        });
        jQuery.fn.size = function () {
            return this.length
        }
            ;
        jQuery.fn.andSelf = jQuery.fn.addBack;
        if (typeof module === "object" && module && typeof module.exports === "object") {
            module.exports = jQuery
        } else {
            window.jQuery = window.$ = jQuery;
            if (typeof define === "function" && define.amd) {
                define("jquery", [], function () {
                    return jQuery
                })
            }
        }
    }(window);
    jQuery.noConflict();

    var $ua = window.navigator.userAgent;
    var $msie = $ua.indexOf("MSIE ");
    var $special;
    jQuery("html").hide();
    (function ($) {
        $.fn.removeClassWild = function (mask) {
            return this.removeClass(function (index, cls) {
                var re = mask.replace(/\*/g, "\\S+");
                return (cls.match(new RegExp("\\b" + re + "", "g")) || []).join(" ")
            })
        }
            ;
        special = {
            Reset: function () {
                $special = {
                    active: 1,
                    color: 1,
                    font_family: 1,
                    font_size: 1,
                    line_height: 1,
                    letter_spacing: 1,
                    images: 1
                };
                $.cookie("special", $special, {
                    path: "/"
                })
            },
            Set: function () {
                $("html").removeClassWild("special-*").addClass("special-color-" + $special.color).addClass("special-font-size-" + $special.font_size).addClass("special-font-family-" + $special.font_family).addClass("special-line-height-" + $special.line_height).addClass("special-letter-spacing-" + $special.letter_spacing).addClass("special-images-" + $special.images);
                $("#special button").removeClass("active");
                $(".special-color button[value=" + $special.color + "]").addClass("active");
                $(".special-font-size button[value=" + $special.font_size + "]").addClass("active");
                $(".special-font-family button[value=" + $special.font_family + "]").addClass("active");
                $(".special-line-height button[value=" + $special.line_height + "]").addClass("active");
                $(".special-letter-spacing button[value=" + $special.letter_spacing + "]").addClass("active");
                $(".special-images button").val($special.images);
                special.ToggleImages()
            },
            ToggleImages: function () {
                $("img").each(function () {
                    if ($special.images) {
                        if ($(this).data("src"))
                            $(this).attr("src", $(this).data("src"));
                        if ($(this).data("srcset"))
                            $(this).attr("srcset", $(this).data("srcset"))
                    } else {
                        $(this).data("src", $(this).attr("src"));
                        if ($(this).attr("srcset"))
                            $(this).data("srcset", $(this).attr("srcset"));
                        $(this).removeAttr("src");
                        if ($(this).attr("srcset"))
                            $(this).removeAttr("srcset")
                    }
                })
            },
            Off: function () {
                if ($("#specialButton").length) {
                    $("html").removeClass("special").removeClassWild("special-*");
                    $("i.special-audio").remove();
                    if (responsiveVoice.isPlaying())
                        responsiveVoice.cancel();
                    $("audio").remove();
                    $("#special").remove();
                    $.removeCookie("special", {
                        path: "/"
                    });
                    $("#specialButton").show()
                } else {
                    if ($msie > 0) {
                        var url = window.location + "";
                        if (url.indexOf("template=") >= 0) {
                            window.location = url.replace(/template=\d+/g, "template=0")
                        } else {
                            window.location = url + "?template=0"
                        }
                    } else {
                        $.post(window.location.origin + window.location.pathname, {
                            template: 0
                        }, function () {
                            window.location = window.location.origin + window.location.pathname
                        })
                    }
                }
            },
            On: function () {
                $("head").append($('<link rel="stylesheet" type="text/css" />').attr("href", "//lidrekon.ru/slep/css/special.min.css"));
                if (!$special)
                    special.Reset();
                if ($("#specialButton").length) {
                    $special.active = 1;
                    $.cookie("special", $special, {
                        path: "/"
                    });
                    $("#specialButton").hide()
                }
                $("html").addClass("special");
                $("body").prepend($($tpl));
                special.Set();
                $("#special button").on("click", function () {
                    var parent = $(this).parent().attr("class").replace("special-", "");
                    if (parent) {
                        $("#special .special-" + parent + " button").removeClass("active");
                        switch (parent) {
                            case "color":
                                $special.color = parseInt($(this).val());
                                $(this).addClass("active");
                                $("html").removeClassWild("special-" + parent + "-*").addClass("special-" + parent + "-" + $(this).val());
                                $.cookie("special", $special, {
                                    path: "/"
                                });
                                break;
                            case "font-size":
                                $special.font_size = parseInt($(this).val());
                                $(this).addClass("active");
                                $("html").removeClassWild("special-" + parent + "-*").addClass("special-" + parent + "-" + $(this).val());
                                $.cookie("special", $special, {
                                    path: "/"
                                });
                                break;
                            case "font-family":
                                $special.font_family = parseInt($(this).val());
                                $(this).addClass("active");
                                $("html").removeClassWild("special-" + parent + "-*").addClass("special-" + parent + "-" + $(this).val());
                                $.cookie("special", $special, {
                                    path: "/"
                                });
                                break;
                            case "line-height":
                                $special.line_height = parseInt($(this).val());
                                $(this).addClass("active");
                                $("html").removeClassWild("special-" + parent + "-*").addClass("special-" + parent + "-" + $(this).val());
                                $.cookie("special", $special, {
                                    path: "/"
                                });
                                break;
                            case "letter-spacing":
                                $special.letter_spacing = parseInt($(this).val());
                                $(this).addClass("active");
                                $("html").removeClassWild("special-" + parent + "-*").addClass("special-" + parent + "-" + $(this).val());
                                $.cookie("special", $special, {
                                    path: "/"
                                });
                                break;
                            case "images":
                                $special.images = $special.images ? 0 : 1;
                                $(this).val($special.images);
                                special.ToggleImages();
                                $.cookie("special", $special, {
                                    path: "/"
                                });
                                break;
                            case "audio":
                                if ($(this).val() == 1) {
                                    responsiveVoice.speak("Выключено озвучивание текста.", "Russian Female");
                                    $("i.special-audio").remove();
                                    responsiveVoice.cancel();
                                    $("p,h1,h2,h3,h4,h5,h6,li,dt,dd,.audiotext").off();
                                    $(this).val(0)
                                } else {
                                    responsiveVoice.speak("Включено озвучивание текста.", "Russian Female");
                                    $(this).addClass("active");
                                    $(this).val(1);
                                    $("p,h1,h2,h3,h4,h5,h6,li,dt,dd,.audiotext,a,b").on("mouseover", function () {
                                        if (responsiveVoice.isPlaying())
                                            responsiveVoice.cancel();
                                        responsiveVoice.speak($(this).text().trim(), "Russian Female")
                                    })
                                }
                                break;
                            case "settings":
                                $("#special-settings-body").slideToggle();
                                break;
                            case "settings-close":
                                $("#special-settings-body").slideUp();
                                break;
                            case "reset":
                                special.Reset();
                                special.Set();
                                $("#special-settings-body").slideUp();
                                break;
                            case "quit":
                                special.Off();
                                break
                        }
                    }
                })
            }
        }
    }
    )(jQuery);
    jQuery(function ($) {
        $version = "1.3";
        $.cookie.json = true;
        $special = $.cookie("special");
        if ($("#specialButton").length) {
            $subversion = "lite";
            if ($special && $special.active)
                special.On();
            $("#specialButton").on("click", special.On)
        } else {
            $subversion = "pro";
            special.On()
        }
        console.info("Special version %s (%s).\nUser agent: %s", $version, $subversion, $ua);
        $("html").fadeIn(1e3)
    });
    (function (factory) {
        if (typeof define === "function" && define.amd) {
            define(["jquery"], factory)
        } else if (typeof exports === "object") {
            factory(require("jquery"))
        } else {
            factory(jQuery)
        }
    }
    )(function ($) {
        var pluses = /\+/g;
        function encode(s) {
            return config.raw ? s : encodeURIComponent(s)
        }
        function decode(s) {
            return config.raw ? s : decodeURIComponent(s)
        }
        function stringifyCookieValue(value) {
            return encode(config.json ? JSON.stringify(value) : String(value))
        }
        function parseCookieValue(s) {
            if (s.indexOf('"') === 0) {
                s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
            }
            try {
                s = decodeURIComponent(s.replace(pluses, " "));
                return config.json ? JSON.parse(s) : s
            } catch (e) { }
        }
        function read(s, converter) {
            var value = config.raw ? s : parseCookieValue(s);
            return $.isFunction(converter) ? converter(value) : value
        }
        var config = $.cookie = function (key, value, options) {
            if (value !== undefined && !$.isFunction(value)) {
                options = $.extend({}, config.defaults, options);
                if (typeof options.expires === "number") {
                    var days = options.expires
                        , t = options.expires = new Date;
                    t.setTime(+t + days * 864e5)
                }
                return document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
            }
            var result = key ? undefined : {};
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            for (var i = 0, l = cookies.length; i < l; i++) {
                var parts = cookies[i].split("=");
                var name = decode(parts.shift());
                var cookie = parts.join("=");
                if (key && key === name) {
                    result = read(cookie, value);
                    break
                }
                if (!key && (cookie = read(cookie)) !== undefined) {
                    result[name] = cookie
                }
            }
            return result
        }
            ;
        config.defaults = {};
        $.removeCookie = function (key, options) {
            if ($.cookie(key) === undefined) {
                return false
            }
            $.cookie(key, "", $.extend({}, options, {
                expires: -1
            }));
            return !$.cookie(key)
        }
    });
    if ("undefined" != typeof responsiveVoice)
        console.log("ResponsiveVoice already loaded"),
            console.log(responsiveVoice);
    else
        var ResponsiveVoice = function () {
            var a = this;
            a.version = "1.5.0";
            console.log("ResponsiveVoice r" + a.version);
            a.responsivevoices = [{
                name: "UK English Female",
                flag: "gb",
                gender: "f",
                voiceIDs: [3, 5, 1, 6, 7, 171, 201, 8]
            }, {
                name: "UK English Male",
                flag: "gb",
                gender: "m",
                voiceIDs: [0, 4, 2, 75, 202, 159, 6, 7]
            }, {
                name: "US English Female",
                flag: "us",
                gender: "f",
                voiceIDs: [39, 40, 41, 42, 43, 173, 205, 204, 235, 44]
            }, {
                name: "Arabic Male",
                flag: "ar",
                gender: "m",
                voiceIDs: [96, 95, 97, 196, 98],
                deprecated: !0
            }, {
                name: "Arabic Female",
                flag: "ar",
                gender: "f",
                voiceIDs: [96, 95, 97, 196, 98]
            }, {
                name: "Armenian Male",
                flag: "hy",
                gender: "f",
                voiceIDs: [99]
            }, {
                name: "Australian Female",
                flag: "au",
                gender: "f",
                voiceIDs: [87, 86, 5, 201, 88]
            }, {
                name: "Brazilian Portuguese Female",
                flag: "br",
                gender: "f",
                voiceIDs: [245, 124, 123, 125, 186, 223, 126]
            }, {
                name: "Chinese Female",
                flag: "cn",
                gender: "f",
                voiceIDs: [249, 58, 59, 60, 155, 191, 231, 61]
            }, {
                name: "Chinese (Hong Kong) Female",
                flag: "hk",
                gender: "f",
                voiceIDs: [192, 193, 232, 250, 251, 252]
            }, {
                name: "Chinese Taiwan Female",
                flag: "tw",
                gender: "f",
                voiceIDs: [252, 194, 233, 253, 254, 255]
            }, {
                name: "Czech Female",
                flag: "cz",
                gender: "f",
                voiceIDs: [101, 100, 102, 197, 103]
            }, {
                name: "Danish Female",
                flag: "dk",
                gender: "f",
                voiceIDs: [105, 104, 106, 198, 107]
            }, {
                name: "Deutsch Female",
                flag: "de",
                gender: "f",
                voiceIDs: [27, 28, 29, 30, 31, 78, 170, 199, 32]
            }, {
                name: "Dutch Female",
                flag: "nl",
                gender: "f",
                voiceIDs: [243, 219, 84, 157, 158, 184, 45]
            }, {
                name: "Finnish Female",
                flag: "fi",
                gender: "f",
                voiceIDs: [90, 89, 91, 209, 92]
            }, {
                name: "French Female",
                flag: "fr",
                gender: "f",
                voiceIDs: [240, 21, 22, 23, 77, 178, 210, 26]
            }, {
                name: "Greek Female",
                flag: "gr",
                gender: "f",
                voiceIDs: [62, 63, 80, 200, 64]
            }, {
                name: "Hatian Creole Female",
                flag: "ht",
                gender: "f",
                voiceIDs: [109]
            }, {
                name: "Hindi Female",
                flag: "hi",
                gender: "f",
                voiceIDs: [247, 66, 154, 179, 213, 67]
            }, {
                name: "Hungarian Female",
                flag: "hu",
                gender: "f",
                voiceIDs: [9, 10, 81, 214, 11]
            }, {
                name: "Indonesian Female",
                flag: "id",
                gender: "f",
                voiceIDs: [241, 111, 112, 180, 215, 113]
            }, {
                name: "Italian Female",
                flag: "it",
                gender: "f",
                voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 38]
            }, {
                name: "Japanese Female",
                flag: "jp",
                gender: "f",
                voiceIDs: [248, 50, 51, 52, 153, 182, 217, 53]
            }, {
                name: "Korean Female",
                flag: "kr",
                gender: "f",
                voiceIDs: [54, 55, 56, 156, 183, 218, 57]
            }, {
                name: "Latin Female",
                flag: "va",
                gender: "f",
                voiceIDs: [114]
            }, {
                name: "Norwegian Female",
                flag: "no",
                gender: "f",
                voiceIDs: [72, 73, 221, 74]
            }, {
                name: "Polish Female",
                flag: "pl",
                gender: "f",
                voiceIDs: [244, 120, 119, 121, 185, 222, 122]
            }, {
                name: "Portuguese Female",
                flag: "br",
                gender: "f",
                voiceIDs: [128, 127, 129, 187, 224, 130]
            }, {
                name: "Romanian Male",
                flag: "ro",
                gender: "m",
                voiceIDs: [151, 150, 152, 225, 46]
            }, {
                name: "Russian Female",
                flag: "ru",
                gender: "f",
                voiceIDs: [246, 47, 48, 83, 188, 226, 49]
            }, {
                name: "Slovak Female",
                flag: "sk",
                gender: "f",
                voiceIDs: [133, 132, 134, 227, 135]
            }, {
                name: "Spanish Female",
                flag: "es",
                gender: "f",
                voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 15]
            }, {
                name: "Spanish Latin American Female",
                flag: "es",
                gender: "f",
                voiceIDs: [239, 137, 136, 138, 175, 208, 139]
            }, {
                name: "Swedish Female",
                flag: "sv",
                gender: "f",
                voiceIDs: [85, 148, 149, 228, 65]
            }, {
                name: "Tamil Male",
                flag: "hi",
                gender: "m",
                voiceIDs: [141]
            }, {
                name: "Thai Female",
                flag: "th",
                gender: "f",
                voiceIDs: [143, 142, 144, 189, 229, 145]
            }, {
                name: "Turkish Female",
                flag: "tr",
                gender: "f",
                voiceIDs: [69, 70, 82, 190, 230, 71]
            }, {
                name: "Afrikaans Male",
                flag: "af",
                gender: "m",
                voiceIDs: [93]
            }, {
                name: "Albanian Male",
                flag: "sq",
                gender: "m",
                voiceIDs: [94]
            }, {
                name: "Bosnian Male",
                flag: "bs",
                gender: "m",
                voiceIDs: [14]
            }, {
                name: "Catalan Male",
                flag: "catalonia",
                gender: "m",
                voiceIDs: [68]
            }, {
                name: "Croatian Male",
                flag: "hr",
                gender: "m",
                voiceIDs: [13]
            }, {
                name: "Czech Male",
                flag: "cz",
                gender: "m",
                voiceIDs: [161]
            }, {
                name: "Danish Male",
                flag: "da",
                gender: "m",
                voiceIDs: [162],
                deprecated: !0
            }, {
                name: "Esperanto Male",
                flag: "eo",
                gender: "m",
                voiceIDs: [108]
            }, {
                name: "Finnish Male",
                flag: "fi",
                gender: "m",
                voiceIDs: [160],
                deprecated: !0
            }, {
                name: "Greek Male",
                flag: "gr",
                gender: "m",
                voiceIDs: [163],
                deprecated: !0
            }, {
                name: "Hungarian Male",
                flag: "hu",
                gender: "m",
                voiceIDs: [164]
            }, {
                name: "Icelandic Male",
                flag: "is",
                gender: "m",
                voiceIDs: [110]
            }, {
                name: "Latin Male",
                flag: "va",
                gender: "m",
                voiceIDs: [165],
                deprecated: !0
            }, {
                name: "Latvian Male",
                flag: "lv",
                gender: "m",
                voiceIDs: [115]
            }, {
                name: "Macedonian Male",
                flag: "mk",
                gender: "m",
                voiceIDs: [116]
            }, {
                name: "Moldavian Male",
                flag: "md",
                gender: "m",
                voiceIDs: [117]
            }, {
                name: "Montenegrin Male",
                flag: "me",
                gender: "m",
                voiceIDs: [118]
            }, {
                name: "Norwegian Male",
                flag: "no",
                gender: "m",
                voiceIDs: [166]
            }, {
                name: "Serbian Male",
                flag: "sr",
                gender: "m",
                voiceIDs: [12]
            }, {
                name: "Serbo-Croatian Male",
                flag: "hr",
                gender: "m",
                voiceIDs: [131]
            }, {
                name: "Slovak Male",
                flag: "sk",
                gender: "m",
                voiceIDs: [167],
                deprecated: !0
            }, {
                name: "Swahili Male",
                flag: "sw",
                gender: "m",
                voiceIDs: [140]
            }, {
                name: "Swedish Male",
                flag: "sv",
                gender: "m",
                voiceIDs: [168],
                deprecated: !0
            }, {
                name: "Vietnamese Male",
                flag: "vi",
                gender: "m",
                voiceIDs: [146],
                deprecated: !0
            }, {
                name: "Welsh Male",
                flag: "cy",
                gender: "m",
                voiceIDs: [147]
            }, {
                name: "US English Male",
                flag: "us",
                gender: "m",
                voiceIDs: [0, 4, 2, 6, 7, 75, 159, 234, 236, 237]
            }, {
                name: "Fallback UK Female",
                flag: "gb",
                gender: "f",
                voiceIDs: [8]
            }];
            a.voicecollection = [{
                name: "Google UK English Male"
            }, {
                name: "Agnes"
            }, {
                name: "Daniel Compact"
            }, {
                name: "Google UK English Female"
            }, {
                name: "en-GB",
                rate: .25,
                pitch: 1
            }, {
                name: "en-AU",
                rate: .25,
                pitch: 1
            }, {
                name: "inglés Reino Unido"
            }, {
                name: "English United Kingdom"
            }, {
                name: "Fallback en-GB Female",
                lang: "en-GB",
                fallbackvoice: !0
            }, {
                name: "Eszter Compact"
            }, {
                name: "hu-HU",
                rate: .4
            }, {
                name: "Fallback Hungarian",
                lang: "hu",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Serbian",
                lang: "sr",
                fallbackvoice: !0
            }, {
                name: "Fallback Croatian",
                lang: "hr",
                fallbackvoice: !0
            }, {
                name: "Fallback Bosnian",
                lang: "bs",
                fallbackvoice: !0
            }, {
                name: "Fallback Spanish",
                lang: "es",
                fallbackvoice: !0
            }, {
                name: "Spanish Spain"
            }, {
                name: "español España"
            }, {
                name: "Diego Compact",
                rate: .3
            }, {
                name: "Google Español"
            }, {
                name: "es-ES",
                rate: .2
            }, {
                name: "Google Français"
            }, {
                name: "French France"
            }, {
                name: "francés Francia"
            }, {
                name: "Virginie Compact",
                rate: .5
            }, {
                name: "fr-FR",
                rate: .25
            }, {
                name: "Fallback French",
                lang: "fr",
                fallbackvoice: !0
            }, {
                name: "Google Deutsch"
            }, {
                name: "German Germany"
            }, {
                name: "alemán Alemania"
            }, {
                name: "Yannick Compact",
                rate: .5
            }, {
                name: "de-DE",
                rate: .25
            }, {
                name: "Fallback Deutsch",
                lang: "de",
                fallbackvoice: !0
            }, {
                name: "Google Italiano"
            }, {
                name: "Italian Italy"
            }, {
                name: "italiano Italia"
            }, {
                name: "Paolo Compact",
                rate: .5
            }, {
                name: "it-IT",
                rate: .25
            }, {
                name: "Fallback Italian",
                lang: "it",
                fallbackvoice: !0
            }, {
                name: "Google US English",
                timerSpeed: 1
            }, {
                name: "English United States"
            }, {
                name: "inglés Estados Unidos"
            }, {
                name: "Vicki"
            }, {
                name: "en-US",
                rate: .2,
                pitch: 1,
                timerSpeed: 1.3
            }, {
                name: "Fallback English",
                lang: "en-US",
                fallbackvoice: !0,
                timerSpeed: 0
            }, {
                name: "Fallback Dutch",
                lang: "nl",
                fallbackvoice: !0,
                timerSpeed: 0
            }, {
                name: "Fallback Romanian",
                lang: "ro",
                fallbackvoice: !0
            }, {
                name: "Milena Compact"
            }, {
                name: "ru-RU",
                rate: .25
            }, {
                name: "Fallback Russian",
                lang: "ru_RU",
                fallbackvoice: !0
            }, {
                name: "Google 日本人",
                timerSpeed: 1
            }, {
                name: "Kyoko Compact"
            }, {
                name: "ja-JP",
                rate: .25
            }, {
                name: "Fallback Japanese",
                lang: "ja",
                fallbackvoice: !0
            }, {
                name: "Google 한국의",
                timerSpeed: 1
            }, {
                name: "Narae Compact"
            }, {
                name: "ko-KR",
                rate: .25
            }, {
                name: "Fallback Korean",
                lang: "ko",
                fallbackvoice: !0
            }, {
                name: "Google 中国的",
                timerSpeed: 1
            }, {
                name: "Ting-Ting Compact"
            }, {
                name: "zh-CN",
                rate: .25
            }, {
                name: "Fallback Chinese",
                lang: "zh-CN",
                fallbackvoice: !0
            }, {
                name: "Alexandros Compact"
            }, {
                name: "el-GR",
                rate: .25
            }, {
                name: "Fallback Greek",
                lang: "el",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Swedish",
                lang: "sv",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "hi-IN",
                rate: .25
            }, {
                name: "Fallback Hindi",
                lang: "hi",
                fallbackvoice: !0
            }, {
                name: "Fallback Catalan",
                lang: "ca",
                fallbackvoice: !0
            }, {
                name: "Aylin Compact"
            }, {
                name: "tr-TR",
                rate: .25
            }, {
                name: "Fallback Turkish",
                lang: "tr",
                fallbackvoice: !0
            }, {
                name: "Stine Compact"
            }, {
                name: "no-NO",
                rate: .25
            }, {
                name: "Fallback Norwegian",
                lang: "no",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Daniel"
            }, {
                name: "Monica"
            }, {
                name: "Amelie"
            }, {
                name: "Anna"
            }, {
                name: "Alice"
            }, {
                name: "Melina"
            }, {
                name: "Mariska"
            }, {
                name: "Yelda"
            }, {
                name: "Milena"
            }, {
                name: "Xander"
            }, {
                name: "Alva"
            }, {
                name: "Lee Compact"
            }, {
                name: "Karen"
            }, {
                name: "Fallback Australian",
                lang: "en-AU",
                fallbackvoice: !0
            }, {
                name: "Mikko Compact"
            }, {
                name: "Satu"
            }, {
                name: "fi-FI",
                rate: .25
            }, {
                name: "Fallback Finnish",
                lang: "fi",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Afrikans",
                lang: "af",
                fallbackvoice: !0
            }, {
                name: "Fallback Albanian",
                lang: "sq",
                fallbackvoice: !0
            }, {
                name: "Maged Compact"
            }, {
                name: "Tarik"
            }, {
                name: "ar-SA",
                rate: .25
            }, {
                name: "Fallback Arabic",
                lang: "ar",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Armenian",
                lang: "hy",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Zuzana Compact"
            }, {
                name: "Zuzana"
            }, {
                name: "cs-CZ",
                rate: .25
            }, {
                name: "Fallback Czech",
                lang: "cs",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Ida Compact"
            }, {
                name: "Sara"
            }, {
                name: "da-DK",
                rate: .25
            }, {
                name: "Fallback Danish",
                lang: "da",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Esperanto",
                lang: "eo",
                fallbackvoice: !0
            }, {
                name: "Fallback Hatian Creole",
                lang: "ht",
                fallbackvoice: !0
            }, {
                name: "Fallback Icelandic",
                lang: "is",
                fallbackvoice: !0
            }, {
                name: "Damayanti"
            }, {
                name: "id-ID",
                rate: .25
            }, {
                name: "Fallback Indonesian",
                lang: "id",
                fallbackvoice: !0
            }, {
                name: "Fallback Latin",
                lang: "la",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Latvian",
                lang: "lv",
                fallbackvoice: !0
            }, {
                name: "Fallback Macedonian",
                lang: "mk",
                fallbackvoice: !0
            }, {
                name: "Fallback Moldavian",
                lang: "mo",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Montenegrin",
                lang: "sr-ME",
                fallbackvoice: !0
            }, {
                name: "Agata Compact"
            }, {
                name: "Zosia"
            }, {
                name: "pl-PL",
                rate: .25
            }, {
                name: "Fallback Polish",
                lang: "pl",
                fallbackvoice: !0
            }, {
                name: "Raquel Compact"
            }, {
                name: "Luciana"
            }, {
                name: "pt-BR",
                rate: .25
            }, {
                name: "Fallback Brazilian Portugese",
                lang: "pt-BR",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Joana Compact"
            }, {
                name: "Joana"
            }, {
                name: "pt-PT",
                rate: .25
            }, {
                name: "Fallback Portuguese",
                lang: "pt-PT",
                fallbackvoice: !0
            }, {
                name: "Fallback Serbo-Croation",
                lang: "sh",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Laura Compact"
            }, {
                name: "Laura"
            }, {
                name: "sk-SK",
                rate: .25
            }, {
                name: "Fallback Slovak",
                lang: "sk",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Javier Compact"
            }, {
                name: "Paulina"
            }, {
                name: "es-MX",
                rate: .25
            }, {
                name: "Fallback Spanish (Latin American)",
                lang: "es-419",
                fallbackvoice: !0,
                service: "g2"
            }, {
                name: "Fallback Swahili",
                lang: "sw",
                fallbackvoice: !0
            }, {
                name: "Fallback Tamil",
                lang: "ta",
                fallbackvoice: !0
            }, {
                name: "Narisa Compact"
            }, {
                name: "Kanya"
            }, {
                name: "th-TH",
                rate: .25
            }, {
                name: "Fallback Thai",
                lang: "th",
                fallbackvoice: !0
            }, {
                name: "Fallback Vietnamese",
                lang: "vi",
                fallbackvoice: !0
            }, {
                name: "Fallback Welsh",
                lang: "cy",
                fallbackvoice: !0
            }, {
                name: "Oskar Compact"
            }, {
                name: "sv-SE",
                rate: .25
            }, {
                name: "Simona Compact"
            }, {
                name: "Ioana"
            }, {
                name: "ro-RO",
                rate: .25
            }, {
                name: "Kyoko"
            }, {
                name: "Lekha"
            }, {
                name: "Ting-Ting"
            }, {
                name: "Yuna"
            }, {
                name: "Xander Compact"
            }, {
                name: "nl-NL",
                rate: .25
            }, {
                name: "Fallback UK English Male",
                lang: "en-GB",
                fallbackvoice: !0,
                service: "g1",
                voicename: "rjs"
            }, {
                name: "Finnish Male",
                lang: "fi",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Czech Male",
                lang: "cs",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Danish Male",
                lang: "da",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Greek Male",
                lang: "el",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                rate: .25
            }, {
                name: "Hungarian Male",
                lang: "hu",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Latin Male",
                lang: "la",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Norwegian Male",
                lang: "no",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Slovak Male",
                lang: "sk",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Swedish Male",
                lang: "sv",
                fallbackvoice: !0,
                service: "g1",
                voicename: ""
            }, {
                name: "Fallback US English Male",
                lang: "en",
                fallbackvoice: !0,
                service: "tts-api",
                voicename: ""
            }, {
                name: "German Germany",
                lang: "de_DE"
            }, {
                name: "English United Kingdom",
                lang: "en_GB"
            }, {
                name: "English India",
                lang: "en_IN"
            }, {
                name: "English United States",
                lang: "en_US"
            }, {
                name: "Spanish Spain",
                lang: "es_ES"
            }, {
                name: "Spanish Mexico",
                lang: "es_MX"
            }, {
                name: "Spanish United States",
                lang: "es_US"
            }, {
                name: "French Belgium",
                lang: "fr_BE"
            }, {
                name: "French France",
                lang: "fr_FR"
            }, {
                name: "Hindi India",
                lang: "hi_IN"
            }, {
                name: "Indonesian Indonesia",
                lang: "in_ID"
            }, {
                name: "Italian Italy",
                lang: "it_IT"
            }, {
                name: "Japanese Japan",
                lang: "ja_JP"
            }, {
                name: "Korean South Korea",
                lang: "ko_KR"
            }, {
                name: "Dutch Netherlands",
                lang: "nl_NL"
            }, {
                name: "Polish Poland",
                lang: "pl_PL"
            }, {
                name: "Portuguese Brazil",
                lang: "pt_BR"
            }, {
                name: "Portuguese Portugal",
                lang: "pt_PT"
            }, {
                name: "Russian Russia",
                lang: "ru_RU"
            }, {
                name: "Thai Thailand",
                lang: "th_TH"
            }, {
                name: "Turkish Turkey",
                lang: "tr_TR"
            }, {
                name: "Chinese China",
                lang: "zh_CN_#Hans"
            }, {
                name: "Chinese Hong Kong",
                lang: "zh_HK_#Hans"
            }, {
                name: "Chinese Hong Kong",
                lang: "zh_HK_#Hant"
            }, {
                name: "Chinese Taiwan",
                lang: "zh_TW_#Hant"
            }, {
                name: "Alex"
            }, {
                name: "Maged",
                lang: "ar-SA"
            }, {
                name: "Zuzana",
                lang: "cs-CZ"
            }, {
                name: "Sara",
                lang: "da-DK"
            }, {
                name: "Anna",
                lang: "de-DE"
            }, {
                name: "Melina",
                lang: "el-GR"
            }, {
                name: "Karen",
                lang: "en-AU"
            }, {
                name: "Daniel",
                lang: "en-GB"
            }, {
                name: "Moira",
                lang: "en-IE"
            }, {
                name: "Samantha (Enhanced)",
                lang: "en-US"
            }, {
                name: "Samantha",
                lang: "en-US"
            }, {
                name: "Tessa",
                lang: "en-ZA"
            }, {
                name: "Monica",
                lang: "es-ES"
            }, {
                name: "Paulina",
                lang: "es-MX"
            }, {
                name: "Satu",
                lang: "fi-FI"
            }, {
                name: "Amelie",
                lang: "fr-CA"
            }, {
                name: "Thomas",
                lang: "fr-FR"
            }, {
                name: "Carmit",
                lang: "he-IL"
            }, {
                name: "Lekha",
                lang: "hi-IN"
            }, {
                name: "Mariska",
                lang: "hu-HU"
            }, {
                name: "Damayanti",
                lang: "id-ID"
            }, {
                name: "Alice",
                lang: "it-IT"
            }, {
                name: "Kyoko",
                lang: "ja-JP"
            }, {
                name: "Yuna",
                lang: "ko-KR"
            }, {
                name: "Ellen",
                lang: "nl-BE"
            }, {
                name: "Xander",
                lang: "nl-NL"
            }, {
                name: "Nora",
                lang: "no-NO"
            }, {
                name: "Zosia",
                lang: "pl-PL"
            }, {
                name: "Luciana",
                lang: "pt-BR"
            }, {
                name: "Joana",
                lang: "pt-PT"
            }, {
                name: "Ioana",
                lang: "ro-RO"
            }, {
                name: "Milena",
                lang: "ru-RU"
            }, {
                name: "Laura",
                lang: "sk-SK"
            }, {
                name: "Alva",
                lang: "sv-SE"
            }, {
                name: "Kanya",
                lang: "th-TH"
            }, {
                name: "Yelda",
                lang: "tr-TR"
            }, {
                name: "Ting-Ting",
                lang: "zh-CN"
            }, {
                name: "Sin-Ji",
                lang: "zh-HK"
            }, {
                name: "Mei-Jia",
                lang: "zh-TW"
            }, {
                name: "Microsoft David Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Zira Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Mark Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "native",
                lang: ""
            }, {
                name: "Google español"
            }, {
                name: "Google español de Estados Unidos"
            }, {
                name: "Google français"
            }, {
                name: "Google Bahasa Indonesia"
            }, {
                name: "Google italiano"
            }, {
                name: "Google Nederlands"
            }, {
                name: "Google polski"
            }, {
                name: "Google português do Brasil"
            }, {
                name: "Google русский"
            }, {
                name: "Google हिन्दी"
            }, {
                name: "Google 日本語"
            }, {
                name: "Google 普通话（中国大陆）"
            }, {
                name: "Google 粤語（香港）"
            }, {
                name: "zh-HK",
                rate: .25
            }, {
                name: "Fallback Chinese (Hong Kong) Female",
                lang: "zh-HK",
                fallbackvoice: !0,
                service: "g1"
            }, {
                name: "Google 粤語（香港）"
            }, {
                name: "zh-TW",
                rate: .25
            }, {
                name: "Fallback Chinese (Taiwan) Female",
                lang: "zh-TW",
                fallbackvoice: !0,
                service: "g1"
            }];
            a.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
            a.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase()) || /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
            a.is_chrome = -1 < navigator.userAgent.indexOf("Chrome");
            a.is_safari = -1 < navigator.userAgent.indexOf("Safari");
            a.is_chrome && a.is_safari && (a.is_safari = !1);
            a.is_opera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
            a.is_android = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            a.iOS_initialized = !1;
            a.iOS9_initialized = !1;
            a.cache_ios_voices = [{
                name: "he-IL",
                voiceURI: "he-IL",
                lang: "he-IL"
            }, {
                name: "th-TH",
                voiceURI: "th-TH",
                lang: "th-TH"
            }, {
                name: "pt-BR",
                voiceURI: "pt-BR",
                lang: "pt-BR"
            }, {
                name: "sk-SK",
                voiceURI: "sk-SK",
                lang: "sk-SK"
            }, {
                name: "fr-CA",
                voiceURI: "fr-CA",
                lang: "fr-CA"
            }, {
                name: "ro-RO",
                voiceURI: "ro-RO",
                lang: "ro-RO"
            }, {
                name: "no-NO",
                voiceURI: "no-NO",
                lang: "no-NO"
            }, {
                name: "fi-FI",
                voiceURI: "fi-FI",
                lang: "fi-FI"
            }, {
                name: "pl-PL",
                voiceURI: "pl-PL",
                lang: "pl-PL"
            }, {
                name: "de-DE",
                voiceURI: "de-DE",
                lang: "de-DE"
            }, {
                name: "nl-NL",
                voiceURI: "nl-NL",
                lang: "nl-NL"
            }, {
                name: "id-ID",
                voiceURI: "id-ID",
                lang: "id-ID"
            }, {
                name: "tr-TR",
                voiceURI: "tr-TR",
                lang: "tr-TR"
            }, {
                name: "it-IT",
                voiceURI: "it-IT",
                lang: "it-IT"
            }, {
                name: "pt-PT",
                voiceURI: "pt-PT",
                lang: "pt-PT"
            }, {
                name: "fr-FR",
                voiceURI: "fr-FR",
                lang: "fr-FR"
            }, {
                name: "ru-RU",
                voiceURI: "ru-RU",
                lang: "ru-RU"
            }, {
                name: "es-MX",
                voiceURI: "es-MX",
                lang: "es-MX"
            }, {
                name: "zh-HK",
                voiceURI: "zh-HK",
                lang: "zh-HK"
            }, {
                name: "sv-SE",
                voiceURI: "sv-SE",
                lang: "sv-SE"
            }, {
                name: "hu-HU",
                voiceURI: "hu-HU",
                lang: "hu-HU"
            }, {
                name: "zh-TW",
                voiceURI: "zh-TW",
                lang: "zh-TW"
            }, {
                name: "es-ES",
                voiceURI: "es-ES",
                lang: "es-ES"
            }, {
                name: "zh-CN",
                voiceURI: "zh-CN",
                lang: "zh-CN"
            }, {
                name: "nl-BE",
                voiceURI: "nl-BE",
                lang: "nl-BE"
            }, {
                name: "en-GB",
                voiceURI: "en-GB",
                lang: "en-GB"
            }, {
                name: "ar-SA",
                voiceURI: "ar-SA",
                lang: "ar-SA"
            }, {
                name: "ko-KR",
                voiceURI: "ko-KR",
                lang: "ko-KR"
            }, {
                name: "cs-CZ",
                voiceURI: "cs-CZ",
                lang: "cs-CZ"
            }, {
                name: "en-ZA",
                voiceURI: "en-ZA",
                lang: "en-ZA"
            }, {
                name: "en-AU",
                voiceURI: "en-AU",
                lang: "en-AU"
            }, {
                name: "da-DK",
                voiceURI: "da-DK",
                lang: "da-DK"
            }, {
                name: "en-US",
                voiceURI: "en-US",
                lang: "en-US"
            }, {
                name: "en-IE",
                voiceURI: "en-IE",
                lang: "en-IE"
            }, {
                name: "hi-IN",
                voiceURI: "hi-IN",
                lang: "hi-IN"
            }, {
                name: "el-GR",
                voiceURI: "el-GR",
                lang: "el-GR"
            }, {
                name: "ja-JP",
                voiceURI: "ja-JP",
                lang: "ja-JP"
            }];
            a.cache_ios9_voices = [{
                name: "Maged",
                voiceURI: "com.apple.ttsbundle.Maged-compact",
                lang: "ar-SA",
                localService: !0,
                "default": !0
            }, {
                name: "Zuzana",
                voiceURI: "com.apple.ttsbundle.Zuzana-compact",
                lang: "cs-CZ",
                localService: !0,
                "default": !0
            }, {
                name: "Sara",
                voiceURI: "com.apple.ttsbundle.Sara-compact",
                lang: "da-DK",
                localService: !0,
                "default": !0
            }, {
                name: "Anna",
                voiceURI: "com.apple.ttsbundle.Anna-compact",
                lang: "de-DE",
                localService: !0,
                "default": !0
            }, {
                name: "Melina",
                voiceURI: "com.apple.ttsbundle.Melina-compact",
                lang: "el-GR",
                localService: !0,
                "default": !0
            }, {
                name: "Karen",
                voiceURI: "com.apple.ttsbundle.Karen-compact",
                lang: "en-AU",
                localService: !0,
                "default": !0
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.Daniel-compact",
                lang: "en-GB",
                localService: !0,
                "default": !0
            }, {
                name: "Moira",
                voiceURI: "com.apple.ttsbundle.Moira-compact",
                lang: "en-IE",
                localService: !0,
                "default": !0
            }, {
                name: "Samantha (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Samantha-premium",
                lang: "en-US",
                localService: !0,
                "default": !0
            }, {
                name: "Samantha",
                voiceURI: "com.apple.ttsbundle.Samantha-compact",
                lang: "en-US",
                localService: !0,
                "default": !0
            }, {
                name: "Tessa",
                voiceURI: "com.apple.ttsbundle.Tessa-compact",
                lang: "en-ZA",
                localService: !0,
                "default": !0
            }, {
                name: "Monica",
                voiceURI: "com.apple.ttsbundle.Monica-compact",
                lang: "es-ES",
                localService: !0,
                "default": !0
            }, {
                name: "Paulina",
                voiceURI: "com.apple.ttsbundle.Paulina-compact",
                lang: "es-MX",
                localService: !0,
                "default": !0
            }, {
                name: "Satu",
                voiceURI: "com.apple.ttsbundle.Satu-compact",
                lang: "fi-FI",
                localService: !0,
                "default": !0
            }, {
                name: "Amelie",
                voiceURI: "com.apple.ttsbundle.Amelie-compact",
                lang: "fr-CA",
                localService: !0,
                "default": !0
            }, {
                name: "Thomas",
                voiceURI: "com.apple.ttsbundle.Thomas-compact",
                lang: "fr-FR",
                localService: !0,
                "default": !0
            }, {
                name: "Carmit",
                voiceURI: "com.apple.ttsbundle.Carmit-compact",
                lang: "he-IL",
                localService: !0,
                "default": !0
            }, {
                name: "Lekha",
                voiceURI: "com.apple.ttsbundle.Lekha-compact",
                lang: "hi-IN",
                localService: !0,
                "default": !0
            }, {
                name: "Mariska",
                voiceURI: "com.apple.ttsbundle.Mariska-compact",
                lang: "hu-HU",
                localService: !0,
                "default": !0
            }, {
                name: "Damayanti",
                voiceURI: "com.apple.ttsbundle.Damayanti-compact",
                lang: "id-ID",
                localService: !0,
                "default": !0
            }, {
                name: "Alice",
                voiceURI: "com.apple.ttsbundle.Alice-compact",
                lang: "it-IT",
                localService: !0,
                "default": !0
            }, {
                name: "Kyoko",
                voiceURI: "com.apple.ttsbundle.Kyoko-compact",
                lang: "ja-JP",
                localService: !0,
                "default": !0
            }, {
                name: "Yuna",
                voiceURI: "com.apple.ttsbundle.Yuna-compact",
                lang: "ko-KR",
                localService: !0,
                "default": !0
            }, {
                name: "Ellen",
                voiceURI: "com.apple.ttsbundle.Ellen-compact",
                lang: "nl-BE",
                localService: !0,
                "default": !0
            }, {
                name: "Xander",
                voiceURI: "com.apple.ttsbundle.Xander-compact",
                lang: "nl-NL",
                localService: !0,
                "default": !0
            }, {
                name: "Nora",
                voiceURI: "com.apple.ttsbundle.Nora-compact",
                lang: "no-NO",
                localService: !0,
                "default": !0
            }, {
                name: "Zosia",
                voiceURI: "com.apple.ttsbundle.Zosia-compact",
                lang: "pl-PL",
                localService: !0,
                "default": !0
            }, {
                name: "Luciana",
                voiceURI: "com.apple.ttsbundle.Luciana-compact",
                lang: "pt-BR",
                localService: !0,
                "default": !0
            }, {
                name: "Joana",
                voiceURI: "com.apple.ttsbundle.Joana-compact",
                lang: "pt-PT",
                localService: !0,
                "default": !0
            }, {
                name: "Ioana",
                voiceURI: "com.apple.ttsbundle.Ioana-compact",
                lang: "ro-RO",
                localService: !0,
                "default": !0
            }, {
                name: "Milena",
                voiceURI: "com.apple.ttsbundle.Milena-compact",
                lang: "ru-RU",
                localService: !0,
                "default": !0
            }, {
                name: "Laura",
                voiceURI: "com.apple.ttsbundle.Laura-compact",
                lang: "sk-SK",
                localService: !0,
                "default": !0
            }, {
                name: "Alva",
                voiceURI: "com.apple.ttsbundle.Alva-compact",
                lang: "sv-SE",
                localService: !0,
                "default": !0
            }, {
                name: "Kanya",
                voiceURI: "com.apple.ttsbundle.Kanya-compact",
                lang: "th-TH",
                localService: !0,
                "default": !0
            }, {
                name: "Yelda",
                voiceURI: "com.apple.ttsbundle.Yelda-compact",
                lang: "tr-TR",
                localService: !0,
                "default": !0
            }, {
                name: "Ting-Ting",
                voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
                lang: "zh-CN",
                localService: !0,
                "default": !0
            }, {
                name: "Sin-Ji",
                voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
                lang: "zh-HK",
                localService: !0,
                "default": !0
            }, {
                name: "Mei-Jia",
                voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
                lang: "zh-TW",
                localService: !0,
                "default": !0
            }];
            a.systemvoices = null;
            a.CHARACTER_LIMIT = 100;
            a.VOICESUPPORT_ATTEMPTLIMIT = 5;
            a.voicesupport_attempts = 0;
            a.fallbackMode = !1;
            a.WORDS_PER_MINUTE = 130;
            a.fallback_parts = null;
            a.fallback_part_index = 0;
            a.fallback_audio = null;
            a.fallback_playbackrate = 1;
            a.def_fallback_playbackrate = a.fallback_playbackrate;
            a.fallback_audiopool = [];
            a.msgparameters = null;
            a.timeoutId = null;
            a.OnLoad_callbacks = [];
            a.useTimer = !1;
            a.utterances = [];
            a.tstCompiled = function (a) {
                return eval("typeof xy === 'undefined'")
            }
                ;
            a.fallbackServicePath = "http://tts.voicetech.yandex.net/" + (a.tstCompiled() ? "" : "develop/") + "tts";
            a.default_rv = a.responsivevoices[0];
            a.debug = !1;
            a.log = function (b) {
                a.debug && console.log(b)
            }
                ;
            a.init = function () {
                a.is_android && (a.useTimer = !0);
                a.is_opera || "undefined" === typeof speechSynthesis ? (console.log("RV: Voice synthesis not supported"),
                    a.enableFallbackMode()) : setTimeout(function () {
                        var b = setInterval(function () {
                            var c = window.speechSynthesis.getVoices();
                            0 != c.length || null != a.systemvoices && 0 != a.systemvoices.length ? (console.log("RV: Voice support ready"),
                                a.systemVoicesReady(c),
                                clearInterval(b)) : (console.log("Voice support NOT ready"),
                                    a.voicesupport_attempts++,
                                    a.voicesupport_attempts > a.VOICESUPPORT_ATTEMPTLIMIT && (clearInterval(b),
                                        null != window.speechSynthesis ? a.iOS ? (a.iOS9 ? a.systemVoicesReady(a.cache_ios9_voices) : a.systemVoicesReady(a.cache_ios_voices),
                                            console.log("RV: Voice support ready (cached)")) : (console.log("RV: speechSynthesis present but no system voices found"),
                                                a.enableFallbackMode()) : a.enableFallbackMode()))
                        }, 100)
                    }, 100);
                a.Dispatch("OnLoad")
            }
                ;
            a.systemVoicesReady = function (b) {
                a.systemvoices = b;
                a.mapRVs();
                null != a.OnVoiceReady && a.OnVoiceReady.call();
                a.Dispatch("OnReady");
                window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))
            }
                ;
            a.enableFallbackMode = function () {
                a.fallbackMode = !0;
                console.log("RV: Enabling fallback mode");
                a.mapRVs();
                null != a.OnVoiceReady && a.OnVoiceReady.call();
                a.Dispatch("OnReady");
                window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))
            }
                ;
            a.getVoices = function () {
                for (var b = [], c = 0; c < a.responsivevoices.length; c++)
                    b.push({
                        name: a.responsivevoices[c].name
                    });
                return b
            }
                ;
            a.speak = function (b, c, e) {
                if (a.iOS9 && !a.iOS9_initialized)
                    a.log("Initializing ios9"),
                        setTimeout(function () {
                            a.speak(b, c, e)
                        }, 100),
                        a.clickEvent(),
                        a.iOS9_initialized = !0;
                else {
                    a.isPlaying() && (a.log("Cancelling previous speech"),
                        a.cancel());
                    a.fallbackMode && 0 < a.fallback_audiopool.length && a.clearFallbackPool();
                    b = b.replace(/[\"\`]/gm, "'");
                    a.msgparameters = e || {};
                    a.msgtext = b;
                    a.msgvoicename = c;
                    a.onstartFired = !1;
                    var h = [];
                    if (b.length > a.CHARACTER_LIMIT) {
                        for (var f = b; f.length > a.CHARACTER_LIMIT;) {
                            var g = f.search(/[:!?.;]+/)
                                , d = "";
                            if (-1 == g || g >= a.CHARACTER_LIMIT)
                                g = f.search(/[,]+/);
                            -1 == g && -1 == f.search(" ") && (g = 99);
                            if (-1 == g || g >= a.CHARACTER_LIMIT)
                                for (var k = f.split(" "), g = 0; g < k.length && !(d.length + k[g].length + 1 > a.CHARACTER_LIMIT); g++)
                                    d += (0 != g ? " " : "") + k[g];
                            else
                                d = f.substr(0, g + 1);
                            f = f.substr(d.length, f.length - d.length);
                            h.push(d)
                        }
                        0 < f.length && h.push(f)
                    } else
                        h.push(b);
                    a.multipartText = h;
                    g = null == c ? a.default_rv : a.getResponsiveVoice(c);
                    !0 === g.deprecated && console.warn("ResponsiveVoice: Voice " + g.name + " is deprecated and will be removed in future releases");
                    f = {};
                    if (null != g.mappedProfile)
                        f = g.mappedProfile;
                    else if (f.systemvoice = a.getMatchedVoice(g),
                        f.collectionvoice = {},
                        null == f.systemvoice) {
                        console.log("RV: ERROR: No voice found for: " + c);
                        return
                    }
                    a.msgprofile = f;
                    a.utterances = [];
                    for (g = 0; g < h.length; g++)
                        if (a.fallbackMode) {
                            a.fallback_playbackrate = a.def_fallback_playbackrate;
                            var d = a.selectBest([f.collectionvoice.pitch, f.systemvoice.pitch, 1]), k = a.selectBest([a.iOS9 ? 1 : null, f.collectionvoice.rate, f.systemvoice.rate, 1]), l = a.selectBest([f.collectionvoice.volume, f.systemvoice.volume, 1]), m;
                            null != e && (d *= null != e.pitch ? e.pitch : 1,
                                k *= null != e.rate ? e.rate : 1,
                                l *= null != e.volume ? e.volume : 1,
                                m = e.extraParams || null);
                            d /= 2;
                            k /= 2;
                            l *= 2;
                            d = Math.min(Math.max(d, 0), 1);
                            k = Math.min(Math.max(k, 0), 1);
                            l = Math.min(Math.max(l, 0), 1);
                            d = a.fallbackServicePath + "?format=mp3&quality=hi&text=" + encodeURIComponent(h[g]) + "&lang=" + (f.collectionvoice.lang || f.systemvoice.lang || "en-US");
                            m && (d += "&extraParams=" + JSON.stringify(m));
                            k = document.createElement("AUDIO");
                            k.src = d;
                            k.playbackRate = a.fallback_playbackrate;
                            k.preload = "auto";
                            k.load();
                            a.fallback_parts.push(k)
                        } else
                            a.log("Using SpeechSynthesis"),
                                d = new SpeechSynthesisUtterance,
                                d.voiceURI = f.systemvoice.voiceURI,
                                d.volume = a.selectBest([f.collectionvoice.volume, f.systemvoice.volume, 1]),
                                d.rate = a.selectBest([a.iOS9 ? 1 : null, f.collectionvoice.rate, f.systemvoice.rate, 1]),
                                d.pitch = a.selectBest([f.collectionvoice.pitch, f.systemvoice.pitch, 1]),
                                d.text = h[g],
                                d.lang = a.selectBest([f.collectionvoice.lang, f.systemvoice.lang]),
                                d.rvIndex = g,
                                d.rvTotal = h.length,
                                0 == g && (d.onstart = a.speech_onstart),
                                a.msgparameters.onendcalled = !1,
                                null != e ? (d.voice = "undefined" !== typeof e.voice ? e.voice : f.systemvoice,
                                    g < h.length - 1 && 1 < h.length ? (d.onend = a.onPartEnd,
                                        d.hasOwnProperty("addEventListener") && d.addEventListener("end", a.onPartEnd)) : (d.onend = a.speech_onend,
                                            d.hasOwnProperty("addEventListener") && d.addEventListener("end", a.speech_onend)),
                                    d.onerror = e.onerror || function (b) {
                                        a.log("RV: Unknow Error");
                                        a.log(b)
                                    }
                                    ,
                                    d.onpause = e.onpause,
                                    d.onresume = e.onresume,
                                    d.onmark = e.onmark,
                                    d.onboundary = e.onboundary || a.onboundary,
                                    d.pitch = null != e.pitch ? e.pitch : d.pitch,
                                    d.rate = a.iOS ? (null != e.rate ? e.rate * e.rate : 1) * d.rate : (null != e.rate ? e.rate : 1) * d.rate,
                                    d.volume = null != e.volume ? e.volume : d.volume) : (a.log("No Params received for current Utterance"),
                                        d.voice = f.systemvoice,
                                        d.onend = a.speech_onend,
                                        d.onboundary = a.onboundary,
                                        d.onerror = function (b) {
                                            a.log("RV: Unknow Error");
                                            a.log(b)
                                        }
                                ),
                                a.utterances.push(d),
                                0 == g && (a.currentMsg = d),
                                console.log(d),
                                a.tts_speak(d);
                    a.fallbackMode && (a.fallback_part_index = 0,
                        a.fallback_startPart())
                }
            }
                ;
            a.startTimeout = function (b, c) {
                var e = a.msgprofile.collectionvoice.timerSpeed;
                null == a.msgprofile.collectionvoice.timerSpeed && (e = 1);
                0 >= e || (a.timeoutId = setTimeout(c, a.getEstimatedTimeLength(b, e)),
                    a.log("Timeout ID: " + a.timeoutId))
            }
                ;
            a.checkAndCancelTimeout = function () {
                null != a.timeoutId && (clearTimeout(a.timeoutId),
                    a.timeoutId = null)
            }
                ;
            a.speech_timedout = function () {
                a.cancel();
                a.cancelled = !1;
                a.speech_onend()
            }
                ;
            a.speech_onend = function () {
                a.checkAndCancelTimeout();
                !0 === a.cancelled ? a.cancelled = !1 : (a.log("on end fired"),
                    null != a.msgparameters && null != a.msgparameters.onend && 1 != a.msgparameters.onendcalled && (a.log("Speech on end called  -" + a.msgtext),
                        a.msgparameters.onendcalled = !0,
                        a.msgparameters.onend()))
            }
                ;
            a.speech_onstart = function () {
                if (!a.onstartFired) {
                    a.onstartFired = !0;
                    a.log("Speech start");
                    if (a.iOS || a.is_safari || a.useTimer)
                        a.fallbackMode || a.startTimeout(a.msgtext, a.speech_timedout);
                    a.msgparameters.onendcalled = !1;
                    if (null != a.msgparameters && null != a.msgparameters.onstart)
                        a.msgparameters.onstart()
                }
            }
                ;
            a.fallback_startPart = function () {
                0 == a.fallback_part_index && a.speech_onstart();
                a.fallback_audio = a.fallback_parts[a.fallback_part_index];
                if (null == a.fallback_audio)
                    a.log("RV: Fallback Audio is not available");
                else {
                    var b = a.fallback_audio;
                    a.fallback_audiopool.push(b);
                    setTimeout(function () {
                        b.playbackRate = a.fallback_playbackrate
                    }, 50);
                    b.onloadedmetadata = function () {
                        b.play();
                        b.playbackRate = a.fallback_playbackrate
                    }
                        ;
                    a.fallback_errors && (a.log("RV: Speech cancelled due to errors"),
                        a.speech_onend());
                    a.fallback_audio.play();
                    a.fallback_audio.addEventListener("ended", a.fallback_finishPart);
                    a.useTimer && a.startTimeout(a.multipartText[a.fallback_part_index], a.fallback_finishPart)
                }
            }
                ;
            a.isFallbackAudioPlaying = function () {
                var b;
                for (b = 0; b < a.fallback_audiopool.length; b++)
                    if (!a.fallback_audiopool[b].paused)
                        return !0;
                return !1
            }
                ;
            a.fallback_finishPart = function (b) {
                a.isFallbackAudioPlaying() ? (a.checkAndCancelTimeout(),
                    a.timeoutId = setTimeout(a.fallback_finishPart, 1e3 * (a.fallback_audio.duration - a.fallback_audio.currentTime))) : (a.checkAndCancelTimeout(),
                        a.fallback_part_index < a.fallback_parts.length - 1 ? (a.fallback_part_index++,
                            a.fallback_startPart()) : a.speech_onend())
            }
                ;
            a.cancel = function () {
                a.checkAndCancelTimeout();
                a.fallbackMode ? (null != a.fallback_audio && a.fallback_audio.pause(),
                    a.clearFallbackPool()) : (a.cancelled = !0,
                        speechSynthesis.cancel())
            }
                ;
            a.voiceSupport = function () {
                return "speechSynthesis" in window
            }
                ;
            a.OnFinishedPlaying = function (b) {
                if (null != a.msgparameters && null != a.msgparameters.onend)
                    a.msgparameters.onend()
            }
                ;
            a.setDefaultVoice = function (b) {
                b = a.getResponsiveVoice(b);
                null != b && (a.default_rv = b)
            }
                ;
            a.mapRVs = function () {
                for (var b = 0; b < a.responsivevoices.length; b++)
                    for (var c = a.responsivevoices[b], e = 0; e < c.voiceIDs.length; e++) {
                        var h = a.voicecollection[c.voiceIDs[e]];
                        if (1 != h.fallbackvoice) {
                            var f = a.getSystemVoice(h.name);
                            if (null != f) {
                                c.mappedProfile = {
                                    systemvoice: f,
                                    collectionvoice: h
                                };
                                break
                            }
                        } else {
                            c.mappedProfile = {
                                systemvoice: {},
                                collectionvoice: h
                            };
                            break
                        }
                    }
            }
                ;
            a.getMatchedVoice = function (b) {
                for (var c = 0; c < b.voiceIDs.length; c++) {
                    var e = a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);
                    if (null != e)
                        return e
                }
                return null
            }
                ;
            a.getSystemVoice = function (b) {
                var c = String.fromCharCode(160);
                b = b.replace(new RegExp("\\s+|" + c, "g"), "");
                if ("undefined" === typeof a.systemvoices || null === a.systemvoices)
                    return null;
                for (var e = 0; e < a.systemvoices.length; e++)
                    if (0 === a.systemvoices[e].name.replace(new RegExp("\\s+|" + c, "g"), "").localeCompare(b))
                        return a.systemvoices[e];
                return null
            }
                ;
            a.getResponsiveVoice = function (b) {
                for (var c = 0; c < a.responsivevoices.length; c++)
                    if (a.responsivevoices[c].name == b)
                        return !0 === a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice || !0 === a.fallbackMode ? (a.fallbackMode = !0,
                            a.fallback_parts = []) : a.fallbackMode = !1,
                            a.responsivevoices[c];
                return null
            }
                ;
            a.Dispatch = function (b) {
                if (a.hasOwnProperty(b + "_callbacks") && null != a[b + "_callbacks"] && 0 < a[b + "_callbacks"].length) {
                    for (var c = a[b + "_callbacks"], e = 0; e < c.length; e++)
                        c[e]();
                    return !0
                }
                var h = b + "_callbacks_timeout"
                    , f = b + "_callbacks_timeoutCount";
                a.hasOwnProperty(h) || (a[f] = 10,
                    a[h] = setInterval(function () {
                        --a[f];
                        (a.Dispatch(b) || 0 > a[f]) && clearTimeout(a[h])
                    }, 50));
                return !1
            }
                ;
            a.AddEventListener = function (b, c) {
                a.hasOwnProperty(b + "_callbacks") || (a[b + "_callbacks"] = []);
                a[b + "_callbacks"].push(c)
            }
                ;
            a.addEventListener = a.AddEventListener;
            a.clickEvent = function () {
                if (a.iOS && !a.iOS_initialized) {
                    a.log("Initializing iOS click event");
                    var b = new SpeechSynthesisUtterance(" ");
                    speechSynthesis.speak(b);
                    a.iOS_initialized = !0
                }
            }
                ;
            a.isPlaying = function () {
                return a.fallbackMode ? null != a.fallback_audio && !a.fallback_audio.ended && !a.fallback_audio.paused : speechSynthesis.speaking
            }
                ;
            a.clearFallbackPool = function () {
                for (var b = 0; b < a.fallback_audiopool.length; b++)
                    null != a.fallback_audiopool[b] && (a.fallback_audiopool[b].pause(),
                        a.fallback_audiopool[b].src = "");
                a.fallback_audiopool = []
            }
                ;
            "complete" === document.readyState ? a.init() : document.addEventListener("DOMContentLoaded", function () {
                a.init()
            });
            a.selectBest = function (a) {
                for (var b = 0; b < a.length; b++)
                    if (null != a[b])
                        return a[b];
                return null
            }
                ;
            a.pause = function () {
                a.fallbackMode ? null != a.fallback_audio && a.fallback_audio.pause() : speechSynthesis.pause()
            }
                ;
            a.resume = function () {
                a.fallbackMode ? null != a.fallback_audio && a.fallback_audio.play() : speechSynthesis.resume()
            }
                ;
            a.tts_speak = function (b) {
                setTimeout(function () {
                    a.cancelled = !1;
                    speechSynthesis.speak(b)
                }, .01)
            }
                ;
            a.setVolume = function (b) {
                if (a.isPlaying())
                    if (a.fallbackMode) {
                        for (var c = 0; c < a.fallback_parts.length; c++)
                            a.fallback_parts[c].volume = b;
                        for (c = 0; c < a.fallback_audiopool.length; c++)
                            a.fallback_audiopool[c].volume = b;
                        a.fallback_audio.volume = b
                    } else
                        for (c = 0; c < a.utterances.length; c++)
                            a.utterances[c].volume = b
            }
                ;
            a.onPartEnd = function (b) {
                if (null != a.msgparameters && null != a.msgparameters.onchuckend)
                    a.msgparameters.onchuckend();
                a.Dispatch("OnPartEnd");
                b = a.utterances.indexOf(b.utterance);
                a.currentMsg = a.utterances[b + 1]
            }
                ;
            a.onboundary = function (b) {
                a.log("On Boundary");
                a.iOS && !a.onstartFired && a.speech_onstart()
            }
                ;
            a.numToWords = function (b) {
                function c(a) {
                    if (Array.isArray(a)) {
                        for (var b = 0, c = Array(a.length); b < a.length; b++)
                            c[b] = a[b];
                        return c
                    }
                    return Array.from(a)
                }
                var e = function () {
                    return function (a, b) {
                        if (Array.isArray(a))
                            return a;
                        if (Symbol.iterator in Object(a)) {
                            var c = []
                                , d = !0
                                , e = !1
                                , f = void 0;
                            try {
                                for (var g = a[Symbol.iterator](), h; !(d = (h = g.next()).done) && (c.push(h.value),
                                    !b || c.length !== b); d = !0)
                                    ;
                            } catch (r) {
                                e = !0,
                                    f = r
                            } finally {
                                try {
                                    if (!d && g["return"])
                                        g["return"]()
                                } finally {
                                    if (e)
                                        throw f
                                }
                            }
                            return c
                        }
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }()
                    , h = function (a) {
                        return 0 === a.length
                    }
                    , f = function (a) {
                        return function (b) {
                            return b.slice(0, a)
                        }
                    }
                    , g = function (a) {
                        return function (b) {
                            return b.slice(a)
                        }
                    }
                    , d = function (a) {
                        return a.slice(0).reverse()
                    }
                    , k = function (a) {
                        return function (b) {
                            return function (c) {
                                return a(b(c))
                            }
                        }
                    }
                    , l = function (a) {
                        return !a
                    }
                    , m = function q(a) {
                        return function (b) {
                            return h(b) ? [] : [f(a)(b)].concat(c(q(a)(g(a)(b))))
                        }
                    }
                    , n = " one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ")
                    , p = "  twenty thirty forty fifty sixty seventy eighty ninety".split(" ")
                    , t = " thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(" ")
                    , u = function (a) {
                        var b = e(a, 3);
                        a = b[0];
                        var c = b[1]
                            , b = b[2];
                        return [0 === (Number(b) || 0) ? "" : n[b] + " hundred ", 0 === (Number(a) || 0) ? p[c] : p[c] && p[c] + "-" || "", n[c + a] || n[a]].join("")
                    }
                    , v = function (a, b) {
                        return "" === a ? a : a + " " + t[b]
                    };
                return "number" === typeof b ? a.numToWords(String(b)) : "0" === b ? "zero" : k(m(3))(d)(Array.from(b)).map(u).map(v).filter(k(l)(h)).reverse().join(" ").trim()
            }
                ;
            a.getWords = function (b) {
                for (var c = b.split(/\s+/), e = 0; e < c.length; e++)
                    null != (b = c[e].toString().match(/\d+/)) && (c.splice(e, 1),
                        a.numToWords(+b[0]).split(/\s+/).map(function (a) {
                            c.push(a)
                        }));
                return c
            }
                ;
            a.getEstimatedTimeLength = function (b, c) {
                var e = a.getWords(b)
                    , h = 0
                    , f = a.fallbackMode ? 1300 : 700;
                c = c || 1;
                e.map(function (a, b) {
                    h += (a.toString().match(/[^ ]/gim) || a).length
                });
                var g = e.length
                    , d = 60 / a.WORDS_PER_MINUTE * c * 1e3 * g;
                5 > g && (d = c * (f + 50 * h));
                a.log("Estimated time length: " + d + " ms, words: [" + e + "], charsCount: " + h);
                return d
            }
        }
            , responsiveVoice = new ResponsiveVoice;
    var $tpl = '<div id="special"><div class="special-panel"><div class="special-font-size"><span>Шрифт:</span> <button title="Маленький шрифт" value="1"><i>A</i></button> <button title="Средний шрифт" value="2"><i>A</i></button> <button title="Большой шрифт" value="3"><i>A</i></button></div><div class="special-color"><span>Цвет:</span> <button title="Цвет черным по белому" value="1"><i>Ц</i></button> <button title="Цвет белым по черному" value="2"><i>Ц</i></button> <button title="Цвет синим по голубому" value="3" i=""><i>Ц</i></button></div><div class="special-images"><span>Изображения:</span> <button title="Выключить/включить изображения"><i></i></button></div><div class="special-audio"><span>Звук:</span> <button title="Включить/выключить воспроизведение текста" value="0"><i></i></button></div><div class="special-settings"><span>Настройки:</span> <button title="Дополнительные настройки"><i></i></button></div><div class="special-quit"><span>Обычная версия:</span> <button title="Обычная версия сайта"><i></i></button></div></div><div id="special-settings-body"><hr/><h2>Настройки шрифта:</h2><div class="special-font-family"><span>Выберите шрифт:</span> <button value="1"><i>Arial</i></button> <button value="2"><i>Times</i></button></div><div class="special-letter-spacing"><span>Интервал между буквами (<em>Кернинг</em>):</span> <button value="1"><i>Стандартный</i></button> <button value="2"><i>Средний</i></button> <button value="3"><i>Большой</i></button></div><div class="special-line-height"><span>Интервал между строками:</span> <button value="1"><i>Стандартный<br/>интервал</i></button> <button value="2"><i>Полуторный<br/>интервал</i></button> <button value="3"><i>Двойной<br/>интервал</i></button></div><h2>Выбор цветовой схемы:</h2><div class="special-color"><button value="1"><i>Черным<br/>по белому</i></button> <button value="2"><i>Белым<br/>по черному</i></button> <button value="3"><i>Темно-синим<br/>по голубому</i></button> <button value="4"><i>Коричневым<br/>по бежевому</i></button> <button value="5"><i>Зеленым<br/>по темно-коричневому</i></button></div><hr/><div class="special-reset"><button><i>Параметры по умолчанию</i></button></div><div class="special-settings-close"><button><i>Закрыть</i></button></div></div></div>';