// SurveyFromReview shows users thier form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label}) => {
        return (
            <div key={name}>
             <label>{label}</label>
             <div>
                 {formValues[name]}
             </div>
            </div>
        );
    });


    return (
        
        <div className="card-white">
        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
        <h5>Please confirm your entries</h5>
          {reviewFields}
          <button 
          className="black white-text btn-flat"
          onClick={onCancel}>
          Back
          </button>
          <button 
          onClick={() => submitSurvey(formValues, history)}
          className="right white black-text btn-flat">
                Send
             <i className="material-icons right">email</i> 
          </button>
          </ScrollAnimation>
        </div>
    );
};

function mapStateToProps(state) {
    return{ formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));