# Проект 4-9: Место
## Описание

### Сервис Mesto: интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.
  Учебный проект, цель которого - освоение ряда технологий используемых в веб-разработке.
Полная реализация сервиса заняла 5 спринтов, общие трудозатраты ~290 часов (Методика расчета включает исключительно время на разработку по готовому ТЗ).

В проекте используются в том числе:
- Верстка
    - Ознакомление с принципами всплывающих окон (popup), плавность анимаций
    - Основы работы с формами, типы событий формы
    - Более глубокая работа с атрибутами тегов html
    - Общий UX, валидация форм, закрытие попапов через слушатели (Крестик + оверлей + Esc)
- JavaScript
    - Архитектура по принципу ООП, реализация абстрактных классов с последующим наследованием,
    инкапсуляция части реализаций внутри наследников абстрактных классов, полиморфизм при обработке форм
    - Работа с API, запросы на сервер, интерпретация ответов сервера, асинхронность и Promise
- Инфраструктурные плагины
    - Webpack: Сборка проекта, настройка конфигурации, команды для режима dev и build, минификация CSS
    - Babel: Транспиляция JS, настройка конфигурации  
    
## Состояние проекта
  Проект прошел все этапы ревью, имеет полноценный функционал добавления карточки места (Фотография и название). Функционал удаления своих карточек, 
отображение реакций у карточек от других пользователей. Также функционал редактирования аватара профиля, имени и описания. Карточки раскрываются при нажатии
с подписью названия карточки, корректность в части переполнения инпутов текстом. Авторизация и регистрация не реализованы и не подразумевались по ТЗ проекта,
аутентифиация пользователя предусмотрена передачей в заголовке запроса заранее выданного токена пользователя. В проекте не использются СУБД/БД, фреймворки.

## Ссылка на хостинг gh-pages
  
  [Mesto](https://thanatas42.github.io/mesto/)<br/>




# Project 4-9: Location
## Description

### Mesto service: an interactive page where you can add photos, delete them and put likes.
  A training project aimed at mastering a number of technologies used in web development.
The full implementation of the service took 5 sprints, the total labor costs ~ 290 hours (The calculation method includes only the time to develop a ready-made TOR).

The project uses , among other things:
- Layout
    - Introduction to the principles of pop-ups, smooth animations
- Basics of working with forms, types of form events
    - Deeper work with html tag attributes
    - General UX, validation of forms, closing popups through listeners (Cross + Overlay + Esc)
- JavaScript
    - Architecture based on the OOP principle, implementation of abstract classes with subsequent inheritance,
    encapsulation of a part of implementations inside the heirs of abstract classes, polymorphism in form processing
- Working with the API, requests to the server, interpretation of server responses, asynchrony and Promise
- Infrastructure plugins
    - Webpack: Project build, configuration setup, commands for dev and build mode, CSS minification
    - Babel: JS transpilation, configuration setting  
    
## Project Status
  The project has passed all the stages of the review, has a full-fledged functionality of adding a place card (Photo and name). The functionality of deleting your cards, 
displaying reactions of cards from other users. Also, the functionality of editing the profile avatar, name and description. The cards are opened when clicked
with the signature of the card name, correctness in terms of overflow of the inputs with text. Authorization and registration are not implemented and were not implied by the project TOR,
user authentication is provided by transmitting a pre-issued user token in the request header. The project does not use DBMS/DBMS, frameworks.

## Link to gh-pages hosting
  
  [Mesto](https://thanatas42.github.io/mesto/)<br/>
  
---
permalink: /index.html
---
