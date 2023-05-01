const tabs = document.querySelectorAll('header .nav-tab a');
const tabsContent = document.querySelectorAll('#tab-content > div');

export function initTabsOnClickEvent() {
    tabs.forEach((tabEle) => {
        tabEle.addEventListener('click', onTabClick)
    });
}

function onTabClick(currentTab) {
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });
    currentTab.currentTarget.classList.add('active');

    tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('active');
    });
    const targetTabContentId = currentTab.currentTarget.getAttribute("href");
    document.querySelector(targetTabContentId).classList.add('active');
}
