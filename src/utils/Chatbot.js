import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot, { Loading } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
var select=true;
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#5746f2',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#5746f2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#000',
};
function Toggle(){
  select=select==false?true:false;
  return `Speech Synthesis set to ${select}`;
}
class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    console.log(search);
    const endpoint = encodeURI('https://dbpedia.org');
    const query = encodeURI(`
      select * where {
      ?x rdfs:label "${search}"@en .
      ?x rdfs:comment ?comment .
      FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `);

    const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        //console.log(data);
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          self.setState({ loading: false, result: bindings[0].comment.value });
        } else {
          self.setState({ loading: false, result: 'Not found.' });
        }
      }
    }

    xhr.open('GET', queryUrl);
    xhr.send();
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div className="dbpedia">
        {loading ? <Loading /> : result}
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            {
              !trigger &&
              <button
                onClick={() => this.triggetNext()}
              >
                Search Again
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

class SimpleForm extends Component {
  config = {
    width: "300px",
    height: "400px",
    floating: true,
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hi I am helper bot,here at your service!.What would you like to learn today?',
              trigger: '2',
            },
            {
              id: '2',
              options: [
                { value: 1, label: 'ML', trigger: 'Machine Learning' },
                { value: 2, label: 'DL', trigger: 'Deep Learning' },
                { value: 3, label: 'Something New', trigger: 'Custom' },
                {value: 4, label: 'Toggle Speech Synthesis', trigger: 'toggle'},
              ],
            },
            {
              id:'toggle',
              component:<Toggle/>,
              asMessage: true,
              trigger: '2',
            },
            {
              id: 'Machine Learning',
              options: [
                { value: 1, label: 'Linear Regression', trigger: 'Linear Regression' },
                { value: 2, label: 'Polynomial Regression', trigger: 'Polynomial Regression' },
                { value: 3, label: 'Logistic Regression', trigger: 'Logistic Regression' },
                { value: 4, label: 'SVM', trigger: 'SVM' },
              ]
            },
            {
              id: 'Deep Learning',
              options: [
                { value: 1, label: 'DNN', trigger: 'DNN' },
                { value: 2, label: 'CNN', trigger: 'CNN' },
                { value: 3, label: 'NLP', trigger: 'NLP' },
              ]
            },
            {
              id: 'Custom',
              message: 'Type Something',
              trigger: 'search',
            },
            {
              id: 'search',
              user: true,
              trigger: 'results',
            },
            {
              id: 'results',
              component: <DBPedia />,
              waitAction: true,
              trigger: '3',
            },
            {
              id: 'Linear Regression',
              message: 'Linear regression performs the task to predict a dependent variable value (y) based on a given independent variable (x). So, this regression technique finds out a linear relationship between x (input) and y(output). Hence, the name is Linear Regression.',
              trigger: '3',
            },
            {
              id: 'Polynomial Regression',
              message: 'In Polynomial regression, the original features are converted into Polynomial features of required degree (2,3,..,n) and then modeled using a linear model.',
              trigger: '3',
            },
            {
              id: 'Logistic Regression',
              message: 'Logistic Regression is a Machine Learning algorithm which is used for the classification problems, it is a predictive analysis algorithm and based on the concept of probability. ... The hypothesis of logistic regression tends it to limit the cost function between 0 and 1 .',
              trigger: '3',
            },
            {
              id: 'SVM',
              message: 'Support Vector Machine” (SVM) is a supervised machine learning algorithm that can be used for both classification or regression challenges',
              trigger: '3',
            },
            {
              id: 'DNN',
              message: 'At its simplest, a neural network with some level of complexity, usually at least two layers, qualifies as a deep neural network (DNN), or deep net for short. Deep nets process data in complex ways by employing sophisticated math modeling.',
              trigger: '3',
            },
            {
              id: 'CNN',
              message: 'Within Deep Learning, a Convolutional Neural Network or CNN is a type of artificial neural network, which is widely used for image/object recognition and classification. Deep Learning thus recognizes objects in an image by using a CNN.',
              trigger: '3',
            },
            {
              id: 'NLP',
              message: 'NLP is a field in machine learning with the ability of a computer to understand, analyze, manipulate, and potentially generate human language.',
              trigger: '3',
            },
            {
              id:'3',
              message: 'Want to keep exploring?,You can head to the navbar to learn more!',
              trigger: '2',
            }
          ]}
          {...this.config}
          headerTitle="OneML"
          recognitionEnable={true}
          speechSynthesis={{ enable: select, lang: 'en'}}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
