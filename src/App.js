import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiStep from "react-multistep";
import Select from "react-select";

const womensPantSizes = [
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

const stores = [
  { value: "ASOS", label: "ASOS" },
  { value: "Cotton On", label: "Cotton On" },
  { value: "Lululemon", label: "Lululemon" },
  { value: "Gucci", label: "Gucci" },
  { value: "Nasty Gal", label: "Nasty Gal" },
  { value: "Everlane", label: "Everlane" },
  { value: "EXPRESS", label: "EXPRESS" },
  { value: "ModCloth", label: "ModCloth" },
  { value: "Dolls Kill", label: "Dolls Kill" },
  { value: "Forever 21", label: "Forever 21" },
  { value: "PacSun", label: "PacSun" },
  { value: "Zappos", label: "Zappos" },
  { value: "Lou and Grey", label: "Lou and Grey" },
  { value: "Urban Outfitters", label: "Urban Outfitters" },
  { value: "Francesca's", label: "Francesca's" },
  { value: "Nordstrom", label: "Nordstrom" },
  { value: "Planet Blue", label: "Planet Blue" },
  { value: "Old Navy", label: "Old Navy" },
  { value: "Fashion Nova", label: "Fashion Nova" },
  { value: "Target", label: "Target" },
  { value: "Free People", label: "Free People" },
  { value: "Madewell", label: "Madewell" },
  { value: "Macy's", label: "Macy's" },
  { value: "American Eagle", label: "American Eagle" },
  { value: "Gap", label: "Gap" },
  { value: "Bloomingdale's", label: "Bloomingdale's" },
  { value: "Anthropologie", label: "Anthropologie" },
  { value: "TJ Maxx", label: "TJ Maxx" },
  { value: "Neiman Marcus", label: "Neiman Marcus" },
  { value: "Shopbop", label: "Shopbop" },
  { value: "Fenty", label: "Fenty" },
  { value: "New York & Company", label: "New York & Company" },
  { value: "Bandier", label: "Bandier" },
  { value: "Evolve", label: "Evolve" },
  { value: "Beloforte", label: "Beloforte" }
];

function App() {
  const [lastStep, setLastStep] = React.useState(false);
  const [navigationState, setNavigation] = React.useState(true);

  const UserStep = () => {
    return (
      <>
        <div>
          <p>Welcome to UniFit</p>
        </div>
        <div>
          <label htmlFor="name" id="nameLabel">
            Name:
          </label>
          <input type="text" name="name" id="name" autoFocus></input>
        </div>
      </>
    );
  };

  const SexStep = () => {
    return (
      <>
        <p>Which section do you typically buy pants from?</p>
        <select id="sex">
          <option value="female">Women's</option>
          <option value="male">Men's</option>
        </select>
      </>
    );
  };

  const TopsStep = () => {
    return (
      <>
        <div>
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
        </div>
        <div>
          <label htmlFor="favStore">
            Where'd you buy your favorite shirt from?
          </label>
          <Select options={stores} />
        </div>
      </>
    );
  };

  const BottomsStep = () => {
    return (
      <>
        <div>
          <label htmlFor="sizes">
            What's the size of your favorite pair of bottoms?
          </label>

          {
            <select>
              {womensPantSizes.map(size => {
                return <option value={size}>{parseInt(size)}</option>;
              })}
            </select>
          }
        </div>
        <div>
          <label htmlFor="favStore">
            Where'd you buy your favorite bottoms from?
          </label>
          <Select options={stores} />
        </div>
        <div>
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
        </div>
      </>
    );
  };

  const CompletionStep = () => {
    return (
      <>
        <p>
          Thanks! You're now ready to always get the right size.
        </p>
      </>
    );
  };

  const HMStep = () => {
    setLastStep(true);
    setNavigation(false);
    return (
      <figure>
        <img
          src="https://live.staticflickr.com/65535/48890555803_cd16054dd1_k.jpg"
          alt="logo"
          width="256"
          height="256"
        />
        <figcaption className="hmcaption">Recommended Size:<br/><strong>Medium</strong></figcaption>
      </figure>
    );
  };

  const steps = [
    { name: "Name", component: <UserStep /> },
    { name: "Sexed Sizing", component: <SexStep /> },
    { name: "Tops Fitting", component: <TopsStep /> },
    { name: "Bottoms Fitting", component: <BottomsStep /> },
    { name: "Complete", component: <CompletionStep /> },
    { name: "H&M", component: <HMStep /> }
  ];
  return (
    <div className={!lastStep ? "app" : "website"}>
      {!lastStep && (
        <img
          src="https://lh3.googleusercontent.com/OIaR2B4Y0JufzrcKq-6sXmXNfYkMyLHr3Dh4dRGfSWInBT3OEnh_ijqR7R8Pch5P9k6YGXY_ggT6nldaQLzyb0IXqGzT77lIooZiTtJ7vesygiMh1LkvA-l3f3IuNIMBF-fX7Z_2sBOYrpbwFIvO0s_tsftKQxj1bPT1QobVtbfe1P-YBIZfHB3q5lVfNeHhv_s4a77VJFZnDuBNG85amj14iZw2ueaHZndyGFCTfSeCvAeAxwcHG_iQOAZxbsRG4Hv7BybK8BXA1KzkTu7MzD-N8ScIYE71fuNt_qayZ5BfN5dHrl5AH4b1MLsDHAl_U0Rw9gFj1VEO_7otT7WOg8gGvx4qLMfnb69KEjPbhVgEhX5aOG5eIIX0e57DqIyeYuQO1eiacGseMUNYxWOtzPHM2CD_E0aSRNStbKZ2cMten0X4quy4cZmraLNR3rbNdVePQOuk7j6ClcGidSLtefquNZSFvA2Abl9aucPFxfcIddkih4jz9juEbY9oV_Z4_5U9PjlF8VPpxUvIh2HOF_3tQrWKf6gJH7dBuzf3qHImeetFqOdZLSCl-rapN1E5N7m8ExbSh4U4AMgzxrZrsXOIp7nrJrvwW5JKGjvGsyJ-L0MXqdZORrzHJ7zOmYkN9lUEEJpumQwsx-w4_Co-lTk2h2TAhQOIudAi2t0x0KIp0BtpZ474VuzIwKMNGoOH1puQ-k2UwLMQ_spmD5_51oklBnwuiXHf8tn3mpRP=s1532-no"
          width="256"
          height="256"
          alt="Untitled_Artwork 2"
        />
      )}
      <MultiStep showNavigation={navigationState} steps={steps} />
    </div>
  );
}

export default App;
