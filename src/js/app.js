import './../css/style.css';
import img from '../images/back.png';
import { storage1, storage2, form, title, number, select, value1, value2, col1, col2, container, znak, sumIncomes, sumExpenses, sumBudget } from './view/elements';
import { Ui } from './view/ui';
import { UiDelete } from './view/ui';
const ui = new Ui();
const uiDelete = new UiDelete();

select.addEventListener('change', (e) => {
    addClass();
})

/** function addClass
* @desc adds class to html-elements
* @param (*) 
* @returns {*} 
*/

function addClass() {
    select.classList.add('red-focus');
    title.classList.add('red-focus');
    number.classList.add('red-focus');
    return;
 }

/** function deleteClass
* @desc deletes class to html-elements
* @param (*) 
* @returns {*} 
*/

function deleteClass() {
    select.classList.remove('red-focus');
    title.classList.remove('red-focus');
    number.classList.remove('red-focus');
    return;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (select.value === "income") {
        ui.addNewMoneyToStorage(title.value, number.value, value1);
    }
    if (select.value === "expense") {
        ui.addNewMoneyToStorage(title.value, number.value, value2);
        deleteClass();
    }
    form.reset();
})

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('ion-ios-close-outline')) {
        const id = e.target.closest('[data-id]').dataset.id;
        uiDelete.deleteMoneyFromStorage1(id);
        uiDelete.deleteMoneyFromStorage2(id);
        return;
    }
})






