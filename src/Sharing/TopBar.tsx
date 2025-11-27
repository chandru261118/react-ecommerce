import React, {  } from 'react';

const Header = () => {
  React.useEffect(() => {
  
  }, [])
  return (
  <React.Fragment>
   

     <header>
       
       <div className="header-area">
            <div className="main-header ">
               
               <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                           
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                                <div className="logo">
                                  <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                              
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>                                                
                                        <ul id="navigation">                                                                                                                                     
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="Catagori.html">Catagori</a></li>
                                            <li className="hot"><a href="#">Latest</a>
                                                <ul className="submenu">
                                                    <li><a href="product_list.html"> Product list</a></li>
                                                    <li><a href="single-product.html"> Product Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="cart.html">Card</a></li>
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="confirmation.html">Confirmation</a></li>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="checkout.html">Product Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> 
                            <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                    <li className="d-none d-xl-block">
                                        <div className="form-box f-right ">
                                            <input type="text" name="Search" placeholder="Search products"/>
                                            <div className="search-icon">
                                                <i className="fas fa-search special-tag"></i>
                                            </div>
                                        </div>
                                     </li>
                                    <li className=" d-none d-xl-block">
                                        <div className="favorit-items">
                                            <i className="far fa-heart"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="shopping-card">
                                            <a href="cart.html"><i className="fas fa-shopping-cart"></i></a>
                                        </div>
                                    </li>
                                   <li className="d-none d-lg-block"> <a href="#" className="btn header-btn">Sign in</a></li>
                                </ul>
                            </div>
                          
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
       </div>
      
    </header>


  </React.Fragment>
  );
};

export default Header;

