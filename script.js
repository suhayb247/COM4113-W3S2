document.getElementById('addJobForm').addEventListener('submit', function(e) {
              e.preventDefault();
              const jobTitle = document.getElementById('newJobTitle').value;
              addJob(jobTitle);
              document.getElementById('newJobTitle').value = ''; // Clear the input field
          });
          
          function addJob(title) {
              const li = document.createElement('li');
              li.textContent = title;
              li.className = 'list-group-item';
              document.getElementById('jobList').appendChild(li);
          }
          
          function filterJobs() {
              const filter = document.getElementById('jobFilter').value.toUpperCase();
              const li = document.getElementById('jobList').getElementsByTagName('li');
          
              for (let i = 0; i < li.length; i++) {
                  const txtValue = li[i].textContent || li[i].innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      li[i].style.display = "";
                  } else {
                      li[i].style.display = "none";
                  }
              }
          }
          