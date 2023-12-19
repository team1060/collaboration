import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0
                },
                html: {
                    width: "100%",
                    height: "100%"
                },
                body: {
                    width: "100%",
                    height: "100%",
                    color: "#1D1D1B",
                    background: "#ffffff"
                },
            }
        }
    },
    palette: {
        primary: {
            main: "#01387F", // 기본 기본 글꼴 색상
            modal: "#262626", // 모달 배경 색상
            grayText: "#666666", // 회색 텍스트 색상
            calendarBackground: "#4C4C4C", // 달력 배경 색상
            cartDescriptionBackground: "#4C4C4C", // 장바구니 설명란 배경 색상
            priceCalculationBackground: "#01387F", // 가격 계산 배경 색상
            hoverColor: "#2D2D2B", // 호버 시 색상
        },
        secondary: {
            main: "#FF0000" // 보조 색상
        },
    },
    typography: {
        fontFamily: ['Spoqa Han Sans Neo', 'sans-serif'].join(","),
        "@import": "url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css')"
    }
});

export default theme;
