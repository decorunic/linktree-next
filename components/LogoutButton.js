export default function LogoutButton({ logoutHandler }) {
  return (
    <button
      className=" text-base font-semibold mx-6 flex px-6 py-2 bg-transparent border-[1px] border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all ease-in duration-75 dark:border-light dark:hover:border-red-600 dark:text-light lg:mx-4"
      type="button"
      onClick={logoutHandler.bind(this)}
    >
      Logout
    </button>
  );
}