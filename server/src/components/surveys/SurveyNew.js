// SurveyNew shows survey form and survey review
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })}
            />;
        }

        return <SurveyForm 
        onSurveySubmit={() => this.setState({ showFormReview: true })}
        />;
    }

    render() {
        return (
            <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
            <div className="card white">
                {this.renderContent()}
            </div>
            </ScrollAnimation>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);