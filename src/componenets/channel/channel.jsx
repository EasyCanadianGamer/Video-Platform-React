import'./channel.css';




const channel = () => {
    return (
  
      <>
   <section> 

<div class="banner"></div>
<div class = "channelLogo"></div>

</section>


<section>
    <div class ="row row_1">

    <div class="col">
        <h2 class ="channelName"> Eyad Uddin</h2>
    </div>

    </div>

    <div class="row row_2"> 
    <div class="col">
        <p> Hello this is the about section. A short 2 to 4 sentences about this channel</p>
    </div>            
</div>


<div class = "row">

    <div class="col">
        <nav>
        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
              <button class="nav-link" id="nav-videos-tab" data-bs-toggle="tab" data-bs-target="#nav-videos" type="button" role="tab" aria-controls="nav-videos" aria-selected="false">Videos</button>
            </div>
        </nav>
        </div>


        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">Home</div>
        <div class="tab-pane fade" id="nav-videos" role="tabpanel" aria-labelledby="nav-videos-tab" tabindex="0"> 

            <div class ="row">
                <div class ="col col-lg-3 justify-content-between">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn"> 
                <div class="card">
                    <img src="https://placehold.co/1280x720.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Video Title</h5>
                              <p class="card-text">Video Description</p>
                            </div>
            </div>
                      
                    </a>
                </div>

                <div class ="col col-lg-3 justify-content-between">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn"> 
                <div class="card">
                    <img src="https://placehold.co/1280x720.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Video Title</h5>
                              <p class="card-text">Video Description</p>
                            </div>
            </div>
                      
                    </a>
                </div>


                <div class ="col col-lg-3 justify-content-between">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn"> 
                <div class="card">
                    <img src="https://placehold.co/1280x720.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Video Title</h5>
                              <p class="card-text">Video Description</p>
                            </div>
            </div>
                      
                    </a>
                </div>


                <div class ="col col-lg-3 justify-content-between">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn"> 
                <div class="card">
                    <img src="https://placehold.co/1280x720.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Video Title</h5>
                              <p class="card-text">Video Description</p>
                            </div>
            </div>
                      
                    </a>
                </div>


                

                



            

            </div>




        </div>


        </div>



</div>
</section>
      </>
  
  
  
    )
  }
  
  export default channel