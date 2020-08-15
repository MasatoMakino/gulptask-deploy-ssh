import * as path from "path";

interface CommonOption {
  hostname: string;
  destination: string;
  root?: string;
  exclude?: string[]; // 除外ファイル
}

export interface Option extends CommonOption {
  stagingDir?: string;
}

export class OptionDefault {
  static readonly stagingDir = "staging";
  static readonly exclude = [
    ".git",
    ".gitignore",
    "node_modules",
    ".DS_Store",
    "rev-manifest.json",
  ];
}

export interface GulpRsyncOption extends CommonOption {
  progress?: boolean; // 転送情報を表示
  recursive?: boolean; // 再帰的にディレクトリを走査
  compress?: boolean; // 圧縮する
  clean?: boolean;
  dryrun?: boolean;
}

export class OptionInitializer {
  public static init(option: Option): Option {
    option.root = option.root ?? path.resolve(process.cwd(), "dist");
    option.stagingDir = option.stagingDir ?? OptionDefault.stagingDir;
    option.exclude = option.exclude ?? OptionDefault.exclude;
    return option;
  }

  public static getStagingOption(option: Option): GulpRsyncOption {
    return {
      ...option,
      destination: path.posix.join(option.destination, option.stagingDir),
      exclude: [...option.exclude, ".htaccess"],
      progress: true,
      recursive: true,
      compress: true,
      clean: true,
    };
  }

  public static getDeployOption(option: Option): GulpRsyncOption {
    return {
      ...option,
      progress: true,
      recursive: true,
      compress: true,
    };
  }
}
