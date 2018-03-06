import React from 'react';

//import searchIcon from '/static/icons8-search_filled.png';

const navBar = (props) => (
    
    <div className="nav-bar">
       <div style={{backgroundColor: "white", height:"100%", width: "950px"}}>
            <div style={{marginLeft:"40px", height:"100%", width: "100px", display: "inline-block", marginTop:"10px", verticalAlign: "center"}}>
                <img src="https://vignette1.wikia.nocookie.net/custombionicle/images/c/c0/YouTube.png/revision/latest?cb=20120916061301" alt="logo" style={{maxWidth: "80%", maxHeight:"80%"}}/>
            </div>
            <input onChange={props.changed} className="search-bar" type="text" id="searchquery" placeholder="Search" />
            <button onClick={props.click} className="search-button" type="button"><img style={{marginTop: "2px", maxWidth: "80%", maxHeight:"80%"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPkSURBVGhD7ZlbiE1RHMZnkMsgtzcjbxIpHuQJ44VE5HY0GE3N/dJMDUJDTcn1wYtQJLmTB5fyqISSSy4hNXgiPHiQcWcYv4/v6IxmMPvsvWeO5qt/68y31vm+/3+ttfdeZ09WN7rRBVFRUTG6rKxsRWlp6WnaRuIt0aKAe0ncIPaVlJQsgxvkr3UNNDQ09CCxxSR4NZl0asB/aYd/T3uE4sdZqvNQXl4+iYRupST3hvYk7XKtTiKR6O2hWYWFhYM1nv419F8hvvo7avcWFxcP9dBYkU0C64gfs037nKgi2b7u/ytYxRF8Z0+KxhPaye6OHsxyTwwPyJz4RgJbqqqqBri7w2AlxqBzSXpofWTVFrkrUmRjeMhFvMV4ofm0oC2I3l7rNqM7113RAJN6mWH0TvvddGhAd0NSP7KbgC/UZkLbKZSVaAO69k6oGOJ+TU1NH/PhQLdYhG/LAKNNpiMBHjkqQl7EWtPhgOTzXcSLgoKC/qYjA6s/y4W8IsJ7cCJ23cIVpiIHk3bBnitMpQffHiXYFPqe/QPwmydfCrpjKj0gtMqFnDQVC/DLwVvHmBY9PE0HB2JnPDNLTcUGfM/aO99UcCDyUGI6O5mKDfiulzex0VRwIPJBYtyCe5mKDUzicnnTHjQVGDqSaEY++O9Yge8c+58yFRwWavafsQLfBfY/ZCo4ENFDqaWoqGigqdjAliqRN+12U8GByE3PykRTsQHPbS5kpangQGR/aGIdBJ435M2RZZqp4EAseee4bCoWkHwuvjppv0n9yRwY+i2N2EfiK9fJcNORA79aTSBx1lT6QOy4RXeZihR1dXX98HoqT1Zmuun0gdh4RLXMn/k8ynRkwGutiiCumwoPFJG86C+EsmfbARM1Fp8mQhM3w3R4qK6uHob4Mxez23So0PWI/iN77DQdPjhOT8Hkk43WQWX/7EkfvqlclDbRqOvEXdEAs6UY6SWEijnakZdy7UHbCa3HLkIh/YS7owMrMx+jH6diErhDO9NdHYLvTnqF+lpaqQGnN5CxFDMBowcpxudp5/zLlmAFchlfS+g1qb6vC/uck29VDGOjf/Oo3/CY6R3wrxnl8ztC/1aoJ4klfJ6tFaQtIrYS1+j7ljL+Hu1U6dEm+LtzihEqKyuHYLiauJuaRHvBOJ0UzpCgHnatbhj0t1WMnl/xFJMExiMx1vlsM+1h2lO0x4gdfK6nzfvb9lPSjOv8YsKAi/n8ezFEVK9ro8N/XwzxKSOLUdJtFUMs8JDMgYpx8t3FdCkoaSffqhiKzPOQzAGJtyqGInQ8ynF3ZsEHV61E5haRhLZTxhfRjcxCVtZ3OcPr+r3ZBoQAAAAASUVORK5CYII='/></button>
       </div>
     <style jsx>{`
            .nav-bar {
                width: 100%;
                height: 50px;
                margin-bottom: 30px;
                box-shadow: 0 2px 3px #ccc;
            }

            .search-bar {
                font-size: 16px;
                vertical-align: top;
                margin-left: 40px;
                height: 30px;
                margin-top: 8px;
                margin-bottom: 12px;
                width: 600px;
                display: inline-block;
            }

            .search-button {
                vertical-align: top;
                height: 36px;
                margin-top: 8px;
                margin-bottom: 6px;
                width: 70px;
                display: inline-block;
            }

            .hamburger-icon {
                object-fit: cover;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
            }
        `}
        </style>
    </div>
    
);

export default navBar;