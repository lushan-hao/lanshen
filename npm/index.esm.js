import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Button, Radio } from 'antd';
import moment from 'moment';

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.DatePickerQuick {\n  display: inline-block;\n  align-items: center;\n  margin-right: 10px;\n}\n.SingleDatePicker {\n  display: inline-block;\n}\n.SingleDatePicker .leftButton {\n  display: inline-block;\n  width: 30px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  vertical-align: bottom;\n  border: 1px solid #d9d9d9;\n  border-right-width: 0;\n  cursor: pointer;\n}\n.SingleDatePicker .rightButton {\n  display: inline-block;\n  width: 30px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  vertical-align: bottom;\n  border: 1px solid #d9d9d9;\n  border-left-width: 0;\n  cursor: pointer;\n}\n';
styleInject(css_248z);

/*
 * @LastEditors: haols
 */

var SingleDatePicker = function SingleDatePicker(props) {
  var _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? false : _props$allowClear,
    value = props.value,
    _props$format = props.format,
    format = _props$format === void 0 ? 'YYYY-MM-DD' : _props$format,
    _onChange = props.onChange,
    _props$showText = props.showText,
    showText = _props$showText === void 0 ? true : _props$showText,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled; // onSingleChange

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'SingleDatePicker',
    },
    showText &&
      /*#__PURE__*/ React.createElement(
        'span',
        null,
        '\u9009\u62E9\u65E5\u671F\uFF1A',
      ),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'icon iconfont leftButton',
        style: {
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          _onChange === null || _onChange === void 0
            ? void 0
            : _onChange(
                moment(value).add(-1, 'days'),
                moment(value).add(-1, 'days').format('YYYY-MM-DD'),
              );
        },
      },
      '<',
    ),
    /*#__PURE__*/ React.createElement(DatePicker, {
      allowClear: allowClear,
      disabled: disabled,
      value: moment(value),
      format: format,
      onChange: function onChange(date, dateSting) {
        if (date !== null) {
          _onChange === null || _onChange === void 0
            ? void 0
            : _onChange(date, dateSting);
        }
      },
    }),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'icon iconfont rightButton',
        style: {
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          _onChange === null || _onChange === void 0
            ? void 0
            : _onChange(
                moment(value).add(1, 'days'),
                moment(value).add(1, 'days').format('YYYY-MM-DD'),
              );
        },
      },
      '>',
    ),
  );
};

// import { YM, YMD, YMDHms } from '@/utils/timeUtils';

var RangePicker = DatePicker.RangePicker;

var DatePickerQuick = function DatePickerQuick(props) {
  var size = props.size,
    value = props.value,
    valueEnd = props.valueEnd,
    TimeChange = props.TimeChange,
    _props$format = props.format,
    format = _props$format === void 0 ? 'YYYY-MM-DD' : _props$format,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? false : _props$allowClear,
    _props$pageType = props.pageType,
    pageType = _props$pageType === void 0 ? '' : _props$pageType,
    _props$noShowSelect = props.noShowSelect,
    noShowSelect = _props$noShowSelect === void 0 ? false : _props$noShowSelect,
    _props$dateType = props.dateType,
    dateType = _props$dateType === void 0 ? 1 : _props$dateType,
    TypeChange = props.TypeChange;

  var _useState = useState(moment(value)),
    _useState2 = _slicedToArray(_useState, 2),
    mergedValue = _useState2[0],
    setInnerValue = _useState2[1];

  var _useState3 = useState(moment(valueEnd)),
    _useState4 = _slicedToArray(_useState3, 2),
    mergedValueEnd = _useState4[0],
    setInnerValueEnd = _useState4[1];

  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    target = _useState6[0],
    setTarget = _useState6[1]; // console.log(dateType, mergedValue.format(format), mergedValueEnd.format(format), '时间组件内部类型、开始时间和结束时间')

  useEffect(
    function () {
      setInnerValue(moment(value));
    },
    [value],
  );
  useEffect(
    function () {
      setInnerValueEnd(moment(valueEnd));
    },
    [valueEnd],
  );
  var presetChange = useCallback(
    function (date, dateEnd) {
      setInnerValue(date);
      setInnerValueEnd(dateEnd);
      TimeChange === null || TimeChange === void 0
        ? void 0
        : TimeChange(
            [date, dateEnd],
            [
              date === null || date === void 0 ? void 0 : date.format(format),
              dateEnd === null || dateEnd === void 0
                ? void 0
                : dateEnd.format(format),
            ],
          );
    },
    [TimeChange, format],
  );
  var buttons = useMemo(
    function () {
      return /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        !pageType &&
          /*#__PURE__*/ React.createElement(
            Button,
            {
              type: 'link',
              size: size,
              onClick: function onClick() {
                presetChange(
                  moment().add(-1, 'days').startOf('date'),
                  moment().add(-1, 'days').startOf('date'),
                );
              },
            },
            '\u6628\u65E5',
          ),
        pageType &&
          /*#__PURE__*/ React.createElement(
            Button,
            {
              type: 'link',
              size: size,
              onClick: function onClick() {
                presetChange(
                  moment().add(1, 'days').startOf('date'),
                  moment().add(1, 'days').startOf('date'),
                );
              },
            },
            '\u660E\u65E5',
          ),
        /*#__PURE__*/ React.createElement(
          Button,
          {
            type: 'link',
            size: size,
            onClick: function onClick() {
              presetChange(
                moment().subtract(2, 'days').startOf('date'),
                moment(),
              );
            },
          },
          '\u8FD1\u4E09\u5929',
        ),
        /*#__PURE__*/ React.createElement(
          Button,
          {
            type: 'link',
            size: size,
            onClick: function onClick() {
              presetChange(
                moment().subtract(6, 'days').startOf('date'),
                moment(),
              );
            },
          },
          '\u8FD1\u4E00\u5468',
        ),
        /*#__PURE__*/ React.createElement(
          Button,
          {
            type: 'link',
            size: size,
            onClick: function onClick() {
              presetChange(
                moment().subtract(29, 'days').startOf('date'),
                moment(),
              );
            },
          },
          '\u8FD1\u4E00\u6708',
        ),
      );
    },
    [pageType, size, presetChange],
  );
  useEffect(
    function () {
      TimeChange === null || TimeChange === void 0
        ? void 0
        : TimeChange(
            [mergedValue, mergedValueEnd],
            [
              mergedValue === null || mergedValue === void 0
                ? void 0
                : mergedValue.format(format),
              mergedValueEnd === null || mergedValueEnd === void 0
                ? void 0
                : mergedValueEnd.format(format),
            ],
          );
    },
    [target],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: css_248z.DatePickerQuick,
    },
    '\u65E5\u671F\u8303\u56F4\uFF1A',
    /*#__PURE__*/ React.createElement(
      Radio.Group,
      {
        value: dateType,
        style: {
          display: 'inline-block',
          marginRight: 20,
        },
        onChange: function onChange(e) {
          if (e.target.value === 1) {
            // 多日切换为单日, 结束时间设置为开时间
            setInnerValueEnd(mergedValue);
            TimeChange === null || TimeChange === void 0
              ? void 0
              : TimeChange(
                  [mergedValue, mergedValue],
                  [
                    mergedValue === null || mergedValue === void 0
                      ? void 0
                      : mergedValue.format(format),
                    mergedValue === null || mergedValue === void 0
                      ? void 0
                      : mergedValue.format(format),
                  ],
                );
          }

          TypeChange === null || TypeChange === void 0
            ? void 0
            : TypeChange(e.target.value); // if (e.target.value === 'multiple') { // 单日切换为多日,
          //   setInnerValueEnd(mergedValue);
          //   onChange?.(mergedValue, 'dateEnd');
          // }
        },
      },
      /*#__PURE__*/ React.createElement(
        Radio,
        {
          value: 1,
        },
        '\u5355\u65E5',
      ),
      /*#__PURE__*/ React.createElement(
        Radio,
        {
          value: 2,
        },
        '\u591A\u65E5',
      ),
    ),
    dateType === 1 &&
      /*#__PURE__*/ React.createElement(SingleDatePicker, {
        value: moment(mergedValue),
        format: format,
        onChange: function onChange(date, dateSting) {
          setInnerValue(date);
          setInnerValueEnd(date);
          setTarget(target + 1);
        },
      }),
    dateType === 2 &&
      /*#__PURE__*/ React.createElement(RangePicker, {
        value: [moment(mergedValue), moment(mergedValueEnd)],
        allowClear: allowClear,
        format: format,
        onOpenChange: function onOpenChange(open) {
          if (!open) {
            setTarget(target + 1);
          }
        },
        onChange: function onChange(dateArr, dateArrString) {
          setInnerValue(dateArr[0]);
          setInnerValueEnd(dateArr[1]);
        },
      }),
    !noShowSelect && dateType === 2 && buttons,
  );
};

var index = /*#__PURE__*/ memo(DatePickerQuick);

export { index as DatePickerQuick };
