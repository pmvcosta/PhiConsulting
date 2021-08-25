import React, { Component } from "react";
import {
  Popup,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Segment,
  Select,
  TextArea,
  Transition,
  Grid,
  Modal,
  Icon,
  Image,
  Header,
} from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
//const { countryOptions } = require("./countryList");
const options = [
  { key: "m", text: "Within next 3 months", value: "3" },
  { key: "f", text: "3-6 months", value: "36" },
  { key: "o", text: "6+ months", value: "6" },
];

const countryOptions = [
  { text: "Afghanistan", key: "af", value: "af", flag: "af" },
  { text: "Aland Islands", key: "ax", value: "ax", flag: "ax" },
  { text: "Albania", key: "al", value: "al", flag: "al" },
  { text: "Algeria", key: "dz", value: "dz", flag: "dz" },
  { text: "American Samoa", key: "as", value: "as", flag: "as" },
  { text: "Andorra", key: "ad", value: "ad", flag: "ad" },
  { text: "Angola", key: "ao", value: "ao", flag: "ao" },
  { text: "Anguilla", key: "ai", value: "ai", flag: "ai" },
  { text: "Antigua", key: "ag", value: "ag", flag: "ag" },
  { text: "Argentina", key: "ar", value: "ar", flag: "ar" },
  { text: "Armenia", key: "am", value: "am", flag: "am" },
  { text: "Aruba", key: "aw", value: "aw", flag: "aw" },
  { text: "Australia", key: "au", value: "au", flag: "au" },
  { text: "Austria", key: "at", value: "at", flag: "at" },
  { text: "Azerbaijan", key: "az", value: "az", flag: "az" },
  { text: "Bahamas", key: "bs", value: "bs", flag: "bs" },
  { text: "Bahrain", key: "bh", value: "bh", flag: "bh" },
  { text: "Bangladesh", key: "bd", value: "bd", flag: "bd" },
  { text: "Barbados", key: "bb", value: "bb", flag: "bb" },
  { text: "Belarus", key: "by", value: "by", flag: "by" },
  { text: "Belgium", key: "be", value: "be", flag: "be" },
  { text: "Belize", key: "bz", value: "bz", flag: "bz" },
  { text: "Benin", key: "bj", value: "bj", flag: "bj" },
  { text: "Bermuda", key: "bm", value: "bm", flag: "bm" },
  { text: "Bhutan", key: "bt", value: "bt", flag: "bt" },
  { text: "Bolivia", key: "bo", value: "bo", flag: "bo" },
  { text: "Bosnia", key: "ba", value: "ba", flag: "ba" },
  { text: "Botswana", key: "bw", value: "bw", flag: "bw" },
  { text: "Bouvet Island", key: "bv", value: "bv", flag: "bv" },
  { text: "Brazil", key: "br", value: "br", flag: "br" },
  { text: "British Virgin Islands", key: "vg", value: "vg", flag: "vg" },
  { text: "Brunei", key: "bn", value: "bn", flag: "bn" },
  { text: "Bulgaria", key: "bg", value: "bg", flag: "bg" },
  { text: "Burkina Faso", key: "bf", value: "bf", flag: "bf" },
  { text: "Burma", key: "mm", value: "mm", flag: "mm" },
  { text: "Burundi", key: "bi", value: "bi", flag: "bi" },
  { text: "Caicos Islands", key: "tc", value: "tc", flag: "tc" },
  { text: "Cambodia", key: "kh", value: "kh", flag: "kh" },
  { text: "Cameroon", key: "cm", value: "cm", flag: "cm" },
  { text: "Canada", key: "ca", value: "ca", flag: "ca" },
  { text: "Cape Verde", key: "cv", value: "cv", flag: "cv" },
  { text: "Cayman Islands", key: "ky", value: "ky", flag: "ky" },
  { text: "Central African Republic", key: "cf", value: "cf", flag: "cf" },
  { text: "Chad", key: "td", value: "td", flag: "td" },
  { text: "Chile", key: "cl", value: "cl", flag: "cl" },
  { text: "China", key: "cn", value: "cn", flag: "cn" },
  { text: "Christmas Island", key: "cx", value: "cx", flag: "cx" },
  { text: "Cocos Islands", key: "cc", value: "cc", flag: "cc" },
  { text: "Colombia", key: "co", value: "co", flag: "co" },
  { text: "Comoros", key: "km", value: "km", flag: "km" },
  { text: "Congo", key: "cd", value: "cd", flag: "cd" },
  { text: "Congo Brazzaville", key: "cg", value: "cg", flag: "cg" },
  { text: "Cook Islands", key: "ck", value: "ck", flag: "ck" },
  { text: "Costa Rica", key: "cr", value: "cr", flag: "cr" },
  { text: "Cote Divoire", key: "ci", value: "ci", flag: "ci" },
  { text: "Croatia", key: "hr", value: "hr", flag: "hr" },
  { text: "Cuba", key: "cu", value: "cu", flag: "cu" },
  { text: "Cyprus", key: "cy", value: "cy", flag: "cy" },
  { text: "Czech Republic", key: "cz", value: "cz", flag: "cz" },
  { text: "Denmark", key: "dk", value: "dk", flag: "dk" },
  { text: "Djibouti", key: "dj", value: "dj", flag: "dj" },
  { text: "Dominica", key: "dm", value: "dm", flag: "dm" },
  { text: "Dominican Republic", key: "do", value: "do", flag: "do" },
  { text: "Ecuador", key: "ec", value: "ec", flag: "ec" },
  { text: "Egypt", key: "eg", value: "eg", flag: "eg" },
  { text: "El Salvador", key: "sv", value: "sv", flag: "sv" },
  { text: "England", countryCode: "gb eng" },
  { text: "Equatorial Guinea", key: "gq", value: "gq", flag: "gq" },
  { text: "Eritrea", key: "er", value: "er", flag: "er" },
  { text: "Estonia", key: "ee", value: "ee", flag: "ee" },
  { text: "Ethiopia", key: "et", value: "et", flag: "et" },
  { text: "Europeanunion", key: "eu", value: "eu", flag: "eu" },
  { text: "Falkland Islands", key: "fk", value: "fk", flag: "fk" },
  { text: "Faroe Islands", key: "fo", value: "fo", flag: "fo" },
  { text: "Fiji", key: "fj", value: "fj", flag: "fj" },
  { text: "Finland", key: "fi", value: "fi", flag: "fi" },
  { text: "France", key: "fr", value: "fr", flag: "fr" },
  { text: "French Guiana", key: "gf", value: "gf", flag: "gf" },
  { text: "French Polynesia", key: "pf", value: "pf", flag: "pf" },
  { text: "French Territories", key: "tf", value: "tf", flag: "tf" },
  { text: "Gabon", key: "ga", value: "ga", flag: "ga" },
  { text: "Gambia", key: "gm", value: "gm", flag: "gm" },
  { text: "Georgia", key: "ge", value: "ge", flag: "ge" },
  { text: "Germany", key: "de", value: "de", flag: "de" },
  { text: "Ghana", key: "gh", value: "gh", flag: "gh" },
  { text: "Gibraltar", key: "gi", value: "gi", flag: "gi" },
  { text: "Greece", key: "gr", value: "gr", flag: "gr" },
  { text: "Greenland", key: "gl", value: "gl", flag: "gl" },
  { text: "Grenada", key: "gd", value: "gd", flag: "gd" },
  { text: "Guadeloupe", key: "gp", value: "gp", flag: "gp" },
  { text: "Guam", key: "gu", value: "gu", flag: "gu" },
  { text: "Guatemala", key: "gt", value: "gt", flag: "gt" },
  { text: "Guinea", key: "gn", value: "gn", flag: "gn" },
  { text: "Guinea-Bissau", key: "gw", value: "gw", flag: "gw" },
  { text: "Guyana", key: "gy", value: "gy", flag: "gy" },
  { text: "Haiti", key: "ht", value: "ht", flag: "ht" },
  { text: "Heard Island", key: "hm", value: "hm", flag: "hm" },
  { text: "Honduras", key: "hn", value: "hn", flag: "hn" },
  { text: "Hong Kong", key: "hk", value: "hk", flag: "hk" },
  { text: "Hungary", key: "hu", value: "hu", flag: "hu" },
  { text: "Iceland", key: "is", value: "is", flag: "is" },
  { text: "India", key: "in", value: "in", flag: "in" },
  { text: "Indian Ocean Territory", key: "io", value: "io", flag: "io" },
  { text: "Indonesia", key: "id", value: "id", flag: "id" },
  { text: "Iran", key: "ir", value: "ir", flag: "ir" },
  { text: "Iraq", key: "iq", value: "iq", flag: "iq" },
  { text: "Ireland", key: "ie", value: "ie", flag: "ie" },
  { text: "Israel", key: "il", value: "il", flag: "il" },
  { text: "Italy", key: "it", value: "it", flag: "it" },
  { text: "Jamaica", key: "jm", value: "jm", flag: "jm" },
  { text: "Jan Mayen", key: "sj", value: "sj", flag: "sj" },
  { text: "Japan", key: "jp", value: "jp", flag: "jp" },
  { text: "Jordan", key: "jo", value: "jo", flag: "jo" },
  { text: "Kazakhstan", key: "kz", value: "kz", flag: "kz" },
  { text: "Kenya", key: "ke", value: "ke", flag: "ke" },
  { text: "Kiribati", key: "ki", value: "ki", flag: "ki" },
  { text: "Kuwait", key: "kw", value: "kw", flag: "kw" },
  { text: "Kyrgyzstan", key: "kg", value: "kg", flag: "kg" },
  { text: "Laos", key: "la", value: "la", flag: "la" },
  { text: "Latvia", key: "lv", value: "lv", flag: "lv" },
  { text: "Lebanon", key: "lb", value: "lb", flag: "lb" },
  { text: "Lesotho", key: "ls", value: "ls", flag: "ls" },
  { text: "Liberia", key: "lr", value: "lr", flag: "lr" },
  { text: "Libya", key: "ly", value: "ly", flag: "ly" },
  { text: "Liechtenstein", key: "li", value: "li", flag: "li" },
  { text: "Lithuania", key: "lt", value: "lt", flag: "lt" },
  { text: "Luxembourg", key: "lu", value: "lu", flag: "lu" },
  { text: "Macau", key: "mo", value: "mo", flag: "mo" },
  { text: "Macedonia", key: "mk", value: "mk", flag: "mk" },
  { text: "Madagascar", key: "mg", value: "mg", flag: "mg" },
  { text: "Malawi", key: "mw", value: "mw", flag: "mw" },
  { text: "Malaysia", key: "my", value: "my", flag: "my" },
  { text: "Maldives", key: "mv", value: "mv", flag: "mv" },
  { text: "Mali", key: "ml", value: "ml", flag: "ml" },
  { text: "Malta", key: "mt", value: "mt", flag: "mt" },
  { text: "Marshall Islands", key: "mh", value: "mh", flag: "mh" },
  { text: "Martinique", key: "mq", value: "mq", flag: "mq" },
  { text: "Mauritania", key: "mr", value: "mr", flag: "mr" },
  { text: "Mauritius", key: "mu", value: "mu", flag: "mu" },
  { text: "Mayotte", key: "yt", value: "yt", flag: "yt" },
  { text: "Mexico", key: "mx", value: "mx", flag: "mx" },
  { text: "Micronesia", key: "fm", value: "fm", flag: "fm" },
  { text: "Moldova", key: "md", value: "md", flag: "md" },
  { text: "Monaco", key: "mc", value: "mc", flag: "mc" },
  { text: "Mongolia", key: "mn", value: "mn", flag: "mn" },
  { text: "Montenegro", key: "me", value: "me", flag: "me" },
  { text: "Montserrat", key: "ms", value: "ms", flag: "ms" },
  { text: "Morocco", key: "ma", value: "ma", flag: "ma" },
  { text: "Mozambique", key: "mz", value: "mz", flag: "mz" },
  { text: "Namibia", key: "na", value: "na", flag: "na" },
  { text: "Nauru", key: "nr", value: "nr", flag: "nr" },
  { text: "Nepal", key: "np", value: "np", flag: "np" },
  { text: "Netherlands", key: "nl", value: "nl", flag: "nl" },
  { text: "Netherlandsantilles", key: "an", value: "an", flag: "an" },
  { text: "New Caledonia", key: "nc", value: "nc", flag: "nc" },
  { text: "New Guinea", key: "pg", value: "pg", flag: "pg" },
  { text: "New Zealand", key: "nz", value: "nz", flag: "nz" },
  { text: "Nicaragua", key: "ni", value: "ni", flag: "ni" },
  { text: "Niger", key: "ne", value: "ne", flag: "ne" },
  { text: "Nigeria", key: "ng", value: "ng", flag: "ng" },
  { text: "Niue", key: "nu", value: "nu", flag: "nu" },
  { text: "Norfolk Island", key: "nf", value: "nf", flag: "nf" },
  { text: "North Korea", key: "kp", value: "kp", flag: "kp" },
  { text: "Northern Mariana Islands", key: "mp", value: "mp", flag: "mp" },
  { text: "Norway", key: "no", value: "no", flag: "no" },
  { text: "Oman", key: "om", value: "om", flag: "om" },
  { text: "Pakistan", key: "pk", value: "pk", flag: "pk" },
  { text: "Palau", key: "pw", value: "pw", flag: "pw" },
  { text: "Palestine", key: "ps", value: "ps", flag: "ps" },
  { text: "Panama", key: "pa", value: "pa", flag: "pa" },
  { text: "Paraguay", key: "py", value: "py", flag: "py" },
  { text: "Peru", key: "pe", value: "pe", flag: "pe" },
  { text: "Philippines", key: "ph", value: "ph", flag: "ph" },
  { text: "Pitcairn Islands", key: "pn", value: "pn", flag: "pn" },
  { text: "Poland", key: "pl", value: "pl", flag: "pl" },
  { text: "Portugal", key: "pt", value: "pt", flag: "pt" },
  { text: "Puerto Rico", key: "pr", value: "pr", flag: "pr" },
  { text: "Qatar", key: "qa", value: "qa", flag: "qa" },
  { text: "Reunion", key: "re", value: "re", flag: "re" },
  { text: "Romania", key: "ro", value: "ro", flag: "ro" },
  { text: "Russia", key: "ru", value: "ru", flag: "ru" },
  { text: "Rwanda", key: "rw", value: "rw", flag: "rw" },
  { text: "Saint Helena", key: "sh", value: "sh", flag: "sh" },
  { text: "Saint Kitts and Nevis", key: "kn", value: "kn", flag: "kn" },
  { text: "Saint Lucia", key: "lc", value: "lc", flag: "lc" },
  { text: "Saint Pierre", key: "pm", value: "pm", flag: "pm" },
  { text: "Saint Vincent", key: "vc", value: "vc", flag: "vc" },
  { text: "Samoa", key: "ws", value: "ws", flag: "ws" },
  { text: "San Marino", key: "sm", value: "sm", flag: "sm" },
  { text: "Sandwich Islands", key: "gs", value: "gs", flag: "gs" },
  { text: "Sao Tome", key: "st", value: "st", flag: "st" },
  { text: "Saudi Arabia", key: "sa", value: "sa", flag: "sa" },
  { text: "Scotland", countryCode: "gb sct" },
  { text: "Senegal", key: "sn", value: "sn", flag: "sn" },
  { text: "Serbia", key: "cs", value: "cs", flag: "cs" },
  { text: "Serbia", key: "rs", value: "rs", flag: "rs" },
  { text: "Seychelles", key: "sc", value: "sc", flag: "sc" },
  { text: "Sierra Leone", key: "sl", value: "sl", flag: "sl" },
  { text: "Singapore", key: "sg", value: "sg", flag: "sg" },
  { text: "Slovakia", key: "sk", value: "sk", flag: "sk" },
  { text: "Slovenia", key: "si", value: "si", flag: "si" },
  { text: "Solomon Islands", key: "sb", value: "sb", flag: "sb" },
  { text: "Somalia", key: "so", value: "so", flag: "so" },
  { text: "South Africa", key: "za", value: "za", flag: "za" },
  { text: "South Korea", key: "kr", value: "kr", flag: "kr" },
  { text: "Spain", key: "es", value: "es", flag: "es" },
  { text: "Sri Lanka", key: "lk", value: "lk", flag: "lk" },
  { text: "Sudan", key: "sd", value: "sd", flag: "sd" },
  { text: "Suriname", key: "sr", value: "sr", flag: "sr" },
  { text: "Swaziland", key: "sz", value: "sz", flag: "sz" },
  { text: "Sweden", key: "se", value: "se", flag: "se" },
  { text: "Switzerland", key: "ch", value: "ch", flag: "ch" },
  { text: "Syria", key: "sy", value: "sy", flag: "sy" },
  { text: "Taiwan", key: "tw", value: "tw", flag: "tw" },
  { text: "Tajikistan", key: "tj", value: "tj", flag: "tj" },
  { text: "Tanzania", key: "tz", value: "tz", flag: "tz" },
  { text: "Thailand", key: "th", value: "th", flag: "th" },
  { text: "Timorleste", key: "tl", value: "tl", flag: "tl" },
  { text: "Togo", key: "tg", value: "tg", flag: "tg" },
  { text: "Tokelau", key: "tk", value: "tk", flag: "tk" },
  { text: "Tonga", key: "to", value: "to", flag: "to" },
  { text: "Trinidad", key: "tt", value: "tt", flag: "tt" },
  { text: "Tunisia", key: "tn", value: "tn", flag: "tn" },
  { text: "Turkey", key: "tr", value: "tr", flag: "tr" },
  { text: "Turkmenistan", key: "tm", value: "tm", flag: "tm" },
  { text: "Tuvalu", key: "tv", value: "tv", flag: "tv" },
  { text: "U.A.E.", key: "ae", value: "ae", flag: "ae" },
  { text: "Uganda", key: "ug", value: "ug", flag: "ug" },
  { text: "Ukraine", key: "ua", value: "ua", flag: "ua" },
  { text: "United Kingdom", key: "gb", value: "gb", flag: "gb" },
  { text: "United States", key: "us", value: "us", flag: "us" },
  { text: "Uruguay", key: "uy", value: "uy", flag: "uy" },
  { text: "US Minor Islands", key: "um", value: "um", flag: "um" },
  { text: "US Virgin Islands", key: "vi", value: "vi", flag: "vi" },
  { text: "Uzbekistan", key: "uz", value: "uz", flag: "uz" },
  { text: "Vanuatu", key: "vu", value: "vu", flag: "vu" },
  { text: "Vatican City", key: "va", value: "va", flag: "va" },
  { text: "Venezuela", key: "ve", value: "ve", flag: "ve" },
  { text: "Vietnam", key: "vn", value: "vn", flag: "vn" },
  { text: "Wales", countryCode: "gb wls" },
  { text: "Wallis and Futuna", key: "wf", value: "wf", flag: "wf" },
  { text: "Western Sahara", key: "eh", value: "eh", flag: "eh" },
  { text: "Yemen", key: "ye", value: "ye", flag: "ye" },
  { text: "Zambia", key: "zm", value: "zm", flag: "zm" },
  { text: "Zimbabwe", key: "zw", value: "zw", flag: "zw" },
];

class FormExampleFieldControl extends Component {
  state = {
    open: false,
    busName: "",
    country: "",
    website: "",
    email: "",
    value: "",
    budget: "",
    fundDate: "",
    funding: "",
  };
  handleNumberChange = (e, { name, value }) =>
    this.setState({ [name]: value.replace(/\D/, "") });
  handleTextChange = (e, { name, value }) => this.setState({ [name]: value });
  handleChange = (e, { value }) => this.setState({ value });
  showModal = () => {
    const {
      busName,
      country,
      website,
      email,
      value,
      budget,
      fundDate,
      funding,
    } = this.state;
    this.setState({ open: true });
  };

  hideModal = () => this.setState({ open: false });

  renderPlatform(value) {
    if (value == "1" || value == "3") {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./PPL.png" wrapped />

          <p style={{ width: "50%" }}>
            <br />
            PPL is the reference crowdfunding platform in Portugal, launched in
            2011. It specializes in rewards-based crowdfunding and donation
            campaigns.
          </p>
        </div>
      );
    } else if (value == "2" || value == "5") {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./logoSeedrs.png" wrapped />

          <p style={{ width: "50%" }}>
            <br />
            Seedrs is a well-established crowdfunding platform launched in 2012.
            The platform allows new businesses to raise capital by promoting to
            the crowd who buy the company’s shares.
          </p>
        </div>
      );
    } else if (value == "4") {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./crowdcube.png" wrapped />

          <p style={{ width: "50%" }}>
            <br />
            Crowdcube is an equity and debt crowdfunding platform for
            entrepreneurs of start-ups and growing businesses, started i 2011.
            Crowdcube enables individuals to invest or loan in small companies
            in return for equity or an annual return.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <Header
            as="h3"
            style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
            textAlign="left"
          >
            Reccomended Platform:
          </Header>
          <br />
          <Image size="medium" src="./logoSeedrs.png" wrapped />
          <br />
          <p style={{ width: "50%" }}>
            Seedrs is a well-established crowdfunding platform launched in 2012.
            The platform allows new businesses to raise capital by promoting to
            the crowd who buy the company’s shares.
          </p>
        </div>
      );
    }
  }

  render() {
    const { value, open } = this.state;
    const {
      busName,
      country,
      website,
      email,
      budget,
      fundDate,
      funding,
    } = this.state;
    return (
      <Layout>
        <Segment
          fluid
          style={{ padding: "8em 2em" }}
          vertical
          style={{
            border: "0px",
            outline: "0px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <br />
                <Transition
                  animation="scale"
                  transitionOnMount={true}
                  duration={500}
                >
                  <Header
                    as="h3"
                    style={{ fontSize: "3em", color: "rgba(212, 32, 32, 0.9)" }}
                    textAlign="center"
                  >
                    Tell Us About Your Business!
                  </Header>
                </Transition>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid fluid container verticalAlign="middle" columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Form size={"large"} onSubmit={this.showModal}>
                  <Form.Field
                    required
                    control={Input}
                    name="busName"
                    value={busName}
                    onChange={this.handleTextChange}
                    label="What's the name of your business?"
                    placeholder="Business Name"
                  />
                  <br />

                  <Form.Group>
                    <Form.Field
                      required
                      control={Select}
                      name="country"
                      value={country}
                      onChange={this.handleTextChange}
                      label="What country is your business registered in?"
                      options={countryOptions}
                      search
                      placeholder="Country"
                    />
                    <br />
                  </Form.Group>
                  <br />
                  <Form.Field
                    control={Input}
                    name="website"
                    value={website}
                    onChange={this.handleTextChange}
                    label="Enter the business website"
                    placeholder="Business Website"
                  />
                  <br />
                  <Form.Field required>
                    <label>
                      <b>Your business email</b>
                    </label>
                    <Input
                      className="form-control mb-4 p-4"
                      required
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleTextChange}
                    />
                  </Form.Field>

                  <Form.Field required>
                    <label required>
                      <b>Prefered Crowdfunding Method:</b>
                    </label>
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Rewards-Based"
                          value="1"
                          checked={value === "1"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Donors earn rewards based on the amount donated. Common rewards include handmade items, prizes donated by partner companies, or free products or services offered by the fundraiser organizer."
                      position="top left"
                    />
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Equity-Based"
                          value="2"
                          checked={value === "2"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Donors receive a percentage ownership in the company.  Requires larger fundraising minimums, typically into the thousands of dollars."
                      position="top left"
                    />
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Donations"
                          value="3"
                          checked={value === "3"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Asking for a small donation from a large number of people to raise money for personal needs as well as community-based projects."
                      position="top left"
                    />
                    <Popup
                      trigger={
                        <Form.Field
                          control={Radio}
                          label="Debt"
                          value="4"
                          checked={value === "4"}
                          onChange={this.handleChange}
                        />
                      }
                      content="Collect donations with the promise to pay them back until a set date. Typically used by businesses that prefer to pay back the funds rather than give out equity. "
                      position="top left"
                    />
                    <Form.Field
                      control={Radio}
                      label="No Preference"
                      value="5"
                      checked={value === "5"}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <br />
                  <Form.Field
                    required
                    control={Input}
                    name="budget"
                    type="text"
                    pattern="[0-9]*"
                    value={budget}
                    onChange={this.handleNumberChange}
                    label="What is your estimated buget(€)?"
                    placeholder="e.g.: 5000"
                  />
                  <br />
                  <Form.Field
                    required
                    control={Input}
                    name="funding"
                    type="text"
                    pattern="[0-9]*"
                    value={funding}
                    onChange={this.handleNumberChange}
                    label="What is your funding goal(€)?"
                    placeholder="e.g.: 5000"
                  />
                  <br />
                  <Form.Group>
                    <Form.Field
                      required
                      control={Select}
                      label="When are you looking to receive the funds?"
                      name="fundDate"
                      value={fundDate}
                      onChange={this.handleTextChange}
                      options={options}
                      placeholder="Please Select One"
                    />
                    <br />
                  </Form.Group>

                  <Form.Field>
                    <Button type="submit" primary>
                      {" "}
                      Submit <Icon name="chevron right" />{" "}
                    </Button>
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Transition
                  animation="scale"
                  transitionOnMount={true}
                  duration={500}
                >
                  <Image bordered rounded size="big" src="/indexPic.jpg" />
                </Transition>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Transition visible={open} animation="scale" duration={500}>
          <Modal open={open} onClose={this.hideModal} onOpen={this.showModal}>
            <Modal.Header
              style={{
                fontSize: "2em",
                color: "rgba(255, 255, 255, 1.0)",
                backgroundColor: "rgba(212, 32, 32, 1.0)",
              }}
            >
              Project Campaign Kit
            </Modal.Header>
            <Modal.Content image scrolling>
              <Modal.Description>
                {this.renderPlatform(this.state.value)}

                <Header
                  as="h3"
                  style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
                  textAlign="left"
                >
                  Reccomended Services and Estimated Costs
                </Header>

                <Grid divided="vertically" style={{ width: "100" }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <b>
                        <Header
                          as="h3"
                          style={{
                            fontSize: "1.5em",
                            color: "rgba(212, 32, 32, 0.9)",
                          }}
                          textAlign="left"
                        >
                          <Icon name="checkmark box" />
                          <Header.Content>Service</Header.Content>
                        </Header>
                      </b>
                    </Grid.Column>
                    <Grid.Column>
                      <b>
                        <Header
                          as="h3"
                          style={{
                            fontSize: "1.5em",
                            color: "rgba(212, 32, 32, 0.9)",
                          }}
                          textAlign="left"
                        >
                          <Icon name="eur" />
                          <Header.Content>Cost(€)</Header.Content>
                        </Header>
                      </b>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={2}>
                    <Grid.Column>
                      Visual Media Creation (Videos & Promotional Imagery)
                    </Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.25)}</Grid.Column>
                  </Grid.Row>
                </Grid>

                <Grid style={{ width: "100" }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>Business Valuation</Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.1)}</Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={2}>
                    <Grid.Column>Social Media Marketing </Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.3)}</Grid.Column>
                  </Grid.Row>
                </Grid>

                <Grid style={{ width: "100" }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>Community Building</Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.2)}</Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={2}>
                    <Grid.Column>Website/Landing Page Creation </Grid.Column>
                    <Grid.Column>{Math.round(budget * 0.1)}</Grid.Column>
                  </Grid.Row>
                </Grid>
                <br />
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                href="/subscribe"
                primary
                style={{
                  backgroundColor: "rgba(212, 32, 32, 1.0)",
                }}
              >
                I'd Like to Know More! <Icon name="chevron right" />
              </Button>
              <Button
                onClick={this.hideModal}
                primary
                style={{
                  backgroundColor: "rgba(212, 32, 32, 1.0)",
                }}
              >
                Proceed <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
        </Transition>
        <br />
      </Layout>
    );
  }
}

export default FormExampleFieldControl;
