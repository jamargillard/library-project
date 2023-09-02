import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlight = ({ icon, title, para }) => {
    return (
        <div className="highlight">
            <div className="hightlight__img">
                {icon}
            </div>
            <h3 className="highlight__subtitle">{title}</h3>
            <p className="highlight__para">
                {para}
            </p>
        </div>
    );
}

export default Highlight;