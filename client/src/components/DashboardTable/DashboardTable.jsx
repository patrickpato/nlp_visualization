
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Table, Loader, Dimmer } from "semantic-ui-react";

import "./DashboardTable.css";

const DashboardTable = () => {
    const [surveys, setSurveys ] = useState([]); 
//
    const getSurveys = async() => {
        try {
            const response = await fetch("http://localhost:5000/twitteropinions")
            const jsonData = await response.json()

            setSurveys(jsonData)
            
        } catch (err) {
            console.error(err.message)
            
        }
    }
    useEffect(() => {
        getSurveys();
    }, []);
    return (
        <Fragment>
            <table className="table table-bordered mt-5 text-center">
    <thead>
      <tr>
        
        <th>Date</th>
        <th>Positivity</th>
        <th>Negativity</th>
        <th>Positive Tweet</th>
        <th>Negative Tweet</th>
        <th>brand_name</th>
      </tr>
    </thead>
    <tbody>
        {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
      {surveys.map(survey => (
        <tr>
            <td> {survey.date}</td>
            <td>{survey.positivity}</td>
            <td>{survey.negativity}</td>
            <td>{survey.positivetweet}</td>
            <td>{survey.negativetweet}</td>
            <td>{survey.brand_name}</td>
        </tr>
      ))}
      
    </tbody>
  </table>

        </Fragment>
    )
};

export default DashboardTable;