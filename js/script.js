/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// This closes the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}

//This variable grabs the notification green bubble
const notification = document.getElementById("notifications");

//This even listener makes the bubble dissappear after it's clicked
notification.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("dropbtn") ) {
        notification.style.display = "none"
    }
});

//Alert banner JS
//This grabs the alert banner in a variable.
const alertBanner = document.getElementById("alert");

//This creates the html for the alert banner

alertBanner.innerHTML =
`
<div class="alert-banner">
    <p><strong>Alert:</strong> Chart data is updated hourly</p>
    <p class="alert-banner-close">x</p>
</div>
`
               
// This event listener closes the alert banner when the x is clicked

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close") ) {
        alertBanner.style.display = "none"
    }
});

//Chart.js code - implementation of the charts and chart-switching feature.

let trafficNav = document.querySelector('.traffic-nav');

let trafficCanvas = document.getElementById('traffic-chart');

const trafficLinks = trafficNav.querySelectorAll('.traffic-nav-link');

const hourly = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500];
const daily = [5000, 7500, 1000, 12500, 15000, 17500, 20000, 18500, 22500, 15000,
    25000];
const weekly = [50000, 85000, 11000, 135000, 150000, 18000, 212000, 230000, 250000, 150000,
    250000];
const monthly = [500000, 750000, 100000, 1250000, 1500000, 990000, 2010000, 1450000, 1350000, 1500000,
    2500000];

const hourlyLabels = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00",
"8:00", "9:00", "10:00", "11:00"];
const dailyLabels =  ["11/1/20", "11/2/20", "11/3/20", "11/4/20", "11/5/20", "11/6/20", "11/7/20",
"11/8/20", "11/9/20", "11/10/20", "11/11/20"];
const weeklyLabels = ["8/10/20", "8/17/20", "8/24/20", "8/31/20", "9/14/20", "9/21/20", "9/28/20",
"10/5/20", "10/12/20", "10/19/20", "10/26/20"];
const monthlyLabels = ["1/20", "2/20", "3/20", "4/20", "5/20", "6/20", "7/20",
"8/20", "9/20", "10/20", "11/20"];

let trafficData = {
    labels: hourlyLabels,
    datasets: [{
        data: hourly,
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: .05,
        pointRadius: 5,
        pointBorderWidth: 10,
        pointStyle: 'circle',
        borderColor: 'rgb(116, 119, 191, .5)',
    }]    
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 2
        
    },
    scales: {
        yaxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions,
    
});

const classChange = (element, parent, name) => {
    for (let i = 0; i < parent.length; i += 1) {
      if (parent[i].classList.contains(name)) {
        parent[i].classList.remove(name);
      }
    }
    element.classList.add(name);
  };

trafficNav.addEventListener('click', e => {
    // Check if the clicked element is a list item 
    if (e.target.tagName === 'LI') {
      let link = e.target;
      // Add the active state class to the clicked list item
      classChange(link, trafficLinks, 'traffic-link--active');
      // If the clicked link is Hourly
      if (link.textContent === 'Hourly') {
        // Call the updatetrafficChart function to update the chart data
        updateTrafficChart('hourly', hourly);
      } // If Daily is clicked
      if (link.textContent === 'Daily') {
        updateTrafficChart('daily', daily);
      } //same as above
      if (link.textContent === 'Weekly') {
        updateTrafficChart('weekly', weekly);
      } // more of the same, this time monthly.
      if (link.textContent === 'Monthly') {
        updateTrafficChart('monthly', monthly);
      }
    }
  });

  const updateTrafficChart = (labels, datasets) => {
    // Set the Hourly labels
    if (labels === 'hourly') {
      trafficData.labels = hourlyLabels;
    } else if (labels === 'daily') {
      trafficData.labels = dailyLabels;
    } else if (labels === 'weekly') {
      trafficData.labels = weeklyLabels;
    } else if (labels === 'monthly') {
      trafficData.labels = monthlyLabels;
    }
    // Set the Hourly data
    trafficData.datasets[0].data = datasets;
    // Update the chart
    trafficChart.update();
  }

//Bar chart JS

const dailyCanvas = document.getElementById("daily-chart");

//data for daily traffic bar chart

const dailyData = {
    labels: ["S","M","T","W","T","F","S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: ['#7477BF',
                          '#FF4900',
                          '#74B1BF',
                          '#81C98F',
                          'coral',
                          'yellow',
                          'cornflowerblue'
    ],
        borderWidth: 1,
        responsive: true,
        maintainAspectRatio: true,
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones", "Robot", "Flip Phone"],
    datasets: [{
        label: '# of Users',
        data: [1500, 1025, 450, 50, 25],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8',
            '#FF4900',
            'yellow'           
        ],
        responsive: true,
        maintainAspectRatio: true
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
      }
    }

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//Autocomplete functionality for the 'Search for User' field in the Message User Area

let user = document.getElementById("userField");

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

  let users = ["Nick Huemmer", "Emily Burger", "Alex Grabowski", "Elaine Chun", "Farikh Ansfar", "Edward Scissorhands", "Charlie Brown", "George Michael", "Bruce Springsteen", "Tom Cruise", "FrankenWeenie"];
  
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(user, users);


const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {

    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
      alert("Please fill out user field before sending");
    } else if (message.value === "") {
      alert("Please fill out message field before sending");
    } else {
      alert(`Message successfully sent to: ${user.value}`);  
    }

});

//localStorage Code

//variables


const emailSettingsCheckBox = document.getElementById('emailSetting');
const profileSettingsCheckBox = document.getElementById('profileSetting');
const timezoneSelect = document.getElementById('timezone');
const saveSettingsBtn = document.getElementById('save');
const cancelSettingsBtn = document.getElementById('cancel');


//Functions for LocalStorage

function saveSettings(settings) {
    if (settings === 'email') {
      if (emailSettingsCheckBox.checked) {
        localStorage.setItem('Email Notifications', 'on');
      } else {
        localStorage.setItem('Email Notifications', 'off');
      }
    }
    if (settings === 'profile') {
      if (profileSettingsCheckBox.checked) {
        localStorage.setItem('Profile Public', 'on');
      } else {
        localStorage.setItem('Profile Public', 'off');
      }
    }
    if (settings === 'timezone') {
      let selectedTimezone = timezoneSelect[timezoneSelect.selectedIndex];
      if (selectedTimezone.textContent === 'Eastern') {
        timezonePreference = localStorage.setItem('Timezone', 'Eastern');
      } else if (selectedTimezone.textContent === 'Central') {
        timezonePreference = localStorage.setItem('Timezone', 'Central');
      } else if (selectedTimezone.textContent === 'Mountain') {
        timezonePreference = localStorage.setItem('Timezone', 'Mountain');
      } else if (selectedTimezone.textContent === 'Pacific') {
        timezonePreference = localStorage.setItem('Timezone', 'Pacific');
      }
    }
    alert('Settings successfully saved!')
  }

  const addUserSettings = () => {
    /* Get the user's email and profile setting preferences
      Compare the values and reflect the settings for the checkboxes states
    */
    let emailPreference = localStorage.getItem('Email Notifications');
    if (emailPreference === 'on') {
      emailSettingsCheckBox.checked = true;
    }
    if (emailPreference === 'off') {
      emailSettingsCheckBox.checked = false;
    }
  
    let profilePreference = localStorage.getItem('Profile Public');
    if (profilePreference === 'on') {
      profileSettingsCheckBox.checked = true;
    }
    if (profilePreference === 'off') {
      profileSettingsCheckBox.checked = false;
    }
    // Get the user's timezone setting preference, compare the value and reflect the setting for the select option
    let timezonePreference = localStorage.getItem('Timezone');
    if (timezonePreference === 'Eastern') {
      timezoneSelect.selectedIndex = '1';
    }
    if (timezonePreference === 'Central') {
      timezoneSelect.selectedIndex = '2';
    }
    if (timezonePreference === 'Mountain') {
      timezoneSelect.selectedIndex = '3';
    }
    if (timezonePreference === 'Pacific') {
      timezoneSelect.selectedIndex = '4';
    }
  }

  saveSettingsBtn.addEventListener('click', () => {
    saveSettings('email');
    saveSettings('profile');
    saveSettings('timezone');
  });
  
  cancelSettingsBtn.addEventListener("click", () => {
    if (emailSettingsCheckBox.checked) {
      emailSettingsCheckBox.checked = false;
    }
    if (profileSettingsCheckBox.checked) {
      profileSettingsCheckBox.checked = false;
    }
  });
