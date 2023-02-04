function navbar(){
    return` <nav>
    <div id="navbar">
        <div>
            <div id="logo"><img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt="">
                <a href="">Explore <span>Plus <img
                            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                            alt=""></span></a>
            </div>
        </div>
        <div>
            <div id="f-search">
                <input type="search" placeholder="Search for a product or a Brand..." id="">
                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="">
            </div>
        </div>
        <div><input type="text" id="navlogin" placeholder="Login"></div>
        <div id="seller"><a href="">Become a Seller</a></div>
        <div id="dropdown">
            <a href="" class="navmore">More</a><i class='bx bx-caret-down'></i>
            <!-- <div id="dropdown-menu">
                <a href=""> Notification Prefences</a>
                <a href="">24x7 Customer Care</a>
                <a href="">Advertise</a>
                <a href="">Download App</a>
            </div> -->
        </div>
        <div class="navcart">
            <i class='bx bxs-cart' id="cartbx"></i><a href="">Cart</a>
        </div>
    </div>
</nav>`
}
export {navbar};

