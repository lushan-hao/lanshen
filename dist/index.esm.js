import React, {
  memo,
  useState,
  useEffect,
  useCallback,
  useMemo,
  forwardRef,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  Component,
  createElement,
  Children,
  createContext,
  createRef,
  cloneElement,
  useContext,
  Fragment,
} from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Button, Radio, Input } from 'antd';
import moment from 'moment';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _createSuper from '@babel/runtime/helpers/esm/createSuper';
import ReactDOM from 'react-dom';
import _typeof$1 from '@babel/runtime/helpers/esm/typeof';
import { isMemo } from 'react-is';
import classNames from 'classnames';
import _slicedToArray$1 from '@babel/runtime/helpers/esm/slicedToArray';
import _objectWithoutProperties$1 from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty$2 from '@babel/runtime/helpers/esm/defineProperty';
import isEqual from 'lodash/isEqual';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

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

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

var rafUUID = 0;
var rafIds = new Map();

function cleanup(id) {
  rafIds.delete(id);
}

function wrapperRaf(callback) {
  var times =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;

  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id); // Trigger

      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      }); // Bind real raf id

      rafIds.set(id, realId);
    }
  }

  callRef(times);
  return id;
}

wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};

function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return ReactDOM.findDOMNode(node);
}

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof$1(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (
    var _len = arguments.length, refs = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = isMemo(nodeOrComponent)
    ? nodeOrComponent.type.type
    : nodeOrComponent.type; // Function component node

  if (
    typeof type === 'function' &&
    !((_type$prototype = type.prototype) === null || _type$prototype === void 0
      ? void 0
      : _type$prototype.render)
  ) {
    return false;
  } // Class component

  if (
    typeof nodeOrComponent === 'function' &&
    !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null ||
    _nodeOrComponent$prot === void 0
      ? void 0
      : _nodeOrComponent$prot.render)
  ) {
    return false;
  }

  return true;
}
/* eslint-enable */

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = ReactDOM.unstable_batchedUpdates
    ? function run(e) {
        ReactDOM.unstable_batchedUpdates(cb, e);
      }
    : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    },
  };
}

function canUseDom() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

var Portal = /*#__PURE__*/ forwardRef(function (props, ref) {
  var didUpdate = props.didUpdate,
    getContainer = props.getContainer,
    children = props.children;
  var containerRef = useRef(); // Ref return nothing, only for wrapper check exist

  useImperativeHandle(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = useRef(false);

  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`

  useEffect(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  useEffect(function () {
    return function () {
      var _containerRef$current, _containerRef$current2;

      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null ||
      _containerRef$current === void 0
        ? void 0
        : (_containerRef$current2 = _containerRef$current.parentNode) ===
            null || _containerRef$current2 === void 0
        ? void 0
        : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current
    ? /*#__PURE__*/ ReactDOM.createPortal(children, containerRef.current)
    : null;
});

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread(_objectSpread({}, baseAlign), align);
}
function getAlignPopupClassName(
  builtinPlacements,
  prefixCls,
  align,
  isAlignPoint,
) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return ''.concat(prefixCls, '-placement-').concat(placement);
    }
  }

  return '';
}

var isMobile = function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      agent,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      agent === null || agent === void 0 ? void 0 : agent.substr(0, 4),
    )
  ) {
    return true;
  }

  return false;
};

// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit'.concat(styleProp)] = 'webkit'.concat(eventName);
  prefixes['Moz'.concat(styleProp)] = 'moz'.concat(eventName);
  prefixes['ms'.concat(styleProp)] = 'MS'.concat(eventName);
  prefixes['O'.concat(styleProp)] = 'o'.concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd'),
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(
  canUseDom(),
  typeof window !== 'undefined' ? window : {},
);
var style = {};

if (canUseDom()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (
        Object.prototype.hasOwnProperty.call(prefixMap, styleProp) &&
        styleProp in style
      ) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(
  internalAnimationEndName && internalTransitionEndName
);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (_typeof$1(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return ''.concat(transitionName, '-').concat(transitionType);
}

var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

function useMountStatus(defaultValue) {
  var destroyRef = useRef(false);

  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray$1(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}

var useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect : useEffect;

var useNextFrame = function () {
  var nextFrameRef = useRef(null);

  function cancelNextFrame() {
    wrapperRaf.cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = wrapperRaf(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          },
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};

var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue = function (status, callback) {
  var _React$useState = useState(STEP_NONE),
    _React$useState2 = _slicedToArray$1(_React$useState, 2),
    step = _React$useState2[0],
    setStep = _React$useState2[1];

  var _useNextFrame = useNextFrame(),
    _useNextFrame2 = _slicedToArray$1(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(STEP_PREPARE);
  }

  useIsomorphicLayoutEffect(
    function () {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index + 1];
        var result = callback(step);

        if (result === SkipStep) {
          // Skip when no needed
          setStep(nextStep);
        } else {
          // Do as frame for step update
          nextFrame(function (info) {
            function doNext() {
              // Skip since current queue is ood
              if (info.isCanceled()) return;
              setStep(nextStep);
            }

            if (result === true) {
              doNext();
            } else {
              // Only promise should be async
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    },
    [status, step],
  );
  useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};

var useDomMotionEvents = function (callback) {
  var cacheElementRef = useRef(); // Cache callback

  var callbackRef = useRef(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  } // Patch events

  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed

  useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};

function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = useMountStatus(),
    _useState2 = _slicedToArray$1(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];

  var _useState3 = useMountStatus(STATUS_NONE),
    _useState4 = _slicedToArray$1(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];

  var _useState5 = useMountStatus(null),
    _useState6 = _slicedToArray$1(_useState5, 2),
    style = _useState6[0],
    setStyle = _useState6[1];

  var mountedRef = useRef(false);
  var deadlineRef = useRef(null);
  var destroyedRef = useRef(false); // =========================== Dom Node ===========================

  var cacheElementRef = useRef(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================

  var activeRef = useRef(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === STATUS_APPEAR && activeRef.current) {
      canEnd =
        onAppearEnd === null || onAppearEnd === void 0
          ? void 0
          : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && activeRef.current) {
      canEnd =
        onEnterEnd === null || onEnterEnd === void 0
          ? void 0
          : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && activeRef.current) {
      canEnd =
        onLeaveEnd === null || onLeaveEnd === void 0
          ? void 0
          : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed

    if (canEnd !== false && !destroyedRef.current) {
      setStatus(STATUS_NONE);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
    _useDomMotionEvents2 = _slicedToArray$1(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================

  var eventHandlers = useMemo(
    function () {
      var _ref2, _ref3, _ref4;

      switch (status) {
        case 'appear':
          return (
            (_ref2 = {}),
            _defineProperty$2(_ref2, STEP_PREPARE, onAppearPrepare),
            _defineProperty$2(_ref2, STEP_START, onAppearStart),
            _defineProperty$2(_ref2, STEP_ACTIVE, onAppearActive),
            _ref2
          );

        case 'enter':
          return (
            (_ref3 = {}),
            _defineProperty$2(_ref3, STEP_PREPARE, onEnterPrepare),
            _defineProperty$2(_ref3, STEP_START, onEnterStart),
            _defineProperty$2(_ref3, STEP_ACTIVE, onEnterActive),
            _ref3
          );

        case 'leave':
          return (
            (_ref4 = {}),
            _defineProperty$2(_ref4, STEP_PREPARE, onLeavePrepare),
            _defineProperty$2(_ref4, STEP_START, onLeaveStart),
            _defineProperty$2(_ref4, STEP_ACTIVE, onLeaveActive),
            _ref4
          );

        default:
          return {};
      }
    },
    [status],
  );

  var _useStepQueue = useStepQueue(status, function (newStep) {
      // Only prepare step can be skip
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];

        if (!onPrepare) {
          return SkipStep;
        }

        return onPrepare(getDomElement());
      } // Rest step is sync update

      // Rest step is sync update
      if (step in eventHandlers) {
        var _eventHandlers$step;

        setStyle(
          ((_eventHandlers$step = eventHandlers[step]) === null ||
          _eventHandlers$step === void 0
            ? void 0
            : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) ||
            null,
        );
      }

      if (step === STEP_ACTIVE) {
        // Patch events when motion needed
        patchMotionEvents(getDomElement());

        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function () {
            onInternalMotionEnd({
              deadline: true,
            });
          }, motionDeadline);
        }
      }

      return DoStep;
    }),
    _useStepQueue2 = _slicedToArray$1(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];

  var active = isActive(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  useIsomorphicLayoutEffect(
    function () {
      setAsyncVisible(visible);
      var isMounted = mountedRef.current;
      mountedRef.current = true;

      if (!supportMotion) {
        return;
      }

      var nextStatus; // Appear

      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      } // Enter

      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      } // Leave

      if (
        (isMounted && !visible && motionLeave) ||
        (!isMounted && motionLeaveImmediately && !visible && motionLeave)
      ) {
        nextStatus = STATUS_LEAVE;
      } // Update to next status

      if (nextStatus) {
        setStatus(nextStatus);
        startStep();
      }
    },
    [visible],
  ); // ============================ Effect ============================
  // Reset when motion changed

  useEffect(
    function () {
      if (
        // Cancel appear
        (status === STATUS_APPEAR && !motionAppear) || // Cancel enter
        (status === STATUS_ENTER && !motionEnter) || // Cancel leave
        (status === STATUS_LEAVE && !motionLeave)
      ) {
        setStatus(STATUS_NONE);
      }
    },
    [motionAppear, motionEnter, motionLeave],
  );
  useEffect(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  useEffect(
    function () {
      if (asyncVisible !== undefined && status === STATUS_NONE) {
        onVisibleChanged === null || onVisibleChanged === void 0
          ? void 0
          : onVisibleChanged(asyncVisible);
      }
    },
    [asyncVisible, status],
  ); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread(
      {
        transition: 'none',
      },
      mergedStyle,
    );
  }

  return [
    status,
    step,
    mergedStyle,
    asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible,
  ];
}

var DomWrapper = /*#__PURE__*/ (function (_React$Component) {
  _inherits(DomWrapper, _React$Component);

  var _super = _createSuper(DomWrapper);

  function DomWrapper() {
    _classCallCheck(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(DomWrapper, [
    {
      key: 'render',
      value: function render() {
        return this.props.children;
      },
    },
  ]);

  return DomWrapper;
})(Component);

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if (_typeof$1(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/ forwardRef(function (props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave =
        _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = useRef(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = useRef();

    function getDomElement() {
      try {
        return findDOMNode(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
      _useStatus2 = _slicedToArray$1(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3]; // Record whether content has rended
    // Will return null for un-rendered even when `removeOnLeave={false}`

    var renderedRef = useRef(mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================

    var originRef = useRef(ref);
    originRef.current = ref;
    var setNodeRef = useCallback(function (node) {
      nodeRef.current = node;
      fillRef(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = _objectSpread(
      _objectSpread({}, eventProps),
      {},
      {
        visible: visible,
      },
    );

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(_objectSpread({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children(
          _objectSpread(
            _objectSpread({}, mergedProps),
            {},
            {
              className: leavedClassName,
            },
          ),
          setNodeRef,
        );
      } else if (forceRender) {
        motionChildren = children(
          _objectSpread(
            _objectSpread({}, mergedProps),
            {},
            {
              style: {
                display: 'none',
              },
            },
          ),
          setNodeRef,
        );
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children(
        _objectSpread(
          _objectSpread({}, mergedProps),
          {},
          {
            className: classNames(
              getTransitionName(motionName, status),
              ((_classNames = {}),
              _defineProperty$2(
                _classNames,
                getTransitionName(
                  motionName,
                  ''.concat(status, '-').concat(statusSuffix),
                ),
                statusSuffix,
              ),
              _defineProperty$2(
                _classNames,
                motionName,
                typeof motionName === 'string',
              ),
              _classNames),
            ),
            style: statusStyle,
          },
        ),
        setNodeRef,
      );
    }

    return /*#__PURE__*/ createElement(
      DomWrapper,
      {
        ref: wrapperNodeRef,
      },
      motionChildren,
    );
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
var CSSMotion = genCSSMotion(supportTransition);

function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
    motion = _ref.motion,
    animation = _ref.animation,
    transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: ''.concat(prefixCls, '-').concat(animation),
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName,
    };
  }

  return null;
}

function Mask(props) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    mask = props.mask,
    maskMotion = props.maskMotion,
    maskAnimation = props.maskAnimation,
    maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = _objectSpread(
      {
        motionAppear: true,
      },
      getMotion({
        motion: maskMotion,
        prefixCls: prefixCls,
        transitionName: maskTransitionName,
        animation: maskAnimation,
      }),
    );
  }

  return /*#__PURE__*/ createElement(
    CSSMotion,
    _extends({}, motion, {
      visible: visible,
      removeOnLeave: true,
    }),
    function (_ref) {
      var className = _ref.className;
      return /*#__PURE__*/ createElement('div', {
        style: {
          zIndex: zIndex,
        },
        className: classNames(''.concat(prefixCls, '-mask'), className),
      });
    },
  );
}

var isVisible = function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-',
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName$1() {
  return getVendorPrefix()
    ? ''.concat(getVendorPrefix(), 'TransitionProperty')
    : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix()
    ? ''.concat(getVendorPrefix(), 'Transform')
    : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName$1();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName$1()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform =
    style.getPropertyValue('transform') ||
    style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0),
    };
  }

  return {
    x: 0,
    y: 0,
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform =
    style.getPropertyValue('transform') ||
    style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix('.concat(arr.join(','), ')'));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d('.concat(arr.join(','), ')'));
    }
  } else {
    setTransform(
      node,
      'translateX('
        .concat(xy.x, 'px) translateY(')
        .concat(xy.y, 'px) translateZ(0)'),
    );
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = ''.concat(value, 'px');
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y,
  };
}

function getScroll(w, top) {
  var ret = w['page'.concat(top ? 'Y' : 'X', 'Offset')];
  var method = 'scroll'.concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */

function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^('.concat(RE_NUM, ')(?!px)[a-z%]+$'), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle
    ? _getComputedStyle
    : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标

function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = ''.concat(presetH, 'px');
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = ''.concat(presetV, 'px');
  } // force relayout

  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y,
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (
    option.useCssTransform &&
    getTransformName() in document.body.style
  ) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = ''.concat(prop).concat(which[i], 'Width');
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  },
};
each(['Width', 'Height'], function (name) {
  domUtils['doc'.concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      d.documentElement['scroll'.concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      d.body['scroll'.concat(name)],
      domUtils['viewport'.concat(name)](d),
    );
  };

  domUtils['viewport'.concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client'.concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return (
      (doc.compatMode === 'CSS1Compat' && documentElementProp) ||
      (body && body[prop]) ||
      documentElementProp
    );
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width'
      ? domUtils.viewportWidth(elem)
      : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width'
      ? domUtils.docWidth(elem)
      : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue =
    name === 'width'
      ? elem.getBoundingClientRect().width
      : elem.getBoundingClientRect().height;
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (
    borderBoxValue === null ||
    borderBoxValue === undefined ||
    borderBoxValue <= 0
  ) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (
      cssBoxValue === null ||
      cssBoxValue === undefined ||
      Number(cssBoxValue) < 0
    ) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra

    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return (
      val +
      (extra === PADDING_INDEX
        ? -getPBMWidth(elem, ['border'], which)
        : getPBMWidth(elem, ['margin'], which))
    );
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block',
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (
    var _len = arguments.length, args = new Array(_len), _key2 = 0;
    _key2 < _len;
    _key2++
  ) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils['outer'.concat(first)] = function (el, includeMargin) {
    return (
      el &&
      getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX)
    );
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0,
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html'
      ? null
      : getParent(element);
  }

  for (
    parent = getParent(element);
    parent && parent !== body && parent.nodeType !== 9;
    parent = getParent(parent)
  ) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (
    parent = getParent$1(element); // 修复元素位于 document.documentElement 下导致崩溃问题
    parent && parent !== body && parent !== doc;
    parent = getParent$1(parent)
  ) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity,
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if (
      (navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
      // viewport. In some browsers, el.offsetParent may be
      // document.documentElement, so check for that too.
      el !== body &&
      el !== documentElement &&
      utils.css(el, 'overflow') !== 'visible'
    ) {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(
        visibleRect.right, // consider area without scrollBar
        pos.left + el.clientWidth,
      );
      visibleRect.bottom = Math.min(
        visibleRect.bottom,
        pos.top + el.clientHeight,
      );
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601

  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area

  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 &&
    visibleRect.left >= 0 &&
    visibleRect.bottom > visibleRect.top &&
    visibleRect.right > visibleRect.left
    ? visibleRect
    : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height,
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.

  if (
    overflow.resizeWidth &&
    pos.left >= visibleRect.left &&
    pos.left + size.width > visibleRect.right
  ) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.

  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.

  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.

  if (
    overflow.resizeHeight &&
    pos.top >= visibleRect.top &&
    pos.top + size.height > visibleRect.bottom
  ) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.

  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win),
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y,
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1]),
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.left < visibleRect.left ||
    elFuturePos.left + elRegion.width > visibleRect.right
  );
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.top < visibleRect.top ||
    elFuturePos.top + elRegion.height > visibleRect.bottom
  );
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.left > visibleRect.right ||
    elFuturePos.left + elRegion.width < visibleRect.left
  );
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.top > visibleRect.bottom ||
    elFuturePos.top + elRegion.height < visibleRect.top
  );
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(
      p.replace(reg, function (m) {
        return map[m];
      }),
    );
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = (parseInt(str.substring(0, str.length - 1), 10) / 100) * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */

function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(
    elRegion,
    tgtRegion,
    points,
    offset,
    targetOffset,
  ); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (
    visibleRect &&
    (overflow.adjustX || overflow.adjustY) &&
    isTgtRegionVisible
  ) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l',
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(
          elRegion,
          tgtRegion,
          newPoints,
          newOffset,
          newTargetOffset,
        );

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't',
        }); // 偏移量也反下

        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(
          elRegion,
          tgtRegion,
          _newPoints,
          _newOffset,
          _newTargetOffset,
        );

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置

    if (fail) {
      elFuturePos = getElFuturePos(
        elRegion,
        tgtRegion,
        points,
        offset,
        targetOffset,
      );
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l',
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't',
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整

    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(
        elFuturePos,
        elRegion,
        visibleRect,
        newOverflowCfg,
      );
    }
  } // need judge to in case set fixed with in css on height auto element

  if (newElRegion.width !== elRegion.width) {
    utils.css(
      source,
      'width',
      utils.width(source) + newElRegion.width - elRegion.width,
    );
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(
      source,
      'height',
      utils.height(source) + newElRegion.height - elRegion.height,
    );
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>

  utils.offset(
    source,
    {
      left: newElRegion.left,
      top: newElRegion.top,
    },
    {
      useCssRight: align.useCssRight,
      useCssBottom: align.useCssBottom,
      useCssTransform: align.useCssTransform,
      ignoreShake: align.ignoreShake,
    },
  );
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg,
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return (
    !visibleRect ||
    targetRegion.left + targetRegion.width <= visibleRect.left ||
    targetRegion.top + targetRegion.height <= visibleRect.top ||
    targetRegion.left >= visibleRect.right ||
    targetRegion.top >= visibleRect.bottom
  );
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(
    target,
    align.overflow && align.overflow.alwaysByViewport,
  );
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0,
  };
  var pointInView =
    pageX >= 0 &&
    pageX <= scrollX + viewportWidth &&
    pageY >= 0 &&
    pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(
    el,
    tgtRegion,
    _objectSpread2$1(
      _objectSpread2$1({}, align),
      {},
      {
        points: points,
      },
    ),
    pointInView,
  );
}

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }
      return false;
    });
    return result;
  }
  return /** @class */ (function () {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, 'size', {
      /**
       * @returns {boolean}
       */
      get: function () {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true,
    });
    /**
     * @param {*} key
     * @returns {*}
     */
    class_1.prototype.get = function (key) {
      var index = getIndex(this.__entries__, key);
      var entry = this.__entries__[index];
      return entry && entry[1];
    };
    /**
     * @param {*} key
     * @param {*} value
     * @returns {void}
     */
    class_1.prototype.set = function (key, value) {
      var index = getIndex(this.__entries__, key);
      if (~index) {
        this.__entries__[index][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    /**
     * @param {*} key
     * @returns {void}
     */
    class_1.prototype.delete = function (key) {
      var entries = this.__entries__;
      var index = getIndex(entries, key);
      if (~index) {
        entries.splice(index, 1);
      }
    };
    /**
     * @param {*} key
     * @returns {void}
     */
    class_1.prototype.has = function (key) {
      return !!~getIndex(this.__entries__, key);
    };
    /**
     * @returns {void}
     */
    class_1.prototype.clear = function () {
      this.__entries__.splice(0);
    };
    /**
     * @param {Function} callback
     * @param {*} [ctx=null]
     * @returns {void}
     */
    class_1.prototype.forEach = function (callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  })();
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser =
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }
  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }
  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  }
  // eslint-disable-next-line no-new-func
  return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }
  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle(callback, delay) {
  var leadingCall = false,
    trailingCall = false,
    lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
  'top',
  'right',
  'bottom',
  'left',
  'width',
  'height',
  'size',
  'weight',
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */
  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */
  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);
    // Remove observer if it's present in registry.
    if (~index) {
      observers.splice(index, 1);
    }
    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */
  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();
    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */
  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    }
    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */
  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
      propertyName = _b === void 0 ? '' : _b;
    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */
  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }
    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */
  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
})();

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = function (target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true,
    });
  }
  return target;
};

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = function (target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal =
    target && target.ownerDocument && target.ownerDocument.defaultView;
  // Return the local global object if it's not possible extract one from
  // provided element.
  return ownerGlobal || global$1;
};

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
    clientHeight = target.clientHeight;
  // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.
  var width = toFloat(styles.width),
    height = toFloat(styles.height);
  // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).
  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  }
  // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.
  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens
  return function (target) {
    return (
      target instanceof getWindowOf(target).SVGElement &&
      typeof target.getBBox === 'function'
    );
  };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
  var x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  // If DOMRectReadOnly is available use it as a prototype for the rectangle.
  var Constr =
    typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  // Rectangle's properties are not writable and non-enumerable.
  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x,
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
  return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */
  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return (
      rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight
    );
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */
  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation;
})();

var ResizeObserverEntry = /** @class */ (function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
  }
  return ResizeObserverEntry;
})();

var ResizeObserverSPI = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    this.observations_ = new MapShim();
    if (typeof callback !== 'function') {
      throw new TypeError(
        'The callback provided as parameter 1 is not a function.',
      );
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is already being observed.
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    // Force the update of observations.
    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(
        observation.target,
        observation.broadcastRect(),
      );
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */
  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI;
})();

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver;
})();
// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index$1 = (function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
})();

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (
    activeElement !== document.activeElement &&
    contains(container, activeElement) &&
    typeof activeElement.focus === 'function'
  ) {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = _slicedToArray$1(_ref, 1),
      target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight,
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new index$1(onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

var useBuffer = function (callback, buffer) {
  var calledRef = React.useRef(false);
  var timeoutRef = React.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [
    trigger,
    function () {
      calledRef.current = false;
      cancelTrigger();
    },
  ];
};

function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (_typeof$1(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    target = _ref.target,
    align = _ref.align,
    onAlign = _ref.onAlign,
    monitorWindowResize = _ref.monitorWindowResize,
    _ref$monitorBufferTim = _ref.monitorBufferTime,
    monitorBufferTime =
      _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = React.useRef({});
  var nodeRef = React.useRef();
  var childNode = React.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = React.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.align = align;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = useBuffer(function () {
      var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestAlign = _forceAlignPropsRef$c.align,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

      if (!latestDisabled && latestTarget) {
        var source = nodeRef.current;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.current.element = element;
        cacheRef.current.point = point;
        cacheRef.current.align = latestAlign; // IE lose focus after element realign
        // We should record activeElement and restore later

        // IE lose focus after element realign
        // We should record activeElement and restore later
        var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

        // We only align when element is visible
        if (element && isVisible(element)) {
          result = alignElement(source, element, latestAlign);
        } else if (point) {
          result = alignPoint(source, point, latestAlign);
        }

        restoreFocus(activeElement, source);

        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }

        return true;
      }

      return false;
    }, monitorBufferTime),
    _useBuffer2 = _slicedToArray$1(_useBuffer, 2),
    _forceAlign = _useBuffer2[0],
    cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated

  var resizeMonitor = React.useRef({
    cancel: function cancel() {},
  }); // Listen for source updated

  var sourceResizeMonitor = React.useRef({
    cancel: function cancel() {},
  });
  React.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = monitorResize(
        nodeRef.current,
        _forceAlign,
      );
    }

    if (
      cacheRef.current.element !== element ||
      !isSamePoint(cacheRef.current.point, point) ||
      !isEqual(cacheRef.current.align, align)
    ) {
      _forceAlign(); // Add resize observer

      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = monitorResize(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  React.useEffect(
    function () {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    },
    [disabled],
  ); // Listen for window resize

  var winResizeRef = React.useRef(null);
  React.useEffect(
    function () {
      if (monitorWindowResize) {
        if (!winResizeRef.current) {
          winResizeRef.current = addEventListenerWrap(
            window,
            'resize',
            _forceAlign,
          );
        }
      } else if (winResizeRef.current) {
        winResizeRef.current.remove();
        winResizeRef.current = null;
      }
    },
    [monitorWindowResize],
  ); // Clear all if unmount

  React.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  React.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      },
    };
  }); // ===================== Render =====================

  if (/*#__PURE__*/ React.isValidElement(childNode)) {
    childNode = /*#__PURE__*/ React.cloneElement(childNode, {
      ref: composeRef(childNode.ref, nodeRef),
    });
  }

  return childNode;
};

var RcAlign = /*#__PURE__*/ React.forwardRef(Align);
RcAlign.displayName = 'Align';

var StatusQueue = ['measure', 'align', null, 'motion'];
var useVisibleStatus = function (visible, doMeasure) {
  var _useState = useState(null),
    _useState2 = _slicedToArray$1(_useState, 2),
    status = _useState2[0],
    setInternalStatus = _useState2[1];

  var rafRef = useRef();
  var destroyRef = useRef(false);

  function setStatus(nextStatus) {
    if (!destroyRef.current) {
      setInternalStatus(nextStatus);
    }
  }

  function cancelRaf() {
    wrapperRaf.cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = wrapperRaf(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status

  useEffect(
    function () {
      setStatus('measure');
    },
    [visible],
  ); // Go next status

  useEffect(
    function () {
      switch (status) {
        case 'measure':
          doMeasure();
          break;
      }

      if (status) {
        rafRef.current = wrapperRaf(
          /*#__PURE__*/ _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
              var index, nextStatus;
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      index = StatusQueue.indexOf(status);
                      nextStatus = StatusQueue[index + 1];

                      if (nextStatus && index !== -1) {
                        setStatus(nextStatus);
                      }

                    case 3:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            }),
          ),
        );
      }
    },
    [status],
  );
  useEffect(function () {
    return function () {
      destroyRef.current = true;
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
};

var useStretchStyle = function (stretch) {
  var _React$useState = useState({
      width: 0,
      height: 0,
    }),
    _React$useState2 = _slicedToArray$1(_React$useState, 2),
    targetSize = _React$useState2[0],
    setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight,
    });
  } // Merge stretch style

  var style = useMemo(
    function () {
      var sizeStyle = {};

      if (stretch) {
        var width = targetSize.width,
          height = targetSize.height; // Stretch with target

        if (stretch.indexOf('height') !== -1 && height) {
          sizeStyle.height = height;
        } else if (stretch.indexOf('minHeight') !== -1 && height) {
          sizeStyle.minHeight = height;
        }

        if (stretch.indexOf('width') !== -1 && width) {
          sizeStyle.width = width;
        } else if (stretch.indexOf('minWidth') !== -1 && width) {
          sizeStyle.minWidth = width;
        }
      }

      return sizeStyle;
    },
    [stretch, targetSize],
  );
  return [style, measureStretch];
};

var PopupInner = /*#__PURE__*/ forwardRef(function (props, ref) {
  var visible = props.visible,
    prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    children = props.children,
    zIndex = props.zIndex,
    stretch = props.stretch,
    destroyPopupOnHide = props.destroyPopupOnHide,
    forceRender = props.forceRender,
    align = props.align,
    point = props.point,
    getRootDomNode = props.getRootDomNode,
    getClassNameFromAlign = props.getClassNameFromAlign,
    onAlign = props.onAlign,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onMouseDown = props.onMouseDown,
    onTouchStart = props.onTouchStart;
  var alignRef = useRef();
  var elementRef = useRef();

  var _useState = useState(),
    _useState2 = _slicedToArray$1(_useState, 2),
    alignedClassName = _useState2[0],
    setAlignedClassName = _useState2[1]; // ======================= Measure ========================

  var _useStretchStyle = useStretchStyle(stretch),
    _useStretchStyle2 = _slicedToArray$1(_useStretchStyle, 2),
    stretchStyle = _useStretchStyle2[0],
    measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================

  var _useVisibleStatus = useVisibleStatus(visible, doMeasure),
    _useVisibleStatus2 = _slicedToArray$1(_useVisibleStatus, 2),
    status = _useVisibleStatus2[0],
    goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================

  var prepareResolveRef = useRef(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null ||
    _alignRef$current === void 0
      ? void 0
      : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    var nextAlignedClassName = getClassNameFromAlign(matchAlign);

    if (alignedClassName !== nextAlignedClassName) {
      setAlignedClassName(nextAlignedClassName);
    }

    if (status === 'align') {
      // Repeat until not more align needed
      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null ||
          _prepareResolveRef$cu === void 0
            ? void 0
            : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0
        ? void 0
        : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================

  var motion = _objectSpread({}, getMotion(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0
        ? void 0
        : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided

  useEffect(
    function () {
      if (!motion.motionName && status === 'motion') {
        goNextStatus();
      }
    },
    [motion.motionName, status],
  ); // ========================= Refs =========================

  useImperativeHandle(ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      },
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread(
    _objectSpread({}, stretchStyle),
    {},
    {
      zIndex: zIndex,
      opacity:
        status === 'motion' || status === 'stable' || !visible ? undefined : 0,
      pointerEvents: status === 'stable' ? undefined : 'none',
    },
    style,
  ); // Align status

  var alignDisabled = true;

  if (
    (align === null || align === void 0 ? void 0 : align.points) &&
    (status === 'align' || status === 'stable')
  ) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (Children.count(children) > 1) {
    childNode = /*#__PURE__*/ createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content'),
      },
      children,
    );
  }

  return /*#__PURE__*/ createElement(
    CSSMotion,
    _extends(
      {
        visible: visible,
        ref: elementRef,
        leavedClassName: ''.concat(prefixCls, '-hidden'),
      },
      motion,
      {
        onAppearPrepare: onShowPrepare,
        onEnterPrepare: onShowPrepare,
        removeOnLeave: destroyPopupOnHide,
        forceRender: forceRender,
      },
    ),
    function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var mergedClassName = classNames(
        prefixCls,
        className,
        alignedClassName,
        motionClassName,
      );
      return /*#__PURE__*/ createElement(
        RcAlign,
        {
          target: getAlignTarget(),
          key: 'popup',
          ref: alignRef,
          monitorWindowResize: true,
          disabled: alignDisabled,
          align: align,
          onAlign: onInternalAlign,
        },
        /*#__PURE__*/ createElement(
          'div',
          {
            ref: motionRef,
            className: mergedClassName,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDownCapture: onMouseDown,
            onTouchStartCapture: onTouchStart,
            style: _objectSpread(_objectSpread({}, motionStyle), mergedStyle),
          },
          childNode,
        ),
      );
    },
  );
});
PopupInner.displayName = 'PopupInner';

var MobilePopupInner = /*#__PURE__*/ forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    children = props.children,
    _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
    popupStyle = _props$mobile.popupStyle,
    _props$mobile$popupMo = _props$mobile.popupMotion,
    popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
    popupRender = _props$mobile.popupRender;
  var elementRef = useRef(); // ========================= Refs =========================

  useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      },
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread(
    {
      zIndex: zIndex,
    },
    popupStyle,
  );

  var childNode = children; // Wrapper when multiple children

  if (Children.count(children) > 1) {
    childNode = /*#__PURE__*/ createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content'),
      },
      children,
    );
  } // Mobile support additional render

  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/ createElement(
    CSSMotion,
    _extends(
      {
        visible: visible,
        ref: elementRef,
        removeOnLeave: true,
      },
      popupMotion,
    ),
    function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var mergedClassName = classNames(
        prefixCls,
        popupClassName,
        motionClassName,
      );
      return /*#__PURE__*/ createElement(
        'div',
        {
          ref: motionRef,
          className: mergedClassName,
          style: _objectSpread(_objectSpread({}, motionStyle), mergedStyle),
        },
        childNode,
      );
    },
  );
});
MobilePopupInner.displayName = 'MobilePopupInner';

var _excluded = ['visible', 'mobile'];
var Popup = /*#__PURE__*/ forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
    mobile = _ref.mobile,
    props = _objectWithoutProperties$1(_ref, _excluded);

  var _useState = useState(visible),
    _useState2 = _slicedToArray$1(_useState, 2),
    innerVisible = _useState2[0],
    serInnerVisible = _useState2[1];

  var _useState3 = useState(false),
    _useState4 = _slicedToArray$1(_useState3, 2),
    inMobile = _useState4[0],
    setInMobile = _useState4[1];

  var cloneProps = _objectSpread(
    _objectSpread({}, props),
    {},
    {
      visible: innerVisible,
    },
  ); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash

  useEffect(
    function () {
      serInnerVisible(visible);

      if (visible && mobile) {
        setInMobile(isMobile());
      }
    },
    [visible, mobile],
  );
  var popupNode = inMobile
    ? /*#__PURE__*/ createElement(
        MobilePopupInner,
        _extends({}, cloneProps, {
          mobile: mobile,
          ref: ref,
        }),
      )
    : /*#__PURE__*/ createElement(
        PopupInner,
        _extends({}, cloneProps, {
          ref: ref,
        }),
      ); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/ createElement(
    'div',
    null,
    /*#__PURE__*/ createElement(Mask, cloneProps),
    popupNode,
  );
});
Popup.displayName = 'Popup';

var TriggerContext = /*#__PURE__*/ createContext(null);

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = [
  'onClick',
  'onMouseDown',
  'onTouchStart',
  'onMouseEnter',
  'onMouseLeave',
  'onFocus',
  'onBlur',
  'onContextMenu',
];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/ (function (_React$Component) {
    _inherits(Trigger, _React$Component);

    var _super = _createSuper(Trigger);

    function Trigger(props) {
      var _this;

      _classCallCheck(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/ createRef();
      _this.triggerRef = /*#__PURE__*/ createRef();
      _this.attachId = void 0;
      _this.clickOutsideHandler = void 0;
      _this.touchOutsideHandler = void 0;
      _this.contextMenuOutsideHandler1 = void 0;
      _this.contextMenuOutsideHandler2 = void 0;
      _this.mouseDownTimeout = void 0;
      _this.focusTime = void 0;
      _this.preClickTime = void 0;
      _this.preTouchTime = void 0;
      _this.delayTimer = void 0;
      _this.hasPopupMouseDown = void 0;

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(
          true,
          mouseEnterDelay,
          mouseEnterDelay ? null : e,
        );
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (
          e.relatedTarget &&
          !e.relatedTarget.setTimeout &&
          contains(
            (_this$popupRef$curren = _this.popupRef.current) === null ||
              _this$popupRef$curren === void 0
              ? void 0
              : _this$popupRef$curren.getElement(),
            e.relatedTarget,
          )
        ) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout

        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click

        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (
          _this.isClickToShow() &&
          (_this.isClickToHide() || _this.isBlurToHide()) &&
          event &&
          event.preventDefault
        ) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (
          (_this.isClickToHide() && !nextVisible) ||
          (nextVisible && _this.isClickToShow())
        ) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(
            _this$context,
            arguments,
          );
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if (
          // mousedown on the target should also close popup when action is contextMenu.
          // https://github.com/ant-design/ant-design/issues/29853
          (!contains(root, target) || _this.isContextMenuOnly()) &&
          !contains(popupNode, target) &&
          !_this.hasPopupMouseDown
        ) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = findDOMNode(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {
          // Do nothing
        }

        return ReactDOM.findDOMNode(_assertThisInitialized(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
          popupPlacement = _this$props.popupPlacement,
          builtinPlacements = _this$props.builtinPlacements,
          prefixCls = _this$props.prefixCls,
          alignPoint = _this$props.alignPoint,
          getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(
            getAlignPopupClassName(
              builtinPlacements,
              prefixCls,
              align,
              alignPoint,
            ),
          );
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          destroyPopupOnHide = _this$props2.destroyPopupOnHide,
          popupClassName = _this$props2.popupClassName,
          onPopupAlign = _this$props2.onPopupAlign,
          popupMotion = _this$props2.popupMotion,
          popupAnimation = _this$props2.popupAnimation,
          popupTransitionName = _this$props2.popupTransitionName,
          popupStyle = _this$props2.popupStyle,
          mask = _this$props2.mask,
          maskAnimation = _this$props2.maskAnimation,
          maskTransitionName = _this$props2.maskTransitionName,
          maskMotion = _this$props2.maskMotion,
          zIndex = _this$props2.zIndex,
          popup = _this$props2.popup,
          stretch = _this$props2.stretch,
          alignPoint = _this$props2.alignPoint,
          mobile = _this$props2.mobile,
          forceRender = _this$props2.forceRender;
        var _this$state = _this.state,
          popupVisible = _this$state.popupVisible,
          point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/ createElement(
          Popup,
          _extends(
            {
              prefixCls: prefixCls,
              destroyPopupOnHide: destroyPopupOnHide,
              visible: popupVisible,
              point: alignPoint && point,
              className: popupClassName,
              align: align,
              onAlign: onPopupAlign,
              animation: popupAnimation,
              getClassNameFromAlign: _this.getPopupClassNameFromAlign,
            },
            mouseProps,
            {
              stretch: stretch,
              getRootDomNode: _this.getRootDomNode,
              style: popupStyle,
              mask: mask,
              zIndex: zIndex,
              transitionName: popupTransitionName,
              maskAnimation: maskAnimation,
              maskTransitionName: maskTransitionName,
              maskMotion: maskMotion,
              ref: _this.popupRef,
              motion: popupMotion,
              mobile: mobile,
              forceRender: forceRender,
            },
          ),
          typeof popup === 'function' ? popup() : popup,
        );
      };

      _this.attachParent = function (popupContainer) {
        wrapperRaf.cancel(_this.attachId);
        var _this$props3 = _this.props,
          getPopupContainer = _this$props3.getPopupContainer,
          getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = wrapperRaf(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement(
          'div',
        ); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY,
          },
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      _this.triggerContextValue = {
        onPopupMouseDown: _this.onPopupMouseDown,
      };

      var _popupVisible;

      if ('popupVisible' in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible,
      };
      ALL_HANDLERS.forEach(function (h) {
        _this['fire'.concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    _createClass(
      Trigger,
      [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.componentDidUpdate();
          },
        },
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate() {
            var props = this.props;
            var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
            // https://github.com/ant-design/ant-design/issues/5804
            // https://github.com/react-component/calendar/issues/250
            // https://github.com/react-component/trigger/issues/50

            if (state.popupVisible) {
              var currentDocument;

              if (
                !this.clickOutsideHandler &&
                (this.isClickToHide() || this.isContextMenuToShow())
              ) {
                currentDocument = props.getDocument(this.getRootDomNode());
                this.clickOutsideHandler = addEventListenerWrap(
                  currentDocument,
                  'mousedown',
                  this.onDocumentClick,
                );
              } // always hide on mobile

              if (!this.touchOutsideHandler) {
                currentDocument =
                  currentDocument || props.getDocument(this.getRootDomNode());
                this.touchOutsideHandler = addEventListenerWrap(
                  currentDocument,
                  'touchstart',
                  this.onDocumentClick,
                );
              } // close popup when trigger type contains 'onContextMenu' and document is scrolling.

              if (
                !this.contextMenuOutsideHandler1 &&
                this.isContextMenuToShow()
              ) {
                currentDocument =
                  currentDocument || props.getDocument(this.getRootDomNode());
                this.contextMenuOutsideHandler1 = addEventListenerWrap(
                  currentDocument,
                  'scroll',
                  this.onContextMenuClose,
                );
              } // close popup when trigger type contains 'onContextMenu' and window is blur.

              if (
                !this.contextMenuOutsideHandler2 &&
                this.isContextMenuToShow()
              ) {
                this.contextMenuOutsideHandler2 = addEventListenerWrap(
                  window,
                  'blur',
                  this.onContextMenuClose,
                );
              }

              return;
            }

            this.clearOutsideHandler();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.clearDelayTimer();
            this.clearOutsideHandler();
            clearTimeout(this.mouseDownTimeout);
            wrapperRaf.cancel(this.attachId);
          },
        },
        {
          key: 'getPopupDomNode',
          value: function getPopupDomNode() {
            var _this$popupRef$curren2;

            // for test
            return (
              ((_this$popupRef$curren2 = this.popupRef.current) === null ||
              _this$popupRef$curren2 === void 0
                ? void 0
                : _this$popupRef$curren2.getElement()) || null
            );
          },
        },
        {
          key: 'getPopupAlign',
          value: function getPopupAlign() {
            var props = this.props;
            var popupPlacement = props.popupPlacement,
              popupAlign = props.popupAlign,
              builtinPlacements = props.builtinPlacements;

            if (popupPlacement && builtinPlacements) {
              return getAlignFromPlacement(
                builtinPlacements,
                popupPlacement,
                popupAlign,
              );
            }

            return popupAlign;
          },
        },
        {
          key: 'setPopupVisible',
          value:
            /**
             * @param popupVisible    Show or not the popup element
             * @param event           SyntheticEvent, used for `pointAlign`
             */
            function setPopupVisible(popupVisible, event) {
              var alignPoint = this.props.alignPoint;
              var prevPopupVisible = this.state.popupVisible;
              this.clearDelayTimer();

              if (prevPopupVisible !== popupVisible) {
                if (!('popupVisible' in this.props)) {
                  this.setState({
                    popupVisible: popupVisible,
                    prevPopupVisible: prevPopupVisible,
                  });
                }

                this.props.onPopupVisibleChange(popupVisible);
              } // Always record the point position since mouseEnterDelay will delay the show

              if (alignPoint && event && popupVisible) {
                this.setPoint(event);
              }
            },
        },
        {
          key: 'delaySetPopupVisible',
          value: function delaySetPopupVisible(visible, delayS, event) {
            var _this2 = this;

            var delay = delayS * 1000;
            this.clearDelayTimer();

            if (delay) {
              var point = event
                ? {
                    pageX: event.pageX,
                    pageY: event.pageY,
                  }
                : null;
              this.delayTimer = window.setTimeout(function () {
                _this2.setPopupVisible(visible, point);

                _this2.clearDelayTimer();
              }, delay);
            } else {
              this.setPopupVisible(visible, event);
            }
          },
        },
        {
          key: 'clearDelayTimer',
          value: function clearDelayTimer() {
            if (this.delayTimer) {
              clearTimeout(this.delayTimer);
              this.delayTimer = null;
            }
          },
        },
        {
          key: 'clearOutsideHandler',
          value: function clearOutsideHandler() {
            if (this.clickOutsideHandler) {
              this.clickOutsideHandler.remove();
              this.clickOutsideHandler = null;
            }

            if (this.contextMenuOutsideHandler1) {
              this.contextMenuOutsideHandler1.remove();
              this.contextMenuOutsideHandler1 = null;
            }

            if (this.contextMenuOutsideHandler2) {
              this.contextMenuOutsideHandler2.remove();
              this.contextMenuOutsideHandler2 = null;
            }

            if (this.touchOutsideHandler) {
              this.touchOutsideHandler.remove();
              this.touchOutsideHandler = null;
            }
          },
        },
        {
          key: 'createTwoChains',
          value: function createTwoChains(event) {
            var childPros = this.props.children.props;
            var props = this.props;

            if (childPros[event] && props[event]) {
              return this['fire'.concat(event)];
            }

            return childPros[event] || props[event];
          },
        },
        {
          key: 'isClickToShow',
          value: function isClickToShow() {
            var _this$props4 = this.props,
              action = _this$props4.action,
              showAction = _this$props4.showAction;
            return (
              action.indexOf('click') !== -1 ||
              showAction.indexOf('click') !== -1
            );
          },
        },
        {
          key: 'isContextMenuOnly',
          value: function isContextMenuOnly() {
            var action = this.props.action;
            return (
              action === 'contextMenu' ||
              (action.length === 1 && action[0] === 'contextMenu')
            );
          },
        },
        {
          key: 'isContextMenuToShow',
          value: function isContextMenuToShow() {
            var _this$props5 = this.props,
              action = _this$props5.action,
              showAction = _this$props5.showAction;
            return (
              action.indexOf('contextMenu') !== -1 ||
              showAction.indexOf('contextMenu') !== -1
            );
          },
        },
        {
          key: 'isClickToHide',
          value: function isClickToHide() {
            var _this$props6 = this.props,
              action = _this$props6.action,
              hideAction = _this$props6.hideAction;
            return (
              action.indexOf('click') !== -1 ||
              hideAction.indexOf('click') !== -1
            );
          },
        },
        {
          key: 'isMouseEnterToShow',
          value: function isMouseEnterToShow() {
            var _this$props7 = this.props,
              action = _this$props7.action,
              showAction = _this$props7.showAction;
            return (
              action.indexOf('hover') !== -1 ||
              showAction.indexOf('mouseEnter') !== -1
            );
          },
        },
        {
          key: 'isMouseLeaveToHide',
          value: function isMouseLeaveToHide() {
            var _this$props8 = this.props,
              action = _this$props8.action,
              hideAction = _this$props8.hideAction;
            return (
              action.indexOf('hover') !== -1 ||
              hideAction.indexOf('mouseLeave') !== -1
            );
          },
        },
        {
          key: 'isFocusToShow',
          value: function isFocusToShow() {
            var _this$props9 = this.props,
              action = _this$props9.action,
              showAction = _this$props9.showAction;
            return (
              action.indexOf('focus') !== -1 ||
              showAction.indexOf('focus') !== -1
            );
          },
        },
        {
          key: 'isBlurToHide',
          value: function isBlurToHide() {
            var _this$props10 = this.props,
              action = _this$props10.action,
              hideAction = _this$props10.hideAction;
            return (
              action.indexOf('focus') !== -1 ||
              hideAction.indexOf('blur') !== -1
            );
          },
        },
        {
          key: 'forcePopupAlign',
          value: function forcePopupAlign() {
            if (this.state.popupVisible) {
              var _this$popupRef$curren3;

              (_this$popupRef$curren3 = this.popupRef.current) === null ||
              _this$popupRef$curren3 === void 0
                ? void 0
                : _this$popupRef$curren3.forceAlign();
            }
          },
        },
        {
          key: 'fireEvents',
          value: function fireEvents(type, e) {
            var childCallback = this.props.children.props[type];

            if (childCallback) {
              childCallback(e);
            }

            var callback = this.props[type];

            if (callback) {
              callback(e);
            }
          },
        },
        {
          key: 'close',
          value: function close() {
            this.setPopupVisible(false);
          },
        },
        {
          key: 'render',
          value: function render() {
            var popupVisible = this.state.popupVisible;
            var _this$props11 = this.props,
              children = _this$props11.children,
              forceRender = _this$props11.forceRender,
              alignPoint = _this$props11.alignPoint,
              className = _this$props11.className,
              autoDestroy = _this$props11.autoDestroy;
            var child = Children.only(children);
            var newChildProps = {
              key: 'trigger',
            }; // ============================== Visible Handlers ==============================
            // >>> ContextMenu

            if (this.isContextMenuToShow()) {
              newChildProps.onContextMenu = this.onContextMenu;
            } else {
              newChildProps.onContextMenu =
                this.createTwoChains('onContextMenu');
            } // >>> Click

            if (this.isClickToHide() || this.isClickToShow()) {
              newChildProps.onClick = this.onClick;
              newChildProps.onMouseDown = this.onMouseDown;
              newChildProps.onTouchStart = this.onTouchStart;
            } else {
              newChildProps.onClick = this.createTwoChains('onClick');
              newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
              newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
            } // >>> Hover(enter)

            if (this.isMouseEnterToShow()) {
              newChildProps.onMouseEnter = this.onMouseEnter; // Point align

              if (alignPoint) {
                newChildProps.onMouseMove = this.onMouseMove;
              }
            } else {
              newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
            } // >>> Hover(leave)

            if (this.isMouseLeaveToHide()) {
              newChildProps.onMouseLeave = this.onMouseLeave;
            } else {
              newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
            } // >>> Focus

            if (this.isFocusToShow() || this.isBlurToHide()) {
              newChildProps.onFocus = this.onFocus;
              newChildProps.onBlur = this.onBlur;
            } else {
              newChildProps.onFocus = this.createTwoChains('onFocus');
              newChildProps.onBlur = this.createTwoChains('onBlur');
            } // =================================== Render ===================================

            var childrenClassName = classNames(
              child && child.props && child.props.className,
              className,
            );

            if (childrenClassName) {
              newChildProps.className = childrenClassName;
            }

            var cloneProps = _objectSpread({}, newChildProps);

            if (supportRef(child)) {
              cloneProps.ref = composeRef(this.triggerRef, child.ref);
            }

            var trigger = /*#__PURE__*/ cloneElement(child, cloneProps);
            var portal; // prevent unmounting after it's rendered

            if (popupVisible || this.popupRef.current || forceRender) {
              portal = /*#__PURE__*/ createElement(
                PortalComponent,
                {
                  key: 'portal',
                  getContainer: this.getContainer,
                  didUpdate: this.handlePortalUpdate,
                },
                this.getComponent(),
              );
            }

            if (!popupVisible && autoDestroy) {
              portal = null;
            }

            return /*#__PURE__*/ createElement(
              TriggerContext.Provider,
              {
                value: this.triggerContextValue,
              },
              trigger,
              portal,
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(_ref, prevState) {
            var popupVisible = _ref.popupVisible;
            var newState = {};

            if (
              popupVisible !== undefined &&
              prevState.popupVisible !== popupVisible
            ) {
              newState.popupVisible = popupVisible;
              newState.prevPopupVisible = prevState.popupVisible;
            }

            return newState;
          },
        },
      ],
    );

    return Trigger;
  })(Component);

  Trigger.contextType = TriggerContext;
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false,
  };
  return Trigger;
}
var Trigger = generateTrigger(Portal);

var IconContext = /*#__PURE__*/ createContext({});

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = '100%';
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  // Automatically convert percentage into number
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }
  // Convert into [0, 1] range if it isn't already
  if (max === 360) {
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
  } else {
    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = (n % max) / parseFloat(String(max));
  }
  return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
  if (n <= 1) {
    return Number(n) * 100 + '%';
  }
  return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
  return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255,
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    // achromatic
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
  ];
  // Return a 3 character hex if possible
  if (
    allow3Char &&
    hex[0].startsWith(hex[0].charAt(1)) &&
    hex[1].startsWith(hex[1].charAt(1)) &&
    hex[2].startsWith(hex[2].charAt(1))
  ) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === 'string') {
    color = stringInputToObject(color);
  }
  if (typeof color === 'object') {
    if (
      isValidCSSUnit(color.r) &&
      isValidCSSUnit(color.g) &&
      isValidCSSUnit(color.b)
    ) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.v)
    ) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.l)
    ) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = 'hsl';
    }
    if (Object.prototype.hasOwnProperty.call(color, 'a')) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a,
  };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')';
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 =
  '[\\s|\\(]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')\\s*\\)?';
var PERMISSIVE_MATCH4 =
  '[\\s|\\(]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')\\s*\\)?';
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
  rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
  hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
  hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
  hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
  hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === 'transparent') {
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  }
  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? 'name' : 'hex8',
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? 'name' : 'hex',
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? 'name' : 'hex8',
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? 'name' : 'hex',
    };
  }
  return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [
  {
    index: 7,
    opacity: 0.15,
  },
  {
    index: 6,
    opacity: 0.25,
  },
  {
    index: 5,
    opacity: 0.3,
  },
  {
    index: 5,
    opacity: 0.45,
  },
  {
    index: 5,
    opacity: 0.65,
  },
  {
    index: 5,
    opacity: 0.85,
  },
  {
    index: 4,
    opacity: 0.9,
  },
  {
    index: 3,
    opacity: 0.95,
  },
  {
    index: 2,
    opacity: 0.97,
  },
  {
    index: 1,
    opacity: 0.98,
  },
]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v,
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`

function toHex(_ref2) {
  var r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return '#'.concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.

function mix$1(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light
      ? Math.round(hsv.h) - hueStep * i
      : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light
      ? Math.round(hsv.h) + hueStep * i
      : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正

  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间

  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true),
      }),
    );
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(
      inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i),
      }),
    );

    patterns.push(_colorString);
  } // dark theme patterns

  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
        opacity = _ref3.opacity;
      var darkColorString = toHex(
        mix$1(
          inputToRGB(opts.backgroundColor || '#141414'),
          inputToRGB(patterns[index]),
          opacity * 100,
        ),
      );
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666',
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414',
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.error('Warning: '.concat(message));
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
/* eslint-enable */

var MARK_KEY = 'rc-util-key';

function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function injectCSS(css) {
  var _option$csp;

  var option =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!canUseDom()) {
    return null;
  }

  var styleNode = document.createElement('style');

  if (
    (_option$csp = option.csp) === null || _option$csp === void 0
      ? void 0
      : _option$csp.nonce
  ) {
    var _option$csp2;

    styleNode.nonce =
      (_option$csp2 = option.csp) === null || _option$csp2 === void 0
        ? void 0
        : _option$csp2.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;

  if (option.prepend && container.prepend) {
    // Use `prepend` first
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    // Fallback to `insertBefore` like IE not support `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}
var containerCache = new Map();
function updateCSS(css, key) {
  var option =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option); // Get real parent

  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }

  var existNode = Array.from(containerCache.get(container).children).find(
    function (node) {
      return node.tagName === 'STYLE' && node[MARK_KEY] === key;
    },
  );

  if (existNode) {
    var _option$csp3, _option$csp4;

    if (
      ((_option$csp3 = option.csp) === null || _option$csp3 === void 0
        ? void 0
        : _option$csp3.nonce) &&
      existNode.nonce !==
        ((_option$csp4 = option.csp) === null || _option$csp4 === void 0
          ? void 0
          : _option$csp4.nonce)
    ) {
      var _option$csp5;

      existNode.nonce =
        (_option$csp5 = option.csp) === null || _option$csp5 === void 0
          ? void 0
          : _option$csp5.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode[MARK_KEY] = key;
  return newNode;
}

function warning$1(valid, message) {
  warningOnce(valid, '[@ant-design/icons] '.concat(message));
}
function isIconDefinition(target) {
  return (
    _typeof$1(target) === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (_typeof$1(target.icon) === 'object' || typeof target.icon === 'function')
  );
}
function normalizeAttrs() {
  var attrs =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate$1(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/ React.createElement(
      node.tag,
      _objectSpread(
        {
          key: key,
        },
        normalizeAttrs(node.attrs),
      ),
      (node.children || []).map(function (child, index) {
        return generate$1(
          child,
          ''.concat(key, '-').concat(node.tag, '-').concat(index),
        );
      }),
    );
  }

  return /*#__PURE__*/ React.createElement(
    node.tag,
    _objectSpread(
      _objectSpread(
        {
          key: key,
        },
        normalizeAttrs(node.attrs),
      ),
      rootProps,
    ),
    (node.children || []).map(function (child, index) {
      return generate$1(
        child,
        ''.concat(key, '-').concat(node.tag, '-').concat(index),
      );
    }),
  );
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles =
  '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n';
var useInsertStyles = function useInsertStyles() {
  var styleStr =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : iconStyles;

  var _useContext = useContext(IconContext),
    csp = _useContext.csp;

  useEffect(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp,
    });
  }, []);
};

var _excluded$1 = [
  'icon',
  'className',
  'onClick',
  'style',
  'primaryColor',
  'secondaryColor',
];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor =
    secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _objectWithoutProperties$1(props, _excluded$1);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }

  useInsertStyles();
  warning$1(
    isIconDefinition(icon),
    'icon should be icon definiton, but got '.concat(icon),
  );

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread(
      _objectSpread({}, target),
      {},
      {
        icon: target.icon(colors.primaryColor, colors.secondaryColor),
      },
    );
  }

  return generate$1(
    target.icon,
    'svg-'.concat(target.name),
    _objectSpread(
      {
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
      },
      restProps,
    ),
  );
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$2 = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/ forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties$1(props, _excluded$2);

  var _React$useContext = useContext(IconContext),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls =
      _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classNames(
    prefixCls,
    ((_classNames = {}),
    _defineProperty$2(
      _classNames,
      ''.concat(prefixCls, '-').concat(icon.name),
      !!icon.name,
    ),
    _defineProperty$2(
      _classNames,
      ''.concat(prefixCls, '-spin'),
      !!spin || icon.name === 'loading',
    ),
    _classNames),
    className,
  );
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate
    ? {
        msTransform: 'rotate('.concat(rotate, 'deg)'),
        transform: 'rotate('.concat(rotate, 'deg)'),
      }
    : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/ createElement(
    'span',
    _objectSpread(
      _objectSpread(
        {
          role: 'img',
          'aria-label': icon.name,
        },
        restProps,
      ),
      {},
      {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString,
      },
    ),
    /*#__PURE__*/ createElement(IconBase, {
      icon: icon,
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      style: svgStyle,
    }),
  );
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

// This icon file is generated automatically.
var ClockCircleOutlined = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
        },
      },
    ],
  },
  name: 'clock-circle',
  theme: 'outlined',
};

var ClockCircleOutlined$1 = function ClockCircleOutlined$1(props, ref) {
  return /*#__PURE__*/ createElement(
    Icon,
    _objectSpread(
      _objectSpread({}, props),
      {},
      {
        ref: ref,
        icon: ClockCircleOutlined,
      },
    ),
  );
};

ClockCircleOutlined$1.displayName = 'ClockCircleOutlined';
var ClockCircleOutlined$2 = /*#__PURE__*/ forwardRef(ClockCircleOutlined$1);

var css_248z$1 =
  '.TimePicker {\n  display: inline-block;\n  position: relative;\n}\n.TimePicker-icon {\n  position: absolute;\n  font-size: 16;\n  right: 10px;\n  top: calc(50% - 8px);\n  opacity: 0.4;\n}\n.rc-trigger-popup {\n  display: inline-block;\n}\n.rc-trigger-popup-hidden {\n  display: none;\n}\n.TimePicker-dropdown {\n  background-color: #fff;\n  border: 1px solid #eee;\n  position: absolute;\n  left: 50%;\n  width: 142px;\n  z-index: 2;\n}\n.TimePicker-dropdown ul {\n  display: inline-block;\n  height: 150px;\n  width: 70px;\n  overflow-y: auto;\n  padding: 0;\n  margin-bottom: 0;\n}\n.TimePicker-dropdown ul .disabledTime {\n  opacity: 0.3;\n  cursor: no-drop;\n}\n.TimePicker-dropdown ul li {\n  text-align: center;\n  padding: 0 15px;\n}\n.TimePicker-dropdown ul li:hover {\n  background-color: #ccc;\n}\n.TimePicker-dropdown .selectTime {\n  background-color: #e6f8ff;\n}\n.TimePicker-dropdown-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n.TimePicker-dropdown ::-webkit-scrollbar {\n  width: 6px;\n  background-color: #eee;\n}\n.TimePicker-dropdown ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #bdbdbd;\n}\n';
styleInject(css_248z$1);

var MinuteList60 = function MinuteList60(props) {
  var _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    hour = props.hour;

  if (hour === '24') {
    return ['00'];
  }

  var i = 0;
  var result = [];

  while (i < 60) {
    result.push(''.concat(i > 9 ? '' : '0').concat(i));
    i += Math.round(step);
  }

  if (hour === '00') {
    result.shift();
  } // console.log('minuteList60:', result);

  return result;
};
var HourList24 = function HourList24(props) {
  var _props$step2 = props.step,
    step = _props$step2 === void 0 ? 1 : _props$step2;
  var hourList = []; // 时间列表

  var i = 0;

  while (i < 25) {
    hourList.push(''.concat(i > 9 ? '' : '0').concat(i));
    i += Math.round(step);
  } // console.log('hourList:', hourList);

  return hourList;
};

var _excluded$3 = [
  'width',
  'value',
  'onChange',
  'disabled',
  'minuteStep',
  'hourStep',
  'disabledHours',
  'disabledMinutes',
  'className',
];
var format = 'HH:mm';

var TimePicker = function TimePicker(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 120 : _props$width,
    _props$value = props.value,
    value = _props$value === void 0 ? null : _props$value,
    onChange = props.onChange,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$minuteStep = props.minuteStep,
    minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
    _props$hourStep = props.hourStep,
    hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
    disabledHours = props.disabledHours,
    disabledMinutes = props.disabledMinutes,
    className = props.className,
    rest = _objectWithoutProperties(props, _excluded$3);

  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    hourValue = _useState2[0],
    setHourValue = _useState2[1];

  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    minuteValue = _useState4[0],
    setMinuteValue = _useState4[1];

  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isvisible = _useState6[0],
    setIsvisible = _useState6[1]; // 向外部传递值

  var ChangeData = function ChangeData() {
    if (onChange !== undefined && hourValue !== null && minuteValue !== null) {
      onChange(
        moment(''.concat(hourValue, ':').concat(minuteValue), 'HH:mm'),
        ''.concat(hourValue, ':').concat(minuteValue),
      );
    }
  }; // 设置内部的值

  var AssignmentData = function AssignmentData(accValue) {
    if (accValue !== null) {
      var _moment, _moment2;

      setHourValue(
        (_moment = moment(accValue, format)) === null || _moment === void 0
          ? void 0
          : _moment.format('HH'),
      );
      setMinuteValue(
        (_moment2 = moment(accValue, format)) === null || _moment2 === void 0
          ? void 0
          : _moment2.format('mm'),
      );
    }
  };

  useEffect(
    function () {
      // 传入数据进行处理
      AssignmentData(value);
    },
    [value],
  );
  var MinuteList = useMemo(
    function () {
      // 分钟列表
      return MinuteList60({
        step: minuteStep,
        hour: hourValue,
      });
    },
    [hourValue],
  );
  var hourList = useMemo(
    function () {
      // 小时列表
      return HourList24({
        step: hourStep,
      });
    },
    [hourStep],
  );
  var disabledHoursList = useMemo(
    function () {
      if (!isvisible) {
        return [];
      }

      if (disabledHours && Array.isArray(disabledHours())) {
        return disabledHours().reduce(function (acc, item) {
          return acc.concat([''.concat(item > 10 ? '' : 0).concat(item)]);
        }, []);
      }

      return [];
    },
    [isvisible],
  );
  var disabledMinutesList = useMemo(
    function () {
      if (!isvisible) {
        return [];
      }

      if (
        disabledMinutes &&
        Array.isArray(disabledMinutes(Number(hourValue)))
      ) {
        return disabledMinutes(Number(hourValue)).reduce(function (acc, item) {
          return acc.concat([''.concat(item > 10 ? '' : 0).concat(item)]);
        }, []);
      }

      return [];
    },
    [isvisible, hourValue],
  ); // console.log(
  //   '外面传进来的值：',
  //   value,
  //   'disabledHoursList: ',
  //   disabledHoursList,
  //   'disabledMinutesList:',
  //   disabledMinutesList,
  // );

  var PopFunction = function PopFunction() {
    // 弹出组件
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'TimePicker-dropdown',
      },
      !disabled &&
        /*#__PURE__*/ React.createElement(
          Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            'ul',
            null,
            hourList.map(function (item) {
              var currentClassName = '';

              if (hourValue === item) {
                currentClassName = 'selectTime';
              }

              if (
                disabledHoursList.findIndex(function (p) {
                  return p === item;
                }) > -1
              ) {
                currentClassName = 'disabledTime';
              }

              return /*#__PURE__*/ React.createElement(
                'li',
                {
                  key: item,
                  className: currentClassName,
                  onClick: function onClick() {
                    if (currentClassName === '') {
                      setHourValue(item); // if (disabledMinutes) {
                      //   disabledMinutes(Number(item));
                      // }
                    }
                  },
                },
                /*#__PURE__*/ React.createElement('div', null, item),
              );
            }),
          ),
          /*#__PURE__*/ React.createElement(
            'ul',
            null,
            MinuteList.map(function (item) {
              var currentClassName = '';

              if (minuteValue === item) {
                currentClassName = 'selectTime';
              }

              if (
                disabledMinutesList.findIndex(function (p) {
                  return p === item;
                }) > -1
              ) {
                currentClassName = 'disabledTime';
              }

              return /*#__PURE__*/ React.createElement(
                'li',
                {
                  key: item,
                  className: currentClassName,
                  onClick: function onClick() {
                    if (currentClassName === '') {
                      setMinuteValue(item);
                    }
                  },
                },
                /*#__PURE__*/ React.createElement('div', null, item),
              );
            }),
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'TimePicker-dropdown-footer',
            },
            /*#__PURE__*/ React.createElement(
              Button,
              {
                type: 'link',
                onClick: function onClick() {
                  console.log('此时');
                },
              },
              '\u6B64\u65F6',
            ),
            /*#__PURE__*/ React.createElement(
              Button,
              {
                type: 'primary',
                onClick: function onClick() {
                  ChangeData();
                  setIsvisible(false);
                },
              },
              '\u786E\u5B9A',
            ),
          ),
        ),
    );
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: className,
      style: {
        display: 'inline-block',
      },
    },
    /*#__PURE__*/ React.createElement(
      Trigger,
      {
        action: ['click'],
        popupPlacement: 'bottom',
        popup: /*#__PURE__*/ React.createElement(PopFunction, null),
        popupAlign: {
          points: ['tl', 'bl'],
          offset: [0, 3],
        },
        maskClosable: true,
        popupVisible: isvisible,
        onPopupVisibleChange: function onPopupVisibleChange(visible) {
          !disabled && setIsvisible(visible);
          AssignmentData(value);
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'TimePicker',
        },
        /*#__PURE__*/ React.createElement(
          Input,
          _objectSpread2(
            _objectSpread2({}, rest),
            {},
            {
              style: {
                width: width,
                caretColor: 'transparent',
              },
              disabled: disabled,
              placeholder:
                hourValue === null || minuteValue === null ? '请选择时间' : '',
              value:
                hourValue === null || minuteValue === null
                  ? undefined
                  : ''.concat(hourValue, ':').concat(minuteValue),
            },
          ),
        ),
        /*#__PURE__*/ React.createElement(ClockCircleOutlined$2, {
          className: 'TimePicker-icon',
        }),
      ),
    ),
  );
};

export { index as DatePickerQuick, TimePicker };
