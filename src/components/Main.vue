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
          <div class="num">{{ index + 1}}</div>
          <div class="name">{{ user.name + " " + user.last_name }}</div>
          <div class="comp">1</div>
          <div class="btns">
            <a :href="'https://vk.com/id'+user.id" target="_blank" class="btn vk">профиль vk</a>
          </div>
          <div class="btns">
            <button @click="sendToInProgress(index)" class="btn">в обработку</button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    changeDir(dir) {
      this.$store.dispatch("GET_USERS", {school: dir})
      this.$store.commit("SET_DIR", dir)
    },
    sendToInProgress(index) {
      this.$store.dispatch("UPDATE_STATUS", {id: this.users[index].id, status: "in_progress"})

      this.users[index].status = "in_progress"
    }
  },
  computed: {
      users() {
        return this.$store.state.users.filter(el => el.status == "new")          
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