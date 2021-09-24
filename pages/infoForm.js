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
  Accordion,
  Grid,
  Modal,
  Message,
  Icon,
  Image,
  Header,
} from "semantic-ui-react";
import { Link } from "../routes";
import BasicDetails from "./getStarted/basicDetails";
import Debt from "./getStarted/debt";
import Directors from "./getStarted/directors";
import ShareCapital from "./getStarted/shareCapital";
import IntelProp from "./getStarted/intellectualProp";

import Financials from "./getStarted/financial";
import AltFi from "./getStarted/altFiSpecs";

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

class InfoForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: false,
    busName: "",
    country: "",
    value: "",
    shareholders: "",
    classOfShares: "",
    numberOfShares: "",
    classValues: "",
    optionsGranted: "",
    hasBankrupt: "",
    hasInsolvPract: "",
    hasLoansOutstanding: "",
    hasConvertDebt: "",
    directors: "",
    addressDetails: "",
    hasDisqualified: "",
    hasCriminalOffence: "",
    hasSanctioned: "",
    needsOthersIP: "",
    prevEmpIPClaims: "",
    hasTransferredIP: "",
    activeIndex: 0,
  };
  handleNumberChange = (e, { name, value }) =>
    this.setState({ [name]: value.replace(/\D/, "") });
  handleTextChange = (e, { name, value }) => this.setState({ [name]: value });

  handleChange = (e, { value }) => this.setState({ value });

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { open, loading, errorMessage } = this.props;
    const {
      value,
      busName,
      country,
      activeIndex,
      shareholders,
      classOfShares,
      numberOfShares,
      classValues,
      optionsGranted,
      hasBankrupt,
      hasInsolvPract,
      hasLoansOutstanding,
      hasConvertDebt,
      directors,
      addressDetails,
      hasDisqualified,
      hasCriminalOffence,
      hasSanctioned,
      needsOthersIP,
      prevEmpIPClaims,
      hasTransferredIP,
    } = this.state;
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.hideModal}
        style={{ height: "90vh", width: "1000px" }}
      >
        <Modal.Header
          style={{
            fontSize: "2em",
            color: "rgba(255, 255, 255, 1.0)",
            backgroundColor: "rgba(212, 32, 32, 1.0)",
          }}
        >
          Borrower Details
        </Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header
              as="h3"
              style={{ fontSize: "2em", color: "rgba(212, 32, 32, 0.9)" }}
              textAlign="left"
            >
              Tell Us About Your Business!
            </Header>

            <Grid fluid container verticalAlign="top">
              <Grid.Row>
                <Grid.Column width={9}>
                  <Form
                    size={"large"}
                    onSubmit={this.props.onProceed}
                    error={!!errorMessage}
                  >
                    <Accordion styled style={{ width: "650px" }}>
                      <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                      >
                        <Icon name="dropdown" />
                        Basic Details
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === 0}>
                        <BasicDetails
                          busName={busName}
                          country={country}
                          countryOptions={countryOptions}
                          handleTextChange={this.handleTextChange}
                        />
                      </Accordion.Content>

                      <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                      >
                        <Icon name="dropdown" />
                        Issued Share Capital
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === 1}>
                        <ShareCapital
                          shareholders={shareholders}
                          classOfShares={classOfShares}
                          numberOfShares={numberOfShares}
                          classValues={classValues}
                          optionsGranted={optionsGranted}
                          handleChange={this.handleChange}
                          handleTextChange={this.handleTextChange}
                          handleNumberChange={this.handleNumberChange}
                        />
                      </Accordion.Content>

                      <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                      >
                        <Icon name="dropdown" />
                        Debt & Debt History
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === 2}>
                        <Debt
                          hasBankrupt={hasBankrupt}
                          hasInsolvPract={hasInsolvPract}
                          hasLoansOutstanding={hasLoansOutstanding}
                          hasConvertDebt={hasConvertDebt}
                          handleChange={this.handleChange}
                          handleTextChange={this.handleTextChange}
                          handleNumberChange={this.handleNumberChange}
                        />
                      </Accordion.Content>

                      <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={this.handleClick}
                      >
                        <Icon name="dropdown" />
                        Directors
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === 3}>
                        <Directors
                          directors={directors}
                          addressDetails={addressDetails}
                          hasDisqualified={hasDisqualified}
                          hasCriminalOffence={hasCriminalOffence}
                          hasSanctioned={hasSanctioned}
                          handleChange={this.handleChange}
                          handleTextChange={this.handleTextChange}
                          handleNumberChange={this.handleNumberChange}
                        />
                      </Accordion.Content>

                      <Accordion.Title
                        active={activeIndex === 4}
                        index={4}
                        onClick={this.handleClick}
                      >
                        <Icon name="dropdown" />
                        Intellectual Property
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === 4}>
                        <IntelProp
                          needsOthersIP={needsOthersIP}
                          prevEmpIPClaims={prevEmpIPClaims}
                          hasTransferredIP={hasTransferredIP}
                          handleChange={this.handleChange}
                          handleTextChange={this.handleTextChange}
                          handleNumberChange={this.handleNumberChange}
                        />
                      </Accordion.Content>
                    </Accordion>
                    <br />
                    <Form.Field>
                      <Message error header="Oops" content={errorMessage} />
                      <Button type="submit" primary loading={loading}>
                        {" "}
                        Submit <Icon name="chevron right" />{" "}
                      </Button>
                    </Form.Field>
                  </Form>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Image bordered rounded size="medium" src="/formPic.jpg" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <br />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
export default InfoForm;
