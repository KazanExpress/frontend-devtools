import { PropType } from "vue";
import { TDevtoolsItem } from "./types";
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<TDevtoolsItem<string>[]>;
        required: true;
    };
    localStorageKey: {
        type: StringConstructor;
        default: string;
    };
}, unknown, {
    isShowDevtools: boolean;
    localFlags: string[];
}, {}, {
    init(): void;
    toggleShowDevtools(): void;
    onClickItem(item: TDevtoolsItem): void;
    saveState(item: TDevtoolsItem): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<TDevtoolsItem<string>[]>;
        required: true;
    };
    localStorageKey: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    localStorageKey: string;
}>;
export default _default;
