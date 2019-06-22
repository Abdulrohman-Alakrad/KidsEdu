import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import axios from "axios";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      redirect: false,
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName
    };
  }
  goToSubCategories(e) {
    console.log("going to subCategories");
    // axios.get("/Media").then(response => {
    //   console.log(JSON.stringify(response));
    // });
    this.setState({
      redirect: true
    });
  }
  componentDidMount() {
    // console.log("Sending a GET API Call !!!");

    var role = "categories";
    var that = this;
    axios.get("/Media/?role=" + role).then(res => {
      // console.log(res.data[0].img_url);
      // console.log(res.data.length);
      console.log(res.data);
      var urlsArr = that.state.urls;
      console.log(res.data.length);
      for (let i = 0; i < res.data.length; i++) {
        urlsArr.push(res.data[i].img_url);
      }
      that.setState({
        urls: urlsArr
      });
      console.log(that.state.child_info);
    });
  }
  render() {
    var redirect = this.state.redirect;
    // console.log(redirect);
    return (
      <div>
        {/* <div className="profile_button_div">
          <NavLink
            to={{
              pathname: "/Profile",
              state: {
                child_info: this.state.child_info,
                parentName: this.state.parentName,
                childsName: this.state.childsName
              }
            }}
          >
            <button className="Profile_button">profile</button>
          </NavLink>
        </div>
        <div>
          <img
            src={this.state.urls[0]}
            alt="Language"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories.bind(this)}
          />
          {redirect ? (
            <Redirect
              to={{
                pathname: "/subCategores",
                state: {
                  child_info: this.state.child_info
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[1]}
            alt="Videos"
            height="100%"
            width="33%"
          />
          {redirect ? (
            <Redirect
              to={{
                pathname: "/subCategores",
                state: {
                  child_info: this.state.child_info
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[2]}
            alt="Stores"
            height="100%"
            width="33%"
          />
          {redirect ? (
            <Redirect
              to={{
                pathname: "/subCategores",
                state: {
                  child_info: this.state.child_info
                }
              }}
            />
          ) : null}
        </div> */}
        <section className="feature-area body123">
          <div className="container">
            <div className="feature-inner row">
              <div className="col-lg-4 col-md-6">
                <div className="feature-item1">
                  <i className="ti-crown" />
                  <h4>[Title]</h4>
                  <div
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-item1">
                  <i className="ti-briefcase" />
                  <h4>[Title]</h4>
                  <div
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-item1">
                  <img src="https://i.pinimg.com/originals/4e/50/93/4e5093e68297c27d6c2f45b0145271da.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Categories;
