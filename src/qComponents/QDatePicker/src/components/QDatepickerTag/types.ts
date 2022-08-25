import type { Instance } from '@popperjs/core';
import type { ComputedRef, Ref } from 'vue';

import type { QInputInstance } from '@/qComponents/QInput';

import type {
  Nullable,
  UnwrappedInstance,
  ClassValue,
  Enumerable
} from '#/helpers';

import type DatePanel from '../../panel/Date/DatePanel.vue';
import type { DatePanelInstance } from '../../panel/Date/types';
import type DateRangePanel from '../../panel/DateRange/DateRange.vue';
import type MonthRangePanel from '../../panel/MonthRange/MonthRange.vue';
import type YearRangePanel from '../../panel/YearRange/YearRange.vue';

export interface Shortcut {
  text: string;
  value: Date;
}

export type QDatePickerDate = Date | [Date, Date];
export type QDatePickerDates = Nullable<Array<QDatePickerDate>>;
export type QDatePickerDateRangeValue = [string, string] | [Date, Date];
export type QDatePickerPropModelValue = Nullable<
  string | Date | Enumerable<QDatePickerDateRangeValue>
>;
export type QDatePickerPropType = Nullable<
  | 'date'
  | 'week'
  | 'month'
  | 'year'
  | 'daterange'
  | 'monthrange'
  | 'yearrange'
  | 'datemultyrange'
  | 'monthmultyrange'
  | 'yearmultyrange'
>;
export type QDatePickerPropFormat = undefined | string;
export type QDatePickerPropOutputFormat = Nullable<'date' | 'iso'>;
export type QDatePickerPropPlaceholder = Nullable<string>;
export type QDatePickerPropStartPlaceholder = Nullable<string>;
export type QDatePickerPropEndPlaceholder = Nullable<string>;
export type QDatePickerPropFirstDayOfWeek = Nullable<number>;
export type QDatePickerPropName = Nullable<string>;
export type QDatePickerPropDisabled = Nullable<boolean>;
export type QDatePickerPropClearable = Nullable<boolean>;
export type QDatePickerPropEditable = Nullable<boolean>;
export type QDatePickerPropRangeSeparator = Nullable<string>;
export type QDatePickerPropShortcuts = Nullable<Shortcut[]>;
export type QDatePickerPropDisabledValues = Nullable<{
  to?: Date;
  from?: Date;
  ranges?: {
    start: Date;
    end: Date;
  }[];
}>;
export type QDatePickerPropValidateEvent = Nullable<boolean>;
export type QDatePickerPropTeleportTo = Nullable<string | HTMLElement>;

export interface QDatePickerProps {
  modelValue: QDatePickerDate;
  type: QDatePickerPropType;
  format: QDatePickerPropFormat;
  outputFormat: QDatePickerPropOutputFormat;
  placeholder: QDatePickerPropPlaceholder;
  startPlaceholder: QDatePickerPropStartPlaceholder;
  endPlaceholder: QDatePickerPropEndPlaceholder;
  firstDayOfWeek: QDatePickerPropFirstDayOfWeek;
  name: QDatePickerPropName;
  disabled: QDatePickerPropDisabled;
  clearable: QDatePickerPropClearable;
  editable: QDatePickerPropEditable;
  rangeSeparator: QDatePickerPropRangeSeparator;
  shortcuts: QDatePickerPropShortcuts;
  disabledValues: QDatePickerPropDisabledValues;
  validateEvent: QDatePickerPropValidateEvent;
  teleportTo: QDatePickerPropTeleportTo;
}

export type QDatePickerPanelComponent =
  | typeof DateRangePanel
  | typeof MonthRangePanel
  | typeof YearRangePanel
  | typeof DatePanel;

export interface QDatePickerState {
  pickerVisible: boolean;
  showCloseIcon: boolean;
  userInput: Nullable<string>;
  popper: Nullable<Instance>;
}

export interface QDatePickerProvider {
  emit: (
    event:
      | 'focus'
      | 'change'
      | 'input'
      | 'update:modelValue'
      | 'intermediateChange',
    ...args: unknown[]
  ) => void;
  handlePickClick: (
    val: QDatePickerPropModelValue,
    options?: { hidePicker?: boolean }
  ) => void;
  firstDayOfWeek: ComputedRef<number>;
  isMobileView: Ref<boolean>;
  disabledValues: Ref<QDatePickerPropDisabledValues>;
  shortcuts: Ref<Nullable<QDatePickerPropShortcuts>>;
  emitChange: (val: QDatePickerPropModelValue, intermediate: boolean) => void;
  type: Ref<QDatePickerPropType>;
  dates: ComputedRef<Nullable<QDatePickerDate>>;
  panelComponent: ComputedRef<QDatePickerPanelComponent>;
}

export interface QDatePickerInstance {
  state: QDatePickerState;
  root: Ref<Nullable<HTMLElement>>;
  panel: Ref<UnwrappedInstance<DatePanelInstance>>;
  reference: Ref<UnwrappedInstance<QInputInstance>>;
  rangedReference: Ref<Nullable<HTMLElement>>;
  isRanged: ComputedRef<boolean>;
  isPickerDisabled: ComputedRef<boolean>;
  isValueEmpty: ComputedRef<boolean>;
  isMobileView: Ref<boolean>;
  calcFirstDayOfWeek: ComputedRef<number>;
  dates: ComputedRef<QDatePickerDate>;
  rangeClasses: ComputedRef<ClassValue>;
  panelComponent: ComputedRef<QDatePickerPanelComponent>;
  displayFormat: ComputedRef<string>;
  rangeDisplayValue: ComputedRef<string[]>;
  displayValue: ComputedRef<string>;
  iconClass: ComputedRef<ClassValue>;
  handleInputDateChange: () => void;
  handleKeyUp: (e: KeyboardEvent) => void;
  handleKeyDown: (e: KeyboardEvent) => void;
  closePicker: () => void;
  handlePickClick: (
    val: QDatePickerPropModelValue,
    options?: {
      hidePicker?: boolean;
    }
  ) => void;
  handleFocus: () => void;
  handleInput: (arg: { target: HTMLInputElement; inputType: string }) => void;
  handleMouseEnter: () => void;
  handleRangeClick: () => void;
  handleIconClick: (event: MouseEvent) => void;
  t: (key: string) => string;
}
