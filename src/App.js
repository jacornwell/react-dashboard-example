import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppHeader from './components/AppHeader';
import AppDrawer from './components/AppDrawer';
import AppContent from './components/AppContent';

import './styles.css';

const useStyles = makeStyles((theme) => ({
	appHeader: {
		flex: '0 0 auto'
	},
	contentContainer: {
		position: 'relative',
		flex: '1 1 auto',
		width: '100%'
	},
	appDrawer: {
		display: 'none',
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		width: '10rem',
		overflowY: 'auto',
		borderRight: '1px solid #a7a7a7',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	appContent: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflowY: 'auto',
		[theme.breakpoints.up('sm')]: {
			left: '10rem'
		}
	}
}));

const App = () => {
	const classes = useStyles();

	let keyPressBuffer = useRef([]);
	let lastKeyPressTime = useRef(Date.now());

	const handleKeyDown = useCallback((event) => {
		if (event.shiftKey) {
			const targetChars = 'bdegu';
			const successfulSequence = 'debug';
			const key = event.key.toLowerCase();

			if (targetChars.indexOf(key) === -1) return;

			const currentTime = Date.now();

			if (currentTime - lastKeyPressTime.current > 1000) {
				keyPressBuffer.current = [];
			}

			keyPressBuffer.current.push(key);
			lastKeyPressTime.current = currentTime;

			if (keyPressBuffer.current.join('') === successfulSequence) {
				console.log('Keypress sequence accepted');
			}
		}
	}, []);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [handleKeyDown]);

	return (
		<Fragment>
			<AppHeader className={classes.appHeader} />
			<div className={classes.contentContainer}>
				<div className={classes.appDrawer}>
					<AppDrawer />
				</div>
				<div className={classes.appContent}>
					<AppContent />
				</div>
			</div>
		</Fragment>
	);
};

export default App;
