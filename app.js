"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompanyAccount_1 = require("./class/CompanyAccount");
var InvestorAccount_1 = require("./class/InvestorAccount");
var PeopleAccount_1 = require("./class/PeopleAccount");
//People Accont
var peopleAccount = new PeopleAccount_1.PeopleAccount(1, 'Nath', 10);
peopleAccount.deposit(100);
peopleAccount.withdraw(100);
peopleAccount.getBalance();
peopleAccount.getName();
console.log(peopleAccount);
//Company Account
var companyAccount = new CompanyAccount_1.CompanyAccount('DIO', 20);
companyAccount.deposit(200);
companyAccount.withdraw(100);
companyAccount.getBalance();
companyAccount.getLoan(500);
companyAccount.getName();
console.log(companyAccount);
//investor Account
var investorAccount = new InvestorAccount_1.InvestorAccount('rei', 20);
investorAccount.deposit(200);
investorAccount.withdraw(100);
investorAccount.getBalance();
investorAccount.getName();
console.log(investorAccount);
