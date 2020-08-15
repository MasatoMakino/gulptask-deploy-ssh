const { src } = require("gulp");
const rsync = require("gulp-rsync");
import * as path from "path";

import { GulpRsyncOption, Option, OptionInitializer } from "./Option";

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

const runRsync = (option: GulpRsyncOption) => {
  return src(path.resolve(option.root, "**"))
    .pipe(rsync(option))
    .on("error", function (msg) {
      console.log(msg);
    });
};
