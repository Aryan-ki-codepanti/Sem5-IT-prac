-- // DB Company
-- // Student table
-- // 1. username
-- // 2. semester
-- // 3. email
-- // 4. password as it is

USE COMPANY;

CREATE TABLE STUDENT(
    USERNAME VARCHAR(20), COURSE VARCHAR(20) NOT NULL, EMAIL VARCHAR(30), PASSWORD VARCHAR(30) NOT NULL, PRIMARY KEY(USERNAME), UNIQUE(EMAIL)
);