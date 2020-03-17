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
    <div v-if='tip.loading' :id='$style.loading'>
      Loading..
    </div>
    <div v-else :id='$style.scroll'>
      <Article :tip='tip.tip' />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/logo.vue'
import Article from '~/components/article.vue'

export default {
  components: { Logo, Article, },
  mounted() {
    const { slug } = this.$route.params
    this.$store.dispatch('loadTip', { slug })
  },
  computed: {
    tip() {
      return this.$store.state.tip
    }
  },
}
</script>

<style module lang=stylus>

#container
  display: flex
  margin: 0 auto
  min-height: 100vh
  flex-direction: column
  overflow-y: hidden

#header
  display: flex
  padding: 20pt
  height: 100pt

#logo
  font-size: 1.5em

#loading
  display: flex
  flex: 1
  align-items: center
  justify-content: center
  font-weight: 900

#scroll
  flex: 1
  display: flex
  flex-direction: column
  width: 100%
  overflow-y: auto
  background-color: #fafafa

</style>
