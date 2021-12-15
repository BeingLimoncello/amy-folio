import React from "react"


export default function SubpageContent(props) {
    const { title, MediaZone, roleItems, toolItems, content } = props

    return (
        <div className="subpage_content">
        <div className="columns">
        <div className="column is-one-third">
        </div>
        <div className="column is-two-thirds">
          <div className="subpage__title is-size-3">{title}</div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-third">
            { MediaZone && <MediaZone /> }
        </div>
        <div className="column is-two-thirds">
          {props.children}
          <div className="columns">
            <div className="column">
              <div className="is-size-5">
                My Role
              </div>
              <ul className="styled-list">
                {roleItems.map(item => <li>{item}</li>)}
              </ul>

            </div>
            <div className="column">
            <div className="is-size-5">
              Tools
            </div>
            <ul className="styled-list">
                {toolItems.map(item => <li>{item}</li>)}
            </ul>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}