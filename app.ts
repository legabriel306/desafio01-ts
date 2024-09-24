import { CompanyAccount } from './class/CompanyAccount'
import { InvestorAccount } from './class/InvestorAccount'
import { PeopleAccount } from './class/PeopleAccount'


//People Accont
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

peopleAccount.deposit(100)
peopleAccount.withdraw(100)
peopleAccount.getBalance()
peopleAccount.getName()
console.log(peopleAccount)


//Company Account
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.withdraw(100)
companyAccount.getBalance()
companyAccount.getLoan(500)
companyAccount.getName()
console.log(companyAccount)


//investor Account
const investorAccount: InvestorAccount = new InvestorAccount('rei', 20)
investorAccount.deposit(200)
investorAccount.withdraw(100)
investorAccount.getBalance()
investorAccount.getName()
console.log(investorAccount)