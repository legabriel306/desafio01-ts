export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Voce depositou')
    } else {
      throw new Error('Não foi possível depositar nessa conta')
    }
  }

  withdraw = (value: number): void => {
    if (this.balance >= value && this.validateStatus()) {
      this.balance -= value
      console.log('Voce sacou')
    } else {
      throw new Error("Não foi possível realizar o saque");
    }

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
