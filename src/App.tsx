import arrowIcon from "./assets/arrow-icon.svg";

const App = () => {
  return (
    <div className="bg-amber-100">
      <form>
        <label htmlFor="day">day</label>
        <input type="text" id="day" />
        <label htmlFor="month">month</label>
        <input type="text" id="month" />
        <label htmlFor="year">year</label>
        <input type="text" id="year" />
        <button>
          <img src={arrowIcon} />
        </button>
      </form>
      <div>
        <p>years</p>
        <p>monts</p>
        <p>days</p>
      </div>
    </div>
  );
};

export default App;
