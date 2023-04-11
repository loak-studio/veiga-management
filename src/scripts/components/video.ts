const videos = Array.from(document.querySelectorAll('.video__iframe')) as HTMLElement[]

if(videos.length > 0){
  videos.forEach(video=>{
    const startVideo = ()=>{
      const attributes = Array.from(video.attributes)
      const iframe = document.createElement('iframe')
      for (var d in video.dataset) {
        iframe.setAttribute(d, video.dataset[d] as string)
      }
      video.classList.forEach(c=>{
        iframe.classList.add(c)
      })
      video.replaceWith(iframe)
    }
    const button = video.querySelector('.video__play-button') as HTMLButtonElement
    video.addEventListener('click',startVideo)
    button.addEventListener('click',startVideo)
  })
}