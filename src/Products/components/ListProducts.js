import React from 'react'
import { Card, Columns, Content, Heading } from 'react-bulma-components' 

const ListProducts = ({products}) => {

    return (
        <Columns>
        {
            products.map(({ imgUrl, description, name, size, _id, unitaryPrice }) => (
                <Columns.Column size={3} kye={_id}>
                    <Card>
                        <Card.Image size="16by9" src={imgUrl}/>
                        <Card.Content>
                            <Content>
                                <Heading>{name}</Heading>
                                <Heading subtitle>Price: {unitaryPrice}</Heading>
                                <Heading subtitle>Size: {size}</Heading>
                                <p>
                                    {description}
                                </p>
                            </Content>
                        </Card.Content>
                    </Card>

                </Columns.Column>
            ))
        }
        </Columns>
    )
}

export default ListProducts; 