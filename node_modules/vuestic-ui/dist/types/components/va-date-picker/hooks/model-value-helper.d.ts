import { VaDatePickerModelValue, VaDatePickerModelValuePeriod, VaDatePickerMode } from '../types/types';
export declare const isRange: (value: VaDatePickerModelValue) => value is VaDatePickerModelValuePeriod;
export declare const isSingleDate: (value: VaDatePickerModelValue) => value is Date;
export declare const isDates: (value: VaDatePickerModelValue) => value is Date[];
export declare const useDatePickerModelValue: (props: {
    [key: string]: any;
    modelValue?: VaDatePickerModelValue | undefined;
    mode: VaDatePickerMode;
}, emit: (event: 'update:modelValue', newValue: VaDatePickerModelValue) => any, dateEqual: (date1: Date | null, date2: Date | null) => boolean) => {
    updateModelValue: (date: Date) => any;
};
