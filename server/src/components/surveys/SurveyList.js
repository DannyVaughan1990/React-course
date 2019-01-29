import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"


class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() { 
        return this.props.surveys.reverse().map(survey => {
            return (
                <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft">
              <div className="card white" key={survey.id}>
                <div className="card-content">
                  <span className="card-title">{survey.title}</span>
                  <p>
                      {survey.body}
                  </p>
                  <p className="right">
                      Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
                </div>
                <div className="card-action">
                 <a>Yes: {survey.yes}</a>
                 <a>No: {survey.no}</a>
                </div>
              </div>
              </ScrollAnimation>

            );
        })
    }

    render() {
        return (
        <div>
          {this.renderSurveys()}
       </div>
        );
    }
}

function mapStateToProps({surveys}) {
    return { surveys }; 
}

export default connect(mapStateToProps, { fetchSurveys})(SurveyList);