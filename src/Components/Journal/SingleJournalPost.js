import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
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

const SingleJournalPost = () => {
  const { postId } = useParams();
  const [journalPosts, setJournalPosts] = useState([]);

  const fetchJournalPost = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}/api/journals/${postId}`)
      .then((res) => {
        setJournalPosts(res.data.singleJournalPost);
        console.log(res.data);
      });
  };

  useEffect(() => {
    fetchJournalPost();
  }, []);

  return (
    <>
      <Header />
      <div className="container main_section">
        <div className="my-5">
          <Row>
            <Col md={8}>
              <img src={`${BACKEND_BASE_URL}/${journalPosts.image}`} alt="" />
              <h2 className="my-3">{journalPosts.title}</h2>
              {Parser("" + journalPosts.description)}
            </Col>
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

export default SingleJournalPost;
