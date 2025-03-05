export interface ThemeColors {
    primaryText: string;
    background: string;
    primaryOutline: string;
    primaryDivide: string;
    primaryButton: string;
    formBackground: string;
    secondaryButton: string;
    loadButton: string;
    disabledButton: string;
    outlinePrimaryButton: string;
    outlineSecondaryButton: string;
    helpButton: string;
    aboutButton: string;
    cellCorrect: string;
    cellPresent: string;
    cellIncorrect: string;
}

export const buttonClass = "py-2 px-4 rounded  transition-all";


export const lightThemeColors: ThemeColors = {
    primaryText: "text-black",
    background: "bg-gray-100",
    primaryOutline: "border border-gray-200",
    primaryDivide: "divide-gray-300 ",
    primaryButton: `${buttonClass} bg-purple-800 hover:bg-purple-700 text-white`,
    formBackground: "bg-white",
    outlinePrimaryButton: `${buttonClass} bg-transparent border border-purple-800 hover:bg-purple-700 text-white`,
    secondaryButton: `${buttonClass} bg-rose-600 hover:bg-rose-500 text-white`,
    outlineSecondaryButton: `${buttonClass} bg-transparent border border-rose-600 hover:bg-rose-500 text-white`,
    disabledButton: `${buttonClass} bg-gray-400 text-white hover:cursor-not-allowed`,
    loadButton: `${buttonClass} bg-amber-600 hover:bg-amber-700 text-white`,
    helpButton: `${buttonClass} bg-blue-600 hover:bg-blue-700 text-white`,
    aboutButton: `${buttonClass} bg-green-600 hover:bg-green-700 text-white`,
    cellCorrect: "#006920",
    cellPresent: "#c6c900",
    cellIncorrect: "#858585",
}

export const darkThemeColors: ThemeColors = {
    primaryText: "text-gray-200",
    background: "bg-gray-900", 
    primaryOutline: "border border-gray-600",
    primaryDivide: "divide-gray-500 ",
    primaryButton: `${buttonClass} bg-purple-900 hover:bg-purple-800 text-white`,
    formBackground: "bg-gray-800",
    outlinePrimaryButton: `${buttonClass} bg-transparent border border-purple-900 hover:bg-purple-800 text-white`,
    secondaryButton: `${buttonClass} bg-rose-900 hover:bg-rose-800 text-white`,
    outlineSecondaryButton: `${buttonClass} bg-transparent border border-rose-900 hover:bg-rose-800 text-white`,
    disabledButton: `${buttonClass} bg-gray-700 text-white hover:cursor-not-allowed`,
    loadButton: `${buttonClass} bg-amber-700 hover:bg-amber-800 text-white`,
    helpButton: `${buttonClass} bg-blue-900 hover:bg-blue-800 text-white`,
    aboutButton: `${buttonClass} bg-green-900 hover:bg-green-800 text-white`,
    cellCorrect: "#006920",
    cellPresent: "#c6c900",
    cellIncorrect: "#858585",
}