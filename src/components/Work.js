import React from 'react';
import '../components/WorkCardstyles.css';
import Workcard from '../components/WorkCard';
import WorkCardData from '../components/WordCardData';
const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">PROJECTS</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return(
                    <Workcard
                        key = {ind}
                        imgsrc = {val.imgsrc}
                        title = {val.title}
                        text = {val.text}
                        view = {val.view}
                    />
                )
            })}
        </div>
    </div>
      
  )
}

export default Work
