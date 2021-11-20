<template>
  <div class="item">
    <div class="card__content">
      <div class="item__image-container-all">
        <div class="card__image-container">
          <img class="item__image" src="" alt="Product" />
        </div>
        <div class="card__image-container">
          <img class="item__image" src="{itemPage.images[1]}" alt="Product" />
        </div>
      </div>
      <div class="card__description">
        <div class="card__price-and-score">
          <div class="card__score">
            <button name="scoreButton" class="card__score-button button">
              <div class="card__container-btn">
                <span class="card__score-text"> {itemPage.rating} </span>
                <img
                  src="@/assets/img/star.svg"
                  alt="score"
                  class="card__score-image-btn"
                />
              </div>
            </button>
          </div>
          <div class="card__price">₴{itemPage.price}</div>
        </div>
        <div class="card__description-text">
          <span class="item__header">{itemPage.title}</span>
        </div>
      </div>
    </div>

    <div class="item__actions">
      <button class="item__wishlist-btn button" name="wishlist">
        <div class="card__container-btn">
          <img class="card__heart" src="@/assets/img/Path.svg" alt="Like" />
          <div class="card__text-btn">WISHLIST</div>
        </div>
      </button>
      <button class="item__add-btn button button" name="addToCart">
        <div class="card__container-btn">
          <img
            class="card__add-to-cart"
            src="@/assets/img/shopping-bag.svg"
            alt="Shop"
          />
          <div class="card__text-btn">ADD TO CART</div>
        </div>
      </button>
      <button class="item__btn-home button">
        <div class="card__container-btn">
          <img
            class="card__add-to-cart"
            src="@/assets/img/home.svg"
            alt="home page"
          />
          <div class="card__text-btn">GO TO MAIN PAGE</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemPage",
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__actions {
    margin: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1000px;
  }
  &__header {
    font-size: 28px;
    font-weight: 600;
  }

  &__wishlist-btn {
    width: 100%;
    padding: 14px 0;
    color: map-get($colors, black);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &__add-btn {
    width: 100%;
    padding: 14px 0;
    background: map-get($colors, main-color);
    color: map-get($colors, white);
    // border-bottom-right-radius: 8px;
  }
  &__btn-home {
    width: 100%;
    padding: 14px 0;
    color: map-get($colors, black);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &__image-container-all {
    display: flex;
    justify-content: space-around;
    align-content: space-around;
  }

  &__image {
    max-width: 600px;
  }

  @media (max-width: map-get($breakpoints, lg)) {
    &__image {
      max-width: 360px;
    }
  }

  @media (max-width: map-get($breakpoints, md)) {
    &__image {
      max-width: 320px;
    }
    &__image-container-all {
      flex-direction: column;
    }
  }

  @media (max-width: map-get($breakpoints, sm)) {
    &__image {
      max-width: 250px;
    }
    &__image-container-all {
      flex-direction: column;
    }
  }
}
</style>