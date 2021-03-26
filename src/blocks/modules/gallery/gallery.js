new Vue({
    el: '#gallery',
    data: () => ({
        gIndex: null,
        isOpenedFancybox: [false,false],
        gallery: [
            {
                cover: 'img/gallery-covers/1.jpg',
                title: 'Encore + AfterHalloween',
                description: '',
                className: 'col2-row1',
                photos: [
                    'https://photocentra.ru/images/main53/532897_main.jpg',
                    'https://www.soleans.ru/wp-content/uploads/Lagoa-do-Fogo-Sao-Migel.jpg',
                    'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkgKtXzPh54BUM6z80btI0C6aKTM5SRkZCeTgDn6uOyic',
                ]
            },
            {
                cover: 'img/gallery-covers/2.jpg',
                title: 'Test test',
                description: 'some description',
                className: 'col1-row2',
                photos: [
                    'https://mirplaneta.ru/images/5/920.jpg',
                    'https://avatars.mds.yandex.net/get-zen_doc/1900011/pub_5fbfdefdc9a19d0e1c29987b_5fbfe278a9416d5dd7f6a0fb/scale_1200',
                    'http://www.vernadsky.ru/images/News2021/02_2020/peregrine_falcon.jpg'
                ]
            },
            {
                cover: 'img/gallery-covers/3.jpg',
                title: 'Encore + AfterHalloween',
                description: '',
                className: '',
                photos: [
                    'https://photocentra.ru/images/main53/532897_main.jpg',
                    'https://www.soleans.ru/wp-content/uploads/Lagoa-do-Fogo-Sao-Migel.jpg',
                    'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkgKtXzPh54BUM6z80btI0C6aKTM5SRkZCeTgDn6uOyic',
                ]
            },
            {
                cover: 'img/gallery-covers/4.jpg',
                title: 'Test test',
                description: 'some description',
                className: '',
                photos: [
                    'https://mirplaneta.ru/images/5/920.jpg',
                    'https://avatars.mds.yandex.net/get-zen_doc/1900011/pub_5fbfdefdc9a19d0e1c29987b_5fbfe278a9416d5dd7f6a0fb/scale_1200',
                    'http://www.vernadsky.ru/images/News2021/02_2020/peregrine_falcon.jpg'
                ]
            },
            {
                cover: 'img/gallery-covers/5.jpg',
                title: 'Encore + AfterHalloween',
                description: '',
                className: '',
                photos: [
                    'https://photocentra.ru/images/main53/532897_main.jpg',
                    'https://www.soleans.ru/wp-content/uploads/Lagoa-do-Fogo-Sao-Migel.jpg',
                    'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkgKtXzPh54BUM6z80btI0C6aKTM5SRkZCeTgDn6uOyic',
                ]
            },
            {
                cover: 'img/gallery-covers/6.jpg',
                title: 'Test test',
                description: 'some description',
                className: '',
                photos: [
                    'https://mirplaneta.ru/images/5/920.jpg',
                    'https://avatars.mds.yandex.net/get-zen_doc/1900011/pub_5fbfdefdc9a19d0e1c29987b_5fbfe278a9416d5dd7f6a0fb/scale_1200',
                    'http://www.vernadsky.ru/images/News2021/02_2020/peregrine_falcon.jpg'
                ]
            },
            {
                cover: 'img/gallery-covers/7.jpg',
                title: 'Encore + AfterHalloween',
                description: '',
                className: '',
                photos: [
                    'https://photocentra.ru/images/main53/532897_main.jpg',
                    'https://www.soleans.ru/wp-content/uploads/Lagoa-do-Fogo-Sao-Migel.jpg',
                    'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkgKtXzPh54BUM6z80btI0C6aKTM5SRkZCeTgDn6uOyic',
                ]
            },
            {
                cover: 'img/gallery-covers/8.jpg',
                title: 'Test test',
                description: 'some description',
                className: 'col2-row1',
                photos: [
                    'https://mirplaneta.ru/images/5/920.jpg',
                    'https://avatars.mds.yandex.net/get-zen_doc/1900011/pub_5fbfdefdc9a19d0e1c29987b_5fbfe278a9416d5dd7f6a0fb/scale_1200',
                    'http://www.vernadsky.ru/images/News2021/02_2020/peregrine_falcon.jpg'
                ]
            },
            {
                cover: 'img/gallery-covers/9.jpg',
                title: 'Encore + AfterHalloween',
                description: '',
                className: 'col1-row2',
                photos: [
                    'https://photocentra.ru/images/main53/532897_main.jpg',
                    'https://www.soleans.ru/wp-content/uploads/Lagoa-do-Fogo-Sao-Migel.jpg',
                    'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkgKtXzPh54BUM6z80btI0C6aKTM5SRkZCeTgDn6uOyic',
                ]
            },
            {
                cover: 'img/gallery-covers/10.jpg',
                title: 'Test test',
                description: 'some description',
                className: 'col2-row1',
                photos: [
                    'https://mirplaneta.ru/images/5/920.jpg',
                    'https://avatars.mds.yandex.net/get-zen_doc/1900011/pub_5fbfdefdc9a19d0e1c29987b_5fbfe278a9416d5dd7f6a0fb/scale_1200',
                    'http://www.vernadsky.ru/images/News2021/02_2020/peregrine_falcon.jpg'
                ]
            },
            {
                cover: 'img/gallery-covers/11.jpg',
                title: 'Encore + AfterHalloween',
                description: '',
                className: '',
                photos: [
                    'https://photocentra.ru/images/main53/532897_main.jpg',
                    'https://www.soleans.ru/wp-content/uploads/Lagoa-do-Fogo-Sao-Migel.jpg',
                    'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkgKtXzPh54BUM6z80btI0C6aKTM5SRkZCeTgDn6uOyic',
                ]
            }
        ]
    }),
    methods: {
        fancyboxOpen(index) {
            const photos = this.gallery[index].photos.map(item => ({
                src: item,
                opts: {
                    thumb: item
                }
            }))
            $.fancybox.open(photos, {
                buttons: ["close"],
                thumbs : {
                    autoStart : true,
                    axis : 'x'
                }
            })
        }
    }
})