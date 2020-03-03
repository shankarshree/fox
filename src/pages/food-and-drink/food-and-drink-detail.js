import React from "react";
import { Link } from "gatsby";
import '../../assets/styles/_index.scss';
import '../../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderNavbar from '../../components/header-navbar/HeaderNavbar';
import Header from '../../components/header/Header';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Membership from '../../components/membership/Membership';
import Footer from '../../components/footer/Footer';

const FoodAndDrinkDetailPage = () => (
    <>
        <HeaderNavbar />

        <Header headerBg="fooddrinkdetails-bg" headerContent="Christmas - Private Dining" buttonName="Contact Us" buttonLink="/contact-us" />

        <Breadcrumb />

        <section className="layout-home">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={10} className="">
                        <div className="">
                            <h3 className="mb-0 custom-heading-line fox-font30">Celebrate the festivities at The Fox Club, Mayfair with exclusive use of the stylish dining room for up to 30 people.</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="py-5">
            <Container>
                <Row className="mb-5">
                    <Col lg={12}>
                        <h3 className="mb-3 fox-font30">Starter</h3>
                        <p className="mb-1 fox-font19">Red Lentil and Pumpkin Soup, Coriander and chilli oil</p>
                        <p className="mb-1 fox-font19">Confit of Duck and Pork Terrine with Cranberries and pistachios</p>
                        <p className="fox-font19">Smoked Halibut Horseradish Potato Cake, Watercress crème fraiche</p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg={12}>
                        <h3 className="mb-3 fox-font30">Main Course</h3>
                        <p className="mb-1 fox-font19">Cider Cured Seatrout Fillet, Fennel Timbale Crab Sauce</p>
                        <p className="mb-1 fox-font19">Roast Turkey, Chestnut Stuffing, Pigs in Blankets & Bread Sauce</p>
                        <p className="mb-4 fox-font19">Lamb Noisette, Roasted Celeriac and redcurrants, Basil cream</p>
                        <p className="fox-font19">(All Mains served with roast potatoes and seasonal vegetables & gravy)</p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg={12}>
                        <h3 className="mb-3 fox-font30">Dessert or Cheese</h3>
                        <p className="mb-1 fox-font19">Iced Chocolate and Meringue Parfait with a Raspberry Coulis</p>
                        <p className="mb-1 fox-font19">Steamed Gingerbread Pudding with Cream Caramel Sauce</p>
                        <p className="fox-font19">Continental Cheese Plate with Pickled Pear, Celery, Walnuts & Onion Chutney</p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg={12}>
                        <h3 className="mb-3 fox-font30">3 Course - £45.00 per person (Incl. VAT)</h3>
                        <p className="mb-1 fox-font19">Includes a welcome glass of Proseco</p>
                        <p className="mb-1 fox-font19">Tea & Coffee included</p>
                        <p className="mb-4 fox-font19">Includes Xmas Theme & Novelties’</p>
                        <p className="mb-4 fox-font19">A Standard 12.5% service charge applies</p>
                        <p className="mb-4 fox-font19">Vegetarian options available on request</p>
                        <p className="mb-4 fox-font19">Beverage - Please see our attached <Link to="/" className="content-link">wine List</Link> for selection</p>
                        <p className="mb-4 fox-font19">Please note there is a room hire fee of £250 + VAT or a minimum spend of £1,500 for exclusive use of the Fox Sitting room.</p>
                        <p className="mb-4 fox-font19">A standard 12.5% service charge applies</p>
                        <p className="mb-4 fox-font19">Please note the Fox club will be closed from midday 22nd December and will re-open Friday 27th December at midday.</p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <h3 className="mb-3 fox-font30">Accommodation</h3>
                        <p className="fox-font19">You can also enjoy an overnight stay right in the heart of Mayfair in one of eight spacious executive rooms or suites. The Fox Club rooms are uniquely different whilst retaining a rich history from one of it’s former residents in the 18th century, <Link to="/" className="content-link">Charles James Fox</Link> a renowned statesman. <Link to="/" className="content-link">Contact Us</Link> for special Christmas accommodation rates.</p>
                        <p className="fox-font19">The Fox Club will also be decorated for the festive season, however should you wish to have additional decorations please let us know and we can arrange this for you.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        <Membership />

        <Footer />
    </>
)

export default FoodAndDrinkDetailPage