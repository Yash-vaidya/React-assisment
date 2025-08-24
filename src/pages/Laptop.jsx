import React from "react";
const Laptop = (props) => {
  const laptop = [
    {
      id: 1,
      img: "./i3laptop/acer.png",
      title: "Acer i-3 laptop",
      price: "1.2 lakh",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 2,
      img: "./i3laptop/asus.png",
      title: "Asur i-3 laptop",
      price: "1.2 lakh",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 3,
      img: "./i3laptop/dell.png",
      title: "Dell i-3 laptop",
      price: "1.2 lakh",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 4,
      img: "./i3laptop/hp.png",
      title: "Hp i3 laptop",
      price: "1.2 lakh",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 5,
      img: "./i3laptop/infinex.png",
      title: "Infinex i-3 laptop",
      price: "1.2 lakh",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 6,
      img: "./i3laptop/lenovo.png",
      title: "Lenovo i-3laptop",
      price: "1.2 lakh",
      btn1: "Add to cart",
      btn2: "add to basket",
    },

    {
      id: 7,
      img: "./i3laptop/samsung.png",
      title: "Samsung i3 laptop",
      price: "1.2 lakh",
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
              className="lol  text-center p-2 mb-4"
              style={{ fontSize: "45px" }}
            >
              laptop section{" "}
            </h3>
          </div>
          {laptop.map((laptop) => (
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={laptop.img}
                  className="img-fluid"
                  style={{ width: "400px", height: "250px" }}
                />
                <div className="card-body">
                  <h3 className="card-title text-center text-dark">
                    {laptop.title}
                  </h3>
                  <h5 className="card-price  text-center text-dark">
                    {laptop.price}
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="card-text"></div>
                  <a href="#" className="btn btn-danger m-2 col-md-12">
                    {" "}
                    {laptop.btn1}
                  </a>
                  <a href="#" className="btn btn-danger m-2 col-md-12">
                    {" "}
                    {laptop.btn2}
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
export default Laptop;
