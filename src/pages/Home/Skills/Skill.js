import React from 'react';
import './Skill.css';

const Skill = ({name,bar,skill}) => {
    console.log(name,bar,skill);
    return (
        <div className="bar">
            <div className="info text-start">
                <span>{name}</span>
            </div>
            <div className={`progress-line ${bar}`}>
                <span style={{ width: `${skill}%` }}></span>
            </div>
        </div>
    );
};

export default Skill;