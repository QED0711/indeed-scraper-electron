
const formInfo = () => {
    const url = document.getElementById("url").value;
    const limit = document.getElementById("limit").value;
    const date = document.getElementById("date").value;
    const locations = document.getElementById("location").value;
    const noSponsored = document.getElementById("sponsored").checked;
    const onlyResponsive = document.getElementById("responsive").checked;
    
    return{
        url,
        limit,
        date,
        locations,
        noSponsored,
        onlyResponsive
    }
}

module.exports = formInfo;