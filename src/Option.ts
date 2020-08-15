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

export interface GulpRsyncOption extends CommonOption {
  progress?: boolean; // 転送情報を表示
  recursive?: boolean; // 再帰的にディレクトリを走査
  compress?: boolean; // 圧縮する
  clean?: boolean;
  dryrun?:boolean;
}

export class OptionInitializer {
  public static init(option: Option): Option {
    option.root = option.root ?? path.resolve(process.cwd(), "dist");
    option.stagingDir = option.stagingDir ?? "staging";
    option.exclude = option.exclude ?? [".git", ".gitignore", "node_modules"];
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
