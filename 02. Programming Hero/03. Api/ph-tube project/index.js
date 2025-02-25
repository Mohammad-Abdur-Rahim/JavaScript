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

    buttonContainer.innerHTML = `<button id="btn-${item.category_id}" onclick="loadVideoCategory(${item.category_id})" class="btn category-btn">
    
    ${item.category}</button>`;

    categoriesContainer.append(buttonContainer);
  });
};
//remove active plus 
const removeActive =()=>{
    const buttons = document.getElementsByClassName('category-btn');
    for(const btn of buttons){
      btn.classList.remove('active');
    }
}
const loadVideoCategory = (id) => {
  //fetch data 
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then((res) => res.json())
  .then((data) => {
    removeActive();
    const activeBtn =document.getElementById(`btn-${id}`);
    activeBtn.classList.add("active");
   
    displayVideo(data.category);
  })
  .catch((error) => console.log(error));
};
// Modal details
const loadDetails = (videoId) => {
  console.log(videoId);
  // fetch data
  fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`)
    .then(res => res.json())
    .then(data => displayDetails(data.video))
    .catch(error => console.log(error))
};
const displayDetails = (video) => {
console.log(video);
const modalContent = document.getElementById('modalContent');
modalContent.innerHTML = `
<img src=${video.thumbnail}/>
<p>${video.description}</p>
`;
//way2 ----
document.getElementById('customModal').showModal();
};




// video data Loaded fetch here 

const loadVideo = (searchText="") => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
    .catch(error => console.log(error))
}
loadVideo();
//search button implements
document.getElementById('searchInput').addEventListener('keyup',(e)=>{
  loadVideo(e.target.value);
})

const displayVideo = (videos) => {
  const videosContainer = document.getElementById('videos');
  videosContainer.innerHTML = "";
 if(videos.length == 0) {
  videosContainer.classList.remove("grid");
  videosContainer.innerHTML = `
  <div class="min-h-[600px] flex flex-col gap-5  justify-center items-center">
  <img src="img/Icon.png"/>
  <h2 class="text-center text-xl font-bold">No Content Here in this Categories</h2>
  </div>`;
  return;
 }else{
  videosContainer.classList.add("grid");
 }

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
<button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error ml-5 text-white">Details</button>
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