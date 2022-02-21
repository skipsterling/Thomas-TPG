const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const users = [];
const lastHtmlArray = [];

function engineerHtml(engineer) {
    return `
    <div class="col-4 mb-5">
    <div class="card h-100 bg-light shadow">
    <div class="card-body p-0">
    <h4 class="card-title bg-primary p-4">${engineer.getName()} <br>${engineer.getRole()}</h4>
    <ul class="list-group-item p-4">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
    </ul>
    </div>
    </div>
    </div>
    `;
}
    function managerHtml(manager) {
        return `
        <div class="col-4 mb-5">
        <div class="card h-100 bg-light shadow">
        <div class="card-body p-0">
        <h4 class="card-title bg-primary p-4">${manager.getName()} <br>${manager.getRole()}</h4>
        <ul class="list-group-item p-4">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
        </div>
        `;
}
function internHtml(intern) {
    return `
    <div class="col-4 mb-5">
    <div class="card h-100 bg-light shadow">
    <div class="card-body p-0">
    <h4 class="card-title bg-primary p-4">${intern.getName()} <br>${intern.getRole()}</h4>
    <ul class="list-group-item p-4">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}>${intern.getEmail()}</a></li>
    <li class="list-group-item">School: ${getSchool()}</li>
    </ul>
    </div>
    </div>
    </div>
    `;
}

function theHtml(lastArr) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profiles</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossorigin="anonymous"
        />
      </head>
      <body>
      <header class="jumbotron jumbotron-fluid bg-danger">
      <div class="container">
        <h1 class="display-3 text-center">My Team</h1>
      </div>
    </header>
    <div class="container">
      <div class="row d-flex justify-content-center flex-wrap">
          ${lastArr}
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
      integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
      crossorigin="anonymous"
    ></script>
      </body>
      </html>`;
}

