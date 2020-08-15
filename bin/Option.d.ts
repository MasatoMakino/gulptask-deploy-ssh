interface CommonOption {
    hostname: string;
    destination: string;
    root?: string;
    exclude?: string[];
}
export interface Option extends CommonOption {
    stagingDir?: string;
}
export declare class OptionDefault {
    static readonly stagingDir = "staging";
    static readonly exclude: string[];
}
export interface GulpRsyncOption extends CommonOption {
    progress?: boolean;
    recursive?: boolean;
    compress?: boolean;
    clean?: boolean;
    dryrun?: boolean;
}
export declare class OptionInitializer {
    static init(option: Option): Option;
    static getStagingOption(option: Option): GulpRsyncOption;
    static getDeployOption(option: Option): GulpRsyncOption;
}
export {};
