import Branch from "./branch";
import Customer from "./customer";

class Bank {
    #name: string
    #branches: Branch[]

    constructor(name: string) {
        this.#name = name;
        this.#branches = [];
    }

    addBranch(newBranch: Branch): boolean {
        //each branch should be added only once
        if (!this.#branches.includes(newBranch)) {
            this.#branches.push(newBranch);
            return true;
        }
        return false;
    }

    addCustomer(branch: Branch, customer: Customer): boolean {
        //each customer should be added only once to a branch
        //branch should exist in Bank, if not, add branch then add Customer
        //--> addBranch should be true
        if (this.addBranch(branch)) {
            return branch.addCustomer(customer);
        }
        return false;
    }

    addCustomerTransaction(branch: Branch, id: string, amount: number): boolean {
        //returns true if the customers transaction is added successfully
        //branch should exist in Bank
        if (this.addBranch(branch)) {
            return branch.addCustomerTransaction(id, amount);
        }
        return false;
    }

    findBranchName(name: string): Branch[] | null {
        let result: Branch[] = [];
        let branchInSearch = new Branch(name);
        if (this.#branches.includes(branchInSearch)) {
            result.push(branchInSearch);
            return result;
        } else return null;
    }

    checkBranch(branch: Branch): boolean {
        return this.#branches.includes(branch);
    }

    listCustomers(branchName: Branch, isTrue: boolean): boolean {
        //Return true if the branch exists
        //prints out a list of customers inside the branch, and with transaction details
        if (this.checkBranch(branchName)) {
            //inside each Branch
            console.log(`Branch: ${branchName}`);
            //prints out each customer
            branchName.getCustomers.map(customer => {
                console.log(`Customer: ${customer.getName}`);
                //prints out each customer's transactions from a branch
                customer.getTransactions.map(transaction => {
                    console.log(transaction);
                })
            })
            return true;
        }
        return false;
    }
}

export default Bank
