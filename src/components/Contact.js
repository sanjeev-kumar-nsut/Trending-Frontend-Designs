import React from 'react';

class Contact extends React.Component {
    render() {
      return (
        <div className="contactpage" id="contact">
          <div className='row1'>
            <h1>CONTACT</h1>
          </div> 
          <div className = 'row2'>
            {/* <div className='bubble1'></div> */}
            <div className='bubble2'></div>
            <div className='contactcard'>
            <div className='row3'>
                <h2>
                  <img alt='mail icon' className='contacticon' src='https://cdn-icons-png.flaticon.com/512/1828/1828492.png'/>
                  <a className="hover-1" href="#contact">SANJEEV KUMAR</a>
                </h2>
              </div>
              <div className='row3'>
                <h2>
                  <img alt='mail icon' className='contacticon' src='https://cdn-icons-png.flaticon.com/128/732/732200.png'/>
                  <a className="hover-1" href="#contact">sanjeev.kumar.nsut@gmail.com</a>
                </h2>
              </div>
              
              <div className='row3'>
                <h2>
                  <img alt='phone icon' className='contacticon' src='./phone.png'/>
                  <a className="hover-1" href="#contact">8920654398</a>
                </h2>
              </div>

              <div className='row3'>
                <h2>
                  <img alt='github icon' className='contacticon' src='./github.png'/>
                  <a className="hover-1" href='https://github.com/sanjeev-kumar-nsut'>sanjeev-kumar-nsut</a>
                </h2>
              </div>

              <div className='row3'>
                <h2>
                  <img alt='resume icon' className='contacticon' src='./resume.png'/>
                  <a className="hover-1" href='https://drive.google.com/file/d/1-JQMHJcHK6fjM0Qc7llKKqZSDIp0HdAd/view?usp=sharing'>Resume</a>
                </h2>
              </div>
            </div>
          </div> 
      </div>
      
      );
    }
  }

export default Contact;



// import React from 'react';

// class Contact extends React.Component {
//     render() {
//       return (
//         <div className="contactpage" id="contact">
//         <div className="row1">
//           <h1> CONTACT</h1>
//         </div>
//         <div className="row2">
//           <div className="col contacttext">
//             <h2>Hey There!</h2>
//             <h2>I am SANJEEV KUMAR</h2>
//             <h2>I am an enthusiastic, motivated and passinated web developer</h2>
//             <h2>I am pursuing B TECH from NSUT Delhi</h2>
//             <h2>Feel free to reach me !!!</h2>
//           </div>
//           <div className="col">
//             <div className="bubble1" />
//             <div className="bubble2" />
//             <div className="contactglass">
//               <h2>SANJEEV KUMAR</h2>
//               <h2>8920654398</h2>
//               <h2>sanjeev.kumar.nsut@gmail.com</h2>
//             </div>
//           </div>
//         </div>   
//       </div>
      
//       );
//     }
//   }

// export default Contact;