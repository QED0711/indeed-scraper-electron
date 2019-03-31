const queryJobs = require('./js/queryJobs');

document.getElementById("test").onclick = (e) => {
    queryJobs("https://www.indeed.com/jobs?q=&l=washington+dc&fromage=last", 25);
}

