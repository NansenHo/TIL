import React from "react";

const creedList: string[] = [
  "小步走",
  "早睡早起",
  "保持干净整洁",
  "一周是一年的 2%",
  "如果生气没有用，那就不要生气",
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section class="creedSection">
      <h3>My beliefs: </h3>
      <div>
        {creedList.map((creed, idx) => (
          <div key={idx} className="creedList">
            <p className="creed">
              {idx + 1}. {creed}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
