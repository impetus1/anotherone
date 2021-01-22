import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../menu';
import FooBar from '../material/foobar';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';
//import SimpleForm from 'autoform'; // Tryna get dis form 2 work 
require('./Home.css');

const Home = (props) => {
  const { title, description, DefiantLink} = menu;
  return (
    <div>

    <FooBar/>
    <div className="home">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="buttons">
      </div>
      <p className="recycler">

        <a
          className="recycle-button"
          onClick={() => props.handleLink(DefiantLink)}
        >
          <i className="fa fa-recycle" />
          Enter Site
        </a>
      </p>
    </div>
    </div>
  );
};

Home.propTypes = {
  handleLink: PropTypes.func.isRequired,
};

export default Home;
