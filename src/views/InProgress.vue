<template>
 <div class="choose-direction">
    <div class="directions">
      <div :class="{blue: dir == 1}" @click="changeDir(1)" class="direction"><nobr>it-технологии</nobr></div>
      <div :class="{violet: dir == 2}" @click="changeDir(2)" class="direction"><nobr>инженерия</nobr></div>
      <div class="disabled direction  tooltip"><nobr>естественные науки</nobr><span class="tooltiptext">не на хакатоне :)</span></div>
      <div class="disabled direction  tooltip"><nobr>медицина</nobr><span class="tooltiptext">не на хакатоне :)</span></div>
      <div class="disabled direction  tooltip"><nobr>педагогика</nobr><span class="tooltiptext">не на хакатоне :)</span></div>
      <div class="disabled direction  tooltip"><nobr>гуманитарные науки</nobr><span class="tooltiptext">не на хакатоне :)</span></div>
      <div class="disabled direction  tooltip"><nobr>строительство</nobr><span class="tooltiptext">не на хакатоне :)</span></div>
      <div class="disabled direction  tooltip"><nobr>экономика</nobr><span class="tooltiptext">не на хакатоне :)</span></div>
    </div>


    <div class="table">
      <div class="row nav">
        <div class="num">№</div>
        <div class="name">фамилия, имя</div>
        <div class="comp">% соответствия</div>
        <div class="btns">ссылка</div>
        <div class="btns">статус</div>
      </div>
      <div class="container">
        <div :key="index" v-for="(user, index) in users" class="row">
          <div class="num">{{ index + 1 }}</div>
          <div class="name">{{ user.name + " " + user.last_name }}</div>
          <div class="comp">1</div>
          <div class="btns">
            <a :href="'https://vk.com/id'+user.id" target="_blank" class="btn vk">профиль vk</a>
          </div>
          <div class="btns">
            <button @click="accept(index)" class="btn-round"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2242 1.06739L8.42445 14.8822L3.77583 10.2285C3.77546 10.2281 3.77509 10.2277 3.77472 10.2273C3.5976 10.0482 3.38676 9.90586 3.15434 9.80865C2.92143 9.71124 2.6715 9.66108 2.41905 9.66108C2.1666 9.66108 1.91667 9.71124 1.68376 9.80865C1.45179 9.90567 1.2413 10.0476 1.0644 10.2263C0.885903 10.4034 0.74416 10.6141 0.647307 10.8462C0.550065 11.0792 0.5 11.3292 0.5 11.5817C0.5 11.8342 0.550065 12.0842 0.647307 12.3172C0.744351 12.5497 0.886463 12.7608 1.06546 12.9381C1.06582 12.9384 1.06619 12.9388 1.06655 12.9392L7.05551 18.9347C7.8084 19.6884 9.02597 19.6884 9.77893 18.9348C9.77899 18.9348 9.77904 18.9347 9.7791 18.9347L24.9334 3.77809C24.9338 3.77776 24.9341 3.77743 24.9344 3.77711C25.1135 3.59977 25.2556 3.38871 25.3527 3.15612C25.4499 2.9231 25.5 2.6731 25.5 2.4206C25.5 2.16809 25.4499 1.91809 25.3527 1.68508C25.2558 1.453 25.1141 1.24235 24.9356 1.06527C24.7587 0.886564 24.5482 0.744598 24.3162 0.647575C24.0833 0.550165 23.8334 0.5 23.581 0.5C23.3285 0.5 23.0786 0.550165 22.8457 0.647575C22.6132 0.744778 22.4024 0.887089 22.2253 1.06626C22.2249 1.06664 22.2245 1.06701 22.2242 1.06739Z" fill="#1E9400" stroke="#1E9400"/></svg></button>
            <button @click="decline(index)" class="btn-round"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0306 9.9796L19.1367 2.89258L19.1503 2.87894L19.1629 2.86429C19.3925 2.59697 19.5126 2.25286 19.499 1.90072C19.4853 1.54858 19.3389 1.21479 19.0895 0.965992C18.84 0.717226 18.5059 0.571716 18.154 0.558158C17.802 0.5446 17.4577 0.663972 17.1899 0.892748L17.1752 0.905289L17.1615 0.918924L10.0538 8.00762L2.94588 0.910161L2.94567 0.909948C2.68233 0.647309 2.32544 0.5 1.95359 0.5C1.58174 0.5 1.22485 0.647309 0.961509 0.909948C0.69812 1.17263 0.549907 1.52919 0.549907 1.90127C0.549907 2.27334 0.69812 2.6299 0.961509 2.89258L0.961723 2.8928L8.07611 9.9796L0.973812 17.0544C0.834561 17.177 0.721032 17.3262 0.639974 17.4933C0.555823 17.6667 0.508507 17.8557 0.501045 18.0484C0.493583 18.2411 0.526138 18.4332 0.596634 18.6126L1.06137 18.4301L0.596635 18.6126C0.66713 18.7921 0.774022 18.955 0.910524 19.0911C1.04703 19.2273 1.21019 19.3337 1.38973 19.4039C1.56928 19.474 1.76137 19.5064 1.95398 19.499C2.14659 19.4915 2.33564 19.4445 2.50925 19.3607C2.67637 19.2801 2.82576 19.1671 2.94873 19.0283L10.0534 11.9512L17.1615 19.0403L17.1752 19.0539L17.1899 19.0665C17.4577 19.2952 17.802 19.4146 18.154 19.401C18.5059 19.3875 18.84 19.242 19.0895 18.9932L18.7364 18.6392L19.0895 18.9932C19.3389 18.7444 19.4853 18.4106 19.499 18.0585C19.5126 17.7063 19.3925 17.3622 19.1629 17.0949L19.1503 17.0803L19.1367 17.0666L12.0306 9.9796Z" fill="#AF0000" stroke="#AF0000"/></svg></button>

          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'InProgress',
  props: {
    msg: String
  },
  methods: {
    changeDir(dir) {
      this.$store.dispatch("GET_USERS", {school: dir})
      this.$store.commit("SET_DIR", dir)
    },
    accept(index) {
      this.$store.dispatch("UPDATE_STATUS", {id: this.users[index].id, status: "accept"})

      this.users[index].status = "accept"
    },
    decline(index) {
      this.$store.dispatch("UPDATE_STATUS", {id: this.users[index].status, status: "decline"})

      this.users[index].status = "decline"
    }
  },
  computed: {
      users() {
        return this.$store.state.users.filter(el => el.status == "in_progress")          
      },
      dir() {
        return this.$store.state.dir
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .choose-direction {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #595959;

    h2 {
      font-family: Roboto;
      font-size: 56px;
      font-style: normal;
      font-weight: 500;
      line-height: 66px;
      letter-spacing: 0em;
      text-align: left;
    }

    .tooltip .tooltiptext {
      width: 120px;
      bottom: 100%;
      left: 50%;
      margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
    }

    .tooltip .tooltiptext {
      visibility: hidden;
      width: 160px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      bottom: 15%;
      left: 50%;
      margin-left: -80px;
    }

    .tooltip:hover .tooltiptext {
      visibility: visible;
    }

    .directions {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      overflow-y: scroll;
      overflow-x: visible;
      width: 100%;
      padding: 20px;
      margin-top: 36px;
      transition: all .2s ease-in-out;


      .blue {
        background: #3F95D0 !important;
        color: white;
      }

      .violet {
        background: #5429AE !important;
        color: white;
      }

      .disabled {
        background: #BBBBBB!important;
        cursor: not-allowed!important;
      }

      .direction {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 13px 23px;
        margin: 0 8px;
        background: #ECF0F3;
        box-shadow: 8px 8px 15px #D1D9E6, -8px -8px 15px #FFFFFF;
        border-radius: 47px;
        cursor: pointer;
        transition: all .2s ease-in-out;

        

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .table {
      width: 100%;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;

      .container {
        height: 60%;
        width: 100%;
        overflow-y: scroll;
      }

      .nav {
        font-size: 18px;
        line-height: 21px;
        color: #898989 !important;
        margin-bottom: 30px;
        border-bottom: 0px !important;

      }

      .row {
        width: 100%;
        height: 80px;
        display: grid;
        grid-template-columns: 5% 30% 35% 15% 15%;

        font-size: 22px;
        line-height: 26px;
        color: #595959;
        border-bottom: 1px solid #D1D9E6;


        .num {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .name {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .comp {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .btns {
          display: flex;
          justify-content: center;
          align-items: center;
          
          .btn-round {
            width: 42px;
            height: 42px;
            background: #ECF0F3;
            box-shadow: 5.33333px 5.33333px 10px #D1D9E6, -5.33333px -5.33333px 10px #FFFFFF;
            border-radius: 31.3333px;
            border-width: 0px;
            margin: 0 4px;
          }

          .btn {
            height: 42px;
            font-family: Roboto;
            background: #ECF0F3;
            border-radius: 47px;
            padding: 10px 32px;
            border-width: 0px;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            margin: 0 8px;
            color: #595959;
            cursor: pointer;


            border: 1px solid #898989;
            box-sizing: border-box;
          }
          .vk {
            box-shadow: 8px 8px 15px #D1D9E6, -8px -8px 15px #FFFFFF;
            border-width: 0px;
          }
        }
      }
    }

    
  }
</style>
