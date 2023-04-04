function searchJobs() {
    let input = document.getElementById("searchInput").value.toUpperCase();
    let jobList = document.getElementById("jobList");
    let jobs = jobList.getElementsByTagName("li");
  
    for (let i = 0; i < jobs.length; i++) {
      let job = jobs[i];
      let text = job.textContent.toUpperCase();
  
      if (text.indexOf(input) > -1) {
        job.style.display = "";
      } else {
        job.style.display = "none";
      }
    }
  }
  