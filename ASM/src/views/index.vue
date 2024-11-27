<script setup>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap/dist/js/bootstrap.bundle';
    import { reactive, inject, defineEmits, defineProps } from "vue";

    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';

    // Import hình ảnh từ thư mục assets
    import img1 from '../assets/image/01.jpg';
    import img2 from '../assets/image/02.jpg';
    import img3 from '../assets/image/05.jpg';
    import img4 from '../assets/image/03.jpg';
    import img5 from '../assets/image/04.jpg';




    const props = defineProps({
      listPost: {
          type: Array,
          required: true,
      },
    });
</script>

<template>
    <div>
    <Header></Header>
    <main class="content-background">
        <div class="container">
            <div id="carouselExampleDark" class="carousel carousel-dark slide p-3 bg-body-tertiary rounded" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="5000">
                    <img :src="img1" class="d-block w-100 object-fit-cover" alt="..." style="height: 500px;">
                    <div class="carousel-caption d-none d-md-block text-start">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                      <p><a class="btn btn-lg btn-secondary" href="#">Learn more</a></p>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img :src="img2" class="d-block w-100 object-fit-cover" alt="..." style="height: 500px;">
                    <div class="carousel-caption d-none d-md-block text-start">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                      <p><a class="btn btn-lg btn-secondary" href="#">Learn more</a></p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img :src="img5" class="d-block w-100 object-fit-cover" alt="..." style="height: 500px;">
                    <div class="carousel-caption d-none d-md-block text-start">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                      <p><a class="btn btn-lg btn-secondary" href="#">Learn more</a></p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              
            <div class="row g-5 mt-3">
                <div class="col-md-8">
                    <hr class="featurette-divider">

                    <div class="row featurette bg-body-tertiary rounded p-3">
                      <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                        <p><router-link to="/detai-blog" class="btn btn-lg btn-secondary">Đọc thêm</router-link></p>
                      </div>
                      <div class="col-md-5">
                        <img :src="img5" class="featurette-image img-fluid mx-auto" alt="Image description" width="500" height="500">
                      </div>
                    </div>
                
                    <hr class="featurette-divider">
                
                    <div class="row featurette bg-body-tertiary rounded p-4">
                      <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
                        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                        <p><a class="btn btn-lg btn-secondary" href="#">Đọc thêm</a></p>
                      </div>
                      <div class="col-md-5 order-md-1">
                        <!-- Sử dụng thẻ <img> thay vì <svg> -->
                        <img :src="img3" class="featurette-image img-fluid mx-auto" alt="Image description" width="500" height="500">
                      </div>
                    </div>
                    
                
                    <hr class="featurette-divider">
                
                    <div class="row featurette bg-body-tertiary rounded p-3">
                      <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
                        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                        <p><a class="btn btn-lg btn-secondary" href="#">Đọc thêm</a></p>
                        </div>
                      <div class="col-md-5">
                        <img :src="img4" class="featurette-image img-fluid mx-auto" alt="Image description" width="500" height="500">
                      </div>
                    </div>
                
                    <hr class="featurette-divider">

                </div>
            
                <div class="col-md-4">
                  <div class="position-sticky" style="top: 2rem;">
                    <div class="p-4 mb-3 bg-body-tertiary rounded">
                      <h4 class="fst-italic">Về tôi</h4>
                      <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, adipisci dolorem, modi vel quasi nemo inventore, iste facere quae officiis suscipit dolor tenetur deleniti corrupti a! Laboriosam distinctio voluptatum iure.</p>
                    </div>
            
                    <div class="bg-body-tertiary rounded p-3">
                      <h4 class="fst-italic ">Xem nhiều</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                            <div class="col-lg-8">
                              <h6 class="mb-0">Example blog post title</h6>
                              <small class="text-body-secondary">January 15, 2024</small>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                            <div class="col-lg-8">
                              <h6 class="mb-0">This is another blog post title</h6>
                              <small class="text-body-secondary">January 14, 2024</small>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                            <div class="col-lg-8">
                              <h6 class="mb-0">Longer blog post title: This one has multiple lines!</h6>
                              <small class="text-body-secondary">January 13, 2024</small>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
            
                    <div class="p-4 bg-body-tertiary rounded mt-3">
                      <h4 class="fst-italic">Archives</h4>
                      <ol class="list-unstyled mb-0">
                        <li><a href="#">March 2021</a></li>
                        <li><a href="#">February 2021</a></li>
                        <li><a href="#">January 2021</a></li>
                        <li><a href="#">December 2020</a></li>
                        <li><a href="#">November 2020</a></li>
                        <li><a href="#">October 2020</a></li>
                        <li><a href="#">September 2020</a></li>
                        <li><a href="#">August 2020</a></li>
                        <li><a href="#">July 2020</a></li>
                        <li><a href="#">June 2020</a></li>
                        <li><a href="#">May 2020</a></li>
                        <li><a href="#">April 2020</a></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </main>
    <Footer></Footer>
    </div>
</template>
