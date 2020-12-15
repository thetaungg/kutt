import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import React, { FC } from "react";

interface Props {
  data: any[]; // TODO: types
}

const ChartPie: FC<Props> = ({ data }) => (
  <ResponsiveContainer
    width="100%"
    height={window.innerWidth < 468 ? 240 : 320}
  >
    <PieChart
      margin={{
        top: window.innerWidth < 468 ? 56 : 0,
        right: window.innerWidth < 468 ? 56 : 0,
        bottom: window.innerWidth < 468 ? 56 : 0,
        left: window.innerWidth < 468 ? 56 : 0
      }}
    >
      <Pie
        data={data}
        dataKey="value"
        innerRadius={window.innerWidth < 468 ? 20 : 80}
        fill="#B39DDB"
        label={({ name }) => name}
      />
      {/* Todo
          Need to come up with a better way to use css variables here.
          A bit tricky since we can't use className or css props here
      */}
      <Tooltip
        itemStyle={{ color: "var(--color-text)" }}
        contentStyle={{
          borderRadius: "4px",
          backgroundColor: "var(--color-modal-bg)",
          borderColor: "var(--default-border-color)"
        }}
      />
    </PieChart>
  </ResponsiveContainer>
);

export default ChartPie;
