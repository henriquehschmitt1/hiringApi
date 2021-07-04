
# Description

This is an API made with NodeJS, Typescript, Express, PostgresSQL and Sequelize ORM. It's basically a CRUD for an employee-company context.

## Requirements

* NodeJS (v14.16.0)
* PostGresSQL (v13.3)
* Typescript (v4.3.5)

## Config

Go to database.js wich is located inside config folder (src/config/database.js) and fill it with your postgres infos (host, username and password).

## Installation

Use the package manager npm for the following steps.

This command will install the dependencies located at the package.json.

```bash
npm install
```

This command will create a database called company.
```bash
npx sequelize db:create
```

This command will use the migrations located at src/database/migrations to set up all the tables.
```bash
npx sequelize db:migrate
```

## Running

```bash
npm start
```

## Routes
All routes, by default, are served at localhost port 8080.

## GET Routes

* /company?cnpj=15163331000110 - This route will get all the employees related to a company, by passing the company CNPJ as a query param.
* /employee?cpf=71449931006 - This route wil get all the the companies related to an employee, by passing the employee CPF as a query param.

## POST Routes

* /company - This route will let you create a company, by passing name, cnpj, zipcode, street, city, state and additionalAddressData on the body

```bash
{
    "name": "Amazon",
    "cnpj": "15163331000110",
    "zipCode": "88101260",
    "street": "av salvador di bernardi",
    "city": "sao jose",
    "state": "SC",
    "additionalAddressData": "in front of juliana's bakery"
}
```

* /employee - This route will let you create an employee, by passing name, cpf, email, zipcode, street, city, state and additionalAddressData on the body.

```bash
{
    "name": "henrique",
    "cpf": "71449931006",
    "email": "henriquehschmitt@hotmail.com",
    "zipCode": "88101260",
    "street": "av salvador di bernardi",
    "city": "sao jose",
    "state": "SC",
    "additionalAddressData": "in front of juliana's bakery"
}
```

* /assign - This route will let you assign an employee to a company, by passing the companyId and the employeeId on the body.

```bash
{
    "companyId": 1,
    "employeeId" : 1
}
```
