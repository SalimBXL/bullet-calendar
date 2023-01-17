import './App.css';
import Day from "./components/Day";
import Week from "./components/Week";
import Month from "./components/Month";
import Year from './components/Year';

const ATTRIBUTS = {
  jobAM: {color: "cyan"},
  jobPM: {color: "blue"},
  absenceConfirmed: {color: "green"},
  absenceAsked: {color: "lime"},
  absenceAnnAsked: {color: "pink"},
  absenceAnnConfirmed: {color: "purple"}, 
  halfDay: {color: "aquamarine"},
  empty: {color: "whitesmoke"},
  mission: {color: "yellow"},
  task: {color: "orange"},
  notWorkingDay: {color: "grey"},
  weekend: {color: "lightgrey"}
};

function App() {

  const w0 = <Week days={[
    <Day/>,
    <Day />,
    <Day />
  ]} />
  const w1 = <Week days={[
    <Day />,
    <Day />,
    <Day />,
    <Day />,
    <Day />,
    <Day />,
    <Day />
  ]} />
  const w2 = <Week days={[
    <Day />,
    <Day />,
    <Day />,
    <Day />,
    <Day />,
    <Day />,
    <Day />
  ]} />

  const month = <Month weeks={[w0, w1, w2, w2, w1]} monthName="January" />;
  const month2 = <Month weeks={[w0, w1, w2, w2, w1]} monthName="February" />;
  const month3 = <Month weeks={[w0, w1, w2, w2, w1]} monthName="March" />;

  return (
    <div className="App">
      <Year months={[
        month, month2, month3,
        month2, month2, month2,
        month3, month3, month3,
        month, month2, month3
      ]} />
    </div>
  );
}

export default App;
