import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="main">
      <div className="container-md px-xl-0 px-lg-3 px-md-0 px-4">
        <div className="row gx-5">
          <div className="col-lg-4">
            <div className="pricing">
              <div className="pricing-head">
                <h4>Kategoria A1, A2, B1, B</h4>
                <i className="far fa-list-alt"></i>
              </div>
              <ul className="mb-3">
                <li>
                  <strong>Lloji i testit teorik:</strong> Kategoria Bazë
                </li>
                <li>
                  <strong>Koha:</strong> 40 minuta
                </li>
                <li>
                  <strong>Pyetje në total:</strong> 40
                </li>
                <li>
                  <strong>Gabime të lejuara:</strong> 4
                </li>
              </ul>
              <div className="pricing-footer">
                <Link to="/tests">Lista e testeve</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing">
              <div className="pricing-head">
                <h4>Pyetje te rastit</h4>
                <i className="fas fa-question-circle"></i>
              </div>
              <ul className="mb-3">
                <li>
                  <strong>Lloji i testit teorik:</strong> Kategoria Bazë
                </li>
                <li>
                  <strong>Koha:</strong> 1 minutë për pyetje
                </li>
                <li>
                  <strong>Pyetjet gjenerohen në mënyrë rastësore</strong>
                </li>
                <li>
                  <strong>Përfshihen të gjitha pyetjet e DPSHTRR</strong>
                </li>
              </ul>
              <div className="pricing-footer">
                <a href="#">Pyetje te rastit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing">
              <div className="pricing-head">
                <h4>Test i rastit</h4>
                <i className="far fa-question-circle"></i>
              </div>
              <ul className="mb-3">
                <li>
                  <strong>Lloji i testit teorik:</strong> Kategoria Bazë
                </li>
                <li>
                  <strong>Koha:</strong> 40 minuta
                </li>
                <li>
                  <strong>Pyetje në total:</strong> 40
                </li>
                <li>
                  <strong>Gabime të lejuara:</strong> 4
                </li>
              </ul>
              <div className="pricing-footer">
                <a href="#">Test i rastit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
