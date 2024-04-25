$(document).ready(function() {
    // Datos del menú
    var menuData = [
        { 
            imgSrc: 'img/Locro.jpg', 
            title: 'Locro de Gallina Criolla', 
            description: '¡Disfruta de nuestro delicioso Locro de Gallina con descuento especial! ¡Auténtico sabor tradicional sin esperas! ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Smani.jpg', 
            title: 'Sopa de Mani', 
            description: '¡Disfruta de nuestra nutritiva Sopa de Maní. Hemos mejorado la receta con menos grasa saturada y más nutrientes. ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Majau.jpg', 
            title: 'Majadito', 
            description: '¡Prueba nuestro delicioso y nutritivo Majadito con carne de res, arroz y plátano maduro! Disfruta de una comida reconfortante y llena de sabor. ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/PiqueM.png', 
            title: 'Pique Macho', 
            description: '¡Saborea nuestro Pique Macho con carne de res, chorizo, cebolla, tomate y papas fritas! ¡Una explosión de sabor en cada bocado! ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Silpancho.jpg', 
            title: 'Silpancho', 
            description: '¡Descubre nuestro exquisito Silpancho con descuento especial! Sabor auténtico y delicioso que te sorprenderá. ¡Aprovecha esta oferta única!' 
        },
        { 
            imgSrc: 'img/ChiChapo.jpg', 
            title: 'Chicharron de Pollo', 
            description: '¡Disfruta de nuestro crujiente y delicioso Chicharrón de Pollo! Ideal para compartir o como plato principal. ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Refresco.png', 
            title: 'Refrescos', 
            description: 'Disfruta nuestro riquisimos refrescos, ya sea de maracuya, naranja o frutilla, acompaña bien tus esquisitos platos de comida.' 
        },
        { 
            imgSrc: 'img/Gaseosa.png', 
            title: 'Gaseosas', 
            description: 'Elige lo que mejor te acompañe, Coca-Cola, Fanta o Sprite, las comidas van mejor con el sabor que mas disfrutes, elige ya.' 
        }
    ];

    // Generar las tarjetas del menú
    var menu = $('#menu');
    menuData.forEach(function(item) {
        var card = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${item.imgSrc}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        menu.append(card);
    });
});
