$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {

            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                    </tr>`;

            $("#data").append(row);
            no++;

        }

    });
    $(function () {
        var url = "https://pomber.github.io/covid19/timeseries.json";
        $.getJSON(url, function (result) {
            console.log(result);
            var confirmed =0;
            var recovered =0;
            var deaths =0;
            for (var country in result) {
                var selectedCountry = result[country];
                var total = selectedCountry.length;
                confirmed = confirmed + selectedCountry[total - 1].confirmed;
                recovered = recovered + selectedCountry[total - 1].recovered;
                deaths = deaths + selectedCountry[total - 1].deaths;
            }
            console.log(confirmed,recovered,deaths);
            $("#confirmed").append(confirmed);
            $("#recovered").append(recovered);
            $("#deaths").append(deaths);
            
        });
    });
    $(function () {

        var url = "https://pomber.github.io/covid19/timeseries.json";
        
        $.getJSON(url, function (result) {
                    
                    
                    var confirmday1 = 0;
                    var confirmday2 = 0;
                    var confirmday3 = 0;
                    var confirmday4 = 0;
                    var confirmday5 = 0;
                    var confirmday6 = 0;
                    var confirmday7 = 0;
                    var death1 = 0;
                    var death2 = 0;
                    var death3 = 0;
                    var death4 = 0;
                    var death5 = 0;
                    var death6 = 0;
                    var death7 = 0;
                    var recover1 = 0;
                    var recover2 = 0;
                    var recover3 = 0;
                    var recover4 = 0;
                    var recover5 = 0;
                    var recover6 = 0;
                    var recover7 = 0;
                    for (var country in result) {
                        var selectedCountry = result[country];
                        var total = selectedCountry.length;
                        confirmday1 = confirmday1 + selectedCountry[total - 1].confirmed;
                        confirmday2 = confirmday2 + selectedCountry[total - 8].confirmed;
                        confirmday3 = confirmday3 + selectedCountry[total - 15].confirmed;
                        confirmday4 = confirmday4 + selectedCountry[total - 22].confirmed;
                        confirmday5 = confirmday5 + selectedCountry[total - 29].confirmed;
                        confirmday6 = confirmday6 + selectedCountry[total - 36].confirmed;
                        confirmday7 = confirmday7 + selectedCountry[total - 43].confirmed;
                        death1 = death1 + selectedCountry[total-1].deaths;
                        death2 = death2 + selectedCountry[total-8].deaths;
                        death3 = death3 + selectedCountry[total-15].deaths;
                        death4 = death4 + selectedCountry[total-22].deaths;
                        death5 = death5 + selectedCountry[total-29].deaths;
                        death6 = death6 + selectedCountry[total-36].deaths;
                        death7 = death7 + selectedCountry[total-43].deaths;
                        recover1 = recover1 + selectedCountry[total-1].recovered;
                        recover2 = recover2 + selectedCountry[total-8].recovered;
                        recover3 = recover3 + selectedCountry[total-15].recovered;
                        recover4 = recover4 + selectedCountry[total-22].recovered;
                        recover5 = recover5 + selectedCountry[total-29].recovered;
                        recover6 = recover6 + selectedCountry[total-36].recovered;
                        recover7 = recover7 + selectedCountry[total-43].recovered;
                    }
    
                    
                    
                
        
            
            
    
        ctx = document.getElementById("graphC").getContext('2d');
          chartColor = "#FFFFFF";
          gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
          gradientStroke.addColorStop(0, '#18ce0f');
          gradientStroke.addColorStop(1, chartColor);
    
          gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
          gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
          gradientFill.addColorStop(1, "rgba(128, 182, 244, 0)");
    
          myChart = new Chart(ctx, {
              type: 'bar',
              responsive: true,
              data: {
                  labels: ["Last 7 week", "Last 6 week", "Last 5 week", "Last 4 week", "Last 3 week", "Last 2 week", "Last week"],
                  datasets: [{
                      label: "Confirmed case",
                      borderColor: "#18ce0f",
                      pointBorderColor: "#FFF",
                      pointBackgroundColor: "#18ce0f",
                      pointBorderWidth: 2,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 1,
                      pointRadius: 4,
                      fill: true,
                      backgroundColor: gradientFill,
                      borderWidth: 2,
                      data: [confirmday7, confirmday6, confirmday5, confirmday4, confirmday3, confirmday2, confirmday1]
                  },
                  {
                    label: "Deaths case",
                    borderColor: "#B91616",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#B91616",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [ death7, death6, death5, death4, death3, death2, death1]
                },
                {
                    label: "Recovered case",
                    borderColor: "#323FE9",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#323FE9",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [recover7, recover6, recover5, recover4, recover3, recover2, recover1]
                }]
              }
              
          });
        });
        })





})