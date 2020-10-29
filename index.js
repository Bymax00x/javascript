// var prompt = require("prompt-sync")();

// var n = prompt("How many more times? ");
// console.log(n);

var prompt = require("prompt-sync")();

class todo {
  constructor() {
    this.list = [];
  }
  operation() {
    console.log("\n-------- MENU --------\n");
    console.log(" Press number: 1 to Add the todo list");
    console.log(" Press number: 2 to Display the list");
    console.log(" Press number: 3 to Delete the list");
    console.log(" Press number: 0 to Exit\n");
    this.n = prompt("Enter the number ");
    console.log(`You Entered the number : ${this.n} \n`);

    if (this.n == 1) {
      run.addlist();
    } else if (this.n == 2) {
      this.displayList();
    } else if (this.n == 3) {
      this.deleteList();
    } else if (this.n == 0) {
      this.loggedout();
    } else {
      console.log("Invalid Command Enter Again plz");
      this.operation();
    }
  }

  addlist() {
    this.val = prompt("Enter your Todo list: ");
    console.log(`You Entered ${this.val}`);
    this.list.push(this.val);
    this.operation();
  }

  displayList() {
    console.log("---------- The Todo List ----------\n");
    console.log("|  S.N  |  Todos  ");
    console.log("----------------------");

    for (var i = 0; i < this.list.length; i++) {
      console.log(`|   ${i + 1}   |   ${this.list[i]}   `);
    }
    this.operation();
  }

  deleteList() {
    var del = prompt(
      "Enter the specified S.N no to delete the required List\n "
    );
    var arry1 = this.list.filter((value) => {
      return value !== this.list[del - 1];
    });
    this.list = arry1;
    this.displayList();
  }

  loggedout() {
    console.log("Logged out");
  }
}

let run = new todo();
run.operation();
