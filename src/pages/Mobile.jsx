import React from "react";
const Mobile = (props) => {
  const mobile = [
    {
      id: 1,
      img: "./phone/iphone-16.png",
      title: "I phone 16pro max ",
      price: "₹1,84,900",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 2,
      img: "./phone/one+.png",
      title: "one plus ",
      price: "₹89,997",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 3,
      img: "./phone/oppo.png",
      title: "Oppo",
      price: "₹99,999",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 4,
      img: "./phone/pixal.png",
      title: "google pixal ",
      price: "₹99,999",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 5,
      img: "./phone/samsung-s25.png",
      title: "Samsung",
      price: "₹1,65,999",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 6,
      img: "./phone/vivo.png",
      title: "Vivo",
      price: "₹94,999",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 7,
      img: "./phone/xaiomi.png",
      title: "Xaiomi",
      price: "₹1,09,998",
      btn1: "Add to cart",
      btn2: "add to basket",
    },
  ];

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h3
              className=" lol text-center p-2 mb-4"
              style={{ fontSize: "45px" }}
            >
              Mobile section{" "}
            </h3>
          </div>
          {mobile.map((mobile) => (
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card">
                  <img
                    src={mobile.img}
                    className="img-fluid"
                    style={{ width: "400px", height: "300px" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-center text-dark">
                      {mobile.title}
                    </h3>
                    <h5 className="card-price  text-center text-dark">
                      {mobile.price}
                    </h5>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="card-text"></div>
                  <a href="#" className="btn btn-primary m-2 col-md-12">
                    {" "}
                    {mobile.btn1}
                  </a>
                  <a href="#" className="btn btn-danger m-2 col-md-12">
                    {" "}
                    {mobile.btn2}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Mobile;
