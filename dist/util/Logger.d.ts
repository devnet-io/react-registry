export default class Logger {
    static getMessage(key: string): string;
    static throw(key: string): void;
    static error(key: string): void;
    static warn(key: string): void;
}
