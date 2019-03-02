import { storage1, storage2, form, title, number, select, value1, value2, col1, col2, container, znak, sumIncomes, sumExpenses, sumBudget } from './elements';

export class Ui {

/**
* @desc generates Id
* @param (*) 
*/

    generateId() {
        const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let id = '';
        for (let char of words) {
            let index = Math.floor(Math.random() * words.length);
            id += words[index];
        };
        return id;
    }

/** 
* @desc adds new data to storage
* @param (title) title
* @param (number) number
* @param (value) value
*/

    addNewMoneyToStorage(title, number, value) {
        if (!title) return console.log('Введите заголовок');
        if (!number) return console.log('Введите цифру');
        const newMoney = {
            title,
            number, 
            id: this.generateId()
        };
        if (value === select.options[0].value) {
            this.znak = "+";
            storage1.incomes.push(newMoney);
            this.addNewMoneyIncomesToView(newMoney);  
            this.sumOfIncomes(storage1.incomes);
            this.budget(sumIncomes, sumExpenses);
            return newMoney;   
        } else {
            this.znak = "-";
            storage2.expenses.push(newMoney);
            this.addNewMoneyExpensesToView(newMoney); 
            this.sumOfExpenses(storage2.expenses);
            this.budget(sumIncomes, sumExpenses);
            return newMoney;        
        }
    }

/** 
* @desc adds data about incomes to html markup
* @param (newMoney) object
*/

    addNewMoneyIncomesToView(newMoney) {
        const template = this.moneyTemplate(newMoney);
        col1.insertAdjacentHTML('beforeend', template);
        return;
    }

/** 
* @desc adds numbers of incomes
* @param (*) 
*/

    sumOfIncomes() {
        this.sumIncomes = 0;
           for (let i = 0; i < storage1.incomes.length; i++) {
                this.sumIncomes = this.sumIncomes + parseInt(storage1.incomes[i].number);
            }
        this.sumOfIncomesView(sumIncomes);
        return;
    }

/** 
* @desc calculates the budget
* @param (*) 
*/

    budget() {
        if (this.sumExpenses !== undefined && this.sumIncomes !== undefined) {
            this.sumBudget = this.sumIncomes - this.sumExpenses;
        } else if (this.sumIncomes !== undefined){
            this.sumBudget = this.sumIncomes;
        } else if (this.sumExpenses !== undefined){
            this.sumBudget = this.sumExpenses;     
        }
        this.budgetView(sumBudget);
        return;
    }

 /** 
* @desc adds data about expenses to html markup
* @param (newMoney) object
*/
    
    addNewMoneyExpensesToView(newMoney) {
        const template = this.moneyTemplate(newMoney);
        col2.insertAdjacentHTML('beforeend', template);
        return;
    }

/** 
* @desc adds numbers of expenses
* @param (*) 
*/

    sumOfExpenses() {
        this.sumExpenses = 0;
           for (let i = 0; i < storage2.expenses.length; i++) {
                this.sumExpenses = this.sumExpenses + parseInt(storage2.expenses[i].number)
            }
        this.sumOfExpensesView(this.sumExpenses);
        return;
    }

/** 
* @desc adds html code with information about incomes or expenses to html markup
* @param (newMoney) object
*/

    moneyTemplate(newMoney) {
        return `
            <div class="item clearfix" data-id="${newMoney.id}">
                <div class="item__description">${newMoney.title}</div>
                <div class="right clearfix">
                    <div class="item__value">${this.znak}${newMoney.number}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        `;
    }

/** 
* @desc adds sum of incomes to html markup
* @param (sumIncomes) number 
*/

    sumOfIncomesView(sumIncomes) {
        document.querySelector('.budget__income--value').textContent = `+${this.sumIncomes}`;
        return this.sumIncomes;
    }

/** 
* @desc adds availeble budget to html markup
* @param (sumBudget) number 
*/ 

    budgetView(sumBudget) {
        document.querySelector('.budget__value').textContent = `${this.sumBudget}`;
        return;
    }

/**
* @desc adds sum of expenses to html markup
* @param (sumExpenses) number 
*/    

    sumOfExpensesView(sumExpenses) {
        document.querySelector('.budget__expenses--value').textContent = `-${this.sumExpenses}`;
        return this.sumExpenses;
    }
}

export class UiDelete {


/** 
* @desc deletes data about incomes from storage
* @param (id) string
*/
    
    deleteMoneyFromStorage1(id) {
        let removedMoney;
        for (let i = 0; i < storage1.incomes.length; i++) {
            if (storage1.incomes[i].id === id) {
                removedMoney = storage1.incomes.splice(i, 1);
                break
            }
        };    
        ui.sumOfIncomes(storage1.incomes);
        ui.budget();
        this.deleteMoneyFromView(id);
        return removedMoney;
    }    

/** 
* @desc deletes data about expenses from storage
* @param (id) string
*/

    deleteMoneyFromStorage2(id) {
        let removedMoney2;
        for (let i = 0; i < storage2.expenses.length; i++) {
            if (storage2.expenses[i].id === id) {
                removedMoney2 = storage2.expenses.splice(i, 1);
                break;
            } 
        };
        ui.sumOfExpenses(storage2.expenses);  
        ui.budget();
        this.deleteMoneyFromView(id);
        return removedMoney2;
    }

/** 
* @desc deletes data about incomes or expenses from html markup
* @param (id) string
*/

    deleteMoneyFromView(id) {
        const target = document.querySelector(`[data-id="${id}"]`);
        target.parentElement.removeChild(target); 
        return;
    }   
}

const ui = new Ui();
const uiDelete = new UiDelete();