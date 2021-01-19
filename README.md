# MyReactToDo
**MyReactToDo** - это клиент-серверное приложение для создания индивидуального списка задач, его отображения с возможностью добавления/удаления.

### Стек технологий используемых в проекте
* React
* Redux (thunk)
* Node.JS
* Express JS
* Express-Session (Local strategy)
* ReactStrap
* MongoDB

### Установка и запуск проекта
1. Перейти в папку server 
2. Создать файл .env и заполнить по аналогии с .env.example
3. В командной строке выполнить (однократно для установки): **npm install**
4. Запуск на стороне сервера: **npm run dev**
5. Перейти в папку client
6. Создать файл .env и заполнить по аналогии с .env.example
7. В командной строке выполнить (однократно для установки): **yarn**
8. Запуск на стороне клиента: **yarn start**
9. Страница с приложением откроется автоматически

### Пара слов о проекте
После успешной установки всех зависимостей, страница с приложением открывается автоматически. Существует возможность регистрации и входа. После авторизации, создается сессия (а также cookies на клиентской части) и сохраняется до момента выхода пользователя из системы (Выход).  качестве примера сессия хранится в FileStorage, но без труда может быть сохранена в Mongostore или где-нибудь еще. В приложении минимизировано кол-во обращений к серверу, поэтому данные с сервера подгружаются только в момент входа пользователя в систему и в дальнейшем сохраняются в Redux.
**Функция создания новой задачи** при вводе текста в текстовое поле и нажатие на кнопку (Создать), создается новая задача с невыполненным статусом.
**Функция изменения статуса задачи** при нажатии на "Check box" статус и характерный цвет задачи меняется на противоположный.
**Функция удаления задачи** при нажатии на кнопку (Удалить) выбранная задача будет удалена.

### Главная страница
![Main page](/Users/danny/MyProjects/ProjectReactToDo/client/public/images/MainPage.png "Главная страница")
### Страница регистрации
![Registration page](/Users/danny/MyProjects/ProjectReactToDo/client/public/images/RegistrationPage.png "Страница регистрации")
### Страница входа
![Login page](/Users/danny/MyProjects/ProjectReactToDo/client/public/images/LoginPage.png "Страница входа")
### Начальная страница приложения
![Empty tasks page](/Users/danny/MyProjects/ProjectReactToDo/client/public/images/EmptyTasks.png "Начальная страница приложения")
### Страница с задачами
![Tasks page](/Users/danny/MyProjects/ProjectReactToDo/client/public/images/Tasks.png "Страница с задачами")

# MyReactToDo
