const { src } = require("gulp");
const rsync = require("gulp-rsync");
const plumber = require("gulp-plumber");
import * as path from "path";

import {GulpRsyncOption, Option, OptionInitializer} from "./Option";

export function get(option: Option) {
  option = OptionInitializer.init(option);

  const staging = () => {
    const opt = OptionInitializer.getStagingOption(option);
    return runRsync(opt);
  };

  const deploy = () => {
    const opt = OptionInitializer.getDeployOption(option);
    return runRsync(opt);
  };

  const stagingDry = () => {
    const opt = OptionInitializer.getStagingOption(option);
    opt.dryrun = true;
    return runRsync(opt);
  };

  const deployDry = () => {
    const opt = OptionInitializer.getDeployOption(option);
    opt.dryrun = true;
    return runRsync(opt);
  };

  return {
    staging,
    deploy,
    stagingDry,
    deployDry,
  };
}
const onErrorHandler = (err) => {
  console.log(err);
  this.emit("end");
};
const runRsync = (option: GulpRsyncOption) => {
  return src(path.resolve(option.root, "**"))
    .pipe(
      plumber({
        errorHandler: onErrorHandler,
      })
    )
    .pipe(rsync(option))
    .on("error", function (msg) {
      console.log(msg);
    });
};
