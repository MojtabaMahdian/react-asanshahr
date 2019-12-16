import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions/Advertising";
import Cart from "./Cart";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from 'react-bootstrap/Pagination'
class AdvertisingList extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Container>
        <Row>
          {this.props.advertisings.map(item => (
            <Col key={item.id} xs="3">
              <Cart item={item} />
            </Col>
          ))}
        </Row>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item >{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  //   console.log(state);

  return {
    advertisings: state.add.advertisings
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    fetch: () => dispatch(fetchData())
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(AdvertisingList);
