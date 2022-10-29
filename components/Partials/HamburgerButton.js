export default function HamburgerButton({ isActiveHamburger, onClickHamburger }) {
  return (
    <button
      id="hamburger"
      className={`block absolute right-4${isActiveHamburger ? ' hamburger-active' : ''
      } lg:hidden`}
      type="button"
      onClick={() => onClickHamburger()}
    >
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left" />
      <span className="hamburger-line transition duration-300 ease-in-out" />
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left" />
    </button>
  );
}
