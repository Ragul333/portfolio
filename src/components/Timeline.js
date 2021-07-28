import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const Timeline = () =>
{
    return (
        <>
         <div class="text-divider container"> <h3 className='text-center' style={{border:"1px solid silver",padding:'15px'}}>Journey</h3></div>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Freelancer</h3>

    <p>
      I am searching for a job currently and  i'm improving myself by doing freelancing .
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">GIS Designer</h3>
    <h5 className="vertical-timeline-element-subtitle">DSM Soft Private Limited</h5>
    <p>
      This was my first job after completing my degree where i worked as a cartographer and used to draw maps using Q-GIS tool provided by the company .
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Engineering</h3>
    <h5 className="vertical-timeline-element-subtitle">K.Ramakrishnan College of Engineering</h5>
    <p>
      Pursued my engineering degree with 7 CGPA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Diploma</h3>
    <h5 className="vertical-timeline-element-subtitle">Shamugha Polytechnic College(Sastra university campus)</h5>
    <p>
        Completed my diploma course with 87 %
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Schooling</h3>
    <h5 className="vertical-timeline-element-subtitle">St.Little Flower Matric Higher Secondary School</h5>
    <p>
      The place where i gained lots of knowledge and memories. I completed my 10th standard with 87% and joined diploma course .
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
 
  />
</VerticalTimeline>
</>
    )
}
