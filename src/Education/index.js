import React from 'react';

    let justTryinToLearnThings = "Education";
    const college = 'Wake Technical Community College';
    let practiceDate = 2018;

    function Education () {
        return(
            <div className="superEducatedBoy">
                <div className="accomplishedAtCollege">
                    <h3>{justTryinToLearnThings}</h3>
                    <h3>{college}</h3>
                    <h3>2018 - Present</h3>
                    <p>{college}</p> 
                    <p>Concentration in Information Technology: Mobile App Development.</p>
                </div>

                <div className="codeTheDreamWasAwesome">
                    <h3>{practiceDate} to Present</h3>
                    <p>Courses in computer programming and web development including JavaScript, HTML, CSS, Git and GitHub, and introduction to React.js.</p>
                </div>
            </div>
            )
    } 

    

export default Education;