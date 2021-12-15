import * as React from "react"

import Layout from "../layout/Layout"
import SubpageContent from "../layout/subpage_content"

const toolItems = ['camtasia', 'powerpoint']
const roleItems = [
    "Designed, developed and implemented video series.",
    "Partnered with human resources to achieve higher quality performance reviews.",
    "Scripted and narrated content."
]

const InteractiveLearningPage = () => {
    return (
      <Layout>
      <title>Amy Spitz | Portfolio</title>
      <SubpageContent
            title="Informative Video"
            MediaZone={() => <div><iframe src="https://player.vimeo.com/video/656872123?h=111b3efc06" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <p><a href="https://vimeo.com/656872123">DoorSwingHighlight.mp4</a> from <a href="https://vimeo.com/user103451280">Amy Rutz</a> on <a href="https://vimeo.com">Vimeo</a>.</p></div> }
            roleItems={roleItems}
            toolItems={toolItems}
        >
          A common error when ordering doors is selecting the wrong swing. This powerpoint shares two industry tricks, passed down by generations of builders, allows them to practice their skills and then tests those skills against a set of architectural drawings, simulating a real life scenario.
        </SubpageContent>
        
      </Layout>
    )
  }
  
  export default InteractiveLearningPage
  