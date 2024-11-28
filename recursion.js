const menu = [
    {
        name: 'File',
        menu: [
            { name: 'New File', action: 'newFile' },
            { name: 'New Window', action: 'newWindow' },
            { name: 'Open...', action: 'openFile' },
            { name: 'Open Folder...', action: 'openFolder' },
            { name: 'Save', action: 'saveFile' },
            { name: 'Save As...', action: 'saveAs' },
            {
                name: 'Preferences',
                menu: [
                    { name: 'Settings', action: 'openSettings' },
                    { name: 'Keymaps', action: 'openKeymaps' },
                    { name: 'Extensions', action: 'openExtensions' }
                ]
            },
            { name: 'Exit', action: 'exitApp' }
        ]
    },
    {
        name: 'Edit',
        menu: [
            { name: 'Undo', action: 'undo' },
            { name: 'Redo', action: 'redo' },
            { name: 'Cut', action: 'cut' },
            { name: 'Copy', action: 'copy' },
            { name: 'Paste', action: 'paste' },
            { name: 'Find', action: 'find' },
            { name: 'Replace', action: 'replace' }
        ]
    },
    {
        name: 'View',
        menu: [
            { name: 'Explorer', action: 'toggleExplorer' },
            { name: 'Search', action: 'toggleSearch' },
            { name: 'Source Control', action: 'toggleSourceControl' },
            { name: 'Extensions', action: 'toggleExtensions' },
            {
                name: 'Appearance',
                menu: [
                    { name: 'Show Status Bar', action: 'toggleStatusBar' },
                    { name: 'Show Activity Bar', action: 'toggleActivityBar' },
                    { name: 'Show Sidebar', action: 'toggleSidebar' }
                ]
            },
            { name: 'Zoom In', action: 'zoomIn' },
            { name: 'Zoom Out', action: 'zoomOut' }
        ]
    },
    {
        name: 'Help',
        menu: [
            { name: 'Welcome', action: 'openWelcome' },
            { name: 'Documentation', action: 'openDocs' },
            { name: 'About', action: 'openAbout' }
        ]
    }
];

// const uls = document.querySelector('#list')
// console.log(uls)
// const main = (menu, parent) => {
//     //console.log(menu)
//     menu.forEach(m => {
//         const li = document.createElement('li')
//         li.textContent = m.name;
//         parent.appendChild(li);
//         console.log(m.name)
//         if(m.action){
//             const a=document.createElement('a')
//             a.textContent=m.action;
//             a.href=`#${m.action}`
//             parent.appendChild(a)
//         }
//         if (m.menu && m.menu.length > 0) {
//             const parent_ul = document.createElement('ul')
//             li.appendChild(parent_ul)
//             main(m.menu, parent_ul)
//         }
//     })
// }
// main(menu, uls)

const fib=(n)=>{
    if(n<=1) return 1;
    return fib(n-1)+fib(n-2)
}
const fact=(n)=>{
    if(n<=1) return 1;
    return n*fact(n-1)
}

console.log(fact(8))
