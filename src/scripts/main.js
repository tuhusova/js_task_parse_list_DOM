'use strict';

// Функция для сортировки сотрудников по зарплате
const sortEmployeesBySalary = function (employees) {
  return employees.sort((a, b) => b.salary - a.salary);
};

const getEmployeeArray = function (selector) {
  // Получаем все элементы списка по переданному селектору
  const employeeItems = document.querySelectorAll(selector);

  // Преобразуем NodeList в массив объектов сотрудников
  return Array.from(employeeItems).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    // Преобразуем зарплату в число
    salary: parseInt(item.dataset.salary.replace(/[$,]/g, ''), 10),
    age: parseInt(item.dataset.age, 10),
    element: item, // Сохраняем сам HTML элемент для дальнейшего использования
  }));
};

// Основной код
const employeeListSelector = 'ul li';

// Получаем массив сотрудников
const employeeArray = getEmployeeArray(employeeListSelector);

// Сортируем сотрудников по зарплате
const sortedEmployees = sortEmployeesBySalary(employeeArray);

// Очищаем существующий список
const employeeList = document.querySelector('ul');

employeeList.innerHTML = ''; // Очищаем список

// Добавляем отсортированные элементы обратно в DOM
sortedEmployees.forEach((employee) => {
  // Используем сохранённый HTML элемент
  employeeList.appendChild(employee.element);
});
