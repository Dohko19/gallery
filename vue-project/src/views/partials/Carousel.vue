<template>
  <div class="container">
    <div class="row pt-3">
      <p class="text-rose d-flex" style="font-size: 20px">Conoce las ofertas más actualizadas</p>
    </div>
  </div>
  <div class="pt-3">
    <div id="carouselWBY" class="carousel slide carousel-fade" data-bs-ride="carousel" style="width: inherit">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselWBY" data-bs-slide-to="7" aria-label="Slide 8"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://webookyou.com/img/main/carousel/oferta_hoteles.jpg" class="d-block w-100 img-fluid" alt="">
          <div class="carousel-caption d-flex d-none d-md-block">
            <h5 class="font-carousel">Un descanso a tu manera.</h5>
            <p><a href="{{ route('hoteles') }}" class="btn-carousel-rose">Ver detalles</a></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://webookyou.com/img/main/carousel/oferta_experiencias.jpg" class="d-block w-100 img-fluid" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5 class="font-carousel">Conoce tu próximo destino.</h5>
            <p><a href="{{route('addons')}}" class="btn-carousel-rose">Ver detalles</a></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://webookyou.com/img/main/carousel/oferta_vuelos.jpg" class="d-block w-100 img-fluid" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5 class="font-carousel">¡Vámonos de viaje!</h5>
            <p><a href="{{ route('vuelos') }}" class="btn-carousel-rose">Ver detalles</a></p>
          </div>
        </div>
        <!-- Nuevas imagenes-->
        <div class="carousel-item">
          <a href="/searchaddon?lat=20.91505241&lng=-100.77972412&code=SMA&id=5131&country=San+Miguel+de+Allende+SMA+Mexico+Guanajuato&entrada={{Carbon\Carbon::now()->addDays(5)->format('d/m/Y').' - '.Carbon\Carbon::now()->addDays(10)->format('d/m/Y')}}&adulto=2&nino=0&x=14&y=29#17320" target="_blank">
            <div>
              <img src="https://webookyou.com/img/main/carousel/BANNER_01.jpg" class="d-block w-100 img-fluid" alt="">
            </div>
          </a>
        </div>
        <div class="carousel-item">
          <a href="/searchaddon?lat=20.61728859&lng=-100.18566132&code=QRO&country=Queretaro+QRO+Mexico+Queretaro&entrada={{Carbon\Carbon::now()->addDays(5)->format('d/m/Y').' - '.Carbon\Carbon::now()->addDays(10)->format('d/m/Y')}}&adulto=2&nino=0&x=19&y=22#17759" target="_blank">
            <div>
              <img src="https://webookyou.com/img/main/carousel/BANNER_02.jpg" class="d-block w-100 img-fluid" alt="">
            </div>
          </a>
        </div>
        <div class="carousel-item">
          <a href="/searchaddon?lat=20.08266640&lng=-98.79180145&code=PCA&country=Pachuca+de+Soto+PCA+Mexico+Hidalgo&entrada={{Carbon\Carbon::now()->addDays(5)->format('d/m/Y').' - '.Carbon\Carbon::now()->addDays(10)->format('d/m/Y')}}&adulto=2&nino=0&x=10&y=29#18047" target="_blank">
            <div>
              <img src="https://webookyou.com/img/main/carousel/BANNER_03.jpg" class="d-block w-100 img-fluid" alt="">
            </div>
          </a>
        </div>
        <div class="carousel-item">
          <a href="/searchaddon?lat=19.43325233&lng=-99.13372040&code=MEX&country=CDMX+MEX+Mexico+Mexico&entrada={{Carbon\Carbon::now()->addDays(5)->format('d/m/Y').' - '.Carbon\Carbon::now()->addDays(10)->format('d/m/Y')}}&adulto=2&nino=0&x=14&y=20#15807" target="_blank">
            <div>
              <img src="https://webookyou.com/img/main/carousel/BANNER_04.jpg" class="d-block w-100 img-fluid" alt="">
            </div>
          </a>
        </div>
        <div class="carousel-item">
          <a href="/searchaddon?lat=19.43325233&lng=-99.13372040&code=MEX&country=CDMX+MEX+Mexico+Mexico&entrada={{Carbon\Carbon::now()->addDays(5)->format('d/m/Y').' - '.Carbon\Carbon::now()->addDays(10)->format('d/m/Y')}}&adulto=2&nino=0&x=14&y=20#15984" target="_blank">
            <div>
              <img src="https://webookyou.com/img/main/carousel/BANNER_05.jpg" class="d-block w-100 img-fluid" alt="">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel"
}
</script>

<style scoped>

</style>
