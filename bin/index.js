"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var src = require("gulp").src;
var rsync = require("gulp-rsync");
var plumber = require("gulp-plumber");
var path = require("path");
var Option_1 = require("./Option");
function get(option) {
    option = Option_1.OptionInitializer.init(option);
    var staging = function () {
        var opt = Option_1.OptionInitializer.getStagingOption(option);
        return runRsync(opt);
    };
    var deploy = function () {
        var opt = Option_1.OptionInitializer.getDeployOption(option);
        return runRsync(opt);
    };
    var stagingDry = function () {
        var opt = Option_1.OptionInitializer.getStagingOption(option);
        opt.dryrun = true;
        return runRsync(opt);
    };
    var deployDry = function () {
        var opt = Option_1.OptionInitializer.getDeployOption(option);
        opt.dryrun = true;
        return runRsync(opt);
    };
    return {
        staging: staging,
        deploy: deploy,
        stagingDry: stagingDry,
        deployDry: deployDry,
    };
}
exports.get = get;
function onErrorHandler(err) {
    console.log(err);
    this.emit("end");
}
var runRsync = function (option) {
    return src(path.resolve(option.root, "**"))
        .pipe(plumber({
        errorHandler: onErrorHandler,
    }))
        .pipe(rsync(option))
        .on("error", function (msg) {
        console.log(msg);
    });
};
//# sourceMappingURL=index.js.map