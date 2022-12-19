import React, { useState }  from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { SectionPart } from 'components/Section/Section';
import { FeedbackOptions } from './Feedbacksection/Feedback'; 
import feedbackOptions from "../../src/feedBackOptions.json"
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Section/Notification';

export const App = () => {
  const [good, setGood] = useState(0); 
  const [neutral, setNeutral] = useState(0); 
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const name = e.target.name;
    switch (name) {
      case "good":
        setGood (state => state + 1)
        break;

        case "neutral":
          setNeutral(state => state + 1)
          break;
       case "bad":
        setBad(state => state + 1)
            break;
      default:
        return;
    }
  }
  const totalFeedback=good+bad+neutral
  const positiveFeedbackPercentage= Math.round((good * 100) / totalFeedback);
 


  return (
    <div>
      <GlobalStyle /> 
      <SectionPart title="Please leave feedback">
      <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={handleIncrement}
          />
        </SectionPart>
        <SectionPart title="Statistics">
        {totalFeedback ? (
            <Statistics          
              valueGood={good}
              valueNeutral={neutral}
              valueBad={bad}
             totalFeedback={totalFeedback}
             positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          ) : (
           <Notification message="There is no feedback" />
           )}

        </SectionPart>
    </div>
  );
};

