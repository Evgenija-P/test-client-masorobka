const roundNumbers = ({ activeBtn, setQtty }) => {
  const buttons = [1, 2, 5];
  const genStyles =
    "w-8 h-8 border border-bg-main rounded-full text-center py-1 cursor-pointer";
  const activeStyle = "bg-bg-red border-txt-main-red text-txt-main-white";

  return (
    <div className="flex gap-x-8 justify-center my-2">
      {buttons.map((el) => (
        <button
          type="button"
          key={el}
          className={`${el === activeBtn && activeStyle} ${genStyles}`}
          onClick={() => setQtty(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
export default roundNumbers;
