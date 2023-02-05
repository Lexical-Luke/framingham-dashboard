import React from "react";
// import { PieChart } from "react-minimal-pie-chart";

export const Framingham = ({ framinghamData }) => {
  //console.log("cigsPerDay", framinghamData.cigsPerDay);

  try {
    //COUNT: sum all values (not null) in a column
    function count(column) {
      var sum = 0;
      for (var elem in column) {
        if (column[elem] !== null) {
          sum += parseFloat(column[elem]);
        }
      }
      //console.log(sum);
      return sum;
    }

    //AVERAGE: rounded
    function avg(column) {
      var size = Object.keys(column).length;
      var sum = 0;
      for (var elem in column) {
        if (column[elem] !== null) {
          sum += parseFloat(column[elem]);
        }
      }
      //console.log(sum);
      return Math.round(sum / size);
    }

    //PERCENT: Compares 2 populations as percentages returns an array with both values rounded
    function percentageOf2Groups(column) {
      var yes = 0;
      var no = 0;
      var size = Object.keys(column).length;

      for (var elem in column) {
        if (column[elem] !== null) {
          parseFloat(column[elem]) === 1 ? (yes += 1) : (no += 1);
        }
      }
      yes = Math.round((yes / size) * 100);
      no = Math.round((no / size) * 100);
      return [yes, no];
    }

    var avgAge = avg(framinghamData.age);
    var sexPercentage = percentageOf2Groups(framinghamData.male);
    var smokerPercentage = percentageOf2Groups(framinghamData.currentSmoker);
    var cigsSmokedPerDay = count(framinghamData.cigsPerDay);
    var totalSmokers =
      Object.keys(framinghamData.currentSmoker).length *
      (Math.round(smokerPercentage[0]) / 100);
    var avgCigsPerDayPerSmoker = Math.round(cigsSmokedPerDay / totalSmokers);
    var bpMedsPercentage = percentageOf2Groups(framinghamData.bpMeds);
    var strokePercentage = percentageOf2Groups(framinghamData.prevalentStroke);
    var hypPercentage = percentageOf2Groups(framinghamData.prevalentHyp);
    var diabetesPercentage = percentageOf2Groups(framinghamData.diabetes);
    var chdPercentage = percentageOf2Groups(framinghamData.tenYearCHD);
  } catch {
    console.log("framinghamData: null");
  }

  return (
    <div style={{ display: "inline-block" }}>
      <div style={{ display: "inline-block" }}>
        <p>Average age: {avgAge} </p>
        <p>Women Population: {sexPercentage[1]}%</p>
        <p>Men Population: {sexPercentage[0]}%</p>
        <p>Avg cigs smoked/day per smoker: {avgCigsPerDayPerSmoker} </p>
        <p>Smokers: {smokerPercentage[0]}% </p>
        <p>Non-Smokers: {smokerPercentage[1]}%</p>
        <p>Patients using BP meds: {bpMedsPercentage[0]}%</p>
        <p>Patients susceptible to stroke: {strokePercentage[0]}%</p>
        <p>Patients susceptible to hypertension: {hypPercentage[0]}%</p>
        <p>Patients with diabetes: {diabetesPercentage[0]}%</p>
        <p>Patients susceptible to 10 year CHD: {chdPercentage[0]}%</p>
      </div>
      {/* <div style={{ display: "inline-block" }}></div>
      <div style={{ display: "inline-block" }}></div> */}
    </div>
  );
};

/* <PieChart
        labelStyle={{ color: "white" }}
        animate={true}
        data={[
          {
            title: "Men",
            value: sexPercentage[0],

            labelPosition: "100%",
            color: "#E38627",
          },
          { title: "Women", value: sexPercentage[1], color: "#C13C37" },
        ]}
      /> */
