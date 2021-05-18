import React, { useState } from 'react';
import SearchForm from './SearchForm';
import {
	initiateGetResult
  } from '../actions/result';
import Header from './Header';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';


const Dashboard = (props) => {

	// const { isValidSession, history } = props;
	const [selectedCategory, setSelectedCategory] = useState('albums');

	const handleSearch = (searchTerm) => {
		// if (isValidSession()) {
		  
		  props.dispatch(initiateGetResult(searchTerm)).then(() => {
			
			setSelectedCategory('albums');
		  });
		// } else {
		//   history.push({
		// 	pathname: '/',
		// 	state: {
		// 	  session_expired: true
		// 	}
		//   });
		// }
	};
	
	const setCategory = (category) => {
		setSelectedCategory(category);
	};

	const { albums, artists, playlist } = props;
	const result = { albums, artists, playlist };

 	return (
	<React.Fragment>
	{/* {isValidSession() ? ( */}
	  <div>
		<Header />
		<SearchForm handleSearch={handleSearch} />
	
		<SearchResult
            result={result}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
          />
	  </div>
	{/* ) : (
	  <Redirect
		to={{
		  pathname: '/',
		  state: {
			session_expired: true
		  }
		}}
	  />
	)} */}
  	</React.Fragment>
 );
};


const mapStateToProps = (state) => {
	return {
	  albums: state.albums,
	  artists: state.artists,
	  playlist: state.playlist
	};
  };
  
export default connect(mapStateToProps)(Dashboard);

