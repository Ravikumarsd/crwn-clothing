import React, { Component } from "react";
import SHOP_DATA from "./shoppage.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
