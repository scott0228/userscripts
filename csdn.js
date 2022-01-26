// ==UserScript==
// @author       AdlerED
// @copyright    2020, adlered https://stackoverflow.wiki
// @license      MIT
// @icon         https://csdnimg.cn/public/favicon.ico
// @homepageURL  https://github.com/adlered/CSDNGreener
// @supportURL   https://github.com/adlered/CSDNGreener/issues/new?assignees=adlered&labels=help+wanted&template=ISSUE_TEMPLATE.md&title=
// @contributionURL https://doc.stackoverflow.wiki/web/#/21?page_id=138
// @name         最強的老牌腳本CSDNGreener：CSDN廣告完全過濾、人性化腳本優化
// @namespace    https://github.com/adlered
// @version      4.1.0
// @description  全新4.0版本！擁有數項獨家功能的最強CSDN腳本，不服比一比|無需登錄CSDN，獲得比會員更佳的體驗|背景圖自定義，模塊化卡片，顯示什麼你決定|分辨率自適配，分屏不用滾動|超級預優化|獨家原創文章免登錄展開|獨家推薦內容自由開關|獨家免登錄復制|獨家防外鏈重定向|獨家論壇未登錄自動展開文章、評論|全面淨化|沉浸閱讀|淨化剪貼板
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js
// @require      https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.js
// @require      https://cdn.bootcdn.net/ajax/libs/clipboard.js/2.0.8/clipboard.min.js
// @updateURL    https://github.com/adlered/CSDNGreener/raw/master/csdngreener_openuserjs.user.js
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @antifeature  tracking 我們會收集您對腳本的使用情況幫助我們改進CSDNGreener，但不含任何隱私內容，代碼開源可審計，請您放心安裝腳本。
// @note         22-01-18 4.1.0 代碼折疊適配
// @note         22-01-05 4.0.9 更新廣告
// @note         21-12-12 4.0.8 屏蔽學生認證
// @note         21-10-21 4.0.7 屏蔽紅包雨
// @note         21-09-24 4.0.6 修復登錄彈窗無法徹底去除的問題
// @note         21-09-20 4.0.5 增加自定義背景功能
// @note         21-09-13 4.0.4 增加一個沒有收錢的廣告（在設置裡，不影響體驗）
// @note         21-09-01 4.0.3 增加用戶使用情況統計模塊
// @note         21-08-25 4.0.2 修復右側置頂欄按鈕消失的問題
// @note         21-08-21 4.0.1 去除右側懸浮欄，優化腳本
// @note         21-08-20 4.0.0 全新4.0發布！UI美化，代碼優化，兼容Firefox，更多排版模式
// @note         21-08-20 3.5.7 修復無法完整復制、保存csdn的網頁會跳轉首頁的問題
// @note         21-08-19 3.5.6 自動隱藏底欄功能改為始終隱藏底欄
// @note         21-08-18 3.5.5 修復無法選擇復制的問題
// @note         21-06-17 3.5.4 去除右側紅包懸浮窗
// @note         21-04-18 3.5.3 增加顯示小店的設定
// @note         21-03-13 3.5.2 去主頁廣告，去文章頁面推薦內容Title
// @note         21-03-01 3.5.1 修改文案
// @note         21-02-06 3.5.0 修復上傳資源界面標簽選擇消失的問題
// @note         21-01-17 3.4.9 刪除文章頁和論壇廣告，暫時停用右側欄滾動功能（CSDN限制）
// @note         21-01-15 3.4.8 保存按鈕優化，修復顯示創作中心按鈕功能失效的問題
// @note         21-01-15 3.4.7 改進腳本細節，增加廣告屏蔽能力，修復綠化按鈕錯位的問題
// @note         20-12-25 3.4.6 主頁部分嵌入式廣告刪除
// @note         20-12-18 3.4.5 修復綠化設定按鈕排版不正確的問題
// @note         20-12-15 3.4.4 修復了某些子頁顯示不正常的問題
// @note         20-10-23 3.4.3 適應新版CSDN，去除主頁和登錄頁廣告，以及登錄提示，並移除底部信息
// @note         20-10-20 3.4.2 刪除右側廣告
// @note         20-09-26 3.4.1 修改排版設定，修復登錄框彈出的問題
// @note         20-09-24 3.4.0 緊急修復由於CSDN前端樣式修改導致設定開關丟失的問題
// @note         20-08-27 3.3.9 緊急修復由於CSDN前端樣式修改導致腳本失效的問題
// @note         20-08-26 3.3.8 合法腳本提示
// @note         20-07-20 3.3.7 修復菜單欄在創作中心顯示異常的問題
// @note         20-07-18 3.3.6 工具箱按鈕優化
// @note         20-07-05 3.3.5 評論復制功能交互優化
// @note         20-07-04 3.3.4 修復右側欄消失的問題
// @note         20-07-03 3.3.3 新增復制評論功能！刪除頂部廣告
// @note         20-06-28 3.3.2 提示修改
// @note         20-06-27 3.3.1 彈窗提示邏輯修改為僅提示一次。
// @note         20-06-27 3.3.0 網站標題新消息提醒去除
// @note         20-06-24 3.2.9 控制台文字可以點擊了，修改自動版式描述語義
// @note         20-06-24 3.2.8 屏幕尺寸選擇，控制台版式修改，若干問題修復
// @note         20-06-23 3.2.7 右側欄滾動條顯示方式優化
// @note         20-06-23 3.2.6 文章居中模式可選
// @note         20-06-22 3.2.5 右側沒有可顯示內容時，文章居中
// @note         20-06-22 3.2.4 文章居中
// @note         20-06-22 3.2.3 右側欄加入滾動條，腳本主頁URL修改，下載頁和主頁廣告去除
// @note         20-06-22 3.2.2 Dark Reader兼容模式，自動隱藏頂欄優化，熱門文章和最新評論卡片布局調整
// @note         20-06-21 3.2.1 腳本遷移版本迭代
// @note         20-06-21 3.1.9 增加自動隱藏底欄功能
// @note         20-06-21 3.1.8 增加自動隱藏頂欄功能，修復選項窗口被點贊長條擋住的Bug，選項窗口布局修改
// @note         20-06-20 3.1.7 設置窗口大小固定，增加打賞入口
// @note         20-06-19 3.1.6 顯示推薦內容按鈕回歸，新布局緊急修復
// @note         20-06-18 3.1.5 自定義功能更新
// @note         20-06-16 3.1.4 支持大部分功能模塊化顯示
// @note         20-06-14 3.1.3 綠化設定優化
// @note         20-06-14 3.1.2 ISSUE模板調整Support URL
// @note         20-06-14 3.1.1 增加搜博主文章模塊
// @note         20-06-13 3.1.0 修復設置過期的問題
// @note         20-06-12 3.0.9 標題回滾
// @note         20-06-12 3.0.8 主頁廣告刪除，綠化設置僅顯示在文章頁面，刪除頁腳，頂部優化，若干細節優化
// @note         20-06-11 3.0.7 增加官方QQ交流群，增加關閉強制白色主題功能
// @note         20-06-11 3.0.6 用戶名片功能優化
// @note         20-06-11 3.0.5 優化加載速度
// @note         20-06-10 3.0.4 修復設置界面遮擋的問題，顯示博主頭像
// @note         20-06-09 3.0.3 默認設定修改
// @note         20-06-09 3.0.2 修復推薦內容按鈕刷新不生效的問題，增加工具箱提示框
// @note         20-06-08 3.0.1 設置中心推出！增加瀏覽效果選項 && Green Book Icon Update
// @note         20-06-08 3.0.0 設置中心推出！增加瀏覽效果選項
// @note         20-06-07 2.4.2 設置解耦，下個版本搞配置中心
// @note         20-06-06 2.4.1 修復文章內容消失的問題
// @note         20-06-04 2.4.0 修復推薦按鈕錯位的問題
// @note         20-06-04 2.3.9 窄屏適配優化
// @note         20-06-04 2.3.8 黑夜模式出現問題，緊急回檔到 2.3.6
// @note         20-06-03 2.3.7 感謝 @AlexLWT 增加黑暗模式
// @note         20-06-02 2.3.6 AdsByGoogle 刪除
// @note         20-05-25 2.3.5 感謝 @RyanIPO 修復 Cannot read property 'replace' of undefined 報錯的問題
// @note         20-05-24 2.3.4 修復免登錄復制功能
// @note         20-05-22 2.3.3 Logo與背景同步
// @note         20-05-22 2.3.2 深度刪除背景
// @note         20-05-20 2.3.1 通過require使用NProgress
// @note         20-05-20 2.3.0 顯示推薦內容按鈕樣式內置，剔除CDN
// @note         20-05-17 2.2.9 進度條樣式更新，時間延時優化
// @note         20-05-17 2.2.8 更新腳本描述，展開評論的所有回復，刪除創作中心按鈕，加載進度條
// @note         20-05-17 2.2.7 更新腳本描述
// @note         20-05-16 2.2.6 修復第一次點擊顯示推薦內容無反應的問題
// @note         20-05-16 2.2.5 刪除搶沙發角標，修改顯示推薦內容按鈕樣式
// @note         20-05-16 2.2.4 感謝來自GitHub的朋友「HeronZhang」的Issue建議，刪除所有博客花裡胡哨的背景，主頁分類中廣告清除，CSS樣式控制寬度適配代碼優化
// @note         20-05-16 2.2.3 感謝來自GitHub的朋友「RetiredWorld」的代碼貢獻，使用CSS來控制樣式，而不是JS，增大靈活性。
// @note         20-05-13 2.2.2 屏蔽您的縮放不是100%的提示
// @note         20-04-29 2.2.1 感謝大家的支持，增加目錄顯示，自動判斷是否存在目錄調整頁面寬度，屏蔽新增廣告，歡迎大家體驗並提出意見！
// @note         20-04-15 2.2.0 一些廣告被其他插件屏蔽導致的異常無視之
// @note         20-03-30 2.1.9 干掉「記錄你的創作歷程」，干掉未登錄情況下的角標提醒
// @note         20-03-13 2.1.8 窄屏適配加強
// @note         20-03-13 2.1.7 更新簡介
// @note         20-03-12 2.1.6 寬度自適應（感謝來自GitHub的朋友LeonG7的建議）！修復剪貼板淨化無效的問題。
// @note         20-03-04 2.1.5 適配AdGuard
// @note         20-02-27 2.1.4 優化免登錄復制
// @note         20-02-25 2.1.3 免登錄復制更新，現已可用
// @note         20-02-24 2.1.2 By Github@JalinWang 更改去除剪貼板劫持的方式，使得原文格式在復制時能夠保留
// @note         20-02-22 2.1.1 緊急修復由於 CSDN 修改前端結構導致的文章錯位
// @note         20-02-11 2.1.0 若干動畫優化，視覺體驗更流暢
// @note         20-02-06 2.0.9 武漢加油！修改推薦內容切換開關位置，減少違和感
// @note         20-01-17 2.0.8 去除右側廣告
// @note         20-01-17 2.0.7 感謝來自GitHub的朋友「gleans」的建議，去掉頁頭廣告
// @note         19-12-12 2.0.6 感謝來自GitHub的朋友「yexuesong」的建議，將作者信息在文章頂部展示
// @note         19-10-30 2.0.5 美化隱藏按鈕，增加點擊動畫
// @note         19-10-30 2.0.4 刪除CSDN官方在主頁推送的文章（大多是廣告）
// @note         19-10-30 2.0.3 添加更多屏蔽腳本
// @note         19-10-30 2.0.0 祝自己生日快樂~完全重寫CSDNGreener，統一使用JQuery，效率更高
// @note         19-10-27 1.5.2 刪除分享海報提示&&感謝GitHub的朋友「CHN-STUDENT」的反饋，去除底部課程推薦
// @note         19-10-27 1.5.1 感謝來自GitHub的朋友「CHN-STUDENT」的細致復現反饋，去除了底部的課程推薦廣告
// @note         19-10-04 1.5.0 移除了底部主題信息和打賞
// @note         19-09-10 1.4.9 感謝來自GitHub的朋友「programmerZe」的細致復現反饋，修復了評論區點擊查看回復後，已經展開的評論會收起的問題
// @note         19-09-04 1.4.8 感謝來自GitHub的朋友「dwdcth」的細致復現反饋，現在查看原創文章不會無限彈登錄窗口了，且加強了自動展開功能
// @note         19-08-20 1.4.7 感謝油叉用戶「SupremeSir」的反饋，修復了右側懸浮欄遮擋文章的問題
// @note         19-08-14 1.4.6 無語。剛更新的免登錄復制，又改了。修復！
// @note         19-08-13 1.4.5 更新了獨家功能：免登錄復制
// @note         19-08-13 1.4.4 感謝來自GitHub的朋友「iamsunxing」的反饋，修復了頂部不貼邊的問題
// @note         19-08-01 1.4.3 感謝油叉用戶「ddddy」的反饋，去除了更多推廣廣告
// @note         19-07-30 1.4.2 感謝油叉用戶「周義傑」的反饋，增加了防CSDN外鏈重定向的功能（CSDN臭流氓）
// @note         19-07-20 1.4.1 修復了推薦內容開關跨文章無效問題（忘了配置Cookie作用域）
// @note         19-07-19 1.4.0 1. 構架大更新 2. 感謝來自GitHub的朋友"lukemin"的反饋，加入了下方推薦內容是否隱藏開關（實用）
// @note         19-07-13 1.3.0 感謝來自GitHub的朋友「Holaplace」的反饋，修復了文章無法自動展開的問題（CSDN總改這個，令人頭疼）
// @note         19-06-08 1.2.6 感謝油叉用戶「DeskyAki」的反饋，修復了文章無法自動展開的問題
// @note         19-06-07 1.2.4 修復了登錄後評論無法正常打開的問題
// @note         19-06-07 1.2.3 感謝油叉用戶"永遠的殿下"的反饋，在一上午的努力攻克下，終於實現了未登錄展開評論的語句
// @note         19-06-05 1.2.0 修復了評論無法自動展開的BUG
// @note         19-06-04 1.1.9 修復了無法自動展開的BUG（自閉了）
// @note         19-06-04 1.1.6 CSDN太壞了，把「消息」按鈕的Class設置成了「GitChat」，所以修復了「消息」按鈕消失的問題
// @note         19-06-04 1.1.5 1. 優化了論壇體驗 2.美化、優化代碼結構
// @note         19-06-04 1.1.4 感謝來自GitHub的朋友「iamsunxing」的反饋，增加了論壇廣告匹配規則
// @note         19-06-03 1.1.3 感謝來自GitHub的朋友「wangwei135」的反饋，去除了評論區上方的廣告
// @note         19-05-27 1.1.2 感謝油叉用戶「夏偉傑」的反饋，修復了富文本編輯器無法使用的問題
// @note         19-05-25 1.1.0 1. 修復了主頁廣告的問題 2. 論壇自動展開 3. 論壇廣告消除
// @note         19-05-25 1.0.9 感謝油叉用戶「渣渣不准說話」的反饋，修復了收藏按鈕消失的問題
// @note         19-03-01 1.0.3 添加頁面選擇性過濾規則
// @note         19-03-01 1.0.2 增加了淨化剪貼板功能
// @note         19-03-01 1.0.1 修復了排版問題, 優化了代碼結構
// @note         19-02-26 1.0.0 初版發布
// ==/UserScript==
var version = "4.1.0";
var currentURL = window.location.href;
if (currentURL.indexOf("?") !== -1) {
    currentURL = currentURL.substring(0, currentURL.indexOf("?"));
}
var list;
var windowTop = 0;
var startTimeMilli = Date.now();
var stopTimeMilli = 0;
// 配置控制類
class Config {
    get(key, value) {
        var cookie = $.cookie(key);
        if (cookie == undefined) {
            new Config().set(key, value);
            console.debug("Renew key: " + key + " : " + value);
            return value;
        }
        console.debug("Read key: " + key + " : " + cookie);
        if (cookie === "true") { return true; }
        if (cookie === "false") { return false; }
        return cookie;
    }

    getS(key, value) {
        var cookie = $.cookie(key);
        if (cookie == undefined) {
            new Config().set(key, value);
            console.debug("Renew key: " + key + " : " + value);
            return value;
        }
        console.debug("Read key: " + key + " : " + cookie);
        return cookie;
    }

    set(setKey, setValue) {
        $.cookie(setKey, setValue, {
            path: '/',
            expires: 365
        });
        console.debug("Key set: " + setKey + " : " + setValue);
    }

    listenButton(element, listenKey, trueAction, falseAction) {
        $(element).click(function () {
            let status = new Config().get(listenKey, true);
            console.debug("Status: " + status);
            if (status === "true" || status) {
                console.debug("Key set: " + listenKey + " :: " + false);
                new Config().set(listenKey, false);
            } else {
                console.debug("Key set: " + listenKey + " :: " + true);
                new Config().set(listenKey, true);
            }
        });
    }

    listenButtonAndAction(element, listenKey, trueAction, falseAction) {
        $(element).click(function () {
            let status = new Config().get(listenKey, true);
            console.debug("Status: " + status);
            if (status === "true" || status) {
                console.debug("Key set: " + listenKey + " :: " + false);
                new Config().set(listenKey, false);
                falseAction();
            } else {
                console.debug("Key set: " + listenKey + " :: " + true);
                new Config().set(listenKey, true);
                trueAction();
            }
        });
    }
}
var config = new Config();
var progress = 0;
class Progress {
    init() {
        progress = 0;
        NProgress.start();
        $("#greenerProgress").text("綠化中...");
        $(".toolbar-search").hide();
    }

    setProgress(p) {
        progress = p;
        $("#greenerProgress").text(progress + "%");
        NProgress.set(progress / 100);
        console.log(progress + "%");
    }

    incProgress(p) {
        progress = progress + p;
        progress = progress > 100 ? 100 : progress;
        $("#greenerProgress").text(progress + "%");
        NProgress.set(progress / 100);
        console.log(progress + "%");
    }

    done() {
        progress = 100;
        NProgress.done();
        $("#greenerProgress").html(protect_svg + ' CSDNGreener 正在守護您的瀏覽體驗');
        setTimeout(function() {
            $("#greenerProgress").fadeOut(500);
            setTimeout(function() {
                $(".toolbar-search").fadeIn(500);
                if (!isFirefox()) {
                    // 提示
                    let tipsCookie = config.get("showTip", true);
                    if (tipsCookie) {
                        showTips();
                    }
                    config.set("showTip", false);
                }
            }, 500);
        }, 1500);
    }
}
var progressor = new Progress();

// 自定義 CSS
// 進度條
$('head').append("<style>#nprogress{pointer-events:none}#nprogress .bar{background:#f44444;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #f44444,0 0 5px #f44444;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#f44444;border-left-color:#f44444;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>");
// 設置窗口
$('head').append("<style>.black_overlay{top:0%;left:0%;width:100%;height:100%;background-color:#000;z-index:1001;-moz-opacity:0.8;opacity:.10;filter:alpha(opacity=88)}.black_overlay,.white_content{display:none;position:absolute}.white_content{z-index:9999!important;top:25%;left:25%;width:650px;height:60%;padding:20px;border:0px;background-color:rgba(255,255,255,0.9);z-index:1002;overflow:auto}</style>");
// 提示條
$('head').append("<style>.tripscon{padding:10px}</style>");
// 按鈕（舊）
$('head').append("<style>#toggle-button{display:none}.button-label{position:relative;display:inline-block;width:82px;background-color:#ccc;border:1px solid #ccc;border-radius:30px;cursor:pointer}.circle{position:absolute;top:0;left:0;width:30px;height:30px;border-radius:50%;background-color:#fff}.button-label .text{line-height:30px;font-size:18px;-webkit-user-select:none;user-select:none}.on{color:#fff;display:none;text-indent:10px}.off{color:#fff;display:inline-block;text-indent:53px}.button-label .circle{left:0;transition:all .3s}#toggle-button:checked+label.button-label .circle{left:50px}#toggle-button:checked+label.button-label .on{display:inline-block}#toggle-button:checked+label.button-label .off{display:none}#toggle-button:checked+label.button-label{background-color:#78d690}</style>");
// 保存按鈕
$('head').append("<style>.saveButton{background-color:#19a4ed;border:none;color:#fff;padding:5px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;cursor:pointer}</style>");
// Star 樣式
$('head').append("<style>.giveMeOneStar:hover{color:#FF69B4;}</style>");
// 設置窗口文字效果
if (isFirefox()) {
    $('head').append("<style>.configContainer label{font-size:15px}.configContainer p{font-size:15px}.giveMeOneStar{font-size:15px}.configContainer .title{font-size:20px}.configContainer .bold{font-weight:bold;margin-bottom:5px}</style>");
} else {
    $('head').append("<style>.configContainer label{font-size:5px}.configContainer p{font-size:10px}.giveMeOneStar{font-size:15px}.configContainer .title{font-size:20px}.configContainer .bold{font-weight:bold;margin-bottom:5px}</style>");
}
// SVG
//var save_svg = '<svg t="1595082650173" class="icon" viewBox="0 0 1075 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2078" width="140" height="140"><path d="M753.763902 685.830244a48.952195 48.952195 0 0 1 49.152-48.702439c81.420488 0 141.162146-65.386146 141.162147-146.057366 0-43.507512-13.037268-82.419512-43.457561-109.243317a142.360976 142.360976 0 0 0-20.280195-14.935415 158.045659 158.045659 0 0 0-11.239025-6.243902l-2.747317-1.298732a155.847805 155.847805 0 0 0-9.191024-3.996097c-1.348683-0.549463-2.697366-0.999024-4.096-1.498537a152.35122 152.35122 0 0 0-8.491707-2.847219c-1.948098-0.599415-3.896195-0.999024-5.844293-1.498537-2.497561-0.599415-4.945171-1.24878-7.492683-1.748293-2.597463-0.499512-5.34478-0.899122-8.042146-1.24878-1.948098-0.249756-3.846244-0.599415-5.844293-0.79922a153.150439 153.150439 0 0 0-14.435903-0.749268c-1.498537 0-2.997073 0.199805-4.545561 0.249756a265.390829 265.390829 0 0 0-5.594536-24.526049c-0.499512-1.998049-1.298732-3.846244-1.898146-5.844292a267.438829 267.438829 0 0 0-5.944196-17.982439c-0.649366-1.798244-1.498537-3.496585-2.197853-5.29483a283.123512 283.123512 0 0 0-7.742439-17.732683L772.745366 269.736585a282.973659 282.973659 0 0 0-9.790439-17.832585C714.302439 171.582439 625.88878 124.878049 524.487805 124.878049c-101.400976 0-189.914537 46.654439-238.517073 126.976-3.496585 5.794341-6.693463 11.788488-9.790439 17.832585l-2.197854 4.096a283.523122 283.523122 0 0 0-7.742439 17.732683l-2.197854 5.244878c-2.247805 5.894244-4.145951 11.988293-5.994146 18.03239-0.549463 1.998049-1.298732 3.846244-1.848195 5.844293a266.739512 266.739512 0 0 0-5.594537 24.476098c-1.498537 0-2.997073-0.199805-4.545561-0.199805-4.89522 0-9.690537 0.299707-14.485853 0.749268-1.998049 0.199805-3.846244 0.499512-5.794342 0.79922-2.697366 0.349659-5.444683 0.699317-8.092097 1.24878-2.497561 0.499512-4.995122 1.148878-7.492683 1.748293-1.898146 0.499512-3.846244 0.899122-5.794342 1.498536a153.649951 153.649951 0 0 0-8.491707 2.797269l-4.096 1.498536a164.289561 164.289561 0 0 0-9.240976 3.996098l-2.697366 1.348683a145.557854 145.557854 0 0 0-31.469268 21.179317C117.884878 408.600976 104.897561 447.562927 104.897561 491.070439c0 80.67122 59.741659 146.057366 141.162146 146.057366a48.952195 48.952195 0 0 1 49.152 48.702439 48.952195 48.952195 0 0 1-49.152 48.702439c-135.717463 0-245.710049-108.993561-245.710048-243.462244 0-109.692878 73.228488-202.402341 173.830243-232.872585A375.832976 375.832976 0 0 1 524.487805 20.330146a375.882927 375.882927 0 0 1 350.307902 237.867708c100.601756 30.470244 173.830244 123.179707 173.830244 232.872585 0 134.468683-109.992585 243.462244-245.710049 243.462244a48.952195 48.952195 0 0 1-49.102048-48.702439z" p-id="2079"></path><path d="M487.973463 386.122927a49.102049 49.102049 0 0 1 72.928781 0.099902l147.356097 162.041756c6.993171 7.742439 11.48878 19.431024 12.537757 30.120586l0.249756 12.937366c0 19.480976-20.48 39.661268-39.211708 39.661268h-104.897561v262.993171a52.44878 52.44878 0 1 1-104.897561 0v-262.993171h-104.897561c-13.886439 0-39.211707-21.72878-39.211707-39.661268v-12.987317c0-12.487805 4.795317-21.27922 12.637659-29.920781l147.356097-162.291512z" p-id="2080"></path></svg>';
var star_svg_1 = '<svg t="1595083631685" class="icon" viewBox="0 0 1051 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2173" width="140" height="140"><path d="M525.837838 852.410811L199.264865 1001.859459l41.513513-357.016216L0 381.924324l351.481081-69.189189L525.837838 0l174.356757 312.735135L1051.675676 381.924324l-240.778379 262.918919 41.513514 357.016216z" fill="#FFD566" p-id="2174"></path></svg>';
var star_svg_2 = ' <svg t="1595083715312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7848" width="140" height="140"><path d="M1014.001347 866.090236L810.23569 662.324579l145.497643-84.126599c11.377778-6.550842 17.92862-18.962963 16.894276-32.064647-1.034343-13.101684-9.309091-24.479461-21.376431-29.306397l-648.188552-258.585859c-12.756902-5.171717-27.23771-2.068687-36.891582 7.585186-9.653872 9.653872-12.756902 24.13468-7.585185 36.891582l258.585858 648.533333c4.826936 12.06734 16.204714 20.686869 29.306397 21.376431 13.101684 1.034343 25.513805-5.516498 32.064647-16.894276l84.126599-145.497643 203.765657 203.765657c6.550842 6.550842 15.17037 9.998653 24.13468 9.998653 8.96431 0 17.92862-3.447811 24.13468-9.998653l99.29697-99.29697c13.446465-13.446465 13.446465-35.167677 0-48.614141zM150.324579 102.055219c-13.446465-13.446465-35.167677-13.446465-48.26936 0-13.446465 13.446465-13.446465 35.167677 0 48.26936l76.196633 76.196633c6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653c13.446465-13.446465 13.446465-35.167677 0-48.26936L150.324579 102.055219zM176.183165 338.575084c0-18.962963-15.17037-34.133333-34.133333-34.133333H34.133333c-18.962963 0-34.133333 15.17037-34.133333 34.133333s15.17037 34.133333 34.133333 34.133334h107.571718c18.962963 0 34.478114-15.17037 34.478114-34.133334zM162.391919 444.422896l-76.196633 75.851851c-13.446465 13.446465-13.446465 35.167677 0 48.269361 6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653l76.196633-76.196633c13.446465-13.446465 13.446465-35.167677 0-48.269361-13.446465-13.101684-35.167677-13.101684-48.26936 0.344782zM338.575084 176.183165c18.962963 0 34.133333-15.17037 34.133334-34.133333V34.133333c0-18.962963-15.17037-34.133333-34.133334-34.133333s-34.133333 15.17037-34.133333 34.133333v107.571718c0 18.962963 15.17037 34.478114 34.133333 34.478114zM468.557576 220.659933c8.619529 0 17.583838-3.447811 24.13468-9.998654L568.888889 134.464646c13.446465-13.446465 13.446465-35.167677 0-48.26936-13.446465-13.446465-35.167677-13.446465-48.26936 0l-76.196633 76.196633c-13.446465 13.446465-13.446465 35.167677 0 48.26936 6.550842 6.550842 15.515152 9.998653 24.13468 9.998654z" fill="#2c2c2c" p-id="7849"></path></svg>';
var star_svg_3 = ' <svg t="1595083925438" class="icon" viewBox="0 0 1204 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4809" width="140" height="140"><path d="M1088.864348 618.13701a1555.009384 1555.009384 0 0 1-150.273004 167.137308c-52.881642 51.195212-107.931552 101.18583-163.643989 147.261521-33.849069 27.524955-60.229661 48.665566-76.190521 60.229661a162.981462 162.981462 0 0 1-191.891699 0c-15.539253-12.045932-42.160763-32.644476-76.190521-60.831957a2638.480754 2638.480754 0 0 1-164.366745-147.261521 1579.101249 1579.101249 0 0 1-150.273004-165.812257A468.104924 468.104924 0 0 1 0.152998 344.754579 315.543193 315.543193 0 0 1 109.048225 96.367457a399.443111 399.443111 0 0 1 493.883219-20.478084 398.660125 398.660125 0 0 1 493.883219 20.478084A315.482964 315.482964 0 0 1 1204.746215 343.309067a466.840101 466.840101 0 0 1-115.701178 274.647254z" fill="#FE4B83" p-id="4810"></path></svg>';
var star_svg_4 = ' <svg t="1595084089115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8008" width="140" height="140"><path d="M512 46.545455C256 46.545455 46.545455 256 46.545455 512s209.454545 465.454545 465.454545 465.454545 465.454545-209.454545 465.454545-465.454545S768 46.545455 512 46.545455z m0 837.818181c-204.8 0-372.363636-167.563636-372.363636-372.363636s167.563636-372.363636 372.363636-372.363636 372.363636 167.563636 372.363636 372.363636-167.563636 372.363636-372.363636 372.363636z" fill="#00C5C5" p-id="8009"></path><path d="M656.290909 586.472727c-79.127273 69.818182-209.454545 69.818182-288.581818 0-18.618182-13.963636-41.890909-13.963636-60.509091 4.654546-13.963636 13.963636-13.963636 41.890909 4.654545 60.509091 55.854545 51.2 125.672727 74.472727 200.145455 74.472727s144.290909-27.927273 200.145455-74.472727c18.618182-13.963636 18.618182-41.890909 4.654545-60.509091s-41.890909-18.618182-60.509091-4.654546zM358.4 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-55.854545-51.2-55.854545c-27.927273 0-51.2 23.272727-51.2 51.2s23.272727 55.854545 51.2 55.854545zM665.6 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-51.2-51.2-51.2-51.2 23.272727-51.2 51.2 23.272727 51.2 51.2 51.2z" fill="#00C5C5" p-id="8010"></path></svg>';
var star_svg = star_svg_1 + star_svg_2 + star_svg_3 + star_svg_4;
var donate_svg = '<svg t="1592982508258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4207" width="32" height="32"><path d="M664.48 234.432a32 32 0 0 0-45.248-0.8l-76.256 73.6-73.344-73.216a32 32 0 1 0-45.248 45.312l72.384 72.256h-49.28a32 32 0 0 0 0 64h63.776v32h-63.776a32 32 0 0 0 0 64h63.776v65.664a32 32 0 1 0 64 0v-65.664h64.288a32 32 0 1 0 0-64h-64.288v-32h64.288a32 32 0 1 0 0-64h-50.368l74.464-71.872a32.032 32.032 0 0 0 0.832-45.28z m275.2 503.552a9017.568 9017.568 0 0 0-141.664-56.736 368.512 368.512 0 0 0 97.568-248.608c0-202.912-165.12-368-368.064-368s-368 165.088-368 368c0 16.224 1.024 32.352 3.072 47.968 2.304 17.504 18.496 29.664 35.904 27.584a32 32 0 0 0 27.584-35.904 304.512 304.512 0 0 1-2.56-39.648c0-167.616 136.384-304 304-304 167.648 0 304.064 136.384 304.064 304a300.544 300.544 0 0 1-96.128 221.472c-0.768 0.736-1.088 1.76-1.824 2.528-42.848-15.936-79.328-28.48-93.76-30.656-24.896-3.904-48.672 7.616-63.104 28.896-12.032 17.792-15.072 38.816-8.096 56.256 4.288 10.656 20.512 32.896 39.776 57.28-46.432-0.064-117.312-6.336-192.832-35.488-31.264-12.064-69.44-52.64-103.136-88.416-47.968-50.976-93.28-99.104-142.56-99.104-18.336 0-35.744 6.848-50.336 19.776-18.24 16.224-35.136 48.32-12 109.248 42.624 112.16 208.544 285.12 341.728 285.12h478.144a32 32 0 0 0 32-32v-160a31.84 31.84 0 0 0-19.776-29.568z m-44.16 157.6h-445.12l-1.024 32v-32c-97.6 0-247.072-152.128-281.92-243.872-10.112-26.656-6.72-37.408-5.344-38.624 4.128-3.648 6.528-3.648 7.84-3.648 21.632 0 64.608 45.632 95.968 78.944 40.224 42.752 81.856 86.944 126.656 104.256 85.216 32.896 164.896 39.808 216.736 39.808 41.376 0 67.584-4.352 68.672-4.544a32 32 0 0 0 19.136-52.16c-27.008-32.096-58.592-71.808-67.296-85.344 0.288-0.576 0.512-1.024 0.352-1.152 22.848 3.488 162.432 57.952 265.28 99.84v106.496z" p-id="4208"></path></svg>';
var set_svg = '<svg t="1592982970375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10112" width="48" height="48"><path d="M256 102.4h512l256 256-512 563.2L0 358.4z" fill="#26CD63" p-id="10113"></path><path d="M256 102.4l256 256H0zM768 102.4l256 256H512zM512 921.6l204.8-563.2H307.2z" fill="#14A345" p-id="10114"></path></svg>';
var save_svg = '<svg t="1629448588351" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7849" width="200" height="200"><path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m0 945.2C273.1 945.2 78.8 750.9 78.8 512S273.1 78.8 512 78.8 945.2 273.1 945.2 512 750.9 945.2 512 945.2z" p-id="7850" fill="#ffffff"></path><path d="M680.9 359.4L461 582.3 341.6 473.6c-16-14.6-41-13.4-55.6 2.6-14.7 16.1-13.5 41 2.6 55.6L436 666.1c7.5 6.8 17 10.2 26.5 10.2 10.2 0 20.3-3.9 28-11.7L737 414.7c15.3-15.5 15.1-40.4-0.4-55.7-15.5-15.2-40.5-15.1-55.7 0.4z" p-id="7851" fill="#ffffff"></path></svg>';
var settings_svg = '<svg t="1629433360462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2870" width="200" height="200"><path d="M1006.438 17.548c-0.032 0-430.43-112.966-780.45 237.022-288.99 289.008-33.522 576.966-33.522 576.966s287.958 255.484 576.952-33.55C1119.436 448.012 1006.468 17.612 1006.438 17.548z" fill="#9ED36A" p-id="2871"></path><path d="M1006.438 17.548l-42.674-8.216c0.032 0.062 112.998 438.678-236.99 788.652-96.344 96.406-192.598 132.208-278.104 137.144 95.41 5.5 208-24.368 320.748-137.144C1119.436 448.012 1006.468 17.612 1006.438 17.548z" fill="#FFFFFF" opacity=".2" p-id="2872"></path><path d="M600.406 423.612c-8.308-8.34-21.836-8.34-30.148 0L6.4 987.426c-8.326 8.372-8.326 21.868 0 30.18 8.326 8.308 21.822 8.308 30.162 0L600.406 453.76c8.34-8.342 8.34-21.838 0-30.148z" fill="#8AC054" p-id="2873"></path></svg>';
var protect_svg = '<svg t="1629560538805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3212" width="200" height="200"><path d="M800.3 205.1L534.8 116c-16-5.4-33.3-5.3-49.2 0.2l-264.5 92.3c-29.3 10-49 37.5-49.1 68.4l1.7 265.4c0.7 81 31.1 158.9 85.6 218.9 25 27.7 56.9 51.5 97.8 72.7l144 74.6c9 4.7 19.7 4.6 28.7-0.2L672.5 832c40.4-21.6 72.2-45.7 96.9-73.8 53.6-60.6 83-138.9 82.6-219.8l-1.7-265.6c-0.5-30.9-20.5-58.1-50-67.7z" fill="#07C160" p-id="3213"></path><path d="M474.1 652c-7.1 0-13.8-2.8-18.9-7.8l-151-151.1c-10.4-10.4-10.4-27.4 0-37.8s27.4-10.4 37.8 0l132.1 132.2 207.7-207.7c10.4-10.4 27.4-10.4 37.8 0 10.4 10.4 10.4 27.4 0 37.8L493 644.2c-5 5-11.8 7.8-18.9 7.8z" fill="#FFFFFF" p-id="3214"></path></svg>';

// jquery.showtips.js
(function(jQuery) {
	jQuery.fn.showTips = function(options,elem){
		var config = {
			skin:"trips",
			content:$(this).attr("tips")||"彈出類型的氣泡提示！",  //氣泡提示內容裡面可以是HTML，默認顯示自定義的提示內容
			width:"auto",  //默認為auto，可以寫具體尺寸如：200
			alignTo:["right","center"],  //箭頭方向
			color:["rgb(247, 206, 57)","#FFFEF4"],  //這裡是提示層的風格，第一個參數為提示邊框顏色，第二個參數為提示背景顏色
			type:"html",   //顯示內容類型
			trigger:"click",    //默認為點擊顯示，show為初始化就顯示，hover為經過顯示，focus焦點顯示，mouse跟隨鼠標顯示隱藏
			spacing:10,  //默認為箭頭距離對象的尺寸
			customid:"",  //自定義ID
			isclose:false,   //是否顯示關閉按鈕
			success : null    //成功後的回調函數
		};
		var opts = jQuery.extend(config, options);
		return this.each(function(){
			var that = jQuery(this),tipBox,tipId,selfH,selfW,conId,docW, spa = opts.spacing, skin=opts.skin;
			var Mathrandom = Math.floor(Math.random() * 9999999);
            var pmr = (opts.customid=="") ? Mathrandom :opts.customid.replace(/[#.]/, "");
			var pointer=opts.alignTo.length===1 ? ''+opts.alignTo[0]+'' : ''+opts.alignTo[0]+'-'+opts.alignTo[1]+'';

			if(typeof elem == 'string') {
				if(elem =="show"){
					jQuery('#tip'+pmr).show();  jQuery("#con"+pmr).html(opts.content);
					showPosition(pointer,jQuery('#tip'+pmr));
					};
				if(elem =="hide"){jQuery('#tip'+pmr).hide()};
			};
			if(typeof elem == '' || typeof elem == undefined){return true};
			if(jQuery('#tip'+pmr).length==1){return false;}
			tipBox=jQuery('<div class="'+skin+' '+skin+'-'+pointer+'" id="tip'+pmr+'"><i></i><em></em><div class="'+skin+'con" id="con'+pmr+'"></div></div>').appendTo(document.body);
			tipId = jQuery("#tip"+pmr);
			conId = jQuery("#con"+pmr);

			var edgecolor='border-'+opts.alignTo[0]+'-color', tfi=tipId.find("i"), tfem=tipId.find("em"), tfiem=tipId.find("i,em");
			tipId.css({'position':'absolute',border:'1px solid','border-color':opts.color[0],'background-color':opts.color[1]});
			if(opts.alignTo[1]=='center'){ var offpos=50,percen="%"; }else{ var offpos=5,percen="px"; };
			tfiem.css({width:0,height:0,content:'','position':'absolute'})
			tfi.css({border:'8px solid transparent','z-index':5});
			tfem.css({border:'7px solid transparent','z-index':10});
			switch (pointer) {
				case 'top-center':
				case 'bottom-center':
				case 'top-left':
				case 'bottom-left':
					var poi="left";
					if(pointer=='top-center' || pointer=='bottom-center'){
						tfi.css({"margin-left":"-8px"});
						tfem.css({"margin-left":"-7px"});
					}
				    break;
				case 'left-center':
				case 'right-center':
				case 'left-top':
				case 'right-top':
					var poi="top";
					if(pointer=='left-center' || pointer=='right-center'){
						tfi.css({"margin-top":"-8px"});
						tfem.css({"margin-top":"-7px"});
					}
				    break;
				default:
					var poi="right";
				    break;
			};

			if(pointer=='follow'){
				tfi.css({'border-bottom-color':opts.color[0],left:''+offpos+percen+'',bottom:'100%'});
				tfem.css({'border-bottom-color':opts.color[1],left:''+(offpos+(opts.alignTo[1]=='center'?0:1))+percen+'',bottom:'100%'});
			}else{
				tfi.css(edgecolor,opts.color[0]).css(poi,''+offpos+percen+'');
				tfem.css(edgecolor,opts.color[1]).css(poi,''+(offpos+(opts.alignTo[1]=='center'?0:1))+percen+'');
				tfiem.css(opts.alignTo[0],'100%');
			};

			switch (opts.type) {
				case 'html':conId.html(opts.content); break;
				case 'id'  :
				    var tempid=jQuery(opts.content) ,wrap = document.createElement("div");
					if(tempid.css("display") == "none"){  tempid.css({display:"block"}); }
					conId.append(tempid);
				    break;
			};
			if(opts.isclose){
				jQuery('<span class="'+skin+'close" id="close'+pmr+'">&times;</span>').appendTo(tipId);
				tipId.find("#close"+pmr+"").on("click",function(){tipId.hide();});
			}

			if(typeof opts.width === 'string'){
				docW = parseInt(document.body.clientWidth*(opts.width.replace('%','')/100));
				(typeof opts.width == 'auto' || typeof opts.width == '') ? tipBox.css({width:'auto'}) : tipBox.css({width:docW});
				tipBox.height();
			}else{
				tipBox.width(opts.width).height();
			}
            function showPosition(pointer,cell){
				var selfH = that.outerHeight(true), selfW = that.outerWidth(true);
				var post=that.offset().top, posl=that.offset().left;
				var tipCell=(cell=="" || cell==undefined) ? tipId : cell;
			    var tipH=tipCell.outerHeight(true), tipW=tipCell.outerWidth(true);

				switch (pointer) {
					case 'top-left': tipCell.css({top:post-tipH-spa,left:posl}); break;
					case 'top-center': tipCell.css({top:post-tipH-spa,left:posl-(tipW/2)+(selfW/2)}); break;
					case 'top-right': tipCell.css({top:post-tipH-spa,left:posl-(tipW-selfW)}); break;
					case 'bottom-left': tipCell.css({top:post+selfH+spa,left:posl}); break;
					case 'bottom-center': tipCell.css({top:post+selfH+spa,left:posl-(tipW/2)+(selfW/2)}); break;
					case 'bottom-right': tipCell.css({top:post+selfH+spa,left:posl-(tipW-selfW)}); break;
					case 'left-top': tipCell.css({top:post,left:posl-tipW-spa}); break;
					case 'left-center': tipCell.css({top:post-(tipH/2)+(selfH/2),left:posl-tipW-spa}); break;
					case 'right-top': tipCell.css({top:post,left:posl+selfW+spa}); break;
					case 'right-center': tipCell.css({top:post-(tipH/2)+(selfH/2),left:posl+selfW+spa}); break;
					case 'follow': that.mousemove(function(e) { tipCell.css({top:e.pageY + 30,left:e.pageX - 6}); }); break;
				};
			}
			tipBox.hide();
			switch (opts.trigger){
				case 'show':showPosition(pointer);tipBox.show();break;
                case 'click':that.click(function(){showPosition(pointer);tipBox.show();});break;
				case 'hover':that.hover(function(){showPosition(pointer);tipBox.show(); tipBox.on("mouseover",function(){jQuery(this).show()}).on("mouseout",function(){jQuery(this).hide()})},function(){tipBox.hide();});break;
				case 'focus':that.focus(function(){showPosition(pointer);tipBox.show();});  that.blur(function(){tipBox.hide();});break;
				case 'mouse':that.hover(function(){showPosition(pointer);tipBox.show();},function(){tipBox.hide();});break;
			};
			setTimeout(function(){opts.success && opts.success();}, 1);
		});
	}
})(jQuery);

(function () {
    'use strict';

    l("CSDNGreener V" + version);
    if (isFirefox()) {
        console.log("您正在使用火狐瀏覽器，將使用兼容模式運行 CSDNGreener。");
    }
    progressor.init();

    // 綠化設定按鈕點擊事件
    let jss = "";
    jss += "<script>function showConfig() {";
    jss += "$(window).scrollTop(0);";
    jss += "$('.white_content').fadeIn(500);";
    jss += "$('body').css('overflow', 'hidden');";
    jss += "$('body').css('filter','blur(3px)');";
    jss += "$('body').css('pointer-events','none')";
    jss += "}</script>";
    $("body").append(jss);

    // 保存按鈕點擊事件
    let saveJss = "";
    saveJss += "<script>function saveAndReload() {";
    saveJss += "$('#configContent').fadeOut(200);";
    saveJss += "setTimeout(function() {location.reload();},200)";
    saveJss += "}</script>";
    $("body").append(saveJss);

    setTimeout(function() {
        var blockURL = currentURL.split("/").length;
        var main = /(www\.csdn\.net\/)$/;
        var mainNav = /nav/;
        var article = /article/;
        var bbs = /bbs\.csdn\.net/;
        var blog = /blog\.csdn\.net/;
        var blog2 = /\/article\/list\//;
        var download = /download\.csdn\.net/;
        var login = /passport\.csdn\.net/;
        var zone = /me\.csdn\.net/;
        var other = /(www\.csdn\.net\/)/;
        var mp = /mp\.csdn\.net/;

        // 數組初始化
        list = [];
        // 頭部分
        // APP
        // put(".app-app");
        // VIP
        put(".vip-caise");
        // 記錄你的成長歷程（記個毛）
        put("#writeGuide");
        // 新通知小圓點（未登錄才消掉）
        if ($(".userinfo a").text() === '登錄/注冊') {
            put("#msg-circle");
        }
        // 頂部谷歌廣告
        put(".adsbygoogle");
        // 懸浮在頂欄按鈕上出現的二維碼
        put(".appControl");
        // 頂部廣告
        put(".advert-bg");

        if (main.test(currentURL) || mainNav.test(currentURL)) {
            l("正在優化主頁體驗...");
            // 常規
            // 頭部廣告
            put(".banner-ad-box");
            // 嵌入廣告
            put("#kp_box_211");
            // 右側廣告
            put(".slide-outer");
            // 右側詳情
            put(".persion_article");
            // 右側推薦
            $(".feed_company").parent().remove();
            // 廣告輪播
            put(".el-carousel__container");
            // 頂部橫幅
            put(".toolbar-advert");
            // 頂欄VIP選項
            $('.toolbar-subMenu-box').find("[href='https://mall.csdn.net/vip']").parent().remove();
            // CSDN工具廣告
            put("#floor-ad_64");
            clean(10);
            // common(5, 10);
            // 博客及主頁優化
            common(9, 10);
            loop(3);
            loop(1);
        } else if ((blog.test(currentURL) && blockURL === 4) || blog2.test(currentURL)) {
            l("正在優化個人博客主頁體驗...");
            // 常規
            // 頭部廣告
            put(".banner-ad-box");
            // 右側廣告
            put(".slide-outer");
            // 右側詳情
            put(".persion_article");
            // 左側廣告
            put(".mb8");
            put("#kp_box_503");
            put("#kp_box_214");
            clean(10);
            // common(5, 10);
            loop(3);
            loop(1);
        } else if (article.test(currentURL) && !mp.test(currentURL)) {
            l("正在優化閱讀體驗...");
            // 綠化設定
            if (isFirefox()) {
                setTimeout(function() {
                    $(".toolbar-container-middle").prepend("<div id='greenerProgress' style='text-align:right'></div>");
                    let htmlOf0 = '<div class="toolbar-btn csdn-toolbar-fl"><a id="greenerSettings" title="點擊打開 CSDNGreener 綠化設定" href="javascript:void(0)" onclick="showConfig();">' + settings_svg + '</a></div>';
                    $(".toolbar-btns").prepend(htmlOf0);
                    if (isFirefox()) {
                        // 提示
                        let tipsCookie = config.get("showTip", true);
                        if (tipsCookie) {
                            showTips();
                        }
                        config.set("showTip", false);
                    }
                }, 3000);
            } else {
                $(".toolbar-container-middle").prepend("<div id='greenerProgress' style='text-align:right'></div>");
                let htmlOf0 = '<div class="toolbar-btn csdn-toolbar-fl"><a id="greenerSettings" title="點擊打開 CSDNGreener 綠化設定" href="javascript:void(0)" onclick="showConfig();">' + settings_svg + '</a></div>';
                $(".toolbar-btns").prepend(htmlOf0);
            }
            // 常規
            // 右側廣告，放到第一個清除
            // put(".recommend-right");
            put("#addAdBox");
            // put(".aside-box.kind_person.d-flex.flex-column");
            put(".recommend-top-adbox");
            // put(".recommend-list-box.d-flex.flex-column.aside-box");
            // 左側廣告
            // put("#container");
            // 快來寫博客吧
            put(".blog_tip_box");
            // 推薦關注用戶
            put(".blog-expert-recommend-box");
            // 右下角VIP
            put(".meau-gotop-box");
            // 廣告
            put(".mediav_ad");
            put(".pulllog-box");
            put(".recommend-ad-box");
            put(".box-shadow");
            put(".type_hot_word");
            put(".fourth_column");
            // 高分辨率時右側文章推薦
            // put(".right-item");
            // 廣告
            put("#asideFooter");
            put("#ad-div");
            put("#479");
            put("#480");
            // 打賞
            put(".postTime");
            // 課程推薦
            put(".t0");
            // 分享海報
            put(".shareSuggest");
            // 底部主題
            put(".template-box");
            // 評論區廣告
            put("div#dmp_ad_58");
            // 打賞
            put(".reward-user-box");
            // 右側打賞按鈕
            put(".to-reward");
            // 推薦內容廣告
            put(".recommend-recommend-box");
            // 右側廣告
            put(".indexSuperise");
            // 搶沙發角標
            put(".comment-sofa-flag");
            // 頁jio
            put(".bottom-pub-footer");
            // 登錄查看未讀消息
            put(".toolbar-notice-bubble");
            // 右側廣告
            put(".recommend-top-adbox");
            // 右側四個廣告
            put(".programmer1Box");
            put(".programmer2Box");
            put(".programmer3Box");
            put(".programmer4Box");
            // 點贊氣泡
            put(".triplet-prompt");
            // 頂部橫幅
            put(".toolbar-advert");
            // 底部信息
            put(".blog-footer-bottom");
            // 右側欄廣告
            put("#6527");
            put("#recommendAdBox");
            // 推薦內容Title
            put(".recommend-tit-mod");
            // 紅包提醒
            put(".csdn-redpack-lottery-btn-box");
            // 學生認證
            put(".csdn-highschool-window");
            // 右側懸浮欄除置頂以外的按鈕
            put(".option-box[data-type='guide'],.option-box[data-type='cs'],.option-box[data-type='report'],.csdn-common-logo-advert");
            clean(10);
            setTimeout(function() {
               // 展開評論的所有回復
               $('.btn-read-reply').click();
            }, 1500);
            // 主動加入右側欄
            if ($(".recommend-right").length === 0) {
                $("#mainBox").after('<div class="recommend-right  align-items-stretch clearfix" id="rightAside"><aside class="recommend-right_aside"><div id="recommend-right" style="height: 100%; position: fixed; top: 52px; overflow: scroll;"></div></aside></div>');
            }
            // 上欄按鈕刪除
            $(".toolbar-menus > li > a:contains('專欄課程')").parent().remove();
            $(".toolbar-menus > li > a:contains('插件')").parent().remove();
            $(".toolbar-menus > li > a:contains('認證')").parent().remove();
            // 修復無法選擇復制
            $("code").css("user-select","auto");
            $("#content_views").css("user-select","auto");
            $("pre").css("user-select","auto");7
            // 圖片混文字時，無法完整復制，圖片不會被復制下來 https://github.com/adlered/CSDNGreener/issues/87
            //let el = $("main .blog-content-box")[0];
            //let elClone = el.cloneNode(true);
            //el.parentNode.replaceChild(elClone, el);
            // 保存csdn的網頁再次打開會自動跳轉到首頁 https://github.com/adlered/CSDNGreener/issues/97
            $("[onerror]").remove();
            // CSDN重定向外鏈不能在新的窗口跳轉 https://github.com/adlered/CSDNGreener/issues/80
            $("#article_content a[href]").attr("target", "_blank");
            // 搜索框優化
            //$("#toolbar-search-input").css("width", "calc(100% - 400px)");
	    // 取消代碼折疊
            $(".look-more-preCode").click();
            // 綠化設置
            common(6, 1);
            // 屏幕適配
            common(4, 1);
            // 評論
            common(1, 30);
            // 其它
            common(2, 20);
            // 頂部顯示作者信息
            common(8, 1);
            // 博客及主頁優化
            common(9, 10);
            // 循環線程開始
            loop(2);
            loop(3);
        } else if (bbs.test(currentURL)) {
            l("正在優化論壇體驗...");
            // 常規
            // 評論嵌入小廣告
            put(".post_recommend");
            // 底部推薦
            put("#post_feed_wrap");
            // 底部相關文章裡面的廣告
            put(".bbs_feed_ad_box");
            put(".recommend-ad-box");
            // 底部相關文字裡面的熱詞提示
            put(".type_hot_word");
            // 底部藍色flex屬性的廣告欄+登錄注冊框
            put(".pulllog-box");
            // 猜你喜歡
            put(".personalized-recommend-box");
            // 發帖減半提示
            put(".totast-box");
            // 頂部廣告
            put(".recommend-right");
            // 頂部廣告
            put(".ad_top");
            // 右側廣告
            put(".ad_1");
            clean(10);
            // 展開
            common(3, 50);
            // common(5, 10);
            loop(3);
        } else if (download.test(currentURL)) {
            l("正在優化下載頁體驗...");
            // 常規
            put(".fixed_dl");
            put("indexSuperise");
            // 右側推薦
            put(".content_recom");
            clean(10);
            // common(5, 10);
            loop(3);
        } else if (login.test(currentURL)) {
            l("正在優化登錄頁體驗...");
            // 常規
            // 登錄界面大圖廣告
            put(".main-tu");
            clean(10);
            // common(5, 10);
            loop(3);
        } else if (zone.test(currentURL)) {
            l("正在優化個人空間體驗...");
            // 常規
            clean(10);
            common(7, 10);
            // common(5, 10);
            loop(3);
        } else {
            l("哦豁，好偏門的頁面，我來試著優化一下哦...");
            // 常規
            // 展開全文
            $('.readmore_btn').click();
            // *** index ***
            // 頭部廣告
            put(".banner-ad-box");
            // 嵌入廣告
            put("#kp_box_211");
            // 右側廣告
            put(".slide-outer");
            // 右側詳情
            put(".persion_article");
            // 右側推薦
            $(".feed_company").parent().remove();
            // *** article ***
            // 常規
            // 右側廣告，放到第一個清除
            put("#addAdBox");
            put(".recommend-top-adbox");
            // 快來寫博客吧
            put(".blog_tip_box");
            // 推薦關注用戶
            put(".blog-expert-recommend-box");
            // 右下角VIP
            put(".meau-gotop-box");
            // 廣告
            put(".mediav_ad");
            put(".pulllog-box");
            put(".recommend-ad-box");
            //put(".box-shadow"); 某些頁面異常，例如cloud.csdn.net
            put(".type_hot_word");
            put(".fourth_column");
            // cloud.csdn.net 頭部廣告
            put("#kp_box_118");
            // 廣告
            put("#asideFooter");
            put("#ad-div");
            put("#479");
            put("#480");
            // 打賞
            put(".postTime");
            // 課程推薦
            put(".t0");
            // 分享海報
            put(".shareSuggest");
            // 底部主題
            put(".template-box");
            // 評論區廣告
            put("div#dmp_ad_58");
            // 打賞
            put(".reward-user-box");
            // 右側打賞按鈕
            put(".to-reward");
            // 推薦內容廣告
            put(".recommend-recommend-box");
            // 右側廣告
            put(".indexSuperise");
            // 搶沙發角標
            put(".comment-sofa-flag");
            // 頁jio
            put(".bottom-pub-footer");
            // 登錄查看未讀消息
            put(".toolbar-notice-bubble");
            // 右側廣告
            put(".recommend-top-adbox");
            // 學院彈出廣告
            $(".fouce_close_btn").click();
            // 其它
            // 頭部廣告
            put(".banner-ad-box");
            // 右側廣告
            put(".slide-outer");
            // 右側詳情
            put(".persion_article");
            // 左側廣告
            put("#kp_box_503");
            put("#kp_box_214");
            // *** bbs ***
            // 評論嵌入小廣告
            put(".post_recommend");
            // 底部推薦
            put("#post_feed_wrap");
            // 底部相關文章裡面的廣告
            put(".bbs_feed_ad_box");
            put(".recommend-ad-box");
            // 底部相關文字裡面的熱詞提示
            put(".type_hot_word");
            // 底部藍色flex屬性的廣告欄+登錄注冊框
            put(".pulllog-box");
            // 猜你喜歡
            put(".personalized-recommend-box");
            // 發帖減半提示
            put(".totast-box");
            // 頂部廣告
            put(".recommend-right");
            // 頂部廣告
            put(".ad_top");
            // *** download ***
            put(".fixed_dl");
            put("indexSuperise");
            // 右側推薦
            put(".content_recom");
            clean(10);
        }
        setTimeout(function() {
            progressor.done();
        }, 0);
        stopTimeMilli = Date.now();
        l("優化完畢! 耗時 " + (stopTimeMilli - startTimeMilli) + "ms");
        // 延遲嵌入用戶使用腳本情況JS，不影響性能
        $("head").append('<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>');
        setTimeout(function() {
            $("head").append('<script>LA.init({id: "JQTDiOVZ2pRjGa1K",ck: "JQTDiOVZ2pRjGa1K"})</script>');
        }, 2000);
    }, 0);
})();

function l(log) {
    console.log("[CSDNGreener] " + log);
}

function e(error) {
    console.error("[CSDNGreener] " + error);
}

function clear() {
    list = [];
}

function put(tag) {
    list.push(tag);
}

function clean(times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        for (var k = 0; k < list.length; k++) {
            $(list[k]).remove();
        }
    }, 100);
    progressor.incProgress(10);
}

function loop(num) {
    setInterval(function () {
        if (num === 1) {
            // 主頁中間的廣告
            $(".J_adv").remove();
            // 主頁有新的內容橫條
            $(".feed-fix-box").remove();
            // 主頁廣告 iframe
            if (currentURL == "https://www.csdn.net/") {
                $("iframe").remove();
            }
            // 刪除 CSDN 官方在主頁的文章（大多是廣告）
            $("li.clearfix").each(function(index, ele) {
                var banned = /csdn<\/a>/;
                var aMark = $(ele).find(".name").html();
                if (banned.test(aMark)) {
                    $(ele).remove();
                }
            });
            // 主頁廣告
            $("li").each(function(){
                let self = $(this);
                let dataType = self.attr('data-type');
                if (dataType === 'ad') {
                    self.remove();
                }
            });
            // 主頁廣告
            $("li > div > div > h2 > a[href*='https://edu.csdn.net']").parent().parent().parent().parent().remove();
            $("li > div > div > h2 > a[href*='https://marketing.csdn.net']").parent().parent().parent().parent().remove();
            // 官方腳本橫幅
            $(".toolbar-advert").remove();
        } else if (num === 2) {
            // 評論查看更多展開監聽
            $("div.comment-list-box").css("max-height", "none");
            // 屏蔽您的縮放不是100%的提示
            $('.leftPop').remove();
            // 官方腳本橫幅
            $(".toolbar-advert").remove();
        } else if (num == 3) {
            // 循環刪除登錄提示框
            $(".passport-login-container").remove();
            // 紅包雨
            $("#csdn-redpack").remove();
        }
    }, 500);
}

function common(num, times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        if (num === 1) {
            // 查看更多
            $(".btn-readmore").removeClass("no-login");
            $(".btn-readmore").addClass("fans-read-more");
            $(".btn-readmore").removeAttr("href");
            $(".btn-readmore").removeAttr("target");
            $(".btn-readmore").removeAttr("rel");
            $(".btn-readmore").click();
            // 已登錄用戶展開評論
            try {
                document.getElementById("btnMoreComment").click();
            } catch (e) {}
            // 刪除查看更多按鈕
            $("#btnMoreComment").parent("div.opt-box").remove();
            // 展開內容
            $("div.comment-list-box").css("max-height", "none");
            // 改回背景顏色
            $(".login-mark").remove();
            // 刪除登錄框
            $(".login-box").remove();
        } else if (num === 2) {
            // 擋住評論的「出頭推薦」
            if ($(".recommend-box").length > 1) {
                $(".recommend-box")[0].remove();
            }
            // 去外鏈
            $("#content_views").off();
            // 去除推廣廣告
            $("li[data-type='ad']").remove();
            // 免登錄復制
            $(".hljs-button").removeClass("signin");
            $(".hljs-button").addClass("{2}");
            $(".hljs-button").attr("data-title", "免登錄復制");
            $(".hljs-button").attr("onclick", "hljs.copyCode(event)");
            // 去除剪貼板劫持
            $("code").attr("onclick", "mdcp.copyCode(event)");
            try {
                // 復制時保留原文格式，參考 https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
                Object.defineProperty(window, "articleType", {
                    value: 0,
                    writable: false,
                    configurable: false
                });
            } catch (err) {
            }
            csdn.copyright.init("", "", "");
            // 頁頭廣告
            try {
                document.getElementsByClassName("column-advert-box")[0].style.display="none";
            } catch (e) {}
            // 自動檢測是否有目錄，如果沒有則刪除右邊欄，文章居中
            if ($(".recommend-right_aside").html() && $(".recommend-right_aside").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            } else if ($(".recommend-right_aside").html() && $("#recommend-right").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            }
            // 登錄按鈕文字太多，修改
            $("a").each(function() {
                if ($(this).attr('href') === 'https://passport.csdn.net/account/login') {
                    $(this).html('登入');
                }
            });
            // 頂欄廣告
            $("li").each(function(){
                let self = $(this);
                let dataType = self.attr('data-sub-menu-type');
                if (dataType === 'vip') {
                    self.remove();
                }
            });
            // 頂欄VIP選項
            $('.toolbar-subMenu-box').find("[href='https://mall.csdn.net/vip']").parent().remove();
        } else if (num == 3) {
            //論壇自動展開
            $(".js_show_topic").click();
        } else if (num == 4) {
            /** 配置控制 **/
            let config = new Config();
            let smCookie = config.get("scr-sm", true);
            let mdCookie = config.get("scr-md", false);
            let lgCookie = config.get("scr-lg", false);
            let foCookie = config.get("scr-fo", false)

            $("#scr-sm").prop("checked", smCookie);
            $("#scr-md").prop("checked", mdCookie);
            $("#scr-lg").prop("checked", lgCookie);
            $("#scr-fo").prop("checked", foCookie);

            if (smCookie) {
                // Small Screen Mode
                $(".main_father").removeClass("justify-content-center");
                GM_addStyle(`
                main{
                    width: auto!important;
                    float: none!important;
                    max-width: 90vw;
                }
                main article img{
                    margin: 0 auto;
                    max-width: 100%;
                    object-fit: cover;
                }
                `);
                $("#mainBox").css("width", "100%");
            } else if (mdCookie) {
                // Middle Screen Mode
                $(".main_father").removeClass("justify-content-center");
            } else if (lgCookie) {
                // Large Screen Mode
                $(".container").css("margin", "0 auto")
            } else if (foCookie) {
                // Focus mode
                $(".recommend-right").remove();
                $(".container").css("width", "100%");
                $(".container > main").css("width", "100%");
            }

            // 屏幕尺寸單選監聽
            $("#scr-sm").click(function () {
                new Config().set("scr-sm", true);
                new Config().set("scr-md", false);
                new Config().set("scr-lg", false);
                new Config().set("scr-fo", false);
            });
            $("#scr-md").click(function () {
                new Config().set("scr-md", true);
                new Config().set("scr-sm", false);
                new Config().set("scr-lg", false);
                new Config().set("scr-fo", false);
            });
            $("#scr-lg").click(function () {
                new Config().set("scr-lg", true);
                new Config().set("scr-sm", false);
                new Config().set("scr-md", false);
                new Config().set("scr-fo", false);
            });
            $("#scr-fo").click(function () {
                new Config().set("scr-fo", true);
                new Config().set("scr-sm", false);
                new Config().set("scr-md", false);
                new Config().set("scr-lg", false);
            });
            // 判斷是否為登錄狀態
            $("a").each(function() {
                if ($(this).attr('href') === 'https://passport.csdn.net/account/login') {
                    // 未登錄刪除無用按鈕
                    $("a:contains('會員中心')").parent().remove();
                    $("a:contains('收藏')").parent()[0].remove();
                    $("a:contains('動態')").parent().remove();
                    $("a:contains('創作')").parent().remove();
                }
            });
        } else if (num == 5) {
            // 改回背景顏色
            $(".login-mark").remove();
            // 刪除登錄框
            $(".login-box").remove();
        } else if (num == 6) {
            let did = false;
            let configHTML = '';
            configHTML += '<div class="configContainer"><p><a class="title" href="https://github.com/adlered/CSDNGreener" target="_blank">CSDNGreener</a> <sup>V' + version + ' ' + settings_svg + '</sup></p>';
            configHTML += '<p><a href="//shang.qq.com/wpa/qunwpa?idkey=d7ad6ead3f57722e7f00a4281ae75dbac2132c5a8cf321992d57309037fcaf63" target="_blank">官方 QQ 交流群：1042370453</a></p><br>';

            // 設定：推薦內容按鈕
            configHTML += '<p class="bold">根據屏幕尺寸，適配版式</p><p>建議逐個嘗試後選擇適合你的版式，屏幕過小或者版式選擇不正確右側欄可能沒有空間顯示，導致側欄定制無效（請嘗試調節瀏覽器縮放，快捷鍵 Ctrl+鼠標滾輪）。</p>';
            configHTML += '<label><input name="displayMode" type="radio" value="" id="scr-sm" /> 平鋪模式(優化版) </label>';
            configHTML += '<label><input name="displayMode" type="radio" value="" id="scr-md" /> 適應模式 </label>';
            configHTML += '<label><input name="displayMode" type="radio" value="" id="scr-lg" /> 居中模式 </label>';
            configHTML += '<label><input name="displayMode" type="radio" value="" id="scr-fo" /> 沉浸模式(無側欄)</label>';
            configHTML += '<hr style="height:1px;border:none;border-top:1px solid #cccccc;margin: 5px 0px 5px 0px;" />';
            configHTML += '<p class="bold">通用設定</p>';
            configHTML += '<p>自定義背景圖： <input type="text" id="backgroundImgUrl" placeholder="圖片所在網址或Base64" style="border-radius: 2px;border: 1px solid #f0f0f0;padding:5px;width:100%;margin-bottom:5px;"> <input style="margin-bottom:5px;" accept="image/*" id="upload_bg" type="file"></p>';
            configHTML += '<input type="checkbox" id="toggle-recommend-button"> <label for="toggle-recommend-button" class="modeLabel">顯示推薦內容</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-shop-button"> <label for="toggle-shop-button" class="modeLabel">顯示小店</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-whitetheme-button"> <label for="toggle-whitetheme-button" class="modeLabel">白色主題&Dark Reader兼容模式<br><span style="color: #808080;"># 選項作用：開啟後可通過Dark Reader插件靈活控制白色與黑暗模式，<a style="color: green;" href="https://chrome.zzzmh.cn/info?token=eimadpbcbfnmbkopoojfekhnkhdbieeh" target="_blank">插件下載地址點我</a></span></label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-autosize-button"> <label for="toggle-autosize-button" class="modeLabel">寬度自動適應<br><span style="color: #808080;"># 選項作用：開啟此選項可以在頁面寬度縮小時自動切換至小屏模式</span></label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-autohidetoolbar-button"> <label for="toggle-autohidetoolbar-button" class="modeLabel">向下滾動自動隱藏頂欄</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-autohidebottombar-button"> <label for="toggle-autohidebottombar-button" class="modeLabel">始終隱藏底欄</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-writeblog-button"> <label for="toggle-writeblog-button" class="modeLabel">顯示創作中心按鈕</label>';
            configHTML += '<br>';
            configHTML += '<hr style="height:1px;border:none;border-top:1px solid #cccccc;margin: 5px 0px 5px 0px;" />';
            configHTML += '<p class="bold"><b>右側欄定制</b></p>';
            configHTML += '<input type="checkbox" id="toggle-authorcard-button"> <label for="toggle-authorcard-button" class="modeLabel">顯示作者名片</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-searchblog-button"> <label for="toggle-searchblog-button" class="modeLabel">顯示搜博主文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-newarticle-button"> <label for="toggle-newarticle-button" class="modeLabel">顯示最新文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-hotarticle-button"> <label for="toggle-hotarticle-button" class="modeLabel">顯示熱門文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-newcomments-button"> <label for="toggle-newcomments-button" class="modeLabel">顯示最新評論</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-kindperson-button"> <label for="toggle-kindperson-button" class="modeLabel">顯示分類專欄</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-recommendarticle-button"> <label for="toggle-recommendarticle-button" class="modeLabel">顯示推薦文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-archive-button"> <label for="toggle-archive-button" class="modeLabel">顯示歸檔</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-content-button"> <label for="toggle-content-button" class="modeLabel">顯示目錄</label>';
            configHTML += '<br><br>';
            configHTML += '<div><h6>沒有收錢的廣告</h6><p>（因為是作者本人建設的社區～</p><p>社區中聚集了同行業的大佬小白，歡迎小伙伴們一起摸魚！</p><a href="https://fishpi.cn" target="_blank"><img src="https://s2.loli.net/2022/01/05/1HpBZUraMcR8ist.png" style="width:100%;height:100%;"/></a></div>';
            configHTML += '<br>';
            configHTML += '<a href="https://github.com/adlered/CSDNGreener" target="_blank" class="giveMeOneStar">' + star_svg + ' <b>點我~</b> 動動小手在 GitHub 點個 Star 和關注，支持我繼續維護腳本 :)</a><br><br>';
            configHTML += '<p>特別提示：CSDNGreener 腳本不提供任何會員文章破解、會員資源下載功能，僅適用於前端優化，請在CSDN官方渠道購買CSDN會員體驗付費功能。</p>';
            configHTML += '<hr style="height:1px;border:none;border-top:1px solid #cccccc;margin: 5px 0px 5px 0px;" />';
            configHTML += '<br>';

            // configHTML += '<a href="https://doc.stackoverflow.wiki/web/#/21?page_id=138" target="_blank" style="margin-top: 5px; display: block;">' + donate_svg + ' 我是老板，投幣打賞</a>';
            configHTML += '</div></div><div id="fade" class="black_overlay"></div>';
            let saveButton = '<button class="saveButton" style="position: sticky;top: 5px;left: calc(100% - 80px);" onclick="saveAndReload();">' + save_svg + ' 應用</button>';
            // 綠化器設定
            $("body").after('<div id="configContent" class="white_content">' + saveButton + configHTML);

            /** 配置控制 **/
            // 推薦內容
            $(".blog-content-box").append("<br><div class='blog-content-box' id='recommendSwitch' style='text-align: right;'></div>");
            $("#recommendSwitch:last").append('<input type="checkbox" id="toggle-button"> <label for="toggle-button" class="button-label"> <span class="circle"></span> <span class="text on">&nbsp;</span> <span class="text off">&nbsp;</span> </label>' +
                               '<p style="margin-top: 5px; font-size: 13px;">顯示推薦內容</p>');
            let recommendCookie = config.get("recommend", false);
            if (!recommendCookie) {
                $(".recommend-box").hide();
            }
            if (recommendCookie) {
                $("#toggle-recommend-button").prop("checked", true);
                $("#toggle-button").prop("checked", true);
            } else {
                $("#toggle-recommend-button").prop("checked", false);
                $("#toggle-button").prop("checked", false);
            }
            config.listenButton("#toggle-recommend-button", "recommend",
                               function() {$(".recommend-box").slideDown(200);},
                               function() {$(".recommend-box").slideUp(200);});
            config.listenButtonAndAction("#toggle-button", "recommend",
                                function() {$(".recommend-box").slideDown(200);},
                               function() {$(".recommend-box").slideUp(200);});

            // 顯示小店
            let shopCookie = config.get('shop',false);
            if(!shopCookie){
                $("#csdn-shop-window").hide();
                $("#csdn-shop-window-top").hide();
            }
            if (shopCookie) {
                $("#toggle-shop-button").prop("checked", true);
            } else {
                $("#toggle-shop-button").prop("checked", false);
            }
            config.listenButton("#toggle-shop-button", "shop",
                                function() {location.reload();},
                                function() {location.reload();});

            // 顯示作者名片
            let authorCardCookie = config.get("authorCard", true);
            if (authorCardCookie) {
                // 博主信息
                $('#recommend-right').append($('#asideProfile').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideProfile').attr("style", "margin-top: 8px; width: 300px;");
                }, 500);
            }
            if (authorCardCookie) {
                $("#toggle-authorcard-button").prop("checked", true);
            } else {
                $("#toggle-authorcard-button").prop("checked", false);
            }
            config.listenButton("#toggle-authorcard-button", "authorCard",
                               function() {location.reload();},
                               function() {location.reload();});

            // 強制白色主題
            let whiteThemeCookie = config.get("whiteTheme", false);
            if (whiteThemeCookie) {
                // 背景刪除
                $('.main_father').attr('style', 'background-image: none !important; background-color: #f5f6f7; background: #f5f6f7;');
                $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
                $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
                $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
                $('html').css('background-color', '#f5f6f7');
            }
            if (whiteThemeCookie) {
                $("#toggle-whitetheme-button").prop("checked", true);
            } else {
                $("#toggle-whitetheme-button").prop("checked", false);
            }
            config.listenButton("#toggle-whitetheme-button", "whiteTheme",
                               function() {location.reload();},
                               function() {location.reload();});

            // 背景圖
            let backgroundImage = GM_getValue("backgroundImage", "");
            if (backgroundImage !== "") {
                $("#backgroundImgUrl").val(backgroundImage);
                $(".main_father").attr('style', 'background-image:url(' + backgroundImage + ');background-attachment:fixed;background-size:100%;');
            }
            $('#backgroundImgUrl').on('input', function() {
                GM_setValue("backgroundImage", $("#backgroundImgUrl").val());
            });
            $('#backgroundImgUrl').on('change', function() {
                GM_setValue("backgroundImage", $("#backgroundImgUrl").val());
            });
            $("#upload_bg").on('change', function() {
                let file = $("#upload_bg")[0].files[0];
                let reader = new FileReader();
                reader.onloadend = function (e) {
                    let base64 = e.target.result;
                    $('#backgroundImgUrl').val(base64);
                    $('#backgroundImgUrl').change();
                }
                reader.readAsDataURL(file);
            });

            // 搜博主文章
            let searchBlogCookie = config.get("searchBlog", false);
            if(searchBlogCookie) {
                $('#recommend-right').append($('#asideSearchArticle').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideSearchArticle').attr("style", "margin-top: 8px; width: 300px;");
                    var i = $("#search-blog-words")
                      , n = $(".btn-search-blog");
                    i.keyup(function(t) {
                        var n = t.keyCode;
                        if (13 == n) {
                            var e = encodeURIComponent(i.val());
                            if (e) {
                                var s = "//so.csdn.net/so/search/s.do?q=" + e + "&t=blog&u=" + username;
                                window.open(s)
                            }
                        }
                    });
                    n.on("click", function(t) {
                        var n = encodeURIComponent(i.val());
                        if (n) {
                            var e = "//so.csdn.net/so/search/s.do?q=" + n + "&t=blog&u=" + username;
                            window.open(e)
                        }
                        t.preventDefault()
                    });
                }, 500);
            }
            if (searchBlogCookie) {
                $("#toggle-searchblog-button").prop("checked", true);
            } else {
                $("#toggle-searchblog-button").prop("checked", false);
            }
            config.listenButton("#toggle-searchblog-button", "searchBlog",
                               function() {location.reload();},
                               function() {location.reload();});

            // 最新文章
            let newArticleCookie = config.get("newArticle", false);
            if (newArticleCookie) {
                $('#recommend-right').append($('#asideNewArticle').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideNewArticle').attr("style", "margin-top: 8px; width: 300px;");
                }, 0);
            }
            if (newArticleCookie) {
                $("#toggle-newarticle-button").prop("checked", true);
            } else {
                $("#toggle-newarticle-button").prop("checked", false);
            }
            config.listenButton("#toggle-newarticle-button", "newArticle",
                               function() {location.reload();},
                               function() {location.reload();});

            // 熱門文章
            let hotArticleCookie = config.get("hotArticle", false);
            if (hotArticleCookie) {
                $('#recommend-right').append($("#asideHotArticle").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideHotArticle').attr("style", "margin-top: 8px; width: 300px;");
                    $('#asideHotArticle img').remove();
                }, 0);
            }
            if (hotArticleCookie) {
                $("#toggle-hotarticle-button").prop("checked", true);
            } else {
                $("#toggle-hotarticle-button").prop("checked", false);
            }
            config.listenButton("#toggle-hotarticle-button", "hotArticle",
                               function() {location.reload();},
                               function() {location.reload();});

            // 最新評論
            let newCommentsCookie = config.get("newComments", false);
            if (newCommentsCookie) {
                $('#recommend-right').append($("#asideNewComments").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideNewComments').attr("style", "margin-top: 8px; width: 300px;");
                    $(".comment.ellipsis").attr("style", "max-height: none;");
                    $(".title.text-truncate").attr("style", "padding: 0");
                }, 0);
            }
            if (newCommentsCookie) {
                $("#toggle-newcomments-button").prop("checked", true);
            } else {
                $("#toggle-newcomments-button").prop("checked", false);
            }
            config.listenButton("#toggle-newcomments-button", "newComments",
                               function() {location.reload();},
                               function() {location.reload();});

            // 分類專欄
            let kindPersonCookie = config.get("kindPerson", false);
            if (!kindPersonCookie) {
                setTimeout(function() {
                    $('#asideCategory').remove();
                    $('.kind_person').remove();
                }, 0);
            } else {
                $('#recommend-right').append($("#asideCategory").prop("outerHTML"));
                if ($("#asideCategory").length > 0) {
                    $('.kind_person').remove();
                } else {
                    $('.kind_person').attr("style", "margin-top: 8px; width: 300px; height:255px;");
                }
                setTimeout(function() {
                    $('#asideCategory').attr("style", "margin-top: 8px; width: 300px; display:block !important;");
                    $("a.flexible-btn").click(function() {
                        $(this).parents('div.aside-box').removeClass('flexible-box');
                        $(this).parents("p.text-center").remove();
                    })
                }, 500);
            }
            if (kindPersonCookie) {
                $("#toggle-kindperson-button").prop("checked", true);
            } else {
                $("#toggle-kindperson-button").prop("checked", false);
            }
            config.listenButton("#toggle-kindperson-button", "kindPerson",
                               function() {location.reload();},
                               function() {location.reload();});

            // 目錄
            let contentCookie = config.get("content", true);
            if (!contentCookie) {
                setTimeout(function() {
                    $('.align-items-stretch.group_item').parent().remove();
                }, 0);
            }
            if (contentCookie) {
                $("#toggle-content-button").prop("checked", true);
            } else {
                $("#toggle-content-button").prop("checked", false);
            }
            config.listenButton("#toggle-content-button", "content",
                               function() {location.reload();},
                               function() {location.reload();});

            // 推薦文章
            let recommendArticleCookie = config.get("recommendArticle", false);
            if (!recommendArticleCookie) {
                setTimeout(function() {
                    $('.recommend-list-box').remove();
                }, 0);
            } else {
                setTimeout(function() {
                    $('.recommend-list-box').attr("style", "margin-top: 8px; width: 300px; height:255px;");
                }, 0);
            }
            if (recommendArticleCookie) {
                $("#toggle-recommendarticle-button").prop("checked", true);
            } else {
                $("#toggle-recommendarticle-button").prop("checked", false);
            }
            config.listenButton("#toggle-recommendarticle-button", "recommendArticle",
                               function() {location.reload();},
                               function() {location.reload();});

            // 歸檔
            let archiveCookie = config.get("archive", false);
            if (!archiveCookie) {
                setTimeout(function() {
                    $('#asideArchive').remove();
                }, 0);
            } else {
                $('#recommend-right').append($("#asideArchive").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideArchive').attr("style", "margin-top: 8px; width: 300px; display:block !important;");
                }, 500);
            }
            if (archiveCookie) {
                $("#toggle-archive-button").prop("checked", true);
            } else {
                $("#toggle-archive-button").prop("checked", false);
            }
            config.listenButton("#toggle-archive-button", "archive",
                               function() {location.reload();},
                               function() {location.reload();});

            // 自動靠左平鋪
            let autoSizeCookie = config.get("autoSize", false);
            if (autoSizeCookie) {
                setInterval(function () {
                    // 文章寬度自適應
                    if (window.innerWidth < 1100) {
                        // 刪除原有響應式樣式
                        $(".main_father").removeClass("justify-content-center");
                        $("article").width(window.innerWidth - 150);
                        GM_addStyle(`
                        main{
                            width: auto!important;
                            float: none!important;
                            max-width: 90vw;
                        }
                        main article img{
                            margin: 0 auto;
                            max-width: 100%;
                            object-fit: cover;
                        }
                        `);
                        did = true;
                    } else {
                        if (did === true) {
                            $("article").removeAttr("style");
                            did = false;
                        }
                    }
                }, 500);
            }
            if (autoSizeCookie) {
                $("#toggle-autosize-button").prop("checked", true);
            } else {
                $("#toggle-autosize-button").prop("checked", false);
            }
            config.listenButton("#toggle-autosize-button", "autoSize",
                               function() {location.reload();},
                               function() {location.reload();});

            // 自動隱藏頂欄
            let autoHideToolbarCookie = config.get("autoHideToolbar", true);
            if (autoHideToolbarCookie) {
                $(window).scroll(function() {
                    if (document.documentElement.scrollTop > 100) {
                	    let scrollS = $(this).scrollTop();
                	    if (scrollS >= windowTop) {
                	    	$('#csdn-toolbar').slideUp(100);
                	    	windowTop = scrollS;
                	    } else {
                	    	$('#csdn-toolbar').slideDown(100);
                	    	windowTop = scrollS;
                	    }
                    }
                });
            }
            if (autoHideToolbarCookie) {
                $("#toggle-autohidetoolbar-button").prop("checked", true);
            } else {
                $("#toggle-autohidetoolbar-button").prop("checked", false);
            }
            config.listenButton("#toggle-autohidetoolbar-button", "autoHideToolbar",
                               function() {location.reload();},
                               function() {location.reload();});

            // 自動隱藏底欄
            let autoHideBottomBarCookie = config.get("autoHideBottomBar", true);
            if (autoHideBottomBarCookie) {
                $("#toolBarBox .left-toolbox").css({
                	position: "relative",
                	left: "0px",
                	bottom: "0",
                	width: $("#toolBarBox").width() + "px"
                });
                $(window).scroll(function() {
                	$("#toolBarBox .left-toolbox").css({
                		position: "relative",
                		left: "0px",
                		bottom: "0",
                		width: $("#toolBarBox").width() + "px"
                	})
                });
            }
            if (autoHideBottomBarCookie) {
                $("#toggle-autohidebottombar-button").prop("checked", true);
            } else {
                $("#toggle-autohidebottombar-button").prop("checked", false);
            }
            config.listenButton("#toggle-autohidebottombar-button", "autoHideBottomBar",
                               function() {location.reload();},
                               function() {location.reload();});

            // 創作中心按鈕
            let writeBlogCookie = config.get("writeBlog", true);
            if (!writeBlogCookie) {
                $(".toolbar-btn-write").remove();
            }
            if (writeBlogCookie) {
                $("#toggle-writeblog-button").prop("checked", true);
            } else {
                $("#toggle-writeblog-button").prop("checked", false);
            }
            config.listenButton("#toggle-writeblog-button", "writeBlog",
                               function() {location.reload();},
                               function() {location.reload();});

            // 右側滾動條
            /** setTimeout(function () {
                let rightSideHeight = 0;
                let pageHeight = $(window).height();
                rightSideHeight += getHeight($('.align-items-stretch.group_item').parent());
                rightSideHeight += getHeight($("#asideProfile"));
                rightSideHeight += getHeight($("#asideSearchArticle"));
                rightSideHeight += getHeight($("#asideNewArticle"));
                rightSideHeight += getHeight($("#asideHotArticle"));
                rightSideHeight += getHeight($("#asideNewComments"));
                rightSideHeight += getHeight($("#asideCategory"));
                rightSideHeight += getHeight($("#asideArchive"));
                console.debug("Right side total height: " + rightSideHeight);
                console.debug("Page height: " + pageHeight);
                if (rightSideHeight > pageHeight) {
                    $('#recommend-right').css("overflow", "scroll");
                }
            }, 1500); */
        } else if (num === 7) {
            $(".me_r")[1].remove();
        } else if (num === 8) {
            /* $(".article-bar-top").append("<br>");
            $(".article-bar-top").append($(".aside-box-footerClassify").children("dd").html());
            $("dl").each(function (index, element) {
                var key = $(this).children("dt");
                var value = $(this).children("dd").children("span");
                if (key.html().indexOf("原創") != -1) {
                    key = $(this).children("dt").children("a")
                    value = $(this).children("dd").children("a").children("span");
                    addInfo(key, value);
                } else
                if (value.html() != undefined) {
                    addInfo(key, value);
                }
            } );
            function addInfo(key, value) {
                var bind = key.html() + "&nbsp;" + value.html() + "&nbsp;&nbsp;";
                $(".article-bar-top").append(bind + " ");
            } */
            $(".blog_container_aside").remove();

            // 標題消息提醒去除
            let title = document.title.replace(/^\(.*?\)/g, "");
            document.title = title;
            // 評論復制按鈕
            $('.comment-box').prepend('<button class="comment-hidden-text" style="display:none">COPY BUTTON</button>');
            $('.new-opt-box.new-opt-box-bg').prepend('<a class="btn btn-report btn-copy" onclick="javascript:$(\'.comment-hidden-text\').attr(\'data-clipboard-text\',$(this).parent().parent().find(\'.new-comment\').text())">復制評論</a><span class="btn-bar"></span>');
            $('.btn-copy').click(function() {
                var clipboard = new ClipboardJS('.comment-hidden-text');
                clipboard.on('success', function(e) {
                    console.info('Action:', e.action);
                    console.info('Text:', e.text);
                    console.info('Trigger:', e.trigger);
                    e.clearSelection();
                    $('.btn-copy').html('成功');
                    setTimeout(function() {
                        $('.btn-copy').html('復制評論');
                    }, 1000);
                });
                clipboard.on('error', function(e) {
                    console.error('Action:', e.action);
                    console.error('Trigger:', e.trigger);
                    $('.btn-copy').html('失敗，請手動復制');
                    setTimeout(function() {
                        $('.btn-copy').html('復制評論');
                    }, 1000);
                });
                $(".comment-hidden-text").click();
                clipboard.destroy();
            });
        } else if (num === 9) {
            // 刪除CSDN LOGO懸浮後的二維碼
            $(".toolbar-subMenu > img").parent().remove();
        }
    }, 100);
    progressor.incProgress(10);
}

function showTips() {
	var config = {
		content: "歡迎使用 CSDNGreener，綠化設定按鈕在這裡！<br><a onclick='javascript:$(\".trips\").remove();'>好的，以後不再提示我</a>",
		type: "html",
		alignTo: ["bottom", "right"],
		trigger: "show",
		isclose: false,
		color: ["#B2E281", "#B2E281"]
	};
	$("#greenerSettings").showTips(config);
}

function getHeight(element) {
    let outerHeight = element.outerHeight();
    if (outerHeight === null) {
        return 0;
    }
    return outerHeight;
}

function isFirefox() {
    return navigator.userAgent.indexOf("Firefox") > 0;
}
