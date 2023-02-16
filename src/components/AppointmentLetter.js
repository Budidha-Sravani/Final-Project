import React,{useRef} from 'react';

import {render} from "react-dom";
import {useReactToPrint} from 'react-to-print';
import YBlogo from './YBlogo.jpg';

class ComponentToPrint extends React.Component {
    
    render(){
  return (
      
    <div className="AppointmentLetter" >
    <div style={{ textAlign: 'left', padding: '50px' }}>
    <center>
        <img src={YBlogo} height="200" width="auto"/>
      </center>
      <p style={{marginBottom:"13px"}}><b>Offer: Computer Consultancy</b></p>
      <p style={{marginBottom:"1px"}}><b>Ref:YB/DT20221847127/687373/Hyderabad</b></p>
      <p style={{marginBottom:"13px"}}><b>Date: {new Date().toLocaleDateString()}</b></p>

      <p>To,</p>
      <p>[Address],</p>
      <p>Dear [Name],</p>
      <p><b>Sub: AppointmentLetter</b></p>
      <p style={{ textIndent: '0px' }}>
      Thank you for exploring career opportunities with Your Bank(YB).
You have successfully completed our initial selection process and we are pleased to make you
an offer.
      </p>
      <p style={{ textIndent: '0px' }}>
      This offer is based on your profile and performance in the selection process. You have been
selected for the position of<b> Assistant System Engineer-Trainee</b> in Grade Y. You will be a
part of the application development and maintenance projects across any of the business units of
YB.
      </p>
      <p style={{ textIndent: '0px' }}>
      Your gross salary including all benefits will be <b>3,36,877/-</b> per annum, as per the terms and
conditions set out herein. Over and above this, you will also be eligible for Learning Incentives
(Readiness Incentive and/or Competency Incentive) basis your performance in YB Xplore
Program which gives you an additional earning potential of upto <b>Rs.60,000</b> during the first
year.Annexure-1 provides the break-up of the compensation package.
      </p>
      <p style={{ textIndent: '0px' }}>
      Kindly confirm your acceptance of this offer online through the option 'Accept Offer letter'. If not
accepted within 7 Days, it will be construed that you are not interested in this employment and
this offer will be automatically withdrawn.
      </p>

      <p style={{ textIndent: '0px' }}>
      After you accept this offer, you will be given a joining letter indicating the details of your joining
date and initial place of posting. The Joining letter will be issued to you only upon successful
completion of your academic course, you meeting the YB eligibility criteria & you completing the
mandatory pre-joining learning curriculum named YB Xplore (detailed under Terms & Conditions). You will also be issued a letter of appointment at the time of your joining after
completing joining formalities as per company policy. Your offer is subject to a positive
background check.
      </p>
      <b><u>COMPENSATION AND BENEFITS</u></b>
      <p><b>BASIC SALARY</b></p>
      <p style={{ textIndent: '0px' }}>
      You will be eligible for a basic salary of <b>`14,784/-</b> per month.
      </p>
      <b>BOUQUET OF BENEFITS (BoB)</b>
      <p style={{ textIndent: '0px' }}>
      Bouquet of Benefits offers you the flexibility to design this part of your compensation within the
defined framework, twice in a financial year. All the components will be disbursed on a monthly
basis.
      </p>
      <p style={{ textIndent: '0px' }}>
      The components under Bouquet of Benefits are listed below. The amounts given here for each of
the components below are as per pre-defined structure. However you may want to re-distribute
the BoB amount between the components as per your tax plan, once you join YB. To design
your Bouquet of Benefits, you may access the link to BoB in the "Employee Self Service" link on
"Ultimatix", the internal portal of YB. Taxation will be governed by the Income Tax rules. YB
will be deducting tax at source as per income tax guidelines.
      </p>
      <b>1. House Rent Allowance (HRA)</b>
      <p style={{ textIndent: '0px' }}>
      Your HRA will be <b> `5,914/-</b> per month. While restructuring your BoB amount to
various components, it is mandatory that at least 5% of monthly basic pay be allocated
towards HRA.
      </p>
      <b>2. Leave Travel Allowance</b>
      <p style={{ textIndent: '0px' }}>
      You will be eligible for annual Leave Travel Allowance which is equivalent to one month's
basic salary or a pro-rata amount in case you join during the financial year. This will be
disbursed on a monthly basis along with the monthly salary. To avail income tax benefits,
you need to apply for a minimum of three days of leave and submit supporting travel
documents.

      </p>
      <b>3. Food Card</b>
      <p style={{ textIndent: '0px' }}>
      You will be eligible for a Food Card. It can be used to purchase food items at all domestic
VISA enabled restaurants and fast food restaurants including YB cafeterias.As per the
Pre-Defined structure you will be eligible for a Food Card with an amount of<b> `500/-</b>
being credited to this card per month. However you may want to re-distribute the BoB
amount between the components as per your tax plan, once you join YB.
      </p>
      <b><u>PERFORMANCE PAY</u></b>
      <p><b>Monthly Performance Pay</b></p>
      <p style={{ textIndent: '0px' }}>
      You will receive a monthly performance pay of<b> `1,700/-</b>. The same will be reviewed on
completion of your first Anniversary with the company and will undergo a change basis your own
ongoing individual performance.
      </p>
      <b>Quarterly Variable Allowance</b>
      <p style={{ textIndent: '0px' }}>
      Your variable allowance will be<b> `600/-</b> per month, and will be paid at the closure of each
quarter based on the performance of the company and your unit and to the extent of your
allocation to the business unit.
      </p>
      <p style={{ textIndent: '0px' }}>
      Quarterly Variable Allowance is subject to review on your first anniversary and may undergo a
change based on the actual performance of the Company, your business unit and your own
ongoing individual performance. The payment is subject to your being active on the company
rolls on the date of announcement of Quarterly Variable Allowance.
      </p>
      <p style={{ textIndent: '0px' }}>
      This Pay/Allowance shall be treated as productivity bonus in lieu of statutory profit bonus.
      </p>
      <p style={{ textIndent: '0px' }}>
      Performance Pay will be effective upon successful completion of the YB Xplore Programme.
      </p>
      <b><u>CITY ALLOWANCE</u></b>
      <p style={{ textIndent: '0px' }}>
      You will be eligible for a City Allowance of <b>`200/- </b>per month. This is specific to India and is
linked to your base branch. In the event of a change in your base branch this amount may
undergo a change. It will stand to be discontinued while on international assignments. This
allowance is fully taxable and subject to review.
      </p>
      <b><u>XPLORE/ LEARNING INCENTIVES</u></b>
      <p style={{ textIndent: '0px' }}>
      You will be eligible for Readiness Incentive AND/ OR Competency Incentive, basis your
performance in YB Xplore Program. The incentives gives you an additional earning potential of
upto Rs.60,000 over and above your CTC during the first year.
      </p>
      <b><u>OTHER BENEFITS</u></b>
      <p><b>Health Insurance Scheme</b></p>
      <p style={{ textIndent: '0px' }}>
      YB brings the benefit of health insurance cover to you and your dependants under the
company's Health Insurance Scheme(HIS).
      </p>
      <p style={{ textIndent: '0px' }}>
      HIS offers the following benefits:
      </p>
      <p><b>1. Basic Cover</b></p>
      <p>
        i. Entitlement - Includes domiciliary expenses up to `6,000/- per insured person per
annum and basic hospitalization expenses up to `2,00,000/- per insured person per
annum.</p>
<p>
ii. Premium - Basic premium for self, spouse and three children is entirely borne by YB,
provided these members are explicitly enrolled by you under the scheme. Additionally, if
you wish to cover dependent parents/parents-in-law or remaining children, the applicable
premium per insured person is to be borne by you.
      </p>
      <b>2. Higher Hospitalisation</b>
      <p>
      Coverage under Higher Hospitalisation is mandatory. Under this scheme, you and your
enrolled dependents will be automatically covered under Higher Hospitalisation benefits.
      </p>
      <p>
      i. Entitlement - You and your enrolled dependants will be entitled for `12, 00,000/- as a
family floater coverage towards hospitalisation expenses, over and above the individual
basic coverage.
      </p>
      <p>
      ii. Premium - For Higher Hospitalisation, a part of the premium will be recovered from your
salary and the differential premium will be borne by YB.
      </p>
     <b>Maternity Leave</b>
     <p>Women employees are eligible to avail maternity leave of twenty six weeks. Adopting or
commissioning mother,may avail maternity leave for twelve weeks. For more details on the
benefits and eligibility, once you join, please refer YB India Policy - Maternity Leave.
</p>
    <b> Your Bank Employees' Welfare Trust (YBWT)</b>
    <p>
    You will become a member of the YBWT, on completion of continuous association of one year
from the date of joining YB. A nominal annual membership fee of `250/- will be recovered
from you for the same. The Trust provides financial assistance by way of grants/ loans in
accordance with the rules framed by the Trust from time to time for medical and educational
purposes and in case of death of members while in service.
    </p>
    <b>Loans</b>
    <p>
    You will be eligible for loans, as per YB's loan policy.
    </p>
    <b>Professional Memberships</b>
    <p>
    You will be eligible for reimbursement of expenses towards professional membership as per
YB's policy.
</p>
    <b><u>RETIRALS</u></b>
    <p><b>Provident Fund</b></p>
    <p>
    You will be a member of the Provident Fund as per the provisions of "The Employees Provident
Fund and Miscellaneous Provisions Act, 1952", and YB will contribute 12% of your basic
salary every month as per the provisions of the said Act.
    </p>
<b>Gratuity</b>
<p>
You will be entitled to gratuity as per the provisions of the Gratuity Act, 1972
</p>
<b><u>TERMS AND CONDITIONS</u></b>
<p>
    <b>1. Aggregate Percentage Requirements</b>
</p>
<p>
Your appointment will be subject to your scoring minimum aggregate (aggregate of all
subjects in all semesters) marks of 60% or above (or equivalent CGPA as per the
conversion formula prescribed by the Board / University) in the first attempt in each of
your Standard Xth, Standard XIIth, Diploma (if applicable) and highest qualification
(Graduation/ Post Graduation as applicable) which includes successful completion of your
final semester/year without any pending arrears/backlogs. As per the YB eligibility
criteria, marks/CGPA obtained during the normal duration of the course only will be
considered to decide on the eligibility.
</p>
<p>
As communicated to you through various forums during the recruitment process, your
appointment is subject to completion of your course within the stipulated time as specified
by your University/Institute and as per YB selection guidelines.
</p>
<p>
It is mandatory to declare the gaps/arrears/backlogs, if any, during your academics and
work experience. The management reserves the right to withdraw/revoke the
offer/appointment at any time at its sole discretion in case any discrepancy or false
information is found in the details submitted by you.
</p>
<b>2. Pre requisites for Joining</b>
<p>
To enable your readiness to work on assignments upon joining, we have put together a
comprehensive learning program named YB Xplore which is made available to you
digitally. This foundation program will include Online learning content, Webinars, practice
sessions & proctored assessments. Further to accepting this Offer letter, you are required
to enroll for the YB Xplore Program and start your learning journey with YB. YB will
make Xplore program available for you upon your offer acceptance. Please note that your
joining is subject to successful completion of your YB Xplore program including the
proctored assessment. We encourage you to complete your pre-learning, through YB
Xplore, well before your expected date of joining to avoid delays in onboarding.
</p>
<b>3. Training Period</b>
<p>
You will be required to undergo class room and on the job training in the first twelve
months (including the YB Xperience Programme as set out herein below), during which
period you will be appraised for satisfactory performance during/after which YB would
normally confirm you.
</p>
<p>
This confirmation will be communicated to you in writing. If your performance is found
unsatisfactory during the training period, the company may afford you opportunities to
assist you and enable you to improve your performance. If your performance is still found
unsatisfactory, YB may terminate your traineeship forthwith.
</p>
<p>
However, YB may even otherwise at its sole discretion terminate the traineeship any
time if your performance is not found satisfactory. The terms and conditions of the training
will be governed by YB's training policy. YB reserves the right to modify or amend
the training policy.
</p>
<p>
If you remain unauthorizedly absent for a consecutive period of 3 days during the training
programme, you shall be deemed to have abandoned your traineeship and your name will
automatically stand discontinued from the list of YB Xperience trainees without any
further intimation/separate communication to you.
</p>
<b>4. Working Hours</b>
<p>
Your working hours are governed by applicable law. You may be required to work in shifts
and/or over time depending upon the business exigencies as permitted by law.
</p>
<b>5. Mobility</b>
<p>
YB reserves the right to transfer you at any of its offices, work sites, or associated or
affiliated companies in India or outside India, on the terms and conditions as applicable to
you at the time of transfer.
</p>
<b>6. Compensation Structure / Salary components</b>
<p>
The compensation structure/salary components are subject to change as per YB's
compensation policy from time to time at its sole discretion.
</p>
<b>7. Increments and Promotions</b>
<p>
Your performance and contribution to YB will be an important consideration for salary
increments and promotions. Salary increments and promotions will be based on YB's
Compensation and Promotion policy.
</p>
<b>8. Alternative Occupation / Employment</b>
<p>
Either during the period of your traineeship or during the period of your employment as a confirmed employee of YB, you are not permitted to undertake any other employment,
business, assume any public or private office, honorary or remunerative, without the prior
written permission of YB.
</p>
<b>9. Confidentiality Agreement</b>
<p>
As part of your acceptance of this appointment as an employee with YB you are
required to maintain strict confidentiality of the intellectual property rights protected
information and other business information of YB and its clients which may be revealed
to you by YB or which may in the course of your engagement with YB come your
possession or knowledge unless specifically authorized to do so in writing by YB. This
Confidentiality Clause shall survive the termination or earlier determination of this
Appointment. The detailed Confidentiality related terms and conditions are set out in
Annexure 3.
</p>
<b>10. Service Agreement</b>
<p>
As YB will be incurring considerable expenditure on your training, you will be required
to execute an agreement, to serve YB for a minimum period of 1 year after joining,
failing which, you (and your surety) will be liable to pay YB `50,000/-towards the
training expenditure. Service agreement duration of one year refers to continuous service
of 12 months from date of joining YB and excludes the duration of Leave without pay
(LWP) and/or unauthorized absence, if any.
</p>
<b>11. Work in SBWS mode</b>
<p>
YB' Secure Borderless Workspaces (SBWS) is a transformative operating model
framework that allows seamless deployment of virtual workspaces in a secure manner
that enables flexible working options aligned to its business objectives. You may be
required to work either from YB offices/YB Client offices or from home (remote
working) as per the requirements of the project or group you are assigned to work with
and as communicated to you by the Unit HR or your supervisor. You are required to abide
by the Policy and / or Guidelines issued by YB from time to time while operating within
this framework. For more details, please refer the Policy / Guideline document on Remote
Working.
</p>
<p>
It is essential that you understand the applicable Policy and / or the Guidelines of such
flexible working and ensure adherence to YB Security Policies/Protocols and
Confidentiality obligations at all times.
</p>
<b>12. Overseas International Assignment Agreement</b>
<p>
If you are on international assignment, you will be covered by the YB India
Policy-International Assignments (from India to other Countries) from the date of
placement for an international assignment. Accordingly, you will be required to sign the
Overseas International Assignment Agreement/s and any other applicable related documents pertaining to the international assignment for which you are being placed In
case of every international assignment that exceeds 30 days, you will be required to
serve YB as per the Notice Period clause mentioned below.
</p>
<p>
This is to ensure that the knowledge and information gained by you during your
assignment is shared and available to YB and its associates.This transfer of
knowledge and information is essential for YB to continue to serve its clients and
customers better.If you are deputed internationally for training,you will be required to sign
an agreement to serve YB for a minimum period of 6 months on completion of training.
</p>
<b>13. Terms and Conditions</b>
<p>
The above terms and conditions are specific to India and there can be changes to the
said terms and conditions in case of deputation on international assignments.
</p>
<b>14. YB Code of Conduct</b>
<p>
You are required to sign the YB Code of Conduct and follow the same in your
day-to-day conduct as an associate of YB.
</p>
<b>15. Notice Period</b>
<p>
Upon your confirmation, this contract of employment is terminable by you by giving 90
days notice in writing to YB. It is clearly understood, agreed and made abundantly
clear that you shall have to necessarily work during the period of notice of 90 days given
by you under this clause. However, upon your serving the notice under this clause, YB
may relieve you any time during the period of notice at its sole discretion.
</p>
<p>
Upon your confirmation, this contract of employment may be terminated by YB by
giving you 90 days notice or payment in lieu thereof.
</p>
<p>
It is understood, agreed and made abundantly clear herein that you shall have to
necessarily work during the notice period given by YB under this clause, unless you
are otherwise relieved by YB by giving you payment in lieu of notice.
</p>
<p>
Your failure to comply with this clause will entail monetary payment of damages to YB
as may be determined by it at its own discretion having regard to the responsibilities
shouldered by you while being in the employment of YB.
</p>
<b>16. Retirement</b>
<p>
You will retire from the services of YB on reaching your 60th birthday as per the proof
of age submitted by you at the time of joining.
</p>
<b>17. Pre-employment Medical Certificate</b>
<p>
You are required to submit a Medical Certificate of Fitness (in the format prescribed by YB) which needs to be verified by a registered medical practitioner having a minimum
qualification of MBBS to the Induction Coordinator.
</p>
<b>18. Employment of Non Indian Citizens</b>
<p>
In case, you are not a citizen of India, this offer is subject to your obtaining a work permit
and / or any other permissions and / or documentation as prescribed by the Government
of India.
</p>
<b>19. Background Check</b>
<p>
Your association with YB will be subject to a background check in line with YB's
background check policy. A specially appointed agency will conduct internal and external
background checks. Normally, such checks are completed within one month of joining.If
the background check reveals unfavourable results, you will be liable to disciplinary action
including termination of traineeship/service without notice.
</p>
<b>20. Submission of Documents</b>
<p>
Please note that you should initiate and complete the upload of mandatory documents on
the nextstep portal as soon as the offer letter is accepted (subject to availability of the
documents)
</p>
<p>Please carry the below listed<b> Original</b> Documents for verification on your joining day.</p>
<p>- Permanent Account Number (PAN) Card - You are required to submit a copy of your PAN 
 card along with other joining forms, immediately on joining. As per Indian Income Tax 
 rules, the PAN number is a mandatory requirement for processing salary
</p>
<p>- Aadhaar Card</p>
<p>- Standard X and XII/Diploma mark sheets & Certificate</p>
<p>- Degree certificate/Provisional Degree Certificate and mark sheets for all semesters of 
 Graduation</p>
 <p>- Degree certificate and mark sheets for all semesters of your Post Graduation(if you are a 
 Postgraduate)</p>
 <p>- Overseas Citizenship of India (applicable if you are not an Indian Nationality). For 
 Srilankan Refugee, a Refugee Identity card along with Work Permit is required
</p>
<p>- Birth Affidavit on Rs100 stamp paper, if Birth Certificate not in English</p>
<p>- Any other affidavits on Rs100 stamp paper if applicable (name affidavit for multiple
names, signature affidavits,
 address affidavits etc.)
</p>
<p>- Passport / Acknowledgement letter of passport application</p>
<p>- Gap/Break in career affidavit on Rs100 stamp paper, if gap is more than 6 months</p>
<p>- 4 passport sized photographs</p>
<p>- Medical Certificate (Should be made on the format provided by YB along with the 
 Joining letter)</p>
 <p>- An affidavit/notarized undertaking (Non-Criminal Affidavit, should be made on the format
provided by YB) stating :
</p>
<p>*There is no criminal offence registered/pending against you</p>
<p>*There is no disciplinary case pending against you in the university</p>
<p>- If you were employed, a formal Relieving letter & Experience letter from your previous
employer</p>
<p>The original documents will be returned to you after verification.
</p>
<p>In addition to the above original documents, Please carry Xerox copies of the below
documents</p>
<p>*PAN Card (Permanent Account Number)
</p>
<p>*Aadhaar Card (Not applicable for Nepal & Bhutan Citizenship)</p>
<p>*Passport</p>
<p>*NSR E-Card</p>
<b>21. YB Xperience Program</b>
<p>On joining YB, you will be given the benefit of formal training (YB Xperience Program)
at our offices, as identified, for such period as YB may decide.</p>
<p>The said training forms a critical part of your employment with YB and is an ongoing
process. YB continues to make investment on training and continuing education of its
professionals. This will be of immense value to you as a professional and a large part of
the ownership and commitment has to come from you.
</p>
<p>As YB progresses with these initiatives, monitoring performance will be an ongoing
process and a formal evaluation will be carried out during the training. If you are
requested to join YB inspite of you not completing the Xplore proctored assessment,
you will be provided Xplore training on premise and the above said evaluation process will
stand good. The evaluation criteria which will be very transparent will be used as a basis
for allocating people to projects/roles. We would request that the training be taken very
seriously to enable you to add maximum value to your professional and personal growth.
</p>
<b>22. Letter of Appointment</b>
<p>You will be issued a letter of appointment at the time of your joining and after completing
joining formalities as per YB policy.</p>
<b>23. Rules and Regulations of the Company</b>
<p>Your appointment will be governed by the policies, rules, regulations, practices,
processes and procedures of YB as applicable to you and the changes therein from time to time.The changes in the Policies will automatically be binding on you and no
separate individual communication or notice will be served to this effect. However, the
same shall be communicated on internal portal/Ultimatix.
</p>
<b>24. Compliance to all clauses</b>
<p>
You should fulfill all the terms and conditions mentioned in this letter of offer. Failure to
fulfill one or more of the terms and conditions and/or failure to clear one or more tests
successfully would entitle YB to withdraw this offer letter anytime at its sole discretion.
</p>
<b>25. Data Privacy Clause:</b>
<p>
(a) Your personal data collected and developed during recruitment process will be
processed in accordance with the YB Data Privacy Policy. The personal data referred
therein are details related to contact, family, education, personal identifiers issued by
government, social profile, background references, previous employment and experience,
medical history, skillset, proficiency and certifications, job profile and your career
aspirations.
</p>
<p>(b) It will be processed for various organizational purposes such as Â recruitment,
onboarding, background check, project assignment, performance management, job
rotation, career development including at leadership level, diversity and inclusion
initiatives, global mobility, wellness program, statutory and legal requirements and
specific organizational initiatives in force during your tenure in YB.
</p>
<p>(c) After you join YB, there would be more sets of Personal Information (PI) attributes
processed for various legitimate purposes. All of it will be processed with compliance to
applicable laws and the YB Data Privacy Policy. In some scenarios of your PI
processing, you will be provided with appropriate notice and/or explicit consent might be
obtained from time to time.
</p>
<p>(d) For the purposes mentioned above, your required PI may be shared with specific
vendor organizations who provide services to YB, e.g. Â background check, health
insurance, counselling, travel, transport and visa, payroll services, associate engagement
activities, and financial and taxation services.
</p>
<p>(e) As YB is a global company, your PI may be shared with entities outside India, limited
for the purposes mentioned above and/or in this offer letter.</p>
<p>(f) In case of oversees deputation, available privacy rights would be governed as per
regulatory provisions and / or YB policies/notice provided applicable at your overseas
location.
</p>
<b>Withdrawal of Offer</b>
<p>If you fail to accept the offer from YB within 7 days, it will be construed that you are not
interested in this employment and this offer will be automatically withdrawn.
</p>
<p>
Post acceptance of YB Offer letter if you fail to join on the date provided in the YB Joining
letter, the offer will stand automatically terminated at the discretion of YB.
</p>
<p>We look forward to having you in our global team</p>
<p>Yours Sincerely,</p>
<b>Jagadhish.K</b>
<p>
<b>Global Head Talent Acquisition & AIP</b>
</p>
<p>Encl: </p>
<p>Annexure 1: Benefits and Gross Salary</p>
<p>Annexure 2: Confidentiality and IP Terms</p>
<b></b>
<div style={{ textAlign: 'center', padding: '50px' }} >
<b>GROSS SALARY SHEET</b>
</div>
<div>
<table>
      <tbody>
       <tr>
            <td><b>Name</b></td>
            <td><b>[name]</b></td>
        </tr>
        <tr>
            <td><b>Designation</b></td>
            <td><b>Assistant System Engineer-Trainee</b></td>
        </tr>
        <tr>
            <td><b>Institute Name</b></td>
            <td><b>[institute name]</b></td>
        </tr>
      </tbody>
    </table>
      </div>

<h6>Table 1: Compensation Details (All Components in INR)</h6>

<div>
<table>
      <thead>
        <tr>
          <th>Component Category</th>
          <th>Monthly</th>
          <th>Annual</th>
        </tr>
      </thead>
      <tbody>
       <tr>
            <td><b>1) Fixed Compensation</b></td>
            <td> </td>
            <td> </td>
        </tr>
        <tr>
            <td>Basic Salary</td>
            <td>14,784</td>
            <td>1,77,408 </td>
        </tr>
        <tr>
            <td>Bouquet Of Benefits #</td>
            <td>7,646</td>
            <td>91,752</td>
        </tr>
        <tr>
            <td><b>2) Performance Pay**</b></td>
            <td> </td>
            <td> </td>
        </tr>
        <tr>
            <td>Monthly Performance Pay</td>
            <td>1,700</td>
            <td>20,400</td>
        </tr>
        <tr>
            <td>Quarterly Variable Allowance*</td>
            <td>600 </td>
            <td>7,200 </td>
        </tr>
        <tr>
            <td><b>3) City Allowance</b></td>
            <td> 200</td>
            <td> 2,400 </td>
        </tr>
        <tr>
            <td><b>4) Annual Components/Retirals</b></td>
            <td> </td>
            <td> </td>
        </tr>
        <tr>
            <td>Health Insurance***</td>
            <td> NA</td>
            <td>7,900 </td>
        </tr>
        <tr>
            <td>Provident Fund</td>
            <td> 1,774</td>
            <td> 21,289 </td>
        </tr>
        <tr>
            <td>Gratuity</td>
            <td>711</td>
            <td>8,533</td>
        </tr>
        <tr>
            <td>Total of Annual Components & Retirals</td>
            <td>2,485</td>
            <td>37,722</td>
        </tr>
        <tr>
            <td><b>TOTAL GROSS</b></td>
            <td>27,415</td>
            <td>3,36,877</td>
        </tr>
        <tr>
            <td><b>Xplore/ Learning Incentive****</b></td>
            <td></td>
            <td>Upto 60,000</td>
        </tr>
        <tbody></tbody>
      </tbody>
    </table>
      </div>
<h6># Refer to Table 2 for YB defined Structure. In case, you wish not to restructure your BoB, YB
defined Structure as given in Table 2 will be applicable.</h6>
<h6>* Amount depicted will be paid-out on a quarterly basis upon successful completion of the YB Xplore Program.</h6>
<h6>**The Performance Pay is applicable upon successful completion of the YB Xplore Program</h6>
<h6>*** For HIS - Note that Rs. 7900 if the employee is Single. If the employee is married or married with Children 
then Rs. 3,900/- per beneficiary needs to be added to the above mentioned amount</h6>
<h6>**** Xplore/ Learning Incentive is paid over and above the CTC during first year, based on your performance in YB 
Xplore Program. Table 2: YB defined structure for BoB (All Components in INR)</h6>
<div>
<table>
      <thead>
        <tr>
          <th>Component Category</th>
          <th>Monthly</th>
          <th>Annual</th>
        </tr>
      </thead>
      <tbody>
       <tr>
            <td>House Rent Allowance</td>
            <td>5,914</td>
            <td>70,968</td>
        </tr>
        <tr>
            <td>Leave Travel Assistance</td>
            <td>1,232</td>
            <td>14,784</td>
        </tr>
        <tr>
            <td>Food Card</td>
            <td>500</td>
            <td>6,000</td>
        </tr>
        <tr>
            <td><b>GROSS BOUQUET OF BENEFITS</b></td>
            <td>7,646</td>
            <td>91,752</td>
        </tr>
      </tbody>
    </table>
      </div>

<div style={{ textAlign: 'right', padding: '50px' }} >
    <b>Annexure 2</b>
</div>
<b>Confidentiality and IP Terms and Conditions</b>
<p><b>1. Confidential Information</b></p>
<p>"Confidential Information" shall mean all Inventions and Know-how, information and
material of YB (including for avoidance of doubt any Confidential Information of its
Clients) that comes into the possession or know of the Associate and shall include the
following:</p>
<p>(a) Any and all information processing programs, software, properties, items, information,
data, material or any nature whatsoever or any parts thereof, additions thereto and
materials related thereto, produced or created at any time by YB or the Associate in the
course of or in connection with or arising out of the Associate's association with YB.
Program/Software shall mean source code and/or machine instructions wherever resident
and on whatever media and all related documentation and software,</p>
<p>(b) All other information and material of YB relating to design, method of construction,
manufacture, operation, specifications, use and services of the YB equipment and
components, including, but not limited to, engineering and laboratory notebooks, reports,
process data, test data, performance data, inventions, trade secrets, systems, software,
object codes, source codes, copyrighted matters, methods, drawings, computations,
calculations, computer programs, narrations, flow charts and all documentation therefore
and all copies thereof (including for avoidance of doubt any such material belonging to the
Clients of YB).
</p>
<p>(c) Corporate strategies and other confidential and proprietary material and information,
which could cause competitive harm to YB if disclosed,
</p>
<p>(d) Customer and prospective customer lists, and
</p>
<p>(e) All other information and material, which may be created, developed, conceived,
gathered or collected or obtained by the Associate in the course of or arising out of the
association with YB or while in or in connection with or for the purposes of his/her
association with YB or any of the operations and entrusted by YB to the Associate.
</p>
<b>2. Associate's Obligations</b>
<p>Associate agrees to treat the Confidential Information as strictly confidential and a trade
secret of YB. Associate agrees not to use, or cause to be used, or disclose or divulge or
part with either directly or indirectly the Confidential Information for the benefit of or to any
third parties except for or on behalf of or as directed or authorized by YB or to a person
having a valid contract with or need under YB, any Confidential Information. Upon
termination of employment, the Associate agrees to surrender to YB all Confidential
Information that he or she may then possess or have under his or her control.</p>
<b>3. Intellectual Property Rights</b>
<p>Associate agrees and confirms that all intellectual property rights in the Confidential
Information shall at all times vest in and remain with or belong to YB and Associate shall
have no right title or claim of any nature whatsoever in the Confidential Information.
Associate shall promptly disclose to an authorized officer of YB all inventions, ideas,
innovations, discoveries, improvements, suggestions, or reports and enhancements
made, created, developed, conceived or devised by him or her arising out of his or her
engagement with YB, including in the course of provision of services to the Clients of
YB and Associate hereby agrees and confirms that all such intellectual property rights
shall at all times vest in and remain vested in YB and agrees to transfer and assign to
YB any interests Associate may have in such intellectual property rights including any
interest in and to any domestic or foreign patent rights, trademarks, trade names
copyrights and trade secret rights therein and any renewals thereof. On request of YB,
Associate shall execute from time to time, during or after the termination of his or her
employment, such further instruments, including without limitations, applications for letters
of patent, trademarks, trade names and copyrights or assignments thereof, as may be
deemed necessary or desirable by YB to perfect the title of YB in the intellectual
property rights and to effectuate the provisions hereof. All expenses of filling or
prosecuting any application for patents, trademarks, trade names, or copyrights shall be
borne solely by YB, but Associate shall co-ordinate in filing and / or prosecuting any
such applications. Associate hereby expressly waives any "artist's rights" or "moral
rights", which Associate might otherwise have in such intellectual property rights.
</p>
<b>4. Prior knowledge</b>
<p>Associate acknowledges that prior to his or her appointment by YB, he or she had no
knowledge of the Confidential Information of YB and that such Confidential Information
is of a confidential and secret character and is vital to the continued success of YB's
business. Associate further acknowledges that he or she is associated with YB in a
capacity in which he or she will become acquainted with all or part of such Confidential
Information. In order to safeguard the legitimate interests of YB in such Confidential
Information, it is necessary for YB to protect such Confidential Information by holding it
secret and confidential.</p>
<b>5. Use of third party material</b>
<p>Associate expressly agrees that it shall not in the course of his or her association with
YB and while working on the premises or facilities of YB or its Clients or in connection
with the development of any intellectual property rights or work for or on behalf of YB,
use any third party material or intellectual property rights except those intellectual
property rights provided by YB or expressly authorised by YB or without having proper
authorisation or license or approval of the respective owner of such intellectual property
rights.</p>
<b>6. Security policies and Guidelines.</b>
<p>Associate agrees to abide by and be bound by any and all policies, documents,
guidelines and processes including IP, Security and Confidentiality of YB in force from
time to time whether expressly endorsed or not.
</p>
<b>7. Working in SBWS Framework:</b>
<p>Associate may be required to work in YB offices or its Client premises or from home
(remote working) as per the directions of supervisor and / or the provisions of the
applicable policy.</p>
<p>Associate understands that working in this hybrid environment may have higher
confidentiality and information security risks. Associate acknowledges that when working
remotely the Associate:</p>
<p>(a) will work only in a private, secured work area in compliance with the guidelines
issued and amended from time to time.</p>
<p>(b) will comply with and work in a manner consistent with YB Data Privacy and Security
Policies/Protocols.
</p>
<p>(c) will bring to the notice of HR of the Unit to any circumstances that prevent Associate
from working in a manner consistent with YB data privacy and security policies/
protocols.
</p>
<p>(d) will inform the HR of the Unit if the Associate shares a home with any family member
or an individual who is employed by a competitor of YB or YB client the Associate is
assigned to, or if any other circumstances at home exist which implicates the YB Code
of Conduct Conflict of Interest provision.
</p>
<p>(e) will ensure utmost care and adhere to Confidentiality, IP Protection / Non-Disclosure
obligations.</p>
<p>(f) will be using the Company allotted laptop or similar authorized computing device
(together called "official asset") only to connect to YB network/customer network through
authorized means (or the Customer provided laptop to access the customer network if so,
mandated by the Customer).</p>
<p>(g) will not allow anybody to share the official asset being used.
</p>
<b>8. Restriction on Associate's Rights</b>
<p>Associate agrees that he or she shall not make, have made, replicate, reproduce, use,
sell, incorporate or otherwise exploit, for his or her own use or for any other purpose, any
of the Confidential Information including intellectual properties of YB that is or may be
revealed to him or her by YB or which may in the course of his or her employment with
YB come into his or her possession or knowledge unless specifically authorized to do so
in writing by YB.</p>
<b>9. No License</b>
<p>YB and Associate agree that no license under any patent or copyright now existing or
hereafter obtained by YB is granted, agreed to be granted, or implied by the terms of
this Agreement, or by the disclosure to Associate of the Confidential Information.
</p>
<b>10. Equitable Rights</b>
<p>Associate acknowledges that any Confidential Information that comes into the possession
and / or knowledge of Associate is of a unique, highly confidential and proprietary nature.
It is further acknowledged by Associate that the disclosure, distribution, dissemination and
/ or release by Associate of the Confidential Information without the prior written consent
of YB or any breach of this Agreement by Associate will cause YB to suffer severe,
immediate and irreparable damage and that upon any such breach or any threat thereof,
YB shall without prejudice to any other remedies available to it, be entitled to
appropriate equitable relief including the relief of specific performance and injunctive
relief, in addition to whatever remedies it might have at law.
</p>
<b>11. General</b>
<p>(a) The provisions hereof shall be interpreted, determined and enforced in accordance
with the laws of India.</p>
<p>(b) In the event of any dispute or disagreement over the interpretation of any of the terms
herein contained or may claim or liability of any party including that of surety, the same
shall be referred to a person to be nominated by YB, whose decision shall be final and
binding upon the parties hereto. Subject to the above, the arbitration shall be governed by
the Arbitration and Conciliation Act, 1999 or any modifications or re-enactment thereof.
Associate confirms that the fact that the arbitrator shall be a nominee of YB shall not be
a ground for objecting to such arbitration or challenging the decision of the arbitrator. The
venue of arbitration shall be Mumbai. Subject to the above arbitration clause, the Parties
agreed to the binding jurisdiction of the Courts at Mumbai under the laws of India.
</p>
<p>(c) If any provision hereof shall be found by a judicial tribunal to be contrary to governing
law, it shall be deemed null and void without annulling or rendering invalid the remainder
of the Agreement and if the invalid portion is such that the remainder cannot be sustained
without it, the Parties herein shall find a suitable replacement to the invalid portion that
shall be legally valid.
</p>
<p>(d) This Confidentiality clause along with other documents executed by Associate or
referenced in any such documents constitutes the entire understanding between the
parties and supersedes all prior agreements and understandings pertaining to the subject
matter thereof. No delay of omission of either Party in exercising or enforcing any of their
rights or remedies hereunder shall constitute a waiver thereof.</p>
<p>(e) This Confidentiality clause may not be amended except in writing signed by authorized
representatives of both parties.
</p>
<p>(f) The obligations of Associate in terms of this Confidentiality clause shall continue during
the term of or in the course of the employment of the Associate with YB and shall
continue thereafter in perpetuity.</p>
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

