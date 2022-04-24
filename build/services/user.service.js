"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegistration = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

//create new user
var userRegistration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var user, saltRounds, hasedPassword, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].findOne({
              email: body.email
            });

          case 2:
            user = _context.sent;
            console.log(user);

            if (!(user == null)) {
              _context.next = 15;
              break;
            }

            saltRounds = 10;
            hasedPassword = bcrypt.hashSync(body.password, saltRounds);
            body.password = hasedPassword;
            _context.next = 10;
            return _user["default"].create(body);

          case 10:
            data = _context.sent;
            producer(data);
            return _context.abrupt("return", data);

          case 15:
            throw new Error('Email already Registered');

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function userRegistration(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.userRegistration = userRegistration;