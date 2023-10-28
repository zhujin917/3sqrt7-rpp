# 3sqrt7-rpp

一款轻量级的轮播图组件。

## 示例

### HTML

```html
<div class="_3sqrt7-rpp" id="rpp">
    <div class="rpp-screen">
        <div class="rpp-left">
            <h1>Title 1</h1>
            <a href="#">Link 1</a>
        </div>
        <div class="rpp-right">
            <img src="/path/to/image1.webp">
        </div>
    </div>
    <div class="rpp-screen">
        <div class="rpp-left">
            <h1>Title 2</h1>
            <a href="#">Link 2</a>
        </div>
        <div class="rpp-right">
            <img src="/path/to/image2.webp">
        </div>
    </div>
</div>
```

### JS

#### Vue

```html
<script lang="ts">
    import _3sqrt7_Rpp from "@/your/path/3sqrt7-rpp";
    export default {
        data() {
            return {
                rpp: null
            };
        },
        mounted() {
            this.rpp = new _3sqrt7_Rpp(document.getElementById("rpp"));
        }
    }
</script>

<style>
    @import url("@/your/path/3sqrt7-rpp/style.css");
</style>
```

#### 浏览器

```html
<script type="module">
    import _3sqrt7_Rpp from "./your/path/3sqrt7-rpp/index.js";
    let rpp = new _3sqrt7_Rpp(document.getElementById("rpp"));
</script>
```
