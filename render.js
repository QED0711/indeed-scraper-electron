const queryJobs = require('./js/queryJobs');
const formInfo = require("./js/formInfo");
const Filter = require("./js/filter");
const renderJobs = require("./js/renderJobs");


document.getElementById("search-filter-form").onsubmit = async (e) => {
    e.preventDefault();

    document.getElementById("jobs").innerHTML = "<h2>Loading...</h2>";

    let userInfo = formInfo();
    
    console.log(userInfo);
    const filter = new Filter(userInfo);
    let parsedJobs = []

    await queryJobs(userInfo.url, userInfo.limit, 0, parsedJobs);
    
    console.log("TOTAL JOBS:", parsedJobs.length);
    
    const filteredJobs = parsedJobs.filter(job => {
        return filter.runFilters(job);
    })
    console.log("FILTERED: ", filteredJobs.length, filteredJobs);

    renderJobs(filteredJobs);
    
}

