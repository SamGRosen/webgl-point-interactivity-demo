import strawberries from "url:../data/strawberries.csv";
import broccoli from "url:../data/broccoli.csv";

export default JSON.stringify(
  {
    xAxis: "zero",
    yAxis: "left",
    tracks: [
      {
        order: 1,
        data: strawberries,
        tooltips: 1,
        mark: "area",
        layout: "linear",
        x: {
          attribute: "day",
          type: "quantitative",
          domain: [1, 10],
        },
        y: {
          attribute: "price",
          type: "quantitative",
          domain: [0, 40],
          scale: "linear",
        },
        color: {
          value: "red",
        },
        shape: {
          value: "circle",
        },
      },
      {
        order: 2,
        data: broccoli,
        tooltips: 1,
        mark: "area",
        layout: "linear",
        x: {
          attribute: "day",
          type: "quantitative",
          domain: [1, 10],
        },
        y: {
          attribute: "price",
          type: "quantitative",
          domain: [0, 40],
          scale: "linear",
        },
        color: {
          value: "green",
        },
        shape: {
          value: "diamond",
        },
      },
    ],
  },
  null,
  2
);
