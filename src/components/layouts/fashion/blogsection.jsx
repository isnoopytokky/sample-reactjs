import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

class BlogSection extends Component {
    render (){
        var settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title1 section-t-space">
                                <h4>Recent Story</h4>
                                <h2 className="title-inner1">from the blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="blog p-t-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...settings} className="slide-3 no-arrow">
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1"/>
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/3.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1"/>
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/4.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1"/>
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BlogSection;