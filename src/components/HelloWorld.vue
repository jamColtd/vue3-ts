<template>
  <div class="hello">
    <div class="login-box">
      <!-- <header>登录</header> -->
      <div class="body">
        <form class="login-form" method="post">
          <table>
            <tr>
                <td>账号</td>
                <td>
                  <input type="text" class="input-md30 font-but input-text" placeholder='User/Email'>
                </td>
            </tr>
          </table>
          <div class="table">
              <div class="table-row">
                  <div class="table-cell">密码</div>
                  <div class="table-cell">
                    <input type="text" class="input-md30 font-but input-text" placeholder='Password'>
                  </div>
              </div>
          </div>
        </form>
      </div>
      <footer>
        <ul>
          <li style="margin-bottom:5px">
            <span class="font-size">Resq</span>
          </li>
          <li><button class="input-md30 but-bac font-but">Login</button></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{ 
  background-image: url(../assets/2.jpg) ;
  background-size: 100% 100%;
   background-repeat: no-repeat;
  display:flex;
  justify-content: center;
  align-items: center;  
  height: 100%;
  width: 100%;
}
.font-size{
  text-decoration:underline;
  font-size: 15px;
  color: white;
}
.input-md30{
  width:300px;
  height:30px;
  margin: 0 10px;
}
input::-webkit-input-placeholde{
  /* color: azure; */
  font-size: 15px;
  font-weight: bold;
}
.input-text{
  border-radius: 4px;
  outline:none;
  border:none;
  background-color:rgba(43, 21, 21, 0.3);
}
.but-bac{
  background-color: rgba(6, 6, 29, 0.7);
  border:none;
  outline:none;
  /* background-color:rgba(0,0,0,0); */
  border-radius: 5px;
}
.but-bac:hover{
  background-color: rgb(47, 47, 250);
  border-radius: 7px;
}
.font-but{
  color: azure;
  font-size: 15px;
  font-weight: bold;
}
.login-box{
  padding: 30px;
  width:500px;
  border-radius: 10px;
  border:1px solid grey
}
.left{
    background:red;
}
.right{
    background:blue;
}
table{
    border-collapse: collapse;
}
.table{
    margin-top:20px;
    display: table;
}
.table-row{
    display: table-row;
}
.table-cell{
    display: table-cell;
}
.body{padding: 20px 30px;}
</style>
