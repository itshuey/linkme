import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { isMobile } from "react-device-detect";
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import sakura from "../../static/Sakura.mp4";
import sixteenhours from "../../static/16hours.mp4";
import favicon from "./favicon.ico";
import './Content.css';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      archive: false,
      mainpage: true,
      color: false,
      image: "none",
      gifmode: false,
      typistIndex: 0,
      trigger: 0,
      sakura: false,
      easteregg: false,
    };

    this.art = [
      "Audrey Vol 1.",
      "Growing Pains",
      "Cluttered Mind",
    ];

    this.shuffleArt = this.shuffleArt.bind(this);
    this.handleFooter = this.handleFooter.bind(this);
    this.getContentClass = this.getContentClass.bind(this);
  }

  shuffleArt() {
    let current = this.state.typistIndex;
    if (this.art.includes(this.state.image)) {
      this.setState({
        typistIndex: current === this.art.length-1 ? 0 : current + 1,
        image:  "none"
      });
    } else {
      this.setState({ typistIndex: current === this.art.length-1 ? 0 : current + 1 });
    }
  }

  handleFooter() {
    if (this.state.mainpage) {
      this.setState({ trigger: this.state.trigger+1 });
    } else {
      this.setState({ mainpage: true, image: "none", archive: false });
    }
  }

  renderContent() {

    const current_info = [
      {
        desc: "Here's a song stuck in my head",
        mobile_desc: "Listening to",
        space: " ......................... ",
        mobile_space: " ..................... ",
        dest: <a
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
        space: " ............................................... ",
        mobile_space: " ................. ",
        dest: <a
          target="_blank"
          rel="noreferrer"
          href="https://www.notion.so/Serenity-2019-293d66b646dd44bab1f9e479bc822888"
          onMouseOver={() => this.setState({image : "MOVIE"})}
          onMouseLeave={() => this.setState({image : "none"})}
          >
          Serenity (Review)
          </a>,
      },
      {
        desc: "My current favorite color",
        space: " ........................................ ",
        mobile_space: " ..................... ",
        dest: <span
        class="default"
        onMouseOver={() => this.setState({color : true, image: "none"})}
        onMouseLeave={() => this.setState({color : false})}>
         FF7F50
        </span>,
      },
      {
        desc: "Some art I made",
        space: " .............................................. ",
        mobile_space: " ...................... ",
        dest: <span
          onMouseOver={() => this.setState({image : this.art[this.state.typistIndex]})}
          onMouseLeave={() => this.setState({image : "none"})}>
          <Typist
            key={this.state.typistIndex}
            onTypingDone={() => this.shuffleArt()}
          >
            <span>{this.art[this.state.typistIndex]}</span>
            <Typist.Backspace count={this.art[this.state.typistIndex].length} delay={2500} />
          </Typist>
        </span>,
      }
    ]

    const archive_info = [
      {
        content: "G-DRAGON",
        type: "art",
        link: "https://i.imgur.com/PPLTTQY.jpg",
      },
      {
        content: "A THEORY ON FORM: ZAYN",
        type: "art",
        link: "https://i.imgur.com/hCqyPr1r.jpg",
      },
      {
        content: "THE WORLD IS NOT ENOUGH (1999)",
        id: "bond-archive",
        type: "review",
        link: "https://www.notion.so/The-World-Is-Not-Enough-1999-2fb147cc9b0b4bf4b0a7669bf9f399d4",
      },
      {
        content: "HER, AND I (EDIT)",
        type: "video",
        link: "https://vimeo.com/284876435",
      },
      {
        content: "MATH: MULTI ARM BANDITS",
        type: "paper",
        link: "https://github.com/itshuey/multi-armed-bandits/blob/master/multiArmedBandit.pdf",
      },
      {
        content: "THE BIRD APP",
        type: "my twitter",
        link: "https://twitter.com/piratehuey",
      },
    ]

    let current = current_info.map((item) =>
      <div class={isMobile ? "mobileLinkItem" : "linkItem"}>
        {isMobile && item.mobile_desc ? item.mobile_desc : item.desc}
        {isMobile ? item.mobile_space : item.space}
        {item.dest}
      </div>
    );

    const alt_archive = archive_info.map((item) =>
      <div> {item.date} {"::::::::::"} {item.dest} </div>
    );

    const archive = archive_info.map((item) =>
      <div class={"archiveItem"}>
        <a class={"archiveLink"}
           target="_blank"
           rel="noreferrer"
           href={item.link} >
        {item.content}
        </a>
        <span
          class={isMobile ? "tag gold mobile-tag" : "tag gold"}
          id={item.id}>
          &nbsp;&mdash; <i>{item.type}</i>
        </span>
      </div>
    );

    const content = (
      <div class="links">
        {this.state.archive ? archive : current}
      </div>
    );

    const header = (
      <div class="header">
        <h1><i>{this.state.archive ? "archive" : "What I'm Up To:"}</i></h1>
      </div>
    );

    return (
      <div class={this.getContentClass()}>
        {header}
        {content}
      </div>
    );
  }

  getContentClass() {
    let contentClass = "content";
    if (isMobile) {
      contentClass += " mobile";
      if (this.art.includes(this.state.image)) contentClass += " clear";
    } else {
      if (this.state.image !== "none") contentClass += " clear";
    }

    return contentClass;
  }

  render() {

    let easteregg = (
      <video autoPlay muted loop id="sixteenhours">
        <source src={sixteenhours} type="video/mp4" />
      </video>
    )

    let video = (
      <video autoPlay muted loop id="sakura">
        <source src={sakura} type="video/mp4" />
      </video>
    )

    let title = (
      <div class="wrapper" onClick={() => this.setState({ mainpage: false, sakura: false })}>
        {!isMobile && this.state.easteregg && easteregg}
        {!isMobile && this.state.sakura && video}
        {!this.state.easteregg &&
        <div class="mainpage">
          <div class="logo">
            <Fade distance={"40px"} bottom cascade appear spy={this.state.trigger}>
              linkme
            </Fade>
          </div>
          <div class="tagline"><i>
            {isMobile ? "tap to start exploring" : "click anywhere to start"}
          </i></div>
        </div>}
      </div>
    );

    let upperLeftCorner = (<div
      id="easteregg"
      onMouseOver={() => this.setState({easteregg: true, sakura: false, image: "none"})}
      onMouseLeave={() => this.setState({easteregg : false})}>
      <b>EASTER EGG <br />
      16 HOURS</b>
    </div>);

    let upperRightCorner = (this.state.mainpage ?
      <div class="toggle" onClick={()=> this.setState({sakura: !this.state.sakura})}>
        <i> love u </i>
      </div> :
      <div class="toggle" onClick={()=> this.setState({archive: !this.state.archive})}>
        <i>{this.state.archive ? "home" : "archive"}</i>
      </div>
    );

    let footerLeft = (<div
      class="footer concept"
      onClick={() => this.handleFooter()}>
      linkme
    </div>);

    let footerRight = (<div
      class="footer signature glitch"
      data-text="by huey"
      onMouseOver={() => this.setState({gifmode: true, sakura: false, image: "none"})}
      onMouseLeave={() => this.setState({gifmode: false})}>
      by huey
    </div>);

    let bond = (
      <img  class="hovered"
        onClick={() => this.setState({archive: true})} width="80%"
        src="https://jamesbondradio.com/wp-content/uploads/2018/12/the-world-is-not-enough.png">
      </img>
    );

    let hathaway = (
      <img  class="hovered"
        onClick={() => this.setState({archive: true})} width="70%"
        src="https://i.imgur.com/KwDdt5c.jpg">
      </img>
    );

    let muna = (
      <img class="hovered"
        src="https://static.gigwise.com/gallery/107182/muna-justinetrickett-3105.jpg">
      </img>
    );

    let audrey = (
      <img
        class="hovered" width={isMobile ? "90%":"70%"}
        src="https://i.imgur.com/uudajbN.jpg">
      </img>
    );

    let growingpains = (
      <img
        class="hovered" width={isMobile ? "500px" : "720px"}
        src="https://i.imgur.com/hFhJv2A.png">
      </img>
    );

    let clutteredmind = (
      <img
        class="hovered" width={isMobile ? "92%":"77%"}
        src="https://i.imgur.com/UV8WMrD.png">
      </img>
    );

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
        {!isMobile && this.state.mainpage && upperLeftCorner}
        {upperRightCorner}
        {footerLeft}
        {footerRight}
        {!isMobile && this.state.image === "MOVIE" && hathaway}
        {!isMobile && this.state.image === "MUNA" && muna}
        {this.state.image === this.art[0] && audrey}
        {this.state.image === this.art[1] && growingpains}
        {this.state.image === this.art[2] && clutteredmind}
      </div>
    );

    return page;
  }
}
