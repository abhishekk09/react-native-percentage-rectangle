/**
 * React Native Percentage Rectangle
 **/
import React, { Component } from 'react';
import { StyleSheet, View, Image ,Text} from 'react-native';

import PropTypes from 'prop-types';

export default class PercentageBar extends Component {

	render() {
		let { width, source, percent, borderWidth } = this.props;
		return (
			<View style={[styles.reactangle,{height:width+borderWidth,width:width+borderWidth}]}>
				<View
					style={[
						styles.percentViewBar,
						{ top: 0, left: 0, height: borderWidth, width: percent >= 25 ? width : width * (percent * 4 / 100) }
					]}
				/>
				<View
					style={[
						styles.percentViewBar,
						{ top: 0, right: 0, height: percent >= 50 ? width : width * ((percent - 25) * 4 / 100), width: borderWidth }
					]}
				/>
				<View style={{alignContent:'center',justifyContent:'center',backgroundColor:'white',height: width-borderWidth, width: width-borderWidth}}>
					{
						source ? <Image source={source} resizeMode={'contain'} style={{ height: width-borderWidth, width: width-borderWidth }} />:
					<Text style={{textAlign:'center',fontSize:width/100 * 30}}>{percent+'%'}</Text>}
					
				</View>
				<View
					style={[
						styles.percentViewBar,
						{
							bottom: 0,
							left: 0,
							height: percent === 100 ? width : width * ((percent - 75) * 4 / 100),
							width: borderWidth
						}
					]}
				/>
				<View
					style={[
						styles.percentViewBar,
						{
							bottom: 0,
							right: 0,
							height: borderWidth,
							width: percent >= 75 ? width : width * ((percent - 50) * 4 / 100)
						}
					]}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	reactangle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		margin:10
	},
	percentViewBar: {
		position: 'absolute',
		overflow: 'hidden',
		backgroundColor: '#1a974c',
		zIndex: 100
	}
});
/**
 * PropTypes defined for PercentageBar
 * */
PercentageBar.propTypes = {
	width: PropTypes.number,
	source: PropTypes.object,
	percent: PropTypes.number,
	borderWidth: PropTypes.number
};
// set some attributes default value
PercentageBar.defaultProps = {
	width: 180,
	source: null,
	percent: 45,
	borderWidth: 10
};
