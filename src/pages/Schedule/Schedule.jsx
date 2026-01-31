import React from 'react';
import scheduleImage from "./ignus.png";
import './schedule.css';
import usePageTitle from "../../hooks/usePageTitle";

const Schedule = () => {
    usePageTitle("Schedule");
    return (
        <div className="schedule-container">
            <img
                src={scheduleImage}
                alt="IGNUS'26 Schedule"
                className="schedule-image"
            />
        </div>
    );
};

export default Schedule;
