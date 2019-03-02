const storage1 = {
    incomes: []
};

const storage2 = {
    expenses: []
};

const form = document.forms['addToForm'];
const title = form.elements['title'];
const number = form.elements['number'];
const select = document.querySelector('.add__type');
const value1 = select.options[0].value;
const value2 = select.options[1].value;
const col1 = document.querySelector('.income');
const col2 = document.querySelector('.expenses');
const container = document.querySelector('.container');
let znak;
let sumIncomes;
let sumExpenses;
let sumBudget;

export { storage1, storage2, form, title, number, select, value1, value2, col1, col2, container, znak, sumIncomes, sumExpenses, sumBudget }