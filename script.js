function showtime(){
    var date = new Date();
    var dname = date.getDay(),
        mo = date.getMonth(),
        dnum = date.getDate(),
        yr = date.getFullYear(),
        hr =date.getHours(),
        min =date.getMinutes(),
        sec= date.getSeconds(),
        pe ="AM";

    if (hr ==0){
        hr =12;
    }
    if (hr > 12){
        hr = hr -12;
        pe ="PM";
    }

    Number.prototype.pad = function(digits){
        for (var n=this.toString();n.length<digits;n=0+n);
        return n;
    }


    var month =["January","February","March","April","May","June","July","August","September","October","Novemver","December"];
    var week = ["Sunday", "Monday","Tuesday","Wendnesday","Thursday","Friday","Saturday"];
    var ids =["dayname","month","daynum","year","hour","minutes","seconds","period"];
    var values =[week[dname],month[mo],dnum.pad(2),yr,hr.pad(2),min.pad(2),sec.pad(2),pe];

    for(var i =0;i<ids.length;i++)
    document.getElementById(ids[i]).firstChild.nodeValue =values[i];
}
function init_time(){
    showtime();
    window.setInterval("showtime()",1)

}
init_time();