<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/banner-bg.jpg" alt="" />
      <div class="cont">
        <h2><span>huge saving on</span> UHD televisions</h2>
        <p>sale up to 70% off on selected items*</p>
        <v-btn
          variant="outlined"
          style="border-radius: 30px; text-transform: none"
          class="pa-10 py-3 mt-8 ml-5"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 500px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cont {
      color: #fff;
      position: absolute;
      left: 40px;
      top: 40px;
      width: 600px;
      h2 {
        font-size: 57px;
        font-weight: bold;
        padding: 10px 20px 0px 20px;
        text-transform: capitalize;
        span {
          color: rgb(116, 250, 194);
          font-size: 56px;
        }
      }
      p {
        padding: 10px 28px;
        font-size: 23px;
      }
    }
  }
}
// Start Queries
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        position: absolute;
        top: 80px;
        h2 {
          font-size: 30px !important;
          span {
            font-size: 30px;
          }
          p {
            font-size: 18px !important;
          }
        }
        width: 500px;
        left: 0;
      }
    }
  }
}
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 330px;
      .cont {
        position: absolute;
        top: 80px;
        h2 {
          font-size: 20px !important;
          span {
            font-size: 20px;
          }
        }
        width: 500px;
        left: 0;
        p {
          font-size: 12px;
        }
      }
    }
  }
}
@media (max-width: 580px) {
  .banner {
    .parent {
      height: 330px;
      .cont {
        position: absolute;
        top: 80px;
        h2 {
          font-size: 15px !important;
        }
        button {
          width: 100px !important;
          font-size: 13px !important;
        }
        width: 400px;
        left: 0;
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
