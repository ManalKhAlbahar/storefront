import React from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/material/styles";
import { connect } from "react-redux";
const useStyle = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const Products = (props) => {
  const classes = useStyle();
  return (
    <section>
      {props.products.map((product) => {
        if (props.activeCategory===product.category) {
          return (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.img}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                   
                  description: {product.description} Jd <br />
                    
                  </Typography>
                  <Typography>
                    Category: {product.category} <br />
                    Price: {product.price} Jd <br />
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        }
        
      })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.ReduceProducts.products,
  activeCategory: state.ReduceCategory.activeCategory
})

export default connect(mapStateToProps)(Products);