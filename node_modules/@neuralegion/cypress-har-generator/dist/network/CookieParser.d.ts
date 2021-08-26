import { NetworkCookie } from './NetworkCookie';
export declare class CookieParser {
    private _input?;
    private _originalInputLength?;
    private _lastCookie?;
    private _lastCookiePosition;
    private _cookies?;
    parseCookie(cookieHeader: string): NetworkCookie[] | undefined;
    parseSetCookie(setCookieHeader: string): NetworkCookie[] | undefined;
    private _initialize;
    private flushCookie;
    private _extractKeyValue;
    private toCamelCase;
    private advanceAndCheckCookieDelimiter;
    private addCookie;
}
