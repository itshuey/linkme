import React, { Component } from "react";
import { Helmet } from "react-helmet"
import Fade from 'react-reveal/Fade';
import './Content.css'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: false,
      mainpage: true,
      color: false,
      selected: "main",
      image: "none",
    };
  }

  renderContent() {

    const current_info = [
      {
        desc: "Here's a song stuck in my head",
        space: " .........................",
        mobile_space: ".........................",
        dest:
          <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=Z417ESyz3oQ"
          onMouseOver={() => this.setState({image : "MUNA"})}
          onMouseLeave={() => this.setState({image : "none"})}
          >
          Number One Fan
          </a>,
      },
      {
        desc: "Something I wrote",
        space: "...............................................",
        mobile_space: ".........................",
        dest: <a
          target="_blank"
          rel="noreferrer"
          href="https://www.notion.so/The-World-Is-Not-Enough-1999-2fb147cc9b0b4bf4b0a7669bf9f399d4"
          onMouseOver={() => this.setState({image : "BOND"})}
          onMouseLeave={() => this.setState({image : "none"})}
          >
          Movie Review
          </a>,
      },
      {
        desc: "My current favorite color",
        space: "........................................",
        dest: <span
        onMouseOver={() => this.setState({color : true})}
        onMouseLeave={() => this.setState({color : false})}>
         FFA826
        </span>,
      },
      {
        desc: "Some art I made",
        space: "..............................................",
        dest: <span
          class="crosshair"
          onMouseOver={() => this.setState({image : "ART"})}
          onMouseLeave={() => this.setState({image : "none"})}>
        Audrey Vol. 1
        </span>,
      }
    ]

    const archive_info = [
      {
        date: "08/12/2020",
        dest: "launch",
      },
      {
        date: "08/13/2020",
        dest: "current",
      }
    ]

    let current = current_info.map((item) =>
      <div> {item.desc} {item.space} {item.dest} </div>
    );

    const archive = archive_info.map((item) =>
      <div> {item.date} {"::::::::::"} {item.dest} </div>
    );

    const content = (
      <div class="links">
        {this.state.archive ? archive : current}
      </div>
    )

    const header = (
      <div class="header">
        <h1><i>{this.state.archive ? "archive" : "What I'm Up To:"}</i></h1>
      </div>
    );

    return (
      <div class={this.state.image === "none" ? "content" : "content clear"}>
        {header}
        {content}
      </div>
    )
  }

  render() {

    let title = (
      <div class="wrapper" onClick={() => this.setState({ mainpage: false })}>
        <div class="mainpage">
          <div class="logo">
            <Fade distance={"40px"} bottom cascade>
              linkme
            </Fade>
          </div>
          <div class="tagline"><i> click anywhere to start </i></div>
        </div>
      </div>
    )

    const page = (
      <div class={this.state.color ? "main color" : "main"}>
        <Helmet>
          <title>HUEY &mdash; linkme</title>
        </Helmet>
        {this.state.mainpage ? title : this.renderContent()}
        {this.state.mainpage ? <div class="toggle"><i> love u </i></div> :
        <div class="toggle" onClick={()=> this.setState({archive: !this.state.archive})}>
          <i>{this.state.archive ? "home" : "archive"}</i>
        </div>}
        <div class="footer concept" onClick={() => this.setState({ mainpage: true })}> linkme </div>
        <div class="footer signature"> by huey </div>
        {this.state.image === "BOND" &&
          <img class="hovered"
          onClick={() => this.setState({archive: true})}
          width="80%"
          src="https://jamesbondradio.com/wp-content/uploads/2018/12/the-world-is-not-enough.png">
          </img>
        }
        {this.state.image === "MUNA" &&
            <img class="hovered"
            src="https://static.gigwise.com/gallery/107182/muna-justinetrickett-3105.jpg">
            </img>
        }
        {this.state.image === "ART" &&
            <img class="hovered"
            width="70%"
            src="https://i.imgur.com/uudajbN.jpg">
            </img>
        }
      </div>
    );

    return page;
  }
}
