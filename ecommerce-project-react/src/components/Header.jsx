import './Header.css';

export function Header(){
    return(
          <div class="header">
      <div class="left-section">
        <a href="index.html" class="header-link">
          <img class="logo"
            src="images/logo-white.png" />
          <img class="mobile-logo"
            src="images/mobile-logo-white.png" />
        </a>
      </div>

      <div class="middle-section">
        <input class="search-bar" type="text" placeholder="Search" />

        <button class="search-button">
          <img class="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div class="right-section">
        <a class="orders-link header-link" href="orders.html">

          <span class="orders-text">Orders</span>
        </a>

        <a class="cart-link header-link" href="checkout.html">
          <img class="cart-icon" src="images/icons/cart-icon.png" />
          <div class="cart-quantity">3</div>
          <div class="cart-text">Cart</div>
        </a>
      </div>
    </div>
    );
}