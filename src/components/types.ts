export type TDevtoolsItem<T = string> = {
  key: T;
  saveLocal?: boolean;
};

export type TChangePayload<T = string> = {
  key: T;
  value: boolean;
};
