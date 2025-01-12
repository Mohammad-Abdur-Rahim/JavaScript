// Load data Fetch 1st 
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}
// Display function load data 2nd
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById('categories')
  categories.forEach((item) => {
    console.log(item);
    const buttonContainer = document.createElement("div");
    buttonContainer.classList = 'btn btn-primary';

    buttonContainer.innerHTML = `<button onclick="loadVideoCategory(${item.category_id})">
    
    ${item.category}</button>`;

    categoriesContainer.append(buttonContainer);
  });
};
const loadVideoCategory = (id) => {
  // alert(id);
  //fetch data 
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then((res) => res.json())
  .then((data) => displayVideo(data.category))
  .catch((error) => console.log(error));
};

loadCategories();


// video data Loaded fetch here 

const loadVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
    .catch(error => console.log(error))
}
loadVideo();

const displayVideo = (videos) => {
  const videosContainer = document.getElementById('videos');
  videosContainer.innerHTML = "";
  videos.forEach(video => {
    const card = document.createElement('div');
    card.classList ="card card-compact"
      card.innerHTML =
      `
  <figure class="h-[200px] relative ">
    <img
      src=${video.thumbnail}
      alt="Shoes"
      class="h-full w-full object-cover"
      />
      ${video.others.posted_date.length==0 ? "":`  <span class="absolute right-2 bottom-2 bg-black  rounded p-1 text-white" >${getTime(video.others.posted_date)}</span>`

      }
    
  </figure>
  <div class="px-2 py-2 flex gap-2">
  <div>
  <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/></div>
  <div><h2 class="card-title">${video.title}</h2>
  <div class="flex items-center gap-3">
<p class="text-gray-400">${video.authors[0].profile_name}</p>

${video.authors[0].verified=== true ?  `<img class="w-5" src ="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`  :""  }


<p>${video.others.views}</p>
</div>
  </div>

  </div>
`;
    videosContainer.append(card);
  });


};

// time function logic 
function getTime(time){
  const hour = parseInt(time /3600);
  const remainSeconds = time % 3600;
  const minutes = parseInt(remainSeconds / 60);
  return `${hour} hour ${minutes} minute`
}
console.log(getTime(7865));