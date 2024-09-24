"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.getName = function () {
            return _this.name;
        };
        this.deposit = function (value) {
            if (_this.validateStatus()) {
                _this.balance += value;
                console.log('Voce depositou');
            }
            else {
                throw new Error('Não foi possível depositar nessa conta');
            }
        };
        this.withdraw = function (value) {
            if (_this.balance >= value && _this.validateStatus()) {
                _this.balance -= value;
                console.log('Voce sacou');
            }
            else {
                throw new Error("Não foi possível realizar o saque");
            }
        };
        this.getBalance = function () {
            console.log(_this.balance);
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;
