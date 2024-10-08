// 動態加載 Boxicons 圖標庫
(function loadBoxicons() {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
})();

// 創建回到首頁按鈕
(function createHomeButton(config = {}) {
    // 設定預設值
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
        textColor: '#00BFFF', // 文字顏色設置
        transition: '0.3s ease'
    };

    // 合併配置
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
            color: ${settings.textColor}; /* 文字顏色設定 */
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
