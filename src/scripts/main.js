'use strict';

// Функция для сортировки сотрудников по зарплате
const sortEmployeesBySalary = function (selector) {
  const employees = document.querySelectorAll(selector);
  // Получаем все элементы списка по переданному селектору
  const employeeItems = employees;

  // Преобразуем NodeList в массив и сортируем его по зарплате
  const sortedEmployee = Array.from(employeeItems).sort((a, b) => {
    // Извлекаем зарплату из атрибутов данных и преобразуем в число
    const salaryA = parseInt(a.dataset.salary.replace(/[$,]/g, ''), 10);
    const salaryB = parseInt(b.dataset.salary.replace(/[$,]/g, ''), 10);

    return salaryB - salaryA; // Сортируем по убыванию
  });

  return sortedEmployee; // Возвращаем отсортированный массив сотрудников
};

// Функция для получения массива объектов сотрудников
const getEmployeeArray = function (selector) {
  // Получаем все элементы списка по переданному селектору
  const employeeItems = document.querySelectorAll(selector);

  // Преобразуем NodeList в массив объектов
  const employees = Array.from(employeeItems).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: parseInt(item.dataset.age, 10),
  }));

  return employees; // Возвращаем массив сотрудников
};

// Основной код
const employeeListSelector = 'ul li';

// Сортируем сотрудников и получаем отсортированный массив
const sortedEmployees = sortEmployeesBySalary(employeeListSelector);

// Очищаем существующий список
const employeeList = document.querySelector('ul');

employeeList.innerHTML = ''; // Очищаем существующий список

// Добавляем отсортированные элементы обратно в список
sortedEmployees.forEach((employee) => {
  employeeList.appendChild(employee); // Добавляем элемент в DOM
});

sortEmployeesBySalary(employeeListSelector);
getEmployeeArray(employeeListSelector);
