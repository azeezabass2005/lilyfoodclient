import { faHome, faHeart, faCartShopping, faRotate, faUser, faPepperHot } from '@fortawesome/free-solid-svg-icons'
import { facebooklogo, twitterlogo, whatsapplogo } from '../assets'


const bottomLinks = [
    {
        name: 'home',
        path: '/',
        icon: faHome
    },
    {   
        name: 'favorite',
        path: '/favorite',
        icon: faHeart
    },
    {
        name: 'cart',
        path: '/cart',
        icon: faCartShopping
    },
    
    {
        name: 'track',
        path: '/track',
        icon: faRotate
    },
    
    {
        name: 'register',
        path: '/register',
        icon: faUser
    },
    
]
const navLinks = [
    {
        name: 'home',
        path: '/',
        icon: faHome
    },
    {
        name: 'products',
        path: '/products',
        icon: faPepperHot
    },
    {   
        name: 'favorite',
        path: '/favorite',
        icon: faHeart
    },
    {
        name: 'cart',
        path: '/cart',
        icon: faCartShopping
    },
    
    {
        name: 'track',
        path: '/track',
        icon: faRotate
    },
    
    {
        name: 'register',
        path: '/register',
        icon: faUser
    },
    
]

const socialLinks = [
    {
        name: 'Facebook',
        img: facebooklogo,
        link: '#'
    },
    {
        name: 'Twitter',
        img: twitterlogo,
        link: '#'
    },
    {
        name: 'Whatsapp',
        img: whatsapplogo,
        link: '#'
    },
]

const features = [
    {
        name: 'Delivery to Doorstep',
        description: "You don't have to worry about going anywhere we will deliver your groceries right to your doorstep.",
    },
    {
        name: 'Quality Products',
        description: 'We provide you with quality and fresh produce that have have undergo thorough check and harmless.',
    },
    {
        name: 'Timely Delivery',
        description: 'We will deliver to you in the shortest possible time that you can ever imagine thus saving time.',
    }
    
]


export {
    bottomLinks,
    navLinks,
    socialLinks,
    features,
}