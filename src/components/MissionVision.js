import React from 'react'
import vision from "../img/vision.png"
function MissionVision() {
  return (
    <div className='container msv'>
        <div className='container'>
        <h2 className='text-center main-title visionm' style={{textAlign:'left'}}>Mission</h2>
        <p style={{paddingLeft:'39px',fontWeight:'600',width:'50%'}}>Agri Earth Exports strives to innovate and meet market needs continually, providing exceptional agricultural products.</p>
        <h2 className='main-title text-center visionm' style={{textAlign:'left'}}>Vision</h2>
        <p style={{paddingLeft:'39px',fontWeight:'600',width:'50%'}}>To emerge as the global leader in agricultural goods, establishing the benchmark for quality,
             innovation, and sustainability, while fostering a positive and meaningful impact within every community 
             along the value chain worldwide.</p>
            <div>
              <h2 className='text-center main-title visionm' style={{textAlign:'left'}}>Values</h2>
              <ul>
                <h3>Consumer Centric Approach</h3>
                <li style={{fontWeight:'600',width:'50%'}}>Listening attentively to market needs, we foster a culture of continuous innovation, 
                  ensuring our products consistently exceed consumer expectations.</li>
                  <h3>Quality First</h3>
                  <li style={{fontWeight:'600',width:'50%'}}>We uphold the highest standards in both product quality and agricultural processes, delivering nothing less than the best.</li>
                  <h3>Collaborative Excellence</h3>
                  <li style={{fontWeight:'600',width:'50%'}}>We thrive on collaboration, working hand-in-hand with farmers to cultivate 
                    not just crops but sustainable partnerships. Our dedication to quality agricultural technology 
                    ensures that what goes into our products is synonymous with what our customers receive – 
                    excellence, through and through.</li>
              </ul>
            </div>
        <p></p>
        </div>
    </div>
  )
}

export default MissionVision