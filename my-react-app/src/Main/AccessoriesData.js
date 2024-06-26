const AccessoriesData = []; // Define an empty array to store the fetched data

fetch('/api/accessories') // Replace '/api/accessories' with your actual API endpoint
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming the response data is an array of accessories objects
    AccessoriesData.push(...data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

export default AccessoriesData;

// import images from "../Images/Acc-Images";
// const AccessoriesData = [
//     {
//         AccessoriesID: 1,
//         Image: images['ColorfulPageHolder.jpg'],
//         Name: `Colored Page Holder`,
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: '8.5 cm wide, 4 cm high, 1.7 cm thick. and thumb hole diameter includes 4 options: 1.8 cm, 0.2 cm, 2.2 cm, 2.4 cm',
//         Price: 27.00,
//         DateofAddition:'27 May 2024',
//         Stock:10 //stokun me bo boolean
//     },
//     {
//         AccessoriesID: 2,
//         Name: `White Oak Book End`,
//         Image: images['WhiteOak-Bookend.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'When assembled: 5" D x 5.25H x 3.85"W',
//         Price: 101.59,
//         DateofAddition:'27 May 2024',
//         Stock:10
//     }
//     ,
//     {
//         AccessoriesID: 3,
//         Name: `Dark Oak Book End`,
//         Image: images['DarkOak-Bookend.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'When assembled: 5" D x 5.25H x 3.85"W',
//         Price: 101.59, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 4,
//         Name: `Easter Gum Oak Book End`,
//         Image: images['EasterGumOak-Bookend.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'When assembled: 5" D x 5.25H x 3.85"W',
//         Price: 101.59, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 5,
//         Name: `2024 Dotted Calendar`,
//         Image: images['24Calendar.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: '8.5" x 11" / spiral bound',
//         Price: 32.00, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 6,
//         Name: `The Cista Handbag`,
//         Image: images['Cista-Handbag.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: '12" H x 16" W x 6.5" D with an adjustable leather shoulder strap.',
//         Price: 503.00, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 7,
//         Name: `Go Away I'm Reading Mug`,
//         Image: images['READING-mug.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'Height 8cm',
//         Price: 6.99, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 8,
//         Name: `Go Away I'm Reading Totebag`,
//         Image: images['GoAwayWoodcutTotebag.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'Bag measures 36 x 39 cm (excluding handles).',
//         Price: 10.99, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 9,
//         Name: `Standing Book Light`,
//         Image: images['book-light.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'Measures 170 x 215 x 25 mm',
//         Price: 15.49, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 10,
//         Name: `Personal Library Kit`,
//         Image: images['personal-library-kit-.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'Contains 20 self-adhesive pockets, 20 checkout cards, 1 date stamp, 1 stamp pad and 1 pencil.',
//         Price: 20.00, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 11,
//         Name: `Bookaroo Tidy Notebook`,
//         Image: images['Notebook-Tidy.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'Measures 17.5 x 10.5 cm.',
//         Price: 18.00, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 12,
//         Name: `The Flying Boy Book End`,
//         Image: images['The_Flying_Boy_Bookends.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'Made from steel.Measures: 17 x 11 x10 cm. Single bookend.Colour green.',
//         Price: 27.00, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 13,
//         Name: `Cat & Mouse Page Marker`,
//         Image: images['cat-mouse-page-marker.jpg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'pack size: 7 x 0.5 x 18 cm',
//         Price: 13.50, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 14,
//         Name: `Moon & Stars Page Marker`,
//         Image: images['moon-stars-page-marker.jpg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'pack size: 7 x 0.5 x 18 cm',
//         Price: 13.50, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 15,
//         Name: `Alice From WonderLand Page Marker`,
//         Image: images['Alice-Page-Marker.jpg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'pack size: 7 x 0.5 x 18 cm',
//         Price: 13.50, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 16,
//         Name: `Cute Stylish Totebag`,
//         Image: images['thereisnosuchthingTotebag_.jpg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: 'Bag measures 36 x 40 cm',
//         Price: 16.59, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 17,
//         Name: `Leather heart page holder`,
//         Image: images['Leather-page-holder.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: '2.9"L x 2.1". Item Weight:	15 Grams',
//         Price: 12.99,
//         DateofAddition:'27 May 2024',
//         Stock:10
//     },
//     {
//         AccessoriesID: 18,
//         Name: `Floral Resin Book Holder`,
//         Image: images['ResinArt-BookPageHolder.jpeg'],
//         Seller:'?Marka Tregtare?',
//         Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin dui. Integer pulvinar rutrum nibh, eget fringilla arcu elementum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
//         Dimensions: '8.5 cm wide, 4 cm high, 1.7 cm thick. and thumb hole diameter includes 4 options: 1.8 cm, 0.2 cm, 2.2 cm, 2.4 cm',
//         Price: 10.00, 
//         DateofAddition:'27 May 2024',
//         Stock:10
//     }
//  ]

//  export default AccessoriesData