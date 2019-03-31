const queryJobs = require('./js/queryJobs');
const formInfo = require("./js/formInfo");


document.getElementById("search-filter-form").onsubmit = (e) => {
    e.preventDefault();
    let userInfo = formInfo();
    console.log(userInfo);
    queryJobs(userInfo.url, userInfo.limit);
    // queryJobs("https://www.indeed.com/jobs?q=&l=washington+dc&fromage=last", 25);
}

