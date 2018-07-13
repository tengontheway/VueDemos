# lesson1
- #app、el、data
- import script

# lesson2
- Data & methods

# lesson3
- Data binding

# lesson4
- event: 点击、双击、鼠标移动
- v-on监听DOM事件

# lesson5 事件修饰符
- 事件修饰符 https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6
- v-on的事件的修饰

# lesson6 键盘事件
- 键盘事件

# lesson7 双向绑定数据
- v-modal双向绑定数据

# lesson8 Computed和普通函数的区别
- Computed函数的调用只依赖于相关的变量，而普通函数在变量更改时会全部调用
- 对于任何复杂逻辑，你都应当使用计算属性

参考链接: https://cn.vuejs.org/v2/guide/computed.html

# lesson9 动态CSS样式

# lesson10 条件
- v-if v-show


# lesson 11 Bag Hit Game
- 更换背景
- 动态更换长度
- 按钮显示隐藏
问题: 图片无法居中

# lesson12
- 多个实例
- function 和 computed function

# lesson 13
- 组件实例

# lesson 15
- 传递参数: primitive(原始) 和 reference(引用) types

# lesson 16 events
- 传递事件 child => parent, this.$emit('eventName', params)

# lesson 17 events bus
- 事件列表
- bus = new Vue()
- bus.$emit(eventName, eventParams)
- bus.$on(eventName, (data) => { ... })

# lesson 18 slots
- slot槽

# lesson 19 动态组件
- <component v-bind:is='dynamic-component-1'></component>
- keep-alive 保持数据

# lesson 20 Checkbox selectbox数据绑定
- Input数据绑定
- 实例： Add blog.
- input 数据绑定 v-model
- checkbox数据绑定
- checkbox 样式设置
- selectbox 数据绑定

# lesson21 测试demo
- AddBlog组件
- ShowBlog组件
- 动态切换组件
- 样式理解

# lesson 22 custom directive
- Vue.directive
- v-theme:column
```
bind(el, binding, vnode) {
    binding.value ...
    binding.arg ...
    el.style.color  ...
}
```
















