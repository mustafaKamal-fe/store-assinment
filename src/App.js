import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BrowseStoresPage from './pages/browseStoresPage';
import AddStorePage from './pages/addStorePage';
import SingleStorePage from './pages/SingleStorePage';
import SingleCategoryPage from './pages/singleCategoryPage';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path={'/store/add'} element={<AddStorePage />} />
					<Route path={'/store/:id'} exact element={<SingleStorePage />} />
					<Route
						path={'/category/:id'}
						exact
						element={<SingleCategoryPage />}
					/>
					<Route exact path={'/'} element={<BrowseStoresPage />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
