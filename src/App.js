import { useState } from "react";
import "./App.css";
import Section from "./components/section/Section";
import Feedback from "./components/feedback";
import Statistics from "./components/statistics";
import Notification from "./components/notification";
import { feedbackState } from "./data/feedBackState";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onAddFeedback = (el) => {
    switch (el) {
      case "good":
        setGood((s) => s + 1);
        break;
      case "neutral":
        setNeutral((s) => s + 1);
        break;
      case "bad":
        setBad((s) => s + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback
          feedbackState={feedbackState}
          onAddFeedback={onAddFeedback}
        ></Feedback>
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </>
  );
}
