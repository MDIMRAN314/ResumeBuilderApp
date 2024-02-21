import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg"></div>
                <div className="contant_box_404">
                  <h3 className="h3-pnf">Page Not Found</h3>
                  <Link className="link_404" to="/">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
