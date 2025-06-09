


export const saveInLocalStorage = (key: string, item: string): void => localStorage.setItem(key, item);
export const getFromLocalStorage = (key: string): string | null => localStorage.getItem(key);
