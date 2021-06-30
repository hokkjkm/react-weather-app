import React from "react";

import "./Formatteddate.css";
export default function Formatteddate(props) {
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        let currentMon = months[props.date.getMonth()];
        let currentDate = props.date.getDate();
        let currentDay = days[props.date.getDay()];
        let currentHr = props.date.getHours();
        let currentMin = props.date.getMinutes();

        function timeAdd0(num) {
            if (num < 10) {
                return "0" + num;
            } else {
                return num;
            }
        }
        currentHr = timeAdd0(currentHr);
        currentMin = timeAdd0(currentMin);

        return(
            <p>{currentDay} {currentMon}. {currentDate} <br /> Last updated at {currentHr}:{currentMin}</p>
         );
    };



