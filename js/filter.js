
class Filter {
    constructor(options){
        this.options = options;
    }

    checkLocation(job){ // returns true if job location is a match

        if(this.options.locations === "") return false

        let splitLocation = this.options.locations.split("/");
        let parsedLocation = "";
        splitLocation.forEach(loc => {
            if(parsedLocation.length){
                parsedLocation += "|";
            }
            parsedLocation += `(${loc.trim()})`;
        });
        let remove = new RegExp(parsedLocation, "ig");
        return remove.test(job.location);
        
    }

    checkSponsored(job){
        if(this.options.noSponsored){
            return job.sponsored
        } else {
            return false;
        }
    }

    checkResponsive(job){
        if(this.options.onlyResponsive){
            return job.responsive
        } else {
            return true;
        }
    }

    runFilters(job){
        
        if(
            this.checkLocation(job)
            ||
            this.checkSponsored(job)
            ||
            !this.checkResponsive(job)
        ) return false;

        return true;
    }

}

// const job = {location: "Burbank, MA", sponsored: false, responsive: true};

// let test = new Filter({locations: ", CA / DC", noSponsored: true, onlyResponsive: true});

// console.log(test.runFilters(job));

module.exports = Filter; 