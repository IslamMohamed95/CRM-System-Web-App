import React, { useEffect, useState } from "react";
import "./NewCase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function NewCase() {
  const caseRoles = ["Dispute", "CTR", "Inquiry"];
  const [newCase, setCase] = useState({
    name: "",
    provider: "",
    ref: "",
    acc: "",
    cat: "",
    classi: "",
    dep: "",
    issue: "",
    actualAmount: "",
    wrongAmount: "",
    note: "",
  });
  const clientDetails = [
    { header: "Client Name", name: "name" },
    {
      id: 0,
      header: "Service Provider",
      name: "provider",
      value: newCase.provider,
      list: ["Du", "ETISALAT", "Virgin"],
    },
    {
      header: "Reference Number",
      name: "ref",
      value: newCase.ref,
    },
    {
      header: "Account Number",
      name: "acc",
      value: newCase.acc,
    },
    {
      id: 1,
      header: "Category",
      name: "cat",
      value: newCase.cat,
      list: ["Mobile", "Home Internet", "Home Wifi"],
    },
    {
      id: 2,
      header: "Classification",
      name: "classi",
      value: newCase.classi,
      list: ["Bills", "Technical Issue", "Coverage"],
    },
    {
      id: 3,
      header: "Issue",
      name: "issue",
      value: newCase.issue,
      list: ["Slow", "Not Working", "Wrong Information"],
    },
    {
      header: "Actual Amount",
      name: "actualAmount",
      value: newCase.actualAmount,
    },
    { header: "Wrong Amount", name: "wrongAmount", value: newCase.wrongAmount },
  ];

  let result = ` Dear team

  * Provider : Customer was subscribed with service provider ( ${
    newCase.provider
  } ) for [ ${newCase.cat} ] service
  * Issue : ${
    newCase.classi === "Bills"
      ? `Customer subscribed a plan according to what the ( ${newCase.provider} ) told him and it was a wrong information, 
                So it leads to wrong bills it should be [ ${newCase.actualAmount} ] aed/month instead of [ ${newCase.wrongAmount} ] aed/month .`
      : `${
          newCase.classi === "Technical Issue"
            ? `Customer complaint because the service is [ ${newCase.issue} ] and he tried to contact with ( ${newCase.provider} ) 
                but no action has been taken till now .`
            : `Customer suffering from bad [ ${newCase.classi} ] in his area and he contacted with ( ${newCase.provider} ) but no solution till 
                now .`
        }`
  } 
  * Solution : Customer want his problem to be resolved .
  
  Please follow up
  
  ${newCase.note !== "" ? `[ Note ] : ${newCase.note}` : ``} `;

  function roleEffect(index) {
    document.querySelectorAll(".role").forEach((r, ind) => {
      if (ind === index) {
        r.classList.add("activeRole");
      } else {
        r.classList.remove("activeRole");
      }
    });
  }

  function toggleList(i) {
    document.querySelectorAll(".list").forEach((li, index) => {
      if (index === i) {
        li.classList.toggle("activeList");
      } else {
        li.classList.remove("activeList");
      }
    });
  }

  function hideList(e, i) {
    const { innerHTML, name } = e.target;
    console.log(name, innerHTML);
    setCase({ ...newCase, [name]: innerHTML });
    document.querySelectorAll(".list")[i].classList.remove("activeList");
  }

  function handleInput(e) {
    const { value, name } = e.target;
    setCase({ ...newCase, [name]: value });
  }

  useEffect(() => {
    document.querySelectorAll(".role")[0].classList.add("activeRole");
    document.querySelectorAll(".billValue").forEach((v) => {
      v.disabled = true;
    });
  }, []);

  useEffect(() => {
    if (newCase.classi === "Bills") {
      document.querySelectorAll(".billValue").forEach((v) => {
        if (
          v.getAttribute("name") === "actualAmount" ||
          v.getAttribute("name") === "wrongAmount"
        ) {
          v.disabled = false;
          setCase({ ...newCase, issue: "" });
        } else {
          setCase({ ...newCase, wrongAmount: "", actualAmount: "" });
          v.disabled = true;
        }
      });
    } else if (
      newCase.classi === "Coverage" ||
      newCase.classi === "Technical Issue"
    ) {
      document.querySelectorAll(".billValue").forEach((v) => {
        if (
          v.getAttribute("name") === "actualAmount" ||
          v.getAttribute("name") === "wrongAmount"
        ) {
          setCase({ ...newCase, wrongAmount: "", actualAmount: "" });
          v.disabled = true;
          v.value = "";
        } else {
          v.disabled = false;
          setCase({ ...newCase, issue: "" });
        }
      });
    } else {
      document.querySelectorAll(".billValue").forEach((v) => {
        setCase({ ...newCase, wrongAmount: "", actualAmount: "", issue: "" });
        v.disabled = true;
      });
    }
  }, [newCase.classi]);
  return (
    <section id="Case">
      <div id="caseRole">
        {caseRoles.map((c, i) => (
          <div key={i} className="role" onClick={() => roleEffect(i)}>
            <h3>{c}</h3>
          </div>
        ))}
      </div>
      <div className="caseDetails">
        <div id="middleContainer">
          <div id="caseInputs">
            <div id="providerDetails">
              {clientDetails.map((c, i) => {
                for (let j = 0; j <= clientDetails.length; j++) {
                  if (i >= 3) {
                    break;
                  } else {
                    if (c.list !== undefined) {
                      return (
                        <div key={i}>
                          <label>{c.header}</label>
                          <div className="options">
                            <input
                              className="listController"
                              type="text"
                              name={c.name}
                              value={c.value}
                              onClick={() => toggleList(c.id)}
                              readOnly
                            />
                            <FontAwesomeIcon icon={faAngleDown} />
                            <ul className="list">
                              {c.list.map((li, ind) => {
                                return (
                                  <button
                                    onClick={(e) => hideList(e, c.id)}
                                    key={ind}
                                    name={c.name}
                                    className="opt"
                                  >
                                    {li}
                                  </button>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={i}>
                          <label>{c.header}</label>
                          <input
                            type={c.name === "name" ? "text" : "number"}
                            name={c.name}
                            value={c.value}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                      );
                    }
                  }
                }
              })}
            </div>
            <div id="issueDetails">
              {clientDetails.map((c, i) => {
                for (let j = 3; j <= clientDetails.length; j++) {
                  if (i >= clientDetails.length) {
                    break;
                  } else {
                    if (i >= 3 && i <= 5) {
                      if (c.list !== undefined) {
                        return (
                          <div key={i}>
                            <label>{c.header}</label>
                            <div className="options">
                              <input
                                type="text"
                                name={c.name}
                                value={c.value}
                                onClick={() => toggleList(c.id)}
                                readOnly
                              />
                              <FontAwesomeIcon icon={faAngleDown} />
                              <ul className="list">
                                {c.list.map((li, ind) => {
                                  return (
                                    <button
                                      onClick={(e) => hideList(e, c.id)}
                                      key={ind}
                                      className="opt"
                                      name={c.name}
                                    >
                                      {li}
                                    </button>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={i}>
                            <label>{c.header}</label>
                            <input
                              type="number"
                              name={c.name}
                              value={c.value}
                              onChange={(e) => handleInput(e)}
                            />
                          </div>
                        );
                      }
                    }
                  }
                }
              })}
            </div>
          </div>
          <div id="caseResult">
            <div>
              <label>Case Result</label>
              <textarea
                value={
                  (newCase.provider &&
                    newCase.cat &&
                    newCase.classi &&
                    newCase.issue) ||
                  (newCase.actualAmount && newCase.wrongAmount)
                    ? result
                    : ""
                }
                readOnly
              ></textarea>
            </div>
          </div>
          <div id="Btns">
            <button>Submit</button>
            <button>Draft</button>
          </div>
        </div>
        <div id="note">
          {clientDetails.map((c, i) => {
            for (let j = 6; j <= clientDetails.length; j++) {
              if (i >= clientDetails.length) {
                break;
              } else {
                if (i >= 6) {
                  if (c.list !== undefined) {
                    return (
                      <div key={i}>
                        <label>{c.header}</label>
                        <div className="options">
                          <input
                            type="text"
                            className="billValue"
                            name={c.name}
                            value={c.value}
                            onClick={() => toggleList(c.id)}
                            readOnly
                          />
                          <FontAwesomeIcon icon={faAngleDown} />
                          <ul className="list">
                            {c.list.map((li, ind) => {
                              return (
                                <button
                                  onClick={(e) => hideList(e, c.id)}
                                  key={ind}
                                  name={c.name}
                                  className="opt"
                                >
                                  {li}
                                </button>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={i}>
                        <label>{c.header}</label>
                        <input
                          type="number"
                          name={c.name}
                          value={c.value}
                          onChange={(e) => handleInput(e)}
                          className="billValue"
                        />
                      </div>
                    );
                  }
                }
              }
            }
          })}
          <div>
            <label>Note</label>
            <textarea
              value={newCase.note}
              onChange={(e) => setCase({ ...newCase, note: e.target.value })}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCase;
