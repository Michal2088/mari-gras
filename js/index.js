var Funders=[
    {
    name:`Walk-On's Bistreaux and Bar`,
    src_img:"images/founder1.png",
    paragraph:`There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering, Cajun cuisine to life. And whether you’re here for dinner with the family, date night, cocktails with the girls or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.`,
    link:`https://walk-ons.com/`
},
    {
    name:`Sheraton New Orleans Hotel`,
    src_img:"images/founder2.webp",
    paragraph:`Brimming with style and grounded in our community, Sheraton New Orleans Hotel is the perfect home base for your downtown escape. Located on Canal Street, our hotel is steps from the buzz of the French Quarter, and also offers seamless access to notable NOLA points of interest including the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center.`,
    link:`https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/`,
},
    { 
    name:` Ace Hotel New Orleans`,
    src_img:"images/founder3.png",
    paragraph:`Ace Hotel New Orleans Located in the Warehouse District of New Orleans, a 5-minute walk from Harrah Casino, Ace Hotel New Orleans boasts a rooftop bar and award-winning restaurant.`,
    link:`https://acehotel.com/new-orleans/`,
},
    {
    name:`The Ritz-Carlton, New Orleans`,
    src_img:"images/founder4.jpg",
    paragraph:`Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.`,
    link:`https://www.ritzcarlton.com/en/hotels/new-orleans`
},
    {
    name:`Premium Parking - P402`,
    src_img:"images/founder5.jpg",
    paragraph:`You can pay in advance, or when you arrive, there is event parking, disabled parking, night parking and more
    We are here for you`,
    link:`https://www.premiumparking.com/P402`
},
    {
    name:`Louisiana Children's Museum`,
    src_img:"images/founder6.jpg",
    paragraph:`The Louisiana Children's Museum has cleanliness and safety practices throughout our museum that protect the health and well-being of our guests, our volunteers are always here for you`,
    link:`https://lcm.org/`
},
    {
    name:`Museum of Death`,
    src_img:"images/founder7.jpg",
    paragraph:`The city of New Orleans has dropped their mask mandate, therefore wearing a face mask inside the Museum of Death is optional, but still recommended.`,
    link:`http://www.museumofdeath.net/`
},
    {
    name:`Haunted Museum`,
    src_img:"images/founder8.webp",
    paragraph:`Join us for a spirited adventure through Zak Bagans' The Haunted Museum in Las Vegas, as seen on the Travel Channel's Ghost Adventures!`,
    link:`https://thehauntedmuseum.com/`
},
]
function modal(index) {
    document.getElementById('exampleModalLabel').innerHTML=Funders[index].name;
    document.getElementById('modal_idImg').src=Funders[index].src_img;
    document.getElementById('modal_idImg').style.maxHeight='20rem';
    document.getElementById('body_card').innerHTML=Funders[index].paragraph;
    document.getElementById('a_modal_id').href=Funders[index].link;
}