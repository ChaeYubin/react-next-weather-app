interface INavbarProps {
  children: JSX.Element[] | JSX.Element;
}

export const Navbar = ({ children }: INavbarProps) => {
  return (
    <nav className="grid item-center navbar">
      <ul className="flex self-center w-full gap-3 navbar__links align-center">
        {children}
      </ul>
    </nav>
  );
};
