import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';

import { updateInStockHandler } from '../reducer/actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function addToCartHandler(productName) {
    let prodObj;

    state.prod.products.map((p) => (p.name == productName ? (prodObj = p) : false));
    let inStock = prodObj.inStock;

    if (!state.cart.cartProducts.includes(productName) && inStock > 0) {
      prodObj.inStock = prodObj.inStock - 1;
      dispatch(updateInStockHandler(prodObj, 'add'));

    }
  }
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media} image={props.product.img} title='Contemplative Reptile' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.product.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.product.description?.slice(0, 150)}
          </Typography>
          <Typography gutterBottom variant='h6' component='h6'>
            Price : {props.product.price} $
          </Typography>
          <Typography gutterBottom variant='h6' component='h6'>
            inStock : {props.product.inStock}
          </Typography>
        </CardContent>
      </CardActionArea>

        <Button onClick={() => addToCartHandler(props.product.name)} size='small' color='primary'>
          ADD To Cart
        </Button>

    </Card>
  );
}