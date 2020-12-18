// var queryUrl = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&collapse=monthly&api_key=${apiKey}`;
// var queryUrl = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&collapse=monthly&api_key=${apiKey}`;
const query = `https://api.covidactnow.org/v2/states.timeseries.json?apiKey=${API_KEY}`;
var ctx = document.getElementById('myChart').getContext('2d');

// Get the data
d3.json(query).then(function(data) {

    // Sort the Data from Largest to Smallest
    data.sort((a, b) => (b.metrics.testPositivityRatio * 100) - (a.metrics.testPositivityRatio* 100));


    data.forEach((data) => {

        //console.log(`The state of ${data.state}'s information was last updated on ${data.lastUpdateDate}.`);
        console.log(data.state + " " + data.metrics.testPositivityRatio * 100);
        //console.log(data);
    });
});
