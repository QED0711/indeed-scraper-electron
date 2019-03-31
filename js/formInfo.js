
const formInfo = () => {
    const url = document.getElementById("url").value;
    const limit = document.getElementById("limit").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const sponsored = document.getElementById("sponsored").checked;
    const responsive = document.getElementById("responsive").checked;
    
    return{
        url,
        limit,
        date,
        location,
        sponsored,
        responsive
    }
}

module.exports = formInfo;