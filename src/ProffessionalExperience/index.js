import React from 'react';


    function ProffessionalExperience (props) {
        
        return(
            <div className="marineCareer">
                <h3>United States Marine Corps – Various Global Locations</h3>
                <h3>2008 - 2016</h3>
            <div className="whenIWasRct">
                <h3>{props.jobTitle[0]}</h3>
                <h3>{props.dates}</h3>
                <p>{props.details[0]}</p>
                <p>{props.accomplishments[0]}</p>
                <p>{props.accomplishments[1]}</p>
                <p>{props.accomplishments[2]}</p>
                <p>{props.accomplishments[3]}</p>
            </div>
                <div className="Inspector-Instructor">
                    <h3>{props.jobTitle[1]}</h3>
                    <p>{props.details[1]}</p>
                    <p>{props.accomplishments[4]}</p>
                    <p>{props.accomplishments[5]}</p>
                    <p>{props.accomplishments[6]}</p>
                    <p>{props.accomplishments[7]}</p>
                    <p>{props.accomplishments[8]}</p>
                </div>
                <div className="pvt-cpl">
                    <h3>{props.jobTitle[2]}</h3>
                    <p>{props.accomplishments[9]}</p>
                    <p>{props.accomplishments[10]}</p>
                    <p>{props.accomplishments[11]}</p>
                    <p>{props.accomplishments[12]}</p>
                </div>
                
            </div>  
            
            
        )
    }

export default ProffessionalExperience;