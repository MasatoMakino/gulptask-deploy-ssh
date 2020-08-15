import {Option} from "./Option";

export declare function get(option: Option): {
    staging: () => any;
    deploy: () => any;
    stagingDry: () => any;
    deployDry: () => any;
};
