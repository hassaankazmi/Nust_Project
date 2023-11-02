<template>
  <div class="flex flex-col">
    <div class="sku-option">
      <p class="option-name my-1">Print Location: <span class="option-value">{{ selectPrint.toUpperCase() }} </span> </p>
      <div class="flex flex-row">
        <div
          v-for="(value, i) in selectStyle.print"
          :key="i"
          v-bind:class="{
            'btn-sp-active': selectPrint === value,
          }"
          @click="onClickPrint(value)"
          class="btn-sp-variant "
        >
          {{ value.toUpperCase() }}
        </div>
      </div>
    </div>

    <div class="sku-option">
      <p class="option-name my-1"> Style: <span class="option-value">{{ selectStyle.name }}</span> </p>
      <div v-for="(items, i) in _.chunk(styles, 4)" :key="i" class="flex flex-row">
        <div
          v-for="(value, j) in items"
          :key="j"
          @click="onClickStyle(value.name)"
          v-bind:class="{
            'btn-sp-active': selectStyle.name === value.name,
          }"
          class="btn-sp-variant "
        >
          {{ value.name }}
        </div>
      </div>
    </div>

    <div class="sku-option">
      <p class="option-name my-1">Color: <span class="option-value">{{ selectColor.name }}</span> </p>
      <div
        v-for="(items, i) in _.chunk(selectStyle.colors, 10)"
        :key="i"
        class="flex flex-row"
      >
        <div
          v-for="(value, j) in items"
          :key="j"
          @click="onClickColor(value.name)"
        >
          <div
            class="flex items-center justify-center h-8 w-8 ml-1 mb-1 border rounded-full cursor-pointer border-dark-purple hover:border-yellow-800"
            v-bind:style="{ 'background-color': '#' + value.code }"
          >
            <svg v-if='selectColor.name === value.name'  xmlns="http://www.w3.org/2000/svg" :class="uiActiveColor(value.code)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMockupJson" class="sku-option">
      <p class="option-name my-1">Size: <span class="option-value">{{ selectSize.name }}</span> </p>
      <div
        v-for="(items, i) in _.chunk(selectStyle.sizes, 6)"
        :key="i"
        class="flex flex-row"
      >
        <div
          v-for="(value, j) in items"
          :key="j"
          @click="onClickSize(value.name)"
          v-bind:class="{
            'btn-sp-active': selectSize.name === value.name,
          }"
          class="btn-sp-variant"
        >
          {{ value.name }}
        </div>
      </div>
    </div>
    <div v-else class="sku-option">
      <p class="option-name my-1"> Size: <span class="option-value">{{ selectSize.name }}</span> </p>
      <div
        v-for="(items, i) in _.chunk(selectColor.sizes, 6)"
        :key="i"
        class="flex flex-row"
      >
        <div
          v-for="(value, j) in items"
          :key="j"
          @click="onClickSize(value.name)"
          v-bind:class="{
            'btn-sp-active' : selectSize.name === value.name,
          }"
          class="btn-sp-variant"
        >
          {{ value.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MOCKUP_JSON, OPTIMIZATION_JSON } from "@/common/Constants.js";
export default {
  props: {
    styles: {
      type: Array,
      default() {
        return [];
      },
    },
    initData: {
      type: Object,
      default() {
        return {};
      },
    },
    jsonData: {
      type: String,
      default() {
        return "";
      },
    }
  },
  data() {
    return {
      selectPrint: this.initData.selectPrint,
      selectStyle: this.initData.selectStyle,
      selectSize: this.initData.selectSize,
      selectColor: this.initData.selectColor
    };
  },
  computed: {
    isMockupJson() {
      return this.jsonData === MOCKUP_JSON;
    },
    isOptimizationJson() {
      return this.jsonData === OPTIMIZATION_JSON;
    },
  },
  methods: {
    uiActiveColor(code){
      if(code ==='F8FF75' || code ==='EEEDEC'){
        return "w-6 h-6 text-black"
      }
      return "w-6 h-6 text-white"
    },
    onClickPrint(name) {
      this.selectPrint = this._.find(this.selectStyle.print, (print) => {
        return print === name;
      });
      if (this.selectPrint) {
        this.$emit("onSelectPrint", this.selectPrint);
      }
    },
    onClickStyle(name) {
      this.selectStyle = this._.find(this.styles, (style) => {
        return style.name === name;
      });
      if (this.selectStyle) {
        const activeColor = this.selectColor;
        this.selectColor = this._.find(this.selectStyle.colors, (color) => {
          return color.name === activeColor.name;
        });
        if (this.selectColor === undefined) {
          this.selectColor = this.selectStyle.colors[0];
        }
        if (this.isOptimizationJson) {
          const activeSize = this.selectSize;
          this.selectSize = this._.find(this.selectColor.sizes, (size) => {
            return size.name === activeSize.name;
          });
          if (this.selectSize === undefined) {
            if (this.selectColor.sizes.length >= 3) {
              this.selectSize = this.selectColor.sizes[2];
            } else {
              this.selectSize = this.selectColor.sizes[0];
            }
          }
        } else {
          const activeSize = this.selectSize;
          this.selectSize = this._.find(this.selectStyle.sizes, (size) => {
            return size.name === activeSize.name;
          });
          if (this.selectSize === undefined) {
            if (this.selectStyle.sizes.length >= 3) {
              this.selectSize = this.selectStyle.sizes[2];
            } else {
              this.selectSize = this.selectStyle.sizes[0];
            }
          }
        }

        this.$emit("onChangeStyle", this.selectStyle);
        this.$emit("onSelectColor", this.selectColor);
        this.$emit("onSelectSize", this.selectSize);
      }
    },
    onClickColor(name) {
      this.selectColor = this._.find(this.selectStyle.colors, (color) => {
        return color.name === name;
      });
      if (this.selectColor) {
        this.$emit("onSelectColor", this.selectColor);
      }
    },
    onClickSize(name) {
      if (this.isOptimizationJson) {
        this.selectSize = this._.find(this.selectColor.sizes, (size) => {
          return size.name === name;
        });
      } else {
        this.selectSize = this._.find(this.selectStyle.sizes, (size) => {
          return size.name === name;
        });
      }
      if (this.selectSize) {
        this.$emit("onSelectSize", this.selectSize);
      }
    }
  },
};
</script>

