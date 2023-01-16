import './App.css';
import Day from "./components/Day";
import Week from "./components/Week";

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
  task: {color: "orange"}
};

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
      <h3>Day</h3>
      <Day attribut={ATTRIBUTS.absenceConfirmed} />
      <Day attribut={ATTRIBUTS.absenceConfirmed} bullet={true}/>
      <Day attribut={ATTRIBUTS.absenceAnnAsked} />
      <Day attribut={ATTRIBUTS.empty} />
      <Day attribut={ATTRIBUTS.mission} />
      <Day attribut={ATTRIBUTS.empty} />
      <Day attribut={ATTRIBUTS.task} />
      <Day attribut={ATTRIBUTS.jobAM} />
      <Day attribut={ATTRIBUTS.jobPM} />
      <h3>Week</h3>
      <Week days={[]} />
      <Week />
      <h3>Month</h3>
      <h3>Year</h3>
    </div>
  );
}

export default App;
