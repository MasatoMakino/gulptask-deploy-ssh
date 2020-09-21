import {Option} from "./Option";

/**
 * @deprecated Use generateTasks
 * @param option
 */
export declare function get(option: Option): {
    staging: () => any;
    deploy: () => any;
    stagingDry: () => any;
    deployDry: () => any;
};
/**
 *
 * @param option
 */
export declare function generateTasks(option: Option): {
    staging: () => any;
    deploy: () => any;
    stagingDry: () => any;
    deployDry: () => any;
};
