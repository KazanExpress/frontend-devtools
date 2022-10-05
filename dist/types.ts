export type TDevtoolsItem<T = string> = {
  key: T;
  defaultActive?: boolean;
  saveLocal?: boolean;
};

export type TChangePayload<T = string> = {
  key: T;
  value: boolean;
};
