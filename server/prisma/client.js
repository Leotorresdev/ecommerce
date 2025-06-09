const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
    await prisma.product.deleteMany(); // Elimina todos los productos existentes
    await prisma.product.createMany({
        data: [
    { title: "Esferas de cristal iluminadas", price: 29.99, imageUrl: "https://negocios1000.com/wp-content/uploads/2011/08/Captura-de-pantalla6.jpg" },
    { title: "Macetas inteligentes", price: 49.99, imageUrl: "https://www.infobae.com/resizer/v2/OXHAV2P54VHJDLR75YWCQDVCC4.JPG?auth=5354174915519a793f188bce17a67d211860acdd3e0b1d65cac5b66813c020b5&smart=true&width=1200&height=900&quality=85" },
    { title: "Relojs inteligentes", price: 39.99, imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRlLksJVzXI8LtrADl1AmYHzokfWk6XIsd0RcmvEbj4IFLAHEhm0CLAg3JIIiAEhjLyxISW0A8xZ0Fq5x3xT-NzKse6BBw618tJ2eMUN7aISfgLHhfx1jpRf4fkvw9OkVHA5ML6e3yJU2G/s1600/apple-watch-edition.jpg" },
    { title: "Iphone 16", price: 600, imageUrl: "https://macstore.com.pa/cdn/shop/files/IMG-14858881_8c2df34a-bbc4-4613-989c-2941c0765310.jpg?v=1731684434&width=823" },
    { title: " MacBook Air con chip M3", price: 800.99, imageUrl: "https://media.es.wired.com/photos/65eb5ed3c48059fcf30b3d42/master/pass/MacBook-Air-M3-Review-Featured-G.jpg" },
    { title: "Micrófonos Inalambricos Usb C Lightning ", price: 20.99, imageUrl: "https://rapikom-media.s3.amazonaws.com/panel/backend/imagenes/productos/08/16802011229020.jpg" },
  ]
    })
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
    
module.exports = prisma;
