'use strict';

function sortEmployeesBySalary() {
  // Получаем все элементы списка
  const employeeItems = document.querySelectorAll('ul li');

  // Преобразуем NodeList в массив и сортируем его по зарплате
  const sortEmpl = Array.from(employeeItems).sort((a, b) => {
    // Извлекаем зарплату из атрибутов данных и преобразуем в число
    const salaryA = parseInt(a.dataset.salary.replace(/[$,]/g, ''), 10);
    // Удаляем $ и запятые
    const salaryB = parseInt(b.dataset.salary.replace(/[$,]/g, ''), 10);

    return salaryB - salaryA; // Сортируем по убыванию
  });

  // Очищаем существующий список и добавляем отсортированные элементы
  const emplList = document.querySelector('ul');

  emplList.innerHTML = ''; // Очищаем существующий список
  // Добавляем отсортированные элем
  sortEmpl.forEach((employee) => emplList.appendChild(employee));
}

// Функция для получения массива объектов сотрудников
function getEmployeeArray() {
  // Получаем все элементы списка
  const employeeItems = document.querySelectorAll('ul li');

  // Преобразуем NodeList в массив объектов
  const employees = Array.from(employeeItems).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: parseInt(item.dataset.age, 10),
  }));

  return employees;
}

sortEmployeesBySalary();
getEmployeeArray();
