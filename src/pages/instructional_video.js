import * as React from "react"

import Layout from "../layout/Layout"
import SubpageContent from "../layout/subpage_content"
import instructionalVideoImg from "../images/SmartGoals.jpg"

const toolItems = ['camtasia', 'powerpoint']
const roleItems = [
    "Designed, developed and implemented video series.",
    "Partnered with human resources to achieve higher quality performance reviews.",
    "Scripted and narrated content."
]

const InstructionalVideoPage = () => {
    return (
      <Layout>
      <title>Amy Spitz | Portfolio</title>
        <SubpageContent
            title="Informative Video"
            MediaZone={() => <img src={instructionalVideoImg} /> }
            roleItems={roleItems}
            toolItems={toolItems}
        >
            This video was one of four in a series to support our employees with their performance appraisals.  In an effort to make training on-demand, the videos were linked to QR codes embedded in the Performance Appraisal templates. All employees had training support with a <span class="text-strikeout">click of a button</span> scan on the phone!
        </SubpageContent>
      </Layout>
    )
  }
  
  export default InstructionalVideoPage
  