const timeLine = "https://api.covid19api.com/summary";

$(document).ready(function () {
    $.get(timeLine, function (Country) {
        $("#myTable").DataTable({
            processing: true,
            data: Country.Countries,
            columns: [

                { data: "Country" },
                { data: "Date" },
                { data: "TotalConfirmed" },
                { data: "TotalRecovered" },
                { data: "TotalDeaths" },
                

            ],
        });





    }).fail(function () {
        alert("Can not data from URL");
    });
});

