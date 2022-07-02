import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BACKEND_BASE_URL } from "../GlobalVariables";
import Parser from "html-react-parser";

const CardStyles = styled.div`
  border: none;
  background-color: transparent;

  &:hover {
    color: red;
  }
`;

const TextBox = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const JournalPosts = () => {
  //=================================== Fetch Table Data ===================================

  const [journalPosts, setJournalPosts] = useState([]);
  console.log(journalPosts);
  const fetchJournalPosts = async () => {
    await axios.get(`${BACKEND_BASE_URL}/api/journals`).then((res) => {
      setJournalPosts(res.data.allJournalPosts.data);
      // console.log(res.data.allJournalPosts);
    });
  };

  useEffect(() => {
    fetchJournalPosts();
  }, []);

  // =============== Fetch Tabs =============================
  const [tabItems, setTabItems] = useState([]);

  const [filteredTabPosts, setFilteredTabPosts] = useState([]);
  console.log(filteredTabPosts);

  const renderAllTabs = async () => {
    // try {
    //   await axios
    //     .get(`${BACKEND_BASE_URL}/api/journals/`)
    //     .then((res) => {
    //       setFilteredTabPosts(res.data);
    //     });
    // } catch (error) {
    //   // console.log(error);
    // }
  };

  useEffect(() => {
    renderAllTabs();
  }, []);

  return (
    <>
      <Header />
      <div className="container main_section">
        <div className="my-5">
          <Row>
            {journalPosts.map((data, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={3}
                className="mb-3 d-flex justify-content-center "
              >
                <Card style={{ width: "18rem" }}>
                  <Link
                    to={`/journals/${data.id}`}
                    className="text-decoration-none text-black"
                  >
                    <Card.Img
                      variant="top"
                      src={`${BACKEND_BASE_URL}/${data.image}`}
                    />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <div className="my-2">
                        <TextBox>{Parser("" + data.shortDescription)}</TextBox>
                        <CardStyles className="text-decoration-none d-flex justify-content-between mt-4">
                          <span>{data.journal_categories.categoryName}</span>
                          <span>{data.created_at.toString().slice(0, 10)}</span>
                        </CardStyles>
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>

          <p>
            Psst ..! We now have presence in Germany and Switzerland. Buy
            alternatives to <span>Snus in Germany</span> on Northerner.com/de.
            Buy <span>Snus in Switzerland</span>
            on SnusMarkt.ch.
          </p>
        </div>
      </div>
      <Footer shippingPolicy="d-none" />
    </>
  );
};

export default JournalPosts;
