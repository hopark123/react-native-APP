import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'; //https://www.npmjs.com/package/react-native-calendar-picker


//getFullYear()
export function Calendar({ calendar, setCalender, setStartDate, setEndDate }) {
	const onDateChange = (date, type) => {
		if (date) {
			const selected = new Date(date);
			if (type === 'END_DATE') {
				setEndDate(selected.toISOString().slice(0, 10).replace(/-/gi, " / "))
				setCalender(false)
			}
			else {
				setStartDate(selected.toISOString().slice(0, 10).replace(/-/gi, " / "))
			}
		}
	}
	return (
		<Modal visible={calendar} transparent={false} >
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<CalendarPicker
						allowRangeSelection={true}
						todayBackgroundColor="#f2e6ff"
						selectedDayColor="#7300e6"
						selectedDayTextColor="#FFFFFF"
						onDateChange={onDateChange}
					/>
				</View>
			</View>
		</Modal>
	)
}



const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		shadowColor: '#000',
		//그림자의 영역 지정
		shadowOffset: {
			width: 0,
			height: 2
		},
		//불투명도 지정
		shadowOpacity: 0.25,
		//반경 지정
		shadowRadius: 3.84,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
	},
})