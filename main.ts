import { Developer } from "./entities/Developer";
import { Manager } from "./entities/Manager";

const showEmployeeSalary = (employee: Developer | Manager) => {
  return `${employee.getName()} - ${
    employee.position
  } - ${employee.calculateSalary()}`;
};

const createDeveloperAndCalculateSalary = () => {
  console.log("Creating a developer and calculating salary..." + "\n");

  const developer = new Developer({
    name: "John",
    position: "Senior Developer",
    completedProjects: 5,
    baseSalary: 5000,
  });

  console.log(showEmployeeSalary(developer) + "\n");

  console.log("Adding some benefits" + "\n");

  developer.addBenefit(500);
  developer.addBenefit(1000);
  developer.addBenefit(1500);

  console.log(showEmployeeSalary(developer) + "\n");

  console.log("Adding a completed project..." + "\n");

  developer.addCompletedProject();

  console.log(showEmployeeSalary(developer) + "\n");
};

const createManagerCalculateSalary = () => {
  console.log("Creating a manager and calculating salary..." + "\n");

  const manager = new Manager({
    name: "George",
    position: "Senior Manager",
    baseSalary: 10000,
  });

  console.log(showEmployeeSalary(manager) + "\n");

  console.log("Adding some benefits" + "\n");

  manager.addBenefit(1000);
  manager.addBenefit(2000);
  manager.addBenefit(3000);

  console.log(showEmployeeSalary(manager) + "\n");

  console.log("Setting a bonus value..." + "\n");

  manager.setBonus(5000);

  console.log(showEmployeeSalary(manager) + "\n");
};

createManagerCalculateSalary();

console.log("\n" + "---------------------------------" + "\n\n");

createDeveloperAndCalculateSalary();
