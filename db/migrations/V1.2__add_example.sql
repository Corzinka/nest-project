INSERT INTO main.cls_profile (id, first_name, patronymic, last_name, description)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'Леонид', 'Тарасович', 'Хархенов', 'Описание');

INSERT INTO main.cls_link (id_profile, name, description, link)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'github', 'Описание', 'https://github.com');

INSERT INTO main.cls_skill (id_profile, name)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'typescript');

INSERT INTO main.cls_experience (id_profile, company, position, period_start, period_end, achievements)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'СибДиджитал', 'Программист', '2024-09-01', null, 'ачивки');

INSERT INTO main.cls_project (id_profile, name, link)
VALUES ('01a0c1c1-00ac-766b-a7ee-b2dad482e363', 'проект', 'https://github.com');
