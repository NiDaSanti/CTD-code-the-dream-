import React from 'react';
import ResumeHeading from '../../ResumeHeading';
import Education from '../../Education';
import SpecialTalents from '../../SpecialTalents';

//import ProffessionalExperience from '../../ProffessionalExperience';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            aboutMe: [],
            education: [],
            proffessionalExperience: []
        }
    }

    componentDidMount() {
        this.aboutMe();
        this.education();
        this.proffessionalExperience();
    }
        aboutMe() {
            const url = "https://api.airtable.com/v0/appCzobjk4aYpwaI8/AboutMe?maxRecords=3&view=Grid%20view" 
            fetch(
                url,
                {headers: {Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY}}
            )
            .then(response => response.json())
            .then(responseData => {
                console.log('My data', responseData);
                const aboutMe = responseData.records;
                this.setState({aboutMe}, () => {});
            });
        }

        education() {
            const url = "https://api.airtable.com/v0/appCzobjk4aYpwaI8/education?maxRecords=3&view=Grid%20view"
            fetch(
                url,
                {headers: {Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY}}
            )
            .then(response => response.json())
            .then(responseData => {
                console.log('My data', responseData);
                const education = responseData.records;
                this.setState({education}, () => {});
            });
        }

        proffessionalExperience() {
            const url = "https://api.airtable.com/v0/appCzobjk4aYpwaI8/proffessionalExperience?maxRecords=3&view=Grid%20view"
            fetch(
                url,
                {headers: {Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY}}
            )
            .then(response => response.json())
            .then(responseData => {
                console.log('My data', responseData);
                const proffessionalExperience = responseData.records;
                this.setState({proffessionalExperience}, () => {});
            });
        }
        render() {
            return (
                <div className="resumePage">
                    <ResumeHeading />
                    <Education />
                    <SpecialTalents />

                </div>
            )
            
        }
    }


/*const Resume = () => (
    <div className="resumePage">
        <ResumeHeading />
        <Education />
        <ProffessionalExperience Resume={Resume} /> 
        <SpecialTalents /> }
    </div>
    ) 
*/
export default Resume 