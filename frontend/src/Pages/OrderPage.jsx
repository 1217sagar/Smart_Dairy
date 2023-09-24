import {Link, useParams} from 'react-router-dom';
import {Row, Col, Button, ListGroup, Image, Form, Card} from 'react-bootstrap';
import Message from '../components/Message';
import { 
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery 
} from '../slices/ordersApiSlice';
import Loader from '../components/Loader';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';  
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const OrderPage = () => {
  const {id:orderId} = useParams();
  const {data: order, refetch, isLoading, error} = useGetOrderDetailsQuery(orderId);
  const [payOrder, {isLoading: loadingPay}] = usePayOrderMutation();
  const [{isPending}, paypalDispatch] = usePayPalScriptReducer();
  const {userInfo} = useSelector((state) => state.auth);
  const {data: paypal, isLoading: loadingPayPal, error: errorPayPal} = useGetPayPalClientIdQuery();

  useEffect(() => {
    if(!errorPayPal && !loadingPayPal && paypal.clientId){
      const loadPayPalScript = async() => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': paypal.clientId,
            currency: 'USD'
          }
        });
        paypalDispatch({type: 'setLoadingStatus', value: 'pending'});
      }
      if(order && !order.isPaid){
        if(!window.paypal){
          loadPayPalScript();
        }
      }
    }
  })

  return (
    isLoading ? <Loader /> : error ? <Message variant='danger' />
    : (
      <>
        <h1>Order {orderId}</h1>
        <Row>
          <Col md={8}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Name: </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong> {order.user.email}
                </p>
                <p>
                  <strong>Address: </strong> 
                  {order.shippingAddress.address}, {order.shippingAddress.city} {' '}
                  {order.shippingAddress.postalCode}, {' '}
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <Message variant='success'>
                    Delivered on {order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant='danger'>
                    Not Delivered
                  </Message>
                ) } 
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method: </strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant='success'>
                    Paid on {order.paidAt}
                  </Message>
                ) : (
                  <Message variant='danger'>
                    Not Paid
                  </Message>
                ) } 
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/products/${item.product}`}>
                          {item.name}
                        </Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} x ${item.price} = ${item.qty*item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items: </Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping: </Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax: </Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total: </Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/*Pay order placeholder */}
              {/*Mark as delivered placeholder */}
            </ListGroup>
          </Card>
          </Col>
        </Row>
      </>
    )
  )
}

export default OrderPage