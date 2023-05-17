import Bank from "./bank";
import Branch from "./branch";
import Customer from "./customer";
import Transaction from "./transaction";

const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John");
const customer2 = new Customer("Anna");
const customer3 = new Customer("John");

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

arizonaBank.findBranchName("bank");
arizonaBank.findBranchName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000);

customer1.addTransaction(-1000)
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch, true))




