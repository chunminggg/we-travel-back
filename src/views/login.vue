<template>
    <div class="layout ">
        <Card class="login" dis-hover>
            <p slot="title">超想去旅行后台管理系统</p>
            <Input v-model="userName">
            <span slot="prepend">账号</span>
            </Input>
            <Input v-model="passWord" type="password" @on-enter="loginAction">
            <span slot="prepend">密码</span>
            </Input>
            <Button type="primary" class="loginButton" @click="loginAction">登录</Button>
        </Card>
    
    </div>
</template>

<script>
import network from '../tools/network.js'
import cookie from 'js-cookie'
import AV from 'leancloud-storage';
export default {
    data() {
        return {
            userName: '15151965292',
            passWord: '',
        }
    },
    created() {
        var currentUser = AV.User.current();
        if (currentUser) {
           this.$router.push('/home')
        }
      
    },
    methods: {
        handleSubmit(name) {

        },
        keyupEnter() {
            this.$Message.info('123')
        },
        loginAction() {
            var _self = this
            let data = {
                "phoneNumber": this.userName,
                "password": this.passWord,
            }
            this.$Message.info('登录中')
            network.userLogin(data).then((data) => {
                cookie.set('token', data._sessionToken, { expires: 7 })
                setTimeout(function () {
                    _self.$Message.success('登录成功')
                    _self.$router.push('/home')
                }, 500)
            }, (error) => {
                this.$Message.error('登陆失败')
            })

        },

    }
}
</script>

<style >
.login {
    background-color: white;
    position: absolute;
    left: 50%;
    top: 250px;
    margin-left: -180px;
    width: 360px;
}

form {
    margin-top: 10px;
    margin-bottom: 10px;
}

.loginButton {
    margin: 5% 40% auto;
}

.layout {
    background: #f8f8f9
}
</style>