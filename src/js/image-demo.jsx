import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './../css/image-demo.scss';

export default class ImageDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCollection: [
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"

            ],
            dummySrc: "https://images.unsplash.com/photo-1546448396-6aef80193ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80"
        }
    }

    render() {
        return (
            <div className='image-lazy'>
                <Row>
                    {
                        this.state.imageCollection.map((image, index) => {
                            return (
                                <Col key={index} md={3}>
                                    <img data-value={image} src={this.state.dummySrc} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}