import { TDevtoolsItem } from "./types";

export const DEFAULT_LOCAL_KEY = "ke-devtools";

export const getLocalFlags = (localKey: string): string[] =>
  JSON.parse(localStorage.getItem(localKey) || "[]");

export const processFlag = (flag: string, localKey: string): boolean => {
  let result = false;
  const localFlags = getLocalFlags(localKey);

  if (localFlags.includes(flag)) {
    localFlags.splice(localFlags.indexOf(flag), 1);
  } else {
    localFlags.push(flag);
    result = true;
  }

  localStorage.setItem(localKey, JSON.stringify(localFlags));

  return result;
};

export const getInitialFlags = (
  items: TDevtoolsItem[],
  localKey: string
): string[] => {
  if (localStorage.getItem(localKey) !== null) return getLocalFlags(localKey);

  const defaultFlags = items
    .filter((flag) => flag.defaultActive === true)
    .map((flag) => flag.key);

  defaultFlags.forEach((flag) => processFlag(flag, localKey));

  return defaultFlags;
};
