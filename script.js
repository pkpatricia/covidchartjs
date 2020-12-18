

var ctx = document.getElementById('myChart').getContext('2d');

// Get the data
d3.json("https://api.covidtracking.com/v1/states/current.json").then(function(data) {

    let states = [];
    let percentages = [];

    // Sort the Data from Largest to Smallest
    data.sort((a, b) => ((b.positive / b.totalTestResults) * 100) - ((a.positive / a.totalTestResults) * 100));

    data.forEach((data) => {
        states.push(data.state);
        percentages.push(((data.positive / data.totalTestResults) * 100).toPrecision(3));
        console.log("The state of " + data.state + " currently has a positive testing percentage of: " + ((data.positive / data.totalTestResults) * 100).toPrecision(3) + "%.");
        console.log(`The state of ${data.state}'s information was last updated on ${(data.lastUpdateEt)}.`);
    });

    /*data.forEach((data) => {
        console.log(`The state of ${data.state}'s information was last updated on ${data.lastUpdateEt}.`);
    })*/

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data:{
            labels: states,
            datasets: [{
                label: 'Daily Positive Covid Test Results',
                data: percentages,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: 'True',
                        stepSize: 2
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }
        }
    });
});
