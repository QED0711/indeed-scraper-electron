
const request = require("request");
const cheerio = require("cheerio");

const cookie = require('./indeedCookie');

const j = request.jar();


// ================================================================

const parseHTML = (body) => {
    return cheerio.load(body)
}

const getJobCards = ($) => {
    return $(".jobsearch-SerpJobCard").toArray()
}

const parseJobCard = ($, jobCard) => {
    return parseHTML($(jobCard).html())
}

const hasNextPage = ($) => {
    return !!($(".np").last().text().match(/next/i))
}

const returnParsedJobs = (jobs, $) => {
    let parsedJobs = []
    let $$;
    jobs.forEach(job => {
        $$ = parseJobCard($, job);
        parsedJobs.push({
            title: $$(".jobtitle").text().trim(),
            href: `https://www.indeed.com${$$("a").first().attr("href")}`,
            location: $$(".location").text().trim(),
            summary: $$(".paddedSummary").text().trim(),
            responsive: !($$(".serp-ResponsiveEmployer").text() === ""),
            date: $$(".date").text().trim(),
            sponsored: !($$(".sponsoredGray").text() === "Sponsored")
        })
    })
    return parsedJobs
}

const queryJobs = (url, limit = 100, index = 0, parsedJobs = []) => {
    return new Promise(resolve => {
        const sendRequest = (url, limit = 100, index = 0, parsedJobs = []) => {
            // j.setCookie(cookie, url)
            request({url: url + `&start=${index}`/* , jar: j */}, function(err, response, body){    

                if(err){
                    console.log(err);
                    return
                }

                const $ = parseHTML(body);
                const jobs = getJobCards($);
                
                if(parsedJobs.length < limit){
                    parsedJobs.push(...returnParsedJobs(jobs, $));
                } else {
                    resolve(parsedJobs);
                }
                
                if(hasNextPage($)){
                    return sendRequest(url, limit, index + 10, parsedJobs);
                }                
            })            
        }
        sendRequest(url, limit, index, parsedJobs);
    })
}



// queryJobs("https://www.indeed.com/jobs?q=&l=washington+dc&fromage=last", 25);


module.exports = queryJobs;