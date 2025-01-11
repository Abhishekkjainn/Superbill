export default function Page1() {
  return (
    <div className="page1">
      <div className="page1tag"></div>
      <div className="headingpage1">
        Simplify Your <span className="blue"> Billing,</span> <br />
        Optimize Your Inventory.
      </div>
      <div className="descpage1">
        Designed for modern businesses, we simplify your billing and inventory
        processes for better productivity and smarter decisions.
      </div>
      <div className="page1buttons">
        <div className="primarybutton">
          <div className="buttontag">Register As Vendor</div>
          <img
            src="/arrow-white.png"
            alt="Arrow"
            className="primaryarrowicon"
          />
        </div>
        <div className="secondarybutton">Check Your Bills</div>
      </div>
    </div>
  );
}
