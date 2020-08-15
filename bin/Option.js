"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionInitializer = exports.OptionDefault = void 0;
var path = require("path");
var OptionDefault = /** @class */ (function () {
    function OptionDefault() {
    }
    OptionDefault.stagingDir = "staging";
    OptionDefault.exclude = [
        ".git",
        ".gitignore",
        "node_modules",
        ".DS_Store",
        "rev-manifest.json",
    ];
    return OptionDefault;
}());
exports.OptionDefault = OptionDefault;
var OptionInitializer = /** @class */ (function () {
    function OptionInitializer() {
    }
    OptionInitializer.init = function (option) {
        var _a, _b, _c;
        option.root = (_a = option.root) !== null && _a !== void 0 ? _a : path.resolve(process.cwd(), "dist");
        option.stagingDir = (_b = option.stagingDir) !== null && _b !== void 0 ? _b : OptionDefault.stagingDir;
        option.exclude = (_c = option.exclude) !== null && _c !== void 0 ? _c : OptionDefault.exclude;
        return option;
    };
    OptionInitializer.getStagingOption = function (option) {
        return __assign(__assign({}, option), { destination: path.posix.join(option.destination, option.stagingDir), exclude: __spreadArrays(option.exclude, [".htaccess"]), progress: true, recursive: true, compress: true, clean: true });
    };
    OptionInitializer.getDeployOption = function (option) {
        return __assign(__assign({}, option), { progress: true, recursive: true, compress: true });
    };
    return OptionInitializer;
}());
exports.OptionInitializer = OptionInitializer;
//# sourceMappingURL=Option.js.map