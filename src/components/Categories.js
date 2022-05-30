import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

import { connect } from "react-redux";
import { selectCate, reset } from "../store/categories";

const Categories = (props) => {
    console.log('props-->', props);return (
        <section>
            <Breadcrumbs>
                {props.categories.map(item => {
                    return (
                        <Link color="inherit" onClick={() => props.selectCate(item.normalizedName)}>
                            {item.normalizedName}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        </section>
    );
};
const mapStateToProps = (state) => ({
    categories: state.ReduceCategory.categories,
});

const mapDispatchToProps = { selectCate, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);