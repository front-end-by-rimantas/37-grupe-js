console.clear();

/*
Duota kietojo disko duomenu struktura (folder > file) ir reikia suskaiciuoti, kiek vietos uzima visi failai.

Folder uzima 0 vietos.
*/
const pc = {
    name: 'C',
    type: 'folder',
    content: [
        {
            name: 'Programs Files',
            type: 'folder',
            content: [
                {
                    name: 'Android',
                    type: 'folder',
                    content: []
                },
                {
                    name: 'GIMP 2',
                    type: 'folder',
                    content: [
                        {
                            name: 'dbghelp.dll',
                            type: 'file',
                            size: 1497,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'gimp-2.10.exe',
                            type: 'file',
                            size: 9138,
                            sizeUnits: 'kb'
                        }
                    ]
                },
            ]
        },
        {
            name: 'Windows',
            type: 'folder',
            content: [
                {
                    name: 'DiagTrack',
                    type: 'folder',
                    content: [
                        {
                            name: 'analyticsevents.dat',
                            type: 'file',
                            size: 2,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'utc.allow.diffbase',
                            type: 'file',
                            size: 468,
                            sizeUnits: 'kb'
                        }
                    ]
                }
            ]
        },
        {
            name: 'msdia80.dll',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}

function storage(item, depth = 0) {
    let size = 0;

    if (item.type === 'folder') {
        for (const innerItem of item.content) {
            size += storage(innerItem, depth + 1);
        }
    } else {
        size = item.size;
    }

    return depth ? size : size / 8;
}

const totalKBs = storage(pc);
console.log('Used space:', totalKBs, 'KB');

const files = [
    {
        type: 'folder',
        title: 'C diskas',
        list: [
            {
                type: 'folder',
                title: 'BIOS',
                list: [
                    {
                        type: 'folder',
                        title: '8TCN51WW',
                        list: [
                            {
                                type: 'file',
                                title: 'summer.jpg'
                            },
                            {
                                type: 'file',
                                title: 'summer-2.jpg'
                            },
                        ]
                    },
                    {
                        type: 'folder',
                        title: '8TCN53WW',
                        list: [
                            {
                                type: 'file',
                                title: 'summer.jpg'
                            },
                            {
                                type: 'file',
                                title: 'summer-2.jpg'
                            },
                        ]
                    },
                    {
                        type: 'file',
                        title: 'bios1.jpg'
                    },
                    {
                        type: 'file',
                        title: 'bios2.jpg'
                    },
                ]
            },
            {
                type: 'folder',
                title: 'Games',
                list: [
                    {
                        type: 'folder',
                        title: 'Euro-truck',
                        list: [
                            {
                                type: 'file',
                                title: 'euro-1.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-2.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-3.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-4.txt'
                            },
                            {
                                type: 'file',
                                title: 'euro-5.txt'
                            },
                        ]
                    }
                ]
            },
            {
                type: 'folder',
                title: 'Program Files',
                list: [
                    {
                        type: 'folder',
                        title: 'Adobe',
                        list: [
                            {
                                type: 'file',
                                title: 'a.txt'
                            },
                            {
                                type: 'file',
                                title: 'a2.txt'
                            },
                            {
                                type: 'file',
                                title: 'a3.txt'
                            },
                            {
                                type: 'file',
                                title: 'a4.txt'
                            },
                            {
                                type: 'file',
                                title: 'a5.txt'
                            },
                        ]
                    },
                    {
                        type: 'folder',
                        title: 'dotnet',
                        list: [
                            {
                                type: 'file',
                                title: 'a.txt'
                            },
                            {
                                type: 'file',
                                title: 'a2.txt'
                            },
                            {
                                type: 'file',
                                title: 'a3.txt'
                            },
                            {
                                type: 'file',
                                title: 'a4.txt'
                            },
                            {
                                type: 'file',
                                title: 'a5.txt'
                            },
                        ]
                    },
                    {
                        type: 'folder',
                        title: 'Git',
                        list: [
                            {
                                type: 'file',
                                title: 'a.txt'
                            },
                            {
                                type: 'file',
                                title: 'a2.txt'
                            },
                            {
                                type: 'file',
                                title: 'a3.txt'
                            },
                            {
                                type: 'file',
                                title: 'a4.txt'
                            },
                            {
                                type: 'file',
                                title: 'a5.txt'
                            },
                        ]
                    },
                ]
            },
            {
                type: 'file',
                title: 'msdia80.dll'
            },
            {
                type: 'file',
                title: 'msdia802.dll'
            },
            {
                type: 'file',
                title: 'msdia803.dll'
            },
            {
                type: 'file',
                title: 'msdia804.dll'
            },
        ]
    }
];

function fileSearch(input) {
    return {
        folder: [],
        files: [],
    };
}

