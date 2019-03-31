const queryJobs = require('./js/queryJobs');

document.getElementById("search-filter-form").onsubmit = (e) => {
    e.preventDefault();
    // write function that returs object that has url and other user defined params
    queryJobs("https://www.indeed.com/jobs?q=&l=washington+dc&fromage=last", 25);
    // queryJobs("https://www.indeed.com/jobs?q=&l=washington+dc&fromage=last", 25);
}

