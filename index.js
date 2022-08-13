const creationData = [
  
  {
    name: 'Autumn and Murphy in Space',
    description:
      'A black cat piloting a space a spaceship with a little blonde haired girl digital art',
    photo: './creations/image4.png',
  },
  {
    name: 'Autumn and Murphy in Space',
    description:
      'A black cat piloting a space a spaceship with a little blonde haired girl digital art',
    photo: './creations/image5.png',
  },
  {
    name: 'Autumn and Murphy in Space',
    description:
      'A black cat piloting a space a spaceship with a little blonde haired girl digital art',
    photo: './creations/image6.png',
  },
  {
    name: 'Murphy the voyager',
    description: 'A 3D render of a black cat fighting Cthulu in a spaceship',
    photo: './creations/image1.png',
  },
  {
    name: 'Murphy and Autumn',
    description:
      'A black cat wearing goggles hugging a blonde child girl digital art cyberpunk',
    photo: './creations/image2.png',
  },
  {
    name: 'Murphy and Autumn',
    description:
      'A black cat wearing goggles hugging a blonde child girl digital art cyberpunk',
    photo: './creations/image3.png',
  },
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return '1 year old';
  } else if (calculatedAge == 0) {
    return 'Baby';
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join('')}
  </ul>
  `;
}

function cardTemplate(pet) {
  return `
      <div class="animal">
      <img class="pet-photo" src="${pet.photo}">
      <h2 class="pet-name">${pet.name} <span class="species"> <br>input:<br>(${
    pet.description
  })</span></h2>
      
      ${pet.favFoods ? foods(pet.favFoods) : ''}
      </div>
    `;
}

document.getElementById('app').innerHTML = `
    <h1 class="app-title">AI Photo Creations (${creationData.length} results)</h1>
    ${creationData.map(cardTemplate).join('')}
    <p class="footer">These ${
      creationData.length
    } creations were added recently. They were created using openAI's DALL-E.</p>
  `;
