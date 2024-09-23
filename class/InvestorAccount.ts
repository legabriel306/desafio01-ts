import { DioAccount } from "./DioAccount";


export class InvestorAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
          this.balance += value+10
          console.log('Voce depositou')
        } else {
          throw new Error('Não foi possível depositar nessa conta')
        }
      }
}