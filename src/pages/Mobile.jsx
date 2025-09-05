import React from "react";
const Mobile = (props) => {
  const mobile = [
    {
      id: 1,
      img: "./phone/iphone-16.png",
      title: "I phone 16pro max ",
      price: "$1,199",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 2,
      img: "./phone/one+.png",
      title: "OnePlus Open Apex",
      price: "$1,820",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 3,
      img: "./phone/oppo.png",
      title: "Oppo Find X8 Ultra",
      price: "$1,200",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 4,
      img: "./phone/pixal.png",
      title: "Pixel 10 Pro Fold",
      price: "$1,799",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 5,
      img: "./phone/samsung-s25.png",
      title: "Galaxy Z Fold 7",
      price: "$1,999",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 6,
      img: "./phone/vivo.png",
      title: "Vivo X Fold 3 Pro",
      price: "$1,940",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 7,
      img: "./phone/xaiomi.png",
      title: "Xiaomi 15 Ultra",
      price: "$1,199",
      btn1: "Add to cart",
      btn2: "add to basket",
    },
    {
      id: 8,
      img: "./phone/applef.png",
      title: "Falcon Supernova ",
      price: "$48.5 M",
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
                    style={{ width: "400px",  }}
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
                  <a href="#" className="btn btn-primary col-sm-12 m-2  ">
                    {" "}
                    {mobile.btn1}
                  </a>
                  <a href="#" className="btn btn-danger col-sm-12 m-2 ">
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
