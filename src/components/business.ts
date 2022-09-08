import { TDevtoolsItem } from "./types";

export const DEFAULT_LOCAL_KEY = "ke-devtools";

export const getLocalFlags = (localKey: string): string[] =>
  JSON.parse(localStorage.getItem(localKey) || "[]");

export const setLocalFlags = (flags: string[], localKey: string): void =>
  localStorage.setItem(localKey, JSON.stringify(flags));

export const getInitialFlags = (
  items: TDevtoolsItem[],
  localKey: string
): string[] => {
  if (localStorage.getItem(localKey) !== null) return getLocalFlags(localKey);

  const defaultFlags = items
    .filter((flag) => flag.defaultActive === true)
    .map((flag) => flag.key);

  setLocalFlags(defaultFlags, localKey);

  return defaultFlags;
};
