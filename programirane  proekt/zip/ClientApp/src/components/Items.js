import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardSubtitle } from 'reactstrap';
import { Get } from '../Service.js';

function ItemCard(props) {
    return (
        <Card>
            <CardBody>
                <CardTitle tag='h5'>{props.name}</CardTitle>
                <CardSubtitle>{props.brand}</CardSubtitle>
                <CardText>Sizes: {props.sizes}</CardText>
                <CardText tag='h4'>${props.price}</CardText>
            </CardBody>
        </Card>
    )
}

export class Items extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        Get().then(items => this.setState({ items: items }))
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                {this.state.items.map(i => 
                    <ItemCard
                        name={i.name}
                        brand={i.brand}
                        price={i.price}
                        sizes={i.sizes }
                    ></ItemCard>
                ) }
            </div>
        )
    }

}
