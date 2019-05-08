import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class SearchBar extends Component {
	menuStyle = {
		borderRadius: '3px',
		boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
		background: 'rgba(255, 255, 255, 0.9)',
		padding: '2px 0',
		fontSize: '90%',
		position: 'fixed',
		overflow: 'auto',
		maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
		zIndex: '5000'
	};

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	render() {
		return (
			<Row className="mentor-search-bar">
				<Col />
				<Col>
					<Autocomplete
						getItemValue={(item) => item.label}
						items={[
							{ label: 'Accounting & Tax Services' },
							{ label: 'Arts, Culture & Entertainment' },
							{ label: 'Auto Sales & Service' },
							{ label: 'Banking & Finance' },
							{ label: 'Business Services' },
							{ label: 'Community Organizations' },
							{ label: 'Dentists & Orthodontists' },
							{ label: 'Education' },
							{ label: 'Health & Wellness' },
							{ label: 'Home Improvement' },
							{ label: 'Insurance' },
							{ label: 'Internet & Web Services' },
							{ label: 'Lodging & Travel' },
							{ label: 'Marketing & Advertising' },
							{ label: 'News & Media' },
							{ label: 'Pet Services' },
							{ label: 'Real Estate' },
							{ label: 'Shopping & Retail' },
							{ label: 'Restaurants & Nightlife' },
							{ label: 'Utilities' },
							{ label: 'Wedding, Events, & Meetings' }
						]}
						renderItem={(item, isHighlighted) => (
							<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>{item.label}</div>
						)}
						value={this.state.value}
						onChange={(e) => this.setState({ value: e.target.value })}
						onSelect={(value) => this.setState({ value })}
						shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
						menuStyle={this.menuStyle}
					/>
				</Col>
				<Col />
			</Row>
		);
	}
}

export default SearchBar;
