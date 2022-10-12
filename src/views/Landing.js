/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
  CardTitle,
  CardSubtitle
} from "reactstrap";


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250" name="principio">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        El cambio comienza por vos{" "}
                        <span>y de la forma mas <strong>transparente</strong></span>
                      </h1>
                      <p className="lead text-white">
                        Nos centramos en ayudar en la gestion de campañas de donacion , y así ayudar a los que mas lo necesitan
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="warning"
                          href="#ayudar"
                        >
                          <i className="ni ni-favourite-28" />
                          <span className="btn-inner--text">Donar</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="#organizaciones"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i class="fa fa-truck" aria-hidden="true"></i>
                          </span>
                          <span className="btn-inner--text">
                            Campañas
                          </span>
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-md-2" md="6">
                      <img
                        alt="..."
                        className="img-fluid ml-4"
                        src={require("assets/img/theme/carro.png")}
                      />
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-basket" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Ahora donar es mas fácil
                          </h6>
                          <p className="description mt-3">
                            Ahora el proceso de donacion va a ser mucho mas facil , dentro de nuestra aplicación vas a poder elegir los productos a donar
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Saber mas
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </div>
                          <h6 className="text-success text-uppercase">
                            Cuales son las necesidades
                          </h6>
                          <p className="description mt-3">
                            Vas a poder ver todas las campañas de donaciones en un mismo lugar y con unos simples pasos vas a poder elegir que campaña ser parte.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Saber mas
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i class="fa fa-truck" aria-hidden="true"></i>
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Donaciones transparentes
                          </h6>
                          <p className="description mt-3">
                            El proceso de donación se va a persitir en la block chain en todo el recorrido , asi logramos mas transparencia y sepas donde estan los productos que donaste.
                          </p>
                          <div>

                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Saber mas
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>



          <section className="section section-lg" id="ayudar">
            <Container>
              <Row className="justify-content-center text-center mb-sm">
                <Col lg="8">
                  <h2 className="display-3">Podes ayudar con estos productos</h2>
                  <p className="lead text-muted">
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Card className=" border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/leche.jpg")}
                      width="100%"
                      top
                    />
                    <CardBody>
                      <CardTitle>Leche Entera Ilolay</CardTitle>
                      <CardSubtitle>$100</CardSubtitle>
                      <p>Compra minima : 10 u</p>
                      <Button className="w-100" color="warning" onClick={event =>  window.location.href='https://localhost:44355/'}><i class="ni ni-cart"></i></Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className=" border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/fideos.jpg")}
                      top
                    />
                    <CardBody>
                      <CardTitle>Fideo Spaghetti Knorr</CardTitle>
                      <CardSubtitle>$200</CardSubtitle>
                      <p>Compra minima : 15 u</p>
                      <Button className="w-100" color="warning"  onClick={event =>  window.location.href='https://localhost:44355/'}><i class="ni ni-cart"></i></Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className=" border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/arroz.jpg")}
                      top
                    />
                    <CardBody>
                      <CardTitle>Arroz Lucchetti</CardTitle>
                      <CardSubtitle>$80</CardSubtitle>
                      <p>Compra minima : 20 u</p>
                      <Button className="w-100" color="warning"  onClick={event =>  window.location.href='https://localhost:44355/'}><i class="ni ni-cart"></i></Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className=" border-0">
                    <CardImg
                      alt="..."
                      width="100%"
                      src={require("assets/img/theme/harina.jpg")}
                      top
                    />
                    <CardBody>
                      <CardTitle>Harina Morixe</CardTitle>
                      <CardSubtitle>$150</CardSubtitle>
                      <p>Compra minima : 5 u</p>
                      <Button className="w-100" color="warning"  onClick={event =>  window.location.href='https://localhost:44355/'}><i class="ni ni-cart"></i></Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg" id="como_lo_hacemos">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/blockchain2.jpg")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>Más Transparencia</h3>
                    <p>
                      Todos los procesos como en la compra como en el envío del producto van a estar persistidos en la blockchain para que puedas consultar sobre tu producto en cualquier momento y al instante.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >

                              <i class="fa fa-lock" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Procesos seguritizados
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fa fa-cubes" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Todas las transacciones persistidas en la blockchain</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fa fa-folder" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Cada registro queda archivada para luego consultarla
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg" id="como_lo_hacemos">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="12">
                  <div className="pr-md-10">
                    <h3>Sumate como</h3>
                    <p>
                      Nuestra plataforma cuenta con los perfiles de : <strong>Vendedor, Organizacion </strong> y <strong>Donante</strong>. La cual te permitir realizar distitnas funciones y actividades mientras
                      navegas dentro de BeChange.
                    </p>
                    <ul className="list-unstyled mt-5">
                    <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="primary"
                            >
                              <i class="ni ni-pin-3" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"> Fundación <span className="text-muted">: Quien se encargara de crear sus campañas y necesidades.</span></h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="primary"
                            >
                              <i class="ni ni-box-2"></i>
                            </Badge>
                          </div>
                          <div>
                          <h6 className="mb-0"> Donante <span className="text-muted">: Quien va a comprar los productos y elegir a que campaña ayudar.</span></h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="primary"
                            >

                            <i class="ni ni-shop"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                             Vendedor <span className="text-muted">: El cual va a poder ofrecer su productos en nuestra aplicación</span></h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default" id="nosotros">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/portada-donacion.jpg")}
                    />
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5 text-white">
                    <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mb-5 text-white">
                      <i class="fa fa-info" aria-hidden="true"></i>
                    </div>
                    <h3 className="text-white">Nosotros somos</h3>
                    <p className="lead">
                      BeChange se creo con el objetivo de ayudar a las organizacion en el proceso de la realización
                      de sus camapañas de donaciones.
                    </p>
                    <p>
                      Brindamos toda la plataforma para que puedan llevar de la forma mas transparente
                      y segura .
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Se parte de esto
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>


          <section className="section section-lg" id="organizaciones">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Confian en nosotros</h2>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/fundacion-si.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Fundacion SÍ</span>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i class="fa fa-globe" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/unicef.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Unicef</span>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i class="fa fa-globe" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/cruz-roja.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Cruz Roja</span>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i class="fa fa-globe" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/caritas.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Caritas</span>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i class="fa fa-globe" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        /<CardsFooter />
      </>
    );
  }
}

export default Landing;
