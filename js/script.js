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

//Chart.js code

let trafficCanvas = document.getElementById('traffic-chart');

let trafficHourly = {
    labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00",
    "8:00", "9:00", "10:00", "11:00"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: .05,
        pointRadius: 5,
        pointBorderWidth: 10,
        pointStyle: 'circle',
        borderColor: 'rgb(116, 119, 191, .5)',
    }]    
};

let trafficDaily = {
    labels: ["11/1/20", "11/2/20", "11/3/20", "11/4/20", "11/5/20", "11/6/20", "11/7/20",
    "11/8/20", "11/9/20", "11/10/20", "11/11/20"],
    datasets: [{
        data: [5000, 7500, 1000, 12500, 15000, 17500, 20000, 18500, 22500, 15000,
            25000],
        backgroundColor: 'rgba(80, 70, 60, .4)',
        borderWidth: 1,
        lineTension: .05,
        pointRadius: 5,
        pointBorderWidth: 10,
        pointStyle: 'circle',
        borderColor: 'rgb(116, 119, 191, .5)',  
    }]    
};

let trafficWeekly = {
    labels: ["8/10/20", "8/17/20", "8/24/20", "8/31/20", "9/14/20", "9/21/20", "9/28/20",
    "10/5/20", "10/12/20", "10/19/20", "10/26/20"],
    datasets: [{
        data: [50000, 85000, 11000, 135000, 150000, 18000, 212000, 230000, 250000, 150000,
            250000],
        backgroundColor: 'rgba(100, 100, 180, .4)',
        borderWidth: 1,
        lineTension: .05,
        pointRadius: 5,
        pointBorderWidth: 10,
        pointStyle: 'circle',
        borderColor: 'rgb(116, 119, 191, .5)',
    }]    
};

let trafficMonthly = {
    labels: ["1/20", "2/20", "3/20", "4/20", "5/20", "6/20", "7/20",
    "8/20", "9/20", "10/20", "11/20"],
    datasets: [{
        data: [500000, 750000, 100000, 1250000, 1500000, 990000, 2010000, 1450000, 1350000, 1500000,
            2500000],
        backgroundColor: 'rgb(90, 150, 200, .4)',
        borderWidth: 1,
        lineTension: .05,
        pointRadius: 5,
        pointBorderWidth: 10,
        pointStyle: 'circle',
        borderColor: 'rgb(90, 150, 200, .5)',
    }]    
};

//function that changes that calls the appropriate dataset when the corresponding button is pushed - still working on it
function updateChart(timeSet) {
    trafficChart.data = timeSet.datasets.data
    chart.update();
};


let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
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
    data: trafficHourly,
    options: trafficOptions,
    
});

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

const user = document.getElementById("userField");
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