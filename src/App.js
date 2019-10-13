import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiStep from "react-multistep";

const womensPantSizes = [
  "00",
  "0",
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18"
];
const mensWaistSizes = [
  "24",
  "26",
  "28",
  "30",
  "32",
  "33",
  "34",
  "36",
  "38",
  "40",
  "42",
  "44",
  "46"
];
const mensInseamSizes = ["26", "28", "29", "30", "31", "32", "33", "34", "36"];

function App() {
  const [sex, setSex] = React.useState(undefined);

  const UserStep = () => {
    return (
      <>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name"></input>
      </>
    );
  };

  const SexStep = () => {
    return (
      <>
        <label htmlFor="sex">
          Which section do you typically buy pants from?
        </label>
        <select>
          <option
            name="sex"
            value="female"
            onClick={event => setSex(event.target.value)}
          >
            Women's
          </option>
          <option
            name="sex"
            value="male"
            onClick={event => setSex(event.target.value)}
          >
            Men's
          </option>
        </select>
      </>
    );
  };

  const TopsStep = () => {
    return (
      <>
        <label htmlFor="sizes">What's the size of your favorite shirt?</label>
        <select name="sizes">
          <option value="XXXS">XXXS</option>
          <option value="XXS">XXS</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
          <option value="XXXXL">XXXXL</option>
        </select>
        <label htmlFor="favStore">
          Where'd you buy your favorite shirt from?
        </label>
        <select name="favStore">
          <option value="H&M">H&M</option>
          <option value="Cotton On">Cotton On</option>
          <option value="Lululemon">Lululemon</option>
          <option value="Gucci">Gucci</option>
          <option value="ASOS">ASOS</option>
          <option value="Fashion Nova">Fashion Nova</option>
          <option value="F21">Forever 21</option>
          <option value="Balenciaga">Balenciaga</option>
          <option value="Dolls Kill">Dolls Kill</option>
          <option value="Fenty">Fenty</option>
          <option value="Ralph Lauren">Ralph Lauren</option>
          <option value="New York & Company">New York & Company</option>
        </select>
      </>
    );
  };

  const BottomsStep = () => {
    return (
      <>
        <label htmlFor="sizes">
          What's the size of your favorite pair of bottoms?
        </label>
        {sex === "female" ? (
          <select>
            {womensPantSizes.map(size => {
              return <option value={parseInt(size)}>{parseInt(size)}</option>;
            })}
          </select>
        ) : (
          <>
            <select>
              {mensWaistSizes.map(size => {
                return <option value={parseInt(size)}>{parseInt(size)}</option>;
              })}
            </select>
            <select>
              {mensInseamSizes.map(size => {
                return <option value={parseInt(size)}>{parseInt(size)}</option>;
              })}
            </select>
          </>
        )}
        <label htmlFor="favStore">
          Where'd you buy your favorite bottoms from?
        </label>
        <select name="favStore">
          <option value="H&M">H&M</option>
          <option value="Cotton On">Cotton On</option>
          <option value="Lululemon">Lululemon</option>
          <option value="Gucci">Gucci</option>
          <option value="ASOS">ASOS</option>
          <option value="Fashion Nova">Fashion Nova</option>
          <option value="F21">Forever 21</option>
          <option value="Balenciaga">Balenciaga</option>
          <option value="Dolls Kill">Dolls Kill</option>
          <option value="Fenty">Fenty</option>
          <option value="Ralph Lauren">Ralph Lauren</option>
          <option value="New York & Company">New York & Company</option>
        </select>
        <label htmlFor="type">What kind of bottoms are they?</label>
        <select name="type">
          <option value="Jeans">Jeans</option>
          <option value="Bootcut Jeans">Bootcut Jeans</option>
          <option value="Skinny Jeans">Skinny Jeans</option>
          <option value="High-Waisted Jeans">High-Waisted Jeans</option>
          <option value="Boyfriend Jeans">Boyfriend Jeans</option>
          <option value="Dress Pants">Dress Pants</option>
          <option value="Chinos">Chinos</option>
          <option value="Capris">Capris</option>
          <option value="Slacks">Slacks</option>
          <option value="Shorts">Shorts</option>
          <option value="Skirt">Skirt</option>
          <option value="Samba Pants">Samba Pants</option>
        </select>
      </>
    );
  };

  const CompletionStep = () => {
    return (
      <>
        <p>
          Thanks! You're now ready to always get the right size.
          <a href="feathr.co">Let's get shopping!</a>
        </p>
      </>
    );
  };

  const steps = [
    { name: "Name", component: <UserStep /> },
    { name: "Sexed Sizing", component: <SexStep /> },
    { name: "Tops Fitting", component: <TopsStep /> },
    { name: "Bottoms Fitting", component: <BottomsStep /> },
    { name: "Complete", component: <CompletionStep /> }
  ];
  return (
    <div>
      <MultiStep showNavigation={true} steps={steps} />
    </div>
  );
}

export default App;
