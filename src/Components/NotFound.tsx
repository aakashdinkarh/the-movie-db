import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundStyledWrapper = styled.section`
    & * {
        color: black;
    }
    padding: 0 20px;
`;

const NotFound = () => (
	<NotFoundStyledWrapper>
		<h1>404</h1>
		<p>Oops! Looks like you're lost.</p>
		<p>The page you are looking for does not exist.</p>
		<Link to='/'>Go back to Home</Link>
	</NotFoundStyledWrapper>
);

export default NotFound;
