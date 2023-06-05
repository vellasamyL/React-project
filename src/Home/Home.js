import React, { useContext, useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { stateContext } from "../context/statecontext.js";
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Footer from "../Footer/footer.js";
import "./home.css";
import RelavantProducts from "../RelaventProduct/RelavantProduct.js";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import headimg from "../Assest/headerimg.webp"
import headimg02 from "../Assest/headerimg-02.webp"
import headimg03 from "../Assest/headerimg-03.webp"

const Home = () => {
  const [state, setState] = useState('')
  const {
    state: { cart, teams, search },
    dispatch,
  } = useContext(stateContext);
  console.log(cart);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // const responsive2 = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 1024 },
  //     items: 1
  //   },
  //   desktop: {
  //     breakpoint: { max: 1024, min: 800 },
  //     items: 1
  //   },
  //   tablet: {
  //     breakpoint: { max: 800, min: 464 },
  //     items: 1
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let navigate4 = useNavigate();
  const productShow = (value, qty) => {
    navigate4("/secondslide");
    dispatch({ type: "DETAILS", payload: { obj: value, quantity: qty } });
  };
  const extracard = () => {
    let a = {};
    for (let i = 0; i < teams.length; i++) {
      a[teams[i].id] = 1;
    }
    return a;
  };
  console.log(extracard());
  const [qty, setQty] = useState(1);
  console.log(qty);
  const [func, setFunc] = useState(extracard());
  console.log(func);


  const decrement = (id) => {
    teams[id].qty -= 1
    dispatch({ type: "DEC", payload: teams })
  };

  const increment = (id) => {

    teams[id].qty += 1

    dispatch({ type: "INC", payload: teams })
  }



  return (
    <section className="team">

      <Carousel responsive={responsive} infinite={true}
        autoPlay={true} autoPlaySpeed={3000}>
        <div class="headimage">
          <img src={headimg}></img>
        </div>
        <div class="headimage">
          <img src={headimg02}></img>
        </div>
        <div class="headimage">
          <img src={headimg03}></img>
        </div>
      </Carousel>

      <div className="teamcontainer">
        <h1>My Smart Basket</h1>
        <div class="teamrow">
          {teams?.filter(e => e.details.toLowerCase().includes(search))?.map((value, index) => {
            return (
              <>
               {/* <Carousel responsive2={responsive2} infinite={true}
        autoPlay={true} autoPlaySpeed={3000}> */}
                <div className="teamcol col-lg-3 col-xs-12 col-md-4">
                  <div className="formcard" key={index}>
                    <Card sx={{ maxWidth: 300 }} className="cardcolor">
                      <div
                        className="image-card col-xs-5"
                        onClick={() => productShow(value, func)}
                      >
                        <CardMedia
                          component="img"
                          // height="auto"
                          image={value.img}
                          alt="vicky"
                          className="image position"
                        />
                      </div>

                      <CardContent className="col-xs-6">
                        <div className="d-xs-none">
                          <img src="https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg"></img>
                        </div>
                        <div className="contents">
                        <h6 className="map1">{value.heading}</h6>
                        <h5>{value.details}</h5>

                        <div>
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                              >
                                {value.quantity?.map((e, i) => (
                                  <MenuItem value={e}>{e}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                          </div>
                        </div>
                        <div className="shadows">
                          <div>
                            <h6>
                              MRP:{" "}
                              <span>
                                <del>{value.strike}</del>
                              </span>{" "}
                              <span>{value.rupees}</span>
                            </h6>
                          </div>
                          <div className="cardflex d-none d-lg-block">
                            <div className="cardicon">
                              <LocalShippingIcon />
                            </div>
                            <div>
                              <h6>{value.delievery}</h6>
                            </div>
                          </div>
                          <div className="cardfoot ">
                            <div>
                              <h6>QUANTITY:</h6>
                              <button
                                className="btn d-none d-lg-block"
                                onClick={() => decrement(index)}
                              >
                                -
                              </button>
                              <input
                                class="inputcard d-none d-lg-block"
                                value={value.qty}
                                size={1}
                              />
                              <button
                                className="btn d-none d-lg-block"
                                onClick={() => increment(index, value.stock)}
                              >
                                +
                              </button>
                            </div>
                            <div>
                              {cart.some((e) => e.id === value.id) ? (
                                <button
                                  className="footicon d-none d-lg-block"
                                  onClick={() =>
                                    dispatch({ type: "REMOVE", payload: value })
                                  }
                                  style={{
                                    backgroundColor: "red",
                                    color: "white",
                                  }}
                                >
                                  REMOVE
                                </button>
                              ) : (
                                <button style={{fontSize:"10px"}}
                                  className="footicon"
                                  onClick={() =>
                                    dispatch({ type: "CART", payload: value })
                                  }
                                >
                                  ADD 
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <h5 className="offer">
                        {value.offer}
                        <Icon icon="bxs:offer" className="offericon d-none d-lg-block" />
                      </h5>

                    </Card>
                  </div>
                </div>
                {/* </Carousel> */}
              </>
            );
          })}
        </div>
        <RelavantProducts />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
