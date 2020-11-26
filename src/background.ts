chrome.contextMenus.create({
  id : 'parent',
  title : "ブロックを生成",
  type  : "normal",
  contexts : ["selection"],
});

const langs = ['ruby','plain','html', 'css', 'javascript', 'md']
langs.map(lang => {
  chrome.contextMenus.create({
    id: lang,
    parentId: 'parent',
    title: lang,
    contexts : ["selection"],
  });
})

const res = (response: any): void => {
  try {
    const {selectText, lang} = response;
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = (lang == 'plain') ? `\`\`\`\n${selectText}\n\`\`\`\n` : `\`\`\`${lang}\n${selectText}\n\`\`\`\n`
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea)
  } catch (error) {
    alert("Can't be allowed to use `ブロックを生成` on this page. If you're on github page, please reload!")
  }
}

const insertLang = (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab): void => {
  const { menuItemId } = info;
  chrome.tabs.sendMessage(tab.id!, {
    lang: menuItemId
  }, res);
}

chrome.contextMenus.onClicked.addListener((info, tab): void => {
  insertLang(info, tab!);
});
