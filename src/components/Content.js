import React, { Component } from "react";
import { Helmet } from "react-helmet"
import Fade from 'react-reveal/Fade';
import favicon from "./favicon.ico"
import './Content.css'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: false,
      mainpage: true,
      color: false,
      image: "none",
      gifmode: false,
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
        class="default"
        onMouseOver={() => this.setState({color : true})}
        onMouseLeave={() => this.setState({color : false})}>
         FF7F50
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

    let upperCorner = (this.state.mainpage ? <div class="toggle"><i> love u </i></div> :
      <div class="toggle" onClick={()=> this.setState({archive: !this.state.archive})}>
        <i>{this.state.archive ? "home" : "archive"}</i>
      </div>
    );

    let footerLeft = (<div
      class="footer concept"
      onClick={() => this.setState({ mainpage: true })}>
      linkme
    </div>);

    let footerRight = (<div
      class="footer signature glitch"
      data-text="by huey"
      onMouseOver={() => this.setState({gifmode : true})}
      onMouseLeave={() => this.setState({gifmode : false})}> 
      by huey
    </div>);

    let bond = (
      <img  class="hovered"
        onClick={() => this.setState({archive: true})} width="80%"
        src="https://jamesbondradio.com/wp-content/uploads/2018/12/the-world-is-not-enough.png">
      </img>
    )

    let muna = (
      <img class="hovered"
        src="https://static.gigwise.com/gallery/107182/muna-justinetrickett-3105.jpg">
      </img>
    )

    let art = (
      <img
        class="hovered" width="70%"
        src="https://i.imgur.com/uudajbN.jpg">
      </img>
    )

    const page = (
      <div
        class={this.state.color ? "main color" : "main"}
        id={this.state.gifmode ? "animatedbg" : ""}
      >
        <Helmet>
          <title>HUEY &mdash; linkme</title>
          <link rel="icon" href={favicon} type="image/x-icon" />
        </Helmet>
        {this.state.mainpage ? title : this.renderContent()}
        {upperCorner}
        {footerLeft}
        {footerRight}
        {this.state.image === "BOND" && bond}
        {this.state.image === "MUNA" && muna}
        {this.state.image === "ART" && art}
      </div>
    );

    return page;
  }
}
