import * as React from "react"

import Layout from "../layout/Layout"
import SubpageContent from "../layout/subpage_content"

const toolItems = ['camtasia', 'sharepoint']
const roleItems = [
  "Designed, developed and implemented the blended learning program",
  "Worked with company leaders to merge external coaching program with needs of the company",
  "Integrated company values and KPIs into manager program to provide a customized experience",
]

const ProgramDevelopmentPage = () => {
    return (
      <Layout>
      <title>Amy Spitz | Portfolio</title>
      <SubpageContent
        title="Program Development"
        MediaZone={() => <div><iframe src="https://player.vimeo.com/video/656856019?h=833fa1b245" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/656856019">Manager Foundations Program Overview</a> from <a href="https://vimeo.com/user103451280">Amy Rutz</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div> }
        roleItems={roleItems}
        toolItems={toolItems}
      >
      When staying apart is the safest thing, this in-person Manager Foundations program needed to be reformatted to provide coaching and connection while distanced. This website provided coaches and participants structure and direction during the 8 week program.
      </SubpageContent>
      </Layout>
    )
  }
  
  export default ProgramDevelopmentPage
  