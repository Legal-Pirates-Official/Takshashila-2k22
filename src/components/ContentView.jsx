import React, { useState } from "react";

export default function ContentView({ rules, registration,type }) {
  const [activeTab, setActiveTab] = useState(rules?"rules":"registration");
  return (
    <div
      className="h-100"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 20
      }}
    >
      <div
        className="pannel"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 40
        }}
      >
        {rules&&<h3
            className={ type==="cultural"?"cultural-tab-selector fw-light":"technical-tab-selector fw-light"}
            style={{
            textDecoration: activeTab === "rules" ? "underline" : "none"
          }}
          onClick={() => setActiveTab("rules")}
        >
          Rules
        </h3>}
        {registration && (
          <h3
            className={type==="cultural"?"cultural-tab-selector fw-light":"technical-tab-selector fw-light"}
            style={{
              textDecoration:
                activeTab === "registration" ? "underline" : "none"
            }}
            onClick={() => setActiveTab("registration")}
          >
            Registration
          </h3>
        )}
      </div>
      <div className="content py-0 h-100">
        {activeTab === "rules" ? (
          <div style={{ height: "400px", overflow: "scroll" }}>
            <ul>
              {rules?.map((rule) => (
                <>
                  <h4 className="my-2">{Object?.keys(rule)[0]}</h4>
                  {rule[Object?.keys(rule)[0]]?.map((rules) => (
                    <li style={{ listStyle: "inside", whiteSpace:"pre-line"}}>{rules}</li>
                  ))}
                </>
              ))}
            </ul>
          </div>
        ) : (
          <div style={{ height: "400px", overflow: "scroll" }}>
            <ul>
              {registration &&
                registration?.map((rule) => (
                  <li style={{ listStyle: "inside", whiteSpace:"pre-line"}}>{rule}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
