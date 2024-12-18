import {CalendarDate, DateValue} from "@internationalized/date";


export interface Language {
    name: string;
    code: string;
    letter_set: string;
    flag_emoji: string;
}
export interface CombData {
    center_char: string;
    outer_chars: string[];
}
export interface ValidWord {
    point_value: number,
    word: string,
    is_found: boolean,
    is_panagram: boolean,
}
export interface WordCountData {
    points_found: number,
    words_found: number,
    max_points: number,
    max_words: number,
}
export interface LocalGameProgressSave {
    id: string,
    found_words: string[],
    given_up: boolean|undefined, // because this was added after an early release, it might not be present on old saves.
    // because this version also didn't have an option to give up, undefined should be read as false.
}

export enum FeedbackType {
    PANAGRAM = 'panagram',
    CORRECT = 'correct',
    ALREADY_FOUND = 'already_found',
    INVALID_CHAR = 'invalid_char',
    MISSING_CENTER_CHAR = 'missing_center_char',
    NOT_VALID_WORD = 'not_valid_word',
    NOT_LONG_ENOUGH = 'not_long_enough',
}

export function DateToString(date: DateValue): string {
    return pad(date.year, 4) + '-' + pad(date.month, 2) + '-' + pad(date.day, 2);
}
export function DateFromString(date: string): DateValue {
    const [year, month, day] = date.split('-');
    return new CalendarDate(
        parseInt(year),
        parseInt(month),
        parseInt(day)
    );
}
export function GetLocalStorageId(date: string, lang_code: string): string {
    return 'game_' + date + '_' + lang_code;
}

function pad(num: number, size: number) {
    let numstr = num.toString();
    while (numstr.length < size) numstr = "0" + numstr;
    return numstr;
}