CREATE TABLE IF NOT EXISTS main.cls_profile
(
    id              uuid            default uuidv7()  not null    primary key,
    first_name      text                              not null,
    patronymic      text                              null,
    last_name       text                              not null,
    description     text                              null,
    time_create     timestamptz     default now()     not null,
    id_user         uuid                              null,
    is_deleted      boolean         default false     not null
);

comment on table main.cls_profile is 'Профиль';
comment on column main.cls_profile.first_name is 'Имя';
comment on column main.cls_profile.patronymic is 'Отчество';
comment on column main.cls_profile.last_name is 'Фамилия';
comment on column main.cls_profile.description is 'Описание';
COMMENT ON COLUMN main.cls_profile.time_create IS 'Дата и время создания';
COMMENT ON COLUMN main.cls_profile.id_user IS 'Кем создано';
COMMENT ON COLUMN main.cls_profile.is_deleted IS 'Пометка удаления';

CREATE TABLE IF NOT EXISTS main.cls_link
(
    id              uuid            default uuidv7()    not null    primary key,
    id_profile      uuid                                not null,
    name            text                                not null,
    description     text                                null,
    link            text                                not null,
    time_create     timestamptz     default now()       not null,
    id_user         uuid                                null,
    is_deleted      boolean         default false       not null,
    CONSTRAINT cls_link_cls_profile_fk FOREIGN KEY (id_profile) REFERENCES main.cls_profile (id)
);

comment on table main.cls_link is 'Ссылка';
comment on column main.cls_link.id_profile is 'Профиль';
comment on column main.cls_link.name is 'Название';
comment on column main.cls_link.description is 'Описание';
comment on column main.cls_link.link is 'Ссылка';
COMMENT ON COLUMN main.cls_link.time_create IS 'Дата и время создания';
COMMENT ON COLUMN main.cls_link.id_user IS 'Кем создано';
COMMENT ON COLUMN main.cls_link.is_deleted IS 'Пометка удаления';

CREATE TABLE IF NOT EXISTS main.cls_skill
(
    id              uuid            default uuidv7()    not null    primary key,
    id_profile      uuid                                not null,
    name            text                                not null,
    time_create     timestamptz     default now()       not null,
    id_user         uuid                                null,
    is_deleted      boolean         default false       not null,
    CONSTRAINT cls_skill_cls_profile_fk FOREIGN KEY (id_profile) REFERENCES main.cls_profile (id)
);

comment on table main.cls_skill is 'Навык';
comment on column main.cls_skill.id_profile is 'Профиль';
comment on column main.cls_skill.name is 'Название';
COMMENT ON COLUMN main.cls_skill.time_create IS 'Дата и время создания';
COMMENT ON COLUMN main.cls_skill.id_user IS 'Кем создано';
COMMENT ON COLUMN main.cls_skill.is_deleted IS 'Пометка удаления';

CREATE TABLE IF NOT EXISTS main.cls_experience
(
    id              uuid            default uuidv7()    not null    primary key,
    id_profile      uuid                                not null,
    company         text                                not null,
    position        text                                not null,
    period_start    timestamptz                         not null,
    period_end      timestamptz                         null,
    achievements    text                                null,
    time_create     timestamptz     default now()       not null,
    id_user         uuid                                null,
    is_deleted      boolean         default false       not null,
    CONSTRAINT cls_experience_cls_profile_fk FOREIGN KEY (id_profile) REFERENCES main.cls_profile (id)
);

comment on table main.cls_experience is 'Опыт';
comment on column main.cls_experience.id_profile is 'Профиль';
comment on column main.cls_experience.company is 'Место работы';
comment on column main.cls_experience.position is 'Должность работы';
comment on column main.cls_experience.period_start is 'Дата начала работы';
comment on column main.cls_experience.period_end is 'Дата окончания работы';
comment on column main.cls_experience.achievements  is 'Достижения';
COMMENT ON COLUMN main.cls_experience.time_create IS 'Дата и время создания';
COMMENT ON COLUMN main.cls_experience.id_user IS 'Кем создано';
COMMENT ON COLUMN main.cls_experience.is_deleted IS 'Пометка удаления';

CREATE TABLE IF NOT EXISTS main.cls_project
(
    id              uuid            default uuidv7()    not null    primary key,
    id_profile      uuid                                not null,
    name            text                                not null,
    link            text                                not null,
    time_create     timestamptz     default now()       not null,
    id_user         uuid                                null,
    is_deleted      boolean         default false       not null,
    CONSTRAINT cls_project_cls_profile_fk FOREIGN KEY (id_profile) REFERENCES main.cls_profile (id)
);

comment on table main.cls_project is 'Проект';
comment on column main.cls_project.id_profile is 'Профиль';
comment on column main.cls_project.name is 'Название';
comment on column main.cls_project.link is 'Ссылка';
COMMENT ON COLUMN main.cls_project.time_create IS 'Дата и время создания';
COMMENT ON COLUMN main.cls_project.id_user IS 'Кем создано';
COMMENT ON COLUMN main.cls_project.is_deleted IS 'Пометка удаления';
