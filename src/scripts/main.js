'use strict';

const sortEmployeesBySalary = function (selector) {
  // Получаем все элементы списка
  const employeeItems = document.querySelectorAll(selector);

  // Преобразуем NodeList в массив и сортируем его по зарплате
  const sortedEmployees = Array.from(employeeItems).sort((a, b) => {
    // Извлекаем зарплату из атрибутов данных и преобразуем в число
    const salaryA = parseInt(a.dataset.salary.replace(/[$,]/g, ''), 10);
    // Удаляем $ и запятые
    const salaryB = parseInt(b.dataset.salary.replace(/[$,]/g, ''), 10);

    return salaryB - salaryA; // Сортируем по убыванию
  });

  // Очищаем существующий список и добавляем отсортированные элементы
  const employeeList = document.querySelector('ul');

  employeeList.innerHTML = ''; // Очищаем существующий список

  // Добавляем отсортированные элементы обратно в список
  sortedEmployees.forEach((employee) => {
    employeeList.appendChild(employee); // Добавляем элемент
  });
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

sortEmployeesBySalary(employeeListSelector); // Сортируем сотрудников

getEmployeeArray(employeeListSelector);
