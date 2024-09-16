### Back to Home Button

## 語言選擇 / Language Selection

- [繁體中文](#繁體中文)
- [English](#english)

---

## 繁體中文

### 簡介

這個「回到首頁」按鈕能夠動態生成並允許自定義樣式。它可以在滾動到一定位置後顯示，並提供平滑的滾動效果返回頁面頂部。按鈕支持透明化和多種自定義選項，以達到專業的外觀效果。

### 使用方法

1. **保存腳本**: 將以下 JavaScript 代碼保存為 `homeButton.js` 文件並上傳到您的伺服器。

    ```javascript
    // 動態加載 Boxicons 圖標庫
    (function loadBoxicons() {
        const link = document.createElement('link');
        link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    })();

    // 創建回到首頁按鈕
    (function createHomeButton(config = {}) {
        const defaults = {
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            hoverBackgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            bottom: '30px',
            right: '30px',
            iconSize: '26px',
            textSize: '12px',
            textColor: '#00BFFF', // 文字顏色
            transition: '0.3s ease'
        };

        const settings = { ...defaults, ...config };

        const homeButton = document.createElement('a');
        homeButton.href = '#';
        homeButton.id = 'home-button';
        homeButton.title = 'Back to Home';
        homeButton.innerHTML = "<i class='bx bx-up-arrow-alt'></i><span>Back to Home</span>";
        document.body.appendChild(homeButton);

        const style = document.createElement('style');
        style.innerHTML = `
            #home-button {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: ${settings.width};
                height: ${settings.height};
                background: ${settings.backgroundColor};
                color: ${settings.textColor}; /* 文字顏色設置 */
                border-radius: ${settings.borderRadius};
                font-size: ${settings.fontSize};
                box-shadow: ${settings.boxShadow};
                transition: transform ${settings.transition}, background ${settings.transition}, box-shadow ${settings.transition}, opacity ${settings.transition}, color ${settings.transition};
                position: fixed;
                bottom: ${settings.bottom};
                right: ${settings.right};
                opacity: 0;
                pointer-events: none;
                z-index: 1000;
                text-decoration: none;
                padding: 10px;
                text-align: center;
            }

            #home-button i {
                font-size: ${settings.iconSize};
                margin-bottom: 6px;
                transition: transform ${settings.transition};
            }

            #home-button span {
                font-size: ${settings.textSize};
                display: block;
                opacity: 1;
                transition: opacity ${settings.transition};
            }

            #home-button.show {
                opacity: 1;
                pointer-events: auto;
            }

            #home-button:hover {
                background: ${settings.hoverBackgroundColor};
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }

            #home-button:hover i {
                transform: rotate(360deg) scale(1.2);
            }

            #home-button:active {
                transform: scale(0.95);
            }

            @media (max-width: 768px) {
                #home-button {
                    font-size: 14px;
                    right: 20px;
                    bottom: 20px;
                }

                #home-button i {
                    font-size: 22px;
                }

                #home-button span {
                    font-size: 10px;
                }
            }

            @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;

            if (scrollY > 300) {
                homeButton.classList.add('show');
                homeButton.style.animation = 'fadeIn 0.5s ease-in-out forwards';
            } else {
                homeButton.classList.remove('show');
                homeButton.style.animation = 'fadeOut 0.5s ease-in-out forwards';
            }
        });

        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })(/* 配置參數，例如：
    {
        width: '70px',
        height: '70px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        hoverBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        fontSize: '14px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        bottom: '20px',
        right: '20px',
        iconSize: '20px',
        textSize: '10px',
        textColor: '#00BFFF', // 文字顏色
        transition: '0.2s ease'
    }
    */);
    ```

2. **在 HTML 文件中引入腳本**: 在 HTML 文件的 `<head>` 部分引入這個 JavaScript 文件，並配置參數。

    ```html
    <script>
    (function() {
        // 這裡是配置參數
        const buttonConfig = {
            width: '70px',
            height: '70px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            hoverBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '8px',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            bottom: '20px',
            right: '20px',
            iconSize: '20px',
            textSize: '10px',
            textColor: '#00BFFF', // 文字顏色
            transition: '0.2s ease'
        };

        // 引入按鈕創建腳本並傳遞配置參數
        const script = document.createElement('script');
        script.src = 'path/to/homeButton.js'; // 確保這裡的路徑是正確的
        script.onload = function() {
            createHomeButton(buttonConfig);
        };
        document.head.appendChild(script);
    })();
    </script>
    ```

### 配置參數說明

- `width`: 按鈕的寬度，預設為 `80px`。
- `height`: 按鈕的高度，預設為 `80px`。
- `backgroundColor`: 按鈕的背景顏色，預設為 `rgba(255, 255, 255, 0.2)`。
- `hoverBackgroundColor`: 懸浮時的背景顏色，預設為 `rgba(255, 255, 255, 0.4)`。
- `borderRadius`: 按鈕的邊框圓角，預設為 `12px`。
- `fontSize`: 文字的字體大小，預設為 `16px`。
- `boxShadow`: 按鈕的陰影效果，預設為 `0 8px 20px rgba(0, 0, 0, 0.1)`。
- `bottom`: 按鈕距離底部的距離，預設為 `30px`。
- `right`: 按鈕距離右邊的距離，預設為 `30px`。
- `iconSize`: 圖標的大小，預設為 `26px`。
- `textSize`: 文字的大小，預設為 `12px`。
- `textColor`: 按鈕中文字的顏色，預設為 `#00BFFF`。
- `transition`: 樣式過渡效果的時間，預設為 `0.3s ease`。

---

## English

### Introduction

This "Back to Home" button dynamically generates and allows customization of its style. It appears after scrolling to a certain position and provides a smooth scroll effect to the top of the page. The button supports transparency and various customization options to achieve a professional look.

### Usage

1. **Save

 the Script**: Save the following JavaScript code as `homeButton.js` and upload it to your server.

    ```javascript
    // Dynamically load Boxicons icon library
    (function loadBoxicons() {
        const link = document.createElement('link');
        link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    })();

    // Create the Back to Home button
    (function createHomeButton(config = {}) {
        const defaults = {
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            hoverBackgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            bottom: '30px',
            right: '30px',
            iconSize: '26px',
            textSize: '12px',
            textColor: '#00BFFF', // Text color
            transition: '0.3s ease'
        };

        const settings = { ...defaults, ...config };

        const homeButton = document.createElement('a');
        homeButton.href = '#';
        homeButton.id = 'home-button';
        homeButton.title = 'Back to Home';
        homeButton.innerHTML = "<i class='bx bx-up-arrow-alt'></i><span>Back to Home</span>";
        document.body.appendChild(homeButton);

        const style = document.createElement('style');
        style.innerHTML = `
            #home-button {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: ${settings.width};
                height: ${settings.height};
                background: ${settings.backgroundColor};
                color: ${settings.textColor}; /* Text color setting */
                border-radius: ${settings.borderRadius};
                font-size: ${settings.fontSize};
                box-shadow: ${settings.boxShadow};
                transition: transform ${settings.transition}, background ${settings.transition}, box-shadow ${settings.transition}, opacity ${settings.transition}, color ${settings.transition};
                position: fixed;
                bottom: ${settings.bottom};
                right: ${settings.right};
                opacity: 0;
                pointer-events: none;
                z-index: 1000;
                text-decoration: none;
                padding: 10px;
                text-align: center;
            }

            #home-button i {
                font-size: ${settings.iconSize};
                margin-bottom: 6px;
                transition: transform ${settings.transition};
            }

            #home-button span {
                font-size: ${settings.textSize};
                display: block;
                opacity: 1;
                transition: opacity ${settings.transition};
            }

            #home-button.show {
                opacity: 1;
                pointer-events: auto;
            }

            #home-button:hover {
                background: ${settings.hoverBackgroundColor};
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }

            #home-button:hover i {
                transform: rotate(360deg) scale(1.2);
            }

            #home-button:active {
                transform: scale(0.95);
            }

            @media (max-width: 768px) {
                #home-button {
                    font-size: 14px;
                    right: 20px;
                    bottom: 20px;
                }

                #home-button i {
                    font-size: 22px;
                }

                #home-button span {
                    font-size: 10px;
                }
            }

            @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;

            if (scrollY > 300) {
                homeButton.classList.add('show');
                homeButton.style.animation = 'fadeIn 0.5s ease-in-out forwards';
            } else {
                homeButton.classList.remove('show');
                homeButton.style.animation = 'fadeOut 0.5s ease-in-out forwards';
            }
        });

        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })(/* Configuration parameters, for example:
    {
        width: '70px',
        height: '70px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        hoverBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        fontSize: '14px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        bottom: '20px',
        right: '20px',
        iconSize: '20px',
        textSize: '10px',
        textColor: '#00BFFF', // Text color
        transition: '0.2s ease'
    }
    */);
    ```

2. **Include the Script in HTML**: Include this JavaScript file in the `<head>` section of your HTML file and configure parameters.

    ```html
    <script>
    (function() {
        // Configuration parameters
        const buttonConfig = {
            width: '70px',
            height: '70px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            hoverBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '8px',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            bottom: '20px',
            right: '20px',
            iconSize: '20px',
            textSize: '10px',
            textColor: '#00BFFF', // Text color
            transition: '0.2s ease'
        };

        // Include button creation script and pass configuration parameters
        const script = document.createElement('script');
        script.src = 'path/to/homeButton.js'; // Ensure this path is correct
        script.onload = function() {
            createHomeButton(buttonConfig);
        };
        document.head.appendChild(script);
    })();
    </script>
    ```

### Configuration Parameters

- `width`: The width of the button, default is `80px`.
- `height`: The height of the button, default is `80px`.
- `backgroundColor`: The background color of the button, default is `rgba(255, 255, 255, 0.2)`.
- `hoverBackgroundColor`: The background color when hovered, default is `rgba(255, 255, 255, 0.4)`.
- `borderRadius`: The border radius of the button, default is `12px`.
- `fontSize`: The font size of the text, default is `16px`.
- `boxShadow`: The box shadow effect of the button, default is `0 8px 20px rgba(0, 0, 0, 0.1)`.
- `bottom`: The distance of the button from the bottom, default is `30px`.
- `right`: The distance of the button from the right, default is `30px`.
- `iconSize`: The size of the icon, default is `26px`.
- `textSize`: The size of the text, default is `12px`.
- `textColor`: The color of the button text, default is `#00BFFF`.
- `transition`: The transition effect time, default is `0.3s ease`.
