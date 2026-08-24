/* @ds-bundle: {"format":4,"namespace":"MilieNaturelleDesignSystem_ec0568","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardMedia","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"9aff5087728d","components/core/Badge.jsx":"aa73a21e651f","components/core/Button.jsx":"353e50d85198","components/core/Card.jsx":"fa8806e8272b","components/core/Divider.jsx":"c451e55ea481","components/core/IconButton.jsx":"b2e68748a97d","components/core/Tag.jsx":"39244338607b","components/feedback/Alert.jsx":"05c27fb11283","components/forms/Checkbox.jsx":"d73889e329cc","components/forms/Input.jsx":"2d86399e6366","components/forms/Select.jsx":"5ce2473daaf0","components/forms/Switch.jsx":"74b26bd2a0e2","components/navigation/Tabs.jsx":"06d9477cbc8c","ui_kits/practice/App.jsx":"603a15fbf35f","ui_kits/practice/BookingModal.jsx":"0ffb3d8a22b3","ui_kits/practice/Footer.jsx":"880be2039c0f","ui_kits/practice/Header.jsx":"fe4cb3cfced6","ui_kits/practice/Home.jsx":"faf9dd86817d","ui_kits/practice/OfferCard.jsx":"449ff0f2d476","ui_kits/practice/OfferPage.jsx":"2cedd3a1b0f7","ui_kits/practice/data.js":"2e5c009010a6","ui_kits/practice/icons.jsx":"faa659b2b67d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MilieNaturelleDesignSystem_ec0568 = window.MilieNaturelleDesignSystem_ec0568 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Avatar. Image or serif monogram. */
function Avatar({
  src,
  alt = '',
  initials,
  size = 'md',
  square = false,
  className = '',
  ...rest
}) {
  const classes = ['en-avatar', size !== 'md' ? `en-avatar--${size}` : '', square ? 'en-avatar--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : (initials || '').slice(0, 2));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Badge. Small uppercase status / category marker. */
function Badge({
  children,
  variant = 'sage',
  className = '',
  ...rest
}) {
  const classes = ['en-badge', variant !== 'sage' ? `en-badge--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Émilie Naturelle — Button
 * Uppercase, wide-tracked label on a calm sage fill by default.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  const Tag = as;
  const classes = ['en-btn', variant !== 'primary' ? `en-btn--${variant}` : '', size !== 'md' ? `en-btn--${size}` : '', block ? 'en-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "en-btn__icon"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "en-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Card. Container for products, articles, panels. */
function Card({
  children,
  variant = 'bordered',
  interactive = false,
  as = 'div',
  className = '',
  ...rest
}) {
  const Tag = as;
  const classes = ['en-card', variant === 'raised' ? 'en-card--raised' : '', interactive ? 'en-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), children);
}

/** Full-bleed media region (4:5) for a Card. */
function CardMedia({
  src,
  alt = '',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['en-card__media', className].filter(Boolean).join(' ')
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : children);
}

/** Padded content region for a Card. */
function CardBody({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['en-card__body', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardMedia, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Divider. Plain rule or centered label rule. */
function Divider({
  label,
  className = '',
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ['en-divider--label', className].filter(Boolean).join(' '),
      role: "separator"
    }, rest), label);
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['en-divider', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Émilie Naturelle — IconButton
 * Square, quiet icon-only control for toolbars and card actions.
 */
function IconButton({
  children,
  label,
  variant = 'plain',
  size = 'md',
  className = '',
  ...rest
}) {
  const classes = ['en-icon-btn', variant === 'outline' ? 'en-icon-btn--outline' : '', size === 'sm' ? 'en-icon-btn--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Tag / Chip. Pill for filters and selections. */
function Tag({
  children,
  selected = false,
  onClose,
  as = 'span',
  className = '',
  ...rest
}) {
  const interactive = as === 'button' || !!rest.onClick;
  const Tag_ = as;
  const classes = ['en-tag', interactive ? 'en-tag--button' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: classes,
    "data-selected": selected ? 'true' : 'false'
  }, rest), children, onClose ? /*#__PURE__*/React.createElement("span", {
    className: "en-tag__close",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onClose(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 12l2 2 4-4"
  }),
  error: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  })
};

/** Émilie Naturelle — Alert. Inline message banner. */
function Alert({
  variant = 'info',
  title,
  children,
  className = '',
  ...rest
}) {
  const tone = variant === 'info' ? '' : `en-alert--${variant}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['en-alert', tone, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "en-alert__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[variant] || ICONS.info)), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    className: "en-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", null, children) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Checkbox & Radio. Set type="radio" for a radio. */
function Checkbox({
  label,
  type = 'checkbox',
  className = '',
  ...rest
}) {
  const isRadio = type === 'radio';
  return /*#__PURE__*/React.createElement("label", {
    className: ['en-check', isRadio ? 'en-check--radio' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "en-check__box"
  }, isRadio ? /*#__PURE__*/React.createElement("span", {
    className: "en-check__dot"
  }) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label ? /*#__PURE__*/React.createElement("span", {
    className: "en-check__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Field. Label + control + help/error wrapper. */
function Field({
  label,
  required = false,
  help,
  error,
  htmlFor,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['en-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "en-label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "en-label__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "en-help en-help--error"
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    className: "en-help"
  }, help) : null);
}

/** Émilie Naturelle — Input. Text-style field. */
function Input({
  invalid = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ['en-input', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
}

/** Émilie Naturelle — Textarea. */
function Textarea({
  invalid = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ['en-textarea', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Field, Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Select. Native select with custom chevron. */
function Select({
  invalid = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "en-select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ['en-select__control', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    className: "en-select__chevron",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Émilie Naturelle — Switch. Toggle for settings & preferences. */
function Switch({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['en-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "en-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "en-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "en-switch__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Émilie Naturelle — Tabs. Underlined tab strip with panels. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  const current = tabs.find(t => t.id === active);
  return /*#__PURE__*/React.createElement("div", {
    className: ['en-tabs', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-tabs__list",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    className: "en-tabs__tab",
    "aria-selected": t.id === active,
    onClick: () => select(t.id)
  }, t.label))), current && current.content !== undefined ? /*#__PURE__*/React.createElement("div", {
    className: "en-tabs__panel",
    role: "tabpanel"
  }, current.content) : null);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/App.jsx
try { (() => {
/* Émilie Naturelle — App shell (routing + booking modal). */
function App() {
  const [route, setRoute] = React.useState('accueil');
  const [booking, setBooking] = React.useState(false);
  const navigate = r => {
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  const openBooking = () => setBooking(true);
  const Header = window.ENHeader,
    Footer = window.ENFooter;
  const Home = window.ENHome,
    OfferPage = window.ENOfferPage,
    BookingModal = window.ENBookingModal;
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    onNavigate: navigate,
    onBook: openBooking
  }), route === 'accueil' && /*#__PURE__*/React.createElement(Home, {
    onNavigate: navigate,
    onBook: openBooking
  }), route === 'offres' && /*#__PURE__*/React.createElement(OfferPage, {
    offerId: "consultation",
    onBook: openBooking,
    onNavigate: navigate
  }), route === 'coaching' && /*#__PURE__*/React.createElement(OfferPage, {
    offerId: "coaching",
    onBook: openBooking,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: navigate,
    onBook: openBooking
  }), /*#__PURE__*/React.createElement(BookingModal, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
window.ENApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/BookingModal.jsx
try { (() => {
/* Émilie Naturelle — Booking modal. */
function BookingModal({
  open,
  onClose
}) {
  const {
    Button,
    IconButton,
    Field,
    Input,
    Select
  } = window.MilieNaturelleDesignSystem_ec0568;
  const {
    Close,
    Check,
    Calendar
  } = window.ENIcons;
  const [slot, setSlot] = React.useState(null);
  const [done, setDone] = React.useState(false);
  const slots = ['Lun 9 h', 'Mar 13 h', 'Mer 10 h', 'Jeu 15 h', 'Ven 11 h'];
  const reset = () => {
    setDone(false);
    setSlot(null);
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-scrim",
    "data-open": open,
    onClick: reset
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Rendez-vous"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 0'
    }
  }, done ? 'C’est confirmé' : 'Réserve ta séance')), /*#__PURE__*/React.createElement(IconButton, {
    label: "Fermer",
    onClick: reset
  }, /*#__PURE__*/React.createElement(Close, null))), done ? /*#__PURE__*/React.createElement("div", {
    className: "modal__done"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 44
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      color: 'var(--ink-800)',
      margin: 'var(--space-3) 0 var(--space-1)'
    }
  }, "\xC0 tr\xE8s bient\xF4t !"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Tu recevras un courriel de confirmation avec tous les d\xE9tails. \uD83C\uDF3F"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: reset
  }, "Fermer"))) : /*#__PURE__*/React.createElement("form", {
    className: "modal__body",
    onSubmit: e => {
      e.preventDefault();
      if (slot) setDone(true);
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Service",
    htmlFor: "bk-s"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "bk-s",
    defaultValue: "consultation"
  }, /*#__PURE__*/React.createElement("option", {
    value: "consultation"
  }, "Accompagnement complet \u2014 550 $"), /*#__PURE__*/React.createElement("option", {
    value: "coaching"
  }, "Coaching individuel"), /*#__PURE__*/React.createElement("option", {
    value: "cycles"
  }, "Programme Cycles \u2014 29,95 $"))), /*#__PURE__*/React.createElement("div", {
    className: "modal__row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Pr\xE9nom",
    htmlFor: "bk-f"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "bk-f",
    placeholder: "Pr\xE9nom",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Courriel",
    htmlFor: "bk-e"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "bk-e",
    type: "email",
    placeholder: "toi@exemple.com",
    required: true
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Choisis un cr\xE9neau"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__slots"
  }, slots.map(s => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: s,
    className: "slot",
    "data-active": slot === s,
    onClick: () => setSlot(s)
  }, s)))), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true,
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Calendar, {
      size: 16
    }),
    "aria-disabled": !slot
  }, "Confirmer le rendez-vous"))));
}
window.ENBookingModal = BookingModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/BookingModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/Footer.jsx
try { (() => {
/* Émilie Naturelle — Footer. */
function Footer({
  onNavigate,
  onBook
}) {
  const {
    Button
  } = window.MilieNaturelleDesignSystem_ec0568;
  const D = window.EN_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ftr__logo",
    onClick: () => onNavigate('accueil'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/emilie-naturelle-wordmark-charcoal.png",
    alt: "\xC9milie Naturelle"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "ftr__links"
  }, D.nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNavigate(id)
  }, label)), /*#__PURE__*/React.createElement("a", {
    onClick: onBook
  }, "Prendre rendez-vous"))), /*#__PURE__*/React.createElement("div", {
    className: "ftr__base"
  }, "\xA9 2026 \xC9milie Naturelle \xB7 Naturopathe certifi\xE9e & coach sant\xE9 \xB7 Qu\xE9bec \xB7 Re\xE7us pour assurances disponibles")));
}
window.ENFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/Header.jsx
try { (() => {
/* Émilie Naturelle — Header. */
function Header({
  route,
  onNavigate,
  onBook
}) {
  const {
    Button,
    IconButton
  } = window.MilieNaturelleDesignSystem_ec0568;
  const {
    Instagram,
    Facebook,
    Calendar
  } = window.ENIcons;
  const D = window.EN_DATA;
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr__bar"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hdr__logo",
    onClick: () => onNavigate('accueil')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/emilie-naturelle-wordmark-charcoal.png",
    alt: "\xC9milie Naturelle"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hdr__nav"
  }, D.nav.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: "hdr__link",
    "data-active": route === id,
    onClick: () => onNavigate(id)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hdr__social"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Instagram",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Instagram, null)), /*#__PURE__*/React.createElement(IconButton, {
    label: "Facebook",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Facebook, null))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Calendar, {
      size: 16
    }),
    onClick: onBook
  }, "Prendre rendez-vous"))));
}
window.ENHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/Home.jsx
try { (() => {
/* Émilie Naturelle — Home / landing page. */
function Testimonials() {
  const {
    Avatar
  } = window.MilieNaturelleDesignSystem_ec0568;
  const {
    Star
  } = window.ENIcons;
  const D = window.EN_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "tgrid"
  }, D.testimonials.map((t, i) => /*#__PURE__*/React.createElement("figure", {
    className: "tcard",
    key: i,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tcard__stars"
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Star, {
    key: s,
    size: 15
  }))), /*#__PURE__*/React.createElement("blockquote", {
    className: "tcard__quote"
  }, "\xAB ", t.quote, " \xBB"), /*#__PURE__*/React.createElement("figcaption", {
    className: "tcard__who"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: t.initials,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, t.name)))));
}
function Home({
  onNavigate,
  onBook
}) {
  const {
    Button,
    Divider
  } = window.MilieNaturelleDesignSystem_ec0568;
  const {
    Arrow,
    Check,
    Leaf,
    Shield
  } = window.ENIcons;
  const OfferCard = window.ENOfferCard;
  const D = window.EN_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Soin naturel \xB7 Qu\xE9bec"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Une approche simple, naturelle & ", /*#__PURE__*/React.createElement("em", null, "puissante.")), /*#__PURE__*/React.createElement("div", {
    className: "hero__roles"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__role"
  }, "Naturopathe certifi\xE9e"), /*#__PURE__*/React.createElement("span", {
    className: "hero__role"
  }, "Coach sant\xE9")), /*#__PURE__*/React.createElement("p", {
    className: "en-lead",
    style: {
      maxWidth: '40ch',
      marginBottom: 'var(--space-6)'
    }
  }, "Sortir du mode survie et retrouver ta vitalit\xE9 \u2014 par l\u2019alimentation, le rythme circadien, les hormones et les min\xE9raux."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "Prends rendez-vous"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    iconRight: /*#__PURE__*/React.createElement(Arrow, {
      size: 16
    }),
    onClick: () => onNavigate('offres')
  }, "Voir les offres"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: D.img.portrait,
    alt: "\xC9milie Gendron, naturopathe"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--green"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Accompagnement"), /*#__PURE__*/React.createElement("h2", null, "Deux fa\xE7ons de cheminer ensemble")), /*#__PURE__*/React.createElement("div", {
    className: "offers"
  }, D.offers.map(o => /*#__PURE__*/React.createElement(OfferCard, {
    key: o.id,
    offer: o,
    onBook: onBook
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: D.img.plant,
    alt: "\xC9milie"
  })), /*#__PURE__*/React.createElement("div", {
    className: "split__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Qui suis-je"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 4px'
    }
  }, "\xC9milie Gendron"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      color: 'var(--ink-800)',
      margin: '0 0 var(--space-4)'
    }
  }, "Naturopathe dipl\xF4m\xE9e depuis 2021"), /*#__PURE__*/React.createElement("p", null, "Maman, entrepreneure et naturopathe. Ancienne athl\xE8te de l\u2019\xE9quipe nationale canadienne de handball, expatri\xE9e pendant dix ans entre Londres, Paris, la Catalogne et l\u2019Am\xE9rique centrale."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Mon parcours m\u2019a d\u2019abord reconnect\xE9e \xE0 la nature \u2014 puis \xE0 l\u2019\xE9quilibre dont nous avons besoin \xE0 l\u2019int\xE9rieur de nous."), /*#__PURE__*/React.createElement("ul", {
    className: "bio-aspire"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Leaf, {
    size: 16
  })), " D\xE9montrer la puissance de la simplicit\xE9."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Leaf, {
    size: 16
  })), " Inspirer les gens \xE0 reprendre leur pouvoir personnel."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Leaf, {
    size: 16
  })), " Soutenir de saines habitudes, avec douceur.")))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--lemon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Mes piliers"), /*#__PURE__*/React.createElement("h2", null, "Les fondations de la transformation")), /*#__PURE__*/React.createElement("div", {
    className: "piliers"
  }, D.piliers.map(p => /*#__PURE__*/React.createElement("div", {
    className: "pilier",
    key: p.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "pilier__n"
  }, p.n), /*#__PURE__*/React.createElement("h4", null, p.t), /*#__PURE__*/React.createElement("p", null, p.d)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Ton accompagnement"), /*#__PURE__*/React.createElement("h2", null, "Ce que tu recevras")), /*#__PURE__*/React.createElement("ul", {
    className: "checklist"
  }, D.receive.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 20
  })), r))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--green"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Commentaires"), /*#__PURE__*/React.createElement("h2", null, "Les mots de mes client\xB7e\xB7s")), /*#__PURE__*/React.createElement(Testimonials, null))), /*#__PURE__*/React.createElement("section", {
    className: "section section--navy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cycles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cycles__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: D.img.cycles,
    alt: "Programme Cycles"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-300)'
    }
  }, "Programme en ligne \xB7 pour les femmes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 6px'
    }
  }, D.cycles.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.8)',
      maxWidth: '46ch'
    }
  }, D.cycles.sub), /*#__PURE__*/React.createElement("ul", {
    className: "cycles__feat"
  }, D.cycles.features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 18
  })), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cycles__price"
  }, D.cycles.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,.65)'
    }
  }, D.cycles.priceNote)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Acc\xE9der au programme"))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Demande d\u2019information"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 var(--space-4)'
    }
  }, "On en parle ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '40ch'
    }
  }, "Pour prendre rendez-vous ou pour toute autre question, \xE9cris-moi \u2014 je te r\xE9ponds avec plaisir."), /*#__PURE__*/React.createElement(ContactForm, null)), /*#__PURE__*/React.createElement("div", {
    className: "contact__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: D.img.analysis,
    alt: "Analyse de r\xE9sultats"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(Shield, {
    size: 16
  }), " Avis de non-responsabilit\xE9 m\xE9dicale"), /*#__PURE__*/React.createElement("p", null, "Les contenus, conseils et analyses propos\xE9s (incluant le HTMA) ont un but \xE9ducatif et visent \xE0 soutenir le mieux-\xEAtre global par des moyens naturels."), /*#__PURE__*/React.createElement("p", null, "Je ne suis pas m\xE9decin. Conform\xE9ment \xE0 la loi, je ne pose aucun diagnostic, ne prescris aucun m\xE9dicament et ne traite aucune maladie. Ces recommandations ne remplacent pas l\u2019avis d\u2019un professionnel de la sant\xE9 qualifi\xE9."))), /*#__PURE__*/React.createElement("section", {
    className: "section section--lemon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap quote"
  }, /*#__PURE__*/React.createElement("p", null, "\xAB ", D.quote, " \xBB"), /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)',
      marginTop: 'var(--space-4)'
    }
  }, "\xC9milie Naturelle"))));
}
function ContactForm() {
  const {
    Field,
    Input,
    Textarea,
    Button
  } = window.MilieNaturelleDesignSystem_ec0568;
  const [sent, setSent] = React.useState(false);
  if (sent) return /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--sage-700)',
      fontFamily: 'var(--font-sans)',
      marginTop: 'var(--space-5)'
    }
  }, "Merci \u2014 je te reviens sous peu. \uD83C\uDF3F");
  return /*#__PURE__*/React.createElement("form", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 420
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nom",
    htmlFor: "cn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cn",
    placeholder: "Ton nom",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Courriel",
    htmlFor: "ce"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ce",
    type: "email",
    placeholder: "toi@exemple.com",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    htmlFor: "cm"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "cm",
    placeholder: "Comment puis-je t\u2019aider ?"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Envoyer"));
}
window.ENHome = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/OfferCard.jsx
try { (() => {
/* Émilie Naturelle — Offer card (consultation / coaching). */
function OfferCard({
  offer,
  onBook
}) {
  const {
    Card,
    CardBody,
    Button,
    Badge
  } = window.MilieNaturelleDesignSystem_ec0568;
  const {
    Check
  } = window.ENIcons;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    className: "offer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, offer.kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '8px 0 6px'
    }
  }, offer.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)'
    }
  }, offer.tag), /*#__PURE__*/React.createElement("div", {
    className: "offer__price"
  }, offer.price), /*#__PURE__*/React.createElement("div", {
    className: "offer__price-note"
  }, offer.priceNote), /*#__PURE__*/React.createElement("ul", {
    className: "offer__list"
  }, offer.includes.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 18
  })), it))), /*#__PURE__*/React.createElement("div", {
    className: "offer__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: onBook
  }, "R\xE9server")));
}
window.ENOfferCard = OfferCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/OfferCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/OfferPage.jsx
try { (() => {
/* Émilie Naturelle — Offer detail page (consultation or coaching). */
function OfferPage({
  offerId,
  onBook,
  onNavigate
}) {
  const {
    Button,
    Divider,
    Badge
  } = window.MilieNaturelleDesignSystem_ec0568;
  const {
    Check,
    Calendar,
    Arrow
  } = window.ENIcons;
  const D = window.EN_DATA;
  const offer = D.offers.find(o => o.id === offerId) || D.offers[0];
  const img = offerId === 'coaching' ? D.img.plant : D.img.offer;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero",
    style: {
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, offer.kicker), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title",
    style: {
      fontSize: 'clamp(2.5rem,4.4vw,3.75rem)'
    }
  }, offer.title), /*#__PURE__*/React.createElement("p", {
    className: "en-lead",
    style: {
      maxWidth: '42ch',
      marginBottom: 'var(--space-5)'
    }
  }, offer.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "offer__price",
    style: {
      marginTop: 0
    }
  }, offer.price), /*#__PURE__*/React.createElement("span", {
    className: "offer__price-note"
  }, offer.priceNote)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Calendar, {
      size: 16
    }),
    onClick: onBook
  }, "R\xE9server une s\xE9ance"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNavigate(offerId === 'coaching' ? 'offres' : 'coaching'),
    iconRight: /*#__PURE__*/React.createElement(Arrow, {
      size: 16
    })
  }, offerId === 'coaching' ? 'Voir la consultation' : 'Voir le coaching'))), /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: offer.title
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--green",
    style: {
      paddingBlock: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split",
    style: {
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Inclus"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 var(--space-5)'
    }
  }, "Ce qui fait partie de l\u2019offre"), /*#__PURE__*/React.createElement("ul", {
    className: "offer__list",
    style: {
      margin: 0
    }
  }, offer.includes.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 18
  })), it)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "en-eyebrow",
    style: {
      color: 'var(--sage-700)'
    }
  }, "Ton accompagnement"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 var(--space-5)'
    }
  }, "Ce que tu recevras"), /*#__PURE__*/React.createElement("ul", {
    className: "offer__list",
    style: {
      margin: 0
    }
  }, D.receive.slice(0, 5).map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 18
  })), r))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap center"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: '18ch',
      margin: '0 auto var(--space-5)'
    }
  }, "Pr\xEAte \xE0 retrouver ta vitalit\xE9 ?"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Calendar, {
      size: 16
    }),
    onClick: onBook
  }, "Prends rendez-vous"))));
}
window.ENOfferPage = OfferPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/OfferPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice/data.js
try { (() => {
/* Émilie Naturelle — content for the practitioner-site UI kit.
   Paraphrased from emilienaturelle.ca (FR-CA, naturopathy & health coaching). */
window.EN_DATA = {
  img: {
    portrait: 'https://images.squarespace-cdn.com/content/v1/668ae616107a771bc7eca697/1a81f4a8-417a-43fa-940e-00f82e52ef84/1000084628.jpg?format=1000w',
    offer: 'https://images.squarespace-cdn.com/content/v1/668ae616107a771bc7eca697/c367dd10-a665-47e2-aee5-2dcbd95eb992/1000088055.jpg?format=1000w',
    analysis: 'https://images.squarespace-cdn.com/content/v1/668ae616107a771bc7eca697/bf7dd029-0335-4333-a88a-01807ab57c37/1000076777.jpg?format=1000w',
    plant: 'https://images.squarespace-cdn.com/content/v1/668ae616107a771bc7eca697/1f7a423f-46cd-4a9f-8994-06532c602fc1/1000050581.png?format=1000w',
    cycles: 'https://images.squarespace-cdn.com/content/v1/668ae616107a771bc7eca697/b10dd2f3-4617-4d1f-9017-e6e8b02e088e/1000053597.png?format=800w'
  },
  nav: [['accueil', 'Accueil'], ['offres', 'Consultation'], ['coaching', 'Coaching']],
  offers: [{
    id: 'consultation',
    kicker: 'Naturopathie',
    title: 'Accompagnement complet',
    tag: 'Sortir du mode survie — booster ton assiette, tes hormones, tes minéraux et ton métabolisme.',
    price: '550 $',
    priceNote: '+ taxes · payable en 4 versements',
    includes: ['Séance individuelle de 50 minutes', 'Analyse minérale tissulaire (HTMA)', 'Hormones, métabolisme & système nerveux', 'Protocole de vitalité personnalisé', 'Reçu d’assurance disponible']
  }, {
    id: 'coaching',
    kicker: 'Coaching santé',
    title: 'Coaching individuel',
    tag: 'Un accompagnement éducatif pour ancrer de saines habitudes, à ton rythme.',
    price: 'Sur mesure',
    priceNote: 'forfaits de 3 ou 6 mois',
    includes: ['Rencontres de suivi régulières', 'Objectifs concrets & mesurables', 'Outils pratiques entre les séances', 'Soutien par messagerie', 'Bilans d’étape']
  }],
  receive: ['Consultation complète en naturopathie', 'Alimentation intuitive et biodisponible', 'Optimisation de ton rythme circadien', 'Sommeil réparateur et énergie durable', 'Harmonisation de tes cycles féminins', 'Pratiques somatiques (respiration, méditation, mouvement)', 'Régulation du système nerveux', 'Équilibre hormonal, minéral et métabolique'],
  piliers: [{
    n: '01',
    t: 'Mode de vie',
    d: 'Zones de pouvoir, habitudes et choix quotidiens.'
  }, {
    n: '02',
    t: 'Rythme circadien',
    d: 'Lumière, sommeil et énergie durable.'
  }, {
    n: '03',
    t: 'Hormones & métabolisme',
    d: 'Insuline, cortisol, équilibre hormonal.'
  }, {
    n: '04',
    t: 'Minéraux',
    d: 'Le terrain biologique, lu par le HTMA.'
  }],
  testimonials: [{
    name: 'Marjorie',
    initials: 'M',
    quote: 'Je me sens enfin alignée, pleine de gratitude et inspirée à prendre soin de moi.'
  }, {
    name: 'Nelly',
    initials: 'N',
    quote: 'Une expérience enrichissante : tout est expliqué clairement, avec une vraie écoute.'
  }, {
    name: 'Roxanne',
    initials: 'R',
    quote: 'Des progrès concrets dès les premières semaines du protocole. Merci pour tout.'
  }, {
    name: 'Céline',
    initials: 'C',
    quote: 'Pertinent, précis et bienveillant. Je recommande sans aucune hésitation.'
  }, {
    name: 'Kim',
    initials: 'K',
    quote: 'Merci pour ces échanges sincères et enrichissants. Tu es très inspirante !'
  }, {
    name: 'Cammy-M',
    initials: 'C',
    quote: 'Une écoute, une douceur et une justesse rares. Un vrai cadeau.'
  }],
  cycles: {
    title: 'Programme Cycles',
    sub: 'Une immersion douce, pratique et puissante dans les 4 phases du cycle menstruel.',
    price: '29,95 $',
    priceNote: 'paiement unique · accès à vie',
    features: ['Accès illimité à vie', '26 modules', 'De nombreux outils à télécharger', 'Des exercices pratiques conçus pour toi']
  },
  quote: 'Il n’y a rien de plus puissant que d’être soi-même — dans son corps, dans son esprit et dans son énergie.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/data.js", error: String((e && e.message) || e) }); }

// ui_kits/practice/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Émilie Naturelle — kit icons (Lucide-style, 1.5 stroke). Lazy components. */
function ENIconBase(props) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: props.size || 20,
    height: props.size || 20,
    fill: props.fill ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, props.children);
}
window.ENIcons = {
  Check: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  Calendar: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4.5",
    width: "18",
    height: "17",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2.5v4M16 2.5v4"
  })),
  Star: p => /*#__PURE__*/React.createElement(ENIconBase, _extends({}, p, {
    fill: true
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"
  })),
  Arrow: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  Leaf: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 4 0 7 1 7 1s-1 13-9 15Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 17c2-4 5-6 8-7"
  })),
  Moon: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
  })),
  Instagram: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 6.5h.01"
  })),
  Facebook: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("path", {
    d: "M16 3h-3a4 4 0 0 0-4 4v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  })),
  Shield: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6z"
  })),
  Heart: p => /*#__PURE__*/React.createElement(ENIconBase, _extends({}, p, {
    fill: true
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
  })),
  Close: p => /*#__PURE__*/React.createElement(ENIconBase, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardMedia = __ds_scope.CardMedia;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
