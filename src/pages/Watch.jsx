import React from "react";
const Watch = (props) => {
  const watch = [
    {
      id: 1,
      img: "./watch/Hallucination.png",
      title: "Graff Diamonds Hallucination",
      price: "$55M ",
    },
    {
      id: 2,
      title: "Graff Diamonds The Fascination",
      img: "./watch/Fascination.png",
      price: "$50M",
    },
    {
      id: 3,
      title: "Patek Philippe Grandmaster Chime",
      img: "./watch/Patek.png",
      price: "$31M",
    },
    {
      id: 4,
      title: "Breguet Marie-Antoinette",
      img: "./watch/Breguet.png",
      price: "$30M",
    },
    {
      id: 5,
      title: "Patek Henry Graves Supercomplication",
      img: "./watch/hilippe.png",
      price: "$26M",
    },
    {
      id: 6,
      title: "Rolex Paul Newman Daytona",
      img: "./watch/Paul Newman.png",
      price: "~$18.7M",
    },
    {
      id: 7,
      title: "Jacob & Co. Billionaire Watch",
      img: "./watch/Jaeger.png",
      price: "$18M",
    },
    {
      id: 8,
      title: "Patek Philippe Ref. 1518 (Steel)",
      img: "./watch/Jacob.png",
      price: "~$12M",
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
              Watch section
            </h3>
          </div>
          {watch.map((watch) => (
            <div className="col-md-3 col-sm-12 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card ">
                  <img
                    src={watch.img}
                    className="img-fluid"
                    style={{ width: "400px", height: "300px" }}
                  />
                  <div className="card-body">
                    <div
                      className="card-title text-center text-dark"
                      style={{ fontSize: "23px" }}
                    >
                      {watch.title}
                    </div>
                    <div
                      className="card-price  text-center text-dark"
                      style={{ fontSize: "22px" }}
                    >
                      {watch.price}
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary m-2 col-sm-12">
                    Add to cart
                  </a>
                  <a href="#" className="btn btn-danger m-2 col-sm-12">
                    add to basket
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

export default Watch;
