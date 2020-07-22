const userKey = 'username';
export const getUserName = (): string | null => localStorage.getItem(userKey);
export const setUserName = (name: string) => localStorage.setItem(userKey, name);

const passwordKey = 'password';
export const getPassword = (): string | null => localStorage.getItem(passwordKey);
export const setPassword = (password: string): void => localStorage.setItem(passwordKey, password);

const rememberKey = 'remember';
export const getRemember = (): string | null => localStorage.getItem(rememberKey);
export const setRemember = (remember: boolean): void => localStorage.setItem(rememberKey, remember.toString());
