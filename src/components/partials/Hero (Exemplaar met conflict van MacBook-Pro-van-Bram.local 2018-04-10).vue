<template>
    <div class="hero-container">
        <div :class="['hero-content', type]">
            <div v-if="this.preContent" class="pre-content">
                <div v-for="(image, index) in this.preContent.images" :key="index" class="image" :style="{'background-image': 'url(' + image + ')'}"></div>

                <div class="text">{{ this.preContent.text }} <a v-if="this.preContent.linkText" :href="this.preContent.linkUrl">{{this.preContent.linkText}}</a></div>
            </div>

            <h1 class="dark">{{this.title}}</h1>
            <h3 class="dark" v-if="this.subtitle !== undefined">{{this.subtitle}}</h3>
            <p v-if="this.content" class="dark">{{this.content}}</p>
            <button v-if="this.buttonText !== undefined" class="button-primary">{{this.buttonText}}</button>
            <button v-if="this.secondButtonText !== undefined" class="button-secondary second-button">{{this.secondButtonText}}</button>
            <div class="image-container">
                <div class="image"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: [
    "type",
    "backgroundImage",
    "title",
    "subtitle",
    "content",
    "buttonText",
    "buttonLink",
    "secondButtonText",
    "secondButtonLink",
    "preContent"
  ],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/all";

.hero-container {
  position: relative;
  // background-image: linear-gradient(to bottom, #f6f9fe, #edf3fd);
  background-image: linear-gradient(to bottom, #f6f9fe, rgba(237, 243, 253, 0));
  // background-size: cover;
  // background-position: center;
  margin: 20px 16px 0;
  padding-bottom: 100px;
  border-radius: 6px;

  @include breakpoint(xs) {
    margin: 8px;
    height: calc(100vh - 16px);
    min-height: 0;

    .hero-content {
      &.left,
      &.center,
      &.case {
        padding: 95px 16px 0 !important;
      }

      p {
        margin-top: 8px;
      }

      button {
        position: absolute;
        bottom: 32px;
        left: 16px;
        right: 16px;
        width: calc(100% - 32px);
      }
    }
  }

  .hero-content {
    padding: 89px 80px;
    padding-right: 144px;

    .pre-content {
        padding-left: 50px;
        position: relative;
        min-height: 32px;
        margin-bottom: 40px;

        .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 32px;
            height: 32px;
            background-color: gray;
            box-shadow: 0 8px 16px 0 rgba(58, 138, 215, 0.16);
            @include border-radius(80px);
            z-index: 100;
            background-size: cover;
            background-position: center;
            box-shadow: 0 8px 16px 0 rgba(58, 138, 215, 0.16);

            &:nth-child(2) {
                left: 20px;
                background-color: blue;
                z-index: 99;
            }

             &:nth-child(3) {
                left: 40px;
                background-color: orange;
                z-index: 98;
            }
        }

        .text {
            display: inline-block;
            margin-left: 50px;
            font-family: $source-sans-pro;
            @include font-size(18px);
            line-height: 1.94;
            color: $gray-dark-dark;
        }
    }

    .image-container {
      position: relative;
      width: 100%;
      min-height: 350px;
      padding-top: 86px;

      .image {
        position: absolute;
        left: 0;
        right: 0;
        height: 582px;
        background-color: gray;
      }
    }

    &.left {
      text-align: left;
      padding-top: 160px;
      padding-left: 140px;
      min-height: 778px;
    }

    &.center {
      text-align: center;
      padding-top: 218px;

      .image-container {
        display: none;
      }

      p {
        margin: 0 auto;
      }
    }

    &.case {
      text-align: left;

      h1 {
        color: #37465d;
        max-width: 888px;
      }

      .image-container {
        display: none;
      }
    }

    h3 {
      max-width: 1024px;
      margin: 40px 0 0;
      font-family: $source-sans-pro;
      @include font-size(28px);
      font-weight: 300;
      line-height: 1.57;
      color: $gray-dark-main;
    }

    p {
      max-width: 888px;
    }

    button {
      margin-top: 30px;
    }

    button.second-button {
      margin-left: 16px;
    }
  }
}
</style>
