import React,{useRef} from 'react';
import {render} from "react-dom";
import {useReactToPrint} from 'react-to-print';
import YBlogo from './YBlogo.jpg';

class ComponentToPrint extends React.Component {
    
    render(){
        //const JoiningLetter = ({ date, toAddress }) => {
        return(
<div className="JoiningLetter" >
    <div style={{ textAlign: 'left', padding: '50px' }}>
    <center>
        <img src={YBlogo} height="200" width="auto" style={{ imgAlign: 'center',padding:'0px'}}/>
      </center>
      <h4>
      <p style={{marginBottom:"1px"}}><b>Ref:YB/DT20221847127/687373/Hyderabad</b></p>
      <p style={{marginBottom:"13px"}}><b>Date: {new Date().toLocaleDateString()}</b></p>
      </h4>
      {/*<h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>JOINING LETTER</h1>*/}
      <p>To,</p>
      <p>[Address],</p>
      <p><b>Sub:Joining Letter</b></p>
      <p>Dear [Name],</p>
      <p style={{ textIndent: '0px' }}>
      We would like to take this opportunity to extend you a very warm welcome to Your Bank(YB) family.
      </p>
      <p style={{ textIndent: '0px' }}>
      We are pleased to inform you that your joining date at YB will be [Date] , your joining
location is Hyderabad and work location is Hyderabad . This has been provided considering
your preference and business requirements.
      </p>
      <p style={{ textIndent: '0px' }}>
      YB Onboarding Team will reach out to you over email in the next few days to guide you further on the
onboarding process and steps to be taken to prepare yourself for onboarding.
      </p>
      <p style={{ textIndent: '0px' }}>
      Congratulations on completing the first phase of your learning through YB Xplore Program. We
appreciate your passion towards learning which has helped you to perform well. You are now set to
experience learning through our coveted YB Xperience Program.
      </p>
      <h4>YB Xperience Program</h4>
      <p style={{ textIndent: '0px' }}>
      Learning is a way of life at YB. The YB Xperience Program will open a world of opportunities and
help you to scale greater heights in your professional life.
      </p>
      <p style={{ textIndent: '0px' }}>
      The program is carefully designed to develop software engineering skills, nurture professionalism and
inculcate a process mindset. This program provides the perfect platform to polish the skills you have
gained through the YB Xplore program, making you 'project ready'.
      </p>
      <p style={{ textIndent: '0px' }}>
      The duration of your YB Xperience Program is based on your performance in YB Xplore program
and business requirements.
      </p>
      <p style={{ textIndent: '0px' }}>
      The program has regular assessments based on pre-defined learning objectives. You are expected to
meet the required standards during the YB Xperience Program. In case, the performance does not
meet the expectations, the management reserves the right to either extend your program or take
appropriate action.
      </p>
      <p style={{ textIndent: '0px' }}>
      As communicated through various forums during the recruitment process, your appointment is subject
to completion of your final academic (UG/PG) course within the stipulated time as specified by your
University/Institute and as per YB selection guidelines. You must also fulfill all the YB eligibility
criteria as stated in the Offer letter.
      </p>
      <p style={{ textIndent: '0px' }}>
      Kindly confirm your acceptance of this program by clicking on the 'I Accept' button in Nextstep portal.
We encourage you to join us on the specified date to enjoy the benefit of timely processing and avail
better opportunities.
      </p>
      <p style={{ textIndent: '0px' }}>
      We look forward to you joining us on an enriching career with YB. Together, let us take this
organization to greater heights!
      </p>
      <p style={{ textIndent: '0px' }}>
      Gear up to experience the future!!
      </p>
      <p style={{ textIndent: '0px' }}>
      Warm regards,
      </p>
      <h5>Krishna.S</h5>
      <h5>Global Head - Talent Development</h5>
      <h5>YB Human Resources</h5>
  
    </div>
    </div>
         );
        }
}
const Example=()=>{
    const componentRef=useRef();
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
    });


return (
    <div>
    <ComponentToPrint ref={componentRef}/>
    <button onClick={handlePrint}>Download</button>
    </div>
);
};

render(<Example/>,document.querySelector("#root"));
export default ComponentToPrint;

