import * as React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"

import instructionalVideoImg from "../images/SmartGoals.jpg"
import programDevelopmentImg from "../images/ProgramDevelopment.jpg";
import technicalWritingImg from "../images/techSlide1.jpg";
import interactiveLearningImg from "../images/interactivelearning.jpg";

const cards = [
  {text: "Informative Video", image: instructionalVideoImg, link: "/instructional_video/",},
  {text: "Program Development", image: programDevelopmentImg, link: "/program_development/",},
  {text: "Technical Content", image: technicalWritingImg, link: "/technical_content/"},
  {text: "Interactive Learning", image: interactiveLearningImg, link: "/interactive_learning/",},
]

// markup
const IndexPage = () => {
  return (
    <Layout>
    <title>Amy Spitz | Portfolio</title>

      <div className="columns is-align-items-flex-end">
      {cards.map(card => { return (
        <div className="column">
        <div className="card index-card">
          <div className="card-image">
            <figure className="image">
              <img src={card.image} />
            </figure>
          </div>
          <div className="content is-size-5 has-text-centered">
            <Link to={card.link}>{card.text}</Link>
          </div>
        </div>
        </div>
      )})}
      </div>

    </Layout>
  )
}

export default IndexPage
