import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const MyComponent = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Card key={index}>
          <CardImg top width="100%" src={item.imageUrl} alt={item.title} />
          <div>
            <CardTitle>{item.title}</CardTitle>
            <CardSubtitle>{item.subtitle}</CardSubtitle>
            <CardText>{item.description}</CardText>
            <Button>{item.eligibleToBuy ? 'Buy Now' : 'Not Eligible'}</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyComponent;

