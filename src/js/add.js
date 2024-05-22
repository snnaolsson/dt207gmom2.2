
const companynameInput = document.getElementById("companyname");
const jobtitleInput = document.getElementById("jobtitle");
const locationInput = document.getElementById("location");
const startdateInput = document.getElementById("startdate");
const enddateInput = document.getElementById("enddate");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", postJob, false);

async function postJob(event){
    event.preventDefault();

    let job = {
        companyname: companynameInput.value,
        jobtitle: jobtitleInput.value,
        location: locationInput.value,
        startdate: startdateInput.value,
        enddate: enddateInput.value

    };

    const response = await fetch('http://127.0.0.1:3000/cv/jobs', {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(job)
    });

    let data = await response.json();
    return data;

}