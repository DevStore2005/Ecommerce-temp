import bcrypt from 'bcryptjs';
const data = {
    products:
        [
            {
                id: 0,
                name: 'IPHONE 13',
                brand: 'IPHONE',
                category: 'celphone',
                articulo: 'a',
                caract: 'a',
                size: 'a',
                price: 299990,
                stock: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula. Nulla ultrices at quam at semper. Maecenas at luctus lectus. Donec posuere porta lacus eu facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at augue massa. Ut accumsan hendrerit mauris, in malesuada arcu semper in. Vivamus vel enim eget odio condimentum suscipit non vitae urna. Nulla in massa vel mauris pulvinar vulputate. Pellentesque ac nulla sed massa gravida imperdiet. Morbi aliquam orci sapien, posuere interdum purus ornare in. Curabitur est leo, tristique ac venenatis et, sodales non metus. Pellentesque vitae interdum orci. Ut nibh sem, gravida in metus id, ornare fringilla lacus.',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula.',
                img: '/assets/images/products/iphone13.jpg',
                valid: true
            },
            {
                id: 1,
                name: 'IPHONE SE',
                brand: 'IPHONE',
                category: 'celphone',
                articulo: 'a',
                caract: 'a',
                size: 'a',
                price: 499990,
                stock: 5,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula. Nulla ultrices at quam at semper. Maecenas at luctus lectus. Donec posuere porta lacus eu facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at augue massa. Ut accumsan hendrerit mauris, in malesuada arcu semper in. Vivamus vel enim eget odio condimentum suscipit non vitae urna. Nulla in massa vel mauris pulvinar vulputate. Pellentesque ac nulla sed massa gravida imperdiet. Morbi aliquam orci sapien, posuere interdum purus ornare in. Curabitur est leo, tristique ac venenatis et, sodales non metus. Pellentesque vitae interdum orci. Ut nibh sem, gravida in metus id, ornare fringilla lacus.',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula.',
                img: '/assets/images/products/iphone_se.jpg',
                valid: true
            },
            {
                id: 2,
                name: 'IPHONE 14',
                brand: 'IPHONE',
                category: 'celphone',
                articulo: 'a',
                caract: 'a',
                size: 'a',
                price: 599990,
                stock: 10,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula. Nulla ultrices at quam at semper. Maecenas at luctus lectus. Donec posuere porta lacus eu facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at augue massa. Ut accumsan hendrerit mauris, in malesuada arcu semper in. Vivamus vel enim eget odio condimentum suscipit non vitae urna. Nulla in massa vel mauris pulvinar vulputate. Pellentesque ac nulla sed massa gravida imperdiet. Morbi aliquam orci sapien, posuere interdum purus ornare in. Curabitur est leo, tristique ac venenatis et, sodales non metus. Pellentesque vitae interdum orci. Ut nibh sem, gravida in metus id, ornare fringilla lacus.',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula.',
                img: '/assets/images/products/iphone14.jpg',
                valid: true
            },
            {
                id: 3,
                name: 'IPHONE 14 PRO MAX',
                brand: 'IPHONE',
                category: 'celphone',
                articulo: 'a',
                caract: 'a',
                size: 'a',
                price: 1399990,
                stock: 0,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula. Nulla ultrices at quam at semper. Maecenas at luctus lectus. Donec posuere porta lacus eu facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at augue massa. Ut accumsan hendrerit mauris, in malesuada arcu semper in. Vivamus vel enim eget odio condimentum suscipit non vitae urna. Nulla in massa vel mauris pulvinar vulputate. Pellentesque ac nulla sed massa gravida imperdiet. Morbi aliquam orci sapien, posuere interdum purus ornare in. Curabitur est leo, tristique ac venenatis et, sodales non metus. Pellentesque vitae interdum orci. Ut nibh sem, gravida in metus id, ornare fringilla lacus.',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet luctus purus. Cras vel mi neque. Nunc pharetra bibendum neque at vehicula.',
                img: '/assets/images/products/iphone14_pro.jpg',
                valid: true
            },
        ],
    users: [
        {

            id: 0,
            isAdmin: true,
            password: bcrypt.hashSync('123456', 11),
            name: 'Nklas',
            lastName: 'Garruacha sonfnt',
            rut: '7.777.777-7',
            shippingAddress: [],
            billingAddress: {},
            phone: null,
            email: 'niciras33@gmail.com',
            payments: {},
            shopping: {},
            returns: {},
            valid: true,
        },
        {
            id: 1,
            isAdmin: false,
            password: bcrypt.hashSync('123456', 11),
            name: 'Pedrito',
            lastName: 'Pérez García',
            rut: '3.333.333-3',
            shippingAddress: [{ alias: 'principal', phone: '+56 9 3421 7822', country: 'Chile', city: 'Viña del Mar', region: 'Valparaíso', address: 'Las villas pelas 741', address2: 'Villa copihue', postalCode: '3112-27', aditional: 'Se  sube por las palmas y baja en la siguiente pal lado' }, { alias: 'SEGUNDA', phone: '+56 7 1233 4122', country: 'Chile', city: 'Reñaca', region: 'Valparaíso', address: 'Troncos largos 412', address2: 'Sector alto', postalCode: '3112-27', aditional: 'Portón café frente al bosquecito' }],
            billingAddress: {},
            phone: '',
            email: 'pedritoperezg@gmail.com',
            payments: { 'main': { alias: 'main', type: 'DEBIT', nombre: 'Pedrito Pérez García', numero: '775 5484 22245', expiracion: '22-20-2022', cvv: '745' } },
            shopping: {},
            returns: {},
            valid: true,
        },
        {
            id: 2,
            isAdmin: true,
            password: bcrypt.hashSync('123456', 11),
            name: 'Camila',
            lastName: 'Astruaga Andersensen',
            rut: '9.876.543-2',
            shippingAddress: [],
            billingAddress: {},
            phone: '412275942',
            email: 'lacuacua@gmail.com',
            payments: {},
            shopping: {},
            returns: {},
            valid: true,
        },
    ],
};
export default data;