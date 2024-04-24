import MenuItem from "./MenuItem";

const links = [
  { name: "Home", path: "/" },
  { name: "Categorias", path: "/categorias" },
  { name: "Carrinho", path: "/carrinho" },
  { name: "Novidades", path: "/novidades" },
  { name: "Promoções", path: "/promocoes" },
];

const Menu = () => {
  return (
    <ul className="navbar-nav me-auto">
      {links.map((link) => (
        <MenuItem key={link.path} link={link} />
      ))}
    </ul>
  );
};

export default Menu;
