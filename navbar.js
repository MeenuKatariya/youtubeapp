// AIzaSyBZVoJd4B4JPO0WAW1clpcxgx9udZvvDpg


// https://www.googleapis.com/youtube/v3

var box=document.querySelector("#box");
// document.querySelector("#btn").addEventListener("click",searchData);

async function searchData()
{
    try{
        var input=document.getElementById("input").value;
          var result=await fetch(`https://www.googleapis.com/youtube/v3/search?q=${input}&part=snippet&key=AIzaSyBZVoJd4B4JPO0WAW1clpcxgx9udZvvDpg&maxResults=20`)
          var data=await result.json();
        //   console.log(data)
          displayData(data)
        }
        catch(error)
        {
            console.log(error)
        }
     }

     function displayData(data)
     {
         data.items.forEach(element => {
             
            var div=document.createElement("div");
            div.setAttribute=("class","div")
            var title=document.createElement("p");
            title.innerText=element.snippet.title;
             title.setAttribute("class","title");

             var img=document.createElement("img");
             img.src=element.snippet.thumbnails.default.url;
             img.setAttribute("class","img");
                 



             var channelTitle=document.createElement("p");
             channelTitle.innerText=element.snippet.channelTitle;

             div.addEventListener('click', ()=>{
                 var video = element.id.videoId;
                //  console.log(video);
                searchVideo(video);

             })
             div.append(img,title,channelTitle);
             box.append(div);
             
        });
             
    }
     
    async function searchVideo(videoId)
{
    try{
          var result=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,player&id=${videoId}&key=AIzaSyBZVoJd4B4JPO0WAW1clpcxgx9udZvvDpg`)
          var data=await result.json();

          localStorage.setItem('videoDetails', JSON.stringify(data.items[0].player.embedHtml));
          window.location.href='./video.html';
       
        // console.log(data.items[0].player.embedHtml);
       
        

        }
        catch(error)
        {
            console.log(error)
        }
}

