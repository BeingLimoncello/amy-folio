import * as React from "react"

import Layout from "../layout/Layout"

import technicalWritingImg from "../images/techSlide1.jpg";

const TechnicalContentPage = () => {
    return (
      <Layout>
      <title>Amy Spitz | Portfolio</title>


      <div className="columns">
        <div className="column is-one-third">
        </div>
        <div className="column is-two-thirds">
          <div className="subpage__title is-size-3">Technical Content</div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-third">
          <img src={technicalWritingImg} />
        </div>
        <div className="column is-two-thirds">
          To support new engineers as they reviewed technical content, my client and I worked together to develop a job aid that covered the foundations of post-tension cable review.  Being able to visualize structural plans can be a challenge when you are new to construction. This job aid provides examples and expectations for manging this work.
          <div className="columns">
            <div className="column">
              <div className="is-size-5">
                My Role
              </div>
              <ul className="styled-list">
                <li>Partnered with a subject matter expert to identify key learnings in a complex concept</li>
                <li>Broke down the concept into a process that is accessible to the learner</li>
              </ul>

            </div>
            <div className="column">
            <div className="is-size-5">
              Tools
            </div>
            <ul className="styled-list">
              <li>PowerPoint</li>
              <li>BlueBeam</li>
            </ul>
              
            </div>
          </div>
        </div>
      </div>
  
      </Layout>
    )
  }
  
  export default TechnicalContentPage
  