import Transaction from "./transaction";

class Customer {
    #name: string
    #id: string
    #transactions: Transaction[]

    constructor(name: string) {
        this.#name = name;
        this.#id = `${this.#name}` + Math.floor(Math.random() * 1000).toString();
        this.#transactions = [];
        //each customer has unique id, which is a combination of customer's name + a random number from 1 - 1000
    }

    get getName() {
        return this.#name;
    }
    
    get getId() {
        return this.#id;
    }

    get getTransactions() {
        return this.#transactions
    }

    //return the current balance from transactions
    getBalance(): number {
        const transactions = this.#transactions;
        const balance = transactions.reduce((total: number, transaction: Transaction) => {
            total += transaction.amount;
            return total;
        }, 0)
        return balance;
    }

    //return conditional boolean
    addTransaction(input: number): boolean {
        //balance can't be negative
        if (this.getBalance()) {
            let newTransaction = {
                amount: input,
                date: new Date()
            }
            this.#transactions.push(newTransaction);
            return true;
        } else {
            return false;
        }
    }
}

export default Customer