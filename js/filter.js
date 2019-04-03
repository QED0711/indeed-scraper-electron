
class Filter {
    constructor(job, options){
        this.job = job;
        this.options = options;
    }

    checkLocation(){ // returns true if job location is a match
        let splitLocation = this.options.locations.split("-");
        let parsedLocation = "";
        splitLocation.forEach(loc => {
            if(parsedLocation.length){
                parsedLocation += "|";
            }
            parsedLocation += `(${loc.trim()})`;
        });
        let remove = new RegExp(parsedLocation, "ig");
        return remove.test(this.job.location);
        
    }

    checkSponsored(){
        return this.job.sponsored
    }

    checkResponsive(){
        return this.job.responsive
    }

    runFilters(){

    }

}



let test = new Filter({location: "Burbank, CA", sponsored: true, responsive: false}, {locations: ", CA - DC"});

console.log(test.checkLocation());

// module.exports = Filter; 