
const jobBox = (job) => {
    return `
        <div class="job-box">
            <a href="${job.href}" target="_blank">
                <h3>${job.title}</h3>
            </a>
            
            <p>${job.summary}</p>
            <p>${job.date}</p>
        </div>
    `
}

const renderJobs = (jobs) => {
    const jobsDiv = document.getElementById("jobs");
    let jobsList = ""
    for(let job of jobs){
        jobsList += jobBox(job);
    }
    jobsDiv.innerHTML = jobsList;
}


module.exports = renderJobs;
