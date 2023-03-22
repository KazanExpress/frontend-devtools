import { TChangePayload, TDevtoolsItem } from "./components/types";
declare const enum EDevtoolsExample {
    SAVE = "example-save",
    NOT_SAVE = "example-not-save",
    DEFAULT_ACTIVE_TRUE = "default-active-true"
}
declare const _default: import("vue").DefineComponent<{}, {}, {
    devtoolsItems: TDevtoolsItem<EDevtoolsExample>[];
    isVisibleSaveContent: boolean;
}, {}, {
    onInit(payload: EDevtoolsExample[]): void;
    onChange(payload: TChangePayload<EDevtoolsExample>): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
