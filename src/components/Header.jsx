import logo from "../assets/logo.png";
import UseResponsive from "../hoooks/UseResponsiveHook";

export default function Header() {
  const responsive = UseResponsive();
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          alignItem: "center",
          width: responsive.isMobile ? "40%" : "65%",
          paddingLeft: "20px",
          gap: "40px",
        }}
      >
        <img src={logo} className="logo" />
        {!responsive.isMobile && (
          <div className="search-bar">
            <div className="input-container">
              <svg
                className="search-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Search Icon</title>
                <path
                  d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                  stroke="#717478"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 16L21 21"
                  stroke="#717478"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <input
                className="search-input"
                placeholder="Search for Products, Brand and More"
              />
            </div>
          </div>
        )}
      </div>
      <div
        style={{ width: "35%", paddingRight: "20px", boxSizing: "border-box" }}
      >
        <ul className="nav-list">
          <li className="nav-li login-btn">
            <a href="#">
              <img
                className="header-img"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              />
              {!responsive.isMobile && !responsive.isTablet && <p>Login</p>}
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" />
            </a>
          </li>
          <li className="nav-li">
            <a href="#">
              <img
                className="header-img"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              />
              {!responsive.isMobile && !responsive.isTablet && <p>Cart</p>}
            </a>
          </li>
          <li className="nav-li">
            <a>
              <img
                className="header-img"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              />
              {!responsive.isMobile && !responsive.isTablet && (
                <p>Become a seller</p>
              )}
            </a>
          </li>
          <li className="nav-li">
            <a>
              <img
                className="header-img"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
