const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary) {
    return this.tax * salary;
}

console.log('1. getMyTaxes - ', getMyTaxes.call(ukraine, 10000))


// 2. Рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
function getMiddleTaxes(country) {
    return (this.tax * this.middleSalary).toFixed(2);
}

console.log('2. getMiddleTaxes - ', getMiddleTaxes.call(ukraine))


// 3. Рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
function getTotalTaxes(country) {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log('3. getTotalTaxes - ', getTotalTaxes.call(ukraine));

// 4. Буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.profit = salary - taxes;
// для виводу в консоль кожні 10 секунд використайте setInterval
function getMySalary(country) {
    let getObj = () => {
        let objMySalary = {};
        objMySalary.salary = getRandomValue(1500, 2000);
        objMySalary.taxes = (this.tax * objMySalary.salary).toFixed(2);
        objMySalary.profit = (objMySalary.salary - objMySalary.taxes).toFixed(2);
        console.log(objMySalary);
    }
    setInterval(getObj, 10000);
}
getMySalary.call(ukraine);

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}