import React from "react";
import axios from "axios";
import { Card, Statistic } from "semantic-ui-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./DashboardGrid.css";
const dashboardData = "http://localhost:5000/twitteropinions/:count";

const sentimentData = [
    {
      "date": "9/11/2022",
      "positivity": 0.5135,
      "negativity": 0.0725,
    },
    {
        "date": "10/11/2022",
        "positivity": 0.189,
        "negativity": 0.0605,
    },
    {
        "date": "11/11/2022",
        "positivity": 0.506,
        "negativity": 0.0935,
    },
    {
        "date": "12/11/2022",
        "positivity": 0.483,
        "negativity": 0.08,
    },
    {
        "date": "13/11/2022",
        "positivity": 0.2725,
        "negativity": 0.0395,
    },
    {
        "date": "14/11/2022",
        "positivity": 0.4738,
        "negativity": 0.0231,
    },
    {
        "date": "15/11/2022",
        "positivity": 0.7832,
        "negativity": 0.02011,
    }
  ]
function DashboardGrid() {
    const [dashboardCount, setdashboardCount] = React.useState({});

    React.useEffect(() => {
        axios(dashboardData).then(( { data }) => setdashboardCount(data.data))
    }, []); 
    const dashboardBoxes = [
       
        {title:"Total tweets analyzed", className:"purple", value:dashboardCount},
    ];
  return (
    <div className="dashboardGrid">
      <div className="dashboardGrid-boxes">
        {dashboardBoxes.map((box, i) => (
          <Card className="dashboardGrid-boxes-item" centered raised>
            <Statistic
              className={box.className ? box.className : ""}
              as="h4"
              label={box.title}
              value={2000}
            />
          </Card>
        ))}
      </div>
      <div>
        <header as="h3"> One Week Sentiment Trend Line for Safaricom </header>
      <LineChart width={730} height={250} data={sentimentData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="positivity" stroke="#8884d8" />
  <Line type="monotone" dataKey="negativity" stroke="#82ca9d" />
</LineChart>
      </div>
    </div>
  );
}

export default DashboardGrid;