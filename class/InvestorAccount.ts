import { DioAccount } from "./DioAccount";


export class InvestorAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }


    investment = (value: number) => {
      this.deposit(value + 10)
      console.log('Voce depositou')
    }
}