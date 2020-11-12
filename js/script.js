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

let trafficCanvas = document.getElementById('traffic-chart').getContext('2d');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [250, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: .05,
        pointRadius: 5,
        pointBorderWidth: 10,
        pointStyle: 'circle',
        borderColor: 'rgb(116, 119, 191, .5)',
        responsive: true,
        maintainAspectRatio: true
    }]    
};

function updateChart() {
    trafficChart.trafficData.datasets.data = [250, 500, 750, 1000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500]; 
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
    data: trafficData,
    options: trafficOptions,
    
});

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