import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Test } from "../types";

export function Tests() {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    fetch("http://localhost:2222/tests")
      .then((resp) => resp.json())
      .then((testsFromServer) => {
        setTests(testsFromServer);
      });
  }, []);

  return (
    <div className="main">
      <div className="container-md px-xl-0 px-lg-3 px-md-0 px-4">
        <div className="tests">
          <div className="tests-title">
            <h2>Lista e testeve</h2>
            <hr />
          </div>
          <div className="tests-body">
            <div className="row gx-5">
              {tests.map((test) => (
                <div key={test.id} className="col-xl-3 col-lg-4 col-6">
                  <Link to={`/tests/${test.id}`}>
                    <div className="tests-container">
                      <a>
                        <h5>Testi {test.id}</h5>
                      </a>
                      <p className="text-right"></p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
