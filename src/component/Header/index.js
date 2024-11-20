import "./index.css";

const li = [
  { id: 1, name: "Home" },
  { id: 2, name: "Product" },
  { id: 3, name: "Resource" },
  { id: 4, name: "Pricing" },
];

const Header = () => (
  <div className="header-container">
    <div className="header-text-container">
      <img
        className="zysk-img"
        src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1731993953/zysk-removebg-preview_kk43gg.png"
        alt="logo"
      />

      <p className="header-title">Zysk</p>
      <ul className="ul">
        {li.map((each) => (
          <li className="header-para" key={each.id}>
            {each.name}
          </li>
        ))}
      </ul>
    </div>
    <img
      className="profile-img"
      src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1727758998/bDharma_puimjy.jpg"
      alt="logo"
    />
  </div>
);

export default Header;
