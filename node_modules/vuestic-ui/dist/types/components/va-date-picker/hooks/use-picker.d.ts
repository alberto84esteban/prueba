import { VaDatePickerMode, VaDatePickerModelValue, VaDatePickerType } from '../types/types';
import { ComputedRef } from 'vue';
export declare const useDatePicker: (type: VaDatePickerType, dates: ComputedRef<Date[]>, props: {
    [key: string]: any;
    modelValue?: VaDatePickerModelValue | undefined;
    mode: VaDatePickerMode;
}, emit: (event: 'update:modelValue' | any, ...args: any[]) => any) => {
    hoveredIndex: import("vue").Ref<number>;
    hoveredValue: ComputedRef<Date>;
    onClick: (date: Date) => void;
    isToday: (date: Date) => boolean;
    isSelected: (date: Date) => boolean;
    isInRange: (date: Date) => boolean;
};
