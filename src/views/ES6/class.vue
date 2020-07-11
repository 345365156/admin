<template>
    <div>
        <p>通过extends子类继承父类</p>
        <p>super(x, y) 调用 父类的构造函数</p>
        <p>super.say(x, y) 调用 父类的普通函数</p>
        <p>子类的super调用 必须放在子类的this之后</p>
        <p>constructor的this指向实例，方法里的this指向调用者</p>
    </div>
</template>

<script>
export default {
    name: "class",

    data() {
        return {

        }
    },
    methods: {
        log() {
            console.log()
        }
    },
    created() {
        class Father {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            sum() {
               console.log(this.x + this.y)
            }
            say() {
                console.log('我是你爸爸')
            }
        }

        class Son extends Father {
            constructor (x, y) {
                super(x, y); // 调用父类的构造函数
            }
            say() {
                super.say(''); // 调用父类的普通方法
            }
            subtract() {
                console.log(this.x - this.y)
            }
        }
        let sum1 = new Son()
        sum1.say()
    }
}
</script>

<style scoped>

</style>
