import PropTypes from "prop-types";

const NAV_ELEMENTS = [
  { name: "Про нас", linkId: "#about" },
  { name: "Магазин", linkId: "#shop" },
  { name: "Контакти", linkId: "#contacts" },
  // { name: "Оптовим покупцям", linkId: "wholesale" },
];

const Menu = ({ section, styles }) => {
  return (
    <ul
      className={`flex ${
        section === "header" ? "items-center gap-x-3 lg:gap-x-11 h-20" : "flex-col gap-y-2"
      } ${styles}`}
    >
      {NAV_ELEMENTS.map((el) => (
        <li key={el.name}>
          <a href={el.linkId} className="cursor-pointer text-xl hover:text-txt-main-yellow focus:text-txt-main-yellow">
            {el.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  section: PropTypes.oneOf(["header", "footer"]),
  styles: PropTypes.string,
};

export default Menu;
