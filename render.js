const queryJobs = require('./js/queryJobs');
const formInfo = require("./js/formInfo");
const Filter = require("./js/filter");


document.getElementById("search-filter-form").onsubmit = async (e) => {
    e.preventDefault();
    let userInfo = formInfo();
    
    console.log(userInfo);
    const filter = new Filter(userInfo);
    let parsedJobs = []

    await queryJobs(userInfo.url, userInfo.limit, 0, parsedJobs);
    
    console.log(parsedJobs);
    
    const filteredJobs = parsedJobs.filter(job => {
        return filter.runFilters(job);
    })
    console.log(filteredJobs);
    
}

