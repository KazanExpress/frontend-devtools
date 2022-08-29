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

  if (localFlags.length === 0) {
    localStorage.removeItem(localKey);
  } else {
    localStorage.setItem(localKey, JSON.stringify(localFlags));
  }

  return result;
};
