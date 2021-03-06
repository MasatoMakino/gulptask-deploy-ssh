"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTasks = exports.get = void 0;
var src = require("gulp").src;
var rsync = require("gulp-rsync");
var path = require("path");
var Option_1 = require("./Option");
/**
 * @deprecated Use generateTasks
 * @param option
 */
function get(option) {
    return generateTasks(option);
}
exports.get = get;
/**
 *
 * @param option
 */
function generateTasks(option) {
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
exports.generateTasks = generateTasks;
var runRsync = function (option) {
    return src(path.resolve(option.root, "**"))
        .pipe(rsync(option))
        .on("error", function (msg) {
        console.log(msg);
    });
};
//# sourceMappingURL=index.js.map