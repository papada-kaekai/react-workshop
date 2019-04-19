import React, { Component } from 'react';
import image from './images/image.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="resume">
        <div className="column-left">
          <div className="profile">
            <img className="profile-image" src={image} />
            <h1>Papada Uthaichai</h1>
            <h3>Web Developer</h3>
            <div className="info">
              <div>
                <p className="inline info-left">Email: </p>
                <p className="inline">papada.kaekai@gmail.com</p>
              </div>
              <div>
                <p className="inline info-left">Address: </p>
                <p className="inline">Bangkok Kritha Rd., Huamark, Bangkapi, Bangkok</p>
              </div>
            </div>
            <div className="social">
              <a href="https://github.com/papada-kaekai" target="_blank">
                <i className="fab fa-github fa-4x icon"></i>
              </a>
              <a href="https://www.facebook.com/nibnib.k" target="_blank">
                <i className="fab fa-facebook-square fa-4x icon"></i>
              </a>
            </div>
            <div className="section">
              <h1 className="title">Objective</h1>
              <div className="row">
              Looking for a challenging as well as responsible job that allows for implementation of communication, service, and design skills to the programming essentials.
              </div>
            </div>
            <div className="section">
              <h1 className="title">Technical Skills</h1>
              <div className="row">
                <p className="inline tech-left">PHP</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">C#</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">JAVA</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">Javascript</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">HTML / CSS</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
            </div>
            <div className="section">
              <h1 className="title">Database</h1>
              <div className="row">
                <p className="inline tech-left">MySQL</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">Microsoft SQL Server</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">Oracle</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">MongoDB</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
            </div>
            <div className="section">
              <h1 className="title">Language Skills</h1>
              <div className="row">
                <p className="inline tech-left">Thai (Native)</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                </div>
              </div>
              <div className="row">
                <p className="inline tech-left">English</p>
                <div className="inline star">
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="fas fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                  <i class="far fa-star icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-right">
          <div className="profile">
            <div className="section section-first">
              <h1 className="title">Experience</h1>
              <div className="block">
                <div>
                  <span className="exp-title">Web Developer</span>
                  <span className="duration">March 2017 - Present</span>
                  <p>
                    GARENA ONLINE (THAILAND) CO., LTD.
                  </p>
                </div>
                <ul>
                  <li>
                    Developed web application using web technology eg: PHP(Laravel Framework) for back-end and used React.js, Next.js for front-end
                  </li>
                  <li>
                    Used Ajax with fetch to request data and response processing
                  </li>
                  <li>
                    Developed admin tools for manage event website
                  </li>
                  <li>
                    Manage project development through version control system (git)
                  </li>
                  <li>
                    Provided database design and implementation(MySQL and MongoDB)
                  </li>
                  <li>
                    Collaborate with front-end and product team
                  </li>
               </ul>
              </div>
              <div className="block">
                <div>
                  <span className="exp-title">.NET Programmer</span>
                  <span className="duration">June 2015 - March 2017</span>
                  <p>
                    AUGMENTIS THAILAND LTD.
                  </p>
                </div>
                <br/>
                <div>
                  <span className="exp-title">Outsource</span>
                  <p>
                    SYMPHONY COMMUNICATION PUBLIC COMPANY
                  </p>
                </div>
                <ul>
                  <li>
                    Developed web application using C#.NET
                  </li>
                  <li>
                    Contributed to get user requirements, and analysed to come up with customized specification
                  </li>
                  <li>
                    Provided best practical application design, and develop to be responsive design
                  </li>
                  <li>
                    Provided database design and implementation
                  </li>
                  <li>
                    Provided software design pattern to alleviate the complexity of solution to each commonly occurring problem, such as inversion of control for resolving dependencies
                  </li>
                  <li>
                    Being able to work with test-driven development approach
                  </li>
               </ul>
              </div>
              <div className="block">
                <div>
                  <span className="exp-title">Application Developer</span>
                  <span className="duration">April 2014 - April 2015</span>
                  <p>
                    GLOBAL WIRELESS CO., LTD.
                  </p>
                </div>
                <ul>
                  <li>
                    Developing game applications in various platform (Android, IOS), using Lua on Corona SDK tool and C# on Unity3D tool.
                  </li>
                  <li>
                    Created and presented new game applications to the team leader
                  </li>
                  <li>
                    Improved the game application according to the feedback or new requirements from the project leader
                  </li>
                  <li>
                    Developed the game application as assigned
                  </li>
                  <li>
                    Monitored the game application, and conducted game testing and fixing the application defects
                  </li>
                </ul>
              </div>
              <div className="block">
                <div>
                  <span className="exp-title">Senior Project</span>
                  <p>
                    Home Appliances Control System for Handicapped Person
                  </p>
                </div>
                <ul>
                  <li>
                    System analysis and design
                  </li>
                  <li>
                    Testing and Developing web application use struts2 framework
                  </li>
                  <li>
                    Testing and Developing android operating system
                  </li>
                  <li>
                    Testing and Developing window application
                  </li>
               </ul>
              </div>
            </div>
            <div className="section section-first">
              <h1 className="title">Education</h1>
              <div>
                <span className="exp-title">Bachelor's Degree in Computer Engineering, </span>
                <span className="duration">2010 - 2013</span>
                <p>
                  Kasetsart University
                </p>
                <p>
                  Kamphaengsaen Campus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
