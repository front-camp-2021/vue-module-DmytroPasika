<template>
  <div class="card" :id="item.id" data-element="body">
    <div class="card__content">
      <div class="card__image-container">
        <img class="card__image" :src="item.images[0]" alt="Product" />
      </div>
      <div class="card__description">
        <div class="card__price-and-score">
          <div class="card__score">
            <button name="scoreButton" class="card__score-button button">
              <div class="card__container-btn">
                <span class="card__score-text"> {{ item.rating }} </span>
                <img
                  src="@/assets/img/star.svg"
                  alt="score"
                  class="card__score-image-btn"
                />
              </div>
            </button>
          </div>
          <div class="card__price">₴{{ item.price }}</div>
        </div>
        <div class="card__description-text">
          <span class="card__header">{{ item.title }}</span>
          <span class="card__text">{{
            `${item.brand} - ${item.category}`
          }}</span>
        </div>
      </div>
    </div>

    <div class="card__actions">
      <button
        class="card__wishlist-btn button"
        name="wishlist"
        @click="() => favorites(item.id)"
      >
        <div class="card__container-btn">
          <img class="card__heart" src="@/assets/img/Path.svg" alt="Like" />
          <div class="card__text-btn" v-if="!inFavorites(item.id)">
            WISHLIST
          </div>
        </div>
      </button>
      <button
        class="card__add-btn button"
        name="addToCart"
        @click="cart(item.id)"
      >
        <div class="card__container-btn" v-if="!inCart(item.id)">
          <img
            class="card__add-to-cart"
            src="@/assets/img/shopping-bag.svg"
            alt="Shop"
          />
          <div class="card__text-btn">ADD TO CART</div>
        </div>
        <div class="card__container-btn" v-else>
          <div class="card__text-btn">REMOVE FROM CART</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useMainComposable } from "@/composables/mainComposable";

export default defineComponent({
  name: "Card",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  setup() {
    const mainComposable = useMainComposable();
    const {
      addToFavorites,
      addToCart,
      inFavorites,
      inCart,
      removeFromFavorites,
      removeFromCart,
    } = mainComposable;

    const favorites = (id) => {
      if (inFavorites(id)) {
        removeFromFavorites(id);
      } else {
        addToFavorites(id);
      }
    };

    const cart = (id) => {
      if (inCart(id)) {
        removeFromCart(id);
      } else {
        addToCart(id);
      }
    };
    return {
      cart,
      favorites,
      inCart,
      inFavorites,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";
@import "@/styles/ref.scss";
@import "@/styles/buttons.scss";

.card {
  @include box-shadow();
  @include flex-btw();
  flex-direction: column;
  flex-wrap: nowrap;
  width: 400px;
  height: 486px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  margin-top: 28px;
  margin-right: 28px;
  background-color: map-get($colors, white);

  &__description {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  }

  &__image-container {
    display: flex;
    justify-content: center;
    padding: 32px 0;
  }

  &__image {
    height: auto;
    width: auto;
    max-width: 271px;
    max-height: 272px;
  }

  &__score-image-btn {
    height: 12px;
  }

  &__price-and-score {
    @include flex-btw();
    flex-direction: row;
    padding: 0 0 16px;
  }

  &__score-button {
    color: map-get($colors, white);
    background: map-get($colors, main-color);

    height: 30px;
    width: 64px;
    border-radius: 3px;
  }

  &__score-text {
    @include font-sh();
    font-weight: 400;
    padding: 2px 7px;
  }

  &__price {
    @include font-sh(18px, 21px);
  }

  &__header {
    @include font-sh(16px, 19px);
  }

  &__text {
    @include font-sh(12px, 14px);
    font-weight: 300;
  }

  &__actions {
    display: flex;
    width: 100%;
    font-weight: 600;
    font-size: 14px;
  }

  &__wishlist-btn {
    width: 100%;
    padding: 14px 0;
    color: map-get($colors, black);
    border-bottom-left-radius: 8px;
  }

  &__add-btn {
    width: 100%;
    padding: 14px 0;
    background: map-get($colors, main-color);
    color: map-get($colors, white);
    border-bottom-right-radius: 8px;
  }

  &__description-text {
    display: flex;
    flex-direction: column;
  }

  &__container-btn {
    @include flex-center();
    font-weight: 600;
  }

  &__text-btn {
    padding: 2px 7px;
  }

  @media (max-width: map-get($breakpoints, lg)) {
    & {
      width: 320px;
      height: auto;
      margin-right: 14px;
    }

    &__text {
      padding-bottom: 6px;
    }

    &__image {
      max-width: 180px;
      max-height: 180px;
    }

    &__price {
      font-size: 15px;
    }

    &__score-button {
      height: auto;
      width: auto;
    }

    &__wishlist-btn {
      padding: 10px 0px;
    }
  }

  @media (max-width: map-get($breakpoints, md)) {
    & {
      width: 320px;
      height: auto;
      margin-right: 0px;
    }

    &__text {
      padding-bottom: 6px;
    }

    &__image {
      max-width: 180px;
      max-height: 180px;
    }

    &__price {
      font-size: 15px;
    }

    &__score-button {
      height: auto;
      width: auto;
    }

    &__wishlist-btn {
      padding: 10px 0px;
    }
  }

  @media (max-width: map-get($breakpoints, sm)) {
    & {
      width: auto;
      height: auto;
      margin-right: 0px;
    }

    &__text {
      padding-bottom: 6px;
    }

    &__image-container {
      padding: 11% 11%;
    }

    &__image {
      max-width: 130px;
      max-height: 130px;
    }

    &__score-image-btn {
      height: auto;
    }

    &__price {
      font-size: 15px;
    }

    &__price-and-score {
      padding: 0 0 5%;
    }

    &__score-button {
      height: auto;
      width: auto;
    }

    &__wishlist-btn {
      padding: 10px 0px;
    }
  }
}
</style>