import { TDevtoolsItem } from "./types";
export declare const DEFAULT_LOCAL_KEY = "ke-devtools";
export declare const getLocalFlags: (localKey: string) => string[];
export declare const setLocalFlags: (flags: string[], localKey: string) => void;
export declare const getInitialFlags: (items: TDevtoolsItem[], localKey: string) => string[];
