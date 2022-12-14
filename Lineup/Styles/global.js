import {colors} from './constants'

export const listElementStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 1,
}

export const globalButtonStyle = {
    width: 300,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.THEME_SKYBLUE,
}

export const globalButtonTextStyle = {
    fontWeight: '700',
    color: colors.WHITE,
}

export const globalInputStyle = {
    borderWidth: 1,
    borderColor: colors.GRAYC9,
    padding: 8,
    fontSize: 13,
    borderRadius: 3,
}

export const globalLargeInputStyle = {
    ...globalInputStyle,
    width: '100%',
    height: 150,
    fontSize: 14,
    textAlignVertical: 'top',
    borderRadius: 5,
}

export const globalTextStyle = {
    color: colors.TEXT_DARK,
    fontSize: 13,
}

export const globalAsteriskStyle = {
    color: colors.THEME_SKYBLUE,
}
