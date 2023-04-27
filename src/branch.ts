import Customer from "./customer";

class Branch {
    #name: string
    #customers: Customer[]

    constructor(name: string) {
        this.#name = name;
        this.#customers = [];
    }

    get getName() {
        return this.#name;
    }

    get getCustomers() {
        return this.#customers;
    }
    
    //each customer should be added only once --> customer should be unique --> id should not be same
    addCustomer(newCustomer: Customer): boolean {
        for (let i = 0; i < this.#customers.length; i++) {
            if (newCustomer.getId == this.#customers[i].getId) {
                console.log("can not add customer");
                return false;
            }
        }
        this.#customers.push(newCustomer);
        console.log(`customer ${newCustomer.getName} was added successfully to branch ${this.getName}`);
        return true;
    }

    addCustomerTransaction(id: string, transaction: number): boolean {
        //true if customer is true (exists in this branch) & customer's addTransaction() is also true
        const customer = this.findCustomer(id);
        if (customer) {
            customer.addTransaction(transaction)
            //console.log(`new transaction was added into branch ${this.getName}`);
            return true;
        } else {
            //console.log(`can not add customer transaction to branch ${this.getName}`);
            return false;
        }
    }

    findCustomer(id: string): Customer | null {
        for (let i = 0; i < this.#customers.length; i++) {
            if (id == this.#customers[i].getId) {
                console.log(`found customer with id ${id} in branch: ${this.getName}`);
                return this.#customers[i];
            }
        } 
        console.log(`can not found customer in branch: ${this.getName}`);
        return null;
    }

}

export default Branch