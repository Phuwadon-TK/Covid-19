
const thaiToday = "https://covid19.th-stat.com/api/open/today";

$(function () {

    $.get(thaiToday, function (data) {

        $("#con").empty();
        const Conf = 
        data.Confirmed
      $("#con").append(Conf);

      $("#Rcon").empty();
        const RConf = 
        data.NewConfirmed
      $("#Rcon").append(RConf);
      
      $("#recove").empty();
      const re = 
      data.Recovered
    $("#recove").append(re)

    $("#NRe").empty();
      const Nre = 
      data.NewRecovered
    $("#NRe").append(Nre)


      $("#death").empty();
        const d = 
        data.Deaths
      $("#death").append(d);

      $("#dth").empty();
        const Dth = 
        data.NewDeaths
      $("#dth").append(Dth);

      $("#date").empty();
        const dd = 
        data.UpdateDate
      $("#date").append(dd);
        
    });
});