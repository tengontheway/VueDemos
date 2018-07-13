<template>
    <div v-theme:column="'narrow'" id="all-blogs">
        <h1>All blog articles</h1>
        <div v-for="blog in blogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title }}</h2>
            <article>{{ blog.desc }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [
                {
                    title: 'CSS display属性',
                    desc: '对于 XML,由于 XML 没有内置的这种层次结构,所有 display 是绝对必要的。 注释:CSS2 中有值 compact 和 marker,不过由于缺乏广泛的支持,已经从 CSS2.1 中去除'
                },
                {
                    title: 'CSS Display(显示) 与 Visibility(可见性) | 菜鸟教程',
                    desc: '2016年11月13日 - 理解与应用css中的display属性display属性是我们在前端开发中常常使用的一个属性,其中,最常见的有:...'
                },
                {
                    title: 'CSS display 属性详解 - 小白的前端之路 - SegmentFault 思否',
                    desc: 'display: block;这个值大家不陌生,我们最熟悉的 缺省就是这个值,最基本的块级元素,属于 css入门初学者都知道的概念,只要是容器类型的元素基本都是这个值。除 之外...'
                },
                {
                    title: 'css3 display 详解 - 从前有一个香蕉 - 博客园',
                    desc: '2018年5月31日 - 3. CSS display属性:介绍此属性对布局的影响。 1. HTML元素分类 HTML元素大题可分为内联(inline)元素和块(block)元素。 1.1 内联元素(inline) ①元素...'
                },
                {
                    title: 'CSS display使用 - CSDN博客',
                    desc: '2017年9月8日 - 今天我们来分析一下display的一些用法,display样式在我们整个CSS设置中,非常重要,掌握好display,才能有效的解决...'
                },
            ]
        }
    }
}
</script>

<style scoped>
#all-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 10px 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>