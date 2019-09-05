import React from 'react';
import ResumeHeading from './Components/ResumeHeading';
import MainDescription from './Components/MainDescription';
import SpecialTalents from './Components/SpecialTalents';
import Education from './Components/Education';
import ProffessionalExperience from './Components/ProffessionalExperience';
//import {marine, company, jobTitle, dates, details, accomplishments} from './Components/ProffessionalExperience'; 

function Resume() {
  return (
    <div className="App">
      <ResumeHeading />
      <MainDescription />
      <SpecialTalents />
      <Education 
        college="Wake Technical Community College" />
      <ProffessionalExperience
         company="United States Marine Corps"
         jobTitle={["Recruiter", "Supply Manager", "Operations Manager"]}
         dates="2008 - 2016"
         details={["Planned and executed daily, weekly, and monthly plans to include obtaining names, prospecting, screening, selling, and contracting. Targeted specific needs and qualifications required for recruitment, created mission goals, and promoted effective development programs; conducted background checks and found the right personnel for the right job. Attained 16 contracts with a recruit training attrition rate of 0%.",
         "Properly maintained armory procedures and accountability of all weapons, optics, communication assets, ammunition, and records folder totaling over $1M."]}
         accomplishments={["Informed employees and management of policies, career opportunities and benefit options leading to a more knowledgeable workforce with increased retention efforts.", 
         "Mentored new and potential employees on relocation, company climate, orientation and completed new hire documentation to allow for seamless and comfortable transition.", 
    "Engaged employees in their work environment providing a more cohesive setting for communication that helped foster cooperative interactions between departments",
    "Represented the U.S. Marine Corps in the local community during enhanced area canvassing and special events in support of the recruiting mission; maintained working relationships with educators and local officials in the community in support of the recruiting objective.",
    "Maintained an almost perfect score on annual armory inspection and maintained unit readiness",
    "Ensured that weapons inspections were scheduled in a timely manner prior to every live fire exercise to include combat deployments",
    "Served as the company’s substance abuse program and supervised an aggressive urinalysis program; conducted training that educated personnel on drugs and alcohol use and outreach programs",
    "Demonstrated time management and problem solving skills that ensured supply levels were maintained for resupply services for military equipment operating in critical timeframes",
    "Managed the professional growth and counseling of personnel daily; resulted in quarterly and yearly evaluation reports, career development charts and mentorship counseling.",
    "Ensured accountability on all equipment by training and instructing subordinates to ensure and continue unit readiness", 
    "Implemented training and planning for the company of over 120 Marines; ensured training plans that encompassed the Unit’s guidance", 
    "Demonstrated time management and problem solving skills that ensured fuel supply levels were maintained for resupply services for military equipment operating in critical time frames"]} />
    </div>
  );
}


export default Resume;