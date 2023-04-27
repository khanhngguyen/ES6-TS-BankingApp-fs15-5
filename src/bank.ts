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
            //console.log(`new branch ${newBranch.getName} was added successfully`);
            return true;
        }
        //console.log(`can not add new branch with name ${newBranch.getName}, brand already exists`);
        return false;
    }

    addCustomer(branch: Branch, customer: Customer): boolean {
        //each customer should be added only once to a branch
        //branch should exist in Bank, if not, add branch then add Customer
        //--> checkBranch should be true
        if (this.checkBranch(branch)) {
            //console.log(`customer ${customer.getName} was added to existed branch ${branch.getName} successfully`);
            branch.addCustomer(customer);
            return true;
        } else {
            //branch does not exist --> add branch then add Customer
            if (this.addBranch(branch)) {
                //console.log(`customer ${customer.getName} was added to new created branch ${branch.getName} successfully`);
                branch.addCustomer(customer);
                return true;
            }
            console.log("can not add customer to branch");
            return false;
        }
    }

    addCustomerTransaction(branch: Branch, id: string, amount: number): boolean {
        //returns true if the customers transaction is added successfully
        //branch should exist in Bank
        //customer should exist in branch
        const branchExist = this.checkBranch(branch);
        const customerExist = branch.findCustomer(id);

        if (branchExist && customerExist) {
            console.log(`add customer transaction successfully to existed branch: ${branch.getName}`);
            branch.addCustomerTransaction(id, amount);
            return true;
        } else {
            //branch does not exist --> add branch, then check if customer is in branch
            // if (this.addBranch(branch) && branch.findCustomer(id) != null) {
            //     console.log(`add customer transaction successfully to new added branch: ${branch.getName}`);
            //     branch.addCustomerTransaction(id, amount);
            //     return true;
            // }
            console.log("can not add customer transaction");
            return false;
        }
    }

    findBranchName(name: string): Branch[] | null {
        let result: Branch[] = [];
        let branchInSearch = new Branch(name);
        if (this.#branches.includes(branchInSearch)) {
            result.push(branchInSearch);
            console.log(`branch found: ${result}`);
            return result;
        } else {
            console.log("can not find branch");
            return null;
        }
    }

    checkBranch(branch: Branch): boolean {
        return this.#branches.includes(branch);
    }

    listCustomers(branchName: Branch, isTrue: boolean): boolean {
        //Return true if the branch exists
        //prints out a list of customers inside the branch, and with transaction details
        if (this.checkBranch(branchName)) {
            //inside each Branch
            console.log(`Branch: ${branchName.getName}`);
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
        console.log("can not find transaction");
        return false;
    }
}

export default Bank
