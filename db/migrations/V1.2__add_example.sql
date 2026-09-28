INSERT INTO main.cls_profile (id, first_name, patronymic, last_name, description)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'Леонид', 'Тарасович', 'Хархенов', '24 года, программист, опыт работы ~2 года, ищу новую работу');

INSERT INTO main.cls_link (id_profile, name, description, link)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'github', 'мой github репозиторий', 'https://github.com/Corzinka'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'telegram', 'мой telegram', '@leonid_khar');

INSERT INTO main.cls_skill (id_profile, name)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'TypeScript'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'Angular'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'Postgres'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'C#'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'ASP.NET'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'docker');

INSERT INTO main.cls_experience (id_profile, company, position, period_start, period_end, achievements)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'СибДиджитал', 'Программист', '2024-09-01', null, '
    Работал на 3 веб-проектах для Fplus, Газпром, местная администрация на позициях фронта (Angular) и бэка (asp net, postgres).

    Для Fplus написан проект "сборщика сервера" (бэк):
    - Выгрузки спецификаций (сборочная карта, КП, Квота) в формате Excel
    - БАУМ (расчет цены услуги от выбранных комплектующих)
    - Логика сборки: Группировка (спецификации, комплектующие), Слоты, Переопределение комплектующих
    - Интеграция с CRM
    - Расчет Скидки

    Для Газпрома написан проект "учетная система взрывных работ" (бэк/фронт):
    - созданы Jasper шаблоны: наряд-накладная, наряд-путевка, тех. проект, тех. акт, план работ
    - разработан виджет для работы с документацией
    - разработаны реестр и карточка для заявок и взрывчаток

    Для администрации написан проект "учетная система наград и награждений" (фронт):
    - разработаны реестр и карточка для наград и заявок на награждение
    - разработана логика критерий награждения (в наградах и награждениях)
    - выгрузки документов

    Также исправление выявленных багов в модулях других разработчиков');

INSERT INTO main.cls_project (id_profile, name, link)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'самоссылка на этот проект', 'https://github.com/Corzinka/nest-project'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'тестовое задание на python от другой компании', 'https://github.com/Corzinka/Test_Quest'),
       ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'Магистарская работа', 'https://github.com/Corzinka/PythonProject');
