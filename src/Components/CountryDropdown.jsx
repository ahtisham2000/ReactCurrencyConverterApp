const CountryDropdown = ({handleCountryChange, countryList}) => {
  return (
    <div className="From">
      <p>From</p>
      <div className="select-container">
        <select name="from" onChange={handleCountryChange}>
          {countryList()}
        </select>
      </div>
    </div>
  );
};

export default CountryDropdown;
