import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Chart from "react-apexcharts";
export default function CardApi() {
  const [chart, setChart] = useState({});

  async function getData() {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        const chart = {
          options: {
            xaxis: {
              categories: data.map((post) => post.title),
            },
          },
          series: data.map((post) => {
            return {
              name: post.title,
              data: post.id,
            };
          }),
          labels: data.map((post) => post.title),
        };
        console.log(chart);
        setChart(chart);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <Card.Body>
        {chart.labels ? (
          <Chart
            options={chart.options}
            series={chart.series}
            type={"bar"}
            height={400}
          ></Chart>
        ) : (
          <></>
        )}
      </Card.Body>
      <Card.Footer>
        <Card.Title>Grafico de barra(API)</Card.Title>
      </Card.Footer>
    </Card>
  );
}
