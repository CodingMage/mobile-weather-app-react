import React from 'react';

function Getdate() {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var d = new Date();
    var dayName = days[d.getDay()];
    var month = monthNames[d.getMonth()];
    var day = d.getDate();

    return (
        <div className='date'>
            {dayName} -- {day}  {month}
        </div>
    )
}

export default Getdate