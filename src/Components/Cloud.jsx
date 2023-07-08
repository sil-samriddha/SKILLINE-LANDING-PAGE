import React from 'react'
import cloud from '../Constants/Cloud'
import '../Styles/cloud.css'

export default function Cloud() {
  return (
    <div className='cloud'>
        <h2>All-In-One <span>Cloud Software</span></h2>
        <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
        <div className='cloud-elements'>
            {
                cloud.map(obj=>(
                    <div key={obj.id}>
                        <img src={obj.image} alt="icon" />
                        <h3>{obj.title}</h3>
                        <p>{obj.description}</p>
                    </div>
                ))
            }
        </div>

        <h2>What is <span>Skilline?</span></h2>
        <p>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>

        <div className='cloud-elements2'>
            <div style={{backgroundImage: "url('Images/img1.png')"}}>
                <div>
                <h3>FOR INSTRUCTORS</h3>
                <button>Start a class today</button>
                </div>
            </div>
            <div style={{backgroundImage: "url('Images/img2.png')"}}>
                <div>
                <h3>FOR STUDENTS</h3>
                <button style={{backgroundColor: "rgba(35, 189, 238, 0.90)"}}>Enter access code</button>
                </div>
            </div>
        </div>

        <div className='cloud-box'>
            <div className='cloud-box-text'>
                <div className='cloud-circle1'></div>
                <div className='cloud-circle2'></div>
                <h2>Everything you can do in a physical classroom, <span>you can do with Skilline</span></h2>
                <p>Skilline's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href="/">Learn More</a>
            </div>
            <div className='cloud-box-img'>
                <div className='cloud-square1'></div>
                <div className='cloud-square2'></div>
                <img src="Hero/play.svg" alt="play" id='cloud-play' />
                <img src="Images/img3.png" alt="image" id='cloud-box-main' />
            </div>

        </div>

    </div>
  )
}
