<template>
<div class="contact-page">
    <div class="one">
        <h1 class="dark">Heb jij een uitdaging?</h1>
        <p class="dark">Wij staan altijd klaar voor een nieuwe uitdaging.
            Wil jij ons uitdagen of heb je een interessant idee om een keer over te sparren?
            Neem dan gerust contact met ons op, wij zijn iniedergeval erg benieuwd.
        </p>
        <button @click="$router.push('werk')" class="button-primary">Bekijk ons werk</button>
    </div>
    <div class="two">
        <div class="content">
            <div class="person" style="background-image: url(./static/images/Avatar.jpeg)">
                <div class="company" style="background-image: url(./static/images/logo-agency4.png)"></div>
            </div>
            <h3 class="dark">Samen sparren?</h3>
            <p class="dark">Heb je een uitdagende vraag of een grensverleggend idee?
                Neem dan contact op met Rob.
                Bel mij op <a href="tel:+31621164664">06 2116 4664</a>
                of mail ons op <a href="mailto:hallo@pixeldenker.nl">hallo@pixeldenker.nl</a></p>
            <div class="map" ref="map"></div>
        </div>
    </div>
</div>
</template>

<script>
import { EventBus } from "../eventBus";

export default {
  name: "ContactPage",
  data() {
    return {
      map: "",
        markerCoordinates: [
            {
                latitude: 52.786896,
                longitude: 6.11753
            },
            {
                latitude: 53.201242,
                longitude: 5.802573
            }
        ]
    };
},
    created() {
        EventBus.$emit('isCase', {isCaseLogo: false})

        EventBus.$emit('toggleMenu', { toggleMenu: false })
        EventBus.$emit('closeMenu', { toggleMenu: false })
    },
    mounted() {
        const bounds = new google.maps.LatLngBounds()
        const element = this.$refs.map
        const mapCenter = this.markerCoordinates[0]
        const options = {
            zoom: 14,
            center: new google.maps.LatLng(mapCenter.latitude, mapCenter.longitude)
        }

        const map = new google.maps.Map(element, options)
        const icon = 'http://dehuyskamer.net/icon/Slice.png'

        this.markerCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            const marker = new google.maps.Marker({ 
                position,
                icon: icon,
                map
            });

            map.fitBounds(bounds.extend(position))
        });
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/all";

.contact-page {
  display: grid;
  grid-template-columns: 498px 1fr;
  grid-template-rows: auto;
  grid-column-gap: 41px;
  padding: 16px;

  @include breakpoint(md) {
    grid-template-columns: 1fr;
  }

  .one {
    padding: 140px 80px;
    min-height: calc(100vh - 32px);
    width: 100%;
    background-image: linear-gradient(to bottom, #f6f9fe, #edf3fd);
    @include border-radius(6px);
    @include box-sizing(border-box);
  }

  .two {
    position: relative;
    min-height: calc(100vh - 32px);
    width: 100%;
    background-color: white;

    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      .person {
        position: relative;
        width: 48px;
        height: 48px;
        margin-bottom: 24px;
        // background-color: gray;
        background-size: cover;
        background-position: center;
        border: 1px solid rgba(37, 52, 74, 0.16);
        box-shadow: 0 8px 32px 0 rgba(37, 52, 74, 0.16);
        @include border-radius(17px);

        .company {
          position: absolute;
          bottom: -12px;
          right: -12px;
          width: 24px;
          height: 24px;
          // background-color: blue;
          background-size: cover;
          background-position: center;
          box-shadow: 0 8px 16px 0 rgba(99, 146, 247, 0.16);
          @include border-radius(32px);
        }
      }

      p {
        margin-top: 0;
      }

      .map {
        width: 100%;
        height: 480px;
        background-color: gray;
        @include border-radius(6px);
      }
    }
  }
}
</style>

