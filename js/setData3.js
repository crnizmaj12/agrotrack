$.getJSON("php/getData3.php",function (data) {
    var items = [];
    $.each(data,function (key,val) {
        items.push("<tr>");
        items.push("<td id='"+key+"'>"+val.Date/Time+"</td>");
        items.push("<td id='"+key+"'>"+val.Serial_number+"</td>");
        items.push("<td id='"+key+"'>"+val.GPS_longitude ['°']+"</td>");
        items.push("<td id='"+key+"'>"+val.GPS_latitude ['°']+"</td>");
        items.push("<td id='"+key+"'>"+val.Total_working_hours_counter [h]+"</td>");
        items.push("<td id='"+key+"'>"+val.Engine_speed [rpm]+"</td>");
        items.push("<td id='"+key+"'>"+val.Engine_load ['%']+"</td>");
        items.push("<td id='"+key+"'>"+val.Fuel_consumption [l/h]+"</td>");
        items.push("<td id='"+key+"'>"+val.Ground_speed_gearbox [km/h]+"</td>");
        items.push("<td id='"+key+"'>"+val.Ground_speed_radar [km/h]+"</td>");
        items.push("<td id='"+key+"'>"+val.Coolant_temperature ['°C']+"</td>");
        items.push("<td id='"+key+"'>"+val.Speed_front_PTO [rpm]+"</td>");
        items.push("<td id='"+key+"'>"+val.Speed_rear_PTO [rpm]+"</td>");
        items.push("<td id='"+key+"'>"+val.current_gear_shift [_]+"</td>");
        items.push("<td id='"+key+"'>"+val.Ambient_temperature ['°C']+"</td>");
        items.push("<td id='"+key+"'>"+val.Parking_brake_status [_]+"</td>");
        items.push("<td id='"+key+"'>"+val.Transverse_differential_lock_status [_]+"</td>");
        items.push("<td id='"+key+"'>"+val.All-wheel_drive_status [_]+"</td>");
        items.push("<td id='"+key+"'>"+val.Actual_status_of_creeper [_]+"</td>");
    });
    $('<tbody/>',{html:items.join("")}).appendTo("table");
});
