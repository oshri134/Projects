class Products {
  constructor(
    id,
    imageUrl,
    title,
    explanatoryParagraph,
    dimensionsAndWeight,
    shipping,
    finalPrice_Shipping,
    reviews
  ) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.title = title;
    this.explanatoryParagraph = explanatoryParagraph;
    this.dimensionsAndWeight = dimensionsAndWeight;
    this.shipping = shipping;
    this.finalPrice_Shipping = finalPrice_Shipping;
    this.reviews = reviews;
  }
}

export default Products;
