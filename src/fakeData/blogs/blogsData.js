import img1 from '../../images/blog(1).jpg'
import img2 from '../../images/blog(2).jpg'
import img3 from '../../images/blog(3).jpg'
import img4 from '../../images/blog(4).jpg'
import img5 from '../../images/blog(5).jpg'


const blogsData = [
    {
        id: 1,
        author: 'example',
        img: img1,
        title: 'Most Important Thing You Need To Know',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, asperiores!',
        publishDate: new Date(),
        comments: [
            {
                id: 1,
                name: 'example',
                img: '',
                comment: ''
            },
            {
                id: 2,
                name: 'example',
                img: '',
                comment: ''
            }
        ],
        like: [
            1, 2, 3, 4
        ]

    },
    {
        id: 2,
        author: 'example2',
        img: img2,
        title: 'Most Important Thing You Need To Know',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, asperiores!',
        publishDate: new Date()
    },
    {
        id: 3,
        author: 'example3',
        img: img3,
        title: 'Most Important Thing You Need To Know',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, asperiores!',
        publishDate: new Date()
    },
    {
        id: 4,
        author: 'example4',
        img: img4,
        title: 'Most Important Thing You Need To Know',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, asperiores!',
        publishDate: new Date()
    },{
        id: 5,
        author: 'example5',
        img: img5,
        title: 'Most Important Thing You Need To Know',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, asperiores!',
        publishDate: new Date()
    },{
        id: 6,
        author: 'example6',
        img: img3,
        title: 'Most Important Thing You Need To Know',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, asperiores!',
        publishDate: new Date()
    },
];

export default blogsData;