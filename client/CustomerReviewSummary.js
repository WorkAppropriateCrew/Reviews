import React from "react";
import LeafRatingComponent from "./LeafRatingComponent";
import { Grid, Cell } from "styled-css-grid";
import ReviewBars from "./ReviewBars";
import Popover from "react-bootstrap/Popover";
import ReviewPage from "./ReviewPage";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class CustomerReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      show: false
    };

    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="review-summary">
        <h4>Customer Reviews</h4>
        <LeafRatingComponent currentItem={this.props.currentItem} type="main" />
        <div
          style={{ fontSize: 13 }}
        >{`${this.props.currentItem.totalReviews} customer ratings`}</div>
        <div style={{ marginTop: "18px" }}></div>
        <ReviewBars currentItem={this.props.currentItem} />
        <hr></hr>
        <h5>By feature</h5>
        {/* need to make a 3X2 grid */}
        <Grid columns={"150px 150px"} justifyContent="space-around">
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div className="review-feature">Handle</div>
          </Cell>
          <Cell
            center
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
          >
            <LeafRatingComponent
              featureReview={this.props.currentItem.reviews[2]}
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div className="review-feature">Smell</div>
          </Cell>
          <Cell
            center
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
          >
            <LeafRatingComponent
              featureReview={this.props.currentItem.reviews[0]}
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div className="review-feature">Appearance</div>
          </Cell>
          <Cell
            center
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
          >
            <LeafRatingComponent
              featureReview={this.props.currentItem.reviews[4]}
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
        </Grid>
        <hr></hr>
        <h5>Review this product</h5>
        <div
          style={{
            marginBottom: 18,
            fontSize: 13
          }}
        >
          How about lettin others know what cha think?
        </div>
        <OverlayTrigger
          ref="overlay"
          trigger="click"
          placement="right"
          rootClose={true}
          overlay={
            <Popover id="review-input-popover" style={{ width: "700px" }}>
              <Popover.Title> How'd you like it David M.? </Popover.Title>
              <Popover.Content>
                <ReviewPage
                  handleSubmitReview={this.props.handleSubmitReview}
                  currentItem={this.props.currentItem}
                  togglePopover={document.body.click()}
                />
              </Popover.Content>
            </Popover>
          }
        >
          <button
            style={{
              width: "300px"
            }}
          >
            <p
              style={{
                fontSize: 13,
                alignSelf: "center",
                marginBottom: 0
              }}
            >
              Write a customer review
            </p>
          </button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default CustomerReviewSummary;
