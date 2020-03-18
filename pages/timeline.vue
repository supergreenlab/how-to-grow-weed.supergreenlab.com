<!--
      Copyright (C) 2020  SuperGreenLab <towelie@supergreenlab.com>
      Author: Constantin Clauzel <constantin.clauzel@gmail.com>

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.

      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <http://www.gnu.org/licenses/>.
 -->

<template>
  <div :id="$style.container">
    <div :id='$style.header'>
      <div :id='$style.logo'>
        <Logo overtitle='how-to-grow-weed.' subtitle='.com'/>
      </div>
    </div>
    <div :id='$style.scroll'>
      <Tip v-for='t in tips' :tip='t' :key='t.name' />
      <infinite-loading @infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/logo.vue'
import Tip from '~/components/tip.vue'
import InfiniteLoading from 'vue-infinite-loading';

export default {
  components: { Logo, Tip, InfiniteLoading, },
  data() {
    return {
      from: 0,
    }
  },
  /*mounted() {
    this.$store.dispatch('loadTipPage', {from: 0, to: 10})
  },*/
  methods: {
    async onInfinite($state) {
      await new Promise((resolve, reject) => setTimeout(resolve, 500))
      const n = await this.$store.dispatch('loadTipPage', {from: this.$data.from, to: this.$data.from + 5})
      this.$data.from += 5
      if (n != 5) {
        $state.complete()
      } else {
        $state.loaded()
      }
    }
  },
  computed: {
    tips() {
      return this.$store.state.loadedPages.reduce((acc, p) => {
        acc.push(...p.tips)
        return acc
      }, []) || []
    }
  },
}
</script>

<style module lang=stylus>

#container
  display: flex
  margin: 0 auto
  height: 100vh
  display: flex
  flex-direction: column
  overflow-y: hidden

#header
  display: flex
  padding: 20pt
  height: 100pt
  border-bottom: 3px solid #dedede 

#logo
  font-size: 2em

#scroll
  flex: 1
  display: flex
  flex-direction: column
  overflow-y: auto
  height: calc(100vh-150pt)
  background-color: #fafafa

</style>
