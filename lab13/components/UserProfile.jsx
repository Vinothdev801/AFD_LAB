import React from 'react'

const UserProfile = () => {
  return (
    <div className='container'>
      <div className="card1">
        <h2>My Profile</h2><span></span>
        <ul>
          <li><b>Name: </b> Vinoth A</li>
          <li><b>Qualification: </b> MCA </li>
          <li><b>Email: </b>avinoth355@gmail.com</li>
          <li><b>Age: </b>22</li>
          <li><b>Mobile: </b>+91-9360314452</li>
          <li id='lang'><b>Language Know:</b>
              <li>
                <p>Tamil</p>
                <p>English</p>
              </li>
              
          </li>
        </ul>
      </div>
      <div className="card2">
        <h2>Certifications</h2><span></span>

        <ul>
          <li>
            <h3>AWS Data Engineering Interships</h3>
            <p>Amazon Wev services - June 2024</p>
          </li>
          <li>
            <h3>Java Programming Masterclass</h3>
            <p>Udemy</p>
          </li>
          <li>
            <h3>Java Essentials: Syntax & DataStructures</h3>
            <p>LinkedIn Learning</p>
          </li>
          <li>
            <h3>Web Developer Intern</h3>
            <p>Cognifyz - June 2024</p>
          </li>
          <li>
            <h3>Networking Internship</h3>
            <p>Juniper Networks  April - July 2024</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserProfile