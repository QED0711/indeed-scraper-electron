const queryJobs = require('./js/queryJobs');
const formInfo = require("./js/formInfo");


document.getElementById("search-filter-form").onsubmit = async (e) => {
    e.preventDefault();
    let userInfo = formInfo();
    
    console.log(userInfo);
    
    let parsedJobs = []

    await queryJobs(userInfo.url, userInfo.limit, 0, parsedJobs);
    console.log(parsedJobs);
    
}

